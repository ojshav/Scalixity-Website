import os
import time
from fastapi import FastAPI, HTTPException, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Optional, Dict, Any
from langchain_groq import ChatGroq
from langchain_huggingface import HuggingFaceEmbeddings
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain.chains.combine_documents import create_stuff_documents_chain
from langchain_core.prompts import ChatPromptTemplate
from langchain.chains import create_retrieval_chain
from langchain_community.vectorstores import FAISS
from langchain_community.document_loaders import TextLoader
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Initialize FastAPI app
app = FastAPI(title="Scalixity Chatbot API", version="1.0.0")

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Adjust this in production to specific origins
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load API keys
os.environ['GROQ_API_KEY'] = os.getenv("GROQ_API_KEY")
groq_api_key = os.getenv("GROQ_API_KEY")

# Define request model
class ChatRequest(BaseModel):
    query: str
    user_id: Optional[str] = None

# Initialize embeddings and LLM
embeddings = HuggingFaceEmbeddings(model_name="all-MiniLM-L6-v2")
llm = ChatGroq(groq_api_key=groq_api_key, model_name="Llama3-8b-8192")

# Create prompt template
prompt = ChatPromptTemplate.from_template(
    """
    You are Scalixity's AI assistant. Your goal is to be helpful, accurate, and conversational when answering questions.
    
    Important guidelines:
    
    - Respond naturally as if you are part of the Scalixity team
    - Never mention "context," "documents," or that you're retrieving information
    - Speak directly and confidently about Scalixity's services and offerings
    - Keep responses concise and friendly
    - If information isn't available in the provided content, simply say "I don't have complete details on that specific question, but I'd be happy to connect you with someone from our team who can help"
    - Don't make up information about Scalixity's specific services or pricing
    
    <content>
    {context}
    </content>
    
    Question: {input}
    """
)

# Initialize vector store at app startup
vectorstore = None

def create_vector_embedding():
    try:
        # Load and process the text file
        loader = TextLoader("Services.txt")
        documents = loader.load()
        
        # Split text into chunks
        text_splitter = RecursiveCharacterTextSplitter(
            chunk_size=1000,
            chunk_overlap=200
        )
        texts = text_splitter.split_documents(documents)
        
        start_time = time.time()
        vectorstore = FAISS.from_documents(texts, embeddings)
        print(f"Vector store created in {time.time() - start_time:.2f} seconds")
        
        return vectorstore
    except Exception as e:
        print(f"Error creating vector store: {str(e)}")
        return None

@app.on_event("startup")
async def startup_event():
    global vectorstore
    vectorstore = create_vector_embedding()
    if not vectorstore:
        raise RuntimeError("Failed to initialize the knowledge base.")

@app.post("/chat", response_model=Dict[str, Any])
async def chat_endpoint(request: ChatRequest):
    global vectorstore
    
    if not vectorstore:
        raise HTTPException(status_code=500, detail="Knowledge base not initialized")
    
    # Create and execute the chain
    document_chain = create_stuff_documents_chain(llm, prompt)
    retriever = vectorstore.as_retriever()
    retrieval_chain = create_retrieval_chain(retriever, document_chain)

    try:
        start_time = time.time()
        response = retrieval_chain.invoke({"input": request.query})
        processing_time = time.time() - start_time

        return {
            "answer": response["answer"],
            "processing_time": f"{processing_time:.2f} seconds",
            "user_id": request.user_id
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error processing question: {str(e)}")

@app.get("/health")
async def health_check():
    return {"status": "healthy", "version": "1.0.0"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=5901)
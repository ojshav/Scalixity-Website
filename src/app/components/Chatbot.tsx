'use client'
import React, { useState, useRef, useEffect } from 'react';
import { FiSend, FiMessageSquare, FiX, FiChevronDown, FiHelpCircle, FiGrid, FiMail } from 'react-icons/fi';

// Define types for our data structures
type Industry = {
  id: string;
  name: string;
};

type Service = {
  id: string;
  name: string;
  industryId: string | null;
  url: string;
};

type MessageType = 'text' | 'dropdown' | 'service-info';
type DropdownData = {
  options: Array<{ id: string; name: string }>;
  selected?: string;
  type: 'industry' | 'service';
  items: Array<Industry | Service>;
};

// For service info data
type ServiceInfoData = {
  service: Service;
};

// Then use a union type for data
type Message = {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  type: MessageType;
  data?: DropdownData | ServiceInfoData;
};

type ContactInfo = {
  companyName: string;
  email: string;
  message: string;
};

type ServiceContactInfo = {
  companyName: string;
  email: string;
  industryName: string;
  serviceName: string;
};

// Define chat sections
type ChatSection = 'general' | 'services' | 'contact';

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [, setSelectedIndustry] = useState<string | null>(null);
  const [, setContactInfo] = useState<ContactInfo>({ companyName: '', email: '', message: '' });
  const [step, setStep] = useState<'idle' | 'company' | 'email' | 'message' | 'industry' | 'service' | 'complete'>('idle');
  const [services, setServices] = useState<Service[]>([]);
  const [, setIsLoading] = useState(false);
  const [activeSection, setActiveSection] = useState<ChatSection>('general');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [serviceContactInfo, setServiceContactInfo] = useState<ServiceContactInfo>({
    companyName: '',
    email: '',
    industryName: '',
    serviceName: ''
  });
  const [isInquirySubmitted, setIsInquirySubmitted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check for mobile device on mount and window resize
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkIfMobile();
    
    // Add event listener
    window.addEventListener('resize', checkIfMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  // Hardcoded industries
  const hardcodedIndustries: Industry[] = [
    { id: '1', name: 'Technology' },
    { id: '2', name: 'Healthcare' },
    { id: '3', name: 'Finance' },
    { id: '4', name: 'Education' },
    { id: '5', name: 'Manufacturing' }
  ];

  // Fetch services from API
  const fetchServices = async () => {
    setIsLoading(true);
    try {
      const servicesResponse = await fetch('http://kea.mywire.org:5000/api/services');
      const servicesData = await servicesResponse.json();
      setServices(servicesData);
      
      // Show service selection dropdown
      addBotMessage(
        "Please select a service you're interested in:",
        'dropdown',
        { items: servicesData, type: 'service', options: servicesData }
      );
      
    } catch (error) {
      console.error('Error fetching services:', error);
      addBotMessage("Sorry, I'm having trouble loading our services right now. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };


  const addMessage = (content: string, sender: 'user' | 'bot', type: MessageType = 'text', data?: DropdownData | ServiceInfoData) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      content,
      sender,
      type,
      data,
    };
    setMessages((prev) => [...prev, newMessage]);
  };

  const addUserMessage = (content: string) => {
    addMessage(content, 'user');
  };

  const addBotMessage = (content: string, type: MessageType = 'text', data?: DropdownData | ServiceInfoData) => {
    addMessage(content, 'bot', type, data);
  };

  useEffect(() => {
    scrollToBottom();
    
    if (isOpen && messages.length === 0) {
      // Initial welcome message
      addBotMessage(
        "👋 Hi there! I'm your virtual assistant. How can I help you today?\n\nYou can use the navigation menu below to switch between different sections.",
        'text'
      );
    }
  }, [messages, isOpen]);

  useEffect(() => {
    // Clear messages when switching sections
    setMessages([]);
    
    // Set appropriate initial message for each section
    if (activeSection === 'general') {
      addBotMessage("Ask me anything about our company, products, or general inquiries!");
      setStep('idle');
    } else if (activeSection === 'services') {
      addBotMessage("To recommend the best services, please provide your company name:");
      setStep('company');
    } else if (activeSection === 'contact') {
      addBotMessage(
        "Thank you for your interest in contacting us! You can reach us at:\n\n" +
        "Email: info@scalixity.com\n" +
        "Phone: +91 9424710030\n\n" +
        "Or you can visit our contact page for more options."
      );
      
      // Add contact button message after a short delay
      setTimeout(() => {
        addBotMessage(
          "Click the button below to go to our contact page:",
          'service-info',
          { 
            service: {
              id: 'contact-page',
              name: 'Contact Page',
              industryId: null,
              url: 'http://localhost:3000/contact'
            } 
          }
        );
      }, 500);
      
      setStep('complete');
    }
  }, [activeSection]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleServiceSelect = async (serviceId: string) => {
    const service = services.find(s => s.id === serviceId);
    if (service) {
      // First update the state with the new service name
      const updatedInfo = { 
        ...serviceContactInfo, 
        serviceName: service.name 
      };
      
      setServiceContactInfo(updatedInfo);
      addUserMessage(`Selected service: ${service.name}`);
      
      // Only submit if not already submitted
      if (!isInquirySubmitted) {
        setIsInquirySubmitted(true);
        await submitServiceInquiry(updatedInfo); // Await the submission to ensure it completes
      }
      
      setStep('complete');
      
      // Show service info after submission
      addBotMessage(
        `Thank you for your interest in ${service.name}, ${updatedInfo.companyName}! Here's more information about this service:`,
        'service-info',
        { service }
      );
    }
  };

  const submitServiceInquiry = async (updatedInfo: ServiceContactInfo) => {
    try {
      // Ensure all required fields are present before submission
      if (!updatedInfo.companyName || 
          !updatedInfo.email || 
          !updatedInfo.industryName || 
          !updatedInfo.serviceName) {
        console.error('Missing required fields for service inquiry', updatedInfo);
        addBotMessage("Please fill in all the required details to submit the service inquiry.");
        return false;
      }
      
      const response = await fetch('http://kea.mywire.org:5000/api/inquiries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          company_name: updatedInfo.companyName,
          email: updatedInfo.email,
          industry_name: updatedInfo.industryName,
          service_name: updatedInfo.serviceName,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Service inquiry submission failed:', errorData);
        throw new Error(errorData.error || 'Failed to save inquiry');
      }

      const responseData = await response.json();
      console.log('Service inquiry submitted successfully:', responseData);
      return true;
    } catch (error) {
      console.error('Error submitting service inquiry:', error);
      addBotMessage("Sorry, there was an issue saving your information. We'll still provide service information.");
      return false;
    }
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;
    
    addUserMessage(inputValue);
    const userInput = inputValue.trim();
    setInputValue('');

    if (activeSection === 'general') {
      handleGeneralQuery(userInput.toLowerCase());
    } else if (activeSection === 'contact') {
      handleContactFlow();
    } else if (activeSection === 'services') {
      handleServicesFlow(userInput);
    }
  };

  const handleGeneralQuery = async (userInput: string) => {
    setIsLoading(true);
    
    try {
      // Call the FastAPI endpoint
      const response = await fetch('http://localhost:5901/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: userInput,
          user_id: 'web-user', // You can generate or store a unique user ID if needed
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response from API');
      }

      const responseData = await response.json();
      
      setTimeout(() => {
        addBotMessage(responseData.answer);
      }, 500);
      
    } catch (error) {
      console.error('Error querying chatbot API:', error);
      setTimeout(() => {
        addBotMessage("I'm having trouble connecting to our knowledge base right now. Please try again later or select one of our sections below for more specific help.");
      }, 500);
    } finally {
      setIsLoading(false);
    }
  };

  const handleContactFlow = () => {
    // Simply acknowledge any user input in the contact section
    setTimeout(() => {
      addBotMessage(
        "Thank you for your message. For immediate assistance, please contact us directly at:\n\n" +
        "Email: info@scalixity.com\n" +
        "Phone: +91 94247 10030\n\n" +
        "Or use our contact page for more options."
      );
    }, 500);
  };

  const handleServicesFlow = (userInput: string) => {
    if (step === 'company') {
      setServiceContactInfo(prev => ({ ...prev, companyName: userInput }));
      setStep('email');
      setTimeout(() => {
        addBotMessage("Great! Now, please provide your email address:");
      }, 500);
    } else if (step === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(userInput)) {
        setTimeout(() => {
          addBotMessage("That doesn't look like a valid email address. Please try again:");
        }, 500);
        return;
      }
      
      setServiceContactInfo(prev => ({ ...prev, email: userInput }));
      setStep('industry');
      setTimeout(() => {
        addBotMessage("Thank you! Now, please select your industry:", 'dropdown', 
          { items: hardcodedIndustries, type: 'industry', options: hardcodedIndustries });
      }, 500);
    }
  };

  // Handle industry selection
  const handleIndustrySelect = (industryId: string) => {
    const industry = hardcodedIndustries.find(i => i.id === industryId);
    
    if (industry) {
      setServiceContactInfo(prev => ({ ...prev, industryName: industry.name }));
      setSelectedIndustry(industryId);
      setStep('service');
      
      addUserMessage(`Selected industry: ${industry.name}`);
      addBotMessage("Thank you for selecting your industry. Now, let's find a service for you...");
      fetchServices();
    }
  };

  const resetChat = () => {
    setMessages([]);
    setContactInfo({ companyName: '', email: '', message: '' });
    setServiceContactInfo({ companyName: '', email: '', industryName: '', serviceName: '' });
    setSelectedIndustry(null);
    setStep('idle');
    setIsInquirySubmitted(false);
    
    // Re-initialize based on active section
    if (activeSection === 'general') {
      addBotMessage("Ask me anything about our company, products, or general inquiries!");
    } else if (activeSection === 'services') {
      addBotMessage("To recommend the best services, please provide your company name:");
      setStep('company');
    } else if (activeSection === 'contact') {
      addBotMessage(
        "Thank you for your interest in contacting us! You can reach us at:\n\n" +
        "Email: info@scalixity.com\n" +
        "Phone: +91 9424710030\n\n" +
        "Or you can visit our contact page for more options."
      );
      
      // Add contact button message after a short delay
      setTimeout(() => {
        addBotMessage(
          "Click the button below to go to our contact page:",
          'service-info',
          { 
            service: {
              id: 'contact-page',
              name: 'Contact Page',
              industryId: null,
              url: 'http://kea.mywire.org:5700/contact'
            } 
          }
        );
      }, 500);
      
      setStep('complete');
    }
  };

  const isInputDisabled = () => {
    if (activeSection === 'services') {
      return step === 'industry' || step === 'service' || step === 'complete';
    }
    if (activeSection === 'contact') {
      return false; // Enable input in contact section to allow questions
    }
    return false;
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  // Calculate chat container dimensions based on screen size
  const getChatContainerStyles = () => {
    if (isMobile) {
      return {
        width: '100vw',
        height: '100vh',
        bottom: 0,
        right: 0,
        borderRadius: 0
      };
    } else {
      return {
        width: '24rem', // 384px (w-96)
        height: '500px',
        bottom: '4rem',
        right: 0,
        borderRadius: '0.5rem'
      };
    }
  };

  return (
    <div className={`fixed ${isMobile ? 'bottom-0 right-0' : 'bottom-5 right-5'} z-50`}>
      {/* Chat toggle button - hidden in mobile fullscreen mode when chat is open */}
      {!(isMobile && isOpen) && (
        <button
          onClick={toggleChat}
          className="p-4 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300"
        >
          {isOpen ? <FiX size={24} /> : <FiMessageSquare size={24} />}
        </button>
      )}

      {isOpen && (
        <div 
          className="absolute bg-white shadow-xl overflow-hidden flex flex-col"
          style={getChatContainerStyles()}
        >
          <div className="bg-blue-600 text-white p-4 flex justify-between items-center">
            <h3 className="font-semibold">Virtual Assistant</h3>
            <button 
              onClick={toggleChat}
              className="text-white hover:text-gray-200 transition-colors"
            >
              <FiX size={20} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.sender === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.sender === 'user'
                      ? 'bg-blue-600 text-white rounded-tr-none'
                      : 'bg-gray-100 text-gray-800 rounded-tl-none'
                  }`}
                >
                  {message.type === 'text' && <p className="whitespace-pre-line text-sm md:text-base">{message.content}</p>}
                  
                  {message.type === 'dropdown' && message.data && 'items' in message.data && (
                    <div className="space-y-2">
                      <p className="text-sm md:text-base">{message.content}</p>
                      <div className="relative mt-2 bg-white rounded-md shadow-sm">
                        <select
                          className="block w-full pl-3 pr-10 py-2 text-sm border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 rounded-md"
                          onChange={(e) => 
                            message.data && 'type' in message.data && message.data.type === 'industry' 
                              ? handleIndustrySelect(e.target.value) 
                              : handleServiceSelect(e.target.value)
                          }
                          defaultValue=""
                        >
                          <option value="" disabled>Select an option</option>
                          {message.data && 'items' in message.data && message.data.items.map((item) => (
                            <option key={item.id} value={item.id}>
                              {item.name}
                            </option>
                          ))}
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                          <FiChevronDown className="h-4 w-4 text-gray-400" />
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {message.type === 'service-info' && message.data && 'service' in message.data && (
                    <div className="space-y-2">
                      <p className="text-sm md:text-base">{message.content}</p>
                      <a
                        href={message.data.service.url}
                        className="inline-block mt-2 bg-blue-500 text-white px-3 py-1 md:px-4 md:py-2 rounded-md hover:bg-blue-600 transition-colors text-sm md:text-base"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {message.data.service.id === 'contact-page' ? 'Go to Contact Page' : 'Learn more'}
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className="border-t p-3 md:p-4 bg-gray-50">
            <div className="flex items-center">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder={
                  activeSection === 'general' ? "Ask me anything..." :
                  activeSection === 'services' && step === 'company' ? "Enter your company name..." :
                  activeSection === 'services' && step === 'email' ? "Enter your email address..." :
                  activeSection === 'contact' ? "Ask about contacting us..." : 
                  "Type your message..."
                }
                disabled={isInputDisabled()}
                className="flex-1 p-2 text-sm md:text-base border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100 disabled:text-gray-400"
              />
              <button
                onClick={handleSendMessage}
                disabled={isInputDisabled()}
                className="bg-blue-600 text-white p-2 rounded-r-md hover:bg-blue-700 transition-colors disabled:bg-gray-400"
              >
                <FiSend size={20} />
              </button>
            </div>
            
            {/* Section Navigation */}
            <div className="mt-3 border-t pt-2 grid grid-cols-3 gap-1 md:gap-2">
              <button
                onClick={() => setActiveSection('general')}
                className={`flex flex-col items-center justify-center p-1 md:p-2 rounded-md transition-colors ${
                  activeSection === 'general' ? 'bg-blue-100 text-blue-700' : 'hover:bg-gray-100'
                }`}
              >
                <FiHelpCircle size={isMobile ? 16 : 20} />
                <span className="text-xs mt-1">General</span>
              </button>
              <button
                onClick={() => setActiveSection('services')}
                className={`flex flex-col items-center justify-center p-1 md:p-2 rounded-md transition-colors ${
                  activeSection === 'services' ? 'bg-blue-100 text-blue-700' : 'hover:bg-gray-100'
                }`}
              >
                <FiGrid size={isMobile ? 16 : 20} />
                <span className="text-xs mt-1">Services</span>
              </button>
              <button
                onClick={() => setActiveSection('contact')}
                className={`flex flex-col items-center justify-center p-1 md:p-2 rounded-md transition-colors ${
                  activeSection === 'contact' ? 'bg-blue-100 text-blue-700' : 'hover:bg-gray-100'
                }`}
              >
                <FiMail size={isMobile ? 16 : 20} />
                <span className="text-xs mt-1">Contact</span>
              </button>
            </div>
            
            {/* Reset button */}
            <div className="mt-2 text-center">
              <button
                onClick={resetChat}
                className="text-blue-600 hover:text-blue-800 text-xs md:text-sm"
              >
                Reset conversation
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
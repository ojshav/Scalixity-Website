import Link from 'next/link'
import Image from 'next/image'

const blogPosts = [
  {
    title: "The Future of Generative AI in Business",
    excerpt: "Explore how generative AI is reshaping industries and creating new opportunities for innovation.",
    image: "/images/blog-generative-ai.jpg",
    category: "Artificial Intelligence",
    date: "May 15, 2023",
    link: "/blog/future-of-generative-ai"
  },
  {
    title: "Blockchain in Supply Chain: A Game Changer",
    excerpt: "Discover how blockchain technology is revolutionizing supply chain management and increasing transparency.",
    image: "/images/blog-blockchain-supply-chain.jpg",
    category: "Blockchain",
    date: "June 2, 2023",
    link: "/blog/blockchain-in-supply-chain"
  },
  {
    title: "AI-Driven Predictive Maintenance in Manufacturing",
    excerpt: "Learn how AI is transforming equipment maintenance, reducing downtime, and cutting costs in the manufacturing sector.",
    image: "/images/blog-predictive-maintenance.jpg",
    category: "AI in Manufacturing",
    date: "June 20, 2023",
    link: "/blog/ai-predictive-maintenance"
  }
]

export function BlogPosts() {
  return (
    <section className="bg-[#080B16] py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Latest from Our Blog</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Stay updated with the latest trends and insights in AI and blockchain technology
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Link key={index} href={post.link} className="block group">
              <div className="bg-[#1A1B26] rounded-xl overflow-hidden transition-all duration-300 group-hover:shadow-xl">
                <div className="relative h-48">
                  <Image src={post.image} alt={post.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-purple-500 text-sm">{post.category}</span>
                    <span className="text-gray-400 text-sm">{post.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-purple-500">{post.title}</h3>
                  <p className="text-gray-400">{post.excerpt}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}


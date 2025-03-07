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
    <section className="bg-[#F3F1EB] py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Latest Insights & Articles
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Explore cutting-edge AI and blockchain topics, handpicked for you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Highlighted Main Post */}
          <Link href={blogPosts[0].link} className="block group col-span-2 md:col-span-1">
            <div className="bg-[#A8B2E7] border border-black rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300">
              <div className="relative h-96 w-full">
                <Image src={blogPosts[0].image} alt={blogPosts[0].title} layout="fill" className="object-cover w-full h-full" />
              </div>
              <div className="p-8">
                <span className="text-gray-700 text-sm mb-2 block">{blogPosts[0].category}</span>
                <h3 className="text-3xl font-bold text-black mb-4 group-hover:text-gray-700">
                  {blogPosts[0].title}
                </h3>
                <p className="text-gray-900">{blogPosts[0].excerpt}</p>
                <span className="text-gray-600 text-sm mt-4 block">{blogPosts[0].date}</span>
              </div>
            </div>
          </Link>

          {/* Smaller Grid Posts */}
          <div className="grid gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <Link key={index} href={post.link} className="block group">
                <div className="bg-[#A8B2E7] border border-black rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="relative h-52 w-full">
                    <Image src={post.image} alt={post.title} layout="fill" className="object-cover w-full h-full" />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-gray-700 text-sm">{post.category}</span>
                      <span className="text-gray-600 text-sm">{post.date}</span>
                    </div>
                    <h3 className="text-xl font-bold text-black mb-2 group-hover:text-gray-700">
                      {post.title}
                    </h3>
                    <p className="text-gray-900 text-sm">{post.excerpt}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

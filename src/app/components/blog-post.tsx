import Link from 'next/link'

interface BlogPostProps {
  title: string
  excerpt: string
  slug: string
  date: string
}

export function BlogPost({ title, excerpt, slug, date }: BlogPostProps) {
  return (
    <Link href={`/blog/${slug}`} className="block">
      <div className="bg-[#1A1B26] p-6 rounded-lg h-full flex flex-col">
        <h2 className="text-xl font-semibold text-white mb-4">{title}</h2>
        <p className="text-gray-400 mb-4 flex-grow">{excerpt}</p>
        <div className="flex justify-between items-center text-sm text-gray-500">
          <span>{date}</span>
          <span className="text-purple-500 hover:text-purple-400">Read more</span>
        </div>
      </div>
    </Link>
  )
}


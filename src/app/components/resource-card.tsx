import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface ResourceCardProps {
  title: string
  description: string
  type: string
  link: string
}

export function ResourceCard({ title, description, type, link }: ResourceCardProps) {
  return (
    <div className="bg-[#F3F1EB] p-6 rounded-lg h-full flex flex-col border-2 border-black">
      <h2 className="text-xl font-semibold text-black mb-2">{title}</h2>
      <p className="text-black mb-4 flex-grow">{description}</p>
      <div className="flex justify-between items-center">
        <span className="text-sm text-black">{type}</span>
        <Link href={link} className="text-black hover:text-purple-400 inline-flex items-center">
          Access resource <ArrowRight className="ml-2 h-4 w-4 text-black" />
        </Link>
      </div>
    </div>
  )
}

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
    <div className="bg-[#1A1B26] p-6 rounded-lg h-full flex flex-col">
      <h2 className="text-xl font-semibold text-white mb-2">{title}</h2>
      <p className="text-gray-400 mb-4 flex-grow">{description}</p>
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-500">{type}</span>
        <Link href={link} className="text-purple-500 hover:text-purple-400 inline-flex items-center">
          Access resource <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}


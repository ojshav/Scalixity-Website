import Image from 'next/image'

interface TeamMemberProps {
  name: string
  role: string
  image: string
}

export function TeamMember({ name, role, image }: TeamMemberProps) {
  return (
    <div className="bg-[#1A1B26] p-6 rounded-lg text-center">
      <Image
        src={image}
        alt={name}
        width={200}
        height={200}
        className="rounded-full mx-auto mb-4"
      />
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <p className="text-gray-400">{role}</p>
    </div>
  )
}


type TestimonialCardProps = {
  name: string
  date: string
  avatar: string
  message: string
  stars: string
}

const TestimonialCard = ({ name, date, avatar, message, stars }: TestimonialCardProps) => {
  return (
    <div className="bg-zinc-900 border border-white rounded-xl shadow-lg flex flex-col p-6 space-y-4 group hover:-translate-y-2.5 transition-transform duration-300">
      <div className="flex items-center gap-3">
        <img className="w-10 h-10 rounded-full" src={avatar} alt={name} />
        <div className="space-y-1">
          <p className="text-base text-white">{name}</p>
          <span className="text-sm text-white font-bold">{date}</span>
        </div>
      </div>
      <p className="text-white text-center group-hover:text-red-400 transition-colors duration-300">
        {message}
      </p>
      <img className="w-24 h-6 self-center" src={stars} alt="Estrelas" />
    </div>
  )
}

export default TestimonialCard
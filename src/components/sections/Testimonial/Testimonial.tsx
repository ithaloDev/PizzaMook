import TestimonialCard from './TestimonialCard'
import { testimonials } from './TestimonialDate'
import { motion } from "framer-motion"

const Testimonial = () => {
  return (
    <section className="py-16" id="testimonial">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-10">
        Depoimentos
      </h2>
      <motion.div 
        initial={{ opacity: 0, y: -60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </motion.div>
    </section>
  )
}

export default Testimonial
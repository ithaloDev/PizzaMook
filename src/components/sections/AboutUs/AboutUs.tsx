import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import aboutusImage from '@/assets/images/about/About.webp'

const AboutUs = () => {
  return (
    <section id="aboutus" className="py-16 bg-black">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-10">Sobre nós</h2>
      
      <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto gap-10 px-6">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="flex-1 flex justify-center"
        >
          <img
            src={aboutusImage}
            alt="Sobre nós"
            className="w-full max-w-md rounded-xl shadow-2xl object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          viewport={{ once: true }}
          className="flex-1 flex flex-col items-start gap-4"
        >
          <h3 className="text-2xl md:text-4xl font-semibold text-red-400">Quem somos nós</h3>
          <p className="text-white text-base md:text-lg selection:text-red-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis earum alias voluptates libero sunt aperiam provident, quibusdam optio atque natus perferendis qui enim dolore debitis inventore et voluptatibus recusandae at nemo modi unde vel! Aliquam nemo nostrum architecto error impedit.
          </p>
          <Button size="md">Contact Us</Button>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutUs

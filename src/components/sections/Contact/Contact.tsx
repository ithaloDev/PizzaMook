import { Facebook, Github, Linkedin } from 'lucide-react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'

const Contact = () => {
  return (
    <main className="w-full min-h-screen flex items-center justify-center bg-black" id="contact">
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl px-6 py-12 gap-10">
        {/* Texto animado */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="flex-1 flex flex-col items-start gap-6"
        >
          <h1 className="text-white text-5xl md:text-6xl font-bold select-none">
            Pizza<span className="text-red-600">Mook</span>
          </h1>

          <p className="text-white text-base md:text-lg max-w-md selection:bg-red-500">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, culpa sed illo porro quam quidem harum non amet minus nisi, recusandae exercitationem fugit placeat quos explicabo omnis excepturi architecto illum!
          </p>

          <Button size="lg">Contact Us</Button>

          <div className="flex items-center gap-4 mt-4">
            <a href="#" aria-label="Facebook" className="text-white hover:text-red-500 transition-colors">
              <Facebook size={28} />
            </a>
            <a href="#" aria-label="Github" className="text-white hover:text-red-500 transition-colors">
              <Github size={28} />
            </a>
            <a href="#" aria-label="Linkedin" className="text-white hover:text-red-500 transition-colors">
              <Linkedin size={28} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          viewport={{ once: true }}
          className="flex-1 flex flex-col items-center"
        >
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 3000 }}
            modules={[Autoplay, Pagination]}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            className="w-full max-w-md lg:max-w-lg"
          >
            <SwiperSlide>
              <img
                src={"/src/assets/images/contact/Contact-1.webp"}
                alt="Pizza deliciosa 1"
                className="rounded-xl shadow-2xl object-cover w-full h-auto"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={"/src/assets/images/contact/Contact-2.webp"}
                alt="Pizza deliciosa 2"
                className="rounded-xl shadow-2xl object-cover w-full h-auto"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={"/src/assets/images/contact/Contact-3.webp"}
                alt="Pizza deliciosa 3"
                className="rounded-xl shadow-2xl object-cover w-full h-auto"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={"/src/assets/images/contact/Contact-4.png"}
                alt="Pizza deliciosa 3"
                className="rounded-xl shadow-2xl object-cover w-full h-auto"
              />
            </SwiperSlide>
          </Swiper>
        </motion.div>
      </div>
    </main>
  )
}

export default Contact
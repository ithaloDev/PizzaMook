import Container from "@/components/layout/Container";
import Footer from "@/components/layout/Footer";
import Contact from "@/components/sections/Contact/Contact";
import MenuPizza from "@/components/sections/MenuPizza/MenuPizza";
import Navbar from "@/components/layout/Navbar";
import Testimonial from "@/components/sections/Testimonial/Testimonial";
import AboutUs from "@/components/sections/AboutUs/AboutUs";

function App() {
  return (
    <>
      <Container>
        <Navbar />
        <Contact />
        <AboutUs />
        <MenuPizza />
        <Testimonial />
      </Container>
      <Footer />
    </>
  )
}

export default App;
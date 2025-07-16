import { CardMenu } from "./CardMenu";
import { motion } from "framer-motion";

const pizzas = [
  {
    id: 1,
    nome: "Pizza de Calabresa",
    preco: "29,99",
    imagem: "pizza-calabresa.webp",
  },
  {
    id: 2,
    nome: "Pizza de Queijo",
    preco: "39,99",
    imagem: "pizza-queijo.webp",
  },
  {
    id: 3,
    nome: "Pizza Vegetariana",
    preco: "49,99",
    imagem: "pizza-vegetariana.webp",
  },
  {
    id: 2,
    nome: "Pizza de Pepperoni",
    preco: "59,99",
    imagem: "pizza-pepperoni.webp",
  },
];

const MenuPizza = () => {
  return (
    <section id="menu" className="py-16 bg-black">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-10">
        Menu
      </h2>
      <motion.div 
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
        {pizzas.map((pizza) => (
          <CardMenu
            key={pizza.id}
            nome={pizza.nome}
            preco={pizza.preco}
            imagem={pizza.imagem}
          />
        ))}
      </motion.div>
    </section>
  );
};

export default MenuPizza;

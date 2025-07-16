import { Button } from "@/components/ui/Button";

interface CardMenuProps {
  nome: string;
  preco: string;
  imagem: string;
}

export const CardMenu = ({ nome, preco, imagem }: CardMenuProps) => {
  return (
    <div className="group transition-transform duration-300 hover:-translate-y-2.5 border-2 border-white rounded-xl shadow-lg flex flex-col items-center p-6 bg-zinc-900">
      <img
        src={`/src/assets/images/menu/${imagem}`}
        alt={nome}
        className="w-40 h-40 object-cover rounded-lg mb-4"
      />
      <h3 className="transition-colors duration-300 group-hover:text-red-400 text-xl font-semibold md:text-base text-white mb-2">
        {nome}
      </h3>
      <p className="transition-colors duration-300 group-hover:text-white text-lg text-red-400 font-bold mb-4">
        R$ {preco}
      </p>
      <Button size="full">Comprar</Button>
    </div>
  );
};

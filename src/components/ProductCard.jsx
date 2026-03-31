import { Link } from 'react-router-dom';

export default function ProductCard({ id, name, category, price, discountPrice, image }) {
  return (
    <Link to={`/produto/${id}`} className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition flex flex-col cursor-pointer">
      {/* Área da Imagem com fundo cinza */}
      <div className="bg-gray-100 h-64 w-full rounded-md flex items-center justify-center mb-4 overflow-hidden relative">
        {/* Etiqueta de Desconto (Só aparece se tiver discountPrice) */}
        {discountPrice && (
          <span className="absolute top-3 left-3 bg-[#E7FF86] text-black text-xs font-bold px-3 py-1 rounded-full">
            30% OFF
          </span>
        )}
        <img src={image} alt={name} className="object-contain h-full w-full " />
      </div>
      
      {/* Textos do Card */}
      <p className="text-xs text-gray-400 font-bold tracking-widest uppercase mb-1">{category}</p>
      <h3 className="text-lg text-gray-800 font-normal mb-2 leading-tight">{name}</h3>
      
      {/* Preços */}
      <div className="mt-auto flex items-end gap-2">
        {discountPrice ? (
          <>
            <span className="text-gray-400 line-through text-sm">R$ {price}</span>
            <span className="text-xl font-bold text-gray-800">R$ {discountPrice}</span>
          </>
        ) : (
          <span className="text-xl font-bold text-gray-800">R$ {price}</span>
        )}
      </div>
    </Link>
  );
}
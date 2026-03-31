import { useState } from 'react';
import { useParams } from 'react-router-dom';

export default function ProductView() {
  // Pega o ID do produto lá da URL (ex: /produto/1)
  const { id } = useParams();

  // Estados para guardar qual tamanho e cor o usuário clicou
  const [selectedSize, setSelectedSize] = useState('39');
  const [selectedColor, setSelectedColor] = useState('#00eaff');

  // Dados simulados do produto detalhado
  const product = {
    name: "Tênis Nike Revolution 6 Next Nature Masculino",
    category: "Casual | Nike | REF:38416711",
    price: "399,90",
    discountPrice: "219,00",
    description: "Ideal para os amantes do esporte, o Tênis Nike Revolution 6 possui um design moderno, leve e super confortável. Perfeito para corridas leves ou para o dia a dia, garantindo o máximo de flexibilidade e estilo.",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800",
    sizes: ["39", "40", "41", "42", "43"],
    colors: ["#00eaff", "#ff007f", "#333333", "#a020f0"]
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 md:px-8">
      {/* Navegação de Migalhas (Breadcrumb) */}
      <div className="max-w-7xl mx-auto mb-6 text-sm text-gray-500">
        Home / Produtos / Tênis / Nike / <span className="font-bold text-gray-800">Tênis Nike Revolution 6</span>
      </div>

      <div className="max-w-7xl mx-auto bg-white p-6 md:p-12 rounded-xl shadow-sm flex flex-col md:flex-row gap-12">
        
        {/* Coluna Esquerda: Galeria de Imagens */}
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          {/* Imagem Principal */}
          <div className="bg-blue-50 h-96 rounded-xl flex items-center justify-center p-8">
            <img src={product.image} alt={product.name} className="object-contain h-full drop-shadow-xl" />
          </div>
          {/* Miniaturas */}
          <div className="flex gap-4 h-24">
            <div className="bg-blue-50 w-1/4 rounded-lg border-2 border-pink-600 flex items-center justify-center cursor-pointer p-2">
              <img src={product.image} alt="Thumb 1" className="object-contain h-full" />
            </div>
            <div className="bg-red-50 w-1/4 rounded-lg flex items-center justify-center cursor-pointer p-2">
              <img src={product.image} alt="Thumb 2" className="object-contain h-full " />
            </div>
            <div className="bg-gray-100 w-1/4 rounded-lg flex items-center justify-center cursor-pointer p-2">
              <img src={product.image} alt="Thumb 3" className="object-contain h-full " />
            </div>
            <div className="bg-yellow-50 w-1/4 rounded-lg flex items-center justify-center cursor-pointer p-2">
              <img src={product.image} alt="Thumb 4" className="object-contain h-full " />
            </div>
          </div>
        </div>

        {/* Coluna Direita: Detalhes da Compra */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h1 className="text-3xl font-extrabold text-gray-900 mb-2 leading-tight">{product.name}</h1>
          <p className="text-xs text-gray-500 font-bold mb-4">{product.category}</p>
          
          {/* Avaliações */}
          <div className="flex items-center gap-2 mb-6">
            <span className="text-yellow-400 text-sm">★★★★★</span>
            <span className="text-gray-400 text-xs">(90 avaliações)</span>
          </div>

          {/* Preço */}
          <div className="flex items-end gap-3 mb-6">
            <span className="text-3xl font-bold text-gray-800">R$ {product.discountPrice}</span>
            <span className="text-gray-400 line-through text-lg">R$ {product.price}</span>
          </div>

          {/* Descrição */}
          <div className="mb-8">
            <h3 className="text-gray-500 font-bold mb-2">Descrição do produto</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{product.description}</p>
          </div>

          {/* Seleção de Tamanho */}
          <div className="mb-6">
            <h3 className="text-gray-500 font-bold mb-3">Tamanho</h3>
            <div className="flex gap-3">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`w-10 h-10 rounded text-sm font-bold border transition
                    ${selectedSize === size ? 'bg-pink-600 text-white border-pink-600' : 'bg-white text-gray-600 border-gray-300 hover:border-pink-600'}`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Seleção de Cor */}
          <div className="mb-8">
            <h3 className="text-gray-500 font-bold mb-3">Tamanho</h3>
            <div className="flex gap-3">
              {product.colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`w-8 h-8 rounded-full border-2 transition
                    ${selectedColor === color ? 'border-pink-600 scale-110' : 'border-transparent'}`}
                  style={{ backgroundColor: color }}
                ></button>
              ))}
            </div>
          </div>

          {/* Botão de Comprar */}
          <button className="bg-[#E7FF86] text-black font-extrabold text-lg py-4 rounded-lg shadow-md hover:bg-[#d6f06a] transition w-full md:w-2/3">
            COMPRAR
          </button>
        </div>

      </div>
    </div>
  );
}
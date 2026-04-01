import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../services/api';
import { useCart } from '../context/CartContext';

export default function ProductView() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');

  useEffect(() => {
    const fetchProduct = async () => {
      const data = await getProductById(id);
      if (data) {
        setProduct(data);
        const sizeOption = data.options?.find(opt => opt.title.toLowerCase() === 'tamanho');
        if (sizeOption) setSelectedSize(sizeOption.values[0]);
        
        const colorOption = data.options?.find(opt => opt.title.toLowerCase() === 'cor');
        if (colorOption) setSelectedColor(colorOption.values[0]);
      }
      setLoading(false);
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-pink-600"></div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h2 className="text-2xl font-bold">Produto não encontrado</h2>
      </div>
    );
  }

  const sizes = product.options?.find(opt => opt.title.toLowerCase() === 'tamanho')?.values || [];
  const colors = product.options?.find(opt => opt.title.toLowerCase() === 'cor')?.values || [];
  const mainImage = product.images?.[0]?.content || "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800";

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto mb-6 text-sm text-gray-500">
        Home / Produtos / <span className="font-bold text-gray-800">{product.name}</span>
      </div>

      <div className="max-w-7xl mx-auto bg-white p-6 md:p-12 rounded-xl shadow-sm flex flex-col md:flex-row gap-12">
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          <div className="bg-blue-50 h-96 rounded-xl flex items-center justify-center p-8">
            <img src={mainImage} alt={product.name} className="object-contain h-full drop-shadow-xl" />
          </div>
          <div className="flex gap-4 h-24">
            {product.images?.map((img, index) => (
              <div key={img.id} className={`bg-gray-100 w-1/4 rounded-lg flex items-center justify-center cursor-pointer p-2 ${index === 0 ? 'border-2 border-pink-600' : ''}`}>
                <img src={img.content} alt={`Thumb ${index + 1}`} className="object-contain h-full" />
              </div>
            ))}
          </div>
        </div>

        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h1 className="text-3xl font-extrabold text-gray-900 mb-2 leading-tight">{product.name}</h1>
          <p className="text-xs text-gray-500 font-bold mb-4">CATEGORIA: {product.category_names?.join(', ')}</p>
          
          <div className="flex items-center gap-2 mb-6">
            <span className="text-yellow-400 text-sm">★★★★★</span>
            <span className="text-gray-400 text-xs">(90 avaliações)</span>
          </div>

          <div className="flex items-end gap-3 mb-6">
            <span className="text-3xl font-bold text-gray-800">R$ {product.price_with_discount ? product.price_with_discount.toFixed(2).replace('.', ',') : product.price.toFixed(2).replace('.', ',')}</span>
            {product.price_with_discount && (
              <span className="text-gray-400 line-through text-lg">R$ {product.price.toFixed(2).replace('.', ',')}</span>
            )}
          </div>

          <div className="mb-8">
            <h3 className="text-gray-500 font-bold mb-2">Descrição do produto</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{product.description}</p>
          </div>

          {sizes.length > 0 && (
            <div className="mb-6">
              <h3 className="text-gray-500 font-bold mb-3">Tamanho</h3>
              <div className="flex gap-3">
                {sizes.map((size) => (
                  <button key={size} onClick={() => setSelectedSize(size)} className={`w-10 h-10 rounded text-sm font-bold border transition ${selectedSize === size ? 'bg-pink-600 text-white border-pink-600' : 'bg-white text-gray-600 border-gray-300 hover:border-pink-600'}`}>
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          {colors.length > 0 && (
            <div className="mb-8">
              <h3 className="text-gray-500 font-bold mb-3">Cor</h3>
              <div className="flex gap-3">
                {colors.map((color) => (
                  <button key={color} onClick={() => setSelectedColor(color)} className={`w-8 h-8 rounded-full border-2 transition ${selectedColor === color ? 'border-pink-600 scale-110' : 'border-transparent'}`} style={{ backgroundColor: color }}></button>
                ))}
              </div>
            </div>
          )}

          <button 
            onClick={() => {
              addToCart(product);
              alert('Produto adicionado ao carrinho!');
            }}
            className="bg-[#E7FF86] text-black font-extrabold text-lg py-4 rounded-lg shadow-md hover:bg-[#d6f06a] transition w-full md:w-2/3"
          >
            COMPRAR
          </button>
        </div>
      </div>
    </div>
  );
}

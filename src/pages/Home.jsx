import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

export default function Home() {
  const trendingProducts = [
  { 
    id: 1, 
    name: "Tênis Nike Revolution 6", 
    category: "Tênis", 
    price: "399,90", 
    discountPrice: "299,90", 
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=600" 
  },
  { 
    id: 2, 
    name: "Tênis Adidas Sport", 
    category: "Tênis", 
    price: "299,90", 
    discountPrice: "199,90", 
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=600" 
  },
  { 
    id: 3, 
    name: "Sandália Casual Strike", 
    category: "Sandálias", 
    price: "89,90", 
    discountPrice: null, 
    image: "https://images.unsplash.com/photo-1603808033192-082d6919d3e1?q=80&w=600" 
  },
  { 
    id: 4, 
    name: "Tênis Puma Street", 
    category: "Tênis", 
    price: "349,90", 
    discountPrice: "249,90", 
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=600" 
  },
];
  return (
    <div className="bg-gray-50 pb-12">
      {/* 1. Hero Banner */}
      <section className="bg-gray-100 py-16 px-8 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto rounded-b-xl mb-12">
        <div className="md:w-1/2">
          <p className="text-pink-600 font-bold mb-2 tracking-wide">Melhores ofertas personalizadas</p>
          <h1 className="text-5xl font-extrabold text-gray-900 mb-6 leading-tight">Queima de <br/> estoque Nike 🔥</h1>
          <p className="text-gray-600 mb-8 text-lg">Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.</p>
          <Link to="/produtos" className="bg-pink-600 text-white px-10 py-4 rounded-lg font-bold hover:bg-pink-700 transition shadow-lg inline-block">
            Ver Ofertas
          </Link>
        </div>
        <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
          <img 
            src="https://raw.githubusercontent.com/digitalcollegeit/digital-store-turma-01/main/assets/white-sneakers.png" 
            alt="Tênis em oferta" 
            className="w-full max-w-md drop-shadow-2xl rotate-[-15deg]"
          />
        </div>
      </section>

      {/* 2. Vitrine: Produtos em Alta */}
      <section className="px-8 max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800">Produtos em alta</h2>
          <Link to="/produtos" className="text-pink-600 font-bold hover:underline flex items-center gap-2">
            Ver todos <span>➔</span>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trendingProducts.map(product => (
            <ProductCard 
              key={product.id} 
              {...product}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
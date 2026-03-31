import ProductCard from '../components/ProductCard';

export default function ProductList() {
  // Array com mais produtos para encher a nossa grade
  const products = [
  { id: 1, name: "Nike Revolution 6", category: "Tênis", price: "399,90", discountPrice: "299,90", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=600" },
  { id: 2, name: "Adidas Coreracer", category: "Tênis", price: "299,90", discountPrice: "199,90", image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=600" },
  { id: 3, name: "Sandália Rider Strike", category: "Sandálias", price: "89,90", discountPrice: null, image: "https://images.unsplash.com/photo-1603808033192-082d6919d3e1?q=80&w=600" },
  { id: 4, name: "Puma Shuffle High", category: "Tênis", price: "349,90", discountPrice: "249,90", image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=600" },
  { id: 5, name: "Vans Old Skool Classic", category: "Tênis", price: "399,90", discountPrice: null, image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=600" },
  { id: 6, name: "Converse All Star Low", category: "Tênis", price: "259,90", discountPrice: null, image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=600" },
]; 
 return (
    <div className="bg-gray-50 min-h-screen py-8 px-4 md:px-8 max-w-7xl mx-auto">
      
      {/* Topo da Listagem: Quantidade e Ordenação */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <p className="text-gray-800 font-bold">
          Resultados para "Tênis" - <span className="text-gray-500 font-normal">{products.length} produtos</span>
        </p>
        
        {/* Caixa de Ordenação */}
        <div className="flex items-center gap-2 border border-gray-300 px-4 py-2 rounded-lg bg-white">
          <span className="text-gray-600 text-sm font-bold">Ordenar por:</span>
          <select className="bg-transparent text-sm focus:outline-none cursor-pointer">
            <option>Mais relevantes</option>
            <option>Menor preço</option>
            <option>Maior preço</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        
        {/* Coluna Esquerda: Filtros (Sidebar) */}
        <aside className="w-full md:w-1/4 bg-white p-6 rounded-lg shadow-sm h-fit">
          <h3 className="font-bold text-gray-800 border-b pb-4 mb-4">Filtrar por</h3>
          
          {/* Filtro Marca */}
          <div className="mb-6">
            <h4 className="font-bold text-sm text-gray-700 mb-3">Marca</h4>
            <div className="space-y-2">
              <label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" className="accent-pink-600 w-4 h-4" /> Adidas</label>
              <label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" className="accent-pink-600 w-4 h-4" /> Nike</label>
              <label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" className="accent-pink-600 w-4 h-4" /> Puma</label>
            </div>
          </div>

          {/* Filtro Categoria */}
          <div className="mb-6">
            <h4 className="font-bold text-sm text-gray-700 mb-3">Categoria</h4>
            <div className="space-y-2">
              <label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" className="accent-pink-600 w-4 h-4" /> Esporte e lazer</label>
              <label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" className="accent-pink-600 w-4 h-4" /> Casual</label>
              <label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" className="accent-pink-600 w-4 h-4" /> Utilitário</label>
            </div>
          </div>

          {/* Filtro Gênero */}
          <div className="mb-6">
            <h4 className="font-bold text-sm text-gray-700 mb-3">Gênero</h4>
            <div className="space-y-2">
              <label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" className="accent-pink-600 w-4 h-4" /> Masculino</label>
              <label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" className="accent-pink-600 w-4 h-4" /> Feminino</label>
              <label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" className="accent-pink-600 w-4 h-4" /> Unisex</label>
            </div>
          </div>
        </aside>

        {/* Coluna Direita: Grade de Produtos */}
        <main className="w-full md:w-3/4">
          {/* Veja como reaproveitamos o Componente ProductCard facilmente! */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map(product => (
              <ProductCard 
                key={product.id} 
                id={product.id}
                name={product.name}
                category={product.category}
                price={product.price}
                discountPrice={product.discountPrice}
                image={product.image}
              />
            ))}
          </div>
        </main>
        
      </div>
    </div>
  );
}
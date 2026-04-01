import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { getProducts, getCategories } from '../services/api';

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchTerm = queryParams.get('busca') || '';

  useEffect(() => {
    const fetchInitialData = async () => {
      const cats = await getCategories();
      setCategories(cats);
    };
    fetchInitialData();
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const data = await getProducts({ 
        match: searchTerm, 
        category_ids: selectedCategories.join(',') 
      });
      const productsList = Array.isArray(data) ? data : data.data || [];
      
      const formattedProducts = productsList.map(p => ({
        id: p.id,
        name: p.name,
        category: p.category_names?.[0] || "Geral",
        price: p.price.toFixed(2).replace('.', ','),
        discountPrice: p.price_with_discount ? p.price_with_discount.toFixed(2).replace('.', ',') : null,
        image: p.images?.[0]?.content || "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=600"
      }));

      setProducts(formattedProducts);
      setLoading(false);
    };

    fetchProducts();
  }, [searchTerm, selectedCategories]);

  const handleCategoryChange = (id) => {
    setSelectedCategories(prev => 
      prev.includes(id) ? prev.filter(c => c !== id) : [...prev, id]
    );
  };

  if (loading && products.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-pink-600"></div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-8 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <p className="text-gray-800 font-bold">
          {searchTerm ? `Resultados para "${searchTerm}"` : "Todos os produtos"} - <span className="text-gray-500 font-normal">{products.length} produtos</span>
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        <aside className="w-full md:w-1/4 bg-white p-6 rounded-lg shadow-sm h-fit">
          <h3 className="font-bold text-gray-800 border-b pb-4 mb-4">Filtrar por</h3>
          <div className="mb-6">
            <h4 className="font-bold text-sm text-gray-700 mb-3">Categoria</h4>
            <div className="space-y-2">
              {categories.map(cat => (
                <label key={cat.id} className="flex items-center gap-2 cursor-pointer">
                  <input 
                    type="checkbox" 
                    className="accent-pink-600 w-4 h-4" 
                    checked={selectedCategories.includes(cat.id)}
                    onChange={() => handleCategoryChange(cat.id)}
                  /> 
                  {cat.name}
                </label>
              ))}
            </div>
          </div>
        </aside>

        <main className="w-full md:w-3/4">
          {loading ? (
             <div className="flex justify-center py-10">
               <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-pink-600"></div>
             </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map(product => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          )}
          {!loading && products.length === 0 && (
            <div className="text-center py-20">
              <h3 className="text-2xl font-bold text-gray-400">Nenhum produto encontrado</h3>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useCart } from '../context/CartContext';

export default function Header() {
  const { cartCount } = useCart();
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem('token');

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      navigate(`/produtos?busca=${searchTerm}`);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/entrar');
  };

  return (
    <header className="bg-white shadow-md p-4 flex flex-col md:flex-row justify-between items-center gap-4">
      {/* Logo */}
      <Link to="/" className="text-3xl font-bold text-pink-600 tracking-wider">
        Digital Store
      </Link>

      {/* Barra de Pesquisa */}
      <div className="w-full md:w-1/2">
        <input 
          type="text" 
          placeholder="Pesquisar produto..." 
          className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleSearch}
        />
      </div>

      {/* Ações do Usuário e Carrinho */}
      <div className="flex items-center gap-6">
        <Link to="/cadastre-se" className="text-gray-500 hover:text-pink-600 underline">Cadastre-se</Link>
        
        {isLoggedIn ? (
          <button 
            onClick={handleLogout}
            className="bg-gray-200 text-gray-800 px-6 py-2 rounded-lg font-semibold hover:bg-gray-300 transition"
          >
            Sair
          </button>
        ) : (
          <Link 
            to="/entrar"
            className="bg-pink-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-pink-700 transition"
          >
            Entrar
          </Link>
        )}
        
        {/* Ícone de Carrinho Simples */}
        <div className="relative cursor-pointer">
          <span className="text-2xl">🛒</span>
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
              {cartCount}
            </span>
          )}
        </div>
      </div>
    </header>
  );
}

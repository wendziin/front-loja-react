import { Link } from 'react-router-dom';

export default function Header() {
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
        />
      </div>

      {/* Ações do Usuário e Carrinho */}
      <div className="flex items-center gap-6">
        <Link to="/cadastre-se" className="text-gray-500 hover:text-pink-600 underline">Cadastre-se</Link>
        <button className="bg-pink-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-pink-700 transition">
          Entrar
        </button>
        
        {/* Ícone de Carrinho Simples */}
        <div className="relative cursor-pointer">
          <span className="text-2xl">🛒</span>
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
            2
          </span>
        </div>
      </div>
    </header>
  );
}
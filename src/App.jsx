import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import ProductView from './pages/ProductView';

export default function App() {
  return (
    <BrowserRouter>
      {/* O Header fica fora das rotas para aparecer em todas as páginas */}
      <Header />

      {/* Onde o conteúdo das páginas vai renderizar (com uma altura mínima para empurrar o footer pra baixo) */}
      <main className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produtos" element={<ProductList />} />
          <Route path="/produto/:id" element={<ProductView />} />
        </Routes>
      </main>

      {/* O Footer também fica fora para aparecer em todas as páginas */}
      <Footer />
    </BrowserRouter>
  );
}
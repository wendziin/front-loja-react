import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import ProductView from './pages/ProductView';
import Login from './pages/Login';
import Register from './pages/Register';
import { CartProvider } from './context/CartContext';

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Header />
        <main className="min-h-screen bg-gray-50">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/produtos" element={<ProductList />} />
            <Route path="/produto/:id" element={<ProductView />} />
            <Route path="/entrar" element={<Login />} />
            <Route path="/cadastre-se" element={<Register />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}
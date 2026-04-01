import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { register } from '../services/api';

export default function Register() {
  const [formData, setFormData] = useState({
    firstname: '',
    surname: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    if (formData.password !== formData.confirmPassword) {
      return setError('As senhas não coincidem');
    }

    setLoading(true);
    try {
      await register(formData);
      alert('Conta criada com sucesso! Agora faça seu login.');
      navigate('/entrar');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-6 text-center">Criar sua conta</h2>
        
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4 text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">Nome</label>
              <input name="firstname" type="text" required onChange={handleChange} className="w-full px-4 py-2 rounded-lg bg-gray-100 border-transparent focus:border-pink-500 focus:bg-white focus:ring-0" />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">Sobrenome</label>
              <input name="surname" type="text" required onChange={handleChange} className="w-full px-4 py-2 rounded-lg bg-gray-100 border-transparent focus:border-pink-500 focus:bg-white focus:ring-0" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">E-mail</label>
            <input name="email" type="email" required onChange={handleChange} className="w-full px-4 py-2 rounded-lg bg-gray-100 border-transparent focus:border-pink-500 focus:bg-white focus:ring-0" />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">Senha</label>
            <input name="password" type="password" required onChange={handleChange} className="w-full px-4 py-2 rounded-lg bg-gray-100 border-transparent focus:border-pink-500 focus:bg-white focus:ring-0" />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">Confirmar Senha</label>
            <input name="confirmPassword" type="password" required onChange={handleChange} className="w-full px-4 py-2 rounded-lg bg-gray-100 border-transparent focus:border-pink-500 focus:bg-white focus:ring-0" />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-pink-600 text-white font-bold py-3 rounded-lg shadow-lg hover:bg-pink-700 transition ${loading ? 'opacity-50' : ''}`}
          >
            {loading ? 'Criando conta...' : 'CRIAR CONTA'}
          </button>
        </form>

        <p className="mt-6 text-center text-gray-500 text-sm">
          Já tem uma conta? <Link to="/entrar" className="text-pink-600 font-bold hover:underline">Faça login</Link>
        </p>
      </div>
    </div>
  );
}

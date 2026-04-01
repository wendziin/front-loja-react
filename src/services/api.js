const API_URL = "https://api-loja-nodejs.onrender.com/v1";

export const getProducts = async (params = {}) => {
  try {
    const query = new URLSearchParams();
    if (params.match) query.append('match', params.match);
    if (params.category_ids) query.append('category_ids', params.category_ids);
    
    const url = `${API_URL}/product?${query.toString()}`;
    const response = await fetch(url);
    if (!response.ok) throw new Error("Erro ao buscar produtos");
    return await response.json();
  } catch (error) {
    console.error("Erro na API:", error);
    return [];
  }
};

export const register = async (userData) => {
  try {
    const response = await fetch(`${API_URL}/user`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData)
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || "Erro ao criar conta");
    return data;
  } catch (error) {
    throw error;
  }
};

export const login = async (email, password) => {
  try {
    const response = await fetch(`${API_URL}/user/token`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || "Erro ao fazer login");
    return data;
  } catch (error) {
    throw error;
  }
};

export const getProductById = async (id) => {
  try {
    const response = await fetch(`${API_URL}/product/${id}`);
    if (!response.ok) throw new Error("Erro ao buscar produto");
    return await response.json();
  } catch (error) {
    console.error("Erro na API:", error);
    return null;
  }
};

export const getCategories = async () => {
  try {
    const response = await fetch(`${API_URL}/category`);
    if (!response.ok) throw new Error("Erro ao buscar categorias");
    return await response.json();
  } catch (error) {
    console.error("Erro na API:", error);
    return [];
  }
};

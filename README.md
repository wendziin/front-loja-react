# 🛍️ Digital Store - Frontend

Este é o frontend da loja virtual "Digital Store", desenvolvido com React, Vite e Tailwind CSS. O projeto consome dados da API backend para exibir produtos, categorias e gerenciar a experiência de compra.

## 🚀 Tecnologias Utilizadas

- **React 19**
- **Vite** (Build tool e servidor de desenvolvimento rápido)
- **Tailwind CSS v4** (Estilização utilitária)
- **React Router DOM** (Navegação de páginas)

## 📁 Estrutura de Diretórios

A estrutura do projeto está organizada da seguinte forma:

```text
src/
├── assets/       # Imagens e arquivos estáticos
├── components/   # Componentes reutilizáveis (Header, Footer, etc.)
├── context/      # Contextos do React (ex: CartContext)
├── pages/        # Páginas da aplicação (Home, ProductList, Login, etc.)
├── services/     # Configuração e chamadas de API (fetch)
├── App.jsx       # Componente raiz com as rotas
└── main.jsx      # Ponto de entrada da aplicação
```

## ⚙️ Variáveis de Ambiente e Configuração da API

As requisições para a API estão centralizadas no arquivo `src/services/api.js`. Por padrão, o projeto em produção está configurado para consumir a API no Render:

`const API_URL = "https://api-loja-nodejs.onrender.com/v1";`

Para rodar localmente com o backend no seu computador, você deve alterar a `API_URL` para o seu `localhost` (ex: `http://localhost:3000/v1`).

## 📥 Como rodar o projeto localmente

1. Clone o repositório:
   ```bash
   git clone https://github.com/wendziin/front-loja-react.git
   ```

2. Acesse a pasta do projeto:
   ```bash
   cd projeto-front-loja
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

4. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

5. O site estará disponível em `http://localhost:5173`.

## 🌐 Deploy na Nuvem

O deploy deste frontend foi configurado na plataforma **Render**, conectado diretamente à branch `main` do GitHub. Sempre que um push é feito para a branch principal, um novo build é gerado e o site é atualizado automaticamente.

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6 px-8 mt-12">
      <div className="flex flex-col md:flex-row justify-between gap-8 mb-8">
        <div className="md:w-1/3">
          <h2 className="text-3xl font-bold mb-4">Digital Store</h2>
          <p className="text-gray-400">
            A sua loja de tênis e roupas com as melhores marcas e preços exclusivos.
          </p>
        </div>
        
        <div>
          <h3 className="font-bold text-lg mb-4">Informações</h3>
          <ul className="text-gray-400 space-y-2">
            <li className="hover:text-white cursor-pointer">Sobre a loja</li>
            <li className="hover:text-white cursor-pointer">Segurança</li>
            <li className="hover:text-white cursor-pointer">Trabalhe conosco</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-4">Contato</h3>
          <p className="text-gray-400">
            Av. Central, 123, Centro<br/>
            (88) 99999-9999
          </p>
        </div>
      </div>
      
      <hr className="border-gray-700 mb-6" />
      <p className="text-center text-gray-500 text-sm">
        © 2026 Digital Store. Todos os direitos reservados.
      </p>
    </footer>
  );
}
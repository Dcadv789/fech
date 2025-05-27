import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div className="p-6 bg-dark-800 rounded-xl shadow-md">
      <h1 className="text-2xl font-bold text-white mb-4">Dashboard</h1>
      <p className="text-gray-300">
        Bem-vindo ao painel administrativo. Esta é a página inicial onde serão exibidos os principais
        indicadores e informações relevantes para sua tomada de decisão.
      </p>
      <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {[1, 2, 3, 4].map((item) => (
          <div key={item} className="bg-dark-700 p-4 rounded-lg shadow">
            <h3 className="text-lg font-medium text-white mb-2">Indicador {item}</h3>
            <p className="text-gray-400">Informações do indicador serão exibidas aqui.</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
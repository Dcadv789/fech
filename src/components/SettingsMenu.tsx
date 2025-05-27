import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Building2, Database } from 'lucide-react';

const SettingsMenu: React.FC = () => {
  return (
    <div className="absolute right-0 mt-2 w-56 rounded-lg shadow-lg bg-dark-800 ring-1 ring-black ring-opacity-5 overflow-hidden">
      <div className="py-1">
        <Link to="/usuarios" className="w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-dark-700 hover:text-white flex items-center">
          <Users size={16} className="mr-2" />
          Usuários
        </Link>
        <Link to="/empresas" className="w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-dark-700 hover:text-white flex items-center">
          <Building2 size={16} className="mr-2" />
          Empresas
        </Link>
      </div>
      <div className="py-1 border-t border-dark-700">
        <div className="px-4 py-2 text-xs font-medium text-gray-400 uppercase">Base de Dados</div>
        <Link to="/categorias" className="w-full text-left px-8 py-2 text-sm text-gray-300 hover:bg-dark-700 hover:text-white flex items-center">
          Categorias
        </Link>
        <Link to="/indicadores" className="w-full text-left px-8 py-2 text-sm text-gray-300 hover:bg-dark-700 hover:text-white flex items-center">
          Indicadores
        </Link>
        <Link to="/config-dre" className="w-full text-left px-8 py-2 text-sm text-gray-300 hover:bg-dark-700 hover:text-white flex items-center">
          Config. DRE
        </Link>
        <Link to="/lancamentos" className="w-full text-left px-8 py-2 text-sm text-gray-300 hover:bg-dark-700 hover:text-white flex items-center">
          Lançamentos
        </Link>
      </div>
    </div>
  );
};

export default SettingsMenu
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, TrendingUp, BarChart2, FileText, Users, LineChart } from 'lucide-react';

const Sidebar: React.FC = () => {
  const navItems = [
    { name: 'Home', path: '/', icon: <Home size={20} /> },
    { name: 'Vendas', path: '/vendas', icon: <TrendingUp size={20} /> },
    { name: 'Análise', path: '/analise', icon: <BarChart2 size={20} /> },
    { name: 'DRE', path: '/dre', icon: <FileText size={20} /> },
    { name: 'Clientes', path: '/clientes', icon: <Users size={20} /> },
    { name: 'Gráficos', path: '/graficos', icon: <LineChart size={20} /> },
  ];

  return (
    <div className="w-64 flex-shrink-0 h-screen sticky top-0">
      <div className="h-full m-4">
        <div className="flex flex-col h-full bg-black rounded-2xl shadow-lg overflow-hidden border border-gray-800">
          <div className="flex-1 flex flex-col pt-8 pb-4">
            <div className="flex items-center justify-center flex-shrink-0 px-4 mb-8">
              <span className="text-primary-400 text-2xl font-bold">Dashboard</span>
            </div>
            <nav className="flex-1 px-4 space-y-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `group flex items-center px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200 ${
                      isActive
                        ? 'bg-primary-600 text-white'
                        : 'text-gray-300 hover:bg-gray-900 hover:text-white'
                    }`
                  }
                >
                  <span className="mr-3">{item.icon}</span>
                  {item.name}
                </NavLink>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
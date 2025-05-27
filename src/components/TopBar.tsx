import React, { useState } from 'react';
import { Menu, Bell, ChevronDown } from 'lucide-react';
import ProfileMenu from './ProfileMenu';

const TopBar: React.FC = () => {
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  const toggleProfileMenu = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-10 bg-black m-4 ml-0 mr-4 rounded-2xl shadow-lg border border-gray-800">
      <div className="px-6 sm:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <button className="p-2 rounded-lg text-gray-400 md:hidden hover:bg-gray-900 hover:text-white">
              <Menu size={24} />
            </button>
          </div>
          <div className="flex items-center space-x-6">
            <button className="p-2 rounded-lg text-gray-400 hover:bg-gray-900 hover:text-white relative">
              <Bell size={20} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-primary-500 rounded-full"></span>
            </button>
            <div className="relative">
              <button
                className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-900 transition-colors duration-200"
                onClick={toggleProfileMenu}
              >
                <div className="w-10 h-10 rounded-lg bg-primary-500 flex items-center justify-center text-white font-semibold">
                  JD
                </div>
                <div className="hidden md:block text-left">
                  <p className="text-sm font-medium text-white">Jane Doe</p>
                  <p className="text-xs text-gray-400">Administrador</p>
                </div>
                <ChevronDown size={16} className="text-gray-400" />
              </button>
              {isProfileMenuOpen && <ProfileMenu />}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopBar;
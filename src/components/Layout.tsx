import React from 'react';
import Sidebar from './Sidebar';
import TopBar from './TopBar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex justify-center min-h-screen bg-black">
      <div className="flex w-full max-w-[1920px]">
        <Sidebar />
        <div className="flex flex-col flex-1 overflow-hidden">
          <TopBar />
          <main className="flex-1 overflow-x-hidden overflow-y-auto p-6">
            <div className="mx-auto max-w-8xl">
              {children}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Layout;
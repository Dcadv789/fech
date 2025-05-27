import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import SalesPage from './pages/SalesPage';
import AnalysisPage from './pages/AnalysisPage';
import DrePage from './pages/DrePage';
import ClientsPage from './pages/ClientsPage';
import ChartsPage from './pages/ChartsPage';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/vendas" element={<SalesPage />} />
          <Route path="/analise" element={<AnalysisPage />} />
          <Route path="/dre" element={<DrePage />} />
          <Route path="/clientes" element={<ClientsPage />} />
          <Route path="/graficos" element={<ChartsPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
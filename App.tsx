import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Products } from './pages/Products';
import { Sustainability } from './pages/Sustainability';

// Placeholder components for sections not fully fleshed out in this demo but required by router
const PlaceholderPage = ({ title }: { title: string }) => (
  <div className="pt-32 pb-20 max-w-7xl mx-auto px-4 min-h-screen">
    <h1 className="text-4xl font-bold mb-4">{title}</h1>
    <p className="text-slate-500">This section is under construction for the demo.</p>
  </div>
);

const App = () => {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/sustainability" element={<Sustainability />} />
          <Route path="/innovation" element={<PlaceholderPage title="Technical Innovation" />} />
          <Route path="/news" element={<PlaceholderPage title="News Center" />} />
          <Route path="/careers" element={<PlaceholderPage title="Careers & Culture" />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;
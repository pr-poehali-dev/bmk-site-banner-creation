import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import ProductsPage from '@/pages/ProductsPage';
import ProductionPage from '@/pages/ProductionPage';
import ContactsPage from '@/pages/ContactsPage';
import NewsPage from '@/pages/NewsPage';
import CertificatesPage from '@/pages/CertificatesPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-muted to-accent/10">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/production" element={<ProductionPage />} />
            <Route path="/contacts" element={<ContactsPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/certificates" element={<CertificatesPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
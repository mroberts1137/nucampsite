import { Routes, Route } from 'react-router-dom';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import NoPage from './pages/NoPage';
import AboutPage from './pages/AboutPage';
import './App.css';
import CampsitesDirectoryPage from './pages/CampsitesDirectoryPage';
import CampsiteDetailPage from './pages/CampsiteDetailPage';
import Header from './components/Header.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/directory" element={<CampsitesDirectoryPage />} />
        <Route path="/directory/:campsiteId" element={<CampsiteDetailPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

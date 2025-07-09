import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home/Home';
import Resume from './pages/Resume/Resume';
import Projects from './pages/Projects/Projects';
import Store from './pages/Store/Store';
import './App.css';
// Solo importa las partes de Bootstrap que necesitas
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import 'bootstrap/dist/css/bootstrap-utilities.min.css';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: 'ease-in-out',
      once: false,
    });
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/store" element={<Store />} />
      </Routes>
    </Router>
  );
}
export default App;

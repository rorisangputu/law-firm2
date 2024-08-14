import { Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Nav from './Components/Nav';
import Home from './Pages/Home';
import TheFirm from './Pages/TheFirm';
import Contact from './Pages/Contact';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/the-firm" element={<TheFirm />} />
        <Route path="/contacts" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

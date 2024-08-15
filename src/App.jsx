import { Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Nav from './Components/Nav';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import People from './Pages/People';
import Services from './Pages/Services';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/people" element={<People />} />
        <Route path="/contacts" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

import { Route, Routes } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Contact from './pages/Contact';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Login from './pages/Login';

export default function Router() {
    return (
        <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Login />} />
        </Routes>
    );
}
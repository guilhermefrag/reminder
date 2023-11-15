import { Route, Routes } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Contact from './pages/Contact';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

export default function Router() {
    return (
        <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<SignIn />} />
            <Route path="/login" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
        </Routes>
    );
}
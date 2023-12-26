import Header from './components/Header'
import { BrowserRouter } from 'react-router-dom'
import Router from './Router'
import { useEffect, useState } from 'react';
import axios from 'axios';
import PublicRouter from './PublicRouter';
import toast, { Toaster } from 'react-hot-toast';


function App() {
    const [authToken, setAuthToken] = useState(localStorage.getItem('@token'));

    axios.defaults.headers.common['Authorization'] = authToken;
    axios.defaults.baseURL = 'http://127.0.0.1:8000/';

    useEffect(() => {
        axios.defaults.headers.common['Authorization'] = authToken;
    }, [authToken]);

    if (!authToken?.length) {
        return (
        <BrowserRouter>
            <section className="app-body">
                <div className="container-route">
                    <Header />
                    <PublicRouter/>
                    <Toaster />
                </div>
            </section>
        </BrowserRouter>
        );
    }

    return (
        
        <BrowserRouter>
            <section className="app-body">
                <div className="container-route">
                    <Header />
                    <Router />
                    <Toaster />
                </div>
            </section>
        </BrowserRouter>
    )
}

export default App

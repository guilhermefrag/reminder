import Header from './components/Header'
import { BrowserRouter } from 'react-router-dom'
import Router from './Router'
import { useState } from 'react';
import axios from 'axios';
import SignIn from './pages/SignIn';

function App() {
    const [authToken, setAuthToken] = useState(localStorage.getItem('@token'));

    axios.defaults.headers.common['Authorization'] = authToken;
    axios.defaults.baseURL = 'http://127.0.0.1:8000/';

    if (!authToken?.length) {
        return (
            <SignIn setAuthToken={setAuthToken}/>
        );
    }

    return (
        
        <BrowserRouter>
            <section className="app-body">
                <div className="container-route">
                    <Header />
                    <Router />
                </div>
            </section>
        </BrowserRouter>
    )
}

export default App

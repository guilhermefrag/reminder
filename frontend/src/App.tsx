import Header from './components/Header'
import { BrowserRouter } from 'react-router-dom'
import Router from './Router'

function App() {
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

import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Footer from './components/Footer'
import { useEffect } from 'react';
import { initScrollAnimations } from './utils/animations';

function App() {
    useEffect(() => {
        const observer = initScrollAnimations('section > div');

        return () => {
            observer.disconnect();
        }
    }, []);

    return (
        <div className="min-h-screen">
            <Navbar />
            <Home />
            <About />
            <Skills />
            <Projects />
            <Footer />
        </div>
    )
}

export default App
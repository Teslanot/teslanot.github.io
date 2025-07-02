import { useEffect } from 'react';
import { initParallaxEffect, initTypeWriter } from '../utils/animations';

function Home() {
    useEffect(() => {
        const cleanupParallax = initParallaxEffect('home');
        initTypeWriter('h1', { 
            speed: 100, 
            delay: 1000, 
            borderColor: '#12f537' 
        });

        return () => {
            cleanupParallax();
        };
    }, []);

    return(
        <section id="home" className="min-h-screen flex items-center justify-center px-6">
            <div className="text-center max-w-4xl mx-auto">
                <div className="mb-8 initial-hidden animate-fadeInUp">
                    <div className="w-32 h-32 mx-auto mb-6 rounded-full glass animate-float overflow-hidden">
                        <div className="w-full h-full bg-gradient-to-br from-green-600 to to-blue-400 flex items-center justify-center">
                            <i className="fas fa-code text-4xl text-white"></i>
                        </div>
                    </div>                
                </div>

                <h1 className="text-5xl md:text-7xl font-bold mb-6 initial-hidden animate-fadeInUp delay-200">
                    Привет, я <span className="text-green-600">Dan</span>
                </h1>

                <p className="text-xl md:text-2xl mb-8 opacity-90 initial-hidden animate-fadeInUp delay-400">
                    <span className="text-green-400">Android</span> & <span className="text-yellow-300">JavaScript</span> dev
                </p>

                <div className="initial-hidden animate-fadeInUp delay-600">
                    <a href="#about" className="inline-block px-8 py-4 bg-green-400 text-purple-900 font-semibold rounded-full hover:bg-green-300 transition duration-300 transform hover:scale-105 animate-glow">
                        About
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Home
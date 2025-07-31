import { useEffect } from 'react';
import { initProjectCardEffects, initScrollAnimations } from '../utils/animations';

function Projects() {
    useEffect(() => {
        initProjectCardEffects();
        const observer = initScrollAnimations('.project-card');

        return () => {
            observer.disconnect();
        };
    }, []);


    return(
        <section id="projects" className="py-20 px-6">
            <div className="container mx-auto max-w-6xl">
                <h2 className="text-4xl font-bold text-center mb-12 text-green-400">Мои проекты</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="glass rounded-2xl p-6 project-card">
                        <div className="text-center mb-4">
                            <i className="fas fa-mobile-alt text-4xl text-green-400 mb-3"></i>
                            <h3 className="text-xl font-semibold mb-2">Android приложение</h3>
                        </div>
                        <p className="text-sm opacity-80 mb-4">
                            Современное приложение на Kotlin с использованием Jetpack Compose для создания красивого и отзывчивого интерфейса.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            <span className="px-2 py-1 bg-green-600 rounded-full text-xs">Kotlin</span>
                            <span className="px-2 py-1 bg-blue-600 rounded-full text-xs">Compose</span>
                        </div>
                        <button className="w-full py-2 bg-green-500 rounded-lg hover:bg-green-400 transition">
                            Посмотреть
                        </button>
                    </div>

                    <div className="glass rounded-2xl p-6 project-card">
                        <div className="text-center mb-4">
                            <i className="fas fa-magic text-4xl text-purple-400 mb-3"></i>
                            <h3 className="text-xl font-semibold mb-2">Справочник стран</h3>
                        </div>
                        <p className="text-sm opacity-80 mb-4">
                            Красивая удобная веб-энциклопедия стран мира с использованием JavaScript анимацией.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            <span className="px-2 py-1 bg-yellow-600 rounded-full text-xs">JavaScript</span>
                            <span className="px-2 py-1 bg-red-600 rounded-full text-xs">Canvas</span>
                        </div>
                        <button className="w-full py-2 bg-purple-500 rounded-lg hover:bg-purple-400 transition">
                            <a href="https://teslanot.github.io/map-project/">Посмотреть</a>
                        </button>
                    </div>

                    <div className="glass rounded-2xl p-6 project-card">
                        <div className="text-center mb-4">
                            <i className="fas fa-globe text-4xl text-blue-400 mb-3"></i>
                            <h3 className="text-xl font-semibold mb-2">Веб-приложение</h3>
                        </div>
                        <p className="text-sm opacity-80 mb-4">
                            Функциональное веб-приложение на Django с удобным интерфейсом, созданный с акцентом на пользовательский опыт.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            <span className="px-2 py-1 bg-blue-600 rounded-full text-xs">Python</span>
                            <span className="px-2 py-1 bg-green-600 rounded-full text-xs">Tailwind</span>
                            <span className="px-2 py-1 bg-yellow-600 rounded-full text-xs">JS</span>
                        </div>
                        <button className="w-full py-2 bg-blue-500 rounded-lg hover:bg-blue-400 transition">
                            <a href="https://github.com/Teslanot/Adly">Посмотреть</a>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects

function About() {
    return(
        <section id="about" className="py-20 px-6">
            <div className="container mx-auto max-w-4xl">
                <h2 className="text-4xl font-bold text-center mb-12 text-green-400">Обо мне</h2>

                <div className="glass rounded-2xl p-8 md:p-12">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div>
                        <h3 class="text-2xl font-semibold mb-4 text-green-300">Немного о себе</h3>
                        <p class="text-lg mb-6 opacity-90">
                            Привет! Я Даниил, увлеченный разработчик с фокусом на Android разработке и создании интересных JavaScript проектов. 
                            Мне нравится создавать красивые и функциональные приложения, которые решают реальные задачи.
                        </p>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center space-x-3">
                                <i className="fas fa-mobile-alt text-green-500 text-xl w-6"></i>
                                <span>Android development</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <i className="fas fa-mobile-alt text-green-500 text-xl w-6"></i>
                                <span>JavaSript & Animations</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <i className="fas fa-mobile-alt text-green-500 text-xl w-6"></i>
                                <span>UI/UX design</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
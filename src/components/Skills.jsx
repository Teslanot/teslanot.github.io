function Skills() {
    return(
        <section id="skills" className="py-20 px-6">
            <div className="container mx-auto max-w-6xl">
                <h2 className="text-4xl font-bold text-center mb-12 text-green-400">Мои навыки</h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="glass rounded-2xl p-8 tech-card">
                        <div className="text-center mb-6">
                            <i className="fab fa-android text-6xl text-green-400 mb-4"></i>
                            <h3 className="text-2xl font-semibold text-green-400">Android разработка</h3>
                        </div>
                        
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <span>Kotlin</span>
                                <div className="w-24 bg-gray-600 rounded-full h-2">
                                    <div className="bg-green-400 h-2 rounded-full w-20"></div>
                                </div>
                            </div>
                            <div className="flex justify-between items-center">
                                <span>Jetpack Compose</span>
                                <div className="w-24 bg-gray-600 rounded-full h-2">
                                    <div className="bg-green-400 h-2 rounded-full w-18"></div>
                                </div>
                            </div>
                            <div className="flex justify-between items-center">
                                <span>Android SDK</span>
                                <div className="w-24 bg-gray-600 rounded-full h-2">
                                    <div className="bg-green-400 h-2 rounded-full w-16"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="glass rounded-2xl p-8 tech-card">
                        <div className="text-center mb-6">
                            <i className="fab fa-js-square text-6xl text-yellow-400 mb-4"></i>
                            <h3 className="text-2xl font-semibold text-yellow-200">JavaScript</h3>
                        </div>
                        
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <span>JavaScript ES6+</span>
                                <div className="w-24 bg-gray-600 rounded-full h-2">
                                    <div className="bg-yellow-400 h-2 rounded-full w-20"></div>
                                </div>
                            </div>
                            <div className="flex justify-between items-center">
                                <span>CSS Animations</span>
                                <div className="w-24 bg-gray-600 rounded-full h-2">
                                    <div className="bg-yellow-400 h-2 rounded-full w-22"></div>
                                </div>
                            </div>
                            <div className="flex justify-between items-center">
                                <span>DOM Manipulation</span>
                                <div className="w-24 bg-gray-600 rounded-full h-2">
                                    <div className="bg-yellow-400 h-2 rounded-full w-18"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills
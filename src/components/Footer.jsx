function Footer() {
    return(
        <section id="contacts" className="py-20 px-6">
            <div className="container mx-auto max-w-4xl text-center">
                <h2 className="text-4xl font-bold mb-12 text-green-500">Свяжитесь со мной</h2>
                
                <div className="glass rounded-2xl p-8 mb-8">
                    <p className="text-xl mb-8 opacity-90">
                        Ready to new projects!
                    </p>
                    
                    <div className="flex justify-center space-x-6 mb-8">
                        <a href="#" className="text-4xl hover:text-blue-400 transition transform hover:scale-110">
                            <i className="fab fa-telegram"></i>
                        </a>
                        <a href="https://github.com/Teslanot" className="text-4xl hover:text-gray-600 transition transform hover:scale-110">
                            <i className="fab fa-github"></i>
                        </a>
                        <a href="#" className="text-4xl hover:text-red-400 transition transform hover:scale-110">
                            <i className="fas fa-envelope"></i>
                        </a>
                    </div>
                </div>
                
                <p className="text-sm opacity-60">
                    © 2025 Daniil. Made with ❤️ & Code.
                </p>
            </div>
        </section>
    )
}

export default Footer
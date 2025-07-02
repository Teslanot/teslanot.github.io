import { useEffect } from "react"
import { initSmoothScroll, initMobileMenu } from "../utils/animations"

function Navbar() {
    useEffect(() => {
        initSmoothScroll();
        initMobileMenu();
    }, []);

    return(
        <nav className="fixed top-0 w-full z-50 glass">
            <div className="container mx-auto px-6 py-4">
                <div className="flex justify-between items-center">
                    <div className="text-2xl font-bold">
                        <span className="text-green-800">D</span>aniil
                    </div>
                    <div className="hidden md:flex space-x-6">
                        <a href="#home" className="hover:text-green-600 transition duration-300">Main</a>
                        <a href="#about" className="hover:text-green-600 transition duration-300">About me</a>
                        <a href="#skills" className="hover:text-green-600 transition duration-300">Skills</a>
                        <a href="#projects" className="hover:text-green-600 transition duration-300">Projects</a>
                        <a href="#contacts" className="hover:text-green-600 transition duration-300">Contacts</a>
                    </div>
                    <button id="mobile-menu-btn" className="md:hidden">
                        <i className="fas fa-bars text-2xl"></i>
                    </button>
                </div>
            </div>
        </nav>
    )
}


export default Navbar
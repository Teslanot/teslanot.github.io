import { Link } from "react-router-dom";

function Home() {
    return(
        <main className="flex flex-col items-center justify-center min-h-screen text-center p-4">
            <h1 className="text-4xl font-bold mb-4">Привет я Даниил</h1>
            <p className="mb-6 max-w-x1">Это мой визитный сайт. Здесь мои проекты, немного обо мне и ссылки на мои соцсети ниже.</p>
            <div className="space-x-4">
                <Link to="/about" className="px-4 py-2 bg-white text-black rounded hover:bg-gray-200 transition">Обо мне</Link>

            </div>
        </main>
    )
}

export default Home
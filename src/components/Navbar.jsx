import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between">
      <Link to="/" className="font-bold">Teslanot</Link>
      <div className="space-x-4">
        <Link to="/about" className="hover:underline">Обо мне</Link>
        <Link to="/project1" className="hover:underline">Проект 1</Link>
        <Link to="/project2" className="hover:underline">Проект 2</Link>
      </div>
    </nav>
  )
}
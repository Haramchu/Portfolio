import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 shadow-sm bg-white border-b">
      <h1 className="text-xl font-bold text-gray-800">Clement Samuel</h1>
      <div className="space-x-6 text-sm font-medium text-gray-600">
        <Link to="/" className="hover:text-blue-600 transition">Home</Link>
        <Link to="/about" className="hover:text-blue-600 transition">About</Link>
        <Link to="/projects" className="hover:text-blue-600 transition">Projects</Link>
        <Link to="/experience" className="hover:text-blue-600 transition">Experience</Link>
        <Link to="/contact" className="hover:text-blue-600 transition">Contact</Link>
      </div>
    </nav>
  );
}
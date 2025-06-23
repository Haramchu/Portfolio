import { useState } from "react";
import { Link } from "react-router-dom";
import DownloadModal from "./DownloadModal";

export default function Navbar() {
  const [showModal, setShowModal] = useState(false);

  const handleDownload = () => {
    setShowModal(false);
    const link = document.createElement("a");
    link.href = "/CLEMENT_SAMUEL_MARLY_RESUME.pdf";
    link.download = "CLEMENT_SAMUEL_MARLY_RESUME.pdf";
    link.click();
  };

  return (
    <>
      <nav className="flex justify-between items-center px-6 py-4 shadow-sm bg-white border-b">
        <Link to="/" className="text-xl font-bold text-gray-800 hover:text-blue-600 transition">
          Clement Samuel
        </Link>
        <div className="space-x-6 text-sm font-medium text-gray-600">
          <Link to="/about" className="hover:text-blue-600 transition">About</Link>
          <Link to="/projects" className="hover:text-blue-600 transition">Projects</Link>
          <Link to="/experience" className="hover:text-blue-600 transition">Experience</Link>
          <Link to="/services" className="hover:text-blue-600 transition">Services</Link>
          <button
            onClick={() => setShowModal(true)}
            className="bg-blue-600 text-white px-3 py-1.5 rounded hover:bg-blue-700 transition hidden sm:inline-block"
          >
            Resume
          </button>
        </div>
      </nav>

      {showModal && (
        <DownloadModal
          onConfirm={handleDownload}
          onCancel={() => setShowModal(false)}
        />
      )}
    </>
  );
}

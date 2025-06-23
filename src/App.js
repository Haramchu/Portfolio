import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Services from "./pages/Services";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen font-sans text-gray-800 bg-gradient-to-b from-white via-blue-50 to-blue-200">
        <Navbar />
        <main className="flex-grow px-4 py-8 w-full">
          <div className="max-w-4xl mx-auto">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/services" element={<Services />} />
            </Routes>
          </div>
        </main>
        <Footer />
      </div>
    </Router>
  );
}


export default App;
import { motion } from "framer-motion";
import { FaInstagram, FaTiktok } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";

export default function Projects() {
  return (
    <div className="min-h-screen py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto space-y-10"
      >
        <h2 className="text-3xl font-bold text-gray-800">Projects</h2>

        {/* Amerta */}
        <div className="border p-6 rounded-lg bg-white shadow hover:shadow-md transition space-y-3">
          <h3 className="text-xl font-semibold">Amerta – Enterprise Information System</h3>
          <p className="text-gray-700">
            Developed an internal EIS for PT Amerta Sukses Manunggal to manage inventory, employees, customers, goods, and financials. Included analytics dashboard and CRUD modules across all entities.
          </p>
          <p className="text-sm text-gray-500">Tech: Spring Boot, React.js, PostgreSQL, Cloud Run, Vercel</p>
          <p className="text-xs text-red-500 italic">Demo unavailable – internal company project</p>

          <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <img
              src={require("../assets/amerta-dashboard.jpg")}
              alt="Amerta dashboard"
              className="w-full h-40 sm:h-48 md:h-56 lg:h-64 object-contain rounded-md bg-gray-100"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
        </div>

        {/* JerseyCorner */}
        <div className="border p-6 rounded-lg bg-white shadow hover:shadow-md transition space-y-3">
          <h3 className="text-xl font-semibold">JerseyCorner – Vintage Jersey Store</h3>
          <p className="text-gray-700">
            Created and run an online store specializing in vintage football jerseys from iconic players like Ronaldo and Beckham. Responsible for branding, sourcing, social media marketing, and customer relations.
          </p>
          <p className="text-sm text-gray-500">Platform: Instagram, TikTok, Linktree</p>

          {/* Social Icons */}
          <div className="flex items-center gap-5 text-2xl text-blue-600 mt-2">
            <a href="https://linktr.ee/jerseycornerofficial" target="_blank" rel="noopener noreferrer" title="Linktree">
              <BiLinkExternal />
            </a>
            <a href="https://www.instagram.com/jerseycornerofficial/" target="_blank" rel="noopener noreferrer" title="Instagram">
              <FaInstagram />
            </a>
            <a href="https://www.tiktok.com/@jerseycornerofficial" target="_blank" rel="noopener noreferrer" title="TikTok">
              <FaTiktok />
            </a>
          </div>

          {/* Side-by-side Jersey Images */}
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-2">
            <img
              src={require("../assets/jersey-1.png")}
              alt="Jersey product 1"
              className="w-full h-40 sm:h-48 md:h-56 lg:h-64 object-contain rounded-md bg-gray-100"
              style={{ maxWidth: "100%", height: "auto" }}
            />
            <img
              src={require("../assets/jersey-2.png")}
              alt="Jersey product 2"
              className="w-full h-40 sm:h-48 md:h-56 lg:h-64 object-contain rounded-md bg-gray-100"
              style={{ maxWidth: "100%", height: "auto" }}
            />
            <img
              src={require("../assets/jersey-3.png")}
              alt="Jersey product 3"
              className="w-full h-40 sm:h-48 md:h-56 lg:h-64 object-contain rounded-md bg-gray-100"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
        </div>

        {/* RavenReads */}
        <div className="border p-6 rounded-lg bg-white shadow hover:shadow-md transition space-y-3">
          <h3 className="text-xl font-semibold">RavenReads</h3>
          <p className="text-gray-700">
            A Harry Potter-themed reading platform allowing users to borrow books, take quizzes, and join forums. Built in a team as part of a university project.
          </p>
          <p className="text-sm text-gray-500">Tech: Django, Flutter</p>
          <p className="text-xs text-red-500 italic">Site offline – hosting expired</p>
        </div>

        {/* Gameshop */}
        <div className="border p-6 rounded-lg bg-white shadow hover:shadow-md transition space-y-3">
          <h3 className="text-xl font-semibold">Gameshop</h3>
          <p className="text-gray-700">
            A simple e-commerce simulation site where users could sign up and purchase virtual games. Designed to demonstrate user auth and transaction flow.
          </p>
          <p className="text-sm text-gray-500">Tech: Django, Bootstrap, HTML</p>
          <p className="text-xs text-red-500 italic">Site offline – hosting expired</p>
        </div>
      </motion.div>
    </div>
  );
}

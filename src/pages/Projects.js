import { motion } from "framer-motion";

export default function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <h2 className="text-2xl font-semibold mb-4">Projects</h2>

      {/* Amerta */}
      <div className="border p-6 rounded-lg shadow-sm hover:shadow-md transition space-y-2">
        <h3 className="text-xl font-semibold">Amerta – Enterprise Information System</h3>
        <p className="text-gray-700">
          Developed an internal EIS for PT Amerta Sukses Manunggal to manage inventory, employees, customers, goods, and financials. Included analytics dashboard and CRUD modules across all entities.
        </p>
        <p className="text-sm text-gray-500">Tech: Spring Boot, React.js, PostgreSQL, Cloud Run, Vercel</p>
        <p className="text-xs text-red-500 italic">Demo unavailable – internal company project</p>
      </div>

      {/* JerseyCorner */}
      <div className="border p-6 rounded-lg shadow-sm hover:shadow-md transition space-y-2">
        <h3 className="text-xl font-semibold">JerseyCorner – Vintage Jersey Store</h3>
        <p className="text-gray-700">
          Created and run an online store specializing in vintage football jerseys from iconic players like Ronaldo and Beckham. Responsible for branding, sourcing, social media marketing, and customer relations.
        </p>
        <p className="text-sm text-gray-500">Platform: Instagram, TikTok, Linktree</p>
        <div className="space-x-4 text-blue-600 text-sm font-medium">
          <a href="https://linktr.ee/jerseycornerofficial" target="_blank" rel="noopener noreferrer" className="hover:underline">Linktree</a>
          <a href="https://www.instagram.com/jerseycornerofficial/" target="_blank" rel="noopener noreferrer" className="hover:underline">Instagram</a>
          <a href="https://www.tiktok.com/@jerseycornerofficial" target="_blank" rel="noopener noreferrer" className="hover:underline">TikTok</a>
        </div>
      </div>

      {/* RavenReads */}
      <div className="border p-6 rounded-lg shadow-sm hover:shadow-md transition space-y-2">
        <h3 className="text-xl font-semibold">RavenReads</h3>
        <p className="text-gray-700">
          A Harry Potter-themed reading platform allowing users to borrow books, take quizzes, and join forums. Built in a team as part of a university project.
        </p>
        <p className="text-sm text-gray-500">Tech: Django, Flutter</p>
        <p className="text-xs text-red-500 italic">Site offline – hosting expired</p>
      </div>

      {/* Gameshop */}
      <div className="border p-6 rounded-lg shadow-sm hover:shadow-md transition space-y-2">
        <h3 className="text-xl font-semibold">Gameshop</h3>
        <p className="text-gray-700">
          A simple e-commerce simulation site where users could sign up and purchase virtual games. Designed to demonstrate user auth and transaction flow.
        </p>
        <p className="text-sm text-gray-500">Tech: Django, Bootstrap, HTML</p>
        <p className="text-xs text-red-500 italic">Site offline – hosting expired</p>
      </div>
    </motion.div>
  );
}

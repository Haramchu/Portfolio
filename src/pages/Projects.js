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

      <div className="border border-gray-200 p-6 rounded-lg shadow-sm hover:shadow-md transition-all space-y-2">
        <h3 className="text-xl font-semibold">RavenReads</h3>
        <p className="text-gray-600">A Harry Potter-themed book platform with quizzes, forums, and progress tracking.</p>
        <p className="text-sm text-gray-500">Tech: Flutter, Django</p>
        <a
          href="https://ravenreads-c02-tk.pbp.cs.ui.ac.id"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-blue-600 font-medium hover:underline"
        >
          Live Demo →
        </a>
      </div>

      <div className="border border-gray-200 p-6 rounded-lg shadow-sm hover:shadow-md transition-all space-y-2">
        <h3 className="text-xl font-semibold">Gameshop</h3>
        <p className="text-gray-600">A fictional game shop web application built with Django & HTML.</p>
        <p className="text-sm text-gray-500">Tech: Django, HTML, Bootstrap</p>
        <a
          href="https://clement-samuel-tugas.pbp.cs.ui.ac.id"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-blue-600 font-medium hover:underline"
        >
          Live Demo →
        </a>
      </div>
    </motion.div>
  );
}

import { motion } from "framer-motion";

export default function Experience() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <h2 className="text-2xl font-semibold mb-4">Experience</h2>

      <div className="border border-gray-200 p-6 rounded-lg shadow-sm space-y-2">
        <h3 className="text-lg font-semibold">Teaching Assistant – UI</h3>
        <p className="text-sm text-gray-500">2023 – Present</p>
        <ul className="list-disc ml-5 text-gray-600 text-sm">
          <li>Guided students in Java, C, and operating systems.</li>
          <li>Assisted in labs, task reviews, and mentoring sessions.</li>
        </ul>
      </div>

      <div className="border border-gray-200 p-6 rounded-lg shadow-sm space-y-2">
        <h3 className="text-lg font-semibold">TPDD Division – KMK Fasilkom UI</h3>
        <p className="text-sm text-gray-500">2024</p>
        <ul className="list-disc ml-5 text-gray-600 text-sm">
          <li>Maintained internal website & Instagram publications</li>
          <li>Led a tech-focused student club</li>
        </ul>
      </div>
    </motion.div>
  );
}

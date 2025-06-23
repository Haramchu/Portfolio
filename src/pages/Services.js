import { motion } from "framer-motion";
import { FaCameraRetro, FaChalkboardTeacher } from "react-icons/fa";

export default function Services() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <h2 className="text-2xl font-bold mb-4">Services I Provide</h2>

      <div className="grid gap-6 sm:grid-cols-2">
        {/* Tutoring */}
        <div className="border p-6 rounded-lg shadow-sm space-y-2 hover:shadow-md transition">
          <div className="flex items-center gap-3 text-blue-600 text-3xl">
            <FaChalkboardTeacher />
            <h3 className="text-lg font-semibold text-gray-800">Private Tutoring</h3>
          </div>
          <p className="text-gray-700 text-sm">
            I offer tutoring in mathematics for elementary and junior high school students around Jakarta.
            Available for exam prep or homework help. In-person or online.
          </p>
        </div>

        {/* Photography */}
        <div className="border p-6 rounded-lg shadow-sm space-y-2 hover:shadow-md transition">
          <div className="flex items-center gap-3 text-purple-600 text-3xl">
            <FaCameraRetro />
            <h3 className="text-lg font-semibold text-gray-800">Event & Portrait Photography</h3>
          </div>
          <p className="text-gray-700 text-sm">
            Experienced in capturing moments from campus events, personal shoots, and promotional content.
            I offer editing, color correction, and social media-ready files.
          </p>
        </div>
      </div>
    </motion.div>
  );
}

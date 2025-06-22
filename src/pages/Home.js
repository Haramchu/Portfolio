import { motion } from "framer-motion";
import profilePic from "../assets/clement.jpg";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center py-10 space-y-6"
    >
      <img
        src={profilePic}
        alt="Clement Samuel"
        className="mx-auto rounded-full w-32 h-32 object-cover border-4 border-blue-500 shadow-md"
      />
      <h1 className="text-4xl font-extrabold text-gray-900">Hi, I'm Clement 👋</h1>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
        Information Systems student at the University of Indonesia. I build tech-driven solutions, mentor students, and explore creativity through code and photography.
      </p>
    </motion.div>
  );
}
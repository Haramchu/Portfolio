import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto"
    >
      <h2 className="text-2xl font-semibold mb-4">About Me</h2>
      <p className="text-gray-700 leading-relaxed">
        I’m an Information Systems undergraduate at the University of Indonesia with a passion for building solutions and mentoring others.
        <br /><br />
        I’ve served as a Teaching Assistant in multiple programming and systems courses, helped organize university-wide events, and developed platforms both for academics and business.
        <br /><br />
        Outside tech, I’m a photography enthusiast and entrepreneur through my online store, JerseyCorner.
      </p>
    </motion.div>
  );
}

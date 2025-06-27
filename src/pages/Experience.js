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

      {/* JerseyCorner */}
      <div className="border p-6 rounded-lg shadow-sm space-y-2 bg-white">
        <h3 className="text-lg font-semibold">Founder – JerseyCorner</h3>
        <p className="text-sm text-gray-500">Aug 2024 – Present · West Jakarta</p>
        <ul className="list-disc ml-5 text-gray-700 text-sm">
          <li>Founded an online store for vintage football jerseys (Ronaldo, Beckham, etc).</li>
          <li>Managed branding, sourcing, marketing, and customer service.</li>
          <li>Built presence via Instagram, TikTok, and Linktree.</li>
        </ul>
      </div>

      {/* TA Roles (separated) */}
      <div className="border p-6 rounded-lg shadow-sm space-y-2 bg-white">
        <h3 className="text-lg font-semibold">Teaching Assistant – Programming Foundations 2</h3>
        <p className="text-sm text-gray-500">Jan 2025 – Jun 2025 · University of Indonesia</p>
        <ul className="list-disc ml-5 text-gray-700 text-sm">
          <li>Guided 14 students in Java-based programming courses.</li>
          <li>Created tasks, reviewed labs, and answered questions.</li>
          <li>Course code: CSGE601021</li>
        </ul>
      </div>

      <div className="border p-6 rounded-lg shadow-sm space-y-2 bg-white">
        <h3 className="text-lg font-semibold">Teaching Assistant – Introduction to Operating Systems</h3>
        <p className="text-sm text-gray-500">Jul 2024 – Dec 2024 · University of Indonesia</p>
        <ul className="list-disc ml-5 text-gray-700 text-sm">
          <li>Assisted students in understanding C-based OS concepts.</li>
          <li>Supervised lab sessions and supported practical tasks.</li>
        </ul>
      </div>

      <div className="border p-6 rounded-lg shadow-sm space-y-2 bg-white">
        <h3 className="text-lg font-semibold">Teaching Assistant – Programming Foundations 2</h3>
        <p className="text-sm text-gray-500">Jan 2024 – Jun 2024 · University of Indonesia</p>
        <ul className="list-disc ml-5 text-gray-700 text-sm">
          <li>Guided 14 students in Programming Foundations 1.</li>
          <li>Led lab sessions and discussed exercises.</li>
          <li>Course code: CSGE601021</li>
        </ul>
      </div>

      <div className="border p-6 rounded-lg shadow-sm space-y-2 bg-white">
        <h3 className="text-lg font-semibold">Teaching Assistant – Programming Foundations 1</h3>
        <p className="text-sm text-gray-500">Aug 2023 – Jan 2024 · University of Indonesia</p>
        <ul className="list-disc ml-5 text-gray-700 text-sm">
          <li>Assisted 14 students in foundational Java programming.</li>
          <li>Developed lab tasks and supported assessments.</li>
          <li>Course code: CSGE601020</li>
        </ul>
      </div>

      {/* KMK & Pesta Rakyat */}
      <div className="border p-6 rounded-lg shadow-sm space-y-2 bg-white">
        <h3 className="text-lg font-semibold">2nd-in-Charge – TPDD Division, KMK Fasilkom UI</h3>
        <p className="text-sm text-gray-500">Jan 2024 – Dec 2024 · Depok</p>
        <ul className="list-disc ml-5 text-gray-700 text-sm">
          <li>Managed KMK’s website and Instagram content design.</li>
          <li>Led study clubs and helped organize events for new students.</li>
        </ul>
      </div>

      <div className="border p-6 rounded-lg shadow-sm space-y-2 bg-white">
        <h3 className="text-lg font-semibold">Event Coordinator – KMK Fasilkom UI</h3>
        <p className="text-sm text-gray-500">Jan 2023 – Jan 2024 · Depok</p>
        <ul className="list-disc ml-5 text-gray-700 text-sm">
          <li>Organized student bonding and spiritual development events.</li>
        </ul>
      </div>

      <div className="border p-6 rounded-lg shadow-sm space-y-2 bg-white">
        <h3 className="text-lg font-semibold">Committee – Pesta Rakyat Komputer</h3>
        <p className="text-sm text-gray-500">Jan 2023 – May 2024 · Depok</p>
        <ul className="list-disc ml-5 text-gray-700 text-sm">
          <li>Coordinated and scheduled matches for DOTA 2 tournaments (2023 & 2024 editions).</li>
        </ul>
      </div>
    </motion.div>
  );
}

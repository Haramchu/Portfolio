import { FaEnvelope, FaLinkedin, FaGithub, FaInstagram, FaWhatsapp, FaDiscord } from "react-icons/fa";
import { SiLine } from "react-icons/si";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <h2 className="text-2xl font-bold">Get in Touch</h2>
      <p className="text-gray-600 max-w-xl">
        I’m open to freelance opportunities, collaborations, or just a chat. Feel free to reach out through any platform below:
      </p>

      <ul className="space-y-3 text-lg">
        <li className="flex items-center gap-2">
          <FaEnvelope className="text-blue-600" />
          <a href="mailto:clementsamuelm@gmail.com" className="hover:underline">clementsamuelm@gmail.com</a>
        </li>
        <li className="flex items-center gap-2">
          <FaLinkedin className="text-blue-600" />
          <a href="https://linkedin.com/in/clement-samuel-marly-370aab256" target="_blank" rel="noreferrer" className="hover:underline">LinkedIn</a>
        </li>
        <li className="flex items-center gap-2">
          <FaGithub className="text-blue-600" />
          <a href="https://github.com/YOUR_USERNAME" target="_blank" rel="noreferrer" className="hover:underline">GitHub</a>
        </li>
        <li className="flex items-center gap-2">
          <FaInstagram className="text-blue-600" />
          <a href="https://www.instagram.com/clementsm_chu/" target="_blank" rel="noreferrer" className="hover:underline">Instagram</a>
        </li>
        <li className="flex items-center gap-2">
          <FaWhatsapp className="text-green-500" />
          <a href="https://wa.me/6287808083396" target="_blank" rel="noreferrer" className="hover:underline">WhatsApp</a>
        </li>
        <li className="flex items-center gap-2">
          <FaDiscord className="text-indigo-500" />
          <a href="https://discord.com/users/haramchu" target="_blank" rel="noreferrer" className="hover:underline">Discord</a>
        </li>
        <li className="flex items-center gap-2">
          <SiLine className="text-green-600" />
          <a href="https://line.me/ti/p/mechxlol" target="_blank" rel="noreferrer" className="hover:underline">LINE</a>
        </li>
      </ul>
    </motion.div>
  );
}

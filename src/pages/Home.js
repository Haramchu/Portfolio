import { motion } from 'framer-motion';
import profilePic from '../assets/clement.jpg';
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaInstagram,
  FaWhatsapp,
  FaDiscord,
} from 'react-icons/fa';
import { SiLine } from 'react-icons/si';


export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row items-center max-w-4xl mx-auto px-4 py-12 space-y-10 lg:space-y-0 lg:space-x-10">
      {/* Left Side: Intro & Socials */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1 space-y-4"
      >
        <h1 className="text-4xl font-extrabold text-gray-900">
          Hi, I’m Clement 👋
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          Information Systems student at University of Indonesia. I build tech-driven
          solutions, mentor students, and explore creativity through code and photography.
        </p>
        {/* Social Icons */}
        <div className="flex flex-wrap items-center gap-4 mt-4 text-gray-600 text-2xl">
          <a
            href="https://github.com/haramchu"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/clement-samuel-marly-370aab256"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:clementsamuelm@gmail.com"
            className="hover:text-gray-900 transition"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://www.instagram.com/clementsm_chu/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900 transition"
          >
            <FaInstagram />
          </a>
          <a
            href="https://wa.me/6287808083396"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900 transition"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://discord.com/users/haramchu"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900 transition"
          >
            <FaDiscord />
          </a>
          <a
            href="https://line.me/ti/p/mechxlol"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900 transition"
          >
            <SiLine />
          </a>
        </div>

      </motion.div>

      {/* Right Side: Profile Picture */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-shrink-0"
      >
        <img
          src={profilePic}
          alt="Clement Samuel"
          className="w-48 h-48 md:w-56 md:h-56 rounded-full border-4 border-blue-600 shadow-lg object-cover"
        />
      </motion.div>
    </div>
  );
}

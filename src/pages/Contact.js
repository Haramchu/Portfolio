import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Get in Touch</h2>
      <p className="text-gray-600 max-w-xl">
        Feel free to reach out for collaborations, internships, or photography gigs.
      </p>

      <ul className="space-y-3">
        <li className="flex items-center gap-2">
          <FaEnvelope className="text-blue-600" />
          <a href="mailto:clementsamuelm@gmail.com" className="text-gray-700 hover:underline">
            clementsamuelm@gmail.com
          </a>
        </li>
        <li className="flex items-center gap-2">
          <FaLinkedin className="text-blue-600" />
          <a href="https://linkedin.com/in/clement-samuel-marly-370aab256" target="_blank" rel="noreferrer" className="text-gray-700 hover:underline">
            LinkedIn
          </a>
        </li>
        <li className="flex items-center gap-2">
          <FaGithub className="text-blue-600" />
          <a href="https://github.com/YOUR_USERNAME" target="_blank" rel="noreferrer" className="text-gray-700 hover:underline">
            GitHub
          </a>
        </li>
      </ul>
    </div>
  );
}

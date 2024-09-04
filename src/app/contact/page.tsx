import { FaEnvelope, FaLinkedin, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Contact() {
  return (
    <section className="flex items-center justify-center bg-gray-900 text-gray-200 py-20">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-8">
          Get in Touch
        </h1>
        <p className="text-lg text-gray-400 mb-6">
          I'd love to hear from you! Feel free to reach out on any of these platforms
        </p>

        {/* Icons Section */}
        <div className="flex justify-center space-x-6 mb-6">
          <a href="mailto:marcel@marcelc.uk" aria-label="Email" className="text-blue-400 hover:text-blue-500">
            <FaEnvelope className="w-8 h-8" />
          </a>
          <a href="https://www.linkedin.com/in/marcel-claramunt/" aria-label="LinkedIn" className="text-blue-400 hover:text-blue-500">
            <FaLinkedin className="w-8 h-8" />
          </a>
          <a href="https://github.com/marciclabas" aria-label="GitHub" className="text-blue-400 hover:text-blue-500">
            <FaGithub className="w-8 h-8" />
          </a>
          <a href="https://twitter.com/marcelclaramunt" aria-label="Twitter" className="text-blue-400 hover:text-blue-500">
            <FaTwitter className="w-8 h-8" />
          </a>
          <a href="https://www.instagram.com/marcel.claramunt/" aria-label="Instagram" className="text-blue-400 hover:text-blue-500">
            <FaInstagram className="w-8 h-8" />
          </a>
        </div>

        <p className="text-lg text-gray-400">
          FYI: Email is the most sure-fire way to reach me
        </p>
      </div>
    </section>
  );
}

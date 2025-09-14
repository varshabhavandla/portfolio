import { motion } from "framer-motion";
import avatarSvg from "../assets/avatar.svg";

export default function Hero() {
  return (
    <section className="text-center py-16 bg-gradient-to-br from-gray-800 to-gray-900">
      <motion.img
        src={avatarSvg}
        alt="Varsha Avatar"
        className="w-32 h-32 mx-auto mb-6 rounded-full border-4 border-blue-500 shadow-lg"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
      />
      <h1 className="text-4xl font-bold">Varsha Bhavandlapelli</h1>
      <p className="mt-2 text-xl text-blue-400">
        Cloud & DevOps Engineer · IaC Specialist · AI Automator
      </p>
      <p className="mt-1 text-sm opacity-75">Irving, Texas 🇺🇸</p>
      <div className="flex justify-center mt-6 gap-4 flex-wrap">
        <a href="https://linkedin.com/in/varsha-bh" className="btn">
          🔗 LinkedIn
        </a>
        <a href="https://github.com/varshabhavandla" className="btn">
          💻 GitHub
        </a>
        <a href="mailto:varshabhavandla89@gmail.com" className="btn">
          📧 Email
        </a>
        <a href="https://example.com/resume.pdf" className="btn">
          📄 Resume
        </a>
      </div>
    </section>
  );
}
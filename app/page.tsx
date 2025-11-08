"use client";

import { motion } from 'framer-motion'


export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-6xl font-bold mb-4"
      >
        Evandri Ridho Hasmono
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-xl md:text-2xl text-gray-400 mb-6"
      >
        IT Undergraduate | Fullstack Developer | JavaScript & TypeScript Enthusiast
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="max-w-2xl text-gray-300 text-lg loading-relaxed"
      >
        I’m an Information Technology student and aspiring fullstack developer passionate about building reliable and user-centered applications. I enjoy learning by doing — coding, debugging, and improving through hands-on projects. My main stack includes React, TypeScript, Node.js, MongoDB, and PostgreSQL. I love solving real-world problems, writing clean and efficient code, and continuously refining my skills. With a focus on consistency and curiosity, I aim to grow into a developer who not only builds functional systems but also creates meaningful digital experiences that make an impact.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mt-8 flex gap-4"
      >
        <a
          href="/projects"
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition"
        >
          View Projects
        </a>
        <a
          href="/contact"
          className="px-6 py-3 border border-gray-600 hover:border-blue-500 rounded-lg font-medium transition"
        >
          Contact Me
        </a>
      </motion.div>
    </main >
  )
}
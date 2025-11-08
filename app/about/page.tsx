"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center text-center px-6">
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl font-bold mb-6"
            >
                About Me
            </motion.h1>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="max-w-2xl text-gray-300 text-lg leading-relaxed"
            >
                I’m <span className="font-semibold text-white">Evandri Ridho Hasmono</span>,
                an Information Technology student and aspiring Fullstack Developer.
                I believe in <span className="text-blue-400">learning by doing</span> —
                building, experimenting, and refining to become a better problem solver.
                My focus right now is mastering modern web technologies like
                <span className="text-blue-400"> React, Next.js, Express, and TypeScript</span>,
                before diving deep into Artificial Intelligence in the near future.
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-8"
            >
                <a
                    href="/projects"
                    className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition"
                >
                    View My Projects
                </a>
            </motion.div>
        </main>
    );
}

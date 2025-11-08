"use client";

import { motion } from "framer-motion";

export default function ProjectsPage() {
    const projects = [
        {
            title: "Rizquna Bakery",
            description:
                "Online bakery platform built with the MERN Stack featuring product CRUD, authentication, cart system, admin panel, Midtrans payments, and delivery tracking.",
            tech: ["React", "Node.js", "Express", "MongoDB"],
            link: "https://rizquna-frontend.vercel.app/",
            github: "https://github.com/EvandriRidho/Rizquna-Bakery",
        },
        // Tambahin project lain 
    ];

    return (
        <main className="min-h-screen flex flex-col items-center justify-center px-6 py-12 text-center">
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl font-bold mb-8"
            >
                My Projects
            </motion.h1>

            {/* Grid */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full"
            >
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 * index }}
                        className="bg-gray-900 border border-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-blue-600/20 transition"
                    >
                        <h2 className="text-2xl font-semibold mb-2 text-white">
                            {project.title}
                        </h2>
                        <p className="text-gray-400 mb-4 text-sm">{project.description}</p>
                        <div className="flex flex-wrap justify-center gap-2 mb-4">
                            {project.tech.map((tech, i) => (
                                <span
                                    key={i}
                                    className="px-3 py-1 bg-gray-800 text-gray-300 text-xs rounded-full"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex justify-center gap-4">
                            <a
                                href={project.link}
                                target="_blank"
                                className="text-blue-400 hover:text-blue-500 transition"
                            >
                                Live Demo
                            </a>
                            <a
                                href={project.github}
                                target="_blank"
                                className="text-gray-400 hover:text-white transition"
                            >
                                GitHub
                            </a>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </main>
    );
}

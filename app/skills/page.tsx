"use client";

import { motion } from "framer-motion";
import {
    SiJavascript,
    SiTypescript,
    SiReact,
    SiNextdotjs,
    SiTailwindcss,
    SiNodedotjs,
    SiExpress,
    SiMongodb,
    SiPostgresql,
    SiMysql,
    SiFigma,
    SiHtml5,
    SiCss3,
    SiGit,
    SiGithub
} from "react-icons/si";

export default function SkillsPage() {
    const skills = [
        { name: "HTML", icon: <SiHtml5 className="text-[#E34F26]" /> },
        { name: "CSS", icon: <SiCss3 className="text-[#1572B6]" /> },
        { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
        { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
        { name: "React", icon: <SiReact className="text-cyan-400" /> },
        { name: "Next.js", icon: <SiNextdotjs className="text-gray-200" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
        { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
        { name: "Express", icon: <SiExpress className="text-gray-300" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
        { name: "PostgreSQL", icon: <SiPostgresql className="text-sky-500" /> },
        { name: "MySQL", icon: <SiMysql className="text-blue-400" /> },
        { name: "Git", icon: <SiGit className="text-[#F05032]" /> },
        { name: "GitHub", icon: <SiGithub className="text-[#181717]" /> },
        { name: "Figma", icon: <SiFigma className="text-pink-500" /> },
    ];

    return (
        <main className="min-h-screen flex flex-col items-center justify-center text-center px-6 py-16">
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl font-bold mb-10"
            >
                Skills
            </motion.h1>

            {/* Skills Section */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 max-w-3xl mb-16"
            >
                {skills.map((skill, i) => (
                    <motion.div
                        key={i}
                        whileHover={{ scale: 1.08 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="bg-gray-900 border border-gray-700 shadow-md shadow-black/40 px-5 py-5 rounded-xl text-gray-100 font-semibold hover:text-blue-400 hover:border-blue-500 hover:shadow-blue-900/40 transition-all duration-300 flex flex-col items-center gap-3"
                    >
                        <div className="text-4xl">{skill.icon}</div>
                        <span>{skill.name}</span>
                    </motion.div>
                ))}
            </motion.div>
        </main>
    );
}

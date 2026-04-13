"use client";
import { motion } from "framer-motion";
import {
    SiJavascript, SiTypescript, SiPhp, SiPython, SiNodedotjs, SiExpress,
    SiLaravel, SiHtml5, SiCss3, SiReact, SiNextdotjs, SiTailwindcss,
    SiBootstrap, SiSass, SiMongodb, SiMysql, SiPostgresql, SiPrisma,
    SiGit, SiGithub, SiPostman, SiEslint, SiGnubash
} from "react-icons/si";

export default function Skill() {
    const skillCategories = [
        {
            title: "Frontend",
            skills: [
                { name: "HTML", icon: <SiHtml5 className="w-6 h-6 text-[#E34F26]" /> },
                { name: "CSS", icon: <SiCss3 className="w-6 h-6 text-[#1572B6]" /> },
                { name: "JavaScript", icon: <SiJavascript className="w-6 h-6 text-[#F7DF1E]" /> },
                { name: "TypeScript", icon: <SiTypescript className="w-6 h-6 text-[#3178C6]" /> },
                { name: "React", icon: <SiReact className="w-6 h-6 text-[#61DAFB]" /> },
                { name: "Next.js", icon: <SiNextdotjs className="w-6 h-6 text-slate-100" /> },
                { name: "Tailwind", icon: <SiTailwindcss className="w-6 h-6 text-[#06B6D4]" /> },
                { name: "Bootstrap", icon: <SiBootstrap className="w-6 h-6 text-[#7952B3]" /> },
                { name: "Sass", icon: <SiSass className="w-6 h-6 text-[#CC6699]" /> },
            ]
        },
        {
            title: "Backend & Database",
            skills: [
                { name: "PHP", icon: <SiPhp className="w-6 h-6 text-[#777BB4]" /> },
                { name: "Python", icon: <SiPython className="w-6 h-6 text-[#3776AB]" /> },
                { name: "Node.js", icon: <SiNodedotjs className="w-6 h-6 text-[#339933]" /> },
                { name: "Express.js", icon: <SiExpress className="w-6 h-6 text-slate-100" /> },
                { name: "Laravel", icon: <SiLaravel className="w-6 h-6 text-[#FF2D20]" /> },
                { name: "MongoDB", icon: <SiMongodb className="w-6 h-6 text-[#47A248]" /> },
                { name: "MySQL", icon: <SiMysql className="w-6 h-6 text-[#4479A1]" /> },
                { name: "PostgreSQL", icon: <SiPostgresql className="w-6 h-6 text-[#4169E1]" /> },
                { name: "Prisma", icon: <SiPrisma className="w-6 h-6 text-slate-100" /> },
            ]
        },
        {
            title: "Tools & Others",
            skills: [
                { name: "Git", icon: <SiGit className="w-6 h-6 text-[#F05032]" /> },
                { name: "GitHub", icon: <SiGithub className="w-6 h-6 text-slate-100" /> },
                { name: "Postman", icon: <SiPostman className="w-6 h-6 text-[#FF6C37]" /> },
                { name: "ESLint", icon: <SiEslint className="w-6 h-6 text-[#4B32C3]" /> },
                { name: "Bash", icon: <SiGnubash className="w-6 h-6 text-[#4EAA25]" /> },
            ]
        }
    ];

    return (
        <section id="skills" className="py-20 relative">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
            >
                <div className="flex flex-col items-center mb-16">
                    <h2 className="text-3xl font-bold text-slate-100">Skills & Technologies</h2>
                    <div className="w-16 h-1 bg-blue-500 rounded mt-4"></div>
                </div>

                <div className="space-y-16">
                    {skillCategories.map((category, catIndex) => (
                        <div key={catIndex}>
                            <h3 className="text-xl font-semibold text-slate-300 mb-6 flex items-center">
                                <span className="bg-slate-800 p-2 rounded-lg mr-3 text-blue-400">
                                    {/* Small aesthetic indicator */}
                                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                                </span>
                                {category.title}
                            </h3>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                                {category.skills.map((skill, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true, margin: "-50px" }}
                                        transition={{ duration: 0.3, delay: index * 0.05 }}
                                        whileHover={{ y: -5, scale: 1.05 }}
                                        className="flex items-center space-x-3 p-4 bg-slate-900 border border-slate-800 rounded-xl shadow-sm hover:shadow-md hover:border-slate-700 transition-all duration-300 cursor-default group"
                                    >
                                        <div className="group-hover:scale-110 transition-transform duration-300">
                                            {skill.icon}
                                        </div>
                                        <span className="font-medium text-slate-300 group-hover:text-white transition-colors duration-300">
                                            {skill.name}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
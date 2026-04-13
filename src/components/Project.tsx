"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Project() {
    const projects = [
        {
            title: "TomatoNet",
            description: "A machine learning model and web interface using Python and CNN to detect agricultural diseases specifically in tomato plants.",
            tech: ["Python", "CNN", "TensorFlow", "Streamlit"],
            link: "#",
            color: "from-red-500/80 to-orange-500/80"
        },
        {
            title: "Rizquna Bakery",
            description: "Ecommerce website for bakery business. Features include product management, order management, and user management.",
            tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
            link: "#",
            color: "from-blue-500/80 to-cyan-500/80"
        },
        {
            title: "GameShelf",
            description: "Website for Gamers to Discover, track, and share your favorite video games — all in one place.",
            tech: ["Next.js", "TailwindCSS", "TypeScript", "PostgreSQL", "Prisma"],
            link: "#",
            color: "from-purple-500/80 to-pink-500/80"
        }
    ];

    return (
        <section id="projects" className="py-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
            >
                <div className="flex flex-col items-center mb-12">
                    <h2 className="text-3xl font-bold text-slate-100">Featured Projects</h2>
                    <div className="w-16 h-1 bg-blue-500 rounded mt-4"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
                            whileHover={{ y: -8 }}
                            className="group bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-sm shadow-slate-950/50 hover:shadow-[0_10px_30px_rgba(59,130,246,0.1)] transition-all duration-300 flex flex-col h-full"
                        >
                            {/* Gradient Placeholder Images */}
                            <div className={`h-48 w-full bg-gradient-to-br ${item.color} relative overflow-hidden`}>
                                <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors duration-300"></div>
                                <motion.div
                                    className="absolute -right-10 -bottom-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"
                                    animate={{ scale: [1, 1.2, 1] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                ></motion.div>
                            </div>

                            <div className="p-8 flex flex-col flex-grow">
                                <h3 className="font-bold text-xl mb-3 text-slate-100 group-hover:text-blue-400 transition-colors duration-300">{item.title}</h3>
                                <p className="text-slate-400 mb-6 flex-grow leading-relaxed">{item.description}</p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {item.tech.map((t, i) => (
                                        <span key={i} className="px-3 py-1 bg-slate-800/50 border border-slate-700/50 text-slate-300 text-xs font-medium rounded-full">
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                <a href={item.link} className="inline-flex items-center text-blue-400 font-medium hover:text-blue-300 transition-colors group/link mt-auto">
                                    View Project
                                    <ArrowUpRight className="ml-1 w-4 h-4 transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 transition-transform" />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
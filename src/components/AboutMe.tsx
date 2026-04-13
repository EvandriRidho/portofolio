"use client";
import { motion } from "framer-motion";

export default function AboutMe() {
    return (
        <section id="about" className="py-20 overflow-hidden">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-3xl font-bold mb-8 text-center text-slate-100">About Me</h2>
                <div className="bg-slate-900 p-8 sm:p-10 rounded-3xl shadow-lg shadow-slate-950/50 border border-slate-800 relative overflow-hidden">
                    {/* Decorative element */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-900/20 rounded-bl-full pointer-events-none -z-10" />

                    <div className="space-y-6">
                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-slate-300 leading-relaxed text-lg"
                        >
                            A final-year student at Universitas Gunadarma with a strong focus on information technology and data-driven solutions. I possess technical proficiency in Python, TypeScript, and PHP, which I have applied to diverse projects including a machine learning-based plant disease detection system (TomatoLeafDisease) and digital platforms like Rizquna Bakery and GameShelf. Known for strong problem-solving abilities, efficient time management, and a collaborative teamwork mindset, I am now seeking to leverage my skills as a Data Analyst or Software Engineer to build innovative and impactful digital solutions.
                        </motion.p>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
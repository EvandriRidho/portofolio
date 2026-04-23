"use client";
import { motion } from "framer-motion";

export default function AboutMe() {
    return (
        <section id="about" className="py-20 overflow-hidden">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
            >
                <h2 className="text-3xl font-bold mb-8 text-center text-slate-100">About Me</h2>
                <div className="bg-slate-900 p-8 sm:p-10 rounded-3xl shadow-lg shadow-slate-950/50 border border-slate-800 relative overflow-hidden">
                    {/* Decorative element */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-900/20 rounded-bl-full pointer-events-none -z-10" />

                    <div className="space-y-6">
                        <motion.p
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.1 }}
                            className="text-slate-300 leading-relaxed text-lg"
                        >
                            As a final-year Information Technology student at Universitas Gunadarma, I am deeply passionate about building data-driven solutions and innovative digital platforms. I have cultivated a robust technical foundation in Python, TypeScript, and PHP, which allows me to seamlessly bridge the gap between complex analytical logic and engaging user experiences. I approach my work with a strong sense of purpose, driven by a commitment to continuous growth and building tools that create real value.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
                            className="text-slate-300 leading-relaxed text-lg"
                        >
                            My hands-on experience spans across several impactful projects where I take full ownership of the technical and architectural decisions I make. I developed "Tomato Leaf Diseases," a machine learning-based detection system that leverages computer vision to identify agricultural anomalies. Furthermore, I engineered end-to-end digital platforms like "Rizquna Bakery", "GameShelf", and "SparePart Monitoring". In every project I undertake, I stand firmly and proudly by my execution, ensuring the delivery of scalable, efficient, and well-crafted applications.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.3 }}
                            className="text-slate-300 leading-relaxed text-lg"
                        >
                            Beyond my technical capabilities, I bring strong problem-solving skills, efficient time management, and a collaborative yet highly independent mindset to the table. I am currently seeking opportunities as a Data Analyst or Software Engineer, where I can leverage my expertise to tackle complex challenges head-on. I am eager to bring my authentic self and technical adaptability to a forward-thinking team, ready to contribute to meaningful and impactful digital solutions.
                        </motion.p>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
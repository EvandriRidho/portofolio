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
                            I am a final-year Informatics student actively seeking full-time opportunities as a Software Engineer. Driven by a "learn-by-doing" mindset, I am passionate about building practical, scalable applications that not only work seamlessly but also solve real business problems.
                        </motion.p>
                        <motion.p 
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-slate-300 leading-relaxed text-lg"
                        >
                            My core technical foundation lies in full-stack web development. I have hands-on experience building robust systems using Node.js (Express), React, Next.js, and Laravel, supported by scalable database architectures across MongoDB, MySQL, and PostgreSQL. Currently, I am pushing my technical boundaries into the AI space. I am in the active development phase of my thesis, TomatoNet, where I am building a Machine Learning model using Python and Convolutional Neural Networks (CNN) to detect agricultural diseases, bridging complex backend logic with user-facing web interfaces.
                        </motion.p>
                        <motion.p 
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="text-slate-300 leading-relaxed text-lg"
                        >
                            What sets me apart as an engineer is my dual perspective on software development. During my internship at PT Pelita Air Service, I worked in a hybrid role combining Frontend Development with Business Analysis. By gathering requirements, writing BRDs and FRDs, and communicating directly with stakeholders, I learned how to translate high-level business goals into actionable technical requirements.
                        </motion.p>
                        <motion.p 
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="text-slate-300 leading-relaxed text-lg"
                        >
                            I am a fast learner who thrives on continuous improvement. Alongside coding, I am actively sharpening my English proficiency and deepening my knowledge in Python and Machine Learning to stay adaptable in a fast-paced tech landscape. I am fully ready to bring my blend of technical engineering, business understanding, and strong problem-solving skills to a forward-thinking development team.
                        </motion.p>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
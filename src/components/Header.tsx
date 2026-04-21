"use client";
import { motion } from "framer-motion";

export default function Header() {
    return (
        <section id="home" className="relative flex min-h-screen flex-col items-center justify-center text-center py-20 overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl opacity-20 pointer-events-none -z-10">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 90, 0],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500 rounded-full mix-blend-screen filter blur-[100px] opacity-70"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        rotate: [0, -90, 0],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-purple-500 rounded-full mix-blend-screen filter blur-[100px] opacity-70"
                />
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="inline-block mb-4 px-4 py-1.5 rounded-full border border-blue-900/50 bg-blue-900/20 text-blue-400 text-sm font-semibold tracking-wide backdrop-blur-sm"
            >
                Available for new opportunities
            </motion.div>

            <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                className="text-5xl font-extrabold tracking-tight sm:text-7xl lg:text-8xl text-slate-100 drop-shadow-sm"
            >
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Evandri</span>
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
                className="mt-6 text-lg sm:text-xl md:text-2xl text-slate-400 max-w-2xl px-4"
            >
                Software Engineer <span className="hidden sm:inline">|</span><span className="sm:hidden block"></span> Machine Learning Engineer <span className="hidden sm:inline"></span>
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.7, ease: "easeOut" }}
                className="mt-10 flex flex-col sm:flex-row gap-4"
            >
                <a
                    href="/cv/CV_Evandri.pdf"
                    download="CV_Evandri.pdf"
                    className="px-8 py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_25px_rgba(37,99,235,0.5)] transform hover:-translate-y-1">
                    Download CV
                </a>
                <a href="#contact" className="px-8 py-3 rounded-full bg-slate-900 text-slate-300 border border-slate-700 font-medium hover:bg-slate-800 hover:text-white transition-colors shadow-sm transform hover:-translate-y-1">
                    Get in Touch
                </a>
            </motion.div>
        </section>
    );
}
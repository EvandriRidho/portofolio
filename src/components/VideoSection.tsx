"use client";
import { motion } from "framer-motion";

export default function VideoSection() {
    return (
        <section id="video-intro" className="pb-20 overflow-hidden">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-3xl font-bold mb-8 text-center text-slate-100">Introduction Video</h2>
                <div className="bg-slate-900 p-4 sm:p-8 rounded-3xl shadow-lg shadow-slate-950/50 border border-slate-800 relative overflow-hidden flex flex-col items-center">
                    {/* Decorative element */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-900/20 rounded-bl-full pointer-events-none -z-10" />
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-900/10 rounded-tr-full pointer-events-none -z-10" />

                    <div className="w-full max-w-3xl aspect-video bg-slate-950 rounded-2xl overflow-hidden border border-slate-700/50 shadow-md relative">
                        <video
                            className="w-full h-full object-cover"
                            controls
                            preload="metadata"
                        >
                            <source src="/videos/video-perkenalan-asah.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <p className="mt-6 text-slate-400 text-center text-sm max-w-2xl">
                        Watch this introduction video to learn more about me, my interests, and my passion in the field of technology.
                    </p>
                </div>
            </motion.div>
        </section>
    );
}

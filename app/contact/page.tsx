"use client";

import { motion } from "framer-motion";
import { MessageCircle, Github, Linkedin } from "lucide-react";

export default function ContactPage() {
    const contacts = [
        {
            icon: <MessageCircle className="w-5 h-5" />,
            label: "WhatsApp",
            href: "https://wa.me/6281296957950?text=Hi%20Evandri!%20I%27m%20interested%20in%20your%20work.",
        },
        {
            icon: <Github className="w-5 h-5" />,
            label: "GitHub",
            href: "https://github.com/EvandriRidho",
        },
        {
            icon: <Linkedin className="w-5 h-5" />,
            label: "LinkedIn",
            href: "https://www.linkedin.com/in/evandri-ridho-hasmono-366619293/",
        },
    ];

    return (
        <main className="min-h-screen flex flex-col items-center justify-center text-center px-6">
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl font-bold mb-8"
            >
                Contact Me
            </motion.h1>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-gray-400 max-w-xl mb-10"
            >
                Feel free to reach out for collaborations, internships, or just a friendly chat!
            </motion.p>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex flex-col md:flex-row gap-6"
            >
                {contacts.map((contact, i) => (
                    <a
                        key={i}
                        href={contact.href}
                        target="_blank"
                        className="flex items-center gap-2 border border-gray-700 hover:border-blue-500 px-6 py-3 rounded-lg text-gray-300 hover:text-white transition"
                    >
                        {contact.icon}
                        {contact.label}
                    </a>
                ))}
            </motion.div>
        </main>
    );
}

import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";

export default function Hero() {
    return (
        <section className="min-h-[90vh] flex flex-col items-center justify-center text-center space-y-8 py-20">
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative"
            >
                <div className="absolute inset-0 bg-brand-primary/20 blur-3xl rounded-full" />
                <img
                    src="/profile.jpg"
                    alt="Rudra Madhab Mahanty"
                    className="w-32 h-32 md:w-48 md:h-48 rounded-full border-4 border-white/10 relative z-10 object-cover shadow-2xl"
                />
                <div className="absolute -bottom-2 -right-2 glass px-4 py-1.5 rounded-full text-[10px] md:text-sm font-medium border-white/10 z-20">
                    Available for Hire
                </div>
            </motion.div>

            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-4xl md:text-7xl font-bold tracking-tight px-4"
            >
                Crafting <span className="text-gradient">Scalable</span> <br />
                Legacy Code to Future-Ready.
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-base md:text-lg text-secondary max-w-2xl px-6 leading-relaxed"
            >
                Hi, I'm <span className="text-brand-primary dark:text-brand-secondary font-bold">Rudra Madhab Mahanty</span>.
                A Full-Stack Developer specializing in React, Node.js, and AI-powered applications,
                delivering scalable systems with measurable performance impact.
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 pt-4"
            >
                <a
                    href="#projects"
                    className="px-8 py-3 rounded-full bg-brand-primary text-white font-medium flex items-center gap-2 hover:bg-indigo-700 transition-all hover:scale-105 active:scale-95"
                >
                    View Projects <ArrowRight size={18} />
                </a>
                <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://drive.google.com/file/d/1YnfhF2IW3GF_bgdFsVCAtxa86Fb20Q4a/view?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 border border-white/10 rounded-2xl font-bold flex items-center gap-2 hover:bg-white/5 transition-all text-gray-700 dark:text-gray-300"
                >
                    Resume <ExternalLink size={20} />
                </motion.a>
            </motion.div>

            {/* Decorative blobs */}
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-brand-primary/20 blur-[120px] -z-10 rounded-full animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-brand-secondary/20 blur-[120px] -z-10 rounded-full animate-pulse delay-700" />
        </section>
    );
}

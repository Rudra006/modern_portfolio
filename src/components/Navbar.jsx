import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Github, Linkedin, Menu, X } from "lucide-react";

export default function Navbar({ theme, toggleTheme }) {
    const [isOpen, setIsOpen] = useState(false);
    const navLinks = ["About", "Skills", "Experience", "Projects", "Contact"];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="fixed top-0 left-0 right-0 z-50 px-4 py-4 flex justify-center"
        >
            <div className="glass px-6 py-3 rounded-3xl md:rounded-full flex items-center justify-between w-full max-w-5xl">
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2 cursor-pointer"
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                >
                    <img src="/vite.svg" alt="R Logo" className="w-8 h-8" />
                    <span className="text-xl font-bold text-gradient">RMM.</span>
                </motion.div>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8 font-medium">
                    {navLinks.map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="hover:text-brand-primary transition-colors text-sm"
                        >
                            {item}
                        </a>
                    ))}
                </div>

                <div className="flex items-center gap-2 md:gap-4">
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full hover:bg-white/10 transition-colors"
                    >
                        {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                    </button>

                    <div className="h-6 w-[1px] bg-white/20 hidden md:block" />

                    <div className="hidden md:flex items-center gap-3">
                        <a href="https://github.com/Rudra006" target="_blank" rel="noreferrer">
                            <Github size={18} className="hover:text-brand-primary transition-colors" />
                        </a>
                        <a href="https://linkedin.com/in/rudra-madhab-mahanty" target="_blank" rel="noreferrer">
                            <Linkedin size={18} className="hover:text-brand-primary transition-colors" />
                        </a>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden p-2"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-20 left-4 right-4 glass p-6 rounded-3xl md:hidden flex flex-col gap-4 z-40"
                    >
                        {navLinks.map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                onClick={() => setIsOpen(false)}
                                className="text-lg font-medium hover:text-brand-primary transition-colors"
                            >
                                {item}
                            </a>
                        ))}
                        <div className="flex gap-4 pt-4 border-t border-white/10">
                            <a href="https://github.com/Rudra006" target="_blank" rel="noreferrer">
                                <Github size={20} />
                            </a>
                            <a href="https://linkedin.com/in/rudra-madhab-mahanty" target="_blank" rel="noreferrer">
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}

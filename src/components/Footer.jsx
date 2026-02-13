import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-12 border-t border-white/5">
            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="space-y-2 text-center md:text-left">
                    <h3 className="text-2xl font-bold text-gradient">RMM.</h3>
                    <p className="text-sm text-gray-500">
                        © {currentYear} Rudra Madhab Mahanty. All rights reserved.
                    </p>
                </div>

                <div className="flex items-center gap-6">
                    <a href="https://github.com/Rudra006" target="_blank" rel="noreferrer" className="p-2 hover:text-brand-primary transition-colors">
                        <Github size={20} />
                    </a>
                    <a href="https://linkedin.com/in/rudra-madhab-mahanty" target="_blank" rel="noreferrer" className="p-2 hover:text-brand-primary transition-colors">
                        <Linkedin size={20} />
                    </a>
                    <a href="mailto:rudramadhab006@gmail.com" className="p-2 hover:text-brand-primary transition-colors">
                        <Mail size={20} />
                    </a>
                </div>

                <div className="flex items-center gap-1.5 text-sm text-gray-500 font-medium">
                    Built with <Heart size={14} className="text-red-500 fill-red-500" /> by Rudra
                </div>
            </div>
        </footer>
    );
}

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Github, ExternalLink, Code2, Globe, MessageSquare, Briefcase } from "lucide-react";

const projects = [
    {
        title: "RFP Management System",
        tech: ["Node.js", "GPT-4", "IMAP", "PostgreSQL"],
        desc: "AI-driven workflow: NL to structured RFP, vendor management, and automated proposal analysis via IMAP parsing.",
        github: "https://github.com/Rudra006/RFP_management_system",
        demo: "#",
        icon: <Briefcase className="text-white/40" size={48} />
    },
    {
        title: "Rezzy – LLM Study Assistant",
        tech: ["LangChain", "React Native", "TypeScript", "ChromaDB"],
        desc: "Cross-platform AI assistant enabling semantic search and RAG over study materials.",
        github: "https://github.com/Rudra006/rezzy_study_assistant",
        demo: "https://drive.google.com/file/d/1er9bzXR29x9gD_B3nKb2NnUbwcB_sDPW/view?usp=drive_link",
        icon: <Globe className="text-white/40" size={48} />
    },
    {
        title: "Chatboat Flow Editor",
        tech: ["React", "React Flow", "Tailwind"],
        desc: "Visual node-based editor for designing complex chatbot conversation flows with real-time preview.",
        github: "https://github.com/Rudra006/chatboat-flow-editor",
        demo: "https://chatboat-flow-editor.vercel.app/",
        icon: <MessageSquare className="text-white/40" size={48} />
    },
    {
        title: "HRMS System",
        tech: ["MERN", "JWT", "Geolocation"],
        desc: "Professional attendance, salary, and leave management system for enterprises.",
        github: "https://github.com/Rudra006",
        demo: "https://neo-hrms-test.neophyte.live/",
        icon: <Code2 className="text-white/40" size={48} />
    },
    {
        title: "WhatsApp Translator",
        tech: ["JS", "Chrome API", "AI"],
        desc: "Chrome extension for real-time translation and sentiment analysis in WhatsApp Web.",
        github: "https://github.com/Rudra006/whatsapp-translate-extension",
        demo: "#",
        icon: <MessageSquare className="text-white/40" size={48} />
    },
    {
        title: "Weather App",
        tech: ["React", "Vite", "OpenWeather"],
        desc: "Sub-50KB hyper-fast weather forecasting application with efficient caching.",
        github: "https://github.com/Rudra006/WeatherApp",
        demo: "https://weather-app-eta-jade.vercel.app/",
        icon: <Globe className="text-white/40" size={48} />
    }
];

function ProjectCard({ proj }) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="group glass relative overflow-hidden rounded-3xl h-[450px]"
        >
            <div
                style={{ transform: "translateZ(75px)", transformStyle: "preserve-3d" }}
                className="h-full flex flex-col"
            >
                <div className="h-48 bg-gradient-to-br from-brand-primary/20 to-brand-secondary/20 relative flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 group-hover:scale-110 transition-transform duration-500 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop')] bg-cover bg-center opacity-20" />
                    <div className="z-10 group-hover:scale-110 transition-all duration-500">
                        {proj.icon}
                    </div>
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-6 z-30" style={{ transform: "translateZ(100px)" }}>
                        <a href={proj.github} target="_blank" rel="noreferrer" className="p-4 bg-white rounded-2xl text-black hover:bg-brand-primary hover:text-white hover:scale-110 transition-all shadow-xl" title="View Code">
                            <Github size={24} />
                        </a>
                        {proj.demo !== "#" && (
                            <a href={proj.demo} target="_blank" rel="noreferrer" className="p-4 bg-white rounded-2xl text-black hover:bg-brand-secondary hover:text-white hover:scale-110 transition-all shadow-xl" title="Live Demo">
                                <ExternalLink size={24} />
                            </a>
                        )}
                    </div>
                </div>

                <div className="p-8 space-y-4 flex-grow flex flex-col">
                    <div className="flex flex-wrap gap-2">
                        {proj.tech.map(t => (
                            <span key={t} className="text-[10px] uppercase tracking-wider font-bold px-3 py-1 bg-brand-primary/10 text-brand-primary rounded-full">{t}</span>
                        ))}
                    </div>
                    <h3 className="text-2xl font-bold">{proj.title}</h3>
                    <p className="text-secondary text-sm leading-relaxed line-clamp-4">{proj.desc}</p>
                </div>
            </div>
        </motion.div>
    );
}

export default function Projects() {
    return (
        <section id="projects" className="py-24 space-y-16">
            <div className="flex flex-col items-center text-center space-y-4">
                <h2 className="text-4xl font-bold">Featured <span className="text-brand-primary">Projects</span></h2>
                <div className="h-1 w-20 bg-brand-primary rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
                {projects.map((proj, idx) => (
                    <ProjectCard key={idx} proj={proj} />
                ))}
            </div>

            <div className="flex justify-center pt-8">
                <motion.a
                    whileHover={{ scale: 1.05 }}
                    href="https://github.com/Rudra006"
                    target="_blank"
                    className="glass px-10 py-4 rounded-2xl font-bold flex items-center gap-3 hover:bg-white/10 transition-all"
                >
                    View Full Portfolio on GitHub <Github size={20} />
                </motion.a>
            </div>
        </section>
    );
}

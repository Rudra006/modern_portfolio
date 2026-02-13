import { motion } from "framer-motion";
import { Code2, Database, Layout, Server, Cpu, Globe, Terminal, Cloud, Search } from "lucide-react";

const skillCategories = [
    {
        title: "Frontend Development",
        icon: <Layout className="text-brand-primary" size={24} />,
        skills: ["React.js", "Redux", "Zustand", "Tailwind CSS", "Material-UI", "Electron.js", "React Native", "Cypress", "Streamlit"],
        color: "from-blue-500/20 to-cyan-500/20"
    },
    {
        title: "Backend Development",
        icon: <Server className="text-brand-secondary" size={24} />,
        skills: ["Node.js", "Express.js", "REST/GraphQL APIs", "MongoDB", "PostgreSQL", "MySQL", "Postman"],
        color: "from-purple-500/20 to-pink-500/20"
    },
    {
        title: "Cloud & DevOps",
        icon: <Cloud className="text-cyan-400" size={24} />,
        skills: ["AWS (S3, Lambda)", "Azure Functions", "Docker", "GitHub Actions", "CI/CD"],
        color: "from-cyan-500/20 to-blue-500/20"
    },
    {
        title: "Languages",
        icon: <Terminal className="text-emerald-400" size={24} />,
        skills: ["JavaScript", "TypeScript", "Python", "C/C++"],
        color: "from-emerald-500/20 to-teal-500/20"
    },
    {
        title: "AI & NLP",
        icon: <Cpu className="text-indigo-400" size={24} />,
        skills: ["OpenAI API", "LangChain", "LangGraph", "Google ADK", "N8N"],
        color: "from-indigo-500/20 to-purple-500/20"
    }
];

export default function Skills() {
    return (
        <section id="skills" className="py-24 space-y-16">
            <div className="flex flex-col items-center text-center space-y-4">
                <h2 className="text-4xl font-bold">Tech <span className="text-brand-primary">Stack</span></h2>
                <p className="text-secondary max-w-xl">A comprehensive set of tools and technologies I use to bring ideas to life.</p>
                <div className="h-1 w-20 bg-brand-primary rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
                {skillCategories.map((cat, idx) => (
                    <motion.div
                        key={cat.title}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className={`glass p-8 rounded-3xl relative overflow-hidden group`}
                    >
                        <div className={`absolute inset-0 bg-gradient-to-br ${cat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                        <div className="relative z-10 space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-white/5 rounded-2xl border border-white/10">
                                    {cat.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-[var(--color-heading)] transition-colors">{cat.title}</h3>
                            </div>

                            <div className="flex flex-wrap gap-3">
                                {cat.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-4 py-2 rounded-xl bg-white/5 border border-gray-200 dark:border-white/10 hover:border-brand-primary/50 hover:bg-brand-primary/5 transition-all cursor-default text-sm font-medium text-secondary hover:text-brand-primary"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

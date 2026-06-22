import { motion } from "framer-motion";
import { Layers, Zap, Radio, Cloud } from "lucide-react";

const features = [
    {
        icon: <Layers className="text-brand-primary" size={24} />,
        title: "SaaS Dashboard Engineering",
        desc: "Angular.js + NgRx applications with complex state, D3.js/Chart.js visualizations, and multi-client data isolation."
    },
    {
        icon: <Zap className="text-brand-secondary" size={24} />,
        title: "Python Microservices",
        desc: "FastAPI and Django services with async Python, Pydantic contracts, OAuth2 + JWT auth, and independent deployment."
    },
    {
        icon: <Radio className="text-cyan-500" size={24} />,
        title: "Streaming AI Interfaces",
        desc: "Live token-by-token AI responses over SSE and WebSockets — with thinking states, abort controls, and sub-second first paint."
    },
    {
        icon: <Cloud className="text-orange-500" size={24} />,
        title: "Cloud & CI/CD",
        desc: "Azure-first deployments, Docker containerisation, and GitHub Actions pipelines that gate every merge with Cypress and pytest."
    }
];

export default function About() {
    return (
        <section id="about" className="py-24 space-y-16">
            <div className="flex flex-col items-center text-center space-y-4">
                <h2 className="text-4xl font-bold">About <span className="text-brand-primary">Me</span></h2>
                <div className="h-1 w-20 bg-brand-primary rounded-full" />
                <p className="max-w-3xl text-secondary text-base md:text-lg pt-4 leading-relaxed">
                    Full Stack Developer with 2+ years shipping complete products end-to-end. I work across
                    Angular.js SaaS platforms, Python microservice backends, and AI-powered interfaces —
                    comfortable from database query plans all the way to GitHub Actions pipelines.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
                {features.map((feature, idx) => (
                    <motion.div
                        key={idx}
                        whileHover={{ y: -10 }}
                        className="glass p-8 rounded-3xl space-y-4 transition-all duration-300 hover:border-brand-primary/50"
                    >
                        <div className="p-3 bg-white/5 w-fit rounded-2xl">
                            {feature.icon}
                        </div>
                        <h3 className="text-xl font-semibold">{feature.title}</h3>
                        <p className="text-secondary text-sm leading-relaxed">
                            {feature.desc}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

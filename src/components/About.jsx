import { motion } from "framer-motion";
import { Code, Server, Layout, Cpu } from "lucide-react";

const features = [
    {
        icon: <Layout className="text-brand-primary" size={24} />,
        title: "Frontend Development",
        desc: "Crafting responsive and interactive UIs using React and modern CSS."
    },
    {
        icon: <Server className="text-brand-secondary" size={24} />,
        title: "Backend Solutions",
        desc: "Building scalable APIs and server-side logic with Node.js and Express."
    },
    {
        icon: <Cpu className="text-cyan-500" size={24} />,
        title: "Performance Optimization",
        desc: "Streamlining code and assets for lightning-fast load times."
    },
    {
        icon: <Code className="text-orange-500" size={24} />,
        title: "Clean Code",
        desc: "Writing maintainable, well-documented code with strong architectures."
    }
];

export default function About() {
    return (
        <section id="about" className="py-24 space-y-16">
            <div className="flex flex-col items-center text-center space-y-4">
                <h2 className="text-4xl font-bold">About <span className="text-brand-primary">Me</span></h2>
                <div className="h-1 w-20 bg-brand-primary rounded-full" />
                <p className="max-w-3xl text-secondary text-base md:text-lg pt-4 leading-relaxed">
                    Results-driven Full-Stack Developer with nearly 2 years of experience crafting scalable web solutions.
                    I specialize in enhancing performance, streamlining API integrations, and delivering intuitive,
                    cloud-ready applications with a strong focus on user experience.
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

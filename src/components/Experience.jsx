import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";
import { useRef } from "react";

const experiences = [
    {
        role: "Full-Stack Developer",
        company: "Neophyte Ambient Intelligence",
        location: "Navi Mumbai",
        period: "Dec 2023 – Present",
        achievements: [
            "Achieved 20% improvement in React app initial load time via code partitioning.",
            "Engineered APIs leading to a 25% decrease in server response latency.",
            "Designed interactive KPI charts using ApexCharts and Recharts.",
            "Accelerated decision-making by 30% through intuitive analytics."
        ]
    },
    {
        role: "Intern",
        company: "DRDO Integrated Test Range",
        location: "Chandipur",
        period: "Jun 2023 – Jul 2023",
        achievements: [
            "Developed PyQt4-based GUI for flight simulation, reducing setup time by 40%.",
            "Integrated real-time telemetry visualization dashboards."
        ]
    },
    {
        role: "React Developer Intern",
        company: "Edunet Foundation",
        location: "Remote",
        period: "Aug 2022 – Oct 2022",
        achievements: [
            "Designed React UI components increasing user interaction by 20%.",
            "Integrated PHP/MySQL APIs to optimize content delivery."
        ]
    }
];

export default function Experience() {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start center", "end center"]
    });

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <section id="experience" ref={sectionRef} className="py-24 space-y-16">
            <div className="flex flex-col items-center text-center space-y-4">
                <h2 className="text-4xl font-bold">Work <span className="text-brand-primary">Journey</span></h2>
                <div className="h-1.5 w-24 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full" />
            </div>

            <div className="max-w-4xl mx-auto space-y-12 relative px-4">
                {/* Fixed Background Line */}
                <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-white/5 -translate-x-1/2 rounded-full" />

                {/* Animated Progress Line */}
                <motion.div
                    style={{ scaleY, transformOrigin: "top" }}
                    className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-brand-primary via-brand-secondary to-indigo-500 -translate-x-1/2 rounded-full z-0"
                />

                {experiences.map((exp, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: idx % 2 === 0 ? 50 : -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7, delay: idx * 0.1 }}
                        className={`relative flex flex-col md:flex-row items-center gap-8 ${idx % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                    >
                        {/* Static/Animated Dot */}
                        <div className="absolute left-8 md:left-1/2 w-10 h-10 rounded-2xl bg-gray-900 border-2 border-white/10 flex items-center justify-center -translate-x-1/2 z-10 shadow-2xl">
                            <motion.div
                                whileInView={{ rotate: 360, scale: [1, 1.2, 1] }}
                                viewport={{ once: false }}
                                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                className="text-brand-primary"
                            >
                                <Briefcase size={18} />
                            </motion.div>
                        </div>

                        <div className="w-full md:w-1/2 pl-12 md:pl-0">
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                className="glass p-8 rounded-[2rem] space-y-4 hover:border-brand-primary/40 transition-all group"
                            >
                                <div className="flex flex-wrap items-center justify-between gap-2 overflow-hidden">
                                    <span className="text-xl font-bold bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">{exp.role}</span>
                                    <div className="flex items-center gap-2 text-xs font-bold text-secondary px-4 py-1.5 glass rounded-full border-white/5">
                                        <Calendar size={12} className="text-brand-secondary" /> {exp.period}
                                    </div>
                                </div>
                                <div className="space-y-1">
                                    <h4 className="text-2xl font-black tracking-tight">{exp.company}</h4>
                                    <p className="text-sm text-secondary font-medium flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-brand-primary" /> {exp.location}
                                    </p>
                                </div>
                                <ul className="space-y-3 pt-2">
                                    {exp.achievements.map((ach, i) => (
                                        <li key={i} className="text-sm text-secondary leading-relaxed flex gap-3 group-hover:text-gray-200 transition-colors">
                                            <span className="text-brand-primary font-black mt-1">→</span> {ach}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        </div>
                        <div className="md:w-1/2 hidden md:block" />
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

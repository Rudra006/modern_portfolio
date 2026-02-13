import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageCircle, Github, Linkedin, ExternalLink } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/5 blur-[120px] -z-10 rounded-full" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-secondary/5 blur-[120px] -z-10 rounded-full" />

            <div className="max-w-6xl mx-auto px-4">
                <div className="flex flex-col items-center text-center space-y-4 mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold">Get In <span className="text-brand-primary">Touch</span></h2>
                    <p className="text-secondary max-w-xl text-lg">Have a project in mind or just want to chat? I'm always open to new opportunities and collaborations.</p>
                    <div className="h-1.5 w-24 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                    {/* Left: Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-10"
                    >
                        <div className="space-y-6">
                            <h3 className="text-3xl font-bold text-center lg:text-left leading-tight">
                                Let's build something <span className="text-gradient">extraordinary</span> together.
                            </h3>
                            <p className="text-secondary text-center lg:text-left text-lg leading-relaxed">
                                I'm currently available for freelance work and full-time positions.
                                Reach out via the form, or through my social channels below.
                            </p>
                        </div>

                        <div className="space-y-4 max-w-md mx-auto lg:mx-0">
                            <a href="mailto:rudramadhab006@gmail.com" className="group flex items-center gap-6 p-6 glass rounded-3xl hover:border-brand-primary/50 transition-all border border-transparent">
                                <div className="p-4 bg-brand-primary/10 rounded-2xl text-brand-primary group-hover:scale-110 transition-transform">
                                    <Mail size={28} />
                                </div>
                                <div>
                                    <p className="text-[10px] text-brand-primary uppercase tracking-widest font-black mb-1">Email Me</p>
                                    <p className="font-bold text-lg group-hover:text-brand-primary transition-colors">rudramadhab006@gmail.com</p>
                                </div>
                                <ExternalLink size={16} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                            </a>

                            <a href="tel:+917437865981" className="group flex items-center gap-6 p-6 glass rounded-3xl hover:border-brand-secondary/50 transition-all border border-transparent">
                                <div className="p-4 bg-brand-secondary/10 rounded-2xl text-brand-secondary group-hover:scale-110 transition-transform">
                                    <Phone size={28} />
                                </div>
                                <div>
                                    <p className="text-[10px] text-brand-secondary uppercase tracking-widest font-black mb-1">Call Me</p>
                                    <p className="font-bold text-lg group-hover:text-brand-secondary transition-colors">+91 7437865981</p>
                                </div>
                                <ExternalLink size={16} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                            </a>

                            <div className="group flex items-center gap-6 p-6 glass rounded-3xl border border-transparent">
                                <div className="p-4 bg-indigo-400/10 rounded-2xl text-indigo-400 group-hover:scale-110 transition-transform">
                                    <MapPin size={28} />
                                </div>
                                <div>
                                    <p className="text-[10px] text-brand-primary uppercase tracking-widest font-black mb-1">Location</p>
                                    <p className="font-bold text-lg">Navi Mumbai, India</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-center lg:justify-start gap-4 pt-4">
                            {[
                                { icon: <Github size={22} />, link: "https://github.com/Rudra006", label: "GitHub" },
                                { icon: <Linkedin size={22} />, link: "https://www.linkedin.com/in/rudra-madhab-mahanty-973811203/", label: "LinkedIn" },
                                { icon: <MessageCircle size={22} />, link: "https://wa.me/917437865981", label: "WhatsApp" }
                            ].map((social, i) => (
                                <a
                                    key={i}
                                    href={social.link}
                                    target="_blank"
                                    aria-label={social.label}
                                    className="p-4 glass rounded-2xl text-secondary hover:text-brand-primary hover:border-brand-primary/50 transition-all hover:scale-110 active:scale-95"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right: Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="absolute -inset-1 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-[2.5rem] blur opacity-10 group-hover:opacity-20 transition duration-1000 group-hover:duration-200"></div>
                        <div className="glass p-8 md:p-12 rounded-[2.5rem] relative">
                            <form
                                action="https://formsubmit.co/rudramadhab006@gmail.com"
                                method="POST"
                                className="space-y-6"
                            >
                                {/* FormSubmit Config */}
                                <input type="hidden" name="_subject" value="New Portfolio Inquiry!" />
                                <input type="hidden" name="_template" value="table" />
                                <input type="hidden" name="_captcha" value="false" />
                                <input type="hidden" name="_next" value={typeof window !== 'undefined' ? window.location.href : '#'} />

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-secondary uppercase tracking-widest ml-1">Full Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="John Doe"
                                            required
                                            className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-brand-primary transition-all text-sm backdrop-blur-sm"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-secondary uppercase tracking-widest ml-1">Email Address</label>
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="john@example.com"
                                            required
                                            className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-brand-primary transition-all text-sm backdrop-blur-sm"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-secondary uppercase tracking-widest ml-1">Subject</label>
                                    <input
                                        type="text"
                                        name="_subject_custom"
                                        placeholder="Project Proposal"
                                        required
                                        className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-brand-primary transition-all text-sm backdrop-blur-sm"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-secondary uppercase tracking-widest ml-1">Your Message</label>
                                    <textarea
                                        name="message"
                                        placeholder="Tell me more about your idea..."
                                        rows="5"
                                        required
                                        className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-brand-primary transition-all text-sm resize-none backdrop-blur-sm"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="group w-full py-5 bg-gradient-to-r from-brand-primary to-brand-secondary text-white font-black rounded-2xl flex items-center justify-center gap-3 transition-all hover:shadow-[0_0_30px_rgba(99,102,241,0.4)] active:scale-[0.98]"
                                >
                                    Send Message
                                    <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

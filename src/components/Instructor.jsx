import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin } from 'lucide-react';

export default function Instructor() {
    return (
        <section className="py-24 bg-black/50">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="w-full md:w-1/2"
                    >
                        <div className="relative aspect-square max-w-md mx-auto rounded-3xl overflow-hidden border border-white/10">
                            <img
                                src="/instructor.jpeg"
                                alt="Instructor"
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                            <div className="absolute bottom-6 left-6 text-white">
                                <p className="text-sm font-medium text-green-400 mb-1">YOUR INSTRUCTOR</p>
                                <h3 className="text-2xl font-bold">The JavaScript Chef</h3>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="w-full md:w-1/2"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-8">
                            Learn from Someone Who Actually <span className="text-green-400">Codes Every Day</span>
                        </h2>

                        <div className="space-y-6 text-lg text-gray-400 mb-8">
                            <p>
                                I don't believe in spoon-feeding. I believe in building.
                            </p>
                            <p>
                                Most courses dump 50 hours of video on you and say "Good Luck".
                                In this cohort, we code together. I'll show you how to debug, how to read documentation,
                                and how to think like a senior developer.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-6 mb-8">
                            <div>
                                <h4 className="text-3xl font-bold text-white mb-1">1+ Years</h4>
                                <p className="text-sm text-gray-500">Industry Experience</p>
                            </div>
                            <div>
                                <h4 className="text-3xl font-bold text-white mb-1">45+</h4>
                                <p className="text-sm text-gray-500">Students Taught</p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <a href="https://github.com/suryakanta007" className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
                                <Github className="w-5 h-5" />
                            </a>
                            <a href="https://x.com/_suryakanta07?t=AGO-KKYjJBOAz8_HZ1Gy6A&s=09" className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="https://www.linkedin.com/in/suryakant-sahu-716715273/" className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

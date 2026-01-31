import { motion } from 'framer-motion';
import { ArrowRight, Code2 } from 'lucide-react';
import { LampContainer } from './ui/lamp';

export default function Hero() {
    return (
        <LampContainer className="bg-[#0a0a0a]">
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.3,
                    duration: 0.8,
                    ease: "easeInOut",
                }}
                className="relative z-10 text-center max-w-4xl mx-auto"
            >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 mb-6 backdrop-blur-sm">
                    <span className="flex h-2 w-2 rounded-full animate-pulse" style={{ backgroundColor: 'oklch(0.8 0.13 199.51)' }} />
                    <span className="text-sm font-medium" style={{ color: 'oklch(0.8 0.13 199.51)' }}>Founding Cohort Open</span>
                </div>

                <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-br from-white via-white to-gray-500">
                    Be Among the First 30 to Master JavaScript in Just 4 Weeks
                </h1>

                <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-2xl mx-auto">
                    Join the founding cohort. Build 4 real projects. Learn live from an expert.<br />
                    <span className="text-white font-semibold">All for ₹899.</span>
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-4 bg-[#10b981] hover:bg-[#059669] text-white rounded-full font-bold text-lg transition-colors shadow-[0_0_20px_rgba(16,185,129,0.4)] flex items-center gap-2 cursor-pointer"
                        onClick={() => window.open('https://forms.gle/1ibTMLCtcTJKMKzm8', '_blank')}
                    >
                        Claim Your Spot
                        <ArrowRight className="w-5 h-5" />
                    </motion.button>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-full font-medium text-lg backdrop-blur-sm transition-colors flex items-center gap-2 cursor-pointer"
                        onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        See What You'll Build
                        <Code2 className="w-5 h-5" />
                    </motion.button>
                </div>

                <div className="mt-12 flex items-center justify-center gap-8 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                        <div className="flex -space-x-2">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="w-8 h-8 rounded-full bg-gray-800 border-2 border-black" />
                            ))}
                        </div>
                        <span>12 seats left</span>
                    </div>
                    <div className="w-px h-4 bg-white/10" />
                    <div>Enrollment closes in 5 days</div>
                </div>
            </motion.div>
        </LampContainer>
    );
}

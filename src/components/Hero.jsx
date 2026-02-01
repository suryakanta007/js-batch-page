import { motion } from 'framer-motion';
import { ArrowRight, Code2 } from 'lucide-react';
import { LampContainer } from './ui/lamp';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.3,
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: "easeOut"
        }
    }
};

export default function Hero() {
    return (
        <LampContainer className="bg-[#0a0a0a] -mb-96">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative z-10 text-center max-w-4xl mx-auto flex flex-col items-center pt-[400px] md:pt-[400px]"
            >
                <motion.div
                    variants={itemVariants}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-md shadow-lg shadow-green-900/10 hover:border-white/20 transition-colors"
                >
                    <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ backgroundColor: 'oklch(0.8 0.13 199.51)' }}></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5" style={{ backgroundColor: 'oklch(0.8 0.13 199.51)' }}></span>
                    </span>
                    <span className="text-sm font-semibold tracking-wide" style={{ color: 'oklch(0.8 0.13 199.51)' }}>Founding Cohort Open</span>
                </motion.div>

                <motion.h1
                    variants={itemVariants}
                    className="text-4xl md:text-6xl font-bold tracking-tight mb-8 bg-clip-text text-transparent bg-gradient-to-br from-white via-white to-gray-400 leading-tight"
                >
                    Be Among the First 30 to<br />
                    Master JavaScript in Just 4 Weeks
                </motion.h1>

                <motion.p
                    variants={itemVariants}
                    className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
                >
                    Join the founding cohort. Build 4 real projects. Learn live from an expert.<br />
                    <span className="text-white font-semibold">All for ₹899.</span>
                </motion.p>

                <motion.div
                    variants={itemVariants}
                    className="flex flex-col sm:flex-row items-center justify-center gap-8"
                >
                    <motion.button
                        whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(16,185,129,0.5)" }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-4 bg-[#10b981] hover:bg-[#059669] text-white rounded-full font-bold text-lg transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] flex items-center gap-2 cursor-pointer group"
                        onClick={() => window.open('https://forms.gle/1ibTMLCtcTJKMKzm8', '_blank')}
                    >
                        Claim Your Spot
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </motion.button>

                    <motion.button
                        whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-4 bg-white/5 text-white border border-white/10 rounded-full font-medium text-lg backdrop-blur-sm transition-all flex items-center gap-2 cursor-pointer hover:border-white/30"
                        onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        See What You'll Build
                        <Code2 className="w-5 h-5" />
                    </motion.button>
                </motion.div>

                <motion.div
                    variants={itemVariants}
                    className="mt-16 flex items-center justify-center gap-8 text-sm text-gray-500 font-medium"
                >
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
                </motion.div>
            </motion.div>
        </LampContainer>
    );
}

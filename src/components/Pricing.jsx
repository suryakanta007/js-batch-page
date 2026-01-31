import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';

export default function Pricing() {
    const features = [
        "16 Live Sessions (4 weeks)",
        "4 Real-World Portfolio Projects",
        "Live Q&A & Debugging",
        "Private Community Access",
        "Code Reviews & Feedback",
        "Certificate of Completion"
    ];

    return (
        <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
            <div className="absolute inset-0 bg-green-500/5 blur-[120px]" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Join the Founding Cohort</h2>
                    <p className="text-xl text-gray-400">Lock in the lowest price this course will ever be.</p>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="max-w-md mx-auto p-8 rounded-3xl bg-black border border-green-500/30 shadow-[0_0_50px_rgba(16,185,129,0.1)] relative"
                >
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-green-500 text-black px-6 py-1 rounded-full text-sm font-bold uppercase tracking-wide">
                        Founding Member
                    </div>

                    <div className="text-center mb-8 pt-4">
                        <p className="text-gray-400 line-through text-lg mb-2">₹1,999</p>
                        <div className="flex items-center justify-center gap-1">
                            <span className="text-5xl font-bold text-white">₹899</span>
                            <span className="text-sm text-gray-500 self-end mb-2">/one-time</span>
                        </div>
                    </div>

                    <div className="space-y-4 mb-8">
                        {features.map((feature, i) => (
                            <div key={i} className="flex items-center gap-3">
                                <div className="p-1 rounded-full bg-green-500/10 text-green-500">
                                    <Check className="w-4 h-4" />
                                </div>
                                <span className="text-gray-300">{feature}</span>
                            </div>
                        ))}
                    </div>

                    <button
                        onClick={() => window.open('https://forms.gle/1ibTMLCtcTJKMKzm8', '_blank')}
                        className="w-full py-4 bg-green-500 hover:bg-green-600 text-black font-bold rounded-xl transition-all hover:scale-[1.02] flex items-center justify-center gap-2"
                    >
                        Claim Your Spot
                        <ArrowRight className="w-5 h-5" />
                    </button>

                    <p className="text-center text-xs text-red-400 mt-4 font-medium flex items-center justify-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
                        12 seats remaining
                    </p>
                </motion.div>
            </div>
        </section>
    );
}

import { motion } from 'framer-motion';
import { X, Check } from 'lucide-react';

export default function ProblemSolution() {
    const problems = [
        "YouTube tutorials are scattered and incomplete",
        "Pre-recorded courses feel impersonal and boring",
        "No one to ask when you get stuck",
        "Too much theory, not enough real projects"
    ];

    return (
        <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
            {/* Background gradients */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-green-500/5 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-purple-500/5 rounded-full blur-[100px]" />

            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        Why Most People <span className="text-red-400">Fail</span> to Learn JavaScript
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        (And How We Fix It)
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* The Problem */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="p-8 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-sm"
                    >
                        <h3 className="text-2xl font-bold mb-6 text-gray-300">The "Old Way"</h3>
                        <div className="space-y-4">
                            {problems.map((prob, i) => (
                                <div key={i} className="flex items-start gap-3 text-gray-400">
                                    <X className="w-6 h-6 text-red-400 shrink-0" />
                                    <span>{prob}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* The Solution */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="p-8 rounded-2xl bg-gradient-to-br from-green-500/10 to-green-900/10 border border-green-500/20 backdrop-blur-sm relative"
                    >
                        <div className="absolute -top-4 -right-4 bg-green-500 text-black font-bold px-4 py-1 rounded-full text-sm">
                            THE JAVASCRIPT CHEF WAY
                        </div>

                        <h3 className="text-2xl font-bold mb-6 text-white">The New Way</h3>
                        <p className="text-lg text-gray-300 leading-relaxed">
                            <span className="text-green-400 font-bold">16 live sessions</span> over 4 weeks. Build <span className="text-white font-semibold">4 portfolio-ready projects</span>. Get unstuck instantly with live Q&A. Learn modern JavaScript that employers actually want—not outdated syntax.
                        </p>
                        <div className="mt-8 flex items-center gap-2 text-green-400 font-medium">
                            <Check className="w-5 h-5" />
                            <span>Certified Job-Ready Skills</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

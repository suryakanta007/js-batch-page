import { motion } from 'framer-motion';
import { Globe, Rocket, Briefcase, Zap, Users, Trophy, Code } from 'lucide-react';

const stats = [
    { icon: Globe, value: "98%", label: "of websites use JS" },
    { icon: Users, value: "14M+", label: "Developers Worldwide" },
    { icon: Trophy, value: "#1", label: "Most Popular Language" },
    { icon: Briefcase, value: "₹8 LPA", label: "Avg. Fresher Salary" },
];

const features = [
    {
        icon: Globe,
        title: "It's Everywhere",
        description: "JavaScript powers 98% of all websites. From Google to Netflix, Facebook to Amazon — if it's interactive, it's JavaScript. Learn one language, build anywhere.",
        color: "from-blue-400 to-cyan-400",
        iconColor: "text-blue-400"
    },
    {
        icon: Rocket,
        title: "Easy to Start, Powerful to Master",
        description: "No complex setup needed. Write code directly in your browser and see instant results. JavaScript is the perfect first language — beginner-friendly yet powerful enough for enterprise applications.",
        color: "from-yellow-400 to-orange-400",
        iconColor: "text-yellow-400"
    },
    {
        icon: Briefcase,
        title: "High Demand, High Pay",
        description: "JavaScript developers are among the most sought-after professionals. Average salary: ₹6-12 LPA for freshers, ₹15-25 LPA with experience. Companies are desperately hiring.",
        color: "from-green-400 to-emerald-400",
        iconColor: "text-green-400"
    }
];

const WhyJavaScript = () => {
    return (
        <section className="py-24 bg-neutral-900 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-500/20 rounded-full blur-3xl animate-blob" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-blob animation-delay-2000" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 mb-6"
                    >
                        <Zap className="w-4 h-4" />
                        <span className="text-sm font-medium">The Foundation of Modern Web Development</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-neutral-400"
                    >
                        Why JavaScript? <br className="hidden md:block" />
                        <span className="text-yellow-400">Because It Runs the Web</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-neutral-400 max-w-2xl mx-auto"
                    >
                        The #1 Programming Language That Powers Everything You See Online
                    </motion.p>
                </div>

                {/* Stats Section */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 + 0.3 }}
                            className="p-6 rounded-2xl bg-neutral-800/50 border border-neutral-700/50 text-center hover:bg-neutral-800/80 transition-all duration-300"
                        >
                            <div className="flex justify-center mb-4">
                                <div className="p-3 rounded-full bg-neutral-900/50 border border-neutral-700 text-yellow-500">
                                    <stat.icon className="w-6 h-6" />
                                </div>
                            </div>
                            <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                            <div className="text-sm text-neutral-400">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>

                {/* 3-Column Features */}
                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 + 0.4 }}
                            className="group p-8 rounded-2xl bg-gradient-to-b from-neutral-800/80 to-neutral-900/80 border border-neutral-700/50 hover:border-yellow-500/30 transition-all duration-300 relative overflow-hidden"
                        >
                            <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${feature.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />

                            <div className="mb-6 inline-block">
                                <div className="p-4 rounded-xl bg-neutral-800 border border-neutral-700 group-hover:bg-neutral-700 transition-colors">
                                    <feature.icon className={`w-8 h-8 ${feature.iconColor}`} />
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-yellow-400 transition-colors">
                                {feature.title}
                            </h3>

                            <p className="text-neutral-400 leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Additional Points */}
                <div className="mt-16 grid md:grid-cols-3 gap-6 text-center">
                    {[
                        "One language, infinite possibilities",
                        "Access to 2M+ ready-to-use packages",
                        "Future-Proof Career with React & Node.js"
                    ].map((text, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 + i * 0.1 }}
                            className="flex items-center justify-center gap-2 text-neutral-400 text-sm py-4 px-4 rounded-full bg-neutral-800/30 border border-neutral-800"
                        >
                            <Code className="w-4 h-4 text-yellow-500" />
                            {text}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyJavaScript;

import { motion } from 'framer-motion';
import { Database, Layout, Server, Smartphone, Monitor, Code, TrendingUp, Sparkles, ArrowRight, Rocket } from 'lucide-react';

const careers = [
    {
        title: "Front-End Developer",
        icon: Monitor,
        description: "Create stunning, interactive user interfaces for websites and web applications.",
        salary: "₹10-20 LPA",
        skills: ["JavaScript", "React/Vue", "HTML/CSS"],
        demand: "Very High",
        color: "from-blue-500 to-cyan-500",
        bg: "bg-blue-500/10",
        border: "border-blue-500/20"
    },
    {
        title: "Full-Stack Developer",
        icon: Utils,
        description: "Master both front-end and back-end. Build complete web apps from start to finish.",
        salary: "₹15-30 LPA",
        skills: ["React", "Node.js", "MongoDB"],
        demand: "Extremely High",
        color: "from-purple-500 to-pink-500",
        bg: "bg-purple-500/10",
        border: "border-purple-500/20"
    },
    {
        title: "React Developer",
        icon: Code,
        description: "Specialize in React.js to build scalable, modern web applications for top companies.",
        salary: "₹12-25 LPA",
        skills: ["React", "Redux", "Hooks"],
        demand: "Extremely High",
        color: "from-cyan-400 to-blue-600",
        bg: "bg-cyan-500/10",
        border: "border-cyan-500/20"
    },
    {
        title: "Mobile App Developer",
        icon: Smartphone,
        description: "Create cross-platform mobile apps using React Native for both iOS and Android.",
        salary: "₹12-22 LPA",
        skills: ["React Native", "Mobile UI", "APIs"],
        demand: "High",
        color: "from-indigo-500 to-violet-500",
        bg: "bg-indigo-500/10",
        border: "border-indigo-500/20"
    },
    {
        title: "Backend Developer",
        icon: Server,
        description: "Build powerful server-side apps, APIs, and databases using Node.js.",
        salary: "₹14-28 LPA",
        skills: ["Node.js", "Express", "SQL/NoSQL"],
        demand: "Very High",
        color: "from-emerald-500 to-green-500",
        bg: "bg-emerald-500/10",
        border: "border-emerald-500/20"
    },
    {
        title: "UI/UX Engineer",
        icon: Layout,
        description: "Bridge design and development. Create interactive prototypes and sleek animations.",
        salary: "₹12-24 LPA",
        skills: ["Animation", "CSS", "Prototyping"],
        demand: "High",
        color: "from-orange-500 to-red-500",
        bg: "bg-orange-500/10",
        border: "border-orange-500/20"
    }
];

function Utils(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m5 12 7-7 7 7" />
            <path d="M12 19V5" />
        </svg>
    )
}


const CareerPaths = () => {
    return (
        <section className="py-24 bg-neutral-950 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,0,255,0.05),transparent_50%)]" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 mb-6"
                    >
                        <Rocket className="w-4 h-4" />
                        <span className="text-sm font-medium">Where Will JavaScript Take You?</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold mb-6"
                    >
                        Your JavaScript Career — <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Endless Possibilities</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-neutral-400 max-w-2xl mx-auto"
                    >
                        Master JavaScript Today, Choose Your Path Tomorrow
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {careers.map((career, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`group relative p-6 rounded-2xl bg-neutral-900 border ${career.border} hover:border-transparent transition-all duration-300 hover:scale-[1.02]`}
                        >
                            {/* Gradient border effect on hover */}
                            <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${career.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm`} />
                            <div className="absolute inset-[1px] rounded-2xl bg-neutral-900 -z-1" />

                            <div className="relative z-10 h-full flex flex-col">
                                <div className="flex justify-between items-start mb-6">
                                    <div className={`p-3 rounded-xl ${career.bg} text-white`}>
                                        <career.icon className="w-6 h-6" />
                                    </div>
                                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-neutral-800 text-neutral-300 border border-neutral-700">
                                        <Sparkles className="w-3 h-3 text-yellow-500" />
                                        {career.demand} Demand
                                    </span>
                                </div>

                                <h3 className="text-xl font-bold text-white mb-2">{career.title}</h3>
                                <p className="text-neutral-400 text-sm mb-6 flex-grow">{career.description}</p>

                                <div className="space-y-4">
                                    <div className="flex flex-wrap gap-2">
                                        {career.skills.map((skill, i) => (
                                            <span key={i} className="text-xs px-2 py-1 rounded bg-neutral-800 text-neutral-400 border border-neutral-700">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="pt-4 border-t border-neutral-800 flex items-center justify-between">
                                        <div>
                                            <p className="text-xs text-neutral-500 uppercase tracking-wider">Potential Salary</p>
                                            <p className={`text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r ${career.color}`}>
                                                {career.salary}
                                            </p>
                                        </div>
                                        <ArrowRight className="w-5 h-5 text-neutral-600 group-hover:text-white transition-colors" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="mt-20 p-8 md:p-12 rounded-3xl bg-gradient-to-r from-neutral-900 to-neutral-800 border border-neutral-700 text-center relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                    <div className="relative z-10">
                        <h3 className="text-3xl font-bold text-white mb-4">Your Career Starts with JavaScript</h3>
                        <p className="text-neutral-400 mb-8 max-w-xl mx-auto">
                            Join the founding cohort and unlock these opportunities in just 4 weeks.
                            Real growth, real salaries, real careers.
                        </p>
                        <button onClick={() => window.open('https://forms.gle/1ibTMLCtcTJKMKzm8', '_blank')} className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-black font-bold hover:bg-neutral-200 transition-colors">
                            Start Your Journey — Enroll Now
                            <TrendingUp className="w-4 h-4" />
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CareerPaths;

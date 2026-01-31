import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, BookOpen, Code, Database, Clock, Layout, MousePointer, Box, Layers, Zap } from 'lucide-react';

const syllabusData = [
    {
        week: "Module 1",
        title: "JavaScript Basics – The Language of the Web",
        desc: "Master the fundamentals of JavaScript and its role in modern web development.",
        icon: Code,
        color: "text-blue-400",
        topics: [
            "Introduction to JavaScript and its role in web development",
            "Variables & Data Types: string, number, boolean, object, array",
            "Declaring variables: var vs let vs const",
            "Scope (Global, Local, Block) and Hoisting",
            "Operators & Control Flow (if/else, switch, ternary)"
        ]
    },
    {
        week: "Module 2",
        title: "Functions – Building Blocks of JavaScript",
        desc: "Learn how to write clean, reusable code using various function types.",
        icon: Layout,
        color: "text-purple-400",
        topics: [
            "Function declarations vs Expressions",
            "Arrow Functions & Syntax",
            "Parameters, Return statements, and Defaults",
            "Function Scope and Closures"
        ]
    },
    {
        week: "Module 3",
        title: "Arrays and Objects – Working with Data",
        desc: "Handle complex data structures efficiently.",
        icon: Database,
        color: "text-yellow-400",
        topics: [
            "Array methods: push, pop, simple manipulation",
            "High-order methods: map, filter, reduce",
            "Objects: properties, methods, and prototypes",
            "Iterating with loops (for, for...of, for...in)"
        ]
    },
    {
        week: "Module 4",
        title: "Asynchronous JavaScript",
        desc: "Understand how to handle time-sensitive operations without blocking code.",
        icon: Clock,
        color: "text-red-400",
        topics: [
            "Synchronous vs Asynchronous programming",
            "setTimeout & setInterval",
            "Callback Hell & Solutions",
            "Promises & Async/Await syntax"
        ]
    },
    {
        week: "Module 5",
        title: "JavaScript & The DOM",
        desc: "Make websites interactive by manipulating HTML and CSS dynamically.",
        icon: Layout,
        color: "text-green-400",
        topics: [
            "Understanding the Document Object Model (DOM)",
            "Selecting elements (querySelector, getElementById)",
            "Modifying content (innerHTML, textContent, value)",
            "Dynamic style manipulation and class toggling",
            "Creating and removing elements"
        ]
    },
    {
        week: "Module 6",
        title: "Event Handling",
        desc: "Respond to user actions like clicks, typing, and hovering.",
        icon: MousePointer,
        color: "text-pink-400",
        topics: [
            "Event Listeners (addEventListener)",
            "Common Events: click, hover, keydown, submit",
            "Event Bubbling & Capturing",
            "preventDefault() & stopPropagation()"
        ]
    },
    {
        week: "Module 7",
        title: "Object-Oriented JavaScript",
        desc: "Structure your code using professional OOP principles.",
        icon: Box,
        color: "text-indigo-400",
        topics: [
            "Classes & Constructors",
            "The 'this' keyword explained",
            "Inheritance & Prototype Chain",
            "Encapsulation & Polymorphism"
        ]
    },
    {
        week: "Module 8",
        title: "Advanced Concepts & ES6+",
        desc: "Level up with modern syntax and deep-dive concepts.",
        icon: Layers,
        color: "text-cyan-400",
        topics: [
            "Deep dive into Closures & Lexical Scoping",
            "The 'this' keyword binding (call, apply, bind)",
            "ES6+ Features: Destructuring, Template Literals",
            "Spread/Rest Syntax & Default Parameters",
            "Modules (import/export) & Error Handling"
        ]
    }
];

export default function Syllabus() {
    return (
        <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-black via-green-900/5 to-black pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6">
                        <BookOpen className="w-4 h-4 text-green-400" />
                        <span className="text-sm font-medium text-gray-300">Detailed Curriculum</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">What You Will <span className="text-green-500">Master</span></h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        A complete roadmap from zero to job-ready JavaScript developer.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto space-y-4">
                    {syllabusData.map((module, index) => (
                        <ModuleItem key={index} module={module} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function ModuleItem({ module, index }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            viewport={{ once: true }}
            className="border border-white/10 rounded-xl overflow-hidden bg-white/5 hover:border-white/20 transition-colors"
        >
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-6 text-left"
            >
                <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-lg bg-white/5 ${module.color}`}>
                        <module.icon className="w-6 h-6" />
                    </div>
                    <div>
                        <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">{module.week}</div>
                        <h3 className="text-lg md:text-xl font-bold text-gray-200">{module.title}</h3>
                    </div>
                </div>
                <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                    >
                        <div className="p-6 pt-0 pl-[5.5rem]">
                            <p className="text-gray-400 mb-4 text-sm">{module.desc}</p>
                            <ul className="space-y-2">
                                {module.topics.map((topic, i) => (
                                    <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                                        <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 shrink-0" />
                                        <span>{topic}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

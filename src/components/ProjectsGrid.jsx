import { motion } from 'framer-motion';
import { ShoppingCart, MessageSquare, Image, Kanban } from 'lucide-react';

const projects = [
    {
        title: "E-Commerce Product Card",
        description: "Responsive card with add-to-cart, image carousel, and dynamic pricing.",
        skills: ["DOM Manipulation", "Event Handling", "State Management"],
        icon: ShoppingCart,
        color: "from-blue-500 to-cyan-500"
    },
    {
        title: "AI Chatbot Interface",
        description: "ChatGPT-style UI with message threading and typing indicators.",
        skills: ["Async/Await", "API Integration", "LocalStorage"],
        icon: MessageSquare,
        color: "from-purple-500 to-pink-500"
    },
    {
        title: "Photo Editing Filter",
        description: "Browser-based image editor with brightness, contrast, and filters.",
        skills: ["Canvas API", "File Handling", "Image Processing"],
        icon: Image,
        color: "from-yellow-500 to-orange-500"
    },
    {
        title: "Kanban Task Board",
        description: "Trello-style drag-and-drop task manager with progress tracking.",
        skills: ["Drag & Drop API", "OOP", "Complex DOM"],
        icon: Kanban,
        color: "from-green-500 to-emerald-500"
    }
];

export default function ProjectsGrid() {
    return (
        <section id="projects" className="py-24 bg-[#0a0a0a]">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">4 Real Projects. <span className="text-gray-500">Not Toy Examples.</span></h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        You won't just learn syntax. You'll build a portfolio that proves you can do the work.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors overflow-hidden"
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                            <div className="relative z-10">
                                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${project.color} flex items-center justify-center mb-6`}>
                                    <project.icon className="w-6 h-6 text-white" />
                                </div>

                                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                                <p className="text-gray-400 mb-6">{project.description}</p>

                                <div className="flex flex-wrap gap-2">
                                    {project.skills.map((skill, i) => (
                                        <span key={i} className="text-xs font-medium px-3 py-1 rounded-full bg-white/5 text-gray-300 border border-white/5">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

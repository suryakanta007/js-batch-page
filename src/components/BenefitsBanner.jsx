import { motion } from 'framer-motion';
import { Sparkles, Users, MessageCircle, Calendar } from 'lucide-react';

export default function BenefitsBanner() {
    const benefits = [
        { icon: Users, text: "First 30 students only" },
        { icon: Sparkles, text: "55% off launch price" },
        { icon: MessageCircle, text: "Direct access to instructor" },
        { icon: Calendar, text: "Live sessions starting Feb 6th" },
    ];

    return (
        <div className="sticky top-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/10 py-4">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: -10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-2 text-sm md:text-base font-medium text-gray-300"
                        >
                            <benefit.icon className="w-5 h-5 text-green-400" />
                            <span>{benefit.text}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}

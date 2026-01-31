import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
    const faqs = [
        { question: "Will sessions be recorded?", answer: "This founding cohort is 100% live. We may add recordings in future batches, but to ensure commitment, this batch focuses on live attendance." },
        { question: "I'm a complete beginner. Will I keep up?", answer: "Yes! We start from zero. No prior coding experience is needed. We build up from variables to complex applications." },
        { question: "What is will be the class timing?", answer: "Classes will be held on 7pm/7.30pm to 8pm. It can be extended based on the requirement of topic." },
        { question: "Why is the price so low?", answer: "This is our founding cohort (beta launch). You get 55% off in exchange for your feedback and active participation." },
        { question: "What if I miss a session?", answer: "Code files and project assets are shared after every class. You can catch up, but live attendance is highly recommended for Q&A." },
        { question: "Is there a refund policy?", answer: "Yes! If you're not satisfied after the first week (4 sessions), we'll refund your money. No questions asked." },
    ];

    return (
        <section className="py-24 bg-[#0a0a0a]">
            <div className="container mx-auto px-4 max-w-3xl">
                <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">Your Questions, <span className="text-gray-500">Answered</span></h2>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <FAQItem key={index} faq={faq} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function FAQItem({ faq }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border border-white/10 rounded-xl overflow-hidden bg-white/5">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
            >
                <span className="font-medium text-lg">{faq.question}</span>
                <ChevronDown className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                    >
                        <div className="p-6 pt-0 text-gray-400 leading-relaxed">
                            {faq.answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

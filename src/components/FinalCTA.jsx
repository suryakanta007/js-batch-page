import { motion } from 'framer-motion';

export default function FinalCTA() {
    return (
        <section className="py-24 relative overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 to-black z-0" />

            <div className="container mx-auto px-4 relative z-10 text-center">
                <h2 className="text-4xl md:text-6xl font-bold mb-8">
                    Stop Watching Tutorials.<br />
                    <span className="text-green-500">Start Building.</span>
                </h2>

                <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
                    This is your chance to learn JavaScript the right way—with real projects, live guidance, and a community of builders.
                </p>

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-12 py-5 bg-white text-black font-bold text-xl rounded-full shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.5)] transition-shadow"
                    onClick={() => window.open('https://forms.gle/1ibTMLCtcTJKMKzm8', '_blank')}
                >
                    Claim Your Spot Now
                </motion.button>
            </div>
        </section>
    );
}

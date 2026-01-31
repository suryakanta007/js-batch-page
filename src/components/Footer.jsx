export default function Footer() {
    return (
        <footer className="py-8 bg-black border-t border-white/10 text-center text-gray-500 text-sm">
            <div className="container mx-auto px-4">
                <p>© {new Date().getFullYear()} JavaScript Chef. All rights reserved.</p>
                <p className="mt-2 text-xs">Designed for builders.</p>
            </div>
        </footer>
    );
}

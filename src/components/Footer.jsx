export default function Footer() {
    return (
        <>
            {/* Footer */}
            <footer className="bg-[#212631] text-[#ebebeb] px-6 py-12 font-['Fira_Code',monospace]">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 items-center gap-10 md:gap-8">
                    {/* Left Section */}
                    <div className="text-sm leading-relaxed text-left space-y-1">
                        <p>Graphic Designer</p>
                        <p>Frontend Developer</p>
                        <p>UI Designer</p>
                    </div>

                    {/* Center Section */}
                    <div className="text-center">
                        <h1 className="font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-wider">
                            Lei Malibiran
                        </h1>
                    </div>

                    {/* Right Section */}
                    <div className="text-sm text-right space-y-1">
                        <a
                            href="#projects"
                            className="block underline hover:text-blue-400 transition"
                        >
                            View Work
                        </a>
                    </div>
                </div>

                {/* Bottom Links */}
                <div className="mt-12 border-t border-[#3b4b55] pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
                    <p className="text-center">&copy; 2025 Lei Malibiran. All rights reserved.</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="#home" className="hover:text-blue-400 transition">Home</a>
                        <a href="#about" className="hover:text-blue-400 transition">About</a>
                        <a href="#services" className="hover:text-blue-400 transition">Services</a>
                        <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
                        <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
                    </div>
                </div>
            </footer>
        </>
    );
}

import { useState } from "react";
import { motion } from "framer-motion";

export default function HomeWithSocial() {
    const [socialOpen, setSocialOpen] = useState(false);

    const socialLinks = [
        {
            name: "Facebook",
            url: "https://facebook.com/malibiranlei",
            icon: "https://www.svgrepo.com/show/448224/facebook.svg",
            handle: "malibiranlei",
            color: "hover:text-blue-400",
        },
        {
            name: "Instagram",
            url: "https://instagram.com/leigxbriel",
            icon: "https://cdn-icons-png.flaticon.com/128/3955/3955024.png",
            handle: "@leigxbriel",
            color: "hover:text-pink-400",
        },
        {
            name: "GitHub",
            url: "https://github.com/leigabriel",
            icon: "https://www.svgrepo.com/show/512317/github-142.svg",
            handle: "leigabriel",
            color: "hover:text-gray-400",
        },
        {
            name: "Discord",
            url: "https://discord.gg/lei.js",
            icon: "https://www.svgrepo.com/show/353655/discord-icon.svg",
            handle: "lei.js",
            color: "hover:text-indigo-400",
        },
        {
            name: "Pinterest",
            url: "https://www.pinterest.com/leigxbriel",
            icon: "https://cdn-icons-png.flaticon.com/128/145/145808.png",
            handle: "leigxbriel",
            color: "hover:text-red-400",
        },
        {
            name: "Telegram",
            url: "https://t.me/leigxbriel",
            icon: "https://www.svgrepo.com/show/452115/telegram.svg",
            handle: "@leigxbriel",
            color: "hover:text-sky-400",
        },
        {
            name: "TikTok",
            url: "https://www.tiktok.com/@lei.js",
            icon: "https://cdn-icons-png.flaticon.com/128/3046/3046121.png",
            handle: "@lei.js",
            color: "hover:text-black",
        },
    ];

    return (
        <section
            id="home"
            className="min-h-screen flex items-center rounded-b-4xl justify-center bg-white text-[#212631] px-4 sm:px-6"
            
        >

            {/* Background Marquee */}
            <div className="absolute top-1/2 left-0 w-full overflow-hidden -translate-y-1/2 z-0">
                <div className="flex whitespace-nowrap animate-marquee">
                    <span className="mx-8 mb-65 sm:mt-65 text-[1.5rem] sm:text-[8rem] font-bold text-[#212631] opacity-20">
                        LEI GABRIEL • GRAPHIC DESIGNER • UI/UX DESIGNER • FRONTEND DEV •
                    </span>
                    <span className="mx-8 mb-65 sm:mt-65 text-[1.5rem] sm:text-[8rem] font-bold text-[#212631] opacity-20">
                        LEI GABRIEL • GRAPHIC DESIGNER • UI/UX DESIGNER • FRONTEND DEV •
                    </span>
                </div>
            </div>

            {/* Main Container */}
            <div
                className="grid grid-cols-1 gap-y-8 sm:grid-cols-3 sm:grid-rows-3 sm:gap-6 
                   max-w-7xl w-full mx-auto items-center justify-items-center 
                   text-center sm:text-left z-10 relative"
            >
                {/* Left Title */}
                <motion.div
                    className="self-start sm:col-start-1 sm:row-start-1 text-center sm:text-left"
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="font-bold text-3xl sm:text-8xl">Lei Gabriel</h2>
                </motion.div>

                {/* Right Desc */}
                <motion.div
                    className="max-w-xl text-center sm:text-right sm:col-start-3 sm:row-start-1"
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <p className="text-gray-700 text-lg sm:text-2xl">
                        I craft engaging digital experiences through clean code,
                        thoughtful design, and creative visuals.
                    </p>
                </motion.div>

                {/* Center */}
                <motion.div
                    className="flex flex-col items-center justify-center row-span-1 sm:col-start-2 sm:row-start-2 col-start-1 row-start-2"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                    <img
                        src="https://i.pinimg.com/736x/f6/26/47/f62647f23f4eb78d1b9d267c92ee1521.jpg"
                        alt="Logo"
                        className="w-38 h-38 sm:w-60 sm:h-60 rounded-full shadow-xl shadow-[#212631]/30 object-cover"
                    />
                </motion.div>

                {/* Bottom Left */}
                <motion.div
                    className="sm:col-start-1 sm:row-start-3 self-center sm:self-end justify-self-center sm:justify-self-start text-center max-w-xs flex flex-col items-center"
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <h3 className="font-semibold text-xl sm:text-2xl mb-2">Specialties</h3>
                    <ul className="text-left sm:text-lg text-gray-600 list-disc ml-4 space-y-1">
                        <li>Frontend Developer</li>
                        <li>UI/UX Designer</li>
                        <li>Graphic Designer</li>
                    </ul>
                </motion.div>
                                
                {/* Bottom Right */}
                <motion.div
                    className="flex justify-center gap-6 sm:mt-36 sm:col-start-3 sm:row-start-3 sm:justify-self-end"
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    {/* Projects */}
                    <a
                        href="#projects"
                        className="p-3 border-2 border-[#212631] bg-yellow-300 hover:bg-yellow-400 transition flex items-center justify-center"
                        aria-label="View Projects"
                    >
                        <img
                            src="https://cdn-icons-png.flaticon.com/128/1659/1659067.png"
                            alt="Projects"
                            className="w-5 h-5"
                        />
                    </a>

                    {/* Contact */}
                    <a
                        href="#contact"
                        className="p-3 border-2 border-[#212631] bg-blue-300 hover:bg-blue-400 transition flex items-center justify-center"
                        aria-label="Contact Me"
                    >
                        <img
                            src="https://cdn-icons-png.flaticon.com/128/646/646094.png"
                            alt="Contact"
                            className="w-5 h-5"
                        />
                    </a>

                    {/* Social */}
                    <button
                        onClick={() => setSocialOpen(true)}
                        className="p-3 border-2 border-[#212631] bg-red-300 hover:bg-red-400 transition flex items-center justify-center"
                        aria-label="Social Links"
                    >
                        <img
                            src="https://cdn-icons-png.flaticon.com/128/1828/1828926.png"
                            alt="Social"
                            className="w-5 h-5"
                        />
                    </button>
                </motion.div>
            </div>

            {/* Social Popup */}
            {socialOpen && (
                <>
                    <motion.div
                        className="fixed inset-0 bg-black/40 z-40"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSocialOpen(false)}
                    />
                    <motion.div
                        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                       w-72 sm:w-96 bg-[#212631]/90 backdrop-blur-md text-white 
                       rounded-2xl shadow-2xl p-6 z-50"
                        initial={{ opacity: 0, y: 50, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-lg font-bold">Follow me on</h2>
                            <button
                                className="text-white text-xl font-bold hover:text-red-500 transition"
                                onClick={() => setSocialOpen(false)}
                            >
                                ✕
                            </button>
                        </div>
                        <ul className="flex flex-col gap-3 text-sm">
                            {socialLinks.map((social, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: -30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1, duration: 0.4 }}
                                >
                                    <a
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center space-x-3 p-2 rounded-lg hover:bg-neutral-800 transition"
                                    >
                                        <img
                                            src={social.icon}
                                            alt={social.name}
                                            className="w-5 h-5"
                                        />
                                        <div>
                                            <p className={`font-semibold ${social.color}`}>
                                                {social.name}
                                            </p>
                                            <p className="text-xs text-neutral-400">
                                                {social.handle}
                                            </p>
                                        </div>
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                </>
            )}
        </section>
    );
}

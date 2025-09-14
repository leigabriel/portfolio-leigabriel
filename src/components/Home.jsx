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

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                when: "beforeChildren"
            }
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
    };

    return (
        <>
            {/* Home Section */}
            <section
                id="home"
                className="min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-12 bg-white rounded-b-4xl text-black relative"
            >
                {/* Heading */}
                <motion.h1
                    className="font-extrabold uppercase leading-snug tracking-tight text-3xl sm:text-5xl md:text-6xl lg:text-7xl max-w-2xl sm:max-w-3xl md:max-w-4xl lg:max-w-6xl"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                >
                    Hi, I'm Lei Gabriel. <br />
                    A Frontend Developer, <br />
                    UI Designer, and <br />
                    Graphic Design Artist.
                </motion.h1>

                {/* Paragraph */}
                <motion.p
                    className="mt-6 text-sm sm:text-base md:text-lg lg:text-xl max-w-md sm:max-w-lg md:max-w-2xl font-medium text-gray-700"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
                >
                    I craft engaging digital experiences through clean code, thoughtful design, and creative visuals.
                </motion.p>

                {/* Buttons Row */}
                <motion.div
                    className="mt-8 flex flex-row justify-center gap-6 items-center relative"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {[
                        {
                            label: "View Projects",
                            icon: "https://cdn-icons-png.flaticon.com/128/3735/3735057.png",
                            href: "#projects",
                            style: "hover:bg-yellow-400",
                        },
                        {
                            label: "Contact Me",
                            icon: "https://cdn-icons-png.flaticon.com/128/9068/9068642.png",
                            href: "#contact",
                            style: "hover:bg-blue-400",
                        },
                        {
                            label: "Social",
                            icon: "https://cdn-icons-png.flaticon.com/128/3631/3631618.png",
                            onClick: () => setSocialOpen(!socialOpen),
                            style: "hover:bg-red-400",
                        },
                    ].map((btn, i) => (
                        <motion.div
                            key={i}
                            className="relative group"
                            variants={itemVariants}
                        >
                            {btn.href ? (
                                <a
                                    href={btn.href}
                                    className={`border-2 border-[#212631] rounded-full p-3 flex items-center justify-center 
                               transform transition-transform duration-300 ease-out hover:scale-110 ${btn.style}`}
                                >
                                    <img
                                        src={btn.icon}
                                        alt={btn.label}
                                        className="w-6 h-6 transition-transform duration-300 ease-out group-hover:scale-125"
                                    />
                                </a>
                            ) : (
                                <button
                                    onClick={btn.onClick}
                                    className={`border-2 border-[#212631] rounded-full p-3 flex items-center justify-center 
                               shadow-lg transform cursor-pointer transition-transform duration-300 ease-out hover:scale-110 ${btn.style}`}
                                >
                                    <img
                                        src={btn.icon}
                                        alt={btn.label}
                                        className="w-6 h-6 transition-transform duration-300 ease-out group-hover:scale-125"
                                    />
                                </button>
                            )}
                            <span className="absolute left-1/2 -translate-x-1/2 top-full mt-2 px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition pointer-events-none whitespace-nowrap z-10">
                                {btn.label}
                            </span>
                        </motion.div>
                    ))}
                </motion.div>

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
                            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 sm:w-96 bg-[#212631]/90 backdrop-blur-md text-white rounded-2xl shadow-2xl p-6 z-50"
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
        </>
    );
}
import { useState } from "react";

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
        <>
            {/* Home Section */}
            <section
                id="home"
                className="min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-12 bg-white rounded-b-4xl text-black relative"
            >
                <h1 className="font-extrabold uppercase leading-snug tracking-tight text-3xl sm:text-5xl md:text-6xl lg:text-7xl max-w-2xl sm:max-w-3xl md:max-w-4xl lg:max-w-6xl">
                    Hi, I'm Lei Gabriel. <br />
                    A Frontend Developer, <br />
                    UI Designer, and <br />
                    Graphic Design Artist.
                </h1>

                <p className="mt-6 text-sm sm:text-base md:text-lg lg:text-xl max-w-md sm:max-w-lg md:max-w-2xl font-medium text-gray-700">
                    I craft engaging digital experiences through clean code, thoughtful design, and creative visuals.
                </p>

                {/* Buttons Row (horizontal on mobile) */}
                <div className="mt-8 flex flex-wrap justify-center gap-4 items-center relative">
                    <a
                        href="#projects"
                        className="px-6 py-3 bg-black text-white rounded-full font-semibold text-xs sm:text-base hover:bg-gray-800 transition"
                    >
                        View Projects
                    </a>
                    <a
                        href="#contact"
                        className="px-6 py-3 border-2 border-black text-black rounded-full font-semibold text-xs sm:text-base hover:bg-gray-100 transition"
                    >
                        Contact Me
                    </a>

                    {/* Social Button */}
                    <button
                        onClick={() => setSocialOpen(!socialOpen)}
                        className="px-4 py-3 bg-yellow-400 rounded-full shadow-lg hover:bg-yellow-300 transition flex items-center gap-2 font-semibold text-xs sm:text-base"
                    >
                        <img
                            src="https://cdn-icons-png.flaticon.com/128/3631/3631618.png"
                            alt="Social"
                            className="w-5 h-5"
                        />
                        Social
                    </button>
                </div>

                {/* Social Popup Floating */}
                {socialOpen && (
                    <>
                        {/* Overlay background */}
                        <div
                            className="fixed inset-0 bg-black/40 z-40"
                            onClick={() => setSocialOpen(false)}
                        ></div>

                        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 sm:w-96 bg-[#212631]/90 backdrop-blur-md text-white rounded-2xl shadow-2xl p-6 z-50 transition-all animate-fadeIn">
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
                                    <li key={i}>
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
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </>
                )}
            </section>
        </>
    );
}
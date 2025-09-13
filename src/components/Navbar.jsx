import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { MdDesignServices, MdWorkOutline } from "react-icons/md";
import { BiMessageSquareDetail } from "react-icons/bi";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { useState } from "react";

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);

    const links = [
        { href: "#home", icon: <AiOutlineHome />, label: "Home" },
        { href: "#about", icon: <AiOutlineUser />, label: "About" },
        { href: "#services", icon: <MdDesignServices />, label: "Services" },
        { href: "#projects", icon: <MdWorkOutline />, label: "Projects" },
        { href: "#contact", icon: <BiMessageSquareDetail />, label: "Contact" },
    ];

    return (
        <>
            {/* Desktop Navbar */}
            <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-[#212631]/50 backdrop-blur-lg px-6 py-3 rounded-full shadow-2xl items-center justify-center gap-6 w-max md:flex hidden">
                <ul className="flex gap-6 text-white text-3xl">
                    {links.map((link, i) => (
                        <li key={i} className="group relative">
                            <a href={link.href} className="transition hover:text-blue-400">
                                {link.icon}
                            </a>
                            <span className="absolute bottom-[-1.5rem] left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                                {link.label}
                            </span>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Mobile Hamburger (top-right corner) */}
            <button
                className="md:hidden fixed top-4 right-4 w-12 h-12 flex items-center justify-center bg-blue-400 text-black rounded-full shadow-[#212631] shadow-lg z-50"
                onClick={() => setMobileOpen(true)}
            >
                <HiOutlineMenu size={28} />
            </button>

            {/* Mobile Sidebar */}
            <div
                className={`fixed top-0 right-0 h-full w-64 bg-[#212631]/50 backdrop-blur-lg z-[9999] transform ${mobileOpen ? "translate-x-0" : "translate-x-full"
                    } transition-transform duration-300 md:hidden flex flex-col p-8`}
            >
                {/* Close Button */}
                <button
                    className="self-end text-white text-2xl mb-8"
                    onClick={() => setMobileOpen(false)}
                >
                    <HiOutlineX size={28} />
                </button>

                {/* Menu Links */}
                <ul className="flex flex-col gap-6 text-white text-2xl">
                    {links.map((link, i) => (
                        <li key={i}>
                            <a
                                href={link.href}
                                className="flex items-center gap-3 hover:text-blue-400 transition"
                                onClick={() => setMobileOpen(false)}
                            >
                                {link.icon}
                                <span className="text-lg">{link.label}</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Overlay background */}
            {mobileOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-[9998] md:hidden"
                    onClick={() => setMobileOpen(false)}
                ></div>
            )}
        </>
    );
}
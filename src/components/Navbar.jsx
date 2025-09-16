import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { MdDesignServices, MdWorkOutline } from "react-icons/md";
import { BiMessageSquareDetail } from "react-icons/bi";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [hoverIndex, setHoverIndex] = useState(null);
    const [menuOpen, setMenuOpen] = useState(false);

    const links = [
        { href: "#home", icon: <AiOutlineHome />, label: "Home", color: "#3B82F6" },
        { href: "#about", icon: <AiOutlineUser />, label: "About", color: "#10B981" },
        { href: "#services", icon: <MdDesignServices />, label: "Services", color: "#F59E0B" },
        { href: "#projects", icon: <MdWorkOutline />, label: "Projects", color: "#EF4444" },
        { href: "#contact", icon: <BiMessageSquareDetail />, label: "Contact", color: "#8B5CF6" },
    ];

    const getScale = (i) => {
        if (hoverIndex === null) return 1;
        const distance = Math.abs(hoverIndex - i);
        if (distance === 0) return 1.4;
        if (distance === 1) return 1;
        if (distance === 2) return 1;
        return 1;
    };

    const getColor = (i) => {
        if (hoverIndex === null) return "#FFFFFF";
        const distance = Math.abs(hoverIndex - i);
        if (distance === 0) return links[i].color;
        return "#FFFFFF";
    };

    return (
        <>
            {/* Desktop Navbar */}
            <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-[#212631]/50 backdrop-blur-lg px-6 py-3 rounded-full shadow-2xl items-center justify-center gap-6 w-max md:flex hidden">
                {links.map((link, i) => (
                    <div
                        key={i}
                        className="group relative cursor-pointer"
                        onMouseEnter={() => setHoverIndex(i)}
                        onMouseLeave={() => setHoverIndex(null)}
                        style={{
                            transform: `scale(${getScale(i)})`,
                            transition: "transform 0.25s ease-out, color 0.25s ease-out",
                            color: getColor(i),
                        }}
                    >
                        <a href={link.href} className="text-3xl">
                            {link.icon}
                        </a>
                        <span className="absolute bottom-[-1.5rem] left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                            {link.label}
                        </span>
                    </div>
                ))}
            </nav>

            {/* Mobile Menu */}
            <button
                onClick={() => setMenuOpen(true)}
                className="md:hidden fixed top-4 right-4 w-12 h-12 flex items-center justify-center bg-blue-400 text-black rounded-full shadow-[#212631] shadow-lg z-50 hover:scale-110 transition-transform duration-300"
            >
                <HiOutlineMenu size={28} />
            </button>

            {/* Sidebar Popup */}
            <AnimatePresence>
                {menuOpen && (
                    <>
                        {/* Overlay Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="fixed inset-0 bg-black/50 z-40"
                            onClick={() => setMenuOpen(false)}
                        ></motion.div>

                        {/* Sidebar Menu */}
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "tween", duration: 0.4, ease: "easeOut" }}
                            className="fixed top-0 right-0 h-full w-64 bg-[#212631] text-white z-50 shadow-2xl flex flex-col p-6"
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setMenuOpen(false)}
                                className="self-end text-white hover:text-red-400 transition"
                            >
                                <HiOutlineX size={28} />
                            </button>

                            {/* Links */}
                            <motion.ul
                                initial="hidden"
                                animate="visible"
                                variants={{
                                    hidden: {},
                                    visible: {
                                        transition: { staggerChildren: 0.1 },
                                    },
                                }}
                                className="flex flex-col gap-6 mt-8 text-lg font-semibold"
                            >
                                {links.map((link, i) => (
                                    <motion.li
                                        key={i}
                                        variants={{
                                            hidden: { opacity: 0, x: 30 },
                                            visible: { opacity: 1, x: 0 },
                                        }}
                                        transition={{ duration: 0.4, ease: "easeOut" }}
                                    >
                                        <a
                                            href={link.href}
                                            className="flex items-center gap-3 hover:text-blue-400 transition"
                                            onClick={() => setMenuOpen(false)}
                                        >
                                            <span className="text-2xl">{link.icon}</span>
                                            {link.label}
                                        </a>
                                    </motion.li>
                                ))}
                            </motion.ul>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}

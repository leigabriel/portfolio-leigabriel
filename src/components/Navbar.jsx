import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { MdDesignServices, MdWorkOutline } from "react-icons/md";
import { BiMessageSquareDetail } from "react-icons/bi";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { useState } from "react";

export default function Navbar() {
    const [hoverIndex, setHoverIndex] = useState(null);

    const links = [
        { href: "#home", icon: <AiOutlineHome />, label: "Home", color: "#3B82F6" }, // blue
        { href: "#about", icon: <AiOutlineUser />, label: "About", color: "#10B981" }, // green
        { href: "#services", icon: <MdDesignServices />, label: "Services", color: "#F59E0B" }, // yellow
        { href: "#projects", icon: <MdWorkOutline />, label: "Projects", color: "#EF4444" }, // red
        { href: "#contact", icon: <BiMessageSquareDetail />, label: "Contact", color: "#8B5CF6" }, // purple
    ];

    const getScale = (i) => {
        if (hoverIndex === null) return 1;
        const distance = Math.abs(hoverIndex - i);
        if (distance === 0) return 1.6;
        if (distance === 1) return 1.3;
        if (distance === 2) return 1.1;
        return 1;
    };

    const getColor = (i) => {
        if (hoverIndex === null) return "#FFFFFF"; // default white
        const distance = Math.abs(hoverIndex - i);
        if (distance === 0) return links[i].color; // hovered icon color
        if (distance === 1) return "#FFFFFF"; // neighbors keep white
        return "#FFFFFF"; // others white
    };

    return (
        <>
            {/* Desktop Navbar */}
            <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-[#212631]/50 backdrop-blur-lg px-6 py-3 rounded-full shadow-2xl flex items-center justify-center gap-6 w-max md:flex hidden">
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

            {/* Mobile Hamburger */}
            <button
                className="md:hidden fixed top-4 right-4 w-12 h-12 flex items-center justify-center bg-blue-400 text-black rounded-full shadow-[#212631] shadow-lg z-50 hover:scale-110 transition-transform duration-300"
            >
                <HiOutlineMenu size={28} />
            </button>
        </>
    );
}

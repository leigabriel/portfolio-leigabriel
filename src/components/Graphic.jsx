import { useState } from "react";

export default function Graphic() {
    const images = [
        "https://i.pinimg.com/736x/8c/04/ca/8c04cae8c750cf374fc23b76d28cf72f.jpg",
        "https://i.pinimg.com/736x/82/ef/66/82ef665407f012df4c8b57fc4c795321.jpg",
        "https://i.pinimg.com/736x/f5/c7/87/f5c787339cd09733d990f3c2fc58a1e1.jpg",
        "https://i.pinimg.com/736x/7e/dc/c9/7edcc95c07faca2fe3dd12adfa159e7d.jpg",
        "https://i.pinimg.com/736x/be/58/ac/be58ac13f182d6f7c5456e0118efb430.jpg",
        "https://i.pinimg.com/736x/45/0c/66/450c66e94359f9d7cd9ff564d842110a.jpg",
        "https://i.pinimg.com/736x/f9/e4/cd/f9e4cd03769ae43de3cdf7d13225edae.jpg",
        "https://i.pinimg.com/736x/38/ae/df/38aedfbccea4e1212e85564d14a2f5c6.jpg",
    ];

    const [selectedImg, setSelectedImg] = useState(null);

    const openModal = (src) => setSelectedImg(src);
    const closeModal = () => setSelectedImg(null);

    return (
        <section id="graphic" className="py-2 font-semibold px-4 mt-0 bg-white">
            <div className="max-w-full mx-auto">
                <div className="relative">
                    {/* Left fade */}
                    <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-white via-white/80 to-transparent z-10"></div>

                    {/* Right fade */}
                    <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-white via-white/80 to-transparent z-10"></div>

                    {/* Scrollable Gallery */}
                    <div className="overflow-x-hidden">
                        <div className="flex gap-10 animate-marquee w-max px-4">
                            {[...images, ...images].map((src, index) => (
                                <img
                                    key={index}
                                    src={src}
                                    alt={`Design ${index + 1}`}
                                    className="h-40 w-auto rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
                                    onClick={() => openModal(src)}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                <div className="text-right mt-2">
                    <a
                        href="https://www.pinterest.com/leigxbriel"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#212631] underline text-sm hover:text-red-600 transition"
                    >
                        Visit my Pinterest
                    </a>
                </div>
            </div>

            {/* Modal */}
            {selectedImg && (
                <div
                    className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
                    onClick={closeModal}
                >
                    <div className="relative">
                        <img
                            src={selectedImg}
                            alt="Full view"
                            className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-2xl"
                        />
                        <button
                            onClick={closeModal}
                            className="absolute top-2 right-2 text-white text-3xl font-bold bg-black/50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/70 transition"
                        >
                            ✕
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
}
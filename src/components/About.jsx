import { motion, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";
import { useInView } from "framer-motion";

export default function About() {
    const controls = useAnimation();
    const ref = useRef(null);
    const inView = useInView(ref, { once: false, margin: "-100px" }); // animate repeatedly

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        } else {
            controls.start("hidden"); // reset when out of view
        }
    }, [inView, controls]);

    const smoothFadeIn = {
        hidden: { opacity: 0, y: 40 },
        visible: (i = 1) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.2, duration: 0.5, ease: "easeOut" },
        }),
    };

    return (
        <section
            id="about"
            className="min-h-screen py-12 rounded-t-4xl bg-[#212631] sm:py-16 px-4 sm:px-6 md:px-12 lg:px-20 text-white relative"
        >
            <motion.div
                ref={ref}
                initial="hidden"
                animate={controls}
                variants={smoothFadeIn}
                custom={0}
                className="max-w-7xl mx-auto space-y-12 sm:space-y-16 md:space-y-20 lg:space-y-24 relative z-10"
            >
                {/* TOP: Title + Image + Intro */}
                <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] lg:grid-cols-[320px_1fr] gap-8 md:gap-12 items-start">
                    <motion.div
                        className="space-y-4 sm:space-y-6 flex flex-col items-left md:items-start text-left md:text-left"
                        variants={smoothFadeIn}
                        custom={1}
                    >
                        <motion.h2
                            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-widest"
                            variants={smoothFadeIn}
                            custom={2}
                        >
                            About
                        </motion.h2>
                        <motion.div
                            className="border border-white/40 rounded-lg overflow-hidden w-32 h-32 sm:w-44 sm:h-44 md:w-60 md:h-60 lg:w-72 lg:h-72"
                            variants={smoothFadeIn}
                            custom={3}
                        >
                            <img
                                src="/img/lei_img.jpg"
                                alt="Lei Gabriel Portrait"
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className="space-y-4 sm:space-y-6 text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed mt-6 md:mt-20 lg:mt-28"
                        variants={smoothFadeIn}
                        custom={4}
                    >
                        <motion.p variants={smoothFadeIn} custom={5}>
                            <strong className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white">
                                Hello, I'm Lei Gabriel
                            </strong>
                        </motion.p>
                        <motion.p variants={smoothFadeIn} custom={6}>
                            I’m a <strong>graphic designer</strong> and aspiring{" "}
                            <strong>IT professional</strong> passionate about blending{" "}
                            <span className="text-white">creativity</span> and{" "}
                            <span className="text-white">technology</span>. My focus is on
                            crafting clean, modern designs and building functional digital
                            experiences.
                        </motion.p>
                        <motion.p variants={smoothFadeIn} custom={7}>
                            With skills in <strong>branding</strong>,{" "}
                            <strong>illustration</strong>, and <strong>UI design</strong>, I
                            bring ideas to life with bold visuals and thoughtful storytelling.
                            At the same time, I explore <strong>web development</strong> to
                            expand my versatility as a creative technologist.
                        </motion.p>
                    </motion.div>
                </div>

                {/* MIDDLE: College | Interests | Quote */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12 text-sm sm:text-base md:text-lg leading-relaxed">
                    <motion.div
                        className="col-span-1 md:col-span-3 flex flex-col items-center justify-center"
                        variants={smoothFadeIn}
                        custom={8}
                    >
                        <img
                            src="/img/banner.png"
                            alt="Profile Banner"
                            className="w-full h-40 sm:h-52 md:h-64 lg:h-80 object-cover rounded-xl border-2 border-[#ebebeb]/20 shadow-lg mb-4"
                        />
                    </motion.div>

                    <motion.div
                        className="border border-[#ebebeb]/20 p-5 sm:p-6 md:p-8 space-y-4 rounded-xl"
                        variants={smoothFadeIn}
                        custom={9}
                    >
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-400">
                            College Life
                        </h3>
                        <ul className="space-y-4 text-gray-400">
                            <li>
                                <p className="font-semibold text-white">Mindoro State University</p>
                                <p>
                                    Bachelor of Science in Computer Study <br /> (2023–Present)
                                </p>
                            </li>
                            <p className="text-xs italic text-blue-400">Oriental Mindoro, Philippines</p>
                        </ul>
                    </motion.div>

                    <motion.div
                        className="border border-[#ebebeb]/20 p-5 sm:p-6 md:p-8 space-y-4 rounded-xl"
                        variants={smoothFadeIn}
                        custom={10}
                    >
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-yellow-400">
                            My Interests
                        </h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-400">
                            <li>Digital Drawing & Creative Design</li>
                            <li>Watching Anime & Storytelling</li>
                            <li>Exploring UI/UX Ideas</li>
                            <li>Listening to Chill & Lo-Fi Beats</li>
                            <li>Reading about Creativity & Growth</li>
                        </ul>
                    </motion.div>

                    <motion.div
                        className="border border-[#ebebeb]/20 p-5 sm:p-6 md:p-8 space-y-4 text-white rounded-xl"
                        variants={smoothFadeIn}
                        custom={11}
                    >
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-green-400">
                            Inspiration
                        </h3>
                        <p>
                            Creativity is my language, imagination is my playground, and learning is my journey.
                        </p>
                        <p className="italic text-sm sm:text-base md:text-lg text-gray-400">
                            “Art enables us to find ourselves and lose ourselves at the same time.”<br />
                            — Thomas Merton
                        </p>
                    </motion.div>
                </div>

                {/* BOTTOM: Skills */}
                <div className="space-y-8 sm:space-y-10">
                    <div className="flex flex-col items-start">
                        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-widest">
                            Skills
                        </h3>
                        <p className="mt-2 max-w-3xl text-sm sm:text-base md:text-lg text-gray-300">
                            A mix of design, logic, and collaboration—these skills define my approach to digital creation.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-8 gap-4 sm:gap-6 justify-items-center">
                        {/* HTML */}
                        <div className="flex flex-col items-center w-full rounded-2xl p-3 sm:p-4 shadow-md bg-gradient-to-br from-orange-400 to-yellow-300 hover:scale-105 transition-transform duration-300">
                            <img
                                src="https://cdn-icons-png.flaticon.com/128/174/174854.png"
                                alt="HTML"
                                className="h-10 sm:h-14 drop-shadow-md"
                            />
                            <p className="mt-2 text-xs sm:text-sm font-bold text-orange-900">HTML</p>
                        </div>
                        {/* CSS */}
                        <div className="flex flex-col items-center w-full rounded-2xl p-3 sm:p-4 shadow-md bg-gradient-to-br from-blue-400 to-blue-600 hover:scale-105 transition-transform duration-300">
                            <img
                                src="https://cdn-icons-png.flaticon.com/128/732/732190.png"
                                alt="CSS"
                                className="h-10 sm:h-14 drop-shadow-md"
                            />
                            <p className="mt-2 text-xs sm:text-sm font-bold text-blue-900">CSS</p>
                        </div>
                        {/* JS */}
                        <div className="flex flex-col items-center w-full rounded-2xl p-3 sm:p-4 shadow-md bg-gradient-to-br from-yellow-300 to-yellow-500 hover:scale-105 transition-transform duration-300">
                            <img
                                src="https://cdn-icons-png.flaticon.com/128/5968/5968292.png"
                                alt="JS"
                                className="h-10 sm:h-14 drop-shadow-md"
                            />
                            <p className="mt-2 text-xs sm:text-sm font-bold text-yellow-900">JavaScript</p>
                        </div>
                        {/* Tailwind */}
                        <div className="flex flex-col items-center w-full rounded-2xl p-3 sm:p-4 shadow-md bg-gradient-to-br from-cyan-400 to-blue-300 hover:scale-105 transition-transform duration-300">
                            <img
                                src="https://tailwindcss.com/_next/static/media/tailwindcss-mark.d52e9897.svg"
                                alt="Tailwind"
                                className="h-10 sm:h-14 drop-shadow-md"
                            />
                            <p className="mt-2 text-xs sm:text-sm font-bold text-cyan-900">Tailwind</p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}

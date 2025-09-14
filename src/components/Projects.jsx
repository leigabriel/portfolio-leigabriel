import { useState, useEffect } from "react";

export default function Projects() {
    const [isMobile, setIsMobile] = useState(false);

    // Detect screen size (if you still need responsive logic)
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const projectCards = [
        {
            id: 1,
            title: "Art Gallery",
            desc: "Explore artworks from digital illustrations to concept designs.",
            img: "/img/artgallery.png",
            github: "https://github.com/leigabriel/art-gallery",
            preview: "https://example.com/art-gallery",
            bg: "bg-blue-400",
        },
        {
            id: 2,
            title: "Your Daily Boost",
            desc: "Get your daily dose of inspiration with curated content.",
            img: "/img/dailyb.png",
            github: "https://github.com/leigabriel/yourdailyboost",
            preview: "https://yourdailymotivation.netlify.app",
            bg: "bg-green-400",
        },
    ];

    return (
        <section
            id="projects"
            className="min-h-screen py-16 px-4 sm:px-6 md:px-10 bg-blue-950 text-white"
        >
            {/* Section Header */}
            <div className="max-w-7xl mx-auto text-center mb-12">
                <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold mb-4">
                    Projects
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
                    Showcasing creativity and precision with a focus on usability and
                    design.
                </p>
            </div>

            {/* Project Cards */}
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
                {projectCards.map((project) => (
                    <div
                        key={project.id}
                        className={`gallery flex flex-col ${project.bg} text-black rounded-2xl shadow-lg overflow-hidden hover:scale-[1.02] transition`}
                    >
                        {/* Image */}
                        <div className="relative h-48 sm:h-56 w-full overflow-hidden">
                            <img
                                src={project.img}
                                alt={project.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs sm:text-sm px-2 py-1 rounded">
                                Click the image to view
                            </div>
                        </div>

                        {/* Content */}
                        <div className="flex flex-col justify-between flex-1 p-6">
                            <div className="space-y-3">
                                <span className="text-3xl font-extrabold">{`0${project.id}.`}</span>
                                <h3 className="text-2xl font-bold">{project.title}</h3>
                                <p className="text-base">{project.desc}</p>
                            </div>
                            <div className="mt-6 flex gap-3">
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 py-2.5 rounded-lg text-center font-semibold bg-black text-white hover:bg-transparent hover:text-black border border-black transition"
                                >
                                    GitHub
                                </a>
                                <a
                                    href={project.preview}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 py-2.5 rounded-lg text-center font-semibold bg-white text-black hover:bg-gray-200 transition"
                                >
                                    Preview
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
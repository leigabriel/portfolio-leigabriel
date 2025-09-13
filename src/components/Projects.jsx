export default function Projects() {
    return (
        <>
            {/* Projects Section */}
            <section
                id="projects"
                className="min-h-screen py-16 px-4 sm:px-6 md:px-10 bg-blue-950 text-white"
            >
                <div className="max-w-7xl mx-auto text-center mb-12">
                    <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold mb-4">
                        Projects
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
                        Showcasing creativity and precision with a focus on usability and
                        design.
                    </p>
                </div>

                {/* Responsive Grid */}
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
                    {/* Project Card 1 */}
                    <div
                        data-aos="fade-up"
                        data-aos-delay="100"
                        className="gallery flex flex-col bg-blue-400 text-black rounded-2xl shadow-lg overflow-hidden hover:scale-[1.02] transition"
                    >
                        {/* Image Preview */}
                        <div className="relative h-48 sm:h-56 w-full overflow-hidden">
                            <img
                                src="/img/artgallery.png"
                                alt="Art Gallery"
                                className="w-full h-full object-cover"
                            />
                            {/* Click to view image */}
                            <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs sm:text-sm px-2 py-1 rounded">
                                Click the image to view
                            </div>
                        </div>
                        {/* Content */}
                        <div className="flex flex-col justify-between flex-1 p-6">
                            <div className="space-y-3">
                                <span className="text-3xl font-extrabold">01.</span>
                                <h3 className="text-2xl font-bold">Art Gallery</h3>
                                <p className="text-base">
                                    Explore artworks from digital illustrations to concept
                                    designs.
                                </p>
                            </div>
                            <div className="mt-6 flex gap-3">
                                <a
                                    href="https://github.com/leigabriel/art-gallery"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 py-2.5 rounded-lg text-center font-semibold bg-black text-white hover:bg-transparent hover:text-black border border-black transition"
                                >
                                    GitHub
                                </a>
                                <a
                                    href="https://example.com/art-gallery"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 py-2.5 rounded-lg text-center font-semibold bg-white text-black hover:bg-gray-200 transition"
                                >
                                    Preview
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Project Card 2 */}
                    <div
                        data-aos="fade-up"
                        data-aos-delay="200"
                        className="gallery flex flex-col bg-green-400 text-black rounded-2xl shadow-lg overflow-hidden hover:scale-[1.02] transition"
                    >
                        {/* Image Preview */}
                        <div className="relative h-48 sm:h-56 w-full overflow-hidden">
                            <img
                                src="/img/dailyb.png"
                                alt="Daily Boost"
                                className="w-full h-full object-cover"
                            />
                            {/* Click to view image */}
                            <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs sm:text-sm px-2 py-1 rounded">
                                Click the image to view
                            </div>
                        </div>
                        {/* Content */}
                        <div className="flex flex-col justify-between flex-1 p-6">
                            <div className="space-y-3">
                                <span className="text-3xl font-extrabold">02.</span>
                                <h3 className="text-2xl font-bold">Your Daily Boost</h3>
                                <p className="text-base">
                                    Get your daily dose of inspiration with curated content.
                                </p>
                            </div>
                            <div className="mt-6 flex gap-3">
                                <a
                                    href="https://github.com/leigabriel/yourdailyboost"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 py-2.5 rounded-lg text-center font-semibold bg-black text-white hover:bg-transparent hover:text-black border border-black transition"
                                >
                                    GitHub
                                </a>
                                <a
                                    href="https://yourdailymotivation.netlify.app"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 py-2.5 rounded-lg text-center font-semibold bg-white text-black hover:bg-gray-200 transition"
                                >
                                    Preview
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

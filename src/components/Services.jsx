import { useState } from "react";

export default function Services() {
    const [popupImg, setPopupImg] = useState(null);

    // Helper to show popup
    const handleImgClick = (src) => setPopupImg(src);
    // Helper to close popup
    const closePopup = () => setPopupImg(null);

    return (
        <>
            {/* Services Section */}
            <section
                id="services"
                className="min-h-screen py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-10 bg-white rounded-t-3xl flex items-center justify-center"
            >
                <div className="max-w-7xl w-full mx-auto relative overflow-visible">
                    {/* Section Header */}
                    <div className="text-center md:text-left mb-10 sm:mb-12">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-widest text-[#212631] uppercase">
                            My Services
                        </h2>
                        <p className="mt-3 text-sm sm:text-base md:text-lg text-gray-700 font-normal">
                            What I offer as a creative developer & designer
                        </p>
                    </div>

                    {/* Services Wrapper */}
                    <div className="gallery divide-y divide-gray-200">
                        {/* Service 1 */}
                        <div className="group flex flex-col md:flex-row items-stretch md:items-center justify-between py-8 sm:py-10 px-3 sm:px-6 transition-colors duration-200 hover:bg-gray-100/40 relative cursor-pointer overflow-visible rounded-xl">
                            <div className="flex-1 z-10 text-center md:text-left">
                                <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#212631] uppercase tracking-wider">
                                    Frontend / UI Design
                                </h3>
                                <p className="mt-2 text-sm sm:text-base md:text-lg text-gray-700 font-medium">
                                    Modern and responsive website & app interfaces
                                </p>
                            </div>

                            {/* Desktop Hover Image */}
                            <img
                                src="/img/artgallery.png"
                                alt="Frontend UI Mockup"
                                className="hidden md:block absolute left-[55%] lg:left-[50%] top-1/2 -translate-y-1/2 pointer-events-auto rounded-2xl shadow-2xl object-contain opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300 ease-in-out z-30 max-w-[420px] md:max-w-[500px] lg:max-w-[600px] max-h-[400px] lg:max-h-[500px] cursor-pointer"
                                onClick={() => handleImgClick('/img/artgallery.png')}
                            />

                            {/* Mobile Image */}
                            <img
                                src="/img/artgallery.png"
                                alt="Frontend UI Mockup"
                                className="block md:hidden mt-6 w-full max-w-xs sm:max-w-sm h-40 sm:h-52 object-cover mx-auto rounded-2xl shadow-lg cursor-pointer"
                                onClick={() => handleImgClick('/img/artgallery.png')}
                            />
                        </div>

                        {/* Service 2 */}
                        <div className="group flex flex-col md:flex-row items-stretch md:items-center justify-between py-8 sm:py-10 px-3 sm:px-6 transition-colors duration-200 hover:bg-gray-100/40 relative cursor-pointer overflow-visible rounded-xl">
                            <div className="flex-1 z-10 text-center md:text-left">
                                <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#212631] uppercase tracking-wider">
                                    Arts / Sketching
                                </h3>
                                <p className="mt-2 text-sm sm:text-base md:text-lg text-gray-700 font-medium">
                                    Hand-drawn and digital art concepts
                                </p>
                            </div>

                            <img
                                src="/img/makima.jpg"
                                alt="Sketchpad Drawing"
                                className="hidden md:block absolute left-[55%] lg:left-[50%] top-1/2 -translate-y-1/2 pointer-events-auto rounded-2xl shadow-2xl object-contain opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300 ease-in-out z-30 max-w-[420px] md:max-w-[500px] lg:max-w-[600px] max-h-[400px] lg:max-h-[500px] cursor-pointer"
                                onClick={() => handleImgClick('/img/makima.jpg')}
                            />

                            <img
                                src="/img/makima.jpg"
                                alt="Sketchpad Drawing"
                                className="block md:hidden mt-6 w-full max-w-xs sm:max-w-sm h-40 sm:h-52 object-cover mx-auto rounded-2xl shadow-lg cursor-pointer"
                                onClick={() => handleImgClick('/img/makima.jpg')}
                            />
                        </div>

                        {/* Service 3 */}
                        <div className="group flex flex-col md:flex-row items-stretch md:items-center justify-between py-8 sm:py-10 px-3 sm:px-6 transition-colors duration-200 hover:bg-gray-100/40 relative cursor-pointer overflow-visible rounded-xl">
                            <div className="flex-1 z-10 text-center md:text-left">
                                <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#212631] uppercase tracking-wider">
                                    Graphic Designs
                                </h3>
                                <p className="mt-2 text-sm sm:text-base md:text-lg text-gray-700 font-medium">
                                    Branding, posters, and visual content
                                </p>
                            </div>

                            <img
                                src="/img/angel.jpg"
                                alt="Poster Branding"
                                className="hidden md:block absolute left-[55%] lg:left-[50%] top-1/2 -translate-y-1/2 pointer-events-auto rounded-2xl shadow-2xl object-contain opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300 ease-in-out z-30 max-w-[420px] md:max-w-[500px] lg:max-w-[600px] max-h-[400px] lg:max-h-[500px] cursor-pointer"
                                onClick={() => handleImgClick('/img/angel.jpg')}
                            />

                            <img
                                src="/img/angel.jpg"
                                alt="Poster Branding"
                                className="block md:hidden mt-6 w-full max-w-xs sm:max-w-sm h-40 sm:h-52 object-cover mx-auto rounded-2xl shadow-lg cursor-pointer"
                                onClick={() => handleImgClick('/img/angel.jpg')}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Image Popup Overlay */}
            {popupImg && (
                <div
                    className="fixed inset-0 bg-black/80 z-[99999] flex items-center justify-center cursor-pointer"
                    onClick={closePopup}
                >
                    <img
                        src={popupImg}
                        alt="Full Preview"
                        className="max-w-full max-h-full rounded-2xl shadow-2xl border-4 border-white"
                        onClick={e => e.stopPropagation()}
                    />
                </div>
            )}
        </>
    );
}

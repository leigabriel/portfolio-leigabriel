export default function Contact() {
    return (
        <>
            {/* Contact Section */}
            <section id="contact" className="min-h-screen flex flex-col md:flex-row">
                {/* Info Panel */}
                <div
                    data-aos="fade-right"
                    className="w-full md:w-1/2 bg-gray-900 text-white flex flex-col items-center justify-center p-10"
                >
                    <div className="max-w-md text-center md:text-left space-y-6">
                        {/* Logo Image */}
                        <div data-aos="zoom-in" className="flex justify-center md:justify-start">
                            <img
                                src="/img/lei_img.jpg"
                                alt="Lei Gabriel Logo"
                                className="w-20 h-20 rounded-full object-cover shadow-lg border-2 border-white/30"
                            />
                        </div>
                        <h2
                            data-aos="fade-up"
                            className="text-3xl sm:text-4xl font-bold"
                        >
                            Let’s Work Together
                        </h2>
                        <p
                            data-aos="fade-up"
                            className="text-gray-300 leading-relaxed text-base sm:text-lg"
                        >
                            Have a project in mind, a collaboration idea, or just want to say hi?
                            Drop me a message and I’ll get back to you as soon as possible.
                        </p>
                    </div>
                </div>

                {/* Form Panel */}
                <div
                    data-aos="fade-left"
                    className="w-full md:w-1/2 bg-blue-900 flex items-center justify-center p-8 sm:p-12"
                >
                    <div
                        data-aos="zoom-in"
                        className="w-full max-w-lg border border-white/20 bg-blue-950/40 rounded-2xl shadow-xl p-6 sm:p-8"
                    >
                        <h3
                            data-aos="fade-up"
                            className="text-2xl font-semibold text-white mb-6 text-center"
                        >
                            Get in Touch
                        </h3>

                        <form
                            action="https://formspree.io/f/meozznwg"
                            method="POST"
                            className="space-y-5"
                        >
                            {/* Name Field */}
                            <div data-aos="fade-up">
                                <label className="block mb-1 text-sm font-medium text-gray-300">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    placeholder="Your Name"
                                    className="w-full p-3 border border-gray-700 bg-gray-800 text-white rounded-lg 
                                    focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
                                />
                            </div>

                            {/* Email Field */}
                            <div data-aos="fade-up">
                                <label className="block mb-1 text-sm font-medium text-gray-300">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    placeholder="your@email.com"
                                    className="w-full p-3 border border-gray-700 bg-gray-800 text-white rounded-lg 
                                    focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
                                />
                            </div>

                            {/* Subject */}
                            <div data-aos="fade-up">
                                <label className="block mb-1 text-sm font-medium text-gray-300">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    name="subject"
                                    required
                                    placeholder="Ex. Collaboration"
                                    className="w-full p-3 border border-gray-700 bg-gray-800 text-white rounded-lg 
                                    focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
                                />
                            </div>

                            {/* Message */}
                            <div data-aos="fade-up">
                                <label className="block mb-1 text-sm font-medium text-gray-300">
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    rows="4"
                                    required
                                    placeholder="Type your message..."
                                    className="w-full p-3 border border-gray-700 bg-gray-800 text-white rounded-lg 
                                    focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
                                ></textarea>
                            </div>

                            {/* Submit Button */}
                            <button
                                data-aos="zoom-in"
                                type="submit"
                                className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg 
                                hover:bg-blue-500 transition-colors shadow-md"
                            >
                                Send Message →
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}

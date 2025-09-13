import { useState } from "react";

export default function Chatbot() {
    const [open, setOpen] = useState(false);
    const [messages, setMessages] = useState([
        { sender: "bot", text: "Hi! How can I help you?" },
    ]);

    const predefinedAnswers = {
        "What do you do?": "I create UI design and graphic design 💻✨",
        "Show your projects": "You can scroll down to my portfolio projects section 🚀",
        "How can I contact you?": "Reach me via my contact form or on social media 📩",
        "What are your hobbies?": "I enjoy digital drawing, anime, UI/UX exploration, and chill music 🎨🎶",
        "What tools do you use?": "Canva, VS Code, and Tailwind CSS 🛠️",
        "Where are you from?": "I'm from Oriental Mindoro, Philippines 🇵🇭",
        "Favorite anime?": "Hunter x Hunter & One Piece! 🔥",
        "Any tips for learning design?": "Practice every day, study other designs, and experiment with new ideas 🎯"
    };

    const askQuestion = (q) => {
        setMessages((prev) => [...prev, { sender: "user", text: q }]);

        setTimeout(() => {
            const answer = predefinedAnswers[q] || "Hmm 🤔 I don’t have an answer for that yet!";
            setMessages((prev) => [...prev, { sender: "bot", text: answer }]);
        }, 600);
    };

    return (
        <div id="chatbot-plugin" className="z-[9999]">
            {/* Toggle Button */}
            <button
                onClick={() => setOpen(!open)}
                className="fixed bottom-6 right-6 w-14 h-14 flex items-center justify-center bg-white rounded-full shadow-lg cursor-pointer shadow-[#212631] hover:bg-gray-400 transition z-[9999]"
            >
                <img
                    src="https://cdn-icons-png.flaticon.com/128/17583/17583957.png"
                    alt="Chatbot"
                    className="w-7 h-7"
                />
            </button>

            {/* Chatbot Box */}
            {open && (
                <div className="fixed bottom-24 right-8 w-80 bg-white/70 backdrop-blur-lg shadow-2xl shadow-[#212631] rounded-xl p-4 flex flex-col z-[9999]">
                    <h2 className="text-lg font-bold mb-2 text-gray-700">
                        Hi there! Ask me something 😊
                    </h2>

                    {/* Messages */}
                    <div className="h-64 overflow-y-auto mb-2 space-y-2">
                        {messages.map((msg, i) => (
                            <div
                                key={i}
                                className={`px-3 py-1 rounded-xl max-w-[80%] font-medium ${msg.sender === "user"
                                        ? "ml-auto bg-gray-100 text-gray-800 text-right"
                                        : "mr-auto bg-blue-500 text-white text-left"
                                    }`}
                            >
                                {msg.text}
                            </div>
                        ))}
                    </div>

                    {/* Predefined Questions */}
                    <div className="flex flex-col gap-2">
                        {Object.keys(predefinedAnswers).map((q, i) => (
                            <button
                                key={i}
                                onClick={() => askQuestion(q)}
                                className="px-2 py-1 bg-gray-100 rounded hover:bg-gray-200 text-sm text-gray-800"
                            >
                                {q}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

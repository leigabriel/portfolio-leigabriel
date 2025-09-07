document.addEventListener("DOMContentLoaded", () => {
  // Elements
  const chatToggle = document.getElementById('chat-toggle');
  const chatBox = document.getElementById('chat-box');
  const chatMessages = document.getElementById('chat-messages');
  const qButtons = document.querySelectorAll('#chat-box .q-btn');

  // Predefined Q&A
  const answersRaw = {
    "What do you do?": "I create UI design and graphic design 💻✨",
    "Show your projects": "You can scroll down to my portfolio projects section 🚀",
    "How can I contact you?": "Reach me via my contact form or on social media 📩",
    "What are your hobbies?": "I enjoy digital drawing, anime, UI/UX exploration, and chill music 🎨🎶",
    "What tools do you use?": "Canva, VS Code, and Tailwind CSS 🛠️",
    "Where are you from?": "I'm from Oriental Mindoro, Philippines 🇵🇭",
    "Favorite anime?": "Hunter x Hunter & One Piece! 🔥",
    "Any tips for learning design?": "Practice every day, study other designs, and experiment with new ideas 🎯"
  };

  // Normalize text (to avoid mismatch issues)
  const normalize = s => String(s || '')
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, '')
    .replace(/\s+/g, ' ')
    .trim();

  // Create a map for faster Q lookup
  const answerMap = new Map();
  Object.keys(answersRaw).forEach(k => {
    answerMap.set(normalize(k), answersRaw[k]);
  });

  // Show/Hide chatbot box
  chatToggle.addEventListener('click', () => {
    chatBox.classList.toggle('hidden');
  });

  // Function to add a chat bubble
  const appendBubble = ({ text, isUser = false, extraClass = '' }) => {
    const el = document.createElement('div');
    el.className = [
      'chat-bubble',
      isUser ? 'text-right text-gray-800 bg-gray-100 self-end' : 'text-left text-white bg-blue-500 self-start',
      'font-medium px-3 py-1 rounded-xl max-w-[80%]',
      extraClass
    ].join(' ');
    el.textContent = text;
    chatMessages.appendChild(el);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    return el;
  };

  // Handle question button clicks
  qButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const rawQuestion = (btn.textContent || '').trim();
      const key = normalize(rawQuestion);

      // User question bubble
      appendBubble({ text: rawQuestion, isUser: true });

      // Show temporary typing indicator
      const typingEl = appendBubble({
        text: 'typing...',
        isUser: false,
        extraClass: 'text-gray-300 italic bg-gray-700/30'
      });

      // Replace typing indicator with real answer
      setTimeout(() => {
        typingEl.remove();
        const answer = answerMap.get(key) || "Hmm 🤔 I don’t have an answer for that yet!";
        appendBubble({ text: answer, isUser: false });
      }, 600);
    });
  });
});
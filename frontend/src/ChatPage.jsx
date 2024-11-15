import React, { useState, useEffect } from "react";
import { FaPaperPlane } from "react-icons/fa";
import dummyResponses from "./dummy-responses.json";

const ChatPage = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    setMessages([...messages, { text: input, sender: "user" }]);
    setLoading(true);

    const randomResponse =
      dummyResponses[Math.floor(Math.random() * dummyResponses.length)].text;

    setTimeout(() => {
      setMessages((prev) => [...prev, { text: randomResponse, sender: "ai" }]);
      setLoading(false);
    }, 1500);
    setInput("");
  };

  useEffect(() => {
    const chatContainer = document.getElementById("chat-container");
    chatContainer.scrollTop = chatContainer.scrollHeight;
  }, [messages]);

  return (
    <div>
      <div
        className="min-h-screen flex flex-col items-center justify-center 
    bg-gradient-to-r from-green-800 via-pink-800 to-green-800 text-purple-100 px-4"
      >
        <h1 className="text-[50px] font-bold mb-6 text-yellow-300">
          BrainX Chat
        </h1>
        <h1 className="text-2xl font-bold mb-6">What can I help with?</h1>

        <div className="w-full max-w-2xl bg-green-1000 rounded-xl shadow-lg shadow-yellow-400 p-6 space-y-4 border-t">
          <div
            id="chat-container"
            className="h-80 overflow-y-scroll p-4 space-y-3"
          >
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`${
                    msg.sender === "user"
                      ? "bg-white text-black"
                      : "bg-green-500 text-black"
                  } max-w-xs px-4 py-2 rounded-lg shadow-md`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex justify-start">
                <div className="bg-green-600 text-black max-w-xs px-4 py-2 rounded-lg shadow-md">
                  <div className="flex items-center">
                    <div className="w-2 h-2 mr-2 bg-black rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 mr-2 bg-black rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-black rounded-full animate-pulse"></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="flex items-center ">
            <input
              type="text"
              className="flex-grow text-black py-3 px-[6px] rounded-l-lg border-t border-b border-l border-purple-600 bg-white placeholder-black focus:outline-none "
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button
              onClick={handleSend}
              className="bg-pink-800 text-purple-200 px-5 py-[16.5px] rounded-r-lg hover:bg-green-600 transition-all "
            >
              <FaPaperPlane className="text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;

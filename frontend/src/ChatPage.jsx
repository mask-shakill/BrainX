import React, { useState, useEffect } from "react";
import { FaPaperPlane, FaRobot } from "react-icons/fa";
import apiResponse from "../public/api.json";

const ChatPage = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    setMessages([...messages, { text: input, sender: "user" }]);
    setLoading(true);

    const randomResponse =
      apiResponse[Math.floor(Math.random() * apiResponse.length)].text;

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
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      {/* Header */}
      <header className="w-full py-6 px-4 bg-black/30 backdrop-blur-md border-b border-white/10">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <FaRobot className="text-2xl text-purple-400" />
            <h1 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              BrainX Chat
            </h1>
          </div>
          <p className="text-sm text-gray-400">What can I help with today?</p>
        </div>
      </header>

      {/* Chat Container */}
      <main className="flex-grow w-full max-w-4xl px-4 py-8">
        <div className="h-[80vh] flex flex-col bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 shadow-xl">
          {/* Messages Area - Scrollable */}
          <div
            id="chat-container"
            className="flex-grow overflow-y-auto p-4 space-y-4"
          >
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] px-4 py-3 rounded-2xl ${
                    msg.sender === "user"
                      ? "bg-purple-500/90 text-white"
                      : "bg-gray-800/90 text-gray-100"
                  } shadow-md transition-all duration-200`}
                >
                  <p className="text-sm leading-relaxed">{msg.text}</p>
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex justify-start">
                <div className="bg-gray-800/90 text-gray-100 max-w-[80%] px-4 py-3 rounded-2xl shadow-md">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-gray-300 rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-gray-300 rounded-full animate-pulse delay-100"></div>
                    <div className="w-2 h-2 bg-gray-300 rounded-full animate-pulse delay-200"></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Fixed Input Area at Bottom */}
          <div className="sticky bottom-0 border-t border-white/10 bg-gray-900/50 p-4">
            <div className="flex items-center space-x-2">
              <input
                type="text"
                className="flex-grow bg-gray-800/50 text-white py-3 px-4 rounded-xl border border-white/10 focus:outline-none focus:border-purple-400/50 focus:ring-2 focus:ring-purple-400/20 placeholder-gray-400 transition-all"
                placeholder="Type your message here..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
              />
              <button
                onClick={handleSend}
                className="p-3 bg-purple-500/90 hover:bg-purple-600 text-white rounded-xl transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-400/50 disabled:opacity-50"
                disabled={!input.trim()}
              >
                <FaPaperPlane className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ChatPage;

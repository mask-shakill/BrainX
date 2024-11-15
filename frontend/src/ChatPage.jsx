import React, { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import dummyResponses from "./dummy-responses.json";
const ChatPage = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = async () => {
    if (!input.trim()) return;

    setMessages([...messages, { text: input, sender: "user" }]);

    const randomResponse =
      dummyResponses[Math.floor(Math.random() * dummyResponses.length)].text;

    setMessages((prev) => [...prev, { text: randomResponse, sender: "ai" }]);

    setInput("");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-green-900 to-blue-500 text-purple-100 px-4">
      <h1 className="text-[50px]  font-bold mb-6 text-yellow-300">
        BrainX Chat
      </h1>
      <h1 className="text-2xl font-bold mb-6">What can I help with?</h1>

      <div className="w-full max-w-2xl bg-green-900 rounded-xl shadow-lg p-6 space-y-4">
        <div className="h-80 overflow-y-scroll  p-4 space-y-3">
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
                    ? "bg-yellow-400 text-black"
                    : "bg-yellow-400 text-black"
                } max-w-xs px-4 py-2 rounded-lg shadow-md`}
              >
                {msg.text}
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center">
          <input
            type="text"
            className="flex-grow text-black p-3 rounded-l-lg border-t border-b border-l border-purple-600 bg-white placeholder-black focus:outline-none"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
          />
          <button
            onClick={handleSend}
            className="bg-yellow-400 text-purple-200 px-5 py-[17px] rounded-r-lg hover:bg-purple-600 transition-all"
          >
            <FaPaperPlane className="text-black" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;

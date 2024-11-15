import React from "react";
import { useNavigate } from "react-router-dom";

const ChatPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-green-900 via-blue-500 to-blue-700 text-white">
      <button
        onClick={() => navigate("/")}
        className="absolute top-4 left-4 bg-yellow-400 text-black px-4 py-2 rounded-lg hover:bg-yellow-500"
      >
        Back
      </button>
      <h1 className="text-3xl font-bold mb-6 text-yellow-300">BrainX Chat</h1>
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-lg p-6 text-gray-800">
        <div className="h-96 overflow-y-scroll border-b-2 border-gray-200 mb-4">
          {/* Chat messages will go here */}
          <p className="text-center text-gray-500">Start a conversation...</p>
        </div>
        <div className="flex">
          <input
            type="text"
            className="flex-grow p-3 rounded-l-lg border-t border-b border-l border-gray-300 focus:outline-none"
            placeholder="Type your message..."
          />
          <button className="bg-yellow-400 text-black px-6 py-3 rounded-r-lg hover:bg-yellow-700">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;

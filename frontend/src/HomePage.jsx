import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaRobot,
  FaLightbulb,
  FaUsers,
  FaCheckCircle,
  FaCogs,
  FaEnvelope,
} from "react-icons/fa";
import { GiBrain } from "react-icons/gi";

const HomePage = () => {
  const route = useNavigate();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-green-800 via-blue-500 to-blue-800 text-white font-sans">
      {/* Navbar */}
      <header className="w-full flex justify-between items-center py-4 px-6 bg-opacity-80 backdrop-blur-md">
        <h1 className="text-2xl font-bold tracking-wider flex items-center space-x-2">
          <GiBrain className="text-yellow-300" /> <span>BrainX</span>
        </h1>
        <nav>
          <button
            onClick={() => route("/chat")}
            className="px-6 py-2 bg-white font-semibold text-gray-600 rounded-full shadow-md hover:bg-indigo-300 transition-all"
          >
            Get Started
          </button>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center text-center px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          Welcome to <span className="text-yellow-400">BrainX</span>
        </h2>
        <p className="max-w-2xl text-lg md:text-xl mb-8">
          Your intelligent AI companion for answering questions, generating
          ideas, and more.
        </p>

        <button
          onClick={() => route("/chat")}
          className="px-8 py-3 bg-yellow-400 text-purple-800 font-semibold rounded-full shadow-lg hover:bg-yellow-500 transition"
        >
          Explore BrainX
        </button>
      </main>

      {/* Features Section */}
      <section className=" text-white w-full py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-10">Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <FaRobot className="text-4xl text-indigo-200 mb-4" />
              <h4 className="text-xl font-semibold">AI-Powered Responses</h4>
              <p className="text-black">
                BrainX provides intelligent, AI-driven responses to your
                questions.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <FaLightbulb className="text-4xl text-yellow-400 mb-4" />
              <h4 className="text-xl font-semibold">Creative Suggestions</h4>
              <p className="text-black">
                Get innovative ideas and insights to boost your creativity.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <FaUsers className="text-4xl text-indigo-200 mb-4" />
              <h4 className="text-xl font-semibold">User-Friendly</h4>
              <p className="text-black">
                Simple and intuitive interface designed for all users.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className=" w-full py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-10">How It Works</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <FaCheckCircle className="text-4xl text-green-400 mb-4" />
              <h4 className="text-xl font-semibold">Ask Your Question</h4>
              <p>Type in your query and get accurate answers in seconds.</p>
            </div>
            <div className="flex flex-col items-center">
              <FaCogs className="text-4xl text-yellow-400 mb-4" />
              <h4 className="text-xl font-semibold">Advanced AI Processing</h4>
              <p>Our AI models analyze and generate the best response.</p>
            </div>
            <div className="flex flex-col items-center">
              <FaRobot className="text-4xl text-green-400 mb-4" />
              <h4 className="text-xl font-semibold">
                Receive Instant Responses
              </h4>
              <p>Get helpful and immediate responses tailored to your needs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-3 bg-black bg-opacity-40 text-center text-sm flex flex-col items-center space-y-2">
        <p>Developed by Shahariar Kobir Shakil</p>
        <a
          href="mailto:mask.shakill@gmail.com"
          className="flex items-center space-x-2 text-gray-300 hover:text-gray-100"
        >
          <FaEnvelope /> <span>mask.shakill@gmail.com</span>
        </a>
      </footer>
    </div>
  );
};

export default HomePage;

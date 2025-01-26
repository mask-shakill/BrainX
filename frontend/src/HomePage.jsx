import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaRobot,
  FaLightbulb,
  FaUsers,
  FaCheckCircle,
  FaCogs,
  FaEnvelope,
  FaRocket,
} from "react-icons/fa";
import { GiBrain } from "react-icons/gi";

const HomePage = () => {
  const navigate = useNavigate();

  const FeatureCard = ({ icon, title, text, color }) => (
    <div className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-lg rounded-xl hover:bg-white/20 transition-all duration-300 ease-in-out transform hover:-translate-y-2 shadow-lg hover:shadow-xl">
      <div className={`text-4xl mb-4 ${color}`}>{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-center text-gray-200">{text}</p>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Navbar */}
      <nav className="w-full px-4 sm:px-8 py-4 flex justify-between items-center fixed top-0 bg-black/30 backdrop-blur-md z-50">
        <div className="flex items-center space-x-2">
          <GiBrain className="text-3xl text-purple-400" />
          <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            BrainX
          </span>
        </div>
        <button
          onClick={() => navigate("/chat")}
          className="px-6 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-full transition-all duration-300 flex items-center space-x-2"
        >
          <FaRocket />
          <span>Start Chatting</span>
        </button>
      </nav>

      {/* Hero Section */}
      <section className="flex-grow flex items-center pt-24 pb-12 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Supercharge Your Creativity with AI
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            BrainX is your intelligent partner for innovative ideas, instant
            answers, and creative solutions powered by advanced artificial
            intelligence.
          </p>
          <button
            onClick={() => navigate("/chat")}
            className="px-8 py-3 bg-purple-500 hover:bg-purple-600 text-white rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/30"
          >
            Start Exploring Now
          </button>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-white">
            Why Choose BrainX?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              icon={<FaRobot />}
              title="Smart AI Assistant"
              text="Get instant, accurate responses to any question with our advanced neural network"
              color="text-purple-400"
            />
            <FeatureCard
              icon={<FaLightbulb />}
              title="Creative Engine"
              text="Generate innovative ideas and solutions for any challenge you face"
              color="text-yellow-400"
            />
            <FeatureCard
              icon={<FaUsers />}
              title="Collaborative Platform"
              text="Work seamlessly with teams and share insights in real-time"
              color="text-blue-400"
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 sm:px-8 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-white">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaCheckCircle className="text-2xl text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">
                1. Ask Anything
              </h3>
              <p className="text-gray-300">
                Type your question or describe your challenge
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaCogs className="text-2xl text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">
                2. AI Processing
              </h3>
              <p className="text-gray-300">
                Our neural network analyzes and generates solutions
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaRobot className="text-2xl text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">
                3. Get Results
              </h3>
              <p className="text-gray-300">
                Receive intelligent, actionable responses instantly
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-8 bg-black/30">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <GiBrain className="text-xl text-purple-400" />
            <span className="font-semibold text-white">BrainX</span>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <a
              href="mailto:mask.shakill@gmail.com"
              className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
            >
              <FaEnvelope />
              <span>mask.shakill@gmail.com</span>
            </a>
            <p className="text-gray-400 text-sm">
              Developed by Shahariar Kobir Shakil
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;

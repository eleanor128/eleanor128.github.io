'use client';

import { useState } from 'react';
import { FaPlane, FaCamera, FaHeart, FaBook, FaMusic, FaGamepad, FaMountain } from 'react-icons/fa';
import { GiCoffeeCup, GiShuttlecock } from 'react-icons/gi';


interface Country {
  name: string;
  flag: string;
  year: string;
  description: string;
  highlights: string[];
}

const visitedCountries: Country[] = [
  {
    name: "Taiwan",
    flag: "🇹🇼",
    year: "Home",
    description: "My beautiful homeland with amazing food and friendly people.",
    highlights: ["Night markets", "Taroko Gorge", "Bubble tea culture", "Traditional temples"]
  },
  {
    name: "Switzerland",
    flag: "🇨🇭",
    year: "2024",
    description: "Exchange student experience in Geneva - breathtaking Alps and rich culture.",
    highlights: ["Lake Geneva", "Swiss Alps", "Multicultural environment", "Academic excellence"]
  },
  {
    name: "France",
    flag: "🇫🇷",
    year: "2024",
    description: "Explored the art, cuisine, and romantic atmosphere of France.",
    highlights: ["Louvre Museum", "French cuisine", "Historic architecture", "Language learning"]
  },
  {
    name: "Italy",
    flag: "🇮🇹",
    year: "2024",
    description: "Discovered ancient history, amazing pasta, and stunning art.",
    highlights: ["Roman Colosseum", "Renaissance art", "Italian gelato", "Coastal beauty"]
  },
  {
    name: "Japan",
    flag: "🇯🇵",
    year: "2023",
    description: "Fascinating blend of traditional culture and modern technology.",
    highlights: ["Cherry blossoms", "Traditional temples", "Modern technology", "Anime culture"]
  }
];

const interests = [
  { name: "Badminton", icon: <GiShuttlecock className="text-yellow-500" />, description: "Former team leader with national tournament experience" },
  { name: "Travel", icon: <FaPlane className="text-blue-500" />, description: "Exploring different cultures and creating memories" },
  { name: "Photography", icon: <FaCamera className="text-purple-500" />, description: "Capturing beautiful moments and landscapes" },
  { name: "Reading", icon: <FaBook className="text-green-500" />, description: "Always learning something new through books" },
  { name: "Music", icon: <FaMusic className="text-pink-500" />, description: "Enjoying various genres and discovering new artists" },
  { name: "Gaming", icon: <FaGamepad className="text-red-500" />, description: "Relaxing with strategy and adventure games" },
  { name: "Hiking", icon: <FaMountain className="text-green-600" />, description: "Exploring nature and challenging myself" },
  { name: "Coffee", icon: <GiCoffeeCup className="text-amber-600" />, description: "Coffee enthusiast and café explorer" }
];

export default function MoreAboutMe() {
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f3f5f9] to-[#e8eef7] dark:from-gray-900 dark:to-gray-800 py-12">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            More About Me
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Beyond the professional world - my travels, interests, and the things that make me who I am.
          </p>
        </div>

        {/* Travel Section */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            🌍 My Travel Journey
          </h2>
          
          {/* Interactive Map */}
          <div className="mb-8">
            <p className="text-center text-gray-500 dark:text-gray-400 mt-4 text-sm">
              Interactive map showing the countries I've visited - you can zoom and pan to explore!
            </p>
          </div>
          
          {/* Countries Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {visitedCountries.map((country, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                onClick={() => setSelectedCountry(selectedCountry?.name === country.name ? null : country)}
              >
                <div className="text-center">
                  <div className="text-6xl mb-4">{country.flag}</div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {country.name}
                  </h3>
                  <p className="text-[#7e97c6] dark:text-[#a5b8d4] font-medium mb-3">
                    {country.year}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Click to learn more
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Selected Country Details */}
          {selectedCountry && (
            <div className="bg-gradient-to-r from-[#7e97c6] to-[#a5b8d4] text-white rounded-lg p-6 animate-fadeIn">
              <h3 className="text-2xl font-bold mb-4">
                {selectedCountry.flag} {selectedCountry.name}
              </h3>
              <p className="text-lg mb-4 opacity-90">
                {selectedCountry.description}
              </p>
              <div>
                <h4 className="font-bold mb-2">Highlights:</h4>
                <div className="grid md:grid-cols-2 gap-2">
                  {selectedCountry.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-center">
                      <span className="mr-2">✨</span>
                      <span className="opacity-90">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Interests & Hobbies Section */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            🎯 Interests & Hobbies
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {interests.map((interest, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="text-4xl mb-4 flex justify-center">
                  {interest.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  {interest.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {interest.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Personal Philosophy Section */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            💭 Personal Philosophy
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Continuous Growth
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Always learning, always improving. Every challenge is an opportunity to grow.
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Collaboration
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Great things happen when we work together and share our diverse perspectives.
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl mb-4">⚖️</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Work-Life Balance
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Success means finding harmony between professional achievements and personal happiness.
                </p>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <blockquote className="text-xl italic text-gray-600 dark:text-gray-300 border-l-4 border-[#7e97c6] pl-6">
                "The best way to predict the future is to create it through data-driven decisions and continuous learning."
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

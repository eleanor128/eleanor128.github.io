'use client';

import { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaReact, FaNodeJs, FaDatabase, FaPython } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiLaravel, SiMysql, SiPostgresql, SiMongodb, SiJavascript, SiTypescript } from 'react-icons/si';

interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  image: string;
  category: string;
  date: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "",
    subtitle: "IOT Drum Stick",
    description: "An innovative IoT drumstick that captures drumming motions and translates them into digital audio, enabling remote music practice and performance.",
    technologies: ["Raspberry Pi", "JavaScript"],
    githubUrl: "https://github.com/eleanor128/IOT-Drum-Stick",
    liveUrl: "https://www.youtube.com/watch?v=Q8ORrFAGLZA",
    // image: "/IOTDrumStick.png",
    image: "/Drum.jpg",
    category: "IoT",
    date: "2025"
  },
    {
    id: 2,
    title: "",
    subtitle: "Marathon BI Dashboard",
    description: "A business intelligence dashboard for marathon data analysis and visualization.",
    technologies: ["Looker Studio", "SQL", "Python"],
    githubUrl: "https://github.com/eleanor128/Gender-Prediction",
    image: "/MarathonBI.png",
    category: "Data Analysis",
    date: "2025"
  },
  {
    id: 3,
    title: "",
    subtitle: "Gender Prediction from Online Surveys",
    description: "A machine learning group project achieving 86.38% accuracy in predicting gender from online survey data through advanced feature engineering.",
    technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "KNN", "RFE"],
    githubUrl: "https://github.com/eleanor128/Gender-Prediction",
    image: "/GenderPrediction.png",
    category: "Data Science & Machine Learning",
    date: "2025"
  },
  {
    id: 4,
    title: "",
    subtitle: "CoCo Funding Platform",
    description: "A MERN-stack crowdfunding platform developed as a group project with primary focus on backend development.",
    technologies: ["MongoDB", "Express.js", "Node.js", "React", "JavaScript", "RESTful API"],
    githubUrl: "https://github.com/CoCo-CrowdFunding/CoCo-Funding",
    image: "/CoCoCrowdFundingPlatform.png",
    category: "Backend Web Development",
    date: "2024"
  },
  {
    id: 5,
    title: "",
    subtitle: "AI Visual Novel",
    description: "An AI-driven text adventure game using OpenAI API and DALL·E. Semifinalist in the International ICT Innovative Services Awards 2023.",
    technologies: ["Unity", "C#", "OpenAI API", "DALL·E", "JSON", "Game Design"],
    githubUrl: "https://github.com/AI-VisualNovel/UnityProject",
    image: "/AIVisualNovel.png",
    category: "Game Development",
    date: "2023"
  },
  
];

const getTechIcon = (tech: string) => {
  switch (tech.toLowerCase()) {
    case 'react': return <FaReact className="text-blue-500" />;
    case 'next.js': return <SiNextdotjs className="text-black dark:text-white" />;
    case 'node.js': return <FaNodeJs className="text-green-600" />;
    case 'express.js': return <FaNodeJs className="text-gray-600" />;
    case 'tailwind css': return <SiTailwindcss className="text-cyan-500" />;
    case 'laravel': return <SiLaravel className="text-red-500" />;
    case 'php': return <FaDatabase className="text-purple-600" />;
    case 'mysql': return <SiMysql className="text-blue-600" />;
    case 'postgresql': return <SiPostgresql className="text-blue-700" />;
    case 'mongodb': return <SiMongodb className="text-green-500" />;
    case 'javascript': return <SiJavascript className="text-yellow-500" />;
    case 'typescript': return <SiTypescript className="text-blue-600" />;
    case 'python': return <FaPython className="text-yellow-500" />;
    case 'arduino': return <FaDatabase className="text-teal-500" />;
    case 'c++': return <FaDatabase className="text-blue-400" />;
    case 'c#': return <FaDatabase className="text-purple-600" />;
    case 'iot': return <FaDatabase className="text-purple-500" />;
    case 'scikit-learn': return <FaPython className="text-orange-500" />;
    case 'pandas': return <FaPython className="text-blue-400" />;
    case 'numpy': return <FaPython className="text-blue-500" />;
    case 'knn': return <FaPython className="text-green-500" />;
    case 'rfe': return <FaPython className="text-red-500" />;
    case 'matplotlib': return <FaPython className="text-red-400" />;
    case 'seaborn': return <FaPython className="text-blue-300" />;
    case 'sensors': return <FaDatabase className="text-green-400" />;
    case 'wireless communication': return <FaDatabase className="text-indigo-500" />;
    case 'looker studio': return <FaDatabase className="text-blue-500" />;
    case 'sql': return <FaDatabase className="text-orange-600" />;
    case 'unity': return <FaDatabase className="text-gray-700 dark:text-gray-400" />;
    case 'game design': return <FaDatabase className="text-pink-500" />;
    case 'openai api': return <FaDatabase className="text-green-600" />;
    case 'dall·e': return <FaDatabase className="text-purple-400" />;
    case 'json': return <SiJavascript className="text-yellow-400" />;
    case 'ai/ml apis': return <FaDatabase className="text-green-600" />;
    case 'bootstrap': return <FaDatabase className="text-purple-500" />;
    case 'restful api': return <FaDatabase className="text-teal-600" />;
    default: return <FaDatabase className="text-gray-500" />;
  }
};

export default function MyProjectPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];
  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f3f5f9] to-[#e8eef7] dark:from-gray-900 dark:to-gray-800 py-12">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Here are some of my projects done at school or during internship. 
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-[#7e97c6] text-white shadow-lg'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-[#7e97c6] hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group">
              {/* Project Card */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 cursor-pointer">
                {/* Project Image */}
                <div className="h-48 relative overflow-hidden bg-gradient-to-br from-[#7e97c6] to-[#a5b8d4]">
                  {!project.image.startsWith('/api/placeholder') && (
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60 flex items-end justify-center pb-4">
                    <h3 className="text-white text-2xl font-bold text-center px-4 drop-shadow-lg">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-[#7e97c6] dark:text-[#a5b8d4] font-medium">
                      {project.category}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {project.date}
                    </span>
                  </div>
                  
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {project.subtitle}
                  </h4>
                  
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <div key={tech} className="flex items-center gap-1 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-xs">
                        {getTechIcon(tech)}
                        <span className="text-gray-700 dark:text-gray-300">{tech}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 text-gray-600 dark:text-gray-300 hover:text-[#7e97c6] transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <FaGithub size={18} />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 text-gray-600 dark:text-gray-300 hover:text-[#7e97c6] transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <FaExternalLinkAlt size={16} />
                        </a>
                      )}
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
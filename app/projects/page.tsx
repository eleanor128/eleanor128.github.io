'use client';

import { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaReact, FaNodeJs, FaDatabase, FaPython, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiLaravel, SiMysql, SiPostgresql, SiMongodb, SiJavascript, SiTypescript } from 'react-icons/si';

interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  detailedDescription: string;
  technologies: string[];
  features: string[];
  challenges: string[];
  learnings: string[];
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
    detailedDescription: "The IOT Drum Stick is a smart musical instrument that combines hardware sensors with software to detect and analyze drumming patterns. Using motion sensors and wireless connectivity, it captures the drummer's movements in real-time and converts them into MIDI signals or audio output. This project demonstrates the integration of IoT technology with music, making it possible to practice drumming anywhere without physical drums.",
    technologies: ["Raspberry Pi", "JavaScript"],
    features: [
      "Real-time motion tracking with accelerometer and gyroscope",
      "Wireless data transmission to computer/mobile device",
      "MIDI signal generation for music software integration",
      "Customizable sensitivity and response settings",
      "Battery-powered portable design"
    ],
    challenges: [
      "Accurately detecting different drumming velocities and techniques",
      "Minimizing latency for real-time audio feedback",
      "Calibrating sensors for consistent performance",
      "Optimizing power consumption for extended battery life"
    ],
    learnings: [
      "IoT hardware-software integration",
      "Sensor data processing and filtering",
      "Wireless communication protocols",
      "Real-time signal processing techniques"
    ],
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
    detailedDescription: "The Marathon BI Dashboard is designed to provide insights into marathon events by visualizing key performance indicators (KPIs) and trends. It integrates data from various sources, including participant registrations, race results, and demographic information. The dashboard allows users to explore data through interactive charts and filters, enabling them to gain a deeper understanding of marathon participation and performance.",
    technologies: ["Looker Studio", "SQL", "Python"],
    features: [
      "Interactive data visualization with customizable charts",
      "Real-time data updates from multiple sources",
      "Demographic analysis and participant segmentation",
      "Performance trends and race statistics",
      "Exportable reports and insights",
      "Responsive design for mobile and desktop viewing"
    ],
    challenges: [
      "Integrating data from multiple disparate sources",
      "Ensuring data accuracy and consistency",
      "Optimizing dashboard performance with large datasets",
      "Creating intuitive visualizations for non-technical users"
    ],
    learnings: [
      "Business intelligence tools and techniques",
      "Data integration and ETL processes",
      "SQL query optimization for reporting",
      "Dashboard design best practices",
      "Looker Studio advanced features and customization"
    ],
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
    detailedDescription: "This group project developed a comprehensive machine learning workflow to predict gender from online survey responses. The project involved extensive data preprocessing, handling missing values through manual and KNN imputation methods, and sophisticated feature engineering including BMI calculations, text-length metrics, and gender-keyword embeddings. Applied Recursive Feature Elimination (RFE) to optimize the feature set and trained multiple models to achieve 86.38% prediction accuracy.",
    technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "KNN", "RFE"],
    features: [
      "Full ML workflow from data preprocessing to model deployment",
      "Missing value imputation using manual and KNN methods",
      "Advanced feature engineering (BMI, text metrics, keyword embeddings)",
      "Recursive Feature Elimination (RFE) for feature optimization",
      "Cross-validation for robust model evaluation",
      "Achieved 86.38% prediction accuracy"
    ],
    challenges: [
      "Handling missing and inconsistent survey data",
      "Engineering meaningful features from text responses",
      "Balancing model complexity with interpretability",
      "Optimizing feature selection without overfitting"
    ],
    learnings: [
      "Advanced feature engineering techniques",
      "Missing value imputation strategies (KNN)",
      "Recursive Feature Elimination (RFE) methodology",
      "Model selection and hyperparameter tuning",
      "Working with survey and text data",
      "Collaborative ML project development"
    ],
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
    detailedDescription: "CoCo Funding Platform is a comprehensive MERN-stack (MongoDB, Express.js, React, Node.js) group project that enables creators to launch crowdfunding campaigns and connect with supporters. As the primary backend developer, I designed and implemented backend services for proposals and comments, including data modeling, RESTful CRUD APIs, and database architecture. Collaborated closely with the team on system design and integration to ensure platform robustness and scalability.",
    technologies: ["MongoDB", "Express.js", "Node.js", "React", "JavaScript", "RESTful API"],
    features: [
      "Backend services for proposals and comments management",
      "RESTful CRUD APIs for data operations",
      "MongoDB data modeling and schema design",
      "User authentication and authorization",
      "Real-time proposal updates and comment system",
      "Collaborative team development with system integration"
    ],
    challenges: [
      "Designing scalable database schemas for proposals and comments",
      "Implementing efficient CRUD operations for large datasets",
      "Ensuring system robustness through proper error handling",
      "Coordinating backend-frontend integration with team members",
      "Managing asynchronous operations and data consistency"
    ],
    learnings: [
      "MERN stack full-stack development",
      "Backend API design and implementation",
      "MongoDB database design and optimization",
      "RESTful API best practices",
      "Team collaboration and system integration",
      "Version control and code review processes"
    ],
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
    detailedDescription: "AI Visual Novel is a bachelor's graduation group project that combines artificial intelligence with interactive storytelling. As part of a 4-person team, I was responsible for designing and implementing the player-facing UI and scene-navigation logic in Unity using C#. The game utilizes OpenAI API and DALL·E to generate dynamic storylines and visuals, creating a unique experience for each player. I also developed a JSON-based save/load mechanism to persist and restore game progress. The project was recognized as a semifinalist in the International ICT Innovative Services Awards 2023 (Taiwan).",
    technologies: ["Unity", "C#", "OpenAI API", "DALL·E", "JSON", "Game Design"],
    features: [
      "AI-generated dynamic storylines using OpenAI API",
      "Real-time visual generation with DALL·E integration",
      "Player-facing UI and intuitive scene navigation",
      "JSON-based save/load mechanism for game progress",
      "Interactive text adventure gameplay",
      "Team collaboration with 4 members",
      "Semifinalist in International ICT Innovative Services Awards 2023"
    ],
    challenges: [
      "Integrating OpenAI API and DALL·E into Unity workflow",
      "Designing intuitive UI for complex narrative choices",
      "Implementing robust save/load system with JSON serialization",
      "Managing API response times for seamless gameplay",
      "Coordinating team development in Unity environment"
    ],
    learnings: [
      "Unity game development with C#",
      "AI API integration (OpenAI, DALL·E)",
      "UI/UX design for interactive narratives",
      "JSON data serialization and persistence",
      "Scene management and navigation in Unity",
      "Collaborative game development workflow",
      "Project presentation and competition experience"
    ],
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
  const [expandedProject, setExpandedProject] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];
  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  const toggleProject = (projectId: number) => {
    setExpandedProject(expandedProject === projectId ? null : projectId);
  };

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
                    {project.technologies.length > 3 && (
                      <span className="text-xs text-gray-500 dark:text-gray-400 px-2 py-1">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
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
                    
                    <button
                      onClick={() => toggleProject(project.id)}
                      className="flex items-center gap-2 text-[#7e97c6] hover:text-[#6b85b3] transition-colors font-medium text-sm"
                    >
                      {expandedProject === project.id ? 'Less' : 'More'}
                      {expandedProject === project.id ? 
                        <FaChevronUp size={12} /> : 
                        <FaChevronDown size={12} />
                      }
                    </button>
                  </div>
                </div>

                {/* Expanded Content */}
                {expandedProject === project.id && (
                  <div className="border-t border-gray-200 dark:border-gray-700 p-6 bg-gray-50 dark:bg-gray-900 animate-fadeIn">
                    <div className="space-y-6">
                      {/* Detailed Description */}
                      <div>
                        <h5 className="font-semibold text-gray-900 dark:text-white mb-2">About this project</h5>
                        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                          {project.detailedDescription}
                        </p>
                      </div>

                      {/* All Technologies */}
                      <div>
                        <h5 className="font-semibold text-gray-900 dark:text-white mb-3">Technologies Used</h5>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <div key={tech} className="flex items-center gap-1 bg-white dark:bg-gray-800 px-3 py-1 rounded-full text-sm border">
                              {getTechIcon(tech)}
                              <span className="text-gray-700 dark:text-gray-300">{tech}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Key Features */}
                      <div>
                        <h5 className="font-semibold text-gray-900 dark:text-white mb-3">Key Features</h5>
                        <ul className="space-y-1">
                          {project.features.map((feature, index) => (
                            <li key={index} className="text-gray-600 dark:text-gray-300 text-sm flex items-start">
                              <span className="text-[#7e97c6] mr-2">•</span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Challenges & Learnings */}
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="font-semibold text-gray-900 dark:text-white mb-3">Challenges</h5>
                          <ul className="space-y-1">
                            {project.challenges.map((challenge, index) => (
                              <li key={index} className="text-gray-600 dark:text-gray-300 text-sm flex items-start">
                                <span className="text-red-500 mr-2">•</span>
                                {challenge}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-900 dark:text-white mb-3">Key Learnings</h5>
                          <ul className="space-y-1">
                            {project.learnings.map((learning, index) => (
                              <li key={index} className="text-gray-600 dark:text-gray-300 text-sm flex items-start">
                                <span className="text-green-500 mr-2">•</span>
                                {learning}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
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
    title: "Personal Website",
    subtitle: "Responsive portfolio website with modern design",
    description: "A modern, responsive personal website built with Next.js and Tailwind CSS featuring dark mode support and smooth animations.",
    detailedDescription: "This personal website showcases my professional journey and technical skills. Built with modern web technologies, it features a responsive design that adapts seamlessly across all devices. The site includes sections for my CV, projects, and contact information, all wrapped in a clean, professional design with smooth animations and transitions.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    features: [
      "Responsive design for all device sizes",
      "Dark mode support with system preference detection",
      "Smooth animations and transitions",
      "SEO optimized with meta tags",
      "Fast loading with Next.js optimization"
    ],
    challenges: [
      "Implementing smooth dark mode transitions",
      "Optimizing for Core Web Vitals",
      "Creating accessible navigation"
    ],
    learnings: [
      "Advanced Tailwind CSS techniques",
      "Next.js App Router best practices",
      "Performance optimization strategies"
    ],
    githubUrl: "https://github.com/eleanor128/personal-website",
    liveUrl: "https://eleanor-website.vercel.app",
    image: "/api/placeholder/400/250",
    category: "Web Development",
    date: "2024"
  },
  {
    id: 2,
    title: "Data Dashboard",
    subtitle: "Interactive business intelligence dashboard",
    description: "A comprehensive BI dashboard for visualizing health insights, business metrics, and sports registration data with real-time updates.",
    detailedDescription: "Developed as part of my internship at H2U Corporation, this dashboard processes and visualizes over 5 million records from 2020-2025. The dashboard includes interactive charts, real-time data updates, and customizable filters to help stakeholders make data-driven decisions. Built with modern web technologies and optimized for performance even with large datasets.",
    technologies: ["React", "D3.js", "Node.js", "PostgreSQL", "Python"],
    features: [
      "Real-time data visualization with 5M+ records",
      "Interactive charts and graphs",
      "Customizable filters and date ranges",
      "Export functionality for reports",
      "Mobile-responsive design"
    ],
    challenges: [
      "Handling large datasets efficiently",
      "Real-time data synchronization",
      "Performance optimization for complex queries"
    ],
    learnings: [
      "Data visualization best practices",
      "Database optimization techniques",
      "ETL workflow development"
    ],
    githubUrl: "https://github.com/eleanor128/data-dashboard",
    image: "/api/placeholder/400/250",
    category: "Data Analysis",
    date: "2025"
  },
  {
    id: 3,
    title: "E-commerce Platform",
    subtitle: "Full-stack online shopping platform",
    description: "A complete e-commerce solution with shopping cart, payment integration, and admin dashboard for inventory management.",
    detailedDescription: "A full-featured e-commerce platform built from the ground up with modern web technologies. The platform includes user authentication, product catalog management, shopping cart functionality, secure payment processing, and a comprehensive admin dashboard. Designed with scalability and user experience in mind.",
    technologies: ["Laravel", "Vue.js", "MySQL", "Stripe API", "Redis"],
    features: [
      "User authentication and authorization",
      "Product catalog with search and filters",
      "Shopping cart and wishlist functionality",
      "Secure payment processing with Stripe",
      "Admin dashboard for inventory management",
      "Order tracking and email notifications"
    ],
    challenges: [
      "Implementing secure payment processing",
      "Optimizing database queries for product search",
      "Managing complex order workflows"
    ],
    learnings: [
      "Full-stack application architecture",
      "Payment gateway integration",
      "Database design for e-commerce"
    ],
    githubUrl: "https://github.com/eleanor128/ecommerce-platform",
    liveUrl: "https://demo-ecommerce.eleanor.dev",
    image: "/api/placeholder/400/250",
    category: "Full Stack",
    date: "2023"
  },
  {
    id: 4,
    title: "Network Monitoring Tool",
    subtitle: "Campus network infrastructure monitoring",
    description: "A monitoring solution for tracking network performance and connectivity issues across campus dormitories.",
    detailedDescription: "Developed during my role as Student Dormitory Network Administrator, this tool monitors network performance across 4 dormitories serving over 100 residents. The system tracks connectivity issues, bandwidth usage, and provides real-time alerts for network problems. Features automated reporting and historical data analysis.",
    technologies: ["Python", "Flask", "SQLite", "Chart.js", "SSH"],
    features: [
      "Real-time network monitoring",
      "Automated alert system",
      "Historical performance data",
      "Bandwidth usage tracking",
      "Device connectivity status"
    ],
    challenges: [
      "Managing multiple network switches",
      "Implementing reliable monitoring without network overhead",
      "Creating intuitive dashboards for non-technical users"
    ],
    learnings: [
      "Network administration concepts",
      "System monitoring best practices",
      "Automation scripting with Python"
    ],
    githubUrl: "https://github.com/eleanor128/network-monitor",
    image: "/api/placeholder/400/250",
    category: "System Administration",
    date: "2022"
  }
];

const getTechIcon = (tech: string) => {
  switch (tech.toLowerCase()) {
    case 'react': return <FaReact className="text-blue-500" />;
    case 'next.js': return <SiNextdotjs className="text-black dark:text-white" />;
    case 'node.js': return <FaNodeJs className="text-green-600" />;
    case 'tailwind css': return <SiTailwindcss className="text-cyan-500" />;
    case 'laravel': return <SiLaravel className="text-red-500" />;
    case 'mysql': return <SiMysql className="text-blue-600" />;
    case 'postgresql': return <SiPostgresql className="text-blue-700" />;
    case 'mongodb': return <SiMongodb className="text-green-500" />;
    case 'javascript': return <SiJavascript className="text-yellow-500" />;
    case 'typescript': return <SiTypescript className="text-blue-600" />;
    case 'python': return <FaPython className="text-yellow-500" />;
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
                <div className="h-48 bg-gradient-to-br from-[#7e97c6] to-[#a5b8d4] relative overflow-hidden">
                  <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                    <h3 className="text-white text-2xl font-bold text-center px-4">
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
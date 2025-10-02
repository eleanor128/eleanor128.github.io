import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { GiSandSnake } from "react-icons/gi";

export default function CV() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Header */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
              Eleanor
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">
              Data Analyst | Dashboard Developer
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-gray-600 dark:text-gray-300">
              <div className="flex items-center gap-2">
                <FaLinkedin className="text-blue-600 w-5 h-5" />
                <a href="https://www.linkedin.com/in/eleanor128" target="_blank" rel="noopener noreferrer">
                  <span>eleanor128</span>
                </a>
              </div>
              <div className="flex items-center gap-2">
                <FaGithub className="text-gray-700 w-5 h-5" />
                <a href="https://github.com/eleanor128" target="_blank" rel="noopener noreferrer">
                  <span>eleanor128</span>
                </a>
              </div>
              <div className="flex items-center gap-2">
                <GiSandSnake className="text-gray-700 w-5 h-5" />
                <a href="https://toothless.blog/" target="_blank" rel="noopener noreferrer">
                  <span>My Blog</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* About */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Passionate about collecting, analyzing, and visualizing data, I love turning raw information into meaningful insights that make complex ideas easier to understand.
          </p>
        </div>

        {/* Skills */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Skills
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Website Development
              </h3>
              <div className="flex flex-wrap gap-2">
                {['HTML5', 'JavaScript', 'React', 'Laravel', 'Tailwind CSS', ''].map((skill) => (
                  <span key={skill} className="bg-[#f3f5f9] dark:bg-[#2a3441] text-[#7e97c6] dark:text-[#a5b8d4] px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Others
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Git', 'Figma', 'Database', 'API Design'].map((skill) => (
                  <span key={skill} className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Experience */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            經歷 Experience
          </h2>
          <div className="space-y-6">
            <div className="border-l-4 border-[#7e97c6] pl-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                前端開發者 Frontend Developer
              </h3>
              <p className="text-[#7e97c6] dark:text-[#a5b8d4] font-medium">
                ABC Company • 2023 - Present
              </p>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                負責開發和維護公司的網站和網頁應用程式，使用 React 和 Next.js 等現代前端技術。
              </p>
            </div>
            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                網頁設計師 Web Designer
              </h3>
              <p className="text-green-600 dark:text-green-400 font-medium">
                XYZ Studio • 2022 - 2023
              </p>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                設計各種網站的使用者介面，並與開發團隊合作實現設計概念。
              </p>
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            教育 Education
          </h2>
          <div className="border-l-4 border-purple-500 pl-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              資訊工程學士 Bachelor of Computer Science
            </h3>
            <p className="text-purple-600 dark:text-purple-400 font-medium">
              National Taiwan University • 2018 - 2022
            </p>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              主修資訊工程，專精於軟體開發和網頁技術。
            </p>
          </div>
        </div>

        {/* Projects */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            專案 Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                個人網站
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                使用 Next.js 和 Tailwind CSS 建立的響應式個人網站
              </p>
              <div className="flex flex-wrap gap-1">
                <span className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-xs">
                  Next.js
                </span>
                <span className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-xs">
                  Tailwind CSS
                </span>
              </div>
            </div>
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                電商網站
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                全端電商平台，包含購物車、付款系統等功能
              </p>
              <div className="flex flex-wrap gap-1">
                <span className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-xs">
                  React
                </span>
                <span className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-xs">
                  Node.js
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
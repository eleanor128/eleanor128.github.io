import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { GiSandSnake } from "react-icons/gi";

export default function cv_page() {
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
                {['HTML5', 'JavaScript', 'React', 'Laravel', 'Tailwind CSS'].map((skill) => (
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
                {['Git', 'Dashboard Development', 'Database', 'API Design', 'Figma'].map((skill) => (
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
            Experience
          </h2>
          <div className="space-y-6">
            {/* Experience 1 */}
            <div className="border-l-4 border-[#7e97c6] pl-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Data Analyst Intern
              </h3>
              <p className="text-[#7e97c6] dark:text-[#a5b8d4] font-medium">
                H2U Corporation • June 2025 - Ongoing
              </p>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                Processed and unified 5M+ records from 2020–2025 for reliable trend analysis  <br></br>
                Developed 2 ETL workflows with 4+ Sheets and APIs, saving 3+ hours of manual work<br></br>
                Built 3 BI dashboards visualizing health insights, business metrics, and sports registration data  <br></br>
              </p>
            </div>
            {/* Experience 2 */}
            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Student Dormitory Network Administrator
              </h3>
              <p className="text-green-600 dark:text-green-400 font-medium">
                NCU Computer Center • September 2021 – Ongoing
              </p>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                Installed 5+ network switches to repair unstable connections <br></br>
                Maintained internet access for 4 dormitories, supporting 100+ residents with stable connectivity  <br></br>
              </p>
            </div>
            {/* Experience 3 */}
            <div className="border-l-4 border-amber-500 pl-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Badminton Team Leader
              </h3>
              <p className="text-amber-600 dark:text-amber-400 font-medium">
                NCU •  June 2021 – June 2023
              </p>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                Led daily training sessions for 30+ team members  <br></br>
                Achieved multiple Top 8 finishes in national college events <br></br>
                Ranked 5th in Women’s Singles at the 2023 National University Badminton Ranking Tournament <br></br>
              </p>
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Education
          </h2>
          <div className="space-y-6">
            {/* Education 1 */}
            <div className="border-l-4 border-teal-500 pl-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                MSc. in Information Management
              </h3>
              <p className="text-teal-600 dark:text-teal-400 font-medium">
                National Central University, Taiwan • 2024 - Ongoing 
              </p>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                Accumulated GPA: 3.97 / 4.3
              </p>
            </div>
            {/* Education 2 */}
            <div className="border-l-4 border-teal-500 pl-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                BSc. in Information Management
              </h3>
              <p className="text-teal-600 dark:text-purple-400 font-medium">
                National Central University, Taiwan • 2020 - 2024
              </p>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                Overall GPA 3.98 / 4.3
              </p>
            </div>
            {/* Education 3 */}
            <div className="border-l-4 border-teal-500 pl-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Exchange Student
              </h3>
              <p className="text-teal-600 dark:text-purple-400 font-medium">
                 University of Geneva, Switzerland • Feb 2024 - June 2024
              </p>
            </div>
          </div>
        </div>

        {/* Language Skills */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Language Skills
          </h2>
          <div className="space-y-6">
            {/* Language 1 */}
            <div className="border-l-4 border-violet-500 pl-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Mandarin Chinese
              </h3>
              <p className="text-violet-400 dark:text-teal-400 font-medium">
                Native 
              </p>
            </div>
            {/* Language 2 */}
            <div className="border-l-4 border-violet-500 pl-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                English
              </h3>
              <p className="text-violet-400 dark:text-teal-400 font-medium">
                Fluent
              </p>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                TOEIC score: 905 (Listening: 495/495)
              </p>
            </div>
            {/* Language 3 */}
            <div className="border-l-4 border-violet-500 pl-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                French
              </h3>
              <p className="text-violet-400 dark:text-teal-400 font-medium">
                Beginner
              </p>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                DELF A2 (Reading 25/25)
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
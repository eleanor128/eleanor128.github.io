export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f3f5f9] to-[#e8eef7] dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Hi! 
            <br></br>
            Welcome to Eleanor's Portfolio
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
           I'm a CS master student at UNC Chapel Hill.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/projects"
              className="border border-[#7e97c6] text-[#7e97c6] hover:bg-[#7e97c6] hover:text-white font-semibold py-3 px-8 rounded-lg transition-colors"
            >
              My Projects
            </a>
            <a
              href="/cv"
              className="bg-[#7e97c6] hover:bg-[#6b85b3] text-white font-semibold py-3 px-8 rounded-lg transition-colors"
            >
              My CV
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
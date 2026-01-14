export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f3f5f9] to-[#e8eef7] dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Hi! This is Eleanor
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
           I'm a data analyst and dashboard developer.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/cv"
              className="bg-[#7e97c6] hover:bg-[#6b85b3] text-white font-semibold py-3 px-8 rounded-lg transition-colors"
            >
              My CV
            </a>
            <a
              href="#about"
              className="border border-[#7e97c6] text-[#7e97c6] hover:bg-[#7e97c6] hover:text-white font-semibold py-3 px-8 rounded-lg transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">
              關於我
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              這裡是關於我的簡介。你可以在這裡添加你的個人介紹、興趣愛好、專業技能等內容。
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
                
              <div className="text-center">
                <div className="bg-[#f3f5f9] dark:bg-[#2a3441] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎨</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  設計
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  UI/UX設計、創意思維
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
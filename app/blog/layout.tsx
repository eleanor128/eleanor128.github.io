import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Eleanor's Blog",
  description: "Personal blog and articles",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Blog Header - 與主網站不同的風格 */}
      <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 shadow-sm">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/blog" className="text-2xl font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Eleanor's Blog
            </Link>
            <div className="flex items-center gap-6">
              <Link 
                href="/blog" 
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                所有文章
              </Link>
              <Link 
                href="/" 
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                ← 回到主頁
              </Link>
            </div>
          </div>
        </nav>
      </header>
      
      <main className="container mx-auto px-6 py-12">
        {children}
      </main>

      {/* Blog Footer */}
      <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-20">
        <div className="container mx-auto px-6 py-8 text-center text-gray-600 dark:text-gray-400">
          <p>© 2026 Eleanor's Blog. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

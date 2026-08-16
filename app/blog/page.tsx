import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// 獲取所有文章
function getPosts() {
  const postsDirectory = path.join(process.cwd(), 'app/blog/content/posts');
  
  // 確保目錄存在
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const posts = fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContents);

      return {
        slug,
        title: data.title || 'Untitled',
        date: data.date || '',
        description: data.description || '',
        tags: data.tags || [],
      };
    });

  // 按日期排序
  return posts.sort((a, b) => (a.date > b.date ? -1 : 1));
}

export default function BlogPage() {
  const posts = getPosts();

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
        部落格文章
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-12">
        分享技術、想法與生活
      </p>

      {posts.length === 0 ? (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            目前還沒有文章，敬請期待！
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-500">
            在 <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">app/blog/content/posts/</code> 目錄下建立 .md 檔案來新增文章
          </p>
        </div>
      ) : (
        <div className="grid gap-6">
          {posts.map((post) => (
            <Link 
              key={post.slug} 
              href={`/blog/${post.slug}`}
              className="block bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-shadow p-6 border border-gray-200 dark:border-gray-700"
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                {post.title}
              </h2>
              {post.date && (
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                  {new Date(post.date).toLocaleDateString('zh-TW', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </p>
              )}
              {post.description && (
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {post.description}
                </p>
              )}
              {post.tags && post.tags.length > 0 && (
                <div className="flex gap-2 flex-wrap">
                  {post.tags.map((tag: string) => (
                    <span 
                      key={tag}
                      className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

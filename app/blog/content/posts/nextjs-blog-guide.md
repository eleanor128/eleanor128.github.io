---
title: "如何使用 Next.js 建立部落格"
date: "2026-03-01"
description: "詳細介紹如何使用 Next.js 和 Markdown 建立一個簡單的部落格系統"
tags: ["Next.js", "React", "Markdown", "Web Development"]
---

# 如何使用 Next.js 建立部落格

在這篇文章中，我將分享如何使用 Next.js 建立一個簡單但功能完整的部落格系統。

## 為什麼選擇 Next.js？

Next.js 是一個強大的 React 框架，提供了許多優秀的特性：

- **伺服器端渲染 (SSR)**：提升 SEO 和首次載入速度
- **靜態網站生成 (SSG)**：適合部落格這種內容不常變動的網站
- **檔案系統路由**：簡單直觀的路由管理
- **內建優化**：圖片優化、程式碼分割等

## 技術架構

我們的部落格系統使用以下技術：

```javascript
const techStack = {
  framework: "Next.js 14",
  styling: "Tailwind CSS",
  markdown: "gray-matter + next-mdx-remote",
  language: "TypeScript"
};
```

## 專案結構

```
app/blog/
├── layout.tsx          # 部落格專屬樣式
├── page.tsx            # 文章列表頁
├── [slug]/            # 動態文章頁
│   └── page.tsx
└── content/
    └── posts/         # Markdown 文章
```

## 核心功能

### 1. Markdown 解析

使用 `gray-matter` 解析文章的 frontmatter：

```typescript
import matter from 'gray-matter';

const fileContents = fs.readFileSync(fullPath, 'utf8');
const { data, content } = matter(fileContents);
```

### 2. 動態路由

使用 Next.js 的動態路由功能，根據文章檔名生成路由：

```typescript
export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map(post => ({ slug: post.slug }));
}
```

### 3. MDX 渲染

使用 `next-mdx-remote` 渲染 Markdown 內容：

```typescript
import { MDXRemote } from 'next-mdx-remote/rsc';

<MDXRemote source={content} />
```

## 寫作體驗

只需要在 `content/posts/` 目錄下建立 `.md` 檔案，加上簡單的 frontmatter，就可以開始寫作了：

```markdown
---
title: "文章標題"
date: "2026-03-01"
description: "文章描述"
tags: ["標籤1", "標籤2"]
---

# 開始寫作...
```

## 總結

使用 Next.js 建立部落格系統非常簡單且高效。這個架構讓我們可以：

- ✅ 專注於內容創作
- ✅ 享受 Markdown 的簡潔語法
- ✅ 獲得優秀的效能和 SEO
- ✅ 完全掌控設計風格

希望這篇文章對你有幫助！

## 相關資源

- [Next.js 官方文件](https://nextjs.org/docs)
- [Markdown 語法指南](https://www.markdownguide.org/)
- [Tailwind CSS](https://tailwindcss.com/)

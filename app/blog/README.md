# 部落格使用說明

這個部落格系統使用 Markdown 格式撰寫文章，所有部落格相關的檔案都放在 `app/blog/` 目錄下。

## 📁 檔案架構

```
app/blog/
├── layout.tsx              # 部落格專屬的 layout（獨立的設計風格）
├── page.tsx                # 部落格首頁（顯示所有文章列表）
├── [slug]/                 # 動態路由，用於顯示單篇文章
│   └── page.tsx
├── content/                # 部落格內容
│   └── posts/              # 所有文章的 Markdown 檔案
│       └── example-post.md
└── components/             # 部落格專屬的元件（未來可擴充）
```

## ✍️ 如何新增文章

### 1. 建立新的 Markdown 檔案

在 `app/blog/content/posts/` 目錄下建立新的 `.md` 檔案，例如：`my-first-post.md`

### 2. 加入 Frontmatter

在檔案開頭使用 `---` 包圍的 YAML 格式設定文章資訊：

```markdown
---
title: "我的第一篇文章"
date: "2026-03-03"
description: "這是文章的簡短描述"
tags: ["技術", "前端", "Next.js"]
---

# 文章標題

文章內容開始...
```

### 3. 撰寫 Markdown 內容

使用標準的 Markdown 語法撰寫文章內容。

### 4. 儲存檔案

儲存後，文章會自動出現在部落格首頁（http://localhost:3000/blog）

## 📝 Frontmatter 欄位說明

| 欄位 | 類型 | 必填 | 說明 |
|------|------|------|------|
| `title` | string | 是 | 文章標題 |
| `date` | string | 建議 | 發布日期，格式：YYYY-MM-DD |
| `description` | string | 建議 | 文章簡介，會顯示在文章列表 |
| `tags` | array | 否 | 標籤陣列，例如：["Next.js", "React"] |

## 🎨 Markdown 語法範例

### 標題
```markdown
# H1 標題
## H2 標題
### H3 標題
```

### 文字格式
```markdown
**粗體文字**
*斜體文字*
~~刪除線~~
```

### 列表
```markdown
- 無序列表項目 1
- 無序列表項目 2

1. 有序列表項目 1
2. 有序列表項目 2
```

### 連結
```markdown
[連結文字](https://example.com)
```

### 圖片
```markdown
![圖片說明](/path/to/image.png)
```

### 程式碼
行內程式碼：\`code\`

程式碼區塊：
\`\`\`javascript
const greeting = "Hello, World!";
console.log(greeting);
\`\`\`

### 引用
```markdown
> 這是一段引用文字
```

## 🔗 路由說明

- `/blog` - 部落格首頁，顯示所有文章列表
- `/blog/[slug]` - 文章詳細頁面，`slug` 為文章檔名（不含 .md）
  - 例如：`example-post.md` → `/blog/example-post`

## 🎨 設計風格

部落格有自己獨立的 `layout.tsx`，與主網站的設計風格完全分離：

- **主網站**：使用 `components/main/Header.tsx`，風格偏向個人網站
- **部落格**：使用 `app/blog/layout.tsx` 內建的 header，風格偏向文章閱讀

## 🚀 未來擴充建議

1. **分類功能**：在 `app/blog/category/[category]/page.tsx` 建立分類頁面
2. **搜尋功能**：加入文章搜尋功能
3. **評論系統**：整合第三方評論系統（如 Disqus、Giscus）
4. **RSS Feed**：生成 RSS 訂閱功能
5. **文章分頁**：當文章數量多時加入分頁功能
6. **閱讀時間估算**：顯示文章預估閱讀時間
7. **相關文章推薦**：根據標籤推薦相關文章

## 📖 範例文章

已經建立了一篇範例文章在 `app/blog/content/posts/example-post.md`，可以參考它的格式。

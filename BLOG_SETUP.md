# 專案架構變更總結

## ✅ 已完成的變更

### 1. 檔案架構重組

```
my-website/
├── app/
│   ├── blog/                          # 🆕 部落格獨立目錄（所有部落格相關檔案）
│   │   ├── layout.tsx                 # 🆕 部落格專屬 layout
│   │   ├── page.tsx                   # 🆕 部落格首頁（文章列表）
│   │   ├── [slug]/                    # 🆕 動態文章頁面
│   │   │   └── page.tsx
│   │   ├── content/                   # 🆕 部落格內容目錄
│   │   │   └── posts/                 # 🆕 Markdown 文章目錄
│   │   │       ├── example-post.md    # 🆕 範例文章 1
│   │   │       └── nextjs-blog-guide.md # 🆕 範例文章 2
│   │   ├── components/                # 🆕 部落格專屬元件（預留）
│   │   └── README.md                  # 🆕 部落格使用說明
│   │
│   ├── layout.tsx                     # ✏️ 已更新（改用新的 Header 路徑）
│   ├── page.tsx                       # 保持不變
│   ├── cv/
│   ├── myproject/
│   └── more_about_me/
│
└── components/
    └── main/                          # 🆕 主網站專屬元件
        └── Header.tsx                 # 🆕 更新後的 Header（加入部落格連結）
```

### 2. 新增的功能

#### ✨ Header 導航
- 在主網站的 Header 加入「Blog」連結
- 點擊後會導向 `/blog` 頁面
- 當在部落格頁面時，連結會顯示為選中狀態

#### 📝 部落格系統
- **獨立的設計風格**：部落格有自己的 `layout.tsx`，與主網站完全分離
- **Markdown 支援**：使用 `gray-matter` 和 `next-mdx-remote` 處理 Markdown
- **文章管理**：所有文章都放在 `app/blog/content/posts/` 目錄下
- **自動生成列表**：文章會自動顯示在部落格首頁
- **標籤系統**：支援為文章加上標籤
- **日期排序**：文章按發布日期自動排序

#### 🎨 部落格特色
- 獨立的 header 導航（與主網站不同風格）
- 文章列表卡片設計
- 標籤顯示
- 返回主頁連結
- 響應式設計（支援手機/平板/桌面）

### 3. 安裝的套件

```bash
npm install gray-matter next-mdx-remote
```

- **gray-matter**：解析 Markdown frontmatter
- **next-mdx-remote**：渲染 MDX 內容

## 📖 如何使用

### 新增文章

1. 在 `app/blog/content/posts/` 建立新的 `.md` 檔案
2. 加入 frontmatter：
   ```markdown
   ---
   title: "文章標題"
   date: "2026-03-03"
   description: "文章描述"
   tags: ["標籤1", "標籤2"]
   ---
   ```
3. 使用 Markdown 撰寫內容
4. 儲存檔案

### 瀏覽部落格

- 部落格首頁：`http://localhost:3000/blog`
- 單篇文章：`http://localhost:3000/blog/文章檔名`

## 🎯 設計理念

### 分離原則
- **主網站**：個人介紹、專案展示、履歷
- **部落格**：技術文章、學習筆記、生活分享

### 獨立性
- 部落格有自己的 `layout.tsx`，可以有完全不同的設計風格
- 部落格的所有檔案都在 `app/blog/` 目錄下，便於管理
- 內容（Markdown 檔案）也放在部落格目錄內，保持完整性

## 🚀 下一步建議

1. **自訂部落格樣式**：修改 `app/blog/layout.tsx` 來打造獨特的設計
2. **新增更多文章**：在 `app/blog/content/posts/` 建立更多 `.md` 檔案
3. **加入分類功能**：建立 `app/blog/category/[category]/page.tsx`
4. **搜尋功能**：實作文章搜尋
5. **評論系統**：整合 Giscus 或 Disqus
6. **RSS Feed**：生成 RSS 訂閱源

## ✅ 測試項目

- [ ] 啟動開發伺服器：`npm run dev`
- [ ] 訪問主頁：`http://localhost:3000`
- [ ] 點擊 Header 的「Blog」連結
- [ ] 確認部落格首頁顯示文章列表
- [ ] 點擊文章標題查看文章內容
- [ ] 測試返回按鈕

## 📚 參考文件

詳細的使用說明請查看：`app/blog/README.md`

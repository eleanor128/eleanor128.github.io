---
title: "歡迎來到我的部落格"
date: "2026-03-03"
description: "這是第一篇範例文章，展示如何使用 Markdown 撰寫部落格文章"
tags: ["歡迎", "範例"]
---

# 歡迎來到我的部落格！

這是一篇範例文章，展示如何使用 Markdown 格式撰寫部落格文章。

## 如何新增文章

1. 在 `app/blog/content/posts/` 目錄下建立新的 `.md` 檔案
2. 在檔案開頭加入 frontmatter（使用 `---` 包圍）
3. 撰寫 Markdown 內容
4. 儲存檔案後，文章會自動出現在部落格首頁

## Markdown 語法範例

### 文字格式

你可以使用 **粗體**、*斜體*、~~刪除線~~ 等格式。

### 程式碼

行內程式碼：`console.log('Hello World')`

程式碼區塊：

```javascript
function greet(name) {
  return `Hello, ${name}!`;
}

console.log(greet('Eleanor'));
```

### 列表

- 項目 1
- 項目 2
- 項目 3

### 連結與圖片

[連結文字](https://example.com)

![圖片說明](/path/to/image.png)

## Frontmatter 欄位說明

- `title`: 文章標題
- `date`: 發布日期（格式：YYYY-MM-DD）
- `description`: 文章簡介
- `tags`: 標籤陣列

祝你寫作愉快！ 🎉

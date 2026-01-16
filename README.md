# 🐾 Pet Commerce Link Hub

> 寵物生活用品館專用導流頁面（Link-in-bio）

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![GitHub Pages](https://img.shields.io/badge/GitHub-Pages-brightgreen)](https://bruce-yang-422.github.io/pet-commerce-link-hub/)

## 📖 專案簡介

本專案為自建寵物商品導流層（Link-in-bio），提供多品牌、多賣場的統一入口頁面。作為使用者進入各電商賣場前的集中導航介面，解決多平台管理困難與連結分散的問題。

**線上預覽**：<https://bruce-yang-422.github.io/pet-commerce-link-hub/>

## 🎯 專案定位

- ✅ **純導流層**：僅提供連結導航，不承載商品資訊
- ✅ **輕量靜態**：純 HTML + CSS，無後端依賴
- ✅ **響應式設計**：支援 PC、平板、手機各裝置
- ✅ **易於維護**：結構簡單，修改容易

## 🚀 功能特色

### 核心功能

- 🏷️ **品牌賣場導流**：整合 Royal Canin、Farmina、Catidea、CIAO 等品牌入口
- 📦 **商品分類導流**：貓狗乾濕糧、零食、保健品等 6 大分類快速導航
- 🎪 **活動 Banner**：支援輪播廣告，自動播放 + 觸控滑動
- 📞 **聯絡方式**：LINE 加入好友 + Email 聯絡

### 技術特點

- ⚡ **零依賴**：不需要 Node.js、Python 或任何建置工具
- 🎨 **現代 UI**：漸層設計、玻璃擬態、流暢動畫
- ♿ **無障礙**：支援 ARIA 標籤與鍵盤導航
- 📱 **觸控優化**：Banner 支援滑動、連結有觸控回饋

## 📁 專案結構

```plaintext
pet-commerce-link-hub/
├── index.html              # 主頁面（唯一入口）
├── assets/                 # 靜態資源
│   ├── css/
│   │   └── style.css      # 主樣式表
│   ├── js/
│   │   └── main.js        # JavaScript 主檔案（Banner 輪播）
│   ├── images/
│   │   ├── logos/         # 品牌 Logo
│   │   ├── brand/         # 其他品牌圖（預留）
│   │   └── icon/          # 圖示（預留）
│   └── favicon.ico        # 網站圖標
├── README.md              # 專案說明
└── .gitignore             # Git 忽略設定
```

## 🛠️ 使用方式

### 本地開發

**步驟 1：Clone 專案**

```bash
git clone https://github.com/bruce-yang-422/pet-commerce-link-hub.git
cd pet-commerce-link-hub
```

**步驟 2：開啟頁面**

直接在瀏覽器開啟 `index.html` 即可預覽。

或使用 VS Code Live Server 擴充功能：

```bash
# 安裝 Live Server 後，右鍵 index.html → Open with Live Server
```

### 部署到 GitHub Pages

**步驟 1：推送到 GitHub**

```bash
git add .
git commit -m "Update content"
git push origin main
```

**步驟 2：啟用 GitHub Pages**

前往 Repository → Settings → Pages → Source 選擇 `main` 分支 → Save

**步驟 3：等待部署**

約 1-2 分鐘後即可訪問：`https://[username].github.io/[repo-name]/`

## ✏️ 客製化指南

### 修改品牌 Logo

替換 `index.html` 第 16-24 行的 Logo 佔位區塊：

```html
<div class="brand-logo">
  <!-- 替換為你的 Logo 圖片 -->
  <img src="./assets/images/your-logo.png" alt="品牌 Logo" class="brand-logo-img">
</div>
```

並在 `style.css` 加入樣式：

```css
.brand-logo-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
```

### 修改連結

編輯 `index.html` 中的 `<a>` 標籤，將 `href="#"` 替換為實際連結：

```html
<a class="link-card brand" href="https://your-store.com" data-brand="your-brand">
  <!-- ... -->
</a>
```

### 修改 Banner 內容

編輯 `index.html` 第 34-52 行的 Banner 輪播區塊：

```html
<div class="banner-slide">
  <div class="banner-content">
    <h3>你的標題</h3>
    <p>你的副標題</p>
  </div>
</div>
```

### 調整顏色

在 `style.css` 修改漸層配色變數（搜尋 `linear-gradient`）。

## 🔧 常見問題

### Q: 如何新增更多品牌連結？

A: 複製任一 `.link-card` 區塊，修改內容與樣式類別即可。

### Q: Banner 自動輪播速度如何調整？

A: 修改 `index.html` 第 234 行的 `setInterval(nextSlide, 5000)` 數值（毫秒）。

### Q: 如何關閉自動輪播？

A: 刪除或註解 `index.html` 第 234-240 行的自動輪播程式碼。

## 📋 解決的問題

本專案解決以下電商營運痛點：

- ❌ 賣貨便賣場數量上限（每帳號最多 10 個）
- ❌ 單一賣場商品上限（100 商品）
- ❌ 商品分類能力不足
- ❌ 多品牌、多用品類導流管理困難
- ❌ 社群媒體只能放單一連結

## ⚠️ 注意事項

**重要提醒**：

- 🚫 本專案僅作為導流層，**不應**承載商品資訊
- 🚫 **禁止**放入價格、SKU、規格、功效說明等商品細節
- ✅ 所有商品資料應維護在實際賣場平台

## 📄 授權

MIT License - 自由使用、修改、分發

## 🤝 貢獻

歡迎提交 Issue 或 Pull Request 改進本專案。

---

Made with ❤️ for Pet Lovers

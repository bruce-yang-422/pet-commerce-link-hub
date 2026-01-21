# Banner 圖片說明

此資料夾用於存放首頁輪播 Banner 圖片。

## 📐 圖片規格

### PC 版（桌面）
- **建議尺寸**：1200 x 400 px
- **最小尺寸**：1000 x 350 px
- **比例**：16:5.3（寬螢幕）
- **格式**：JPG、PNG 或 WebP
- **檔案大小**：建議 < 200KB（優化後）

### 手機版（行動裝置）
- **建議尺寸**：800 x 600 px
- **最小尺寸**：600 x 450 px
- **比例**：4:3
- **格式**：JPG、PNG 或 WebP
- **檔案大小**：建議 < 150KB（優化後）

## 📁 檔案命名規則

請將 Banner 圖片命名為以下格式（支援 PNG 或 JPG）：

```
banner-1-desktop.png    # Banner 1 桌面版（PNG 格式）
banner-1-mobile.png     # Banner 1 手機版（PNG 格式）

banner-2-desktop.jpg    # Banner 2 桌面版（JPG 格式）
banner-2-mobile.jpg     # Banner 2 手機版（JPG 格式）

banner-3-desktop.png    # Banner 3 桌面版（PNG 格式）
banner-3-mobile.png     # Banner 3 手機版（PNG 格式）
```

**支援雙格式：**
- 系統優先載入 `.png` 格式
- 如果找不到 `.png`，會自動嘗試載入 `.jpg`
- 建議使用 PNG 以獲得更好的圖片品質

## 🎨 設計建議

1. **文字可讀性**
   - 確保文字區域（中央）有足夠對比度
   - 可使用半透明遮罩增強可讀性
   - 避免複雜的背景圖案在文字區域

2. **安全區域**
   - 重要內容保持在中央 60% 區域
   - 避免重要元素放在邊緣

3. **檔案優化**
   - 使用 [TinyPNG](https://tinypng.com/) 或 [Squoosh](https://squoosh.app/) 壓縮圖片
   - 考慮使用 WebP 格式以獲得更好的壓縮率

## 🔄 響應式行為

- **桌面（> 768px）**：顯示 1200x400 的橫版圖片
- **行動裝置（≤ 768px）**：顯示 800x600 的方形圖片

系統會自動根據裝置寬度載入對應版本的圖片。

## ✨ 範例檔案結構

```
assets/images/banners/
├── banner-1-desktop.png    (1200 x 400) - 支援 PNG/JPG
├── banner-1-mobile.png     (800 x 600)  - 支援 PNG/JPG
├── banner-2-desktop.png    (1200 x 400) - 支援 PNG/JPG
├── banner-2-mobile.png     (800 x 600)  - 支援 PNG/JPG
├── banner-3-desktop.png    (1200 x 400) - 支援 PNG/JPG
├── banner-3-mobile.png     (800 x 600)  - 支援 PNG/JPG
└── README.md               (本說明文件)
```

## 🚀 快速開始

1. 準備你的 Banner 圖片（桌面版 + 手機版）
2. 調整為建議尺寸
3. 優化檔案大小
4. 依照命名規則上傳到此資料夾
5. 重新整理網站即可看到效果

## 🔗 Banner 超連結設定

### 如何修改 Banner 點擊連結？

1. 開啟專案根目錄的 `assets/js/config.js` 檔案
2. 找到 `banner.links` 設定區域
3. 修改對應的連結網址

```javascript
window.CONFIG = {
  banner: {
    enabled: true,
    autoPlay: true,
    autoPlayInterval: 5000,
    pauseOnHover: true,
    // Banner 連結設定（可為每個 Banner 設定不同連結）
    links: [
      'https://example.com/banner1',  // Banner 1 點擊後導向的網址
      'https://example.com/banner2',  // Banner 2 點擊後導向的網址
      'https://example.com/banner3'   // Banner 3 點擊後導向的網址
    ]
  },
  // ...
};
```

### 連結設定說明

- 📌 **陣列順序**：`links[0]` 對應 `banner-1`，`links[1]` 對應 `banner-2`，依此類推
- 🔗 **連結格式**：請使用完整的 URL（包含 `https://`）
- 🆕 **新分頁開啟**：點擊 Banner 會在新分頁開啟，不影響原頁面
- 🎯 **個別設定**：每個 Banner 可以設定不同的連結網址
- ⚠️ **注意**：修改完記得儲存檔案並重新整理網站

### 範例：設定不同的促銷活動連結

```javascript
links: [
  'https://myshop.com/spring-sale',      // 春季特賣
  'https://myshop.com/member-benefits',  // 會員優惠
  'https://myshop.com/free-shipping'     // 免運活動
]
```

## 💡 如果沒有圖片？

如果沒有上傳圖片，系統會自動顯示預設的漸層背景色和文字內容，不會影響使用。

### Banner 顯示邏輯

- ✅ **有圖片**：自動隱藏文字，只顯示圖片（更乾淨的視覺效果）
- 📝 **無圖片**：顯示預設文字內容 + 漸層背景色（優雅的回退方案）
- 🔄 **雙格式支援**：優先載入 PNG，失敗則嘗試 JPG

## ⚠️ 注意事項

- 圖片載入失敗時會顯示漸層背景 + 文字內容（Fallback）
- 建議同時上傳桌面版與手機版以獲得最佳體驗
- 定期檢查圖片載入速度，必要時進一步優化
- Banner 點擊會在新分頁開啟連結，不影響原頁面瀏覽
- 修改 Banner 連結後記得清除瀏覽器快取再測試
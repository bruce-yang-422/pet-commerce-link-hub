# Banner 圖片說明

此資料夾用於存放首頁輪播 Banner 圖片。

## 📐 圖片規格

### PC 版（桌面）
- **實際顯示尺寸**：約 592 x 280 px
- **建議圖片尺寸**：1200 x 560 px（2 倍解析度，適用 Retina 螢幕）
- **最小尺寸**：600 x 280 px
- **實際比例**：2.1:1（橫向寬版）
- **格式**：PNG 或 JPG（優先 PNG）
- **檔案大小**：建議 < 200KB（優化後）

### 手機版（行動裝置）
- **實際顯示尺寸**：寬度全螢幕（約 343-720 px），高度 200 px
- **建議圖片尺寸**：750 x 400 px（2 倍解析度，適用 Retina 螢幕）
- **最小尺寸**：375 x 200 px
- **實際比例**：約 1.7:1 至 3.6:1（寬度不固定，建議使用橫向構圖）
- **格式**：PNG 或 JPG（優先 PNG）
- **檔案大小**：建議 < 150KB（優化後）

### 💡 尺寸說明
- Banner 會使用 `background-size: cover` 自動適應顯示區域
- 建議圖片尺寸為實際顯示尺寸的 2 倍，以支援高解析度螢幕
- 重要內容請放置在中央區域，避免被裁切

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

1. **構圖原則**
   - **桌面版**：橫向寬版構圖（2.1:1），適合橫幅式設計
   - **手機版**：橫向構圖，高度較矮（約 1.7-3.6:1），避免上下留白過多
   - 重要內容（如文字、LOGO）保持在中央 70% 區域，避免被裁切

2. **圖片裁切行為**
   - 系統使用 `background-size: cover`，圖片會自動縮放並填滿區域
   - 如圖片比例與顯示區域不符，上下或左右會被裁切
   - 建議按實際比例設計，確保重要元素不被裁切

3. **視覺效果**
   - 如有圖片，系統會自動隱藏文字區塊
   - 建議在圖片上直接設計好所有視覺元素
   - 可加入行動呼籲（CTA）按鈕或文字

4. **檔案優化**
   - 使用 [TinyPNG](https://tinypng.com/) 或 [Squoosh](https://squoosh.app/) 壓縮圖片
   - 優先使用 PNG 以獲得更好的圖片品質
   - 目標：桌面版 < 200KB，手機版 < 150KB

## 🔄 響應式行為

- **桌面（> 768px）**：顯示 `banner-*-desktop` 圖片
  - 顯示尺寸：約 592 x 280 px（佔 2/4 欄寬）
  - 建議圖片比例：2.1:1（橫向寬版）
  
- **行動裝置（≤ 768px）**：顯示 `banner-*-mobile` 圖片
  - 顯示尺寸：全寬 x 200 px（依裝置寬度而定）
  - 建議圖片比例：1.7:1 至 3.6:1（橫向，高度較矮）

系統會自動根據裝置寬度（768px 為斷點）載入對應版本的圖片，並使用 `background-size: cover` 自動適應顯示區域。

## ✨ 範例檔案結構

```
assets/images/banners/
├── banner-1-desktop.png    (建議 1200 x 560, 比例 2.1:1) - 支援 PNG/JPG
├── banner-1-mobile.png     (建議 750 x 400)             - 支援 PNG/JPG
├── banner-2-desktop.png    (建議 1200 x 560, 比例 2.1:1) - 支援 PNG/JPG
├── banner-2-mobile.png     (建議 750 x 400)             - 支援 PNG/JPG
├── banner-3-desktop.png    (建議 1200 x 560, 比例 2.1:1) - 支援 PNG/JPG
├── banner-3-mobile.png     (建議 750 x 400)             - 支援 PNG/JPG
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
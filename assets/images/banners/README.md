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

請將 Banner 圖片命名為以下格式：

```
banner-1-desktop.jpg    # Banner 1 桌面版
banner-1-mobile.jpg     # Banner 1 手機版

banner-2-desktop.jpg    # Banner 2 桌面版
banner-2-mobile.jpg     # Banner 2 手機版

banner-3-desktop.jpg    # Banner 3 桌面版
banner-3-mobile.jpg     # Banner 3 手機版
```

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
├── banner-1-desktop.jpg    (1200 x 400)
├── banner-1-mobile.jpg     (800 x 600)
├── banner-2-desktop.jpg    (1200 x 400)
├── banner-2-mobile.jpg     (800 x 600)
├── banner-3-desktop.jpg    (1200 x 400)
├── banner-3-mobile.jpg     (800 x 600)
└── README.md               (本說明文件)
```

## 🚀 快速開始

1. 準備你的 Banner 圖片（桌面版 + 手機版）
2. 調整為建議尺寸
3. 優化檔案大小
4. 依照命名規則上傳到此資料夾
5. 重新整理網站即可看到效果

## 💡 如果沒有圖片？

如果沒有上傳圖片，系統會自動顯示預設的漸層背景色，不會影響使用。

## ⚠️ 注意事項

- 圖片載入失敗時會顯示漸層背景（Fallback）
- 建議同時上傳桌面版與手機版以獲得最佳體驗
- 定期檢查圖片載入速度，必要時進一步優化

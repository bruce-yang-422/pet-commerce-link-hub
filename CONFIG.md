# ⚙️ 配置說明文件

本專案使用 `assets/js/config.js` 來管理各項功能開關與設定。

## 📁 配置檔案位置

```
assets/js/config.js
```

## 🎛️ 配置項目說明

### Banner 輪播設定

```javascript
banner: {
  enabled: true,              // Banner 開關
  autoPlay: true,             // 自動輪播開關
  autoPlayInterval: 5000,     // 自動輪播間隔（毫秒）
  pauseOnHover: true          // 懸停暫停開關
}
```

#### `enabled` - Banner 顯示開關

- **類型**：`boolean`
- **預設值**：`true`
- **說明**：
  - `true`：顯示 Banner 輪播區塊
  - `false`：完全隱藏 Banner（不佔空間）

**使用情境**：
- 活動期間開啟 Banner
- 平常關閉 Banner 節省空間
- 測試版面時快速切換

#### `autoPlay` - 自動輪播開關

- **類型**：`boolean`
- **預設值**：`true`
- **說明**：
  - `true`：Banner 會自動切換
  - `false`：需手動點擊切換

#### `autoPlayInterval` - 輪播間隔

- **類型**：`number`（毫秒）
- **預設值**：`5000`（5 秒）
- **建議範圍**：3000 - 8000
- **說明**：每張 Banner 停留的時間

#### `pauseOnHover` - 懸停暫停

- **類型**：`boolean`
- **預設值**：`true`
- **說明**：
  - `true`：滑鼠移上去時暫停輪播
  - `false`：滑鼠移上去仍繼續輪播

### 滾動動畫設定

```javascript
scrollAnimation: {
  enabled: true,              // 滾動動畫開關
  threshold: 0.1,             // 觸發門檻
  rootMargin: '0px 0px -50px 0px'  // 觸發範圍
}
```

#### `enabled` - 滾動動畫開關

- **類型**：`boolean`
- **預設值**：`true`
- **說明**：
  - `true`：啟用滾動觸發的淡入動畫
  - `false`：關閉所有滾動動畫

#### `threshold` - 觸發門檻

- **類型**：`number`（0-1）
- **預設值**：`0.1`
- **說明**：元素顯示多少比例時觸發動畫
  - `0.1`：顯示 10% 時觸發
  - `0.5`：顯示 50% 時觸發
  - `1.0`：完全顯示時觸發

#### `rootMargin` - 觸發範圍

- **類型**：`string`
- **預設值**：`'0px 0px -50px 0px'`
- **說明**：擴大或縮小觸發範圍
  - `-50px`：向上提前 50px 觸發
  - `-100px`：向上提前 100px 觸發

### 視差效果設定

```javascript
parallax: {
  enabled: false              // 視差效果開關
}
```

#### `enabled` - 視差效果開關

- **類型**：`boolean`
- **預設值**：`false`（建議關閉）
- **說明**：
  - `true`：啟用視差滾動效果
  - `false`：關閉視差效果

**注意**：視差效果可能影響效能和背景穩定性，建議保持關閉。

## 🔧 如何修改配置

### 方式 1：直接編輯 config.js（推薦）

1. 開啟 `assets/js/config.js`
2. 修改對應的值
3. 儲存檔案
4. 重新整理頁面

### 方式 2：透過瀏覽器開發者工具測試

在瀏覽器 Console 輸入：

```javascript
// 查看目前配置
console.log(CONFIG);

// ⚠️ 注意：因為 CONFIG 被凍結，無法直接修改
// 需要重新部署才能生效
```

## 📋 常見使用場景

### 場景 1：關閉 Banner

```javascript
banner: {
  enabled: false,  // 👈 改為 false
  // ... 其他設定
}
```

### 場景 2：關閉自動輪播，只允許手動切換

```javascript
banner: {
  enabled: true,
  autoPlay: false,  // 👈 改為 false
  // ... 其他設定
}
```

### 場景 3：加快輪播速度（3 秒切換）

```javascript
banner: {
  enabled: true,
  autoPlay: true,
  autoPlayInterval: 3000,  // 👈 改為 3000
  // ... 其他設定
}
```

### 場景 4：關閉所有動畫（靜態模式）

```javascript
banner: {
  enabled: true,
  autoPlay: false,  // 👈 關閉自動輪播
  // ... 其他設定
},
scrollAnimation: {
  enabled: false,  // 👈 關閉滾動動畫
  // ... 其他設定
},
parallax: {
  enabled: false  // 👈 關閉視差（本來就建議關閉）
}
```

## ⚠️ 注意事項

1. **配置被凍結**：`CONFIG` 物件被 `Object.freeze()` 保護，無法在執行時期修改
2. **重新載入生效**：修改配置後需要重新整理頁面
3. **Git 追蹤**：`config.js` 會被 Git 追蹤，團隊成員會看到你的修改
4. **備份原始值**：修改前建議記下原始值

## 🚀 快速測試

想快速測試關閉 Banner？

1. 開啟 `assets/js/config.js`
2. 找到第 8 行：`enabled: true,`
3. 改為：`enabled: false,`
4. 儲存並重新整理頁面
5. Banner 消失了！✅

想恢復？改回 `true` 即可。

## 📞 技術支援

如有問題或需要新增配置項目，請參考：
- 主專案 README：`README.md`
- Banner 說明：`assets/images/banners/README.md`

---

**最後更新**：2026-01-16

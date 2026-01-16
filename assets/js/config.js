/**
 * Pet Commerce Link Hub - Configuration
 * 專案環境設定檔
 */

window.CONFIG = {
  // Banner 輪播設定
  banner: {
    enabled: true,              // true: 顯示 Banner | false: 隱藏 Banner
    autoPlay: true,             // 是否自動輪播
    autoPlayInterval: 5000,     // 自動輪播間隔（毫秒）
    pauseOnHover: true          // 懸停時是否暫停
  },

  // 滾動動畫設定
  scrollAnimation: {
    enabled: true,              // true: 啟用滾動動畫 | false: 停用
    threshold: 0.1,             // 觸發門檻（0-1）
    rootMargin: '0px 0px -50px 0px'
  },

  // 視差效果設定
  parallax: {
    enabled: false              // true: 啟用視差 | false: 停用（目前建議關閉）
  }
};

// 凍結配置物件，防止意外修改
Object.freeze(window.CONFIG);

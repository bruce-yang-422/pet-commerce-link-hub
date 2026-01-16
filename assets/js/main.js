/**
 * Pet Commerce Link Hub - Main JavaScript
 * Bento Grid Layout with Banner Carousel
 */

// 等待 DOM 載入完成
document.addEventListener('DOMContentLoaded', function() {
  // 根據配置決定是否啟用 Banner
  if (window.CONFIG && CONFIG.banner.enabled) {
    initBannerCarousel();
  } else if (window.CONFIG && !CONFIG.banner.enabled) {
    hideBanner();
  }
});

/**
 * 完全移除 Banner 卡片
 * 讓它就像從未存在一樣
 */
function hideBanner() {
  const bannerCard = document.querySelector('.banner-card');
  if (bannerCard) {
    bannerCard.remove();
    console.log('✓ Banner removed: disabled via config');
  }
}

/**
 * 初始化 Banner 輪播功能
 */
function initBannerCarousel() {
  const track = document.querySelector('.banner-track');
  const slides = document.querySelectorAll('.banner-slide');
  const dots = document.querySelectorAll('.dot');
  const prevBtn = document.querySelector('.banner-nav.prev');
  const nextBtn = document.querySelector('.banner-nav.next');
  const carousel = document.querySelector('.banner-carousel');
  
  // 檢查必要元素是否存在
  if (!track || !slides.length || !carousel) {
    console.warn('⚠ Banner carousel elements not found');
    return;
  }
  
  let currentIndex = 0;
  const totalSlides = slides.length;
  let autoPlayInterval = null;
  
  /**
   * 載入 Banner 圖片（桌面版與手機版）
   */
  function loadBannerImages() {
    slides.forEach((slide, index) => {
      const desktopImg = `assets/images/banners/banner-${index + 1}-desktop.jpg`;
      const mobileImg = `assets/images/banners/banner-${index + 1}-mobile.jpg`;
      
      // 預載入圖片
      const img = new Image();
      img.onload = () => {
        const updateBackground = () => {
          if (window.innerWidth > 768) {
            slide.style.backgroundImage = `url(${desktopImg})`;
          } else {
            slide.style.backgroundImage = `url(${mobileImg})`;
          }
        };
        
        updateBackground();
        window.addEventListener('resize', updateBackground);
      };
      
      img.onerror = () => {
        console.warn(`⚠ Failed to load banner image ${index + 1}`);
      };
      
      // 開始載入
      img.src = window.innerWidth > 768 ? desktopImg : mobileImg;
    });
  }
  
  /**
   * 更新輪播顯示
   */
  function updateCarousel() {
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === currentIndex);
    });
  }
  
  /**
   * 切換到下一張
   */
  function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateCarousel();
  }
  
  /**
   * 切換到上一張
   */
  function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateCarousel();
  }
  
  /**
   * 開始自動輪播
   */
  function startAutoPlay() {
    if (!window.CONFIG || !CONFIG.banner.autoPlay) return;
    stopAutoPlay();
    autoPlayInterval = setInterval(nextSlide, CONFIG.banner.autoPlayInterval || 5000);
  }
  
  /**
   * 停止自動輪播
   */
  function stopAutoPlay() {
    if (autoPlayInterval) {
      clearInterval(autoPlayInterval);
      autoPlayInterval = null;
    }
  }
  
  // 綁定導航按鈕事件
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      nextSlide();
      // 手動切換後重啟自動輪播
      if (window.CONFIG && CONFIG.banner.autoPlay) {
        startAutoPlay();
      }
    });
  }
  
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      prevSlide();
      // 手動切換後重啟自動輪播
      if (window.CONFIG && CONFIG.banner.autoPlay) {
        startAutoPlay();
      }
    });
  }
  
  // 綁定指示點事件
  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      currentIndex = parseInt(dot.dataset.index);
      updateCarousel();
      // 手動切換後重啟自動輪播
      if (window.CONFIG && CONFIG.banner.autoPlay) {
        startAutoPlay();
      }
    });
  });
  
  // 懸停時暫停/恢復自動輪播
  if (window.CONFIG && CONFIG.banner.pauseOnHover && CONFIG.banner.autoPlay) {
    carousel.addEventListener('mouseenter', stopAutoPlay);
    carousel.addEventListener('mouseleave', startAutoPlay);
  }
  
  // 觸控滑動支援
  let touchStartX = 0;
  let touchEndX = 0;
  
  carousel.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });
  
  carousel.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    const swipeDistance = touchStartX - touchEndX;
    
    // 滑動距離超過 50px 才觸發切換
    if (Math.abs(swipeDistance) > 50) {
      if (swipeDistance > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
      
      // 觸控切換後重啟自動輪播
      if (window.CONFIG && CONFIG.banner.autoPlay) {
        startAutoPlay();
      }
    }
  }, { passive: true });
  
  // 初始化
  loadBannerImages();
  updateCarousel();
  startAutoPlay();
  
  console.log('✓ Banner carousel initialized');
}

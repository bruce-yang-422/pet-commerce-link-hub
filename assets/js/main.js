/**
 * Pet Commerce Link Hub - Main JavaScript
 * Banner carousel functionality
 */

// 等待 DOM 載入完成
document.addEventListener('DOMContentLoaded', function() {
  initBannerCarousel();
});

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
    console.warn('Banner carousel elements not found');
    return;
  }
  
  let currentIndex = 0;
  const totalSlides = slides.length;
  let autoPlayInterval = null;
  
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
    stopAutoPlay(); // 清除現有的計時器
    autoPlayInterval = setInterval(nextSlide, 5000);
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
    nextBtn.addEventListener('click', nextSlide);
  }
  
  if (prevBtn) {
    prevBtn.addEventListener('click', prevSlide);
  }
  
  // 綁定指示點事件
  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      currentIndex = parseInt(dot.dataset.index);
      updateCarousel();
    });
  });
  
  // 懸停時暫停/恢復自動輪播
  carousel.addEventListener('mouseenter', stopAutoPlay);
  carousel.addEventListener('mouseleave', startAutoPlay);
  
  // 觸控滑動支援
  let touchStartX = 0;
  let touchEndX = 0;
  
  carousel.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  });
  
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
    }
  });
  
  // 啟動自動輪播
  startAutoPlay();
}

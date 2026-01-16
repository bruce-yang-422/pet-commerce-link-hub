/**
 * Pet Commerce Link Hub - Main JavaScript
 * Banner carousel functionality & Scroll animations
 */

// 等待 DOM 載入完成
document.addEventListener('DOMContentLoaded', function() {
  // 根據配置決定是否啟用功能
  if (CONFIG.banner.enabled) {
    initBannerCarousel();
  } else {
    hideBanner();
  }
  
  if (CONFIG.scrollAnimation.enabled) {
    initScrollAnimations();
  }
  
  if (CONFIG.parallax.enabled) {
    initParallaxEffect();
  }
});

/**
 * 隱藏 Banner 區塊
 */
function hideBanner() {
  const bannerSection = document.querySelector('.banner-section');
  if (bannerSection) {
    bannerSection.style.display = 'none';
    console.log('Banner is disabled via config');
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
    if (!CONFIG.banner.autoPlay) return; // 如果配置關閉自動輪播，直接返回
    stopAutoPlay(); // 清除現有的計時器
    autoPlayInterval = setInterval(nextSlide, CONFIG.banner.autoPlayInterval);
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
  
  // 懸停時暫停/恢復自動輪播（根據配置）
  if (CONFIG.banner.pauseOnHover && CONFIG.banner.autoPlay) {
    carousel.addEventListener('mouseenter', stopAutoPlay);
    carousel.addEventListener('mouseleave', startAutoPlay);
  }
  
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

/**
 * 初始化滾動動畫
 * 使用 Intersection Observer API 偵測元素進入視口
 */
function initScrollAnimations() {
  // 滾動動畫配置 - 從 CONFIG 讀取
  const observerOptions = {
    root: null, // 使用視口作為根元素
    rootMargin: CONFIG.scrollAnimation.rootMargin,
    threshold: CONFIG.scrollAnimation.threshold
  };

  // 建立 Intersection Observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // 元素進入視口，加入動畫類別
        entry.target.classList.add('is-visible');
        // 可選：觀察一次後就停止觀察（提升效能）
        // observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // 為需要動畫的元素加入觀察
  const animatedElements = document.querySelectorAll('.animate-on-scroll');
  animatedElements.forEach((element) => {
    observer.observe(element);
  });

  // 為連結卡片加入序列動畫（快速連續）
  const linkCards = document.querySelectorAll('.link-card');
  linkCards.forEach((card, index) => {
    card.classList.add('animate-on-scroll');
    card.style.transitionDelay = `${index * 0.05}s`; // 減少延遲時間，更快速
    observer.observe(card);
  });

  // Banner 也加入滾動動畫
  const banner = document.querySelector('.banner-section');
  if (banner) {
    banner.classList.add('animate-on-scroll');
    observer.observe(banner);
  }

  // 聯絡區塊加入動畫
  const contactSection = document.querySelector('.contact-section');
  if (contactSection) {
    contactSection.classList.add('animate-on-scroll');
    observer.observe(contactSection);
  }
}

/**
 * 初始化視差滾動效果
 * 暫時停用以確保背景穩定性
 */
function initParallaxEffect() {
  // 暫時停用視差效果，確保背景不會滑走
  // 如果需要可以之後重新啟用
}

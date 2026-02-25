/* ============================================================
   News / Community Page — 소식 및 교육 현장 스케치
   ============================================================ */

export function renderNews() {
  return `
  <!-- ========== PAGE HERO ========== -->
  <section class="page-hero">
    <div class="page-hero-bg"></div>
    <div class="hero-glow hero-glow-1"></div>
    <div class="hero-glow hero-glow-2"></div>
    <div class="container page-hero-content">
      <span class="section-tag" data-animate="fade-up">NEWS & COMMUNITY</span>
      <h1 class="page-hero-title" data-animate="fade-up" data-delay="100">
        사관학교<br/><span class="text-gradient">소식</span>
      </h1>
      <p class="page-hero-desc" data-animate="fade-up" data-delay="200">
        웹3 사관학교의 기술 세미나 소식과 교육 현장 스케치를 전해드립니다.
      </p>
    </div>
  </section>

  <!-- ========== NEWS GRID ========== -->
  <section class="section">
    <div class="container">
      <div class="news-filter" data-animate="fade-up">
        <button class="news-filter-btn active" data-filter="all">전체</button>
        <button class="news-filter-btn" data-filter="세미나">세미나</button>
        <button class="news-filter-btn" data-filter="센터 소식">센터 소식</button>
        <button class="news-filter-btn" data-filter="수익 인증">수익 인증</button>
        <button class="news-filter-btn" data-filter="교육 현장">교육 현장</button>
      </div>
      <div id="newsGrid" class="news-grid-expanded" data-animate="fade-up" data-delay="100">
        <!-- Dynamic content will be loaded here -->
        <div style="grid-column: 1 / -1; padding: 60px; text-align: center; color: var(--text-secondary);">
          <div class="spinner" style="display:inline-block; width:24px; height:24px; border:3px solid var(--accent-blue); border-top:3px solid transparent; border-radius:50%; animation:spin 1s linear infinite; margin-bottom:16px;"></div>
          <p>데이터를 불러오는 중입니다...</p>
        </div>
      </div>
    </div>
  </section>

  <!-- ========== CTA ========== -->
  <section class="section section-cta section-dark">
    <div class="container">
      <div class="cta-content" data-animate="fade-up">
        <h2 class="cta-title">더 많은 소식을<br/><span class="text-gradient">받아보세요</span></h2>
        <p class="cta-desc">기술 세미나 및 포럼 일정, 센터 소식을 빠르게 전달받으세요.</p>
        <div class="cta-buttons">
          <a href="#" class="btn-primary btn-large">소식 알림 신청</a>
          <a href="/" class="btn-secondary btn-large" data-link>메인으로 돌아가기 →</a>
        </div>
      </div>
    </div>
  </section>
  `;
}

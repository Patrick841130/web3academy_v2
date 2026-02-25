/* ============================================================
   Career Page — 센터장 임용 · 연봉 1억 계약 조건
   ============================================================ */

export function renderCareer() {
  return `
  <!-- ========== PAGE HERO ========== -->
  <section class="page-hero">
    <div class="page-hero-bg"></div>
    <div class="hero-glow hero-glow-1"></div>
    <div class="hero-glow hero-glow-2"></div>
    <div class="container page-hero-content">
      <span class="section-tag" data-animate="fade-up">CAREER OPPORTUNITY</span>
      <h1 class="page-hero-title" data-animate="fade-up" data-delay="100">
        전국 웹3 교육 거점의<br/><span class="text-gradient">리더를 찾습니다</span>
      </h1>
      <p class="page-hero-desc" data-animate="fade-up" data-delay="200">
        사관학교는 서울을 넘어 전국으로 확장됩니다.<br/>
        장교 과정을 수료한 정예 요원에게는 각 지역의 <strong>'웹3 교육 센터장'</strong> 자격이 부여됩니다.
      </p>
    </div>
  </section>

  <!-- ========== KEY BENEFITS ========== -->
  <section class="section">
    <div class="container">
      <div class="section-header" data-animate="fade-up">
        <span class="section-tag">BENEFITS</span>
        <h2 class="section-title">센터장에게 주어지는<br/><span class="text-gradient">혜택과 기회</span></h2>
      </div>
      <div class="career-benefits-detail">
        <div class="career-benefit-big" data-animate="fade-up" data-delay="100">
          <div class="cbb-icon">
            <svg width="48" height="48" viewBox="0 0 32 32" fill="none">
              <path d="M16 2L20 12H30L22 18L24 28L16 22L8 28L10 18L2 12H12L16 2Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
            </svg>
          </div>
          <div class="cbb-content">
            <span class="cbb-label">혜택</span>
            <h3>연봉 1억 원 상당의 수익 보전 계약</h3>
            <p>성과 연동형 수익 보전 계약을 통해 안정적인 소득 기반을 보장합니다. 장교 과정 수료 후 성과 기준을 충족하면 체결됩니다.</p>
            <div class="cbb-badge">성과 연동형 · GUARANTEED</div>
          </div>
        </div>
        <div class="career-benefit-big" data-animate="fade-up" data-delay="200">
          <div class="cbb-icon">
            <svg width="48" height="48" viewBox="0 0 32 32" fill="none">
              <circle cx="16" cy="10" r="6" stroke="currentColor" stroke-width="2"/>
              <path d="M4 28c0-6.627 5.373-12 12-12s12 5.373 12 12" stroke="currentColor" stroke-width="2"/>
            </svg>
          </div>
          <div class="cbb-content">
            <span class="cbb-label">역할</span>
            <h3>지역 내 웹3 기술 세미나 주최 및 생도 관리</h3>
            <p>지역 센터장은 해당 지역의 웹3 기술 세미나와 포럼을 주최하며, 소속 생도들의 교육 진행을 관리합니다. 본사의 체계적인 지원과 함께 독립적으로 운영합니다.</p>
          </div>
        </div>
        <div class="career-benefit-big" data-animate="fade-up" data-delay="300">
          <div class="cbb-icon">
            <svg width="48" height="48" viewBox="0 0 32 32" fill="none">
              <path d="M16 2C8.268 2 2 8.268 2 16s6.268 14 14 14 14-6.268 14-14S23.732 2 16 2z" stroke="currentColor" stroke-width="2"/>
              <path d="M10 16h12M16 10v12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </div>
          <div class="cbb-content">
            <span class="cbb-label">비전</span>
            <h3>웹3 인프라를 운영하는 비즈니스 파트너</h3>
            <p>단순한 전업 트레이더를 넘어, 웹3 인프라를 운영하는 비즈니스 파트너로 성장합니다. 지역 커뮤니티의 리더로서 웹3 생태계 확산에 기여합니다.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ========== PROCESS ========== -->
  <section class="section section-dark">
    <div class="container">
      <div class="section-header" data-animate="fade-up">
        <span class="section-tag">PROCESS</span>
        <h2 class="section-title">센터장이 되는<br/><span class="text-gradient">과정</span></h2>
      </div>
      <div class="career-process">
        <div class="process-step" data-animate="fade-up" data-delay="100">
          <div class="process-number">01</div>
          <h4>장교임관반 수료</h4>
          <p>10개월 집중 훈련 프로그램을 성공적으로 이수합니다.</p>
        </div>
        <div class="process-arrow" data-animate="fade-up" data-delay="150">→</div>
        <div class="process-step" data-animate="fade-up" data-delay="200">
          <div class="process-number">02</div>
          <h4>100M Project 달성</h4>
          <p>500만 원 → 1억 원 실전 포트폴리오 목표를 달성합니다.</p>
        </div>
        <div class="process-arrow" data-animate="fade-up" data-delay="250">→</div>
        <div class="process-step" data-animate="fade-up" data-delay="300">
          <div class="process-number">03</div>
          <h4>센터장 임관</h4>
          <p>공식 파트너십 계약 체결 및 지역 독점 운영권을 부여받습니다.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- ========== PARTNERSHIP INFO ========== -->
  <section class="section">
    <div class="container">
      <div class="career-benefits" data-animate="fade-up">
        <div class="benefit-card">
          <div class="benefit-icon">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path d="M16 2C8.268 2 2 8.268 2 16s6.268 14 14 14 14-6.268 14-14S23.732 2 16 2z" stroke="currentColor" stroke-width="2"/>
              <path d="M10 16h12M16 10v12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </div>
          <h4>공식 파트너십</h4>
          <p>본사와의 공식 파트너십 계약 체결 및 지역 독점 운영권 부여</p>
        </div>
        <div class="benefit-card benefit-highlight">
          <div class="benefit-icon">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path d="M16 2L20 12H30L22 18L24 28L16 22L8 28L10 18L2 12H12L16 2Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
            </svg>
          </div>
          <h4>연봉 1억 원</h4>
          <p>수익 보장형 계약 체결<br/>(조건 충족 시)</p>
          <div class="benefit-badge">GUARANTEED</div>
        </div>
        <div class="benefit-card">
          <div class="benefit-icon">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <circle cx="16" cy="10" r="6" stroke="currentColor" stroke-width="2"/>
              <path d="M4 28c0-6.627 5.373-12 12-12s12 5.373 12 12" stroke="currentColor" stroke-width="2"/>
            </svg>
          </div>
          <h4>지역 전문가</h4>
          <p>웹3 전문가로서의 권위와 커뮤니티 주도권 부여</p>
        </div>
      </div>
    </div>
  </section>

  <!-- ========== CTA ========== -->
  <section class="section section-cta section-dark">
    <div class="container">
      <div class="cta-content" data-animate="fade-up">
        <h2 class="cta-title">전국 웹3 거점의<br/><span class="text-gradient">리더가 되십시오</span></h2>
        <p class="cta-desc">장교 과정 수료 후 센터장 임관까지, 사관학교가 함께합니다.</p>
        <p class="cta-disclaimer">본 기관은 블록체인 기술 컨설팅 및 전문가 네트워킹 그룹입니다.</p>
        <div class="cta-buttons">
          <a href="#" class="btn-primary btn-large" onclick="openConsultationModal('3'); return false;">센터장 상담 신청</a>
          <a href="/curriculum" class="btn-secondary btn-large" data-link>교육 과정 보기 →</a>
        </div>
      </div>
    </div>
  </section>
  `;
}

/* ============================================================
   Vision Page — 웹3 철학 상세 + 리스크 관리 + 교관진
   ============================================================ */

export function renderVision() {
  return `
  <!-- ========== PAGE HERO ========== -->
  <section class="page-hero">
    <div class="page-hero-bg"></div>
    <div class="hero-glow hero-glow-1"></div>
    <div class="hero-glow hero-glow-2"></div>
    <div class="container page-hero-content">
      <span class="section-tag" data-animate="fade-up">VISION & PHILOSOPHY</span>
      <h1 class="page-hero-title" data-animate="fade-up" data-delay="100">
        준비된 자만이<br/><span class="text-gradient">부의 주인이 됩니다</span>
      </h1>
      <p class="page-hero-desc" data-animate="fade-up" data-delay="200">
        우리의 최우선 가치는 <strong>'강력한 리스크 관리'</strong>입니다.<br/>
        시드를 잃지 않는 법을 배워야 비로소 수익을 논할 자격이 생깁니다.
      </p>
    </div>
  </section>

  <!-- ========== VISION DETAIL ========== -->
  <section class="section">
    <div class="container">
      <div class="vision-detail-grid">
        <!-- 큰 메인 카드 -->
        <div class="vision-detail-main" data-animate="fade-up">
          <div class="vision-detail-icon">
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
              <path d="M32 4L4 18V46L32 60L60 46V18L32 4Z" stroke="currentColor" stroke-width="2"/>
              <path d="M32 60V32M4 18L32 32M60 18L32 32" stroke="currentColor" stroke-width="2"/>
            </svg>
          </div>
          <h2>웹3 시대의 전환</h2>
          <p class="vision-detail-lead">플랫폼이 시키는 대로 살던 웹2의 시대가 끝나고 있습니다. 이제 당신의 자산과 데이터는 당신이 지켜야 합니다.</p>
          <p>웹3 사관학교는 단순한 투자 기법이 아닌, 다가올 미래 경제 시스템에서 살아남을 <strong>'생존 기술'</strong>을 전수합니다. 우리의 최우선 가치는 <strong>'강력한 리스크 관리'</strong>입니다. 시드를 잃지 않는 법을 배워야 비로소 수익을 논할 자격이 생깁니다.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- ========== CORE VALUES ========== -->
  <section class="section section-dark">
    <div class="container">
      <div class="section-header" data-animate="fade-up">
        <span class="section-tag">CORE VALUES</span>
        <h2 class="section-title">우리가 지키는<br/><span class="text-gradient">핵심 가치</span></h2>
      </div>
      <div class="values-grid">
        <div class="value-card" data-animate="fade-up" data-delay="100">
          <div class="value-number">01</div>
          <div class="value-content">
            <h3>잃지 않는 투자</h3>
            <p>화려한 수익률 이전에, 웹3 자산 시장에서 내 시드(Seed)를 완벽하게 지키는 철저한 리스크 관리법을 교육합니다. 시드 보전이 모든 투자의 출발점입니다.</p>
          </div>
          <div class="value-card-glow"></div>
        </div>
        <div class="value-card" data-animate="fade-up" data-delay="200">
          <div class="value-number">02</div>
          <div class="value-content">
            <h3>개인 데이터 주권</h3>
            <p>블록체인 기술을 통해 개인이 직접 자신의 데이터를 소유하고 관리하는 시대. 웹3 인프라 위에서 디지털 주권의 선봉장이 되십시오.</p>
          </div>
          <div class="value-card-glow"></div>
        </div>
        <div class="value-card" data-animate="fade-up" data-delay="300">
          <div class="value-number">03</div>
          <div class="value-content">
            <h3>실전 생존 기술</h3>
            <p>이론이 아닌 실전. 시장에서 직접 살아남고 수익을 증명한 웹3 자산관리사들이 전수하는 검증된 기술 세미나와 포럼으로 실력을 키웁니다.</p>
          </div>
          <div class="value-card-glow"></div>
        </div>
        <div class="value-card" data-animate="fade-up" data-delay="400">
          <div class="value-number">04</div>
          <div class="value-content">
            <h3>커뮤니티 네트워크</h3>
            <p>동일한 목표를 가진 전문가 네트워킹 그룹. 서로의 경험과 전략을 공유하며 함께 성장하는 엘리트 커뮤니티를 구축합니다.</p>
          </div>
          <div class="value-card-glow"></div>
        </div>
      </div>
    </div>
  </section>

  <!-- ========== QUOTE ========== -->
  <section class="section">
    <div class="container">
      <div class="vision-quote-section" data-animate="fade-up">
        <blockquote class="vision-large-quote">
          <span class="quote-mark">"</span>
          잃지 않는 것이 최고의 수익이다.<br/>
          생존이 곧 승리인 시장, 사관학교가 당신의 방패가 되겠습니다.
          <span class="quote-mark">"</span>
        </blockquote>
      </div>
    </div>
  </section>

  <!-- ========== INSTRUCTORS ========== -->
  <section class="section section-dark">
    <div class="container">
      <div class="section-header" data-animate="fade-up">
        <span class="section-tag">INSTRUCTORS</span>
        <h2 class="section-title">실전에서 검증된<br/><span class="text-gradient">웹3 자산관리사들</span></h2>
        <p class="section-desc">
          우리는 이론가(Academic)가 아닙니다.<br/>
          시장에서 직접 살아남고 수익을 증명한<br/>
          <strong>실전 웹3 자산관리사(Asset Manager)</strong>들입니다.
        </p>
      </div>
      <div class="instructors-grid">
        <div class="instructor-card" data-animate="fade-up" data-delay="100">
          <div class="instructor-avatar"><img src="/images/instructor_lee.png" alt="이상연" class="instructor-photo" /></div>
          <div class="instructor-info">
            <h4>이상연</h4>
            <span class="instructor-role">대표교관 · Chief Officer</span>
            <p class="instructor-desc">10년 이상의 실전 트레이딩 경력.<br/>웹3 생태계 구축 및 지역 센터 총괄 운영.</p>
            <div class="instructor-tags">
              <span class="tag">트레이딩 전략</span>
              <span class="tag">리더십</span>
              <span class="tag">센터 운영</span>
            </div>
          </div>
        </div>
        <div class="instructor-card" data-animate="fade-up" data-delay="200">
          <div class="instructor-avatar"><img src="/images/instructor_jung.png" alt="정요천" class="instructor-photo" /></div>
          <div class="instructor-info">
            <h4>정요천</h4>
            <span class="instructor-role">수석교관 · Senior Officer</span>
            <p class="instructor-desc">차트 분석 및 양방향 매매 전문.<br/>리스크 매니지먼트 교육 담당.</p>
            <div class="instructor-tags">
              <span class="tag">차트 분석</span>
              <span class="tag">리스크 관리</span>
            </div>
          </div>
        </div>
        <div class="instructor-card" data-animate="fade-up" data-delay="300">
          <div class="instructor-avatar"><img src="/images/instructor_kim.png" alt="김태완" class="instructor-photo" /></div>
          <div class="instructor-info">
            <h4>김태완</h4>
            <span class="instructor-role">기술교관 · Technical Officer</span>
            <p class="instructor-desc">DeFi 프로토콜 및 스마트 컨트랙트 보안 전문가.<br/>블록체인 기술 교육 담당.</p>
            <div class="instructor-tags">
              <span class="tag">DeFi</span>
              <span class="tag">스마트 컨트랙트</span>
              <span class="tag">보안</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ========== CTA ========== -->
  <section class="section section-cta">
    <div class="container">
      <div class="cta-content" data-animate="fade-up">
        <h2 class="cta-title">웹3 시대,<br/><span class="text-gradient">함께 준비하시겠습니까?</span></h2>
        <p class="cta-desc">모든 과정은 '기술 세미나' 및 '포럼' 형태로 진행됩니다.</p>
        <div class="cta-buttons">
          <a href="#" class="btn-primary btn-large" onclick="openConsultationModal('1'); return false;">입교 상담 신청하기</a>
          <a href="/curriculum" class="btn-secondary btn-large" data-link>교육 과정 보기 →</a>
        </div>
      </div>
    </div>
  </section>
  `;
}

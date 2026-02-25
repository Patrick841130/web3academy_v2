/* ============================================================
   Home Page — Hero + 핵심 요약 + 3단계 반 미리보기 + CTA
   ============================================================ */

export function renderHome() {
  return `
  <!-- ========== HERO SECTION ========== -->
  <section id="hero">
    <div class="bg-watermark bg-watermark-hero"></div>
    <div class="hero-bg-grid"></div>
    <div class="hero-glow hero-glow-1"></div>
    <div class="hero-glow hero-glow-2"></div>
    <div class="container hero-layout-split">
      <div class="hero-content text-left">
        <div class="hero-badge" data-animate="fade-up">NEXT GEN ELITE PROGRAM</div>
        <h1 class="hero-title" data-animate="fade-up" data-delay="100">
          <span class="text-gradient">웹3·AI</span> 시대,<br/>
          단순한 <span class="text-gradient">사용자</span>로 남을 것인가<br/>
          주권을 쥔 <span class="text-gradient">관리자</span>가 될 것인가
        </h1>
        <p class="hero-desc" data-animate="fade-up" data-delay="200">
          실전 웹3 기술 세미나 및 웹3 자산관리사 양성 과정.<br/>
          우리는 기술을 넘어 <strong>부의 주권을 되찾는 법</strong>을 가르칩니다.
        </p>
        <div class="hero-buttons" data-animate="fade-up" data-delay="300">
          <a href="#" class="btn-primary" onclick="openConsultationModal('1'); return false;">입교 상담 신청하기</a>
          <a href="/curriculum" class="btn-secondary" data-link>교육 과정 보기</a>
        </div>
        <div class="hero-stats" data-animate="fade-up" data-delay="400">
          <div class="stat-item">
            <span class="stat-number" data-count="500">0</span><span class="stat-suffix">+</span>
            <span class="stat-label">정예 요원</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-item">
            <span class="stat-number" data-count="97">0</span><span class="stat-suffix">%</span>
            <span class="stat-label">자산 보전율</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-item">
            <span class="stat-number" data-count="12">0</span><span class="stat-suffix">개</span>
            <span class="stat-label">전략 거점</span>
          </div>
        </div>
      </div>
      <div class="hero-visual" data-animate="fade-in" data-delay="500">
        <iframe src="https://my.spline.design/robotfollowcursorforlandingpage-3LDpI3GBlfm14SemRLslsfdv/" frameborder="0" width="100%" height="100%"></iframe>
      </div>
    </div>
    <div class="hero-scroll-indicator" data-animate="fade-up" data-delay="600">
      <div class="scroll-line"></div>
      <span>Scroll</span>
    </div>
  </section>

  <!-- ========== VISION 미리보기 ========== -->
  <section class="section vision-section">
    <div class="bg-watermark bg-watermark-1"></div>
    <div class="container">
      <div class="section-header" data-animate="fade-up">
        <span class="section-tag">VISION & PHILOSOPHY</span>
        <h2 class="section-title">데이터와 자산의 주권이<br/><span class="text-gradient">개인에게 오는 시대</span></h2>
      </div>
      <div class="vision-grid">
        <div class="vision-card vision-main" data-animate="fade-up" data-delay="100">
          <div class="vision-card-icon">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
              <path d="M24 4L4 14V34L24 44L44 34V14L24 4Z" stroke="currentColor" stroke-width="2"/>
              <path d="M24 44V24M4 14L24 24M44 14L24 24" stroke="currentColor" stroke-width="2"/>
            </svg>
          </div>
          <h3>준비된 자만이 부의 주인이 됩니다</h3>
          <p>플랫폼이 시키는 대로 살던 웹2의 시대가 끝나고 있습니다. 이제 당신의 자산과 데이터는 당신이 지켜야 합니다. 웹3 사관학교는 다가올 미래 경제 시스템에서 살아남을 <strong>'생존 기술'</strong>을 전수합니다.</p>
        </div>
        <div class="vision-card" data-animate="fade-up" data-delay="200">
          <div class="vision-card-number">01</div>
          <h3>잃지 않는 투자</h3>
          <p>화려한 수익률 이전에, 내 시드(Seed)를 완벽하게 지키는 <strong>철저한 리스크 관리법</strong>을 교육합니다.</p>
          <div class="vision-card-accent"></div>
        </div>
        <div class="vision-card" data-animate="fade-up" data-delay="300">
          <div class="vision-card-number">02</div>
          <h3>개인 데이터 주권</h3>
          <p>블록체인 기술을 통해 개인이 직접 자신의 데이터를 소유하고 관리하는 시대. <strong>디지털 주권의 선봉장</strong>이 되십시오.</p>
          <div class="vision-card-accent"></div>
        </div>
      </div>
      <div class="section-cta-link" data-animate="fade-up" data-delay="400">
        <a href="/vision" class="btn-secondary" data-link>비전 상세 보기 →</a>
      </div>
    </div>
  </section>

  <!-- ========== CURRICULUM 미리보기 ========== -->
  <section class="section section-dark curriculum-section">
    <div class="bg-watermark bg-watermark-2"></div>
    <div class="container">
      <div class="section-header" data-animate="fade-up">
        <span class="section-tag">TRAINING PROGRAM</span>
        <h2 class="section-title">웹3 자산관리사 양성<br/><span class="text-gradient">3단계 교육 과정</span></h2>
        <p class="section-desc">단계별 체계적 훈련을 통해 웹3 시대의 전문 웹3 자산관리사로 성장합니다.</p>
      </div>
      <div class="curriculum-grid">
        <!-- Card 1 -->
        <div class="curriculum-card" data-animate="fade-up" data-delay="100">
          <div class="card-tier tier-basic">PHASE 01</div>
          <div class="card-icon-wrap">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <rect x="4" y="4" width="32" height="32" rx="4" stroke="currentColor" stroke-width="2"/>
              <path d="M12 20L18 26L28 14" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <h3 class="card-title">기초훈련반</h3>
          <span class="card-subtitle">Basic Training</span>
          <div class="card-divider"></div>
          <p class="card-summary">암호화폐? NFT? 개념부터 실전 지갑 보안까지 완벽 마스터</p>
          <div class="card-hover-glow"></div>
        </div>

        <!-- Card 2 -->
        <div class="curriculum-card" data-animate="fade-up" data-delay="200">
          <div class="card-tier tier-cadet">PHASE 02</div>
          <div class="card-icon-wrap">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <path d="M20 4L36 12V28L20 36L4 28V12L20 4Z" stroke="currentColor" stroke-width="2"/>
              <circle cx="20" cy="20" r="6" stroke="currentColor" stroke-width="2"/>
            </svg>
          </div>
          <h3 class="card-title">생도육성반</h3>
          <span class="card-subtitle">Cadet Course</span>
          <div class="card-divider"></div>
          <p class="card-summary">어떤 장에서도 수익을 내는 양방향 매매 기법 전수</p>
          <div class="card-hover-glow"></div>
        </div>

        <!-- Card 3 - Featured -->
        <div class="curriculum-card card-featured" data-animate="fade-up" data-delay="300">
          <div class="card-featured-badge">★ FLAGSHIP COURSE</div>
          <div class="card-tier tier-officer">PHASE 03</div>
          <div class="card-icon-wrap">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <path d="M20 2L25.09 14.26L38 16.27L28.18 25.52L30.18 38.4L20 32.84L9.82 38.4L11.82 25.52L2 16.27L14.91 14.26L20 2Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
            </svg>
          </div>
          <h3 class="card-title">장교임관반</h3>
          <span class="card-subtitle">Officer Commissioning</span>
          <div class="card-divider"></div>
          <p class="card-summary">10개월간 실전 집중 훈련. 500만 원 → 1억 원 자산 형성</p>
          <div class="card-hover-glow"></div>
        </div>
      </div>
      <div class="section-cta-link" data-animate="fade-up" data-delay="400">
        <a href="/curriculum" class="btn-secondary" data-link>커리큘럼 상세 보기 →</a>
      </div>
    </div>
  </section>

  <!-- ========== FUTURE LEADERS (AMBASSADOR) ========== -->
  <section class="section ambassador-section">
    <div class="container">
      <div class="ambassador-content" data-animate="fade-up">
        <div class="ambassador-badge">NEW PROGRAM</div>
        <h2 class="ambassador-title">Future Leaders<br/><span class="text-neon">2030 웹3 엠베서더 특별 과정</span></h2>
        <p class="ambassador-desc">
          사관학교의 활기찬 에너지와 함께, 당신의 영향력을 넓히세요.<br/>
          웹3 인플루언서 및 전문 강사로 데뷔할 수 있는 2030 영 제너레이션 전용 교육 과정입니다.
        </p>
        <div class="ambassador-features">
          <div class="amb-feature" data-animate="fade-up" data-delay="100">
            <div class="amb-icon">🎯</div>
            <span>소셜 임팩트 창출</span>
          </div>
          <div class="amb-feature" data-animate="fade-up" data-delay="200">
            <div class="amb-icon">💡</div>
            <span>전문 강사 데뷔 지원</span>
          </div>
          <div class="amb-feature" data-animate="fade-up" data-delay="300">
            <div class="amb-icon">🤝</div>
            <span>엘리트 네트워킹</span>
          </div>
        </div>
        
        <div class="ambassador-cta" data-animate="fade-up" data-delay="400" style="margin-top: 40px;">
          <a href="https://forms.gle/nZroyNASvVKFpk3K7" target="_blank" rel="noopener noreferrer" class="btn-neon">
            엠베서더 1기 지원하기
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- ========== FREE SEMINAR HIGHLIGHT ========== -->
  <section class="section seminar-highlight-section">
    <div class="container">
      <div class="seminar-card" data-animate="fade-up">
        <div class="seminar-content">
          <div class="seminar-badge">OPEN TO EVERYONE</div>
          <h2 class="seminar-title">무료 입교 상담 세미나</h2>
          <p class="seminar-desc">
            웹3 사관학교가 궁금하신가요? 매주 진행되는 무료 세미나에 참석하여,<br/>
            전문가의 브리핑을 듣고 나에게 맞는 교육 과정을 상담받으세요.
          </p>
          <div class="seminar-info-grid">
            <div class="seminar-info-item">
              <span class="info-icon">📅</span>
              <div class="info-text">
                <strong>일정:</strong>
                <span>매주 화·수·목요일</span>
              </div>
            </div>
            <div class="seminar-info-item">
              <span class="info-icon">⏰</span>
              <div class="info-text">
                <strong>시간:</strong>
                <span>오후 7:00 – 10:00</span>
              </div>
            </div>
            <div class="seminar-info-item">
              <span class="info-icon">📍</span>
              <div class="info-text">
                <strong>장소:</strong>
                <span>웹3 사관학교 오프라인 센터</span>
              </div>
            </div>
          </div>
        </div>
        <div class="seminar-action">
          <a href="#" class="btn-primary btn-large btn-glow" onclick="openConsultationModal('1'); return false;">무료 세미나 신청하기</a>
        </div>
      </div>
    </div>
  </section>

  <!-- ========== CAMPUS & FACILITIES ========== -->
  <section class="section campus-section">
    <div class="container">
      <div class="section-header" data-animate="fade-up">
        <span class="section-tag">CAMPUS & FACILITIES</span>
        <h2 class="section-title">오프라인 <span class="text-gradient">교육 센터 전경</span></h2>
        <p class="section-desc">웹3 사관학교 생도들의 뜨거운 열기가 가득한<br/>실제 오프라인 강의장과 실습 공간입니다.</p>
      </div>
      <div class="campus-grid">
        <div class="campus-card" data-animate="fade-up" data-delay="100">
          <div class="campus-img-wrap">
            <img src="/images/gallery/gallery-3.jpg" alt="웹3 사관학교 생도 교육 현장" class="campus-img">
            <div class="campus-img-overlay">
              <span>메인 강의실 전경</span>
            </div>
          </div>
        </div>
        <div class="campus-card" data-animate="fade-up" data-delay="200">
          <div class="campus-img-wrap">
            <img src="/images/gallery/gallery-4.jpg" alt="웹3 사관학교 실습 현장" class="campus-img">
            <div class="campus-img-overlay">
              <span>휴게 및 네트워킹 공간</span>
            </div>
          </div>
        </div>
        <div class="campus-card" data-animate="fade-up" data-delay="300">
          <div class="campus-img-wrap">
            <img src="/images/gallery/gallery-6.png" alt="웹3 교육 센터 현장" class="campus-img">
            <div class="campus-img-overlay">
              <span>집중 강의실 전경</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ========== CTA SECTION ========== -->
  <section class="section section-cta cta-section">
    <div class="bg-watermark bg-watermark-3"></div>
    <div class="container">
      <div class="cta-content" data-animate="fade-up">
        <h2 class="cta-title">웹3 시대의 리더,<br/><span class="text-gradient">웹3 자산관리사를 양성합니다</span></h2>
        <p class="cta-desc">지금 입교 상담을 신청하고 웹3 사관학교의 문을 여십시오.</p>
        <p class="cta-disclaimer">본 기관은 학원법에 따른 입시 학원이 아닌, 블록체인 기술 컨설팅 및 전문가 네트워킹 그룹입니다.</p>
        <div class="cta-buttons">
          <a href="#" class="btn-primary btn-large" onclick="openConsultationModal('1'); return false;">입교 상담 신청하기</a>
          <a href="/career" class="btn-secondary btn-large" data-link>센터장 모집 안내 →</a>
        </div>
      </div>
    </div>
  </section>
  `;
}

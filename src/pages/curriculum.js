/* ============================================================
   Curriculum Page — 3단계 상세 커리큘럼
   ============================================================ */

export function renderCurriculum() {
  return `
  <!-- ========== PAGE HERO ========== -->
  <section class="page-hero">
    <div class="page-hero-bg"></div>
    <div class="hero-glow hero-glow-1"></div>
    <div class="hero-glow hero-glow-2"></div>
    <div class="container page-hero-content">
      <span class="section-tag" data-animate="fade-up">TRAINING PROGRAM</span>
      <h1 class="page-hero-title" data-animate="fade-up" data-delay="100">
        웹3 자산관리사 양성<br/><span class="text-gradient">3단계 교육 과정</span>
      </h1>
      <p class="page-hero-desc" data-animate="fade-up" data-delay="200">
        단계별 체계적 훈련을 통해 웹3 시대의 전문 웹3 자산관리사로 성장합니다.<br/>
        모든 과정은 <strong>기술 세미나 및 포럼</strong> 형태로 진행됩니다.
      </p>
    </div>
  </section>

  <!-- ========== FREE SEMINAR BANNER ========== -->
  <section class="section seminar-banner-section" style="padding: 40px 0 0 0;">
    <div class="container">
      <div class="seminar-banner" data-animate="fade-up">
        <div class="seminar-banner-bg"></div>
        <div class="banner-content">
          <div class="banner-icon">💡</div>
          <div class="banner-text">
            <h3>매주 화·수·목 저녁 7시 무료 세미나 진행 중!</h3>
            <p>어떤 과정이 나에게 맞을지 고민되시나요? 오프라인 세미나에 참석하여 상세한 브리핑과 상담을 받아보세요.</p>
          </div>
        </div>
        <div class="banner-action">
          <a href="#" class="btn-primary btn-glow" onclick="openConsultationModal('1'); return false;">상담 신청하기</a>
        </div>
      </div>
    </div>
  </section>

  <!-- ========== PHASE 01: 기초훈련반 ========== -->
  <section class="section">
    <div class="container">
      <div class="curriculum-detail-block" data-animate="fade-up">
        <div class="curriculum-detail-header">
          <div class="cd-phase">
            <span class="cd-phase-number tier-basic">PHASE 01</span>
            <div class="cd-icon">
              <svg width="48" height="48" viewBox="0 0 40 40" fill="none">
                <rect x="4" y="4" width="32" height="32" rx="4" stroke="currentColor" stroke-width="2"/>
                <path d="M12 20L18 26L28 14" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </div>
          <div class="cd-title-area">
            <h2 class="cd-title">기초훈련반</h2>
            <span class="cd-subtitle">Basic Training</span>
          </div>
        </div>
        <div class="cd-quote">
          <p>"암호화폐? NFT? 개념부터 실전 지갑 보안까지 완벽 마스터"</p>
        </div>
        <div class="cd-content-grid">
          <div class="cd-info-card">
            <h4>대상</h4>
            <p>웹3 입문자 · 블록체인 기초를 다지고 싶은 분</p>
          </div>
          <div class="cd-info-card">
            <h4>형태</h4>
            <p>기술 세미나 및 실습 워크숍</p>
          </div>
        </div>
        <div class="cd-curriculum-list">
          <h4>세미나 커리큘럼</h4>
          <ul>
            <li><span class="cd-bullet">01</span>지갑 생성 및 보안 설정 — 시드 문구 관리의 중요성</li>
            <li><span class="cd-bullet">02</span>가스비(Gas Fee)의 이해 — 트랜잭션의 원리</li>
            <li><span class="cd-bullet">03</span>블록체인 생태계 기초 이론 — 레이어1, 레이어2 구조</li>
            <li><span class="cd-bullet">04</span>암호화폐 · NFT 기본 개념 완전 정복</li>
            <li><span class="cd-bullet">05</span>기본 생존 기술 습득 — 스캠 판별 및 안전한 거래</li>
          </ul>
        </div>
        <div class="cd-goal">
          <span class="goal-label">목표</span>
          <p>웹3 세상에서 길을 잃지 않는 기본 생존 기술 습득. 스스로 지갑을 만들고, 안전하게 자산을 관리할 수 있는 역량 확보.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- ========== PHASE 02: 생도육성반 ========== -->
  <section class="section section-dark">
    <div class="container">
      <div class="curriculum-detail-block" data-animate="fade-up">
        <div class="curriculum-detail-header">
          <div class="cd-phase">
            <span class="cd-phase-number tier-cadet">PHASE 02</span>
            <div class="cd-icon">
              <svg width="48" height="48" viewBox="0 0 40 40" fill="none">
                <path d="M20 4L36 12V28L20 36L4 28V12L20 4Z" stroke="currentColor" stroke-width="2"/>
                <circle cx="20" cy="20" r="6" stroke="currentColor" stroke-width="2"/>
              </svg>
            </div>
          </div>
          <div class="cd-title-area">
            <h2 class="cd-title">생도육성반</h2>
            <span class="cd-subtitle">Cadet Course</span>
          </div>
        </div>
        <div class="cd-quote">
          <p>"차트 뒤에 숨은 심리를 읽고, 어떤 장에서도 수익을 내는 양방향 매매 기법 전수"</p>
        </div>
        <div class="cd-content-grid">
          <div class="cd-info-card">
            <h4>대상</h4>
            <p>실전 트레이딩 희망자 · 독립 수익 모델을 구축하고 싶은 분</p>
          </div>
          <div class="cd-info-card">
            <h4>형태</h4>
            <p>실전 트레이딩 포럼 및 멘토링</p>
          </div>
        </div>
        <div class="cd-curriculum-list">
          <h4>포럼 커리큘럼</h4>
          <ul>
            <li><span class="cd-bullet">01</span>차트 분석 기초 및 심화 — 캔들 패턴, 지지/저항</li>
            <li><span class="cd-bullet">02</span>양방향 매매(Long/Short) 원리 및 실전 적용</li>
            <li><span class="cd-bullet">03</span>차트 뒤에 숨은 시장 심리 분석 기법</li>
            <li><span class="cd-bullet">04</span>실전 포트폴리오 구성 및 리밸런싱 전략</li>
            <li><span class="cd-bullet">05</span>독립 수익 모델 구축 — 나만의 트레이딩 시스템</li>
          </ul>
        </div>
        <div class="cd-goal">
          <span class="goal-label">목표</span>
          <p>시장 상황에 관계없이 스스로 수익 모델을 구축하는 '독립 생도' 양성. 상승장·하락장 모두에서 대응 가능한 양방향 매매 역량 확보.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- ========== PHASE 03: 장교임관반 ========== -->
  <section class="section">
    <div class="container">
      <div class="curriculum-detail-block cd-elite" data-animate="fade-up">
        <div class="cd-elite-badge">★ FLAGSHIP COURSE — ELITE</div>
        <div class="curriculum-detail-header">
          <div class="cd-phase">
            <span class="cd-phase-number tier-officer">PHASE 03</span>
            <div class="cd-icon">
              <svg width="48" height="48" viewBox="0 0 40 40" fill="none">
                <path d="M20 2L25.09 14.26L38 16.27L28.18 25.52L30.18 38.4L20 32.84L9.82 38.4L11.82 25.52L2 16.27L14.91 14.26L20 2Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
              </svg>
            </div>
          </div>
          <div class="cd-title-area">
            <h2 class="cd-title">장교임관반</h2>
            <span class="cd-subtitle">Officer Commissioning — Elite Program</span>
          </div>
        </div>
        <div class="cd-quote cd-quote-elite">
          <p>"사관학교의 꽃. 10개월간의 실전 집중 훈련. 500만 원으로 1억 원의 자산을 형성하는 극한의 포트폴리오 관리 기법 전수."</p>
        </div>
        <div class="cd-content-grid">
          <div class="cd-info-card">
            <h4>대상</h4>
            <p>전업 트레이더 · 지역 센터장 임관 희망자</p>
          </div>
          <div class="cd-info-card">
            <h4>기간</h4>
            <p>10개월 집중 훈련 프로그램</p>
          </div>
        </div>
        <div class="cd-curriculum-list">
          <h4>엘리트 커리큘럼</h4>
          <ul>
            <li><span class="cd-bullet">01</span>고난도 트레이딩 전략 — 극한의 리스크 관리</li>
            <li><span class="cd-bullet">02</span>대규모 포트폴리오 운용 기법 — 자산 배분 전략</li>
            <li><span class="cd-bullet">03</span>지역 센터 운영 노하우 — 비즈니스 모델 구축</li>
            <li><span class="cd-bullet">04</span>리더십 및 팀 빌딩 — 생도 관리 역량</li>
            <li><span class="cd-bullet">05</span>100M Project 실전 달성 — 최종 졸업 목표</li>
          </ul>
        </div>
        <div class="cd-goal cd-goal-elite">
          <span class="goal-label">핵심 목표</span>
          <p><strong>10개월 내 500만 원 → 1억 자산 달성</strong><br/>100M Project 수료 및 전문가 임관. 지역 센터장 자격 부여.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- ========== CTA ========== -->
  <section class="section section-cta section-dark">
    <div class="container">
      <div class="cta-content" data-animate="fade-up">
        <h2 class="cta-title">어떤 과정이<br/><span class="text-gradient">나에게 맞을까?</span></h2>
        <p class="cta-desc">무료 상담을 통해 나에게 맞는 과정을 추천받으세요.</p>
        <p class="cta-disclaimer">모든 과정은 '기술 세미나' 및 '포럼' 형태로 진행됩니다.</p>
        <div class="cta-buttons">
          <a href="#" class="btn-primary btn-large" onclick="openConsultationModal('1'); return false;">무료 상담 신청</a>
          <a href="/career" class="btn-secondary btn-large" data-link>센터장 모집 안내 →</a>
        </div>
      </div>
    </div>
  </section>
  `;
}

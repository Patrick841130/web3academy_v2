/* ============================================================
   ADMIN PAGE — Create New News Article
   ============================================================ */

export function renderAdminNewsNew() {
    return `
  <!-- ========== PAGE ADMIN HERO ========== -->
  <section class="page-hero" style="padding-top: 140px; padding-bottom: 60px;">
    <div class="page-hero-bg"></div>
    <div class="hero-glow hero-glow-1"></div>
    <div class="container page-hero-content">
      <span class="section-tag" data-animate="fade-up">ADMINISTRATION</span>
      <h1 class="page-hero-title" data-animate="fade-up" data-delay="100">
        소식 <span class="text-gradient">새 글 작성</span>
      </h1>
      <p class="page-hero-desc" data-animate="fade-up" data-delay="200">
        사관학교 소식 게시판에 업로드할 새로운 글을 작성합니다.
      </p>
    </div>
  </section>

  <!-- ========== ADMIN FORM ========== -->
  <section class="section admin-section" style="min-height: 50vh;">
    <div class="container" style="max-width: 800px;">
      <div class="admin-form-card" data-animate="fade-up">
        <form id="newsCreateForm" class="consultation-form">
          <div class="form-group">
            <label class="form-label" style="display:block; margin-bottom:8px; color:var(--text-secondary);">게시글 제목 *</label>
            <input type="text" id="newsTitle" name="title" class="form-input" placeholder="제목을 입력하세요" required>
          </div>
          
          <div class="form-group" style="display:flex; gap:20px;">
            <div style="flex:1;">
              <label class="form-label" style="display:block; margin-bottom:8px; color:var(--text-secondary);">카테고리 *</label>
              <select id="newsCategory" class="form-select" style="width:100%;" required>
                <option value="세미나">세미나</option>
                <option value="센터 소식">센터 소식</option>
                <option value="수익 인증">수익 인증</option>
                <option value="교육 현장">교육 현장</option>
              </select>
            </div>
            <div style="flex:1;">
              <label class="form-label" style="display:block; margin-bottom:8px; color:var(--text-secondary);">작성일자 (YYYY.MM.DD) *</label>
              <input type="text" id="newsDate" name="date" class="form-input" placeholder="예: 2026.03.01" required>
            </div>
          </div>

          <div class="form-group">
            <label class="form-label" style="display:block; margin-bottom:8px; color:var(--text-secondary);">썸네일 이미지 URL (선택)</label>
            <input type="url" id="newsImage" name="image" class="form-input" placeholder="https://example.com/image.jpg">
          </div>

          <div class="form-group">
            <label class="form-label" style="display:block; margin-bottom:8px; color:var(--text-secondary);">본문 내용 요약 *</label>
            <textarea id="newsContent" name="content" class="form-input" style="min-height:150px; resize:vertical;" placeholder="소식 내용을 작성해주세요." required></textarea>
          </div>

          <div style="margin-top: 40px; text-align:right;">
            <a href="/news" class="btn-secondary" data-link style="margin-right:12px;">취소</a>
            <button type="submit" class="btn-primary" id="newsSubmitBtn">작성 완료하기</button>
          </div>
        </form>
      </div>
    </div>
  </section>
  `;
}

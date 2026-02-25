/* ============================================================
   ADMIN PAGE — News Management Dashboard
   ============================================================ */

export function renderAdminNews() {
    return `
  <!-- ========== PAGE ADMIN HERO ========== -->
  <section class="page-hero" style="padding-top: 140px; padding-bottom: 60px;">
    <div class="page-hero-bg"></div>
    <div class="hero-glow hero-glow-1"></div>
    <div class="container page-hero-content">
      <span class="section-tag" data-animate="fade-up">ADMINISTRATION</span>
      <h1 class="page-hero-title" data-animate="fade-up" data-delay="100">
        소식 게시판 <span class="text-gradient">관리</span>
      </h1>
      <p class="page-hero-desc" data-animate="fade-up" data-delay="200">
        웹사이트에 표시되는 모든 소식 글을 확인하고 수정 및 삭제할 수 있습니다.
      </p>
    </div>
  </section>

  <!-- ========== ADMIN DATA GRID ========== -->
  <section class="section admin-section" style="min-height: 50vh;">
    <div class="container">
      <div class="admin-toolbar" data-animate="fade-up" style="display:flex; justify-content:space-between; align-items:center;">
        <div>
          <label for="adminNewsFilter">카테고리 필터:</label>
          <select id="adminNewsFilter" class="form-select">
            <option value="all">전체</option>
            <option value="세미나">세미나</option>
            <option value="센터 소식">센터 소식</option>
            <option value="수익 인증">수익 인증</option>
            <option value="교육 현장">교육 현장</option>
          </select>
        </div>
        <div>
          <a href="/admin/news/new" class="btn-primary" data-link style="padding:8px 16px; margin-right:12px;">+ 새 글 작성</a>
          <button id="refreshAdminNewsBtn" class="btn-secondary" style="padding:8px 16px;">새로고침</button>
        </div>
      </div>
      
      <div class="table-responsive" data-animate="fade-up" data-delay="100">
        <table class="admin-table">
          <thead>
            <tr>
              <th style="width: 80px;">번호</th>
              <th style="width: 120px;">카테고리</th>
              <th>제목</th>
              <th style="width: 150px;">작성일자</th>
              <th style="width: 150px; text-align:right;">관리</th>
            </tr>
          </thead>
          <tbody id="adminNewsTableBody">
            <tr>
              <td colspan="5" class="text-center">데이터를 불러오는 중입니다...</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
  `;
}

/* ============================================================
   ADMIN PAGE — Consultations Dashboard
   ============================================================ */

export function renderAdminConsultations() {
  return `
  <!-- ========== PAGE ADMIN HERO ========== -->
  <section class="page-hero" style="padding-top: 140px; padding-bottom: 60px;">
    <div class="page-hero-bg"></div>
    <div class="hero-glow hero-glow-1"></div>
    <div class="container page-hero-content">
      <span class="section-tag" data-animate="fade-up">ADMINISTRATION</span>
      <h1 class="page-hero-title" data-animate="fade-up" data-delay="100">
        상담 신청 내역 <span class="text-gradient">관리</span>
      </h1>
      <p class="page-hero-desc" data-animate="fade-up" data-delay="200">
        사용자가 제출한 모든 상담 신청 데이터를 확인하고 필터링할 수 있습니다.
      </p>
    </div>
  </section>

  <!-- ========== ADMIN DATA GRID ========== -->
  <section class="section admin-section" style="min-height: 50vh;">
    <div class="container">
      <div class="admin-toolbar" data-animate="fade-up">
        <label for="consultFilter">유형 필터:</label>
        <select id="consultFilter" class="form-select">
          <option value="all">전체</option>
          <option value="1">일반 상담</option>
          <option value="3">센터장 상담</option>
        </select>
        <button id="refreshConsultsBtn" class="btn-secondary" style="margin-left:auto; padding:8px 16px;">새로고침</button>
      </div>
      
      <div class="table-responsive" data-animate="fade-up" data-delay="100">
        <table class="admin-table">
          <thead>
            <tr>
              <th>번호</th>
              <th>신청자 이름</th>
              <th>연락처</th>
              <th>상담 유형</th>
              <th>신청 일시</th>
            </tr>
          </thead>
          <tbody id="consultTableBody">
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

/* ============================================================
   웹3 사관학교 - Main JavaScript (SPA Router Version)
   ============================================================ */

import { initRouter } from './router.js';

// API base URL: empty in dev (Vite proxy), Railway URL in production
const API_BASE = import.meta.env.VITE_API_URL || '';

/**
 * Convert Google Drive sharing URLs to embeddable image URLs.
 * Input:  https://drive.google.com/file/d/FILE_ID/view?usp=sharing
 * Output: https://drive.google.com/thumbnail?id=FILE_ID&sz=w800
 */
function convertGoogleDriveUrl(url) {
  if (!url) return null;
  // Match Google Drive file links
  const match = url.match(/drive\.google\.com\/file\/d\/([a-zA-Z0-9_-]+)/);
  if (match && match[1]) {
    return `https://drive.google.com/thumbnail?id=${match[1]}&sz=w800`;
  }
  // Match Google Drive open links
  const match2 = url.match(/drive\.google\.com\/open\?id=([a-zA-Z0-9_-]+)/);
  if (match2 && match2[1]) {
    return `https://drive.google.com/thumbnail?id=${match2[1]}&sz=w800`;
  }
  // Already a direct URL, return as-is
  return url;
}

// Wait for DOM
document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initMobileMenu();
  initPopup();
  initConsultation();

  // Re-init page-specific JS after each route change
  window.addEventListener('page:rendered', (e) => {
    initScrollAnimations();
    initCardMouseTracking();
    initCounterAnimation();

    const path = e?.detail?.path || window.location.pathname;
    if (path === '/admin/consultations') {
      initAdminConsultations();
    } else if (path === '/admin/news') {
      initAdminNews();
    } else if (path === '/admin/news/new' || path === '/admin/news/edit') {
      initAdminNewsNew();
    } else if (path === '/news') {
      initNews();
    }
  });

  initRouter();
});

/* ---- Header Scroll Effect ---- */
function initHeader() {
  const header = document.getElementById('header');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });
}

/* ---- Mobile Menu ---- */
function initMobileMenu() {
  const btn = document.getElementById('mobileMenuBtn');
  const menu = document.getElementById('navMenu');

  if (!btn || !menu) return;

  btn.addEventListener('click', () => {
    menu.classList.toggle('open');
    btn.classList.toggle('active');
  });
}

/* ---- Scroll-Triggered Animations ---- */
function initScrollAnimations() {
  const animatedElements = document.querySelectorAll('[data-animate]:not(.animated)');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const delay = entry.target.dataset.delay || 0;
          setTimeout(() => {
            entry.target.classList.add('animated');
          }, parseInt(delay));
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px',
    }
  );

  animatedElements.forEach(el => observer.observe(el));
}

/* ---- KT TechUP Style Card Mouse Tracking ---- */
function initCardMouseTracking() {
  const cards = document.querySelectorAll('.curriculum-card');

  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });
}

/* ---- Counter Animation ---- */
function initCounterAnimation() {
  const counters = document.querySelectorAll('[data-count]');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach(el => observer.observe(el));
}

function animateCounter(element) {
  const target = parseInt(element.dataset.count);
  const duration = 2000;
  const startTime = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.round(eased * target);

    element.textContent = current;

    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }

  requestAnimationFrame(update);
}

/* ---- Popup Logic ---- */
function initPopup() {
  const popup = document.getElementById('ambassadorPopup');
  const closeBtn = document.getElementById('popupCloseBtn');
  const applyBtn = document.getElementById('popupApplyBtn');

  if (!popup) return;

  // Show if not dismissed
  if (!sessionStorage.getItem('ambassadorPopupDismissed')) {
    setTimeout(() => {
      popup.classList.add('show');
    }, 1000);
  }

  const closePopup = () => {
    popup.classList.remove('show');
    sessionStorage.setItem('ambassadorPopupDismissed', 'true');
  };

  if (closeBtn) {
    closeBtn.addEventListener('click', (e) => {
      e.preventDefault();
      closePopup();
    });
  }
  if (applyBtn) {
    applyBtn.addEventListener('click', () => {
      closePopup();
    });
  }
}

function initConsultation() {
  const modal = document.getElementById('consultationModal');
  const closeBtn = document.getElementById('consultationCloseBtn');
  const form = document.getElementById('consultationForm');
  const nameInput = document.getElementById('consultName');
  const phoneInput = document.getElementById('consultPhone');
  const consentCheckbox = document.getElementById('consultConsent');
  const submitBtn = document.getElementById('consultSubmitBtn');
  const typeLabel = document.getElementById('consultationTypeLabel');
  const toast = document.getElementById('toastNotification');

  let currentSessionType = "1"; // Default: General

  if (!modal || !form) return;

  // Toggle submit button based on consent
  consentCheckbox.addEventListener('change', (e) => {
    submitBtn.disabled = !e.target.checked;
  });

  // Close modal
  const closeModal = () => {
    modal.classList.remove('show');
    form.reset();
    submitBtn.disabled = true;
  };

  closeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    closeModal();
  });

  // Open modal configuration
  window.openConsultationModal = (type) => {
    currentSessionType = type === "3" ? "3" : "1";
    typeLabel.textContent = currentSessionType === "3" ? "센터장 상담" : "일반 상담";
    modal.classList.add('show');
  };

  // Form Submission
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    if (!consentCheckbox.checked) return;

    submitBtn.innerHTML = '<span class="spinner" style="display:inline-block; width:16px; height:16px; border:2px solid #fff; border-top:2px solid transparent; border-radius:50%; animation:spin 1s linear infinite;"></span> 전송 중...';
    submitBtn.disabled = true;

    const payload = {
      name: nameInput.value.trim(),
      phone: phoneInput.value.trim(),
      session_type: currentSessionType
    };

    try {
      // Send to Railway backend API
      const response = await fetch(`${API_BASE}/api/consultations`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) throw new Error('Network response was not ok');

      // Success
      closeModal();
      showToast();
    } catch (error) {
      console.error('Submission failed:', error);
      alert('상담 신청 중 오류가 발생했습니다. 다시 시도해주세요.');
    } finally {
      submitBtn.innerHTML = '상담 신청하기';
      submitBtn.disabled = false;
    }
  });

  function showToast() {
    if (!toast) return;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 5000); // Hide after 5 seconds
  }
}

async function initAdminConsultations() {
  const tbody = document.getElementById('consultTableBody');
  const filterSelect = document.getElementById('consultFilter');
  const refreshBtn = document.getElementById('refreshConsultsBtn');

  if (!tbody) return;

  let allConsultations = [];

  const fetchConsultations = async () => {
    tbody.innerHTML = '<tr><td colspan="5" style="text-align:center;">데이터를 불러오는 중입니다...</td></tr>';
    try {
      // In production, you would attach authentication token headers
      const res = await fetch(`${API_BASE}/api/consultations`);
      if (!res.ok) throw new Error('API ERROR');

      allConsultations = await res.json();
      renderTable();
    } catch (err) {
      console.error(err);
      tbody.innerHTML = '<tr><td colspan="5" style="text-align:center;color:#ef4444;">데이터를 불러올 수 없습니다.</td></tr>';
    }
  };

  const renderTable = () => {
    const filterValue = filterSelect ? filterSelect.value : 'all';

    let filtered = allConsultations;
    if (filterValue !== 'all') {
      filtered = allConsultations.filter(c => c.session_type === filterValue);
    }

    if (filtered.length === 0) {
      tbody.innerHTML = '<tr><td colspan="5" style="text-align:center;">등록된 상담 신청 내역이 없습니다.</td></tr>';
      return;
    }

    tbody.innerHTML = filtered.map((c, i) => {
      const typeStr = c.session_type === '3' ? '<span style="color:var(--accent-cyan); font-weight:700;">센터장 상담</span>' : '일반 상담';
      const date = new Date(c.created_at).toLocaleString('ko-KR', {
        year: 'numeric', month: '2-digit', day: '2-digit',
        hour: '2-digit', minute: '2-digit'
      });
      return `
        <tr>
          <td>${filtered.length - i}</td>
          <td style="font-weight:600;">${c.name}</td>
          <td><a href="tel:${c.phone}" style="color:var(--accent-blue-light); text-decoration:none;">${c.phone}</a></td>
          <td>${typeStr}</td>
          <td style="color:var(--text-secondary);">${date}</td>
        </tr>
      `;
    }).join('');
  };

  if (filterSelect) {
    filterSelect.addEventListener('change', renderTable);
  }

  if (refreshBtn) {
    refreshBtn.addEventListener('click', fetchConsultations);
  }

  // Initial Fetch
  fetchConsultations();
}

function initAdminNewsNew() {
  const form = document.getElementById('newsCreateForm');
  const submitBtn = document.getElementById('newsSubmitBtn');

  if (!form) return;

  const urlParams = new URLSearchParams(window.location.search);
  const editId = urlParams.get('id');
  const isEditMode = !!editId;

  // Change UI text if in edit mode
  if (isEditMode) {
    const pageTitle = document.querySelector('.page-hero-title');
    if (pageTitle) pageTitle.innerHTML = `소식 <span class="text-gradient">수정하기</span>`;
    if (submitBtn) submitBtn.innerHTML = '수정 완료하기';

    // Pre-fill the form
    fetch(`${API_BASE}/api/news`)
      .then(res => res.json())
      .then(newsList => {
        const article = newsList.find(n => n.id === parseInt(editId));
        if (article) {
          document.getElementById('newsTitle').value = article.title;
          document.getElementById('newsCategory').value = article.category;
          document.getElementById('newsDate').value = article.date;
          document.getElementById('newsImage').value = article.image || '';
          document.getElementById('newsContent').value = article.content;
        } else {
          alert('해당 소식을 찾을 수 없습니다.');
          window.history.back();
        }
      })
      .catch(console.error);
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    submitBtn.innerHTML = '<span class="spinner" style="display:inline-block; width:16px; height:16px; border:2px solid #fff; border-top:2px solid transparent; border-radius:50%; animation:spin 1s linear infinite;"></span> 처리 중...';
    submitBtn.disabled = true;

    const payload = {
      title: document.getElementById('newsTitle').value.trim(),
      category: document.getElementById('newsCategory').value,
      date: document.getElementById('newsDate').value.trim(),
      image: document.getElementById('newsImage').value.trim() || null,
      content: document.getElementById('newsContent').value.trim()
    };

    try {
      const url = isEditMode ? `${API_BASE}/api/news/${editId}` : `${API_BASE}/api/news`;
      const method = isEditMode ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method: method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (!res.ok) throw new Error('API 오류');

      const toast = document.getElementById('toastNotification');
      if (toast) {
        toast.querySelector('.toast-message').textContent = isEditMode ? '소식이 수정되었습니다!' : '새로운 소식이 등록되었습니다!';
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 3000);
      }

      if (!isEditMode) form.reset();

      // Auto-redirect to dashboard after 1 second if successful
      setTimeout(() => {
        window.history.pushState(null, '', '/admin/news');
        window.dispatchEvent(new CustomEvent('page:rendered', { detail: { path: '/admin/news' } }));
      }, 1000);

    } catch (err) {
      console.error(err);
      alert('처리 중 오류가 발생했습니다.');
    } finally {
      submitBtn.innerHTML = isEditMode ? '수정 완료하기' : '작성 완료하기';
      submitBtn.disabled = false;
    }
  });
}

async function initNews() {
  const newsGrid = document.getElementById('newsGrid');
  const filterBtns = document.querySelectorAll('.news-filter-btn');

  if (!newsGrid) return;

  let allNews = [];
  let currentFilter = 'all';

  const fetchNews = async () => {
    try {
      const res = await fetch(`${API_BASE}/api/news`);
      if (!res.ok) throw new Error('API Error');
      allNews = await res.json();
      renderNews();
    } catch (err) {
      console.error(err);
      newsGrid.innerHTML = `
        <div style="grid-column: 1 / -1; padding: 60px; text-align: center; color: #ef4444;">
          데이터를 불러올 수 없습니다. 잠시 후 다시 시도해주세요.
        </div>
      `;
    }
  };

  const renderNews = () => {
    let filtered = allNews;
    if (currentFilter !== 'all') {
      filtered = allNews.filter(n => n.category === currentFilter);
    }

    if (filtered.length === 0) {
      newsGrid.innerHTML = `
        <div style="grid-column: 1 / -1; padding: 60px; text-align: center; color: var(--text-secondary);">
          등록된 소식이 없습니다.
        </div>
      `;
      return;
    }

    newsGrid.innerHTML = filtered.map((n, i) => {
      // Determine if it should be a large card (e.g., the very first item)
      const isLarge = i === 0 && currentFilter === 'all';
      const cardClass = isLarge ? 'news-card-large' : 'news-card';
      const thumbClass = isLarge ? 'news-thumb news-thumb-large' : 'news-thumb';
      const titleClass = isLarge ? 'news-title-large' : 'news-title';

      // Determine Thumbnail — convert Google Drive share links to embeddable URLs
      let thumbHtml = '';
      const imgUrl = n.image ? convertGoogleDriveUrl(n.image) : null;
      if (imgUrl) {
        thumbHtml = `<img src="${imgUrl}" alt="${n.title}" style="width:100%; height:100%; object-fit:cover;" referrerpolicy="no-referrer">`;
      } else {
        thumbHtml = `
          <div class="news-thumb-placeholder">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M4 6h24v20H4z" stroke="currentColor" stroke-width="2"/><path d="M4 12h24M12 12v14" stroke="currentColor" stroke-width="2"/></svg>
          </div>
        `;
      }

      return `
        <div class="${cardClass}" data-animate="fade-up" data-delay="${(i % 3) * 100}">
          <div class="${thumbClass}">
            ${thumbHtml}
          </div>
          <div class="news-content">
            <span class="news-category">${n.category}</span>
            <${isLarge ? 'h3' : 'h4'} class="${titleClass}">${n.title}</${isLarge ? 'h3' : 'h4'}>
            <p class="news-excerpt">${n.content.substring(0, 100)}${n.content.length > 100 ? '...' : ''}</p>
            <span class="news-date">${n.date}</span>
          </div>
        </div>
      `;
    }).join('');

    // Re-bind scroll animations for newly injected cards
    initScrollAnimations();
  };

  if (filterBtns.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        filterBtns.forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        currentFilter = e.target.getAttribute('data-filter');
        renderNews();
      });
    });
  }

  fetchNews();
}

async function initAdminNews() {
  const tbody = document.getElementById('adminNewsTableBody');
  const filterSelect = document.getElementById('adminNewsFilter');
  const refreshBtn = document.getElementById('refreshAdminNewsBtn');

  if (!tbody) return;

  let allNews = [];

  const fetchAdminNews = async () => {
    tbody.innerHTML = '<tr><td colspan="5" style="text-align:center;">데이터를 불러오는 중입니다...</td></tr>';
    try {
      const res = await fetch('/api/news');
      if (!res.ok) throw new Error('API ERROR');

      allNews = await res.json();
      renderTable();
    } catch (err) {
      console.error(err);
      tbody.innerHTML = '<tr><td colspan="5" style="text-align:center;color:#ef4444;">데이터를 불러올 수 없습니다.</td></tr>';
    }
  };

  const deleteNews = async (id) => {
    if (!confirm('정말로 이 소식을 삭제하시겠습니까? (이 작업은 되돌릴 수 없습니다)')) return;

    try {
      const res = await fetch(`${API_BASE}/api/news/${id}`, { method: 'DELETE' });
      if (!res.ok) throw new Error('Delete failed');

      alert('소식이 성공적으로 삭제되었습니다.');
      fetchAdminNews(); // Refresh list
    } catch (err) {
      console.error(err);
      alert('삭제 중 오류가 발생했습니다.');
    }
  };

  window.deleteNewsAction = deleteNews; // Expose to global for inline onclick

  const renderTable = () => {
    const filterValue = filterSelect ? filterSelect.value : 'all';

    let filtered = allNews;
    if (filterValue !== 'all') {
      filtered = allNews.filter(n => n.category === filterValue);
    }

    if (filtered.length === 0) {
      tbody.innerHTML = '<tr><td colspan="5" style="text-align:center;">등록된 소식이 없습니다.</td></tr>';
      return;
    }

    tbody.innerHTML = filtered.map((n, i) => {
      const displayDate = new Date(n.created_at).toLocaleString('ko-KR', {
        year: 'numeric', month: '2-digit', day: '2-digit',
        hour: '2-digit', minute: '2-digit'
      });
      return `
        <tr>
          <td>${n.id}</td>
          <td><span style="color:var(--accent-blue-light); font-weight:600;">${n.category}</span></td>
          <td style="font-weight:600;">${n.title}</td>
          <td style="color:var(--text-secondary);">${displayDate}</td>
          <td style="text-align:right;">
            <a href="/admin/news/edit?id=${n.id}" class="btn-secondary" data-link style="padding:4px 8px; font-size:12px; margin-right:4px;">수정</a>
            <button class="btn-secondary" style="padding:4px 8px; font-size:12px; border-color:#ef4444; color:#ef4444;" onclick="deleteNewsAction(${n.id})">삭제</button>
          </td>
        </tr>
      `;
    }).join('');
  };

  if (filterSelect) {
    filterSelect.addEventListener('change', renderTable);
  }

  if (refreshBtn) {
    refreshBtn.addEventListener('click', fetchAdminNews);
  }

  // Initial Fetch
  fetchAdminNews();
}

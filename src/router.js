/* ============================================================
   웹3 사관학교 — SPA Router (History API)
   ============================================================ */

import { renderHome } from './pages/home.js';
import { renderVision } from './pages/vision.js';
import { renderCurriculum } from './pages/curriculum.js';
import { renderCareer } from './pages/career.js';
import { renderNews } from './pages/news.js';
import { renderAdminConsultations } from './pages/admin-consultations.js';
import { renderAdminNews } from './pages/admin-news.js';
import { renderAdminNewsNew } from './pages/admin-news-new.js';

const routes = {
    '/': renderHome,
    '/vision': renderVision,
    '/curriculum': renderCurriculum,
    '/career': renderCareer,
    '/news': renderNews,
    '/admin/consultations': renderAdminConsultations,
    '/admin/news': renderAdminNews,
    '/admin/news/new': renderAdminNewsNew,
    '/admin/news/edit': renderAdminNewsNew,
};

const pageMeta = {
    '/': {
        title: '웹3 사관학교 | 실전 웹3·AI 자산관리사 양성 과정',
        description: '웹3·AI 시대, 단순한 사용자가 아닌 주권을 쥔 관리자가 되십시오. 실전 웹3 기술 세미나 및 자산관리사 양성 과정.',
    },
    '/vision': {
        title: '비전 | 웹3 사관학교',
        description: '웹3 사관학교의 교육 철학과 비전을 소개합니다. 블록체인 기술 기반의 자산관리 전문가 양성.',
    },
    '/curriculum': {
        title: '교육 과정 | 웹3 사관학교',
        description: '기초훈련반, 생도육성반, 장교임관반 3단계 교육 과정. 실전 블록체인 기술과 자산관리 능력을 배양합니다.',
    },
    '/career': {
        title: '커리어 | 웹3 사관학교',
        description: '웹3 사관학교 센터장 모집 및 커리어 안내. 웹3 자산관리사로서의 새로운 경력을 시작하세요.',
    },
    '/news': {
        title: '소식 | 웹3 사관학교',
        description: '웹3 사관학교의 최신 소식, 공지사항 및 이벤트 정보를 확인하세요.',
    },
};

let currentPath = null;

/**
 * Navigate to a given path with fade transition.
 * @param {string} path - The route path, e.g. '/vision'
 * @param {boolean} pushState - Whether to push to history (false for popstate)
 */
export async function navigate(path, pushState = true) {
    const app = document.getElementById('app');
    if (!app) return;

    // Normalise path
    path = path || '/';
    if (path !== '/' && path.endsWith('/')) path = path.slice(0, -1);

    // Skip if already on same page
    if (path === currentPath) return;

    const renderFn = routes[path] || routes['/'];

    // ---- Fade Out ----
    app.classList.remove('page-enter');
    app.classList.add('page-exit');

    await waitForTransition(app, 300);

    // ---- Swap Content ----
    app.innerHTML = renderFn();
    currentPath = path;

    if (pushState) {
        history.pushState({ path }, '', path);
    }

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'instant' });

    // ---- Fade In ----
    // Force reflow
    void app.offsetHeight;
    app.classList.remove('page-exit');
    app.classList.add('page-enter');

    // Update active nav link
    updateActiveNav(path);

    // Update page title & meta description for SEO
    updatePageMeta(path);

    // Dispatch custom event so main.js can re-init animations
    window.dispatchEvent(new CustomEvent('page:rendered', { detail: { path } }));
}

/**
 * Helper to wait for CSS transition / a given duration.
 */
function waitForTransition(el, ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Update document title and meta description based on route.
 */
function updatePageMeta(path) {
    const meta = pageMeta[path] || pageMeta['/'];
    if (meta) {
        document.title = meta.title;
        const descTag = document.querySelector('meta[name="description"]');
        if (descTag) descTag.setAttribute('content', meta.description);
        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) ogTitle.setAttribute('content', meta.title);
        const ogDesc = document.querySelector('meta[property="og:description"]');
        if (ogDesc) ogDesc.setAttribute('content', meta.description);
    }
}

/**
 * Highlight the active navigation link.
 */
function updateActiveNav(path) {
    document.querySelectorAll('.nav-link').forEach(link => {
        const href = link.getAttribute('href');
        if (href === path || (path === '/' && href === '/')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

/**
 * Initialise the router: attach link listeners + popstate + initial render.
 */
export function initRouter() {
    // Intercept all data-link clicks
    document.body.addEventListener('click', (e) => {
        const link = e.target.closest('[data-link]');
        if (!link) return;

        e.preventDefault();
        const href = link.getAttribute('href');
        navigate(href);

        // Close mobile menu if open
        const menu = document.getElementById('navMenu');
        const btn = document.getElementById('mobileMenuBtn');
        if (menu) menu.classList.remove('open');
        if (btn) btn.classList.remove('active');
    });

    // Handle browser back / forward
    window.addEventListener('popstate', (e) => {
        const path = e.state?.path || window.location.pathname;
        navigate(path, false);
    });

    // Initial render based on current URL
    let initialPath = window.location.pathname;
    if (initialPath !== '/' && initialPath.endsWith('/')) {
        initialPath = initialPath.slice(0, -1);
    }

    history.replaceState({ path: initialPath }, '', initialPath + window.location.search);
    const app = document.getElementById('app');
    const renderFn = routes[initialPath] || routes['/'];
    app.innerHTML = renderFn();
    currentPath = initialPath;
    app.classList.add('page-enter');
    updateActiveNav(initialPath);

    // Fire event for initial page
    window.dispatchEvent(new CustomEvent('page:rendered', { detail: { path: initialPath } }));
}

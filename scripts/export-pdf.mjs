/**
 * Export each page of the website to a separate PDF file.
 * Usage: node scripts/export-pdf.mjs
 * Requires: npm install --save-dev puppeteer
 * Prerequisite: dev server running at http://localhost:5173
 */
import puppeteer from 'puppeteer';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const delay = ms => new Promise(r => setTimeout(r, ms));

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUTPUT_DIR = path.resolve(__dirname, '..', 'pdf-export');

const pages = [
    { path: '/', filename: '01_홈_메인페이지.pdf' },
    { path: '/vision', filename: '02_비전.pdf' },
    { path: '/curriculum', filename: '03_교육과정.pdf' },
    { path: '/career', filename: '04_커리어.pdf' },
    { path: '/news', filename: '05_소식.pdf' },
];

const BASE_URL = 'http://localhost:5173';

async function exportPDFs() {
    // Create output directory
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    }

    console.log('🚀 Launching browser...');
    const browser = await puppeteer.launch({
        headless: 'new',
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });

    for (const pg of pages) {
        const url = `${BASE_URL}${pg.path}`;
        const outputPath = path.join(OUTPUT_DIR, pg.filename);

        console.log(`📄 Exporting: ${url} → ${pg.filename}`);

        const page = await browser.newPage();

        // Set a wide desktop viewport
        await page.setViewport({ width: 1440, height: 900 });

        await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });

        // Wait for animations to complete
        await delay(2000);

        // Close any popups if present
        try {
            await page.evaluate(() => {
                const popup = document.getElementById('ambassadorPopup');
                if (popup) popup.classList.remove('show');
                const overlay = document.querySelectorAll('.popup-overlay.show');
                overlay.forEach(el => el.classList.remove('show'));
            });
        } catch (e) { /* ignore */ }

        // Force all [data-animate] elements to be visible
        await page.evaluate(() => {
            document.querySelectorAll('[data-animate]').forEach(el => {
                el.style.opacity = '1';
                el.style.transform = 'none';
            });
        });

        await delay(500);

        // Generate PDF
        await page.pdf({
            path: outputPath,
            format: 'A4',
            printBackground: true,
            margin: { top: '0', right: '0', bottom: '0', left: '0' },
            preferCSSPageSize: false,
        });

        await page.close();
        console.log(`  ✅ Saved: ${outputPath}`);
    }

    await browser.close();
    console.log(`\n🎉 Done! All PDFs saved to: ${OUTPUT_DIR}`);
}

exportPDFs().catch(err => {
    console.error('❌ Error:', err);
    process.exit(1);
});

/* ── COPYRIGHT YEAR ─────────────────────────────────── */
document.getElementById('copyright-text').textContent =
`© ${new Date().getFullYear()} REKURI · Rønning Games ENK`;

/* ── LANGUAGE SWITCHING ─────────────────────────────── */
function setLang(lang) {
document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
});
document.documentElement.lang = lang === 'no' ? 'no' : 'en';
document.querySelectorAll('[data-no][data-en]').forEach(el => {
    const text = el.dataset[lang];
    if (text) el.innerHTML = text;
});
}

/* ── SCROLL REVEAL ──────────────────────────────────── */
const reveals = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
});
}, { threshold: 0.08 });
reveals.forEach(el => io.observe(el));
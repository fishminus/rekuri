document.documentElement.classList.add('js');

function setLang(lang) {
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-no][data-en]').forEach(el => {
    el.innerHTML = el.dataset[lang];
  });
  document.querySelectorAll('.lang-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.lang === lang);
  });
  try { localStorage.setItem('lang', lang); } catch (e) {}
}

document.addEventListener('DOMContentLoaded', () => {
  let saved = 'no';
  try { saved = localStorage.getItem('lang') || 'no'; } catch (e) {}
  setLang(saved === 'en' ? 'en' : 'no');

  const year = document.getElementById('copyright-text');
  if (year) year.textContent = '© ' + new Date().getFullYear() + ' REKURI · Rønning Games ENK';

  const items = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) { items.forEach(i => i.classList.add('in')); return; }
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: 0.12 });
  items.forEach(i => io.observe(i));
});

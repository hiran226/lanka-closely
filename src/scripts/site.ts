// Theme toggle: auto -> opposite of current -> back to auto
const root = document.documentElement;
const btn = document.querySelector<HTMLButtonElement>('.theme-btn');
function systemDark() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
}
btn?.addEventListener('click', () => {
  const current = root.dataset.theme || (systemDark() ? 'dark' : 'light');
  const next = current === 'dark' ? 'light' : 'dark';
  root.dataset.theme = next;
  try { localStorage.setItem('lc-theme', next); } catch {}
});

// Reveal on scroll
const els = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          e.target.classList.add('is-in');
          io.unobserve(e.target);
        }
      }
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.05 }
  );
  els.forEach((el) => io.observe(el));
} else {
  els.forEach((el) => el.classList.add('is-in'));
}

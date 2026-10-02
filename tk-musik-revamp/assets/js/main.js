const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');
if (menuBtn && nav) {
  menuBtn.setAttribute('type', 'button');
  menuBtn.setAttribute('aria-label', 'Open navigation');
  menuBtn.setAttribute('aria-expanded', 'false');
  menuBtn.setAttribute('aria-controls', 'site-navigation');
  nav.id = 'site-navigation';

  const closeMenu = () => {
    nav.classList.remove('open');
    document.body.classList.remove('menu-open');
    menuBtn.setAttribute('aria-expanded', 'false');
    menuBtn.setAttribute('aria-label', 'Open navigation');
    menuBtn.textContent = '☰';
  };

  menuBtn.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    document.body.classList.toggle('menu-open', isOpen);
    menuBtn.setAttribute('aria-expanded', String(isOpen));
    menuBtn.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
    menuBtn.textContent = isOpen ? '×' : '☰';
  });

  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && nav.classList.contains('open')) {
      closeMenu();
      menuBtn.focus();
    }
  });
  window.addEventListener('resize', () => {
    if (window.innerWidth > 980) closeMenu();
  });
}

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Static-host friendly form handling. Replace the email below or plug in Formspree/Netlify Forms if desired.
document.querySelectorAll('form[data-email-form]').forEach(form => {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const data = new FormData(form);
    const name = `${data.get('firstName') || ''} ${data.get('lastName') || ''}`.trim();
    const message = data.get('message') || '';
    const email = data.get('email') || '';
    const phone = data.get('phone') || '';
    const subject = encodeURIComponent(`TK Musik inquiry from ${name || 'website visitor'}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\n${message}`);
    window.location.href = `mailto:tysoulmusic@gmail.com?subject=${subject}&body=${body}`;
  });
});

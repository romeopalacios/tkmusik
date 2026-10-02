const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');
if (menuBtn && nav) menuBtn.addEventListener('click', () => nav.classList.toggle('open'));

document.querySelectorAll('.nav a').forEach(a => a.addEventListener('click', () => nav?.classList.remove('open')));

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

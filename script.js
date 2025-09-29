// Simple carousel and accordion + dynamic year
const track = document.querySelector('.carousel__track');
const slides = Array.from(track?.children || []);
let idx = 0;
function updateCarousel() {
  if (!track) return;
  idx = (idx + slides.length) % slides.length;
  track.style.transform = `translateX(-${idx * 100}%)`;
}
document.querySelector('.carousel__prev')?.addEventListener('click', () => { idx--; updateCarousel(); });
document.querySelector('.carousel__next')?.addEventListener('click', () => { idx++; updateCarousel(); });
setInterval(() => { idx++; updateCarousel(); }, 5000);

document.querySelectorAll('.accordion__item').forEach(btn => {
  btn.addEventListener('click', () => {
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!expanded));
  });
});

document.getElementById('year').textContent = new Date().getFullYear();
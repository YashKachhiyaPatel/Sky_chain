// Sticky effect on scroll
window.addEventListener('scroll', function(){
  document.querySelectorAll('.reveal').forEach(el=>{
    const top = el.getBoundingClientRect().top;
    if(top < window.innerHeight - 100){
      el.classList.add('active');
    }
  });
});

// Mobile menu toggle
function toggleMenu(){
  const nav = document.getElementById('nav-links');
  nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
}
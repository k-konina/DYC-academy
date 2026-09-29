
const toggle=document.querySelector('.nav-toggle');
const nav=document.querySelector('nav');
if(toggle) toggle.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('.dropdown > a').forEach(a=>{
  a.addEventListener('click',e=>{
    if(window.innerWidth<=760){e.preventDefault();a.parentElement.classList.toggle('open');}
  });
});
document.querySelectorAll('.filter-btn').forEach(btn=>{
  btn.addEventListener('click',()=>{
    document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    const type=btn.dataset.team;
    document.querySelectorAll('.player-card').forEach(card=>{
      card.style.display=(type==='all'||card.dataset.team===type)?'block':'none';
    });
  });
});

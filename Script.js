// Collapsible sections
document.querySelectorAll('.collapser').forEach(ctrl => {
  ctrl.addEventListener('click', function(){
    const targetId = this.getAttribute('data-target');
    const el = document.getElementById(targetId);
    if(!el) return;
    const containerSection = this.closest('.resume-section');
    containerSection.classList.toggle('collapsed');
    el.style.display = (el.style.display === 'none') ? 'block' : 'none';
  });
  const t = ctrl.getAttribute('data-target');
  const el = document.getElementById(t);
  if(el) el.style.display = 'block';
});

// Theme toggle
const themeBtn = document.getElementById('toggleTheme');
themeBtn.addEventListener('click', function(){
  document.documentElement.classList.toggle('dark');
  const isDark = document.documentElement.classList.contains('dark');
  themeBtn.textContent = isDark ? 'Light mode' : 'Dark mode';
});

// Print / Download
document.getElementById('printBtn').addEventListener('click', function(){
  window.print();
});

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
  if(e.altKey && e.key.toLowerCase() === 'd') themeBtn.click();
  if(e.altKey && e.key.toLowerCase() === 'p') window.print();
});

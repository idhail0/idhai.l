const toggleBtn = document.getElementById('toggle-btn');
const sidebar = document.getElementById('sidebar');
const mainContent = document.getElementById('main-content');

toggleBtn.addEventListener('click', (event) => {
    event.stopPropagation(); 
    sidebar.classList.toggle('open');
    toggleBtn.classList.toggle('open');
});

document.addEventListener('click', (event) => {
    if (sidebar.classList.contains('open') && !sidebar.contains(event.target)) {
        sidebar.classList.remove('open');
        toggleBtn.classList.remove('open');
    }
});

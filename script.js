// Mobile Menu
const menuBtn = document.getElementById('menuBtn');
const navMenu = document.getElementById('navMenu');

menuBtn.onclick = () => {
    navMenu.classList.toggle('open');
};

// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
themeToggle.onclick = () => {
    document.body.classList.toggle('dark');
};

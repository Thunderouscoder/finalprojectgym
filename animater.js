

// Smooth Scrolling for Navigation Links
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId) || document.querySelector(`[name=${targetId}]`);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                });
            }
        });
    });
});

// Highlight Active Navigation Link
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('main section');
    const navLinks = document.querySelectorAll('nav ul li a');

    let currentSectionId = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop - sectionHeight / 2) {
            currentSectionId = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === currentSectionId) {
            link.classList.add('active');
        }
    });
});

// Responsive Navigation Toggle (Optional)
const toggleMenu = document.createElement('button');
toggleMenu.innerText = '☰';
toggleMenu.style.cssText = `
    display: none;
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 24px;
    background: none;
    border: none;
    color: white;
    cursor: pointer;
    z-index: 1000;
`;

document.querySelector('header').appendChild(toggleMenu);

toggleMenu.addEventListener('click', () => {
    const nav = document.querySelector('nav ul');
    nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
});

// Add Responsive Menu Logic
window.addEventListener('resize', () => {
    const nav = document.querySelector('nav ul');
    if (window.innerWidth > 768) {
        nav.style.display = 'flex';
        toggleMenu.style.display = 'none';
    } else {
        nav.style.display = 'none';
        toggleMenu.style.display = 'block';
    }
});

window.dispatchEvent(new Event('resize'));

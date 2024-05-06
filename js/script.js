document.addEventListener('DOMContentLoaded', function () {
    // Smooth scroll to section when clicking on navigation links
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            scrollToSection(targetSection);
        });
    });

    // Scroll to top when clicking on the header title (Your Name)
    const headerTitle = document.querySelector('header h1');
    headerTitle.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Add animation effect when scrolling to each section
    const sections = document.querySelectorAll('.section');

    window.addEventListener('scroll', function () {
        sections.forEach(section => {
            if (isInViewport(section)) {
                section.classList.add('animate');
            }
        });
    });

    // Helper function to check if an element is in the viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Helper function to smoothly scroll to a section
    function scrollToSection(section) {
        window.scrollTo({
            top: section.offsetTop,
            behavior: 'smooth'
        });
    }
});
// Ensure the DOM is fully loaded before executing JavaScript code
document.addEventListener('DOMContentLoaded', function() {
    // Toggle navigation visibility when the toggle button is clicked
    document.getElementById('toggleNav').addEventListener('click', function() {
        var nav = document.getElementById('nav');
        if (nav) {
            if (nav.style.display === 'none' || nav.style.display === '') {
                nav.style.display = 'block';
            } else {
                nav.style.display = 'none';
            }
        } else {
            console.error('Navigation element not found!');
        }
    });
});



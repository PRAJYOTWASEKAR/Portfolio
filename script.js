document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling
    const links = document.querySelectorAll('a[href^="#"]');
    for (const link of links) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({
                behavior: 'smooth'
            });
        });
    }

    // Accordion
    const acc = document.getElementsByClassName('accordion');
    for (let i = 0; i < acc.length; i++) {
        acc[i].addEventListener('click', function() {
            this.classList.toggle('active');
            const panel = this.nextElementSibling;
            if (panel.style.display === 'block') {
                panel.style.display = 'none';
            } else {
                panel.style.display = 'block';
            }
        });
    }

    // Modal for Gallery
    const images = document.querySelectorAll('.gallery img');
    const modal = document.createElement('div');
    modal.classList.add('modal');
    document.body.appendChild(modal);

    images.forEach(image => {
        image.addEventListener('click', () => {
            modal.classList.add('open');
            const img = document.createElement('img');
            img.src = image.src;
            while (modal.firstChild) {
                modal.removeChild(modal.firstChild);
            }
            modal.appendChild(img);
        });
    });

    modal.addEventListener('click', () => {
        modal.classList.remove('open');
    });
    const tabs = document.querySelectorAll('.tab');
    const sections = document.querySelectorAll('section');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = tab.getAttribute('data-target');
            const section = document.getElementById(target);
            const offset = section.offsetTop;

            window.scrollTo({
                top: offset,
                behavior: 'smooth'
            });

            // Highlight active tab
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
        });
    });

    // Highlight current tab based on scroll position
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;

        sections.forEach(section => {
            if (scrollPosition >= section.offsetTop - 100 && scrollPosition < section.offsetTop + section.offsetHeight - 100) {
                const target = section.id;
                tabs.forEach(tab => {
                    if (tab.getAttribute('data-target') === target) {
                        tabs.forEach(t => t.classList.remove('active'));
                        tab.classList.add('active');
                    }
                });
            }
        });
    });
});

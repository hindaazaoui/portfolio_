// === CURSEUR NEO-BRUTAL ===
document.addEventListener('DOMContentLoaded', function() {
    // Créer les éléments du curseur
    const cursor = document.createElement('div');
    cursor.className = 'cursor';
    document.body.appendChild(cursor);

    const cursorFollower = document.createElement('div');
    cursorFollower.className = 'cursor-follower';
    document.body.appendChild(cursorFollower);

    let mouseX = 0;
    let mouseY = 0;
    let followerX = 0;
    let followerY = 0;

    // Suivre la position de la souris
    document.addEventListener('mousemove', function(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        // Curseur principal suit directement (ajusté pour centrer le carré)
        cursor.style.left = mouseX - 7 + 'px';
        cursor.style.top = mouseY - 7 + 'px';
    });

    // Animation fluide du carré suiveur
    function animateFollower() {
        const speed = 0.12;
        
        followerX += (mouseX - followerX) * speed;
        followerY += (mouseY - followerY) * speed;
        
        cursorFollower.style.left = followerX - 23 + 'px';
        cursorFollower.style.top = followerY - 23 + 'px';
        
        requestAnimationFrame(animateFollower);
    }
    animateFollower();

    // Effets hover
    const interactiveElements = document.querySelectorAll('a, button, .project, .contact-quick-item');
    
    interactiveElements.forEach(function(el) {
        el.addEventListener('mouseenter', function() {
            cursor.classList.add('hover');
            cursorFollower.classList.add('hover');
        });
        
        el.addEventListener('mouseleave', function() {
            cursor.classList.remove('hover');
            cursorFollower.classList.remove('hover');
        });
    });

    // Effet click
    document.addEventListener('mousedown', function() {
        cursor.classList.add('click');
        cursorFollower.classList.add('click');
    });

    document.addEventListener('mouseup', function() {
        cursor.classList.remove('click');
        cursorFollower.classList.remove('click');
    });

    // Changer couleur sur fond noir
    function updateCursorOnDark() {
        const darkSections = document.querySelectorAll('.contact-quick, .stats, footer');
        
        darkSections.forEach(function(section) {
            section.addEventListener('mouseenter', function() {
                cursor.classList.add('cursor-on-dark');
                cursorFollower.classList.add('cursor-follower-on-dark');
            });
            
            section.addEventListener('mouseleave', function() {
                cursor.classList.remove('cursor-on-dark');
                cursorFollower.classList.remove('cursor-follower-on-dark');
            });
        });
    }
    updateCursorOnDark();

    // === SCROLL ANIMATIONS ===
    const fadeElements = document.querySelectorAll('.project, .about, .contact-quick');
    
    fadeElements.forEach(function(el) {
        el.classList.add('fade-in');
    });

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    fadeElements.forEach(function(el) {
        observer.observe(el);
    });

    // === SMOOTH SCROLL ===
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

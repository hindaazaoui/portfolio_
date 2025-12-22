// === CURSOR ARROW ===
document.addEventListener('DOMContentLoaded', function() {
    const cursor = document.createElement('div');
    cursor.className = 'cursor';
    cursor.innerHTML = '↗';
    document.body.appendChild(cursor);

    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;

    document.addEventListener('mousemove', function(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animateCursor() {
        cursorX += (mouseX - cursorX) * 0.15;
        cursorY += (mouseY - cursorY) * 0.15;
        cursor.style.left = cursorX - 12 + 'px';
        cursor.style.top = cursorY - 12 + 'px';
        requestAnimationFrame(animateCursor);
    }
    animateCursor();

    const interactiveElements = document.querySelectorAll('a, button, .nav-contact, .project, .contact-link, .links-bar a, .nav-arrows a, .mockup-link');
    interactiveElements.forEach(function(el) {
        el.addEventListener('mouseenter', function() {
            cursor.classList.add('hover');
        });
        el.addEventListener('mouseleave', function() {
            cursor.classList.remove('hover');
        });
    });
});

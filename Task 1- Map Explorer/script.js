// script.js

document.querySelectorAll('.gif-button').forEach(button => {
    const img = button.querySelector('img');
    const staticSrc = button.getAttribute('data-static');
    const animatedSrc = button.getAttribute('data-animated');

    button.addEventListener('mouseover', () => {
        img.src = animatedSrc;
    });

    button.addEventListener('mouseout', () => {
        img.src = staticSrc;
    });
});
document.getElementById('menu-btn').addEventListener('click', function() {
    document.getElementById('left-tab').classList.toggle('open');
    document.getElementById('right-tab').classList.toggle('open');
});

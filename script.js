<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>


document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.classList.add('rotate'); // Add rotation class on mouse enter
    });
    card.addEventListener('mouseleave', () => {
        card.classList.remove('rotate'); // Remove rotation class on mouse leave
    });
});



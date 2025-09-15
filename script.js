// Animation d'apparition au scroll + effet rebond + traînée de particules magique

document.addEventListener("DOMContentLoaded", () => {
    // Apparition des cards au scroll
    const cards = document.querySelectorAll('.card');
    function showCardsOnScroll() {
        const triggerBottom = window.innerHeight * 0.95;
        cards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;
            if (cardTop < triggerBottom) {
                card.classList.add('visible');
            }
        });
    }
    window.addEventListener('scroll', showCardsOnScroll);
    showCardsOnScroll();

    // Effet rebond au clic sur une card
    cards.forEach(card => {
        card.addEventListener('click', () => {
            card.animate([
                { transform: 'scale(1)' },
                { transform: 'scale(0.96)' },
                { transform: 'scale(1.04)' },
                { transform: 'scale(1)' }
            ], {
                duration: 350,
                easing: 'cubic-bezier(.4,2,.6,1)'
            });
        });
    });

    // Traînée de particules magique
    document.addEventListener('mousemove', function(e) {
        const particle = document.createElement('div');
        particle.className = 'magic-particle';
        particle.style.left = e.clientX + 'px';
        particle.style.top = e.clientY + 'px';
        document.body.appendChild(particle);

        setTimeout(() => {
            particle.style.opacity = '0';
            particle.style.transform += ' scale(1.5)';
        }, 10);

        setTimeout(() => {
            particle.remove();
        }, 500);
    });
});

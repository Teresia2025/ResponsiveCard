document.addEventListener('DOMContentLoaded', () => {
    
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.backgroundColor = getRandomColor();
        });

        card.addEventListener('mouseleave', () => {
            card.style.backgroundColor = '';
        });

        const expandButton = card.querySelector('.expand-button');
        const details = card.querySelector('.details');

        expandButton.addEventListener('click', () => {
            if (details.style.display === 'none' || details.style.display === '') {
                details.style.display = 'block';
                expandButton.textContent = 'Less Details';
            } else {
                details.style.display = 'none';
                expandButton.textContent = 'More Details';
            }
        });
    });
});

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
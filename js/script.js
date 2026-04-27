// Select multiple items in the category setup page
document.addEventListener('DOMContentLoaded', () => {
    const setupGrid = document.getElementById('setup-grid');
    
    if (setupGrid) {
        const items = setupGrid.querySelectorAll('.setup-item');
        
        items.forEach(item => {
            item.addEventListener('click', () => {
                item.classList.toggle('selected');
            });
        });
    }

    // Add animation to the custom cursor to make it look alive
    const cursor = document.querySelector('.custom-cursor');
    if (cursor) {
        let yPos = 80;
        let direction = 1;
        
        setInterval(() => {
            yPos += 0.5 * direction;
            if (yPos > 90 || yPos < 70) {
                direction *= -1;
            }
            cursor.style.top = yPos + 'px';
        }, 50);
    }
});

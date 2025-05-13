// JavaScript for opening and closing description boxes
document.addEventListener('DOMContentLoaded', function() {
    const contentElements = document.querySelectorAll('.content');
    const closeButtons = document.querySelectorAll('.close-btn');
    const overlay = document.querySelector('.overlay');
    
    function closeAllDescriptionBoxes() {
        document.querySelectorAll('.description-box').forEach(box => {
            box.classList.remove('active');
        });
        overlay.classList.remove('active');
    }
    
    // Add click event listener to each content element
    contentElements.forEach(content => {
        content.addEventListener('click', function(e) {
            e.stopPropagation();
            
            closeAllDescriptionBoxes();

            const descriptionBox = this.nextElementSibling;
            descriptionBox.classList.add('active');
            
            if (window.innerWidth <= 768) {
                overlay.classList.add('active');
            }
        });
    });
    
    // Add click event listener to close buttons
    closeButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            closeAllDescriptionBoxes();
        });
    });
    
    // Close description box when clicking outside or on overlay
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.content') && !e.target.closest('.description-box') || e.target.classList.contains('overlay')) {
            closeAllDescriptionBoxes();
        }
    });
    
    // Handle escape key press to close description boxes
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeAllDescriptionBoxes();
        }
    });
});
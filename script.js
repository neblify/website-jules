document.addEventListener('DOMContentLoaded', function() {
    // Find the hero section's call-to-action button
    const heroButton = document.querySelector('.hero button');

    if (heroButton) {
        // Store the original size
        const originalTransform = getComputedStyle(heroButton).transform;
        const originalTransition = getComputedStyle(heroButton).transition;

        // Apply a slight scale increase on mouse hover
        heroButton.addEventListener('mouseenter', function() {
            heroButton.style.transition = 'transform 0.2s ease-in-out';
            heroButton.style.transform = 'scale(1.1)';
        });

        // Return to original size when mouse leaves
        heroButton.addEventListener('mouseleave', function() {
            heroButton.style.transform = originalTransform;
            // Optional: reset transition if you want it to only apply on hover
            // heroButton.style.transition = originalTransition;
        });
    } else {
        console.log("Hero button not found. Make sure your HTML is correct.");
    }
});

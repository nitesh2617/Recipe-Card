document.addEventListener('DOMContentLoaded', () => {
    // Ingredient List Toggle
    const toggleButtons = document.querySelectorAll('.toggle-ingredients');

    toggleButtons.forEach(button => {
        button.addEventListener('click', () => {
            const cardContent = button.closest('.card-content');
            const ingredientsSection = cardContent.querySelector('.ingredients-section');
            const preparationSection = cardContent.querySelector('.preparation-section');

            if (ingredientsSection && preparationSection) {
                ingredientsSection.classList.toggle('hidden');
                preparationSection.classList.toggle('hidden');

                if (ingredientsSection.classList.contains('hidden')) {
                    button.textContent = 'Show Ingredients';
                } else {
                    button.textContent = 'Show Preparation';
                }
            }
        });
    });
})

    // Recipe Rating
    const recipeRatings = document.querySelectorAll('.recipe-rating');

    recipeRatings.forEach(ratingContainer => {
        const stars = ratingContainer.querySelectorAll('.star');
        const initialRating = parseInt(ratingContainer.dataset.rating);

        // Set initial stars
        updateStars(stars, initialRating);

        stars.forEach(star => {
            star.addEventListener('click', (event) => {
                const value = parseInt(event.target.dataset.value);
                ratingContainer.dataset.rating = value;
                updateStars(stars, value);
            
            });

            star.addEventListener('mouseover', (event) => {
                const value = parseInt(event.target.dataset.value);
                highlightStars(stars, value);
            });

            star.addEventListener('mouseout', () => {
                const currentRating = parseInt(ratingContainer.dataset.rating);
                updateStars(stars, currentRating);
            });
        });
    });

    function updateStars(stars, rating) {
        stars.forEach(star => {
            if (parseInt(star.dataset.value) <= rating) {
                star.classList.add('active');
            } else {
                star.classList.remove('active');
            }
        });
    }

    function highlightStars(stars, rating) {
        stars.forEach(star => {
            if (parseInt(star.dataset.value) <= rating) {
                star.style.color = '#FFC107'; 
            } else {
                star.style.color = '#ccc'; 
            }
        });
    }
    
    const filterButtons = document.querySelectorAll('.filter-controls button');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const selectedCuisine = button.dataset.filter;
            const recipeCards = document.querySelectorAll('.recipe-card');

            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            recipeCards.forEach(card => {
                if (selectedCuisine === 'all' || card.dataset.cuisine === selectedCuisine) {
                    card.style.display = 'flex'; 
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
    
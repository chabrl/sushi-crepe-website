// Google Reviews Handler
function loadGoogleReviews() {
    // Sample reviews data structure (to be replaced with actual API call)
    const reviews = [
        {
            author_name: "John Doe",
            rating: 5,
            relative_time_description: "il y a une semaine",
            text: "Excellent service et des crêpes délicieuses! La fusion avec le sushi est vraiment unique et savoureuse.",
            profile_photo_url: "https://lh3.googleusercontent.com/a/default-user"
        },
        {
            author_name: "Jane Smith",
            rating: 5,
            relative_time_description: "il y a 2 semaines",
            text: "Une expérience culinaire unique! J'adore le concept de fusion entre les crêpes et le sushi. Le café est également excellent.",
            profile_photo_url: "https://lh3.googleusercontent.com/a/default-user"
        },
        {
            author_name: "Marie Dubois",
            rating: 5,
            relative_time_description: "il y a un mois",
            text: "Un endroit charmant avec un service impeccable. Les crêpes sont délicieuses et l'ambiance est très agréable.",
            profile_photo_url: "https://lh3.googleusercontent.com/a/default-user"
        }
    ];

    const container = document.getElementById('reviews-container');
    
    reviews.forEach(review => {
        const stars = '★'.repeat(review.rating) + '☆'.repeat(5 - review.rating);
        
        const reviewElement = document.createElement('div');
        reviewElement.className = 'col-lg-4 col-md-6 mb-4';
        reviewElement.innerHTML = `
            <div class="review-card">
                <div class="review-header">
                    <img src="${review.profile_photo_url}" alt="${review.author_name}" class="reviewer-image">
                    <div class="reviewer-info">
                        <h5 class="reviewer-name">${review.author_name}</h5>
                        <div class="review-stars">${stars}</div>
                        <small class="text-muted">${review.relative_time_description}</small>
                    </div>
                </div>
                <p class="review-text">${review.text}</p>
            </div>
        `;
        
        container.appendChild(reviewElement);
    });
}

// Call the function when the document is loaded
document.addEventListener('DOMContentLoaded', loadGoogleReviews);

// Function to change language
function changeLanguage(lang) {
    // Save selected language
    localStorage.setItem('preferredLanguage', lang);
    document.documentElement.lang = lang;

    // Update all elements with data-translate attribute
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[lang][key];
            } else {
                element.innerHTML = translations[lang][key];
            }
        }
    });
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', () => {
    const storedLang = localStorage.getItem('preferredLanguage');
    // Always default to French if no language is stored
    const initialLang = storedLang || 'fr';
    changeLanguage(initialLang);
});

window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#7a9c6b';
    } else {
        navbar.style.backgroundColor = '#8eb37d';
    }

    const scrollToTopBtn = document.getElementById("scrollToTopBtn");
    if (window.scrollY > 200) {
        scrollToTopBtn.classList.add("show");
    } else {
        scrollToTopBtn.classList.remove("show");
    }
});

const backgroundImages = document.querySelectorAll('.background-image');
let currentImageIndex = 0;

function changeBackground() {
    backgroundImages[currentImageIndex].style.opacity = 0;
    currentImageIndex = (currentImageIndex + 1) % backgroundImages.length;
    backgroundImages[currentImageIndex].style.opacity = 1;
}

setInterval(changeBackground, 5000);

const config = {
    PLACE_ID: "ChIJS2cOAUWzt0wRy4P2tXhtQeA",
    GOOGLE_PLACES_API_KEY: "YOUR_API_KEY",
    EMAILJS: {
        PUBLIC_KEY: 'BsF2XyDg6-XHNp766',
        SERVICE_ID: 'service_c37hjuq',
        BIRTHDAY_TEMPLATE_ID: 'template_1esyqru',
        CONTACT_TEMPLATE_ID: 'template_d34tabl',
        NEWSLETTER_TEMPLATE_ID: 'template_d34tabl',
        TO_EMAIL: 'info@sushicrepe.ca'
    }
};

// Initialize EmailJS
emailjs.init(config.EMAILJS.PUBLIC_KEY);

// Popup notification function
function showPopup(type, titleFr, titleEn, messageFr, messageEn) {
    const popup = document.getElementById('popupNotification');
    const icon = popup.querySelector('.popup-icon');
    const title = popup.querySelector('.popup-title');
    const message = popup.querySelector('.popup-message');
    const currentLang = document.documentElement.lang;

    // Reset classes
    popup.className = 'popup-notification';
    icon.className = 'popup-icon fas';

    // Add appropriate classes
    popup.classList.add(type);
    icon.classList.add(type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle');
    icon.classList.add(type === 'success' ? 'success' : 'error');

    // Set content based on language
    title.textContent = currentLang === 'fr' ? titleFr : titleEn;
    message.textContent = currentLang === 'fr' ? messageFr : messageEn;

    // Show popup
    popup.classList.add('show');

    // Hide popup after 5 seconds
    setTimeout(() => {
        closePopup();
    }, 5000);
}

// Close popup function
function closePopup() {
    const popup = document.getElementById('popupNotification');
    popup.classList.remove('show');
}

document.addEventListener('DOMContentLoaded', function() {
    // Handle contact form submission
    document.getElementById('contact-form').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = this.querySelector('input[name="name"]').value;
        const email = this.querySelector('input[name="email"]').value;
        const message = this.querySelector('textarea[name="message"]').value;
        const currentLang = document.documentElement.lang;
        
        emailjs.send(config.EMAILJS.SERVICE_ID, config.EMAILJS.CONTACT_TEMPLATE_ID, {
            from_name: name,
            from_email: email,
            to_email: config.EMAILJS.TO_EMAIL,
            subject: currentLang === 'fr' ? 'Nouveau message de contact' : 'New Contact Message',
            message: message,
            type: 'contact'
        })
        .then(() => {
            showPopup(
                'success',
                'Message envoyé !',
                'Message sent!',
                'Merci de nous avoir contacté. Nous vous répondrons bientôt.',
                'Thank you for contacting us. We will respond soon.'
            );
            this.reset();
        })
        .catch(() => {
            showPopup(
                'error',
                'Erreur',
                'Error',
                'Une erreur est survenue. Veuillez réessayer plus tard.',
                'An error occurred. Please try again later.'
            );
        });
    });

    // Handle birthday subscription form
    const birthdayForm = document.getElementById('birthdayForm');
    if (birthdayForm) {
        const birthDateInput = document.getElementById('birthDate');
        if (birthDateInput) {
            // Set max date to today
            const today = new Date().toISOString().split('T')[0];
            birthDateInput.setAttribute('max', today);
        }

        birthdayForm.addEventListener('submit', async function(event) {
            event.preventDefault();
            const fullName = document.getElementById('fullName').value;
            const email = document.getElementById('birthdayEmail').value;
            const birthDate = document.getElementById('birthDate').value;
            const currentLang = document.documentElement.lang;

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showPopup(
                    'error',
                    'Email Invalide',
                    'Invalid Email',
                    'Veuillez entrer une adresse email valide.',
                    'Please enter a valid email address.'
                );
                return;
            }

            // Date validation
            const selectedDate = new Date(birthDate);
            const currentDate = new Date();
            if (selectedDate > currentDate) {
                showPopup(
                    'error',
                    'Date Invalide',
                    'Invalid Date',
                    'La date ne peut pas être dans le futur.',
                    'Date cannot be in the future.'
                );
                return;
            }

            try {
                await emailjs.send(
                    config.EMAILJS.SERVICE_ID,
                    config.EMAILJS.BIRTHDAY_TEMPLATE_ID,
                    {
                        to_email: config.EMAILJS.TO_EMAIL,
                        subscriber_name: fullName,
                        subscriber_email: email,
                        birth_date: birthDate,
                        language: currentLang,
                        subject: currentLang === 'fr' ? 'Nouvelle inscription anniversaire' : 'New Birthday Subscription'
                    }
                );

                showPopup(
                    'success',
                    'Inscription Réussie!',
                    'Subscription Successful!',
                    'Merci de votre inscription! Nous avons hâte de célébrer votre anniversaire avec vous.',
                    'Thank you for subscribing! We look forward to celebrating your birthday with you.'
                );
                birthdayForm.reset();

                // Store in localStorage for demo
                const birthdays = JSON.parse(localStorage.getItem('birthdays') || '[]');
                birthdays.push({ fullName, email, birthDate });
                localStorage.setItem('birthdays', JSON.stringify(birthdays));
            } catch (error) {
                console.error('Birthday subscription error:', error);
                showPopup(
                    'error',
                    'Erreur',
                    'Error',
                    'Une erreur s\'est produite. Veuillez réessayer plus tard.',
                    'An error occurred. Please try again later.'
                );
            }
        });
    }

    // Handle newsletter subscription
    document.getElementById('newsletter-form').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = this.querySelector('input[type="email"]').value;
        const currentLang = document.documentElement.lang;
        
        // Use the same template as contact form but with newsletter flag
        emailjs.send(config.EMAILJS.SERVICE_ID, config.EMAILJS.CONTACT_TEMPLATE_ID, {
            from_email: email,
            to_email: config.EMAILJS.TO_EMAIL,
            subject: currentLang === 'fr' ? 'Nouvelle inscription à l\'infolettre' : 'New Newsletter Subscription',
            message: currentLang === 'fr' 
                ? `Nouvelle inscription à l'infolettre de: ${email}` 
                : `New newsletter subscription from: ${email}`,
            type: 'newsletter'
        })
        .then(() => {
            showPopup(
                'success',
                'Inscription réussie !',
                'Subscription successful!',
                'Merci de vous être inscrit à notre infolettre.',
                'Thank you for subscribing to our newsletter.'
            );
            this.reset();
        })
        .catch(() => {
            showPopup(
                'error',
                'Erreur',
                'Error',
                'Une erreur est survenue. Veuillez réessayer plus tard.',
                'An error occurred. Please try again later.'
            );
        });
    });
});

// Function to load Google Reviews
async function loadGoogleReviews() {
    const reviewsContainer = document.getElementById('reviews-container');
    const currentLang = document.documentElement.lang;
    
    // Add loading spinner
    reviewsContainer.innerHTML = `
        <div class="reviews-loading">
            <div class="loading-spinner"></div>
            <p>${translations[currentLang].loading}</p>
        </div>
    `;

    // Function to create star rating HTML with animation delays
    const createStarRating = (rating) => {
        return `<div class="review-rating">
            ${Array.from({ length: 5 }, (_, i) => `
                <span class="star" style="animation-delay: ${i * 0.1}s">
                    ${i < rating ? '★' : '☆'}
                </span>
            `).join('')}
        </div>`;
    };

    // Function to format date with relative time
    const formatDate = (timestamp) => {
        const date = new Date(timestamp);
        const now = new Date();
        const diffTime = Math.abs(now - date);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        const diffMonths = Math.floor(diffDays / 30);
        const currentLang = document.documentElement.lang;

        if (diffDays <= 7) {
            if (diffDays === 0) return translations[currentLang].reviewToday;
            if (diffDays === 1) return translations[currentLang].reviewYesterday;
            return translations[currentLang].reviewDaysAgo.replace('{days}', diffDays);
        } else if (diffMonths < 1) {
            const weeks = Math.floor(diffDays / 7);
            const key = translations[currentLang].reviewWeeksAgo.split('|');
            return (weeks === 1 ? key[0] : key[1]).replace('{weeks}', weeks).trim();
        } else if (diffMonths < 12) {
            return translations[currentLang].reviewMonthsAgo.replace('{months}', diffMonths);
        } else {
            return new Intl.DateTimeFormat(currentLang === 'fr' ? 'fr-CA' : 'en-CA', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            }).format(date);
        }
    };

    // Function to truncate text with "Read more" functionality
    const truncateText = (text, maxLength = 150) => {
        if (text.length <= maxLength) return text;
        const truncated = text.substr(0, text.lastIndexOf(' ', maxLength));
        const currentLang = document.documentElement.lang;
        return `
            <span class="truncated-text">${truncated}...</span>
            <span class="full-text" style="display: none;">${text}</span>
            <button class="read-more-btn">${translations[currentLang].readMore}</button>
        `;
    };

    try {
        const response = await fetch(`https://maps.googleapis.com/maps/api/place/details/json?place_id=${config.PLACE_ID}&fields=reviews&key=${config.GOOGLE_PLACES_API_KEY}`);
        const data = await response.json();

        if (data.result && data.result.reviews) {
            const reviewsHTML = data.result.reviews
                .sort((a, b) => new Date(b.time) - new Date(a.time))
                .slice(0, 6)
                .map(review => `
                    <div class="col-lg-4 col-md-6 mb-4">
                        <div class="review-card">
                            <div class="review-header">
                                <img src="${review.profile_photo_url || 'assets/images/default-avatar.png'}" alt="${review.author_name}" class="reviewer-image">
                                <div class="reviewer-info">
                                    <h5 class="reviewer-name">${review.author_name}</h5>
                                    <div class="review-date">${formatDate(review.time * 1000)}</div>
                                </div>
                            </div>
                            ${createStarRating(review.rating)}
                            <div class="review-text">
                                ${truncateText(review.text)}
                            </div>
                        </div>
                    </div>
                `).join('');

            reviewsContainer.innerHTML = reviewsHTML;

            // Add event listeners for "Read more" buttons
            document.querySelectorAll('.read-more-btn').forEach(button => {
                button.addEventListener('click', function() {
                    const card = this.closest('.review-card');
                    card.querySelector('.truncated-text').style.display = 'none';
                    card.querySelector('.full-text').style.display = 'inline';
                    this.style.display = 'none';
                });
            });
        }
    } catch (error) {
        console.error('Error loading reviews:', error);
        reviewsContainer.innerHTML = `<p class="text-center text-danger">Error loading reviews</p>`;
    }
}

// Load reviews when the page is ready and when language changes
document.addEventListener('DOMContentLoaded', loadGoogleReviews);

// Add event listener for language change to reload reviews with new translations
const languageButtons = document.querySelectorAll('.language-btn');
languageButtons.forEach(button => {
    button.addEventListener('click', () => {
        setTimeout(loadGoogleReviews, 100); // Small delay to ensure translations are updated
    });
});

// Handle subscription form submission
document.getElementById('subscription-form').addEventListener('submit', function(event) {
    event.preventDefault();
    console.log('Subscription form submitted!');

     const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
       const birthday = document.getElementById('birthday').value;
    
    console.log('Name:', name);
    console.log('Email:', email);
     console.log('Birthday:', birthday);

    document.getElementById('subscription-form').reset();
});

const scrollToTopBtn = document.getElementById("scrollToTopBtn");
scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Initialize About Carousel
document.addEventListener('DOMContentLoaded', function() {
    const aboutCarousel = document.getElementById('aboutCarousel');
    if (aboutCarousel) {
        // Add fade effect
        aboutCarousel.classList.add('carousel-fade');

        // Create thumbnails container
        const thumbnailsContainer = document.createElement('div');
        thumbnailsContainer.className = 'carousel-thumbnails';
        aboutCarousel.after(thumbnailsContainer);

        // Get all carousel items
        const carouselItems = aboutCarousel.querySelectorAll('.carousel-item img');

        // Create thumbnails
        carouselItems.forEach((img, index) => {
            const thumbnail = document.createElement('img');
            thumbnail.src = img.src;
            thumbnail.alt = img.alt;
            thumbnail.className = 'carousel-thumbnail' + (index === 0 ? ' active' : '');
            thumbnail.addEventListener('click', () => {
                const carousel = bootstrap.Carousel.getInstance(aboutCarousel);
                carousel.to(index);
            });
            thumbnailsContainer.appendChild(thumbnail);
        });

        // Update active thumbnail when carousel slides
        aboutCarousel.addEventListener('slid.bs.carousel', function(event) {
            const thumbnails = thumbnailsContainer.querySelectorAll('.carousel-thumbnail');
            thumbnails.forEach(thumb => thumb.classList.remove('active'));
            thumbnails[event.to].classList.add('active');
        });

        // Add keyboard navigation
        document.addEventListener('keydown', function(event) {
            if (isElementInViewport(aboutCarousel)) {
                if (event.key === 'ArrowLeft') {
                    bootstrap.Carousel.getInstance(aboutCarousel).prev();
                } else if (event.key === 'ArrowRight') {
                    bootstrap.Carousel.getInstance(aboutCarousel).next();
                }
            }
        });

        // Add swipe support for mobile
        let touchStartX = 0;
        let touchEndX = 0;

        aboutCarousel.addEventListener('touchstart', function(event) {
            touchStartX = event.changedTouches[0].screenX;
        }, false);

        aboutCarousel.addEventListener('touchend', function(event) {
            touchEndX = event.changedTouches[0].screenX;
            handleSwipe();
        }, false);

        function handleSwipe() {
            const carousel = bootstrap.Carousel.getInstance(aboutCarousel);
            if (touchEndX < touchStartX - 50) {
                carousel.next();
            }
            if (touchEndX > touchStartX + 50) {
                carousel.prev();
            }
        }

        // Auto pause on hover
        aboutCarousel.addEventListener('mouseenter', function() {
            bootstrap.Carousel.getInstance(aboutCarousel).pause();
        });

        aboutCarousel.addEventListener('mouseleave', function() {
            bootstrap.Carousel.getInstance(aboutCarousel).cycle();
        });

        // Helper function to check if element is in viewport
        function isElementInViewport(el) {
            const rect = el.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        }

        // Lazy load images
        const lazyLoadImages = () => {
            const images = aboutCarousel.querySelectorAll('img[loading="lazy"]');
            images.forEach(img => {
                if (isElementInViewport(img)) {
                    img.src = img.dataset.src;
                    img.removeAttribute('loading');
                }
            });
        };

        // Listen for scroll events to trigger lazy loading
        window.addEventListener('scroll', lazyLoadImages);
        window.addEventListener('resize', lazyLoadImages);
        lazyLoadImages(); // Initial load
    }
});

// Initialize
function init() {
    updateLanguage();
    initializeReviewsCarousel();
    highlightCurrentDay();
}

// Highlight current day in business hours
function highlightCurrentDay() {
    const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    const today = new Date().getDay();
    const currentDayElement = document.querySelector(`.hours-row .day[data-translate="${days[today]}"]`);
    
    if (currentDayElement) {
        currentDayElement.closest('.hours-row').classList.add('current-day');
    }
}

// Event Listeners
document.addEventListener('DOMContentLoaded', init);

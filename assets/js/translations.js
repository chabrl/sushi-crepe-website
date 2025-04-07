// Define translations object in the global scope
const translations = {
    en: {
        // Navigation
        home: "Home",
        about: "About",
        contact: "Contact",
        orderNow: "Order Now",
        previous: "Previous",
        next: "Next",
        languageToggle: "FR",

        // Hero Section
        welcome: "Welcome to Sushi Crêpe & Coffee Shop",
        description: "Experience a unique fusion of flavors! From irresistible crepes to gourmet coffee, embark on a culinary journey that will awaken your senses.",

        // About Section
        aboutTitle: "Our Story",
        aboutDescription: "At Sushi Crêpe & Coffee Shop, every bite tells a story. We offer a unique variety of sweet and savory crepes, all prepared to order with fresh ingredients and a touch of creativity.",
        aboutText: "We are a family-owned crêperie located in the heart of Lennoxville, Sherbrooke, with a story as unique as our menu. It all started when my wife, a big sushi lover, asked me to buy some and bring them home. I decided to play a little joke on her by preparing a sweet crêpe inspired by sushi. To her surprise, she loved it! Her enthusiasm inspired us to incorporate this playful creation into our crêperie. Today, Sushi Crêpe & Coffee Shop stands out by blending creativity and tradition, offering both sweet and savory crepes made with the freshest ingredients. Our goal is to surprise and delight our customers with flavors that tell our story and bring a smile to their faces.",

        // Delivery Section
        delivery: "Order for Delivery",
        deliveryDesc: "Choose your preferred delivery service",
        uberDesc: "Fast and reliable delivery",
        doorDesc: "Convenient local delivery",
        skipDesc: "Canada's most reliable delivery",

        // Birthday Section
        birthdayTitle: "Birthday Special",
        birthdayDesc: "Sign up for a special birthday surprise!",
        birthdayName: "Full Name",
        birthdayEmail: "Email",
        birthDate: "Birth Date",
        birthdaySubmit: "Sign Up",
        birthdaySuccess: "Thanks for signing up!",
        birthdayError: "Please fill in all fields.",
        invalidEmail: "Please enter a valid email",
        futureDateError: "Birth date cannot be in the future",

        // Contact Section
        contactUs: "Contact Us",
        findUs: "Find Us",
        name: "Name",
        email: "Email",
        message: "Message",
        send: "Send",
        contactSuccess: "Message sent successfully!",
        contactError: "Error sending message. Please try again.",
        address: "178 Queen St, Sherbrooke, QC J1M 1J9",
        phone: "Phone",
        hours: "Opening Hours",
        closed: "Closed",

        // Business Hours
        monday: "Monday",
        tuesday: "Tuesday",
        wednesday: "Wednesday",
        thursday: "Thursday",
        friday: "Friday",
        saturday: "Saturday",
        sunday: "Sunday",
        mondayHours: "10:00 AM - 11:00 PM",
        tuesdayHours: "Closed",
        wednesdayHours: "10:00 AM - 11:00 PM",
        thursdayHours: "8:00 AM - 11:00 PM",
        fridayHours: "8:00 AM - 11:00 PM",
        saturdayHours: "8:00 AM - 8:30 PM",
        sundayHours: "8:00 AM - 8:30 PM",

        // Gift Card Section
        giftCardTitle: "Gift Cards",
        giftCardDescription: "Give the gift of a unique culinary experience with our gift cards! Perfect for any occasion.",
        giftCardInstructions: "How it works:\n1. Click the button below\n2. Choose your desired amount\n3. The gift card will be sent by email immediately after purchase",
        buyGiftCard: "Buy a Gift Card",
        buyLabel: "Buy",

        // Reviews Section
        googleReviews: "Google Reviews",
        reviewsDesc: "What our customers say about us",
        seeAllReviews: "See all reviews on Google",
        weekAgo: "a week ago",
        weeksAgo: "weeks ago",
        monthAgo: "a month ago",

        // Footer
        copyright: " 2025 Sushi Crêpe Inc. All rights reserved.",
        followUs: "Follow Us",
        newsletter: "Newsletter",
        subscribeText: "Subscribe to our newsletter",
        subscribe: "Subscribe",
        emailPlaceholder: "Your email",
        socialMedia: "Follow us on social media",
    },
    fr: {
        // Navigation
        home: "Accueil",
        about: "À propos",
        contact: "Contact",
        orderNow: "Commander",
        previous: "Précédent",
        next: "Suivant",
        languageToggle: "EN",

        // Hero Section
        welcome: "Bienvenue chez Sushi Crêpe & Coffee Shop",
        description: "Découvrez une fusion unique de saveurs ! Des crêpes irrésistibles au café gourmet, embarquez dans un voyage culinaire qui éveillera vos sens.",

        // About Section
        aboutTitle: "Notre Histoire",
        aboutDescription: "Chez Sushi Crêpe & Coffee Shop, chaque bouchée raconte une histoire. Nous proposons une variété unique de crêpes sucrées et salées, toutes préparées sur commande avec des ingrédients frais et une touche de créativité.",
        aboutText: "Nous sommes une crêperie familiale située au cœur de Lennoxville, Sherbrooke, avec une histoire aussi unique que notre menu. Tout a commencé lorsque ma femme, une grande amatrice de sushi, m'a demandé d'en acheter et de les rapporter à la maison. J'ai décidé de lui faire une petite blague en préparant une crêpe sucrée inspirée des sushi. À sa surprise, elle a adoré ! Son enthousiasme nous a inspiré à intégrer cette création ludique dans notre crêperie. Aujourd'hui, Sushi Crêpe & Coffee Shop se distingue en mélangeant créativité et tradition, offrant des crêpes sucrées et salées préparées avec les ingrédients les plus frais. Notre objectif est de surprendre et de ravir nos clients avec des saveurs qui racontent notre histoire et apportent un sourire à leur visage.",

        // Delivery Section
        delivery: "Commander en livraison",
        deliveryDesc: "Choisissez votre service de livraison préféré",
        uberDesc: "Livraison rapide et fiable",
        doorDesc: "Livraison locale pratique",
        skipDesc: "Service de livraison fiable",

        // Birthday Section
        birthdayTitle: "Offre d'anniversaire",
        birthdayDesc: "Inscrivez-vous pour une surprise spéciale !",
        birthdayName: "Nom complet",
        birthdayEmail: "Courriel",
        birthDate: "Date de naissance",
        birthdaySubmit: "S'inscrire",
        birthdaySuccess: "Merci de votre inscription !",
        birthdayError: "Veuillez remplir tous les champs.",
        invalidEmail: "Veuillez entrer un courriel valide",
        futureDateError: "La date ne peut pas être dans le futur",

        // Contact Section
        contactUs: "Nous contacter",
        findUs: "Nous trouver",
        name: "Nom",
        email: "Courriel",
        message: "Message",
        send: "Envoyer",
        contactSuccess: "Message envoyé avec succès !",
        contactError: "Erreur d'envoi. Veuillez réessayer.",
        address: "178 rue Queen, Sherbrooke, QC J1M 1J9",
        phone: "Téléphone",
        hours: "Heures d'ouverture",
        closed: "Fermé",

        // Business Hours
        monday: "Lundi",
        tuesday: "Mardi",
        wednesday: "Mercredi",
        thursday: "Jeudi",
        friday: "Vendredi",
        saturday: "Samedi",
        sunday: "Dimanche",
        mondayHours: "10h00 - 23h00",
        tuesdayHours: "Fermé",
        wednesdayHours: "10h00 - 23h00",
        thursdayHours: "8h00 - 23h00",
        fridayHours: "8h00 - 23h00",
        saturdayHours: "8h00 - 20h30",
        sundayHours: "8h00 - 20h30",

        // Gift Card Section
        giftCardTitle: "Cartes-Cadeaux",
        giftCardDescription: "Offrez une expérience culinaire unique avec nos cartes-cadeaux! Parfait pour toutes les occasions.",
        giftCardInstructions: "Comment ça fonctionne:\n1. Cliquez sur le bouton ci-dessous\n2. Choisissez le montant désiré\n3. La carte-cadeau sera envoyée par courriel immédiatement après l'achat",
        buyGiftCard: "Acheter une Carte-Cadeau",
        buyLabel: "Acheter",

        // Reviews Section
        googleReviews: "Avis Google",
        reviewsDesc: "Ce que nos clients disent de nous",
        seeAllReviews: "Voir tous les avis sur Google",
        weekAgo: "il y a une semaine",
        weeksAgo: "il y a des semaines",
        monthAgo: "il y a un mois",

        // Footer
        copyright: " 2025 Sushi Crêpe Inc. Tous droits réservés.",
        followUs: "Suivez-nous",
        newsletter: "Infolettre",
        subscribeText: "Abonnez-vous à notre infolettre",
        subscribe: "S'abonner",
        emailPlaceholder: "Votre courriel",
        socialMedia: "Suivez-nous sur les réseaux sociaux",
    }
};

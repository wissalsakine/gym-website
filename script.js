
/* ==================================================
   MENU MOBILE
================================================== */

const menuButton = document.getElementById("menuButton");
const navbar = document.getElementById("navbar");

menuButton.addEventListener("click", () => {

    navbar.classList.toggle("active");

});


/* Fermer le menu après avoir cliqué */

document.querySelectorAll(".navbar a").forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("active");

    });

});


/* ==================================================
   COMPTEURS
================================================== */

const counters = document.querySelectorAll(".counter");

let countersStarted = false;

function startCounters() {

    if (countersStarted) {
        return;
    }

    const stats = document.querySelector(".stats");

    const position = stats.getBoundingClientRect().top;

    if (position < window.innerHeight) {

        countersStarted = true;

        counters.forEach(counter => {

            const target =
                Number(counter.dataset.target);

            let current = 0;

            const increment =
                Math.ceil(target / 70);

            function updateCounter() {

                current += increment;

                if (current >= target) {

                    counter.textContent =
                        target.toLocaleString();

                    return;
                }

                counter.textContent =
                    current.toLocaleString();

                requestAnimationFrame(updateCounter);
            }

            updateCounter();

        });

    }

}

window.addEventListener("scroll", startCounters);

startCounters();


/* ==================================================
   DETAILS DES PROGRAMMES
================================================== */

const programs = {

    musculation: {

        title: "MUSCULATION",

        description:
            "Un programme complet pour développer votre masse musculaire, votre force et votre physique.",

        duration:
            "45 à 75 minutes",

        level:
            "Débutant à avancé",

        frequency:
            "3 à 5 séances par semaine",

        exercises: [
            "Développé couché",
            "Squat",
            "Soulevé de terre",
            "Tractions",
            "Développé épaules",
            "Exercices bras et abdominaux"
        ]

    },


    hiit: {

        title: "HIIT",

        description:
            "Un entraînement à haute intensité alternant des périodes d'effort et de récupération.",

        duration:
            "30 à 45 minutes",

        level:
            "Intermédiaire à avancé",

        frequency:
            "2 à 4 séances par semaine",

        exercises: [
            "Burpees",
            "Mountain climbers",
            "Jump squats",
            "Sprints",
            "Kettlebell swings",
            "Circuit training"
        ]

    },


    boxing: {

        title: "BOXING",

        description:
            "Développez votre cardio, votre coordination, votre vitesse et votre puissance avec la boxe.",

        duration:
            "45 à 60 minutes",

        level:
            "Tous niveaux",

        frequency:
            "2 à 4 séances par semaine",

        exercises: [
            "Shadow boxing",
            "Travail au sac",
            "Combinaisons",
            "Déplacements",
            "Cardio boxing",
            "Travail technique"
        ]

    },


    fitness: {

        title: "FITNESS",

        description:
            "Un programme général pour améliorer votre condition physique, votre endurance et votre énergie.",

        duration:
            "45 à 60 minutes",

        level:
            "Tous niveaux",

        frequency:
            "3 à 5 séances par semaine",

        exercises: [
            "Cardio",
            "Circuit training",
            "Renforcement musculaire",
            "Abdominaux",
            "Mobilité",
            "Exercices fonctionnels"
        ]

    },


    yoga: {

        title: "YOGA",

        description:
            "Une pratique axée sur la mobilité, la respiration, l'équilibre et la relaxation.",

        duration:
            "45 à 60 minutes",

        level:
            "Tous niveaux",

        frequency:
            "2 à 4 séances par semaine",

        exercises: [
            "Respiration",
            "Mobilité",
            "Étirements",
            "Équilibre",
            "Postures",
            "Relaxation"
        ]

    },


    personal: {

        title: "PERSONAL TRAINING",

        description:
            "Un accompagnement individuel avec un coach qui adapte les séances à votre objectif et à votre niveau.",

        duration:
            "60 minutes",

        level:
            "Tous niveaux",

        frequency:
            "Selon votre objectif",

        exercises: [
            "Évaluation initiale",
            "Programme personnalisé",
            "Suivi des performances",
            "Correction technique",
            "Conseils nutritionnels",
            "Suivi des progrès"
        ]

    }

};


const detailsButtons =
    document.querySelectorAll(".details-button");

const modal =
    document.getElementById("programModal");

const modalBody =
    document.getElementById("modalBody");

const modalClose =
    document.getElementById("modalClose");


detailsButtons.forEach(button => {

    button.addEventListener("click", () => {

        const programName =
            button.dataset.program;

        const program =
            programs[programName];


        modalBody.innerHTML = `

            <p class="section-label">
                PROGRAMME
            </p>

            <h2>
                ${program.title}
            </h2>

            <p>
                ${program.description}
            </p>

            <ul>

                <li>
                    <strong>Durée :</strong>
                    ${program.duration}
                </li>

                <li>
                    <strong>Niveau :</strong>
                    ${program.level}
                </li>

                <li>
                    <strong>Fréquence :</strong>
                    ${program.frequency}
                </li>

            </ul>

            <h3>
                Exercices principaux
            </h3>

            <ul>

                ${program.exercises.map(
                    exercise =>
                    `<li>✓ ${exercise}</li>`
                ).join("")}

            </ul>

            <a
                href="#registration"
                class="button primary"
                onclick="closeModal()">

                Commencer ce programme

            </a>

        `;


        modal.classList.add("active");

    });

});


/* ==================================================
   FERMER MODAL
================================================== */

function closeModal() {

    modal.classList.remove("active");

}


modalClose.addEventListener("click", closeModal);


modal.addEventListener("click", (event) => {

    if (event.target === modal) {

        closeModal();

    }

});


/* ==================================================
   ABONNEMENTS
================================================== */

const pricingButtons =
    document.querySelectorAll(".pricing-button");

const selectedPlan =
    document.getElementById("selectedPlan");


pricingButtons.forEach(button => {

    button.addEventListener("click", () => {

        const plan =
            button.dataset.plan;

        selectedPlan.textContent =
            plan;

        document
            .getElementById("registration")
            .scrollIntoView({
                behavior: "smooth"
            });

    });

});


/* ==================================================
   FORMULAIRE D'INSCRIPTION
================================================== */

const registrationForm =
    document.getElementById("registrationForm");

const registrationMessage =
    document.getElementById("registrationMessage");


registrationForm.addEventListener("submit", (event) => {

    event.preventDefault();


    const name =
        document.getElementById("fullName").value.trim();

    const phone =
        document.getElementById("phone").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const goal =
        document.getElementById("goal").value;


    if (
        !name ||
        !phone ||
        !email ||
        !goal
    ) {

        registrationMessage.style.color =
            "#ef4444";

        registrationMessage.textContent =
            "Veuillez remplir tous les champs.";

        return;

    }


    registrationMessage.style.color =
        "#4ade80";

    registrationMessage.textContent =
        "Votre demande d'inscription a été enregistrée !";


    registrationForm.reset();

});


/* ==================================================
   FORMULAIRE CONTACT
================================================== */

const contactForm =
    document.getElementById("contactForm");

const contactMessage =
    document.getElementById("contactMessage");


contactForm.addEventListener("submit", (event) => {

    event.preventDefault();

    contactMessage.textContent =
        "Merci ! Votre message a été envoyé.";

    contactForm.reset();

});


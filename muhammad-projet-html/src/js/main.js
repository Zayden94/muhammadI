// Afficher les modèles avec animation
const showBtn = document.getElementById("showModelsBtn");
const section = document.getElementById("modelsSection");

showBtn.addEventListener("click", () => {
    section.classList.remove("hidden");
    setTimeout(() => {
        section.classList.remove("opacity-0", "translate-y-4");
        section.classList.add("opacity-100", "translate-y-0");
    }, 10);
});
// Sélectionne le bouton "scroll to top"
const scrollToTopButton = document.getElementById('scrollToTop');

// Afficher le bouton lorsque l'utilisateur fait défiler vers le bas
window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopButton.classList.remove('hidden');
    } else {
        scrollToTopButton.classList.add('hidden');
    }
};

// Ramener en haut de la page au clic
scrollToTopButton.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Effet de défilement doux
    });
};
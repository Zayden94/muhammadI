//dans ce main.js j'ai mis tout le js qui me sert dans le index.html
// Afficher les modèles avec animation, c'est le modelSection que j'ai uttilise pour que quand on clique sur le bouton cela fais une belle transition sur la premiere voiture
const showBtn = document.getElementById("showModelsBtn");
const section = document.getElementById("modelsSection");

showBtn.addEventListener("click", () => {
    section.classList.remove("hidden");
    setTimeout(() => {
        section.classList.remove("opacity-0", "translate-y-4");
        section.classList.add("opacity-100", "translate-y-0");
    }, 10);
});
// Sélectionne le bouton "scroll to top", qui me permet que quand j'arrive a la fin de la page je puissent remonter facilement au debut de la page
const scrollToTopButton = document.getElementById('scrollToTop');

// Afficher le bouton lorsque l'utilisateur fait défiler vers le bas
window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopButton.classList.remove('hidden');
    } else {
        scrollToTopButton.classList.add('hidden');
    }
};

scrollToTopButton.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Effet de défilement 
    });
};
function toggleIframe() {
    const container = document.getElementById("iframeContainer");
    container.style.display = (container.style.display === "none" || container.style.display === "") 
        ? "block" 
        : "none";
}

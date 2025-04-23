//Ici dans ce questionnaire.js il me sert dans le questionnaire.html je n'ai pas mis dans le main.js parce que le bouton brute de force rentre en conflit donc c'est pour cela que j'ai lis mis separement
const questions = [{
        question: "1. Quel est le modèle le plus luxueux ?",
        options: ["S-Class", "CLA", "G-Class"],
        answer: "S-Class"
    },
    {
        question: "2. Quel modèle est un coupé sportif ?",
        options: ["AMG GT", "E-Class", "G-Class"],
        answer: "AMG GT"
    },
    {
        question: "3. Quel modèle est le plus adapté au tout-terrain ?",
        options: ["G-Class", "CLA", "S-Class"],
        answer: "G-Class"
    },
    {
        question: "4. Lequel de ces modèles est électrique ?",
        options: ["EQS", "G-Class", "CLA"],
        answer: "EQS"
    },
    {
        question: "5. Quel est le plus économique ?",
        options: ["CLA", "S-Class", "G-Class"],
        answer: "CLA"
    }
];

let currentQuestionIndex = 0;
let score = 0;

document.addEventListener("DOMContentLoaded", () => {
    afficherQuestion();
});

function afficherQuestion() {
    const questionElement = document.getElementById("question");
    const reponsesElement = document.getElementById("reponses");
    const validerBtn = document.getElementById("valider");
    const resultat = document.getElementById("resultat");

    resultat.classList.add("hidden");
    validerBtn.classList.remove("hidden");
    validerBtn.disabled = false;

    const q = questions[currentQuestionIndex];
    questionElement.textContent = q.question;

    reponsesElement.innerHTML = "";

    q.options.forEach((option, i) => {
        const id = `option${i}`;

        const input = document.createElement("input");
        input.type = "radio";
        input.name = "reponse";
        input.id = id;
        input.value = option;

        const label = document.createElement("label");
        label.setAttribute("for", id);
        label.textContent = option;

        reponsesElement.appendChild(input);
        reponsesElement.appendChild(label);
    });
}

function verifierReponse() {
    const selected = document.querySelector('input[name="reponse"]:checked');
    const resultat = document.getElementById("resultat");

    if (!selected) {
        resultat.classList.remove("hidden");
        resultat.textContent = "Veuillez sélectionner une réponse.";
        resultat.style.color = "red";
        return;
    }

    if (selected.value === questions[currentQuestionIndex].answer) {
        score++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        afficherQuestion();
    } else {
        const validerBtn = document.getElementById("valider");
        validerBtn.classList.add("hidden");

        if (score === questions.length) {
            resultat.classList.remove("hidden");
            resultat.textContent = "🎉 Félicitations ! Vous avez tout juste, redirection en cours...";
            resultat.style.color = "green";
            setTimeout(() => {
                window.location.href = "contact.html";
            }, 2000);
        } else {
            resultat.classList.remove("hidden");
            resultat.textContent = `❌ Vous avez raté le test . Veuillez recommencer.`;
            resultat.style.color = "red";

            // Reset pour recommencer
            currentQuestionIndex = 0;
            score = 0;

            setTimeout(() => {
                afficherQuestion();
            }, 2500);
        }
    }
}
document.getElementById("bruteforce-btn").addEventListener("click", bruteforce);
//voici la fonction brute de force que j'ai configurer 
function bruteforce() {
    const consoleDiv = document.getElementById("console");
    const spinner = document.getElementById("spinner");

    spinner.classList.remove("hidden");
    consoleDiv.classList.remove("hidden");
    consoleDiv.innerHTML = ""; // Reset console

    let i = 0;

    function simulerLigne(texte, delay = 500) {
        return new Promise(resolve => {
            setTimeout(() => {
                consoleDiv.innerHTML += `> ${texte}<br>`;
                consoleDiv.scrollTop = consoleDiv.scrollHeight;
                resolve();
            }, delay);
        });
    }

    async function hacker() {
        while (currentQuestionIndex < questions.length) {
            const q = questions[currentQuestionIndex];
            await simulerLigne(`Analyse de la question ${currentQuestionIndex + 1}...`, 500);
            await simulerLigne(`Réponse correcte détectée : "${q.answer}"`, 500);

            // Sélectionne automatiquement la bonne réponse
            const inputs = document.querySelectorAll('input[name="reponse"]');
            inputs.forEach(input => {
                if (input.value === q.answer) {
                    input.checked = true;
                }
            });

            await simulerLigne("Validation de la réponse...", 400);
            verifierReponse();
            await new Promise(r => setTimeout(r, 500));
        }

        await simulerLigne("✅ Bruteforce terminé. Redirection si réussite...");
        spinner.classList.add("hidden");
    }

    hacker();
}
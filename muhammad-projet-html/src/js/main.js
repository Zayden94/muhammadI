document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('questionnaire');
    const resultat = document.getElementById('resultat');

    // Bonnes réponses
    const bonnesReponses = {
        q1: "S-Class",
        q2: "AMG GT",
        q3: "G-Class",
        q4: "EQS",
        q5: "CLA"
    };

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        let erreurs = [];
        let score = 0;

        for (let i = 1; i <= 5; i++) {
            const question = `q${i}`;
            const reponse = form[question].value;

            if (!reponse) {
                erreurs.push(`Vous n'avez pas répondu à la question ${i}`);
            } else if (reponse !== bonnesReponses[question]) {
                erreurs.push(`Question ${i} incorrecte`);
            } else {
                score++;
            }
        }

        resultat.classList.remove('hidden');
        resultat.classList.remove('text-red-600', 'text-green-600');

        if (erreurs.length > 0) {
            resultat.classList.add('text-red-600');
            resultat.innerHTML = `❌ Erreurs trouvées :<br>${erreurs.join("<br>")}`;
        } else {
            resultat.classList.add('text-green-600');
            resultat.innerHTML = `✅ Bravo ! Toutes les réponses sont correctes.<br>Voici notre email : <strong>contact@mercedes.fr</strong>`;
        }
    });
});
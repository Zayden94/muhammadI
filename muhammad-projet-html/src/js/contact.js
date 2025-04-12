//ce contact.js me sert pour la page html de contact.htlm 
document.getElementById("sendEmail").addEventListener("click", function() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
        alert("Merci de remplir tous les champs !");
        return;
    }

    const subject = "Message de " + name;
    const body = "Nom: " + name + "\nEmail: " + email + "\n\n" + message;

    // Remplace cette adresse par celle que tu veux
    const mailtoLink = "mailto:ton-email@exemple.com?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);

    window.location.href = mailtoLink;
});
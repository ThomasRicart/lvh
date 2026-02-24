/**
 * Fonction déclenchée au clic sur le bouton
 * Elle modifie le contenu et le style du DOM
 */
function mettreAJourDashboard() {
    // 1. Sélection des éléments par leur ID
    const curseur = document.getElementById("curseur-temp");
    const affichage = document.getElementById("affichage-temp");
    const message = document.getElementById("statut-message");

    // 2. Récupération de la valeur du curseur
    let nouvelleValeur = curseur.value;

    // 3. Mise à jour du contenu textuel de la page
    affichage.textContent = nouvelleValeur;
    message.textContent = "Mise à jour effectuée à " + new Date().toLocaleTimeString();

    // 4. Changement dynamique du style selon la valeur
    if (nouvelleValeur >= 25) {
        affichage.style.color = "#e67e22"; // Couleur chaude
    } else {
        affichage.style.color = "#2980b9"; // Couleur froide
    }

    // Debugging dans la console
    console.log("Nouvelle température appliquée : " + nouvelleValeur + "°C");
}
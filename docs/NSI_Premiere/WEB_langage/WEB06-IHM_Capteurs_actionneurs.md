# WEB06 : IHM : Capteurs, actionneurs et interfaces homme-machine.

🎯Objectifs et Compétences

Dans cette séance, on s'éloigne un peu du pur code pour comprendre l'architecture d'un système connecté : comment les capteurs (entrées) et les actionneurs (sorties) communiquent avec l'IHM (Interface Homme-Machine).

* Théorie : Identifier les composants d'une chaîne d'information (Capteurs, Traitement, Actionneurs).
* Analyse : Distinguer les flux de données entrants et sortants.
* Architecture : Comprendre le rôle central de l'IHM dans le pilotage d'un système.

## 1. Point de cours : La boucle de contrôle

Un système domotique (comme notre Dashboard) ne fonctionne pas de manière isolée. Il suit une boucle logique précise :

* Le Capteur (Entrée) : Il "mesure" le monde réel (Température, Humidité, Présence) et transforme cette grandeur physique en signal numérique.

* Le Traitement (Cerveau) : C'est notre code JavaScript (`if / else`). Il décide de l'action à prendre en fonction des données reçues.

* L'Actionneur (Sortie) : Il "agit" sur le monde réel (Allumer un radiateur, fermer un volet, déclencher une alarme).


## 2. Activité : Analyse du Dashboard S41

Nous allons faire évoluer le Dashboard de la S41


Complétez le tableau suivant en vous basant sur votre projet S41 :

| Composant | Role dans le projet | Type (Capteur ou Actionneur) |
| --- |--- |--- |
Le Curseur (Range) | |
L'Écran (IHM) | |
Le Bouton ON/OFF | |
Le Fond de page (Couleur) | |

## 3. Travail Pratique : Simuler un nouvel Actionneur

Nous allons ajouter un nouveau composant à notre Dashboard : un Actionneur de Ventilation.

**Étape 1 : Modification du HTML (WEB06-dashboard.html)**


Ajoutez une zone pour visualiser l'état de la ventilation dans la section des capteurs.

```html
<li>Ventilation : <span id="etat-ventilo">ARRÊT</span></li>
```

**Étape 2 : Modification de la logique (WEB06-script.js)**

L'actionneur doit s'activer automatiquement. Si la température est chaude (≥26°C), on lance la ventilation. Sinon, on l'arrête.

```javascript
// Dans la fonction mettreAJourDashboard(), ajoutez :
const affichageVentilo = document.getElementById("etat-ventilo");

if (nouvelleTemp >= 26) {
    affichageVentilo.textContent = "EN MARCHE (Refroidissement...)";
    affichageVentilo.style.color = "blue";
} else {
    affichageVentilo.textContent = "ARRÊT";
    affichageVentilo.style.color = "grey";
}
```

## 4. Défi : L'IHM Bidirectionnelle

Une bonne IHM permet de voir (Lire les capteurs) et d'agir (Piloter les actionneurs).

Consigne : Créez un nouveau bouton "**AUTO-CONFORT**". Lorsqu'on clique dessus, le script doit automatiquement régler le curseur de température à 21°C et mettre à jour tout le dashboard.




## 5. Liste de contrôle de fin de séance

☐ Je sais définir ce qu'est un capteur et un actionneur.

☐ J'ai identifié le flux de données : Capteur → JS → IHM.

☐ Mon dashboard commande désormais un actionneur virtuel (la ventilation).

☐ Validation : Votre code HTML passe-t-il toujours le validateur W3C ?

## 6. Synthèse de la séance

L'IHM est le pont entre l'humain et la machine. Elle permet de visualiser l'état des capteurs et d'envoyer des ordres aux actionneurs. En informatique, tout système connecté (objet connecté, robot, voiture autonome) repose sur cette structure.
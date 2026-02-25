# WEB04 — Interaction Client-Serveur : Requêtes HTTP (GET/POST) et Formulaires

🎯Objectifs et Compétences

L'objectif est d'apprendre à rendre une page web interactive en utilisant JavaScript pour réagir aux actions de l'utilisateur et modifier le contenu en temps réel.

### Capacités attendues 

| Capacités visées | Description                                                                     |
| ---------------- | ------------------------------------------------------------------------------- |
| Manipuler       | Déclarer et utiliser des variables (`let`, `const`) et des fonctions. |
|Accéder        | Identifier et cibler un élément HTML via son identifiant (`ID`).        |
| Interagir        | Modifier le texte ou le style d'un élément suite à un événement (`clic`).          |

## 1. Introduction au Javascript (JS)

Alors que le HTML structure le contenu et le CSS gère l'apparence, le JavaScript apporte le comportement. C'est un langage de programmation "côté client", ce qui signifie qu'il s'exécute directement dans le navigateur de l'utilisateur.

Pour l'utiliser, on insère une balise spécifique, généralement juste avant la fermeture de `</body>` :

```html
<script src="script.js"></script>
```

## 2. Syntaxe de base : Variables et Fonctions

### Déclarer des variables

On utilise deux mots-clés principaux pour stocker des données :

* `let` : Pour une variable dont la valeur peut changer (ex: une température qui évolue).

* `const` : Pour une valeur qui reste fixe (ex: le nom d'un capteur).

```javascript
let temperature = 19; // Type nombre
const piece = "Salon"; // Type chaîne de caractères (String)

temperature = 20; // Autorisé
// piece = "Cuisine"; // ERREUR : on ne peut pas modifier une constante
```

### Les Fonctions

Une fonction est un bloc de code qui ne s'exécute que lorsqu'on l'appelle.


```javascript
function direBonjour() {
    console.log("Le système domotique est prêt.");
}
```

## 3. Le DOM : L'interface entre JS et HTML

Le **DOM** (*Document Object Model*) est une représentation de votre page HTML sous forme d'arbre. JavaScript utilise cet arbre pour modifier la page sans avoir besoin de la recharger.

### Cibler un élément

Pour modifier un élément précis (comme l'affichage de la température dans votre Dashboard), il doit posséder un `id` unique.

```javascript
// On récupère l'élément qui a l'id "affichage-temp"
const afficheur = document.getElementById("affichage-temp");
```

### Modifier l'élément

Une fois l'élément sélectionné, on peut changer son texte ou son apparence :

```javascript
afficheur.textContent = "22°C"; // Change le texte
afficheur.style.color = "red";  // Change la couleur en CSS
```

## 4. Les Événements : Réagir à l'utilisateur

Le JavaScript devient utile lorsqu'il réagit à un événement, comme un clic sur un bouton. On utilise l'attribut `onclick` dans le HTML pour lier les deux.

Exemple concret pour le Dashboard :

*Dans le fichier HTML :*

```html
<p id="statut">Chauffage éteint</p>
<button onclick="allumerChauffage()">Allumer</button>
```

*Dans le fichier JS :*

```javascript
function allumerChauffage() {
    const texteStatut = document.getElementById("statut");
    texteStatut.textContent = "Chauffage en cours...";
    texteStatut.style.color = "orange";
}
```

## 5. Mini-projet : Dashboard Domotique (Phase 4) — Interactivité JS

**Objectif:**


Dans la phase précédente, vous avez créé un formulaire envoyant des données vers une page de confirmation. Aujourd'hui, nous allons utiliser JavaScript pour mettre à jour les indicateurs du Dashboard en temps réel.



**Préparation de l'interface (HTML)**

Dans votre fichier `index.html`, assurez-vous que vos éléments importants possèdent des identifiants (`id`) pour être ciblés par le script.

```html
<div class="card">
    <h3>Température actuelle</h3>
    <p id="affichage-temp">19°C</p>
</div>

<section id="configuration">
    <h3>Réglages</h3>
    <input type="range" id="curseur-temp" min="15" max="30" value="19">
    <button onclick="mettreAJourDashboard()">Appliquer la consigne</button>
</section>

<script src="script.js"></script>
```

**Programmation de l'interactivité (JS)**
Créez un fichier `script.js` et ajoutez le code suivant. Ce script utilise des variables (`let`, `const`) et accède au `DOM` pour modifier le contenu.

```javascript
// Fonction pour mettre à jour l'affichage
function mettreAJourDashboard() {
    // 1. Sélection des éléments
    const curseur = document.getElementById("curseur-temp");
    const affichage = document.getElementById("affichage-temp");
    
    // 2. Récupération de la nouvelle valeur
    let nouvelleTemp = curseur.value;
    
    // 3. Modification du texte affiché
    affichage.textContent = nouvelleTemp + "°C";
    
    // 4. Feedback visuel (Optionnel)
    if (nouvelleTemp > 25) {
        affichage.style.color = "red"; // Alerte chaleur
    } else {
        affichage.style.color = "blue";
    }
}
```

**Etapes à réaliser:**

1. Liaison du script : Vérifiez que le fichier `script.js` est correctement appelé dans votre `HTML`.

2. Ciblage ID : Assurez-vous que l'ID utilisé dans document.`getElementById` correspond exactement à celui écrit dans le HTML.

3. Gestion de l'événement : Ajoutez l'attribut `onclick` sur votre bouton pour déclencher la fonction.

4. 'Défi (Optionnel): Modifiez votre fonction pour qu'elle change aussi le titre de la pièce (ex: "Salon", "Cuisine") en utilisant un champ `<input type="text">` et la propriété `textContent`.

Liste de contrôle de fin de séance

☐ **Mon fichier JS est lié et ne contient pas d'erreurs dans la console (F12)**.

☐ **Le clic sur le bouton modifie instantanément le texte de la page**.

☐ **J'ai bien utilisé const pour les éléments qui ne changent pas de référence**.

☐ **Validation W3C. le <a href = "https://validator.w3.org/">W3C Validator</a> permet de valider la synthaxe du code**

## 6. Synthèse de la séance

* `let` et `const` servent à mémoriser des informations.

* `document.getElementById()` est la porte d'entrée pour modifier le HTML.

Le DOM est la structure que JavaScript manipule.

L'attribut `onclick` permet de déclencher une fonction lors d'une interaction.
-----------------



-----

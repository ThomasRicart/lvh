# S39 — JavaScript (2) – Logique Conditionnelle et États du Système

🎯Objectifs et Compétences

L'objectif est de rendre le Dashboard "intelligent". Le programme doit analyser la donnée et réagir visuellement (alertes, couleurs, icônes) en fonction de seuils critiques.


* Utiliser des structures conditionnelles (`if`, `else if`, `else`).

* Modifier les classes CSS dynamiquement via JavaScript.

* Créer des alertes visuelles basées sur des seuils de données.

## 1. Point de cours : Prendre des décisions en JS

**La Structure if / else**

Pour qu'un script soit interactif, il doit tester des conditions. On utilise le bloc if (si) et else (sinon).

```javascript
let temperature = 26;

if (temperature >= 26) {
    // Exécuté si la condition est VRAIE
    console.log("Alerte Chaleur !");
} else {
    // Exécuté dans tous les autres cas
    console.log("Température normale.");
}
```

**Les Opérateurs de Comparaison**

* `> / <` : Supérieur / Inférieur

* `>= / <=` : Supérieur ou égal / Inférieur ou égal

* `==` : Égal à

* `!=` : Différent de

**Manipuler les classes CSS (`classList`)**

Au lieu de modifier les styles un par un, il est plus performant d'ajouter ou de retirer une "classe" CSS complète définie dans votre fichier `.css.

* `element.classList.add("nom-classe")` : Ajoute un style.

* `element.classList.remove("nom-classe")` : Retire un style.


## 2. Application au Mini-Projet : Dashboard Intelligent

Nous allons faire évoluer le Dashboard de la S40 pour qu'il gère des états visuels :

* État Chaud : Si la température est ≥26°C.

* État Froid : Si la température est ≤17°C.

* État Normal : Entre 18 et 25°C.

## 3. Étapes à réaliser

**Étape 1 : Préparer le CSS (S41-style.css)**

Ouvrez votre fichier S41-style.css et ajoutez ce code exactement à la fin du fichier :

```css
/* --- COPIER-COLLER CI-DESSOUS --- */

/* Style activé en cas de forte chaleur (T >= 26) */
.chaud {
    background-color: #fdf2f2 !important; 
    border-left: 10px solid #e74c3c !important;
    transition: all 0.5s ease;
}

/* Style activé en cas de froid (T <= 17) */
.froid {
    background-color: #f0f7ff !important;
    border-left: 10px solid #3498db !important;
    transition: all 0.5s ease;
}

```

**Étape 2 : Préparer le HTML (S41-dashboard.html)**

Pour que le script puisse cibler les éléments, assurez-vous d'avoir ces id :

* La section des capteurs doit avoir l'identifiant : `<section id="card-temp">`.

* Dans la liste, ajoutez l'icône : `<li>Statut : <span id="icon-status">✅</span></li>`.

Mets à jour ton fichier en ajoutant les id pour que le JavaScript puisse "trouver" les éléments :

```html
<section id="card-temp">
    <h2>Statut des Capteurs</h2>
    <ul>
        <li>Statut : <span id="icon-status">✅</span></li>
        <li>Température : <span id="valeur-temp">22</span>°C</li>
        <li>Humidité : 40%</li>
        <li>Luminosité : 500 lux</li>
    </ul>
</section>
```

**Étape 3 : Coder la logique dans S41-script.js**

Remplace ton ancienne fonction par celle-ci :

```javascript
function mettreAJourDashboard() {
    const curseur = document.getElementById("consigne");
    const affichageTemp = document.getElementById("valeur-temp");
    const zoneCard = document.getElementById("card-temp");
    const icone = document.getElementById("icon-status");

    const t = parseFloat(curseur.value);
    affichageTemp.textContent = t;

    // Logique de seuils
    zoneCard.classList.remove("chaud", "froid");

    if (t >= 26) {
        zoneCard.classList.add("chaud");
        icone.textContent = "🔥";
    } else if (t <= 17) {
        zoneCard.classList.add("froid");
        icone.textContent = "❄️";
    } else {
        icone.textContent = "✅";
    }
}
```

**Etape 4: Gestion de la lumière:**

* Il faut ajouter l'attribut onclick sur les boutons pour qu'ils appellent une fonction (que nous allons créer juste après).

*Dans le fichier `html`*

```html
<section>
    <h2>Commandes</h2>
    <button type="button" onclick="gererLumiere('allumer')">Allumer</button>
    <button type="button" onclick="gererLumiere('eteindre')">Éteindre</button>
</section>
```

* Pour que l'effet "éteint" soit visible, on ajoute une classe qui change la couleur du fond de page (`body`).

*Dans le fichier `css`*

```css
/* Style pour simuler l'extinction des feux */
.mode-nuit {
    background-color: #1a1a1a !important; /* Gris très sombre */
    transition: background-color 0.5s ease;
}
```

* Ajout de la fonction lumière

*Dans le fichier `js`*

```javascript
/**
 * Gère l'allumage et l'extinction visuelle du dashboard
 * @param {string} action - Reçoit 'allumer' ou 'eteindre'
 */
function gererLumiere(action) {
    const corpsPage = document.body;

    if (action === 'eteindre') {
        corpsPage.classList.add("mode-nuit");
        console.log("Lumières éteintes");
    } else {
        corpsPage.classList.remove("mode-nuit");
        console.log("Lumières allumées");
    }
}
```


4. Liste de contrôle de fin de séance

☐ Interaction : Le changement de température déclenche-t-il une modification visuelle immédiate ?
☐ Nettoyage : Utilisez-vous `classList.remove()` pour éviter que les couleurs "chaud" et "froid" ne se superposent ?
☐ Logique : Avez-vous bien utilisé `parseFloat()` ou `Number()` pour comparer des nombres et non des textes ?
☐ Validation : Votre code HTML passe-t-il toujours le validateur W3C ?

5. Synthèse de la séance

* La structure `if / else if / else` permet de gérer plusieurs scénarios possibles.

* Le JavaScript peut modifier la structure du document (DOM) mais aussi son apparence en pilotant les classes CSS.

* Une application interactive réussie doit fournir un feedback visuel clair à l'utilisateur (changement de couleur, icône, message d'alerte).

* Plutôt que de modifier le style ligne par ligne (ex: `style.color`), il est plus propre d'ajouter ou retirer une classe CSS définie au préalable.

    * `element.classList.add("ma-classe")` : Ajoute une classe.

    * `element.classList.remove("ma-classe")` : Supprime une classe.
--------------
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

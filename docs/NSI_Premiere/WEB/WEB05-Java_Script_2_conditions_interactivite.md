# WEB05 — JavaScript (2) – Logique Conditionnelle et États du Système

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

**Étape 2 : Préparer le HTML (WEB05-dashboard.html)**

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

**Étape 3 : Coder la logique dans WEB05-script.js**

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


## 4. Liste de contrôle de fin de séance

☐ Interaction : Le changement de température déclenche-t-il une modification visuelle immédiate ?

☐ Nettoyage : Utilisez-vous `classList.remove()` pour éviter que les couleurs "chaud" et "froid" ne se superposent ?

☐ Logique : Avez-vous bien utilisé `parseFloat()` ou `Number()` pour comparer des nombres et non des textes ?

☐ Validation : Votre code HTML passe-t-il toujours le validateur W3C ?

## 5. Synthèse de la séance

* La structure `if / else if / else` permet de gérer plusieurs scénarios possibles.

* Le JavaScript peut modifier la structure du document (DOM) mais aussi son apparence en pilotant les classes CSS.

* Une application interactive réussie doit fournir un feedback visuel clair à l'utilisateur (changement de couleur, icône, message d'alerte).

* Plutôt que de modifier le style ligne par ligne (ex: `style.color`), il est plus propre d'ajouter ou retirer une classe CSS définie au préalable.

    * `element.classList.add("ma-classe")` : Ajoute une classe.
    * `element.classList.remove("ma-classe")` : Supprime une classe.
--------------

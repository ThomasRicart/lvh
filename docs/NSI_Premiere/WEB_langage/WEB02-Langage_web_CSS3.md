# WEB02 — Langages du Web (2) : CSS3 (Mise en forme)

🎯Objectifs et Compétences

L'objectif est d'apprendre à styliser une structure existante en utilisant des feuilles de style pour séparer le fond de la forme.

### Capacités attendues 

| Capacités visées | Description                                                                     |
| ---------------- | ------------------------------------------------------------------------------- |
| Distinguer       | Séparer la description (HTML) du comportement (JavaScript) et de la forme (CSS) |
|Styliser        | Utiliser des sélecteurs, des propriétés et des valeurs pour modifier l'apparence.                                                                   |
| Mettre en page         | Manipuler le modèle de boîte pour organiser les éléments du Dashboard.          |


## 1. Introduction : Quel est le rôle du CSS ?

* **Notion :** Le CSS (*Cascading Style Sheets*) définit l'apparence visuelle.
* **Analogie :** Si le HTML est le squelette et les briques, le CSS est la peinture, la décoration et la disposition des meubles.
* **Liaison :** On lie le CSS au HTML via la balise `<link>` dans le `<head>`. 
  ⚠️ *Attention : le nom du fichier dans le code doit être exactement le même que celui enregistré sur votre ordinateur.*

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mon Dashboard Domotique</title>
    
    <link rel="stylesheet" href="style.css">
    
</head>
<body>

    <header>
        <h1>Mon Dashboard</h1>
    </header>

    <main>
        <section>
            <h2>Salon</h2>
            <p>La température actuelle est de 21°C.</p>
            <button type="button">Allumer</button>
        </section>
    </main>

</body>
</html>
```


```css
/* 1. Style global du document */
body {
    font-family: 'Arial', sans-serif;
    background-color: #f4f7f6; /* Gris très clair */
    color: #333;
    line-height: 1.6;
    margin: 20px;
}

/* 2. Titres */
h1 {
    color: #2c3e50;
    text-align: center;
    border-bottom: 2px solid #e67e22;
    padding-bottom: 10px;
}

h2 {
    color: #e67e22;
    margin-top: 30px;
}

/* 3. Le Modèle de Boîte (Box Model) appliqué aux sections */
section {
    background: white;
    padding: 20px;
    margin-bottom: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

/* 4. Style des composants d'interaction (Boutons) */
button {
    background-color: #3498db;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
    transition: background 0.3s ease; /* Animation fluide */
}

/* Effet au survol (Hover) */
button:hover {
    background-color: #2980b9;
}

/* Bouton spécifique pour "Éteindre" */
button:nth-of-type(even) {
    background-color: #e74c3c;
}

button:nth-of-type(even):hover {
    background-color: #c0392b;
}

/* 5. Images */
img {
    max-width: 100%;
    height: auto;
    border-radius: 10px;
    display: block;
    margin: 10px 0;
}
```

## 2. Le Modèle de Boîte (Box Model) 📦

C'est le concept le plus important du CSS. Chaque élément HTML est considéré comme une boîte.

* **Content** : Le texte ou l'image.

* **Padding** (Marge intérieure) : L'espace entre le contenu et la bordure (le "rembourrage").

* **Border** (Bordure) : Le contour de l'élément.

* **Margin** (Marge extérieure) : L'espace pour s'éloigner des autres éléments voisins.

**Astuce** : Utilisez l'inspecteur du navigateur (F12) pour visualiser ces zones en couleurs !

## 3. Syntaxe et Sélecteurs

Une **règle CSS**: `selecteur { propriete: valeur; }`

* **Sélecteurs de balises** : Ciblent tous les éléments d'un type (ex: `h1`, `p`, `button`).

* **Propriétés** courantes :

    * `color` : Couleur du texte.

    * `background-color` : Couleur de fond.

    * `font-size` : Taille de la police.

    * `border` : Bordure autour de l'élément.

| Thématique | Propriété | Description | 
| :--- | :--- | :--- | 
| **Texte** | `color` | Couleur (ex: `red`, `#FF5733`, `rgb(0,0,0)`) | 
| | `font-family` | Choix de la police (ex: `'Arial'`, `sans-serif`) | 
| | `font-size` | Taille du texte (ex: `16px`, `1.2em`, `large`)  |
| | `text-align` | Alignement horizontal (ex: `left`, `center`, `right`, `justify`)|  
| | `font-weight` | Épaisseur (gras) (ex: `bold`, `normal`, `600`  |
| **Fond** | `background-color` | Couleur de l'arrière-plan (ex: `white`, `transparent`) |
| | `background-image` | Image d'arrière-plan (ex: `url('fond.jpg')`) |
| **Modèle de Boîte** | `width` / `height` | Largeur et Hauteur (ex: `200px`, `50%`, `auto`) |
| | `padding` | Marge **intérieure** (ex: `10px` (entre contenu et bordure) )|
| | `margin` | Marge **extérieure** (ex: `20px` (entre l'élément et ses voisins) )|
| | `border` | Bordure (taille, style, couleur) (ex: `2px solid black`) |
| | `border-radius` | Coins arrondis | `10px`, `50%` (pour un cercle) |
| **Affichage** | `display` | Type d'affichage (ex: `block`, `inline`, `flex`, `none`) |
| | `box-shadow` | Ombre portée (ex: `2px 2px 5px grey`) |
| | `opacity` | Transparence (ex: `0.5` (de 0 à 1) )|
| **Interactivité**|`:hover`| Change l'aspect au survol de la souris|

## 4. Mini-projet : Dashboard Domotique (Phase 2)

**Objectif** : Transformer votre dashboard brut en interface moderne.

* Créez style.css et liez-le dans votre HTML.

* Appliquez une police sans-serif au body.

* Ajoutez des ombres (box-shadow) et des arrondis (border-radius) à vos sections.

* Défi : Créez une transition fluide sur vos boutons avec transition: 0.3s;.

**Objectif** : Transformer votre fichier brut de la séance S37 en une interface moderne.


✅ **Liste de contrôle du projet**

☐ **Le fichier `style.css` est correctement lié (les changements sont visibles).**

☐ **Distinction nette entre `margin` et `padding`.**

☐ **L'interface est plus lisible et aérée que la version HTML pure.**

☐ **Validation W3C. le <a href = "https://validator.w3.org/">W3C Validator</a> permet de valider la synthaxe du code**

## 4. Synthèse

* Le CSS permet de centraliser la mise en forme.

* On utilise des propriétés et des valeurs (ex: `color`: `blue`;).

* Le modèle de boîte gère l'espacement et les bordures des éléments.

-----

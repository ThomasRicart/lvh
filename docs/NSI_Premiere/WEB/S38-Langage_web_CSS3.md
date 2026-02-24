# S38 — Langages du Web (2) : CSS3 (Mise en forme)

🎯Objectifs et Compétences

L'objectif est d'apprendre à styliser une structure existante en utilisant des feuilles de style pour séparer le fond de la forme.

### Capacités attendues 

| Capacités visées | Description                                                                     |
| ---------------- | ------------------------------------------------------------------------------- |
| Distinguer       | Séparer la description (HTML) du comportement (JavaScript) et de la forme (CSS) |
|Styliser        | Utiliser des sélecteurs, des propriétés et des valeurs pour modifier l'apparence.                                                                   |
| Mettre en page         | Manipuler le modèle de boîte pour organiser les éléments du Dashboard.          |


## 1. Introduction : Quel est le rôle du CSS ?

* **Notion:** Le CSS (*Cascading Style Sheets*) est le langage qui définit l'apparence visuelle.

* **Analogie:** Si le HTML est le squelette (la structure) et les briques de la maison, le CSS est la peinture, la décoration et la disposition des meubles.

* **Intégration:**  On lie une feuille de style externe au document HTML via la balise `<link>` placée dans le `<head>`.

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


## 2. Syntaxe et Sélecteurs

Une **règle CSS** se compose d'un **sélecteur** (quelle balise viser ?) et d'un **bloc de déclaration** (quelles modifications appliquer ?).

* **Sélecteurs de balises** : Ciblent tous les éléments d'un type (ex: `h1`, `p`, `button`).

* **Propriétés** courantes :

    * `color` : Couleur du texte.

    * `background-color` : Couleur de fond.

    * `font-size` : Taille de la police.

    * `border` : Bordure autour de l'élément.

| Thématique | Propriété | Description | Exemple de valeur |
| :--- | :--- | :--- | :--- |
| **Texte** | `color` | Couleur du texte | `red`, `#FF5733`, `rgb(0,0,0)` |
| | `font-family` | Choix de la police | `'Arial'`, `sans-serif` |
| | `font-size` | Taille du texte | `16px`, `1.2em`, `large` |
| | `text-align` | Alignement horizontal | `left`, `center`, `right`, `justify` |
| | `font-weight` | Épaisseur (gras) | `bold`, `normal`, `600` |
| **Fond** | `background-color` | Couleur de l'arrière-plan | `white`, `transparent` |
| | `background-image` | Image d'arrière-plan | `url('fond.jpg')` |
| **Modèle de Boîte** | `width` / `height` | Largeur et Hauteur | `200px`, `50%`, `auto` |
| | `padding` | Marge **intérieure** | `10px` (entre contenu et bordure) |
| | `margin` | Marge **extérieure** | `20px` (entre l'élément et ses voisins) |
| | `border` | Bordure (taille, style, couleur) | `2px solid black` |
| | `border-radius` | Coins arrondis | `10px`, `50%` (pour un cercle) |
| **Affichage** | `display` | Type d'affichage | `block`, `inline`, `flex`, `none` |
| | `box-shadow` | Ombre portée | `2px 2px 5px grey` |
| | `opacity` | Transparence | `0.5` (de 0 à 1) |

## 3. Mini-projet : Dashboard Domotique (Phase 2)

**Objectif** : Transformer votre fichier brut de la séance S37 en une interface moderne.

**Etapes à réaliser:**

1. Création : Créez un fichier `style.css` dans le même dossier que votre `index.html`.

2. Liaison : Ajoutez `<link rel="stylesheet" href="style.css">` dans le `<head>` de votre HTML.

3. Mise en forme :

    * Changez la couleur de fond de la page (`body`).

    * Modifiez la police et la couleur des titres (`h1`, `h2`).

    * Donnez une apparence "bouton moderne" à vos balises `<button>` (couleur vive, bordure arrondie, changement au survol).

    * Utilisez les `margins` et `paddings` pour aérer vos sections de capteurs.

✅ **Liste de contrôle du projet**

☐ **Le fichier `style.css` est correctement lié (les changements sont visibles).**

☐ **Les sélecteurs correspondent bien aux balises HTML utilisées..**

☐ **L'interface est plus lisible et aérée que la version HTML pure.**

☐ **Défi (Optionnel) : Utiliser la propriété `border-radius` pour arrondir les coins des boutons et des images..**

☐ **Validation W3C. le <a href = "https://validator.w3.org/">W3C Validator</a> permet de valider la synthaxe du code**

## 4. Synthèse

* Le CSS permet de centraliser la mise en forme.

* On utilise des propriétés et des valeurs (ex: `color`: `blue`;).

* Le modèle de boîte gère l'espacement et les bordures des éléments.

-----

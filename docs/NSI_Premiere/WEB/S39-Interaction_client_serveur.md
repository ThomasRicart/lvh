# S39 — Interaction Client-Serveur : Requêtes HTTP (GET/POST) et Formulaires

🎯Objectifs et Compétences

L'objectif est de comprendre comment les données saisies par un utilisateur sont transmises à un serveur pour être traitées.

### Capacités attendues 

| Capacités visées | Description                                                                     |
| ---------------- | ------------------------------------------------------------------------------- |
| Identifier       | Comprendre le cycle requête/réponse entre le navigateur et le serveur. |
|Construire        | Créer un formulaire HTML pour collecter des données  utilisateur.        |
| Distinguer        | Choisir entre la méthode GET et la méthode POST selon le contexte.          |


## 1. Le modèle Client - Serveur

Le Web fonctionne sur un dialogue permanent :

* Le **Client** (Navigateur) : Envoie une requête `HTTP` (ex: "Donne-moi la page accueil.html" ou "Envoie ces données de température").

* Le **Serveur** : Traite la demande et renvoie une réponse (la page Web ou une confirmation).

![Image alt](./images/ClientServeur.png)

## 2. Les Formulaires HTML : La balise `<form>`

Pour qu'un utilisateur puisse envoyer des données (identifiant, réglage de consigne), on utilise un formulaire.

* L'attribut `action` : Définit l'adresse (URL) du programme sur le serveur qui va recevoir les données.

* L'attribut `method` : Définit la manière dont les données voyagent (**GET** ou **POST**).

## 3. GET vs POST : Quelle différence ?

| Méthode | Fonctionnement|Visibilité|Utilisation|
| -------- | --- | --- | --- |
| **GET** | Les données sont ajoutées à l'URL. | Visible dans la barre d'adresse. | Recherches, consultation (ex: Google).|
|**POST** | Les données sont cachées dans le corps de la requête. |Invisible dans l'URL.| Mots de passe, formulaires lourds, envois sensibles.|


### La méthode **GET** 

Elle est utilisée pour demander des données.

```html
<form action="traitement.php" method="GET">
    <label>Recherche de capteur :</label>
    <input type="text" name="id_capteur">
    <button type="submit">Rechercher</button>
</form>
```

Si tu tapes "Salon" dans le champ, après avoir cliqué sur le bouton, l'URL dans ton navigateur deviendra :
`http://mon-serveur.fr/traitement.php?id_capteur=Salon`

### La méthode **POST** 

Elle est utilisée pour envoyer ou modifier des données sensibles ou volumineuses. Les informations sont "cachées" dans le corps de la requête **HTTP** et n'apparaissent pas dans l'URL.

```html
<form action="config.php" method="POST">
    <label>Nouveau mot de passe du Hub :</label>
    <input type="password" name="code_admin">
    <button type="submit">Mettre à jour</button>
</form>
```

L'URL reste simplement `http://mon-serveur.fr/config.php`. Le mot de passe est envoyé de manière invisible pour l'utilisateur, ce qui est beaucoup plus sécurisé.


Les composants de saisie (`<input>`)

Chaque champ doit posséder un attribut `name` (c'est l'étiquette qui permettra au serveur de reconnaître la donnée).

## 4. Mini-projet : Dashboard Domotique (Phase 3)

**Objectif** : Ajouter une interface de paramétrage à votre dashboard pour modifier la température de consigne et le nom de la pièce.

**Etapes à réaliser:**

1. Ouvrez votre fichier `index.html`

2. Ajoutez une nouvelle `<section>` nommée "Configuration".

3. Créez un formulaire (`<form>`) utilisant la méthode GET.

3. À l'intérieur, ajoutez :

    * Un champ texte pour renommer la pièce.

    * Un curseur (`range`) pour régler la température souhaitée (de 15 à 30°C).

    * Un bouton d'envoi (`submit`).

**Analyse de la transmission**

Une fois le formulaire rempli (par exemple : Pièce = "Cuisine" et Température = "19") et clique sur le bouton :

1. L'URL change : Elle devient `confirmation.html?piece=Cuisine&temp_consigne=19`.

2. Le couple Clé/Valeur : Les noms utilisés dans l'URL (`piece`, `temp_consigne`) correspondent exactement aux attributs `name` définis dans le code HTML.


✅ **Liste de contrôle du projet**

☐ **Mon formulaire possède les attributs `action` et `method`.**

☐ **Chaque balise `<input>` a un attribut `name` unique.**

☐ **Je sais expliquer pourquoi on ne doit pas envoyer un mot de passe en GET.**

☐ **Défi (Optionnel) : Ajouter l'attribut `placeholder` dans le champ texte pour guider l'utilisateur.**

☐ **Validation W3C. le <a href = "https://validator.w3.org/">W3C Validator</a> permet de valider la synthaxe du code**

## 4. Synthèse

* Le client fait une **requête**, le serveur envoie une **réponse**.

* Les formulaires collectent les données via des `input`.

* **GET** est public (URL), **POST** est privé (Corps de la requête).

-----

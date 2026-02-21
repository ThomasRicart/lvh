# Évaluation — Informatique Embarquée et Objets Connectés
**SNT — Seconde** | Durée : 1 heure

---

> **Consignes :** Toutes les réponses doivent être rédigées dans ce notebook. Les exercices sont indépendants. La calculatrice n'est pas autorisée. La documentation micro:bit n'est **pas** autorisée.

---

## Exercice 1 — Vocabulaire et concepts (6 points)

### Question 1.1 (2 pts)

Reliez chaque terme à sa définition correcte :

| Terme | Définition |
|-------|------------|
| **Capteur** | A. Composant qui reçoit un signal numérique et produit une action physique |
| **Actionneur** | B. Interface permettant à un humain d'interagir avec un système informatisé |
| **IHM** | C. Composant qui mesure une grandeur physique et la convertit en signal numérique |
| **Système embarqué** | D. Système informatique intégré dans un objet dédié à une tâche précise |

*Votre réponse (ex: Capteur → C) :*

- Capteur → ...
- Actionneur → ...
- IHM → ...
- Système embarqué → ...

---

### Question 1.2 (2 pts)

Le **lave-linge connecté** ci-dessous communique avec un smartphone via Wi-Fi.

Pour chacun des éléments suivants, précisez s'il s'agit d'un **capteur**, d'un **actionneur** ou d'une **IHM** :

| Élément | Type |
|---------|------|
| Les touches du panneau de contrôle | ... |
| L'écran d'affichage du programme | ... |
| Le capteur de niveau d'eau | ... |
| Le moteur qui fait tourner le tambour | ... |
| L'application sur le smartphone | ... |

---

### Question 1.3 (2 pts)

Complétez les phrases suivantes avec les mots : *sûreté, sécurité, temps réel, botnet*

1. Un système embarqué dans un avion doit répondre en __________ pour corriger la trajectoire en cas de turbulences.
2. La __________ d'un système embarqué garantit qu'il fonctionne sans erreur, même dans des cas extrêmes.
3. La __________ d'un objet connecté concerne sa résistance aux attaques informatiques.
4. Un ensemble d'objets connectés piratés et utilisés pour lancer des attaques s'appelle un __________.

---

## Exercice 2 — Lecture et analyse d'un programme (6 points)

Voici le programme d'un système embarqué sur micro:bit :

```python
from microbit import *

compteur = 0
record = 0

display.show(Image.HAPPY)

while True:
    t = temperature()
    
    if button_a.was_pressed():
        compteur = compteur + 1
        display.show(compteur)
        sleep(800)
        if compteur > record:
            record = compteur
    
    elif button_b.was_pressed():
        compteur = 0
        display.show(Image.SAD)
        sleep(500)
    
    else:
        if t > 30:
            display.show(Image.ANGRY)
        else:
            display.show(Image.HAPPY)
    
    sleep(100)
```

### Question 2.1 (1 pt)

Quel est le rôle de la variable `compteur` ? Et de la variable `record` ?

*Votre réponse :*

...

---

### Question 2.2 (2 pts)

Décrivez en **langage naturel** ce que fait ce programme, comme si vous l'expliquiez à quelqu'un qui ne sait pas programmer.

*Votre réponse (5-8 lignes) :*

...

---

### Question 2.3 (1 pt)

Identifiez les **capteurs** et les **actionneurs** utilisés dans ce programme.

| Type | Composant(s) |
|------|-------------|
| Capteur(s) | ... |
| Actionneur(s) / Sortie(s) | ... |
| IHM (entrée) | ... |

---

### Question 2.4 (2 pts)

On souhaite modifier le programme pour ajouter la fonctionnalité suivante :

> *Quand on appuie sur A et B en même temps, afficher le record (meilleur score).*

En MicroPython micro:bit, on peut détecter l'appui simultané avec :
```python
if button_a.is_pressed() and button_b.is_pressed():
```

Réécrivez la structure `if/elif/else` du programme en intégrant cette fonctionnalité. Vous pouvez n'écrire que la partie modifiée.

*Votre réponse :*

```python
# Votre modification ici


```

---

## Exercice 3 — Écriture d'un programme (8 points)

### Contexte

Vous devez programmer un **système d'alerte pour plante** sur micro:bit.

Le système doit fonctionner ainsi :
- Il lit en permanence la **température** ambiante
- Si la température est **inférieure à 10°C**, la plante risque de geler → afficher `Image.SKULL` et faire défiler le texte `"GEL !"` (sans bloquer la boucle)
- Si la température est **comprise entre 10°C et 30°C** → afficher `Image.HAPPY` (tout va bien)
- Si la température est **supérieure à 30°C** → afficher `Image.ANGRY` et faire défiler `"CHAUD"` (sans bloquer)
- Quand on appuie sur le bouton **A** → afficher la température en degrés Celsius pendant 1 seconde
- Quand on appuie sur le bouton **B** → afficher si la plante est en danger (`Image.NO`) ou non (`Image.YES`) selon la température

### Question 3.1 (2 pts)

Écrivez l'**algorithme** de ce programme en pseudo-code :

```
Initialisation :
  ...

Boucle infinie :
  ...
```

---

### Question 3.2 (6 pts)

Écrivez le **programme Python complet** pour la micro:bit :

```python
from microbit import *

# Votre code ici




```

---

## Exercice 4 — Réflexion et culture numérique (bonus, 2 pts)

Choisissez **une** des deux questions suivantes :

### Option A
Un hôpital souhaite équiper ses perfusions de capteurs connectés pour alerter les infirmières à distance quand le sac est presque vide.

Citez **deux avantages** et **deux risques** de ce système, en lien avec les notions de sûreté et sécurité vues en cours.

### Option B
On estime à 50 milliards le nombre d'objets connectés dans le monde. Ces objets consomment de l'énergie et génèrent des données personnelles.

Identifiez **deux enjeux sociétaux ou environnementaux** liés à cette prolifération d'objets connectés.

---

*Votre réponse :*

...

---

## Barème récapitulatif

| Exercice | Points |
|----------|--------|
| Ex. 1 — Vocabulaire | /6 |
| Ex. 2 — Lecture de programme | /6 |
| Ex. 3 — Écriture de programme | /8 |
| Ex. 4 — Bonus | /2 |
| **Total** | **/20** |

# 📚 Séquence SNT – Informatique Embarquée et Objets Connectés
## Guide professeur – Vue d'ensemble

---

## Organisation de la séquence (4 séances)

| Séance | Titre | Notions du programme couvertes | Durée | Outils |
|--------|-------|-------------------------------|-------|--------|
| S01 | Présentation générale | Systèmes embarqués, capteurs, actionneurs, IHM, IoT, sûreté, sécurité | 1h | Notebook Jupyter |
| S02 | Réaliser une IHM avec micro:bit | IHM, capteur, actionneur, acquisition de données, commande | 2h | Tinkercad + micro:bit (MicroPython) |
| S03 | Projet : concevoir son propre objet connecté | IHM complète, algorithme de contrôle, capteur + actionneur | 2h | Tinkercad + micro:bit (MicroPython) |
| S04 | Évaluation | Toutes les notions de la séquence | 1h | Notebook Jupyter |

---

## Couverture du programme officiel

### Contenus et capacités attendues

| Contenu | Capacité attendue | Séance |
|---------|-------------------|--------|
| Systèmes informatiques embarqués | Identifier des algorithmes de contrôle des comportements physiques à travers les données des capteurs, l'IHM et les actions des actionneurs | S01, S02 |
| Interface homme-machine (IHM) | Réaliser une IHM simple d'un objet connecté | S02, S03 |
| Commande d'un actionneur | Écrire des programmes simples de commande d'un actionneur | S02, S03 |
| Acquisition de données d'un capteur | Écrire des programmes simples d'acquisition de données | S02, S03 |

**Toutes les capacités du programme sont couvertes.**

---

## Prérequis élèves

- Bases Python : variables, boucles `for` et `while`, conditions `if/elif/else`, fonctions simples
- Utilisation basique d'un navigateur web (pour Tinkercad)
- Pas de prérequis en électronique : Tinkercad est entièrement simulé

---

## Fichiers de la séquence

| Fichier | Type | Destination |
|---------|------|-------------|
| `S01_presentation_informatique_embarquee.ipynb` | Notebook élève | Distribuer en début de S01 |
| `S01_CORRECTION.ipynb` | Notebook professeur | Usage professeur uniquement |
| `S02_IHM_microbit_tinkercad.ipynb` | Notebook élève | Distribuer en début de S02 |
| `S02_CORRECTION.ipynb` | Notebook professeur | Usage professeur uniquement |
| `S03_projet_IHM_autonomie.ipynb` | Notebook élève | Distribuer en début de S03 |
| `S03_CORRECTION.ipynb` | Notebook professeur | Usage professeur uniquement |
| `S04_evaluation.md` | Évaluation élève | Distribuer en début de S04 |

---

## Notes pédagogiques par séance

### Séance 1 – Présentation générale (1h)

**Objectif principal** : poser le vocabulaire de base et donner du sens à la notion de système embarqué.

**Point d'attention** : bien distinguer les trois composants fondamentaux : *capteur* (mesure → numérique), *actionneur* (numérique → action physique), *IHM* (interaction humaine). La confusion entre capteur et actionneur est très fréquente chez les élèves — par exemple, croire que le thermomètre « chauffe » la pièce.

**Déroulement suggéré** :
- 10 min : accroche par une vidéo ou une photo de carte micro:bit / voiture autonome
- 20 min : lecture de la partie cours (Parties 1 à 4) avec commentaires oraux
- 25 min : questions 1 à 5 en autonomie ou binôme
- 5 min : mise en commun sur la synthèse finale

**Différenciation** :
- La question 3 (voiture autonome) peut être approfondie par les élèves rapides grâce à une recherche documentaire sur les niveaux d'autonomie SAE (0 à 5).
- La question 5 (attaque Mirai) peut faire l'objet d'une discussion orale collective si le temps manque pour une réponse écrite.

**Erreurs fréquentes** :
- Confondre sûreté (*safety*) et sécurité (*security*) — deux mots proches en français mais distincts techniquement
- Penser que seuls les ordinateurs et smartphones contiennent des systèmes embarqués
- Ne pas trouver d'exemples au-delà du smartphone et de la voiture

**Questions bonus pour les élèves avancés** :
- Un distributeur de billets : quels sont ses capteurs, actionneurs et IHM ?
- Cherchez la différence entre un microprocesseur et un microcontrôleur.
- Est-ce que votre téléphone est un système embarqué ? Justifiez.

---

### Séance 2 – Réaliser une IHM avec Tinkercad (2h)

**Objectif principal** : passer à la pratique — programmer une carte micro:bit simulée pour créer une IHM fonctionnelle avec un capteur et un actionneur.

**Pré-requis technique** : créer un compte Tinkercad est gratuit et ne nécessite pas d'adresse e-mail avec certaines configurations (compte « élève » possible). Prévoir 5 min en début de séance pour la connexion.

**Déroulement suggéré** :
- 5 min : connexion Tinkercad et création du projet
- 20 min : Activité 1 – prise en main (`display.scroll`, `display.show`)
- 30 min : Activité 2 – boutons et compteur (`was_pressed`, `while True`)
- 40 min : Activité 3 – station météo (capteur température + IHM complète)
- 15 min : Activité 4 (bonus) + question finale de bilan
- 10 min : mise en commun collective

**Point d'attention – erreur piège** : dans l'Activité 3, le code de départ écrit `temperature = temperature()`, ce qui crée un conflit de nom : Python écrase la fonction `temperature()` avec la variable du même nom. À la deuxième itération de la boucle, l'appel de `temperature()` provoque une erreur `TypeError`. **Insister sur ce point** — c'est l'erreur la plus fréquente et la plus déroutante. La solution est de nommer la variable `t`, `temp` ou `temp_c`.

**Point d'attention – `is_pressed()` vs `was_pressed()`** : `is_pressed()` renvoie `True` tant que le bouton est maintenu, ce qui fait s'incrémenter un compteur des dizaines de fois par seconde. `was_pressed()` se déclenche une seule fois par appui. Ce point mérite une démonstration en direct.

**Point d'attention – `display.scroll()` bloquant** : par défaut, `display.scroll()` bloque l'exécution du programme jusqu'à la fin du défilement. Si des boutons sont appuyés pendant ce temps, ils ne sont pas détectés. Montrer le paramètre `wait=False` comme solution.

**Tableau des erreurs fréquentes** :

| Erreur | Cause | Correction |
|--------|-------|------------|
| `temperature = temperature()` | Conflit de nom variable/fonction | Renommer : `t = temperature()` |
| `is_pressed()` dans un compteur | Incrémentation en boucle rapide | Utiliser `was_pressed()` |
| Oubli de `while True` | Programme s'exécute une seule fois | Encapsuler dans `while True` |
| `display.scroll()` qui bloque | Comportement bloquant par défaut | Ajouter `wait=False` |
| Indentation incorrecte | SyntaxError ou comportement inattendu | Vérifier 4 espaces dans `while` |

**Remarque sur la matrice LED** : c'est un excellent exemple pédagogique de composant polyvalent — elle est à la fois IHM sortie (communique une info à l'utilisateur), actionneur (produit de la lumière) et même capteur (mesure la luminosité ambiante en mode lecture). Utiliser ce cas pour montrer que les catégories ne sont pas toujours exclusives.

**Activité bonus (dé)** : utilise les images personnalisées `Image("...")` et l'indexation de liste. Réservée aux élèves maîtrisant déjà les listes Python.

---

### Séance 3 – Projet en autonomie (2h)

**Objectif principal** : concevoir et programmer un objet connecté complet de A à Z, en autonomie guidée.

**Déroulement suggéré** :
- 15 min : choix du projet, remplissage de la fiche de projet et du tableau des composants
- 20 min : rédaction de l'algorithme en pseudo-code → **validation professeur obligatoire avant de coder**
- 50 min : codage et tests dans Tinkercad
- 15 min : remplissage de la grille de test
- 10 min : préparation et présentation orale du projet

**Point d'attention – valider l'algorithme avant le code** : le passage professeur à l'étape 2 est crucial. Un algorithme incorrect mène à 30 minutes de débogage stérile. Vérifier que la structure `while True / if / elif / else` est logiquement cohérente, que les variables sont initialisées, et qu'il n'y a pas d'ambiguïté dans les conditions.

**Conseil d'organisation** : constituer les binômes à l'avance et s'assurer que les projets sont variés dans la classe (éviter que tous choisissent le projet 1).

**Complexité des projets** :

| Projet | Difficulté | Public cible |
|--------|-----------|--------------|
| 1 – Alerte canicule | ⭐⭐ Facile | Tous les élèves |
| 2 – Jeu de réaction | ⭐⭐ Facile | Tous les élèves |
| 4 – Boussole affichée | ⭐⭐ Facile | Tous les élèves |
| 5 – Détecteur de mouvement | ⭐⭐⭐ Moyen | Élèves à l'aise |
| 3 – Minuteur de sport | ⭐⭐⭐⭐ Difficile | Élèves avancés |
| 6 – Mini-jeu de mémoire | ⭐⭐⭐⭐ Difficile | Élèves avancés |
| 7 – Projet libre | Variable | Sur validation |

**Remarque sur le projet 4 (Boussole)** : la boussole nécessite un calibrage (`compass.calibrate()`) et n'est pas simulable dans Tinkercad car elle dépend d'un vrai champ magnétique. Si votre établissement possède de vraies cartes micro:bit, ce projet y est mieux adapté. Sinon, orienter les élèves vers un autre projet.

**Questions de passage pour vérifier la compréhension** : lors des rondes en classe, poser ces questions oralement plutôt que de lire le code :
- *Montre-moi le capteur dans ton code. Comment la valeur est-elle récupérée ?*
- *Que se passe-t-il si je change cette valeur dans la simulation ?*
- *Pourquoi as-tu mis `was_pressed()` plutôt que `is_pressed()` ici ?*
- *À quoi sert le `sleep()` à la fin de ta boucle ?*
- *Qu'est-ce que ton programme ferait si on supprimait la boucle `while True` ?*

**Présentation orale** : même courte (2-3 min par binôme), elle a une vraie valeur pédagogique — reformuler en langage naturel ce que fait le programme est un excellent indicateur de compréhension réelle.

---

### Séance 4 – Évaluation (1h)

**Structure de l'évaluation** :

| Exercice | Contenu | Points |
|----------|---------|--------|
| Ex. 1 – Vocabulaire | Reliage, tableau composants, mots manquants | /6 |
| Ex. 2 – Lecture de programme | Analyse, description, modification de code | /6 |
| Ex. 3 – Écriture de programme | Algorithme + code complet (alarme plante) | /8 |
| Ex. 4 – Bonus | Réflexion sur les enjeux sociétaux | /2 |
| **Total** | | **/20** |

**Consignes à rappeler aux élèves** :
- La documentation micro:bit n'est **pas** autorisée
- Les exercices sont **indépendants** — commencer par celui qu'on maîtrise le mieux
- Pour l'exercice 3, rédiger l'algorithme avant le code (même conseil qu'en S03)

**Points de vigilance pour la correction** :

- **Ex. 1.1** : accepter toute formulation correcte du sens, pas seulement un mot clé exact
- **Ex. 2.3** : la matrice LED peut être acceptée comme « IHM sortie » ou « actionneur » — les deux sont corrects
- **Ex. 2.4** : vérifier que la condition `A and B` est placée **avant** les conditions séparées de A et B
- **Ex. 3** : l'essentiel est la structure `while True` + lecture capteur + `if/elif/else` + boutons. Ne pas pénaliser les erreurs mineures de syntaxe si la logique est correcte

**Correction de l'exercice 3 (programme complet attendu)** :

```python
from microbit import *

while True:
    t = temperature()
    
    if button_a.was_pressed():
        display.scroll(str(t) + "C", wait=False)
    
    elif button_b.was_pressed():
        if t < 10 or t > 30:
            display.show(Image.NO)
        else:
            display.show(Image.YES)
    
    else:
        if t < 10:
            display.show(Image.SKULL)
            display.scroll("GEL !", wait=False)
        elif t <= 30:
            display.show(Image.HAPPY)
        else:
            display.show(Image.ANGRY)
            display.scroll("CHAUD", wait=False)
    
    sleep(300)
```

**Barème indicatif pour l'exercice 3** :
- Algorithme structuré et lisible : 2 pts
- `from microbit import *` + `while True` : 1 pt
- Lecture correcte du capteur (`t = temperature()`) : 1 pt
- Structure `if/elif/else` pour les 3 zones de température : 2 pts
- Gestion des boutons A et B : 2 pts

---

## Évaluation alternative – Évaluation pratique sur machine

Si vous souhaitez une évaluation pratique sur Tinkercad plutôt qu'écrite, voici une proposition :

Fournir aux élèves un programme incomplet à compléter dans Tinkercad, par exemple un système de détection de chute (accéléromètre) avec un score et un affichage. Les consignes peuvent être rédigées en Markdown ou dans un notebook Jupyter. Cette approche évalue mieux les compétences de programmation réelle mais est plus longue à corriger.

---

## Ressources complémentaires

- [makecode.microbit.org](https://makecode.microbit.org) – éditeur officiel micro:bit (blocs + JavaScript + Python)
- [microbit.org/fr/](https://microbit.org/fr/) – documentation officielle en français
- [tinkercad.com](https://www.tinkercad.com) – simulateur en ligne (circuits + micro:bit)
- [python.microbit.org](https://python.microbit.org) – éditeur Python micro:bit en ligne (alternative à Tinkercad)
- [pixees.fr](https://pixees.fr) – ressources pédagogiques SNT
- [education.gouv.fr – programme SNT](https://www.education.gouv.fr/bo/19/Special1/MENE1901641A.htm) – programme officiel

---

## Matériel nécessaire

| Séance | Matériel | Remarque |
|--------|----------|----------|
| S01 | Ordinateurs avec Jupyter | 1 par élève ou 1 pour 2 |
| S02 | Ordinateurs avec accès Tinkercad | 1 par élève ou 1 pour 2, compte Tinkercad créé |
| S03 | Ordinateurs avec accès Tinkercad | Idem S02 |
| S04 | Ordinateurs avec Jupyter | 1 par élève, évaluation individuelle |

**Optionnel** : si votre établissement possède de vraies cartes micro:bit, la séance S02 peut être réalisée sur matériel réel. Le code MicroPython est identique. L'avantage est de pouvoir tester l'accéléromètre et la boussole réels.

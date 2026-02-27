# TP 2 : Synthèse d'Analyse - Décharge exponentielle et Valeur Moyenne

**Objectif :** Déterminer la constante de temps d'un signal de décharge sous contraintes géométriques, puis valider l'étude par la dérivation et l'intégration.

---

## Partie 1 : Détermination expérimentale du paramètre $\tau$
On étudie la tension de décharge d'un composant modélisée par :  
$f(x) = 10 e^{-x/\tau}$ (où $\tau$ est la constante de temps)

Le signal doit respecter la contrainte physique suivante :
À l'instant **$x = 2$**, la pente de la tangente à la courbe doit être égale à **$-1,84$**.

**Instructions GeoGebra :**

1. Créez un curseur **`tau`** allant de 0.1 à 10 (incrément 0.1).

2. Saisissez la fonction : `f(x) = 10 * exp(-x / tau)`.

3. Créez un point **`M`** sur la courbe, fixez son abscisse à $x=2$ et tracez sa **tangente**.

4. **Mission :** Ajustez le curseur **`tau`** pour que la pente affichée de la tangente soit la plus proche possible de $-1,84$.
   * *Note : La valeur cible à trouver est $\tau = 2$.*



---

## Partie 2 : Étude du signal identifié
Utilisez maintenant la valeur trouvée (**`tau = 2`**) pour analyser le comportement du signal $f(x) = 10 e^{-0,5x}$.

1. **Étude des variations :**
   - Saisissez `f'(x)` pour afficher la fonction dérivée.
   - *Question :* Justifiez par le calcul que la fonction est strictement décroissante sur $[0 ; +\infty[$.

2. **Analyse de la limite :**
   - Placer un point `N` appartenant à la courbe
   - Déplacez le point `N` vers la droite (grandes valeurs de $x$).
   - *Observation :* Vers quelle valeur limite la tension du signal semble-t-elle tendre ?

---

## Partie 3 : Intégration et Valeur Moyenne
On souhaite évaluer la tension moyenne délivrée par le composant sur un intervalle $[a ; b]$.

1. **Configuration :** Créez deux curseurs **`a`** (min 0) et **`b`** (min 0.1). Réglez `a = 0` et `b = 4`.

2. **Calcul global :** Saisissez `I = Intégrale(f, a, b)` pour obtenir l'aire sous la courbe.

3. **Valeur Moyenne $\mu$ :**
   - Calculez la tension moyenne : `moy = I / (b - a)`.
   - **Visualisation :** Créez le rectangle d'équivalence avec les points `(a,0)`, `(b,0)`, `(b, moy)` et `(a, moy)`. Utilisez l'outil **Polygone** pour le colorer.



4. **Validation théorique (Calcul papier) :**
   - On admet qu'une primitive de $f(x) = 10 e^{-x/2}$ est $F(x) = -20 e^{-x/2}$.
   - **Vérification :** Dérivez $F(x)$ pour confirmer que vous retrouvez bien $f(x)$.
   - **Calcul :** Calculez la valeur exacte de $\mu$ pour l'intervalle $[0 ; 2]$.
   - **Vérification :** Comparez votre résultat avec la valeur `moy` affichée par GeoGebra.
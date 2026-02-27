# C112 - TP1 : Découverte du Plan Complexe avec GeoGebra

**Objectif :** Faire le lien entre les calculs algébriques et la position géométrique d'un point.

## 1. Création et manipulation de base
1. Dans la barre de saisie, tapez : `z_1 = 3 + 2i`.
2. Déplacez le point $z_1$ à la souris et observez comment sa valeur change dans la fenêtre d'algèbre.
3. Créez son conjugué en tapant : `z_2 = conjugate(z_1)`.
   > **Question :** Quel type de symétrie observe-t-on entre $z_1$ et $z_2$ ?
4. Calculez le module de $z_1$ en tapant : `r = abs(z_1)`.

## 2. Forme Trigonométrique dynamique
1. Créez un curseur `θ` (alpha) allant de $0$ à $2\pi$ (en radians).
2. Créez un curseur `mod` (le module) allant de $0$ à $10$.
3. Saisissez le point $z_3$ sous sa forme trigonométrique : `z_3 = mod * (cos(θ) + i * sin(θ))`.
4. **Action :** Fixez `mod = 4` et faites varier `θ`. 
   > **Défi :** Activez la "Trace" sur $z_3$. Quelle figure géométrique obtenez-vous ?

## 3. Somme de vecteurs
1. Créez deux points libres $z_A$ et $z_B$.
2. Saisissez `Somme = z_A + z_B`.
3. Tracez les vecteurs : `u = Vector(z_A)` et `v = Vector(z_B)`.
   > **Observation :** Vérifiez que la position du point `Somme` correspond bien à la règle du parallélogramme apprise en cours.
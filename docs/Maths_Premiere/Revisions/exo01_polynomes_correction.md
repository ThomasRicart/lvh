# Exercice 1: Correction Détaillée : Étude de la fonction $f(x) = 2x^2 - 8x + 6$

## 1. Analyse des racines et du signe

### 1.1 Calcul du discriminant $\Delta$
La fonction est de la forme $ax^2 + bx + c$ avec $a=2$, $b=-8$ et $c=6$.
\\[\Delta = b^2 - 4ac = (-8)^2 - 4(2)(6) = 64 - 48 = 16\\]

### 1.2 Détermination des racines
Puisque $\Delta > 0$, l'équation $f(x) = 0$ admet deux racines réelles distinctes :

* $x_1 = \frac{-b - \sqrt{\Delta}}{2a} = \frac{8 - 4}{4} = \frac{4}{4} = 1$
* $x_2 = \frac{-b + \sqrt{\Delta}}{2a} = \frac{8 + 4}{4} = \frac{12}{4} = 3$

### 1.3 Tableau de signes
Le coefficient $a=2$ est positif, donc la parabole est orientée vers le haut ("en sourire"). La fonction est négative entre les racines.



\\[
\begin{array}{c|ccccccc}
x & -\infty & & 1 & & 3 & & +\infty \\\\
\hline
f(x) & & + & 0 & - & 0 & + & 
\end{array}
\\]

---

## 2. Variations et Géométrie

### 2.1 Coordonnées du sommet $S$
L'abscisse du sommet est donnée par $\alpha = -\frac{b}{2a}$ :

* $x_S = \frac{8}{4} = 2$. 
L'ordonnée est l'image de $x_S$ par $f$ :
* $y_S = f(2) = 2(2)^2 - 8(2) + 6 = 8 - 16 + 6 = -2$. 
Le sommet est **$S(2 ; -2)$**.

### 2.2 Tableau de variations
Puisque $a > 0$, la fonction est d'abord décroissante puis croissante.

\\[ 
\begin{array}{c|ccccc}
x & -\infty & & 2 & & +\infty \\\\
\hline
f'(x) & & - & 0 & + & \\\\
\hline
 & +\infty & & & & +\infty \\\\
f(x) & & \searrow & & \nearrow & \\\\
 & & & -2 & & 
\end{array}
    \\]


### 2.3 Axe de symétrie et appartenance

* **Axe de symétrie :** La droite d'équation **$x = 2$**.
* **Point $A(3 ; 0)$ :** On sait que $3$ est une racine, donc $f(3)=0$. **$A \in \mathcal{C}_f$**.
* **Point $B(-1 ; 15)$ :** $f(-1) = 2(-1)^2 - 8(-1) + 6 = 2 + 8 + 6 = 16$.
    Comme $16 \neq 15$, **$B \notin \mathcal{C}_f$**.

---

## 3. Dérivation et Tangente en $x=0$

### 3.1 Fonction dérivée
En utilisant les règles de dérivation ($x^n \to nx^{n-1}$) :
\\[f'(x) = 2(2x) - 8 = 4x - 8\\]

### 3.2 Tangente $T_0$
L'équation est $y = f'(0)(x - 0) + f(0)$.

* $f'(0) = 4(0) - 8 = -8$
* $f(0) = 6$

L'équation de la tangente est **$y = -8x + 6$**.

---

## 4. Question d'ouverture : Tangente passant par $P(1,5 ; -4)$

### 4.1 Équation de $T_a$
Pour un point d'abscisse $a$, la tangente $T_a$ a pour équation :
\\[y = (4a - 8)(x - a) + (2a^2 - 8a + 6)\\]

### 4.2 Recherche de $a$
Si $P(1,5 ; -4)$ appartient à $T_a$, ses coordonnées vérifient l'équation :
\\[4 = (4a - 8)(1,5 - a) + 2a^2 - 8a + 6\\]
En développant :
\\[4 = 6a - 4a^2 - 12 + 8a + 2a^2 - 8a + 6\\]
\\[4 = -2a^2 + 6a - 6\\]
En passant tout à gauche :
**$2a^2 - 6a + 2 = 0$** (ce qui revient à $a^2 - 3a + 1 = 0$ en divisant par 2).

### 4.3 Résolution
Pour $a^2 - 3a + 1 = 0$ :
$\Delta_a = (-3)^2 - 4(1)(1) = 5$.
Les solutions sont $a_1 = \frac{3 - \sqrt{5}}{2}$ et $a_2 = \frac{3 + \sqrt{5}}{2}$.
**Conclusion :** Il existe **deux** tangentes à la courbe qui passent par le point $P$.
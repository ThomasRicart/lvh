# TP 1 : Approcher l'aire sous la courbe avec GeoGebra

## 1. Mise en place de la fonction

1. Dans la barre de saisie, tapez : `f(x) = -0.5x² + 2x + 1`

2. Définissez l'intervalle d'étude en créant deux curseurs $a$ et $b$ :

   - Cliquez sur l'outil **Curseur**, réglez $a$ de 0 à 5 (incrément 0.1).
   - Créez un curseur $b$ de 0 à 5 (incrément 0.1). Positionnez $a=1$ et $b=4$.

## 2. Sommes de Riemann (Approximation)

On souhaite diviser l'intervalle $[a, b]$ en $n$ rectangles pour estimer l'aire.

1. Créez un curseur `n` (Nombre entier) allant de 1 à 100.

2. Saisissez la commande : `S_inf = SommeInférieure(f, a, b, n)`

3. Saisissez la commande : `S_sup = SommeSupérieure(f, a, b, n)`

4. **Observation :** Faites varier le curseur `n`. 

   - *Question :* Que se passe-t-il pour l'écart entre `S_inf` et `S_sup` quand `n` devient très grand ?

## 3. Valeur exacte

1. Saisissez la commande : `Aire = Intégrale(f, a, b)`

2. Comparez la valeur de `Aire` avec vos sommes précédentes.

3. **Lien avec le cours :** Déterminez par le calcul (sur papier) une primitive $F$ de $f$. [cite_start]Vérifiez que $F(b) - F(a)$ donne le même résultat que GeoGebra.
# TP 3 : Valeur moyenne et "Rectangle d'équivalence"

## 1. Modélisation du signal

On étudie la fonction $f(t) = 4t e^{-t}$ (type charge de condensateur ou signal amorti).

1. Saisissez : `f(x) = 4x * exp(-x)`

2. Créez un curseur `b` allant de 1 à 10. (On fixe $a=0$).

## 2. Calcul de la Valeur Moyenne

1. Saisissez la commande pour l'intégrale : `I = Intégrale(f, 0, b)`

2. Calculez la valeur moyenne $\mu$ en saisissant : `moy = I / b`[cite: 54].

3. Créez le rectangle d'équivalence :

   - Créez les points `A=(0,0)`, `B=(b,0)`, `C=(b, moy)`, `D=(0, moy)`.
   - Utilisez l'outil **Polygone** pour dessiner `ABCD`.

4. **Interprétation visuelle :** - Modifiez `b` avec le curseur. 

   - Justifiez que l'aire du rectangle est toujours égale à l'aire sous la courbe[cite: 56].

## 3. Vers la dérivation (Révision)

1. Utilisez GeoGebra pour trouver le maximum de la fonction $f$ (Commande `Extremum(f)`).

2. Vérifiez par le calcul que ce maximum correspond à la valeur où $f'(x) = 0$.

3. *Question de synthèse :* Pour quelle valeur de $b$ la valeur moyenne $\mu$ est-elle maximale ? (Utilisez le curseur pour observer).
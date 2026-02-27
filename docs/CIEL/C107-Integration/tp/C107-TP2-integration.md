# TP 2 : La fonction "Aire" et sa dérivée

## 1. Construction dynamique

1. Saisissez : `f(x) = sin(x) + 1.5`

2. Créez un curseur `k` allant de 0 à 2$\pi$.

3. Créez le point mobile sur l'axe des abscisses : `M = (k, 0)`

4. Saisissez la commande pour l'aire variable : `Zone = Intégrale(f, 0, k)`

   *GeoGebra affiche l'aire sous la courbe entre 0 et k.*

## 2. Lien avec la Primitive

1. Créez un point `P = (k, Zone)`. Activez la **Trace** sur ce point `P`.

2. Faites varier le curseur `k`. La trace dessine une nouvelle courbe.

3. **Analyse :** - Quelle semble être la nature de la fonction dessinée par la trace de `P` ?

   - Saisissez `G(x) = Intégrale(f)`. Que remarquez-vous par rapport à la trace de `P` ?
   - En utilisant l'outil **Tangente**, créez la tangente à la courbe de `G` au point `P`. 
   - Affichez le coefficient directeur (pente) de cette tangente. Comparez cette valeur avec $f(k)$.

## 3. Conclusion
- Expliquez pourquoi la dérivée de la "fonction aire" est égale à la fonction $f$ initiale.
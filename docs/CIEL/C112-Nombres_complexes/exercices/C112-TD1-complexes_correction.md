# Correction : C112-TD1 – Les Nombres Complexes

## Exercice 1 : Compréhension et Forme Algébrique
Soit $z = 3 - 4i$.

1.  **Terminologie** : 
    * La partie réelle est $\text{Re}(z) = 3$.
    * La partie imaginaire est $\text{Im}(z) = -4$ (attention, le $i$ ne fait pas partie de la valeur de la partie imaginaire).
2.  **Conjugué** : 
    * Le conjugué est $\overline{z} = 3 + 4i$[cite: 304].
3.  **Module** : 
    * $|z| = \sqrt{3^2 + (-4)^2} = \sqrt{9 + 16} = \sqrt{25} = 5$.
4.  **Opposé** : 
    * L'affixe du point $P$ symétrique par rapport à l'origine est $-z = -3 + 4i$.

---

## Exercice 2 : Opérations et Puissances de $i$

1.  **Puissances de $i$** :
    * $i^2 = -1$.
    * $i^3 = i^2 \times i = -1 \times i = -i$.
2.  **Identité remarquable** :
    * $(1+i)^2 = 1^2 + 2i + i^2 = 1 + 2i - 1 = 2i$.
3.  **Quotient** :
    * Pour $z = \dfrac{3-i}{4-3i}$, on multiplie par le conjugué du dénominateur, soit **$4+3i$**.
    * *Calcul détaillé :* $z = \dfrac{(3-i)(4+3i)}{(4-3i)(4+3i)} = \dfrac{12 + 9i - 4i - 3i^2}{16 + 9} = \dfrac{15 + 5i}{25} = \dfrac{3}{5} + \dfrac{1}{5}i$.

---

## Exercice 3 : Résolution d'Équations
Soit $4z^2 - 4z + 5 = 0$.

1.  **Discriminant** : 
    * $\Delta = (-4)^2 - 4(4)(5) = 16 - 80 = -64$.
2.  **Nature des solutions** : 
    * Comme $\Delta < 0$, il existe deux solutions complexes conjuguées.
3.  **Valeurs des solutions** : 
    * $z_1 = \dfrac{-(-4) - i\sqrt{64}}{2(4)} = \dfrac{4 - 8i}{8} = \dfrac{1}{2} - i$.
    * $z_2 = \overline{z_1} = \dfrac{1}{2} + i$.

---

## Exercice 4 : Formes Trigonométrique et Exponentielle
Soit $z_A = -2 + 2i$.

1.  **Module** : 
    * $r = \sqrt{(-2)^2 + 2^2} = \sqrt{8} = 2\sqrt{2}$.
2.  **Argument** : 
    * $\cos \theta = \dfrac{-2}{2\sqrt{2}} = -\dfrac{\sqrt{2}}{2}$ et $\sin \theta = \dfrac{2}{2\sqrt{2}} = \dfrac{\sqrt{2}}{2}$.
    * L'angle correspondant est $\theta = \dfrac{3\pi}{4}$ rad.
3.  **Forme exponentielle** : 
    * $z_A = 2\sqrt{2} e^{i\frac{3\pi}{4}}$.
4.  **Application Électronique** ($Z = 10 + 10i$) :
    * $|Z| = \sqrt{10^2 + 10^2} = 10\sqrt{2}$.
    * $\text{arg}(Z) = \dfrac{\pi}{4}$ (car $\cos \theta$ et $\sin \theta$ sont positifs et égaux).
    * $Z = 10\sqrt{2} e^{i\frac{\pi}{4}}$.
# Correction Complète du CCF Blanc 01 – BTS CIEL 1ère année
## Session 2025-2026

## Grille de notation par compétences

## Grille de notation par compétences (BTS CIEL)

| Compétence | Questions | Points |
| :--- | :--- | :--- |
| **S'informer** | 3.2 a (Paramètres), 4.2 b (Analyse technicien) | 1 |
| **Chercher** | 2.3 (Python), 3.3 b (Taille lot), 4.2 b (Contradiction) | 1 |
| **Modéliser** | 1.2 c (Variations), 2.1 (Suite), 3.1 a (Arbre), 4.1 a (Primitive) | 2 |
| **Raisonner** | 2.2 a (Démo suite), 3.1 c (Bayes), 3.3 a (Inéquation) | 2 |
| **Calculer / Réaliser** | 1.1 ab, 1.2 ab, 1.3 (GGB), 2.2 bc, 3.1 b, 3.2 bc, 4.1 b, 4.2 a | 2 |
| **Communiquer** | 1.1 c (Interprétation), Appels n°1 et n°2 | 2 |
| **TOTAL** | | **10 / 10** |


---

## Partie 1 – Analyse d'un signal thermique

**1.1 – Étude de la limite**
* **a)** On sait que $\displaystyle\lim_{X \to -\infty} e^X = 0$. Comme $\displaystyle\lim_{t \to +\infty} -0,2t = -\infty$, on a : **$\displaystyle\lim_{t \to +\infty} e^{-0,2t} = 0$**.

* **b)** Par somme et produit : $\displaystyle\lim_{t \to +\infty} -40e^{-0,2t} = 0$, donc **$\displaystyle\lim_{t \to +\infty} f(t) = 60$**.

* **c)** **Interprétation :** La température du serveur se stabilise à **60°C** sur le long terme.

**1.2 – Variations et dérivée**
* **a)** $f(t) = 60 - 40e^{-0,2t}$. On applique $(e^{ut})' = u'e^{ut}$ :
  $f'(t) = -40 \times (-0,2)e^{-0,2t} = \mathbf{8e^{-0,2t}}$.

* **b)** Pour tout $t \geq 0$, $e^{-0,2t} > 0$ et $8 > 0$. 

Donc **$f'(t) > 0$** sur $[0 ; +\infty[$.

* **c)** La fonction $f$ est strictement croissante sur $[0 ; +\infty[$.

  * Valeur initiale : $f(0) = 60 - 40e^0 = 60 - 40 = 20^\circ\text{C}$.

**1.3 – Seuil de fonctionnement**
* Par lecture graphique sur GeoGebra ou par résolution de $60 - 40e^{-0,2t} = 55$ :
  $40e^{-0,2t} = 5 \implies e^{-0,2t} = 0,125 \implies -0,2t = \ln(0,125) \implies t = \frac{\ln(0,125)}{-0,2} \approx 10,4$.

  Le seuil est atteint à environ **10 secondes**.

---

## Partie 2 – Gestion d'une pile de messages (Buffer)

**2.1 – Modélisation**

* Diminution de 20 % : multiplication par $0,8$.

* Ajout de 30 messages : $+ 30$.

* On obtient bien : **$u_{n+1} = 0,8u_n + 30$** avec $u_0 = 50$.

**2.2 – Étude de la suite**

* **a)** $v_{n+1} = u_{n+1} - 150 = 0,8u_n + 30 - 150 = 0,8u_n - 120 = 0,8(u_n - 150) = 0,8v_n$.

  $(v_n)$ est donc **géométrique de raison $q = 0,8$**.

* **b)** $v_0 = u_0 - 150 = 50 - 150 = \mathbf{-100}$.

* **c)** $v_n = -100 \times 0,8^n$. Comme $u_n = v_n + 150$, on a : **$u_n = 150 - 100 \times 0,8^n$**.

**2.3 – Algorithme**

```python
u = 50
n = 0
while u <= 120:
    u = 0.8 * u + 30
    n = n + 1
print("Seuil atteint à la minute :", n)
```

## Partie 3 – Contrôle de fiabilité des capteurs


**3.1. Probabilités conditionnelles**

* **a)** Arbre pondéré: 


$$\text{.} \begin{cases} X(0,7) \begin{cases} D(0,02) \\ \bar{D}(0,98) \end{cases} \\ Y(0,3) \begin{cases} D(0,05) \\ \bar{D}(0,95) \end{cases} \end{cases}$$

$$
\begin{aligned}
\text{Racine} 
&\begin{cases} 
X \, (0,7) 
\begin{cases} 
D \, (0,02) \\ 
\bar{D} \, (0,98) 
\end{cases} \\ 
Y \, (0,3) 
\begin{cases} 
D \, (0,05) \\ 
\bar{D} \, (0,95) 
\end{cases} 
\end{cases}
\end{aligned}
$$


* **b)** $P(D)=P(X\cap D)+P(Y \cap D) = (0.7 \times 0.02)+(0.3 \times 0.05)=0.014+0.015=0.029$

* **c)** $P_D(Y)=\dfrac{P(Y \cap D)}{P(D)}=\dfrac{0.015}{0.029}=0.517$

**3.2. Loi Binomiale**

* **a)** Répétition de 50 épreuves de Bernoulli identiques et indépendantes. $Z B(50 ; 0,029)$.

* **b)** $P(Z=2)=0.248$

* **c)** $P(Z>=1)=1-P(Z=0)=1-0.971^n=0.771$

**3.3. Taille de l'échantillon**

* **a)** $P(Z>=1)>0.95$ équivaut à $0.971^n<0.05$

* **b)** On trouve $n=102$




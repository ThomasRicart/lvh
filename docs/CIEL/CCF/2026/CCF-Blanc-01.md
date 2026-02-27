# CCF Blanc 01 Mathématiques – BTS CIEL 1ère année
## Session CIEL 1ère année 2026

**Durée : 55 minutes** **Documents autorisés : Calculatrice graphique, logiciel GeoGebra**

---

## Contexte général
Une start-up conçoit un système de capteurs connectés pour surveiller la température dans des serveurs informatiques. Le TP porte sur l'analyse de la réponse d'un capteur (Partie 1), la gestion des alertes stockées en base de données (Partie 2) et la fiabilité des composants reçus par les fournisseurs (Partie 3).

---

## Partie 1 – Analyse d'un signal thermique 

Lorsqu'un serveur s'allume, la température $T$ (en °C) captée par la sonde en fonction du temps $t$ (en secondes) est modélisée par :

$$f(t) = 60 - 40e^{-0,2t} \quad \text{pour } t \geq 0$$

### 1.1 – Étude de la limite
a) Déterminer $\displaystyle\lim_{t \to +\infty} e^{-0,2t}$.  
b) En déduire $\displaystyle\lim_{t \to +\infty} f(t)$.  
c) Interpréter physiquement ce résultat pour le serveur.

### 1.2 – Variations et dérivée
a) Calculer $f'(t)$.  
b) Étudier le signe de $f'(t)$ sur $[0 ; +\infty[$.  
c) Dresser le tableau de variations de la fonction $f$.

### 1.3 – Seuil de fonctionnement ✋ *Appel professeur n°1*
On considère que le système est stabilisé lorsque la température atteint 55°C.

> **✋ Appel professeur n°1** : À l'aide de GeoGebra, déterminer graphiquement au bout de combien de temps (arrondi à l'unité) cette température est atteinte.

---

## Partie 2 – Gestion d'une pile de messages (Buffer) 

Le système de surveillance génère des logs. Initialement, il y a **50 messages** en attente.
Chaque minute :
* Le système traite et supprime **20 %** des messages présents.
* **30 nouveaux messages** sont générés par les capteurs.

On note $u_n$ le nombre de messages à la minute $n$. On a $u_0 = 50$.

### 2.1 – Modélisation
Justifier que la suite $(u_n)$ vérifie la relation : $u_{n+1} = 0,8u_n + 30$.

### 2.2 – Étude de la suite
On pose $v_n = u_n - 150$.
a) Démontrer que $(v_n)$ est une suite géométrique de raison $q = 0,8$.  
b) Calculer $v_0$.  
c) Exprimer $v_n$ en fonction de $n$, puis en déduire que $u_n = 150 - 100 \times 0,8^n$.

### 2.3 – Algorithme
On souhaite savoir quand la pile dépassera 120 messages. Compléter l'algorithme Python ci-dessous pour répondre au problème :

```python
u = 50
n = 0
while u <= 120:
    u = ... # À compléter
    n = ... # À compléter
print("Seuil atteint à la minute :", n)
```

## Partie 3 – Contrôle de fiabilité des capteurs 

L'entreprise achète ses capteurs chez deux fournisseurs :
* **Fournisseur X** : fournit **70 %** du stock (avec un taux de défectueux de **2 %**).

* **Fournisseur Y** : fournit **30 %** du stock (avec un taux de défectueux de **5 %**).

---

### 3.1 – Probabilités conditionnelles

On tire un capteur au hasard dans le stock global. Soient les événements :

* $X$ : « Le capteur provient du fournisseur X »

* $Y$ : « Le capteur provient du fournisseur Y »

* $D$ : « Le capteur est défectueux »

a) Construire un **arbre pondéré** modélisant cette situation.

b) Calculer la probabilité que le capteur prélevé soit défectueux $P(D)$.

c) Le capteur tiré est défectueux. Calculer la probabilité qu'il provienne du fournisseur Y. On arrondira le résultat à $10^{-3}$.

---

### 3.2 – Loi Binomiale 

On prélève désormais, de manière indépendante, un lot de **50 capteurs**. On considère que la probabilité qu'un capteur soit défectueux est $p = 0,029$ (valeur arrondie). 

Soit $Z$ la variable aléatoire comptant le nombre de capteurs défectueux dans ce lot.

a) Justifier que $Z$ suit une **loi binomiale** et préciser ses paramètres $n$ et $p$.

b) Calculer la probabilité d'avoir **exactement 2** capteurs défectueux dans le lot : $P(Z = 2)$.

c) Calculer la probabilité d'avoir **au moins 1** capteur défectueux : $P(Z \geq 1)$.

---

### 3.3 – Détermination d'une taille d'échantillon ✋ *Appel professeur n°2*

Le responsable qualité souhaite que la probabilité de détecter **au moins un** capteur défectueux dans un lot de $n$ capteurs soit supérieure à **0,95**. On rappelle que la probabilité qu'un capteur soit défectueux est $p = 0,029$.

a) Montrer que la condition $P(Z \geq 1) > 0,95$ est équivalente à l'inéquation :  

$(0,971)^n < 0,05$

b) Déterminer le nombre minimal $n$ de capteurs que le responsable doit prélever pour respecter cette exigence. 

> **✋ Appel professeur n°2** : Utiliser l'outil "Calcul de probabilités" de **GeoGebra**. 


---

## Partie 4 – Énergie thermique et valeur moyenne *(4 points)*

Dans cette phase de montée en température, l'énergie thermique accumulée par le système entre deux instants $t_1$ et $t_2$ est liée à l'intégrale de la fonction $f$. 

On rappelle que la température est donnée par $f(t) = 60 - 40e^{-0,2t}$.

### 4.1 – Recherche de primitive

a) Déterminer une primitive $F$ de la fonction $f$ sur l'intervalle $[0 ; +\infty[$.

b) Calculer la valeur exacte de l'intégrale $I = \displaystyle\int_{0}^{10} f(t) \, dt$.

### 4.2 – Température moyenne
La température moyenne $T_m$ d'un composant sur un intervalle $[a ; b]$ est donnée par la formule :

$T_m = \frac{1}{b-a} \displaystyle\int_{a}^{b} f(t) \, dt$

a) Calculer la température moyenne du serveur durant les 10 premières secondes de son fonctionnement. On arrondira le résultat au dixième.

b) **S'informer / Chercher :** Un technicien affirme que sur ces 10 secondes, la température moyenne est exactement égale à la moyenne arithmétique entre la température initiale $f(0)$ et la température finale $f(10)$. 
En comparant les résultats, dire si cette affirmation est vraie. Justifier pourquoi ce type de raisonnement est risqué avec des fonctions exponentielles.

---

---
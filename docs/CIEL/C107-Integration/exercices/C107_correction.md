# 📝 Corrigé : C107 – Intégration

---

## Exercice 1 : Calculs d'intégrales basiques
*Rappel : $\int_{a}^{b} f(x) dx = [F(x)]_{a}^{b} = F(b) - F(a)$*

1. **$I_1 = \int_{1}^{2} (3x^2 - 2x) dx$**
   * Primitive : $F(x) = x^3 - x^2$
   * Calcul : $I_1 = [2^3 - 2^2] - [1^3 - 1^2]$
   * $I_1 = (8 - 4) - (1 - 1) = 4 - 0$
   * **$I_1 = 4$**

2. **$I_2 = \int_{0}^{\pi} \cos(t) dt$**
   * Primitive : $F(t) = \sin(t)$
   * Calcul : $I_2 = \sin(\pi) - \sin(0)$
   * $I_2 = 0 - 0$
   * **$I_2 = 0$** *(L'aire positive entre $0$ et $\pi/2$ compense l'aire négative entre $\pi/2$ et $\pi$)*

3. **$I_3 = \int_{0}^{1} e^{3t} dt$**
   * Primitive : $F(t) = \frac{1}{3}e^{3t}$
   * Calcul : $I_3 = \frac{1}{3}e^{3 \times 1} - \frac{1}{3}e^{3 \times 0}$
   * **$I_3 = \frac{1}{3}(e^3 - 1) \approx 6,36$**

---

## Exercice 2 : Valeur moyenne et exponentielle composée
*Fonction : $f(t) = 4t e^{t^2}$ sur $[0 ; 2]$*

1. **Justification de la primitive $F(t) = 2e^{t^2}$ :**
   * On pose $u(t) = t^2$, d'où $u'(t) = 2t$.
   * La dérivée de $e^{u}$ est $u'e^u$.
   * $F'(t) = 2 \times (2t e^{t^2}) = 4t e^{t^2}$. 
   * On retrouve bien $f(t)$, donc $F$ est une primitive de $f$.

2. **Calcul de l'intégrale $I = \int_{0}^{2} 4t e^{t^2} dt$ :**
   * $I = [2e^{t^2}]_{0}^{2}$
   * $I = 2e^{2^2} - 2e^{0^2} = 2e^4 - 2e^0$
   * **$I = 2e^4 - 2 \approx 107,20$**

3. **Valeur moyenne $\mu$ sur $[0 ; 2]$ :**
   * $\mu = \frac{1}{2-0} \times I = \frac{1}{2} \times (2e^4 - 2)$
   * **$\mu = e^4 - 1 \approx 53,60$**



---

## Exercice 3 : Application au signal (Valeur efficace)
*On utilise $\sin^2(t) = \frac{1-\cos(2t)}{2}$ sur $[0 ; \pi]$*

1. **Calcul de l'intégrale :**
   * $\int_{0}^{\pi} \sin^2(t) dt = \int_{0}^{\pi} (\frac{1}{2} - \frac{1}{2}\cos(2t)) dt$
   * Primitive : $[\frac{1}{2}t - \frac{1}{4}\sin(2t)]_{0}^{\pi}$
   * Calcul : $(\frac{1}{2}\pi - \frac{1}{4}\sin(2\pi)) - (\frac{1}{2}(0) - \frac{1}{4}\sin(0))$
   * Comme $\sin(2\pi) = 0$ et $\sin(0) = 0$, il reste :
   * **$I = \frac{\pi}{2}$**

2. **Valeur moyenne du carré du signal :**
   * $\mu = \frac{1}{\pi - 0} \times \frac{\pi}{2}$
   * **$\mu = \frac{1}{2}$** *(Ce résultat est logique : la valeur moyenne de $\sin^2$ est $0,5$)*

---

## Exercice 4 : Interprétation graphique
*Fonction $f(x) = 4-x^2$ sur $[-2 ; 2]$*



1. **Calcul de l'intégrale $J$ :**
   * Primitive : $F(x) = 4x - \frac{x^3}{3}$
   * $J = [4(2) - \frac{2^3}{3}] - [4(-2) - \frac{(-2)^3}{3}]$
   * $J = (8 - \frac{8}{3}) - (-8 + \frac{8}{3}) = \frac{16}{3} - (-\frac{16}{3})$
   * **$J = \frac{32}{3} \approx 10,67$ u.a.**

2. **Aire en $cm^2$ ($1$ u.a. $= 2$ $cm^2$) :**
   * $Aire = \frac{32}{3} \times 2 = \frac{64}{3}$
   * **$Aire \approx 21,33$ $cm^2$**
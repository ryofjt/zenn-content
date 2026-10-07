---
title: "Supersymmetry"
---

# super vector space, super algebra

$\mathbb{R}$ 上で考える

$\mathbb{Z} / 2\mathbb{Z}$ 次数付きのベクトル空間 $V = V_0 \oplus V_1$ を super vector space という

$\mathbb{Z} / 2\mathbb{Z}$ 次数付きの代数 $A = A_0 \oplus A_1$ を super algebra という。外積代数

$$
\Lambda(\theta_1, \dots, \theta_q) = \bigoplus_{1 \le i_1 < \cdots < i_k \le q} \mathbb{R} \theta_{i_1} \cdots \theta_{i_k}
$$

は $k$ の偶奇で次数付けすると、super algebra になる。Super algebra $A$ が supercommutative とは

$$
ab = (-1)^{|a||b|} ba \quad (a, b \in A_0 \sqcup A_1)
$$

が成り立つことをいう。$\Lambda(\theta_1, \dots, \theta_q)$ は、$\theta_i \theta_j = -\theta_j \theta_i$ だから、supercommutative

$A, B$ を super algebra とすると、$A \otimes B$ は

$$
(a \otimes b)(a' \otimes b') \coloneqq (-1)^{|b||a'|} aa' \otimes bb'
$$

によって super algebra になる。$\Lambda(\theta_1, \dots, \theta_q) \otimes \Lambda(\xi_1, \dots, \xi_{q'}) = \Lambda(\theta_1, \dots, \theta_q, \xi_1, \dots, \xi_{q'})$

# Superspace

$U_0 \subset \mathbb{R}^p$
$U_0$ 上の関数環は $C^\infty(U_0)$

$U_0 \subset \mathbb{R}^p$, $V_0 \subset \mathbb{R}^{p'}$
$f_0: U_0 \to V_0$ は $f_0^*: C^\infty(V_0) \to C^\infty(U_0)$ から以下のように復元される

$$
f_0 = (f_0^*y_1, \dots, f_0^*y_{p'})
$$

$$
\begin{array}{ccc}
  \{ U_0 \text{ の圏} \} &\overset{\text{反変}}{\simeq}& \{ C^\infty(U_0) \text{ の圏} \} \\
  U_0 \xrightarrow{f_0} V &\leftrightarrow& C^\infty(V_0) \xrightarrow{f_0^*} C^\infty(U_0)
\end{array}
$$

右辺を super algebra に取り替えて、superspace を定義する

Super algebra

$$
\mathcal{O}(U) \coloneqq C^\infty(U_0) \otimes \Lambda(\theta_1, \dots, \theta_q) \quad (U_0 \subset \mathbb{R}^p, q \ge 0)
$$

を幾何的な対象とみなして、superspace $U$ と定義する。つまり

$$
\begin{array}{ccc}
  \{ U \text{ の圏} \} &\overset{\text{反変}}{\simeq}& \{ \mathcal{O}(U) \text{ の圏} \} \\
  U \xrightarrow{f} V &\leftrightarrow& \mathcal{O}(V) \xrightarrow{f^*} \mathcal{O}(U)
\end{array}
$$

$\theta_i = 0$ を考えれば

$$
\begin{array}{ccc}
  \{ U \text{ の圏} \} &\overset{\text{反変}}{\simeq}& \{ \mathcal{O}(U) \text{ の圏} \} \\
  \downarrow && \downarrow \\
  \{ U_0 \text{ の圏} \} &\overset{\text{反変}}{\simeq}& \{ C^\infty(U_0) \text{ の圏} \}
\end{array}
$$


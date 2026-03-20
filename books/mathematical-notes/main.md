---
title: "main"
---

# 射影による pushforward

$Z \subset X \times Y$: 閉集合
$\mathrm{pr}_X|_Z: Z \to X$ は proper とする
$\Gamma_Z(X \times Y, \mathcal{D}') \subset \mathcal{D}'(X \times Y)$ を $\mathrm{supp} \subset Z$ なものたちに相対位相を入れた空間とする
$\mathrm{pr}_{X, *}: \Gamma_Z(X \times Y, \mathcal{D}') \to \mathcal{D}'(X)$ を

$$
(\mathrm{pr}_{X, *} u)(\varphi) = u(\varphi_\varphi \mathrm{pr}_X^*\varphi) \quad (\varphi \in C^\infty_c(X))
$$

で定義する。ただし、$\varphi_\varphi \in C^\infty_c(X \times Y)$ は $\mathrm{pr}_X^{-1}(\mathrm{supp} \varphi) \cap Z$ の近傍で $\equiv 1$。この定義は $\varphi_\varphi$ に依らない。$\mathrm{pr}_{X, *}: \Gamma_Z(X \times Y, \mathcal{D}') \to \mathcal{D}'(X)$ は連続

$\Gamma \subset T^*(X \times Y) \setminus \{0\}$: closed cone
$\pi(\Gamma) \subset X \times Y$ は閉集合。$\mathrm{pr}_X|_{\pi(\Gamma)}: \pi(\Gamma) \to X$ は proper とする
$\Gamma_{\pi(\Gamma)}(X \times Y, \mathcal{D}'_\Gamma) \subset \mathcal{D}'_\Gamma(X \times Y)$ を $\mathrm{supp} \subset \pi(\Gamma)$ なものたちに相対位相を入れた空間とする

$$
f_*\Gamma \coloneqq \{ (x, \xi) \in T^*X \setminus \{0\} \mid \exists y \in Y, (x, y, \xi, 0) \in \Gamma \}
$$

は closed cone
$\mathrm{pr}_{X, *}: \Gamma_{\pi(\Gamma)}(X \times Y, \mathcal{D}'_\Gamma) \to \mathcal{D}'_{f_*\Gamma}(X)$ は連続

$x_0 \in X$ とする。closed cone $\Lambda \subset \mathbb{R}^n \setminus \{0\}$ は $\Lambda \cap (f_*\Gamma)_{x_0} = \emptyset$ とする。任意の $y_0 \in Y$ に対して、$(\Lambda \times \{0\}) \cap \Gamma_{(x_0, y_0)} = \emptyset$。開集合 $x_0 \in U_{y_0} \subset X$, $y_0 \in V_{y_0} \subset Y$ が存在して、$(\Lambda \times \{0\}) \cap \Gamma_{(x, y)} = \emptyset \ (x \in U_{y_0}, y \in V_{y_0})$。$\pi(\Gamma)_{x_0} \subset V_{y_1} \cup \cdots \cup V_{y_P}$ とする。$\psi_i \in C^\infty_c(V_{y_i})$ を $\pi(\Gamma)_{x_0}$ の近傍上 $\sum_{i = 1}^P \psi_i \equiv 1$ なるようにとる。開集合 $x_0 \in U \subset U_{y_1} \cap \cdots \cap U_{y_P}$ を $x \in U$ ならば $\pi(\Gamma)_x$ の近傍上 $\sum_{i = 1}^P \psi_i \equiv 1$ なるようにとる。$\varphi \in C^\infty_c(U)$ とする。$u \in \Gamma_{\pi(\Gamma)}(X \times Y, \mathcal{D}'_\Gamma)$ に対して、$\xi \in \Lambda$ ならば

$$
\begin{aligned}
  |\xi|^N |\widehat{\varphi \mathrm{pr}_*u}(\xi)| &= (2\pi)^{-n/2} |\xi|^N |\sum_{i = 1}^P u(\psi_i(y)\varphi(x)e^{-i\xi x})| \\
  &= (2\pi)^{m/2} |\xi|^N |\sum_{i = 1}^P \widehat{(\varphi \otimes \psi_i)u}(\xi, 0)| \\
  &\le (2\pi)^{m/2} \sum_{i = 1}^P \sup_{\xi \in \Lambda} |\xi|^N |\widehat{(\varphi \otimes \psi_i)u}(\xi, 0)|
\end{aligned}
$$

# Microlocal analysis へのメモ

https://webusers.imj-prg.fr/~pierre.schapira/LectNotes/MuShv.pdf

- Wave front set
- $\mathrm{SS}(F)$
- $\mathrm{Ch}(\mathcal{M})$
- $\mathrm{Ch}(\mathcal{M}) = \mathrm{SS}(F)$, Riemann$\text{--}$Hilbert 対応, 柏原の指数定理

# Kernel を用いた作用素

$K \in \mathcal{D}'(X \times Y) \simeq \mathcal{D}'(X) \hat{\otimes} \mathcal{D}'(Y) \simeq L_b(C^\infty_c(Y), \mathcal{D}'(X))$ は $\mathrm{pr}_X|_{\mathrm{supp} K}: \mathrm{supp} K \to X$ が proper だとする

$$
\begin{aligned}
  WF'(K) &\coloneqq \{ (x, y, \xi, \eta) \mid (x, y, \xi, -\eta) \in WF(K) \} \\
  WF(K)_X &\coloneqq \{ (x, \xi) \mid \exists y \in Y, (x, y, \xi, 0) \in WF(K) \} \\
  WF'(K)_Y &\coloneqq \{ (y, \eta) \mid \exists x \in X, (x, y, 0, -\eta) \in WF(K) \}
\end{aligned}
$$

Closed cone $\Gamma \subset T^*X \setminus \{0\}$ は $\Gamma \cap WF'(K)_Y = \emptyset$ を満たすとする
$WF(K)_X \cup (WF'(K) \circ \Gamma) = WF(K)_X \cup \{ (x, \xi) \mid \exists (y, \eta) \in \Gamma, (x, y, \xi, \eta) \in WF'(K) \}$ は closed cone になる。$K$ は線形写像 $\mathcal{K}: C^\infty_c(Y) \to \mathcal{D}'(X)$ を定めるが、連続な $\mathcal{K}: \mathcal{D}'_\Gamma(Y) \to \mathcal{D}'_{WF(K)_X \cup (WF'(K) \circ \Gamma)}(X)$ に一意的に拡張する

$$
\begin{aligned}
  \mathcal{D}_\Gamma(Y) \ni u &\mapsto 1 \otimes u \in \mathcal{D}'_{\{0\} \times \Gamma}(X \times Y) \\
  &\mapsto K \cdot (1 \otimes u) \in \Gamma_{\mathrm{supp} K}(X \times Y, \mathcal{D}'_{(WF(K) + (\{0\} \times \Gamma)) \cup WF(K) \cup (\{0\} \times \Gamma)}) \\
  &\qquad \simeq \Gamma_{\mathrm{supp} K}(X \times Y, \mathcal{D}'_{(WF(K) + (\{0\} \times \Gamma)|_{\mathrm{supp} K}) \cup WF(K) \cup (\{0\} \times \Gamma)|_{\mathrm{supp} K}}) \\
  &\mapsto \mathcal{K}u \in \mathcal{D}'_{WF(K)_X \cup (WF'(K) \circ \Gamma)}(X)
\end{aligned}
$$

# pullback

# pushforward

---
title: "main"
---

# これは何

https://zenn.dev/ryoaq/scraps/49d25b1a8a203e の続きです

# 射影による pushforward

$\mathcal{D}'_\Gamma$ は層をなす

$Z \subset X \times Y$: 閉集合
$\mathrm{pr}_X|_Z: Z \to X$ は proper とする
$\Gamma_Z(X \times Y, \mathcal{D}') \subset \mathcal{D}'(X \times Y)$ を $\mathrm{supp} \subset Z$ なものたちに相対位相を入れた空間とする
$\mathrm{pr}_{X, *}: \Gamma_Z(X \times Y, \mathcal{D}') \to \Gamma_{\mathrm{pr}_X(Z)}(X, \mathcal{D}')$ を

$$
(\mathrm{pr}_{X, *} u)(\varphi) = u(\varphi_\varphi \mathrm{pr}_X^*\varphi) \quad (\varphi \in C^\infty_c(X))
$$

で定義する。ただし、$\varphi_\varphi \in C^\infty_c(X \times Y)$ は $\mathrm{pr}_X^{-1}(\mathrm{supp} \varphi) \cap Z$ の近傍で $\equiv 1$。この定義は $\varphi_\varphi$ に依らない。$\mathrm{pr}_{X, *}: \Gamma_Z(X \times Y, \mathcal{D}') \to \Gamma_{\mathrm{pr}_X(Z)}(X, \mathcal{D}')$ は連続

$\Gamma \subset T^*(X \times Y) \setminus \{0\}$: closed cone
$\pi(\Gamma) \subset Z \subset X \times Y$ は閉集合で、$\mathrm{pr}_X|_Z: Z \to X$ は proper とする
$\Gamma_Z(X \times Y, \mathcal{D}'_\Gamma) \subset \mathcal{D}'_\Gamma(X \times Y)$ を $\mathrm{supp} \subset Z$ なものたちに相対位相を入れた空間とする

$$
\mathrm{pr}_{X, *}\Gamma \coloneqq \{ (x, \xi) \in T^*X \setminus \{0\} \mid \exists y \in Y, (x, y, \xi, 0) \in \Gamma \}
$$

は closed cone
$\mathrm{pr}_{X, *}: \Gamma_Z(X \times Y, \mathcal{D}'_\Gamma) \to \Gamma_{\mathrm{pr}_X(Z)}(X, \mathcal{D}'_{\mathrm{pr}_{X, *}\Gamma})$ は連続

$x_0 \in X$ とする。closed cone $\Lambda \subset \mathbb{R}^n \setminus \{0\}$ は $\Lambda \cap (\mathrm{pr}_{X, *}\Gamma)_{x_0} = \emptyset$ とする。任意の $y_0 \in Y$ に対して、$(\Lambda \times \{0\}) \cap \Gamma_{(x_0, y_0)} = \emptyset$。開集合 $x_0 \in U_{y_0} \subset X$, $y_0 \in V_{y_0} \subset Y$ が存在して、$(\Lambda \times \{0\}) \cap \Gamma_{(x, y)} = \emptyset \ (x \in U_{y_0}, y \in V_{y_0})$。$Z_{x_0} \subset V_{y_1} \cup \cdots \cup V_{y_P}$ とする。$\psi_i \in C^\infty_c(V_{y_i})$ を $Z_{x_0}$ の近傍上 $\sum_{i = 1}^P \psi_i \equiv 1$ なるようにとる。開集合 $x_0 \in U \subset U_{y_1} \cap \cdots \cap U_{y_P}$ を $x \in U$ ならば $Z_x$ の近傍上 $\sum_{i = 1}^P \psi_i \equiv 1$ なるようにとる。$\varphi \in C^\infty_c(U)$ とする。$u \in \Gamma_Z(X \times Y, \mathcal{D}'_\Gamma)$ に対して、$\xi \in \Lambda$ ならば

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

$K \in \mathcal{D}'(X \times Y) \simeq \mathcal{D}'(X) \hat{\otimes} \mathcal{D}'(Y) \simeq L_b(C^\infty_c(Y), \mathcal{D}'(X))$

$$
WF'(K) \coloneqq \{ (x, y, \xi, \eta) \mid (x, y, \xi, -\eta) \in WF(K) \}
$$

Closed cone $\Gamma \subset T^*Y \setminus \{0\}$ は $\Gamma \cap (0_X \circ WF'(K)) = \emptyset$ を満たすとする。閉集合 $\pi(\Gamma) \subset Z \subset Y$ は $\mathrm{pr}_X|_{\mathrm{supp} K \cap (X \times Z)}: \mathrm{supp} K \cap (X \times Z) \to X$ が proper だとする。$(WF'(K) \circ \Gamma) \cup (WF'(K) \circ 0_Z)$ は closed cone になる。連続な $\mathcal{K}: \Gamma_Z(Y, \mathcal{D}'_\Gamma) \to \Gamma_{\mathrm{supp} K \circ Z}(X, \mathcal{D}'_{(WF'(K) \circ \Gamma) \cup (WF'(K) \circ 0_Z)})$ が定まる

$$
\begin{aligned}
  \Gamma_Z(Y, \mathcal{D}'_\Gamma) \ni u &\mapsto 1 \otimes u \in \Gamma_{X \times Z}(X \times Y, \mathcal{D}'_{0_X \times \Gamma}) \\
  &\mapsto K \cdot (1 \otimes u) \in \Gamma_{\mathrm{supp} K \cap (X \times Z)}(X \times Y, \mathcal{D}'_{(WF(K) + (0_X \times \Gamma)) \cup WF(K) \cup (0_X \times \Gamma)}) \\
  &\qquad \simeq \Gamma_{\mathrm{supp} K \cap (X \times Z)}(X \times Y, \mathcal{D}'_{(WF(K)|_{X \times Z} + (0_X \times \Gamma)|_{\mathrm{supp} K}) \cup WF(K)|_{X \times Z} \cup (0_X \times \Gamma)|_{\mathrm{supp} K}}) \\
  &\mapsto \mathcal{K}u \in \Gamma_{\mathrm{supp} K \circ Z}(X, \mathcal{D}'_{(WF'(K) \circ \Gamma) \cup (WF'(K) \circ 0_Z)})
\end{aligned}
$$

# Closed cone に関する補題

$C \subset T^*X \times T^*Y$: closed cone

$\mathrm{pr}_{T^*X}|_C: C \to T^*X$ が proper $\Leftrightarrow$ $\mathrm{pr}_X|_{C \cap 0_{X \times Y}}: C \cap 0_{X \times Y} \to X$ が proper かつ $C \cap (0_X \times T^*Y) \subset 0_{X \times Y}$

$\Rightarrow$
$(x_n, y_n, 0, 0) \in C$ は $x_n \to x$ だとする。仮定から、部分列を取れば、$y_n \to y$。$(x, y, 0, \eta) \in C$ とする。$\eta \ne 0$ と仮定すると、$(x, y, 0, n\eta) \in C$ は収束部分列をもたず、矛盾する

$\Leftarrow$
$(x_n, y_n, \xi_n, \eta_n) \in C$ は $x_n \to x$ かつ $\xi_n \to \xi$ とする。$n$ を固定して、$(x_n, y_n, \xi_n / m, \eta_n / m) \in C$ を考えると、$(x_n, y_n, 0, 0) \in C$。よって、$y_n \to y$ として良い。$|\eta_n| \to \infty$ と仮定する。$\eta_n / |\eta_n| \to \beta$ として良い。$(x_n, y_n, \xi_n / |\eta_n|, \eta_n / |\eta_n|) \in C$ を考えると、$(x, y, 0, \beta) \in C \cap (0_X \times T^*Y)$ だが、$|\beta| = 1$ なので矛盾する

# 記法の整理

$K \in \mathcal{D}'(X \times Y)$

$$
\widetilde{WF}'(K) \coloneqq WF'(K) \cup (\mathrm{supp} K \times \{0\})
$$

Closed cone $\tilde{\Gamma} \subset T^*Y$ は $\mathrm{pr}_{T^*X}|_{\widetilde{WF}'(K) \cap (T^*X \times \tilde{\Gamma})}: \widetilde{WF}'(K) \cap (T^*X \times \tilde{\Gamma}) \to T^*X$ が proper だとする。$\widetilde{WF}'(K) \circ \tilde{\Gamma}$ は closed cone になる。連続な

$$
\mathcal{K}: \mathcal{D}'_{\tilde{\Gamma}}(Y) \to \mathcal{D}'_{\widetilde{WF}'(K) \circ \tilde{\Gamma}}(X)
$$

が定まる。ただし、$\mathcal{D}'_{\tilde{\Gamma}}(Y) \coloneqq \Gamma_{\tilde{\Gamma} \cap 0_Y}(Y, \mathcal{D}'_{\tilde{\Gamma} \cap (T^*Y \setminus \{0\})})$

$K$ は線形写像 $\mathcal{K}: C^\infty_c(Y) \to \mathcal{D}'(X)$ とみなせるが

$$
\mathcal{K}: \varinjlim_{\Gamma \text{ s.t. } \mathrm{pr}_{T^*X}|_{\widetilde{WF}'(K) \cap (T^*X \times \tilde{\Gamma})} \text{ is proper}} \mathcal{D}'_{\tilde{\Gamma}}(Y) \to \mathcal{D}'(X)
$$

は一意的な連続拡張になっている

# 合成

$K \in \mathcal{D}'(X \times Y)$, $L \in \mathcal{D}'(Y \times Z)$

$\mathrm{pr}_{T^*X \times T^*Z}|_{(\widetilde{WF}'(K) \times T^*Z) \cap (T^*X \times \widetilde{WF}'(L))}: (\widetilde{WF}'(K) \times T^*Z) \cap (T^*X \times \widetilde{WF}'(L)) \to T^*X \times T^*Z$ は proper とする。これは、$\mathrm{pr}_{X \times Z}|_{(\mathrm{supp} K \times Z) \cap (X \times \mathrm{supp} L)}: (\mathrm{supp} K \times Z) \cap (X \times \mathrm{supp} L) \to X \times Z$ が proper かつ $(0_X \circ WF'(K)) \cap (WF'(L) \circ 0_Z) = \emptyset$ と同値。このとき、$K \circ L \in \mathcal{D}'(X \times Z)$ が定まり

$$
\widetilde{WF}'(K \circ L) \subset \widetilde{WF}'(K) \circ \widetilde{WF}'(L)
$$

Closed cone $\tilde{\Gamma} \subset T^*Z$ は

$$
\begin{aligned}
  \mathrm{pr}_{T^*Y}|_{\widetilde{WF}'(L) \cap (T^*Y \times \tilde{\Gamma})}&: \widetilde{WF}'(L) \cap (T^*Y \times \tilde{\Gamma}) \to T^*Y \\
  \mathrm{pr}_{T^*X}|_{\widetilde{WF}'(K) \cap (T^*X \times (\widetilde{WF}'(L) \circ \tilde{\Gamma}))}&: \widetilde{WF}'(K) \cap (T^*X \times (\widetilde{WF}'(L) \circ \tilde{\Gamma})) \to T^*X
\end{aligned}
$$

の 2 つが proper だとする。このとき、$\mathrm{pr}_{T^*X}|_{(\widetilde{WF}'(K) \circ \widetilde{WF}'(L)) \cap (T^*X \times \tilde{\Gamma})}: (\widetilde{WF}'(K) \circ \widetilde{WF}'(L)) \cap (T^*X \times \tilde{\Gamma}) \to T^*X$ は自動的に proper

$$
\begin{aligned}
  \mathcal{L}&: \mathcal{D}'_{\tilde{\Gamma}}(Z) \to \mathcal{D}'_{\widetilde{WF}'(L) \circ \tilde{\Gamma}}(Y) \\
  \mathcal{K}&: \mathcal{D}'_{\widetilde{WF}'(L) \circ \tilde{\Gamma}}(Y) \to \mathcal{D}'_{\widetilde{WF}'(K) \circ \widetilde{WF}'(L) \circ \tilde{\Gamma}}(X)
\end{aligned}
$$

が定まり、合成は $K \circ L$ の定める作用素と一致する

# pullback の kernel 表示

$f: X \to Y$: $C^\infty$ 級
$\delta(y - f(x)) \coloneqq (y - f(x))^*\delta \in \mathcal{D}'(X \times Y)$ は

$$
\begin{aligned}
  WF(\delta(y - f(x))) &\subset \{ (x, f(x), -df^*_x\eta, \eta) \mid \eta \ne 0 \} \\
  WF'(\delta(y - f(x))) &\subset \{ (x, f(x), df^*_x\eta, \eta) \mid \eta \ne 0 \} \\
  WF'(\delta(y - f(x))) \circ 0_Y &= \emptyset \\
  0_X \circ WF'(\delta(y - f(x))) &\subset \{ (y, \eta) \in T^*Y \setminus \{0\} \mid \exists x \in f^{-1}(y), df^*_x\eta = 0 \}
\end{aligned}
$$

を満たす。$\delta(y - f(x))$ が定める作用素を $u \in C^\infty_c(Y)$ に適用すると

$$
\begin{aligned}
  \varphi &\mapsto \delta(y - f(x))(\varphi \otimes u) \\
  &= (2\pi)^{-m/2} \int d\eta \, \hat{\delta}(\eta) \int e^{i\eta(y - f(x))}\varphi(x)u(y) \, dxdy \\
  &= (2\pi)^{-m} \int d\eta \int e^{i\eta(y - f(x))}\varphi(x)u(y) \, dxdy \\
  &= (2\pi)^{-m/2} \int d\eta \int e^{-i\eta f(x)}\varphi(x)\hat{u}(-\eta) \, dx \\
  &= \int \varphi(x)u(f(x)) \, dx
\end{aligned}
$$

よって、$f^*$ の kernel は $\delta(y - f(x))$

Closed cone $\tilde{\Gamma} \subset T^*Y$ が $f^{-1}\tilde{\Gamma} \cap N_f \subset 0_X$ を満たせば

$$
f^*: \mathcal{D}'_{\tilde{\Gamma}}(Y) \to \mathcal{D}'_{f^*\tilde{\Gamma}}(X)
$$

が定まる。ただし、$f^*\tilde{\Gamma} \coloneqq df^*(f^{-1}\tilde{\Gamma})$

# pushforward

$f: X \to Y$: $C^\infty$ 級
$\delta(y - f(x)) \in \mathcal{D}'(Y \times X)$ は

$$
\begin{aligned}
  WF(\delta(y - f(x))) &\subset \{ (f(x), x, \eta, -df^*_x\eta) \mid \eta \ne 0 \} \\
  WF'(\delta(y - f(x))) &\subset \{ (f(x), x, \eta, df^*_x\eta) \mid \eta \ne 0 \} \\
  WF'(\delta(y - f(x))) \circ 0_X &\subset \{ (y, \eta) \in T^*Y \setminus \{0\} \mid \exists x \in f^{-1}(y), df^*_x\eta = 0 \} \\
  0_Y \circ WF'(\delta(y - f(x))) &= \emptyset
\end{aligned}
$$

を満たす

$\tilde{\Gamma} \subset T^*X$ は $f: \tilde{\Gamma} \cap 0_X \to Y$ が proper とする。$\delta(y - f(x)) \in \mathcal{D}'(Y \times X)$ が定める $f_*: \mathcal{D}'_{\tilde{\Gamma}}(X) \to \mathcal{D}'_{f_*\tilde{\Gamma}}(Y)$ を pushforward という。ただし

$$
f_*\tilde{\Gamma} \coloneqq \{ (y, \eta) \in T^*Y \mid \exists x \in f^{-1}(y), df^*_x\eta \in \tilde{\Gamma}_x \}
$$

以前に定義した射影による pushforward と整合的

$u \in C^\infty_c(X)$, $\varphi \in C^\infty_c(Y)$ ならば

$$
(f_*u)(\varphi) = \delta(y - f(x))(\varphi \otimes u) = (f^* \varphi)(u)
$$

# pushforward の例

$i: \mathbb{R} \ni x \mapsto (x, 0) \in \mathbb{R}^2$ とすると

$$
i_* = \cdot \otimes \delta
$$

$u, \varphi, \psi \in C^\infty_c(\mathbb{R})$ とすると

$$
(i_*u)(\varphi \otimes \psi) = u(i^*(\varphi \otimes \psi)) = \psi(0)u(\varphi) = (u \otimes \delta)(\varphi \otimes \psi)
$$

# $\delta(f)$

$f: X \to \mathbb{R}^m$ は、$df_{x, *} \ (x \in f^{-1}(0))$ が全射とする。$\delta(f) \coloneqq f^*\delta$ が定義できる。$N \coloneqq f^{-1}(0)$ は閉部分多様体だが、$0 \to TN \to TX|_N \to (f|_N)^{-1}T(\mathbb{R}^m) \to 0$ は完全だから、$N$ 上の density $\sigma_{N}$ で

$$
f^*|dy| \cdot \sigma_N = |dx|
$$

を満たすものが一意的に存在する

$$
\delta(f)(\varphi) = \int \varphi|_N \sigma_N
$$

局所的に考えれば、$i: \mathbb{R}^{n + m} \ni (x, y) \mapsto y \in \mathbb{R}^m$ に対して、$(i^*\delta)(\varphi) = \int \varphi(x, 0) \, dx$ を示せば良いが

$$
(i^*\delta)(\varphi) = \delta(i_*\varphi) = \delta(\int \varphi(x, y) \, dx) = \int \varphi(x, 0) \, dx
$$

# $yu = 0$ ならば $u = v \otimes \delta$

$u \in \mathcal{D}'(\mathbb{R}^2)$ は $yu = 0$ を満たすとする。$\mathrm{supp} u \subset \mathbb{R} \times \{0\}$ だから、$v(\varphi) \coloneqq u(\varphi \otimes 1) \in \mathcal{D}'(\mathbb{R})$ が定まる

$$
\begin{aligned}
  u(\varphi \otimes \psi) &= u(\varphi \otimes (\psi(0) + y \int_0^1 \psi'(ty) \, dt)) \\
  &= \psi(0)u(\varphi \otimes 1) \\
  &= (v \otimes \delta)(\varphi \otimes \psi)
\end{aligned}
$$

よって、$u = v \otimes \delta$

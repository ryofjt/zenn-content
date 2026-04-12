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
(\mathrm{pr}_{X, *} u)(\varphi) = u(\chi_\varphi \mathrm{pr}_X^*\varphi) \quad (\varphi \in C^\infty_c(X))
$$

で定義する。ただし、$\chi_\varphi \in C^\infty_c(X \times Y)$ は $\mathrm{pr}_X^{-1}(\mathrm{supp} \varphi) \cap Z$ の近傍で $\equiv 1$。この定義は $\chi_\varphi$ に依らない。$\mathrm{pr}_{X, *}: \Gamma_Z(X \times Y, \mathcal{D}') \to \Gamma_{\mathrm{pr}_X(Z)}(X, \mathcal{D}')$ は連続

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

# Pullback の kernel 表示

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

# Pushforward

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

# Pushforward の例

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

# 自由スカラー場

$V \coloneqq (\mathbb{R}^d, dx_0^2 - dx_1^2 - \cdots - dx_{d - 1}^2)$
$\mathcal{F} \coloneqq C^\infty(V, \mathbb{R})$
$m > 0$

$$
L \coloneqq \left\{ \frac{1}{2} |d\varphi|^2 - \frac{m^2}{2} \varphi^2 \right\} |dx|
$$

$$
\begin{aligned}
  \delta L &= - \langle d \delta \varphi, d \varphi \rangle |dx| - m^2 \varphi \delta \varphi |dx| \\
  &= - d \delta \varphi \wedge * d \varphi - m^2 \varphi \delta \varphi |dx| \\
  &= - d (\delta \varphi \wedge * d \varphi) - \delta \varphi \wedge d * d \varphi - m^2 \varphi \delta \varphi |dx|
\end{aligned}
$$

$$
\underline{D} L = - \delta \varphi (\square + m^2) \varphi |dx|
$$

$$
\gamma = \delta \varphi \wedge * d \varphi
$$

$$
\omega = \delta \gamma = -\delta \varphi \wedge \delta * d \varphi \in \Omega^{2, |-1|}(\mathcal{F} \times V)
$$

# 解の空間

$$
\mathrm{Sol} \coloneqq \{ \Phi \in \mathcal{F} \mid (\square + m^2)\Phi = 0 \}
$$

$\mathrm{Sol} \times V$ 上 $d\tilde{\omega} = 0$ だから、$\Sigma$ を (空でない) 連結閉な spacelike 超曲面とすると

$$
\int_\Sigma \omega \in \Omega^2(\mathrm{Sol})
$$

は $\Sigma$ に依らない。各 $\Phi \in \mathrm{Sol}$ に対して

$$
[-, -]: T_\Phi\mathrm{Sol} \times T_\Phi\mathrm{Sol} \simeq \mathrm{Sol} \times \mathrm{Sol} \ni (\varphi_1, \varphi_2) \mapsto -\int_\Sigma *(\varphi_1 d\varphi_2 - \varphi_2 d\varphi_1) \in \mathbb{R}
$$

は $\Phi$ に依らない。反転を伴う Fourier 変換を使うと

$$
\begin{aligned}
  &\{ \varphi \in \mathcal{S}'(V, \mathbb{R}) \mid (\square + m^2)\varphi = 0 \} \\
  &\quad \simeq \{ \psi \in \mathcal{S}'(V, \mathbb{C}) \mid \psi(-p) = \overline{\psi(p)}, (-p^2 + m^2)\psi = 0 \} \quad (\psi = \mathcal{F}\varphi(-p)) \\
  &\quad \simeq \{ f \in \mathcal{S}'(\mathcal{O}_m, \mathbb{C}) \mid f(-p) = \overline{f(p)} \}
\end{aligned}
$$

以降は、部分集合 $H \coloneqq \{ L^2(\mathcal{O}_m, \mathbb{C}) \mid f(-p) = \overline{f(p)} \}$ を考察する

# $H$ での $[-, -]$ の記述

$f_1, f_2 \in H$ とする

$$
\begin{aligned}
  \psi_i(\alpha) &= \int_{p \in \mathcal{O}_m} f_i(p)\alpha(p) \, d\mu(p) \\
  \varphi_i(u) &= (2\pi)^{-d/2} \int_{x, p \in \mathcal{O}_m} f_i(p)u(x)e^{-ipx} \, dx d\mu(p)
\end{aligned}
$$

$WF(\varphi_i) \subset V \times \{ v \in V \setminus \{0\} \mid v^2 = 0 \}$ を示す。$\rho \in C^\infty_c(V)$ に対して

$$
|\widehat{\rho\varphi_i}(q)| \le (2\pi)^{-d} \int_{x, p \in \mathcal{O}_m} f_i(p)\rho(x)e^{-i(q + p)x} \, dx d\mu(p)
$$

$q_0 \in V \setminus \{0\}$ は $q_0^2 \ne 0$ とする。ある $\varepsilon > 0$ と open cone $q_0 \in U \subset V \setminus \{0\}$ が存在して、$p \in \mathcal{O}_m$ が十分大きければ、$|q - p| \ge \varepsilon|q| \ (q \in U)$ を示せば良い。($\mathcal{O}_0$ に近い) open cone $C \subset V \setminus \{0\}$ が存在して、$q_0 \ne C$ かつ $p \in \mathcal{O}_m$ が十分大きければ $p \in C$。$\varepsilon > 0$ と 開集合 $q_0 \in S \subset S^{d - 1}$ が存在して、$|S - C| \ge \varepsilon$。$U \coloneqq \mathbb{R}_{>0} \cdot S$ とすれば良い

$p = (p_0, p')$, $x = (t, x')$ とすると

$$
\varphi_i|_{t = 0}(v) = \varphi_i(\delta \otimes v) = (2\pi)^{-d/2} \int_{x', p \in \mathcal{O}_m} f_i(p)v(x')e^{ip'x'} \, dx' d\mu(p)
$$

$$
\partial_t\varphi_i(u) = -(2\pi)^{-d/2}i \int_{x, p \in \mathcal{O}_m} p_0 f_i(p)u(x)e^{-ipx} \, dx d\mu(p)
$$

$$
WF(\partial_t\varphi_i) \subset WF(\varphi_i) \subset V \times \{ v \in V \setminus \{0\} \mid v^2 = 0 \}
$$

$$
(\partial_t\varphi_i|_{t = 0})(v) = -(2\pi)^{-d/2}i \int_{x', p \in \mathcal{O}_m} p_0 f_i(p)v(x')e^{ip'x'} \, dx' d\mu(p)
$$

$E(p') \coloneqq \sqrt{m^2 + p'^2}$ とすると、$\mathcal{O}_m^\pm \simeq \{ p' \in \mathbb{R}^{d - 1} \}$ によって $d\mu(p) = \frac{dp'}{2E}$

$$
\begin{aligned}
  \widehat{\varphi_i|_{t = 0}}(\beta) &= (2\pi)^{-1/2} \int_{p \in \mathcal{O}_m} f_i(p)\beta(p') \, d\mu(p) \\
  \widehat{\partial_t\varphi_i|_{t = 0}}(\beta) &= -(2\pi)^{-1/2}i \int_{p \in \mathcal{O}_m} p_0 f_i(p)\beta(p') \, d\mu(p)
\end{aligned}
$$

$$
\begin{aligned}
  \widehat{\varphi_i|_{t = 0}}(\beta) &= (2\pi)^{-1/2} \frac{1}{2E} [f_i(E, p') + f_i(-E, p')] \in L^2(Edp') \\
  \widehat{\partial_t\varphi_i|_{t = 0}}(\beta) &= -(2\pi)^{-1/2} \frac{i}{2} [f_i(E, p') - f_i(-E, p')] \in L^2\left(\frac{dp'}{E}\right)
\end{aligned}
$$

$$
\begin{aligned}
  &\int_{t = 0} *(\varphi_1|_{t = 0} \, d\varphi_2|_{t = 0}) \\
  &\quad = \int_{x'} \varphi_1|_{t = 0} \, \partial_t\varphi_2|_{t = 0} \, dx' \\
  &\quad = \int_{p'} \widehat{\varphi_1|_{t = 0}}(p')\widehat{\partial_t\varphi_2|_{t = 0}}(-p') \, dp' \\
  &\quad = -\frac{i}{8\pi} \int_{p'} \frac{1}{E} [f_1(E, p') + f_1(-E, p')] [f_2(E, -p') - f_2(-E, -p')] dp' \\
  &\quad = -\frac{i}{8\pi} \int_{p'} \frac{1}{E} [f_1(E, p')f_2(E, -p') - f_1(E, p')f_2(-E, -p') \\
  &\qquad + f_1(-E, p')f_2(E, -p') - f_1(-E, p')f_2(-E, -p')] \, dp'
\end{aligned}
$$

$$
\begin{aligned}
  &[\varphi_1, \varphi_2] \\
  &\quad = -\int *(\varphi_1|_{t = 0} \, d\varphi_2|_{t = 0} - \varphi_2|_{t = 0} \, d\varphi_1|_{t = 0}) \\
  &\quad = \frac{i}{4\pi} \int_{p'} \frac{1}{E} [-f_1(E, p')f_2(-E, -p') + f_1(-E, p')f_2(E, -p')] \, dp' \\
  &\quad = \frac{i}{2\pi} \int_{p \in \mathcal{\mathcal{O}_m^+}} [-f_1(p)f_2(-p) + f_1(-p)f_2(p)] \, d\mu(p) \\
  &\quad = \frac{1}{\pi} \int_{p \in \mathcal{\mathcal{O}_m^+}} \mathrm{Im}(f_1\bar{f_2}) \, d\mu(p)
\end{aligned}
$$

# 対称積のスペクトル測度

$V$: 有限次元 $\mathbb{R}$ 線形空間
$\pi_i(v) = \int_\xi e^{i\langle \xi, v \rangle} dE_i \ (i = 1, 2)$: $V$ のユニタリ表現
$\pi_1 \boxtimes \pi_2$ のスペクトル測度は $(E_1 \boxtimes E_2)(A \times B) = E_1(A) \otimes E_2(B)$ を満たす

$$
\begin{aligned}
  \langle (\pi_1(v) \otimes \pi_2(v))(f_1 \otimes f_2), g_1 \otimes g_2 \rangle &= \int_{\xi_1} e^{i\langle \xi_1, v \rangle} d(E_1)_{f_1, g_1} \int_{\xi_2} e^{i\langle \xi_2, v \rangle} d(E_2)_{f_2, g_2} \\
  &= \int_{\xi_1, \xi_2} e^{i\langle \xi_1 + \xi_2, v \rangle} d(E_1 \boxtimes E_2)_{f_1 \otimes g_1, f_2 \otimes g_2} \\
  &= \int_\xi e^{i\langle \xi, v \rangle} d(s_*(E_1 \boxtimes E_2))_{f_1 \otimes g_1, f_2 \otimes g_2}
\end{aligned}
$$

ただし、$s: V \times V \xrightarrow{+} V$。よって、$\pi_1 \otimes \pi_2$ のスペクトル測度 $E_1 \otimes E_2$ に対して

$$
E_1 \otimes E_2 = s_*(E_1 \boxtimes E_2)
$$

$\mathrm{supp}(E_1 \otimes E_2) = \overline{\mathrm{supp} E_1 + \mathrm{supp} E_2}$。同様にして、$V$ のユニタリ表現 $\pi(v) = \int_\xi e^{i\langle \xi, v \rangle} dE$ に対して

$$
\mathrm{supp}(S^n E) = \overline{\underbrace{\mathrm{supp} E + \cdots + \mathrm{supp} E}_n}
$$

# $\mathcal{S}_m$ の等質空間としての記述

https://zenn.dev/link/comments/6cc59876307ee9

$d \ge 3$, $m > 0$ とする

$$
\mathcal{S}_m \coloneqq \{ v \in V \mid v^2 = -m^2 \}
$$

$SO_0(V) \curvearrowright \mathcal{S}_m$ は推移的なことを示す。$v \in \mathcal{S}_m$ とする。$SO(d - 1)$ を作用させると、$v = (v_0, \sqrt{v_0^2 + m^2}, 0)$ として良い。さらに

$$
\begin{pmatrix}
  \mathrm{cosh}t & -\mathrm{sinh}t \\
-\mathrm{sinh}t & \mathrm{cosh}t \end{pmatrix} \in SO^+(1, 1) \quad (\mathrm{tanh}t = \frac{v_0}{\sqrt{v_0^2 + m^2}})
$$

を作用させると、$(0, m, 0, \dots, 0)$ に移る。$(0, m, 0, \dots, 0)$ の固定部分群は $SO_0(1, d - 2)$ だから

$$
\mathcal{S}_m \simeq SO_0(1, d - 1) / SO_0(1, d - 2)
$$

# Wightman の公理を満たすモデル

https://zenn.dev/link/comments/85b993ae05292a

https://zenn.dev/link/comments/98f3bdb80d8a33

$V$: 符号 $(1, d - 1)$ の Minkowski 空間
$G \coloneqq \mathrm{Spin}_0(V)$
$P \coloneqq G \ltimes V$

$\rho: G \curvearrowright \mathbb{R}$: 自明表現
$\mathcal{R} = P \times_G \rho = V \times \mathbb{R}$

$P \to SO_0(V) \ltimes V \curvearrowright V$ から $P \curvearrowright H = \{ h \in L^2(\mathcal{O}_m, \mathbb{C}) \mid h(-p) = \overline{h(p)} \}$ が誘導される

$$
\begin{aligned}
  (\Lambda, a)h &= (2\pi)^{-d/2} \int \tilde{h}(\Lambda^{-1}(x - a))e^{ipx} \, dx \quad (\tilde{h}(x) = (2\pi)^{-d/2} \int h(p)e^{-ipx} \, dp) \\
  &= (2\pi)^{-d/2} e^{ipa} \int \tilde{h}(\Lambda^{-1}x)e^{ipx} \, dx \\
  &= (2\pi)^{-d/2} e^{ipa} \int \tilde{h}(x)e^{i(\Lambda^{-1}p)x} \, dx \\
  &= e^{ipa}h(\Lambda^{-1}p)
\end{aligned}
$$

$I: H \to H$ を

$$
Ih(p) = \begin{cases}
  ih(p) &\quad (p \in \mathcal{O}_m^+) \\
  -ih(p) &\quad (p \in \mathcal{O}_m^-)
\end{cases}
$$

で定める。$H_\pm = L^2(\mathcal{O}_m^\pm, \mathbb{C})$。$H_+$ 上の Hermite 形式

$$
(h_1, h_2) = \frac{i}{2} [h_1(p), \overline{h_2(-p)}] = \frac{1}{4\pi} \int_{p \in \mathcal{O}_m^+} h_1(p)\overline{h_2(p)} \, d\mu(p)
$$

は正定値。$I$ は $P$ 同変だから、$P \curvearrowright H_+$ が誘導される。さらに、$U: P \curvearrowright \mathcal{H} \coloneqq \widehat{\bigoplus}_{n = 0}^\infty S^n H_+$ が誘導される。$D_+ \coloneqq \mathcal{S}(\mathcal{O}_m^+, \mathbb{C}) \subset H_+$ とする。$\mathcal{D} \coloneqq \bigoplus_{n = 0}^\infty S^n D_+ \subset \mathcal{H}$ と定義し、$\Omega \coloneqq 1 \in \mathcal{D}$ とする

$\varphi: \mathcal{S}(\mathcal{R}) \to \mathrm{End}(\mathcal{D})$ を

$$
\varphi(f) \coloneqq \varepsilon_{k_f} + \iota_{(\cdot, k_f)}
$$

で定義する。ただし、$k_f \coloneqq \mathcal{F}f(-p)|_{\mathcal{O}_m^+} \in D_+$。まず、$\varphi$ が $P$ 同変なことは

$$
\begin{aligned}
  k_{(\Lambda, a)f} &= (2\pi)^{-d/2} \int f(\Lambda^{-1}(x - a))e^{ipx} \, dx \\
  &= e^{ipa} \mathcal{F}f(-\Lambda^{-1}p) \\
  &= (\Lambda, a)k_f
\end{aligned}
$$

から従う

(2) $\varphi(f)$ は symmetric operator

$$
\varphi(f)^* = \iota_{(\cdot, k_f)} + \varepsilon_{k_f} = \varphi(f)
$$

${}$(3) $\mathcal{D}$ は $\varphi(f_1) \cdots \varphi(f_n)\Omega$ で生成される

$\{ k_f \mid f \in \mathcal{S}(\mathcal{R}) \} = D_+$ から従う

(1) $U|_V$ の同時スペクトル $\sigma(U) \subset V^*$ は

$$
\langle \sigma(U), \overline{V}_+ \rangle \ge 0
$$

$\sigma(U) \subset \overline{V}_+$ を示せば良い。$U_1: P \curvearrowright H_+$ は

$$
\begin{aligned}
  (U_1(a)h_1, h_2) &= \frac{1}{4\pi} \int_{p \in \mathcal{O}_m^+} e^{ipa}h_1(p)\overline{h_2(p)} \, d\mu(p) \\
  &= \int_{p \in \mathcal{O}_m^+} e^{ipa} \, dE_{h_1, h_2}
\end{aligned}
$$

ただし、$H_+$ 上の射影に値をとる $\mathcal{O}_m^+$ 上のスペクトル測度 $E$ を

$$
E(A)h \coloneqq h|_A \quad (h \in H^+)
$$

で定義する。$\mathrm{supp} \, U_1 = \mathcal{O}_m^+$。$U_n: P \curvearrowright S^n H_+$ の台は

$$
\mathrm{supp} \, U_n = \begin{cases}
  \{0\} &\quad (n = 0) \\
  \mathcal{O}_m^+ &\quad (n = 1) \\
  \underbrace{\mathcal{O}_m^+ + \cdots + \mathcal{O}_m^+}_n = \{ p \in V \mid p_0 > 0, p^2 \ge n^2m^2 \} &\quad (n \ge 2)
\end{cases}
$$

最後の等号を示す。まず、$\subset$ を示す。$p_1, \dots, p_n \in \mathcal{O}_m^+$ とすると

$$
p_ip_j = p_i^0p_j^0 - p_i'p_j' \ge \sqrt{\|p_i'\|^2 + m^2}\sqrt{\|p_j'\|^2 + m^2} - \|p_i'\|\|p_j'\| \ge m^2
$$

よって $(p_1 + \cdots + p_n)^2 \ge n^2m^2$。次に、$\supset$ を示す。$p \in V$ は $p_0 > 0$ かつ $p^2 \ge n^2m^2$ とする。$\Lambda \in SO_0(V)$ が存在して

$$
\Lambda p = (\sqrt{p^2}, 0)
$$

$p_1', \dots, p_n' \in \mathbb{R}^{d - 1}$ を $p_1 + \cdots + p_n = 0$ かつ $\|p_i'\| = \sqrt{p^2 / n^2 - m^2}$ にとる。$p_i \coloneqq (\sqrt{p^2} / n, p_i') \in \mathcal{O}_m^+$ とすると

$$
p = \Lambda^{-1}(\sqrt{p^2}, 0) = \sum_{i = 1}^n \Lambda^{-1}p_i
$$

総合すると

$$
\mathrm{supp} \, U = \{0\} \sqcup \mathcal{O}_m^+ \sqcup \{ p \in V \mid p_0 > 0, p^2 \ge 4m^2 \} \subset \overline{V}_+
$$

${}$(4) $f, g \in \mathcal{S}(\mathcal{R})$ が $\mathrm{supp} f - \mathrm{supp} g \subset V_\mathrm{space} = \{ v \in V \mid v^2 < 0 \}$ ならば

$$
[\varphi(f), \varphi(g)] = 0
$$

$$
\begin{aligned}
  [\varphi(f), \varphi(g)] &= [\iota_{(\cdot, k_f)}, \varepsilon_{k_g}] + [\varepsilon_{k_f}, \iota_{(\cdot, k_g)}] \\
  &= (k_g, k_f) - (k_f, k_g) \\
  &= \frac{1}{4\pi} \int_{p \in \mathcal{O}_m^+, x, y} f(x)g(y)[e^{-ip(x - y)} - e^{ip(x - y)}] \, d\mu(p)dxdy \\
  &= \frac{1}{4\pi} \int_{p \in \mathcal{O}_m^+, x, y} f(x)g(y)[e^{-ipS(x - y)(x - y)} - e^{ipS(x - y)(x - y)}] \, d\mu(p)dxdy \\
  &= \frac{1}{8\pi} \int_{p', x, y} \frac{1}{E(p')}f(x)g(y)[e^{ip'S(x - y)(x - y)} - e^{-ip'S(x - y)(x - y)}] \, dp'dxdy \\
  &= 0
\end{aligned}
$$

ただし、可測な $S: V_\mathrm{space} \to SO_0(V)$ は

$$
S(z)z = (0, \pm\sqrt{-z^2}, 0, \dots, 0)
$$

なるようにとる

# 平行移動不変な超関数

$u \in \mathcal{D}'(\mathbb{R}^2)$ は $y$ 方向に平行移動不変 $\Leftrightarrow$ $\partial_y u = 0$ とする。$v \in \mathcal{D}'(\mathbb{R})$ が一意的に存在して

$$
u = \mathrm{pr}_x^*v
$$

$\rho \in C^\infty_c(\mathbb{R})$ で $\int \rho \, dy = 1$ なものを固定する

$$
v \coloneqq u(\cdot \otimes \rho)
$$

が条件を満たすことを示す。$\varphi \in C^\infty_c(\mathbb{R}^2)$ とする

$$
j(x, y) \coloneqq \varphi(x, y) - (\int \varphi(x, y) \, dy) \otimes \rho
$$

とすると、$\int j(x, y) \, dy = 0$。よって、$\int_{-\infty}^y j(x, y) \, dy \in C^\infty_c(\mathbb{R}^2)$ であり、$u(j) = 0$

$$
u(\varphi) = u((\int \varphi(x, y) \, dy) \otimes \rho) = v(\int \varphi(x, y) \, dy)
$$

# Wightman function

$\rho: G \curvearrowright R$
$U: P \curvearrowright \mathcal{H}$
$\Omega \in \mathcal{D} \subset \mathcal{H}$
$\varphi: \mathcal{S}(\mathcal{R}) \coloneqq \mathcal{S}(P \times_G R) \to \mathrm{End}(\mathcal{D})$
を Wightman QFT とする

$$
\mathcal{S}(\mathcal{R}^{\boxtimes n}) \simeq \mathcal{S}(\mathcal{R})^{\hat{\otimes} n} \ni f_1 \otimes \cdots \otimes f_n \mapsto \langle \Omega, \varphi(f_1) \cdots \varphi(f_n)\Omega \rangle \in \mathbb{C}
$$

は $\mathcal{W}_n \in \mathcal{S}'((\mathcal{R}^*)^{\boxtimes n} \otimes \mathbb{C})$ を定める

(1) $\mathcal{W}_n$ は $P$ 不変

(2) $\mathrm{supp}(\mathcal{F}\mathcal{W}_n) \subset \{ (p_1, \dots, p_n) \in V^{\times n} \mid \sum_{i = 1}^n p_i = 0, \sum_{i = 1}^j p_i \in \overline{V}_+ \ (1 \le j \le n - 1) \}$

$f_1, \dots, f_n \in \mathcal{S}(\mathcal{R})$ とする。$1 \le j \le n$ に対して

$$
F_j(a) \coloneqq \mathcal{W}_n(f_1(x_1 - a) \otimes \cdots \otimes f_j(x_j - a) \otimes f_{j + 1} \otimes \cdots \otimes f_n) \in \mathcal{S}'(V)
$$

の Fouier 変換を考察する。まず

$$
\begin{aligned}
  F_j(a) &= \varepsilon \langle \varphi(f_j(x_j - a)) \cdots \varphi(f_1(x_1 - a))\Omega, \varphi(f_{j + 1}) \cdots \varphi(f_n)\Omega \rangle \\
  &= \varepsilon \langle U(a)\varphi(f_j) \cdots \varphi(f_1)\Omega, \varphi(f_{j + 1}) \cdots \varphi(f_n)\Omega \rangle \\
  &= \varepsilon \int_{p \in \overline{V}_+} e^{ipa} dE_{\varphi(f_j) \cdots \varphi(f_1)\Omega, \varphi(f_{j + 1}) \cdots \varphi(f_n)\Omega}
\end{aligned}
$$

だから、$\mathcal{F}F_j = \varepsilon (2\pi)^{d/2} E_{\varphi(f_j) \cdots \varphi(f_1)\Omega, \varphi(f_{j + 1}) \cdots \varphi(f_n)\Omega}$。次に

$$
\begin{aligned}
  F_j(a) &= \mathcal{F}\mathcal{W}_n((\mathcal{F}f_1(-p_1) \otimes \cdots \otimes \mathcal{F}f_n(-p_n))e^{i(p_1 + \cdots + p_j)a}) \\
  &= (2\pi)^{d/2} \Delta_j^*\mathcal{F}^{-1}((\mathcal{F}f_1(-p_1) \otimes \cdots \otimes \mathcal{F}f_n(-p_n))\mathcal{F}\mathcal{W}_n) \\
  &= (2\pi)^{d/2} \mathcal{F}^{-1}(\Delta_j^*)_*((\mathcal{F}f_1(-p_1) \otimes \cdots \otimes \mathcal{F}f_n(-p_n))\mathcal{F}\mathcal{W}_n)
\end{aligned}
$$

だから、$\mathcal{F}F_j = (2\pi)^{d/2} (\Delta_j^*)_*((\mathcal{F}f_1(-p_1) \otimes \cdots \otimes \mathcal{F}f_n(-p_n))\mathcal{F}\mathcal{W}_n)$。ただし

$$
\begin{aligned}
  &\Delta_j: V \ni a \mapsto (\overbrace{a, \dots, a}^j, 0) \in V^{\times n} \\
  &\Delta_j^*: V^{\times n} \ni (p_1, \dots, p_n) \mapsto \sum_{i = 1}^j p_i \in V
\end{aligned}
$$

よって、$\mathrm{supp}((\Delta_j^*)_*(\beta\mathcal{F}\mathcal{W}_n)) \subset \overline{V}_+ \ (\beta \in \mathcal{S}(\mathcal{R}^{\boxtimes n}))$ だから

$$
\Delta_j^*(\mathrm{supp}(\mathcal{F}\mathcal{W}_n)) \subset \overline{V}_+
$$

最後に、$F_n(a)$ は定数だから、$\Delta_n^*(\mathrm{supp}(\mathcal{F}\mathcal{W}_n)) \subset \{0\}$ もわかる

(3) $\mathcal{W}_n(f^*) = \overline{\mathcal{W}_n(f)}$

$$
\begin{aligned}
  \mathcal{W}_n((f_1 \otimes \cdots \otimes f_n)^*) &= \varepsilon \mathcal{W}_n(f_n \otimes \cdots \otimes f_1) \\
  &= \varepsilon \langle \Omega, \varphi(f_n) \cdots \varphi(f_1)\Omega \rangle \\
  &= \langle \varphi(f_1) \cdots \varphi(f_n)\Omega, \Omega \rangle \\
  &= \overline{\mathcal{W}_n(f)}
\end{aligned}
$$

${}$(4) $\mathrm{supp} f_i - \mathrm{supp} f_{i + 1} \subset V_\mathrm{space}$ ならば

$$
\mathcal{W}_n(f_1 \otimes \cdots \otimes f_i \otimes f_{i + 1} \otimes \cdots \otimes f_n) = (-1)^{|f_i||f_{i + 1}|} \mathcal{W}_n(f_1 \otimes \cdots \otimes f_{i + 1} \otimes f_i \otimes \cdots \otimes f_n)
$$

${}$(5) $\mathcal{W}_{2n}(f^* \cdot f) \ge 0$

# Wightman QFT と Wightman function

Wightman QFT と
$\rho: G \curvearrowright R$: 有限次元実表現
$\mathcal{W}_n \in \mathcal{S}'((\mathcal{R}^*)^{\boxtimes n} \otimes \mathbb{C})$
で (1) 〜 (5) を満たすものは一対一に対応する

$\mathcal{W}_n$ から Wightman QFT を再構成する。$\mathcal{S} \coloneqq \bigoplus_{n = 0}^\infty \mathcal{S}(\mathcal{R})^{\otimes n} \otimes \mathbb{C}$。$\mathcal{S} \ni f_1 \otimes \cdots \otimes f_n \mapsto \varphi(f_1) \cdots \varphi(f_n)\Omega \in \mathcal{D}$ は $P$ 同変で全射。$\mathcal{N} \subset \mathcal{S}$ を核とすると、$\mathcal{D} \simeq \mathcal{S} / \mathcal{N}$。$\mathcal{S}$ 上には、半正定値 Hermite 形式

$$
\mathcal{S} \times \mathcal{S} \ni (f, g) \mapsto \mathcal{W}(f^* \cdot \overline{g}) = \langle \varphi(f)\Omega, \varphi(g)\Omega \rangle
$$

がある。退化部分は $\mathcal{N}$ と一致し、$\mathcal{H} \simeq \widehat{\mathcal{S} / \mathcal{N}}$。最後に、$f \in \mathcal{S}(\mathcal{R})$ に対して

$$
\begin{array}{ccc}
  \mathcal{S} &\xrightarrow{f \cdot}& \mathcal{S} \\
  \downarrow && \downarrow \\
  \mathcal{D} &\xrightarrow{\varphi(f)}& \mathcal{D} \\
\end{array}
$$

# 自由スカラー場の $\mathcal{W}_n$

$$
\begin{aligned}
  \mathcal{W}_{2n + 1} &= 0 \\
  \mathcal{W}_0 &= 1 \\
  \mathcal{W}_2(f \otimes g) &= \frac{1}{4\pi} \int_{p \in \mathcal{O}_m^+} \mathcal{F}f(p)\mathcal{F}g(-p) \, d\mu \\
  \mathcal{W}_{2m}(f_1 \otimes \cdots \otimes f_{2m}) &= \sum_{\sigma \in P_2(2m)} \prod_{\{i, j\} \in \sigma, i < j} \mathcal{W}_2(f_i, f_j)
\end{aligned}
$$

ただし、$P_2(2m)$ は $\{ 1, \dots, 2m \}$ を $m$ 個の順序のないペアに分割する方法たち。$|P_2(2m)| = (2m - 1)!!$

# 1.5, 1.6

一旦スキップ

# $SO(V_\mathbb{C})$ の分解

$V$: 符号 $(1, d - 1)$ の Minkowski 空間
$\mathfrak{so}(V)^\mathrm{reg} \subset \mathfrak{so}(V)$ を、$SO_0(V)$ による共役で以下のいずれかに含まれる元全体とする

$$
\mathfrak{h}_s^\text{even} = \left\{ \begin{pmatrix}
  tb &&& 0 \\
  & \theta_1 r && \\
  && \ddots & \\
  0 &&& \theta_{d / 2 - 1} r
\end{pmatrix} \,\middle\vert\, t, \theta_j \in \mathbb{R} \right\}
$$

$$
\begin{aligned}
  \mathfrak{h}_s^\text{odd} &= \left\{ \begin{pmatrix}
    tb &&&& 0 \\
    & \theta_1 r &&& \\
    && \ddots && \\
    &&& \theta_{(d - 3) / 2} r & \\
    0 &&&& 0
  \end{pmatrix} \,\middle\vert\, t, \theta_j \in \mathbb{R} \right\} \\
  \mathfrak{h}_c &= \left\{ \begin{pmatrix}
    0 &&& 0 \\
    & \theta_1 r && \\
    && \ddots & \\
    0 &&& \theta_{(d - 1) / 2} r
  \end{pmatrix} \,\middle\vert\, \theta_j \in \mathbb{R} \right\}
\end{aligned}
$$

ただし

$$
\begin{aligned}
  b &\coloneqq \begin{pmatrix} 0 & 1 \\
    1 & 0
  \end{pmatrix} \\
  r &\coloneqq \begin{pmatrix} 0 & -1 \\
    1 & 0
  \end{pmatrix}
\end{aligned}
$$

$\Phi: i\mathfrak{so}(V) \times SO_0(V) \ni (iX, r) \mapsto e^{iX}r \in SO(V_\mathbb{C})$ とすると、$\Phi(i\mathfrak{so}(V)^\mathrm{reg} \times SO_0(V))$ は $SO(V_\mathbb{C})$ の (実) Zariski 開集合を含む

$b$, $r$ は以下を満たす

$$
\begin{aligned}
  e^{tb} &= \begin{pmatrix} \mathrm{cosh}t & \mathrm{sinh}t \\
    \mathrm{sinh}t & \mathrm{cosh}t
  \end{pmatrix} \\
  e^{\theta r} &= \begin{pmatrix} \mathrm{cos}\theta & -\mathrm{sin}\theta \\
    \mathrm{sin}\theta & \mathrm{cos}\theta
  \end{pmatrix} \\
  e^{itb} &= \begin{pmatrix} \mathrm{cos}t & i\mathrm{sin}t \\
    i\mathrm{sin}t & \mathrm{cos}t
  \end{pmatrix} \\
  e^{i\theta r} &= \begin{pmatrix} \mathrm{cosh}\theta & -i\mathrm{sinh}\theta \\
    i\mathrm{sinh}\theta & \mathrm{cosh}\theta
  \end{pmatrix}
\end{aligned}
$$

$g \in SO(V_\mathbb{C})$ とする。$p \coloneqq g\overline{g}^{-1} \in SO(V_\mathbb{C})$ とする。まず、$p$ の固有多項式 $f_p$ は実係数なことを示す。$p\overline{p} = 1$, $J = p^T Jp$ だから

$$
\overline{f_p}(X) = \mathrm{det}(X - \overline{p}) = \mathrm{det}(X - Jp^T J) = f_p(X)
$$

$f_p$ は重根を持たないとする。$p$ の $\lambda \ (\in \mathbb{C})$ 固有空間を $V_\mathbb{C}^\lambda$ とする。$V_\mathbb{C}^\lambda$ は $0$ or $1$ 次元。まず、$V_\mathbb{C}^\lambda \ni v \mapsto \overline{v} \in V_\mathbb{C}^{\bar{\lambda}^{-1}} \ (\lambda \ne 0)$ は同形を示す。$v \in V_\mathbb{C}^\lambda$ とすると

$$
p\overline{v} = \overline{p}^{-1}\overline{v} = \overline{p^{-1}v} = \overline{\lambda^{-1}v} = \bar{\lambda}^{-1}\overline{v}
$$

また、$\lambda\mu \ne 1$ ならば $\langle V_\mathbb{C}^\lambda, V_\mathbb{C}^\mu \rangle = 0$。これは、$v \in V_\mathbb{C}^\lambda, w \in V_\mathbb{C}^\mu$ ならば

$$
\langle v, w \rangle = \langle pv, pw \rangle = \lambda\mu\langle v, w \rangle
$$

から従う。$\langle -, - \rangle$ は非退化だから、$\langle V_\mathbb{C}^\lambda, V_\mathbb{C}^{\lambda^{-1}} \rangle = \mathbb{C} \ (V_\mathbb{C}^\lambda \ne 0)$ もわかる

$|\lambda| \ne 1$ かつ $\lambda \not\in \mathbb{R}$ ならば $V_\mathbb{C}^\lambda = 0$ を示す。$v \in V_\mathbb{C}^\lambda \setminus \{0\}$ が取れると仮定する。$\overline{v} \in V_\mathbb{C}^{\bar{\lambda}^{-1}}$。$\lambda \ne \bar{\lambda}^{-1}$ だから、$v, \overline{v}$ は一次独立。$\lambda^2, \lambda\bar{\lambda}^{-1}$ はいずれも $1$ でないから $\mathrm{span}_\mathbb{C}\{ v, \overline{v} \}$ 上 pairing は消える。$W \coloneqq \mathrm{span}_\mathbb{R}\{ \mathrm{Re}v, \mathrm{Im}v \}$ は $2$ 次元で、pairing は $W$ 上消える。$\mathrm{pr}_\mathbb{R}|_W: W \to \mathbb{R}$ が単射になって矛盾する

$\mathrm{det} p = 1$ だから、$V_{-1} = 0$。$V_\mathbb{C}$ は以下のように直交分解する

$$
\begin{aligned}
  V_\mathbb{C} &= \bigoplus_{|\alpha_i| = 1, \alpha_i \ne \pm 1} (V_\mathbb{C}^{\alpha_i} \oplus V_\mathbb{C}^{\bar{\alpha_i}}) \oplus \bigoplus_{a_j \in \mathbb{R}^\times \setminus \{\pm 1\}} (V_\mathbb{C}^{a_j} \oplus V_\mathbb{C}^{a_j^{-1}}) &\quad (d \text{ は偶数}) \\
  V_\mathbb{C} &= \bigoplus_{|\alpha_i| = 1, \alpha_i \ne \pm 1} (V_\mathbb{C}^{\alpha_i} \oplus V_\mathbb{C}^{\bar{\alpha_i}}) \oplus \bigoplus_{a_j \in \mathbb{R}^\times \setminus \{\pm 1\}} (V_\mathbb{C}^{a_j} \oplus V_\mathbb{C}^{a_j^{-1}}) \oplus V_\mathbb{C}^1 &\quad (d \text{ は奇数})
\end{aligned}
$$

まず、$V_\mathbb{C}^{\alpha_i} \oplus V_\mathbb{C}^{\bar{\alpha_i}}$ について考える。$V_\mathbb{C}^{\alpha_i}$ は共役で閉じているから、$x_0 \in V$ があって $V_\mathbb{C}^{\alpha_i} = \mathbb{C}x_0$。同様に、$y_0 \in V$ があって $V_\mathbb{C}^{\bar{\alpha_i}} = \mathbb{C}y_0$。$\langle x_0, x_0 \rangle = \langle y_0, y_0 \rangle = 0$, $\langle x_0, y_0 \rangle \ne 0$。$\langle x_0, y_0 \rangle = 1 / 2$ として良い。$x \coloneqq x_0 + y_0, y \coloneqq x_0 - y_0$ とすると、$V_\mathbb{C}^{\alpha_i} \oplus V_\mathbb{C}^{\bar{\alpha_i}} = \mathrm{span}_\mathbb{C}\{ x, y \}$ で $\langle x, y \rangle = 0$, $\langle x, x \rangle = 1$, $\langle y, y \rangle = -1$。また

$$
\begin{aligned}
  px &= \alpha_i x_0 + \bar{\alpha_i} y_0 = \mathrm{Re}\alpha_i x + i\mathrm{Im}\alpha_i y \\
  py &= \alpha_i x_0 - \bar{\alpha_i} y_0 = i\mathrm{Im}\alpha_i x + \mathrm{Re}\alpha_i y
\end{aligned}
$$

次に、$V_\mathbb{C}^{a_j} \oplus V_\mathbb{C}^{a_j^{-1}}$ について考える。$V_\mathbb{C}^{a_j} = \mathbb{C}v$ とすると、$V_\mathbb{C}^{a_j^{-1}} = \mathbb{C}\overline{v}$。$\langle v, v \rangle = 0$, $\langle v, \overline{v} \rangle \ne 0$。$\langle v, \overline{v} \rangle = \pm 2$ として良い。$x \coloneqq \mathrm{Re}v, y \coloneqq \mathrm{Im}v$ とすると、$V_\mathbb{C}^{a_j} \oplus V_\mathbb{C}^{a_j^{-1}} = \mathrm{span}_\mathbb{C}\{ x, y \}$ で $\langle x, y \rangle = 0$, $\langle x, x \rangle = \langle y, y \rangle = \pm 1$。符号の制約から、$\langle x, x \rangle = \langle y, y \rangle = -1$ でなければならない。また

$$
\begin{aligned}
  px &= \frac{a_j v + a_j^{-1} \overline{v}}{2} = \frac{a_j + a_j^{-1}}{2} x + i\frac{a_j - a_j^{-1}}{2} y \\
  py &= \frac{a_j v - a_j^{-1} \overline{v}}{2i} = -i\frac{a_j - a_j^{-1}}{2} x + \frac{a_j + a_j^{-1}}{2} y
\end{aligned}
$$

さらに $a_j > 0$ でなければならないことを示す。$v' \coloneqq g^{-1}v, x' \coloneqq \mathrm{Re}v', y' \coloneqq \mathrm{Im}v'$ とする。$\langle v', v' \rangle = \langle v, v \rangle = 0$ だから、$\langle x', y' \rangle = 0$, $\langle x', x' \rangle = \langle y', y' \rangle$

$$
2\langle x', x' \rangle = \langle v', \overline{v'} \rangle = \langle g^{-1}v, \overline{g}^{-1}\overline{v} \rangle = \langle v, p\overline{v} \rangle = -2a_j^{-1}
$$

は符号の制約から負でなければならない

最後に、$d$ が奇数の場合に、$V_\mathbb{C}^1$ について考える。$V_\mathbb{C}^1$ は共役不変だから、$x \in V$ があって $V_\mathbb{C}^1 = \mathbb{C}x$。$\langle x, x \rangle = \pm 1$ として良い

# Convex cone の分離

$V$: LCS over $\mathbb{R}$

$G \subset V$: $0$ を含まない open convex set
ある $n \in V^*$ が存在して、$n(G) > 0$

$G \ne \emptyset$ として良い。$g_0 \in G$ を固定する。$p(x) \coloneqq \mathrm{inf} \{ t \ge 0 \mid x \in t(g_0 - G) \}$ は劣線形。$\{ p < 1 \} = g_0 - G$。$\mathbb{R}g_0 \ni ag_0 \mapsto a \in \mathbb{R}$ は $p|_{\mathbb{R}g_0}$ で上から押さえられる。よって、Hahn–Banach の定理から、線形写像 $n: V \to \mathbb{R}$ が存在して、$n(g_0) = 1$ かつ $n \le p$。$|n((g_0 - G) \cap -(g_0 - G))| < 1$ だから、$n$ は連続。また、$x \in G$ ならば

$$
n(x) = n(g_0) - n(g_0 - x) \ge 1 - p(g_0 - x) > 0
$$

$E \subset V$: $0$ を含まない closed convex set
ある $n \in V^*$ が存在して、$n(E) > 0$

開凸集合 $0 \in U$ が存在して、$E \cap U = \emptyset$。$0$ を含まない開凸集合 $G \coloneqq E - U$ に直前の結果を適用すれば良い

ここからは $V$ は有限次元とする

$C \subset V$: closed convex cone で直線を含まない ($\Leftrightarrow$ $C \cap -C \subset \{0\}$) もの
ある $n \in V^*$ が存在して、$n(C \setminus \{0\}) > 0$

$V$ に適当なノルムを入れる。$S \subset V$ を単位球面とする。$K \coloneqq \mathrm{co}(C \cap S)$ はコンパクトで、$0$ を含まない。よって、ある $n \in V^*$ が存在して、$n(K) > 0$

$C, D \subset V$: 直線を含まない closed convex cone
$C \cap D \subset \{0\}$ ならば、ある $n \in V^*$ が存在して、$n(C \setminus \{0\}) > 0 > n(D \setminus \{0\})$

$C, D$ は空でないとして良い。$E \coloneqq C - D$ は直線を含まない convex cone。$E$ は閉なことを示す。$c_i - d_i \to x$ とする。$V$ に適当なノルムを入れる。$\|c_i\| \to \infty$ と仮定すると矛盾することを示す。$c_i / \|c_i\| \to \beta$ として良い。$d_i / \|c_i\| \to -\beta$ だから、$C \cap D \subset \{0\}$ に矛盾する。よって、ある $n \in V^*$ が存在して、$n(E \setminus \{0\}) > 0$。$C \subset E$ だから、$n(C \setminus \{0\}) > 0$。同様にして、$n(D \setminus \{0\}) < 0$

$C, D \subset V$: 直線を含まない closed convex cone
$C \not\subset \{0\}$ かつ $D \cap (C \cup -C) \subset \{0\}$ とする
$C^* \coloneqq \{ n \in V^* \mid n(C) \ge 0 \}$ とすると、ある $n \in \partial C^*$ が存在して、$n(D \setminus \{0\}) < 0$

$n_1, n_2 \in V^*$ が存在して、$n_1(C \setminus \{0\}) > 0 > n_1(D \setminus \{0\})$, $-n_2(C \setminus \{0\}) > 0 > n_2(D \setminus \{0\})$。$n_1 \in C^*$, $n_2 \not\in C^*$ だから、$n_1$ と $n_2$ を結ぶ線分を考えれば良い

# 記号の準備

$d \ge 3$
$V$: 符号 $(1, d - 1)$ の Minkowski 空間
$V_\mathbb{C} \coloneqq V \otimes \mathbb{C}$
$G \coloneqq \mathrm{Spin}_0(V)$
$G_\mathbb{C} \coloneqq \mathrm{Spin}(V_\mathbb{C})$
$E \coloneqq i\mathbb{R} \times \mathbb{R}^{d - 1} \subset V_\mathbb{C}$
$\mathcal{T} \coloneqq V - iV_+ \subset V_\mathbb{C}$
$\tilde{\mathcal{T}}_n \coloneqq G_\mathbb{C}(\mathcal{T}^n) = SO(V_\mathbb{C})(\mathcal{T}^n)$
$J_n \coloneqq \tilde{\mathcal{T}}_n \cap V^n$

$V^{n + 1} / \Delta \ni (v_1, \dots, v_{n + 1}) \mapsto (v_2 - v_1, \dots, v_{n + 1} - v_n) \in V^n$ は同形で、左辺 (ゆえに右辺) には $\mathfrak{S}_{n + 1}$ が作用する

## Jost の定理

$$
J_n = \{ (v_1, \dots, v_n) \in V^n \mid \forall (\lambda_1, \dots, \lambda_n) \in \mathbb{R}_{\ge 0}^n \setminus \{0\}, \lambda_1 v_1 + \cdots + \lambda_n v_n \in V_\mathrm{space} \}
$$

$\subset$
$(v_1, \dots, v_n) \in J_n$ とする。$g \in G_\mathbb{C}$ が存在して、$gv_1, \dots, gv_n \in \mathcal{T}$。よって、$(\lambda_1, \dots, \lambda_n) \in \mathbb{R}_{\ge 0}^n \setminus \{0\}$ ならば $g(\lambda_1 v_1 + \cdots + \lambda_n v_n) \in \mathcal{T}$。$\xi - i\eta \coloneqq g(\lambda_1 v_1 + \cdots + \lambda_n v_n)$ とすると

$$
(\xi - i\eta)^2 = \xi^2 - \eta^2 - 2i\xi\eta = (\lambda_1 v_1 + \cdots + \lambda_n v_n)^2 \in \mathbb{R}
$$

だから、$\xi\eta = 0$。よって、$\xi^2 \le 0$ ($SO_0(V)$ を使って、$\eta$ を標準形にすれば従う)

$$
(\lambda_1v_1 + \cdots + \lambda_nv_n)^2 = \xi^2 - \eta^2 < 0
$$

$\supset$
$(v_1, \dots, v_n) \in V^n$ は右辺の条件を満たすとする。$E \coloneqq \{ \lambda_1 v_1 + \cdots + \lambda_n v_n \mid (\lambda_1, \dots, \lambda_n) \in \mathbb{R}_{\ge 0}^n \} \subset V$ は直線を含まない closed convex cone で、$E \cap (\overline{V}_+ \cup \overline{V}_-) = \{0\}$。$\partial(\overline{V}_+)^* = \partial\overline{V}_+ = \mathcal{O}^+_0 \cup \{0\}$ だから、$\alpha \in \mathcal{O}^+_0$ が存在して、$\alpha v_j < 0$。同様にして、$\beta \in \mathcal{O}^-_0$ が存在して、$\beta v_j < 0$。$\alpha\beta \le 0$ だが、$\alpha\beta < 0$ を示す。$\alpha\beta = 0$ と仮定すると、$c > 0$ が存在して、$\beta = -c\alpha$。これは $\alpha v_1 < 0$, $\beta v_1 < 0$ に矛盾する。よって、$W \coloneqq \mathrm{span}_\mathbb{R}\{ \alpha, \beta \}$ 上 pairing は非退化で $V = W \oplus W^\perp$ と直交分解する。$g \in SO(V_\mathbb{C})$ を

$$
\begin{aligned}
  g\alpha &= -i\alpha \\
  g\beta &= i\beta \\
  gw' &= w' \quad (w' \in W^\perp)
\end{aligned}
$$

で定義する。$gv_j \in \mathcal{T}$ を示す。$v_j = s_j\alpha + t_j\beta + w'_j$ と分解する。$\alpha v_j < 0$, $\beta v_j < 0$ だから、$s_j > 0$, $t_j > 0$。$\mathrm{Im}gv_j = -s_j\alpha + t_j\beta \in V_-$

# 補題たち

(a) 任意の $\sigma \in \mathfrak{S}_{n + 1}$ に対して、$J_n \cap \sigma(J_n) \ne \emptyset$

$$
v \coloneqq (\overbrace{e_2, \dots, e_2}^n) + \sigma(\overbrace{e_3, \dots, e_3}^n) \in V^n
$$

$\{ \lambda_1 v_1 + \cdots + \lambda_n v_n \mid (\lambda_1, \dots, \lambda_n) \in \mathbb{R}_{\ge 0}^n \setminus \{0\} \} \subset \mathbb{R}_{> 0} e_2 + \mathbb{R} e_3 \subset V_\mathrm{space}$ だから、$v \in J_n$。$\sigma^{-1}v = \sigma^{-1}(\overbrace{e_2, \dots, e_2}^n) + (\overbrace{e_3, \dots, e_3}^n) \in J_n$ も同様

(b) 任意の $\sigma \in \mathfrak{S}_{n + 1}$ に対して、$\tilde{\mathcal{T}}_n \cap \sigma(\tilde{\mathcal{T}}_n)$ は連結

$P \coloneqq \{ (g, \underline{v}) \in SO(V_\mathbb{C}) \times \mathcal{T}^n \mid g\sigma^{-1}\underline{v} \in \mathcal{T}^n \}$ とすると

$$
SO(V_\mathbb{C}) \times P \ni (g_1, (g_2, \underline{v})) \mapsto g_1 g_2 \underline{v} \in \tilde{\mathcal{T}}_n \cap \sigma(\tilde{\mathcal{T}}_n)
$$

は全射だから、$P$ が連結を示せば良い。$Q_{\mathfrak{h}_*^*} \coloneqq \{ (e^{iX}, \underline{v}) \mid X \in \mathfrak{h}_*^*, \underline{v} \in \mathcal{T}^n, e^{iX}\sigma^{-1}\underline{v} \in \mathcal{T}^n \} \ (\mathfrak{h}_*^* = \mathfrak{h}_s^\text{even}, \mathfrak{h}_s^\text{odd}, \mathfrak{h}_c)$ とすると

$$
\bigsqcup_{\mathfrak{h}_*^*} SO_0(V) \times Q_{\mathfrak{h}_*^*} \times SO_0(V) \ni (g_0, (e^{iX}, \underline{v}), r) \mapsto (g_0 e^{iX}g_0^{-1}r, r^{-1}g_0\underline{v}) \in P
$$

は像が稠密だから、$Q_{\mathfrak{h}_*^*}$ の連結成分たちが $P$ 内で繋がっていることを示せば良い。まず、$Q_{\mathfrak{h}_c}$ が連結を示す。$\varphi_t: \mathcal{T} \ni v \mapsto (v_1, tv_2, \dots, tv_n) \in \mathcal{T} \ (0 \le t \le 1)$ は $\tilde{\varphi}_t: Q_{\mathfrak{h}_c} \to Q_{\mathfrak{h}_c}$ を定める。よって

$$
\begin{aligned}
  &\{ \underline{x} - i\underline{y} \mid \underline{x} \in \mathbb{R}^n, \underline{y} \in \mathbb{R}_{> 0}^n, \sigma^{-1}\underline{y} \in \mathbb{R}_{> 0}^n \} \\
  &\quad \simeq \mathbb{R}^n \times \{ (0, \tilde{y}_1, \dots, \tilde{y}_n) \mid (0, \tilde{y}) \text{ は単調増加で } \sigma^{-1}(0, \tilde{y}) \text{ も単調増加} \} \\
  &\quad \simeq \begin{cases} \mathbb{R}^n \times \mathbb{R}_{> 0}^n \quad (\sigma = 1) \\
    \emptyset \quad (\sigma \ne 1)
  \end{cases}
\end{aligned}
$$

が連結から従う

次に、$Q_{\mathfrak{h}_s^*}$ の連結成分が $P$ 内で繋がっていることを示す。$\psi_t: \mathcal{T} \ni v \mapsto (v_1, v_2, tv_3, \dots, tv_n) \in \mathcal{T} \ (0 \le t \le 1)$ は $\tilde{\psi}_t: Q_{\mathfrak{h}_s^*} \to Q_{\mathfrak{h}_s^*}$ を定める。よって

$$
X \coloneqq \{ (t, \underline{x} - i\underline{y}) \mid t \in \mathbb{R} / 2\pi\mathbb{Z}, \underline{x} \in (\mathbb{R}^2)^n, \underline{y} \in (V_+(\mathbb{R}^2))^n, \mathrm{Im}(-e^{itb}\sigma^{-1}(\underline{x} - i\underline{y})) \in (V_+(\mathbb{R}^2))^n \}
$$

の連結成分が $P$ 内で繋がっていることを示せば良い。射影 $X \to \mathbb{R} / 2\pi\mathbb{Z}$ による $(0, \pi), (-\pi, 0)$ の引き戻し $X^{(0, \pi)}, X^{(-\pi, 0)}$ が連結で、$P$ 内で繋がっていることを示せば良い。まず、$X^{(0, \pi)}$ が連結を示す。射影 $\mathrm{pr}_{t, y}: X^{(0, \pi)} \to (\mathbb{R} / 2\pi\mathbb{Z}) \times (V_+(\mathbb{R}^2))^n$ のファイバーは凸集合。$\mathrm{pr}_{t, y}$ の切断が存在することを示せば良い。$\mathrm{Im}(-e^{itb}\sigma^{-1}(\underline{x} - i\underline{y})) = \mathrm{Im}(-(\mathrm{cos}t + i(\mathrm{sin}t)b)(\sigma^{-1}\underline{x} - i\sigma^{-1}\underline{y})) = (\mathrm{cos}t)\sigma^{-1}\underline{y} - (\mathrm{sin}t)b\sigma^{-1}\underline{x}$ だから

$$
(\mathbb{R} / 2\pi\mathbb{Z}) \times (V_+(\mathbb{R}^2))^n \ni (t, y) \mapsto \frac{1}{\mathrm{sin}t}\sigma b((\mathrm{cos}t)\sigma^{-1}\underline{y} - (\overbrace{e_1, \dots, e_1}^n)) \in X^{(0, \pi)}_{t, y}
$$

とすれば良い。同様にして、$X^{(-\pi, 0)}$ も連結。最後に、$X^{(0, \pi)}, X^{(-\pi, 0)}$ が $P$ 内で繋がっていることを示す。$(t, \underline{x} - i\underline{y}) \in X^{(0, \pi)}$ とする。この点は $p_0 \coloneqq (e^{itb}, \underline{x} - i\underline{y}) \in P$ に対応する。$R(\theta) \coloneqq e^{\theta\mathrm{diag}(0, r, \overbrace{0, \dots, 0}^{d - 3})} \in SO(d - 1)$ とすると

$$
\theta \mapsto (R(\theta)e^{itb}R(-\theta), R(\theta)(\underline{x} - i\underline{y})) \in P \quad (0 \le \theta \le \pi)
$$

によって、$p_0$ は $p_\pi \coloneqq (R(\pi)e^{itb}R(\pi), R(\pi)(\underline{x} - i\underline{y})) \in P$ と繋がっている。$p_\pi$ は $(-t, R(\pi)(\underline{x} - i\underline{y})) \in X^{(-\pi, 0)}$ に対応する

最後に、$\sigma = 1$ の場合、$\{1\} \times \mathcal{T}^n \subset Q_{\mathfrak{h}_s^\text{odd}} \cap Q_{\mathfrak{h}_c}$

(c) $E_{n + 1}^0 \coloneqq \{ (v_1, \dots, v_{n + 1}) \in E^{n + 1} \mid v_i \ne v_j \}$ とすると、$\bigcup_{\sigma \in \mathfrak{S}_{n + 1}} \sigma(\tilde{\mathcal{T}}_n) \supset E_{n + 1}^0 / \Delta$

$(v_1, \dots, v_{n + 1}) \in E_{n + 1}^0$ とする。$g \in SO(E)$ が存在して、$(gv_i)_1 - (gv_j)_1 = (g(v_i - v_j))_1 \ne 0$。$\sigma \in \mathfrak{S}_{n + 1}$ が一意的に存在して、$-i(gv_{\sigma(1)})_1 > \cdots > -i(gv_{\sigma(n + 1)})_1$。よって、$(gv_{\sigma(1)}, \dots, gv_{\sigma(n + 1)})$ に対応する $V_\mathbb{C}^n$ の元は $\mathcal{T}^n$ に入る

# Support function $H_K$

$V$: LCS over $\mathbb{R}$

$K \subset V$: 空でない閉凸集合

$$
H_K(\xi) \coloneqq \mathrm{sup}_{x \in K} \langle \xi, x \rangle \in \mathbb{R} \cup \{\infty\} \quad (\xi \in V^*)
$$

は以下を満たす

(a) $H_K \not\equiv \infty$
(b) $H_K(t\xi) = tH_K(\xi) \quad (t > 0, \xi \in V^*)$
(c) $H_K(\xi_1 + \xi_2) \le H_K(\xi_1) + H_K(\xi_2)$
(d) wk\* 位相で下半連続 ($a \in \mathbb{R}$ に対して、$\{ H_K > a \}$ が wk\* open)

逆に、$H: V^* \to \mathbb{R} \cup \{\infty\}$ が (a) 〜 (d) を満たせば、$K_H \coloneqq \{ x \in V \mid \langle -, x \rangle \le H \}$ は空でない閉凸集合になる。$K_H = \bigcap_{\xi \in V^*} \{ \xi \le H(\xi) \}$ から閉凸集合になることが従う。空でないことを示す。まず、$H(0) = 0$ を示す。$\xi_0 \in V^*$ が存在して、$H(\xi_0) < \infty$。$H(t\xi_0) = tH(\xi_0) \to 0 \ (t \to 0)$ から、$H(0) \le 0$。また、$H(0) \le H(0) + H(0)$ から $H(0) = 0$ でなければならない。$E_H \coloneqq \{ (\xi, r) \in V^*_\sigma \times \mathbb{R} \mid H(\xi) \le r \}$ とすると、$E$ は closed convex cone。$(0, -1) \not\in E_H$ だから、Hahn–Banach の分離定理から $(x, \lambda) \in (V^*_\sigma \times \mathbb{R})^* \simeq V \times \mathbb{R}$ が存在して

$$
\xi x + r\lambda > -\lambda \quad ((\xi, r) \in E_H)
$$

$(0, 0) \in E_H$ だから $\lambda > 0$。$E_H$ は cone だから、$\xi x + r\lambda \ge 0 \ ((\xi, r) \in E_H)$。特に、$\xi x + H(\xi)\lambda \ge 0 \ (H(\xi) < \infty)$。よって、$-x / \lambda \in K_H$

$K_{H_K} = K$
$\supset$ は明らか。$x \not\in K$ ならば $x \not\in K_{H_K}$ は Hahn–Banach の分離定理から従う

$H_{K_H} = H$
$H_{K_H} \le H$ は明らか。$\xi_0 \in V^*$ が存在して、$H_{K_H}(\xi_0) < H(\xi_0)$ と仮定する。$(\xi_0, H_{K_H}(\xi_0)) \not\in E_H$ だから、$(x, \lambda) \in V \times \mathbb{R}$ が存在して

$$
\xi x + r\lambda > \xi_0 x + H_{K_H}(\xi_0)\lambda \quad ((\xi, r) \in E_H)
$$

$(0, 0) \in E_H$ と $E_H$ が cone であることから

$$
\xi x + r\lambda \ge 0 > \xi_0 x + H_{K_H}(\xi_0)\lambda \quad ((\xi, r) \in E_H)
$$

$(0, 1) \in E_H$ だから $\lambda \ge 0$。まず、$\lambda = 0$ の場合を考える。$K_H$ は空でないから、$x_0 \in K_H$ が取れる。$x_0 - tx \in K_H \ (t > 0)$。$H_{K_H}(\xi_0) \ge \langle \xi_0, x_0 - tx \rangle \to \infty \ (t \to \infty)$ となり、仮定に矛盾する
次に、$\lambda > 0$ の場合を考える。$-x / \lambda \in K_H$ だが $\langle \xi_0, -x / \lambda \rangle > H_{K_H}(\xi_0)$ となり、$H_{K_H}$ の定義に矛盾する

# Montel 空間での収束

$E$: Montel 空間
$\{ x_\lambda \}$ は有界で、元の位相よりも弱い Hausdorff 位相 $\tau$ で $x \in E$ に収束しているとする。このとき、元の位相で $x_\lambda \to x$

有界閉集合 $K$ が存在して、$x_\lambda, x \in K$。$E$ は Montel だから、$K$ はコンパクト。$K$ 上元の位相と $\tau$ は一致する

$f_\lambda, f \in \mathcal{S}(\mathbb{R}^n)$ は
(1) $|x^\alpha\partial^\beta f_\lambda| \le C_{\alpha, \beta}$
(2) 各点収束で $f_\lambda \to f$
を満たすとする。このとき、$\mathcal{S}(\mathbb{R}^n)$ 内で $f_\lambda \to f$

# Paley–Wiener–Schwartz の定理

$V = \mathbb{R}^n$

$u \in \mathcal{D}'(V)$ に対して

$$
\Gamma_u \coloneqq \{ \eta \in V^* \mid e^\eta u \in \mathcal{S}'(V)\}
$$

$\Gamma_u$ は凸なことを示す。$\eta_1, \eta_2 \in \Gamma_u$, $0 \le t \le 1$ とする

$$
e^{t\eta_1 + (1 - t)\eta_2}u = \frac{e^{t\eta_1 + (1 - t)\eta_2}}{e^{\eta_1} + e^{\eta_2}}(e^{\eta_1}u + e^{\eta_2}u)
$$

だから、$\frac{e^{t\eta_1 + (1 - t)\eta_2}}{e^{\eta_1} + e^{\eta_2}} = \frac{e^{t(\eta_1 - \eta_2)}}{e^{\eta_1 - \eta_2} + 1} = f \circ (\eta_1 - \eta_2)$ の任意階の微分が有界なことを示せば良い。ただし、$f(x) \coloneqq \frac{e^{tx}}{e^x + 1} \ (x \in \mathbb{R})$。$m$ 次多項式 $P_m$ があって $f^{(m)} = e^{tx}(e^x + 1)^{-m - 1}P_m(e^x)$ と表せることから従う

$K \subset V$: 空でない閉凸集合
$u \in \Gamma_K(V, \mathcal{D}')$
$\Gamma_u + \{ H_K < \infty \} \subset \Gamma_u$
$\hat{u}(\xi + i\eta) \coloneqq \widehat{e^\eta u}(\xi) \ (\xi + i\eta \in V^* + i \, \mathrm{int}\Gamma_u)$ は正則関数で、コンパクト部分集合 $M \subset \mathrm{int}\Gamma_u$ に対して、$N \ge 0$ と $C > 0$ が存在して

$$
|\hat{u}(\zeta)| \le C(1 + |\zeta|)^N e^{H_K(\mathrm{Im}\zeta - \eta)} \quad (\zeta \in V^* + i \, \mathrm{int}\Gamma_u, \eta \in M, H_K(\mathrm{Im}\zeta - \eta) < \infty)
$$

これは

$$
|\hat{u}(\xi + i\eta + i\theta)| \le C(1 + |\xi| + |\theta|)^N e^{H_K(\theta)} \quad (\xi \in V^*, \eta \in M, \theta \in \{ H_K < \infty \})
$$

とも表せる

逆に、空でない開凸集合 $\Gamma \subset V^*$ で $\Gamma + \{ H_K < \infty \} \subset \Gamma$ なものと正則関数 $U: V^* + i\Gamma \to \mathbb{C}$ があって、コンパクト部分集合 $M \subset \Gamma$ に対して、$N \ge 0$ と $C > 0$ が存在して

$$
|U(\zeta)| \le C(1 + |\zeta|)^N e^{H_K(\mathrm{Im}\zeta - \eta)} \quad (\zeta \in V^* + i\Gamma, \eta \in M, H_K(\mathrm{Im}\zeta - \eta) < \infty)
$$

を満たせば、$u \in \Gamma_K(V, \mathcal{D}')$ が存在して、$\Gamma \subset \Gamma_u$ かつ $U(\xi + i\eta) = \widehat{e^\eta u}(\xi) \ (\xi + i\eta \in V^* + i\Gamma)$

前半
まず、$\widehat{e^\eta u}(\xi)$ は正則関数になることを示す。$\eta_0, \dots, \eta_n \in \mathrm{int}\Gamma_u$ は一般の位置にあるとする。それらの張る単体 $\Delta$ は $\Gamma_u$ に含まれる。$L_\Delta \subset \Delta$ をコンパクト部分集合とし、$\eta \in L_\Delta$ とすると

$$
e^\eta u = \frac{e^\eta}{e^{\eta_0} + \cdots + e^{\eta_n}}(e^{\eta_0}u + \cdots + e^{\eta_n}u)
$$

$$
\Phi_\eta(x) \coloneqq \frac{e^\eta}{e^{\eta_0} + \cdots + e^{\eta_n}} = \frac{1}{e^{\eta_0 - \eta} + \cdots + e^{\eta_n - \eta}} = f \circ (\eta_0 - \eta, \dots, \eta_n - \eta)
$$

ただし、$f(t_0, \dots, t_n) \coloneqq \frac{1}{e^{t_0} + \cdots + e^{t_n}}$

$$
\varepsilon\|x\| \le \max_j \langle \eta_j - \eta, x \rangle \quad (\eta \in L_\Delta)
$$

を示す。ある $x_0 \in S$ と $\eta' \in L_\Delta$ が存在して、$\langle \eta_j - \eta', x_0 \rangle \le 0$ と仮定する。$\Delta - \eta'$ が原点を通るある閉半平空間に含まれることになり矛盾する。よって、$e^{\eta_0 - \eta} + \cdots + e^{\eta_n - \eta} \ge \max_j e^{\langle \eta_j - \eta, x \rangle} = e^{\max_j \langle \eta_j - \eta, x \rangle} \ge e^{\varepsilon\|x\|}$。また、$|\alpha|$ 次の多項式 $P_\alpha$ があって、$\partial_t^\alpha f = P_\alpha(e^t_0, \dots, e^t_n)(e^{t_0} + \cdots + e^{t_n})^{-|\alpha| - 1}$ だから

$$
|\partial_x^\alpha \Phi_\eta(x)| \le C_\alpha e^{-\varepsilon\|x\|} \quad (\eta \in L_\Delta)
$$

$$
\begin{aligned}
  \widehat{e^\eta u}(\xi) &= (2\pi)^{-n/2} \langle u, e^\eta \int \varphi(\xi)e^{-i\xi x} \, d\xi \rangle \quad (\varphi \in \mathcal{S}(V^*)) \\
  &= (2\pi)^{-n/2} \langle u, \sum_j e^{\eta_j}\Phi_\eta(x) \int \varphi(\xi)e^{-i\xi x} \, d\xi \rangle \\
  &= (2\pi)^{-n/2} \sum_j \langle e^{\eta_j}u, \int \varphi(\xi)\Phi_\eta(x)e^{-i\xi x} \, d\xi \rangle \\
  &= (2\pi)^{-n/2} \sum_j \int \varphi(\xi) \langle e^{\eta_j}u, \Phi_\eta(x)e^{-i\xi x} \rangle \, d\xi \\
  &= (2\pi)^{-n/2} \sum_j \langle e^{\eta_j}u, \Phi_\eta(x)e^{-i\xi x} \rangle \\
  &= (2\pi)^{-n/2} \sum_j \langle e^{\eta_j}u, \frac{e^{-i(\xi + i\eta)}}{e^{\eta_0} + \cdots + e^{\eta_n}} \rangle
\end{aligned}
$$

は $\xi + i\eta \in V^* + i \, \mathrm{int}L_\Delta$ で $C^\infty$ 級。Cauchy–Riemann の等式を満たすから正則関数になる。総合すると、$\xi + i\eta \in V^* + i \, \mathrm{int}\Gamma_u$ で正則になる

次に評価を示す。$B_r \coloneqq \{ x \in V \mid \|x\| \le r \}$。$\rho \in C^\infty_{B_1}(V)$ は $\int \rho \, dx = 1$ とする。$\rho_\delta(x) \coloneqq \delta^{-n}\rho(x / \delta)$。$\chi_\delta(x) \coloneqq 1_{K + B_{2\delta}} * \rho_\delta = \int_{K + B_{2\delta}} \rho_\delta(x - y) \, dy \in C^\infty(V)$ とする。$\chi_\delta$ は $K + B_\delta$ 上 $1$ かつ $K + B_{3\delta}$ の外で消える。再び、$\eta_0, \dots, \eta_n \in \mathrm{int}\Gamma_u$ は一般の位置にあるとし、それらの張る単体を $\Delta$ とする。$L_\Delta \subset \Delta$ をコンパクト部分集合とする。$\xi \in V^*$, $\eta \in L_\Delta$, $\theta \in \{ H_K < \infty \}$ とすると

$$
\begin{aligned}
  \hat{u}(\xi + i\eta + i\theta) &= \widehat{e^{\eta + \theta}u}(\xi) \\
  &= (2\pi)^{-n/2} \langle u, e^{\eta + \theta} \int \varphi(\xi)e^{-i\xi x} \, d\xi \rangle \quad (\varphi \in \mathcal{S}(V^*)) \\
  &= (2\pi)^{-n/2} \langle u, \chi_\delta e^{\eta + \theta} \sum_j \frac{e^{\eta_j}}{e^{\eta_0} + \cdots + e^{\eta_n}} \int \varphi(\xi)e^{-i\xi x} \, d\xi \rangle \\
  &= (2\pi)^{-n/2} e^{H_K(\theta)} \langle u, \sum_j e^{\eta_j} \int \varphi(\xi)W_{\xi, \eta, \theta, \delta}(x) \, d\xi \rangle
\end{aligned}
$$

ただし、$W_{\xi, \eta, \theta, \delta}(x) \coloneqq \frac{\chi_\delta e^{\eta + \theta}e^{-H_K(\theta)}e^{-i\xi}}{e^{\eta_0} + \cdots + e^{\eta_n}} = \chi_\delta e^{\theta x - H_K(\theta)}e^{-i\xi x}\Phi_\eta(x)$

$x \in K + B_{3\delta}$ ならば

$$
\theta x - H_K(\theta) \le 3\delta\|\theta\|
$$

$\delta = (1 + \|\theta\|)^{-1}$ とし、$W_{\xi, \eta, \theta} \coloneqq W_{\xi, \eta, \theta, (1 + \|\theta\|)^{-1}}$ とすると

$$
|\partial_x^\alpha W_{\xi, \eta, \theta}(x)| \le C'_\alpha(1 + |\xi| + |\theta|)^{|\alpha|}e^{-\varepsilon|x|}
$$

$$
\begin{aligned}
  \hat{u}(\xi + i\eta + i\theta) &= (2\pi)^{-n/2} e^{H_K(\theta)} \langle u, \sum_j e^{\eta_j} \int \varphi(\xi)W_{\xi, \eta, \theta}(x) \, d\xi \rangle \\
  &= (2\pi)^{-n/2} e^{H_K(\theta)} \sum_j \langle e^{\eta_j}u, \int \varphi(\xi)W_{\xi, \eta, \theta}(x) \, d\xi \rangle \\
  &= (2\pi)^{-n/2} e^{H_K(\theta)} \sum_j \int \varphi(\xi) \langle e^{\eta_j}u, W_{\xi, \eta, \theta}(x) \rangle \, d\xi \\
  &= (2\pi)^{-n/2} e^{H_K(\theta)} \sum_j \langle e^{\eta_j}u, W_{\xi, \eta, \theta}(x) \rangle
\end{aligned}
$$

後半
$\eta \in \Gamma$ とすると $U(\cdot + i\eta) \in \mathcal{S}'(V^*)$ だから $u_\eta \coloneqq \mathcal{F}^{-1}U(\cdot + i\eta) \in \mathcal{S}'(V)$ が定まる

$$
\partial_{\eta_j}U(\xi + i\eta) = i\partial_{\xi_j}U(\xi + i\eta)
$$

だから、$\partial_{\eta_j}u_\eta = x_j u_\eta$。よって、$u \coloneqq e^{-\eta}u_\eta \in \mathcal{D}'(V)$ は $\eta \in \Gamma$ に依らない。$\mathrm{supp} u \subset K$ を示す。$x_0 \not\in K$ とする。$\theta_0 \in V^*$ が存在して、$\langle \theta_0, x_0 \rangle > H_K(\theta_0)$。$\eta_0 \in \Gamma$ を固定する。$t > 0$ に対して

$$
|U(\xi + i\eta_0 + it\theta_0)| \le C(1 + |\xi| + t)^N e^{tH_K(\theta_0)}
$$

開集合 $x_0 \in U$ が存在して、$\langle \theta_0, x \rangle \ge H_K(\theta_0) + \varepsilon \ (x \in U)$。$\varphi \in C^\infty_c(U)$ とすると

$$
\begin{aligned}
  |u(\varphi)| &= |(e^{\eta_0 + t\theta_0}u)(e^{-\eta_0 - t\theta_0}\varphi)| \\
  &= |\int U(\xi + i\eta_0 + it\theta_0)\widehat{e^{-\eta_0 - t\theta_0}\varphi}(-\xi) \, d\xi| \\
  &= (2\pi)^{-n/2} |\int U(\xi + i\eta_0 + it\theta_0) \, d\xi \int e^{-\eta_0 x - t\theta_0 x}\varphi(x)e^{ix\xi} \, dx| \\
  &= (2\pi)^{-n/2} |\int U(\xi + i\eta_0 + it\theta_0) \, d\xi \int e^{-\eta_0 x - t\theta_0 x}\varphi(x)M_\xi^{N + n + 1}(e^{ix\xi}) \, dx| \\
  &= (2\pi)^{-n/2} |\int U(\xi + i\eta_0 + it\theta_0) \, d\xi \int (-M_\xi)^{N + n + 1}[e^{-\eta_0 x - t\theta_0 x}\varphi(x)]e^{ix\xi} \, dx| \\
  &\le C' \int |U(\xi + i\eta_0 + it\theta_0)| (1 + t)^{N + n + 1}(1 + |\xi|)^{-N - n - 1}e^{-tH_K(\theta) - t\varepsilon} \, d\xi \\
  &\le C'' (1 + t)^{2N + n + 1}e^{-t\varepsilon}
\end{aligned}
$$

ただし、$M_\xi \coloneqq \frac{1}{i|\xi|^2} \sum_i \xi_i \frac{\partial}{\partial x_i}$。$t \to \infty$ とすれば良い

# 畳み込み

$V = \mathbb{R}^n$
$s: V \times V \xrightarrow{+} V$ とする

$\Gamma_1, \Gamma_2 \subset T^*V$: closed cone
$s|_{(\Gamma_1 \cap 0_V) \times (\Gamma_2 \cap 0_V)} \to V$ は proper とする
畳み込み

$$
\begin{aligned}
  \mathcal{D}'_{\Gamma_1}(V) \otimes \mathcal{D}'_{\Gamma_2}(V) \ni f \otimes g &\mapsto f \boxtimes g \in \mathcal{D}'_{\Gamma_1 \times \Gamma_2}(V \times V) \\
  &\overset{s_*}{\mapsto} f * g \in \mathcal{D}'_\Gamma(V)
\end{aligned}
$$

は各変数ごとに連続。ただし、$\Gamma \coloneqq \{ (x, \xi) \in T^*V \mid \exists a, b \in V, a + b = x \text{ かつ } \xi \in \Gamma_{1, a} \cap \Gamma_{2, b} \}$


# Wightman function の解析接続

あああ

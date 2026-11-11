---
title: "math5"
---

# 自由可換ゲージ理論

https://zenn.dev/link/comments/9d71c6e6abbc28

https://zenn.dev/link/comments/d24f97806b9829

$d \ge 2$
$V$: 符号 $(1, d - 1)$ の Minkowski 空間
$P \coloneqq V \times \mathbb{R}$: 自明な $\mathbb{R}$ 主束
$\mathcal{F} \coloneqq \{ P \text{ 上の接続の同型類} \} = \{ d\theta + \alpha \mid \alpha \in \Omega^1(V) \} / \{ \text{完全形式} \}$

$$
L \coloneqq -\frac{1}{2} F \wedge *F = -\frac{1}{2} (F, F) |dx|
$$

ただし、$F \coloneqq d\alpha \in \Omega^2(V)$

$$
\delta L = -\delta F \wedge *F = -\delta d\alpha \wedge *d\alpha = d(\delta\alpha \wedge *d\alpha) - (\delta\alpha \wedge d*d\alpha)
$$

運動方程式は $d*d\alpha = 0 \Leftrightarrow d^*d\alpha = 0 \Leftrightarrow (dd^* + \Delta)\alpha = 0$

$$
\begin{aligned}
  \gamma &= -\delta\alpha \wedge *d\alpha \\
  \omega &= \delta\gamma = -\delta\alpha \wedge \delta *d\alpha
\end{aligned}
$$

$\alpha = \sum_j \alpha_j e^j$ とすると

$$
dd^*\alpha = -\sum_j (e^j, e^j) d(\partial_j\alpha_j) = -\sum_{j, k} (e^j, e^j) \partial_k\partial_j\alpha_j e^k
$$

$$
\begin{aligned}
  \mathcal{F}(dd^*\alpha) &= \sum_{j, k} (e^j, e^j) p_k p_j \mathcal{F}\alpha_j e^k \quad (p = \sum_j p_j e^j) \\
  &= (\mathcal{F}\alpha, p)p
\end{aligned}
$$

線束 $\theta$ を $\theta \coloneqq \{ (p, \mathbb{R}p) \mid p \in V \setminus \{0\} \} \subset (V \setminus \{0\}) \times V$ で定義する。反転付きの Fourier 変換 $F \coloneqq (\mathcal{F}\alpha)(-p)$ を使うと、$p = 0$ などは無視して形式的に

$$
\begin{aligned}
  &\{ \alpha \in \mathcal{S}'(V, V^*) \mid d*d\alpha = 0 \} / \{ \text{完全形式} \} \\
  &\quad \simeq \{ F \in \mathcal{S}'(V, V \otimes \mathbb{C}) \mid (F(p), p)p - p^2F(p) = 0, F(-p) = \overline{F(p)} \} \\
  &\qquad\qquad / \{ F \in \mathcal{S}'(V, \theta \otimes \mathbb{C}) \mid F(-p) = \overline{F(p)} \} \\
  &\quad \simeq \{ f \in \mathcal{S}'(\mathcal{O}_0, (\theta^\perp / \theta) \otimes \mathbb{C}) \mid f(-p) = \overline{f(p)} \}
\end{aligned}
$$

$\mathcal{O}_0$ 上の実ベクトル束 $\mathcal{N}$ を $\mathcal{N} \coloneqq \theta^\perp / \theta$ で定義する。$\mathrm{rk}\mathcal{N} = d - 2$ であり、$V$ から $\mathcal{N}$ に誘導される計量は負定値。正定値内積 $\langle -, - \rangle_{\mathcal{N}}$ を

$$
\langle \xi, \eta \rangle_{\mathcal{N}_p} \coloneqq -\xi\eta \quad (\xi, \eta \in \mathcal{N}_p = p^\perp / \mathbb{R}p)
$$

で定義する

$$
H \coloneqq \{ f \in L^2(\mathcal{O}_0, \mathcal{N} \otimes \mathbb{C}) \mid f(-p) = \overline{f(-p)} \}
$$

# $H$ での $[−, −]$ の記述

https://zenn.dev/ryoaq/books/mathematical-notes/viewer/math1#%E3%81%A7%E3%81%AE-%E3%81%AE%E8%A8%98%E8%BF%B0

$\alpha, \beta \in \Omega^1(V)$ に対して

$$
dt \wedge \alpha \wedge *d\beta = (dt \wedge \alpha, d\beta) dt \wedge dx'
$$

ただし、$x = (t, x')$ とした。$\alpha = \alpha_0 dt + \alpha'$, $\beta = \beta_0 dt + \beta'$ とすると

$$
\begin{aligned}
  (\alpha \wedge *d\beta)|_{t = 0} &= (dt \wedge \alpha, d\beta)|_{t = 0} dx' \\
  &= (\alpha, \iota_{\partial_t}d\beta)|_{t = 0} dx' \\
  &= (\alpha, \partial_t\beta - d\iota_{\partial_t}\beta)|_{t = 0} dx' \\
  &= (\alpha, \partial_t\beta - d\beta_0)|_{t = 0} dx' \\
  &= -(\alpha', \partial_t\beta' - d_{x'}\beta_0)'|_{t = 0} dx'
\end{aligned}
$$

ただし、$(-, -)'$ は通常の正定値内積

$f_1, f_2 \in H$ とする

$$
\begin{aligned}
  F_j(\xi) &= \int_{p \in \mathcal{O}_0} f_j(p)\xi(p) \, d\mu_0(p) \\
  \alpha_j(u) &= (2\pi)^{-d/2} \int_{x, p \in \mathcal{O}_0} f_j(p)u(x)e^{-ipx} \, dx d\mu_0(p)
\end{aligned}
$$

$$
\begin{aligned}
  [\alpha_1, \alpha_2] &= \int_{t = 0} (\alpha_1 \wedge *d\alpha_2 - \alpha_2 \wedge *d\alpha_1) \\
  &= -\int [(\alpha'_1|_{t = 0}, \partial_t\alpha'_2|_{t = 0})' - (\alpha'_2|_{t = 0}, \partial_t\alpha'_1|_{t = 0})'] \, dx' \\
  &\quad +\int [(\alpha'_1|_{t = 0}, d_{x'}\alpha_{2, 0}|_{t = 0})' - (\alpha'_2|_{t = 0}, d_{x'}\alpha_{1, 0}|_{t = 0})'] \, dx'
\end{aligned}
$$

を計算したい

$p = (p_0, p')$ とすると

$$
\begin{aligned}
  \alpha'_j|_{t = 0}(v) &= \alpha_j(\delta \otimes v) = (2\pi)^{-d/2} \int_{x', p \in \mathcal{O}_0} f'_j(p)v(x')e^{ip'x'} \, dx' d\mu_0(p) \\
  \partial_t\alpha'_j|_{t = 0}(v) &= -(2\pi)^{-d/2}i \int_{x', p \in \mathcal{O}_0} p_0 f'_j(p)v(x')e^{ip'x'} \, dx' d\mu_0(p) \\
  d_{x'}\alpha_{j, 0}|_{t = 0}(v) &= (2\pi)^{-d/2}i \int_{x', p \in \mathcal{O}_0} p' f_{j, 0}(p)v(x')e^{ip'x'} \, dx' d\mu_0(p)
\end{aligned}
$$

$$
\begin{aligned}
  \widehat{\alpha'_j|_{t = 0}}(\eta) &= (2\pi)^{-1/2} \int_{p \in \mathcal{O}_0} f'_j(p)\eta(p') \, d\mu_0(p) \\
  \widehat{\partial_t\alpha'_j|_{t = 0}}(\eta) &= -(2\pi)^{-1/2}i \int_{p \in \mathcal{O}_0} p_0 f'_j(p)\eta(p') \, d\mu_0(p) \\
  \widehat{d_{x'}\alpha_{j, 0}|_{t = 0}}(\eta) &= (2\pi)^{-1/2}i \int_{p \in \mathcal{O}_0} p' f_{j, 0}(p)\eta(p') \, d\mu_0(p)
\end{aligned}
$$

$\mathcal{O}_0^\pm \simeq \{ p' \in \mathbb{R}^{d - 1} \setminus \{0\} \}$ によって $d\mu_0(p) = \frac{dp'}{2|p'|}$ だから

$$
\begin{aligned}
  \widehat{\alpha'_j|_{t = 0}} &= (2\pi)^{-1/2} \frac{1}{2|p'|} [f'_j(|p'|, p') + f'_j(-|p'|, p')] \in L^2(|p'|dp', \mathbb{C}^{d - 1}) \\
  \widehat{\partial_t\alpha'_j|_{t = 0}} &= -(2\pi)^{-1/2} \frac{i}{2} [f'_j(|p'|, p') - f'_j(-|p'|, p')] \in L^2\left(\frac{dp'}{|p'|}, \mathbb{C}^{d - 1}\right) \\
  \widehat{d_{x'}\alpha_{j, 0}|_{t = 0}} &= (2\pi)^{-1/2} \frac{ip'}{2|p'|} [f_{j, 0}(|p'|, p') - f_{j, 0}(-|p'|, p')] \in L^2\left(\frac{dp'}{|p'|}, \mathbb{C}^{d - 1}\right)
\end{aligned}
$$

$$
\begin{aligned}
  &\int_{x'} (\alpha'_1|_{t = 0}, \partial_t\alpha'_2|_{t = 0})' \, dx' \\
  &\quad = \int_{p'} (\widehat{\alpha'_1|_{t = 0}}(p'), \widehat{\partial_t\alpha'_2|_{t = 0}}(-p'))' \, dp' \\
  &\quad = -\frac{i}{8\pi} \int_{p'} \frac{1}{|p'|} (f'_1(|p'|, p') + f'_1(-|p'|, p'), f'_2(|p'|, -p') - f'_2(-|p'|, -p'))' \, dp' \\
  &\quad = -\frac{i}{8\pi} \int_{p'} \frac{1}{|p'|} [(f'_1(|p'|, p'), f'_2(|p'|, -p'))' - (f'_1(|p'|, p'), f'_2(-|p'|, -p'))' \\
  &\qquad + (f'_1(-|p'|, p'), f'_2(|p'|, -p'))' - (f'_1(-|p'|, p'), f'_2(-|p'|, -p'))'] \, dp'
\end{aligned}
$$

$$
\begin{aligned}
  &\int [(\alpha'_1|_{t = 0}, \partial_t\alpha'_2|_{t = 0})' - (\alpha'_2|_{t = 0}, \partial_t\alpha'_1|_{t = 0})'] \, dx' \\
  &\quad = -\frac{i}{4\pi} \int_{p'} \frac{1}{|p'|} [-(f'_1(|p'|, p'), f'_2(-|p'|, -p'))' + (f'_1(-|p'|, p'), f'_2(|p'|, -p'))'] \, dp' \\
  &\quad = -\frac{i}{2\pi} \int_{p \in \mathcal{\mathcal{O}_0^+}} [-(f'_1(p), f'_2(-p))' + (f'_1(-p), f'_2(p))'] \, d\mu(p)
\end{aligned}
$$

$$
\begin{aligned}
  &\int_{x'} (\alpha'_1|_{t = 0}, d_{x'}\alpha_{2, 0}|_{t = 0})' \, dx' \\
  &\quad = \int_{p'} (\widehat{\alpha'_1|_{t = 0}}(p'), \widehat{d_{x'}\alpha_{2, 0}|_{t = 0}}(-p'))' \, dp' \\
  &\quad = -\frac{i}{8\pi} \int_{p'} \frac{1}{|p'|^2} (f'_1(|p'|, p') + f'_1(-|p'|, p'), p')' (f_{2, 0}(|p'|, -p') - f_{2, 0}(-|p'|, -p')) \, dp' \\
  &\quad = -\frac{i}{8\pi} \int_{p'} \frac{1}{|p'|} (f_{1, 0}(|p'|, p') + f_{1, 0}(-|p'|, p'))(f_{2, 0}(|p'|, -p') - f_{2, 0}(-|p'|, -p')) \, dp'
\end{aligned}
$$

$$
\begin{aligned}
  &\int [(\alpha'_1|_{t = 0}, d_{x'}\alpha_{2, 0}|_{t = 0})' - (\alpha'_2|_{t = 0}, d_{x'}\alpha_{1, 0}|_{t = 0})'] \, dx' \\
  &\quad = -\frac{i}{2\pi} \int_{p \in \mathcal{\mathcal{O}_0^+}} [-f_{1, 0}(p)f_{2, 0}(-p) + f_{1, 0}(-p)f_{2, 0}(p)] \, d\mu(p)
\end{aligned}
$$

$$
\begin{aligned}
  [\alpha_1, \alpha_2] &= -\frac{i}{2\pi} \int_{p \in \mathcal{\mathcal{O}_0^+}} [-(f_1(p), f_2(-p)) + (f_1(-p), f_2(p))] \, d\mu(p) \\
  &= \frac{1}{\pi} \int_{p \in \mathcal{O}_0^+} -\mathrm{Im} (f_1, \bar{f_2}) \, d\mu(p) \\
  &= \frac{1}{\pi} \int_{p \in \mathcal{O}_0^+} \mathrm{Im} (f_1, \bar{f_2})_\mathcal{N} \, d\mu(p)
\end{aligned}
$$

# Wightman QFT of free abelian gauge theory

$V$: $d$ 次元の Minkowski 空間
$G \coloneqq \mathrm{Spin}(V)$
$P \coloneqq G \ltimes V$

$\rho: G \curvearrowright \wedge^2 V^*$
$\mathcal{R} \coloneqq P \times_G \rho$

$V \times V^* \to V$ は $P$ 同変ベクトル束だから、$P \curvearrowright H = \{ f \in L^2(\mathcal{O}_0, \mathcal{N} \otimes \mathbb{C}) \mid f(-p) = \overline{f(p)} \}$ が誘導される

$$
\begin{aligned}
  (\Lambda, a)h &= (2\pi)^{-d/2} \int \Lambda\tilde{h}(\Lambda^{-1}(x - a))e^{ipx} \, dx \quad (\tilde{h}(x) \coloneqq \int h(p)e^{-ipx} \, dp) \\
  &= e^{ipa}\Lambda h(\Lambda^{-1}p)
\end{aligned}
$$

$I: H \to H$ を

$$
Ih(p) \coloneqq \begin{cases}
  ih(p) &\quad (p \in \mathcal{O}_0^+) \\
  -ih(p) &\quad (p \in \mathcal{O}_0^-)
\end{cases}
$$

で定義すれば、$H_\pm = L^2(\mathcal{O}_0^\pm, \mathcal{N} \otimes \mathbb{C})$。$H_+$ 上の Hermite 形式

$$
(h_1, h_2) \coloneqq \frac{i}{2} [h_1(p), \overline{h_2(-p)}] = \frac{1}{4\pi} \int_{p \in \mathcal{O}_0^+} (h_1(p), \overline{h_2(p)})_\mathcal{N} \, d\mu_0(p)
$$

は正定値。$I$ は $P$ 同変だから、$P \curvearrowright H_+$, $U: P \curvearrowright \mathcal{H} \coloneqq \widehat{\bigoplus_{n = 0}^\infty} S^n H_+$ が誘導される。$D_+ \coloneqq \{ f \in \mathcal{S}(\mathcal{O}_0^+, V \otimes \mathbb{C}) \mid pf(p) = 0, f(0) = 0 \} / \{ pc(p) \mid c \in \mathcal{S}(\mathcal{O}_0^+, \mathbb{C}) \} \subset H_+$, $\mathcal{D} \coloneqq \bigoplus_{n = 0}^\infty S^n D_+$ とし、$\Omega \coloneqq 1 \in \mathcal{D}$

$\varphi: \mathcal{S}(\mathcal{R}) \to \mathrm{End}(\mathcal{D})$ を

$$
\varphi(\omega) \coloneqq \varepsilon_{k_\omega} + \iota_{(\cdot, k_\omega)}
$$

で定義する。ただし、$k_\omega \coloneqq \iota(-p)\mathcal{F}\omega(-p)|_{\mathcal{O}_0^+} \in D_+$

(1) $U|_V$ の同時スペクトル $\sigma(U) \subset V^*$ は

$$
\langle \sigma(U), \overline{V}_+ \rangle \ge 0
$$

$\sigma(U) = \overline{V}_+$ から従う

${}$(2) $\varphi(\omega)$ は super symmetric operator

明らか

(4) $\omega, \sigma \in \mathcal{S}(\mathcal{R})$ が $\mathrm{supp} \omega - \mathrm{supp} \sigma \subset V_\mathrm{space}$ ならば

$$
[\varphi(\omega), \varphi(\sigma)] = 0
$$

$$
\begin{aligned}
  [\varphi(\omega), \varphi(\sigma)] &= (k_\sigma, k_\omega) - (k_\omega, k_\sigma) \\
  &= \frac{1}{4\pi} \int_{p \in \mathcal{O}_0^+, x, y} (\iota(p)\omega(x), \iota(p)\sigma(y))_\mathcal{N} (e^{-ip(x - y)} - e^{ip(x - y)}) \, d\mu(p) dx dy \\
  &= \sum_{j, k} \int_{p \in \mathcal{O}_0^+, z} F_{jk}(z) p_j p_k (e^{-ipz} - e^{ipz}) \, d\mu(p) dz \\
  &= \sum_{j, k} \int_{p \in \mathcal{O}_0^+, z} \varepsilon_{jk} F_{jk}(z) \partial_{z_j}\partial_{z_k} (e^{-ipz} - e^{ipz}) \, d\mu(p) dz \\
  &= \sum_{j, k} \int_{p \in \mathcal{O}_0^+, z} \varepsilon_{jk} (\partial_{z_j}\partial_{z_k}F_{jk})(z) (e^{-ipz} - e^{ipz}) \, d\mu(p) dz \\
  &= 0
\end{aligned}
$$

ただし、$F_{jk}(z)$ は $\mathrm{supp} \subset V_\mathrm{space}$ な急減少関数

${}$(3) $\mathcal{D}$ は $\varphi(\omega_1) \cdots \varphi(\omega_n)\Omega$ で生成される

$\{ k_\omega \mid \omega \in \mathcal{S}(\mathcal{R}) \} \otimes \mathbb{C} = D_+$ から従う。証明はおサボり

# $\mathrm{Spin}(V), \mathrm{Pin}(V), \widetilde{\mathrm{Spin}}(V), \widetilde{\mathrm{Pin}}(V)$

https://zenn.dev/link/comments/eec29d6e814a2a

$(V, Q)$: 符号 $(p, q)$ の不定値計量を持つ $\mathbb{R}$ 線形空間

$C(V) \ni v \mapsto -v \in C(V)$ は $\mathbb{R}$ 代数の同型

$$
\begin{aligned}
  G &\coloneqq \{ g \in C(V)^\times \mid (-1)^{p(g)}gVg^{-1} \subset V \} \\
  G^+ &\coloneqq \{ g \in (C(V)^+)^\times \mid gVg^{-1} \subset V \}
\end{aligned}
$$

$G \ni v \mapsto R_v \in O(V)$ があるが

$$
\begin{aligned}
  1 \to \mathbb{R}^\times \to G \to O(V) \to 1 \\
  1 \to \mathbb{R}^\times \to G^+ \to SO(V) \to 1
\end{aligned}
$$

$$
\begin{aligned}
  G &= \{ \mathbb{R}^\times v_1 \cdots v_k \mid Q(v_i) = \pm 1 \} \\
  G^+ &= \{ \mathbb{R}^\times v_1 \cdots v_k \mid k \text{ は偶数かつ } Q(v_i) = \pm 1 \}
\end{aligned}
$$

$N: G \ni v \mapsto Q(v) \in \mathbb{R}^\times$ があるが

$$
\begin{aligned}
  \mathrm{Pin}(V) &\coloneqq N^{-1}(1) \\
  \mathrm{Spin}(V) &\coloneqq (N|_{G^+})^{-1}(1) \\
  \widetilde{\mathrm{Pin}}(V) &\coloneqq N^{-1}(\{\pm 1\}) \\
  \widetilde{\mathrm{Spin}}(V) &\coloneqq (N|_{G^+})^{-1}(\{\pm 1\})
\end{aligned}
$$

$$
\begin{aligned}
  \mathrm{Spin}(V) &= \{ \pm v_1 \cdots v_k \mid k \text{ は偶数かつ } Q(v_i) = \pm 1, Q(v_1) \cdots Q(v_k) = 1 \} \\
  \mathrm{Pin}(V) &= \{ \pm v_1 \cdots v_k \mid Q(v_i) = \pm 1, Q(v_1) \cdots Q(v_k) = 1 \} \\
  \widetilde{\mathrm{Spin}}(V) &= \{ \pm v_1 \cdots v_k \mid k \text{ は偶数かつ } Q(v_i) = \pm 1 \} \\
  \widetilde{\mathrm{Pin}}(V) &= \{ \pm v_1 \cdots v_k \mid Q(v_i) = \pm 1 \}
\end{aligned}
$$

$$
\begin{aligned}
  1 \to \mathbb{Z} / 2\mathbb{Z} \to &\mathrm{Spin}(V) \to SO(V) \cap O_{\mathrm{space}}(V) = SO_0(V) = SO^+(V) \to 1 \\
  1 \to \mathbb{Z} / 2\mathbb{Z} \to &\mathrm{Pin}(V) \to O_{\mathrm{space}}(V) \to 1 \\
  1 \to \mathbb{Z} / 2\mathbb{Z} \to &\widetilde{\mathrm{Spin}}(V) \to SO(V) \to 1 \\
  1 \to \mathbb{Z} / 2\mathbb{Z} \to &\widetilde{\mathrm{Pin}}(V) \to O(V) \to 1
\end{aligned}
$$

ただし

$$
O_{\mathrm{space}}(p, q) \coloneqq \left\{ \begin{pmatrix}
  A & B \\
  C & D
\end{pmatrix} \in O(p, q) \mid \mathrm{det} D > 0 \right\}
$$

一般的には、$\mathrm{Spin}(V)$, $\widetilde{\mathrm{Spin}}(V)$, $\widetilde{\mathrm{Pin}}(V)$ は $\mathrm{Spin}^+(V)$, $\mathrm{Spin}(V)$, $\mathrm{Pin}(V)$ と表記されるが、一般の体上での定義との整合性を優先する

# $\mathrm{Spin}(V_\mathbb{C}), \mathrm{Pin}(V_\mathbb{C})$

$(V_\mathbb{C}, Q)$: 非退化 2 次形式付き $\mathbb{C}$ 線形空間

$$
\begin{aligned}
  1 \to \mathbb{C}^\times \to G \to O(V_\mathbb{C}) \to 1 \\
  1 \to \mathbb{C}^\times \to G^+ \to SO(V_\mathbb{C}) \to 1
\end{aligned}
$$

$$
\begin{aligned}
  G &= \{ \mathbb{C}^\times v_1 \cdots v_k \mid Q(v_i) = 1 \} \\
  G^+ &= \{ \mathbb{C}^\times v_1 \cdots v_k \mid k \text{ は偶数かつ } Q(v_i) = 1 \}
\end{aligned}
$$

$$
\begin{aligned}
  \mathrm{Pin}(V_\mathbb{C}) &\coloneqq \mathrm{Ker}N \\
  \mathrm{Spin}(V_\mathbb{C}) &\coloneqq \mathrm{Ker}(N|_{G^+})
\end{aligned}
$$

$$
\begin{aligned}
  \mathrm{Spin}(V_\mathbb{C}) &= \{ \pm v_1 \cdots v_k \mid k \text{ は偶数かつ } Q(v_i) = 1 \} \\
  \mathrm{Pin}(V_\mathbb{C}) &= \{ \pm v_1 \cdots v_k \mid Q(v_i) = 1 \}
\end{aligned}
$$

$$
\begin{aligned}
  1 \to \mathbb{Z} / 2\mathbb{Z} \to &\mathrm{Spin}(V_\mathbb{C}) \to SO(V_\mathbb{C}) \to 1 \\
  1 \to \mathbb{Z} / 2\mathbb{Z} \to &\mathrm{Pin}(V_\mathbb{C}) \to O(V_\mathbb{C}) \to 1
\end{aligned}
$$

# $\mathcal{O}^\mathbb{C}_m$

$d \ge 3$
$(V_\mathbb{C}, Q)$: 次元 $d$ の非退化 2 次形式付き $\mathbb{C}$ 線形空間
$m \in \mathbb{C}$

$SO(V_\mathbb{C}) \curvearrowright \mathcal{O}^\mathbb{C}_m \coloneqq \{ z \in V_\mathbb{C} \mid z^2 = m^2 \}$ は推移的

まず、$m \ne 0$ とする。$p \in \mathcal{O}^\mathbb{C}_m$ とする。$\frac{1}{m}p$ は正規直交基底に延長できるから、$SO(V_\mathbb{C}) \curvearrowright \mathcal{O}^\mathbb{C}_m$ は推移的。$p$ の固定部分群は $SO(p^\perp)$ だから

$$
\mathcal{O}^\mathbb{C}_m \simeq SO(d, \mathbb{C}) / SO(d - 1, \mathbb{C})
$$

$m \ne 0$ の場合は、$d = 2$ でも成立する

$m = 0$ とする。$p \in \mathcal{O}^\mathbb{C}_0$ とする。$q \in V_\mathbb{C}$ を $Q(p, q) = 2$ に取る。$q + \mathbb{C}p$ を考えれば、$Q(q) = 0$ として良い。$e_0 \coloneqq \frac{1}{2}(p + q)$, $e_1 \coloneqq \frac{i}{2}(p - q)$ とすると、$Q(e_i, e_j) = \delta_{ij}$。$V_\mathbb{C} = \mathbb{C}e_0 \oplus \mathbb{C}e_1 \oplus \langle e_0, e_1 \rangle^\perp$ と直交分解できる。よって、$SO(V_\mathbb{C}) \curvearrowright \mathcal{O}^\mathbb{C}_0$ は推移的。$p$ の固定部分群を $H$ とすると

$$
1 \to p^\perp / \mathbb{C}p \xrightarrow{j} H \to SO(p^\perp / \mathbb{C}p) \to 1
$$

$j$ は $vp \in \mathfrak{spin}(V_\mathbb{C}) \subset C^+(V_\mathbb{C}) \ (v \in p^\perp)$ を用いて

$$
j(v)w \coloneqq e^{vp}we^{-vp}
$$

と定義する。この完全列は $q$ に依存した右分裂を持つから

$$
\mathcal{O}^\mathbb{C}_0 \simeq SO(d, \mathbb{C}) / SE(d - 2, \mathbb{C})
$$

# Peter$\text{--}$Weyl の定理

$G$: コンパクト位相群
$\hat{G}$: $G$ の $\mathbb{C}$ 上の有限次元既約 unitary 表現の同型類
$\hat{G}$ は $G$ の unitary とは限らない $\mathbb{C}$ 上の Hilbert 空間上の既約表現の同型類とも一致する

$$
\widehat{\bigoplus}_{V \in \hat{G}} V^* \otimes V \ni f \otimes v \mapsto (g \mapsto \langle f, gv \rangle) \in L^2(G, \mathbb{C})
$$

は $G \times G$ の unitary 表現の同型。ただし、$V^* \otimes V$ の内積は、標準的なものの $\frac{1}{\mathrm{dim} V}$ 倍とする

$G \curvearrowright V$ に対して、$\mathcal{R}_V \coloneqq \{ g \mapsto \langle f, gv \rangle \mid f \in V^*, v \in V \} \subset C(G)$ は $G \times G$ 不変な部分空間。$\mathcal{R}_{V \oplus W} = \mathcal{R}_V + \mathcal{R}_W$, $\mathcal{R}_{V \otimes W} = \mathcal{R}_V \cdot \mathcal{R}_W$, $\mathcal{R}_{V^*} = \overline{\mathcal{R}_V}$。Peter$\text{--}$Weyl の定理は

$$
\widehat{\bigoplus}_{V \in \hat{G}} \mathcal{R}_V = L^2(G, \mathbb{C})
$$

$V \in \hat{G}$ ならば、$\mathrm{dim}_\mathbb{C} \mathcal{R}_V = (\mathrm{dim}_\mathbb{C} V)^2$

# $SO(n)$ の表現

$V \coloneqq \mathbb{R}^n$
$V_\mathbb{C} \coloneqq \mathbb{C}^n$

任意の $SO(n)$ の $\mathbb{C}$ 上の既約表現は、$V_\mathbb{C}^{\otimes k} \ (k \ge 0)$ の既約分解に現れる

$G \coloneqq SO(n)$。$R \coloneqq \sum_{k = 0}^\infty \mathcal{R}_{V^{\otimes k}} \subset C(G, \mathbb{R})$ とする。$R$ は部分代数で、$G \subset \mathrm{End}_\mathbb{R}(V)$ だから、$G$ の点を分離する。よって、Stone$\text{--}$Weierstrass の定理から $R \subset C(G, \mathbb{R})$ は稠密。一方、$V_\mathbb{C}^{\otimes k} \ (k \ge 0)$ に現れる既約表現たちを $X \subset \hat{G}$ とすると

$$
R \otimes \mathbb{C} = \bigoplus_{V \in X} \mathcal{R}_V
$$

よって、$X = \hat{G}$ でなければならない

# $\mathrm{Spin}(n)$ の表現

$S$ を $C_{2m}(\mathbb{C})$ の既約加群とすると、$\Pi S$ は $C_{2m}(\mathbb{C})$ のもう 1 つの既約加群であり、$S^\pm$ は $C^+_{2m}(\mathbb{C})$ の 2 つの既約加群

$$
\begin{aligned}
  C_{2m}(\mathbb{C}) &\simeq \underline{\mathrm{End}}_\mathbb{C}(S) \\
  C_{2m}^+(\mathbb{C}) &\simeq \mathrm{End}_\mathbb{C}(S^+) \oplus \mathrm{End}_\mathbb{C}(S^-)
\end{aligned}
$$

$S$ を $C_{2m + 1}(\mathbb{C})$ の唯一の既約加群とすると、$S^\pm$ は $C^+_{2m + 1}(\mathbb{C})$ 加群として同型で、$C^+_{2m + 1}(\mathbb{C})$ の唯一の既約加群。$Z \subset C_{2m + 1}(\mathbb{C})$ を ungraded center とする。$Z \simeq \mathbb{C}[\varepsilon] / \langle \varepsilon^2 - 1 \rangle$

$$
\begin{aligned}
  C_{2m + 1}(\mathbb{C}) &\simeq \underline{\mathrm{End}}_Z(S) \\
  C_{2m + 1}^+(\mathbb{C}) &\simeq \mathrm{End}_\mathbb{C}(S^+)
\end{aligned}
$$

$\mathrm{Spin}(2m)$ の $\mathbb{C}$ 上の既約表現は、$(S^+)^{\otimes k} \otimes (S^-)^{\otimes l} \ (k, l \ge 0)$ の既約分解に現れる

$\mathrm{Spin}(2m + 1)$ の $\mathbb{C}$ 上の既約表現は、$(S^+)^{\otimes k} \ (k \ge 0)$ の既約分解に現れる

# 包除原理

$X$: 有限集合
$A_1, \dots, A_k \subset X$

$$
|\bigcup_{1 \le i \le k} A_i| = \sum_{S \subset \{1, \dots, k\}, S \ne \emptyset} (-1)^{|S| - 1} |\bigcap_{i \in S} A_i|
$$

$$
\begin{aligned}
  1_{\bigcap_i A_i^C} &= \prod_i 1_{A_i^C} \\
  &= \prod_i (1 - 1_{A_i}) \\
  &= \sum_{S \subset \{1, \dots, k\}} (-1)^{|S|} \prod_{i \in S} 1_{A_i} \\
  &= \sum_{S \subset \{1, \dots, k\}} (-1)^{|S|} 1_{\bigcap_{i \in S} A_i}
\end{aligned}
$$

両辺を積分すれば

$$
\begin{aligned}
  |X| - |\bigcup_i A_i| &= |\bigcap_i A_i^C| \\
  &= \sum_{S \subset \{1, \dots, k\}} (-1)^{|S|} |\bigcap_{i \in S} A_i|
\end{aligned}
$$

$R$: 環
$v_1, \dots, v_k \in R$

$$
\sum_{\sigma \in \mathfrak{S}_k} v_{\sigma(1)} \cdots v_{\sigma(k)} = \sum_{S \subset \{1, \dots, k\}} (-1)^{k - |S|} (\sum_{i \in S} v_i)^k
$$

$X \coloneqq \{1, \dots, k\}^k$ とする。$A_i \coloneqq \{1, \dots, \check{i}, \dots, k\}^k \subset X \ (1 \le i \le k)$ は $i$ が出現しないものたち

$$
1_{\bigcap_i A_i^C} = \sum_{S \subset \{1, \dots, k\}} (-1)^{k - |S|} 1_{\bigcap_{i \not\in S} A_i}
$$

を適当な重みで積分すれば良い

$K$: 標数 $0$ の体
$V$: $K$ 線形空間
$\mathrm{Sym}^k V$ は $v^k \ (v \in V)$ で張られる

# Schur-Weyl duality

$K$: 体
$A$: $K$ 代数
$M$: 有限次元半単純 $A$ 加群
$\Phi: A \to \mathrm{End}_K(M)$ とし、$\mathrm{End}_K(M)$ での commutant を $'$ で表せば

$$
\Phi(A)'' = \Phi(A)
$$

$\Phi(A)'' \subset \Phi(A)$ を示せば良い。$T \in \Phi(A)''$ とする。$v_1, \dots, v_n \in M$ を線形基底とする。$w \coloneqq (v_1, \dots, v_n) \in M^n$ とする。$Aw \subset M^n$ の $A$ 加群としての complement を固定し、射影を $P: M^n \to Aw \subset M^n$ とする。$P \in M_n(\mathrm{End}_A(M)) = M_n(\Phi(A)')$ だから

$$
Tw = TPw = PTw \in Aw
$$

よって、$a \in A$ が存在して、$Tv_i = av_i$

[Lem]
$K$: 無限体
Zariski 位相で $K^n$ は既約

$K$ は無限体だから、$I(f) = K^n \Leftrightarrow f = 0$。任意の $f, g \in K[X_1, \dots, X_n] \setminus \{0\}$ に対して、$D(g) \cap D(f) = D(gf) \ne \emptyset$

$K$: 標数 $0$ の体
$V = K^n$
$E \coloneqq V^{\otimes k}$ には $\mathfrak{S}_k$ と $GL(V)$ が作用する。これらの作用が生成する線形空間を $A_{\mathfrak{S}_k}, A_{GL(V)} \subset \mathrm{End}_K(E)$ とすると

$$
\begin{aligned}
  A_{\mathfrak{S}_k}' &= A_{GL(V)} \\
  A_{GL(V)}' &= A_{\mathfrak{S}_k}
\end{aligned}
$$

$K[\mathfrak{S}_k]$ は半単純だから、前者のみ示せば良い。$\mathrm{End}_K(E)^{\mathfrak{S}_k} \subset A_{GL(V)}$ を示せば良い。$\mathrm{End}_K(V)^{\otimes k} \xrightarrow{\sim} \mathrm{End}_K(E)$ は $\mathfrak{S}_k$ 同変だから、$\mathrm{End}(E)^{\mathfrak{S}_k} \simeq \mathrm{Sym}^k(\mathrm{End}_K(V))$。$\mathrm{Sym}^k(\mathrm{End}_K(V))$ は $X^k \ (X \in \mathrm{End}_K(V))$ で張られる。$g^k \ (g \in GL(V))$ でも張られることを示せば良い。張られないと仮定すると、$0$ でない線形形式 $f: \mathrm{Sym}^k(\mathrm{End}_K(V)) \to K$ が存在して、$f(g^k) = 0 \ (g \in GL(V))$。$F: \mathrm{End}_K(V) \ni X \mapsto f(X^k) \in K$ は $0$ でない多項式で、$F(X) = 0 \ (\mathrm{det}X \ne 0)$。これは $\mathrm{End}_K(V)$ が Zariski 位相で既約なことに矛盾する

# $GL_n(K)$ 不変なテンソル

$K$: 標数 $0$ の体
$V = K^n$
$(V^{\otimes r} \otimes V^{* \otimes s})^{GL(V)}$ は $r \ne s$ ならば $0$ で、$r = s$ ならば

$$
(V^{\otimes r} \otimes V^{* \otimes r})^{GL(V)} = \sum_{\tau \in \mathfrak{S}_r} (\tau \otimes 1) \Phi(\theta^{\otimes r})
$$

ただし、$\theta = \sum_i e_i \otimes e_i^* \in V \otimes V^*$ であり、$\Phi: (V \otimes V^*)^{\otimes r} \xrightarrow{\sim} V^{\otimes r} \otimes V^{* \otimes r}$

$r \ne s$ ならば $0$ になることは、$2 \in GL(K)$ の作用を考えれば良い。$r = s$ とすると

$$
\begin{aligned}
  (V^{\otimes r} \otimes V^{* \otimes r})^{GL(V)} &\simeq \mathrm{End}_K(V^{\otimes r})^{GL(V)} \\
  &= \mathrm{span}_K \{ v_1 \otimes \cdots \otimes v_k \mapsto v_{\tau(1)} \otimes \cdots \otimes v_{\tau(k)} \mid \tau \in \mathfrak{S}_k \}
\end{aligned}
$$

# $GL_n(K)$ 不変な多項式

$K$: 標数 $0$ の体
$V = K^n$
$GL(V)$ 不変な多項式 $F: V^r \times V^{*s} \to K$ は $f_j(v_i) \ (1 \le i \le r, 1 \le j \le s)$ の多項式で表せる

$F$ は $(d_1, \dots, d_r, e_1, \dots, e_s)$ 次斉次として良い。$2 \in GL(V)$ の作用を考えれば、$\sum d_i = \sum e_j \eqqcolon k$ として良い。$r + s$ 回 polarization すると、$GL(V)$ 不変な多重線形写像 $\tilde{F}(v_{ia}, f_{jb}): V^k \times V^{*k} \to K \ (1 \le i \le r, 1 \le j \le s, 1 \le a \le d_i, 1 \le b \le e_j)$ が存在して

$$
\tilde{F}(\overbrace{v_1, \dots, v_1}^{d_1}, \dots, \overbrace{f_s, \dots, f_s}^{e_s}) = F(v_i, f_j)
$$

# $O(n)$ 不変なテンソル

https://www.maths.ed.ac.uk/~v1ranick/papers/goodwallx.pdf

[Lem]
$u_{ij}(X) \coloneqq (XX^T)_{ij} \ (i \le j) \in M_n(\mathbb{R})^*$ たちは代数的に独立

対称行列全体を $\mathrm{Sym}_n(\mathbb{R}) \subset M_n(\mathbb{R})$ とし、正定値対称行列全体を $\mathrm{Sym}^+_n(\mathbb{R})$ とする。多項式 $P \in \mathbb{R}[\mathrm{Sym}_n(\mathbb{R})]$ が $P(XX^T) = 0$ を満たすとする。$P$ は $\mathrm{Sym}^+_n(\mathbb{R})$ 上で消える。$\mathrm{Sym}^+_n(\mathbb{R}) \subset \mathrm{Sym}_n(\mathbb{R})$ は空でない Zariski 開集合だから、$P = 0$

$V = \mathbb{R}^n$
$(V^{\otimes m})^{O(n)}$ は、$m$ が奇数ならば $0$ であり、$m$ が偶数ならば

$$
(V^{\otimes m})^{O(n)} = \sum_{\tau \in \mathfrak{S}_m} \mathbb{R} \tau(C^{\otimes \frac{m}{2}})
$$

ただし、$C \coloneqq \sum_i e_i \otimes e_i \in (V^{\otimes 2})^{O(n)}$

まず、$m \le n$ ならば、$O(n)$ 不変多項式 $F: V^m \to \mathbb{R}$ は $\langle v_j, v_k \rangle$ の多項式で表せることを示す

$-1 \in O(n)$ の作用を考えれば、$F$ は $2M$ 次斉次として良い。$n$ に関する帰納法を使う。$n = 0$ の場合は明らか。$n \ge 1$ とする。$m = 0, 1$ の場合は容易だから、$m \ge 2$ として良い。$v_j = (v_{j1}, v'_j) \ (j \ge 2)$ と分解すると

$$
F(e_1, v_2, \dots, v_m) = \sum_{\alpha \in \mathbb{Z}^{\{2, \dots, m\}}} v_{*1}^\alpha F_\alpha(v'_2, \dots, v'_m)
$$

$F_\alpha(v'_2, \dots, v'_m)$ は $O(n - 1)$ 不変だから、帰納法の仮定から

$$
F(e_1, v_2, \dots, v_m) = \sum_{\alpha \in \mathbb{Z}^{\{2, \dots, m\}}} v_{*1}^\alpha G_\alpha(\langle v'_j, v'_k \rangle)
$$

$v_1 \in V \setminus \{0\}$ とし、$g \in O(n)$ を $gv_1 = \|v_1\|e_1$ となるように固定する。$\tilde{v}_j \coloneqq \frac{1}{\|v_1\|} gv_j \ (j \ge 2)$ とすると

$$
\begin{aligned}
  \tilde{v}_{j1} &= \frac{1}{\|v_1\|} \langle e_1, gv_j \rangle = \frac{\langle v_1, v_j \rangle}{\langle v_1, v_1 \rangle} \\
  \langle \tilde{v}'_j, \tilde{v}'_k \rangle &= \frac{\langle v_j, v_k \rangle}{\langle v_1, v_1 \rangle} - \frac{\langle v_1, v_j \rangle \langle v_1, v_k \rangle}{\langle v_1, v_1 \rangle^2}
\end{aligned}
$$

だから

$$
\begin{aligned}
  F(v_1, \dots, v_m) &= \langle v_1, v_1 \rangle^M F(e_1, \tilde{v}_2, \dots, \tilde{v}_m) \\
  &= \langle v_1, v_1 \rangle^M \sum_{\alpha \in \mathbb{Z}^{\{2, \dots, m\}}} \frac{\langle v_1, v_* \rangle^\alpha}{\langle v_1, v_1 \rangle^{|\alpha|}} G_\alpha\left(\frac{\langle v_j, v_k \rangle}{\langle v_1, v_1 \rangle} - \frac{\langle v_1, v_j \rangle \langle v_1, v_k \rangle}{\langle v_1, v_1 \rangle^2}\right)
\end{aligned}
$$

よって

$$
F(v_1, \dots, v_m) = \frac{1}{\langle v_1, v_1 \rangle^{N_1}} H_1(\langle v_j, v_k \rangle \mid 1 \le j \le k \le m) \quad (v_1 \ne 0)
$$

と表示できる。$v_2$ に関しても同様のことを考えて

$$
F(v_1, \dots, v_m) = \frac{1}{\langle v_2, v_2 \rangle^{N_2}} H_2(\langle v_j, v_k \rangle \mid 1 \le j \le k \le m) \quad (v_2 \ne 0)
$$

$V^m \subset V^n$ 上の関数として $\langle v_j, v_k \rangle \ (1 \le j \le k \le m)$ は代数的に独立だから、$F(v_1, \dots, v_m)$ は $\langle v_j, v_k \rangle$ の多項式になる

[$m$ が一般の場合の証明]
$w \in (V^{\otimes m})^{O(n)}$ とする。$M_n(\mathbb{R})$ 上の多項式 $M_n(\mathbb{R}) \ni Y \mapsto Y^{\otimes m}w \in V^{\otimes m}$ は $M_n(\mathbb{R}) \curvearrowleft O(n)$ に関して不変。よって、多項式に関する $m = n$ の場合から、多項式 $\Phi_w(X): \mathrm{Sym}_n(\mathbb{R}) \to V^{\otimes m}$ が存在して

$$
\Phi_w(YY^T) = Y^{\otimes m}w
$$

$\mathrm{Sym}^+_n(\mathbb{R}) \subset \mathrm{Sym}_n(\mathbb{R})$ は空でない Zariski 開集合だから、$\Phi_w$ は $w$ から一意的に定まる。$X \in \mathrm{Sym}_n(\mathbb{R})$ には $g \in GL_n(\mathbb{R})$ が $gXg^T$ で作用し、$GL_n(\mathbb{R})$ の作用を保って $\mathrm{Sym}_n(\mathbb{R}) \subset V^{\otimes 2}$ とみなせる。$\Phi_w$ は $GL_n(\mathbb{R})$ 同変だから、$GL_n(\mathbb{R})$ の不変式の表示から

$$
\Phi_w(X)(f_j) = G(f_j X f_k^T)
$$

ただし、$f_j \in V^*$ は横ベクトルとみなし、$g \in GL_n(\mathbb{R})$ は $f_j g^{-1}$ で作用する。よって

$$
w(f_j) = \Phi_w(E)(f_j) = G(f_j f_k^T)
$$

あとは、$w$ が多重線形なことを使えば良い

# $SO(n)$ 不変なテンソル

$V = \mathbb{R}^n$

$$
(V^{\otimes m})^{SO(n)} = \sum_{\varepsilon \in \{0, 1\}, \tau \in \mathfrak{S}_m, 2l + \varepsilon n = m} \mathbb{R} \tau(C^{\otimes l} \otimes \Omega^\varepsilon)
$$

ただし、$\Omega \coloneqq \sum_{\sigma \in \mathfrak{S}_n} \mathrm{sgn}(\sigma) e_{\sigma(1)} \otimes \cdots \otimes e_{\sigma(n)} \in V^{\otimes n}$

$T \in (V^{\otimes m})^{SO(n)}$ とする。$\gamma \in O(n) \setminus SO(n)$ を固定する

$$
T = \frac{T + \gamma T}{2} + \frac{T - \gamma T}{2} \eqqcolon T_\mathrm{even} + T_\mathrm{odd}
$$

と分解する。$T_\mathrm{even}$ は $O(n)$ 不変で、$gT_\mathrm{odd} = (\mathrm{det}g)T_\mathrm{odd}$。$T_\mathrm{odd}$ のみ考えれば良い。$T_\mathrm{odd} \otimes \Omega \in V^{\otimes (m + n)}$ は $O(n)$ 不変。縮約 $V^{\otimes n} \to \bigwedge^n V \simeq \mathbb{R}$ を考える。$\Omega$ の縮約は $n!$ だから、あとは容易

# $\mathcal{O}^+_m$ 上の不変式

$V$: $d$ 次元 Minkowski 空間
$m \ge 0$
$G \coloneqq SO(V)$
$W$: $G$ の $\mathbb{C}$ 上の有限次元表現

$f: \mathcal{O}^+_m \to W$ は滑らかな $G$ 同変写像とする。$F \in \mathbb{C}[V] \otimes W$ が存在して、$f(p) = F(p) \ (p \in \mathcal{O}^+_m)$

$W = V_\mathbb{C}^{\otimes N}$ として良い

[$m > 0$ の場合]
$p_0 \in \mathcal{O}^+_m$ を固定する。$p_0$ の固定部分群は $SO(p_0^\perp)$。$f(p_0) \in (V_\mathbb{C}^{\otimes N})^{SO(p_0^\perp)}$。よって

$$
\begin{aligned}
  f(p_0) &= F_1(p_0, \Omega_{p_0^\perp}, C_{p_0^\perp}) \\
  &= F_2(p_0, \iota_{p_0}\Omega, C)
\end{aligned}
$$

$f$ は $G$ 同変だから、$f(p) = F_2(p, \iota_p\Omega, C)$

[$m = 0$ の場合]

# 一般の free Wightman QFT

https://zenn.dev/link/comments/85b993ae05292a

https://zenn.dev/link/comments/6cc59876307ee9

$m \ge 0$
$d \ge 3$
$V$: 次元 $d$ の Minkowski 空間
$V_\mathbb{C} \coloneqq V \otimes \mathbb{C}$
$G \coloneqq \mathrm{Spin}(V)$
$G^\mathbb{C} \coloneqq \mathrm{Spin}(V_\mathbb{C})$
$G \curvearrowright \mathcal{O}_m^+, G^\mathbb{C} \curvearrowright \mathcal{O}^\mathbb{C}_m$ は推移的
$p_0 \in \mathcal{O}_m^+$ を固定する。$G_{p_0}$ を固定部分群とする。$G_{\pm p_0} \coloneqq \{ g \in G \mid g p_0 = \pm p_0 \} = G_{p_0}$ だから $G^\mathbb{C}$ 内で

$$
G^\mathbb{C}_{\pm p_0} \coloneqq \{ g \in G^\mathbb{C} \mid g p_0 = \pm p_0 \}
$$

を考える。$m > 0$ ならば

$$
\begin{aligned}
  G_{p_0} &= \mathrm{Spin}(p_0^\perp) \eqqcolon K_{p_0} \\
  G^\mathbb{C}_{\pm p_0} &= \mathrm{Spin}(p_0^\perp \otimes \mathbb{C}) \sqcup \tilde{p}_0(\mathrm{Pin}(p_0^\perp \otimes \mathbb{C}) \setminus \mathrm{Spin}(p_0^\perp \otimes \mathbb{C})) \\
  &= \{ \pm \tilde{p}_0^\varepsilon z_1 \cdots z_k \mid \varepsilon \in \{0, 1\}, \varepsilon + k \text{ は偶数}, z_i \in p^\perp \otimes \mathbb{C}, Q(z_i) = 1 \} \eqqcolon K^\mathbb{C}_{\pm p_0}
\end{aligned}
$$

ただし、$\tilde{p}_0 \coloneqq \frac{1}{m}p_0$。$p_0^\perp$ は負定値なことに注意。$\mathrm{Pin}(p_0^\perp \otimes \mathbb{C}) \ni v \mapsto \tilde{p}_0v \in K^\mathbb{C}_{\pm p_0}$ は同型

$$
K \coloneqq \{ \pm (i\tilde{p}_0)^\varepsilon v_1 \cdots v_k \mid \varepsilon \in \{0, 1\}, \varepsilon + k \text{ は偶数}, v_i \in p_0^\perp, Q(v_i) = -1 \}
$$

とすると、$K^\mathbb{C}_{\pm p_0}$ は $K$ の複素化。$\widetilde{\mathrm{Pin}}(p_0^\perp) \ni v \mapsto i\tilde{p}_0v \in K$ は同型。$m = 0$ ならば

$$
1 \to p_0^\perp / \mathbb{R}p_0 \xrightarrow{j} G_{p_0} \xrightarrow{\pi} \mathrm{Spin}(p_0^\perp / \mathbb{R}p_0) \eqqcolon K_{p_0} \to 1
$$

$j$ は $v p_0 \in \mathfrak{spin}(V) \subset C^+(V) \ (v \in p_0^\perp)$ を用いて

$$
j(v) \coloneqq e^{v p_0} = 1 + v p_0
$$

と定義する。$\pi$ は $G_{p_0} \subset C(p_0^\perp)$ と $C(p_0^\perp) \to C(p_0^\perp / \mathbb{R}p_0)$ から誘導される。$q_0 \in V$ を $Q(p_0, q_0) = 2$ を満たすように取る。$q_0 + \mathbb{R}p_0$ を考えれば、$Q(q_0) = 0$ として良い。$e_0 \coloneqq \frac{1}{2}(p_0 + q_0)$, $e_1 \coloneqq \frac{1}{2}(p_0 - q_0)$ とする。$Q(e_0) = 1$, $Q(e_1) = -1$, $Q(e_0, e_1) = 0$ であり、$p_0^\perp / \mathbb{R}p_0 \simeq \langle p_0, q_0 \rangle^\perp = \langle e_0, e_1 \rangle^\perp$。$v, w \in \langle p_0, q_0 \rangle^\perp$ に対して

$$
\begin{aligned}
  j(v) p_0 j(v)^{-1} &= (1 + vp_0)p_0(1 - vp_0) = p_0 \\
  j(v) q_0 j(v)^{-1} &= -4Q(v)p_0 + q_0 + 4v \\
  j(v) w j(v)^{-1} &= -2Q(v, w)p_0 + w
\end{aligned}
$$

だから、https://zenn.dev/ryoaq/scraps/49d25b1a8a203e#comment-6cc59876307ee9 とも整合的

$$
1 \to (p_0^\perp / \mathbb{R}p_0) \otimes \mathbb{C} \xrightarrow{j} G^\mathbb{C}_{\pm p_0} \to K^\mathbb{C}_{\pm p_0} \to 1
$$

ただし、$K^\mathbb{C}_{\pm p_0}$ は以下のように定義する。$\gamma \coloneqq ie_0e_1 = i(1 - \frac{1}{2}p_0q_0)$ とすると $\gamma^2 = -1$ であり

$$
\begin{aligned}
  K^\mathbb{C}_{\pm p_0} &\coloneqq \mathrm{Spin}((p_0^\perp / \mathbb{R}p_0) \otimes \mathbb{C}) \sqcup \gamma \mathrm{Spin}((p_0^\perp / \mathbb{R}p_0) \otimes \mathbb{C}) \\
  &\simeq \mathrm{Coker}(\mathbb{Z} / 2\mathbb{Z} \xrightarrow{(-1, \gamma^2)} \mathrm{Spin}((p_0^\perp / \mathbb{R}p_0) \otimes \mathbb{C}) \times \mathbb{Z} / 4\mathbb{Z})
\end{aligned}
$$

$$
\begin{aligned}
  K &\coloneqq \mathrm{Spin}(p_0^\perp / \mathbb{R}p_0) \sqcup \gamma \mathrm{Spin}(p_0^\perp / \mathbb{R}p_0) \\
  &\simeq \mathrm{Coker}(\mathbb{Z} / 2\mathbb{Z} \xrightarrow{(-1, \gamma^2)} \mathrm{Spin}(p_0^\perp / \mathbb{R}p_0) \times \mathbb{Z} / 4\mathbb{Z})
\end{aligned}
$$

とすると、$K^\mathbb{C}_{\pm p_0}$ は $K$ の複素化

$q_0$ に依存した右分裂を考えると

$$
\begin{aligned}
  G_{p_0} &\simeq K_{p_0} \ltimes (p_0^\perp / \mathbb{R}p_0) \\
  G^\mathbb{C}_{\pm p_0} &\simeq K^\mathbb{C}_{\pm p_0} \ltimes ((p_0^\perp / \mathbb{R}p_0) \otimes \mathbb{C})
\end{aligned}
$$

再び、$m \ge 0$ とする。$\tau \coloneqq -1 \in C(V)$ の作用による固有空間分解と整合的な有限次元実 super 表現 $\rho: G \curvearrowright R$, $\alpha: K_{p_0} \curvearrowright A$ と全射 $G_{p_0}$ 準同型

$$
i: \rho|_{G_{p_0}} \twoheadrightarrow \alpha
$$

を固定する。$\alpha: K_{p_0} \curvearrowright A_\mathbb{C} \coloneqq A \otimes \mathbb{C}$ は $K^\mathbb{C}_{\pm p_0}$ の表現に拡張すると仮定する。$A_0 \perp A_1$ を満たす $A$ 上の内積 $\langle -, - \rangle: A \times A \to \mathbb{R}$ で $A_\mathbb{C}$ 上

$$
\langle g\xi, g\eta \rangle = (-1)^{|\xi|\varepsilon(g)} \langle \xi, \eta \rangle \quad (\xi, \eta \in A_\mathbb{C}, g \in K^\mathbb{C}_{\pm p_0}, gp_0 = (-1)^{\varepsilon(g)}p_0)
$$

なものを固定する。このようなペアリングが存在することは、以下のようにしてわかる。$A_0 \perp A_1$ を満たす $A$ 上の内積 $\langle -, - \rangle_0: A \times A \to \mathbb{R}$ を取る。$\langle -, - \rangle_0$ を $A_\mathbb{C}$ 上に Hermite に拡張したものを $(-, -)_0: A_\mathbb{C} \times A_\mathbb{C} \to \mathbb{C}$ とする。$\xi, \eta \in A_\mathbb{C}$ に対して

$$
\begin{aligned}
  (\xi, \eta) &\coloneqq \int_{g \in K} (g\xi, g\eta)_0 \, dg \\
  &= \int_{g \in K} \langle g\xi, \overline{g\eta} \rangle_0 \, dg
\end{aligned}
$$

$\langle \xi, \eta \rangle \coloneqq (\xi, \bar{\eta})$ とする。$x, y \in A$ に対して、$\langle x, y \rangle \in \mathbb{R}$ を示す。$\bar{g} = g\tau^{\varepsilon(g)}$ に注意すると

$$
\begin{aligned}
  \overline{\langle x, y \rangle} &= \overline{(x, y)} \\
  &= \int_{g \in K} \langle \bar{g}x, gy \rangle_0 \, dg \\
  &= (-1)^{\varepsilon(g)|x|} \int_{g \in K} \langle gx, gy \rangle_0 \, dg \\
  &= (-1)^{\varepsilon(g)|y|} \int_{g \in K} \langle gx, gy \rangle_0 \, dg \\
  &= \int_{g \in K} \langle gx, \overline{gy} \rangle_0 \, dg \\
  &= (x, y) \\
  &= \langle x, y \rangle
\end{aligned}
$$

よって、$\langle -, - \rangle: A \times A \to \mathbb{R}$ は内積になる。また、$g \in K$ に対して

$$
\begin{aligned}
  \langle g\xi, g\eta \rangle &= (g\xi, \overline{g\eta}) \\
  &= (-1)^{\varepsilon(g)|\eta|} (g\xi, g\bar{\eta}) \\
  &= (-1)^{\varepsilon(g)|\xi|} (\xi, \bar{\eta}) \\
  &= (-1)^{\varepsilon(g)|\xi|} \langle \xi, \eta \rangle
\end{aligned}
$$

$K^\mathbb{C}_{\pm p_0} \ni g \mapsto \langle g\xi, g\eta \rangle \in \mathbb{C}$, $K^\mathbb{C}_{\pm p_0} \ni g \mapsto (-1)^{\varepsilon(g)|\xi|} \langle \xi, \eta \rangle = (\frac{1}{2}Q(gp_0, q_0))^{|\xi|} \langle \xi, \eta \rangle \in \mathbb{C}$ は正則で、$K$ 上一致する。よって、上の式は $g \in K^\mathbb{C}_{\pm p_0}$ でも成り立つ

$P \coloneqq G \ltimes V$

$\mathcal{A} \coloneqq G \times_{G_{p_0}} A \to \mathcal{O}^+_m$ は正定値計量を持つ。$\mathcal{A}_\mathbb{C} \coloneqq G^\mathbb{C} \times_{G^\mathbb{C}_{p_0}} A_\mathbb{C} \to \mathcal{O}^\mathbb{C}_m$ は整合的

$$
H \coloneqq \{ f \in L^2(\mathcal{O}_m, \mathcal{A}_\mathbb{C}) \mid f(-p) = \overline{f(p)} \}
$$

$H$ には $((\Lambda, a)h)(p) \coloneqq e^{ipa}\Lambda h(\Lambda^{-1}p)$ で $P$ が作用する

$h, k \in H$ に対して

$$
[h, k] \coloneqq \int_{\mathcal{O}^+_m} \mathrm{Im}(i^{|h|}\langle h(p), \overline{k(p)} \rangle) \, d\mu(p)
$$

は super symplectic form を定める

$$
\begin{aligned}
  [k, h] &= \int_{\mathcal{O}^+_m} \mathrm{Im}(i^{|k|}\langle k(p), \overline{h(p)} \rangle) \, d\mu(p) \\
  &= (-1)^{|h|} \int_{\mathcal{O}^+_m} \mathrm{Im}(\overline{i^{|h|}\langle h(p), \overline{k(p)} \rangle}) \, d\mu(p) \\
  &= -(-1)^{|h|} [h, k]
\end{aligned}
$$

退化しないことは、$[h, (-i)^{1 - |h|}h] = \int_{\mathcal{O}_m^+} \langle h(p), \overline{h(p)} \rangle \, d\mu(p)$ から従う

$I: H \to H$ を

$$
Ih(p) \coloneqq \begin{cases}
  ih(p) &\quad (p \in \mathcal{O}^+_m) \\
  -ih(p) &\quad (p \in \mathcal{O}^-_m)
\end{cases}
$$

で定義する。$H \otimes \mathbb{C} \simeq L^2(\mathcal{O}_m, \mathcal{A}_\mathbb{C})$。$I_\mathbb{C}$ の $\pm i$ 固有空間は $H_{\pm} = L^2(\mathcal{O}^\pm_m, \mathcal{A}_\mathbb{C})$

$H_+$ 上の super Hermite 形式が誘導される。$h \in H_+$ とする。$h = \frac{1}{2}(h(p) + \overline{h(-p)}) - \frac{i}{2}(ih(p) - i\overline{h(-p)})$ だから、$h$ の $H$ に関する共役は $\overline{h(-p)}$。$h$ が even ならば

$$
\begin{aligned}
  (h, h) &= \frac{i}{2}[h(p), \overline{h(-p)}] \\
  &= -\frac{1}{4} [h(p) + \overline{h(-p)}, ih(p) - i\overline{h(-p)}] \\
  &= \frac{1}{4} \int_{\mathcal{O}^+_m} \langle h(p), \overline{h(p)} \rangle \, d\mu(p)
\end{aligned}
$$

よって、$h, k \in H_+$ が even ならば

$$
(h, k) = \frac{1}{4} \int_{\mathcal{O}^+_m} \langle h(p), \overline{k(p)} \rangle \, d\mu(p)
$$

$h$ が odd ならば

$$
\begin{aligned}
  (h, h) &= \frac{i}{2}[h(p), \overline{h(-p)}] \\
  &= \frac{i}{8} ([h(p) + \overline{h(-p)}, h(p) + \overline{h(-p)}] + [ih(p) - i\overline{h(-p)}, ih(p) - i\overline{h(-p)}]) \\
  &= \frac{i}{4} \int_{\mathcal{O}^+_m} \langle h(p), \overline{h(p)} \rangle \, d\mu(p)
\end{aligned}
$$

よって、$h, k \in H_+$ が odd ならば

$$
(h, k) = \frac{i}{4} \int_{\mathcal{O}^+_m} \langle h(p), \overline{k(p)} \rangle \, d\mu(p)
$$

総合すると

$$
(h, k) = \frac{i^{|h|}}{4} \int_{\mathcal{O}^+_m} \langle h(p), \overline{k(p)} \rangle \, d\mu(p) \quad (h, k \in H_+)
$$

よって、$H_+$ 上の Hermite 形式は正定値。$I$ は $P \coloneqq G \ltimes V$ 不変だから、$P \curvearrowright H_+$, $U: P \curvearrowright \mathcal{H} \coloneqq \widehat{\bigoplus}_{n = 0}^\infty S^n H_+$ が誘導される

[Free scalar]
$\rho \coloneqq \mathbb{R}$, $\alpha \coloneqq \mathbb{R}$, $i \coloneqq \mathrm{id}_{\mathbb{R}}$

[Free spin, $m = 0$]
$\rho \coloneqq \Pi S^-$, $\alpha \coloneqq \mathrm{Ker}(s(p_0)) \subset \Pi S^+$, $i \coloneqq s(p_0)$

[Free guage, $m = 0$]
$\rho \coloneqq \wedge^2 V$, $\alpha \coloneqq p_0^\perp / \mathbb{R}p_0$, $i \coloneqq \iota(p_0)$

[Free guage, $m > 0$]
$\rho \coloneqq \wedge^2 V$, $\alpha \coloneqq p_0^\perp$, $i \coloneqq \iota(p_0)$

一旦保留

# Truncated Wightman function

一旦スキップ

# Gaussian measure

一旦スキップ

# Normal ordering

一旦スキップ

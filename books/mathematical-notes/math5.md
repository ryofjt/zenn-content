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

再び、$m \ge 0$ とする。$\tau \coloneqq -1 \in C(V)$ の作用による固有空間分解と整合的な有限次元実 super 表現 $\rho: G \curvearrowright R$, $\alpha: K_{p_0} \curvearrowright A$ と $G_{p_0}$ 準同型

$$
i: \rho|_{G_{p_0}} \to \alpha
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

$\mathcal{A} \coloneqq G \times_{G_{p_0}} A \to \mathcal{O}^+_m$ は正定値計量を持つ。$\mathcal{A}_\mathbb{C} \coloneqq G^\mathbb{C} \times_{G^\mathbb{C}_{p_0}} A_\mathbb{C} \to \mathcal{O}^\mathbb{C}_m$ は整合的

$$
H \coloneqq \{ f \in L^2(\mathcal{O}_m, \mathcal{A}_\mathbb{C}) \mid f(-p) = \overline{f(p)} \}
$$

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

$H_+$ 上の Hermite 形式が誘導される。$h \in H_+$ とする。$h = \frac{1}{2}(h(p) + \overline{h(-p)}) - \frac{i}{2}(ih(p) - i\overline{h(-p)})$ だから、$h$ の $H$ に関する共役は $\overline{h(-p)}$。$h$ が even ならば

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

よって、$H_+$ 上の Hermite 形式は正定値。$I$ は $P \coloneqq G \ltimes V$ 不変だから、$P \curvearrowright H_+, U: P \curvearrowright \mathcal{H} \coloneqq \widehat{\bigoplus}_{n = 0}^\infty S^n H_+$ が誘導される。$m > 0$ ならば、$D_+ \coloneqq \mathcal{S}(\mathcal{O}^+_m, \mathcal{A}_\mathbb{C})$ とする。$m = 0$ ならば、$\mathcal{S}(\mathcal{O}^+_0, \mathcal{A}_\mathbb{C})$ ??? $D_+$ はどう定義するの？？

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

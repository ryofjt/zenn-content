---
title: "math5"
---

# 自由可換ゲージ理論

https://zenn.dev/link/comments/9d71c6e6abbc28

https://zenn.dev/link/comments/d24f97806b9829

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
$G \coloneqq \mathrm{Spin}_0(V)$
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

$\varphi: \mathcal{S}(\mathcal{R}) \to \mathrm{End}(D)$ を

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

$\{ k_\omega \mid \omega \in \mathcal{S}(\mathcal{R}) \} \otimes \mathbb{C} = D_+$ から従う

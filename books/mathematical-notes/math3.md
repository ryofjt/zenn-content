---
title: "math3"
---

# 自由スカラー場の mass spectrum

$\Delta_+(x, m^2) \coloneqq \mathcal{F}^{-1}(\delta_{\mathcal{O}_m^+})(-x) \in \mathcal{S}'(V, \mathbb{C})$

$$
\begin{aligned}
  \Delta_+(x, m^2) &= (2\pi)^{-d/2} \int_{p \in \mathcal{O}_m^+, x} e^{-ipx}\varphi(x) \, d\mu(p)dx \\
  &= (2\pi)^{-d/2} \int_{p', x} \frac{1}{2E(p')}e^{-iE(p')x_0 + ip'x'}\varphi(x) \, dp'dx
\end{aligned}
$$

ただし、$E(p') = \sqrt{p'^2 + m^2}$

$\mathcal{F}W_2(-p) \in \mathcal{S}'(V, \mathbb{C})$ は $G$ 不変で $\mathrm{supp}(\mathcal{F}W_2) \subset \overline{V}_+$。ここからは、自由スカラー場を考える。$\mathbb{R}_{\ge 0}$ 上の測度 $\rho$ を $\rho \coloneqq \frac{1}{4\pi}(2\pi)^{-d/2} \delta_{m^2}$ で定義すると

$$
\mathcal{W}_2(\varphi(x, y)) = \frac{1}{4\pi}(2\pi)^{-d} \int_{p \in \mathcal{O}_m^+, x, y} e^{-ip(x - y)}\varphi(x, y) \, d\mu(p)dxdy
$$

$$
W_2(x) = \frac{1}{4\pi}(2\pi)^{-d} \int_{p \in \mathcal{O}_m^+} e^{-ipx} \, d\mu(p) = \int \Delta_+(x, t) d\rho(t)
$$

$$
\mathcal{F}W_2(-p) = \frac{1}{4\pi}(2\pi)^{-d/2} \delta_{\mathcal{O}_m^+} = \int \delta_{\mathcal{O}_{\sqrt{t}}^+} d\rho(t)
$$

$\mathrm{supp}\rho \subset \mathbb{R}_{\ge 0}$ を mass spectrum という。今の場合、mass spectrum は $\{m^2\}$

# 自由スカラー場の $\mathcal{S}_n$

$$
\begin{aligned}
  \mathcal{W}_{2n + 1} &= 0 \\
  \mathcal{W}_0 &= 1 \\
  \mathcal{W}_2(f \otimes g) &= \frac{1}{4\pi} \int_{p \in \mathcal{O}_m^+} \mathcal{F}f(p)\mathcal{F}g(-p) \, d\mu \\
  \mathcal{W}_{2m}(f_1 \otimes \cdots \otimes f_{2m}) &= \sum_{\sigma \in P_2(2m)} \prod_{\{i, j\} \in \sigma, i < j} \mathcal{W}_2(f_i, f_j)
\end{aligned}
$$

だった

$$
W_2(x) = \frac{1}{4\pi}(2\pi)^{-d} \int_{p \in \mathcal{O}_m^+} e^{-ipx} \, d\mu(p) = \frac{1}{8\pi}(2\pi)^{-d} \int \frac{1}{E(p')}e^{-iE(p')x_0}e^{ip'x'} \, dp'
$$

$$
\tilde{W}_2(z) = \frac{1}{8\pi}(2\pi)^{-d} \int \frac{1}{E(p')}e^{-iE(p')z_0}e^{ip'z'} \, dp' \quad (z \in \mathcal{T})
$$

$$
S_2(x) = \frac{1}{8\pi}(2\pi)^{-d} \int \frac{1}{E(p')}e^{E(p')x_0}e^{ip'x'} \, dp' \quad (x_0 < 0)
$$

留数定理から

$$
\frac{e^{q_0 x_0}}{q_0} = \frac{1}{\pi} \int_{-\infty}^\infty \frac{e^{-ip_0 x_0}}{p_0^2 + q_0^2} \, dp_0 \quad (x_0 < 0, q_0 > 0)
$$

だから

$$
S_2(x) = \frac{1}{8\pi^2}(2\pi)^{-d} \int \frac{1}{\|p\|^2 + m^2}e^{-ipx} \, dp \quad (x_0 < 0)
$$

だたし、$\|p\|^2 = p_0^2 + \cdots + p_{d - 1}^2$。$\frac{1}{A} = \int_0^\infty ds \, e^{-sA} \ (A > 0)$ だから、$x_0 < 0$ で

$$
\begin{aligned}
  S_2(x) &= \frac{1}{8\pi^2}(2\pi)^{-d} \int_0^\infty ds \, e^{-s m^2} \int dp \, e^{-s\|p\|^2 - ipx} \\
  &= \frac{1}{8\pi^2}2^{-d}\pi^{-d/2} \int_0^\infty s^{-d/2}e^{-s m^2 - \|x\|^2 / 4s} \, ds
\end{aligned}
$$

$d = 3$ の場合に計算を続行する。$x_0 < 0$ で

$$
\begin{aligned}
  S_2(x) &= \frac{1}{64}\pi^{-7/2} \int_0^\infty s^{-3/2}e^{-s m^2 - \|x\|^2 / 4s} \, ds \\
  &= \frac{1}{32}\pi^{-7/2} \int_0^\infty e^{-\frac{m^2}{y^2} - \frac{\|x\|^2y^2}{4}} \, dy \quad (y = s^{-1/2}) \\
  &= \frac{1}{32}\pi^{-7/2} e^{-m\|x\|} \int_0^\infty e^{-(\frac{\|x\|y}{2} - \frac{m}{y})^2} \, dy \\
  &= \frac{1}{16\|x\|}\pi^{-7/2} J\left(\frac{m\|x\|}{2}\right) e^{-m\|x\|}
\end{aligned}
$$

ただし、$J(a) \coloneqq \int_0^\infty e^{-(y - \frac{a}{y})^2} \, dy \ (a > 0)$

$$
J(a) = a \int_0^\infty \frac{1}{u^2}e^{-(u - \frac{a}{u})^2} \, du \quad \left(u = \frac{a}{y}\right)
$$

$$
2J(a) = \int_0^\infty e^{-(y - \frac{a}{y})^2}(1 + \frac{a}{y^2}) \, dy = \int_{-\infty}^\infty e^{-z^2} \, dz = \sqrt{\pi}
$$

総合すると、$S_2(x) = \frac{1}{32\pi^3\|x\|} e^{-m\|x\|} \quad (x_0 < 0)$

$S_2$ は実解析的だから

$$
S_2(x) = \frac{1}{32\pi^3\|x\|} e^{-m\|x\|} \quad (x \ne 0)
$$

$$
\begin{aligned}
  \mathcal{S}_{2n + 1} &= 0 \\
  \mathcal{S}_0 &= 1 \\
  \mathcal{S}_2(x_1, x_2) &= \frac{1}{32\pi^3\|x_1 - x_2\|} e^{-m\|x_1 - x_2\|} \quad (x_1 \ne x_2) \\
  \mathcal{S}_{2m}(x_1, \dots, x_{2m}) &= \sum_{\sigma \in P_2(2m)} \prod_{\{i, j\} \in \sigma} \mathcal{S}_2(x_i, x_j) \quad (x_i \ne x_j)
\end{aligned}
$$

最後に、$\tilde{T} = \{ v \in V_\mathbb{C} \mid v^2 \not\in \mathbb{R}_{\ge 0} \}$ を示す。$\mathfrak{S}_2\tilde{T} = \tilde{T}$ もわかる

$\subset$
$x - iy \in \mathcal{T}$ は $(x - iy)^2 \in \mathbb{R}_{\ge 0}$ と仮定する。$xy = 0$, $x^2 - y^2 \ge 0$。$y \in V_+$ だから、$x \in V_\mathrm{space} \sqcup \{0\}$。$x^2 - y^2 < 0$ となって矛盾する

$\supset$
$v \in V_\mathbb{C}$ は $v^2 \not\in \mathbb{R}_{\ge 0}$ とする。$\alpha \in \mathbb{C}$ を $\alpha^2 = v^2$ かつ $\mathrm{Im}\alpha < 0$ なるように取れる。$z \coloneqq (\alpha, 0, \dots, 0) \in \mathcal{T}$ とする。$v^2 = z^2$ だから $g \in SO(d, \mathbb{C})$ が存在して、$v = gz$

# example1, 2

調和振動の場合に、測度のモーメントとしての $G_n$ の定義オルンシュタイン＝ウーレンベック（OU）測度と、メーラー核との関係

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
  S_2(x) &= \frac{1}{8\pi^2}(2\pi)^{-d} \int_0^\infty ds \, e^{-m^2 s} \int dp \, e^{-s\|p\|^2 - ipx} \\
  &= \frac{1}{8\pi^2}2^{-d}\pi^{-d/2} \int_0^\infty s^{-d/2}e^{-m^2 s - \|x\|^2 / 4s} \, ds
\end{aligned}
$$

$d = 3$ の場合に計算を続行する。$x_0 < 0$ で

$$
\begin{aligned}
  S_2(x) &= \frac{1}{64}\pi^{-7/2} \int_0^\infty s^{-3/2}e^{-m^2 s - \|x\|^2 / 4s} \, ds \\
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

$d = 1$ の場合も計算する。$x < 0$ で

$$
\begin{aligned}
  S_2(x) &= \frac{1}{16}\pi^{-5/2} \int_0^\infty s^{-1/2}e^{-m^2 s - |x|^2 / 4s} \, ds \\
  &= \frac{1}{8}\pi^{-5/2} \int_0^\infty e^{-m^2y^2 - \frac{|x|^2}{4y^2}} \, dy \quad (y = s^{1/2}) \\
  &= \frac{1}{8}\pi^{-5/2} e^{-m|x|} \int_0^\infty e^{-(my - \frac{|x|}{2y})^2} \, dy \\
  &= \frac{1}{8m}\pi^{-5/2} e^{-m|x|} \int_0^\infty e^{-(y - \frac{m|x|}{2y})^2} \, dy \\
  &= \frac{1}{8m}\pi^{-5/2} e^{-m|x|} J\left(\frac{m|x|}{2}\right) \\
  &= \frac{1}{16\pi^2m} e^{-m|x|}
\end{aligned}
$$

$\mathfrak{S}_2$ 対称だとすると

$$
S_2(x) = \frac{1}{16\pi^2m} e^{-m|x|} \quad (x \ne 0)
$$

最後に、$\tilde{T} = \{ v \in V_\mathbb{C} \mid v^2 \not\in \mathbb{R}_{\ge 0} \}$ を示す。$\mathfrak{S}_2\tilde{T} = \tilde{T}$ もわかる

$\subset$
$x - iy \in \mathcal{T}$ は $(x - iy)^2 \in \mathbb{R}_{\ge 0}$ と仮定する。$xy = 0$, $x^2 - y^2 \ge 0$。$y \in V_+$ だから、$x \in V_\mathrm{space} \sqcup \{0\}$。$x^2 - y^2 < 0$ となって矛盾する

$\supset$
$v \in V_\mathbb{C}$ は $v^2 \not\in \mathbb{R}_{\ge 0}$ とする。$\alpha \in \mathbb{C}$ を $\alpha^2 = v^2$ かつ $\mathrm{Im}\alpha < 0$ なるように取れる。$z \coloneqq (\alpha, 0, \dots, 0) \in \mathcal{T}$ とする。$v^2 = z^2$ だから $g \in SO(d, \mathbb{C})$ が存在して、$v = gz$

# 熱核

$\Delta \coloneqq \frac{1}{2}\frac{d^2}{dx^2}$ の熱核 $p^\Delta_t(x, y) \coloneqq (2\pi t)^{-1/2} e^{-\frac{(x - y)^2}{2t}} \ (t > 0)$ は以下を満たす

(1) $\partial_t p^\Delta_t(x, y) = \Delta_x p^\Delta_t(x, y)$
(2) $\varphi \in \mathcal{S}'(\mathbb{R})$ とすると、$\mathcal{S}'(\mathbb{R})$ 内で

$$
\int p^\Delta_t(x, y)\varphi(y) \, dy \xrightarrow{t \to 0} \varphi(x)
$$

$H \coloneqq \frac{1}{2}\frac{d^2}{dx^2} - \frac{1}{2}m^2x^2$ の熱核は

$$
p^H_t(x, y) = \sqrt{\frac{m}{2\pi \sinh(mt)}} \exp\left(-\frac{m}{2\sinh(mt)}\left[\cosh(mt)(x^2 + y^2) - 2xy\right]\right)
$$

$p^H_t(x, y) \le p^\Delta_t(x, y)$ が成り立つ

# Brown 運動

$(\Omega, P)$: 確率空間

以下、等号や不等号は特に断らない限り $P$-a.s. で成立するものとする

連続過程 $B_t: \Omega \to \mathbb{R} \ (t \ge 0)$ が Brown 運動とは以下を満たすことをいう
(1) $B_0 \equiv 0$
(2) $0 \le t_0 < \dots < t_n$ に対して、$B_{t_1} - B_{t_0}, \dots, B_{t_n} - B_{t_{n - 1}}$ は独立
(3) $0 \le s < t$ に対して、$B_t - B_s$ は $N(0, t - s)$ に従う
ただし、$N(m, v)$ は平均 $m$ 分散 $v$ の正規分布。$N(m, v)$ の密度は $(2\pi v)^{-1/2}e^{-\frac{(x - m)^2}{2v}}$

$0 \le s < t$ とする。$B_s = x$ のもとで $B_t \in E$ となる確率 $p(s, x, t, E)$ は

$$
\begin{aligned}
  p(s, x, t, E) &\coloneqq P(B_t \in E \mid B_s = x) \\
  &= P(B_t - B_s \in E - x \mid B_s = x) \\
  &= P(B_t - B_s \in E - x) \\
  &= (2\pi(t - s))^{-1/2} \int_E e^{-\frac{(y ー x)^2}{2(t - s)}} \, dy
\end{aligned}
$$

$\int_E p_{t - s}(x, y) \, dy \coloneqq p(s, x, t, E)$ とすると、$p_t(x, y)$ は $\Delta = \frac{1}{2}\frac{d^2}{dx^2}$ の熱核と一致する

# 伊藤積分

確率空間 $(\Omega, P)$ と Brown 運動 $B_t$ を固定する

$\mathcal{N}$ を $P$-零集合全体とする。$t \ge 0$ に対して、$\mathcal{F}_t$ を $B_s^{-1}(\mathcal{B}(\mathbb{R})) \ (0 \le s \le t)$ と $\mathcal{N}$ から生成される $\sigma$ 加法族とする

以降、確率過程は全て $\mathcal{F}_t$ 適合とする。ただし、確率過程 $X_t$ が $\mathcal{F}_t$ 適合とは、各 $X_t$ が $\mathcal{F}_t$ 可測なことをいう

連続過程 $Y_t$ に対して、確率積分と呼ばれる連続過程 $I_t(Y)$ が定まる。確率積分は以下の性質を満たす
(1) $I_t(Y)$ は $Y$ に関して線形

さらに、$E(\int_0^t Y_s^2 \, ds) < \infty$ ならば

(2) $E(I_t(Y) \mid \mathcal{F_s}) = I_s(Y) \quad (0 \le s < t)$
(3) $E(I_t(Y)^2) = E(\int_0^t Y_s^2 \, ds)$

(3) から $I_0(Y) = 0$ がわかる。また、$E(\int_0^t Y_s^2 \, ds) < \infty$ ならば、(2) から $E(I_t(Y)) = E(I_0(Y)) = 0$

$I_t(Y)$ を $\int_0^t Y_s dB_s$ と表す

# 伊藤の公式

確率空間 $(\Omega, P)$ と Brown 運動 $B_t$ を固定し、$B_t$ から誘導される $\mathcal{F}_t$ を考える

連続過程 $Y_t, Z_t$ と確率変数 $X_0$ を用いて

$$
X_t = \int_0^t Y_s dB_s + \int_0^t Z_s ds + X_0
$$

と表される $X_t$ たち全体を $\mathcal{Q}$ とする。$X_t \in \mathcal{Q}$ に対して

$$
dX_t \coloneqq Y_s dB_s + Z_s ds
$$

と定義する。これは $X_t$ の表し方に依らないことが知られている。$dX_t$ たち全体を $d\mathcal{Q}$ と表す。$\mathcal{C}$ で連続過程全体を表せば、$d\mathcal{Q}$ は $\mathcal{C}$ 加群になる

さらに、$X_1, X_2 \in \mathcal{Q}$ に対して

$$
\langle X_1, X_2 \rangle \coloneqq \int_0^t Y_{1, s}Y_{2, s} ds
$$

と定義する。これを用いて、$d\mathcal{Q}$ 上の積を

$$
dX_1 dX_2 \coloneqq d\langle X_1, X_2 \rangle
$$

と定義する。$d\mathcal{Q}$ はこの積で可換な $\mathcal{C}$ 上の代数になる

$f \in C^\infty(\mathbb{R}^n)$
$X^1_t, \dots, X^n_t \in \mathcal{Q}$ とすると、$f(X^1_t, \dots, X^n_t) \in \mathcal{Q}$ であり

$$
d[f(X^1_t, \dots, X^n_t)] = \sum_{i = 1}^n \frac{\partial f}{\partial x_i} dX_i + \frac{1}{2} \sum_{i, j} \frac{\partial^2 f}{\partial x_i \partial x_j} dX_i dX_j
$$


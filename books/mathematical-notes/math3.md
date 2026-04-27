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
2J(a) = \int_0^\infty e^{-(y - \frac{a}{y})^2}\left(1 + \frac{a}{y^2}\right) \, dy = \int_{-\infty}^\infty e^{-z^2} \, dz = \sqrt{\pi}
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

$L \coloneqq \frac{1}{2}\frac{d^2}{dx^2} - mx\frac{d}{dx}$ の熱核は

$$
p^L_t(x, y) = \sqrt{\frac{m}{\pi(1 - e^{-2mt})}} \exp\left(-\frac{m(y - xe^{-mt})^2}{1 - e^{-2mt}}\right)
$$

$\psi_0(x) \coloneqq e^{-\frac{mx^2}{2}}$ とすると、微分作用素として

$$
H + \frac{m}{2} = \psi_0 L \psi_0^{-1}
$$

形式的には $e^{\frac{mt}{2}}e^{tH} = e^{t(H + \frac{m}{2})} = e^{t\psi_0 L \psi_0^{-1}} = \psi_0 e^{tL} \psi_0^{-1}$ だから

$$
e^{\frac{mt}{2}}p^H_t(x, y) = \psi_0(x)p^L_t(x, y)\psi_0^{-1}(y)
$$

となるはずだが、実際に成り立つ

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

$\int_E p_{t - s}(x, y) \, dy \coloneqq p(s, x, t, E)$ とすると、$p_t(x, y)$ は $\Delta = \frac{1}{2}\frac{d^2}{dx^2}$ の熱核と一致する。$p_{t - s}(x, y) dy = P(B_t \in dy \mid B_s = x)$ などと表記する

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
d[f(X^1_t, \dots, X^n_t)] = \sum_{i = 1}^n \frac{\partial f}{\partial x_i}(X_t) dX_i + \frac{1}{2} \sum_{i, j} \frac{\partial^2 f}{\partial x_i \partial x_j}(X_t) dX_i dX_j
$$

特に、$f \in C^\infty(\mathbb{R})$ とすると

$$
d[f(t)X_t] = d[F(t, X_t)] = f'(t)X_t dt + f(t) dX_t
$$

ただし、$F(t, x) \coloneqq f(t)x$

$f \in C^\infty(\mathbb{R})$ は $\int_0^t f(s)^2 \, ds < \infty$ とする。$G_t \coloneqq \int_0^t f(s) \, dB_s$ は Gauss 分布に従う

$E(e^{i\xi G_t})$ を計算すれば良い。$Z_t \coloneqq e^{i\xi G_t}$ とすると

$$
dZ_t = i\xi Z_t dG_t - \frac{\xi^2}{2} Z_t dG_t^2 = i\xi f(t) Z_t dB_t - \frac{\xi^2}{2} f(t)^2 Z_t dt
$$

両辺の $E(\int_0^u - \, dt)$ を計算して

$$
E(Z_u) - 1 = -\frac{\xi^2}{2} \int_0^u f(t)^2 E(Z_t) \, dt
$$

$y(u) \coloneqq E(Z_u)$ は $y'(u) = -\frac{\xi^2}{2} f(u)^2 y(u)$ を満たすから

$$
E(e^{i\xi G_u}) = y(u) = e^{-\frac{\xi^2}{2} \int_0^u f(t)^2 \, dt}
$$

よって、$G_t$ は $N(0, \int_0^t f(s)^2 \, ds)$ に従う

# Ornstein-Uhlenbeck 過程

Ornstein-Uhlenbeck 過程 $q_t \in \mathcal{Q}$ は、確率微分方程式

$$
dq_t = -m q_t dt + dB_t
$$

で定義される。$C_t \coloneqq e^{mt}q_t$ とすると

$$
dC_t = me^{mt}q_t dt + e^{mt}dq_t = e^{mt}dB_t
$$

$C_t = \int_0^t e^{ms} \, dB_s + q_0$ だから

$$
q_t = e^{-mt} \int_0^t e^{ms} \, dB_s + e^{-mt} q_0
$$

以降、$q_0$ は $N(0, \frac{1}{2m})$ に従うとする。$q_t$ は常に $N(0, \frac{1}{2m})$ に従う。遷移確率は

$$
\begin{aligned}
  p(q_t \in E \mid q_s = x) &= p(\int_s^t e^{mu} \, dB_u \in e^{mt}E - e^{ms}x) \\
  &= p(\int_0^{t - s} e^{mu} \, dB_u \in e^{m(t - s)}E - x) \\
  &= (2\pi v(t - s))^{-1/2} \int_{e^{m(t - s)}E - x} e^{-\frac{y^2}{2v(t - s)}} \, dy \\
  &= e^{m(t - s)} (2\pi v(t - s))^{-1/2} \int_E e^{-\frac{(e^{m(t - s)}y - x)^2}{2v(t - s)}} \, dy \\
  &= \int_E p^L(x, y) \, dy
\end{aligned}
$$

ただし、$v(t) \coloneqq \int_0^t e^{2ms} \, ds = \frac{e^{2mt} - 1}{2m}$

$\psi_0(x) \coloneqq e^{-\frac{mx^2}{2}}$ だった。規格化すると、$\tilde{\psi}_0(x) \coloneqq \left(\frac{m}{\pi}\right)^{1/4} e^{-\frac{mx^2}{2}}$。$\tilde{\psi_0}$ は時間発展 $U_t \coloneqq e^{t(H + \frac{m}{2})}$ で不変。状態は時刻をも包括して時間変化せず、演算子が時間変化すると解釈する (Heisenberg 描像)。時刻 $0$ での位置演算子 $X_0$ を $x$ による掛け算作用素と定義する。時刻 $t$ での位置演算子 $X_t$ は $X_t \coloneqq U_t^{-1} X_0 U_t$ だと考える。状態 $\tilde{\psi}_0$ において、$X_s$ を測定してから $X_t$ を測定した時の $X_s$ と $X_t$ の相関は $\langle X_t X_s \tilde{\psi}_0, \tilde{\psi}_0 \rangle$ と定義されるが

$$
\begin{aligned}
  \langle X_t X_s \tilde{\psi}_0, \tilde{\psi}_0 \rangle &= \langle X_0 U_{t - s} X_0 \tilde{\psi}_0, \tilde{\psi}_0 \rangle \\
  &= e^{\frac{m(t - s)}{2}} \langle x \int p^H_{t - s}(x, y) y \tilde{\psi}_0(y) \, dy, \tilde{\psi}_0(x) \rangle \\
  &= e^{\frac{m(t - s)}{2}} \int xy p^H_{t - s}(x, y) \tilde{\psi}_0(x)\tilde{\psi}_0(y) \, dxdy \\
  &= \int xy p^L_{t - s}(x, y) \tilde{\psi}_0(x)^2 \, dxdy \\
  &= \int xy E(q_t \in dy \mid q_s = x) P(q_s \in dx) \\
  &= E(q_t q_s)
\end{aligned}
$$

$0 \le s < t$ ならば

$$
\begin{aligned}
  E(q_t q_s) &= e^{-mt}e^{-ms} E\left(\left\{\int_0^t e^{mu} \, dB_u + q_0\right\}\left\{\int_0^s e^{mu} \, dB_u + q_0\right\}\right) \\
  &= e^{-mt}e^{-ms} \left[E\left(\left\{\int_0^s e^{mu} \, dB_u\right\}^2\right) + E(q_0^2)\right] \\
  &= e^{-mt}e^{-ms} \left(\int_0^s e^{2mu} \, du + \frac{1}{2m}\right) \\
  &= \frac{1}{2m} e^{-m(t - s)}
\end{aligned}
$$

これは定数倍を除いて $d = 1$ の $\mathcal{S}_2(t, s)$ と一致する。同様に、$0 \le t_1 < \cdots < t_n$ とすると

$$
\langle X_{t_n} \cdots X_{t_1} \tilde{\psi}_0, \tilde{\psi}_0 \rangle = E(q_{t_n} \cdots q_{t_1})
$$

であり、定数倍を除いて $d = 1$ の $\mathcal{S}_n(t_n, \dots, t_1)$ と一致する

# Feynman–Kac の公式

$V \in C^\infty(\mathbb{R})$ は $V \ge 0$ とする。$u(t, x)$ は熱方程式

$$
\frac{\partial u}{\partial t}(t, x) = \frac{1}{2} \frac{\partial^2 u}{\partial x^2}(t, x) - V(x)u(t, x) \quad (t > 0)
$$

の滑らかな解だとする。$C^\infty(\mathbb{R})$ の位相で $u(t, x) \xrightarrow{t \to 0} f(x) \in C^\infty(\mathbb{R})$ とすると、以下の等式が成り立つ

$$
u(t, x) = E\left[f(B_t + x)\exp\left(-\int_0^t V(B_s + x) \, ds\right)\right]
$$

$t > 0$ を固定する

$$
M_s \coloneqq u(t - s, B_s + x)\exp\left(-\int_0^s V(B_u + x) \, du\right) \eqqcolon X_s Y_s \quad (0 \le s < t)
$$

$$
dX_s = -\frac{\partial u}{\partial t}(t - s, B_s + x) ds + \frac{\partial u}{\partial x}(t - s, B_s + x) dB_s + \frac{1}{2} \frac{\partial^2 u}{\partial x^2}(t - s, B_s + x) ds
$$

$$
dY_s = -Y_s V(B_s + x) ds
$$

$$
dM_s = Y_s dX_s + X_s dY_s = \frac{\partial u}{\partial x}(t - s, B_s + x) Y_s dB_s
$$

よって、$E(M_0) = \lim_{s \to t} E(M_s)$ となる


$$
\begin{aligned}
  \mathcal{F}q_t &= E(e^{i\xi q_t}) \\
  &= E(e^{i\xi e^{-mt} \int_0^t e^{ms} \, dB_s})E(e^{i\xi q_0}) \\
  &= E(e^{i\xi e^{-mt} \int_0^t e^{ms} \, dB_s})e^{-\frac{\xi^2}{4m}}
\end{aligned}
$$

確率論の標準に従って、$\mathcal{F}$ の定義が今までと少し異なることに注意。$Z_t \coloneqq e^{i\xi e^{-mt} \int_0^t e^{ms} \, dB_s}$ とすると

$$
dZ_t = Z_t[-(im\xi e^{-mt} \int_0^t e^{ms} \, dB_s + \frac{\xi^2}{2})dt + i\xi dB_t]
$$

両辺 $E(\int_0^u - \, dt)$ をとると

$$
E(Z_u) - 1 = -im\xi \int_0^u dt \, e^{-mt} E(Z_t \int_0^t e^{ms} \, dB_s) - \frac{\xi^2}{2} \int_0^u E(Z_t) \, dt
$$

$$

$y(u) \coloneqq E(Z_t)$ は $y' = -\frac{\xi^2}{2}y$ を満たすから


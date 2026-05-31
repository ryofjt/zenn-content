---
title: "math4"
---

# 自由スカラー場の mass spectrum

$\Delta_+(x, m^2) \coloneqq \mathcal{F}^{-1}(\delta_{\mathcal{O}_m^+})(-x) \in \mathcal{S}'(V, \mathbb{C})$

$$
\begin{aligned}
  \Delta_+(x, m^2) &= (2\pi)^{-d/2} \int_{p \in \mathcal{O}_m^+, x} e^{-ipx}\varphi(x) \, d\mu(p)dx \\
  &= (2\pi)^{-d/2} \int_{p', x} \frac{1}{2E(p')}e^{-iE(p')x_0 + ip'x'}\varphi(x) \, dp'dx
\end{aligned}
$$

ただし、$E(p') = \sqrt{|p'|^2 + m^2}$

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

最後に、$\tilde{\mathcal{T}}_1 = \{ v \in V_\mathbb{C} \mid v^2 \not\in \mathbb{R}_{\ge 0} \}$ を示す。$\mathfrak{S}_2\tilde{\mathcal{T}}_1 = \tilde{\mathcal{T}}_1$ もわかる

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

# LF 空間

$V$: Fréchet 空間
$M \subset V$: 閉部分空間
$M$, $V / M$ も Fréchet 空間

$M$ が Fréchet 空間なことは容易。$V / M$ が Fréchet 空間を示す。$V$ はセミノルム $p_1 \le p_2 \le \cdots$ で定義されるとする。$\bar{p}_n$ を $V / M$ に誘導されるセミノルムとする。$V / M$ が $\bar{p}_n$ に関して完備なことを示せば良い。$\bar{x}_j \in V / M$ は $\bar{p}_n$ に関して Cauchy だとする。$\bar{p}_j(\bar{x}_j - \bar{x}_k) < \frac{1}{2^j} \ (k > j)$ を満たすとしてよい。$m_j \in M$ を $p_j(x_j - x_{j + 1} + m_j) < \frac{1}{2^j}$ なるように取る。$x \coloneqq x_1 - \sum_{j = 1}^\infty (x_j - x_{j + 1} + m_j)$ とする。$\bar{x}_j$ は $\bar{x}$ に収束する

Fréchet 空間の有限直和も Fréchet

https://zenn.dev/link/comments/5e779f491cb393

LF 空間の可算直和も LF

$E_n = \varinjlim_j E_{n, j}$ とする。$F_j \coloneqq \bigoplus_{n = 1}^j E_{n, j}$ は Fréchet 空間。$\varinjlim_j F_j \to \bigoplus_n E_n$ があるが、普遍性で逆写像も構成できる

$E = \varinjlim_n E_n$: LF 空間
$M \subset E$: 閉部分空間
$E / M \simeq \varinjlim_n E_n / (E_n \cap M)$

普遍性を使えば容易。$E_n / (E_n \cap M)$ は Fréchet 空間だが、$E / M$ は LF 空間とは限らないことに注意

$E$: Fréchet 空間
$F = \varinjlim_n F_n$: LF 空間
$f: E \to F$ はある $F_N$ を経由する

$E = \bigcup_n f^{-1}(F_n)$ だから、ある $N$ が存在して、$f^{-1}(F_N)$ は内点を持つ

https://zenn.dev/link/comments/0fd346460ed01b

$E = \varinjlim_n E_n, F = \varinjlim_m F_m$: LF 空間
$f: E \to F$ が全射なら開写像

$E_{n, m} \coloneqq E_n \cap f^{-1}(F_m)$ とする。$F_m = \bigcup_n f(E_{n, m})$ だから、ある $n_m$ が存在して、$f(E_{n_m, m})$ は $F_m$ 内で meager (可算個の疎な閉集合で覆える) でない。Fréchet 空間の開写像定理から $f|_{E_{n_m, m}}: E_{n_m, m} \to F_m$ は開写像

開集合 $0 \in U \subset E$ に対して、$f(U)$ が $0 \in F$ の近傍になることを示せば良い。$f(U) \cap F_m$ が $0 \in F_m$ の近傍になることを示せば良い。$f(U \cap E_{n_m, m}) \subset F_m$ は開集合なことから従う

$E$: LF 空間
$M, L \subset E$: 閉部分空間
LCS として $M \oplus L = E$ だとすると、$M, L$ は LF 空間になる

$\mathrm{pr}_M|_{E_n}: E_n \to E$ はある $E_{N_n}$ を経由する

$$
M \simeq E / L \simeq \varinjlim_n E_n / (E_n \cap L) \simeq \varinjlim_n (E_n \cap M)
$$

# $SO(n)$ 不変な超関数

回転作用 $SO(n) \curvearrowright \mathbb{R}^n$ を考える

Borel の定理 (https://ncatlab.org/nlab/show/Borel%27s+theorem) から

$$
C^\infty(\mathbb{R}^n) \ni \varphi \mapsto \sum_{\alpha} \frac{\partial^\alpha\varphi(0)}{\alpha!}X^\alpha \in \mathbb{C}[\![X_1, \dots, X_n]\!]
$$

は全射

$C^\infty(\mathbb{R}) \ni \psi \mapsto \psi(\|x\|^2) \in C^\infty(\mathbb{R}^n)^{SO(n)}$ は全射を示す

$\varphi \in C^\infty(\mathbb{R}^n)^{SO(n)}$ とする。$\varphi(t, 0, \dots, 0)$ は偶関数。よって

$$
\varphi(t, 0, \dots, 0) \sim \sum_{j = 0}^\infty \frac{1}{(2j)!} \frac{\partial^{2j}\varphi}{\partial x_1^{2j}}(0)t^{2j}
$$

と Taylor 展開できる。Borel の定理から、$\psi_0(s) \in C^\infty(\mathbb{R})$ を Taylor 展開が $\sum_{j = 0}^\infty \frac{1}{(2j)!} \frac{\partial^{2j}\varphi}{\partial x_1^{2j}}(0)s^j$ になるようにとれる。$n(s) \coloneqq \varphi(\sqrt{s}, 0, \dots, 0) - \psi_0(s) \ (s > 0)$ とすると、$n^{(j)}(s) \to 0 \ (s \to 0)$。よって、$0$ 延長すれば $n(s)$ は $\tilde{n}(s) \in C^\infty(\mathbb{R})$ に拡張できる。$\varphi(x) = \varphi(\|x\|, 0, \dots, 0) = (\psi_0 + \tilde{n})(\|x\|^2)$

$$
\mathcal{D}'(\mathbb{R}^n)^{SO(n)} \xrightarrow{\sim} (C^\infty_c(\mathbb{R}^n)^{SO(n)})'
$$

逆写像は $(C^\infty(\mathbb{R}^n)^{SO(n)})' \ni u \mapsto (\varphi \mapsto u(\int_{SO(n)} g\varphi \, dg)) \in \mathcal{D}'(\mathbb{R}^n)^{SO(n)}$ で与えられる。ただし、$dg$ は正規化された $SO(n)$ 上の Haar 測度

$$
\Gamma_{\mathbb{R}_{\ge 0}}(\mathbb{R}, \mathcal{D}') \simeq (C^\infty_c(\mathbb{R}^n)^{SO(n)})'
$$

$C^\infty_c(\mathbb{R}) \ni \psi \mapsto \psi(x^2) \in C^\infty_c(\mathbb{R}^n)^{SO(n)}$ は全射連続。核 $K$ は $K = \{ \psi \in C^\infty_c(\mathbb{R}) \mid \mathrm{supp}\psi \subset \mathbb{R}_{\le 0} \}$。$C^\infty_c(\mathbb{R}) / K \to C^\infty_c(\mathbb{R}^n)^{SO(n)}$ は連続全単射だが、同型になることを示す。$C^\infty_c(\mathbb{R}) / K$, $C^\infty_c(\mathbb{R}^n)^{SO(n)}$ が LF 空間になることを示せば、LF 空間の開写像定理から従う

まず、$C^\infty_c(\mathbb{R}^n)^{SO(n)}$ は $C^\infty_c(\mathbb{R}^n)$ の直和因子だから、LF 空間

$$
C^\infty_c(\mathbb{R}) / K \simeq \varinjlim_n C^\infty_{[-n, n]} / (C^\infty_{[-n, n]} \cap K)
$$

$p_k(\psi) \coloneqq \|\psi^{(k)}\|_{[n, n]} \ (\psi \in C^\infty_{[-n, n]})$ から $C^\infty_{[-n, n]} / (C^\infty_{[-n, n]} \cap K)$ に誘導されるセミノルム $\bar{p}_k$ は

$$
\bar{p}_k(\bar{\varphi}) = \|\psi^{(k)}\|_{[0, n]} \quad (\psi \in C^\infty_{[-n, n]})
$$

だから、$C^\infty_c(\mathbb{R}) / K$ も LF 空間になる

双対をとれば

$$
\begin{aligned}
  (C^\infty_c(\mathbb{R}^n)^{SO(n)})' &\simeq (C^\infty_c(\mathbb{R}) / K)' \\
  &\simeq \{ v \in \mathcal{D}'(\mathbb{R}) \mid \varphi(K) = 0 \} \\
  &= \Gamma_{\mathbb{R}_{\ge 0}}(\mathbb{R}, \mathcal{D}')
\end{aligned}
$$

総合すると $\Gamma_{\mathbb{R}_{\ge 0}}(\mathbb{R}, \mathcal{D}') \simeq \mathcal{D}'(\mathbb{R}^n)^{SO(n)}$ が

$$
\begin{aligned}
  \Gamma_{\mathbb{R}_{\ge 0}}(\mathbb{R}, \mathcal{D}') \ni v &\mapsto (\varphi \mapsto v(s \mapsto \frac{1}{\sigma(S^{n - 1})} \int_{S^{n - 1}} \varphi(\sqrt{s}\omega) \, d\sigma(\omega))) \in \mathcal{D}'(\mathbb{R}^n)^{SO(n)} \\
  \mathcal{D}'(\mathbb{R}^n)^{SO(n)} \ni u &\mapsto (\psi \mapsto u(\psi(x^2))) \in \Gamma_{\mathbb{R}_{\ge 0}}(\mathbb{R}, \mathcal{D}')
\end{aligned}
$$

で与えられる。ただし、$\sigma$ は $S^{n - 1}$ 上の標準的な測度

# Paley-Wiener-Schwartz 型の境界評価 (Vladimirov の評価式)

$V = \mathbb{R}^n$
$K \subset V$: 空でない閉凸錐
$K^\circ = \{ \eta \in V^* \mid \eta(K) \le 0 \}$

$$
H_K(\eta) = \begin{cases}
  0 &\quad (\eta \in K^\circ) \\
  \infty &\quad (\eta \not\in K^\circ)
\end{cases}
$$

$\Gamma_K \coloneqq \mathrm{int}\{ H_K < \infty \} = \mathrm{int}(K^\circ) \subset V^*$

$u \in \mathcal{S}'(V)$ は $\mathrm{supp}u \subset K$ とする。$\Gamma_K \subset \mathrm{int}\Gamma_u$

Paley–Wiener–Schwartz の定理から、$\hat{u}(\xi + i\eta) \coloneqq \widehat{e^\eta u}(\xi) \ (\xi + i\eta \in V^* + i\Gamma_K)$ は正則関数で、$\eta_0 \in \Gamma_K$ に対して、$C_{\eta_0} \ge 0$, $N_{\eta_0} \ge 0$ が存在して

$$
|\hat{u}(\zeta)| \le C_{\eta_0}(1 + |\zeta|)^{N_{\eta_0}} \quad (\zeta \in V^* + i(\eta_0 + \Gamma_K))
$$

この評価は次のように改善できる。$C \ge 0$, $N, M \ge 0$ が存在して

$$
|\hat{u}(\xi + i\eta)| \le C(1 + |\xi| + |\eta|)^N \Delta(\eta)^{-M} \quad (\xi \in V^*, \eta \in \Gamma_K)
$$

ただし、$\Delta(\eta)$ は $\eta$ と $\partial\Gamma_K$ の Euclid 距離

$B_r \coloneqq \{ x \in V \mid |x| \le r \}$。$\rho \in C^\infty_{B_1}(V)$ は $\int \rho \, dx = 1$ とする。$\rho_\delta(x) \coloneqq \delta^{-n}\rho(x / \delta)$。$\chi_\delta(x) \coloneqq 1_{K + B_{2\delta}} * \rho_\delta = \int_{K + B_{2\delta}} \rho_\delta(x - y) \, dy \in C^\infty(V)$ とする。$\chi_\delta$ は $K + B_\delta$ 上 $1$ かつ $K + B_{3\delta}$ の外で消える。$\xi \in V^*$, $\eta \in \Gamma_K$ とすると

$$
\begin{aligned}
  \hat{u}(\xi + i\eta) &= \widehat{e^\eta u}(\xi) \\
  &= (2\pi)^{-n/2} \langle u, e^\eta \int \varphi(\xi)e^{-i\xi x} \, d\xi \rangle \quad (\varphi \in \mathcal{S}(V^*)) \\
  &= (2\pi)^{-n/2} \langle u, \chi_\delta e^\eta \int \varphi(\xi)e^{-i\xi x} \, d\xi \rangle \\
  &= (2\pi)^{-n/2} \langle u, \int \varphi(\xi)W_{\xi, \eta, \delta}(x) \, d\xi \rangle
\end{aligned}
$$

ただし、$W_{\xi, \eta, \delta}(x) \coloneqq \chi_\delta(x) e^{\eta x} e^{i\xi x}$

$\delta = (1 + |\xi| + |\eta|)^{-1}$ とし、$W_{\xi, \eta} \coloneqq W_{\xi, \eta, (1 + |\xi| + |\eta|)^{-1}}$ とすると

$$
|\partial_x^\alpha W_{\xi, \eta}(x)| \le C_\alpha(1 + |\xi| + |\eta|)^{|\alpha|}e^{\eta x}
$$

$x \in K \setminus \{0\}$ ならば、$\omega \coloneqq \langle \frac{x}{|x|}, \cdot \rangle \in V^*$ とすると

$$
\begin{aligned}
  \eta x &\le (\eta + \frac{1}{2}\Delta(\eta)\omega)x - \frac{1}{2}\Delta(\eta)|x| \\
  &\le H_K(\eta + \frac{1}{2}\Delta(\eta)\omega) - \frac{1}{2}\Delta(\eta)|x| \\
  &= -\frac{1}{2}\Delta(\eta)|x|
\end{aligned}
$$

$x \in K + B_{3\delta}$ ならば、$\Delta(\eta) \le |\eta|$ だから

$$
\eta x \le -\frac{1}{2}\Delta(\eta)(|x| - 3\delta) + 3\delta|\eta| \le -\frac{1}{2}\Delta(\eta)|x| + \frac{3}{2} + 3
$$

よって

$$
|\partial_x^\alpha W_{\xi, \eta}(x)| \le C'_\alpha(1 + |\xi| + |\eta|)^{|\alpha|}e^{-\frac{1}{2}\Delta(\eta)|x|}
$$

$$
\begin{aligned}
  \hat{u}(\xi + i\eta) &= (2\pi)^{-n/2} \langle u, \int \varphi(\xi)W_{\xi, \eta}(x) \, d\xi \rangle \\
  &= (2\pi)^{-n/2} \int \langle u, W_{\xi, \eta} \rangle \varphi(\xi) \, d\xi \\
  &= (2\pi)^{-n/2} \langle u, W_{\xi, \eta} \rangle
\end{aligned}
$$

$$
|\hat{u}(\xi + i\eta)| \le C (1 + |\xi| + |\eta|)^N \|(1 + |x|)^M e^{-\frac{1}{2}\Delta(\eta)|x|}\|
$$

あとは、$m \ge 0, a > 0$ に対して、$f_{m, a}(x) \coloneqq x^m e^{-ax} \ (x \ge 0)$ の最大値が $(\frac{m}{ea})^m$ になることから従う

# 正則関数の境界値

開集合 $W \subset \{ \mathrm{Im}z > 0 \}$ は $\mathbb{R}$ を edge とする wedge ($W \cup \mathbb{R} \subset \{ \mathrm{Im}z \ge 0 \}$ が開集合) だとする

$F: W \to \mathbb{C}$ は正則で、任意の $R > 0$ に対して、$\varepsilon > 0$, $C \ge 0$, $N \ge 0$ が存在して

$$
|F(z)| \le C (\mathrm{Im}z)^{-N} \quad (|\mathrm{Re}z| < R, 0 < \mathrm{Im}z < \varepsilon)
$$

だとする。このとき、$\mathcal{D}'(\mathbb{R})$ 内で

$$
\lim_{\varepsilon \to +0} F(x + i\varepsilon) \coloneqq \lim_{\varepsilon \to +0} \int F(x + i\varepsilon)\varphi(x) \, dx
$$

が定まる

$\mathbb{R}$ を edge とする $1$ 連結な wedge $W_0 \subset W$ をとる。正則関数 $F_n: W_0 \to \mathbb{C}$ を $F$ の $n$ 階の原始関数とする。$F_n$ は $n - 1$ 次の多項式を除いて一意的。$|\mathrm{Re}z| < R, 0 < \mathrm{Im}z < \varepsilon$ ならば

$$
|F_n(z)| \le \begin{cases}
  C_n (\mathrm{Im}z)^{-N + n} &\quad (0 \le n \le N - 1) \\
  -C_N \log(\mathrm{Im}z) &\quad (n = N) \\
\end{cases}
$$

よって、$F_{N + 1}$ は $W_0 \cup \mathbb{R}$ 上の連続関数に拡張できる

$$
\begin{aligned}
  \int F(x + i\varepsilon)\varphi(x) \, dx &= (-1)^{N + 1} \int F_{N + 1}(x + i\varepsilon) d_x^{N + 1}\varphi(x) \, dx \\
  &\xrightarrow{\varepsilon \to +0} d_x^{N + 1}F_{N + 1}(x)
\end{aligned}
$$

さらに、$W = \{ z \in \mathbb{C} \mid 0 < \mathrm{Im}z < \varepsilon_0 \}$ かつ

$$
|F(x + iy)| \le C (1 + |x|)^K y^{-N} \quad (x \in \mathbb{R}, 0 < y < \varepsilon_0)
$$

だとすると

$$
|F_n(x + iy)| \le \begin{cases}
  C_n (1 + |x|)^{K + n} y^{-N + n} &\quad (0 \le n \le N - 1) \\
  -C_N (1 + |x|)^{K + N} \log y &\quad (n = N)
\end{cases}
$$

$F_{N + 1}(x) \le C_{N + 1} (1 + |x|)^{K + N + 1}$ だから、$\lim_{\varepsilon \to +0} F(x + i\varepsilon) = d_x^{N + 1}F_{N + 1}(x) \in \mathcal{S}'(\mathbb{R})$

# 超関数の構造定理の別証明

https://zenn.dev/link/comments/0c130c0ac682f5

の別証明をする。$1$ の分割を使えば、開集合 $U \subset \mathbb{R}^n$ と $u \in \mathcal{E}'(U)$ に対して、$\varphi_\alpha \in C_c(U) \ (|\alpha| \le N)$ があって

$$
u = \sum_{|\alpha| \le N} \partial^\alpha \varphi_\alpha
$$

と表せることを示せば良い

(別証明 1)

$\hat{u}(\xi) = (2\pi)^{-n/2}u(e^{ix\xi})$ は

$$
|\hat{u}(\xi)| \le C(1 + |\xi|)^K
$$

と評価できる。$M > \frac{K + n}{2}$ を固定する。$\alpha(\xi) \coloneqq \frac{\hat{u}(\xi)}{(1 + |\xi|^2)^M} \in L^1(\mathbb{R}^n)$ だから、$\mathcal{F}^{-1}\alpha \in C(\mathbb{R}^n)$

$$
u = (1 - \Delta)^M \mathcal{F}^{-1}\alpha
$$

$\chi \in C^\infty_c(U)$ を $\mathrm{supp}u$ の近傍で $1$ になるように取れば

$$
u = \chi (1 - \Delta)^M \mathcal{F}^{-1}\alpha
$$

あとは

$$
f \partial^\beta g = \sum_{\gamma \le \beta} (-1)^{|\gamma|} \binom{\beta}{\gamma} \partial^{\beta - \gamma}((\partial^\gamma f)g)
$$

を使って整理すれば良い

(別証明 2)

$$
F(z_1, \dots, z_n) \coloneqq (2\pi i)^{-n} u_t\left(\frac{1}{t_1 - z_1} \cdots \frac{1}{t_n - z_n}\right) \quad (z_j \in \mathbb{C} \setminus \mathbb{R})
$$

$|t_j - z_j| \ge |\mathrm{Im}z_j|$ から

$$
|F(z_1, \dots, z_n)| \le C |\mathrm{Im}z_1|^{-N} \cdots |\mathrm{Im}z_n|^{-N}
$$

$\mathbb{R}^+ \coloneqq \mathbb{R}_{>0}$, $\mathbb{R}^- \coloneqq \mathbb{R}_{<0}$, $H^\pm \coloneqq \mathbb{R} + i\mathbb{R}^\pm$ とする。$\sigma \in \{ \pm 1 \}^n$ に対して

正則関数 $G^\sigma: H^\sigma \to \mathbb{C}$ を $F|_{H^\sigma}$ の $z_1$ に関して $N + 1$ 階, $\dots$, $z_n$ に関して $N + 1$ 階の原始関数とする。$G^\sigma$ は境界まで連続に拡張できる

$$
F^\sigma(x) \coloneqq \lim_{y \in \mathbb{R}^\sigma, y \to 0} F(x + iy) = d_{x_1}^{N + 1} \cdots d_{x_n}^{N + 1} G^\sigma(x) \in \mathcal{D}'(\mathbb{R}^n)
$$

$$
u(x) = \sum_{\sigma \in \{ \pm 1 \}^n} \left(\prod_{j = 1}^n \sigma_j\right) F^\sigma(x)
$$

を示せば、あとは別証明 1 と同様にカットオフを考えれば良い

$$
\begin{aligned}
  &\sum_{\sigma \in \{ \pm 1 \}^n} \left(\prod_{j = 1}^n \sigma_j\right) F^\sigma(x) \\
  &\quad = \lim_{y \to 0, y_j \in \mathbb{R}_{>0}} \sum_{\sigma \in \{ \pm 1 \}^n} \left(\prod_{j = 1}^n \sigma_j\right) F(x_1 + i\sigma_1 y_1, \dots, x_n + i\sigma_n y_n) \\
  &\quad = (2\pi i)^{-n} \lim_{y \to 0, y_j \in \mathbb{R}_{>0}} \sum_{\sigma \in \{ \pm 1 \}^n} \left(\prod_{j = 1}^n \sigma_j\right) u_t\left(\frac{1}{t_1 - x_1 - i\sigma_1 y_1} \cdots \frac{1}{t_n - x_n - i\sigma_n y_n}\right) \\
  &\quad = (2\pi i)^{-n} \lim_{y \to 0, y_j \in \mathbb{R}_{>0}} u_t\left(\prod_{j = 1}^n \left(\frac{1}{t_j - x_j - iy_j} - \frac{1}{t_j - x_j + iy_j}\right)\right)
\end{aligned}
$$

$k(x) \coloneqq \frac{1}{\pi(x^2 + 1)}$, $k_\varepsilon \coloneqq \frac{1}{\varepsilon}k(x / \varepsilon) = \frac{\varepsilon}{\pi(x^2 + \varepsilon^2)}$ とすると、$\frac{1}{2 \pi i} \left(\frac{1}{t_j - x_j - iy_j} - \frac{1}{t_j - x_j + iy_j}\right) = \frac{1}{\pi} \frac{y_j}{(t_j - x_j)^2 + y_j^2} = k_{y_j}(t_j - x_j)$

$$
\begin{aligned}
  \sum_{\sigma \in \{ \pm 1 \}^n} \left(\prod_{j = 1}^n \sigma_j\right) F^\sigma(x) &= \lim_{y \to 0, y_j \in \mathbb{R}_{>0}} u_t\left(\prod_{j = 1}^n k_{y_j}(t_j - x_j)\right) \\
  &= u(x)
\end{aligned}
$$

# 波動方程式の前進基本解 (質量 $m \ge 0$)

$m \ge 0$

$\square + m^2 = \partial_t^2 - \partial_x^2 + m^2$ の基本解を考える。形式的には、$(\square + m^2)E = \delta$ とすると、$(-\xi^2 + m^2)\hat{E} = (2\pi)^{-d/2}$ だから、$\hat{E} = (2\pi)^{-d/2}\frac{1}{m^2 - \xi^2}$

以降は厳密に構成をする。$\zeta \in \mathcal{T} = V - iV_+$ ならば、$\zeta^2 \not\in \mathbb{R}_{\ge 0}$ だから

$$
U(\zeta) \coloneqq (2\pi)^{-d/2}\frac{1}{m^2 - \zeta^2} \quad (\zeta \in \mathcal{T})
$$

は正則関数

$M \subset V_-$ をコンパクト部分集合とすると

$$
|U(\xi + i\eta + i\theta)| \le C \quad (\eta \in M, \theta \in \overline{V}_-)
$$

よって、Paley–Wiener–Schwartz の定理から、対応する $E_+(x, m^2) \in \mathcal{D}'_{\overline{V}_+}(V)$ が構成できる。$E_+(x, m^2) \in \mathcal{S}'(V)$ もわかる

$$
\begin{aligned}
  E_+(x, m^2)(\varphi) &= (2\pi)^{-d} \int \frac{1}{m^2 - (\xi + i\eta)^2}\varphi(x)e^{ix(\xi + i\eta)} \, dx d\xi \quad (\eta \in V_-) \\
  &= (2\pi)^{-d} \lim_{\eta \in \Gamma \setminus \{0\}, \eta \to 0} \int \frac{1}{m^2 - (\xi + i\eta)^2}\varphi(x)e^{ix\xi} \, dx d\xi \quad (\text{in } \mathcal{S}'(V))
\end{aligned}
$$

ただし、$\{0\} \subsetneq \Gamma \subset V$ は closed cone で、$\Gamma \setminus \{0\} \subset V_-$

$E_+(x, m^2)$ が基本解になっていることは

$$
\begin{aligned}
  ((\square + m^2)E_+(x, m^2))(\varphi) &= E_+(x, m^2)((\square + m^2)\varphi) \\
  &= (2\pi)^{-d} \int \varphi(x)e^{ix(\xi + i\eta)} \, dx d\xi \\
  &= \varphi(0)
\end{aligned}
$$

から従う

最後に、基本解で $\mathrm{supp} \subset \overline{V}_+$ なものは一意的なことを示す。$F \in \mathcal{D}'_{\overline{V}_+}(V)$ も基本解だとする。$+: \overline{V}_+ \times \overline{V}_+ \to V$ は時間成分を考えれば proper だから

$$
\begin{aligned}
  E_+(x, m^2) - F &= \delta * (E_+(x, m^2) - F) \\
  &= (\square + m^2)E_+(x, m^2) * (E_+(x, m^2) - F) \\
  &= (\square + m^2)(E_+(x, m^2) * (E_+(x, m^2) - F)) \\
  &= E_+(x, m^2) * (\square + m^2)(E_+(x, m^2) - F) \\
  &= 0
\end{aligned}
$$

# Sokhotski–Plemelj の公式

$\mathcal{S}'(\mathbb{R})$ 内で

$$
\int \frac{1}{x \pm i\varepsilon} \varphi(x) \, dx \xrightarrow{\varepsilon \to +0} \lim_{\varepsilon \to +0} \int_{|x| \ge \varepsilon} \frac{1}{x} \varphi(x) \, dx \mp i\pi\varphi(0) = \mathrm{p. v.} \frac{1}{x} \mp i\pi\delta(x)
$$

$\frac{\varphi(x) - \varphi(-x)}{x} \xrightarrow{x \to 0} 2\varphi'(0)$ だから、右辺は $\lim_{\varepsilon \to +0} \int_{|x| \ge \varepsilon} \frac{1}{x} \varphi(x) \, dx = \int_0^\infty \frac{\varphi(x) - \varphi(-x)}{x}$ により正当化される

$$
\begin{aligned}
  \int \frac{1}{x \pm i\varepsilon} \varphi(x) \, dx &= \int \frac{x}{x^2 + \varepsilon^2} \varphi(x) \, dx \mp i \int \frac{\varepsilon}{x^2 + \varepsilon^2} \varphi(x) \, dx \\
  &= \int_0^\infty \frac{x}{x^2 + \varepsilon^2}(\varphi(x) - \varphi(-x)) \, dx \mp i\pi \int k_\varepsilon(x) \varphi(x) \, dx \\
  &\xrightarrow{\varepsilon \to +0} \int_0^\infty \frac{\varphi(x) - \varphi(-x)}{x} \, dx \mp i\pi\varphi(0)
\end{aligned}
$$

だだし、$k(x) \coloneqq \frac{1}{\pi(x^2 + 1)}$, $k_\varepsilon \coloneqq \frac{1}{\varepsilon}k(x / \varepsilon) = \frac{\varepsilon}{\pi(x^2 + \varepsilon^2)}$

# $\mathrm{p. v.}\frac{1}{x}$ の Fourier 変換

$$
\mathcal{F}\left(\mathrm{p. v.}\frac{1}{x}\right)(\xi) = -i\sqrt{\frac{\pi}{2}} \mathrm{sgn}(\xi)
$$

$$
\begin{aligned}
  \mathcal{F}\left(\mathrm{p. v.}\frac{1}{x}\right)(\xi) &= (2\pi)^{-1/2} \lim_{\varepsilon \to +0} \int \frac{x}{x^2 + \varepsilon^2} e^{-ix\xi} \varphi(\xi) \, dx d\xi \\
  &= -i\sqrt{\frac{\pi}{2}} \lim_{\varepsilon \to +0} \int \mathrm{sgn}(\xi) e^{-\varepsilon|\xi|} \varphi(\xi) \, d\xi \\
  &= -i\sqrt{\frac{\pi}{2}} \mathrm{sgn}(\xi)
\end{aligned}
$$

ただし

$$
\begin{aligned}
  \int_{-\infty}^\infty \frac{x}{x^2 + \varepsilon^2}e^{iax} \, dx &= \begin{cases} \pi i e^{-\varepsilon a} &\quad (a > 0) \\
    0 &\quad (a = 0) \\
    -\pi i e^{\varepsilon a} &\quad (a < 0)
  \end{cases} \\
  &= \mathrm{sgn}(a) \pi i e^{-\varepsilon|a|}
\end{aligned}
$$

は留数定理から従う

# 前進基本解の $\Delta_+(x, m^2)$ による表示

$e_0 \coloneqq (1, 0, \dots, 0) \in V_+$ とすると、$\mathcal{S}'(V)$ 内で

$$
\begin{aligned}
  (2\pi)^d E_+(x, m^2)(\varphi) &= \lim_{\varepsilon \to +0} \int \frac{1}{m^2 - (p - i\varepsilon e_0)^2} \varphi(x) e^{ipx} \, dx dp \\
  &= \lim_{\varepsilon \to +0} \int \frac{1}{m^2 - p_0^2 + |p'|^2 + \varepsilon^2 + 2i\varepsilon p_0} \varphi(x) e^{ipx} \, dx dp \\
  &= \lim_{\varepsilon \to +0} \int \frac{1}{E^2 - (p_0 - i\varepsilon)^2} \varphi(x) e^{ipx} \, dx dp \\
  &= \lim_{\varepsilon \to +0} \int \frac{1}{2E} \left(\frac{1}{E - p_0 + i\varepsilon} + \frac{1}{E + p_0 - i\varepsilon}\right) \varphi(x) e^{ipx} \, dx dp
\end{aligned}
$$

ただし、$E(p') = \sqrt{|p'|^2 + m^2}$

$$
\begin{aligned}
  &\int \frac{1}{2E} \frac{1}{E - p_0 + i\varepsilon} \varphi(x) e^{ipx} \, dx dp \\
  &\quad = \int \frac{1}{2E} \frac{1}{E - p_0 + i\varepsilon} \varphi(x) e^{ip_0x_0} e^{-ip'x'} \, dx dp_0 dp' \\
  &\quad = \int \frac{1}{2E} \frac{1}{p_0 + i\varepsilon} \varphi(x) e^{-ip_0x_0} e^{iEx_0} e^{-ip'x'} \, dx dp_0 dp' \\
  &\xrightarrow{\varepsilon \to +0} \int \frac{1}{2E} \left(\mathrm{p. v.}\frac{1}{p_0} - i\pi\delta(p_0)\right) \varphi(x) e^{-ip_0x_0} e^{iEx_0} e^{-ip'x'} \, dx dp_0 dp' \\
  &\quad = \int \frac{1}{2E} \left(-i\pi\mathrm{sgn}(x_0) - i\pi\right) \varphi(x) e^{iEx_0} e^{-ip'x'} \, dx dp' \\
  &\quad = -2\pi i \int \frac{1}{2E} \theta(x_0) \varphi(x) e^{iEx_0} e^{-ip'x'} \, dx dp' \\
  &\quad = -2\pi i \int_{\mathcal{O}^+_m} \theta(x_0) \varphi(x) e^{ipx} \, dx d\mu(p)
\end{aligned}
$$

ただし

$$
\theta(x) \coloneqq \begin{cases}
  1 &\quad (x > 0) \\
  \frac{1}{2} &\quad (x = 0) \\
  0 &\quad (x < 0)
\end{cases}
$$

同様に

$$
\begin{aligned}
  &\int \frac{1}{2E} \frac{1}{E + p_0 - i\varepsilon} \varphi(x) e^{ipx} \, dx dp \\
  &\quad = \int \frac{1}{2E} \frac{1}{E + p_0 - i\varepsilon} \varphi(x) e^{ip_0x_0} e^{-ip'x'} \, dx dp_0 dp' \\
  &\quad = \int \frac{1}{2E} \frac{1}{p_0 - i\varepsilon} \varphi(x) e^{ip_0x_0} e^{-iEx_0} e^{-ip'x'} \, dx dp_0 dp' \\
  &\xrightarrow{\varepsilon \to +0} \int \frac{1}{2E} \left(\mathrm{p. v.}\frac{1}{p_0} + i\pi\delta(p_0)\right) \varphi(x) e^{ip_0x_0} e^{-iEx_0} e^{-ip'x'} \, dx dp_0 dp' \\
  &\quad = \int \frac{1}{2E} \left(i\pi\mathrm{sgn}(x_0) + i\pi\right) \varphi(x) e^{-iEx_0} e^{-ip'x'} \, dx dp' \\
  &\quad = 2\pi i \int \frac{1}{2E} \theta(x_0) \varphi(x) e^{-iEx_0} e^{-ip'x'} \, dx dp' \\
  &\quad = 2\pi i \int_{\mathcal{O}^+_m} \theta(x_0) \varphi(x) e^{-ipx} \, dx d\mu(p)
\end{aligned}
$$

$$
\Delta_+(x, m^2) = \mathcal{F}^{-1}(\delta_{\mathcal{O}_m^+})(-x) = (2\pi)^{-d/2} \int_{p \in \mathcal{O}_m^+} e^{-ipx} \, d\mu(p) \in \mathcal{S}'(V)
$$

だったから

$$
\begin{aligned}
  E_+(x, m^2) &= -i(2\pi)^{-d + 1} \theta(x_0) \int_{\mathcal{O}^+_m} e^{ipx} \, d\mu(p) + i(2\pi)^{-d + 1} \theta(x_0) \int_{\mathcal{O}^+_m} e^{-ipx} \, d\mu(p) \\
  &= i(2\pi)^{-d/2 + 1} \theta(x_0) (\Delta_+(x, m^2) - \Delta_+(-x, m^2))
\end{aligned}
$$

# $SO(1, d - 1) \curvearrowright \mathbb{R}^d$ に関する軌道積分

$V \coloneqq (\mathbb{R}^d, x_0^2 - x_1^2 - \cdots - x_{d - 1}^2)$

$\varphi \in \mathcal{S}(V)$ に対して

$$
(M\varphi)(x) \coloneqq \int_{\mathcal{O}_{\sqrt{x}}} \varphi(v) \, d\mu_{\sqrt{x}}(v) \quad (x \ge 0)
$$

と定義する。$d = 1, 2$ かつ $x = 0$ の場合のみ発散して、$(M\varphi)(0) \in \{ 0, \pm\infty \}$ なことに注意。$d$ が奇数なら、$f, g \in \mathcal{S}(\mathbb{R}_{\ge 0})$ があって

$$
(M\varphi)(x) = x^{\frac{d}{2} - 1} f(x) + g(x)
$$

と表せる。また、$d$ が偶数なら、$f, g \in \mathcal{S}(\mathbb{R}_{\ge 0})$ があって

$$
(M\varphi)(x) = x^{\frac{d}{2} - 1} \log x \cdot f(x) + g(x)
$$

と表せる

まず、$d = 1$ の場合は、$M\varphi(x) = \frac{1}{2\sqrt{x}} \varphi(\sqrt{x})$ から明らか。$d \ge 2$ とする

$$
\psi(u, s) \coloneqq \int_{S^{d - 2}} \varphi(u, \sqrt{s}\omega) \, d\sigma(\omega) \in \mathcal{S}(\mathbb{R} \times \mathbb{R}_{\ge 0})
$$

ただし、$\sigma$ は $S^{d - 2}$ 上の標準的な測度。$x \ge 0$ に対して

$$
\begin{aligned}
  (M\varphi)(x) &= \frac{1}{2} \int \frac{1}{\sqrt{|v'|^2 + x}} \varphi(\sqrt{|v'|^2 + x}, v') \, dv' \\
  &= \frac{1}{2} \int_{r \ge 0, \omega \in S^{d - 2}} \frac{1}{\sqrt{r^2 + x}} \varphi(\sqrt{r^2 + x}, r\omega) \, r^{d - 2} \, dr d\sigma(\omega) \\
  &= \frac{1}{4} \int_{s \ge 0, \omega \in S^{d - 2}} \frac{1}{\sqrt{s + x}} \varphi(\sqrt{s + x}, \sqrt{s}\omega) \, s^{\frac{d - 3}{2}} \, ds d\sigma(\omega) \\
  &= \frac{1}{4} \int_0^\infty \frac{1}{\sqrt{s + x}} \psi(\sqrt{s + x}, s) \, s^{\frac{d - 3}{2}} \, ds \\
  &= \frac{1}{2} \int_{\sqrt{x}}^\infty (u^2 - x)^{\frac{d - 3}{2}} \psi(u, u^2 - x) \, du
\end{aligned}
$$

https://ncatlab.org/nlab/show/Hadamard+lemma

$\psi(u, u^2 - x)$ を $u$ に関して偶関数と奇関数に分ける。$H_\text{even}, H_\text{odd} \in \mathcal{S}(\{ (t, x) \in \mathbb{R}^2 \mid 0 \le x \le t \})$ が一意的に存在して

$$
\psi(u, u^2 - x) = H_\text{even}(u^2, x) + u H_\text{odd}(u^2, x)
$$

$$
\begin{aligned}
  M\varphi(x) &= \frac{1}{2} \int_{\sqrt{x}}^\infty (u^2 - x)^{\frac{d - 3}{2}} H_\text{even}(u^2, x) \, du + \frac{1}{2} \int_{\sqrt{x}}^\infty (u^2 - x)^{\frac{d - 3}{2}} u H_\text{odd}(u^2, x) \, du \\
  &\eqqcolon I_\text{even}(x) + I_\text{odd}(x)
\end{aligned}
$$

まず、$I_\text{odd}(x)$ は

$$
I_\text{odd}(x) = \frac{1}{4} \int_0^\infty w^{\frac{d - 3}{2}} H_\text{odd}(w + x, x) \, dw \in \mathcal{S}(\mathbb{R}_{\ge 0})
$$

あとは、$I_\text{even}(x)$ を考えれば良い。$d$ が奇数なら

$$
I_\text{even}(x) = \frac{1}{2} \int_0^\infty (u^2 - x)^{\frac{d - 3}{2}} H_\text{even}(u^2, x) \, du - \frac{1}{2} \int_0^{\sqrt{x}} (u^2 - x)^{\frac{d - 3}{2}} H_\text{even}(u^2, x) \, du
$$

第 1 項は滑らか。第 2 項は

$$
\int_0^{\sqrt{x}} (u^2 - x)^{\frac{d - 3}{2}} H_\text{even}(u^2, x) \, du = x^{\frac{d}{2} - 1} \int_0^1 (v^2 - 1)^{\frac{d - 3}{2}} H_{\text{even}}(xv^2, x) \, dv
$$

$d$ は偶数とし、$d = 2m + 2 \ (m \ge 0)$ とおく

$$
I_\text{even}(x) = \frac{1}{4} \int_x^\infty (t - x)^{m - \frac{1}{2}} t^{-\frac{1}{2}} H_\text{even}(t, x) \, dt
$$

$\chi(t) \in C^\infty(\mathbb{R}_{\ge 0})$ を $\chi(t) = 1 \ (0 \le t \le \frac{1}{2})$ かつ $\chi(t) = 0 \ (t \ge 1)$ なるようにとり

$$
H_\text{even}(t, x) = \chi(t)H_\text{even}(t, x) + (1 - \chi(t))H_\text{even}(t, x) \eqqcolon H_1(t, x) + H_2(t, x)
$$

と分解する

$$
\begin{aligned}
  4 I_\text{even}(x) &= \int_x^\infty (t - x)^{m - \frac{1}{2}} t^{-\frac{1}{2}} H_1(t, x) \, dt + \int_x^\infty (t - x)^{m - \frac{1}{2}} t^{-\frac{1}{2}} H_2(t, x) \, dt \\
  &= \int_x^1 (t - x)^{m - \frac{1}{2}} t^{-\frac{1}{2}} H_1(t, x) \, dt + \int_0^\infty w^{m - \frac{1}{2}} (w + x)^{-\frac{1}{2}} H_2(w + x, x) \, dw
\end{aligned}
$$

と分割する。最右辺の後半は、$w + x \ge \frac{1}{2}$ として良いから滑らか。最右辺の前半

$$
J(x) \coloneqq \int_x^1 (t - x)^{m - \frac{1}{2}} t^{-\frac{1}{2}} H_1(t, x) \, dt
$$

を調べれば良い。$J(x) = \int_0^\infty w^{m - \frac{1}{2}} (w + x)^{-\frac{1}{2}} H_1(w + x, x) \, dw$ だから、$x > 0$ で滑らかなことがわかる。$x = 0$ の近傍での滑らかでない特異性を抽出する

$$
H_1(t, x) \sim \sum_{j = 0}^\infty \sum_{k = 0}^\infty \frac{1}{j!k!} \frac{\partial^{j + k}H_1}{\partial t^j \partial x^k}(0, 0) t^j x^k
$$

と形式的に Taylor 展開する。$0 < x < 1$ に対して

$$
\begin{aligned}
  J_j(x) &\coloneqq \int_x^1 (t - x)^{m - \frac{1}{2}} t^{j-\frac{1}{2}} \, dt \\
  &= \int_1^{1 / x} (xu - x)^{m - \frac{1}{2}} (xu)^{j - \frac{1}{2}} x \, du \\
  &= x^{m + j} \int_1^{1 / x} (u - 1)^{m - \frac{1}{2}} u^{j - \frac{1}{2}} \, du \\
  &= x^{m + j} \int_1^{1 / x} (u - 1)^m u^j \left(\left(u - \frac{1}{2}\right)^2 - \frac{1}{4}\right)^{-\frac{1}{2}} \, du \\
  &= x^{m + j} \int_0^{\Lambda(x)} P_j(\mathrm{cosh}\alpha) \, d\alpha \quad (\cosh\alpha = 2u - 1)
\end{aligned}
$$

ただし、$\Lambda(x) \coloneqq \cosh^{-1}(\frac{2}{x} - 1)$ で $P_j(X) \coloneqq \left(\frac{X - 1}{2}\right)^m \left(\frac{X + 1}{2}\right)^j$

$$
\Lambda(x) = \log\left(\frac{2 - x + 2\sqrt{1 - x}}{x}\right) = \log(2 - x + 2\sqrt{1 - x}) - \log x
$$

$Y(x) \coloneqq 2 - x + 2\sqrt{1 - x} \ (x < 1)$ とすると、$Y(x) > 0 \ (x < 1)$

$$
P_j(\mathrm{cosh}\alpha) = \sum_{l = 0}^{j + m} c_{j, l} \cosh(l\alpha)
$$

と表せるから、$0 < x < 1$ で

$$
\begin{aligned}
  J_j(x) &= x^{j + m} \int_0^{\Lambda(x)} P_j(\mathrm{cosh}\alpha) \, d\alpha \\
  &= c_{j, 0} x^{j + m} \Lambda(x) + x^{j + m} \sum_{l = 1}^{j + m} \frac{c_{j, l}}{l} \mathrm{sinh}(l\Lambda(x)) \\
  &= c_{j, 0} x^{j + m} (\log Y(x) - \log x) + x^{j + m} \sum_{l = 1}^{j + m} \frac{c_{j, l}}{2l} (\frac{Y(x)^l}{x^l} - \frac{x^l}{Y(x)^l}) \\
  &= -c_{j, 0} x^{j + m} \log x + g_j(x)
\end{aligned}
$$

ただし、$g_j(x) \in C^\infty([0, 1))$。よって、形式的に

$$
J(x) \sim -x^m \log x \sum_{j = 0}^\infty \sum_{k = 0}^\infty \frac{1}{j!k!} \frac{\partial^{j + k}H_1}{\partial t^j \partial x^k}(0, 0) c_{j, 0} x^{j + k} + C^\infty([0, 1))
$$

Borel の定理から、Taylor 展開が $-\sum_{j = 0}^\infty \sum_{k = 0}^\infty \frac{1}{j!k!} \frac{\partial^{j + k}H_1}{\partial t^j \partial x^k}(0, 0) c_{j, 0} x^{j + k}$ に一致する $f \in C^\infty_c(\mathbb{R})$ が存在する。$J(x) - x^m \log x \cdot f(x) \in \mathcal{S}(\mathbb{R}_{\ge 0})$ を示す

$$
H_1(t, x) = \sum_{j + k \le N - 1} \frac{1}{j!k!} \frac{\partial^{j + k}H_1}{\partial t^j \partial x^k}(0, 0) t^j x^k + R_N(t, x)
$$

と剰余項付きで Taylor 展開する。$R_N(t, x) \in C^\infty(\{ (t, x) \in \mathbb{R}^2 \mid 0 \le x \le t \})$。$0 < x < 1$ で

$$
\begin{aligned}
  &J(x) - x^m \log x \cdot f(x) \\
  &= -x^m \log x \left(f(x) + \sum_{j + k \le N - 1} \frac{1}{j!k!} \frac{\partial^{j + k}H_1}{\partial t^j \partial x^k}(0, 0) c_{j, 0} x^{j + k}\right) \\
  &\quad + \sum_{j + k \le N - 1} \frac{1}{j!k!} \frac{\partial^{j + k}H_1}{\partial t^j \partial x^k}(0, 0) f_j(x) x^k \\
  &\quad + \int_x^1 (t - x)^{m - \frac{1}{2}} t^{-\frac{1}{2}} R_N(t, x) \, dt
\end{aligned}
$$

第 $1$ 項は $C^{N + m - 1}([0, 1))$ に属し、第 $3$ 項も $C^{N + m - 1}([0, 1))$ に属するから、$J(x) - x^m \log x \cdot f(x)$ も $C^{N + m - 1}([0, 1))$ に属する。$N$ は任意だから、$J(x) - x^m \log x \cdot f(x)$ は $C^\infty([0, 1))$ に属する

$M\mathcal{S}(V) \coloneqq \{ M\varphi \mid \varphi \in \mathcal{S}(V) \}$ と定義する

$$
M\mathcal{S}(V) \subset \begin{cases}
  x^{\frac{d}{2} - 1} \mathcal{S}(\mathbb{R}_{\ge 0}) + \mathcal{S}(\mathbb{R}_{\ge 0}) &\quad (d \text{ は奇数}) \\
  x^{\frac{d}{2} - 1} \log x \cdot \mathcal{S}(\mathbb{R}_{\ge 0}) + \mathcal{S}(\mathbb{R}_{\ge 0}) &\quad (d \text{ は偶数})
\end{cases}
$$

だが、一致することが知られている。https://en.wikipedia.org/wiki/Abel_transform を使って証明するらしい。$M\mathcal{S}(V)$ には $\mathcal{S}(V) \twoheadrightarrow M\mathcal{S}(V)$ で商位相を入れる

# $\square$ の軌道に沿った分解

$H^{d - 1} \coloneqq \mathcal{O}_1^+ = \{ v \in V \mid v^2 = 1, v_0 > 0 \}$

$H^{d - 1}$ に $V$ から誘導される計量は負定値だが、$-1$ 倍した正定値の計量 $g_{H^{d - 1}}$ を考える

$V_+ \simeq \mathbb{R}_{>0} \times H^{d - 1}$ を $v \mapsto (v^2, \frac{v}{\sqrt{v^2}})$ で与える。$\mathbb{R}_{>0}$ の座標を $s$ で表す。$V_+$ の計量 $g_{V_+}$ は

$$
g_{V_+} = (d(\sqrt{s}))^2 - sg_{H^{d - 1}} = \frac{1}{4s}ds^2 - sg_{H^{d - 1}}
$$

よって、$V_+$ の体積形式 $\omega_{V_+}$ は

$$
\omega_{V_+} = \frac{1}{2} s^{\frac{d}{2} - 1} ds \wedge \omega_{H^{d - 1}}
$$

https://zenn.dev/link/comments/6d8f1376d24ad1

https://zenn.dev/link/comments/06dccd75df0bb0

$f \in C^\infty(V_+)$ に対して

$$
\begin{aligned}
  \square f &= (-1)^{d - 1} * d * df \\
  &= (-1)^{d - 1} * d * \left(\frac{\partial f}{\partial s}ds + d_{H^{d - 1}}f\right) \\
  &= (-1)^{d - 1} * d \left(2s^{\frac{d}{2}}\frac{\partial f}{\partial s}\omega_{H^{d - 1}} + \frac{1}{2}s^{\frac{d}{2} - 2}ds \wedge *_{H^{d - 1}}d_{H^{d - 1}}f\right) \\
  &= (-1)^{d - 1} * \left(\left[2\frac{\partial}{\partial s}\left(s^{\frac{d}{2}}\frac{\partial f}{\partial s}\right) - \frac{1}{2}s^{\frac{d}{2} - 2}\Delta_{H^{d - 1}}f\right]ds \wedge \omega_{H^{d - 1}}\right) \\
  &= 2s^{-\frac{d}{2} + 1} \left[2\frac{\partial}{\partial s}\left(s^{\frac{d}{2}}\frac{\partial f}{\partial s}\right) - \frac{1}{2}s^{\frac{d}{2} - 2}\Delta_{H^{d - 1}}f\right] \\
  &= 4s^{-\frac{d}{2} + 1}\frac{\partial}{\partial s}\left(s^{\frac{d}{2}}\frac{\partial f}{\partial s}\right) - \frac{1}{s}\Delta_{H^{d - 1}}f
\end{aligned}
$$

$P \coloneqq 4s^{-\frac{d}{2} + 1}\frac{d}{ds}s^{\frac{d}{2}}\frac{d}{ds} = 4s\frac{d^2}{ds^2} + 2d\frac{d}{ds}$ とする

$$
P^* = 4\frac{d}{ds}s^{\frac{d}{2}}\frac{d}{ds}s^{-\frac{d}{2} + 1} = 4s\frac{d^2}{ds^2} + (8 - 2d)\frac{d}{ds}
$$

$\varphi \in \mathcal{S}(V)$ に対して

$$
\begin{aligned}
  M(\square \varphi)(s) &= \int_{\mathcal{O}_{\sqrt{s}}^+} (\square \varphi)(v) d\mu_{\sqrt{s}}(v) \\
  &= \frac{1}{2} s^{\frac{d}{2} - 1} \int_{H^{d - 1}} (\square \varphi)(\sqrt{s}v) \omega_{H^{d - 1}} \\
  &= \frac{1}{2} s^{\frac{d}{2} - 1} \int_{H^{d - 1}} \left(P_s - \frac{1}{s}\Delta_{H^{d - 1}, v}\right)\varphi(\sqrt{s}v) \omega_{H^{d - 1}} \\
  &= \frac{1}{2} s^{\frac{d}{2} - 1} P \int_{H^{d - 1}} \varphi(\sqrt{s}v) \omega_{H^{d - 1}} - \frac{1}{2} s^{\frac{d}{2} - 2} \int_{H^{d - 1}} d_v *_v d_v \varphi(\sqrt{s}v) \\
  &= \frac{1}{2} s^{\frac{d}{2} - 1} P \int_{H^{d - 1}} \varphi(\sqrt{s}v) \omega_{H^{d - 1}} \\
  &= P^* \left(\frac{1}{2} s^{\frac{d}{2} - 1} \int_{H^{d - 1}} \varphi(\sqrt{s}v) \omega_{H^{d - 1}}\right) \\
  &= (P^* M\varphi)(s)
\end{aligned}
$$

# $(\square^n \varphi)(0)$ の軌道積分 $M\varphi$ による表現

$(M\varphi)(x)$ の特異部分 $f(x)$ の定数項を取り出す操作は

$$
E_0(M\varphi) \coloneqq f(0) = \begin{cases}
  \frac{1}{(d / 2 - 1)!} \lim_{x \to +0} x\frac{d^{d / 2}}{dx^{d / 2}}M\varphi(x) &\quad (d \text{ は偶数}) \\
  \frac{1}{(d - 2)!} \left.\frac{d^{d - 2}}{dy^{d - 2}}\right|_{y = 0}M\varphi(y^2) &\quad (d \text{ は奇数})
\end{cases}
$$

と表せる。$d = 1$ なら $E_0(M\varphi) = \frac{1}{2}\varphi(0)$。$d$ が $3$ 以上の奇数なら

$$
E_0(M\varphi) = -\frac{1}{2} H_{\text{even}}(0, 0) \int_0^1 (v^2 - 1)^{\frac{d - 3}{2}} \, dv
$$

$H_{\text{even}}(0, 0) = \psi(0, 0) = \sigma(S^{d - 2})\varphi(0)$。$d$ が偶数なら

$$
E_0(M\varphi) = -c_{0, 0}H_1(0, 0) = -c_{0, 0}H_\text{even}(0, 0) = -c_{0, 0}\sigma(S^{d - 2})\varphi(0)
$$

$m \coloneqq \frac{d}{2} - 1$ とすると

$$
\begin{aligned}
  P_0(\cosh\alpha) &= \left(\frac{\mathrm{cosh}\alpha - 1}{2}\right)^m \\
  &= \sinh^{2m}\frac{\alpha}{2} \\
  &= 2^{-2m} \sum_{j = 0}^{2m} (-1)^j \binom{2m}{j} e^{(m - j)\alpha} \\
  &= 2^{-2m} \left[(-1)^m \binom{2m}{m} + 2\sum_{j = 0}^{m - 1} (-1)^j \binom{2m}{j} \mathrm{cosh}{(m - j)\alpha}\right]
\end{aligned}
$$

よって、$c_{0, 0} = (-1)^m 2^{-2m} \binom{2m}{m}$。いずれにせよ、$C_d \ne 0$ が存在して、$\varphi(0) = C_d E_0(M\varphi)$

$$
\begin{aligned}
  (\square^n \varphi)(0) &= C_d E_0(M(\square^n \varphi)) \\
  &= C_d E_0((P^*)^n M\varphi) \\
  &= C_d 4^n \overbrace{\left(\frac{d}{2} + n - 1\right) \cdots \left(\frac{d}{2}\right)}^n f^{(n)}(0)
\end{aligned}
$$

# 前進基本解の軌道上での表現

前進基本解 $E_+(x, m^2) \in \mathcal{S}'(V)$ は $e_+(s, m^2) \in (M\mathcal{S}(V))'$ を用いて

$$
\langle E_+(x, m^2), \varphi \rangle = \langle e_+(s, m^2), M\varphi \rangle \quad (\varphi \in \mathcal{S}(V))
$$

と表せる

$\varphi \in \mathcal{S}(V)$ に対して

$$
\begin{aligned}
  \langle E_+(x, m^2), \varphi \rangle &= 2 (2\pi)^{-d + 1} \int_{\mathcal{O}_m^+} d\mu(p) \int_{x \in V, x_0 > 0} \sin(px) \varphi(x) \, dx \\
  &= 2 (2\pi)^{-d + 1} \int_{\mathcal{O}_m^+} d\mu(p) \int_{x \in V_+} \sin(px) \varphi(x) \, dx \\
  &= 2 (2\pi)^{-d + 1} \int_{\mathcal{O}_m^+} d\mu(p) \int_{x \in V_+} \sin(p_0\sqrt{x^2}) \varphi(x) \, dx \\
  &= (2\pi)^{-d + 1} \int \frac{1}{E(p')} \, dp' \int_{x \in V_+} \sin(E(p')\sqrt{x^2}) \varphi(x) \, dx \\
  &= (2\pi)^{-d + 1} \int \frac{1}{E(p')} \, dp' \int_0^\infty \sin(E(p')\sqrt{s}) \, ds \int_{x \in \mathcal{O}_{\sqrt{s}}} \varphi(x) \, d\mu(x) \\
  &= (2\pi)^{-d + 1} \int \frac{1}{E(p')} \, dp' \int_0^\infty \sin(E(p')\sqrt{s}) (M\varphi)(s) \, ds
\end{aligned}
$$

よって、$e_+(s, m^2) \coloneqq (2\pi)^{-d + 1} \int \frac{1}{E(p')} \sin(E(p')\sqrt{s}) \, dp'$ とすれば良い。ただし、$E(p') \coloneqq \sqrt{|p'|^2 + m^2}$

# $SO(1, d - 1)$ 不変な超関数

$V \coloneqq (\mathbb{R}^d, x_0^2 - x_1^2 - \cdots - x_{d - 1}^2)$
$G \coloneqq SO(V)$
$G_\mathbb{C} \coloneqq SO(V \otimes \mathbb{C})$

一般の $\mathcal{D}'(V)^G$ は難しかったので、$\{ u \in \mathcal{S}'(V) \mid \mathrm{supp}u \subset \overline{V}_+ \}^G$ を調べる

$\mathrm{int}\{ H_{\overline{V}_+} < \infty \} = V_-$。まず、$\partial V_-$ との距離 $\Delta$ は

$$
\Delta(\eta) = \frac{-\eta_0 - |\eta'|}{\sqrt{2}} \quad (\eta \in V_-)
$$

を示す

$$
\begin{aligned}
  \Delta(\eta)^2 &= \inf_{b_0 \in \mathbb{R}_{\le 0}, |b'| = |b_0|} ((\eta_0 - b_0)^2 + |\eta' - b'|^2) \\
  &= \inf_{b_0 \in \mathbb{R}_{\le 0}} ((\eta_0 - b_0)^2 + (|\eta'| + b_0)^2) \\
  &= \inf_{b_0 \in \mathbb{R}_{\le 0}} (2b_0^2 + 2(|\eta'| - \eta_0)b_0 + \eta_0^2 + |\eta'|^2) \\
  &= \frac{1}{2}(\eta_0 + |\eta'|)^2
\end{aligned}
$$

$u \in \mathcal{S}'(V)$ は $G$ 不変で、$\mathrm{supp}u \subset \overline{V}_+$ とする。Paley-Wiener-Schwartz の定理から、正則関数 $\hat{u}: \mathcal{T} = V - iV_+ \to \mathbb{C}$ ができる。$\hat{u}$ は $G$ 不変で、Vladimirov の評価式から

$$
|\hat{u}(\zeta)| \le C_0 (1 + |\zeta|)^{N_0} \Delta(\mathrm{Im}\zeta)^{-M_0} \quad (\zeta \in \mathcal{T})
$$

$g \in G_\mathbb{C}$, $\zeta, g^{-1}\zeta \in \mathcal{T}$ ならば

$$
\hat{u}(\zeta) = \hat{u}(g^{-1}\zeta)
$$

を示せば、$G_\mathbb{C}$ 不変な $\hat{u}: \tilde{\mathcal{T}}_1 = \{ \zeta \in V_\mathbb{C} \mid \zeta^2 \not\in \mathbb{R}_{\ge 0} \} \to \mathbb{C}$ まで拡張できることがわかる

$X \coloneqq \{ h \in G_\mathbb{C} \mid h^{-1}\zeta \in \mathcal{T} \}$ は連結で、$e, g \in X$。$X \ni h \mapsto \hat{u}(h^{-1}\zeta)$ は $G$ 上一定だから、一定

$q: \{ \mathrm{Im}t < 0 \} \ni t \mapsto t^2 \in \mathbb{C} \setminus \mathbb{R}_{\ge 0}$ は同型で

$$
F(s) \coloneqq \hat{u}(q^{-1}(s), 0, \dots, 0) \quad (s \in \mathbb{C} \setminus \mathbb{R}_{\ge 0})
$$

とすると、$G_\mathbb{C}$ 不変性から

$$
\hat{u}(\zeta) = F(\zeta^2) \quad (\zeta \in \tilde{\mathcal{T}}_1)
$$

$d$ を $\mathbb{R}_{\ge 0}$ との距離とする。$\Delta(\mathrm{Im}(t, 0, \dots, 0)) \ge \frac{d(t^2)}{2\sqrt{2}|t|} \ (\mathrm{Im}t < 0)$ を示す。$t = a - ib \ (a \in \mathbb{R}, b \in \mathbb{R}_{>0})$ とすると、$\Delta(\mathrm{Im}(t, 0, \dots, 0)) = \frac{b}{\sqrt{2}}$

$$
\begin{aligned}
  d(t^2) &= d((a^2 - b^2) - 2iab) \\
  &= \begin{cases}
    2|a|b &\quad (|a| \ge b) \\
    |t|^2 &\quad (|a| < b)
  \end{cases} \\
  & \le 2b|t|
\end{aligned}
$$

よって

$$
|F(s)| = |\hat{u}(q^{-1}(s), 0, \dots, 0)| \le C (1 + |s|)^N d(s)^{-M}
$$

$G: \mathbb{C} \setminus \mathbb{R}_{\ge 0} \to \mathbb{C}$ を $F$ の $M + 1$ 階の原始関数とすると

$$
\begin{aligned}
  \lim_{s \in \mathbb{R} + i\mathbb{R}_{>0}, s \to x} &G(s) \eqqcolon G(x + i0) &\quad (x > 0) \\
  \lim_{s \in \mathbb{R} + i\mathbb{R}_{<0}, s \to x} &G(s) \eqqcolon G(x - i0) &\quad (x > 0) \\
  \lim_{s \to 0} &G(s)
\end{aligned}
$$

が存在する。Cauchy の積分公式から

$$
G^{(N + M + 2)}(s) = \frac{(N + M + 2)!}{2\pi i} \int_0^\infty \frac{G(x + i0) - G(x - i0)}{(x - s)^{N + M + 3}} \, dx \quad (s \in \mathbb{C} \setminus \mathbb{R}_{\ge 0})
$$

$s_0 \in \mathbb{C} \setminus \mathbb{R}_{\ge 0}$ を固定する。$k \ge 0$, $s \in \mathbb{C} \setminus \mathbb{R}_{\ge 0}$, $x \in \mathbb{R}_{\ge 0}$ に対して

$$
\begin{aligned}
  \Psi_k(s, x) &\coloneqq \overbrace{\int_{s_0}^s ds \ \dots \int_{s_0}^s ds}^k \frac{k!}{(x - s)^{k + 1}} \\
  &= \overbrace{\int_{s_0}^s ds \ \dots \int_{s_0}^s ds}^{k - 1} \left(\frac{(k - 1)!}{(x - s)^k} - \frac{(k - 1)!}{(x - s_0)^k}\right) \\
  &= \frac{1}{x - s} - \sum_{j = 0}^{k - 1} \frac{(s - s_0)^j}{(x - s_0)^{j + 1}} \\
  &= \frac{1}{x - s} - \frac{1}{x - s} \left(1 - \left(\frac{s - s_0}{x - s_0}\right)^k\right) \\
  &= \frac{(s - s_0)^k}{(x - s)(x - s_0)^k}
\end{aligned}
$$

よって、$N + M + 1$ 次の多項式 $P$ が存在して

$$
G(s) = \frac{1}{2\pi i} \int_0^\infty (G(x + i0) - G(x - i0)) \Psi_{N + M + 2}(s, x) \, dx + P(s) \quad (s \in \mathbb{C} \setminus \mathbb{R}_{\ge 0})
$$

$s \in \mathbb{C} \setminus \mathbb{R}_{\ge 0}$ に対して

$$
\begin{aligned}
  F(s) &= G^{(M + 1)}(s) \\
  &= \frac{1}{2\pi i} \int_0^\infty (G(x + i0) - G(x - i0)) \partial_s^{M + 1}\Psi_{N + M + 2}(s, x) \, dx + P^{(M + 1)}(s)
\end{aligned}
$$

$$
\begin{aligned}
  \partial_s^{M + 1}\Psi_{N + M + 2}(s, x) &= \overbrace{\int_{s_0}^s ds \ \dots \int_{s_0}^s ds}^{N + 1} \frac{(N + M + 2)!}{(x - s)^{N + M + 3}} \\
  &= (-1)^{M + 1} \partial_x^{M + 1} \left[\overbrace{\int_{s_0}^s ds \ \dots \int_{s_0}^s ds}^{N + 1} \frac{(N + 1)!}{(x - s)^{N + 2}}\right] \\
  &= (-1)^{M + 1} \partial_x^{M + 1} \Psi_{N + 1}(s, x)
\end{aligned}
$$

$s \in \mathbb{C} \setminus \mathbb{R}_{\ge 0}$ に対して

$$
\begin{aligned}
  F(s) &= \frac{1}{2\pi i} \int_0^\infty d_x^{M + 1}(G(x + i0) - G(x - i0)) \Psi_{N + 1}(s, x) \, dx + P^{(M + 1)}(s) \\
  &= \frac{1}{2\pi i} \langle F(x + i0) - F(x - i0), \Psi_{N + 1}(s, x) \rangle + P^{(M + 1)}(s) \\
  &= (s - s_0)^{N + 1} \left\langle \frac{\rho(x)}{(x - s_0)^{N + 1}}, \frac{1}{x - s} \right\rangle + Q(s)
\end{aligned}
$$

ただし、$\rho(x) \coloneqq \frac{1}{2\pi i}(F(x + i0) - F(x - i0)) \in \mathcal{S}'(\mathbb{R})$, $Q(s) \coloneqq P^{(M + 1)}(s)$。$\mathrm{supp}\rho \subset \mathbb{R}_{\ge 0}$ であり、$Q$ は $N$ 次の多項式

$$
\hat{u}(\zeta) = F(\zeta^2) = \left\langle \frac{\rho(x)}{(x - s_0)^{N + 1}}, (\zeta^2 - s_0)^{N + 1} \frac{1}{x - \zeta^2} \right\rangle + Q(\zeta^2)
$$

$e_0 \coloneqq (1, 0, \dots, 0) \in V_+$ とする。$\xi \in V$ に対して、$\mathcal{S}'(V)$ 内で

$$
\begin{aligned}
  \hat{u}(\xi) &= \lim_{\varepsilon \to +0} \hat{u}(\xi - i\varepsilon e_0) \\
  &= \left\langle \frac{\rho(x)}{(x - s_0)^{N + 1}}, \langle (\mathcal{F}_v E_+(v, x))(\xi), (\xi^2 - s_0)^{N + 1} \psi(\xi) \rangle \right\rangle + \int Q(\xi^2)\psi(\xi) \, d\xi
\end{aligned}
$$

$$
u(\varphi) = \left\langle \frac{\rho(x)}{(x - s_0)^{N + 1}}, \langle E_+(v, x), (-\square_v - s_0)^{N + 1} \varphi(v) \rangle \right\rangle + (Q(-\square)\varphi)(0)
$$

# $\overline{V}_+$ 上の準不変測度

可測空間 $X$ 上の測度 $\mu, \nu$ が同値とは、任意の可測集合 $A \subset X$ に対して、$\mu(A) = 0 \Leftrightarrow \nu(A) = 0$ が成り立つことをいう

$G \curvearrowright X$ とする。$X$ 上の測度 $\nu$ が準不変とは、任意の $g \in G$ に対して、$\nu$ と $g\nu$ が同値なことをいう

以降、測度は全て正則 Borel 測度とする

$G$: Lie 群
$H \subset G$: 閉部分群
$G / H$ 上の非自明な $G$ 不変測度が存在するとする。これは、$H \curvearrowright |\wedge^{\mathrm{top}} (\mathfrak{g} / \mathfrak{h})^*|$ が自明なことと同値。$\Delta_G|_H = \Delta_H$ とも同値。$G$, $H$ が連結で $\mathfrak{g}, \mathfrak{h}$ の根基が冪零ならば十分。$G / H$ 上の非自明な $G$ 不変測度は $\mathbb{R}_{>0}$ 倍を除いて一意的

$\mu$ は $G / H$ 上の非自明な $G$ 不変測度とする。$\pi_*: C_c(G) \ni f \mapsto (x \mapsto \int_H f(xh) \, dh) \in C_c(G / H)$ は $G$ 同変かつ全射

$$
(\pi^*\mu)(f) \coloneqq \int_{G / H} \pi_* f \, d\mu \quad (f \in C_c(G))
$$

は $G$ 不変だから、$G$ 上の (左) Haar 測度と $\mathbb{R}_{>0}$ 倍を除いて一致する

$G / H$ 上の非自明な $G$ 不変測度が存在するとする。$G / H$ 上の準不変測度は、$G$ 不変測度と同値

$\mu$ は $G / H$ 上の準不変測度とする。$\pi^*\mu$ は準不変だから、$H = 1$ として良い。$A \subset G$ を Borel 集合とする。$\mu(A) = 0 \Leftrightarrow \int_G \mu(gA) \, dg = 0$。$\int_G \mu(gA) \, dg \in [0, \infty]$ なことに注意

$$
\begin{aligned}
  \int_G \mu(gA) \, dg &= \int_G dg \int_{x \in gA} \, d\mu(x) \\
  &= \int_G d\mu(x) \int_{g \in xA^{-1}} \, dg \\
  &= \mu(G) \mu_G(A^{-1})
\end{aligned}
$$

ただし、$\mu_G$ は $G$ 上の (左) Haar 測度。よって、$\mu(A) = 0 \Leftrightarrow \mu_G(A^{-1}) = 0 \Leftrightarrow \mu_G(A) = 0$

https://en.wikipedia.org/wiki/Disintegration_theorem

$B = \mathbb{R}^n$, $E = \mathbb{R}^m$
$\pi: E \to B$: 可測
$\mu$: $E$ 上の確率測度
$\pi_*\mu$-a.e. の $b \in B$ に対して、$E_b \coloneqq \pi^{-1}(b)$ 上の確率測度 $\mu_b$ が存在して、任意の Borel 集合 $X \subset E$ に対して、$b \mapsto \mu_b(X_b)$ は可測かつ

$$
\mu(X) = \int_B \mu_b(X_b) \, d(\pi_*\mu)(b)
$$

略記すると、$\mu = \int_B \mu_b \, d(\pi_*\mu)(b)$。また、$\mu_b$ は $\pi_*\mu$-a.e. で一意的

$C_0(E)$ は可分だから、可算稠密部分集合 $\mathcal{V} \subset C_0(E)$ が取れる。$\mathcal{V}$ は $\mathbb{Q}$ 線形部分空間として良い。$f \in \mathcal{V}$ とすると、$\pi_*(f\mu)$ は $\pi_*\mu$ に対して絶対連続だから

$$
\lambda_f \coloneqq \frac{d(\pi_*(f\mu))}{d(\pi_*\mu)} \in L^1(B, \pi_*\mu)
$$

が取れる。代表元 $\lambda_f: B \to \mathbb{R}$ を選択する。$\pi_*\mu$-零集合 $N \subset B$ が存在して、$b \in B \setminus N$ ならば

$$
\begin{aligned}
  \lambda_{af + bg}(b) &= a\lambda_f(b) + b\lambda_g(b) &\quad (a, b \in \mathbb{Q}, f, g \in \mathcal{V}) \\
  \lambda_f(b) &\ge 0 &\quad (f \in \mathcal{V}, f \ge 0) \\
  |\lambda_f(b)| &\le \|f\|_\infty &\quad (f \in \mathcal{V})
\end{aligned}
$$

$b \in B \setminus N$ に対して、$\mathcal{V} \ni f \mapsto \lambda_f(b) \in \mathbb{R}$ は正値な有界線形汎関数 $\mu_b: C_0(E) \to \mathbb{R}$ に一意的に拡張する。$f \in \mathcal{V}$ かつ $A \subset B$ が Borel 集合ならば

$$
\int_A d(\pi_*\mu)(b) \int f \, d\mu_b = \int_A \lambda_f(b) \, d(\pi_*\mu)(b) = \int_{\pi^{-1}(A)} f \, d\mu
$$

極限を取れば、$f \in C_0(E)$ で成り立つ。さらに、任意の開集合 $X \subset E$ に対して、$1_X$ を近似すれば

$$
\int_A \mu_b(X) \, d(\pi_*\mu)(b) = \mu(\pi^{-1}(A) \cap X)
$$

極限を取れば、$X$ が Borel 集合で成り立つ。よって、任意の Borel 集合 $Z \subset B$ に対して

$$
\int_A \mu_b(\pi^{-1}(Z)) \, d(\pi_*\mu)(b) = \mu(\pi^{-1}(A \cap Z)) = \int_A 1_Z(b) \, d(\pi_*\mu)(b)
$$

よって、$\pi_*\mu$-a.e. で $\mu_b(\pi^{-1}(Z)) = 1_Z(b)$。$Z = B$ とすれば、$\pi_*\mu$-a.e. で $\mu_b(E) = 1$。また、$U_i \subset B$ を可算開基とすると、$\pi_*\mu$-a.e. で

$$
\mu_b(\pi^{-1}(U_i)) = 1_{U_i}(b) \quad (i = 1, 2, \dots)
$$

よって、$\pi_*\mu$-a.e. で

$$
\mu_b(E \setminus E_b) \le \sum_{b \not\in U_i} \mu(\pi^{-1}(U_i)) = 0
$$

総合すると、$\mu_b$ は $\pi_*\mu$-a.e. で $E_b$ 上の確率測度になる

https://ja.wikipedia.org/wiki/%E3%83%87%E3%82%A3%E3%83%B3%E3%82%AD%E3%83%B3%E6%97%8F#%E3%83%87%E3%82%A3%E3%83%B3%E3%82%AD%E3%83%B3%E6%97%8F%E5%AE%9A%E7%90%86

最後に一意性を示す。$\tilde{\mu}_b$ も条件を満たすとする。任意の Borel 集合 $X \subset E$ と $A \subset B$ に対して

$$
\int_A \mu_b(X_b) \, d(\pi_*\mu)(b) = \int_A \tilde{\mu}_b(X_b) \, d(\pi_*\mu)(b)
$$

よって、$\pi_*\mu$-a.e. で $\mu_b(X_b) = \tilde{\mu}_b(X_b)$。$W_j \subset E$ を可算開基とし、$W_j$ が生成する乗法族を $\mathcal{W}$ とする。$\pi_*\mu$-a.e. で

$$
\mu_b(W_b) = \tilde{\mu}_b(W_b) \quad (\forall W \in \mathcal{W})
$$

よって、$\pi_*\mu$-a.e. で

$$
\{ W_b \mid W \in \mathcal{W} \} \subset \{ F \subset E_b \mid F \text{ は Borel 集合で } \mu_b(F) = \tilde{\mu}_b(F) \}
$$

右辺は Dynkin 族で、左辺は乗法族かつ $\sigma$-加法族 $E_b$ を生成する

$\nu$: $\overline{V}_+$ 上の準不変な有限測度
$c \ge 0$ と $\mathbb{R}_{\ge 0}$ 上の有限測度 $\rho$ と $f \in L^1(\overline{V}_+ \setminus \{0\}, \int_{s \ge 0} \mu_{\sqrt{s}} \, d\rho(s))$ で $f > 0 \ (\int_{s \ge 0} \mu_{\sqrt{s}} \, d\rho(s)\text{-a.e.})$ なものが存在して

$$
\nu(E) = c \delta(E \cap \{0\}) + \int_{s \ge 0} d\rho(s) \int_{E_s} f(v) \, d\mu_{\sqrt{s}}(v) \quad (E \subset \overline{V}_+ \text{ は Borel 集合})
$$

ただし、$E_s \coloneqq E \cap \mathcal{O}_{\sqrt{s}}$ で $\mu_{\sqrt{s}}$ は $\mathcal{O}_{\sqrt{s}}$ 上の標準的な不変測度。略記すると、$\nu = c \delta + \int_{s \ge 0} d\rho(s) f(v) \mu_{\sqrt{s}}(v)$

$\nu - \nu(\{0\})\delta$ を考えれば、$\nu(\{0\}) = 0$ として良い。$s: \overline{V}_+ \setminus \{0\} \ni v \mapsto v^2 \in \mathbb{R}_{\ge 0}$ とする。$\rho \coloneqq s_*\nu$ は $\mathbb{R}_{\ge 0}$ 上の有限測度。$\nu$ が $\int_{s \ge 0} \mu_{\sqrt{s}} \, d\rho(s)$ と同値なことを示せば良い。分解定理から、$s \ge 0$ に対して、$\mathcal{O}_{\sqrt{s}}$ 上の確率測度 $\nu_s$ が存在して

$$
\nu = \int_{s \ge 0} \nu_s \, d\rho(s)
$$

$\rho$-a.e. で $\nu_s$ が準不変なことを示したいが、複雑なので、以下のように回避する。$\alpha \in L^1(G)$ で $\alpha > 0$ なものを固定する

$$
\tilde{\nu} \coloneqq \int_G \alpha(g) (g\nu) \, dg
$$

と定義すると、$\nu$ は $\tilde{\nu}$ と同値

$$
\tilde{\nu} = \int_G \alpha(g) \, dg \int_{s \ge 0} g\nu_s \, d\rho(s) = \int_{s \ge 0} d\rho(s) \int_G \alpha(g) (g\nu_s) \, dg \eqqcolon \int_{s \ge 0} \tilde{\nu}_s \, d\rho(s)
$$

$\tilde{\nu}_s$ が準不変なことを示す

$$
\begin{aligned}
  \tilde{\nu}_s(E) &= \int_G \alpha(g) \nu_s(g^{-1}E_s) \, dg \\
  &= \int_G \alpha(g) \, dg \int_{x \in g^{-1}E_s} d\nu_s(x) \\
  &= \int_{\mathcal{O}_{\sqrt{s}}} d\nu_s(x) \int_G \alpha(g) 1_{E_s}(gx) \, dg \\
  &= C \int_{\mathcal{O}_{\sqrt{s}}} d\nu_s(x) \int_{E_s} d\mu_{\sqrt{s}}(y) \int_{G_x} \alpha(g(y, x)h) \, dh \\
  &= C \int_{E_s} d\mu_{\sqrt{s}}(y) \int_{\mathcal{O}_{\sqrt{s}}} d\nu_s(x) \int_{G_x} \alpha(g(y, x)h) \, dh \\
  &= C \int_{E_s} d\mu_{\sqrt{s}}(y) \int_{\mathcal{O}_{\sqrt{s}}} d\nu_s(x) \int_{G_{x_0}} \alpha(g(y, x_0)h g(x, x_0)^{-1}) \, dh
\end{aligned}
$$

ただし、可測関数 $g(y, x): \mathcal{O}_{\sqrt{s}} \times \mathcal{O}_{\sqrt{s}} \to G$ は $g(y, x)x = y$ なるように取り、$x_0 \in \mathcal{O}_{\sqrt{s}}$ は適当に固定する

$A \subset \overline{V}_+ \setminus \{0\}$ を Borel 集合とすると

$$
\begin{aligned}
  &\int_{s \ge 0} \mu_{\sqrt{s}}(A_s) \, d\rho(s) = 0 \\
  &\quad \Leftrightarrow \rho\text{-a.e. で } \mu_{\sqrt{s}}(A_s) = 0 \\
  &\quad \Leftrightarrow \rho\text{-a.e. で } \tilde{\nu}_s(A_s) = 0 \\
  &\quad \Leftrightarrow \tilde{\nu}(A) = 0 \\
  &\quad \Leftrightarrow \nu(A) = 0
\end{aligned}
$$

# 真空の一意性

https://zenn.dev/link/comments/85b993ae05292a

Wightman QFT を考える

$\mathcal{H}$ の $V$ 不変空間 $\mathcal{H}^V$ が $1$ 次元なことと、任意の $n, m \ge 0$ と $a \in V_\mathrm{space}$ に対して

$$
\mathcal{W}_{n + m}(v_1, \dots, v_n, w_1 - \lambda a, \dots, w_m - \lambda a) \xrightarrow{\lambda \to \infty} \mathcal{W}_n(v_1, \dots, v_n) \mathcal{W}_m(w_1, \dots, w_m)
$$

が成り立つことは同値

まず、$a \in V_\mathrm{space}$ ならば WOT で $U(\lambda a) \xrightarrow{\lambda \to \infty} \mathrm{pr}_{\mathcal{H}^V}$ を示す

$$
U(x) = \int_{\overline{V}_+} e^{ipx} \, dE
$$

とすると、$\mathrm{pr}_{\mathcal{H}^V} = E(\{0\})$。これは、一般に

$$
\begin{aligned}
  \left(\int f \, dE\right)x = 0 &\Leftrightarrow \|\left(\int f \, dE\right)x\| = 0 \\
  &\Leftrightarrow \int |f|^2 \, dE_{x, x} = 0
\end{aligned}
$$

が成り立つことから従う。$\Phi, \Psi \in \mathcal{H}$ に対して

$$
\int_{\overline{V}_+ \setminus \{0\}} e^{i\lambda pa} \, dE_{\Phi, \Psi} \xrightarrow{\lambda \to \infty} 0
$$

を示せば良い。$U(g)U(x)U(g)^{-1} = U(gx) \ (g \in G, x \in V)$ だから

$$
U(g)E(A)U(g)^{-1} = E(gA) \quad (g \in G, A \subset \overline{V}_+ \text{ は Borel 集合})
$$

$$
\begin{aligned}
  \int_{\overline{V}_+ \setminus \{0\}} e^{i\lambda pa} \, dE_{\Phi, \Psi} &= \int_{\overline{V}_+ \setminus \{0\}} e^{-i\lambda(\Lambda p)_1\sqrt{-a^2}} \, dE_{\Phi, \Psi} \\
  &= \int_{\overline{V}_+ \setminus \{0\}} e^{-i\lambda\sqrt{-a^2}p_1} \, dE_{\Phi', \Psi'} \\
  &= \int e^{-i\lambda\sqrt{-a^2}p_1} \, d(p_{1, *}(E_{\Phi', \Psi'}|_{\overline{V}_+ \setminus \{0\}}))
\end{aligned}
$$

ただし、$\Lambda \in G$ は $\Lambda a = (0, \sqrt{-a^2}, 0, \dots, 0)$ なるように取り、$\Phi' \coloneqq U(\Lambda)\Phi$, $\Psi' \coloneqq U(\Lambda)\Psi$ とした

https://en.wikipedia.org/wiki/Riemann%E2%80%93Lebesgue_lemma

Riemann–Lebesgue の補題から、$p_{1, *}(E_{\Phi', \Psi'}|_{\overline{V}_+ \setminus \{0\}})$ が絶対連続なことを示せば良い。$\mathcal{S}(\mathcal{R})$ は可分だから、$\mathcal{H}$ も可分。$\{ e_i \}_{i = 1}^\infty \subset \mathcal{H}$ を正規直交基底とすると

$$
\nu \coloneqq \sum_{i = 1}^\infty \frac{1}{2^i} E_{e_i, e_i}
$$

は $\overline{V}_+$ 上の確率測度で、任意の Borel 集合 $A \subset \overline{V}_+$ に対して、$E(A) = 0 \Leftrightarrow E(A)e_i = 0 \ (i = 1, 2, \dots) \Leftrightarrow \nu(A) = 0$。また、任意の $g \in G$ と Borel 集合 $A \subset \overline{V}_+$ に対して

$$
\nu(gA) = 0 \Leftrightarrow E(gA) = 0 \Leftrightarrow E(A) = 0 \Leftrightarrow \nu(A) = 0
$$

だから $\nu$ は準不変。よって

$$
\nu = c_0\delta + \int_{s \ge 0} d\rho(s) f_0(v) \mu_{\sqrt{s}}(v)
$$

と表せる。ただし、$c_0 \ge 0$ で $\rho$ は $\mathbb{R}_{\ge 0}$ 上の有限測度であり、$f_0 \in L^1(\overline{V}_+ \setminus \{0\}, \int_{s \ge 0} \mu_{\sqrt{s}} \, d\rho(s))$ は $f_0 > 0 \ (\int_{s \ge 0} \mu_{\sqrt{s}} \, d\rho(s)\text{-a.e.})$ を満たす。$E_{\Phi', \Psi'}$ は $\nu$ に対して絶対連続だから、$c \ge 0$ と $f \in L^1(\overline{V}_+ \setminus \{0\}, \int_{s \ge 0} \mu_{\sqrt{s}} \, d\rho(s))$ があって

$$
E_{\Phi', \Psi'} = c\delta + \int_{s \ge 0} d\rho(s) f(v) \mu_{\sqrt{s}}(v)
$$

と表せる。よって、Borel 集合 $X \subset \mathbb{R}$ に対して

$$
\begin{aligned}
  (p_{1, *}(E_{\Phi', \Psi'}|_{\overline{V}_+ \setminus \{0\}}))(X) &= \int_{s \ge 0} d\rho(s) (p_{1, *}(f(v) \mu_{\sqrt{s}}(v)))(X) \\
  &= \int_{s \ge 0} d\rho(s) \int_X dp_1 \int_{\mathbb{R}^{d - 2}} f(E, p_1, p'') \frac{1}{2E} dp''
\end{aligned}
$$

ただし、$E \coloneqq \sqrt{p_1^2 + |p''|^2 + s}$

$$
\begin{aligned}
  &\mathcal{W}_{n + m}(f_1, \dots, f_n, g_1(\cdot - \lambda a), \dots, g_m(\cdot - \lambda a)) \\
  &\quad = \langle \Omega, \varphi(f_1) \cdots \varphi(f_n)U(\lambda a)\varphi(g_1) \cdots \varphi(g_m)\Omega \rangle \\
  &\quad = \langle \varphi(f_n) \cdots \varphi(f_1)\Omega, U(\lambda a)\varphi(g_1) \cdots \varphi(g_m)\Omega \rangle \\
  &\xrightarrow{\lambda \to \infty} \langle \varphi(f_n) \cdots \varphi(f_1)\Omega, \mathrm{pr}_{\mathcal{H}^V}\varphi(g_1) \cdots \varphi(g_m)\Omega \rangle
\end{aligned}
$$

$\mathrm{dim} \mathcal{H}^V = 1$ $\Rightarrow$ クラスター分解性

$$
\begin{aligned}
  &\langle \varphi(f_n) \cdots \varphi(f_1)\Omega, \mathrm{pr}_{\mathcal{H}^V}\varphi(g_1) \cdots \varphi(g_m)\Omega \rangle \\
  &\quad = \langle \varphi(f_n) \cdots \varphi(f_1)\Omega, \Omega \rangle \langle \Omega, \varphi(g_1) \cdots \varphi(g_m)\Omega \rangle \\
  &\quad = \mathcal{W}_n(f_1, \dots, f_n) \mathcal{W}_m(g_1, \dots, g_m)
\end{aligned}
$$

クラスター分解性 $\Rightarrow$ $\mathrm{dim} \mathcal{H}^V = 1$

$\mathrm{pr}_{\mathcal{H}^V} = \mathrm{pr}_{\mathbb{C}\Omega}$ から従う

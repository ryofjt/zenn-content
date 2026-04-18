---
title: "math2"
---

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
$C^\circ \coloneqq \{ n \in V^* \mid n(C) \le 0 \}$ とすると、ある $n \in \partial C^\circ$ が存在して、$n(D \setminus \{0\}) > 0$

$n_1, n_2 \in V^*$ が存在して、$n_1(D \setminus \{0\}) > 0 > n_1(C \setminus \{0\})$, $n_2(D \setminus \{0\}) > 0 > -n_2(C \setminus \{0\})$。$n_1 \in C^*$, $n_2 \not\in C^*$ だから、$n_1$ と $n_2$ を結ぶ線分を考えれば良い

# Bipolar 定理の片側への一般化

$V$: LCS over $\mathbb{R}$

$A \subset V$ に対して、$A^\circ \coloneqq \{ x^* \in V^* \mid \langle x^*, A \rangle \le 1 \}$
$B \subset V^*$ に対して、${}^\circ B \coloneqq \{ x \in V \mid \langle B, x \rangle \le 1 \}$

$$
{}^\circ(A^\circ) = \overline{\mathrm{co}}(A \cup \{0\})
$$

$\supset$ は容易。$\subset$ を示す。$x \not\in \overline{\mathrm{co}}(A \cup \{0\})$ とする。Hahn–Banach の分離定理から、$x^* \in V^*$ と $a > 0$ が存在して、$x^*(x) > a > x^*(A)$。$a = 1$ として良い。$x^* \in A^\circ$ だから、$x \not\in {}^\circ(A^\circ)$

$(V^*_\sigma)^* = V$ に注意すれば

$$
({}^\circ B)^\circ = \overline{\mathrm{co}}^\text{wk*}(B \cup \{0\})
$$

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

$V^{n + 1} / \Delta \ni (v_1, \dots, v_{n + 1}) \mapsto (v_1 - v_2, \dots, v_n - v_{n + 1}) \in V^n$ は同形で、左辺 (ゆえに右辺) には $\mathfrak{S}_{n + 1}$ が作用する

# Jost の定理

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
$(v_1, \dots, v_n) \in V^n$ は右辺の条件を満たすとする。$E \coloneqq \{ \lambda_1 v_1 + \cdots + \lambda_n v_n \mid (\lambda_1, \dots, \lambda_n) \in \mathbb{R}_{\ge 0}^n \} \subset V$ は直線を含まない closed convex cone で、$E \cap (\overline{V}_+ \cup \overline{V}_-) = \{0\}$。$\partial(\overline{V}_+)^\circ = \partial\overline{V}_- = \mathcal{O}^-_0 \cup \{0\}$ だから、$\alpha \in \mathcal{O}^+_0$ が存在して、$\alpha v_j < 0$。同様にして、$\beta \in \mathcal{O}^-_0$ が存在して、$\beta v_j < 0$。$\alpha\beta \le 0$ だが、$\alpha\beta < 0$ を示す。$\alpha\beta = 0$ と仮定すると、$c > 0$ が存在して、$\beta = -c\alpha$。これは $\alpha v_1 < 0$, $\beta v_1 < 0$ に矛盾する。よって、$W \coloneqq \mathrm{span}_\mathbb{R}\{ \alpha, \beta \}$ 上 pairing は非退化で $V = W \oplus W^\perp$ と直交分解する。$g \in SO(V_\mathbb{C})$ を

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
  &\quad \simeq \mathbb{R}^n \times \{ (\tilde{y}_1, \dots, \tilde{y}_n, 0) \mid (\tilde{y}, 0) \text{ は単調減少で } \sigma^{-1}(\tilde{y}, 0) \text{ も単調減少} \} \\
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

$(v_1, \dots, v_{n + 1}) \in E_{n + 1}^0$ とする。$g \in SO(E)$ が存在して、$(gv_i)_1 - (gv_j)_1 = (g(v_i - v_j))_1 \ne 0$。$\sigma \in \mathfrak{S}_{n + 1}$ が一意的に存在して、$-i(gv_{\sigma(1)})_1 < \cdots < -i(gv_{\sigma(n + 1)})_1$。よって、$(gv_{\sigma(1)}, \dots, gv_{\sigma(n + 1)})$ に対応する $V_\mathbb{C}^n$ の元は $\mathcal{T}^n$ に入る

(d) $K \subset \mathcal{T}^n$ はコンパクトとする。$\{ g \in SO(d, \mathbb{C}) \mid gK \subset \mathcal{T}^n \}$ は連結

$g \in SO(d, \mathbb{C})$ は $gK \subset \mathcal{T}^n$ とする。$g$ が $e$ と曲線で結べることを示せば良い。$g$ は $g = g_0 e^{iX}g_0^{-1}r \ (X \in \mathfrak{h}_*^*)$ と表せるとして良い。$g_0 = r = e$ として良い。$X$ に $tb$ が含まれる場合、$-\pi < t \le \pi$ として良い。$e^{isX}K \subset \mathcal{T}^n \ (0 \le s \le 1)$ を示す。他の場合も同様だから、$X \in \mathfrak{h}_s^\text{odd}$ とし、$X = \mathrm{diag}(tb, \theta_1 r, \dots, \theta_{(d - 3) / 2}r, 0) \ (-\pi < t \le \pi, \theta_k \in \mathbb{R})$ とする。$\underline{v} \in K$ と $1 \le j \le n$ を固定する。$v_j \eqqcolon (x_0 - i y_0, \dots, x_{d - 1} - i y_{d - 1})$ とする

$$
(y_0(s), \dots, y_{d - 2}(s), y_{d - 1}) \coloneqq -\mathrm{Im}(e^{isX}v_j)
$$

とおく。$y_0(s) > 0$ かつ $y_0(s)^2 - y_1(s)^2 - \dots - y_{d - 2}(s)^2 - y_{d - 1}^2 > 0$ を示せば良い

$$
\begin{aligned}
  F(s) &\coloneqq \sqrt{y_0(s)^2 - y_1(s)^2} \\
  G_\varepsilon(s) &\coloneqq \sqrt{y_2(s)^2 + \dots + y_{d - 2}(s)^2 + y_{d - 1}^2 + \varepsilon}
\end{aligned}
$$

とすると、$y_0(s) \pm y_1(s) > 0$ かつ $F(s)$ が上に凸で $G_\varepsilon(s)$ が下に凸を示せば良い

$$
\begin{aligned}
  \begin{pmatrix}
    y_0(s) \\
    y_1(s)
  \end{pmatrix} &= -\mathrm{Im} \left\{ \begin{pmatrix}
    \mathrm{cos}(st) & i\mathrm{sin}(st) \\
    i\mathrm{sin}(st) & \mathrm{cos}(st)
  \end{pmatrix} \begin{pmatrix}
    x_0 - iy_0 \\
    x_1 - iy_1
  \end{pmatrix} \right\} \\
  &= \begin{pmatrix}
    \mathrm{cos}(st)y_0 - \mathrm{sin}(st)x_1 \\
    -\mathrm{sin}(st)x_0 + \mathrm{cos}(st)y_1
  \end{pmatrix}
\end{aligned}
$$

$$
\begin{aligned}
  \begin{pmatrix}
    y_{2k}(s) \\
    y_{2k + 1}(s)
  \end{pmatrix} &= -\mathrm{Im} \left\{ \begin{pmatrix}
    \mathrm{cosh}(s\theta_k) & -i\mathrm{sinh}(s\theta_k) \\
    i\mathrm{sinh}(s\theta_k) & \mathrm{cosh}(s\theta_k)
  \end{pmatrix} \begin{pmatrix}
    x_{2k} - iy_{2k} \\
    x_{2k + 1} - iy_{2k + 1}
  \end{pmatrix}\right\} \\
  &= \begin{pmatrix}
    \mathrm{cosh}(s\theta_k)y_{2k} + \mathrm{sinh}(s\theta_k)x_{2k + 1} \\
    -\mathrm{sinh}(s\theta_k)x_{2k} + \mathrm{cosh}(s\theta_k)y_{2k + 1}
  \end{pmatrix}
\end{aligned}
$$

$$
y_0(s) \pm y_1(s) = (y_0 \pm y_1)\mathrm{cos}(st) - (x_1 \pm x_0)\mathrm{sin}(st)
$$

は $s = 0, 1$ で正だから、常に正

$$
F'(s) = (y_0(s)y_0'(s) - y_1(s)y_1'(s))F(s)^{-1}
$$

$$
\begin{aligned}
  F''(s) &= (y_0'(s)^2 - y_1'(s)^2)F(s)^{-1} - t^2F(s) \\
  &\quad -(y_0(s)y_0'(s) - y_1(s)y_1'(s))^2F(s)^{-3} \\
  &= -(y_0(s)y_1'(s) - y_1(s)y_0'(s))^2F(s)^{-3} - t^2F(s) \le 0
\end{aligned}
$$

$$
G_\varepsilon'(s) = (y_2(s)y_2'(s) + \dots + y_{d - 2}(s)y_{d - 2}'(s))G_\varepsilon(s)^{-1}
$$

$$
\begin{aligned}
  G_\varepsilon''(s) &= (y_2'(s)^2 + \dots + y_{d - 2}'(s)^2)G_\varepsilon(s)^{-1} \\
  &\quad +\left(\sum_k \theta_k^2(y_{2k}(s)^2 + y_{2k + 1}(s)^2)\right)G_\varepsilon(s)^{-1} \\
  &\quad -(y_2(s)y_2'(s) + \dots + y_{d - 2}(s)y_{d - 2}'(s))^2 G_\varepsilon(s)^{-3} \\
  &\ge (y_2'(s)^2 + \dots + y_{d - 2}'(s)^2)(y_{d - 1}^2 +\varepsilon)G_\varepsilon(s)^{-3} \\
  &\quad +\left(\sum_k \theta_k^2(y_{2k}(s)^2 + y_{2k + 1}(s)^2)\right)G_\varepsilon(s)^{-1} \ge 0
\end{aligned}
$$

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

# $\{ H_K < \infty \}$ の内点

$V = \mathbb{R}^n$

$A \subset V$: 凸集合
$\mathrm{int}\overline{A} = \mathrm{int}A$
$\subset$ を示せば良い。まず、$\mathrm{int}A = \emptyset$ の場合を考える。$A$ はある超平面 $H$ に含まれることを示す。そうでないとすると、一般の位置にある点 $x_0, \dots, x_n \in A$ が取れる。$A$ は凸だから、内点を持ち、矛盾する。よって、$\overline{A} \subset H$ だから、$\mathrm{int}\overline{A} = \emptyset$。次に、$a \in \mathrm{int}A$ が存在する場合を考える。$x \in \mathrm{int}\overline{A}$ とする。$x \ne a$ として良い。ある $b \in \overline{A}$ と $0 < t < 1$ が存在して、$x = ta + (1 - t)b$。$t$ を固定して、$a, b$ を動かせば、$b \in A$ として良い。あとは、$a \in \mathrm{int}A$ から $x \in \mathrm{int}A$ が従う

$K \subset V$: 空でない閉凸集合
$K$ が直線 (原点を通るとは限らない) を含まない $\Leftrightarrow$ $\{ H_K < \infty \}$ が内点を持つ

$\Leftarrow$ の対偶
$d \in V \setminus \{0\}$ と $x \in K$ が存在して、$x + td \in K \ (t \in \mathbb{R})$ とする。$\{ H_K < \infty \} \subset \mathrm{Ker}d$

$\Rightarrow$
$K^\infty \coloneqq \{ d \in V \mid K + td \subset K \ (t \ge 0) \}$ は closed convex cone。$K = \{ x \in V \mid x \le H_K \}$ だから、$K^\infty = \{ x \in V \mid \theta(x) \le 0 \ (\theta \in \{ H_K < \infty \}) \} = {}^\circ\{ H_K < \infty \}$。よって、$(K^\infty)^\circ = \overline{\{ H_K < \infty \}}$。$K^\infty$ は原点を通る直線を含まないから、$\theta_0 \in V^*$ が存在して、$\theta_0(K^\infty \setminus \{0\}) < 0$。$K^\infty \cap S$ を考えれば

$$
\theta_0 \in \mathrm{int}((K^\infty)^\circ) = \mathrm{int}\overline{\{ H_K < \infty \}} = \mathrm{int}\{ H_K < \infty \}
$$

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
$\hat{u}(\xi + i\eta) \coloneqq \widehat{e^\eta u}(\xi) \ (\xi + i\eta \in V^* + i \, \mathrm{int}\Gamma_u)$ は正則関数で、コンパクト部分集合 $M \subset \mathrm{int}\Gamma_u$ に対して、$N \ge 0$ と $C \ge 0$ が存在して

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
まず、$\widehat{e^\eta u}(\xi)$ は正則関数になることを示す。$\eta_0, \dots, \eta_n \in \mathrm{int}\Gamma_u$ は一般の位置にあるとする。それらの張る単体 $\Delta$ は $\Gamma_u$ に含まれる。$L_\Delta \subset \mathrm{int}\Delta$ をコンパクト部分集合とし、$\eta \in L_\Delta$ とすると

$$
e^\eta u = \frac{e^\eta}{e^{\eta_0} + \cdots + e^{\eta_n}}(e^{\eta_0}u + \cdots + e^{\eta_n}u)
$$

$$
\Phi_\eta(x) \coloneqq \frac{e^\eta}{e^{\eta_0} + \cdots + e^{\eta_n}} = \frac{1}{e^{\eta_0 - \eta} + \cdots + e^{\eta_n - \eta}} = f \circ (\eta_0 - \eta, \dots, \eta_n - \eta)
$$

ただし、$f(t_0, \dots, t_n) \coloneqq \frac{1}{e^{t_0} + \cdots + e^{t_n}}$

$$
\varepsilon|x| \le \max_j \langle \eta_j - \eta, x \rangle \quad (\eta \in L_\Delta)
$$

を示す。ある $x_0 \in S$ と $\eta' \in L_\Delta$ が存在して、$\langle \eta_j - \eta', x_0 \rangle \le 0$ と仮定する。$\Delta - \eta'$ が原点を通るある閉半平空間に含まれることになり矛盾する。よって、$e^{\eta_0 - \eta} + \cdots + e^{\eta_n - \eta} \ge \max_j e^{\langle \eta_j - \eta, x \rangle} = e^{\max_j \langle \eta_j - \eta, x \rangle} \ge e^{\varepsilon|x|}$。また、$|\alpha|$ 次の多項式 $P_\alpha$ があって、$\partial_t^\alpha f = P_\alpha(e^t_0, \dots, e^t_n)(e^{t_0} + \cdots + e^{t_n})^{-|\alpha| - 1}$ だから

$$
|\partial_x^\alpha \Phi_\eta(x)| \le C_\alpha e^{-\varepsilon|x|} \quad (\eta \in L_\Delta)
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

次に評価を示す。$B_r \coloneqq \{ x \in V \mid |x| \le r \}$。$\rho \in C^\infty_{B_1}(V)$ は $\int \rho \, dx = 1$ とする。$\rho_\delta(x) \coloneqq \delta^{-n}\rho(x / \delta)$。$\chi_\delta(x) \coloneqq 1_{K + B_{2\delta}} * \rho_\delta = \int_{K + B_{2\delta}} \rho_\delta(x - y) \, dy \in C^\infty(V)$ とする。$\chi_\delta$ は $K + B_\delta$ 上 $1$ かつ $K + B_{3\delta}$ の外で消える。再び、$\eta_0, \dots, \eta_n \in \mathrm{int}\Gamma_u$ は一般の位置にあるとし、それらの張る単体を $\Delta$ とする。$L_\Delta \subset \mathrm{int}\Delta$ をコンパクト部分集合とする。$\xi \in V^*$, $\eta \in L_\Delta$, $\theta \in \{ H_K < \infty \}$ とすると

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
\theta x - H_K(\theta) \le 3\delta|\theta|
$$

$\delta = (1 + |\theta|)^{-1}$ とし、$W_{\xi, \eta, \theta} \coloneqq W_{\xi, \eta, \theta, (1 + |\theta|)^{-1}}$ とすると

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

# $\Gamma_u \setminus \mathrm{int}\Gamma_u$ に近づく時の振る舞い

$V = \mathbb{R}^n$

$u \in \mathcal{D}'(V)$
$U: V^* + i \, \mathrm{int}\Gamma_u \to \mathbb{C}$ を Paley–Wiener–Schwartz の定理で対応する正則関数とする。$\eta \in \Gamma_u$ とする。$M \subset \mathrm{int}\Gamma$ をコンパクト部分集合とすると、$\mathcal{S}'(V)$ 内で

$$
U(\xi + i(1 - t)\eta + it\theta) \to \widehat{e^\eta u}(\xi) \quad (\theta \in M, 0 < t \le 1, t \to 0)
$$

Fourier 変換すれば、$\mathcal{S}'(V)$ 内で

$$
e^{(1 - t)\eta + t\theta}u \to e^\eta u \quad (\theta \in M, 0 \le t \le 1, t \to 0)
$$

を示せば良い。$\theta_0, \dots, \theta_n \in \mathrm{int}\Gamma_u$ は一般の位置にあるとし、それらの張る単体を $\Delta$ とする。$\theta \in \Delta$, $0 \le t \le 1$ に対して

$$
e^{(1 - t)\eta + t\theta}u = \frac{e^{(1 - t)\eta + t\theta}}{e^\eta + e^{\theta_0} + \cdots + e^{\theta_n}}(e^\eta u + e^{\theta_0}u + \cdots + e^{\theta_n}u)
$$

$$
\Phi_{\theta, t}(x) \coloneqq \frac{e^{(1 - t)\eta + t\theta}}{e^\eta + e^{\theta_0} + \cdots + e^{\theta_n}}
$$

$(1 - t)\eta + t\theta \in \mathrm{co}\{ \eta, \theta_0, \dots, \theta_n \}$ だから、$e^x$ の凸性から、$|\Phi_{\theta, t}(x)| \le 1$。また、$\Phi_{\theta, t}(x)$ の任意階の微分は $\theta, t$ に関して一様に有界なこともわかる

特に
$K \subset V$: 閉凸集合
$u \in \mathcal{S}'(V)$ は $\mathrm{supp}u \subset K$ とする。Closed cone $\Gamma \subset V$ は $\Gamma \not\subset \{0\}$ かつ $\Gamma \setminus \{0\} \subset \mathrm{int}\{ H_K < \infty \}$ を満たすとする。$u$ に対応する正則関数を $U: V^* + i \, \mathrm{int}\Gamma_u \to \mathbb{C}$ とすると、$\mathcal{S}'(V)$ 内で

$$
U(\xi + i\eta) \to \hat{u}(\xi) \quad (\eta \in \Gamma \setminus \{0\}, \eta \to 0)
$$

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

は各変数ごとに連続。ただし、$\Gamma \coloneqq s_*(\Gamma_1 \times \Gamma_2) = \{ (x, \xi) \in T^*V \mid \exists a, b \in V, a + b = x \text{ かつ } \xi \in \Gamma_{1, a} \cap \Gamma_{2, b} \}$

$u, v \in \mathcal{D}'(V)$ とする。$s: \mathrm{supp}u \times \mathrm{supp}v \xrightarrow{+} V$ は proper とする。$P$ を定数係数の微分作用素とすると

$$
\begin{aligned}
  (Pu * v)(\varphi) &= (Pu \boxtimes v)(s^*\varphi) \\
  &= (u \boxtimes v)(P^*_x s^*\varphi) \\
  &= (u \boxtimes v)(s^*P^*\varphi) \\
  &= (P(u * v))(\varphi)
\end{aligned}
$$

# 波動方程式の前進基本解

$\square \coloneqq \partial_t^2 - \partial_x^2$ の基本解を考える。形式的には、$\square E = \delta$ とすると、$-\xi^2\hat{E} = (2\pi)^{-d/2}$ だから、$\hat{E} = -(2\pi)^{-d/2}\frac{1}{\xi^2}$

以降は厳密に構成をする。まず、$|(\xi + i\eta)^2| \ge -\eta^2 \ (\eta \in V_-)$ を示す。$SO_0(1, d - 1)$ の作用を考えると、$\eta = (\eta_0, 0)$ として良い

$$
\begin{aligned}
  |(\xi + i\eta)^2|^2 - (\eta^2)^2 &= |(\xi^2 - \eta^2) + 2i\xi\eta|^2 - (\eta^2)^2 \\
  &= (\xi_0^2 - \xi'^2 - \eta_0^2)^2 + 4\xi_0^2\eta_0^2 - \eta_0^4 \\
  &= (\xi_0^2 - \xi'^2)^2 + 2\xi'^2\eta_0^2 + 2\xi_0^2\eta_0^2 \\
  &\ge 0
\end{aligned}
$$

$$
U(\xi + i\eta) \coloneqq -(2\pi)^{-d/2}\frac{1}{(\xi + i\eta)^2} \quad (\eta \in V_-)
$$

は正則関数

$$
H_{\overline{V}_+}(\theta) = \begin{cases} 0 &\quad (\theta \in \overline{V}_-) \\
  \infty &\quad (\theta \not\in \overline{V}_-)
\end{cases}
$$

よって、$\{ H_{\overline{V}_+} < \infty \} = \overline{V}_-$

$M \subset V_-$ をコンパクト部分集合とすると

$$
|U(\xi + i\eta + i\theta)| \le C \quad (\eta \in M, \theta \in \overline{V}_-)
$$

よって、Paley–Wiener–Schwartz の定理から、対応する $E_+ \in \mathcal{D}'_{\overline{V}_+}(V)$ が構成できる

$$
E_+(\varphi) = -(2\pi)^{-d} \int \frac{1}{(\xi + i\eta)^2}\varphi(x)e^{ix(\xi + i\eta)} \, dx d\xi \quad (\eta \in V_-)
$$

$E_+$ が基本解になっていることは

$$
(\square E_+)(\varphi) = E_+(\square\varphi) = (2\pi)^{-d} \int \varphi(x)e^{ix(\xi + i\eta)} \, dx d\xi = \varphi(0)
$$

から従う

最後に、基本解で $\mathrm{supp} \subset \overline{V}_+$ なものは一意的なことを示す。$F \in \mathcal{D}'_{\overline{V}_+}(V)$ も基本解だとする。$+: \overline{V}_+ \times \overline{V}_+ \to V$ は時間成分を考えれば proper だから

$$
\begin{aligned}
  E_+ - F &= \delta * (E_+ - F) \\
  &= \square E_+ * (E_+ - F) \\
  &= \square(E_+ * (E_+ - F)) \\
  &= E_+ * \square(E_+ - F) \\
  &= 0
\end{aligned}
$$

# $d = 2$ での $E_+$ の具体形

$d = 2$ とする。$\psi \in C^\infty_c(V)$ とすると

$$
\begin{aligned}
  &E_+(\psi(t, x)) \\
  &\quad = -\frac{1}{4\pi^2} \int_{-\infty + i\eta_0}^{\infty + i\eta_0} d\zeta_0 \int_{-\infty + i\eta_1}^{\infty + i\eta_1} d\zeta_1 \int \frac{1}{\zeta_0^2 - \zeta_1^2}\psi(t, x)e^{i(t\zeta_0 - x\zeta_1)} \, dtdx \quad ((\eta_0, \eta_1) \in V_-) \\
  &\quad = -\frac{1}{8\pi^2} \int_{-\infty + i\varepsilon_0}^{\infty + i\varepsilon_0} dz \int_{-\infty + i\varepsilon_1}^{\infty + i\varepsilon_1} dw \int \frac{1}{zw}\psi(t, x)e^{i(\frac{t - x}{2}z + \frac{t + x}{2}w)} \, dtdx \quad (\varepsilon_0, \varepsilon_1 < 0) \\
  &\quad = -\frac{1}{8\pi^2} \int \psi(t, x) \, dtdx \left(\int_{-\infty + i\varepsilon_0}^{\infty + i\varepsilon_0} \frac{1}{z}e^{i\frac{t - x}{2}z} \, dz\right)\left(\int_{-\infty + i\varepsilon_1}^{\infty + i\varepsilon_1} \frac{1}{w}e^{i\frac{t + x}{2}w} \, dw\right) \quad (\varepsilon_0, \varepsilon_1 < 0)
\end{aligned}
$$

ただし、$z = \zeta_0 + \zeta_1, w = \zeta_0 - \zeta_1$ と変換した

$$
\lim_{\varepsilon \to +0} \int_{-\infty}^\infty dx \int \frac{1}{x - i\varepsilon}e^{ia(x - i\varepsilon)}\varphi(a) \, da = 2\pi i \int_0^\infty \varphi(a) \, da \quad (\varphi \in C^\infty_c(\mathbb{R}))
$$

を示す

$$
\begin{aligned}
  &\int_{-\infty}^\infty dx \int \frac{1}{x - i\varepsilon}e^{ia(x - i\varepsilon)}\varphi(a) \, da \\
  &\quad = \int_{-\infty}^\infty dx \int \frac{x}{x^2 + \varepsilon^2}e^{iax}e^{a\varepsilon}\varphi(a) \, da + i\int_{-\infty}^\infty dx \int \frac{\varepsilon}{x^2 + \varepsilon^2}e^{iax}e^{a\varepsilon}\varphi(a) \, da \\
  &\quad = \int I(a)e^{a\varepsilon}\varphi(a) \, da + \pi i \int_{-\infty}^\infty k_\varepsilon(x) \left(\int e^{a\varepsilon}\varphi(a)e^{iax} \, da\right) dx \\
  &\quad \xrightarrow{\varepsilon \to +0} \pi i \left(\int_0^\infty \varphi(a) \, da - \int_{-\infty}^0 \varphi(a) \, da\right) + \pi i \int_{-\infty}^\infty \varphi(a) \, da \\
  &\quad = 2\pi i \int_0^\infty \varphi(a) \, da
\end{aligned}
$$

ただし、$k(x) \coloneqq \frac{1}{\pi(x^2 + 1)}$, $k_\varepsilon(x) \coloneqq \frac{1}{\varepsilon}k(x / \varepsilon) = \frac{\varepsilon}{\pi(x^2 + \varepsilon^2)}$ であり

$$
I(a) \coloneqq \int_{-\infty}^\infty \frac{x}{x^2 + \varepsilon^2}e^{iax} \, dx = \begin{cases} \pi i e^{-\varepsilon a} &\quad (a > 0) \\
  0 &\quad (a = 0) \\
  -\pi i e^{\varepsilon a} &\quad (a < 0)
\end{cases}
$$

は留数定理から従う。総合すると

$$
E_+(\psi) = \frac{1}{2} \int \psi(x, t)1_{[0, \infty)}\left(\frac{t - x}{2}\right)1_{[0, \infty)}\left(\frac{t + x}{2}\right) \, dtdx = \frac{1}{2}1_{\overline{V}_+}
$$

# Wightman function の解析接続

$\mathrm{pr}: V^n \to V^n / \Delta \ni (v_1, \dots, v_n) \mapsto (v_1 - v_2, \dots, v_{n - 1} - v_n) \in V^{n - 1}$

$(P \times_G R)^{\boxtimes n} = \mathcal{R}^{\boxtimes n} \to V^n$ は $P \times \mathfrak{S}_n$ 同変 super 実ベクトル束。$P = G \ltimes V$ だから $G \times \mathfrak{S}_n$ 同変 super 実ベクトル束 $\overline{\mathcal{R}}_n \to V^n / \Delta \simeq V^{n - 1}$ を誘導する

https://zenn.dev/link/comments/2cd72a58d02e67

$G_\mathbb{C} / G \simeq SO(d, \mathbb{C}) / SO_0(1, d - 1) \simeq SO(d) / SO(d - 1) \simeq S^{d - 1}$ は単連結だから、$G \curvearrowright R$ は $G_\mathbb{C} \curvearrowright R \otimes \mathbb{C}$ に拡張する

$P_\mathbb{C} \coloneqq G_\mathbb{C} \ltimes V_\mathbb{C}$
$(P_\mathbb{C} \times_{G_\mathbb{C}} (R \otimes \mathbb{C}))^{\boxtimes n} \to V_\mathbb{C}^n$ は $P_\mathbb{C} \times \mathfrak{S}_n$ 同変 super 正則ベクトル束。$P_\mathbb{C} = G_\mathbb{C} \ltimes V_\mathbb{C}$ だから $G_\mathbb{C} \times \mathfrak{S}_n$ 同変 super 正則ベクトル束 $\overline{\mathcal{E}}_n \to V_\mathbb{C}^n / \Delta \simeq V_\mathbb{C}^{n - 1}$ を誘導する

$\mathcal{W}_n \in \mathcal{S}'((\mathcal{R}^*)^{\boxtimes n} \otimes \mathbb{C})$ は $P$ 不変だから、$G$ 不変な $W_n \in \mathcal{S}'(\overline{\mathcal{R}}_n^* \otimes \mathbb{C})$ を誘導する

$$
\mathcal{W}_n = \mathrm{pr}^*W_n
$$

$\mathrm{pr}^*: (V^*)^{n - 1} \ni (p_1, \dots, p_{n - 1}) \mapsto (p_1, p_2 - p_1, \dots, p_{n - 1} - p_{n - 2}, -p_{n - 1}) \in (V^*)^n$

$$
\mathcal{F}\mathcal{W}_n = (\mathrm{pr}^*)_*\mathcal{F}W_n
$$

$\mathrm{supp}(\mathcal{F}\mathcal{W}_n) \subset \{ (p_1, \dots, p_n) \in V^n \mid \sum_{i = 1}^n p_i = 0, \sum_{i = 1}^j p_i \in \overline{V}_+ \ (1 \le j \le n  - 1) \}$ だから $\mathrm{supp}(\mathcal{F}W_n) \subset \overline{V}_+^{n - 1}$

$$
H_{\overline{V}_+^{n - 1}}(v) = \sum_{i = 1}^{n - 1} H_{\overline{V}_+}(v_i) = \begin{cases}
  0 &\quad (v \in \overline{V}_-^{n - 1}) \\
  \infty &\quad (v \not\in (\overline{V}_-)^{n - 1})
\end{cases}
$$

$\{ H_{\overline{V}_+^{n - 1}} < \infty \} = \overline{V}_-^{n - 1}$。Paley–Wiener–Schwartz の定理から、対応する $\tilde{W}_n \in \mathcal{O}(\mathcal{T}^{n - 1}, \overline{\mathcal{E}}_n^*)$ がある。$\tilde{W}_n$ も $G$ 不変

$g \in G_\mathbb{C}$, $x, g^{-1}x \in \mathcal{T}^{n - 1}$ ならば

$$
\tilde{W}_n(x) = (g\tilde{W}_n)(x)
$$

を示せば、$G_\mathbb{C}$ 不変な $\tilde{W}_n \in \mathcal{O}(\tilde{\mathcal{T}}_{n - 1}, \overline{\mathcal{E}}_n^*)$ まで拡張できることがわかる

$X \coloneqq \{ h \in G_\mathbb{C} \mid h^{-1}x \in \mathcal{T}^{n - 1} \}$ は連結で、$e, g \in X$。$X \ni h \mapsto (h\tilde{W}_n)(x)$ は $G$ 上一定だから、一定

$\tilde{W}_n$ は $\tilde{T}_{n - 1} \cap V^{n - 1} = J_{n - 1}$ 上 $W_n$ と一致することを示す。$x \in J_{n - 1}$ とする。$\theta \coloneqq (\overbrace{e_1, \dots, e_1}^{n - 1})$ とすると、$\mathcal{D}'(J_{n - 1})$ 内で

$$
\tilde{W}_n|_{J_{n - 1}}(x - it\theta) \to W_n|_{J_{n - 1}}(x) \quad (t \to 0)
$$

よって、$\tilde{W}_n|_{J_{n - 1}} = W_n|_{J_{n - 1}}$

さらに、$\sigma \in \mathfrak{S}_n$, $x, \sigma^{-1}x \in \tilde{\mathcal{T}}^{n - 1}$ ならば

$$
\tilde{W}_n(x) = (\sigma\tilde{W}_n)(x)
$$

を示せば、$G_\mathbb{C} \times \mathfrak{S}_n$ 不変な $\tilde{W}_n \in \mathcal{O}(\bigcup_{\sigma \in \mathfrak{S}_n} \sigma\tilde{\mathcal{T}}_{n - 1}, \overline{\mathcal{E}}_n^*)$ まで拡張できることがわかる

$\tilde{\mathcal{T}}^{n - 1} \cap \sigma\tilde{\mathcal{T}}^{n - 1}$ は連結。$\tilde{\mathcal{T}}^{n - 1} \cap \sigma\tilde{\mathcal{T}}^{n - 1} \cap V_{n - 1} = J_{n - 1} \cap \sigma J_{n - 1} \ne \emptyset$。$y \in J_{n - 1} \cap \sigma J_{n - 1}$ とする。Jost の定理から、$y \in J_{n - 1} \subset V_\mathrm{space}^{n - 1}$。$q: V^{n - 1} \ni v \mapsto (v_1 + \cdots + v_{n - 1}, v_2 + \cdots + v_{n - 1}, \dots, 0) \in V^n$ とすると

$$
\tilde{W}_n(y) = W_n(y) = \mathcal{W}_n(q(y)) = \mathcal{W}_n(\sigma q(y)) = W_n(\sigma y) = \tilde{W}_n(\sigma y)
$$

# Schwinger function

$\bigcup_{\sigma \in \mathfrak{S}_{n + 1}} \sigma(\tilde{\mathcal{T}}_n) \supset E_{n + 1}^0 / \Delta$ だから

$S_n \coloneqq \mathrm{pr}^*(\tilde{W}_n|_{E_{n + 1}^0 / \Delta}) \in \Gamma^\omega(E_{n + 1}^0, ((SO(E) \ltimes E) \times_{SO(E)} (R^* \otimes \mathbb{C}))^{\boxtimes n})$

は $(SO(E) \ltimes E) \times \mathfrak{S}_n$ 不変


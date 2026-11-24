---
title: "math13"
---

# 多様体の米田埋め込みの拡張

$\mathbb{R}^a$ のなす $\mathsf{Mfd}$ の充満部分圏を $\mathbb{R}^*$ とする

$$
\Phi: \mathsf{Mfd} \ni M \mapsto \mathrm{Hom}_\mathsf{Mfd}(-, M) \in \mathsf{Set}^{(\mathbb{R}^*)^\mathrm{op}}
$$

は忠実充満

[忠実性]
$f: M \to N$ とする。$x \in M$ に対して、$\Phi(f)(\mathbb{R}^0)(i_x)(*) = i_{f(x)}(*) = f(x)$

[充満性]
$F: \mathrm{Hom}_\mathsf{Mfd}(-, M) \to \mathrm{Hom}_\mathsf{Mfd}(-, N)$ とする。貼り合わせを考えれば、$M = \mathbb{R}^n$ として良い。あとは、通常の米田の補題と同様

# Supermanifold の米田埋め込みの拡張

$$
\mathrm{Hom}_\mathsf{sMfd}(\mathbb{R}^{0|b}, M) = \{ x_0 \in |M|, \varphi^*: \mathcal{O}_{M, x_0} \to \Lambda[\xi^1, \dots, \xi^b] \}
$$

は自然な多様体構造を持つことを示す。$U \subset \mathbb{R}^{p|q}$ とすると

$$
\begin{aligned}
  \mathrm{Hom}_\mathsf{sMfd}(\mathbb{R}^{0|b}, U) &= \left\{ \begin{aligned}
    &x_0 \in |U|, \\
    &t_{i\mu} \quad (1 \le i \le p, \mu \in \{0, 1\}^b, |\mu| \text{ は偶数}, \mu \ne 0), \\
    &s_{j\nu} \quad (1 \le j \le q, \nu \in \{0, 1\}^b, |\nu| \text{ は奇数})
  \end{aligned} \right\} \\
  &= |U| \times \mathbb{R}^{p(2^{b - 1} - 1) + q2^{b - 1}}
\end{aligned}
$$

$(x_0, \varphi^*)$ に対応する $(x_0, t_{i\mu}, s_{j\nu})$ は

$$
\begin{aligned}
  \varphi^* x^i &= x_0^i + \sum_{\mu \ne 0, |\mu| \text{ は偶数}} t_{i\mu} \xi^\mu \\
  \varphi^* \theta^j &= \sum_{\nu, |\nu| \text{ は奇数}} s_{j\nu} \xi^\nu
\end{aligned}
$$

で与えられる。逆に、$(x_0, t_{i\mu}, s_{j\nu})$ に対応する $(x_0, \varphi^*)$ は

$$
\varphi^*(g(x, \theta)) = \sum_{\alpha \in \mathbb{Z}_{\ge 0}^p} \frac{1}{\alpha!} \partial_x^\alpha f(x_0, \sum_{\nu, |\nu| \text{ は奇数}} s_{*\nu} \xi^\nu) (\sum_{\mu \ne 0, |\mu| \text{ は偶数}} t_{*\mu} \xi^\mu)^\alpha
$$

で与えられる。よって、$\mathrm{Hom}_\mathsf{sMfd}(\mathbb{R}^{0|b}, M)$ は標準的な多様体構造を持つ

$$
\mathrm{Hom}_\mathsf{sMfd}(\mathbb{R}^{a|b}, M) = \mathrm{Hom}_\mathsf{Mfd}(\mathbb{R}^a, \mathrm{Hom}_\mathsf{sMfd}(\mathbb{R}^{0|b}, M))
$$

$\mathbb{R}^{a|b}$ のなす $\mathsf{sMfd}$ の充満部分圏を $\mathbb{R}^{*|*}$ とする

$\Phi: \mathsf{sMfd} \ni M \mapsto \mathrm{Hom}_{\mathsf{sMfd}}(-, M) \in \mathsf{Set}^{(\mathbb{R}^{*|*})^\mathrm{op}}$ は忠実充満

[忠実性]
$f: M \to N$ を supermanifold の射とする。任意の $\varphi: \mathbb{R}^{0|b} \to M$ に対して、$\Phi(f)(\mathbb{R}^{0|b})(\varphi) = f \circ \varphi$ であり

$$
\begin{array}{ccc}
  \mathcal{O}_{N, |f|(|\varphi|(*))} &\xrightarrow{f^*}& \mathcal{O}_{M, |\varphi|(*)} \\
  \downarrow{\scriptsize{(\Phi(f)(\mathbb{R}^{0|b})(\varphi))^*}} && \downarrow{\scriptsize{\varphi^*}} \\
  \Lambda[\xi_1, \dots, \xi_b] &=& \Lambda[\xi_1, \dots, \xi_b]
\end{array}
$$

$|f| = \Phi(f)(\mathbb{R}^{0|0})$。あとは、任意の $V \subset |N|$ に対して、$f^*: \mathcal{O}_N(V) \to \mathcal{O}_M(|f|^{-1}(V))$ が $\Phi(f)$ で定まることを示せば良い。$|f|^{-1}(V) \subset \mathbb{R}^p$ かつ $\mathcal{O}_M(|f|^{-1}(V)) \simeq C^\infty(|f|^{-1}(V))[\theta^1, \dots, \theta^q]$ として良い。$h \in \mathcal{O}_N(V)$, $x_0 \in |f|^{-1}(V)$ とする。$(f^* h)(x_0) \in \Lambda[\theta^1, \dots, \theta^q]$ が $\Phi(f)$ で定まることを示せば良い。$\tau_{x_0}: \mathbb{R}^{0|q} \to M$ を座標 $x_0^1, \dots, x_0^p, \theta^1, \dots, \theta^q \in \Lambda[\theta^1, \dots, \theta^q]$ で定めれば、$|\tau_{x_0}|(*) = x_0$ であり

$$
\tau_{x_0}^* g = g(x_0) \quad (g \in \mathcal{O}_{M, x_0})
$$

よって

$$
\begin{aligned}
  (f^* h)(x_0) &= \tau_{x_0}^* f^* h_{|f|(x_0)} \\
  &= (\Phi(f)(\mathbb{R}^{0|q})(\tau_{x_0}))^* h_{|f|(x_0)}
\end{aligned}
$$

最後に、$f^* h$ を別の形で表示しておく。$\pi_M: \mathrm{Hom}_\mathsf{SMfd}(\mathbb{R}^{0|q}, M) \to \mathrm{Hom}_\mathsf{SMfd}(\mathbb{R}^{0|0}, M) = |M|$ とし、$\pi_N: \mathrm{Hom}_\mathsf{SMfd}(\mathbb{R}^{0|q}, N) \to |N|$ も同様に定める

$$
\begin{aligned}
  \tau: |f|^{-1}(V) \ni x \mapsto \tau_x \in \pi_M^{-1}(|f|^{-1}(V)) \\
  \mathrm{ev}_h: \pi_N^{-1}(V) \ni \psi \mapsto \psi^* h \in \Lambda[\theta^1, \dots, \theta^q]
\end{aligned}
$$

は滑らかで

$$
f^* h = \mathrm{ev}_h \circ \Phi(f)(\mathbb{R}^{0|q}) \circ \tau
$$

[充満性]
$M, N$ を supermanifold とし、$F: \mathrm{Hom}_{\mathsf{sMfd}}(-, M) \to \mathrm{Hom}_{\mathsf{sMfd}}(-, N)$ とする。貼り合わせを考えれば、$M = \mathbb{R}^{p|q}$ として良い。あとは、通常の米田の補題と同様

# Super vector bundle

Supermanifold $M$ 上の super vector bundle とは、$|M|$ 上の局所自由層 $\mathcal{E}$ のこと。$S$-points が

$$
E(S) \coloneqq \{ f: S \to M, t \in \mathcal{O}(S, f^*\mathcal{E})_0 \}
$$

となる supermanifold $E$ が存在することを示す。ただし、$f^*\mathcal{E} \coloneqq f^{-1}\mathcal{E} \otimes_{f^{-1}\mathcal{O}_M} \mathcal{O}_S$。$M \subset \mathbb{R}^{p|q}$ かつ $\mathcal{E} = \mathcal{O}_M^{r|s} \eqqcolon \mathcal{O}_M \otimes \mathbb{R}^{r|s}$ として良い。$f^*\mathcal{E} = \mathcal{O}_S^{r|s}$

$$
E(S) = \{ x \in \mathcal{O}(S)_0^p, \theta \in \mathcal{O}(S)_1^q, t \in \mathcal{O}(S)_0^r \oplus \mathcal{O}(S)_1^s \mid (x^1_\mathrm{red}, \dots, x^p_\mathrm{red})(|S|) \subset |M| \}
$$

よって、$E(S)$ は $M \times \mathbb{R}^{r|s}$ で表現される。逆に、$\pi: E \to M$ と $|M|$ の開被覆 $\{ |U_i| \}$ と

$$
\begin{array}{ccc}
  \pi^{-1}(U_i) &\xrightarrow[\sim]{\varphi_i}& U_i \times \mathbb{R}^{r|s} \\
  \downarrow && \downarrow \\
  U_i &=& U_i
\end{array}
$$

があって、$(U_i \cap U_j) \times \mathbb{R}^{r|s} \xrightarrow{\varphi_i \varphi_j^{-1}} \mathbb{R}^{r|s}$ が $g_{ij}: U_i \cap U_j \to GL_{r|s}(\mathbb{R})$ から誘導されるとすると、貼り合わせで局所自由層 $\mathcal{E}$ が構成できる

Supermanifold $M$ の接束 $\mathcal{T}M$ は、$M \subset \mathbb{R}^{p|q}$ ならば、$U \subset M$ に対して

$$
\begin{aligned}
  \mathcal{T}M(U) &= \mathfrak{X}(U) \\
  &\coloneqq \{ X \in \underline{\mathrm{End}}_\mathbb{R}(\mathcal{O}(U)) \mid X(fg) = (Xf)g + (-1)^{|X||f|}fXg \} \\
  &= \bigoplus_i \mathcal{O}(U) \partial_{x^i} \oplus \bigoplus_j \mathcal{O}(U) \partial_{\theta^j}
\end{aligned}
$$

を対応させる自由層。一般の場合は、貼り合わせで定義する

# Lie supergroup と Lie superalgebra

$G$: Lie supergroup

$m^*: \mathcal{O}_G \to \mathcal{O}_{G \times G}$, $e^*: \mathcal{O}_G \to \mathbb{R}$ とすると

$$
\begin{aligned}
  (m^* \otimes 1) \circ m^* = (1 \otimes m^*) \circ m^* \\
  (e^* \otimes 1) \circ m^* = (1 \otimes e^*) \circ m^* = 1
\end{aligned}
$$

左不変ベクトル場全体を $\mathfrak{X}(G)^G$ とすると、$\mathfrak{X}(G)^G \ni F \mapsto F_e \in T_e G$ は全単射

$F \in \mathfrak{X}(G)$ が左不変とは

$$
m^* \circ F = (1 \otimes F) \circ m^*
$$

これは、古典的な $F_{gh}f = F_h f(g \cdot)$ に対応する

$X \in T_e G$ とする。$\tilde{X} \coloneqq (1 \otimes X) \circ m^*$ は $G$ 上のベクトル場

$$
\begin{aligned}
  (1 \otimes \tilde{X}) \circ m^* &= (1 \otimes 1 \otimes X) \circ (1 \otimes m^*) \circ m^* \\
  &= (1 \otimes 1 \otimes X) \circ (m^* \otimes 1) \circ m^* \\
  &= (m^* \otimes X) \circ m^* \\
  &= m^* \circ (1 \otimes X) \circ m^* \\
  &= m^* \circ \tilde{X}
\end{aligned}
$$

だから、$\tilde{X}$ は左不変。$\tilde{X}_e = X \circ (1 \otimes e^*) \circ m^* = X$。また、$F \in \mathfrak{X}(G)^G$ ならば

$$
\begin{aligned}
  \widetilde{F_e} &= (1 \otimes F_e) \circ m^* \\
  &= (1 \otimes e^*) \circ (1 \otimes F) \circ m^* \\
  &= (1 \otimes e^*) \circ m^* \circ F \\
  &= F
\end{aligned}
$$

以上から、$T_e G$ は Lie superalgebra の構造を持ち、$\mathfrak{g}$ で表す

# $G \curvearrowright M$

$G \curvearrowright M$

$f \in \mathcal{O}(M)$ への $G$ 作用は、$G$ 上の関数の族

$$
(L^*)^{-1} \circ (1 \otimes f)
$$

で与えられる。ただし、$L: G \times M \ni (g, x) \mapsto (g, gx) \in G \times M$

$X \in \mathfrak{X}(M)$ への $G$ 作用は、$G$ 上のベクトル場の族

$$
(L^*)^{-1} \circ (1 \otimes X) \circ L^*
$$

で与えられる。また、$X$ が左不変とは $1 \otimes X$ と $L^*$ が可換なこと

$B$-points を使って言い換える。$g: B \to G$ とする。$L_g: B \times M \ni (b, x) \mapsto (b, g(b)x) \in B \times M$ が定まる。$f \in \mathcal{O}(G)$ への $G$ 作用は、$B$ 上の関数の族

$$
L_{g^{-1}}^* \circ (1 \otimes f)
$$

で与えられる。$X \in \mathfrak{X}(M)$ への $G$ 作用は、$B$ 上のベクトル場の族

$$
L_{g^{-1}}^* \circ (1 \otimes X) \circ L_g^*
$$

で与えられる

# $f$-derivation

$f: M \to N$

$U \subset \mathbb{R}^{p|q}$ かつ $f(U) \subset V \subset \mathbb{R}^{r|s}$ とする

$$
\begin{aligned}
  (f^*\mathcal{T}N)(U) &= \mathcal{O}(U) \otimes_{\mathcal{O}(V)} \mathfrak{X}(V) \\
  &= \bigoplus_{a = 1}^r \mathcal{O}(U) \partial_{y^a} \oplus \bigoplus_{b = 1}^s \mathcal{O}(U) \partial_{\eta^b}
\end{aligned}
$$

$$
\begin{aligned}
  &\mathrm{Der}_f(\mathcal{O}(V), \mathcal{O}(U)) \\
  &\coloneqq \{ D \in \underline{\mathrm{Hom}}(\mathcal{O}(V), \mathcal{O}(U)) \mid D(\varphi\psi) = (D\varphi)f^*\psi + (-1)^{|D||\varphi|}f^*\varphi D\psi \}
\end{aligned}
$$

とすると

$$
(f^*\mathcal{T}N)(U) \ni s \otimes X \mapsto (\varphi \mapsto s f^*(X\varphi)) \in \mathrm{Der}_f(\mathcal{O}(V), \mathcal{O}(U))
$$

は全単射

$(f^*\mathcal{T}N)(U)$ の基底を考えれば、単射性は明らか。全射性を示す。$D \in \mathrm{Der}_f(\mathcal{O}(V), \mathcal{O}(U))$ とする。$\Gamma: M \to M \times N$ をグラフとすると、$D$ は $\tilde{D} \in \mathrm{Der}_\Gamma(\mathcal{O}(U \times V), \mathcal{O}(U))$ に持ち上がる。$\tilde{D}(\mathcal{O}(U) \otimes 1) = 0$。$\mathrm{Der}_\Gamma(\mathcal{O}(U \times V), \mathcal{O}(U)) = \{ \Gamma^* \circ E \mid E \in \mathrm{Der}(\mathcal{O}(U \times V)) \}$ だから

$$
\tilde{D} = \Gamma^* \circ (\sum f_{x^i} \partial_{x^i} + \sum f_{\theta^j} \partial_{\theta^j} + \sum f_{y^a} \partial_{y^a} + \sum f_{\eta^b} \partial_{\eta^b})
$$

と表示できる。$\tilde{D}(\mathcal{O}(U) \otimes 1) = 0$ だから

$$
\tilde{D} = \Gamma^* \circ (\sum f_{y^a} \partial_{y^a} + \sum f_{\eta^b} \partial_{\eta^b})
$$

よって、$D\varphi = \sum (\Gamma^*f_{y^a}) f^*(\partial_{y^a}\varphi) + \sum (\Gamma^*f_{\eta^b}) f^*(\partial_{\eta^b}\varphi)$

# $\exp$

$G$: Lie supergroup

$\exp: \mathfrak{g} \to G$ を定義する

$B$ を supermanifold とし、$X: B \to \mathfrak{g}$ とする。$\tilde{X} \in \mathcal{O}(B \times G, \mathcal{T}G)$ が定まる。開集合 $\{0\} \times |B| \subset |D| \subset \mathbb{R} \times |B|$ と $\varphi: D \to G$ が存在して

$$
\frac{\partial}{\partial t} \circ (\mathrm{pr}_B, \varphi)^* = (\mathrm{pr}_B, \varphi)^* \circ \tilde{X} \in \mathcal{O}(D, \varphi^*\mathcal{T}G)
$$

かつ初期条件 $\varphi_0 \equiv e$ を満たす。$\varphi$ が $I \times |W| \ (0 \in I)$ で定義されているとする。任意の $t_0 \in I$ に対して、$\tilde{\varphi}(t, b) \coloneqq \varphi_{t_0}(b)\varphi(t, b): I \times W$ とする。$\tilde{\varphi}_0 = \varphi_{t_0}$。$f \in \mathcal{O}(G)$ に対して、$m^*f = \sum f_{(1)} \otimes f_{(2)}$ とすると

$$
\begin{aligned}
  \frac{\partial}{\partial t}\tilde{\varphi}^*f &= \frac{\partial}{\partial t}(\varphi_{t_0}^*f_{(1)}\varphi^*f_{(2)}) \\
  &= \varphi_{t_0}^*f_{(1)} \frac{\partial}{\partial t}\varphi^*f_{(2)} \\
  &= \varphi_{t_0}^*f_{(1)} (\mathrm{pr}_B, \varphi)^*\tilde{X}f_{(2)} \\
  &= (\mathrm{pr}_B, (\varphi_{t_0}, \varphi))^*(1 \otimes \tilde{X})m^*f \\
  &= (\mathrm{pr}_B, (\varphi_{t_0}, \varphi))^*m^*\tilde{X}f \\
  &= (\mathrm{pr}_B, \tilde{\varphi})^*\tilde{X}f
\end{aligned}
$$

よって、$D = \mathbb{R} \times B$ まで拡張できる。$\varphi: \mathbb{R} \times B \to G$ を $X$ の 1 パラメータ部分群という。$t \mapsto \varphi_t$ は群準同型
以上から、$\varphi_1: B \to G$ が定まる。$X \mapsto \varphi_1$ は $B$ に関して関手的だから、$\exp: \mathfrak{g} \to G$ が定まる

Body は $\exp: \mathfrak{g}_0 \to |G|$ に一致する

# 基本的なこと

$\mathcal{E}$: 位相空間 $X$ 上の層
$\mathcal{F}$: 位相空間 $Y$ 上の層
$f: X \to Y$

$$
\mathrm{Hom}(\mathcal{F}, f_*\mathcal{E}) = \mathrm{Hom}(f^{-1}\mathcal{F}, \mathcal{E})
$$

$f: X \to Y$: supermanifold の射
$\mathcal{E}$: $\mathcal{O}_X$ 加群
$\mathcal{F}$: $\mathcal{O}_Y$ 加群
$f_*\mathcal{E}$ は $\mathcal{O}_Y$ 加群
$f^*\mathcal{F} \coloneqq \mathcal{O}_X \otimes_{f^{-1}\mathcal{O}_Y} f^{-1}\mathcal{F}$ は $\mathcal{O}_X$ 加群

$$
\mathrm{Hom}_{\mathcal{O}_Y}(\mathcal{F}, f_*\mathcal{E}) = \mathrm{Hom}_{\mathcal{O}_X}(f^*\mathcal{F}, \mathcal{E})
$$

$X$: supermanifold

$$
\Omega^1_X \coloneqq \mathcal{Hom}_{\mathcal{O}_X}(\mathcal{T}X, \mathcal{O}_X)
$$

$U \subset X$ を局所座標とすると

$$
\Omega^1_X(U) = \bigoplus_i \mathcal{O}_X(U) dx^i \oplus \bigoplus_j \mathcal{O}_X(U) d\theta^j
$$

$d: \mathcal{O}_X \ni f \mapsto (X \mapsto Xf) \in \Omega^1_X$ がある

$$
df: \mathcal{T}M \ni X \mapsto X \circ f^* \in f^*\mathcal{T}N
$$

双対を取れば、$f^*: f^*\Omega^1_Y \to \Omega^1_X$ が誘導される

# Lie 微分

$X \in \mathfrak{X}(M)$
$s \in \mathcal{O}(B)$
$\tilde{X} \coloneqq (sX)_0: \mathcal{O}(M \times B, TM)$

$\{0\} \times |M| \times |B| \subset |D| \subset \mathbb{R} \times |B| \times |M|$ 上で $\tilde{X}$ の flow $\varphi: D \to M$ が定まる。陰関数定理から、$(\varphi_t, \mathrm{pr}_B)$ は local diffo として良い。$t \mapsto (\varphi_t, \mathrm{pr}_B)$ は群準同型

$u \in \mathcal{O}(B)_0 = \mathrm{Hom}_\mathsf{sMfd}(B, \mathbb{R})$ とする。$\tilde{Y} \coloneqq u\tilde{X}$ とし、$\tilde{Y}$ の flow を $\psi$ とする。$\psi$ は

$$
\mathbb{R} \times M \times B \ni (t, x, b) \xmapsto{\alpha} (u(b)t, x, b) \in \mathbb{R} \times M \times B \xrightarrow{\varphi} M
$$

と一致する。実際

$$
\begin{aligned}
  \frac{\partial}{\partial t} (\varphi \circ \alpha)^* g &= \frac{\partial}{\partial t} \alpha^* \varphi^* g \\
  &= u \alpha^* \frac{\partial}{\partial t} \varphi^* g \\
  &= u \alpha^* (\varphi, \mathrm{pr}_B)^* \tilde{X} g \\
  &= (\varphi \circ \alpha, \mathrm{pr}_B)^* \tilde{Y} g
\end{aligned}
$$

$f \in \mathcal{O}(M)$ とする

$$
\mathcal{O}(B) \ni s \mapsto \left.\frac{\partial}{\partial t}\right|_{t = 0} \varphi_t^* f \in \mathcal{O}(M \times B)
$$

は $\mathcal{O}(B)_0$ 準同型。よって、$B = \mathbb{R}, \mathbb{R}^{0|1}$ を考えれば、$F \in \mathcal{O}(M)$ が一意的に存在して、$\left.\frac{\partial}{\partial t}\right|_{t = 0} \varphi_t^* f = (sF)_{|f|}$。この $F$ を $\mathcal{L}_X f$ と定義する。$\mathcal{L}_X f = Xf$ が成り立つ

次に、$Y \in \mathfrak{X}(M)$ に対して、$\mathcal{L}_X Y$ を定義する。$\mathcal{O}(B) \ni s \mapsto \left.\frac{\partial}{\partial t}\right|_{t = 0} \varphi_t^* \circ Y \circ \varphi_{-t}^* \in \mathcal{O}(M \times B, TM)$ は $\mathcal{O}(B)_0$ 加群の射になる。よって

$$
\left.\frac{\partial}{\partial t}\right|_{t = 0} \varphi_t^* \circ Y \circ \varphi_{-t}^* \eqqcolon (s\mathcal{L}_X Y)_{|Y|}
$$

と定義する。$s$ は $X$ と同じ parity と思って

$$
\begin{aligned}
  \left.\frac{\partial}{\partial t}\right|_{t = 0} \varphi_t^* Y \varphi_{-t}^* g &= \left.\frac{\partial}{\partial t}\right|_{t = 0} \varphi_t^* Yg - Y \left.\frac{\partial}{\partial t}\right|_{t = 0} \varphi_t^* g \\
  &= sXYg - YsXg \\
  &= s(XY - (-1)^{|X||Y|}YX)g
\end{aligned}
$$

よって、$\mathcal{L}_X Y = [X, Y]$ がわかる

例えば、$\mathcal{L}_X(fY) = (\mathcal{L}_X f)Y + (-1)^{|X||f|}f\mathcal{L}_XY$ は直接計算でもわかるが、定義に戻ると

$$
\begin{aligned}
  \mathcal{L}_X(fY) &= \left.\frac{\partial}{\partial t}\right|_{t = 0} \varphi_t^* \circ fY \circ \varphi_{-t}^* \\
  &= \left.\frac{\partial}{\partial t}\right|_{t = 0} (\varphi_t^*f) (\varphi_t^* \circ Y \circ \varphi_{-t}^*) \\
  &= \left.\frac{\partial}{\partial t}\right|_{t = 0} (\varphi_t^*f)Y + f \left.\frac{\partial}{\partial t}\right|_{t = 0} \varphi_t^* \circ Y \circ \varphi_{-t}^* \\
  &= s(\mathcal{L}_X f)Y + fs\mathcal{L}_X Y \\
  &= s((\mathcal{L}_X f)Y + (-1)^{|X||f|}f\mathcal{L}_X Y)
\end{aligned}
$$

だから、自然に Leibniz 則を満たすことがわかる

# $\exp$ の性質

$f: G \to H$

微分を考えると、線形写像 $df: \mathfrak{g} \to \mathfrak{h}$ が誘導される

[$df: \mathfrak{g} \to \mathfrak{h}$ は Lie superalgebra の準同型]
$X, X' \in \mathfrak{g}$ とする。$Y \coloneqq df(X), Y' \coloneqq df(X')$ とする。まず、$\tilde{X}, \tilde{Y}$ が $f$-related なことを示す。$\tilde{X} \circ f^* = f^* \circ \tilde{Y}$ を示せば良い

$$
\begin{aligned}
  \tilde{X} \circ f^* &= (1 \otimes X) \circ m^* \circ f^* \\
  &= (1 \otimes X) \circ (f, f)^* \circ m^* \\
  &= f^* \circ (1 \otimes Y) \circ m^* \\
  &= f^* \circ \tilde{Y}
\end{aligned}
$$

よって、$[X, X'], [Y, Y']$ も $f$-related だから $df([X, X']) = [Y, Y']$

[$\exp$ と 1 パラメータ部分群]
$X: B \to \mathfrak{g}$ とする。任意の $t \in \mathbb{R}$ に対して、$tX$ のパラメータ $s$ の 1 パラメータ部分群 は、$\varphi(ts, X)$ に一致する。$s = 1$ とすると

$$
e^{tX}: \mathbb{R} \times B \ni (t, b) \mapsto tX(b) \in \mathfrak{g} \xrightarrow{\exp} G
$$

は $X$ の 1 パラメータ部分群 と一致することがわかる

[$d\exp_0 = \mathrm{id}_\mathfrak{g}$]
$X: B \to \mathfrak{g}$ に対して、$d\exp_0 \circ X = X$ を示せば良い

$$
d\exp_0 \circ X = X \exp^* = \left.\frac{\partial}{\partial t}\right|_{t = 0} (\exp^{tX})^* = X
$$

[$\exp$ の自然性]

$$
\begin{array}{ccc}
  \mathfrak{g} &\xrightarrow{df}& \mathfrak{h} \\
  \downarrow{\scriptsize{\exp}} && \downarrow{\scriptsize{\exp}} \\
  G &\xrightarrow{f}& H
\end{array}
$$

$X: B \to \mathfrak{g}$ とする。$f \circ e^{tX}: \mathbb{R} \times B \to H$ が $df(X)$ の 1 パラメータ部分群 に一致することを示せば良い

$$
\begin{aligned}
  (f \circ e^{tX}, \mathrm{pr}_B)^* \circ \widetilde{df(X)} &= (e^{tX}, \mathrm{pr}_B)^* \circ f^* \circ \widetilde{df(X)} \\
  &= (e^{tX}, \mathrm{pr}_B)^* \circ \tilde{X} \circ f^* \\
  &= \frac{\partial}{\partial t} \circ (e^{tX})^* \circ f^* \\
  &= \frac{\partial}{\partial t} \circ (f \circ e^{tX})^*
\end{aligned}
$$

[$\tilde{X}$ の flow]
$X: B \to \mathfrak{g}$ とする。$\tilde{X} \in \mathcal{O}(G \times B, TG)$ の flow は $m \circ (\mathrm{pr}_G, e^{tX}): \mathbb{R} \times G \times B \to G$

$$
\begin{aligned}
  \frac{\partial}{\partial t} (\mathrm{pr}_G, e^{tX})^* m^* f &= (\mathrm{pr}_G, e^{tX}, \mathrm{pr}_B)^* (1 \otimes \tilde{X}) m^* f \\
  &= (\mathrm{pr}_G, e^{tX}, \mathrm{pr}_B)^* (1 \otimes 1 \otimes X) (1 \otimes m^*) m^* f \\
  &= (\mathrm{pr}_G, e^{tX}, \mathrm{pr}_B)^* (1 \otimes 1 \otimes X) (m^* \otimes 1) m^* f \\
  &= (\mathrm{pr}_G, e^{tX}, \mathrm{pr}_B)^* (m^* \otimes 1) (1 \otimes X) m^* f \\
  &= (m \circ (\mathrm{pr}_G, e^{tX}), \mathrm{pr}_B)^* \tilde{X} f
\end{aligned}
$$

# $M(C)$

$\mathsf{sMfd} \ni M \mapsto M(-) \in \mathsf{Mfd}^{\mathbb{R}^{0|*}}$ は忠実だった

$C \coloneqq \mathbb{R}^{0|c}$

次元 $(p, q)$ の supermanifold $M$ に対して、$M(C) \to M(*) = |M|$ は典型ファイバーが $\mathbb{R}^{p(2^{c - 1} - 1) + q2^{c - 1}}$ のファイバー束

$M$: supermanifold
$A$: 通常の多様体

$f \in \mathcal{O}(A \times M)$ から滑らかな

$$
\tilde{f}: A \times M(C) \ni (a, x) \mapsto f(a, x) \in \mathcal{O}(C)
$$

が誘導される。$X \in \mathfrak{X}(A)$ に対して

$$
\widetilde{Xf} = X\tilde{f}
$$

# $GL(V)$

$V$: super vector space over $\mathbb{R}$

$GL(V)$ を関手 $B \mapsto \mathrm{End}_{\mathcal{O}(B)}(\mathcal{O}(B) \otimes V)^\times \simeq (\mathcal{O}(B) \otimes \underline{\mathrm{End}}_\mathbb{R}(V))_0^\times$ で定義できた。実現は

$$
\mathcal{O}_{GL(V)} \coloneqq C^\infty_{\mathrm{End}_\mathbb{R}(V)^\times} \otimes \Lambda(\underline{\mathrm{End}}_\mathbb{R}(V)^*_1)
$$

$\mathrm{End}_\mathbb{R}(V)^\times = GL(V_0) \times GL(V_1)$ に注意。$\mathcal{T}(GL(V)) = \mathcal{O}_{GL(V)} \otimes \underline{\mathrm{End}}_\mathbb{R}(V)$。線形空間として $T_e G \simeq \underline{\mathrm{End}}_\mathbb{R}(V)$

$$
\begin{aligned}
  \mathcal{O}_{\underline{\mathrm{End}}_\mathbb{R}(V)} &= C^\infty_{\mathrm{End}_\mathbb{R}(V)} \otimes \Lambda(\underline{\mathrm{End}}_\mathbb{R}(V)^*_1) \\
  \underline{\mathrm{End}}_\mathbb{R}(V)(B) &= \mathrm{End}_{\mathcal{O}(B)}(\mathcal{O}(B) \otimes V) \simeq (\mathcal{O}(B) \otimes \underline{\mathrm{End}}_\mathbb{R}(V))_0
\end{aligned}
$$

[$\exp$]
$X: B \to \underline{\mathrm{End}}_\mathbb{R}(V)$ とする。$f \in \mathcal{O}(GL(V))$ に対して、$f: GL(V)(C) \to \mathcal{O}(C) \simeq \mathbb{R}^{1|1}(C) \ (C = \mathbb{R}^{0|*})$ は滑らかだが

$$
(Xf)(b) = X(b)f = \left.\frac{\partial}{\partial t}\right|_{t = 0} f(1 + tX(b)) \quad (b \in B(C))
$$

$\tilde{X}f \in \mathcal{O}(G \times B)$ は $G(C) \times B(C) \to \mathbb{R}^{1|1}(C)$ を誘導する。$g \in GL(V)(C), b \in B(C)$ に対して、$m^* f = \sum f_{(1)} \otimes f_{(2)}$ とすると

$$
\begin{aligned}
  (\tilde{X}f)(g, b) &= \sum f_{(1)}(g) (Xf_{(2)})(b) \\
  &= \left.\frac{\partial}{\partial t}\right|_{t = 0} \sum f_{(1)}(g) f_{(2)}(1 + tX(b)) \\
  &= \left.\frac{\partial}{\partial t}\right|_{t = 0} f(g(1 + tX(b))) \\
  &= \left.\frac{\partial}{\partial t}\right|_{t = 0} f(g + tgX(b))
\end{aligned}
$$

$\mathbb{R} \times B \to GL(V)$ を $\mathbb{R}(S) \times B(S) \ni (t, b) \mapsto e^{tX(b)} \in (\mathcal{O}(S) \otimes \underline{\mathrm{End}}_\mathbb{R}(V))_0^\times \simeq GL(V)(S)$ で定義する。$e^{tX}$ は $X$ の 1 パラメータ部分群に一致することを示す。$f \in \mathcal{O}(GL(V)), b \in B(C)$ に対して、$\mathbb{R}^{1|1}(C)$ の等式として

$$
\begin{aligned}
  \left(\frac{\partial}{\partial t} (e^{tX})^* f\right)(b) &= \frac{\partial}{\partial t} f(e^{tX(b)}) \\
  &= \left.\frac{\partial}{\partial s}\right|_{s = 0} f(e^{(t + s)X(b)}) \\
  &= \left.\frac{\partial}{\partial s}\right|_{s = 0} f(e^{tX(b)}e^{sX(b)}) \\
  &= \left.\frac{\partial}{\partial s}\right|_{s = 0} f(e^{tX(b)}(1 + sX(b))) \\
  &= ((e^{tX}, \mathrm{pr}_B)^* \tilde{X} f)(b)
\end{aligned}
$$

$C$ に関して関手的だから、$\mathcal{O}(B)$ の等式として

$$
\frac{\partial}{\partial t} (e^{tX})^* f = (e^{tX})^* \tilde{X} f
$$

[$T_e G$ の Lie superalgebra 構造]
$X, Y: B \to \underline{\mathrm{End}}_\mathbb{R}(V)$ に対して、$[\tilde{X}, \tilde{Y}] = \widetilde{[X, Y]}$ を示す。$C = \mathbb{R}^{0|*}$ とする。$\tilde{X}$ の flow を $\varphi: \mathbb{R} \times G \times B \to G$ とする。$g \in GL(V)(C), b \in B(C)$ に対して、$\varphi_t(g, b) = ge^{tX(b)}$ だから

$$
\begin{aligned}
  ([\tilde{X}, \tilde{Y}]f)(g, b) &= ((\mathcal{L}_{\tilde{X}}\tilde{Y})f)(g, b) \\
  &= \left.\frac{\partial}{\partial t}\right|_{t = 0} ((\varphi_t, \mathrm{pr}_B)^* \tilde{Y} \varphi_{-t}^* f)(g, b) \\
  &= \left.\frac{\partial^2}{\partial t \partial s}\right|_{t = s = 0} f(ge^{tX(b)}(1 + sY(b))e^{-tX(b)}) \\
  &= \left.\frac{\partial}{\partial s}\right|_{s = 0} \left.\frac{\partial}{\partial t}\right|_{t = 0} f(ge^{tX(b)}(1 + sY(b))e^{-tX(b)}) \\
  &= \left.\frac{\partial}{\partial s}\right|_{s = 0} \left.\frac{\partial}{\partial t}\right|_{t = 0} f(g(1 + sY(b) + st[X(b), Y(b)])) \\
  &= \left.\frac{\partial^2}{\partial t \partial s}\right|_{t = s = 0} f(g(1 + sY(b) + st[X(b), Y(b)])) \\
  &= \left.\frac{\partial^2}{\partial t \partial s}\right|_{t = s = 0} f(g(1 + st[X(b), Y(b)])) \\
  &= \left.\frac{\partial}{\partial u}\right|_{u = 0} f(g(1 + u[X(b), Y(b)])) \\
  &= (\widetilde{[X, Y]}f)(g, b)
\end{aligned}
$$

# $\mathrm{Ad}, \mathrm{ad}$

$G \times G \ni (g, h) \mapsto ghg^{-1} \in G$ を $h$ に関して微分すると、群準同型 $G(B) \to \mathrm{End}_{\mathcal{O}(B)}(\mathcal{O}(B) \otimes \mathfrak{g})_0^\times = GL(\mathfrak{g})(B)$ ができる。これから、Lie supergroup の射

$$
\mathrm{Ad}: G \to GL(\mathfrak{g})
$$

が誘導される。$\mathrm{ad} \coloneqq d\mathrm{Ad}: \mathfrak{g} \to \mathfrak{gl}(V)$ は Lie superalgebra の射

$$
\mathrm{ad}_X = [X, -]
$$

を示す。$X, Y \in \mathfrak{g}(B)$ とする。まず、$g \in G(B)$ に対して、$ge^{sY}g^{-1}: B \to G$ は $\mathrm{Ad}(g)(Y) \in \mathfrak{g}(B)$ の 1 パラメータ部分群。$f \in \mathcal{O}(G), C = \mathbb{R}^{0|*}$ とする。$g \in G(C), b \in B(C)$ に対して、$\tilde{X}$ の flow を $\varphi: \mathbb{R} \times G \times B \to G$ とすると

$$
\begin{aligned}
  (\widetilde{[X, Y]}f)(g, b) &= ([\tilde{X}, \tilde{Y}]f)(g, b) \\
  &= ((\mathcal{L}_{\tilde{X}}\tilde{Y})f)(g, b) \\
  &= \left.\frac{\partial}{\partial t}\right|_{t = 0} ((\varphi_t, \mathrm{pr}_B)^* \tilde{Y} \varphi_{-t}^* f)(g, b) \\
  &= \left.\frac{\partial^2}{\partial t \partial s}\right|_{t = s = 0} f(ge^{tX(b)}e^{sY(b)}e^{-tX(b)}) \\
  &= \left.\frac{\partial^2}{\partial t \partial s}\right|_{t = s = 0} f(ge^{s\mathrm{Ad}_{e^{tX(b)}}Y(b)}) \\
  &= \left.\frac{\partial}{\partial s}\right|_{s = 0} f(ge^{s\mathrm{ad}_{X(b)}Y(b)}) \\
  &= (\widetilde{\mathrm{ad}_X Y}f)(g, b)
\end{aligned}
$$

特に、$X, Y \in \mathfrak{g}(B)$ に対して

$$
\mathrm{Ad}_{e^X}Y = e^{\mathrm{ad}_X}Y = \sum_{n = 0}^\infty \frac{1}{n!} \overbrace{[X, [X, \dots, [X}^n, Y]]]
$$

# super vector bundle の frame

$\mathcal{E}$: $M$ 上の局所自由層
$s_i \in \mathcal{O}(M, \mathcal{E})$
各 $x \in |M|$ に対して、$s_i(x) \in E_x$ が super vector space の基底ならば

$$
\bigoplus_i \mathcal{O}_M s_i \xrightarrow{\sim} \mathcal{E}
$$

$x \in |M|$ とする。$\mathcal{E}$ は局所自由だから、$x \in |U| \subset |M|$ と $e_j \in \mathcal{O}(U, \mathcal{E})$ が存在して、$\mathcal{E}|_U \simeq \bigoplus_j \mathcal{O}_U e_j$。$s_i|_U = \sum_j f_{ij}e_j \ (f_{ij} \in \mathcal{O}(U))$ と表示する。$(f_{ij}(p))$ は可逆だから、$p \in |V| \subset |U|$ が存在して、$(f_{ij}|_V)$ は可逆。よって、$\mathcal{E}|_V \simeq \bigoplus_i \mathcal{O}_V s_i|_V$

特に、Lie supergroup $G$ に対して

$$
\mathcal{O}_G \otimes \mathfrak{g} \ni f \otimes X \xmapsto{\sim} f\tilde{X} \in \mathcal{T}G
$$

$\mathfrak{g}$ には自明な作用を考えると、$G$ 同変 super vector bundle の同型

# $\exp$ の微分公式

$X, Y \in \mathfrak{g}(B)$ に対して

$$
\left.\frac{\partial}{\partial t}\right|_{t = 0} e^{-X}e^{X + tY} = \frac{1 - e^{-\mathrm{ad}_X}}{\mathrm{ad}_X} Y
$$

$$
V(s) \coloneqq \left.\frac{\partial}{\partial t}\right|_{t = 0} e^{-sX}e^{s(X + tY)} \in \mathfrak{g}(B)
$$

$V'(s)$ を計算する。$f \in \mathcal{O}(G)$ とすると

$$
\begin{aligned}
  \frac{\partial}{\partial s} \left.\frac{\partial}{\partial t}\right|_{t = 0} f(e^{-sX}e^{s(X + tY)}) &= \frac{\partial}{\partial s} (V(s)f) = V'(s)f
\end{aligned}
$$

また

$$
\begin{aligned}
  \frac{\partial}{\partial s} f(e^{-sX}e^{s(X + tY)}) &= \left.\frac{\partial}{\partial u}\right|_{u = 0} f(e^{-sX}e^{-uX}e^{u(X + tY)}e^{s(X + tY)}) \\
  &= (tY)\Phi_{s, t} \\
  &= tY\Phi_{s, t}
\end{aligned}
$$

ただし、$\Phi_{s, t}(g) \coloneqq f(e^{-sX}ge^{s(X + tY)})$。よって

$$
\begin{aligned}
  \left.\frac{\partial}{\partial t}\right|_{t = 0} \frac{\partial}{\partial s} f(e^{-sX}e^{s(X + tY)}) &= Y\Phi_{s, 0} \\
  &= (\mathrm{Ad}_{e^{-sX}}Y)f \\
  &= (e^{-s\mathrm{ad}_X}Y)f
\end{aligned}
$$

以上から、$V'(s) = e^{-s\mathrm{ad}_X}Y$ であり

$$
\begin{aligned}
  V(s) &= \left(\int_0^s e^{-s\mathrm{ad}_X} \, ds\right)Y \\
  &= \frac{1 - e^{-s\mathrm{ad}_X}}{\mathrm{ad}_X} Y \\
\end{aligned}
$$

# BCH formula

$L[X, Y]$ を自由 Lie 代数とする。$F = \sum_{n = 0}^\infty F_n(X, Y) t^n \in L[X, Y]\llbracket t \rrbracket$ を $F_0(X, Y) \equiv 0$ かつ

$$
\frac{d}{dt}F = h_1(\mathrm{ad}_F)X + h_2(\mathrm{ad}_F)Y
$$

で定義する。ただし、$h_1(z) \coloneqq \frac{z}{e^z - 1}, h_2(z) \coloneqq \frac{z}{1 - e^{-z}}$。$F_n \in L[X, Y]_n$ であり

$$
\begin{aligned}
  F_1(X, Y) &= X + Y \\
  F_2(X, Y) &= \frac{1}{2}[X, Y] \\
  F_3(X, Y) &= \frac{1}{12}([X, [X, Y]] + [Y, [Y, X]]) \\
  &\cdots
\end{aligned}
$$

任意の Lie supergroup $G$ と $X, Y \in \mathfrak{g}(B)$ に対して

$$
\log(e^X e^Y) = \sum_{n = 0}^\infty F_n(X, Y)
$$

まず、定義域について議論する。$f = \sum_{n = 0}^\infty f_n(x, y) t^n$ を $f_0(x, y) \equiv 0$ かつ

$$
\frac{d}{dt}f = h_1(f)x + h_2(f)y
$$

で定義する。$f(x, y, t)$ は $(0, 0, 0)$ の近傍で収束する冪級数。$f_n(x, y)$ は $n$ 次斉次多項式だから、スケーリングすれば、$f(x, y, 1)$ は $(0, 0)$ の近傍で収束する。よって、$0 \in U \subset \mathfrak{g}_0$ が存在して、$|X|(|B|), |Y|(|B|) \subset U$ ならば $\sum_{n = 1}^\infty F_n(X, Y)$ は収束する。必要なら $U$ を取り替えれば、$\log(e^X e^Y)$ も定義される

$M(t) \coloneqq \log(e^{tX}e^{tY})$ とする。$e^{-M(t)}e^{M(t + s)} = e^{-tY}e^{sX}e^{(t + s)Y}$ の両辺を $s = 0$ で微分して

$$
\frac{1 - e^{-\mathrm{ad}_{M(t)}}}{\mathrm{ad}_{M(t)}}M'(t) = e^{-t\mathrm{ad}_Y}X + Y
$$

よって、$M'(t) = h_2(\mathrm{ad}_{M(t)})(e^{-t\mathrm{ad}_Y}X + Y)$。$e^{\mathrm{ad}_{M(t)}} = \mathrm{Ad}_{e^{M(t)}} = \mathrm{Ad}_{e^{tX}}\mathrm{Ad}_{e^{tY}} = e^{t\mathrm{ad}_X}e^{t\mathrm{ad}_Y}$ だから

$$
M'(t) = h_1(\mathrm{ad}_{M(t)})X + h_2(\mathrm{ad}_{M(t)})Y
$$

# 連結な Lie supergroup

Lie supergroup が連結とは、body の Lie group が連結なことをいう

$G, H$: Lie supergroup
$G$ が連結ならば、$f: G \to H$ は $df: \mathfrak{g} \to \mathfrak{h}$ で決まる

まず、$|f|: |G| \to |H|$ は $df: \mathfrak{g}_0 \to \mathfrak{h}_0$ で決まる。$|V| \subset \mathfrak{g}_0$ と $|U| \subset |G|$ が存在して、$\exp: V \xrightarrow{\sim} U$

$$
\begin{array}{ccc}
  V &\xrightarrow{df}& \mathfrak{h} \\
  \mathllap{\scriptsize{\exp}}\downarrow{\scriptsize{\sim}} && \downarrow{\scriptsize{\exp}} \\
  U &\xrightarrow{f}& H
\end{array}
$$

だから、$f|_U$ は $df$ で決まる。任意の $g_0 \in |G|$ に対して

$$
\begin{array}{ccc}
  U &\xrightarrow{f}& H \\
  \mathllap{\scriptsize{g_0 \cdot}}\downarrow{\scriptsize{\sim}} && \downarrow{\scriptsize{|f|(g_0) \cdot}} \\
  g_0 U &\xrightarrow{f}& H
\end{array}
$$

だから、$f|_{g_0 U}$ も $df$ で決まる。$|G| = \bigcup_{g_0 \in |G|} g_0|U|$ だから、$f$ は $df$ で決まる

$G \curvearrowright M$
$X \in \mathfrak{g}(B)$ とすると、$\varphi: \mathbb{R} \times M \times B \ni (t, x, b) \mapsto e^{tX(b)}x \in M$ が定まる。$t = 0$ での微分を考えれば、$X_M \in \mathcal{O}(M \times B, TM)$ ができる。$\varphi$ は $X_M$ の flow。$X \mapsto X_M$ は $\mathcal{O}(B)_0$ 線形だから、線形写像 $\mathfrak{g} \to \mathfrak{X}(M)$ が定まる。$[X_M, Y_M] = -[X, Y]_M$ を示す。$x \in M(C), b \in B(C)$ に対して

$$
\begin{aligned}
  ([X_M, Y_M]f)(x, b) &= \left.\frac{\partial}{\partial t}\right|_{t = 0} ((\varphi_t, \mathrm{pr}_B)^* Y_M \varphi_{-t}^* f)(x, b) \\
  &= \left.\frac{\partial^2}{\partial t \partial s}\right|_{t = s = 0} f(e^{-tX(b)}e^{sY(b)}e^{tX(b)}x) \\
  &= \left.\frac{\partial^2}{\partial t \partial s}\right|_{t = s = 0} f(e^{se^{-t\mathrm{ad}_{X(b)}}Y(b)}x) \\
  &= \left.\frac{\partial}{\partial t}\right|_{t = 0} ((e^{-t\mathrm{ad}_X}Y)_M f)(x, b) \\
  &= -([X, Y]_M f)(x, b)
\end{aligned}
$$

$G$ が連結ならば、$G \curvearrowright M$ は $\mathfrak{g} \to \mathfrak{X}(M)$ で決まる

$|V| \subset \mathfrak{g}_0, |U| \subset |G|$ を同様にとる。$g \in U(B), x \in M(B)$ とする。$X \in V(B)$ を $e^X = g$ で定める。$X_M$ の flow の $t = 1$ を考えれば、$M \times B \ni (x, b) \mapsto g(b)x \in M$ が決まる。よって、$gx \in M(B)$ が定まり、$U \times M \to M$ が決まる。任意の $g_0 \in |G|$ に対して

$$
\begin{array}{ccc}
  U \times M &\to& M \\
  \mathllap{\scriptsize{(g_0 \cdot, \mathrm{id}_M)}}\downarrow{\scriptsize{\sim}} && \downarrow{\scriptsize{g_0 \cdot}} \\
  g_0U \times M &\to& M
\end{array}
$$

よって、$g_0 \cdot: M \to M$ が決まれば良い。$|G| = \bigcup_{n = 0}^\infty |U|^n$ から従う

# TODO

- $1$ 連結な Lie supergroup と Lie superalgebra の一対一対応
- $G$, $\mathfrak{h} \subset \mathfrak{g}$ が与えられると、$H \subset G$ が定まること
- $G / H$ と $(G / H)(B)$
- $\mathrm{Ker}(G \to H)$ と $\mathrm{Ker}(G \to H)(B)$

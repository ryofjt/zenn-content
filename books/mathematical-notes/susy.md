---
title: "Supersymmetry"
---

# Super vector space, superalgebra

$\mathbb{R}$ 上で考える

$\mathbb{Z} / 2\mathbb{Z}$ 次数付きのベクトル空間 $V = V_0 \oplus V_1$ を super vector space という。$\mathbb{R}^{p|q} \coloneqq \mathbb{R}^p \oplus \mathbb{R}^q$

$\mathbb{Z} / 2\mathbb{Z}$ 次数付きの代数 $A = A_0 \oplus A_1$ を superalgebra という。外積代数

$$
\Lambda(\theta^1, \dots, \theta^q) = \bigoplus_{1 \le i_1 < \cdots < i_k \le q} \mathbb{R} \theta^{i_1} \cdots \theta^{i_k}
$$

は $k$ の偶奇で次数付けすると、superalgebra になる。Superalgebra $A$ が supercommutative とは

$$
ab = (-1)^{|a||b|} ba \quad (a, b \in A_0 \sqcup A_1)
$$

が成り立つことをいう。$\Lambda(\theta^1, \dots, \theta^q)$ は、$\theta^i \theta^j = -\theta^j \theta^i$ だから、supercommutative

$A, B$ を superalgebra とすると、$A \otimes B$ は

$$
(a \otimes b)(a' \otimes b') \coloneqq (-1)^{|b||a'|} aa' \otimes bb'
$$

によって superalgebra になる。$\Lambda(\theta^1, \dots, \theta^q) \otimes \Lambda(\xi^1, \dots, \xi^{q'}) = \Lambda(\theta^1, \dots, \theta^q, \xi^1, \dots, \xi^{q'})$

# Superspace

$U_0 \subset \mathbb{R}^p$
$U_0$ 上の関数環は $C^\infty(U_0)$

$$
\begin{array}{ccc}
  U_0 \text{ たちの圏} &\overset{\text{反変}}{\simeq}& C^\infty(U_0) \text{ たちの圏} \\
  U_0 \xrightarrow{f_0} V &\leftrightarrow& C^\infty(V_0) \xrightarrow{f_0^*} C^\infty(U_0)
\end{array}
$$

右辺を superalgebra に取り替えて、superspace を定義する

Superalgebra

$$
\mathcal{O}(U) \coloneqq C^\infty(U_0) \otimes \Lambda(\theta^1, \dots, \theta^q) \quad (U_0 \subset \mathbb{R}^p, q \ge 0)
$$

を幾何的な対象とみなして、superspace $U$ と定義する。つまり

$$
\begin{array}{ccc}
  U \text{ たちの圏} &\overset{\text{反変}}{\simeq}& \mathcal{O}(U) \text{ たちの圏} \\
  U \xrightarrow{f} V &\leftrightarrow& \mathcal{O}(V) \xrightarrow{f^*} \mathcal{O}(U)
\end{array}
$$

$\mathcal{O}(U) / \{ \text{冪零元} \} \simeq C^\infty(U_0)$ だから

$$
\begin{array}{ccc}
  U \text{ たちの圏} &\overset{\text{反変}}{\simeq}& \mathcal{O}(U) \text{ たちの圏} \\
  \downarrow{\scriptsize{\mathrm{red}}} && \downarrow{\scriptsize{\mathrm{red}}} \\
  U_0 \text{ たちの圏} &\overset{\text{反変}}{\simeq}& C^\infty(U_0) \text{ たちの圏}
\end{array}
$$

super vector space $V = V_0 \oplus V_1$ は $C^\infty(V_0) \otimes \Lambda V_1$ を考えると、superspace とみなせる

制限写像 $C^\infty(\mathbb{R}^p) \otimes \Lambda(\theta^1, \dots, \theta^q) \to C^\infty(U_0) \otimes \Lambda(\theta^1, \dots, \theta^q)$ があるので、$U \subset \mathbb{R}^{p|q}$ と表記する

$U_0 \subset \mathbb{R}^p$, $V_0 \subset \mathbb{R}^{p'}$
引き戻し

$$
\{ f_0: U_0 \to V_0 \} \to \{ y^1, \dots, y^{p'} \in C^\infty(U_0) \mid (y^1, \dots, y^{p'})(U_0) \subset V_0 \}
$$

は全単射だが、superspace に関しても以下が成り立つ

[Prop]
$U \subset \mathbb{R}^{p|q}$, $V \subset \mathbb{R}^{p'|q'}$
引き戻し

$$
\begin{aligned}
  &\{ f: U \to V \} \\
  &\to \{ y^1, \dots, y^{p'} \in \mathcal{O}(U)_0, \xi^1, \dots, \xi^{q'} \in \mathcal{O}(U)_1 \mid (y^1_\mathrm{red}, \dots, y^{p'}_\mathrm{red})(U_\mathrm{red}) \subset V_\mathrm{red} \}
\end{aligned}
$$

は全単射。$y^i_\mathrm{red} \in C^\infty(U_\mathrm{red})$ に注意

逆写像を定義する。$\varphi \in \mathcal{O}(V)$ に対して、$f^*\varphi$ を定義すればよい。$\varphi \in C^\infty(V_\mathrm{red})$ として良い。$y^i \in \mathcal{O}(U)_0 = \bigoplus_{\varepsilon \in \{0, 1\}^q, |\varepsilon| \in 2\mathbb{Z}_{\ge 0}} C^\infty(U_\mathrm{red}) \theta^\varepsilon$ を $\varepsilon = 0$ の部分とそれ以外で分ければ

$$
y^i = y^i_\mathrm{red} + r^i
$$

「$\varphi(y + r) = \sum_{\alpha \in \mathbb{Z}_{\ge 0}^n} \frac{\partial_y^\alpha\varphi(y)}{\alpha!} r^\alpha$」を意識して

$$
f^*\varphi \coloneqq \sum_\alpha \frac{\partial_y^\alpha\varphi \circ f_\mathrm{red}}{\alpha!} r^\alpha
$$

と定義すればよい

# $S$-points

Superspace $U$ に対して、関手 $\mathsf{sSpace}^\mathrm{op} \ni S \mapsto \mathrm{Hom}_\mathsf{sSpace}(S, U) \in \mathsf{Set}$ を $S$-points という。米田埋め込み

$$
\mathsf{sSpace} \to \mathsf{Set}^{\mathsf{sSpace}^\mathrm{op}}
$$

を考えている。$U(S) \coloneqq \mathrm{Hom}_\mathsf{sSpace}(S, U)$ とする。Superspace の射 $U \to V$ を与えることは、$S$ に関して自然な写像 $U(S) \to V(S)$ を与えることと同値

$\mathbb{R}^{p|q}(S) = \mathcal{O}(S)_0^p \times \mathcal{O}(S)_1^q$

Superspace 上に Lie supergroup の構造を与えることは、$S$-points 上に $S$ に関して自然な群構造を与えることと同値

# 具体例

後で使うわけではないが、$GL_{p|q}(\mathbb{R})$ を構成する

$$
\mathfrak{gl}_n(\mathbb{R}) = M_n(\mathbb{R}) \xrightarrow{\exp} GL_n(\mathbb{R})
$$

の類似を構成する

$$
\mathfrak{gl}_{p|q}(\mathbb{R}) \coloneqq \underline{\mathrm{End}}_\mathbb{R}(\mathbb{R}^{p|q}) = \left\{ \begin{pmatrix}
  A & \Theta \\
  \Xi & B
\end{pmatrix} \middle| \begin{aligned}
  A \in \mathbb{R}^{p \times p}, \Theta \in (\mathbb{R}^{0|1})^{p \times q} \\
  \Xi \in (\mathbb{R}^{0|1})^{q \times p}, B \in \mathbb{R}^{q \times q}
\end{aligned} \right\}
$$

$\underline{\mathrm{End}}$ の下線は、odd な射も考えることを意味する。$\underline{\mathrm{End}}_\mathbb{R}(\mathbb{R}^{p|q})$ は superalgebra だから、$[X, Y] \coloneqq XY - (-1)^{|X||Y|}[Y, X]$ によって、$\mathfrak{gl}_{p|q}(\mathbb{R})$ は Lie superalgebra になる。つまり、以下を満たす

$$
\begin{aligned}
  &[X, Y] = -(-1)^{|X||Y|}[Y, X] \\
  &[X, [Y, Z]] + (-1)^{|X||Y| + |X||Z|}[Y, [Z, X]] + (-1)^{|X||Z| + |Y||Z|}[Z, [X, Y]] = 0
\end{aligned}
$$

$\mathfrak{gl}_{p|q}(\mathbb{R})$ の superspace としての $S$-points は

$$
\mathfrak{gl}_{p|q}(\mathbb{R})(S) = \left\{ \begin{pmatrix}
  A & \Theta \\
  \Xi & B
\end{pmatrix} \middle| \begin{aligned}
  A \in \mathcal{O}(S)_0^{p \times p}, \Theta \in \mathcal{O}(S)_1^{p \times q} \\
  \Xi \in \mathcal{O}(S)_1^{q \times p}, B \in \mathcal{O}(S)_0^{q \times q}
\end{aligned} \right\}
$$

$GL_{p|q}(\mathbb{R})$ の $S$-points は

$$
GL_{p|q}(\mathbb{R})(S) = \left\{ \begin{pmatrix}
  A & \Theta \\
  \Xi & B
\end{pmatrix} \in \mathfrak{gl}_{p|q}(\mathbb{R})(S) \middle| \begin{pmatrix}
  A & \Theta \\
  \Xi & B
\end{pmatrix} \text{ は可逆} \right\}
$$

になって欲しいが、可逆性は $\mathrm{det}(A_\mathrm{red}), \mathrm{det}(B_\mathrm{red}) \in C^\infty(S_\mathrm{red})$ が全ての点で消えないことと同値だから

$$
\mathcal{O}(GL_{p|q}(\mathbb{R})) \coloneqq C^\infty(GL_p(\mathbb{R}) \times GL_q(\mathbb{R})) \otimes \Lambda(\Theta_{ij}, \Xi_{kl})
$$

と定義すれば良い

$GL_{p|q}(\mathbb{R})(S)$ は明らかに $S$ に関して自然な群構造を持つから、$GL_{p|q}(\mathbb{R})$ は Lie supergroup になる。同様に、$S$-points 間の写像を考えて

$$
\mathfrak{gl}_{p|q}(\mathbb{R}) \xrightarrow{\exp} GL_{p|q}(\mathbb{R})
$$

が定まる

# Super vector field

$U \subset \mathbb{R}^{p|q}$

$X \in \underline{\mathrm{End}}_\mathbb{R}(\mathcal{O}(U))$ が $U$ 上の super vector field とは

$$
X(fg) = (Xf)g + (-1)^{|X||f|} f(Xg)
$$

を満たすことをいう。$U$ 上の super vector field 全体を $\mathfrak{X}(U)$ とすると

$$
\mathfrak{X}(U) = \bigoplus \mathcal{O}(U) \partial_{x^i} \oplus \bigoplus \mathcal{O}(U) \partial_{\theta^j}
$$

$\mathfrak{X}(U)$ は Lie superalgebra になる。$\partial_{\theta^j}$ は odd なことに注意

# Heisenberg 群

これも後で使うわけではないが、super Minkowski space の構成の類似として、Heisenberg 群を考える

$$
H \coloneqq \left\{ \begin{pmatrix}
  1 & a & c \\
  0 & 1 & b \\
  0 & 0 & 1
\end{pmatrix} \middle| a, b, c \in \mathbb{R} \right\}
$$

は Heisenberg 群と呼ばれる。対応する Lie algebra は

$$
\mathfrak{h} \coloneqq \left\{ \begin{pmatrix}
  0 & x & z \\
  0 & 0 & y \\
  0 & 0 & 0
\end{pmatrix} \middle| x, y, z \in \mathbb{R} \right\}
$$

$\exp: \mathfrak{h} \to H$ は同型だから、$H$ の群構造を $\mathfrak{h}$ 内で以下のように記述できる。$X, Y \in \mathfrak{h}$ に対して、BCH formula から

$$
\begin{aligned}
  \exp^{-1}(e^X e^Y) &= X + Y + \frac{1}{2}[X, Y] + \frac{1}{12}([X, [X, Y]] + [Y, [Y, X]]) + \cdots \\
  &= X + Y + \frac{1}{2}[X, Y]
\end{aligned}
$$

この演算で $\mathfrak{h}$ は $H$ と同型な Lie group になる


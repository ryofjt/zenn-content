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

[例]
$\mathbb{R}^{1|2} \to \mathbb{R}^{1|1}$ は

$$
\begin{aligned}
  y &= f(x) + g(x)\theta_1\theta_2 \\
  \xi &= a(x)\theta_1 + b(x)\theta_2
\end{aligned}
$$

で与えられる。$\varphi(y) + \psi(y)\xi \in \mathcal{O}(\mathbb{R}^{1|1})$ の引き戻しを求める

$$
\varphi(y + r) \sim \sum_{n = 0}^\infty \frac{1}{n!} \varphi^{(n)}(y) r^n
$$

だから

$$
\varphi(f(x)) + \varphi'(f(x))g(x)\theta_1\theta_2 + \{\psi(f(x)) + \psi'(f(x))g(x)\theta_1\theta_2\}\{a(x)\theta_1 + b(x)\theta_2\}
$$

# $S$-points

Superspace $U$ に対して、関手 $\mathsf{sSpace}^\mathrm{op} \ni S \mapsto \mathrm{Hom}_\mathsf{sSpace}(S, U) \in \mathsf{Set}$ を $S$-points という。米田埋め込み

$$
\mathsf{sSpace} \to \mathsf{Set}^{\mathsf{sSpace}^\mathrm{op}}
$$

を考えている。$U(S) \coloneqq \mathrm{Hom}_\mathsf{sSpace}(S, U)$ とする。Superspace の射 $U \to V$ を与えることは、$S$ に関して自然な写像 $U(S) \to V(S)$ を与えることと同値

$\mathbb{R}^{p|q}(S) = \mathcal{O}(S)_0^p \times \mathcal{O}(S)_1^q = (\mathcal{O}(S) \otimes \mathbb{R}^{p|q})_0$

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
\end{pmatrix} \in M_{p|q}(\mathbb{R})(S) \middle| \begin{pmatrix}
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

$M \subset \mathbb{R}^n$
$M$-points は $C^\infty(M, \mathfrak{h})$ であり、$M$-points 上の群構造は

$$
f \cdot g = f + g + \frac{1}{2}[f, g]
$$

# $\mathrm{Spin}^+(V)$

$(V, B) \coloneqq (\mathbb{R}^{p + q}, x_1y_1 + \cdots + x_py_p - x_{p + 1}y_{p + 1} - \cdots - x_{p + q}y_{p + q})$: 符号 $(p, q)$ の不定値内積空間

$Q(v) \coloneqq B(v, v)$

$V$ の標準基底を $e_i \ (1 \le i \le p + q)$ とする

$C(V) \coloneqq T(V) / \langle v \otimes v - Q(v)1 \mid v \in V \rangle$ を Clifford 代数という。$vw + wv = 2B(v, w)$

$$
C(V) = \bigoplus_{1 \le i_1 < \cdots < i_k \le p + q} \mathbb{R} e_{i_1} \cdots e_{i_k}
$$

であり

$$
\begin{aligned}
  e_i^2 &= 1 &\quad (1 \le i \le p) \\
  e_i^2 &= -1 &\quad (p + 1 \le i \le p + q) \\
  e_ie_j &= -e_je_i &\quad (i \ne j)
\end{aligned}
$$

$Q(v) \ne 0$ とすると

$$
-vwv^{-1} = -\frac{1}{Q(v)}vwv = -\frac{1}{Q(v)}v(-vw + 2B(w, v)) = w - \frac{2B(w, v)}{Q(v)}v = R_v(w)
$$

よって、$\mathrm{Pin}(V) \coloneqq \{ v_1 \cdots v_k \mid v_i \in V, Q(v_i) = \pm 1 \}$ とすると

$$
\mathrm{Pin}(V) \ni v_1 \cdots v_k \mapsto R_{v_1} \cdots R_{v_k} \in O(V)
$$

によって、$\mathrm{Pin}(V)$ は $V$ に等長に作用する。$k$ が偶数なら、$SO(V)$ を通じて、$Q(v_i) = -1$ となる $i$ の数が偶数なら、$O^+(V)$ を通じて $V$ に作用する。よって

$$
\mathrm{Spin}^+(V) \coloneqq \{ v_1 \cdots v_k \mid v_i \in V, Q(v_i) = \pm 1, k \text{ は偶数}, Q(v_1) \cdots Q(v_k) = 1 \}
$$

とすると、$\mathrm{Spin}^+(V)$ は $SO^+(V)$ を通じて $V$ に作用する

$$
1 \to \{\pm 1\} \to \mathrm{Spin}^+(V) \to SO^+(V) \to 1
$$

$\mathrm{Spin}^+(V)$ は以下のように closed な形で表せる。Antiautomorphism

$$
\beta: C(V) \ni v_1 \cdots v_k \mapsto v_k \cdots v_1 \in C(V)
$$

を用いて $N(x) \coloneqq x\beta(x) \ (x \in C(V))$ とすると

$$
\mathrm{Spin}^+(V) = \{ x \in C(V)^+ \mid N(x) = 1, xVx^{-1} \subset V \}
$$

$N(v_1 \cdots v_k) = Q(v_1) \cdots Q(v_k)$ に注意

$C(V)^+$ 加群 $S$ には $\mathrm{Spin}^+(V)$ が作用する。このような $\mathrm{Spin}^+(V)$ の表現をスピン表現という

$p = 1$ の場合について、いくつか具体的に計算する

[$(p, q) = (1, 0)$]
$C(V) = \mathbb{R}[\varepsilon]$。ただし、$\varepsilon$ は odd で $\varepsilon^2 = 1$

$$
e_0 \leftrightarrow \varepsilon
$$

$C(V)^+ = \mathbb{R}$
$\beta = 1_{C(V)}$
$N|_{C(V)^+}(a) = a^2$
$\mathrm{Spin}^+(V) = \{\pm 1\}$
既約スピン表現は $S = \mathbb{R}$
$V = S^{\otimes 2}$

[$(p, q) = (1, 1)$]
$C(V) \simeq M_{1|1}(\mathbb{R})$

$$
\begin{aligned}
  e_0 &\leftrightarrow \begin{pmatrix}
    0 & 1 \\
    1 & 0
  \end{pmatrix} \\
  e_1 &\leftrightarrow \begin{pmatrix}
    0 & -1 \\
    1 & 0
  \end{pmatrix}
\end{aligned}
$$

$C(V)^+ = \mathbb{R} \times \mathbb{R}$
$\beta(X) = e_0 X^T e_0^{-1}$
$N|_{C(V)^+}\left(\begin{pmatrix} a & 0 \\ 0 & b \end{pmatrix}\right) = \begin{pmatrix} a & 0 \\ 0 & b \end{pmatrix} \begin{pmatrix} b & 0 \\ 0 & a \end{pmatrix} = abI$
$\mathrm{Spin}^+(V) = \left\{ \begin{pmatrix} a & 0 \\ 0 & a^{-1} \end{pmatrix} \middle| a \in \mathbb{R}^\times \right\}$
既約スピン表現は

$$
\begin{aligned}
  &S^+: \mathrm{Spin}^+(V) \ni \begin{pmatrix}
    a & 0 \\
    0 & a^{-1}
  \end{pmatrix} \mapsto a \in R^\times \\
  &S^-: \mathrm{Spin}^+(V) \ni \begin{pmatrix}
    a & 0 \\
    0 & a^{-1}
  \end{pmatrix} \mapsto a^{-1} \in R^\times
\end{aligned}
$$

$V = \mathbb{R}(e_0 - e_1) \oplus \mathbb{R}(e_0 + e_1) = (S^+)^{\otimes 2} \oplus (S^-)^{\otimes 2}$

[$(p, q) = (1, 2)$]
$C(V) \simeq M_2(\mathbb{R}[\eta])$。ただし、$\eta$ は odd で $\eta^2 = -1$

$$
\begin{aligned}
  e_0 &\leftrightarrow \eta \begin{pmatrix}
    0 & -1 \\
    1 & 0
  \end{pmatrix} \\
  e_1 &\leftrightarrow \eta \begin{pmatrix}
    0 & 1 \\
    1 & 0
  \end{pmatrix} \\
  e_2 &\leftrightarrow \eta \begin{pmatrix}
    1 & 0 \\
    0 & -1
  \end{pmatrix}
\end{aligned}
$$

$C(V)^+ = M_2(\mathbb{R})$
Antiautomorphism $c: \mathbb{R}[\eta] \to \mathbb{R}[\eta]$ を $c(\eta) \coloneqq -\eta$ で定義すると
$\beta(Z) = e_0 c(Z)^T e_0^{-1}$
$\beta|_{C(V)^+}(X) = J X^T J^{-1}$。ただし、$J \coloneqq \begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}$
$N|_{C(V)^+}\left(\begin{pmatrix} a & b \\ c & d \end{pmatrix}\right) = \begin{pmatrix} a & b \\ c & d \end{pmatrix} \begin{pmatrix} d & -b \\ -c & a \end{pmatrix} = (ad - bc)I$
$\mathrm{Spin}^+(V) = SL_2(\mathbb{R})$
既約スピン表現は $S = \mathbb{R}^2$
$V = \eta \{ X \in M_2(\mathbb{R}) \mid \mathrm{Tr}X = 0 \} \subset C(V)$
ペアリング $S \otimes S \to \bigwedge^2 S \simeq \mathbb{R}$ が $\mathrm{Spin}^+(V)$ 不変なことに注意して

$$
\begin{array}{ccccc}
  M_2(\mathbb{R}) &\simeq& S^* \otimes S &\simeq& S \otimes S \\
  \downarrow{\scriptsize{\mathrm{Tr}}} && \downarrow{\scriptsize{\mathrm{Tr}}} && \downarrow \\
  \mathbb{R} &=& \mathbb{R} &=& \mathbb{R}
\end{array}
$$

$\mathrm{Ker}$ を考えれば、$V \simeq \mathrm{Sym}^2 S$

[$(p, q) = (1, 3)$]
$C(V) \simeq M_2(\mathbb{R}[\eta_1, \eta_2])$。ただし、$\eta_1, \eta_2$ は odd で $\eta_1^2 = \eta_2^2 = -1$ かつ $\eta_1\eta_2 = -\eta_2\eta_1$

$$
\begin{aligned}
  e_0 &\leftrightarrow \eta_1 \begin{pmatrix}
    0 & -1 \\
    1 & 0
  \end{pmatrix} \\
  e_1 &\leftrightarrow \eta_1 \begin{pmatrix}
    0 & 1 \\
    1 & 0
  \end{pmatrix} \\
  e_2 &\leftrightarrow \eta_1 \begin{pmatrix}
    1 & 0 \\
    0 & -1
  \end{pmatrix} \\
  e_3 &\leftrightarrow \eta_2 I
\end{aligned}
$$

$\mathbb{R}[\eta_1, \eta_2]^+ \simeq \mathbb{C}$ ($\eta_1\eta_2 \leftrightarrow i$) だから、$C(V)^+ \simeq M_2(\mathbb{C})$
Antiautomorphism $c: \mathbb{R}[\eta_1, \eta_2] \to \mathbb{R}[\eta_1, \eta_2]$ を $c(\eta_1) \coloneqq -\eta_1$, $c(\eta_2) \coloneqq -\eta_2$ で定義すると
$\beta(Z) = e_0 c(Z)^T e_0^{-1}$
$\beta|_{C(V)^+}(X) = J X^T J^{-1}$。ただし、$J \coloneqq \begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}$
$N|_{C(V)^+}\left(\begin{pmatrix} \alpha & \beta \\ \gamma & \delta \end{pmatrix}\right) = \begin{pmatrix} \alpha & \beta \\ \gamma & \delta \end{pmatrix} \begin{pmatrix} \delta & -\beta \\ -\gamma & \alpha \end{pmatrix} = (\alpha\delta - \beta\gamma)I$
$\mathrm{Spin}^+(V) = SL_2(\mathbb{C})$
既約スピン表現は $S = \mathbb{C}^2$

$$
\begin{aligned}
  V &= \eta_1 \left\{ \begin{pmatrix}
    \alpha & b \\
    c & -\bar{\alpha}
  \end{pmatrix} \middle| \alpha \in \mathbb{C}, b, c \in \mathbb{R} \right\} \\
  &= \{ \eta_1 X \in \eta_1 M_2(\mathbb{C}) \mid \beta(\eta_1 X) = \eta_1 X \} \\
  &= \{ X \in M_2(\mathbb{C}) \mid J\bar{X}J^{-1} = -X \}
\end{aligned}
$$

ただし、最右辺への $g \in \mathrm{Spin}^+(V)$ の作用は、$\bar{g}Xg^{-1}$
ペアリング $S \otimes_\mathbb{C} S \to \bigwedge^2 S \simeq \mathbb{C}$ が $\mathrm{Spin}^+(V)$ 不変なことに注意して

$$
\begin{aligned}
  V &\simeq \{ X \in M_2(\mathbb{C}) \mid J\bar{X}J^{-1} = X \} \\
  &\simeq \{ \psi \in \bar{S} \otimes_\mathbb{C} S^* \mid \psi^\dag = -\psi \} \\
  &\simeq \{ \varphi \in \bar{S} \otimes_\mathbb{C} S \mid \varphi^\tau = \varphi \}
\end{aligned}
$$

ただし、$\tau: \bar{S} \otimes_\mathbb{C} S \ni \bar{s} \otimes t \mapsto \bar{t} \otimes s \in \bar{S} \otimes_\mathbb{C} S$

# $\Gamma$

$V$: 符号 $(1, d - 1)$ の Minkowski 空間

$\mathrm{Spin}^+(V) \curvearrowright S$: 既約スピン表現
$p = 1$ の場合には、$0$ でない対称な $\mathrm{Spin}^+(V)$ 準同型 $\Gamma: S \otimes_\mathbb{R} S \to V$ が $\mathbb{R}^\times$ 倍を除いて一意的に存在する

[$d = 1$]
$\Gamma: S \otimes_\mathbb{R} S = \mathbb{R} \otimes_\mathbb{R} \mathbb{R} \ni a \otimes b \mapsto ab \in \mathbb{R} = V$

[$d = 2$]
$\Gamma: S^+ \otimes S^+ = \mathbb{R} \otimes_\mathbb{R} \mathbb{R} \ni a \otimes b \mapsto ab(e_0 - e_1) \in V$

[$d = 3$]
$\Gamma: S \otimes_\mathbb{R} S \ni s \otimes t \mapsto st \in \mathrm{Sym}^2 S = V$

[$d = 4$]
$\Gamma: S \otimes_\mathbb{R} S \ni s \otimes t \mapsto s \otimes \bar{t} + t \otimes \bar{s} \in (S \otimes_\mathbb{C} \bar{S})^\tau = V$

\end{aligned}
$$


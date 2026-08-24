---
title: "事前ゼミ"
emoji: "✏️"
type: "tech"
topics: ["math"]
published: false
---

[Settings]

$K$: field
$|\Lambda| < \infty$
$\displaystyle{A = \bigoplus_{\substack{\lambda \in \Lambda \\ \mathfrak{s}, \mathfrak{t} \in \mathcal{T}(\lambda)}} K c^\lambda_{\mathfrak{s}\mathfrak{t}}}$: cellular algebra
$C^\lambda \ (\lambda \in \Lambda)$: standard modules
$\Lambda_0 \coloneqq \{ \lambda \in \Lambda \mid \langle C^\lambda, C^\lambda \rangle \ne 0 \}$
$D^\mu = C^\mu / \mathrm{rad}C^\mu \ (\mu \in \Lambda_0)$: simple modules

**Cor 2.17**

$$
[C^\lambda : D^\mu] = \begin{cases}
  1 &\quad (\lambda = \mu) \\
  * &\quad (\lambda > \mu) \\
  0 &\quad (\lambda \not\ge \mu)
\end{cases}
$$

$\underline{\text{pf}}$

[$\lambda \not\ge \mu$ の場合]

Prop 2.12 から、$\forall M \subset C^\lambda, \mathrm{Hom}_A(C^\mu, C^\lambda / M) = 0$

---

$C^\mu \twoheadrightarrow D^\mu$ だから $\mathrm{Hom}_A(D^\mu, C^\lambda / M) \subset \mathrm{Hom}_A(C^\mu, C^\lambda / M) = 0$

[$\lambda = \mu$ の場合]

Prop 2.12 から、$\forall N \subset \mathrm{rad}C^\mu, \mathrm{Hom}_A(C^\mu, C^\mu / N) = K$

$$
0 \to \mathrm{rad}C^\mu / N \to C^\mu / N \to D^\mu \to 0
$$

$$
0 \to \mathrm{Hom}_A(C^\mu, \mathrm{rad}C^\mu / N) \to \mathrm{Hom}_A(C^\mu, C^\mu / N) \to \mathrm{Hom}_A(C^\mu, D^\mu)
$$

$0 = \mathrm{Hom}_A(C^\mu, \mathrm{rad}C^\mu / N) \supset \mathrm{Hom}_A(D^\mu, \mathrm{rad}C^\mu / N)$ $\blacksquare$

少し、PIM の一般論をします

$A$: 右 Artin 環 ($\Leftarrow$ 体上の有限次元代数)

$e \in A$ が冪等 $\overset{\mathrm{def}}{\iff}$ $e^2 = e$

$E \subset A_A$ が直和因子 $\iff$ ある冪等元 $e \in A$ が存在して $E = eA$

---

$A_A$ の $0$ でない直和因子で、それ以上直和分解できないものを PIM という

冪等元 $0 \ne e \in A$ が原始的 $\overset{\mathrm{def}}{\iff}$ 冪等元 $p, q \in A$ が $pq = qp = 0$ かつ $e = p + q$ を満たすならば、$p = 0$ or $q = 0$

**Lem A7 & Cor A8**
$P \subset A_A$ が PIM $\iff$ 原始的冪等元 $e \in A$ が存在して $P = eA$

**Thm A6 (Krull-Schmidt)**
$A_A = P_1 \oplus \cdots \oplus P_k$ と PIM に直和分解できるが、$P_1, \dots, P_k$ は並べ替えと同型を除いて一意的

**Thm A10**
PIM $P$ は唯一の極大部分加群を持つ

**Cor A12**

$$
\{ \text{PIM の同型類} \} \ni P \mapsto P / \mathrm{rad}P \in \{ \text{simple module の同型類} \}
$$

は全単射

---

具体例

$A = \begin{pmatrix} \mathbb{C} & \mathbb{C} \\ 0 & \mathbb{C} \end{pmatrix}$

$A = \begin{pmatrix} \mathbb{C} & \mathbb{C} \\ 0 & 0 \end{pmatrix} \oplus \begin{pmatrix} 0 & 0 \\ 0 & \mathbb{C} \end{pmatrix} \eqqcolon P_1 \oplus P_2$: PIM への直和分解

$P_2$ は単純。$P_1 \supset \begin{pmatrix} 0 & \mathbb{C} \\ 0 & 0 \end{pmatrix} = \mathrm{rad}P_1 \simeq P_2$

**Prop A14 & Cor A16**
$P = eA$: PIM
$M$: 有限 $A$ 加群

$$
[M : P / \mathrm{rad}P] = \ell_{\mathrm{End}_A(P)} \mathrm{Hom}_A(P, M) = \ell_{eAe} Me
$$

$\mathrm{End}_A(P) \simeq eAe$ は局所環で、剰余環は $\mathrm{End}_A(P / \mathrm{rad}P) \simeq eAe / eJ(A)e$ なことに注意

$\underline{\text{pf}}$

$\mathrm{Hom}_A(P, M) \simeq Me$ だから、2 つ目の $=$ は容易

[$M \simeq P / \mathrm{rad}P$ の場合]

$$
\ell_{\mathrm{End}_A(P)} \mathrm{Hom}_A(P, P / \mathrm{rad}P) = \ell_{\mathrm{End}_A(P)} \mathrm{End}_A(P / \mathrm{rad}P) = 1
$$

[$M$ が単純で、$M \not\simeq P / \mathrm{rad}P$ の場合]
$\mathrm{Hom}_A(P, M) = 0$ から明らか

[一般の場合]
両辺とも $K(A\text{-}\mathrm{Mod}_\mathrm{fg}) \to \mathbb{Z}$ を誘導することから従う $\blacksquare$

特に、$[M : P / \mathrm{rad}P] = 0 \iff Me = 0$

---

Cellular 代数に戻る

**Lem 2.18**

$$
[C^\nu : D^\lambda] = \mathrm{dim}_K \mathrm{Hom}_A(P^\lambda, C^\nu) = \mathrm{dim}_K P^\lambda \otimes_A C^{*\nu}
$$

$\underline{\text{pf}}$

[1 つ目の $=$]
$D^\lambda$ が絶対既約だから、$\mathrm{End}_A(P^\lambda)$ の剰余環が $\mathrm{End}_A(D^\lambda) = K$ になることから従う

[2 つ目の $=$]

$$
\mathrm{Hom}_K(P^\lambda \otimes_A C^{*\nu}, K) = \mathrm{Hom}_A(P^\lambda, \mathrm{Hom}_K(C^{*\nu}, K))
$$

だから、$\mathrm{dim}_K \mathrm{Hom}_A(P^\lambda, C^\nu) = \mathrm{dim}_K \mathrm{Hom}_A(P^\lambda, \mathrm{Hom}_K(C^{*\nu}, K))$ を示せば良い

$$
K(\mathrm{Mod}_\mathrm{fg}\text{-}A) \ni [M] \mapsto [\mathrm{Hom}_K(M^*, K)] \in K(\mathrm{Mod}_\mathrm{fg}\text{-}A)
$$

が恒等的なことを示せば良い。単純加群 $D^\mu$ は非退化なペアリングを持つから、$D^\mu \simeq \mathrm{Hom}_K(D^{*\mu}, K)$ $\blacksquare$

**Thm 2.20**

$$
[P^\lambda : D^\mu] = \sum_{\nu \in \Lambda} [C^\nu : D^\lambda][C^\nu : D^\mu]
$$

特に、$[P^\lambda : D^\mu] = [P^\mu : D^\lambda]$

---

$\underline{\text{pf}}$

$\Lambda$ から極小元を取り除いていくと

$$
\emptyset = \Gamma_0 \subset \Gamma_1 \subset \cdots \subset \Gamma_k = \Lambda
$$

$\Gamma_i \setminus \Gamma_{i - 1} \eqqcolon \{ \nu_i \}$

$$
0 = A(\Gamma_0) \subset A(\Gamma_1) \subset \cdots \subset A(\Gamma_k) = A
$$

$P^\lambda \otimes_A -$ すると

$$
0 = P^\lambda \otimes_A A(\Gamma_0) \subset P^\lambda \otimes_A A(\Gamma_1) \subset \cdots \subset P^\lambda \otimes_A A(\Gamma_k) = P^\lambda
$$

部分商は $P^\lambda \otimes_A (A(\Gamma_i) / A(\Gamma_{i - 1})) = P^\lambda \otimes_A C^{*\nu_i} \otimes_K C^{\nu_i}$

$$
\begin{aligned}
  [P^\lambda : D^\mu] &= \sum_{\nu \in \Lambda} (\mathrm{dim}_K P^\lambda \otimes_A C^{*\nu}) [C^\nu : D^\mu] \\
  &= \sum_{\nu \in \Lambda} [C^\nu : D^\lambda][C^\nu : D^\mu]
\end{aligned}
$$

$\blacksquare$

証明から、$P^\lambda$ は部分商が $C^\nu$ のフィルトレーションを持つ。$C^\nu$ の出現回数は $\mathrm{dim}_K P^\lambda \otimes_A C^{*\nu} = [C^\nu : D^\lambda]$
$\implies$ 現れるのは $C^\nu \ (\nu \ge \lambda)$ のみで、$C^\lambda$ は top に 1 回だけ現れる

---

**Cor 2.23**
$\Lambda_0 = \Lambda$ ならば、$A$ は quasi-hereditary

$A$: 右 Artin 環
$A$ が quasi-hereditary なことと、以下を満たすことは同値

$\{ D^\lambda \mid \lambda \in \Lambda \}$ を単純 $A$ 加群の同型類とする。$\Lambda$ 上の半順序と、標準加群と呼ばれる $C^\lambda \ (\lambda \in \Lambda)$ が存在して

(a) $P^\lambda$ は部分商が $C^\mu \ (\mu \ge \lambda)$ のフィルトレーションを持ち、$C^\lambda$ は top に 1 回だけ現れる
(b) $C^\lambda$ は部分商が $D^\mu \ (\mu \le \lambda)$ のフィルトレーションを持ち、$D^\lambda$ は top に 1 回だけ現れる

$A$ が quasi-hereditary ならば、$\mathrm{gl.dim} A < \infty$

$\underline{\text{pf}}$

$\mathrm{proj.dim} P_\lambda = 0$ $\Rightarrow$ $\mathrm{proj.dim} C^\lambda < \infty$ $\Rightarrow$ $\mathrm{proj.dim} D^\lambda < \infty$ $\Rightarrow$ $\mathrm{gl.dim} A < \infty$ $\blacksquare$

---

**Cor 2.21**
以下は同値
(i) $A$ は半単純
(ii) $\Lambda_0 = \Lambda$ かつ $C^\lambda = D^\lambda$
(iii) $C^\lambda$ 上のペアリングが非退化
(iv) $[C^\nu : D^\lambda] = \delta_{\nu\lambda}$

$\underline{\text{pf}}$

(ii) $\iff$ (iii) は容易

[(i) $\implies$ (iv)]
$P^\lambda = D^\lambda$ だから、Thm 2.20 から

$$
1 = \sum_{\nu \in \Lambda} [C^\nu : D^\lambda]^2
$$

よって、$[C^\nu : D^\lambda] = \delta_{\nu\lambda}$

[(iv) $\implies$ (ii)]
$\nu_0 \in \Lambda \setminus \Lambda_0$ が存在すると仮定すると、$C^{\nu_0} = 0$

[(ii) $\implies$ (i)]
Thm 2.20 から $[P^\lambda : D^\mu] = \delta_{\lambda\mu}$。よって、$P^\lambda = D^\lambda$ $\blacksquare$

---

少し、Cartan 行列の一般論をします

$A$: 右 Artin 環

両側イデアルによる直和分解

$$
{}_AA_A = B_1 \oplus \cdots \oplus B_c
$$

でそれ以上直和分解できないものをブロック分解という

**Prop A17**
ブロック分解は入れ替えを除いて一意的

$$
\mathrm{Irr}(A) = \mathrm{Irr}(B_1) \sqcup \cdots \sqcup \mathrm{Irr}(B_c)
$$

有限 $A$ 加群 $M$ がブロック $B_i$ に属する $\overset{\mathrm{def}}{\iff}$ $M$ の組成因子たちが $\mathrm{Irr}(B_i)$ に入る

$\mathrm{Irr}(A)$ 上で
$S \sim_c T$ $\overset{\mathrm{def}}{\iff}$ $S = S_0, \dots, S_k = T$ が存在して、$[P^{S_i} : D^{S_{i + 1}}] > 0$ or $[P^{S_{i + 1}} : D^{S_i}] > 0$

---

$S, T$ が同じブロックに属する $\iff$ $S \sim_c T$

$\underline{\text{pf}}$

$\Rightarrow$ を示せば良い。$S, T \in \mathrm{Irr}(B)$ とする。$S \not\sim_c T$ と仮定する

$$
\begin{aligned}
  X &\coloneqq \{ U \in \mathrm{Irr}(B) \mid U \sim_c S \} \\
  Y &\coloneqq \{ V \in \mathrm{Irr}(B) \mid V \not\sim_c S \}
\end{aligned}
$$

$$
B = \underbrace{\bigoplus_{U \in X} P^U}_{P^X} \oplus \underbrace{\bigoplus_{V \in Y} P^V}_{P^Y}
$$

$\mathrm{Hom}_B(P^Y, P^X) = \mathrm{Hom}_B(P^X, P^Y) = 0$ だから、$e_XBe_Y = e_YBe_X = 0$。$e_XBP^Y = e_XBe_YB = 0$ だから $BP^Y \subset P^Y$。よって、$P^Y \subset B$ は両側イデアル。$P^X \subset B$ も両側イデアルとなって矛盾する $\blacksquare$

Cellular 代数に戻る

$C^\lambda$ はあるブロックに属する

$\underline{\text{pf}}$

$D^\mu, D^\nu$ を $C^\lambda$ の組成因子とする。Thm 2.20 から

$$
[P^\mu : D^\nu] = \sum_{\alpha \in \Lambda} [C^\alpha : D^\mu][C^\alpha : D^\nu] > 0
$$

$\blacksquare$

---

$\Lambda$ 上で
$\lambda \sim_\mathrm{cell} \mu$ $\overset{\mathrm{def}}{\iff}$ $\lambda = \lambda_0, \dots, \lambda_k = \mu$ が存在して、$C^{\lambda_i}, C^{\lambda_{i + 1}}$ が共通の組成因子を持つ

**Cor 2.22**

$C^\lambda$ と $C^\mu$ が同じブロックに属する $\iff$ $\lambda \sim_\mathrm{cell} \mu$

$\underline{\text{pf}}$

$\Rightarrow$ を示せば良い。$C^\lambda$ の組成因子 $D^\alpha$ と $C^\mu$ の組成因子 $D^\beta$ をとる。$D^\alpha, D^\beta$ は同じブロックに属するから、$\alpha \sim_c \beta$。$\alpha = \alpha_0, \dots, \alpha_k = \beta$ が存在して

$$
0 < [P^{\alpha_i} : D^{\alpha_{i + 1}}] = \sum_{\nu \in \Lambda} [C^\nu : D^{\alpha_i}][C^\nu : D^{\alpha_{i + 1}}]
$$

よって、$\nu_i$ が存在して、$[C^{\nu_i} : D^{\alpha_i}], [C^{\nu_i} : D^{\alpha_{i + 1}}] > 0$

$$
C^\lambda \sim_{D^{\alpha_0}} C^{\nu_0} \sim_{D^{\alpha_1}} C^{\nu_1} \sim_{D^{\alpha_2}} \cdots \sim_{D^{\alpha_{k - 1}}} C^{\nu_{k - 1}} \sim_{D^{\alpha_k}} C^\mu
$$

$\blacksquare$

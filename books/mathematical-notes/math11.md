---
title: "math11"
---

# Jantzen filtration

$R$: PID

$p \in R$: 素元
$p$ で割り切れる回数を考えれば、$\nu_p: R \setminus \{0\} \to \mathbb{Z}_{\ge 0}$ ができる。$\mu_p(0) \coloneqq \infty$ とする

$M$: $R$ 加群
対称なペアリング $\langle -, - \rangle: M \times M \to R$ を固定する。$k \ge 0$ に対して

$$
M(k) \coloneqq \{ e \in M \mid \langle e, M \rangle \subset p^k R \} \subset M
$$

は部分 $R$ 加群で、$M = M(0) \supset M(1) \supset \cdots$

$\mathbb{F}_p \coloneqq R / pR$ は体

$M_{\mathbb{F}_p} \coloneqq M \otimes_R \mathbb{F}_p = M / pM$
$M_{\mathbb{F}_p}(k) \coloneqq \mathrm{Im}(M(k) \otimes_R \mathbb{F}_p \to M_{\mathbb{F}_p}) = (M(k) + pM) / pM$

$$
M_{\mathbb{F}_p} = M_{\mathbb{F}_p}(0) \supset M_{\mathbb{F}_p}(1) \supset \cdots
$$

$M_{\mathbb{F}_p}(1) = M(1) / pM$ はペアリング $M_{\mathbb{F}_p} \times M_{\mathbb{F}_p} \to \mathbb{F}_p$ の退化部分

[Thm (Smith 標準形)]
$R$: PID
$A \in M_n(R)$
$P, Q \in GL_n(R)$ が存在して、$PAQ$ は対角行列になる

$A = \begin{pmatrix} a & * \\ b & * \end{pmatrix} \ (a \ne 0)$ の変形のみ示す。$d \coloneqq \mathrm{gcd}(a, b)$ とする。$x, y \in R$ が存在して、$ax + by = d$。$P \coloneqq \begin{pmatrix} x & y \\ -b / d & a / d \end{pmatrix}$ は可逆で

$$
PA = \begin{pmatrix}
  d & * \\
  0 & *
\end{pmatrix}
$$

[Lem (Jantzen)]
$M = \bigoplus_{1 \le i \le m} R e_i$ とし、$e_1, \dots, e_m$ に関する Gram 行列を $G$ とすると

$$
\nu_p(\mathrm{det} G) = \sum_{k \ge 1} \mathrm{dim}_{\mathbb{F}_p} M_{\mathbb{F}_p}(k)
$$

$P, Q \in GL_m(R)$ が存在して、$PGQ = \mathrm{diag}(d_1, \dots, d_m)$。$\nu_p(\mathrm{det} G) = \sum_i \nu_p(d_i)$。$f_i \coloneqq Pe_i$, $g_i \coloneqq Q^Te_i$ とすると、$\langle f_i, g_j \rangle = \delta_{ij}d_i$ だから

$$
M_{\mathbb{F}_p}(k) = (M(k) + pM) / pM = \bigoplus_{\nu_p(d_i) \ge k} \mathbb{F}_p f_i
$$

よって

$$
\begin{aligned}
  \sum_{k \ge 1} \mathrm{dim}_{\mathbb{F}_p} M_{\mathbb{F}_p}(k) &= \sum_{k \ge 1} \#\{ i \mid \nu_p(d_i) \ge k \} = \sum_i \nu_p(d_i) = \nu_p(\mathrm{det} G)
\end{aligned}
$$

# Jantzen sum formula

$K$: 体
$R = K[q, q^{-1}]$
$p \in K[q]$: 定数項が $0$ でない既約多項式
$\mathbb{F}_p \coloneqq R / pR \simeq K[q] / (p)$

$d \ge 1$
$\lambda \in \Lambda^+(d, n)$

$\alpha \in \mathcal{A}_n$ に対して、$W^\alpha \in K(\mathrm{Mod}_\mathrm{fg}\text{-}\mathscr{S}(d, n))$ を以下で定義する。$\alpha \not\in \mathcal{A}_n^\mathrm{reg}$ の場合は、$W^\alpha = 0$ とする。$\alpha \in \mathcal{A}^\mathrm{reg}_n$ の場合は、$\sigma \in \mathfrak{S}_n$ が一意的に存在して、$(\alpha_{(i)\sigma})_{1 \le i \le n} \in \mathcal{B}_n$。$(\alpha_{(i)\sigma})_{1 \le i \le n} \in \mathcal{B}_n$ に対応する (列数が $n$ 以下の) 分割を $\nu$ として

$$
W^\alpha \coloneqq \begin{cases}
  \mathrm{sgn}(\sigma)W^\nu &\quad (\nu \in \Lambda^+(d, n)) \\
  0 &\quad (\nu \not\in \Lambda^+(d, n))
\end{cases}
$$

と定義する

$\alpha \in \mathcal{A}_n$ に対して、$S^\alpha \in K(\mathrm{Mod}_\mathrm{fg}\text{-}\mathscr{H})$ を以下で定義する。$\alpha \not\in \mathcal{A}_n^\mathrm{reg}$ の場合は、$S^\alpha = 0$ とする。$\alpha \in \mathcal{A}^\mathrm{reg}_n$ の場合は、直前と同様の $\sigma \in \mathfrak{S}_n$ と分割 $\nu$ を用いて

$$
S^\alpha \coloneqq \begin{cases}
  \mathrm{sgn}(\sigma)S^\nu &\quad (|\nu| = n) \\
  0 &\quad (|\nu| \ne n)
\end{cases}
$$

と定義する

[Lem]
$\nu \vdash n$, $\xi \vDash n$ とする。$\mathrm{SStd}(\nu, \xi) \ne \emptyset$ $\Rightarrow$ $\nu \trianglerighteq \xi$

$\mathsf{T} \in \mathrm{SStd}(\nu, \xi)$ とすると、$k$ は $\mathsf{T}$ の $k$ 行目までに出現することから従う

[Lem]
$R$: 体

$$
K(\mathrm{Mod}_\mathrm{fg}\text{-}\mathscr{S}(d, n)) \ni M \mapsto (\mathrm{dim}_R (M 1_{M^\mu}))_{\mu \in \Lambda^+(d, n)} \in \mathbb{Z}^{\Lambda^+(d, n)}
$$

は同型

$K(\mathrm{Mod}_\mathrm{fg}\text{-}\mathscr{S}(d, n))$ は $W^\nu \ (\nu \in \Lambda^+(d, n))$ を自由基底に持つ。$(\mathrm{dim}_R W^\nu_\mu)_{\nu, \mu \in \Lambda^+(d, n)} = (|\mathrm{SStd}(\nu, \mu)|)_{\nu, \mu \in \Lambda^+(d, n)}$ は対角成分が $1$ かつ上三角的なことから従う

$$
W_{\mathbb{F}_p}^\lambda(k) \coloneqq (W^\lambda(k) + pW^\lambda) / pW^\lambda \subset W_{\mathbb{F}_p}^\lambda
$$

は部分 $\mathscr{S}_{\mathbb{F}_p}(d, n)$ 加群。$W_{\mathbb{F}_p}^\lambda(1) = \mathrm{rad} W_{\mathbb{F}_p}^\lambda$

[Thm (Jantzen sum formula)]
$K(\mathrm{Mod}_\mathrm{fg}\text{-}\mathscr{S}_{\mathbb{F}_p}(d, n))$ 内で

$$
\sum_{k \ge 1} W_{\mathbb{F}_p}^\lambda(k) = \sum_{a \ge 1} \sum_{1 \le b < c \le \lambda_a} (\nu_p([h^\lambda_{ab}]_q) - \nu_p([h^\lambda_{ac}]_q)) W_{\mathbb{F}_p}^{(\beta_1, \dots, \beta_b + h^\lambda_{ac}, \dots, \beta_c - h^\lambda_{ac}, \dots, \beta_n)}
$$

$(\beta_1, \dots, \beta_b + h^\lambda_{ac}, \dots, \beta_c - h^\lambda_{ac}, \dots, \beta_n) \in \mathcal{A}_n^\mathrm{reg}$ に対応する分割たちは相異なる

$\nu \in \Lambda(d, n)$ とすると

$$
\begin{aligned}
  &\sum_{k \ge 1} \mathrm{dim}_{\mathbb{F}_p} (W_{\mathbb{F}_p}^\lambda(k) 1_{M^\mu}) \\
  &= \sum_{k \ge 1} \mathrm{dim}_{\mathbb{F}_p} (W_{\mathbb{F}_p}^\lambda 1_{M^\mu})(k) \\
  &= \nu_p(G^\lambda_\mu) \\
  &= \sum_{a \ge 1} \sum_{1 \le b < c \le \lambda_a} (\nu_p([h^\lambda_{ab}]_q) - \nu_p([h^\lambda_{ac}]_q)) d_\mu(\beta_1, \dots, \beta_b + h^\lambda_{ac}, \dots, \beta_c - h^\lambda_{ac}, \dots, \beta_n) \\
  &= \sum_{a \ge 1} \sum_{1 \le b < c \le \lambda_a} (\nu_p([h^\lambda_{ab}]_q) - \nu_p([h^\lambda_{ac}]_q)) \mathrm{dim}_{\mathbb{F}_p} (W_{\mathbb{F}_p}^{(\beta_1, \dots, \beta_b + h^\lambda_{ac}, \dots, \beta_c - h^\lambda_{ac}, \dots, \beta_n)} 1_{M^\mu})
\end{aligned}
$$

Schur functor を適用すれば

$\lambda \vdash n$
$K(\mathrm{Mod}_\mathrm{fg}\text{-}\mathscr{H}_{\mathbb{F}_p})$ 内で

$$
\sum_{k \ge 1} S_{\mathbb{F}_p}^\lambda(k) = \sum_{a \ge 1} \sum_{1 \le b < c \le \lambda_a} (\nu_p([h^\lambda_{ab}]_q) - \nu_p([h^\lambda_{ac}]_q)) S_{\mathbb{F}_p}^{(\beta_1, \dots, \beta_b + h^\lambda_{ac}, \dots, \beta_c - h^\lambda_{ac}, \dots, \beta_n)}
$$

$(\beta_1, \dots, \beta_b + h^\lambda_{ac}, \dots, \beta_c - h^\lambda_{ac}, \dots, \beta_n) \in \mathcal{A}_n^\mathrm{reg}$ に対応する分割たちは相異なる

# 分解行列の具体計算

$\mathscr{S}_{\mathbb{Q}, -1}(d, 5) \ (d \ge 5)$ の分解行列 $(d_{\lambda\mu})_{\lambda, \mu \vdash 5}$ を計算する

$e = 2$

$5$ の分割は

$$
(1^5) \triangleleft (2, 1^3) \triangleleft (2^2, 1) \triangleleft (3, 1^2) \triangleleft (3, 2) \triangleleft (4, 1) \triangleleft (5)
$$

この中で $2$-restricted なのは

$$
(1^5) \triangleleft (2, 1^3) \triangleleft (2^2, 1)
$$

$p \coloneqq 1 + \hat{q} \in \mathbb{Q}[\hat{q}]$

$$
\nu_p([m]_{\hat{q}}) = \begin{cases}
  1 &\quad (m \in 2\mathbb{Z}) \\
  0 &\quad (m \not\in 2\mathbb{Z})
\end{cases}
$$

Jantzen sum formula たちは

$$
\begin{aligned}
  \sum_{k \ge 1} W^{(1^5)}(k) &= 0 \\
  \sum_{k \ge 1} W^{(2, 1^3)}(k) &= 0 \\
  \sum_{k \ge 1} W^{(2^2, 1)}(k) &= 0 \\
  \sum_{k \ge 1} W^{(3, 1^2)}(k) &= W^{(1^5)} + W^{(2^2, 1)} \\
  \sum_{k \ge 1} W^{(3, 2)}(k) &= -W^{(1^5)} + W^{(2^2, 1)} + W^{(3, 1^2)} \\
  \sum_{k \ge 1} W^{(4, 1)}(k) &= W^{(2, 1^3)} \\
  \sum_{k \ge 1} W^{(5)}(k) &= W^{(1^5)} - W^{(2^2, 1)} + W^{(3, 1^2)}
\end{aligned}
$$

まず、$\mathrm{rad} W^{(1^5)} = \mathrm{rad} W^{(2, 1^3)} = \mathrm{rad} W^{(2^2, 1)} = 0$ だから

$$
\begin{aligned}
  W^{(1^5)} &= L^{(1^5)} \\
  W^{(2, 1^3)} &= L^{(2, 1^3)} \\
  W^{(2^2, 1)} &= L^{(2^2, 1)}
\end{aligned}
$$

$\sum_{k \ge 1} W^{(3, 1^2)}(k) = L^{(1^5)} + L^{(2^2, 1)}$ だから $W^{(3, 1^2)}(1) = L^{(1^5)} + L^{(2^2, 1)}$ であり

$$
W^{(3, 1^2)} = L^{(1^5)} + L^{(2^2, 1)} + L^{(3, 1^2)}
$$

$\sum_{k \ge 1} W^{(3, 2)}(k) = 2L^{(2^2, 1)} + L^{(3, 1^2)}$ だから $W^{(3, 2)}(1) = aL^{(2^2, 1)} + L^{(3, 1^2)}$ であり $a = 1$ or $a = 2$。Schur functor を適用すれば、$S^{(3, 2)} = S^{(3, 2)}(1) = aD^{(2^2, 1)}$。$\mathrm{dim}_\mathbb{Q} S^{(3, 2)} = |\mathrm{Std}(3, 2)| = 5$ だから $a = 1$ でなければならない。よって

$$
W^{(3, 2)} = L^{(2^2, 1)} + L^{(3, 1^2)} + L^{(3, 2)}
$$

$$
W^{(4, 1)} = L^{(2, 1^3)} + L^{(4, 1)}
$$

$\sum_{k \ge 1} W^{(5)}(k) = 2L^{(1^5)} + L^{(3, 1^2)}$ だから $W^{(5)}(1) = bL^{(1^5)} + L^{(3, 1^2)}$ であり $b = 1$ or $b = 2$。Schur functor を適用すれば、$S^{(5)} = S^{(5)}(1) = bD^{(1^5)}$。$\mathrm{dim}_\mathbb{Q} S^{(5)} = |\mathrm{Std}(5)| = 1$ だから $b = 1$ でなければならない。よって

$$
W^{(5)} = L^{(1^5)} + L^{(3, 1^2)} + L^{(5)}
$$

以上から、$\mathscr{S}_{\mathbb{Q}, -1}(d, 5) \ (d \ge 5)$ の分解行列は

$$
\begin{array}{l|ccccccc}
  (1^5)    & \mathbf{1} & & & & & & \\
  (2, 1^3) & \cdot & \mathbf{1} & & & & & \\
  (2^2, 1) & \cdot & \cdot & \mathbf{1} & & & & \\
  (3, 1^2) & \mathbf{1} & \cdot & \mathbf{1} & 1 & & & \\
  (3, 2)   & \cdot & \cdot & \mathbf{1} & 1 & 1 & & \\
  (4, 1)   & \cdot & \mathbf{1} & \cdot & \cdot & \cdot & 1 & \\
  (5)      & \mathbf{1} & \cdot & \cdot & 1 & \cdot & \cdot & 1 \\
  \hline
  & (1^5) & (2, 1^3) & (2^2, 1) & (3, 1^2) & (3, 2) & (4, 1) & (5)
\end{array}
$$

太文字部分は、$\mathscr{H}_{\mathbb{Q}, -1}(\mathfrak{S}_5)$ の分解行列

$\mathscr{S}_{\mathbb{Q}, -1}(d, 5) \ (d \ge 5)$, $\mathscr{H}_{\mathbb{Q}, -1}(\mathfrak{S}_5)$ は $2$ つのブロックを持つこともわかる

# $\mathscr{S}(d, n)$ のブロック

$\lambda$: 分割
$1 \le e \le \infty$
$[\lambda]$ から長さ $e$ の rim hook を可能な限り取り除いた図形に対応する分割を $\lambda$ の $e$-core という

[Lem]
$\lambda$ の $e$-core は well-defined

$e$ 列のそろばん $A \coloneqq \mathbb{Z}_{\ge 0} \times \{ 0, 1, \dots, e - 1 \}$ を考える。$e$ による商と余りを考えれば、$\mathbb{Z}_{\ge 0} \simeq A$。$\beta$ 数列をそろばん上に並べて考えればよい。例えば、$\lambda = (5, 5, 2, 1)$, $e = 3$ とする。$\lambda$ に対応する beta 数列 $\beta = (0, \dots, 7, 10, 11, 12, 14, 16)$ をそろばん上に並べると

$$
\begin{array}{c|c|c}
  \bullet & \bullet & \bullet \\
  \bullet & \bullet & \bullet \\
  \bullet & \bullet & \cdot \\
  \cdot & \bullet & \bullet \\
  \bullet & \cdot & \bullet \\
  \cdot & \bullet & \cdot \\
  \cdot & \cdot & \cdot
\end{array}
$$

$\lambda$ の $e$-core はそろばん上で

$$
\begin{array}{c|c|c}
  \bullet & \bullet & \bullet \\
  \bullet & \bullet & \bullet \\
  \bullet & \bullet & \bullet \\
  \bullet & \bullet & \bullet \\
  \cdot & \bullet & \cdot \\
  \cdot & \cdot & \cdot \\
  \cdot & \cdot & \cdot
\end{array}
$$

であり、$(1)$ に対応する

「$[\lambda]$ から長さが $e$ の倍数の rim hook を可能な限り取り除いた図形に対応する分割」も well-defined で、$\lambda$ の $e$-core と一致する

[Lem]
$R$: 体
$B$: $\mathscr{S}(d, n)$ のブロック
$M \in K(\mathrm{Mod}_\mathrm{fg}\text{-}B)$
$K(\mathrm{Mod}_\mathrm{fg}\text{-}\mathscr{S}(d, n))$ 内で

$$
M = \sum_{\mu \in \Lambda^+(d, n)} a_\mu W^\mu
$$

とする。$a_\mu \ne 0$ $\Rightarrow$ $W^\mu$ の属するブロックは $B$

$B$ に対応する原始的中心冪等元を $e \in \mathscr{S}(d, n)$ とする。射影 $K(\mathrm{Mod}_\mathrm{fg}\text{-}\mathscr{S}(d, n)) \ni M \mapsto Me \in K(\mathrm{Mod}_\mathrm{fg}\text{-}\mathscr{S}(d, n))$ を適用すれば

$$
W = \sum_{\mu \in \Lambda^+(d, n)} \varepsilon_\mu a_\mu W^\mu \quad (\varepsilon_\mu \in \{0, 1\})
$$

展開の一意性から、$a_\mu \ne 0$ ならば $\varepsilon_\mu = 1$

$K$: 体
$q \in K^\times$
$d \ge n$
$\lambda, \mu \vdash n$
$W_K^\lambda, W_K^\mu$ が同じブロックに属することと、$\lambda$ と $\mu$ の $e$-core が一致することは同値

$R \coloneqq K[\hat{q}, \hat{q}^{-1}]$, $p \coloneqq \hat{q} - q \in K[\hat{q}]$ とすれば、$(\mathbb{F}_p, \hat{q}) = (K, q)$。$e \ge 2$ に注意

$\Rightarrow$
$W_K^\lambda$, $W_K^\mu$ は共通の組成因子を持つとしてよい。よって、$[W_K^\lambda : L_K^\nu] > 0$ ならば、$\lambda$ と $\nu$ の $e$-core が一致することを示せば良い。$\lambda \trianglerighteq \nu$。$\lambda$ に関する帰納法を使う。$\lambda = \nu$ の場合は明らか。$\lambda \triangleright \nu$ とする。$[\mathrm{rad} W_K^\lambda : L_K^\nu] > 0$。Jantzen sum formula から、ある $a \ge 1$, $1 \le b < c \le \lambda_a$ が存在して、$\nu_p([h^\lambda_{ab}]_{\hat{q}}) \ne \nu_p([h^\lambda_{ac}]_{\hat{q}})$ かつ、$[\lambda]$ から $(a, c)$-rim hook を取り除いて、列 $b$ の直下から境界の外側に沿って下または左方向に $h^\lambda_{ac}$ 個追加した図形は分割に対応し、対応する分割を $\lambda'$ とすれば $[W_K^{\lambda'} : L_K^\nu] > 0$。$\lambda \triangleright \lambda'$ だから、帰納法の仮定から $\lambda'$ と $\nu$ の $e$-core は一致する。$\nu_p([h]_{\hat{q}}) \ne 0$ $\Leftrightarrow$ $[h]_{\hat{q}} \in pR$ $\Leftrightarrow$ $K$ 内で $[h]_q = 0$ $\Leftrightarrow$ $h \in e\mathbb{Z}$。よって、$h^\lambda_{ab}, h^\lambda_{ac}$ のいずれかは $e$ の倍数。$[\lambda']$ は $[\lambda]$ から $(a, b)$-rim hook を取り除いた後、列 $c$ の直下から境界の外側に沿って下または左方向に $h^\lambda_{ab}$ 個追加した図形とも一致する。よって、$h^\lambda_{ab}, h^\lambda_{ac}$ のどちらが $e$ の倍数でも、$\lambda$ と $\lambda'$ の $e$-core は一致する

$\Leftarrow$
$\lambda$ の $e$-core を $\rho$ とする。$\rho$ の $1$ 列目に $n - |\rho|$ 個追加した分割を $\tilde{\rho}$ とする。$\tilde{\rho}$ は $e$-core が $\rho$ になる $n$ の分割たちの中で最小。$W_K^\lambda$ と $W_K^{\tilde{\rho}}$ が同じブロックに属することを示せばよい。$\lambda$ に関する帰納法を使う。$\lambda \ne \tilde{\rho}$ とする。$\lambda$ に関する Jantzen sum formula の係数で $0$ でないものがあれば、直前と同じ議論で示せる。$\lambda$ に関する Jantzen sum formula の係数が全て $0$ だとする。$\lambda$ は長さが $e$ の倍数の $(a, b)$-rim hook を持つが、$a$ が最小のものを選ぶ。$1 \le k \le \lambda_a$ に対して、$\nu_p([h^\lambda_{ak}]_{\hat{q}}) = \nu_p([h^\lambda_{ab}]_{\hat{q}}) \ne 0$ だから、$h^\lambda_{ak}$ は $e$ の倍数。$\lambda$ から $(a, \lambda_a)$-rim hook を取り除いた分割を $\gamma$ とする。$1 \le j \le a$ に対して、$\gamma$ の $(j, -)$-rim hook の長さは $e$ の倍数でない。$\lambda_a = 1$ と仮定すると、$\gamma = \rho$ だから、$\lambda_a \ge 2$。$\gamma$ の $1$ 行目に $h^\lambda_{a, \lambda_a}$ 個追加した分割を $\sigma$ とする。$1 \le k \le \gamma_1$ に対して、$\sigma$ の $(1, k)$-rim hook の長さは $e$ の倍数でない。$\gamma$ の $1$ 列目に $h^\lambda_{a, \lambda_a}$ 個追加した分割を $\lambda'$ とする。$\lambda' \triangleleft \lambda$。$\sigma$ に関する Jantzen sum formula を考えれば、$a = 1$ の場合は少し特殊だが、$W_K^\lambda$ と $W_K^{\lambda'}$ の係数は消えないことがわかる。よって、$W_K^\lambda$ と $W_K^{\lambda'}$ は同じブロックに属する。帰納法の仮定から、$W_K^\lambda$ と $W_K^{\tilde{\rho}}$ も同じブロックに属する

$0$ 以上の整数の分割で $e$-rim hook を持たないもの全体を $\mathcal{C}_e$ とする

$K$: 体
$d \ge n$

$$
\Phi: \{ \mathscr{S}_K(d, n) \text{ のブロック} \} \to \{ \rho \in \mathcal{C}_e \mid n - |\rho| \in e\mathbb{Z}_{\ge 0} \}
$$

を以下のように定義する。$\mathscr{S}_K(d, n)$ のブロック $B$ に対して、$B$ に属する $W_K^\lambda$ を取り、$\lambda$ の $e$-core を $\Phi(B)$ とする。$\Phi$ は全単射

# $\mathscr{H}$ のブロック

$K$: 体
$q \in K^\times$
$\lambda, \mu \vdash n$
$S^\lambda, S^\mu$ が同じブロックに属することと、$\lambda$ と $\mu$ の $e$-core が一致することは同値

$\Rightarrow$
$S^\lambda, S^\mu$ は共通の組成因子 $D^\nu$ を持つとして良い。$\nu$ は $e$-restricted でなければならないことに注意。$[W^\lambda : L^\nu] = [S^\lambda : D^\nu] > 0$, $[W^\mu : L^\nu] = [S^\mu : D^\nu] > 0$ だから、$W^\lambda, W^\mu$ は同じブロックに属する

$\Leftarrow$
$\mathcal{C} \coloneqq \{ \rho \in \mathcal{C}_e \mid n - |\rho| \in e\mathbb{Z}_{\ge 0} \}$ とする。$\mathscr{S}(n, n)$ のブロック数は $|\mathcal{C}|$。直前の証明から、$\mathscr{H}$ のブロックたちから $\mathcal{C}$ への全射が作れる。これが単射なことを示せばよい。$\mathscr{H}$ のブロック数が $|\mathcal{C}|$ 以下なことを示せばよい。$1_\mathscr{H} = e_1 + \cdots + e_b$ を互いに直交する原始的中心冪等元による分解とする。$M \coloneqq \bigoplus_{\mu \in \Lambda(n, n)} M^\mu \supset M^\omega = \mathscr{H}$ の各ブロックへの射影を考えれば、$M = \bigoplus_{1 \le i \le b} Me_i$。$Me_i \supset \mathscr{H}e_i \ne 0$。$K$ 上の代数として

$$
\mathscr{S}(n, n) = \mathrm{End}_\mathscr{H}(M) = \bigoplus_{1 \le i \le b} \mathrm{End}_{e_i\mathscr{H}}(Me_i)
$$

$\mathrm{id}_{Me_i} \in \mathrm{End}_{e_i\mathscr{H}}(Me_i) \ne 0$ だから、$\mathscr{S}(n, n)$ のブロック数は $b$ 以上

# $\nu_p([h]_{\hat{q}})$

$K$: 標数 $l$ の体
$p \in K[\hat{q}]$: 定数項が $0$ でない既約多項式
$\hat{q} \in (K[\hat{q}] / (p))^\times$ の $q$-標数を $e$ とする

$h \in \mathbb{Z} \setminus \{0\}$ とすると

$$
\nu_p([h]_{\hat{q}}) = \begin{cases}
  0 &\quad (h \not\equiv 0 \mod e) \\
  \nu_p([e]_{\hat{q}}) &\quad (h \equiv 0 \mod e, l = 0) \\
  l^x\nu_p([e]_{\hat{q}}) + (l^x - 1)\nu_p(\hat{q} - 1) &\quad (h \equiv 0 \mod e, l > 0)
\end{cases}
$$

ただし、3 つ目の場合では $x \coloneqq \nu_l(h / e) \in \mathbb{Z}_{\ge 0}$ とした

[1 つ目]
$\nu_p([h]_{\hat{q}}) > 0$ $\Leftrightarrow$ $[h]_{\hat{q}} = 0 \mod p$ $\Leftrightarrow$ ($e < \infty$ かつ) $h \in e\mathbb{Z}$

[2 つ目]
$e < \infty$。$h = ek$ とする。$Q \coloneqq \hat{q}^e$ とすると、$Q \equiv 1 \mod p$。$[ek]_{\hat{q}}(\hat{q} - 1) = Q^k - 1 = (\hat{q} - 1)[e]_{\hat{q}}\frac{Q^k - 1}{Q - 1}$。$K$ は標数 $0$ だから、$\frac{Q^k - 1}{Q - 1} \equiv k \not\equiv 0 \mod p$。よって、$\nu_p([ek]_{\hat{q}}) = \nu_p([e]_{\hat{q}})$

[3 つ目]
$e < \infty$。$u \not\equiv 0 \mod l$ があって、$h = eul^x$。Frobenius 写像を考えて、$[h]_{\hat{q}}(\hat{q} - 1) = Q^{ul^x} - 1^{l^x} = (Q^u - 1)^{l^x}$。$Q^u - 1 = (\hat{q} - 1)[e]_{\hat{q}}\frac{Q^u - 1}{Q - 1}$。$\frac{Q^u - 1}{Q - 1} \equiv u \not\equiv 0 \mod p$。よって、$\nu_p([h]_{\hat{q}^e}) = l^x(\nu_p(\hat{q} - 1) + \nu_p([e]_{\hat{q}})) - \nu_p(\hat{q} - 1)$

# $W^\lambda, S^\lambda$ の既約性判定

$K$: 標数 $l$ の体
$q \in K^\times$
$d \ge n$

$p \coloneqq \hat{q} - q \in K[\hat{q}]$

$h \in \mathbb{Z} \setminus \{0\}$ に対して

$$
\nu_{e, l}(h) \coloneqq \begin{cases}
  \nu_l(h / e) &\quad (h \equiv 0 \mod e, l > 0) \\
  0 &\quad (h \equiv 0 \mod e, l = 0) \\
  -1 &\quad (h \not\equiv 0 \mod e)
\end{cases}
$$

と定義する

$\lambda \vdash n$
以下は同値
(1) $W^\lambda$ が既約
(2) 任意の $a \ge 1$, $1 \le b < c \le \lambda_a$ に対して、$\nu_p([h^\lambda_{ab}]_{\hat{q}}) = \nu_p([h^\lambda_{ac}]_{\hat{q}})$
(3) 任意の $a \ge 1$, $1 \le b < c \le \lambda_a$ に対して、$\nu_{e, l}(h^\lambda_{ab}) = \nu_{e, l}(h^\lambda_{ac})$

(2) $\Leftrightarrow$ (3) は示した

(2) $\Rightarrow$ (1)
Jantzen sum formula から、$\mathrm{rad}W^\lambda = 0$

(1) $\Rightarrow$ (2) の対偶
Jantzen sum formula から、ある $a \ne 0$ と $\mu \vdash n$ が存在して、$K(\mathrm{Mod}_\mathrm{fg}\text{-}\mathscr{S}(d, n))$ 内で

$$
\sum_{k \ge 1} W^\lambda(k) \in aW^\mu + \sum_{\nu \not\trianglerighteq \mu} \mathbb{Z}W^\nu
$$

$a > 0$ もわかる。よって、ある $b > 0$ が存在して、$\mathrm{rad}W^\lambda \in bW^\mu + \sum_{\nu \not\trianglerighteq \mu} \mathbb{Z}W^\nu$

$W^\lambda$ が既約ならば、$\lambda$ は $e$-restricted なこともわかる。これは以下の議論からもわかる。$W^\lambda$ は既約とする。$W^\lambda = L^\lambda$ だから $0 \ne S^\lambda = F(L^\lambda)$。よって、$\lambda$ は $e$-restricted

[Prop]
$\lambda \vdash n$
以下は同値
(1) $\lambda$ は $e$-restricted かつ $S^\lambda$ は既約
(2) $W^\lambda$ は既約
(3) 任意の $a \ge 1$, $1 \le b < c \le \lambda_a$ に対して、$\nu_{e, l}(h^\lambda_{ab}) = \nu_{e, l}(h^\lambda_{ac})$

(2) $\Leftrightarrow$ (3) と (2) $\Rightarrow$ (1) は示した。(1) $\Rightarrow$ (2) を示す。$W^\lambda$ の Gram 行列が $0$ でないことを示せば良い。仮定から、$S^\lambda = D^\lambda$ だから、$W^\lambda_\omega = S^\lambda$ の Gram 行列は $0$ でない。よって

$$
G^\lambda_\omega = \prod_{a \ge 1} \prod_{1 \le b < c \le \lambda_a} \left(\frac{[h^\lambda_{ab}]_q}{[h^\lambda_{ac}]_q}\right)^{d_\omega(\beta_1, \dots, \beta_b + h^\lambda_{ac}, \dots, \beta_c - h^\lambda_{ac}, \dots, \beta_n)} \ne 0
$$

よって、任意の $a \ge 1, 1 \le b < c \le \lambda_a$ に対して、$d_\omega(\beta_1, \dots, \beta_b + h^\lambda_{ac}, \dots, \beta_c - h^\lambda_{ac}, \dots, \beta_n) = 0$ または $[h^\lambda_{ab}]_q \ne 0$。$W^\lambda = \bigoplus_{\mu \in \Lambda(d, n)} W^\lambda_\mu$ は直交分解だから、$\mu \in \Lambda(d, n)$ に対して、$G^\lambda_\mu = \prod_{a \ge 1} \prod_{1 \le b < c \le \lambda_a} \left(\frac{[h^\lambda_{ab}]_q}{[h^\lambda_{ac}]_q}\right)^{d_\mu(\beta_1, \dots, \beta_b + h^\lambda_{ac}, \dots, \beta_c - h^\lambda_{ac}, \dots, \beta_n)}$ が消えないことを示せば良い。$d_\mu(\beta_1, \dots, \beta_b + h^\lambda_{ac}, \dots, \beta_c - h^\lambda_{ac}, \dots, \beta_n) \ne 0$ ならば $d_\omega(\beta_1, \dots, \beta_b + h^\lambda_{ac}, \dots, \beta_c - h^\lambda_{ac}, \dots, \beta_n) \ne 0$ から従う

# $\#$

$R$: 可換環
$q \in R^\times$

$T_s^\# \coloneqq -qT_s^{-1} = -T_s + q - 1$

$(T_s^\# - q)(T_s^\# + 1) = (-T_s - 1)(-T_s + q) = 0$

$$
\begin{aligned}
  \overbrace{T_s^\#T_t^\#T_s^\# \cdots}^{m_{st}} &= (-q)^{m_{st}}\overbrace{T_s^{-1}T_t^{-1}T_s^{-1} \cdots}^{m_{st}} \\
  &= (-q)^{m_{st}}\overbrace{T_s^{-1}T_t^{-1}T_s^{-1} \cdots}^{m_{st}} \\
  &= (-q)^{m_{st}}\overbrace{T_t^{-1}T_s^{-1}T_t^{-1} \cdots}^{m_{st}} \\
  &= \overbrace{T_t^\#T_s^\#T_t^\# \cdots}^{m_{st}}
\end{aligned}
$$

$R$ 代数の射 $\#: \mathscr{H} \to \mathscr{H}$ が定まる

$(T_s^\#)^\# = -T_s^\# + q - 1 = T_s$ だから $\#^2 = 1$

$T_w^\# = (-q)^{\ell(w)}T^{-1}_{w^{-1}}$

# 分割の支配順序

$\lambda, \mu \vdash n$
以下は同値
(1) $\lambda \trianglelefteq \mu$
(2) 分割たち $\lambda = \lambda_0, \lambda_1, \dots, \lambda_k = \mu$ が存在して、$\lambda_{i + 1}$ は $\lambda_i$ のある行の最後をより下の行の最後に移動したものになっている

(2) $\Rightarrow$ (1) は明らか。(1) $\Rightarrow$ (2) を示す。$\lambda$ に関する帰納法を使う。$\lambda \ne \mu$ とする。$s_j \coloneqq \sum_{i \le j} \lambda_i$, $t_j \coloneqq \sum_{i \le j} \mu_i$ とする。$\lambda_a \ne \mu_a$ となる最小の $a$ を取る。$s_a < t_a$。$|\lambda| = |\mu|$ だから、ある $b > a$ が存在して、$s_b = t_b$。$a \le c < b$ ならば $s_c < t_c$ として良い。$a = 1$ または $\lambda_a < \lambda_{a - 1}$。$\lambda_b > \lambda_{b + 1}$。$b$ 行目の最後を $a$ 行目の最後に移動した分割を $\lambda'$ とする。$\lambda \triangleleft \lambda' \trianglelefteq \mu$

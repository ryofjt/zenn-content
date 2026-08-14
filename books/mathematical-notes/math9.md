---
title: "math9"
---

# 既約 $\mathscr{L}$ 加群

$K$: 体
$q \in K^\times$
$e$ は一般とする

$\mathscr{L} \coloneqq K[L_1, \dots, L_n] \subset \mathscr{H}$

$\mathfrak{t} \in \bigsqcup_{\lambda \vdash n} \mathrm{Std}(\lambda)$ に対して

$$
\rho^\mathfrak{t} \coloneqq ([\mathrm{res}_\mathfrak{t}(1)]_q, \dots, [\mathrm{res}_\mathfrak{t}(n)]_q) \in K^n
$$

と定義する。$K$ 代数の射 $\mathscr{L} \ni f(L_1, \dots, L_n) \mapsto f(\rho^\mathfrak{t}) \in K$ は $\mathscr{L}$ の 1 次元既約加群 $\mathscr{L}_{\rho^\mathfrak{t}}$ を定める

$\lambda$: $n$ の分割
$K(\mathrm{Mod}_\mathrm{fg}\text{-}\mathscr{L})$ 内で

$$
[S^\lambda] = \sum_{\mathfrak{t} \in \mathrm{Std}(\lambda)} [\mathscr{L}_{\rho^\mathfrak{t}}]
$$

$\mathrm{Std}(\lambda)$ を $\trianglerighteq$ に関して極小なものから順に取り出して $\mathfrak{t}_1, \dots, \mathfrak{t}_k = \mathfrak{t}^\lambda$ とする。$i = 1, \dots, k + 1$ に対して、$S_i \coloneqq \mathrm{span}_K \{ m_{\mathfrak{t}_i}, \dots, m_{\mathfrak{t}_k} \} \subset S^\lambda$ とすると、$S_i$ は $\mathscr{L}$ 加群。$S_i / S_{i + 1} \simeq \mathscr{L}_{\rho^{\mathfrak{t}_i}}$

既約 $\mathscr{L}$ 加群はある $\mathfrak{t} \in \bigsqcup_{\lambda \vdash n} \mathrm{Std}(\lambda)$ で $\mathscr{L}_{\rho^\mathfrak{t}}$ と表せる

任意の既約 $\mathscr{L}$ 加群は $\mathscr{H}$ のある既約加群を $\mathscr{L}$ 加群とみなしたものの組因子に現れることから従う

# 既約 $\mathscr{H}$ 加群

$K$: 体
$q \in K^\times$
$e$ は一般とする。$e \ge 2$

$\rho: \bigsqcup_{\lambda \vdash n} \mathrm{Std}(\lambda) \to K^n$ の値が同じ standard tableau たちの中で $\mathrm{Shape}$ が $\trianglerighteq$ に関して極小なものを $e$-restricted standard tableau という。$e$-restricted $\lambda$-standard tableau 全体を $\mathrm{Std}_e(\lambda)$ で表す

$\lambda \in \Lambda_0$ ならば $\mathrm{dim}_K D^\lambda \ge |\mathrm{Std}_e(\lambda)|$ であり、$\lambda \not\in \Lambda_0$ ならば $\mathrm{Std}_e(\lambda) = \emptyset$

$\lambda \in \Lambda$ とする。$\mathscr{L}$ 加群 $S^\lambda$ の組成因子は重複を込めて $\{ \mathscr{L}_{\rho_\mathfrak{t}} \mid \mathfrak{t} \in \mathrm{Std}(\lambda) \}$ だった。$\mu \in \Lambda_0$ に対して

$$
[S^\lambda : D^\mu] = \begin{cases}
  1 &\quad (\lambda = \mu) \\
  0 &\quad (\lambda \not\trianglerighteq \mu)
\end{cases}
$$

だから、$\mu \in \Lambda_0$ が $\lambda \triangleright \mu$ を満たせば、$\mathscr{L}$ 加群 $S^\mu$ の組成因子に $\{ \mathscr{L}_{\rho^\mathfrak{t}} \mid \mathfrak{t} \in \mathrm{Std}_e(\lambda) \}$ が出現しないことを示せば良い。ある $\mathfrak{t} \in \mathrm{Std}_e(\lambda)$ が存在して、$\mathscr{L}$ 加群 $S^\mu$ の組成因子に $\mathscr{L}_{\rho^\mathfrak{t}}$ が出現すると仮定する。ある $\mathfrak{u} \in \mathrm{Std}(\mu)$ が存在して、$\rho_\mathfrak{t} = \rho_\mathfrak{u}$。これは $\mathfrak{t}$ が $e$-restricted なことに矛盾する

$(i, j) \in \mathbb{Z}_{\ge 1}^2$ に対して、$l_e(i, j) \coloneqq j - i + e(i - 1) \in \mathbb{Z}_{\ge 0}$ と定義する。$l_e(i, j) = j - i \mod e$

$\lambda$: $n$ の分割
Standard $\lambda$-tableau $\mathfrak{l}_e^\lambda$ を $n$ に関して帰納的に定義する。$n = 1$ の場合は明らか。$n \ge 2$ とする。位置 $(i, j) \in [\lambda]$ を $l_e$ が最大なものの中で最も上にある位置とする。図形 $[\lambda] \setminus \{ (i, j) \}$ に対応する分割を $\nu$ とする。$\mathfrak{l}_e^\lambda$ を $\mathfrak{l}_e^\nu$ の位置 $(i, j)$ に $n$ を追加した standard $\lambda$-tableau と定義する。$\mathfrak{l}_3^{(4, 3)}$ は以下のようになる

$$
\begin{array}{l}
  \boxed{1}\boxed{2}\boxed{4}\boxed{6} \\
  \boxed{3}\boxed{5}\boxed{7}
\end{array}
$$

$n$ の分割 $\lambda$ が $e$-restricted とは、$\lambda_i - \lambda_{i + 1} \le e - 1$ が成り立つことをいう。特に、最後の数字は $e - 1$ 以下なことに注意。$\lambda$ を $e$-restricted partition とする。$l_e(i, \lambda_i)$ は広義単調増加する。また、帰納的に $\mathrm{Shape}(\mathfrak{l}_e^\lambda \downarrow k) \ (1 \le k \le n)$ は $e$-restricted なことがわかる

$\lambda$: $e$-restricted partition of $n$
$\mathfrak{l}_e^\lambda$ は $e$-restricted tableau

Standard tableau $\mathfrak{t}$ と要素 $k$ に対して、$k$ の位置の $l_e$ を $l_\mathfrak{t}(k)$ で表す。$l_\mathfrak{t}(k) \equiv \mathrm{res}_\mathfrak{t}(k) \mod e$。より強く、以下を $n$ に関する帰納法で示す

$\mu$: $n$ の分割
$\mathfrak{t} \in \mathrm{Std}(\mu)$ は $\mathfrak{l}_e^\lambda$ と $\rho$ が一致するとする。$l_e(i, j) \le l_{\mathfrak{l}_e^\lambda}(n) \ ((i, j) \in [\mu])$ かつ $\mu \trianglerighteq \lambda$

$n = 1$ の場合は明らか。$n \ge 2$ とする。$\lambda' \coloneqq \mathrm{Shape}(\mathfrak{l}_e^\lambda \downarrow n - 1)$ とすると、$\lambda'$ も $e$-restricted。$\mu' \coloneqq \mathrm{Shape}(\mathfrak{t} \downarrow n - 1)$。帰納法の仮定から、$l_e([\mu']) \le l_{\mathfrak{l}_e^\lambda}(n - 1)$ かつ $\mu' \trianglerighteq \lambda'$。まず、$l_e([\mu]) \le l_{\mathfrak{l}_e^\lambda}(n)$ を示す。$\mathfrak{t}$ 内で $n$ が 2 列目以降にある場合は

$$
l_\mathfrak{t}(n) \le \max_{(i, j) \in [\mu']} l_e(i, j) + 1 \le l_{\mathfrak{l}_e^\lambda}(n - 1) + 1 \le l_{\mathfrak{l}_e^\lambda}(n) + 1
$$

$l_\mathfrak{t}(n) \equiv l_{\mathfrak{l}_e^\lambda}(n) \mod e$ だから、$l_\mathfrak{t}(n) \le l_{\mathfrak{l}_e^\lambda}(n)$。$n$ が 1 列目にある場合も、$l_\mathfrak{t}(n) \le l_{\mathfrak{l}_e^\lambda}(n) + e - 1$ だから $l_\mathfrak{t}(n) \le l_{\mathfrak{l}_e^\lambda}(n)$。次に、$\mu \trianglerighteq \lambda$ を示す。$\mathfrak{l}_e^\lambda$ で $n$ のある行を $r$ とし、$\mathfrak{t}$ で $n$ のある行を $s$ とする。$s \le r$ の場合は帰納法の仮定から明らか。$s > r$ とする。$l_e([\mu]) \le l_{\mathfrak{l}_e^\lambda}(n)$ だったから、$\mu_j \le \lambda_j \ (j \ge r)$。よって、$k \ge r$ に対して

$$
\sum_{j \le k} \mu_j = n - \sum_{j > k} \mu_j \ge n - \sum_{j > k} \lambda_j = \sum_{j \le k} \lambda_j
$$

$n$ の分割 $\lambda$ が $e$-restricted なら、$\lambda \in \Lambda_0$

$n$ の composition $\mu$ に対して、$[\mu]_q^! \coloneqq [\mu_1]_q^! [\mu_2]_q^! \cdots$

$\sum_{w \in \mathfrak{S}_n} q^{\ell(w)} = [n]_q^!$

$n$ に関する帰納法を使う。$n = 1$ なら明らか。$n \ge 2$ とする。$\mathfrak{S}_{n - 1} \backslash \mathfrak{S}_n$ の最短完全代表系 $X$ は $X = \{ s_i \cdots s_{n - 1} \mid 1 \le i \le n \}$。よって

$$
\sum_{w \in \mathfrak{S}_n} q^{\ell(w)} = \sum_{w \in \mathfrak{S}_{n - 1}, x \in X} q^{\ell(x)}q^{\ell(w)} = [n - 1]_q^! (q^{n - 1} + q^{n - 2} + \cdots + 1) = [n]_q^!
$$

$\lambda$: 分割
$\lambda^i \coloneqq (\lambda_i, \lambda_{i + 1}, \dots)$ と定義する。$\bar{\lambda}^i \coloneqq (\lambda_i - \lambda_{i + 1}, \lambda_{i + 1} - \lambda_{i + 2}, \dots)$ は $\lambda_i$ の composition。$R = \mathbb{Z}[q, q^{-1}]$ のとき、$g_i \in \mathbb{Z}[q]$ を $\{ [\gamma]_q^! \mid \gamma \vDash \lambda_i, \gamma \trianglerighteq \bar{\lambda}^i \} \subset \mathbb{Z}[q]$ の最大公約元でモニックなものとする。$\mathbb{Z}[q]$ は UFD なことに注意。並べ替えを考えれば、$\gamma$ は分割の範囲で考えても良い。$R$ が一般の場合は、特殊化で定義する。$g_\lambda \coloneqq g_1 g_2 \cdots$ と定義する

$g_i \in R \cdot [\lambda_i - \lambda_{i + 1}]_q^!$ だから、$g_\lambda \in R \cdot [\bar{\lambda}_1]_q^!$

$\lambda = (5, 2)$ とする。$\bar{\lambda}^1 = (3, 2)$。$\trianglerighteq$ で $\bar{\lambda}^1$ 以上の分割は辞書順で大きい順に $(5), (4, 1), (3, 2)$ だから $g_1 = \mathrm{gcd}([5]_q^!, [4]_q^!, [3]_q^![2]_q^!) = [3]_q^![2]_q^!$。また、$g_2 = [2]_q^!$。よって、$g_{(5, 2)} = [3]_q^!([2]_q^!)^2$

$\lambda$: $n$ の分割
$\mathfrak{s}, \mathfrak{t} \in \mathrm{Std}(\lambda)$

$$
\langle m_\mathfrak{s}, m_\mathfrak{t} \rangle \in Rg_\lambda
$$

$\bmod \ \check{\mathscr{H}}^\lambda$ で

$$
\langle m_\mathfrak{s}, m_\mathfrak{t} \rangle m_\lambda \equiv m_{\mathfrak{t}^\lambda\mathfrak{s}}m_{\mathfrak{t}\mathfrak{t}^\lambda} = m_\lambda\mathscr{H}m_\lambda \equiv \sum_{\mathfrak{u} \in \mathrm{Std}(\lambda)} R m_\lambda T_{d(\mathfrak{u})} m_\lambda
$$

よって、次の命題を示せば良い

$\lambda$: $n$ の分割
$\mathfrak{t} \in \mathrm{Std}(\lambda)$

$$
m_\lambda T_{d(\mathfrak{t})} m_\lambda \equiv R g_\lambda m_\lambda \mod \check{\mathscr{H}}^\lambda
$$

$1 \le k \le n$ に対して、$\mathfrak{t}$ が $\mathfrak{t}^\lambda$ と $k - 1$ 行目まで一致するならば

$$
m_{\mathfrak{t}^\lambda\mathfrak{t}} m_{\mathfrak{S}_{\lambda_k}} = g_k \sum_{\mathfrak{u} \in \mathrm{Std}(\lambda), \mathfrak{u} \text{ は } \mathfrak{t}^\lambda \text{ と } k \text{ 行目まで一致}} R m_{\mathfrak{t}^\lambda\mathfrak{u}}
$$

が成り立つことを示せば良い。$\mathscr{H}(\mathfrak{S}_{\sum_{j \ge k} \lambda_j})$ を考えれば、$k = 1$ で示せば良い。$\mu$ を $\mathrm{Shape}(\mathfrak{t} \downarrow \lambda_1)$ に対応する $\lambda_1$ の composition とする。$\mathfrak{u} \in \mathrm{Std}(\lambda)$ を $[\mu]$ では $\mathfrak{t}^\mu$、$[\lambda] \setminus [\mu]$ では残りの数字を上から順に左から右に詰めたものとする。$w \in \mathfrak{S}_{\lambda_1}$, $v \in \mathfrak{S}_{\sum_{j \ge 2} \lambda_j}$ が一意的に存在して $\mathfrak{t} = \mathfrak{u}wv$ と表せる。$[\mu]$, $[\lambda] \setminus [\mu]$ それぞれで $i$ が $i + 1$ より下にあれば解消する操作を考えると、$\ell(d(\mathfrak{t})) = \ell(d(\mathfrak{u})) + \ell(w) + \ell(v)$

$$
m_{\mathfrak{t}^\lambda\mathfrak{t}} m_{\mathfrak{S}_{\lambda_1}} = m_{\mathfrak{t}^\lambda\mathfrak{u}} T_w m_{\mathfrak{S}_{\lambda_1}} T_v = q^{\ell(w)} m_{\mathfrak{t}^\lambda\mathfrak{u}} m_{\mathfrak{S}_{\lambda_1}} T_v
$$

$m_{\mathfrak{t}^\lambda\mathfrak{u}}$ を考察する。$\nu \coloneqq (\lambda_1, \lambda_1 - \mu_1, \lambda_2 - \mu_2, \dots)$ は $n$ の composition。部分群 $P \subset \mathfrak{S}_\lambda$ と $Q \subset \mathfrak{S}_\nu$ を

$$
\begin{aligned}
  P &\coloneqq \mathfrak{S}_{\mu_1} \times \mathfrak{S}_{\lambda_1 - \mu_1} \times \mathfrak{S}_{\mu_2} \times \mathfrak{S}_{\lambda_2 - \mu_2} \cdots \\
  Q &\coloneqq (\mathfrak{S}_{\mu_1} \times \mathfrak{S}_{\mu_2} \times \cdots) \times (\mathfrak{S}_{\lambda_1 - \mu_1} \times \mathfrak{S}_{\lambda_2 - \mu_2} \times \cdots)
\end{aligned}
$$

で定義する。$P d(\mathfrak{u}) = d(\mathfrak{u}) Q$ かつ

$$
\begin{aligned}
  \ell(pd(\mathfrak{u})) &= \ell(p) + \ell(d(\mathfrak{u})) \quad (p \in P) \\
  \ell(d(\mathfrak{u})q) &= \ell(d(\mathfrak{u})) + \ell(q) \quad (q \in Q)
\end{aligned}
$$

が成り立つ。よって

$$
\begin{aligned}
  m_{\mathfrak{t}^\lambda\mathfrak{u}} &= m_\lambda T_{d(\mathfrak{u})} \\
  &= \mathscr{H} m_P T_{d(\mathfrak{u})} \\
  &= \mathscr{H} T_{d(\mathfrak{u})} m_Q
\end{aligned}
$$

$$
\begin{aligned}
  m_{\mathfrak{t}^\lambda\mathfrak{u}} m_{\mathfrak{S}_{\lambda_1}} &= \mathscr{H} T_{d(\mathfrak{u})} m_Q m_{\mathfrak{S}_{\lambda_1}} \\
  &= [\mu]_q^! \mathscr{H} T_{d(\mathfrak{u})} m_{\nu}
\end{aligned}
$$

よって、$m_{\mathfrak{t}^\lambda\mathfrak{t}} m_{\mathfrak{S}_{\lambda_1}} = q^{\ell(w)} [\mu]_q^! \mathscr{H} T_{d(\mathfrak{u})} m_{\nu} T_v$。以降は、$m_{\mathfrak{t}^\lambda\mathfrak{t}} m_{\mathfrak{S}_{\lambda_1}} \in [\mu]_q^!\mathscr{H} \cap \mathscr{H}m_\nu\mathscr{H}$ なことのみを使う。$\lambda \not\trianglerighteq \nu$ と $\lambda \trianglerighteq \nu$ で場合分けする。まず、$\lambda \not\trianglerighteq \nu$ の場合を考える。$\vec{\nu}$ を $\nu$ を並べ替えた $n$ の分割とすると、$\vec{\nu} \trianglerighteq \nu$ だから、$\lambda \not\trianglerighteq \vec{\nu}$。よって

$$
m_{\mathfrak{t}^{\lambda}\mathfrak{t}} m_{\mathfrak{S}_(\lambda_1)} \in \mathscr{H}^{\lambda} \cap \mathscr{H}m_\nu\mathscr{H} = \mathscr{H}^\lambda \cap \mathscr{H}m_{\vec{\nu}}\mathscr{H} \subset \mathscr{H}^\lambda \cap \mathscr{H}^{\vec{\nu}} \subset \check{\mathscr{H}}^\lambda
$$

次に、$\lambda \trianglerighteq \nu$ の場合を考える。両辺に和が $-n + \lambda_1$ になる $\mathbb{Z}$ の列 $(-\lambda_1, -\lambda_2 + \mu_1, -\lambda_3 + \mu_2, \dots)$ を足して先頭の $0$ を取り除くと $\mu \trianglerighteq (\lambda_1 - \lambda_2, \lambda_2 - \lambda_3, \dots) = \bar{\lambda}_1$。定義から、$[\mu]_q^! \in R g_1$。$m_{\mathfrak{t}^\lambda\mathfrak{t}} m_{\mathfrak{S}_(\lambda_1)} \in g_1 \mathscr{H} \cap \mathscr{H}^\lambda$ だから

$$
m_{\mathfrak{t}^\lambda\mathfrak{t}} m_{\mathfrak{S}_(\lambda_1)} = g_1 \sum_{\mathfrak{v} \in \mathrm{Std}(\lambda)} r_\mathfrak{v} m_{\mathfrak{t}^\lambda\mathfrak{v}} \mod \check{\mathscr{H}}^\lambda
$$

と展開できる。$(m_{\mathfrak{t}^\lambda\mathfrak{t}} m_{\mathfrak{S}_(\lambda_1)})^* \in M_{(\lambda_1, \overbrace{1, \dots, 1}^{\sum_{j \ge 2} \lambda_j})}$ だから、$r_\mathfrak{v} \ne 0$ ならば、$1, \dots, \lambda_1$ は $\mathfrak{v}$ の異なる列にある。よって、$r_\mathfrak{v} \ne 0$ ならば $\mathfrak{v}$ の 1 行目は $1, \dots, \lambda_1$ でなければならない

$K$: 体
$q \in K^\times$
$e$ は一般とする
$\Lambda_0$ は $e$-restricted partition 全体に一致する

$\lambda \in \Lambda_0$ ならば $\lambda$ は $e$-restricted なことを示せば良い。対偶を示す。$n$ の分割 $\lambda$ は $e$-restricted でないとする。ある $i$ が存在して、$\lambda_i - \lambda_{i + 1} \ge e$。$[e]_q = 0$ だから、$g_\lambda = 0$。よって、$S^\lambda$ 上のペアリングは $0$

$K$: 体
$q \in K^\times$
$e$ は一般とする
以下は同値
(1) $\mathscr{H}$ は半単純
(2) 全ての $\lambda \vdash n$ に対して、$S^\lambda$ 上のペアリングは非退化
(3) $e > n$

(1) $\Leftrightarrow$ (2) は cellular 代数の一般論から従う

(2) $\Rightarrow$ (3)
分割 $(n)$ が $e$-restricted だから、$n \le e - 1$

(3) $\Rightarrow$ (2)
$\lambda$ を $n$ の分割とする。$\rho: \bigsqcup_{\lambda \vdash n} \mathrm{Std}(\lambda) \to K^n$ は単射だから、$\mathrm{Std}_e(\lambda) = \mathrm{Std}(\lambda) \ne \emptyset$。よって、$\lambda \in \Lambda_0$。また、$|\mathrm{Std}_e(\lambda)| \le \mathrm{dim}_K D^\lambda \le \mathrm{dim}_K S^\lambda = |\mathrm{Std}(\lambda)|$ だから、$D^\lambda = S^\lambda$

# Semistandard tableau

$\mu$: $n$ の composition
$\mathscr{D}_\mu^{-1}$ は $\mathfrak{S}_n / \mathfrak{S}_\mu$ の最短完全代表系と一致する

$\mu, \nu$: $n$ の composition
$d \in \mathscr{D}_\mu \cap \mathscr{D}_\nu^{-1}$ とすると、$d^{-1}\mathfrak{S}_\mu d \cap \mathfrak{S}_\nu$ はある $S$ の部分集合で生成される

Tableau $\mathfrak{t}$ に対して、$r$ 行目の要素の集合を $\mathrm{row}_r(\mathfrak{t})$ で表す。$d^{-1}\mathfrak{S}_\mu d = R_{\mathfrak{t}^\mu d}$。よって、$d^{-1}\mathfrak{S}_\mu d \cap \mathfrak{S}_\nu$ は $\mathrm{row}_r(\mathfrak{t}^\mu d) \ (r \ge 1)$, $\mathrm{row}_s(\mathfrak{t}^\nu) \ (s \ge 1)$ を保つ置換全体と一致する。よって、$B_{rs} \coloneqq \mathrm{row}_r(\mathfrak{t}^\mu d) \cap \mathrm{row}_s(\mathfrak{t}^\nu) \ (r, s \ge 1)$ とすると

$$
d^{-1}\mathfrak{S}_\mu d \cap \mathfrak{S}_\nu = \prod_{r, s \ge 1} \mathfrak{S}(B_{rs})
$$

あとは、$B_{rs}$ が連続する数字からなることを示せば良い。$i, j \in B_{rs}$ は $i < j$ とする。$i, i + 1, \dots, j$ が $\mathfrak{t}^\mu d$ の $r$ 行目にあることを示せば良い。$\mathfrak{t}^\nu d^{-1}$ は row standard だから、$(i)d^{-1} < (i + 1)d^{-1} < \cdots < (j)d^{-1}$。$(i)d^{-1}, (j)d^{-1}$ は $\mathfrak{t}^\mu$ の $r$ 行目にあるから、$(i)d^{-1}, (i + 1)d^{-1}, \dots, (j)d^{-1} \in \mathfrak{t}^\mu$

上の状況で、$d^{-1}\mathfrak{S}_\mu d \cap \mathfrak{S}_\nu$ を生成する $S$ の部分集合は $(d^{-1}\mathfrak{S}_\mu d \cap \mathfrak{S}_\nu) \cap S$ だが、$d^{-1}(\mathfrak{S}_\mu \cap S)d \cap (\mathfrak{S}_\nu \cap S)$ とも一致する

$d \in \mathscr{D}_\mu$ ならば $d^{-1}\mathfrak{S}_\mu d \cap S = R_{\mathfrak{t}^\mu d} \cap S \subset d^{-1}(\mathfrak{S}_\mu \cap S)d$ が成り立つことから従う

$S$ の部分集合と各成分が正の $n$ の composition は一対一に対応する。$n$ の composition $\mu, \nu$ に対して、$d \in \mathscr{D}_\mu \cap \mathscr{D}_\nu^{-1}$ に対応する各成分が正の $n$ の composition を $\mu d \cap \nu$ で表す

Tableau の定義を一般化する

$\mu$: $n$ の composition
$\mu$-tableau とは写像 $\mathsf{T}: [\mu] \to \mathbb{Z}_{\ge 1}$ のことをいう。$\nu_i \coloneqq |\mathsf{T}^{-1}(i)| \ (i \ge 1)$ とすると、$\nu$ は $n$ の composition だが、$\mathsf{T}$ の type と呼ぶ

$\mu$: $n$ の composition
$\mu$-tableau $\mathsf{T}$ が row semistandard とは、各行が左から右に広義単調増加することをいう。Type $\nu$ の row semistandard $\mu$-tableau 全体を $\mathrm{RSStd}(\mu, \nu)$ で表す

$\lambda$: $n$ の分割
$\lambda$-tableau $\mathsf{T}$ が semistandard とは、各行が左から右に広義単調増加かつ各列が上から下に (狭義) 単調増加なことをいう。Type $\nu$ の semistandard $\lambda$-tableau 全体を $\mathrm{SStd}(\lambda, \nu)$ で表す

$\omega = (1^n)$ とする。$\mathrm{RStd}(\mu) = \mathrm{RSStd}(\mu, \omega)$, $\mathrm{Std}(\lambda) = \mathrm{SStd}(\lambda, \omega)$

$\nu$ を $n$ の composition とする。$f_\nu: \{ 1, \dots, n \} \to \mathbb{Z}_{\ge 1}$ を $1 \le k \le n$ を $\mathfrak{t}^\nu$ で $k$ がある行に写す写像とする。$\mu$ も $n$ の composition とする。Type $\omega$ の $\mu$-tableau に対して、type $\nu$ の $\mu$-tableau $\nu(\mathfrak{t}) \coloneqq f_\nu \circ \mathfrak{t}$ が定まる。$f_\nu$ は広義単調増加だから

$$
\nu: \mathrm{RStd}(\mu) = \mathrm{RSStd}(\mu, \omega) \to \mathrm{RSStd}(\mu, \nu)
$$

$(W, S)$: Coxeter 群
$X, Y \subset S$
$d \in {}^XW \cap W^Y$
$Z \coloneqq d^{-1}Xd \cap Y$
$b \in W_XdW_Y$ は $b = vdu \ (v \in W_X, u \in {}^Z(W_Y))$ と一意的に分解できる。さらに、このとき以下が成り立つ

$$
\ell(b) = \ell(v) + \ell(d) + \ell(u)
$$

[分解できること]
まず、$b = v_1 d w_1 \ (v_1 \in W_X, w_1 \in W_Y)$ と表示する。$w_1 = qu \ (q \in W_Z, u \in {}^Z(W_Y))$ と一意的に分解できる。$W_Z \subset d^{-1}W_Xd$ だから、$q = d^{-1}v_2d \ (v_2 \in W_X)$ と表せる。$w = v_1 d w_1 = v_1 d qu = v_1 v_2 d u$

[分解の一意性]
$u \in {}^Z(W_Y)$ ならば、$du \in {}^XW$ を示せば良い。ある $x \in X$ が存在して、$x \in D_L(du)$ と仮定する。SEC から $xdu = du' \ (u' \in W_Y, u' < u)$ または $xdu = d'u \ (d' \in W, d' < d)$ と表せる。後者の場合は $x \in D_L(d)$ となって $d \in {}^XW$ に矛盾する。よって、$xd = du'u^{-1} \ (u' \in W_Y, u' < u)$ が成り立つ

$$
\ell(u'u^{-1}) = \ell(du'u^{-1}) - \ell(d) = \ell(xd) - \ell(d) = \ell(x) = 1
$$

だから、$u'u^{-1} \in Y$。よって、$d^{-1}xd = u'u^{-1} \in Z$。これは $u \in {}^Z(W_Y)$ に矛盾する

[長さの等式]
$v \in W_X$, $du \in {}^XW$ だから、$\ell(b) = \ell(v) + \ell(du)$。また、$d \in W^Y$, $u \in W_Y$ だから $\ell(du) = \ell(d) + \ell(u)$

${}^Z(W_Y) = {}^ZW \cap W_Y$ に注意

$(W, S)$: Coxeter 群
$X, Y \subset S$
$\mathcal{B}$ を $W_X \curvearrowright W \curvearrowleft W_Y$ の double coset とする。$\mathcal{B}$ は Bruhat 順序に関して唯一の最小元を持つ。よって、$W_X \backslash W / W_Y$ の最短完全代表系が得られるが、${}^XW^Y$ と表す。${}^XW^Y = {}^XW \cap W^Y$ が成り立つ

$\mathcal{B}$ 内で長さが最小の $d \in \mathcal{B}$ を選ぶ。$d \in {}^XW \cap W^Y$。よって、$w \in \mathcal{B}$ は $w = vdu \ (v \in W_X, u \in {}^Z(W_Y))$ と一意的に分解でき、$\ell(w) = \ell(v) + \ell(d) + \ell(u)$。よって、$d$ は一意的で、$\mathcal{B}$ の中で Bruhat 順序に関して唯一の最小元になる。後半も明らか

以下の命題の $W = \mathfrak{S}_n$ の場合は先ほど示したが、一般の Coxeter 群でも成り立つ

$(W, S)$: Coxeter 群
$X, Y \subset S$
$d \in {}^XW \cap W^Y$
$d^{-1}W_Xd \cap W_Y$ は $Z \coloneqq d^{-1}Xd \cap Y$ で生成される

$d^{-1}vd = w \ (v \in W_X, w \in W_Y)$ とする。$w = qu \ (q \in W_Z, u \in {}^Z(W_Y))$ と分解する。$u = 1$ を示せば良い。$vd = dw = dqu = (dqd^{-1})du$。$dqd^{-1} \in dW_Zd^{-1} \subset W_X$ だから、分解の一意性から、$v = dqd^{-1}$ かつ $1 = u$

$\mu, \nu$: $n$ の composition
$\nu: \mathrm{RStd}(\mu) \to \mathrm{RSStd}(\mu, \nu)$ は全射で、$\nu$ の値による類別は $\mathrm{RStd}(\mu) = \mathfrak{S}_\mu \backslash \mathfrak{S}_n \curvearrowleft \mathfrak{S}_\nu$ の軌道と一致する。$\mathsf{T} \in \mathrm{RSStd}(\mu, \nu)$ に対して、$\nu^{-1}(\mathsf{T})$ 内での Bruhat 順序に関する唯一の最小元を $\mathrm{first}(\mathsf{T})$ で表す。同様に、$\nu^{-1}(\mathsf{T})$ 内での Bruhat 順序に関する唯一の最大元があり、$\mathrm{last}(\mathsf{T})$ で表す。$\mathrm{first}(\mathsf{T})$ は各 $r$ に対して、$r$ が入っている部分を取り除いて $\mathfrak{t}^\nu$ の $r$ 行目の数字を上から順に左から右に埋めたもの。同様に、$\mathrm{last}(\mathsf{T})$ は各 $r$ に対して、$r$ が入っている部分を取り除いて $\mathfrak{t}^\nu$ の $r$ 行目の数字を下から順に左から右に埋めたもの

$\mu, \nu$: $n$ の composition

$$
\mathscr{D}_{\mu\nu} \coloneqq \{ d(\mathrm{first}(\mathsf{T})) \mid \mathsf{T} \in \mathrm{RSStd}(\mu, \nu) \} \subset \mathfrak{S}_n
$$

とすると、$\mathscr{D}_{\mu\nu}$ は $\mathfrak{S}_\mu \backslash \mathfrak{S}_n / \mathfrak{S}_\nu$ の最短完全代表系で、以下が成り立つ

(1) $w \in \mathfrak{S}_n$ は $w = vdu \ (v \in \mathfrak{S}_\mu, d \in \mathscr{D}_{\mu\nu}, u \in \mathscr{D}_{\mu d \cap \nu} \cap \mathfrak{S}_\nu)$ と一意的に分解でき、$\ell(w) = \ell(v) + \ell(d) + \ell(u)$ が成り立つ
(2) $\mathscr{D}_{\mu\nu} = \mathscr{D}_\mu \cap \mathscr{D}_\nu^{-1}$

$\mu, \nu$: $n$ の composition
$d \in \mathscr{D}_{\mu\nu}$
$\mathsf{T} \coloneqq \nu(\mathfrak{t}^\mu d) \in \mathrm{RSStd}(\mu, \nu)$, $\mathsf{S} \coloneqq \mu(\mathfrak{t}^\nu d^{-1}) \in \mathrm{RSStd}(\nu, \mu)$ とすると

$$
m_\mu \sum_{\mathfrak{t} \in \mathrm{RStd}(\mu), \nu(\mathfrak{t}) = \mathsf{T}} T_{d(\mathfrak{t})} = \sum_{w \in \mathfrak{S}_\mu d \mathfrak{S}_\nu} T_w = \left(\sum_{\mathfrak{s} \in \mathrm{RStd}(\nu), \mu(\mathfrak{s}) = \mathsf{S}} T_{d(\mathfrak{s})}^*\right) m_\nu
$$

$\varphi^d_{\mu\nu}: M^\nu \to M^\mu$ を

$$
\begin{aligned}
  \varphi^d_{\mu\nu}(m_\nu h) &\coloneqq \left(\sum_{\mathfrak{s} \in \mathrm{RStd}(\nu), \mu(\mathfrak{s}) = \mathsf{S}} T_{d(\mathfrak{s})}^*\right) m_\nu h \\
  &= \left(\sum_{w \in \mathfrak{S}_\mu d \mathfrak{S}_\nu} T_w\right) h \\
  &= m_\mu \left(\sum_{\mathfrak{t} \in \mathrm{RStd}(\mu), \nu(\mathfrak{t}) = \mathsf{T}} T_{d(\mathfrak{t})}\right) h
\end{aligned}
$$

で定義する

[定理]
$\mu, \nu$: $n$ の composition
$\mathrm{Hom}_\mathscr{H}(M^\nu, M^\mu)$ は $R$ 加群として $\{ \varphi_{\mu\nu}^d \mid d \in \mathscr{D}_{\mu\nu} \}$ で自由生成される

$M^\mu = \bigoplus_{\mathfrak{t} \in \mathrm{RStd}(\mu)} R m_\mu T_{d(\mathfrak{t})}$。$\varphi^d_{\mu\nu}(m_\nu) = \sum_{\mathfrak{t} \in \mathrm{RStd}(\mu), \nu(\mathfrak{t}) = \nu(\mathfrak{t}^\mu d)} m_\mu T_{d(\mathfrak{t})}$ だから、非自明な関係式はない。あとは、生成することを示せば良い。$\varphi \in \mathrm{Hom}_\mathscr{H}(M^\nu, M^\mu)$ とする。$\varphi(m_\nu) = \sum_{\mathfrak{t} \in \mathrm{RStd}(\mu)} a_\mathfrak{t} m_\mu T_{d(\mathfrak{t})}$ と展開する。$s_i \in S \cap \mathfrak{S}_\nu$ とする

$$
q\varphi(m_\nu) = \varphi(m_\nu T_{s_i}) = \varphi(m_\nu)T_{s_i}
$$

だから、$\mathfrak{t} \in \mathrm{RStd}(\mu)$ に対して、$i, i + 1$ が $\mathfrak{t}$ の異なる行にあるならば、$a_{\mathfrak{t}} = a_{\mathfrak{t}s_i}$。$s_i \in S \cap \mathfrak{S}_\nu$ は任意だから、$\mathfrak{t}, \mathfrak{t}' \in \mathrm{RStd}(\mu)$ に対して、$\nu(\mathfrak{t}) = \nu(\mathfrak{t}')$ ならば、$a_\mathfrak{t} = a_{\mathfrak{t}'}$

左 $\mathscr{H}$ 加群 $M^{*\nu} \coloneqq \mathscr{H}m_\nu$ は右 $\mathscr{H}$ 加群 $M^\nu = m_\nu\mathscr{H}$ を $*$ で捻った左 $\mathscr{H}$ 加群と同型

$\mu, \nu$: $n$ の composition

$$
\mathrm{Hom}_\mathscr{H}(M^\nu, M^\mu) \ni \varphi \mapsto \varphi(m_\nu) \in M^\mu \cap M^{*\nu}
$$

は $R$ 加群の同型

逆写像を構成する。$m_\mu a = b m_\nu \in M^\mu \cap M^{*\nu}$ とすると、$(m_\nu h \mapsto b m_\nu h = m_\mu a h) \in \mathrm{Hom}_\mathscr{H}(M^\nu, M^\mu)$

# $M^\mu$

$\lambda$: $n$ の分割
$\mu$: $n$ の composition
$\mathsf{S} \in \mathrm{SStd}(\lambda, \mu)$
$\mathfrak{t} \in \mathrm{Std}(\lambda)$

$$
\begin{aligned}
  m_{\mathsf{S}\mathfrak{t}} &\coloneqq \sum_{\mathfrak{s} \in \mathrm{Std}(\lambda), \mu(\mathfrak{s}) = \mathsf{S}} m_{\mathfrak{s}\mathfrak{t}} \\
  m_{\mathfrak{t}\mathsf{S}} &\coloneqq \sum_{\mathfrak{s} \in \mathrm{Std}(\lambda), \mu(\mathfrak{s}) = \mathsf{S}} m_{\mathfrak{t}\mathfrak{s}} = m_{\mathsf{S}\mathfrak{t}}^*
\end{aligned}
$$

Type $\omega$ の $\lambda$-tableau $\mathfrak{s}$ に対して、$\nu(\mathfrak{s})$ が semistandard ならば、$\mathfrak{s}$ は standard。逆は成り立たないことに注意

$d \coloneqq d(\mathrm{first}(\mathsf{S}))$ とすると

$$
\begin{aligned}
  m_{\mathsf{S}\mathfrak{t}} &= \sum_{v \in \mathscr{D}_\lambda \cap \mathfrak{S}_\lambda d \mathfrak{S}_\mu} T_v^* m_\lambda T_{d(\mathfrak{t})} \\
  &= \sum_{w \in \mathfrak{S}_\mu d^{-1} \mathfrak{S}_\lambda} T_w T_{d(\mathfrak{t})} \\
  &\in M^\mu
\end{aligned}
$$

[定理 (Murphy)]
$\mu$: $n$ の composition
$M^\mu$ は $R$ 加群として $\{ m_{\mathsf{S}\mathfrak{t}} \mid \lambda \vdash n, \mathsf{S} \in \mathrm{SStd}(\lambda, \mu), \mathfrak{t} \in \mathrm{Std}(\lambda) \}$ で自由生成される

$\mathscr{H} = \bigoplus_{\lambda \vdash n, \mathfrak{s}, \mathfrak{t} \in \mathrm{Std}(\lambda)} R m_{\mathfrak{s}\mathfrak{t}}$ から非自明な関係式はないことがわかる。$\sum_{\lambda \vdash n, \mathfrak{s}, \mathfrak{t} \in \mathrm{Std}(\lambda)} r_{\mathfrak{s}\mathfrak{t}} m_{\mathfrak{s}\mathfrak{t}} \in M^\mu$ とする。以前示したことから、$\mathfrak{s}, \mathfrak{s}' \in \mathrm{Std}(\lambda)$ が $\mu(\mathfrak{s}) = \mu(\mathfrak{s}')$ を満たせば、$r_\mathfrak{s} = r_{\mathfrak{s}'}$ であり、$\mathfrak{s} \in \mathrm{Std}(\lambda)$ が $\mu(\mathfrak{s}) \not\in \mathrm{SStd}(\lambda, \mu)$ ならば $r_\mathfrak{s} = 0$

特に、以下が成り立つ

$\mu$: $n$ の composition

$$
\sum_{\lambda \vdash n} |\mathrm{SStd}(\lambda, \mu)||\mathrm{Std}(\lambda)| = |\mathrm{RStd}(\mu)| = \frac{n!}{\mu!}
$$

# Superfluous submodule

$R$: 単位的環

$R$ 加群 $M$ の部分加群 $N \subset M$ が superfluous とは、任意の $H \subset M$ に対して、$N + H = M$ $\Rightarrow$ $H = M$ が成り立つことをいう

Superfluous submodule の部分加群は superfluous。また、superfluous submodule の有限和は superfluous

$N \subset M \subset M'$ とする。$N$ が $M$ 内で superfluous ならば、$M'$ 内でも superfluous

$N + H = M'$ とする。$N + (H \cap M) = M$ だから、$M \subset H$。よって、$H = M$

$M$: $R$ 加群
$\mathrm{rad}(M)$ は superfluous submodule たちの和

$N \subset M$ は superfluous とする。$J \subset M$ を極大部分加群とする。$N \not\subset J$ と仮定すると、$N + J = M$。よって、$J = M$ となって矛盾する。次に、$x \in \mathrm{rad}(M)$ とすると、$Rx$ が superfluous なことを示す。$H \subsetneq M$ が存在して $Rx + H = M$ を満たすと仮定する。$H$ は $x$ を含まない部分加群の中で極大として良い。$H \subset M$ は極大部分加群になるから、矛盾する

証明から、$\mathrm{rad}(M)$ の有限生成部分加群は superfluous なことがわかる

$M$: 有限 $R$ 加群
$\mathrm{rad}(M)$ は superfluous
$H \subsetneq M$ が存在して $\mathrm{rad}(M) + H = M$ を満たすと仮定する。$M$ は有限生成だから、$H \subset M$ は極大部分加群として良い。$\mathrm{rad}(M) \subset H$ だから矛盾する

一般に、$\mathrm{rad}(M) \supset J(R)M$ が成り立つことに注意

# Projective cover

$R$: 単位的環

$M$: $R$ 加群
射影加群からの全射 $\pi: P \to M$ が projective cover とは、$\mathrm{Ker}\pi \subset P$ が superfluous なことをいう

Projective cover の有限直和も projective cover

$R$ 加群 $M$ の projective cover は一意的

$\pi_i: P_i \to M$ は projective cover とする。$P_2$ は射影的だから、$f: P_2 \to P_1$ が存在して

$$
\begin{array}{ccc}
  P_1 &\twoheadrightarrow& M \\
  \uparrow{\scriptsize{f}} && \parallel \\
  P_2 &\twoheadrightarrow& M
\end{array}
$$

$\pi_1 \circ f$ は全射だから、$\mathrm{Ker}\pi_1 + \mathrm{Im}f = P_1$。$\mathrm{Ker}\pi_1 \subset P_1$ は superfluous だから、$f$ は全射。$P_1$ は射影的だから、$g: P_1 \to P_2$ が存在して、$f \circ g = 1$。$\pi_2 \circ g$ は全射だから、同じ議論で $g$ は全射なことがわかる。よって、$f, g$ は互いに逆写像

$R$: 左 Artin 環
任意の $R$ 加群 $M$ は projective cover を持つ

$\bar{R} \coloneqq R / J(R)$ とする。$\bar{R}$ 加群 $M / J(R)M$ は $M / J(R)M = \bigoplus_{\lambda \in \Lambda} S_\lambda$ と単純 $\bar{R}$ 加群の直和に分解できる。(原始的) 冪等元 $\bar{e}_\lambda \in \bar{R}$ が存在して、$S_\lambda = \bar{R}\bar{e}_\lambda$。$J(R)$ は冪零な両側イデアルだから、$\bar{e}_\lambda \in \bar{R}$ の持ち上げ $e_\lambda \in R$ で冪等なものが存在する。$\varphi_\lambda: Re_\lambda \twoheadrightarrow S_\lambda$ は $R$ 加群 $S_\lambda$ の射影被覆になることを示す。$\mathrm{Ker}\varphi_\lambda = Re_\lambda \cap J(R) = J(R)e_\lambda \subset Re_\lambda$ は superfluous なことから従う。$P \coloneqq \bigoplus_{\lambda \in \Lambda} Re_\lambda$ とすると $\varphi: P \twoheadrightarrow M / J(R)M$ も射影被覆になることを示す。$\mathrm{Ker}\varphi = J(R)P \subset P$ が superfluous なことを示せば良い。$H \subset P$ は $J(R)P + H = P$ を満たすとする。$J(R)(P / H) = P / H$。$J(R)$ は冪零だから、$P / H = 0$。$P$ は射影加群だから、$f: P \to M$ が存在して

$$
\begin{array}{ccc}
  M &\twoheadrightarrow& M / J(R)M \\
  \uparrow{\scriptsize{f}} & \nearrow{\scriptsize{\varphi}} & \\
  P &&
\end{array}
$$

$f$ は全射なことを示す。$(M \to M / J(R)M) \circ f$ は全射だから、$\mathrm{Im}f + J(R)M = M$。$J(R)(M / \mathrm{Im}f) = M / \mathrm{Im}f$。$J(R)$ は冪零だから、$M / \mathrm{Im}f = 0$。最後に、$f$ は superfluous なことを示す。$\mathrm{Ker}f \subset \mathrm{Ker}\varphi$ だから、$\mathrm{Ker}\varphi$ が superfluous なことから従う

$R$: 左 Artin 環
$P$: PIM
$P \to \mathrm{top}(P)$ は $\mathrm{top}(P)$ の projective cover

$\mathrm{rad}(P)$ は superfluous なことから明らか


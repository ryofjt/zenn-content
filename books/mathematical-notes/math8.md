---
title: "math8"
---

# Jucys-Murphy elements

$q \in R^\times$

$1 \le k \le n$ に対して

$$
L_k \coloneqq \sum_{j = 1}^{k - 1} q^{j - k}T_{(j, k)} \in \mathscr{H}
$$

と定義する。$L_1 = 0$ に注意。以下が成り立つ

(1)

$$
\begin{aligned}
  T_{s_i}L_{i + 1} &= (q - 1)L_{i + 1} + 1 + L_iT_{s_i} \\
  T_{s_i}L_i &= L_{i + 1}T_{s_i} - 1 - (q - 1)L_{i + 1}
\end{aligned}
$$

${}$(2) $k \not\in \{ i, i + 1 \}$ ならば $[T_{s_i}, L_k] = 0$
(3) $[L_k, L_l] = 0$
(4) $[T_{s_i}, L_iL_{i + 1}] = 0$, $[T_{s_i}, L_i + L_{i + 1}] = 0$

(1)
$L_k^* = L_k$ だから、前半のみ示す

$$
\begin{aligned}
  T_{s_i}L_{i + 1} &= T_{s_i} \sum_{j = 1}^i q^{j - i - 1}T_{(j, i + 1)} \\
  &= \sum_{j = 1}^i q^{j - i}T_{s_i(j, i + 1)} + (q - 1)L_{i + 1} \\
  &= \sum_{j = 1}^{i - 1} q^{j - i}T_{s_i(j, i + 1)} + 1 + (q - 1)L_{i + 1} \\
  &= \sum_{j = 1}^{i - 1} q^{j - i}T_{(j, i)s_i} + 1 + (q - 1)L_{i + 1} \\
  &= L_i T_{s_i} + 1 + (q - 1)L_{i + 1}
\end{aligned}
$$

(2)
$i \ge k + 1$ の場合は明らか。$i \le k - 2$ とする。$k \ge 3$ だが

$$
\begin{aligned}
  T_{s_i}L_k &= T_{s_i} \sum_{j = 1}^{k - 1} q^{j - k}T_{(j, k)} \\
  &= \sum_{1 \le j \le k - 1, j \not\in \{ i, i + 1 \}} q^{j - k}T_{(j, k)}T_{s_i} + q^{i - k}T_{s_i}T_{(i, k)} + q^{i - k + 1}T_{s_i}T_{(i + 1, k)} \\
  &= \sum_{1 \le j \le k - 1, j \not\in \{ i, i + 1 \}} q^{j - k}T_{(j, k)}T_{s_i} + q^{i - k + 1}T_{s_i(i, k)} + q^{i - k}(q - 1)T_{(i, k)} + q^{i - k + 1}T_{s_i(i + 1, k)} \\
  &= \sum_{1 \le j \le k - 1, j \not\in \{ i, i + 1 \}} q^{j - k}T_{(j, k)}T_{s_i} + q^{i - k + 1}T_{(i + 1, k)s_i} + q^{i - k}(q - 1)T_{(i, k)} + q^{i - k + 1}T_{(i, k)s_i} \\
  &= \sum_{1 \le j \le k - 1, j \not\in \{ i, i + 1 \}} q^{j - k}T_{(j, k)}T_{s_i} + q^{i - k + 1}T_{(i + 1, k)}T_{s_i} + q^{i - k}T_{(i, k)}T_{s_i} \\
  &= L_k T_{s_i}
\end{aligned}
$$

(3)
(1) の $T_{s_i}$ 倍を考えれば

$$
qL_{i + 1} = T_{s_i} + T_{s_i}L_iT_{s_i}
$$

$k < l$ として良い。$l$ に関する帰納法で示す。$l = 2$ の場合は明らか。$l \ge 3$ とする。$k \le l - 2$ の場合は、(2) と帰納法の仮定から

$$
q[L_k, L_l] = [L_k, T_{s_{l - 1}}] + [L_k, T_{s_{l - 1}}L_{l - 1}T_{s_{l - 1}}] = 0
$$

最後に、$k = l - 1$ の場合を示す。$T \coloneqq T_{s_k}$ とおくと、$qL_{k + 1} = T + TL_kT$ だから

$$
q^3L_kL_{k + 1} = q^2L_kT + q^2L_kTL_kT
$$

さらに $S \coloneqq T_{s_{k - 1}}$ とおくと、$qL_k = S + SL_{k - 1}S$ だから

$$
\begin{aligned}
  q^3L_kL_{k + 1} &= qST + STST \\
  &\quad + qSL_{k - 1}ST + STSL_{k - 1}ST + SL_{k - 1}STST \\
  &\quad + SL_{k - 1}STSL_{k - 1}ST
\end{aligned}
$$

$$
\begin{aligned}
  qST + STST &= qST + S^2TS \\
  &= qST + qTS + (q - 1)STS \\
  &= qTS + (q + (q - 1)T)ST \\
  &= qTS + T^2ST \\
  &= qTS + TSTS
\end{aligned}
$$

${}$(2) から $[T, L_{k - 1}] = 0$ であり、帰納法の仮定から $[L_{k - 1}, L_k] = [L_{k - 1}, S + SL_{k - 1}S] = 0$ だから

$$
\begin{aligned}
  q^3L_kL_{k + 1} &= qTS + TSTS \\
  &\quad + qSL_{k - 1}TS + TSL_{k - 1}STS + SL_{k - 1}TSTS \\
  &\quad + STL_{k - 1}SL_{k - 1}STS \\
  &= qTS + TSTS \\
  &\quad + qSL_{k - 1}TS + TSL_{k - 1}STS \\
  &\quad + ST(L_{k - 1}SL_{k - 1}S + L_{k - 1}S)TS \\
  &= qTS + TSTS \\
  &\quad + qSL_{k - 1}TS + TSL_{k - 1}STS \\
  &\quad + ST(SL_{k - 1}SL_{k - 1} + SL_{k - 1})TS \\
  &= qTS + TSTS \\
  &\quad + qSTL_{k - 1}S + TSL_{k - 1}STS + STSTL_{k - 1}S \\
  &\quad + TSL_{k - 1}STSL_{k - 1}S \\
  &= qTS + TSTS \\
  &\quad + qTSL_{k - 1}S + TSL_{k - 1}STS + TSTSL_{k - 1}S \\
  &\quad + TSL_{k - 1}STSL_{k - 1}S \\
  &= (q^3L_kL_{k + 1})^* \\
  &= q^3L_{k + 1}L_k
\end{aligned}
$$

(4)
2 つ目は (1) からわかる。1 つ目は

$$
T_{s_i}L_iL_{i + 1} = L_{i + 1}T_{s_i}L_{i + 1} - L_{i + 1} - (q - 1)L_{i + 1}^2 = L_{i + 1}L_iT_{s_i} = L_iL_{i + 1}T_{s_i}
$$

$$
R[L_2, \dots, L_n]^{\mathfrak{S}_{n - 1}} \subset Z(\mathscr{H})
$$

$R[L_2, \dots, L_n]^{\mathfrak{S}_{n - 1}}$ の元が $T_{s_i}$ と可換なことを示せば良い。$i = 1$ の場合は明らか。$i \ge 2$ の場合は以下から従う

$$
\begin{aligned}
  R[L_2, \dots, L_n]^{\mathfrak{S}_{n - 1}} &\subset (R[L_2, \dots, \check{L}_i, \check{L}_{i + 1}, \dots, L_n])[L_i, L_{i + 1}]^{\mathfrak{S}_2} \\
  &\simeq R[L_2, \dots, \check{L}_i, \check{L}_{i + 1}, \dots, L_n, L_i + L_{i + 1}, L_i L_{i + 1}]
\end{aligned}
$$

$\lambda$: $n$ の分割
$\mathfrak{t} \in \mathrm{Std}(\lambda)$
Standard $\lambda$-tableau の列 $\mathfrak{t}^\lambda = \mathfrak{t}_0, \dots, \mathfrak{t}_k = \mathfrak{t}$ で $d(\mathfrak{t}_0) \prec \cdots \prec d(\mathfrak{t}_k)$ を満たすものが存在する

$d(\mathfrak{t})$ に関する帰納法を使う。$d(\mathfrak{t}) = 0$ の場合は明らか。$d(\mathfrak{t}) > 0$ とする。ある $i$ が存在して、$\mathfrak{t}$ において $i$ は $i + 1$ よりも下の行にある。$\mathfrak{t} (i, i + 1)$ に帰納法の仮定を使えば良い

同様の証明で以下が言える

$\lambda$: $n$ の分割
$\mu$: $n$ の composition
$\mathfrak{t} \in \mathrm{Std}(\lambda)$
$0 \le j \le n$ に対して、$\lambda_j \coloneqq \mathrm{Shape}(\mathfrak{t} \downarrow \sum_{i \le j} \mu_i)$ と定義すると、$\lambda_j$ たちは分割になる。各 $j$ に対して、$\mathfrak{t}$ の領域 $[\lambda_j] \setminus [\lambda_{j - 1}]$ にある要素を上の行から順に左から右に並べ替えて得られる standard $\lambda$-tableau を $\mathfrak{t}_0$ とする。standard $\lambda$-tableau の列 $\mathfrak{t} = \mathfrak{t}_0, \dots, \mathfrak{t}_k = \mathfrak{t}$ で $d(\mathfrak{t}_i)^{-1}d(\mathfrak{t}_{i + 1}) \in S \cap \mathfrak{S}_\mu$ かつ $d(\mathfrak{t}_0) \prec \cdots \prec d(\mathfrak{t}_k)$ を満たすものが存在する

$$
[m]_q \coloneqq \frac{q^m - 1}{q - 1} = \begin{cases}
  1 + q + \cdots + q^{m - 1} &\quad (m \ge 0) \\
  -q^m - q^{m + 1} - \cdots - q^{-1} &\quad (m < 0)
\end{cases}
$$

$$
\begin{aligned}
  [m + n]_q &= [m]_q + q^m[n]_q \\
  [mn]_q &= [m]_q [n]_{q^m}
\end{aligned}
$$

$[m]_q^! \coloneqq [1]_q [2]_q \cdots [m]_q \quad (m \ge 0)$

$I \coloneqq \{ n \in \mathbb{Z} \mid [n]_q = 0 \} \subset \mathbb{Z}$ はイデアルだから、$e \in \mathbb{Z}_{\ge 1} \sqcup \{ \infty \}$ が定義できる。写像

$$
\{ n \in \mathbb{Z} \mid 0 \le n < e \} \simeq \mathbb{Z} / I \ni \bar{n} \mapsto [n]_q \in R
$$

は well-defined

$\lambda$: $n$ の分割
$\mathfrak{t} \in \mathrm{Std}(\lambda)$
$1 \le k \le n$ に対して、$\mathfrak{t}$ での $k$ の位置を $(i, j)$ として

$$
\mathrm{res}_\mathfrak{t}(k) \coloneqq j - i \mod e
$$

と定義する

$\lambda$: $n$ の分割
$k \ge 1$ とし、$\mu \coloneqq (\lambda_1, \dots, \lambda_k)$ とする。$|\mu|$ の分割 $\nu$ は $\nu \triangleright \mu$ を満たすとする。$\nu_i = 0 \ (i > k)$ だが、$n$ の分割 $\tilde{\nu}$ を $n$ の composition $(\nu_1, \dots, \nu_k, \lambda_{k + 1}, \lambda_{k + 2}, \dots)$ を並べ替えたものとすると、$\tilde{\nu} \triangleright \lambda$

$\tilde{\nu} \trianglerighteq (\nu_1, \dots, \nu_k, \lambda_{k + 1}, \lambda_{k + 2}, \dots) \triangleright \lambda$ から従う

[定理 (Dipper-James)]
$\lambda$: $n$ の分割
$\mathfrak{s}, \mathfrak{t} \in \mathrm{Std}(\lambda)$
任意の $1 \le k \le n$ に対して

$$
m_{\mathfrak{s}\mathfrak{t}} L_k \in [\mathrm{res}_\mathfrak{t}(k)]_q m_{\mathfrak{s}\mathfrak{t}} + \sum_{\mathfrak{v} \in \mathrm{Std}(\lambda), \mathfrak{v} \triangleright \mathfrak{t}} R m_{\mathfrak{s}\mathfrak{v}} + \sum_{\mu \vdash n, \mu \triangleright \lambda} \mathscr{H}m_\mu\mathscr{H}
$$

まず、$\mathfrak{t} = \mathfrak{t}^\lambda$ で示せば良いことを示す。$d(\mathfrak{t})$ に関する帰納法を使う。$d(\mathfrak{t}) = 0$ の場合は後で示す。$d(\mathfrak{t}) \ge 1$ とする。ある $i$ が存在して、$\mathfrak{t}$ で $i$ は $i + 1$ よりも下の行にある。$\mathfrak{t}' \coloneqq \mathfrak{t} (i, i + 1) \in \mathrm{Std}(\lambda)$ とする。$k \not\in \{ i, i + 1 \}$ ならば

$$
\begin{aligned}
  m_{\mathfrak{s}\mathfrak{t}} L_k = m_{\mathfrak{s}\mathfrak{t}'} T_{s_i} L_k = m_{\mathfrak{s}\mathfrak{t}'} L_k T_{s_i} \equiv [\mathrm{res}_{\mathfrak{t}'}(k)]_q m_{\mathfrak{s}\mathfrak{t}'} T_{s_i} = [\mathrm{res}_{\mathfrak{t}}(k)]_q m_{\mathfrak{s}\mathfrak{t}}
\end{aligned}
$$

$k = i$ ならば

$$
\begin{aligned}
  m_{\mathfrak{s}\mathfrak{t}} L_i &= m_{\mathfrak{s}\mathfrak{t}'} T_{s_i} L_i \\
  &= m_{\mathfrak{s}\mathfrak{t}'} (L_{i + 1}T_{s_i} - 1 - (q - 1)L_{i + 1}) \\
  &\equiv [\mathrm{res}_{\mathfrak{t}'}(i + 1)]_q m_{\mathfrak{s}\mathfrak{t}} \\
  &= [\mathrm{res}_{\mathfrak{t}}(i)]_q m_{\mathfrak{s}\mathfrak{t}}
\end{aligned}
$$

$k = i + 1$ ならば

$$
\begin{aligned}
  m_{\mathfrak{s}\mathfrak{t}} L_{i + 1} &= m_{\mathfrak{s}\mathfrak{t}'} T_{s_i} L_{i + 1} \\
  &= m_{\mathfrak{s}\mathfrak{t}'} ((q - 1)L_{i + 1} + 1 + L_iT_{s_i}) \\
  &\equiv [\mathrm{res}_{\mathfrak{t}'}(i)]_q m_{\mathfrak{s}\mathfrak{t}} \\
  &= [\mathrm{res}_{\mathfrak{t}}(i + 1)]_q m_{\mathfrak{s}\mathfrak{t}}
\end{aligned}
$$

あとは、$\mathfrak{t} = \mathfrak{t}^\lambda$ の場合を示す

$$
m_\lambda L_k \in [\mathrm{res}_{\mathfrak{t}^\lambda}(k)]_q m_\lambda + \sum_{\mu \vdash n, \mu \triangleright \lambda} \mathscr{H}m_\mu\mathscr{H}
$$

を示せば良い。$n$ に関する帰納法を使う。$n = 1$ の場合は明らか。$n \ge 2$ とする。さらに $k$ に関する帰納法を使う。$k = 1$ の場合は明らか。$k \ge 2$ とする。まず、$\mathfrak{t}^\lambda$ の中で $k$ は最後の行にはないとする。$k$ のある行を $r$ とし、$\mu \coloneqq (\lambda_1, \dots, \lambda_r)$ とする。$m_\lambda = m_\mu m_{\mathfrak{S}_{(\lambda_{r + 1}, \lambda_{r + 2}, \dots)}}$。$L_k$ は $m_{\mathfrak{S}_{(\lambda_{r + 1}, \lambda_{r + 2}, \dots)}}$ と可換。任意の $|\mu|$ の分割 $\nu$ で $\nu \triangleright \mu$ なものに対して、$n$ の分割 $\tilde{\nu}$ を $n$ の composition $(\nu_1, \dots, \nu_r, \lambda_{r + 1}, \lambda_{r + 2}, \dots)$ を並べ替えたものとすると

$$
\begin{aligned}
  \mathscr{H}(\mathfrak{S}_{|\mu|})m_\nu\mathscr{H}(\mathfrak{S}_{|\mu|}) m_{\mathfrak{S}_{(\lambda_{r + 1}, \lambda_{r + 2}, \dots)}} &= \mathscr{H}(\mathfrak{S}_{|\mu|})m_\nu m_{\mathfrak{S}_{(\lambda_{r + 1}, \lambda_{r + 2}, \dots)}}\mathscr{H}(\mathfrak{S}_{|\mu|}) \\
  &= \mathscr{H}(\mathfrak{S}_{|\mu|})m_{(\nu_1, \dots, \nu_r, \lambda_{r + 1}, \lambda_{r + 2}, \dots)}\mathscr{H}(\mathfrak{S}_{|\mu|}) \\
  &\subset \mathscr{H}m_{(\nu_1, \dots, \nu_r, \lambda_{r + 1}, \lambda_{r + 2}, \dots)}\mathscr{H} \\
  &= \mathscr{H}m_{\tilde{\nu}}\mathscr{H}
\end{aligned}
$$

が成り立つことに注意すると

$$
m_\lambda L_k \equiv [\mathrm{res}_{\mathfrak{t}^\mu}(k)]_q m_\lambda = [\mathrm{res}_{\mathfrak{t}^\lambda}(k)]_q m_\lambda
$$

次に、$k$ が $\mathfrak{t}^\lambda$ の 1 列目にはない場合を考える。$k \ge 2$ であり、$s_{k - 1} \in \mathfrak{S}_\lambda$

$$
\begin{aligned}
  m_\lambda L_k &= q^{-1} m_\lambda (T_{s_{k - 1}} + T_{s_{k - 1}}L_{k - 1}T_{s_{k - 1}}) \\
  &\equiv (1 + q[\mathrm{res}_{\mathfrak{t}^\lambda}(k - 1)]_q) m_\lambda \\
  &= [\mathrm{res}_{\mathfrak{t}^\lambda}(k - 1) + 1]_q m_\lambda \\
  &= [\mathrm{res}_{\mathfrak{t}^\lambda}(k)]_q m_\lambda
\end{aligned}
$$

あとは、$k$ が $\mathfrak{t}^\lambda$ の最後の行の最初にある場合を考えれば良い。最後の行を $r$ とする。$\lambda_r = 1$ の場合は最後に示す。$\lambda_r \ge 2$ の場合は

$$
\begin{aligned}
  e_\lambda L_k &= e_{\mathfrak{S}_{\lambda_r}} e_{(\lambda_1, \dots, \lambda_{r - 1})} L_k \\
  &= e_{\mathfrak{S}_{\lambda_r}} e_{(\lambda_1, \dots, \lambda_{r - 1}, 1)} L_k \\
  &\equiv [\mathrm{res}_{\mathfrak{t}^{(\lambda_1, \dots, \lambda_{r - 1}, 1)}}(k)]_q e_{\mathfrak{S}_{\lambda_r}} e_{(\lambda_1, \dots, \lambda_{r - 1}, 1)} \\
  &= [\mathrm{res}_{\mathfrak{t}^\lambda}(k)]_q e_\lambda
\end{aligned}
$$

最後に、$\lambda_r = 1$ の場合を示す。$k = n$ かつ $r \ge 2$。$\lambda = (\lambda_1, \dots, \lambda_{r - 1}, 1)$ に注意。$\mu \coloneqq (\lambda_1, \dots, \lambda_{r - 2}, \lambda_{r - 1} + 1)$ は $n$ の composition だが、$\mu \triangleright \lambda$

$$
\begin{aligned}
  0 &\equiv e_\mu \\
  &= \sum_{w \in \mathfrak{S}_\mu} T_w \\
  &= e_\lambda \sum_{w \in \mathfrak{S}_\mu \cap \mathscr{D}_\lambda} T_w \\
  &= e_\lambda (1 + T_{s_{n - 1}} + T_{s_{n - 2}}T_{s_{n - 1}} + \cdots + T_{s_{n - \lambda_{r - 1}}} \cdots T_{s_{n - 1}}) \\
  &= e_\lambda + e_\lambda (1 + T_{s_{n - 2}} + T_{s_{n - 3}}T_{s_{n - 2}} + \cdots + T_{s_{n - \lambda_{r - 1}}} \cdots T_{s_{n - 2}}) T_{s_{n - 1}} \\
  &= e_\lambda + [\lambda_{r - 1}]_q e_\lambda T_{s_{n - 1}}
\end{aligned}
$$

$$
\begin{aligned}
  0 &\equiv e_\lambda L_n + [\lambda_{r - 1}]_q e_\lambda T_{s_{n - 1}} L_n \\
  &= e_\lambda L_n + [\lambda_{r - 1}]_q e_\lambda ((q - 1)L_n + 1 + L_{n - 1}T_{s_{n - 1}}) \\
  &= q^{\lambda_{r - 1}} e_\lambda L_n + [\lambda_{r - 1}]_q e_\lambda + [\lambda_{r - 1}]_q e_\lambda L_{n - 1}T_{s_{n - 1}} \\
  &\equiv q^{\lambda_{r - 1}} e_\lambda L_n + [\lambda_{r - 1}]_q e_\lambda + [\lambda_{r - 1}]_q [\mathrm{res}_{\mathfrak{t}^\lambda}(n - 1)]_q e_\lambda T_{s_{n - 1}} \\
  &\equiv q^{\lambda_{r - 1}} e_\lambda L_n + ([\lambda_{r - 1}]_q - [\mathrm{res}_{\mathfrak{t}^\lambda}(n - 1)]_q) e_\lambda
\end{aligned}
$$

だから

$$
\begin{aligned}
  e_\lambda L_n &\equiv q^{-\lambda_{r - 1}} ([\mathrm{res}_{\mathfrak{t}^\lambda}(n - 1)]_q - [\lambda_{r - 1}]_q) e_\lambda \\
  &= q^{-\lambda_{r - 1}} ([\lambda_{r - 1} - r + 1]_q - [\lambda_{r - 1}]_q) e_\lambda \\
  &= [-r + 1]_q e_\lambda \\
  &= [\mathrm{res}_{\mathfrak{t}^\lambda}(n)]_q e_\lambda
\end{aligned}
$$

# 列の反対称化作用素

$R$: 可換環

$\lambda$: $n$ の分割
$\mathfrak{t} \in \mathrm{Tab}(\lambda)$
$C_\mathfrak{t} \subset \mathfrak{S}_n$ を、$\mathfrak{t}$ への右からの作用で各列を構成する要素の集合を保つ置換全体とする。同様に、$R_\mathfrak{t} \subset \mathfrak{S}_n$ を、$\mathfrak{t}$ への右からの作用で各行を構成する要素の集合を保つ置換全体とする。$w \in \mathfrak{S}_n$ に対して、$C_{\mathfrak{t}w} = w^{-1}C_\mathfrak{t}w$, $R_{\mathfrak{t}w} = w^{-1}R_\mathfrak{t}w$

$$
b_\mathfrak{t} \coloneqq \sum_{c \in C_\mathfrak{t}} \mathrm{sgn}(c) 1_c \in R[\mathfrak{S}_n]
$$

と定義する。以下が成り立つ

(1) $b_{\mathfrak{t}w} = 1_{w^{-1}} b_{\mathfrak{t}} 1_w \quad (w \in \mathfrak{S}_n)$
(2) $b_{\mathfrak{t}} 1_c = 1_c b_{\mathfrak{t}} = \mathrm{sgn}(c) b_{\mathfrak{t}} \quad (c \in C_\mathfrak{t})$

$\mathfrak{s}, \mathfrak{t} \in \bigsqcup_{\lambda \vdash n} \mathrm{Tab}(\lambda)$
相異なる $i, j$ が存在して、$\mathfrak{s}$ では同じ列に、$\mathfrak{t}$ では同じ行にあるならば、$\bar{\mathfrak{t}}b_\mathfrak{s} = 0$

$\langle (i, j) \rangle \backslash C_\mathfrak{s}$ の完全代表系 $X$ を固定すると

$$
b_\mathfrak{s} = \sum_{x \in X} (\mathrm{sgn}(x)1_x + \mathrm{sgn}((i, j)x)1_{(i, j)x}) = \sum_{x \in X} \mathrm{sgn}(x)(1 - 1_{(i, j)})1_x
$$

$$
\bar{\mathfrak{t}}b_\mathfrak{s} = \sum_{x \in X} \mathrm{sgn}(x)(\bar{\mathfrak{t}} - \overline{\mathfrak{t}(i, j)})1_x = 0
$$

# $R[\mathfrak{S}_n]$ の Specht 加群 $S_\lambda$

$\lambda$: $n$ の分割
$\mathfrak{S}_\lambda \backslash \mathrm{Tab}(\lambda)$ の元を tabloid という。$\mathfrak{S}_\lambda \backslash \mathrm{Tab}(\lambda)$ には右から $\mathfrak{S}_n$ が作用する。集合として

$$
\mathfrak{S}_\lambda \backslash \mathrm{Tab}(\lambda) \simeq \mathrm{RStd}(\lambda)
$$

集合 $\mathfrak{S}_\lambda \backslash \mathrm{Tab}(\lambda)$ が自由生成する $R$ 加群を $M_\mathrm{tab}^\lambda$ とする。$M_\mathrm{tab}^\lambda$ は右 $R[\mathfrak{S}_n]$ 加群。右 $R[\mathfrak{S}_n]$ 加群として

$$
M_\mathrm{tab}^\lambda \simeq M^\lambda
$$

$\mathfrak{t} \in \mathrm{Tab}(\lambda)$ に対して

$$
v_\mathfrak{t} \coloneqq \bar{\mathfrak{t}}b_\mathfrak{t} = \sum_{c \in C_\mathfrak{t}} \mathrm{sgn}(c)\overline{\mathfrak{t}c} \in M_\mathrm{tab}^\lambda
$$

と定義する。$C_\mathfrak{t} \ni c \mapsto \overline{\mathfrak{t}c} \in \mathfrak{S}_\lambda \backslash \mathrm{Tab}(\lambda)$ は単射だから、$R \ne 0$ ならば $v_\mathfrak{t} \ne 0$

$w \in \mathfrak{S}_n$ に対して

$$
v_{\mathfrak{t}w} = v_{\mathfrak{t}}1_w
$$

$v_{\mathfrak{t}w} = \overline{\mathfrak{t}w}b_{\mathfrak{t}w} = \bar{\mathfrak{t}}b_{\mathfrak{t}}1_w = v_{\mathfrak{t}}1_w$ から従う

[補題]
$\mathfrak{s}, \mathfrak{t} \in \bigsqcup_{\lambda \vdash n} \mathrm{Tab}(\lambda)$ に対して、以下のいずれかが成り立つ

(1) $\mathrm{Shape}(\mathfrak{s}) \triangleright \mathrm{Shape}(\mathfrak{t})$
(2) 相異なる $i, j$ が存在して、$\mathfrak{s}$ では同じ列に、$\mathfrak{t}$ では同じ行にある
(3) $\mathrm{Shape}(\mathfrak{s}) = \mathrm{Shape}(\mathfrak{t})$ かつ $c \in C_\mathfrak{s}$, $r \in R_\mathfrak{t}$ が存在して、$\mathfrak{s}c = \mathfrak{t}r$

(1) でも (2) でもないとする。$\mathfrak{t}$ の 1 行目の要素は、$\mathfrak{s}$ では異なる列にある。よって、ある $c_1 \in C_\mathfrak{s}$ が存在して、$\mathfrak{t}$ の 1 行目の要素は、$\mathfrak{s}c_1$ の 1 行目にあるようにできる。2 行目以降でも同じ操作を繰り返せば、$c \in C_\mathfrak{s}$ が存在して、$\mathfrak{t}$ の各行の要素は、$\mathfrak{s}c$ の同じ行以上にあるようにできる。よって、$\mathrm{Shape}(\mathfrak{t}) \trianglelefteq \mathrm{Shape}(\mathfrak{s}c) = \mathrm{Shape}(\mathfrak{s})$。(1) ではないから、$\mathrm{Shape}(\mathfrak{t}) = \mathrm{Shape}(\mathfrak{s})$ かつ $\mathfrak{t}$ と $\mathfrak{s}c$ の各行を構成する要素の集合は一致する

(2) の場合は $\bar{\mathfrak{t}}b_\mathfrak{s} = 0$ だったが、(3) の場合には $\bar{\mathfrak{t}}b_\mathfrak{s} = \pm v_\mathfrak{s}$ が成り立つことを示す

$$
\bar{\mathfrak{t}}b_\mathfrak{s} = \overline{\mathfrak{s}c}b_\mathfrak{s} = \bar{\mathfrak{s}}1_c b_\mathfrak{s} = \mathrm{sgn}(c)\bar{\mathfrak{s}}b_\mathfrak{s} = \mathrm{sgn}(c)v_\mathfrak{s}
$$

$\lambda$: $n$ の分割

$$
S^\lambda \coloneqq \sum_{\mathfrak{t} \in \mathrm{Tab}(\lambda)} R v_\mathfrak{t} \subset M_\mathrm{tab}^\lambda
$$

は部分 $R[\mathfrak{S}_n]$ 加群。任意の $\mathfrak{t}_0 \in \mathrm{Tab}(\lambda)$ に対して、$S^\lambda = v_{\mathfrak{t}_0} R[\mathfrak{S}_n]$

$R \ne 0$
$\lambda, \mu$: $n$ の分割

$$
S_\lambda \simeq S_\mu \Leftrightarrow \lambda = \mu
$$

$\Rightarrow$ を示す。$0$ でない $\theta: S_\lambda \to M_\mu$ が存在する。ある $\mathfrak{s} \in \mathrm{Tab}(\lambda)$ が存在して、$0 \ne \theta(v_\mathfrak{s}) = \theta(\bar{\mathfrak{s}})b_\mathfrak{s}$。よって、ある $\mathfrak{t} \in \mathrm{Tab}(\mu)$ が存在して、$\bar{\mathfrak{t}}b_\mathfrak{s} \ne 0$。よって、$\lambda \trianglerighteq \mu$。逆も成り立つから、$\lambda = \mu$

$R$ は体 $K$ とし、$|\mathfrak{S}_n| \in K$ は可逆だとする。$\lambda$ を $n$ の分割とすると、$S_\lambda$ は既約

$\mathfrak{t}_0 \in \mathrm{Tab}(\lambda)$ を固定する。$S_\lambda b_{\mathfrak{t}_0} \subset M_\lambda b_{\mathfrak{t}_0} = \sum_{\mathfrak{t} \in \mathrm{Tab}(\lambda)} \bar{\mathfrak{t}} b_{\mathfrak{t}_0} \subset K v_{\mathfrak{t}_0}$ であり、$v_{\mathfrak{t}_0} b_{\mathfrak{t}_0} = \bar{\mathfrak{t}}_0 b_{\mathfrak{t}_0}^2 = |C_{\mathfrak{t}_0}| \bar{\mathfrak{t}}_0 b_{\mathfrak{t}_0} = |C_{\mathfrak{t}_0}| v_{\mathfrak{t}_0}$ だから、$S_\lambda b_{\mathfrak{t}_0} = K v_{\mathfrak{t}_0}$。右 $K[\mathfrak{S}_n]$ 加群として $S_\lambda = U \oplus V$ と直和分解するとする。$K v_{\mathfrak{t}_0} = S_\lambda b_{\mathfrak{t}_0} = U b_{\mathfrak{t}_0} \oplus V b_{\mathfrak{t}_0}$。必要なら $U, V$ を入れ替えれば、$U b_{\mathfrak{t}_0} = K v_{\mathfrak{t}_0}$ が成り立つ。$v_{\mathfrak{t}_0} \in U$ であり、$v_{\mathfrak{t}_0}$ は右 $R[\mathfrak{S}_n]$ 加群 $S^\lambda$ を生成するから、$S = U$。$S_\lambda$ は半単純だから、既約でなければならない

$R$ は体 $K$ とし、$|\mathfrak{S}_n| \in K$ は可逆だとする。既約 $K[\mathfrak{S}_n]$ 加群の同型類の個数は $\mathfrak{S}_n$ の共役類の個数と一致するから、$n$ の分割の個数とも一致する。よって、既約 $K[\mathfrak{S}_n]$ 加群の同型類は $\{ S_\lambda \mid \lambda \vdash n \}$ と一致する。特に

$$
n! = \sum_{\lambda \vdash n} (\mathrm{dim}_K S_\lambda)^2
$$

# $S_\lambda$ の自由基底

$R$: 可換環

$n$ の分割 $\lambda$ に対して、$[\lambda]$ の行と列を入れ換えた図形に対応する $n$ の分割を $\lambda'$ で表す。$\mathfrak{t} \in \mathrm{Tab}(\lambda)$ に対して、行と列を入れ替えた $\lambda'$-tableau を ${}^t\mathfrak{t}$ で表す。$w \in \mathfrak{S}_n$ に対して、${}^t(\mathfrak{t}w) = {}^t\mathfrak{t}w$ が成り立つ

$\lambda$: $n$ の分割
$\lambda$-tableau が column standard とは、列ごとに要素が上から下に増加することをいう。Column standard $\lambda$-tableau 全体を $\mathrm{CStd}(\lambda)$ で表す。$\mathrm{CStd}(\lambda) \simeq \mathrm{RStd}(\lambda')$。$\mathfrak{t}_\mathrm{col}^\lambda$ を、左の列から順に上から下へ $1, 2, \dots, |\lambda|$ を配置した column standard $\lambda$-tableau とする。$\mathfrak{t}_\mathrm{col}^\lambda = {}^t(\mathfrak{t}^{\lambda'})$。$d_\mathrm{col}: \mathrm{CStd}(\lambda) \xrightarrow{\sim} \mathfrak{S}_{\lambda'} \backslash \mathfrak{S} \simeq \mathscr{D}_{\lambda'}$ を $\mathfrak{t}_\mathrm{col}^\lambda d_\mathrm{col}(\mathfrak{t}) = \mathfrak{t}$ で定義する。$\mathfrak{t} \in \mathrm{CStd}(\lambda)$ に対して、${}^t\mathfrak{t} = {}^t(\mathfrak{t}_\mathrm{col}^\lambda) d_\mathrm{col}(\mathfrak{t}) = \mathfrak{t}^{\lambda'} d_\mathrm{col}(\mathfrak{t})$ だから、$d_\mathrm{col}(\mathfrak{t}) = d({}^t\mathfrak{t})$

$R$: 可換環

$S_\lambda$ は $R$ 加群として $\{ v_\mathfrak{t} \mid \mathfrak{t} \in \mathrm{Std}(\lambda) \}$ で自由生成される

[非自明な関係式がないこと]
$\mathrm{Tab}(\lambda)$ 上の全順序 $\le_\mathrm{aux}$ を以下のように定義する。相異なる $\mathfrak{s}, \mathfrak{t} \in \mathrm{Tab}(\lambda)$ に対して、異なる位置にある数字で最大のものを $k$ としたとき、$k$ が右の列にある方が小さく、同じ列にある場合は、上の行にある方が小さいと定義する。任意の $\mathfrak{t} \in \mathrm{Std}(\lambda)$ に対して

$$
\mathfrak{t}c \le_\mathrm{aux} \mathfrak{t} \le_\mathrm{aux} \mathfrak{t}r \quad (c \in C_\mathfrak{t}, r \in R_\mathfrak{t})
$$

が成り立つ。非自明な関係式 $\sum_{\mathfrak{t} \in \mathrm{Std}(\lambda)} r_\mathfrak{t} v_\mathfrak{t} = 0 \ (r_\mathfrak{t} \in R)$ があると仮定する。$r_\mathfrak{t} \ne 0$ となる $\mathfrak{t} \in \mathrm{Std}(\lambda)$ の中で $\le_\mathrm{aux}$ に関して最大なものを $\mathfrak{t}_0$ とする。$\mathfrak{t} \in \mathrm{Std}(\lambda)$ と $c \in C_\mathfrak{t}$ は $r_\mathfrak{t} \ne 0$ かつ $\bar{\mathfrak{t}}_0 = \overline{\mathfrak{t}c}$ を満たすとする。$\mathfrak{t}_0 \le_\mathrm{aux} \mathfrak{t}c \le_\mathrm{aux} \mathfrak{t}$ だから、$\mathfrak{t}_0 = \mathfrak{t}$ かつ $c = e$。よって、$\bar{\mathfrak{t}}_0$ の係数は $r_{\mathfrak{t}_0}$ であり、矛盾する

[生成すること]
$\mathfrak{t} \in \mathrm{Tab}(\lambda)$ とすると、$c \in C_\mathfrak{t}$ に対して、$v_{\mathfrak{t}c} = \bar{\mathfrak{t}}b_{\mathfrak{t}}1_c = \mathrm{sgn}(c)\bar{\mathfrak{t}}b_{\mathfrak{t}} = \mathrm{sgn}(c)v_\mathfrak{t}$ が成り立つ。よって、$\mathfrak{t} \in \mathrm{CStd}(\lambda)$ に対して、$v_\mathfrak{t} \in \sum_{\mathfrak{t} \in \mathrm{Std}(\lambda)} R v_\mathfrak{t}$ を示せば良い。$d_\mathrm{col}(\mathfrak{t})$ に関する帰納法を使う。$d_\mathrm{col}(\mathfrak{t}) = 0$ の場合は明らか。$d_\mathrm{col}(\mathfrak{t}) > 0$ とする。$\mathfrak{t} \not\in \mathrm{Std}(\lambda)$ として良い。ある位置 $(i, j)$ が存在して、$\mathfrak{t}_{ij} > \mathfrak{t}_{i, j + 1}$。$A$ を $\mathfrak{t}$ の位置 $(i, j)$ から位置 $(\lambda'_j, j)$ までの要素の集合とし、$B$ を $\mathfrak{t}$ の位置 $(1, j + 1)$ から位置 $(i, j + 1)$ までの要素の集合とする。$(\mathfrak{S}(A) \times \mathfrak{S}(B)) \backslash \mathfrak{S}(A \sqcup B)$ の最短完全代表系を $X$ とする

$$
v_{\mathfrak{t}} \sum_{x \in X} \mathrm{sgn}(x)1_x = 0
$$

を示す。$C_{\mathfrak{t}} / (\mathfrak{S}(A) \times \mathfrak{S}(B))$ の完全代表系 $Y$ を固定すると

$$
\begin{aligned}
  v_{\mathfrak{t}} \sum_{x \in X} \mathrm{sgn}(x)1_x &= \sum_{y \in Y, v \in \mathfrak{S}(A) \times \mathfrak{S}(B), x \in X} \mathrm{sgn}(yvx)\overline{\mathfrak{t}yvx} \\
  &= \sum_{y \in Y, w \in \mathfrak{S}(A \sqcup B)} \mathrm{sgn}(yw)\overline{\mathfrak{t}yw}
\end{aligned}
$$

任意の $y \in Y$ に対して、$\overline{\mathfrak{t}y} \sum_{w \in \mathfrak{S}(A \sqcup B)} \mathrm{sgn}(w)1_w = 0$ を示せば良い。ある $p \in A$ と $q \in B$ が存在して、$\mathfrak{t}y$ の中で $p, q$ は同じ行にある。$\langle (p, q) \rangle \backslash \mathfrak{S}(A \sqcup B)$ の完全代表系を $Z$ とすると

$$
\begin{aligned}
  \overline{\mathfrak{t}y} \sum_{w \in \mathfrak{S}(A \sqcup B)} \mathrm{sgn}(w)1_w &= \overline{\mathfrak{t}y} \sum_{z \in Z} (\mathrm{sgn}(z)1_z + \mathrm{sgn}((p, q)z)1_{(p, q)z}) \\
  &= \overline{\mathfrak{t}y} \sum_{z \in Z} \mathrm{sgn}(z)(1 - 1_{(p, q)})1_z \\
  &= 0
\end{aligned}
$$

$$
\begin{aligned}
  v_{\mathfrak{t}} &= -\sum_{x \in X \setminus \{ e \}} \mathrm{sgn}(x)v_{\mathfrak{t}x} \\
  &\in \sum_{\tau \in \mathrm{CStd}(\lambda), \tau \triangleright \mathfrak{t}} \pm v_\mathfrak{\tau}
\end{aligned}
$$

特に

$$
n! = \sum_{\lambda \vdash n} |\mathrm{Std}(\lambda)|^2
$$

# Murphy 基底

$R$: 可換環
$M$: 有限 $R$ 加群
$\varphi: M \to M$ が全射ならば同型

$m_1, \dots, m_n \in M$ を生成元とする。$\varphi$ は全射だから、$a_{ij} \in R$ が存在して

$$
m_i = \sum_j a_{ij}\varphi(m_j)
$$

可換環 $R[\varphi] \subset \mathrm{End}_R(M)$ を考えれば

$$
\sum_j (\delta_{ij} - a_{ij}\varphi)m_j = 0
$$

$(b_{ij}) \in M_n(R[\varphi])$ が存在して

$$
\sum_j b_{ij}(\delta_{jk} - a_{jk}\varphi) = \mathrm{det}(\delta_{ij} - a_{ij}\varphi)\delta_{ik}
$$

だから

$$
\mathrm{det}(\delta_{ij} - a_{ij}\varphi) = 0
$$

行列式を展開すれば、$\varphi$ の逆元が得られる

$R$: 整域
$K \coloneqq \mathrm{Frac}(R)$
$M$: $R$ 加群
$\{ x_i \mid i \in I \} \subset M$ は $M$ を生成し、$K$ 線型空間 $K \otimes_R M$ 上一次独立とする。このとき、$M$ は $\{ x_i \mid i \in I \}$ で自由生成される

$\varphi: R^{\oplus I} \to M$ は全射。$S \coloneqq R \setminus \{ 0 \}$ とする。$M \mapsto K \otimes_R M = S^{-1}M$ は完全だから

$$
0 \to S^{-1}\mathrm{Ker}\varphi \to K^{\oplus I} \to K \otimes_R M \to 0
$$

仮定から、$S^{-1}\mathrm{Ker}\varphi = 0$。$\mathrm{Ker}\varphi \subset R^{\oplus I}$ だから、$\mathrm{Ker}\varphi = 0$

$\mathscr{H}$ は $R$ 加群として $\mathcal{M} \coloneqq \{ m_{\mathfrak{s}\mathfrak{t}} \mid \lambda \vdash n, \mathfrak{s}, \mathfrak{t} \in \mathrm{Std}(\lambda) \}$ で自由生成される

生成されることは既に示した。特殊化を考えれば、$R = \mathbb{Z}[q, q^{-1}]$ として良い。商体を取れば、$R = \mathbb{Q}(q)$ として良いが、$n! = \sum_{\lambda \vdash n} |\mathrm{Std}(\lambda)|^2$ から従う

# Cellular 代数 $\mathscr{H}$

$\mu$: $n$ の composition

$$
M^\mu = \{ h \in \mathscr{H} \mid T_sh = qh \ (s \in S \cap \mathfrak{S}_\mu) \}
$$

$\supset$ を示せば良い。$R$ 加群として $\mathscr{H} = \bigoplus_{x \in \mathscr{D}_\mu} \mathscr{H}(\mathfrak{S}_\mu)T_x$。$h = \sum_{x \in \mathfrak{S}_\mu} h_x T_x \in \mathscr{H}$ は $T_sh = qh \ (s \in S \cap \mathfrak{S}_\mu)$ を満たすとする。任意の $x \in \mathscr{D}_\mu$ に対して、$T_sh_x = qh_x \ (s \in S \cap \mathfrak{S}_\mu)$ だから

$$
\{ h \in \mathscr{H}(\mathfrak{S}_\mu) \mid T_sh = qh \ (s \in S \cap \mathfrak{S}_\mu) \} \subset R e_\mu
$$

を示せば良い。$w \in \mathfrak{S}_\mu$ と $s \in S \cap \mathfrak{S}_\mu$ は $\ell(sw) < \ell(w)$ を満たすとする。$a, b \in R$ に対して

$$
T_s(aT_w + bT_{sw}) = (b + (q - 1)a)T_w + qaT_{sw}
$$

であり、$T_s \cdot$ の作用で $R T_w \oplus R T_{sw}$ が閉じていることから従う

$1 \le i \le n - 1$
$h = \sum_{\lambda \vdash n, \mathfrak{s}, \mathfrak{t} \in \mathrm{Std}(\lambda)} r_{\mathfrak{s}\mathfrak{t}} m_{\mathfrak{s}\mathfrak{t}}$ が $T_{s_i}h = qh$ を満たすことと以下の (1), (2) を満たすことは同値
(1) $\mathfrak{s}$ 内で $i, i + 1$ が異なる列かつ異なる行にあるとき、$r_{\mathfrak{s}\mathfrak{t}} = r_{\mathfrak{s}(i, i + 1), \mathfrak{t}}$
(2) $\mathfrak{s}$ 内で $i, i + 1$ が同じ列にあるとき、$r_{\mathfrak{s}\mathfrak{t}} = 0$

特殊化を考えれば、$R = \mathbb{Z}[q, q^{-1}]$ で示せば良い

まず、$\mathfrak{s}$ 内で $i, i + 1$ が異なる列かつ異なる行にあるとする。$\ell(d(\mathfrak{s})s_i) < \ell(d(\mathfrak{s}))$ とすると、$a, b \in R$ に対して

$$
\begin{aligned}
  T_{s_i}(a m_{\mathfrak{s}\mathfrak{t}} + b m_{\mathfrak{s}s_i, \mathfrak{t}}) &= (a m_{\mathfrak{t}\mathfrak{s}}T_{s_i} + b m_{\mathfrak{t}, \mathfrak{s}s_i}T_{s_i})^* \\
  &= ((b + (q - 1)a)m_{\mathfrak{t}\mathfrak{s}} + qam_{\mathfrak{t}, \mathfrak{s}s_i})^* \\
  &= (b + (q - 1)a)m_{\mathfrak{s}\mathfrak{t}} + qam_{\mathfrak{s}s_i, \mathfrak{t}}
\end{aligned}
$$

これが $q(a m_{\mathfrak{s}\mathfrak{t}} + b m_{\mathfrak{s}s_i, \mathfrak{t}})$ に一致するのは、$a = b$ のときのみ

また、$\mathfrak{s}$ 内で $i, i + 1$ が同じ行にあるとすると、$T_{s_i}m_{\mathfrak{s}\mathfrak{t}} = qm_{\mathfrak{s}\mathfrak{t}}$

組 $(\lambda, \mathfrak{s}, \mathfrak{t}) \in \bigsqcup_{\lambda \vdash n} \mathrm{Std}(\lambda)$ で $i, i + 1$ が $\mathfrak{s}$ の同じ列にあるもの全体を $\mathcal{C}$ とする。以降、$\lambda$ は組から省略することがある。$h = \sum_{(\mathfrak{s}, \mathfrak{t}) \in \mathcal{C}} r_{\mathfrak{s}\mathfrak{t}}m_{\mathfrak{s}\mathfrak{t}}$ が $T_{s_i}h \in qh + \sum_{(\mathfrak{s}', \mathfrak{t}') \not\in \mathcal{C}} R m_{\mathfrak{s}'\mathfrak{t}'}$ を満たせば、$r_{\mathfrak{s}\mathfrak{t}} = 0 \ ((\mathfrak{s}, \mathfrak{t}) \in \mathcal{C})$ を示せば良い。$\mathcal{C}$ 上の半順序 $\ge_\mathrm{aux}$ を以下で定める。$(\lambda_1, \mathfrak{s}_1, \mathfrak{t}_1) \ge_\mathrm{aux} (\lambda_2, \mathfrak{s}_2, \mathfrak{t}_2)$ とは、$\lambda_1 >_\mathrm{lex} \lambda_2$ または $\lambda_1 = \lambda_2$ かつ $\mathfrak{s}_1 \trianglerighteq \mathfrak{s}_2$ かつ $\mathfrak{t}_1 \trianglerighteq \mathfrak{t}_2$。ある $(\mathfrak{s}_0, \mathfrak{t}_0) \in \mathcal{C}$ が存在して、$r_{\mathfrak{s}_0\mathfrak{t}_0} \ne 0$ と仮定する。$(\mathfrak{s}_0, \mathfrak{t}_0)$ は $r_{\mathfrak{s}_0\mathfrak{t}_0} \ne 0$ を満たすものの中で $\ge_\mathrm{aux}$ に関して極小として良い。$(\lambda, \mathfrak{s}, \mathfrak{t}) \in \mathcal{C}$ に対して

$$
T_{s_i}m_{\mathfrak{s}\mathfrak{t}} \in -m_{\mathfrak{s}\mathfrak{t}} + \sum_{\mathfrak{u} \in \mathrm{Std}(\lambda), \mathfrak{u} \triangleright \mathfrak{s}} R m_{\mathfrak{u}\mathfrak{t}} + \sum_{\mu \vdash n, \mu >_\mathrm{lex} \lambda} \mathscr{H}e_\mu\mathscr{H}
$$

が成り立つ。よって、$m_{\mathfrak{s}_0\mathfrak{t}_0}$ の係数を比較して、$-r_{\mathfrak{s}_0\mathfrak{t}_0} = qr_{\mathfrak{s}_0\mathfrak{t}_0}$ だが、矛盾する

[再掲]
$\lambda$: $n$ の分割
$\mu$: $n$ の composition
$\mathfrak{t} \in \mathrm{Std}(\lambda)$
$0 \le j \le n$ に対して、$\lambda_j \coloneqq \mathrm{Shape}(\mathfrak{t} \downarrow \sum_{i \le j} \mu_i)$ と定義すると、$\lambda_j$ たちは分割になる。各 $j$ に対して、$\mathfrak{t}$ の領域 $[\lambda_j] \setminus [\lambda_{j - 1}]$ にある要素を上の行から順に左から右に並べ替えて得られる standard $\lambda$-tableau を $\mathfrak{t}_0$ とする。standard $\lambda$-tableau の列 $\mathfrak{t} = \mathfrak{t}_0, \dots, \mathfrak{t}_k = \mathfrak{t}$ で $d(\mathfrak{t}_i)^{-1}d(\mathfrak{t}_{i + 1}) \in S \cap \mathfrak{S}_\mu$ かつ $d(\mathfrak{t}_0) \prec \cdots \prec d(\mathfrak{t}_k)$ を満たすものが存在する

$\mu$: $n$ の composition
$\sum_{\mu \vdash n, \mathfrak{s}, \mathfrak{t} \in \mathrm{Std}(\mu)} r_{\mathfrak{s}\mathfrak{t}}m_{\mathfrak{s}\mathfrak{t}} \in M^\mu$ と以下の (1), (2) を満たすことは同値
(1) $d(\mathfrak{s})^{-1}d(\mathfrak{s}') \in \mathfrak{S}_\mu$ ならば、$r_{\mathfrak{s}'\mathfrak{t}} = r_{\mathfrak{s}\mathfrak{t}}$
(2) 相異なる $i, j$ が存在して、$\mathfrak{t}^\mu$ の同じ行にあり、$\mathfrak{s}$ の同じ列にあるとき、$r_{\mathfrak{s}\mathfrak{t}} = 0$

今までの結果から、$\sum_{\mu \vdash n, \mathfrak{s}, \mathfrak{t} \in \mathrm{Std}(\mu)} r_{\mathfrak{s}\mathfrak{t}}m_{\mathfrak{s}\mathfrak{t}} \in M^\mu$ は以下の (1'), (2') を満たすことと同値
(1') $i, i + 1$ が $\mathfrak{t}^\mu$ の同じ行にあり、$\mathfrak{s}$ の異なる列かつ異なる行にあるならば、$r_{\mathfrak{s}(i, i + 1), \mathfrak{t}} = r_{\mathfrak{s}\mathfrak{t}}$
(2') $i, i + 1$ が $\mathfrak{t}^\mu$ の同じ行にあり、$\mathfrak{s}$ の同じ列にあるならば、$r_{\mathfrak{s}\mathfrak{t}} = 0$

(1) $\Leftrightarrow$ (1') は直前の補題から明らか。(2) $\Rightarrow$ (2') も明らか。(2') $\Rightarrow$ (2) を示す。$i < j$ として良い。$j$ を取り替えれば、$j$ は $\mathfrak{s}$ の中で $i$ の真下にあるとして良い。$\mathfrak{s}' \coloneqq \mathfrak{s}(i + 1, i + 2, \dots, j)$ とすると、$\mathfrak{s}' \in \mathrm{Std}(\lambda)$ かつ $\mathfrak{s}'$ 内で $i, i + 1$ は同じ列にある。よって、(1) から

$$
r_{\mathfrak{s}\mathfrak{t}} = r_{\mathfrak{s}'\mathfrak{t}} = 0
$$

$$
\begin{aligned}
  \mathscr{H}^\lambda &\coloneqq \mathrm{span}_R \{ m_{\mathfrak{s}\mathfrak{t}} \mid \mu \vdash n, \mu \trianglerighteq \lambda, \mathfrak{s}, \mathfrak{t} \in \mathrm{Std}(\mu) \} \\
  \check{\mathscr{H}}^\lambda &\coloneqq \mathrm{span}_R \{ m_{\mathfrak{s}\mathfrak{t}} \mid \mu \vdash n, \mu \triangleright \lambda, \mathfrak{s}, \mathfrak{t} \in \mathrm{Std}(\mu) \}
\end{aligned}
$$

[補題]
$\mathfrak{s}, \mathfrak{t} \in \bigsqcup_{\lambda \vdash n} \mathrm{Std}(\lambda)$ に対して、以下のいずれかが成り立つ
(1) $\mathrm{Shape}(\mathfrak{s}) \triangleright \mathrm{Shape}(\mathfrak{t})$
(2) 相異なる $i, j$ が存在して、$\mathfrak{s}$ では同じ列に、$\mathfrak{t}$ では同じ行にある
(3) $\mathfrak{s} = \mathfrak{t}$

(1) でも (2) でもないとする。$\mathrm{Shape}(\mathfrak{s}) = \mathrm{Shape}(\mathfrak{t}) \eqqcolon \lambda$ かつ $c \in C_\mathfrak{s}$, $r \in R_\mathfrak{t}$ が存在して、$\mathfrak{s}c = \mathfrak{t}r \eqqcolon \mathfrak{u}$。$\mathfrak{s}$ の $j$ 列目の要素の集合を $\mathrm{col}_j(\mathfrak{s})$ とし、$\mathfrak{t}$ の $i$ 行目の要素の集合を $\mathrm{row}_i(\mathfrak{t})$ とする。$(i, j) \in [\lambda]$ に対して、$\mathfrak{u}_{ij} \in \mathrm{row}_i(\mathfrak{t}) \cap \mathrm{col}_j(\mathfrak{s})$。単射 $[\lambda] \ni (i, j) \mapsto \mathfrak{u}_{ij} \in \bigsqcup_{i, j \ge 1} (\mathrm{row}_i(\mathfrak{t}) \cap \mathrm{col}_j(\mathfrak{s})) = \{ 1, \dots, n \}$ ができるが、全単射。よって、$|\mathrm{row}_i(\mathfrak{t}) \cap \mathrm{col}_j(\mathfrak{s})| = 1$。$k \ge 1$ に対して、$\mathfrak{s} \downarrow k = \mathfrak{t} \downarrow k$ が成り立つことを $k$ に関する帰納法で示す。$k = 1$ の場合は明らか。$k > 1$ とする。$k$ が $\mathfrak{s}, \mathfrak{t}$ で異なる位置にあると仮定する。ある $i_1 < i_2$, $j_1 < j_2$ が存在して、以下のいずれかが成り立つ
(1) $k = \mathfrak{s}_{i_1j_2} = \mathfrak{t}_{i_2j_1}$
(1) $k = \mathfrak{s}_{i_2j_1} = \mathfrak{t}_{i_1j_2}$
(1) の場合は $k \in \mathrm{row}_{i_2}(\mathfrak{t}) \cap \mathrm{col}_{j_2}(\mathfrak{s}) \ni \mathfrak{u}_{i_2j_2}$、(2) の場合は $k \in \mathrm{row}_{i_1}(\mathfrak{t}) \cap \mathrm{col}_{j_1}(\mathfrak{s}) \ni \mathfrak{u}_{i_1j_1}$ となり矛盾する

$\Lambda^+$ を $n$ の分割全体と $\trianglerighteq$ からなる半順序集合とする

$\mathscr{H}$ は $(\mathcal{M}, \Lambda^+)$ によって cellular 代数になる

まず、任意の $\lambda \in \Lambda^+$, $\mathfrak{t} \in \mathrm{Std}(\lambda)$, $h \in \mathscr{H}$ に対して、$r^h_{\mathfrak{v}\mathfrak{t}} \ (\mathfrak{v} \in \mathrm{Std}(\lambda))$ が存在して

$$
m_{\mathfrak{t}^\lambda\mathfrak{t}}h \equiv \sum_{\mathfrak{v} \in \mathrm{Std}(\lambda)} r^h_{\mathfrak{v}\mathfrak{t}}m_{\mathfrak{t}^\lambda\mathfrak{v}} \mod \check{\mathscr{H}}^\lambda
$$

が成り立つこと示す

$$
m_{\mathfrak{t}^\lambda\mathfrak{t}}h = \sum_{\mu \in \Lambda^+, \mathfrak{u}, \mathfrak{v} \in \mathrm{Std}(\mu)} r^{h, \mathfrak{t}}_{\mathfrak{u}\mathfrak{v}}m_{\mathfrak{u}\mathfrak{v}} \in M^\lambda
$$

と展開できる。$r^{h, \mathfrak{t}}_{\mathfrak{u}\mathfrak{v}} \ne 0$ とすると、$\mathrm{Shape}(\mathfrak{u}) \triangleright \lambda$ または $\mathfrak{u} = \mathfrak{t}^\lambda$。$\mathscr{H}^\lambda, \check{\mathscr{H}}^\lambda \subset \mathscr{H}$ が両側イデアルになることがわかるから

$$
m_{\mathfrak{s}\mathfrak{t}}h \equiv \sum_{\mathfrak{v} \in \mathrm{Std}(\lambda)} r^{h, \mathfrak{t}}_{\mathfrak{t}^\lambda\mathfrak{v}}m_{\mathfrak{s}\mathfrak{v}} \mod \check{\mathscr{H}}^\lambda \quad (\mathfrak{s} \in \mathrm{Std}(\lambda))
$$

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

# Young symmetrizer

$R$: 可換環

$\lambda$: $n$ の分割
$\mathfrak{t} \in \mathrm{Tab}(\lambda)$
$C_\mathfrak{t} \subset \mathfrak{S}_n$ を、$\mathfrak{t}$ への右からの作用で各列を構成する要素の集合を保つ置換全体とする。同様に、$R_\mathfrak{t} \subset \mathfrak{S}_n$ を、$\mathfrak{t}$ への右からの作用で各行を構成する要素の集合を保つ置換全体とする。$w \in \mathfrak{S}_n$ に対して、$C_{\mathfrak{t}w} = w^{-1}C_\mathfrak{t}w$, $R_{\mathfrak{t}w} = w^{-1}R_\mathfrak{t}w$


# Murphy 基底

$\mathscr{H}$ は $R$ 加群として $\mathcal{M} \coloneqq \{ m_{\mathfrak{s}\mathfrak{t}} \mid \lambda \vdash n, \mathfrak{s}, \mathfrak{t} \in \mathrm{Std}(\lambda) \}$ で自由生成される

生成されることは既に示した。関係式がないことを示す。特殊化を考えれば、$R = \mathbb{Z}[q, q^{-1}]$ として良い

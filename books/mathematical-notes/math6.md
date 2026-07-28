---
title: "math6"
---

# 組成列

$R$: 可換とは限らない単位的環

加群は特に断らない限り、左加群を考える

長さ有限の $R$ 加群の組成因子たちは組成列に依らない

全ての単純 $R$ 加群には左 $R$ 加群 ${}_RR$ からの全射がある

$M$: $R$ 加群
$M$ は長さ有限 $\Leftrightarrow$ $M$ は Noether 的 かつ Artin 的

# 半単純加群

$M$: $R$ 加群
$\mathrm{rad}(M)$ を $M$ の極大部分加群の共通部分とする
$\mathrm{soc}(M)$ を $M$ の単純部分加群の和とする
$\mathrm{top}(M) \coloneqq M / \mathrm{rad}(M)$

$R$ 加群 $M$ が半単純とは、以下の同値な条件を満たすこと
(1) $M = \mathrm{soc}(M)$
(2) 単純加群の直和
(3) 全ての部分加群が直和因子

(3) $\Rightarrow$ (1) のみ示す。まず、任意の部分加群が (3) の性質を持つことがわかる。$M = \mathrm{soc}(M) \oplus M'$ と分解できる。$M' \ne 0$ と仮定する。$0 \ne x \in M'$ を固定する。$\mathrm{ann}x \subsetneq R$ だから、極大な左イデアル $\mathrm{ann}x \subset m \subset R$ が存在する。$N \coloneqq m / \mathrm{ann}x \subset R / \mathrm{ann}x \simeq Rx \subset M'$ とすると、$Rx / N \simeq R / m$ は単純加群だから矛盾する

半単純加群の subquotient も半単純

# Jacobson 根基

以下は全て一致し、Jacobson 根基と呼ばれる。$J(R)$ で表す
(1) 極大左イデアルの共通部分
(1') 極大右イデアルの共通部分
(2) $\{ x \in R \mid 1 + Rx \subset R^\times \}$
(2') $\{ x \in R \mid 1 + xR \subset R^\times \}$
(3) $\{ x \in R \mid 1 + RxR \subset R^\times \}$

(1) $\subset$ (3)
$J \subset R$ を極大左イデアルの共通部分とする

$$
J = \{ x \in R \mid \text{全ての単純左加群 } M \text{ に対して } xM = 0 \}
$$

$J$ は両側イデアルなことがわかる。$x \in J$ とすると、$1 + x \in R^\times$ なことを示す。$R(1 + x) = R$ だから、ある $y \in R$ が存在して $y(1 + x) = 1$。$y = 1 - yx$ も左逆元を持つから、ある $z \in R$ が存在して $zy = 1$

$$
z = zy(1 + x) = 1 + x
$$

だから、$y$ は $1 + x$ の逆元

(3) $\subset$ (2) は明らか

(2) $\subset$ (1)
$x \in R$ は $1 + Rx \subset R^\times$ とする。$m \subset R$ を極大左イデアルとする。$x \not\in m$ とすると、$1 \in m + Rx$ だが矛盾する

[中山の補題]
$M$: 有限 $R$ 加群
$J(R)M = M$ ならば $M = 0$

$x_1, \dots, x_n \in M$ を極小な生成系とする。$n \ge 1$ と仮定する。$x_1 = \sum_{i = 1}^n r_ix_i \ (r_i \in J(R))$ と表せる

$$
(1 - r_1)x_1 = \sum_{i = 2}^n r_ix_i
$$

だが、$1 - r_1 \in R^\times$ だから極小性に矛盾する

$R$ が左 Artin 環ならば、$J(R)$ は冪零

$$
J(R) \supset J(R)^2 \supset \cdots
$$

は停留するから、ある $n \ge 1$ が存在して、$I \coloneqq J(R)^n$ とすると $I^2 = I$。$I \ne 0$ と仮定する。左イデアル $K \subset R$ で $IK \ne 0$ となるもののうち極小なものを $K_0 \subset R$ とする。$x \in K_0$ が存在して、$Ix \ne 0$。$Ix = K_0$。よって、$y \in I$ が存在して $yx = x$。$y \in J(R)$ に矛盾する

# 半単純環

$R$ が半単純とは、${}_RR$ が半単純なことをいう

$R$ が半単純なことと左 Artin 環かつ $J(R) = 0$ は同値

$\Rightarrow$
$1 \in R$ だから、${}_RR$ は単純左加群の有限直和。よって、${}_RR$ は長さ有限かつ $J(R) = 0$

$\Leftarrow$
有限個の極大左イデアルの共通部分たちの中で極小なもの $M_1 \cap \cdots \cap M_n$ をとる。$J(R) = 0$ だから、$M_1 \cap \cdots \cap M_n = 0$。${}_RR \to \bigoplus_{i = 1}^n R / M_i$ は単射

$R$: 左 Artin 環
$M$: $R$ 加群

$$
\mathrm{rad}(M) = J(R)M
$$

$\supset$
$N \subset M$ を極大部分加群とする。$J(R)(M / N) = 0$ だから $J(R)M \subset N$

$\subset$
$M / J(R)M$ は $R / J(R)$ 加群として半単純。よって、$R$ 加群としても $M / J(R)M$ は半単純

# 局所環

$R$ に対して以下は同値
(1) 唯一の極大左イデアルを持つ
(1') 唯一の極大右イデアルを持つ
(2) 可逆でない元全体は両側イデアルをなす
このとき、それらは一致し、$R$ は局所環と呼ばれる

(1) $\Rightarrow$ (2)
$m \subset R$ を唯一の極大左イデアルとする。$m = J(R)$ は両側イデアル。$x \in m$ は可逆でない。$x \not\in m$ とする。$Rx = R$ だから、ある $y \in R$ が存在して $yx = 1$。$y \not\in m$ だから、ある $z \in R$ が存在して $zy = 1$

$$
z = zyx = x
$$

${}$(2) $\Rightarrow$ (1)
極大左イデアルは可逆でない元からなることから明らか

# Artin–Wedderburn theorem

$R$ が半単純環 $\Leftrightarrow$ $k_1, \dots, k_n \ge 1$ と斜体 $D_1, \dots, D_n$ が存在して、$R \simeq \prod_{i = 1}^n M_{k_i}(D_i)$

$\Rightarrow$ のみ示す。$R = \bigoplus_{i = 1}^n S_i^{\oplus k_i}$ と分解する

$$
R^\mathrm{op} \simeq \mathrm{End}_R({}_RR) \simeq \prod_{i = 1}^n M_{k_i}(\mathrm{End}_R(S_i))
$$

# Akizuki–Hopkins–Levitzki theorem

左 Artin 環 $R$ は左 Noether 環

$J(R)$ は冪零だから

$$
R = J(R)^0 \supset J(R)^1 \supset J(R)^2 \supset \cdots \supset J(R)^n = 0
$$

$M_i \coloneqq J(R)^i / J(R)^{i + 1} \ (i \ge 0)$ とする。$M_i$ は $R$ 加群として Artin 的だから、$\bar{R} \coloneqq R / J(R)$ 加群としても Artin 的。$\bar{R}$ は半単純環だから、$\bar{R}$ 加群 $M_i$ は半単純。よって、$\bar{R}$ 加群 $M_i$ は有限個の単純 $\bar{R}$ 加群の直和。よって、$\bar{R}$ 加群 $M_i$ は長さ有限だから、$R$ 加群としても長さ有限

# 直既約加群

$0$ でない $R$ 加群 $M$ が直既約とは、$0$ でない $R$ 加群の直和に分解できないことをいう。既約ならば直既約

[Fitting の補題]
$M$: 長さ $n$ の $R$ 加群
$g \in \mathrm{End}_R(M)$

$$
M = \mathrm{Im}(g^n) \oplus \mathrm{Ker}(g^n)
$$

$M = g^0(M) \supset g^1(M) \supset g^2(M) \supset \cdots$ を考えると、$g^n(M) = g^{n + 1}(M) = \cdots$。$x \in M$ とする。$y \in M$ が存在して、$g^n(x) = g^{2n}(y)$

$$
x = g^n(y) + (x - g^n(y)) \in \mathrm{Im}(g^n) + \mathrm{Ker}(g^n)
$$

$$
0 = \mathrm{Ker}(g^0) \subset \mathrm{Ker}(g^1) \subset \mathrm{Ker}(g^2) \subset \cdots
$$

を考えると、$\mathrm{Ker}(g^n) = \mathrm{Ker}(g^{n + 1}) = \cdots$。$g^n(z) \in \mathrm{Im}(g^n) \cap \mathrm{Ker}(g^n)$ とする。$g^{2n}(z) = 0$ だから、$g^n(z) = 0$

$M$: 長さ有限かつ直既約な $R$ 加群
$\mathrm{End}_R(M)$ は局所環で、極大イデアルは冪零

まず、Fitting の補題から、$\mathrm{End}_R(M)$ の元は可逆か冪零。$\mathrm{End}_R(M)$ の可逆でない元全体が両側イデアルをなすことを示せば、$\mathrm{End}_R(M)$ が局所環なことがわかる。$g \in \mathrm{End}_R(M)$ は可逆でないとし、$f \in \mathrm{End}_R(M)$ とする。$g$ は単射でないから $fg$ も単射でない。$g$ は全射でないから $gf$ も全射でない。また、$g_1, g_1 \in \mathrm{End}_R(M)$ は可逆でないとする。$g_1 + g_2$ が可逆だと仮定し、逆元を $u \in \mathrm{End}_R(M)$ とする。$ug_1$ は可逆でないから冪零。よって、$ug_2 = 1_M - ug_1$ は可逆となって矛盾する。最後に $\mathrm{End}_R(M)$ の極大イデアル $m$ が冪零なことを示す。$M = m^0M \supset m^1M \supset m^2M \supset \cdots$ は停留するから、ある $n \ge 0$ が存在して、$N \coloneqq m^nM$ とすると、$mN = N$。$N \ne 0$ と仮定する。部分加群 $K \subset M$ で $mK \ne 0$ となるもののうち極小なものを $K_0 \subset M$ とする。$x \in K_0$ が存在して $mx \ne 0$。$mx = K_0$。よって、$g \in m$ が存在して $g(x) = x$。$1_M - g$ は可逆だから、$x = 0$ となって矛盾する

$M$: $R$ 加群
$\mathrm{End}_R(M)$ が局所環ならば、$M$ は直既約

$M \ne 0$ は明らか。$0$ でない $R$ 加群 $A, B$ が存在して $M \simeq A \oplus B$ だと仮定する。$\mathrm{pr}_A, \mathrm{pr}_B \in \mathrm{End}_R(M)$ は可逆でないが、$\mathrm{pr}_A + \mathrm{pr}_B = 1_M$ は可逆になって矛盾する

# Krull–Schmidt の定理

[Krull–Schmidt–Azumaya の定理]
$M$: $R$ 加群

$$
M = N_1 \oplus \cdots \oplus N_n = L_1 \oplus \cdots \oplus L_l
$$

を有限直和への 2 通りの分解とする。$\mathrm{End}_R(N_i), \mathrm{End}_R(L_j)$ が局所環とすると、$n = l$ かつ $\sigma \in \mathfrak{S}_n$ が存在して

$$
M = N_1 \oplus \cdots \oplus N_i \oplus L_{\sigma(i + 1)} \oplus \cdots \oplus L_{\sigma(n)}
$$

単なる同型ではなく $M$ での内部直和として等号で成り立つことに注意する

$n$ に関する帰納法で示す。$n = 0$ の場合は明らか。$n \ge 1$ とする。$\mu_{ij}: L_j \to N_i$, $\nu_{ji}: N_i \to L_j$ とする。$\mu_{nj}\nu_{jn} \in \mathrm{End}_R(N_n)$ は

$$
\sum_{j = 1}^l \mu_{nj}\nu_{jn} = 1_{N_n}
$$

を満たすから、ある $1 \le \sigma_n \le l$ が存在して $\mu_{n\sigma_n}\nu_{\sigma_nn}$ は可逆。$0 \to \mathrm{Ker}\mu_{n\sigma_n} \to L_{\sigma_n} \xrightarrow{\mu_{n\sigma_n}} N_n$ は右分裂するから $\mu_{n\sigma_n}$ は同型

$$
0 \to N_1 \oplus \cdots \oplus N_{n - 1} \to M \to N_n \to 0
$$

は $N_n \xrightarrow{\mu_{n\sigma_n}^{-1}} L_{\sigma_n} \to M$ によって右分裂するから

$$
M = N_1 \oplus \cdots \oplus N_{n - 1} \oplus L_{\sigma_n}
$$

$L' \coloneqq L_1 \oplus \cdots \oplus \check{L}_{\sigma_n} \oplus \cdots \oplus L_l$ とする

$$
L' = \pi_{L'}(N_1) \oplus \cdots \oplus \pi_{L'}(N_{n - 1})
$$

だから、帰納法の仮定から $n = l$ かつ $\sigma: \{ 1, \dots, n - 1 \} \xrightarrow{\sim} \{ 1, \dots, \check{\sigma}_n, \dots, l \}$ が存在して

$$
L' = \pi_{L'}(N_1) \oplus \cdots \oplus \pi_{L'}(N_i) \oplus L_{\sigma(i + 1)} \oplus \cdots \oplus L_{\sigma(n - 1)}
$$

よって

$$
M = N_1 \oplus \cdots \oplus N_i \oplus L_{\sigma(i + 1)} \oplus \cdots \oplus L_{\sigma(n - 1)} \oplus L_{\sigma_n}
$$

[Krull–Schmidt の定理]
$M$: 長さ有限の $R$ 加群

$$
M = N_1 \oplus \cdots \oplus N_n = L_1 \oplus \cdots \oplus L_l
$$

を直既約加群の有限直和への 2 通りの分解とすると、$n = l$ であり、$\sigma \in \mathfrak{S}_n$ が存在して $M_i \simeq N_{\sigma(i)}$

# 冪等元

$e \in R$ が冪等元とは、$e^2 = e$ が成り立つことをいう

$R$ の直和因子 $\Leftrightarrow$ 冪等元 $e \in R$ で $Re$ と表せる

冪等元 $e, f \in R$ は $Re = Rf$ を満たすとする。ある $u \in R^\times$ が存在して、$e = ufu^{-1}$

まず、$\cdot f = 1_{Rf}$ だから $ef = e$。同様にして、$fe = f$。$(e - f)^2 = 0$ だから、$1 + e - f$ は可逆

$$
(1 + e - f)f(1 + e - f)^{-1} = (1 + e - f)f(1 - e + f) = e
$$

$e \in R$: 冪等元
$Re$ の有限直和分解を与えることと、冪等元による分解 $e = e_1 + \cdots + e_n$ で $e_ie_j = 0 \ (i \ne j)$ を満たすものを与えることは同値

$\Rightarrow$
$Re = P_1 \oplus \cdots \oplus P_n$ とする。$e = e_1 + \cdots + e_n$ と分解できる。$\cdot e$ は $Re$ に恒等的に作用するから、$e_i = e_ie = \sum_j e_ie_j$。よって、$e_i^2 = e_i$ かつ $e_ie_j = 0 \ (i \ne j)$

$\Leftarrow$
$e_ie = e_i$ だから $Re_i \subset Re$。また、$Re = \sum_i Re_i$ は容易。あとは、$x_i \in Re_i$ が $\sum_i x_i = 0$ を満たせば、$x_i = 0$ を示せば良い。$0 = \sum_j x_je_i = x_i$ から従う

${}_RR$ の直和因子で直既約なものを principal indecomposable module (PIM) という

冪等元 $e \in R$ が原始的とは、$e \ne 0$ かつ $0$ でない冪等元 $e_1, e_2 \in R$ で $e_1e_2 = e_2e_1 = 0$ なものを用いて $e = e_1 + e_2$ と表せないことをいう

PIM $\Leftrightarrow$ 原始的冪等元 $e \in R$ で $Re$ と表せる

$e \in R$: 冪等元
$eRe$ は $e$ を単位元とする環で

$$
\mathrm{End}_R(Re) \simeq (eRe)^\mathrm{op}
$$

$e \in R$: 冪等元
$Re$ は長さ有限とする

$$
e = e_1 + \cdots + e_n = f_1 + \cdots + f_m
$$

を $e$ の互いに直交する原始的冪等元の和への 2 通りの分解とする。$n = m$ かつ $\sigma \in \mathfrak{S}_n$ と $u \in (eRe)^\times$ が存在して、$e_i = uf_{\sigma(i)}u^{-1}$

$e_i = ee_ie \in eRe$ であり、$f_j \in eRe$ も同様。まず、$n = m$ かつ $Re_i = Rf_i$ が成り立てば、$e_i = f_i$ を示す。$\cdot e_j$ は $Re_i$ に $\delta_{ij}$ 倍で作用するから

$$
f_ie_j = \begin{cases}
  f_i &\quad (i = j) \\
  0 &\quad (i \ne j)
\end{cases}
$$

よって、$e_i = ee_i = \sum_j f_j e_i = f_i$。次に、一般の場合を示す

$$
Re = Re_1 \oplus \cdots \oplus Re_n = Rf_1 \oplus \cdots \oplus Rf_m
$$

だから、Krull–Schmidt の定理から、$n = m$ かつ $\sigma \in \mathfrak{S}_n$ が存在して、$Re_i \simeq Rf_{\sigma(i)}$。よって、$Re = \bigoplus_i Re_i \simeq \bigoplus Rf_{\sigma(i)} = Re$ ができるが、ある $u \in (eRe)^\times$ を右からかけることに対応する。よって、$Re_i = Rf_{\sigma(i)}u^{-1} = Ruf_{\sigma(i)}u^{-1}$

$I \subset R$: 冪零な両側イデアル
$\bar{e} \in R / I$ を冪等元とする。$\bar{e}$ の持ち上げ $e \in R$ で冪等なものが存在する

$\bar{e}$ の持ち上げ $x \in R$ を固定する。$x - x^2 \in I$ だから、ある $n \ge 1$ が存在して

$$
x^n(1 - x)^n = 0
$$

二項定理から、ある $f, g \in \mathbb{Z}[x] \subset R$ が存在して

$$
fx^n + g(1 - x)^n = 1
$$

$fx^n$ が求める冪等元であることを示す。$(fx^n)^2 = fx^n(fx^n + g(1 - x)^n) = fx^n$ であり

$$
fx^n - x = fx^n(1 - x) - gx(1 - x)^n \in I
$$

# Corner $eRe$

$e \in R$: 冪等元

$$
J(eRe) = eJ(R)e
$$

$\supset$
$x \in eJ(R)e$ とする。任意の $r \in eRe$ に対して、$e + rx \in eRe$ が可逆なことを示せば良い。$u \in R$ が存在して $u(1 + rx) = (1 + rx)u = 1$

$$
\begin{aligned}
  eue(e + rx) &= eu(1 + rx)e = e \\
  (e + rx)eue &= e(1 + rx)ue = e
\end{aligned}
$$

$\subset$
$x \in J(eRe)$ とする。$x = exe$ だから、$x \in J(R)$ を示せば良い。任意の $r \in R$ に対して、ある $u \in eRe$ が存在して $u(e + erex) = (e + erex)u = e$。形式的には

$$
\begin{aligned}
  (1 + rx)^{-1} &= 1 + \sum_{i = 1}^\infty (-1)^i (rx)^i e \\
  &= 1 + \sum_{i = 1}^\infty (-1)^i (rx)^i (u + erxu) \\
  &= 1 + \sum_{i = 1}^\infty (-1)^i ((rx)^i u + (rx)^{i + 1}u) \\
  &= 1 - rxu
\end{aligned}
$$

だが、実際に

$$
\begin{aligned}
  (1 + rx)(1 - rxu) &= 1 + rx - rxu - rxrxu = 1 + rx(e - eu - erexu) = 1 \\
  (1 - rxu)(1 + rx) &= 1 + rx - rxu - rxurx = 1 + rx(e - ue - uerex) = 1
\end{aligned}
$$

$e \in R$: 冪等元
$R$ 加群 $M$ に対して、アーベル群として $\mathrm{Hom}_R(Re, M) \simeq eM$

$e \in R$: 冪等元
$I \subset R$: 両側イデアル

$$
\mathrm{End}_R(Re / Ie) \simeq (eRe / eIe)^\mathrm{op}
$$

$e \in R$: 冪等元
$R$ が左 Artin 環ならば $eRe$ も左 Artin 環

$I_1 \supset I_2 \supset \cdots$ を $eRe$ の左イデアルの降鎖列とする。$RI_1 \supset RI_2 \supset \cdots$ は $R$ の左イデアルの降鎖列だから、$RI_N = RI_{N + 1} = \cdots$。$I_n = eRI_n$ から従う

# PIM

$R$: 左 Artin 環
$e \in R$ が原始的冪等元ならば、$\bar{e} \in R / J(R)$ も原始的冪等元

まず、$\bar{e} \ne 0$ を示す。$e \in J(R)$ と仮定すると、ある $u \in R$ が存在して $u(1 - e) = 1$。よって、$e = u(1 - e)e = 0$ となって矛盾する。$0$ でない冪等元 $\bar{p}, \bar{q} \in R / J(R)$ で $\bar{p}\bar{q} = \bar{q}\bar{p} = 0$ なものが存在して、$\bar{e} = \bar{p} + \bar{q}$ だと仮定する。$\bar{p} = (\bar{p} + \bar{q})\bar{p}(\bar{p} + \bar{q}) = \bar{e}\bar{p}\bar{e} \in \overline{eRe}$。$\overline{eRe} = eRe / (eRe \cap J(R)) = eRe / eJ(R)e$。$\bar{p} \in \overline{eRe}$ の持ち上げ $p \in eRe$ で冪等なものが存在する。$q \coloneqq e - p \in eRe$ も冪等で $\bar{q} \in \overline{eRe}$ の持ち上げ。$pq = qp = 0$ だから、$e \in R$ が原始的なことに矛盾する

[別証明]
$\bar{e} \ne 0$ の証明は同様。$\mathrm{End}_R(Re)^\mathrm{op} \simeq eRe$ は局所環だから、$\overline{eRe} \simeq eRe / eJ(R)e = eRe / J(eRe)$ は斜体。$0$ でない冪等元 $\bar{p}, \bar{q} \in R / J(R)$ で $\bar{p}\bar{q} = \bar{q}\bar{p} = 0$ なものが存在して、$\bar{e} = \bar{p} + \bar{q}$ だと仮定する。$\bar{p}, \bar{q} \in \overline{eRe}$ だが、$\overline{eRe}$ の $0$ でない冪等元は $\bar{e}$ しかないので矛盾する

$R$: 左 Artin 環
PIM $P$ は唯一の極大部分加群を持つ。特に、$\mathrm{top}(P)$ は単純

$P / \mathrm{rad}(P) = P / J(R)P$ が単純なことを示せば良い。原始的冪等元 $e \in R$ を用いて $P = Re$ と表せば、$P / J(R)P = Re / J(R)e$。$Re \twoheadrightarrow (R / J(R))\bar{e}$ を考えれば

$$
(R / J(R))\bar{e} \simeq Re / (Re \cap J(R)) = Re / J(R)e
$$

$\bar{e} \in R / J(R)$ が原始的なことから従う

$R$: 左 Artin 環
$P, Q$: PIM

$$
P \simeq Q \Leftrightarrow \mathrm{top}(P) \simeq \mathrm{top}(Q)
$$

$\Leftarrow$ を示せば良い。$P$ は射影的だから、$f: P \to Q$ が存在して

$$
\begin{array}{ccc}
  Q &\twoheadrightarrow& Q / J(R)Q \\
  \uparrow{\scriptsize{f}} && \uparrow{\scriptsize{\simeq}} \\
  P &\twoheadrightarrow& P / J(R)P
\end{array}
$$

合成 $P \xrightarrow{f} Q \twoheadrightarrow Q / J(R)Q$ は全射だから、$Q = J(R)Q + \mathrm{Im}f$。よって、$Q / \mathrm{Im}f = J(R)(Q / \mathrm{Im}f)$。$Q$ は冪等元で生成されるから、中山の補題から $Q / \mathrm{Im}f = 0$。よって、$f$ は全射。$Q$ は射影的だから、$0 \to \mathrm{Ker}f \to P \xrightarrow{f} Q \to 0$ は分裂する。$P$ は直既約だから、$f$ は同型

$R$: 左 Artin 環
PIM の同型類と単純加群の同型類は 1 対 1 に対応する

単純加群 $S$ はある PIM $P$ で $S \simeq \mathrm{top}(P)$ と表せることを示せば良い。全射 ${}_RR \to S$ がある。PIM $P_1, \dots, P_n$ を用いて ${}_RR = P_1 \oplus \cdots \oplus P_n$ と分解する。ある $i$ が存在して $P_i \to {}_RR \to S$ は全射

$R$: 左 Artin 環
$e \in R$: 原始的冪等元
$M$: 有限 $R$ 加群 ($\Leftrightarrow$ 長さ有限な $R$ 加群)

$$
[M : \mathrm{top}(Re)] = \ell_{\mathrm{End}_R(Re)} \mathrm{Hom}_R(Re, M) = \ell_{eRe} eM
$$

$\mathrm{End}_R(Re)^\mathrm{op} = eRe$ は局所環だから、単純 $eRe$ 加群は $eRe / eJ(R)e \simeq \mathrm{End}_R(\mathrm{top}(Re))^\mathrm{op}$ しかないことに注意。特に、$[M : \mathrm{top}(Re)] > 0 \Leftrightarrow \mathrm{Hom}_R(Re, M) \ne 0 \Leftrightarrow eM \ne 0$

まず、$M$ が単純な場合を示す。$M \not\simeq \mathrm{top}(Re)$ とすると、全て $0$ になる。また

$$
\ell_{eRe} e\mathrm{top}(Re) = \ell_{eRe} e(Re / Je) = \ell_{eRe} (eRe / eJe) = 1
$$

次に、一般の $M$ の場合を示す。$0 = M_0 \subset M_1 \subset \cdots \subset M_n = M$ を組成列とする。$0 = eM_0 \subset eM_1 \subset \cdots \subset eM_n = eM$。$Re$ は射影的だから、$\mathrm{Hom}_R(Re, -) = e \cdot -$ は完全関手であり、$eM_i / eM_{i - 1} = e(M_i / M_{i - 1})$。よって

$$
\begin{aligned}
  \ell_{eRe} eM &= \sum_{i = 1}^n \ell_{eRe}(eM_i / eM_{i - 1}) \\
  &= \sum_{i = 1}^n \ell_{eRe}(e(M_i / M_{i - 1})) \\
  &= \sum_{i = 1}^n [M_i / M_{i - 1} : \mathrm{top}(Re)] \\
  &= [M : \mathrm{top}(Re)]
\end{aligned}
$$

$R$: 体 $K$ 上の有限次元代数
$e \in R$: 原始的冪等元
$M$: $K$ 上有限次元な $R$ 加群

$$
[M : \mathrm{top}(Re)] = \frac{\mathrm{dim}_K eM}{\mathrm{dim}_K \mathrm{End}_R(\mathrm{top}(Re))}
$$

# Burnside’s theorem on matrix algebras

$R$: 環
$M$: 単純 $R$ 加群
$D \coloneqq \mathrm{End}_R(M)$ は斜体だが、$M$ は左 $D$ 加群になる。$\mathrm{dim}_D M < \infty$ とすると、環準同型

$$
R \to \mathrm{End}_D(M)
$$

は全射

$x_1, \dots, x_n \in M$ を左 $D$ 加群としての基底とする。$x \coloneqq (x_1, \dots, x_n) \in M^n$ とすると、$Rx = M^n$ を示せば良い。$M^n$ は半単純だから、$M^n = Rx \oplus P$ と分解できる。$\mathrm{pr}_P = (\varphi_{ij}) \in M_n(\mathrm{End}_R(M)) = M_n(D)$ を行列表示とする。$\mathrm{pr}_P(x) = 0$ だから

$$
\sum_j \varphi_{ij}x_j = 0 \quad (1 \le \forall i \le n)
$$

$x_j$ たちは基底だったから、$\varphi_{ij} = 0$。よって、$\mathrm{pr}_P = 0$ だから $P = 0$

同じ証明で以下が言える

[Jacobson density theorem]
$R$: 環
$M$: 単純 $R$ 加群
$D \coloneqq \mathrm{End}_R(M)$ は斜体だが、$M$ は左 $D$ 加群になる。$x_1, \dots, x_n \in M$ が $D$ 上線型独立なら、$R$ 加群 $M^n$ は $(x_1, \dots, x_n) \in M^n$ で生成される

# 体上の代数

$R$: 体 $K$ 上の代数

$R$ 加群 $M$ に対して、以下は同値
(1) 任意の体拡大 $L / K$ に対して、$R \otimes_K L$ 加群 $M \otimes_K L$ は単純
(2) $M$ が単純かつ $\mathrm{End}_R(M) = K$
このとき、$M$ は絶対既約という。さらに、$\mathrm{dim}_K M < \infty$ のとき、以下も同値
(3) $R \otimes_K \bar{K}$ 加群 $M \otimes_K \bar{K}$ は単純

(1) $\Rightarrow$ (2)
$M$ が単純なことは明らか。$\mathrm{End}_R(M)$ は $K$ 上の斜体。$M$ は $R \otimes_K \mathrm{End}_R(M)$ 加群だから、任意の中間可換体 $K \subset L \subset \mathrm{End}_R(M)$ に対して、$M$ は $R \otimes_K L$ 加群。$R \otimes_K L$ 加群の準同型 $\mu: M \otimes_K L \ni m \otimes l \mapsto l(m) \in M$ は全射だから同型。$K = L$ を示す。$l \in L \setminus K$ が存在すると仮定する。$0 \ne m \in M$ を固定すれば、$m \otimes l - l(m) \otimes 1 \ne 0$ が $\mathrm{Ker}\mu$ に入ってしまう。$L$ は任意だから、$\mathrm{End}_R(M) = K$

(2) $\Rightarrow$ (1)
任意の $0 \ne x \in M \otimes_K L$ が $R \otimes_K L$ 加群 $M \otimes_K L$ を生成することを示せば良い。$x = \sum_{i = 1}^n m_i \otimes l_i$ と表示する。$m_i$ たちは $K$ 上一次独立かつ $l_i \ne 0$ として良い。Jacobson density theorem から、任意の $m \in M$ に対して、$r \in R$ が存在して

$$
(rm_1, rm_2, \dots, rm_n) = (m, 0, \dots, 0)
$$

$(r \otimes l_1^{-1})x = m \otimes 1$ から従う

(1) $\Rightarrow$ (3) は明らか

$\mathrm{dim}_K M < \infty$ のもとで (3) $\Rightarrow$ (2)
$\bar{K}$ は $K$ 上自由だから、$M$ は単純なことがわかる

$$
\mathrm{End}_R(M) \otimes_K \bar{K} \to \mathrm{End}_{R \otimes_K \bar{K}}(M \otimes_K \bar{K})
$$

は同型なことを示す。まず、単射を示す。$\mathrm{End}_R(M) \otimes_K \bar{K}$ の元は $\sum_i d_i \otimes x_i$ と表せる。$x_i$ たちは $K$ 上一次独立として良い。$M \otimes_K \bar{K}$ への作用が $0$ だとすると

$$
\sum_i d_i(m) \otimes x_i = 0 \quad (\forall m \in M)
$$

よって、$d_i = 0$。次に全射を示す。$f \in \mathrm{End}_{R \otimes_K \bar{K}}(M \otimes_K \bar{K})$ とする。$f \in \mathrm{End}_{\bar{K}}(M \otimes_K \bar{K})$ だが、$\mathrm{dim}_K M < \infty$ だから $\mathrm{End}_{\bar{K}}(M \otimes_K \bar{K}) \simeq \mathrm{End}_K(M) \otimes_K \bar{K}$ であり、$f = \sum_i f_i \otimes x_i$ と表示できる。$x_i$ たちは $K$ 上一次独立として良い。$rf = fr$ だから $\sum_i rf_i \otimes x_i = \sum_i f_ir \otimes x_i$ であり、$f_i \in \mathrm{End}_R(M)$。$\sum_i f_i \otimes x_i \in \mathrm{End}_R(M) \otimes_K \bar{K}$ を考えれば良い。$\mathrm{End}_{R \otimes_K \bar{K}}(M \otimes_K \bar{K})$ は $\bar{K}$ 上の斜体で $\bar{K}$ 上有限次元だから、$\bar{K}$ と一致する。よって

$$
\mathrm{dim}_K \mathrm{End}_R(M) = \mathrm{dim}_{\bar{K}}(\mathrm{End}_R(M) \otimes_K \bar{K}) = 1
$$

全ての単純 $R$ 加群が絶対既約なとき、$R$ は split という

$R$ が split semisimple $\Leftrightarrow$ $k_1, \dots, k_n \ge 1$ が存在して $R \simeq \prod_{i = 1}^n M_{k_i}(K)$

体 $K$ 上の分裂左 Artin 代数 $R$ は $K$ 上有限次元

$\bar{R} \coloneqq R / J(R)$ は $K$ 上の分裂半単純代数だから有限次元。$J \supset J^2 \supset \cdots \supset J^N = 0$ を考える。$J^i / J^{i + 1}$ は $R$ 加群として Artin 的だから、$\bar{R}$ 加群としても Artin 的。よって、$J^i / J^{i + 1}$ は有限個の単純 $\bar{R}$ 加群の直和。よって、$J^i / J^{i + 1}$ は $K$ 上有限次元

# ブロック

右 $R$ 加群たちと左 $R^\mathrm{op}$ 加群たちは圏同型だった。$(R, S)$-両側加群たちと左 $R \otimes_\mathbb{Z} S^\mathrm{op}$ 加群たちも圏同型

中心 $Z(R)$ の冪等元を $R$ の中心冪等元という

${}_RR_R$ の直和因子 $\Leftrightarrow$ 中心冪等元 $b \in R$ で $Rb$ と表せる

中心冪等元 $b, c \in R$ に対して、$Rb = Rc$ $\Leftrightarrow$ $b = c$

$b \in R$: 中心冪等元
両側 $R$ 加群 $Rb$ の有限直和分解を与えることと、中心冪等元による分解 $b = b_1 + \cdots + b_n$ で $b_ib_j = 0 \ (i \ne j)$ を満たすものを与えることは同値

${}_RR_R$ の直和因子で両側 $R$ 加群として直既約なものをブロックという

中心冪等元 $b \in R$ が原始的とは、$b \ne 0$ かつ $0$ でない中心冪等元 $p, q \in R$ で $pq = 0$ なものを用いて $b = p + q$ と表せないことをいう

ブロック $\Leftrightarrow$ 原始的中心冪等元 $b \in R$ で $Rb$ と表せる

$b \in R$: 中心冪等元
両側 $R$ 加群 $Rb$ は長さ有限とする
$b = b_1 + \cdots + b_n = c_1 + \cdots + c_m$ を互いに直交する原始的中心冪等元による 2 通りの分解とすると、$n = m$ かつ $\sigma \in \mathfrak{S}_n$ が存在して、$b_a = c_{\sigma(a)}$

$b \in R$: 中心冪等元
両側 $R$ 加群 $Rb$ は長さ有限とする
$Rb = B_1 \oplus \dots \oplus B_n = C_1 \oplus \dots \oplus C_m$ をブロックによる 2 通りの分解とすると、$n = m$ かつ $\sigma \in \mathfrak{S}_n$ が存在して、$B_a = C_{\sigma(a)}$

$R$ が左 Artin 環ならば、両側 $R$ 加群 ${}_RR_R$ は長さ有限

$R$: 左 Artin 環
$R = B_1 \oplus \dots \oplus B_n$ をブロック分解とすると

$$
\mathrm{Hom}_{R\text{-Mod}}(B_a, B_b) \simeq \begin{cases}
  B_a^\mathrm{op} &\quad (a = b) \\
  0 &\quad (a \ne b)
\end{cases}
$$

$$
\mathrm{Hom}_{\text{Mod-}R}(B_a, B_b) \simeq \begin{cases}
  B_a &\quad (a = b) \\
  0 &\quad (a \ne b)
\end{cases}
$$

1 つ目のみ示す。$1 = b_1 + \cdots + b_n$ を対応する原始的中心冪等元による分解とする。アーベル群として、$\mathrm{Hom}_{R\text{-Mod}}(B_a, B_b) = \mathrm{Hom}_{R\text{-Mod}}(Rb_a, Rb_b) = b_aRb_b$ なことから従う

さらに、左 $R$ 加群として $B_a = \bigoplus_{i = 1}^{k_a} P_{ai}$ と直既約分解すると、$\mathrm{top}(P_{ai})$ が $B_b$ の組成因子 $\Leftrightarrow$ $a = b$

$b_a = \sum_{i = 1}^{k_a} e_{ai}$ を対応する原始的冪等元による分解とする。$b_b$ は $Rb_a$ に $\delta_{ab}$ 倍で作用するから

$$
e_{ai}B_b = e_{ai}Rb_b = \begin{cases}
  e_{ai}R &\quad (a = b) \\
  0 &\quad (a \ne b)
\end{cases}
$$

$\mathrm{top}(P_{ai}) \ (1 \le i \le k_a)$ たちの同型類を $\mathrm{Irr}(B_a)$ で表す。$\mathrm{Irr}(B_a)$ は以下の (1) 〜 (3) と自然に対応する

(1) $P_{ai} \ (1 \le i \le k_a)$ たちの同型類
(2) 単純 $B_a$ 加群たちの同型類
(3) 主直既約 $B_a$ 加群たちの同型類

$$
\mathrm{Irr}(R) = \bigsqcup_a \mathrm{Irr}(B_a)
$$

$R$: 体 $K$ 上の分裂半単純代数
$1 = b_1 + \cdots + b_n$ を原始的中心冪等元による分解とすると、$b_a$ たちは $Z(R)$ の $K$ 上の基底であり

$$
\mathrm{dim}_K Z(R) = \#\mathrm{Irr}(R)
$$

# 体上の分裂半単純代数

$R$: $K$ 上の分裂半単純代数

$\mathrm{Irr}(R)$ で単純 $R$ 加群の同型類全体を表す。Artin–Wedderburn theorem から

$$
\mathrm{dim}_K R = \sum_{S \in \mathrm{Irr}(R)} (\mathrm{dim}_K S)^2
$$

$$
\Phi: R \to \prod_{S \in \mathrm{Irr}(R)} \mathrm{End}_K(S)
$$

$\mathrm{Ker}\Phi = J(R) = 0$。両辺の $K$ 上の次元が一致するから、$\Phi$ は同型

# 指標

$R$: 体 $K$ 上の代数
$K$ 上有限次元な $R$ 加群 $M$ に対して、指標 $\chi_M: R \to K$ を $R \to \mathrm{End}_K(M) \xrightarrow{\mathrm{Tr}} K$ で定義する。$\chi_M(xy) = \chi_M(yx)$, $\chi_M(1) = \mathrm{dim}_K M$。また、$K$ 上有限次元な $R$ 加群の完全列

$$
0 \to N \to M \to L \to 0
$$

に対して、$\chi_M = \chi_N + \chi_L$

$R$: 体 $K$ 上の分裂代数
$S$: 単純 $R$ 加群
$x \in Z(R)$ とすると、$x \cdot \in \mathrm{End}_R(S) = K$ であり、$x \cdot$ は $S$ に定数倍で作用する。よって、$\omega_S: Z(R) \to K$ ができる。$\omega_S$ は $K$ 上の代数の準同型であり、$S$ が $K$ 上有限次元なら

$$
\chi_S(x) = (\mathrm{dim}_K S) \omega_S(x) \quad (x \in Z(R))
$$

# 対称代数

体 $K$ 上の有限次元代数 $R$ で結合的な非退化対称双線形形式 $(-, -): R \times R \to K$ が与えられたものを対称代数という。ただし、結合的とは $(ab, c) = (a, bc)$ が成り立つことをいう

$K$ 上の分裂半単純代数 $R$ は対称代数の構造を持つ

$R \simeq \prod_{i = 1}^n M_{k_i}(K)$ だから、$((A_i), (B_i)) = \sum_i \mathrm{Tr}(A_i B_i)$ を考えれば良い

$R$: 体 $K$ 上の対称代数

$K$ 上有限次元な $R$ 加群 $M$ に対して、$d_M \in R$ を

$$
(d_M, x) = \chi_M(x) \quad (x \in R)
$$

で定義する

$$
(yd_M, x) = \chi_M(xy) = \chi_M(yx) = (d_My, x)
$$

だから、$d_M \in Z(R)$ であり、$d_M$ は $\chi_M$ に対応する中心元と呼ばれる。$a_l \in R$ を $R$ の $K$ 上の基底とし、$(-, -)$ に関する双対基底を $b_l \in R$ とすると

$$
(d_M, x) = (d_M, \sum_l (x, b_l)a_l) = \sum_l (x, b_l)\chi_M(a_l)
$$

だから、$d_M = \sum_l \chi_M(a_l)b_l$。また、$K$ 上有限次元な $R$ 加群の完全列

$$
0 \to N \to M \to L \to 0
$$

に対して、$d_M = d_N + d_L$

$e \in R$: 冪等元

$$
d_{Re} = \sum_l a_l e b_l
$$

$x \in R$ とする。$f_x(y) \coloneqq xye \ (y \in R)$ は $Re$ 上左からの $x$ 倍かつ $R(1 - e)$ 上 $0$ だから

$$
\chi_{Re}(x) = \mathrm{Tr}(f_x) = \sum_l (f_x(a_l), b_l) = \sum_l (xa_le, b_l)
$$

特に、$d_R = \sum_l a_l b_l$ であり、$d_R$ は Casimir 元と呼ばれる

$e \in R$: 中心冪等元
$R$ 加群 $M$ を $Re$ の subquotient とすると、$d_M \in Z(Re)$

$e \cdot$ は $Re$ に恒等的に作用するから $M$ にも恒等的に作用する

$$
(d_M, x) = \chi_M(x) = \chi_M(ex) = (d_Me, x)
$$

だから、$d_M = d_Me \in Re$

$S \in \mathrm{Irr}(R)$ に対応する主直既約 $R$ 加群を $P_S$ で表す。$S \in \mathrm{Irr}(B_a)$ ならば $d_S, d_{P_S} \in Z(B_a)$ なことがわかる

$(B_a, B_b) = 0 \ (a \ne b)$ であり、$B_a$ 上 $(-, -)$ は非退化

# 直交関係式

$R$: 体 $K$ 上の対称代数

$K$ 上有限次元な $R$ 加群 $M, N$ に対して

$$
(\chi_M, \chi_N) = \chi_M(d_N) = (d_M, d_N) = \sum_l \chi_M(a_l)\chi_N(b_l) \in K
$$

が定まる

[Brauer の直交関係式]
$S, T \in \mathrm{Irr}(R)$ とすると

$$
(\chi_S, \chi_{P_T}) = 0 \quad (S \ne T)
$$

であり、$P_S = Re_S$ と原始的冪等元で表示すれば

$$
(\chi_S, \chi_{P_S}) = \chi_S(d_R e_S) = \mathrm{Tr}(e_SS \xrightarrow{d_R \cdot} e_SS)
$$

$P_T = Re_T$ を原始的冪等元による表示とすると

$$
\begin{aligned}
  (\chi_S, \chi_{P_T}) &= \chi_S(d_{P_T}) \\
  &= \chi_S(\sum_l a_l e_T b_l) \\
  &= \chi_S(\sum_l b_l a_l e_T) \\
  &= \chi_S(d_R e_T)
\end{aligned}
$$

$S \ne T$ ならば $e_TS \simeq \mathrm{Hom}_R(P_T, S) = 0$ だから $\chi_S(d_R e_T) = 0$。最後の等号は、$K$ 線形空間としての分解 $S = e_SS \oplus (1 - e_S)S$ を $d_R \cdot$ が保つことから従う

# 分裂対称代数

$R$: 体 $K$ 上の分裂対称代数

$$
(\chi_S, \chi_{P_S}) = (\mathrm{dim}_K e_SS) \omega_S(d_R) = \omega_S(d_R)
$$

最後は、$K$ 線型空間として $e_SS = \mathrm{Hom}_R(P_S, S) \simeq \mathrm{End}_R(S, S) = K$ から従う

$R$: 体 $K$ 上の分裂半単純対称代数

$$
R = \bigoplus_{S \in \mathrm{Irr}(R)} B_S
$$

をブロック分解とする。$B_S$ に対応する原始的中心冪等元を $b_S \in R$ とする。$b_S$ を $\chi_S$ で計算したい。$Z(B_a) = Kb_S$ だから、ある $f \in K$ が存在して、$d_S = fb_S$。$\chi_S(d_S) = \chi_S(fb_S) = f \mathrm{dim}_K S$。よって

$$
(\chi_S, \chi_S) b_S = (\mathrm{dim}_K S) d_S
$$

$K$ が標数 $0$ なら、$\chi_S \ne 0$ だから、$d_S \ne 0$ であり、$f \ne 0$。よって、$(\chi_S, \chi_S) \ne 0$ もわかり

$$
b_S = \frac{\mathrm{dim}_K S}{(\chi_S, \chi_S)} d_S
$$

# Cartan 行列

$R$: 左 Artin 環

$S, T \in \mathrm{Irr}(R)$ に対して

$$
c_{ST} \coloneqq [P_S : T]
$$

$(c_{ST})_{ST}$ を Cartan 行列という

$P_S = Re_S, P_T = Re_T$ を原始的冪等元による表示とすると

$$
c_{ST} = \ell_{\mathrm{End}_R(P_T)} \mathrm{Hom}_R(P_T, P_S) = \ell_{e_TRe_T} e_TRe_S
$$

特に、$c_{ST} > 0 \Leftrightarrow \mathrm{Hom}(P_T, P_S) \ne 0 \Leftrightarrow e_TRe_S \ne 0$

$\mathrm{Irr}(R)$ 上の関係 $S \sim_c T$ を $\mathrm{Irr}(R)$ の元の列 $S = S_0, S_1, \dots, S_n = T$ が存在して、全ての $0 \le i \le n - 1$ に対して、$c_{S_iS_{i + 1}} > 0$ または $c_{S_{i + 1}S_i} > 0$ が成り立つことと定義する

$S, T \in \mathrm{Irr}(R)$ に対して
$S \sim_c T$ $\Leftrightarrow$ $S, T$ が同じブロックに属する

$\Rightarrow$
$c_{UV} > 0$ とすると、$\mathrm{Hom}_R(P_V, P_U) \ne 0$ だから、$U, V$ は同じブロックに属する

$\Leftarrow$
$B \subset R$ をブロックとし、$S \in \mathrm{Irr}(B)$ とする。$X \coloneqq \{ T \in \mathrm{Irr}(B) \mid T \sim_c S \}, Y \coloneqq \{ U \in \mathrm{Irr}(B) \mid U \not\sim_c S \}$ とおく。$Y \ne \emptyset$ と仮定する。$P_X \coloneqq \bigoplus_{T \in X} P_T$, $P_Y \coloneqq \bigoplus_{U \in Y} P_U$ とすると、左 $R$ 加群として $B = P_X \oplus P_Y$。$P_X, P_Y$ が右 $R$ 作用で閉じていることを示せば、$B$ がブロックなことに矛盾する。$\mathrm{Hom}_R(P_X, P_Y) = \bigoplus_{T \in X, U \in Y} \mathrm{Hom}_R(P_T, P_U) = 0$。$x \in R$ に対して

$$
P_X \to B \xrightarrow{\cdot x} B \to P_Y
$$

は $0$ だから、$P_XR \subset P_X$。同様にして、$P_YR \subset P_Y$

$R$: 体 $K$ 上の有限次元代数

$$
c_{ST} = \frac{\mathrm{dim}_K e_TRe_S}{\mathrm{dim}_K \mathrm{End}_R(T)}
$$

$R$: 体 $K$ 上の対称代数

$$
\mathrm{dim}_K e_TRe_S = \mathrm{dim}_K e_SRe_T
$$

特に、$R$ が $K$ 上の分裂対称代数ならば、$c_{ST} = c_{TS}$

$(-, -): e_TRe_S \times e_SRe_T \to K$ が非退化なことを示せば良い。$x \in e_TRe_S$ は $(x, e_SRe_T) = 0$ だとする。$0 = (x, e_SRe_T) = (e_Txe_S, R) = (x, R)$ だから、$x = 0$。同様にして、$y \in e_SRe_T$ が $(e_TRe_S, y) = 0$ を満たせば $y = 0$ なこともわかる

$R$: 体 $K$ 上の対称代数

$$
\sum_T c_{ST}(\chi_T, \chi_U) = (\chi_{P_S}, \chi_U)
$$

# 群環 $K[G]$

$K$: 体
$G$: 有限群
群環 $K[G]$ の元は $x = \sum_g x_g g$ と表す

$$
(x, y) \coloneqq (xy)_e = \sum_{g \in G} x_g y_{g^{-1}} \quad (x, y \in K[G])
$$

によって $K[G]$ は対称代数になる。$a_g \coloneqq g, b_g \coloneqq g^{-1} \ (g \in G)$ は $(-, -)$ に関して互いに双対な $K$ 上の $K[G]$ の基底。$d_R = |G|$

以降は、$|G| \in K$ が可逆とする

$K[G]$ は半単純
$N \subset M$ を $K[G]$ 加群たちとする。$K$ 線形写像 $p_0: M \to M$ で $p_0^2 = p_0$ かつ $p_0(M) = N$ なものを固定する

$$
p(m) \coloneqq \frac{1}{|G|} \sum_{g \in G} gp_0(g^{-1}m) \quad (m \in M)
$$

とすると、$p$ は $K[G]$ 加群の準同型で $p^2 = p$ かつ $p(M) = N$。よって、$N \subset M$ は直和因子であり、$K[G]$ は半単純

以降は、さらに $K$ は代数閉体だとする。$K[G]$ は分裂半単純対称代数。$Z(K[G])$ は

$$
\sum_{g \in C} g \quad (C \subset G \text{ は共役類})
$$

を基底に持つから、$\mathrm{dim}_K Z(K[G]) = \#\mathrm{Irr}(K[G])$ は共役類の個数と一致する

$$
|G| = \sum_{S \in \mathrm{Irr}(K[G])} (\mathrm{dim}_K S)^2
$$

であり、$K$ 上の代数として

$$
K[G] \xrightarrow{\sim} \prod_{S \in \mathrm{Irr}(K[G])} \mathrm{End}_K(S)
$$

$S, T \in \mathrm{Irr}(K[G])$

$$
(\chi_S, \chi_T) = \begin{cases}
  |G| &\quad (S = T) \\
  0 &\quad (S \ne T)
\end{cases}
$$

$$
b_S = \frac{\mathrm{dim}_K S}{|G|} d_S = \frac{\mathrm{dim}_K S}{|G|} \sum_{g \in G} \chi_S(g)g^{-1}
$$

# Coxeter 群

https://zenn.dev/link/comments/79591909c0e1a5

$W$: 群
$S \subset W$ は位数 2 の元から成り、$W$ を生成するとする。以下の (1) 〜 (4) は同値

(1) $2 \le m_{s, t} \le \infty \ (s, t \in S, s \ne t)$ があって、$W$ は生成元 $s \in S$ と関係式

$$
\begin{aligned}
  &s^2 = 1 \\
  &(st)^{m_{s, t}} = 1 \quad (m_{s, t} < \infty)
\end{aligned}
$$

で定義される

(2) 対称双線形形式付きの実線形空間 $V$, $R \subset \{ v \in V \mid (v, v) > 0 \}$, $\alpha_s \in R \ (s \in S)$, 忠実な表現 $W \curvearrowright V$ があって、以下の (a) 〜 (e) を満たす

(a) $WR \subset R$
(b) $s \in S$ は $V$ に $\alpha_s$ による鏡映で作用する
(c) $\alpha_s$ たちは $V$ の基底をなす
(d) $R^+ \coloneqq R \cap (\sum_{s \in S} \mathbb{R}_{\ge 0}\alpha_s)$, $R^- \coloneqq -R^+$ とすると、$R = R^+ \sqcup R^-$
(e) $R^+ \cap \mathbb{R}\alpha_s = \{ \alpha_s \}$

(3) Strong Exchange Condition
$\ell(vsv^{-1}w) \le \ell(w)$ ならば、最短とは限らない表示 $w = s_1 \cdots s_n$ に対して

$$
vsv^{-1}w = \text{1 つ除いたもの}
$$

${}$(4) Exchange Condition
$\ell(sw) \le \ell(w)$ ならば、最短表示 $w = s_1 \cdots s_n$ に対して

$$
sw = \text{1 つ除いたもの}
$$

${}$(2) $\Rightarrow$ (3) のみもう一度示す

$s$ の $V$ への作用は $\alpha_s$ による鏡映だから、$\alpha_s$ 成分しか変えない。よって

$$
R^+ \setminus \{ \alpha_s \} \xrightarrow[s]{\sim} R^+ \setminus \{ \alpha_s \}
$$

$vsv^{-1}$ は $V$ に $v\alpha_s$ による鏡映で作用する。$v\alpha_s$ と $w^{-1}v\alpha_s$ の正負が逆の場合と同じ場合を考える。正負が逆の場合、最短とは限らない表示 $w = s_1 \cdots s_n$ に対して、ある $1 \le i \le n$ が存在して、$s_{i - 1} \cdots s_1 v\alpha_s$ と $s_i \cdots s_1 v\alpha_s$ の正負は逆。よって、$s_{i - 1} \cdots s_1 v\alpha_s = \pm\alpha_{s_i}$。対応する鏡映を考えると、$W \curvearrowright V$ は忠実だから

$$
s_{i - 1} \cdots s_1 vsv^{-1} s_1 \cdots s_{i - 1} = s_i
$$

$$
vsv^{-1}w = s_1 \cdots s_{i - 1} \check{s}_i s_{i + 1} \cdots s_n
$$

特に、$\ell(vsv^{-1}w) < \ell(w)$。次に、正負が同じ場合を考える。$(vsv^{-1}w)^{-1}v\alpha_s = w^{-1}vs\alpha_s = -w^{-1}v\alpha_s$ だから、$vsv^{-1}w$ の表示を考えれば、$\ell(w) < \ell(vsv^{-1}w)$。よって、$\ell(vsv^{-1}w) \ne \ell(w)$ であり

$$
\begin{aligned}
  \ell(vsv^{-1}w) < \ell(w) &\Leftrightarrow v\alpha_s \text{ と } w^{-1}v\alpha_s \text{ の正負が逆} \\
  \ell(vsv^{-1}w) > \ell(w) &\Leftrightarrow v\alpha_s \text{ と } w^{-1}v\alpha_s \text{ の正負が同じ}
\end{aligned}
$$

特に、$\ell(sw) = \ell(w) \pm 1$ であり

$$
\begin{aligned}
  \ell(sw) = \ell(w) - 1 &\Leftrightarrow \alpha_s \text{ と } w^{-1}\alpha_s \text{ の正負が逆} \\
  &\Leftrightarrow w \text{ は } s \text{ で始まる最短表示を持つ} \\
  \ell(sw) = \ell(w) + 1 &\Leftrightarrow \alpha_s \text{ と } w^{-1}\alpha_s \text{ の正負が同じ} \\
  &\Leftrightarrow w \text{ は } s \text{ で始まる最短表示を持たない} \\
\end{aligned}
$$

$w = s_1 \cdots s_n$ を最短表示とすると

$$
\{ \alpha \in R^+ \mid w^{-1}\alpha \in R^- \} = \{ \alpha_{s_1}, s_1 \alpha_{s_2}, \dots, s_1 \cdots s_{n - 1} \alpha_{s_n} \}
$$

右辺は相異なり、特に

$$
\ell(w) = \#\{ \alpha \in R^+ \mid w^{-1}\alpha \in R^- \}
$$

# Weyl 群は Coxeter 群

$(E, R)$: ルート系
$W \subset O(E)$: Weyl 群
$R^+ \subset R$: 正ルートたちを固定
$S \subset R^+$: 単純ルートたち

$W \curvearrowright E$ は Coxeter 群の (2) の条件を満たす

# $\mathfrak{S}_n$

$$
\begin{aligned}
  E &\coloneqq \{ x \in \mathbb{R}^n \mid x_1 + \cdots + x_n = 0 \} \\
  R &\coloneqq \{ e_i - e_j \mid i \ne j \} \subset E
\end{aligned}
$$

とすると、$(E, R)$ は $A_{n - 1}$ と呼ばれるルート系になる。$A_{n - 1}$ の Weyl 群は $\mathfrak{S}_n$ であり、$\mathfrak{S}_n \curvearrowright E$ は置換表現から誘導される表現と一致する。$e_i - e_j$ による鏡映は互換 $(i \ j)$ に対応する。$R^+ = \{ e_i - e_j \mid i < j \}$ とすると

$$
S = \{ e_i - e_{i + 1} \mid 1 \le i \le n - 1 \}
$$

$\mathfrak{S}_n$ は $s_1, \dots, s_{n - 1}$ と関係式

$$
\begin{aligned}
  &s_i^2 = 1 \\
  &(s_i s_j)^2 = 1 \Leftrightarrow s_i s_j = s_j s_i \quad (j - i \ge 2) \\
  &(s_i s_{i + 1})^3 = 1 \Leftrightarrow s_i s_{i + 1} s_i = s_{i + 1} s_i s_{i + 1}
\end{aligned}
$$

で定義されることもわかる

# 諸々の性質

[Deletion Condition]
$w = s_1 \cdots s_n$ を最短とは限らない表示とする。いくつかを取り除いて最短表示にできる

$1 \le k \le n$ に対して、$\ell(s_k \cdots s_n) = \ell(s_{k + 1} \cdots s_n) \pm 1$。$w = s_1 \cdots s_n$ が最短でないとすると、ある $1 \le k \le n - 1$ が存在して、$\ell(s_k \cdots s_n) = \ell(s_{k + 1} \cdots s_n) - 1$。$s_k \cdots s_n = s_{k + 1} \cdots \check{s}_l \cdots s_n$ と表せる

$Y \subset S$: 部分集合
$W_Y \subset W$: $Y$ が生成する部分群

$W_Y$ は $V_Y \coloneqq \mathrm{span}_\mathbb{R} Y \subset V$, $R_Y \coloneqq R \cap V_Y$ とすれば Coxeter 群の (2) の条件を満たす。Deletion Condition から、$v \in W_Y$ に対して

$$
\ell_Y(v) = \ell(v)
$$

$\mathfrak{B}^+$ を生成元 $s \in S$ と関係式

$$
\overbrace{sts \cdots}^{m_{s, t}} = \overbrace{tst \cdots}^{m_{s, t}} \quad (m_{s, t} < \infty)
$$

で定義されるモノイドとする。$\mathfrak{B}^+ \to W$ がある

[松本の定理]
$s_1 \cdots s_n = t_1 \cdots t_n \in W$ を 2 つの最短表示とすると、$\mathfrak{B}^+$ 内で $s_1 \cdots s_n = t_1 \cdots t_n$

$n$ に関する帰納法を使う。$n = 0$ なら明らか。$n \ge 1$ とする。$s_1 = t_1$ の場合は明らか。$s_1 \ne t_1$ とする。$W_2 \coloneqq \langle s_1, t_1 \rangle \subset W$ とする。$w \coloneqq s_1 \cdots s_n = t_1 \cdots t_n$ とおく。$W_2 w$ の元で長さが最小のものを $w' \in W$ とする。Deletion Condition から

$$
\ell(vw') = \ell(v) + \ell(w') \quad (v \in W_2)
$$

特に、$w'$ は一意的。$v_0 \in W_2$ が存在して、$w = v_0 w'$

$$
\begin{aligned}
  \ell(s_1 v_0) &= \ell(s_1 v_0 w') - \ell(w') \\
  &= \ell(w) - \ell(w') - 1 \\
  &= \ell(v_0) - 1
\end{aligned}
$$

同様にして、$\ell(t_1 v_0) = \ell(v_0) - 1$。よって、$m \coloneqq m_{s_1, t_1} < \infty$ かつ $v_0 = \overbrace{s_1 t_1 s_1 \cdots}^m = \overbrace{t_1 s_1 t_1 \cdots}^m$。$w' = u_1 \cdots u_k$ を最短表示とすれば、$W$ 内で

$$
\begin{aligned}
  s_2 \cdots s_n &= \overbrace{t_1 s_1 t_1 \cdots}^{m - 1} u_1 \cdots u_k \\
  t_2 \cdots t_n &= \overbrace{s_1 t_1 s_1 \cdots}^{m - 1} u_1 \cdots u_k
\end{aligned}
$$

であり、全て最短表示。帰納法の仮定から、$\mathfrak{B}^+$ 内で

$$
\begin{aligned}
  s_1 \cdots s_n &= \overbrace{s_1 t_1 s_1 \cdots}^m u_1 \cdots u_k \\
  &= \overbrace{t_1 s_1 t_1 \cdots}^m u_1 \cdots u_k \\
  &= t_1 \cdots t_n
\end{aligned}
$$

# Hecke 代数

$(W, S)$: Coxeter 群
$R$: 単位的可換環
$q \in R$

$\mathscr{H}_{R, q}$ を $T_s \ (s \in S)$ と関係式

$$
\begin{aligned}
  &(T_s - q)(T_s + 1) = 0 \\
  &\overbrace{T_s T_t T_s \cdots}^{m_{s, t}} = \overbrace{T_t T_s T_t \cdots}^{m_{s, t}} \quad (m_{s, t} < \infty)
\end{aligned}
$$

で定義される $R$ 代数とする。$w \in W$ とする。最短表示 $w = s_1 \cdots s_n$ を用いて

$$
T_w \coloneqq T_{s_1} \cdots T_{s_n} \in \mathscr{H}_{R, q}
$$

と定義する。$T_w$ は最短表示 $w = s_1 \cdots s_n$ に依らない

$$
T_s T_w = \begin{cases}
  T_{sw} &\quad (\ell(sw) = \ell(w) + 1) \\
  qT_{sw} + (q - 1)T_w &\quad (\ell(sw) = \ell(w) - 1)
\end{cases}
$$

2 つ目を示す。$T_w = T_s T_{sw}$ だから

$$
T_s T_w = T_s^2 T_{sw} = ((q - 1)T_s + q)T_{sw} = qT_{sw} + (q - 1)T_w
$$

# Bruhat 順序

$v, w \in W$ に対して、$v \le w$ とは以下の同値な条件を満たすことをいう

(1) ある $w$ の最短表示が存在して、$v$ はある部分表示に一致する
(2) 任意の $w$ の最短表示に対して、$v$ はある部分表示に一致する

(1) $\Rightarrow$ (2) は松本の定理から従う。(2) から $\le$ は $W$ 上の半順序を定めることがわかる

[Lifting Property]
$v \le w$ かつ $\ell(sv) = \ell(v) + 1$ かつ $\ell(sw) = \ell(w) - 1$ とすると、$v \le sw$ かつ $sv \le w$

$sw = s_1 \cdots s_n$ を最短表示とする。最短表示 $w = s s_1 \cdots s_n$ のある部分表示は $v$ の最短表示になる。$\ell(sv) = \ell(v) + 1$ だから、$s$ は除去される必要がある

# Hecke 代数の構造

$\mathscr{H}_{R, q}$ は $R$ 加群として $\{ T_w \mid w \in W \}$ で生成される。これが自由生成なことを示す

$\{ e_w \mid w \in W \}$ で生成される自由 $R$ 加群を $E$ とする。$\theta_s: E \to E$ を

$$
\theta_s(e_w) \coloneqq \begin{cases}
  e_{sw} &\quad (\ell(sw) = \ell(w) + 1) \\
  qe_{sw} + (q - 1)e_w &\quad (\ell(sw) = \ell(w) - 1)
\end{cases}
$$

で定義する。$\{ \theta_s \} \subset \mathrm{End}_R(E)$ が生成する $R$ 代数を $\mathcal{E}$ とする。$\mathscr{H}_{R, q} \simeq \mathcal{E}$ を示す。まず

$$
\begin{aligned}
  \theta_s^2 e_w &= \begin{cases}
    \theta_s e_{sw} &\quad (\ell(sw) = \ell(w) + 1) \\
    \theta_s (qe_{sw} + (q - 1)e_w) &\quad (\ell(sw) = \ell(w) - 1)
  \end{cases} \\
  &= \begin{cases}
    qe_w + (q - 1)e_{sw} \\
    qe_w + (q - 1)qe_{sw} + (q - 1)^2 e_w
  \end{cases} \\
  &= (q - 1)\theta_s + q
\end{aligned}
$$

$\vartheta_s: E \to E$ を

$$
\vartheta_s(e_w) \coloneqq \begin{cases}
  e_{ws} &\quad (\ell(ws) = \ell(w) + 1) \\
  qe_{ws} + (q - 1)e_w &\quad (\ell(ws) = \ell(w) - 1)
\end{cases}
$$

で定義する。$\theta_s$ と $\vartheta_t$ は可換なことを示す。以下の (1) 〜 (6) の場合を考えれば良い

(1) $\ell(swt) = \ell(w) + 2$

$$
\theta_s \vartheta_t e_w = e_{swt} = \vartheta_t \theta_s e_w
$$

${}$(2) $\ell(swt) = \ell(w) - 2$

$$
\theta_s \vartheta_t e_w = q^2 e_{swt} + (q - 1)q(e_{sw} + e_{wt}) + (q - 1)^2 e_w = \vartheta_t \theta_s e_w
$$

${}$(3) $\ell(swt) = \ell(w)$, $\ell(sw) = \ell(w) - 1$, $\ell(wt) = \ell(w) + 1$

$$
\theta_s \vartheta_t e_w = qe_{swt} + (q - 1)e_{wt} = \vartheta_t \theta_s e_w
$$

${}$(4) $\ell(swt) = \ell(w)$, $\ell(sw) = \ell(w) + 1$, $\ell(wt) = \ell(w) - 1$

$$
\theta_s \vartheta_t e_w = qe_{swt} + (q - 1)e_{sw} = \vartheta_t \theta_s e_w
$$

${}$(5) $\ell(swt) = \ell(w)$, $\ell(sw) = \ell(w) - 1$, $\ell(wt) = \ell(w) - 1$

$sw = wt$ を示す。$\ell(s(swt)) = \ell(swt) - 1$ だから、$sw = s_1 \cdots s_n$ を最短表示とすると

$$
wt = s_1 \cdots s_n t \text{ から 1 つ取り除いたもの}
$$

$t$ 以外を取り除くと、矛盾する

$$
\theta_s \vartheta_t e_w = qe_{swt} + (q - 1)qe_{sw} + (q - 1)^2 e_w = \vartheta_t \theta_s e_w
$$

${}$(6) $\ell(swt) = \ell(w)$, $\ell(sw) = \ell(w) + 1$, $\ell(wt) = \ell(w) + 1$

$sw = wt$ を示す。$\ell(s(wt)) = \ell(wt) - 1$ だから、$w = s_1 \cdots s_n$ を最短表示とすると

$$
swt = s_1 \cdots s_n t \text{ から 1 つ取り除いたもの}
$$

$t$ 以外を取り除くと矛盾する

$$
\theta_s \vartheta_t e_w = qe_{swt} + (q - 1)e_{wt} = \vartheta_t \theta_s e_w
$$

$\theta_s$ の組紐関係式を示す。$w = s_1 \cdots s_n$ を最短表現とすると

$$
\begin{aligned}
  \overbrace{\theta_s \theta_t \theta_s \cdots}^{m_{s, t}} e_w &= \overbrace{\theta_s \theta_t \theta_s \cdots}^{m_{s, t}} \vartheta_{s_n} \cdots \vartheta_{s_1} e_1 \\
  &= \vartheta_{s_n} \cdots \vartheta_{s_1} \overbrace{\theta_s \theta_t \theta_s \cdots}^{m_{s, t}} e_1 \\
  &= \vartheta_{s_n} \cdots \vartheta_{s_1} e_{w_0} \\
  &= \overbrace{\theta_t \theta_s \theta_t \cdots}^{m_{s, t}} e_w
\end{aligned}
$$

ただし、$w_0 \coloneqq \overbrace{sts \cdots}^{m_{s, t}} = \overbrace{tst \cdots}^{m_{s, t}}$

よって、$\mathscr{H}_{R, q} \twoheadrightarrow \mathcal{E}$ が $T_s \mapsto \theta_s$ で定義される。$\theta_w$ も同様に定義できるが、$\theta_w e_1 = e_w$ だから、$\mathcal{E}$ は $R$ 加群として $\theta_w$ で自由生成される。よって、$\mathscr{H}_{R, q}$ も $T_w$ で自由生成され、$\mathscr{H}_{R, q} \simeq \mathcal{E}$

$(-, -): \mathscr{H}_{R, q} \times \mathscr{H}_{R, q} \to R$ を

$$
(h_1, h_2) \coloneqq h_1 h_2 \text{ の } T_1 \text{ の係数}
$$

で定義する。$(h_1 h_2, h_3) = (h_1, h_2 h_3)$。$v, w \in W$ に対して

$$
(T_v, T_w) = \begin{cases}
  q^{l(v)} &\quad (vw = 1) \\
  0 &\quad (vw \ne 1)
\end{cases}
$$

が成り立つ。特に、$(-, -)$ は対称

$$
T_v T_w = q^{\frac{1}{2}(\ell(v) + \ell(w) - \ell(vw))} T_{vw} + \sum_{z > vw} a_z T_z
$$

を示せば良い。Deletion Condition から $\frac{1}{2}(\ell(v) + \ell(w) - \ell(vw)) \in \mathbb{Z}_{\ge 0}$ に注意。$\ell(w)$ に関する帰納法を使う。$\ell(w) = 0$ の場合は明らか。$\ell(w) > 0$ とし、$w = s_1 \cdots s_n$ を最短表示とする。$\ell(vs_1) = \ell(v) + 1$ の場合は

$$
T_v T_w = T_{vs_1} T_{s_2 \cdots s_n}
$$

から明らか。$\ell(vs_1) = \ell(v) - 1$ の場合は

$$
T_v T_w = qT_{vs_1} T_{s_2 \cdots s_n} + (q - 1)T_v T_{s_2 \cdots s_n}
$$

帰納法の仮定から

$$
\begin{aligned}
  T_{vs_1} T_{s_2 \cdots s_n} &= q^{\frac{1}{2}(\ell(v) + \ell(w) - \ell(vw)) - 1} T_{vw} + \sum_{z > vw} a_z T_z \\
  T_v T_{s_2 \cdots s_n} &= q^{\frac{1}{2}(\ell(v) + \ell(w) - \ell(vs_1w) - 1)} T_{vs_1w} + \sum_{z' > vs_1w} a_{z'} T_{z'}
\end{aligned}
$$

$vw < vs_1w$ を示せば良い。$vw = (vs_1)s_2 \cdots s_n$, $vs_1w = vs_2 \cdots s_n$ から明らか

# Cellular 代数

$R$: 単位的可換環

$R$ 代数 $A$ の cellular 基底とは、半順序集合 $\Lambda$ と空でない有限集合 $\mathcal{T}(\lambda) \ (\lambda \in \Lambda)$ と $c^\lambda_{\mathfrak{s}\mathfrak{t}} \in A \ (\lambda \in \Lambda, \mathfrak{s}, \mathfrak{t} \in \mathcal{T}(\lambda))$ で以下の (1) 〜 (3) を満たすもの

(1) $\mathcal{C} \coloneqq \{ c^\lambda_{\mathfrak{s}\mathfrak{t}} \mid \lambda \in \Lambda, \mathfrak{s}, \mathfrak{t} \in \mathcal{T}(\lambda) \}$ は $R$ 加群 $A$ の自由基底
(2) $*: A \ni c^\lambda_{\mathfrak{s}\mathfrak{t}} \mapsto c^\lambda_{\mathfrak{t}\mathfrak{s}} \in A$ は $R$ 代数の antiautomorphism
(3) 任意の $\lambda \in \Lambda$, $\mathfrak{t} \in \mathcal{T}(\lambda)$, $a \in A$ に対して、$r^a_{\mathfrak{u}\mathfrak{t}} \ (\mathfrak{u} \in \mathcal{T}(\lambda))$ が存在して

$$
c^\lambda_{\mathfrak{s}\mathfrak{t}}a \equiv \sum_{\mathfrak{u} \in \mathcal{T}(\lambda)} r^a_{\mathfrak{u}\mathfrak{t}} c^\lambda_{\mathfrak{s}\mathfrak{u}} \mod \check{A}^\lambda \quad (\forall\mathfrak{s} \in \mathcal{T}(\lambda))
$$

ただし、$\check{A}^\lambda$ は $\{ c^\mu_{\mathfrak{u}\mathfrak{v}} \mid \mu > \lambda, \mathfrak{u}, \mathfrak{v} \in \mathcal{T}(\lambda) \}$ が張る自由 $R$ 加群

$A = R[x]$ は、$\Lambda \coloneqq \mathbb{Z}_{\ge 0}$, $\mathcal{T}(n) \coloneqq \{ n \}$, $c^n_{nn} \coloneqq x^n$ とすると cellular 代数

$$
c^n_{nn}a \equiv a_0 c^n_{nn} \mod \check{A}^n
$$

ただし、$a_0 \in R$ は $a$ の定数項

$A = M_n(R)$ は $\Lambda \coloneqq \{ n \}$, $\mathcal{T}(n) \coloneqq \{ 1, \dots, n \}$, $c^n_{ij} \coloneqq E_{ij}$ とすると cellular 代数

$$
c^n_{ij}a = \sum_k a_{jk}c^n_{ik}
$$

$A, B$ を cellular 代数とすると、$A \oplus B$, $A \otimes_R B$ も cellular 代数

(3) の $*$ を取れば

(3') 任意の $\lambda \in \Lambda$, $\mathfrak{s} \in \mathcal{T}(\lambda)$, $a \in A$ に対して、$r^{a^*}_{\mathfrak{u}\mathfrak{s}} \ (\mathfrak{u} \in \mathcal{T}(\lambda))$ が存在して

$$
ac^\lambda_{\mathfrak{s}\mathfrak{t}} \equiv \sum_{\mathfrak{u} \in \mathcal{T}(\lambda)} r^{a^*}_{\mathfrak{u}\mathfrak{s}} c^\lambda_{\mathfrak{u}\mathfrak{t}} \mod \check{A}^\lambda \quad (\forall\mathfrak{t} \in \mathcal{T}(\lambda))
$$

$A^\lambda$ を $\{ c^\mu_{\mathfrak{u}\mathfrak{v}} \mid \mu \ge \lambda, \mathfrak{u}, \mathfrak{v} \in \mathcal{T}(\lambda) \}$ が張る自由 $R$ 加群とすると、$A^\lambda \subset A$ は両側イデアル。$\check{A}^\lambda = \sum_{\mu > \lambda} A^\mu \subset A$ も両側イデアル。また、$c^\lambda_{\mathfrak{s}\mathfrak{t}}c^\lambda_{\mathfrak{u}\mathfrak{v}} \equiv \sum_{\mathfrak{w}} r^{\mathfrak{u}\mathfrak{v}}_{\mathfrak{w}\mathfrak{t}}c^\lambda_{\mathfrak{s}\mathfrak{w}} \equiv \sum_{\mathfrak{x}} \tilde{r}^{\mathfrak{s}\mathfrak{t}}_{\mathfrak{u}\mathfrak{x}}c^\lambda_{\mathfrak{x}\mathfrak{v}} \mod \check{A}^\lambda$ だから、$r_{\mathfrak{t}\mathfrak{u}} \in R$ が存在して

$$
c^\lambda_{\mathfrak{s}\mathfrak{t}}c^\lambda_{\mathfrak{u}\mathfrak{v}} \equiv r_{\mathfrak{t}\mathfrak{u}}c^\lambda_{\mathfrak{s}\mathfrak{v}} \mod \check{A}^\lambda \quad (\forall\mathfrak{s}, \mathfrak{v} \in \mathcal{T}(\lambda))
$$

$r_{\mathfrak{t}\mathfrak{u}} = r_{\mathfrak{u}\mathfrak{t}}$ もわかる

# $C^\lambda$

$C^\lambda_\mathfrak{s} \subset A^\lambda / \check{A}^\lambda$ を $\{ c^\lambda_{\mathfrak{s}\mathfrak{t}} \mid \mathfrak{t} \in \mathcal{T}(\lambda) \}$ が張る自由 $R$ 加群とする。$C^\lambda_\mathfrak{s}$ は部分右 $A$ 加群。$C^\lambda_\mathfrak{s} \ (s \in \mathcal{T}(\lambda))$ たちは同型だから、$C^\lambda$ と表す。$C^\lambda$ は $\{ c^\lambda_\mathfrak{t} \mid \mathfrak{t} \in \mathcal{T}(\lambda) \}$ が張る自由 $R$ 加群に

$$
c^\lambda_\mathfrak{t}a \coloneqq \sum_\mathfrak{u} r^a_{\mathfrak{u}\mathfrak{t}}c^\lambda_\mathfrak{u}
$$

で右 $A$ 加群の構造を入れたもの。$\mathrm{Hom}_R(C^\lambda, R)$ は左 $A$ 加群になるが

$$
ac'^{\lambda}_\mathfrak{t} = \sum_\mathfrak{u} r^a_{\mathfrak{t}\mathfrak{u}}c'^{\lambda}_\mathfrak{u}
$$

$C^{*\lambda}_\mathfrak{t} \subset A^\lambda / \check{A}^\lambda$ を $\{ c^\lambda_{\mathfrak{s}\mathfrak{t}} \mid \mathfrak{s} \in \mathcal{T}(\lambda) \}$ が張る自由 $R$ 加群とする。$C^{*\lambda}_\mathfrak{t}$ は部分左 $A$ 加群。$C^{*\lambda}_\mathfrak{t} \ (t \in \mathcal{T}(\lambda))$ たちは同型だから、$C^{*\lambda}$ と表す。$C^{*\lambda}$ は $\{ c^\lambda_\mathfrak{s} \mid \mathfrak{s} \in \mathcal{T}(\lambda) \}$ が張る自由 $R$ 加群に

$$
ac^\lambda_\mathfrak{s} \coloneqq \sum_\mathfrak{u} r^{a^*}_{\mathfrak{u}\mathfrak{s}}c^{*\lambda}_\mathfrak{u}
$$

で左 $A$ 加群の構造を入れたもの。$C^{*\lambda}$ は $C^\lambda$ を $*$ で捻った左 $A$ 加群に一致する

$(A, A)$-両側加群として

$$
A^\lambda / \check{A}^\lambda \simeq C^{*\lambda} \otimes_R C^\lambda
$$

$\lambda \not\ge \mu$ ならば $C^\lambda A^\mu = 0$

$\mathfrak{s} \in \mathcal{T}(\lambda)$ を固定する。$C^\lambda \simeq C^\lambda_\mathfrak{s}$。$y \in A^\mu$ とする。$\mathfrak{t} \in \mathcal{T}(\lambda)$ に対して、$c_{\mathfrak{s}\mathfrak{t}}y \in A^\lambda \cap A^\mu \subset \check{A}^\lambda$

$\langle -, - \rangle: C^\lambda \times C^\lambda \to R$ を

$$
c^\lambda_{\mathfrak{s}\mathfrak{t}}c^\lambda_{\mathfrak{u}\mathfrak{v}} \equiv \langle c^\lambda_\mathfrak{t}, c^\lambda_\mathfrak{u} \rangle c^\lambda_{\mathfrak{s}\mathfrak{v}}
$$

で定義する。$\langle c^\lambda_\mathfrak{s}, c^\lambda_\mathfrak{t} \rangle = r_{\mathfrak{s}\mathfrak{t}}$

${}$(1) $\langle x, y \rangle = \langle y, x \rangle$
$r_{\mathfrak{s}\mathfrak{t}} = r_{\mathfrak{t}\mathfrak{s}}$ から従う
(2) $\langle xa, y \rangle = \langle x, ya^* \rangle$

$$
\begin{aligned}
  \langle c^\lambda_\mathfrak{t}a, c^\lambda_\mathfrak{u} \rangle c^\lambda_{\mathfrak{s}\mathfrak{v}} &\equiv \sum_{\mathfrak{w}} r^a_{\mathfrak{w}\mathfrak{t}} \langle c^\lambda_\mathfrak{w}, c^\lambda_\mathfrak{u} \rangle c^\lambda_{\mathfrak{s}\mathfrak{v}} \\
  &\equiv \sum_{\mathfrak{w}} r^a_{\mathfrak{w}\mathfrak{t}} c^\lambda_{\mathfrak{s}\mathfrak{w}}c^\lambda_{\mathfrak{t}\mathfrak{v}} \\
  &\equiv c^\lambda_{\mathfrak{s}\mathfrak{t}}ac^\lambda_{\mathfrak{u}\mathfrak{v}} \\
  &\equiv c^\lambda_{\mathfrak{s}\mathfrak{t}} \sum_{\mathfrak{w}} r^{a^*}_{\mathfrak{w}\mathfrak{u}} c^\lambda_{\mathfrak{w}\mathfrak{v}} \\
  &\equiv \sum_{\mathfrak{w}} r^{a^*}_{\mathfrak{w}\mathfrak{u}} \langle c^\lambda_\mathfrak{t}, c^\lambda_\mathfrak{w} \rangle c^\lambda_{\mathfrak{s}\mathfrak{v}} \\
  &\equiv \langle c^\lambda_\mathfrak{t}, c^\lambda_\mathfrak{u}a^* \rangle c^\lambda_{\mathfrak{s}\mathfrak{v}}
\end{aligned}
$$

${}$(3) $xc^\lambda_{\mathfrak{s}\mathfrak{t}} = \langle x, c^\lambda_\mathfrak{s} \rangle c^\lambda_\mathfrak{t}$

$$
c^\lambda_\mathfrak{u}c^\lambda_{\mathfrak{s}\mathfrak{t}} = r_{\mathfrak{u}\mathfrak{s}}c^\lambda_\mathfrak{t} = \langle c^\lambda_\mathfrak{u}, c^\lambda_\mathfrak{s} \rangle c^\lambda_\mathfrak{t}
$$

$\mathfrak{t} \in \mathcal{T}(\lambda)$ に対して、$R$ 準同型 $*_\mathfrak{t}: C^\lambda \ni c^\lambda_\mathfrak{s} \mapsto c^\lambda_{\mathfrak{s}\mathfrak{t}} \in A^\lambda$ は以下を満たす

$$
\begin{aligned}
  (xa)_\mathfrak{t} &= a^*x_\mathfrak{t} \mod \check{A}^\lambda &\quad (x \in C^\lambda, a \in A) \\
  xy_\mathfrak{t} &= \langle x, y \rangle c^\lambda_\mathfrak{t} &\quad (x, y \in C^\lambda)
\end{aligned}
$$

以降、$R$ は体 $K$ とする

$\lambda \in \Lambda$ が regular とは、$C^\lambda$ 上のペアリングが $0$ でないことをいう。$\Lambda_0 \subset \Lambda$ を regular な元たちとする

$\lambda \in \Lambda_0$ ならば $C^\lambda$ は唯一の極大部分加群を持ち

$$
\mathrm{rad}(C^\lambda) = \{ x \in C^\lambda \mid \langle x, C^\lambda \rangle = 0 \}
$$

$Q \coloneqq \{ x \in C^\lambda \mid \langle x, C^\lambda \rangle = 0 \} \subsetneq C^\lambda$。$x \not\in Q$ とすると、$xA = C^\lambda$ が成り立つことを示せば良い。ある $y \in C^\lambda$ が存在して $\langle x, y \rangle = 1$ だが

$$
xy_\mathfrak{t} = \langle x, y \rangle c^\lambda_{\mathfrak{t}} = c^\lambda_{\mathfrak{t}} \quad (\mathfrak{t} \in \mathcal{T}(\lambda))
$$

$\lambda \in \Lambda_0$ に対して、$D^\lambda \coloneqq \mathrm{top}(C^\lambda)$ と定義する

$\mu \in \Lambda_0$
(1) $\lambda \not\ge \mu$ ならば、$[C^\lambda : D^\mu] = 0$
(2) $[C^\mu : D^\mu] = 1$
(3) $\mathrm{End}_A(D_\mu) = K$ であり、$D_\mu$ は絶対既約

(1)
任意の部分加群 $M \subset C^\lambda$ に対して、$f: C^\mu \to C^\lambda / M$ は $0$ なことを示せば良い。$x, y \in C^\mu$ で $\langle x, y \rangle = 1$ なものを固定する。$C^\lambda A^\mu = 0$ だから

$$
f(c^\mu_\mathfrak{t}) = f(xy_\mathfrak{t}) = f(x)y_\mathfrak{t} = 0 \quad (\mathfrak{t} \in \mathcal{T}(\mu))
$$

(2)
任意の部分加群 $M \subset \mathrm{rad}(C^\mu)$ に対して、$f: C^\mu \to \mathrm{rad}(C^\mu) / M$ は $0$ なことを示せば良い。$x, y \in C^\mu$ で $\langle x, y \rangle = 1$ なものを固定する。$f(x) = \bar{a} \ (a \in \mathrm{rad}(C^\mu))$ とすると

$$
f(c^\mu_\mathfrak{t}) = f(xy_\mathfrak{t}) = \overline{ay_\mathfrak{t}} = \langle a, y \rangle \bar{c}^\mu_\mathfrak{t} = 0 \quad (\mathfrak{t} \in \mathcal{T}(\mu))
$$

(3)
任意の $f: C^\mu \to D^\mu$ が標準的な射影 $C^\mu \to D^\mu$ のスカラー倍なことを示せば良い。$x, y \in C^\mu$ で $\langle x, y \rangle = 1$ なものを固定する。$f(x) = \bar{a} \ (a \in C^\mu)$ とすると

$$
f(c^\mu_\mathfrak{t}) = f(xy_\mathfrak{t}) = \overline{ay_\mathfrak{t}} = \langle a, y \rangle \bar{c}^\mu_\mathfrak{t} \quad (\mathfrak{t} \in \mathcal{T}(\mu))
$$

$\lambda, \mu \in \Lambda_0$ ならば、直前の (1) から
$D^\lambda \simeq D^\mu$ $\Leftrightarrow$ $\lambda = \mu$

# Alexandrov 位相

$\Lambda$: 半順序集合

$\Gamma \subset \Lambda$ が上方集合 (upper set) とは、$\Gamma \ni \lambda \le \mu$ ならば $\mu \in \Gamma$ が成り立つことをいう。$\Gamma \subset \Lambda$ が下方集合 (lower set) とは、$\Gamma \ni \lambda \ge \mu$ ならば $\mu \in \Gamma$ が成り立つことをいう

$\Lambda$ 上に上方集合たちを開集合系とする位相を考える。この位相では、任意個の開集合の共通部分も開集合になる。閉集合たちは下方集合たちに一致する

部分集合 $\Gamma_1 \subset \Gamma_2 \subset \Lambda$ に対して、以下は同値
(1) $\Gamma_1, \Gamma_2$ は上方集合
(2) $\Gamma_1$ は上方集合で、$\Gamma_2 \setminus \Gamma_1 \subset \Lambda \setminus \Gamma_1$ は上方集合
(3) $\Gamma_2$ は上方集合で、$\Gamma_2 \setminus \Gamma_1 \subset \Gamma_2$ は下方集合

$X \subset \Lambda$ が凸集合とは、$\Gamma \ni \lambda \le \mu \le \nu \in \Gamma$ ならば $\mu \in \Gamma$ が成り立つことをいう。凸集合たちは局所閉集合たちと一致する

# Cellular 代数の単純加群

$R$: 可換環

$\Gamma \subset \Lambda$: 上方集合
$A(\Gamma) \subset A$ を $\{ c^\lambda_{\mathfrak{s}\mathfrak{t}} \mid \lambda \in \Gamma, \mathfrak{s}, \mathfrak{t} \in \mathcal{T}(\lambda) \}$ が張る自由 $R$ 加群とする。$A(\Gamma)$ は両側イデアル

$X \subset \Lambda$: 凸集合
$X$ は 2 つの上方集合 $\Gamma_1 \subset \Gamma_2 \subset \Lambda$ で $X = \Gamma_2 \setminus \Gamma_1$ と表せる。両側 $A$ 加群 $A(\Gamma_2) / A(\Gamma_1)$ は $\Gamma_1, \Gamma_2$ の取り方に依らない。特に、2 つの上方集合 $\Gamma_1 \subset \Gamma_2 \subset \Lambda$ が $\Gamma_2 \setminus \Gamma_1 = \{ \mu \}$ を満たせば

$$
A(\Gamma_2) / A(\Gamma_1) \simeq A^\mu / \check{A}^\mu \simeq C^{*\mu} \otimes_R C^\mu
$$

以降、$R$ は 体 $K$ とする

$\lambda \in \Lambda$ を極小元とすると、$\lambda \in \Lambda_0$ かつ $C^\lambda = D^\lambda$

$x \in C^\lambda$ が $\langle x, C^\lambda \rangle = 0$ を満たせば、$x = 0$ なことを示せば良い。$x c^\lambda_{\mathfrak{s}\mathfrak{t}} = \langle x, c^\lambda_\mathfrak{s} \rangle c^\lambda_\mathfrak{t} = 0$ だから、$x A^\lambda = 0$。また、$\mu \ne \lambda$ ならば、$\lambda \not\ge \mu$ だから、$x A^\mu = 0$。よって、$x A = 0$ であり、$x = 0$

以降、さらに $\#\Lambda < \infty$ とする

$A$ の単純加群の同型類は $\{ D^\lambda \mid \lambda \in \Lambda_0 \}$

$\mathcal{S} \coloneqq \{ D^\lambda \mid \lambda \in \Lambda_0 \}$ とする。$A$ の組成因子が $\mathcal{S}$ に含まれることを示せば良い。$\Lambda$ から極小元を取り除いていけば、$A$ の両側イデアルによるフィルトレーションで、部分商たちが $\{ C^{*\lambda} \otimes_K C^\lambda \mid \lambda \in \Lambda \}$ に一致するものが作れる。右 $A$ 加群として

$$
C^{*\lambda} \otimes_K C^\lambda = (C^\lambda)^{\#\mathcal{T}(\lambda)}
$$

よって、右 $A$ 加群 $C^\lambda$ の組成因子が $\mathcal{S}$ に含まれることを示せば良い。$C^\mu \ (\mu < \lambda)$ の組成因子が $\mathcal{S}$ に含まれるならば、$C^\lambda$ の組成因子も $\mathcal{S}$ に含まれることを示せば良い。$Q \coloneqq \{ x \in C^\lambda \mid \langle x, C^\lambda \rangle = 0 \}$ の組成因子が $\mathcal{S}$ に含まれることを示せば良い。$\lambda \in \Lambda_0$ ならば $Q = \mathrm{rad}(C^\lambda)$ であり、$\lambda \not\in \Lambda_0$ ならば $Q = C^\lambda$ なことに注意。$\Gamma \coloneqq \{ \mu \in \Lambda \mid \mu \not< \lambda \} \subset \Lambda$ は上方集合。$\mu \in \Gamma$ ならば $\mu = \lambda$ または $\lambda \not\ge \mu$ だから $QA(\Gamma) = 0$。よって、$Q$ の組成因子は右 $A$ 加群 $A / A(\Gamma)$ の組成因子であり、右 $A$ 加群 $A / A(\Gamma)$ の組成因子が $\mathcal{S}$ に含まれることを示せば良い。上方集合の列 $\Gamma = \Gamma_0 \subset \Gamma_1 \subset \cdots \subset \Gamma_n = \Lambda$ で $\Gamma_i \setminus \Gamma_{i - 1} = \{ \mu_i \} \ (\mu_i < \lambda)$ なものがある。両側イデアルのフィルトレーション

$$
A(\Gamma) = A(\Gamma_0) \subset A(\Gamma_1) \subset \cdots \subset A(\Gamma_n) = A
$$

ができる。右 $A$ 加群として $A(\Gamma_i) / A(\Gamma_{i - 1}) \simeq (C^{\mu_i})^{\#\mathcal{T}(\mu_i)}$ から従う

$A$ は分裂代数なことがわかる

$$
d_{\lambda\mu} \coloneqq [C^\lambda : D^\mu] \quad (\lambda \in \Lambda, \mu \in \Lambda_0)
$$

${}$(1) $\lambda \in \Lambda_0$ ならば、$d_{\lambda\lambda} = 1$
(2) $\lambda \in \Lambda, \mu \in \Lambda_0$ が $\lambda \not\ge \mu$ ならば、$d_{\lambda\mu} = 0$

$\lambda \in \Lambda_0$ に対して、$D^\lambda$ に対応する PIM を $P^\lambda$ とする

右 $A$ 加群 $M$ に対して、$M^\circledast$ を左 $A$ 加群 $\mathrm{Hom}_K(M, K)$ を $*$ で捻った右 $A$ 加群とする

$\lambda \in \Lambda_0$ に対して

$$
(D^\lambda)^\circledast \simeq D^\lambda
$$

$D^\lambda$ 上のペアリングが非退化なことから従う

$\lambda \in \Lambda, \mu \in \Lambda_0$ ならば

$$
d_{\lambda\mu} = \mathrm{dim}_K \mathrm{Hom}_A(P^\mu, C^\lambda) = \mathrm{dim}_K P^\mu \otimes_A C^{*\lambda}
$$

一般に、次が成り立つ

$A$: 体 $K$ 上の有限次元代数で、antiautomorphism $*: A \to A$ を持つ
$P$: 有限射影右 $A$ 加群
$C$: 有限右 $A$ 加群
$C^*$: $C$ を $*$ で捻った左 $A$ 加群
すべての単純右 $A$ 加群 $S$ に対して、$S^\circledast \simeq S$ とすると

$$
\mathrm{dim}_K \mathrm{Hom}_A(P, C) = \mathrm{dim}_K P \otimes_A C^*
$$

まず、$\mathrm{Hom}_K(P \otimes_A C^*, K) = \mathrm{Hom}_A(P, \mathrm{Hom}_K(C^*, K))$ だから

$$
\mathrm{dim}_K \mathrm{Hom}_A(P, C) = \mathrm{dim}_K \mathrm{Hom}_A(P, C^\circledast)
$$

を示せば良い

$$
\begin{array}{ccccc}
  \mathrm{Mod}_\mathrm{fg}\text{-}A &\xrightarrow{\mathrm{Hom}_A(P, -)}& K\text{-}\mathrm{Mod}_\mathrm{fg} && \\
  \downarrow && \downarrow &\searrow{\scriptsize{\mathrm{dim}}}& \\
  K(\mathrm{Mod}_\mathrm{fg}\text{-}A) &\xrightarrow{\mathrm{Hom}_A(P, -)}& K(K\text{-}\mathrm{Mod}_\mathrm{fg}) &\simeq& \mathbb{Z}
\end{array}
$$

だから、$K(\mathrm{Mod}_\mathrm{fg}\text{-}A)$ 内で $[C^\circledast] = [C]$ を示せば良い。$K(\mathrm{Mod}_\mathrm{fg}\text{-}A)$ は単純右 $A$ 加群の同型類たちが生成する自由アーベル群だから、仮定から、完全関手 ${}^\circledast$ が定める ${}^\circledast: K(\mathrm{Mod}_\mathrm{fg}\text{-}A) \to K(\mathrm{Mod}_\mathrm{fg}\text{-}A)$ は恒等写像

$$
c_{\lambda\mu} \coloneqq [P^\lambda : D^\mu] = \sum_{\nu} d_{\nu\lambda}d_{\nu\mu} \quad (\lambda, \mu \in \Lambda_0)
$$

特に、$c_{\lambda\mu} = c_{\mu\lambda} \ (\lambda, \mu \in \Lambda_0)$

$\lambda, \mu \in \Lambda_0$ とする。$\Lambda$ から極小元を取り除いていけば、$A$ の両側イデアルによるフィルトレーションで、部分商たちが $\{ C^{*\nu} \otimes_K C^\nu \mid \nu \in \Lambda \}$ に一致するものが作れる。$P^\lambda \otimes_A -$ は完全だから、$P^\lambda$ のフィルトレーションで、部分商たちが $\{ P^\lambda \otimes_A C^{*\nu} \otimes_K C^\nu \mid \nu \in \Lambda \}$ に一致するものが作れる

$$
\begin{aligned}
  c_{\lambda\mu} &= [P^\lambda : D^\mu] \\
  &= \sum_{\nu \in \Lambda} [P^\lambda \otimes_A C^{*\nu} \otimes_K C^\nu : D^\mu] \\
  &= \sum_{\nu \in \Lambda} c_{\nu\lambda} [C^\nu : D^\mu] \\
  &= \sum_{\nu \in \Lambda} d_{\nu\lambda}d_{\nu\mu}
\end{aligned}
$$

以下は同値
(1) $A$ は半単純
(2) $\Lambda_0 = \Lambda$ かつ $C^\lambda = D^\lambda \ (\lambda \in \Lambda)$
(3) すべての $\lambda \in \Lambda$ に対して、$C^\lambda$ 上のペアリングは非退化
(4) $\Lambda_0 = \Lambda$ かつ $d_{\lambda\mu} = \delta_{\lambda\mu} \ (\lambda, \mu \in \Lambda)$

(2) $\Leftrightarrow$ (3)
容易

(2) $\Leftrightarrow$ (4)
容易

(1) $\Rightarrow$ (4)
$c_{\lambda\lambda} = 1 \ (\lambda \in \Lambda_0)$。$\lambda \in \Lambda_0$ ならば

$$
1 = \sum_{\nu \in \Lambda} d_{\nu\lambda}^2 = 1 + \sum_{\lambda \ne \nu \in \Lambda} d_{\nu\lambda}^2
$$

だから、$d_{\nu\lambda} = 0 \ (\lambda \in \Lambda_0, \lambda \ne \nu \in \Lambda)$。よって、$C^\lambda = D^\lambda \ (\lambda \in \Lambda_0)$。$A$ は $K$ 上の分裂半単純代数だから

$$
\mathrm{dim}_K A = \sum_{\lambda \in \Lambda_0} (\mathrm{dim}_K D^\lambda)^2 = \sum_{\lambda \in \Lambda_0} (\mathrm{dim}_K C^\lambda)^2 = \sum_{\lambda \in \Lambda_0} |\mathcal{T}(\lambda)|^2
$$

Cellular 代数の定義から $\mathrm{dim}_K A = \sum_{\lambda \in \Lambda} |\mathcal{T}(\lambda)|^2$ だから、$\Lambda = \Lambda_0$

(4) $\Rightarrow$ (1)
$c_{\lambda\mu} = \delta_{\lambda\mu}$ だから、$P^\lambda = D^\lambda$。よって、$A_A$ は単純右 $A$ 加群の直和

$\Lambda$ 上の関係 $\lambda \sim_\mathrm{cell} \mu$ を、$\Lambda$ の元 $\lambda = \lambda_0, \lambda_1, \cdots, \lambda_k = \mu$ が存在して $C^{\lambda_i}$ と $C^{\lambda_{i + 1}}$ が共通の組成因子を持つことと定義する

$A = B_1 \oplus \cdots \oplus B_c$ をブロック分解とする

$$
\mathrm{Irr}(A) = \mathrm{Irr}(B_1) \sqcup \cdots \sqcup \mathrm{Irr}(B_c)
$$

有限右 $A$ 加群 $M$ がブロック $B_i$ に属するとは、$M$ の全ての組成因子が $\mathrm{Irr}(B_i)$ に入ることをいう

$\lambda \in \Lambda$ に対して、$C^\lambda$ はあるブロックに属する

$D^\mu, D^\nu \ (\mu, \nu \in \Lambda_0)$ は $C^\lambda$ の組成因子だとする。$d_{\lambda\mu}, d_{\lambda\nu} > 0$ だから

$$
c_{\mu\nu} = \sum_{\xi \in \Lambda} d_{\xi\mu}d_{\xi\nu} > 0
$$

よって、$D^\mu$, $D^\nu$ は同じブロックに属する

$\lambda, \mu \in \Lambda$ に対して
$\lambda \sim_\mathrm{cell} \mu$ $\Leftrightarrow$ $C^\lambda$, $C^\mu$ が同じブロックに属する

$\Rightarrow$
$C^\xi, C^\eta \ (\xi, \eta \in \Lambda)$ は共通の組成因子 $D$ を持つとする。$C^\xi, C^\eta$ は $D$ と同じブロックに属する

$\Leftarrow$
$C^\lambda$ の組成因子 $D^\alpha$ と $C^\mu$ の組成因子 $D^\beta$ を固定する。$D^\alpha, D^\beta$ は同じブロックに属するから、$\beta \sim_c \alpha$。よって、$\Lambda_0$ の元の列 $\alpha = \alpha_0, \alpha_1, \dots, \alpha_n = \beta$ があって、全ての $0 \le i \le n - 1$ に対して、$c_{\alpha_i\alpha_{i + 1}} > 0$。各 $0 \le i \le n - 1$ に対して

$$
\begin{aligned}
  c_{\alpha_i\alpha_{i + 1}} = \sum_{\nu \in \Lambda} d_{\nu\alpha_i}d_{\nu\alpha_{i + 1}}
\end{aligned}
$$

だから、ある $\nu_i \in \Lambda$ が存在して、$d_{\nu_i\alpha_i}, d_{\nu_i\alpha_{i + 1}} > 0$。$C^{\nu_i}$ は $D^{\alpha_i}, D^{\alpha_{i + 1}}$ を組成因子にもつから

$$
\lambda \sim_\mathrm{cell} \nu_0 \sim_\mathrm{cell} \nu_1 \sim_\mathrm{cell} \cdots \sim_\mathrm{cell} \nu_{n - 1} \sim_\mathrm{cell} \mu
$$

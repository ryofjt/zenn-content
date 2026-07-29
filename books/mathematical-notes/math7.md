---
title: "math7"
---

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

# $d_{\lambda\mu}$

$R$ は体 $K$ とし、$\#\Lambda < \infty$ とする

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

# Hecke 代数の表現論

$n \ge 1$

$R$: 可換環
$q \in R$

$\mathscr{H} \coloneqq \mathscr{H}(\mathfrak{S}_n)_{R, q}$

$\sigma \in \mathfrak{S}_n \coloneqq \mathrm{Aut}(\{ 1, \dots, n \})$ の作用を $i \mapsto (i)\sigma$ と書く。$\sigma, \tau \in \mathfrak{S}_n$ に対して

$$
(i)(\sigma\tau) \coloneqq ((i)\sigma)\tau
$$

と定義すると $\mathfrak{S}_n$ は群であり、$\{ 1, \dots, n \}$ に右から作用する。$\sigma\tau = \tau \circ \sigma$ だが、一般に群 $G$ に対して $G \simeq G^\mathrm{op}$ だから問題ない

$S \coloneqq \{ s_i \coloneqq (i, i + 1) \mid 1 \le i \le n - 1 \} \subset \mathfrak{S}_n$

$\mathbb{Z}_{\ge 0}^{\oplus \mathbb{Z}_{\ge 1}}$ の元を composition という。Composition $\mu = (\mu_1, \mu_2, \dots)$ に対して、$|\mu| \coloneqq \sum_i \mu_i$ と定義する。$n = |\mu|$ のとき、$\mu$ は $n$ の composition といい、$\mu \vDash n$ と表す

Composition $\mu$ に対して、$[\mu] \coloneqq \{ (i, j) \in \mathbb{Z}_{\ge 1}^2 \mid j \le \mu_i \}$ を $\mu$ の図形という。$(2, 3)$ の図形は

$$
\begin{array}{l}
  \boxed{\phantom{1}} \boxed{\phantom{1}} \\
  \boxed{\phantom{1}} \boxed{\phantom{1}} \boxed{\phantom{1}}
\end{array}
$$

Compostion $\mu$ に対して、$\mu$-tableau とは、全単射 $\mathfrak{t}: [\mu] \xrightarrow{\sim} \{ 1, 2, \dots, |\mu| \}$ のこと。$\mathrm{Shape}(\mathfrak{t}) \coloneqq \mu$ と表す。以下は $(2, 3)$-tableau

$$
\begin{array}{l}
  \boxed{4} \boxed{2} \\
  \boxed{1} \boxed{5} \boxed{3}
\end{array}
$$

$\mu$-tableau 全体を $\mathrm{Tab}(\mu)$ で表す

$\mu$-tableau が row standard とは、行ごとに要素が左から右に増加することをいう。以下は row standard $(2, 3)$-tableau

$$
\begin{array}{l}
  \boxed{4} \boxed{5} \\
  \boxed{1} \boxed{2} \boxed{3}
\end{array}
$$

Row standard $\mu$-tableau 全体を $\mathrm{RStd}(\mu)$ で表す

Composition $\mu$ に対して、$\mathfrak{t}^\mu$ を、上の行から順に左から右へ $1, 2, \dots, |\mu|$ を配置した row standard $\mu$-tableau とする。$\mathfrak{t}^{(2, 3)}$ は

$$
\begin{array}{l}
  \boxed{1} \boxed{2} \\
  \boxed{3} \boxed{4} \boxed{5}
\end{array}
$$

Composition $\mu$ に対して、$\mathrm{Tab}(\mu)$ には右から $\mathfrak{S}_n$ が作用する

$\mu$: composition
$\mathfrak{S}_\mu \coloneqq \mathfrak{S}_{\mu_1} \times \mathfrak{S}_{\mu_2} \times \cdots \subset \mathfrak{S}_n$ と定義する。$\mathfrak{S}_\mu$ は $S \cap \mathfrak{S}_\mu$ で生成され、$\mathscr{H}(\mathfrak{S}_\mu) = \mathscr{H}(\mathfrak{S}_{\mu_1}) \times \mathscr{H}(\mathfrak{S}_{\mu_2}) \times \cdots \subset \mathscr{H}$

$m_\mu \coloneqq \sum_{w \in \mathfrak{S}_\mu} T_w \in \mathscr{H}(\mathfrak{S}_\mu)$ と定義する。$M_\mu \coloneqq m_\mu \mathscr{H} \subset \mathscr{H}$ は右イデアル

$$
m_\mu T_w = q^{\ell(w)} m_\mu \quad (w \in \mathfrak{S}_\mu)
$$

特に、右 $\mathfrak{S}_\mu$ 加群として $m_\mu \mathscr{\mathfrak{S}_\mu} \simeq 1_\mathscr{H(\mathfrak{S}_\mu)}$

$s \in S \cap \mathfrak{S}_\mu$ に対して

$$
\begin{aligned}
  m_\mu T_s &= \sum_{w \in \mathfrak{S}_\mu, \ell(ws) > \ell(w)} T_w Ts + \sum_{w \in \mathfrak{S}_\mu, \ell(ws) < \ell(w)} T_w Ts \\
  &= \sum_{w \in \mathfrak{S}_\mu, \ell(ws) > \ell(w)} T_{ws} + \sum_{w \in \mathfrak{S}_\mu, \ell(ws) < \ell(w)} qT_{ws} + (q - 1)T_w \\
  &= \sum_{w \in \mathfrak{S}_\mu, \ell(ws) < \ell(w)} T_w + \sum_{w \in \mathfrak{S}_\mu, \ell(ws) > \ell(w)} qT_w + \sum_{w \in \mathfrak{S}_\mu, \ell(ws) < \ell(w)} (q - 1)T_w \\
  &= qm_\mu
\end{aligned}
$$

$M_\mu = m_\mu \mathscr{H}(\mathfrak{S}_\mu) \otimes_{\mathscr{H}(\mathfrak{S}_\mu)} \mathscr{H} = 1_\mathscr{H(\mathfrak{S}_\mu)} \otimes_{\mathscr{H}(\mathfrak{S}_\mu)} \mathscr{H}$

$\mathfrak{S}_\mu \backslash \mathfrak{S}_n$ の完全代表系は各軌道の中で長さが最小のものをとることで構成できた。それは

$$
D_\mu \coloneqq \{ d \in \mathfrak{S}_n \mid \mathfrak{t}^\mu d \in \mathrm{RSts}(\mu) \}
$$

これは、長さが転倒数と一致することから従う

$$
\ell(wd) = \ell(w) + \ell(d) \quad (w \in \mathfrak{S}_\mu, d \in D_\mu)
$$

だから、$wd \ge d \ (w \in \mathfrak{S}_\mu, d \in D_\mu)$。また、$T_{wd} = T_wT_d \ (w \in \mathfrak{S}_\mu, d \in D_\mu)$

$d: \mathrm{RStd}(\mu) \xrightarrow{\sim} D_\mu$ を $\mathfrak{t}^\mu d(\mathfrak{t}) = \mathfrak{t}$ で定義する

$\mu$: composition
$M^\mu \subset \mathscr{H}$ は $\{ m_\mu T_{d(\mathfrak{t})} \mid \mathfrak{t} \in \mathrm{RStd}(\mu) \} \subset \mathscr{H}$ で張られる自由 $R$ 加群。$s_i \in S$ に対して

$$
m_\mu T_{d(\mathfrak{t})} T_{s_i} = \begin{cases}
  q m_\mu T_{d(\mathfrak{t})} &\quad (\mathfrak{t}s_i \not\in \mathrm{RStd}(\mu)) \\
  m_\mu T_{d(\mathfrak{t}s_i)} &\quad (\mathfrak{t}s_i \in \mathrm{RStd}(\mu), \ell(d(\mathfrak{t}s_i)) > \ell(d(\mathfrak{t}))) \\
  q m_\mu T_{d(\mathfrak{t}s_i)} + (q - 1) m_\mu T_{d(\mathfrak{t})} &\quad (\mathfrak{t}s_i \in \mathrm{RStd}(\mu), \ell(d(\mathfrak{t}s_i)) < \ell(d(\mathfrak{t})))
\end{cases}
$$

後半のみ示す。$\mathfrak{t}s_i \not\in \mathrm{RStd}(\mu)$ $\Leftrightarrow$ $i, i + 1$ が $\mathfrak{t}$ の同じ行にある $\Leftrightarrow$ ある $s_j \in S \cap \mathfrak{S}_\mu$ が存在して、$(j)d(\mathfrak{t}) = i, (j + 1)d(\mathfrak{t}) = i + 1$。このとき、$s_jd(\mathfrak{t}) = d(\mathfrak{t})s_i$ だから

$$
m_\mu T_{d(\mathfrak{t})} T_{s_i} = m_\mu T_{d(\mathfrak{t})s_i} = m_\mu T_{s_jd(\mathfrak{t})s_i} = m_\mu T_{s_j} T_{d(\mathfrak{t})s_i} = q m_\mu T_{d(\mathfrak{t})s_i}
$$

また、$\mathfrak{t}s_i \in \mathrm{RStd}(\mu)$ とすると、$d(\mathfrak{t}s_i) = d(\mathfrak{t})s_i$

Composition $\mu, \nu$ に対して、$\mu \trianglerighteq \nu$ とは

$$
\sum_{j \le i} \mu_j \le \sum_{j \le i} \nu_j \quad (i \ge 0)
$$

が成り立つことをいう。これは composition たちの半順序を定める

$\mu$: composition
$\mathfrak{t} \in \mathrm{RStd}(\mu)$ と $0 \le m \le |\mu|$ に対して、$\mathfrak{t} \downarrow m$ とは、$\mathfrak{t}$ から $m$ より大きい要素を除いた row standard tableau のこと。$\mathfrak{s}, \mathfrak{t} \in \mathrm{RStd}(\mu)$ に対して、$\mathfrak{s} \trianglerighteq \mathfrak{t}$ とは、全ての $0 \le m \le |\mu|$ に対して、$\mathrm{Shape}(\mathfrak{s} \downarrow m) \trianglerighteq \mathrm{Shape}(\mathfrak{t} \downarrow m)$ が成り立つことをいう。これは $\mathrm{RStd}(\mu)$ 上の半順序を定める

$$
\begin{array}{l}
  \boxed{1} \boxed{3} \boxed{4} \\
  \boxed{2} \boxed{5}
\end{array}
\triangleright
\begin{array}{l}
  \boxed{2} \boxed{3} \boxed{5} \\
  \boxed{1} \boxed{4}
\end{array}
$$

$v, w \in \mathfrak{S}_n$ に対して、$v \trianglerighteq w$ を Bruhat 順序の逆で定義する

[補題]
$\mu$: composition
$\mathfrak{t} \in \mathrm{RStd}(\mu)$
$j, k$ を $\mathfrak{t}$ の異なる行の要素で、$j < k$ なものとする。$\mathfrak{s} \in \mathrm{RStd}(\mu)$ を $\mathfrak{t}(j, k)$ の各行を並べ変えたものとすると、以下は同値

(1) $d(\mathfrak{s}) \triangleright d(\mathfrak{t})$
(2) $\mathfrak{s} \triangleright \mathfrak{t}$
(3) $\mathfrak{t}$ 内で $k$ は $j$ よりも上にある

(2) $\Leftrightarrow$ (3) の対偶
$\mathfrak{t}$ 内で $k$ は $j$ よりも下にあるとする。$\downarrow j$ を考えれば良い

(3) $\Leftrightarrow$ (2) は少し考えればわかる

(3) $\Rightarrow$ (1)
$(j)d(\mathfrak{t})^{-1} > (k)d(\mathfrak{t})^{-1}$ だから $(j, k) \in T_R(d(\mathfrak{t}))$。よって、$d(\mathfrak{t})(j, k) \triangleright d(\mathfrak{t})$。$\mathfrak{s}$ は $\mathfrak{S}_\mu d(\mathfrak{t})(j, k)$ の中で $\triangleright$ に関して最大なことから従う

(1) $\Rightarrow$ (3) の対偶
$\mathfrak{t}$ 内で $k$ は $j$ よりも下にあるとする。$\mathfrak{s}(j, k)$ の各行を並べ変えたものは $\mathfrak{t}$ だから、(1) $\Rightarrow$ (3) から $d(\mathfrak{t}) \triangleright d(\mathfrak{s})$

[Tableau 判定法]
$v, w \in \mathfrak{S}_n$ に対して、以下は同値

(1) $v \le w$
(2) 任意の $1 \le l \le n$ に対して、$v_1, \dots, v_l$ を小さい順に並べ変えたものを $v^{(l)}_1, \dots, v^{(l)}_l$ とし、$w_1, \dots, w_l$ を小さい順に並べ変えたものを $w^{(l)}_1, \dots, w^{(l)}_l$ とすると、$v^{(l)}_i \le w^{(l)}_i \ (1 \le i \le l)$

(1) $\Rightarrow$ (2)
まず、$j, k \ (j < k)$ が存在して、$v = (j, k)w$ かつ $\ell(v) < \ell(w)$ が成り立つ場合を考える。$w_j > w_k$。$l \le j - 1$ または $l \ge k$ の場合は明らか。$j \le l \le k - 1$ の場合も容易。一般の場合は、$v = v_0, v_1, \dots, v_m = w$ が存在して、$v_i v_{i + 1}^{-1} \in T_L(v_{i + 1})$ が成り立つことから従う

(2) $\Rightarrow$ (1)
$\ell(w)$ に関する帰納法を使う。$\ell(w) = 0$ の場合は容易。$\ell(w) \ge 1$ とする。$v \ne w$ として良い。$j$ を $v_j \ne w_j$ となる最小の位置とする。$l = j$ の場合を考えれば、$v_j < w_j$。$k > j$ を $v_j \le w_k < w_j$ となる位置のうち $w_k$ が最大のものとする。$\tilde{w} \coloneqq (j, k)w$ とすると、$\ell(\tilde{w}) < \ell(w)$。(2) の意味で $\tilde{w}$ が $v$ 以上なことを示せば良い。$l \le j - 1$ または $l \ge k$ ならば明らか。$j \le l \le k - 1$ とすると

$$
\begin{aligned}
  v^{(l)} &= (\dots, v_j, x_1, x_2, \dots, x_p, \dots) \\
  w^{(l)} &= (\dots, y_1, y_2, \dots, y_p, w_j, \dots) \\
  \tilde{w}^{(l)} &= (\dots, w_k, y_1, y_2, \dots, y_p, \dots)
\end{aligned}
$$

ある $1 \le q \le p$ が存在して、$x_q > y_q$ と仮定すると、$k$ の取り方に矛盾する

$\mu$: composition
$\mathfrak{s}, \mathfrak{t} \in \mathrm{RStd}(\mu)$

$$
\mathfrak{s} \triangleright \mathfrak{t} \Leftrightarrow d(\mathfrak{s}) \triangleright d(\mathfrak{t})
$$

$\Leftarrow$

$\Rightarrow$

# Murphy 基底

Composition $\lambda$ が分割とは、$\lambda_1 \ge \lambda_2 \ge \cdots$ が成り立つことをいう。$n = |\lambda|$ のとき、$\lambda \vdash n$ と表す

分割 $\lambda$ に対して、$\lambda$-tableau が standard とは、行ごとに要素が左から右に増加し、列ごとに要素が上から下に増加することをいう。以下は standard $\lambda$-tableau

$$
\begin{array}{l}
  \boxed{1} \boxed{3} \boxed{4} \\
  \boxed{2} \boxed{5}
\end{array}
$$

Standard $\lambda$-tableau 全体を $\mathrm{Std}(\lambda)$ で表す

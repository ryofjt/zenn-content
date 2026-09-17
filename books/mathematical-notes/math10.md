---
title: "math10"
---

# Gram 行列

$R$: 可換環

$M$: 有限自由加群
対称なペアリング $\langle -, - \rangle: M \times M \to R$ を固定する

自由基底 $e_1, \dots, e_m \in M$ を固定すると、Gram 行列

$$
G \coloneqq (\langle e_i, e_j \rangle)_{1 \le i, j \le m} \in M_m(R)
$$

が定まる。$\mathrm{det} G$ を Gram 行列式という

[Prop]
$P \in GL_m(R)$
基底 $Pe_1, \dots, Pe_m$ に関する Gram 行列を $G'$ とすると

$$
G' = PGP^T
$$

$G'_{il} = \langle Pe_i, Pe_l \rangle = \sum_{j, k} p_{ij} \langle e_j, e_k \rangle p_{lk}$

[Prop]
$M$ のペアリングが完全 ($M \to \mathrm{Hom}_R(M, R)$ が同型) なことと、Gram 行列が可逆なことは同値

$M$ の基底 $e_1, \dots, e_m$ と $\mathrm{Hom}_R(M, R)$ の双対基底 $e_1^*, \dots, e_m^*$ に関する $M \to \mathrm{Hom}_R(M, R)$ の表現行列は Gram 行列

[Prop]
$R$: 整域
$M$ のペアリングが非退化 ($M \to \mathrm{Hom}_R(M, R)$ が単射) なことと、Gram 行列式が $0$ でないことは同値

次を示せばよい

[Lem]
$R$: 整域
$A \in M_n(R)$
$A$ が定める写像 $R^n \to R^n$ が単射なことと $\mathrm{det} A \ne 0$ は同値

$\Rightarrow$
$K \coloneqq \mathrm{Frac} R$ とすると、$K$ は $R$ 上 flat だから、$K^n \to K^n$ も単射

$\Leftarrow$
$K^n \to K^n$ は単射で、$R^n \subset K^n$ なことから従う

# $G^\lambda_\omega$

$R$: 可換環
$q \in R^\times$
$e$ は一般とする

$\lambda \vdash n$

$$
G^\lambda_\omega \coloneqq \mathrm{det}[(\langle m_\mathfrak{s}, m_\mathfrak{t} \rangle)_{\mathfrak{s}, \mathfrak{t} \in \mathrm{Std}(\lambda)}] \in R
$$

$R$ が体かつ $e > n$ ならば、$G^\lambda_\omega = \mathrm{det}[(\langle f_\mathfrak{s}, f_\mathfrak{t} \rangle)_{\mathfrak{s}, \mathfrak{t} \in \mathrm{Std}(\lambda)}] = \prod_{\mathfrak{t} \in \mathrm{Std}(\lambda)} \langle f_\mathfrak{t}, f_\mathfrak{t} \rangle$

$R$ は体かつ $e \ge n$
$\lambda \vdash n$
$\mu \vDash n$
$\mathsf{T} \in \mathrm{SStd}(\lambda, \mu)$
$(i, j) \in [\lambda]$ に対して、$\Gamma_\mathsf{T}(i, j) \subset [\lambda]$ を、$(i, j)$ より左側の列で要素 $\mathsf{T}_{ij}$ を持たない各列から、$\mathsf{T}_{ij}$ 未満の最大の要素の位置を 1 つずつ集めた集合とする

$$
\gamma_\mathsf{T} \coloneqq \prod_{(i, j) \in [\lambda]} \prod_{(k, l) \in \Gamma_\mathsf{T}(i, j)} \frac{[(j - i) - (l - k) + 1]_q}{[(j - i) - (l - k)]_q}
$$

$1 \le (j - i) - (l - k) \le n - 1$ に注意

$$
\mathfrak{t} = \begin{array}{l}
  \boxed{1}\boxed{2}\boxed{4} \\
  \boxed{3}\boxed{5}
\end{array}
$$

ならば、$\gamma_\mathfrak{t} = \frac{[2]_q}{[1]_q} \cdot \frac{[2]_q[4]_q}{[1]_q[3]_q} \cdot \frac{[2]_q}{[1]_q}$

$$
\mathsf{T} = \begin{array}{l}
  \boxed{1}\boxed{1}\boxed{2} \\
  \boxed{2}\boxed{3}
\end{array}
$$

ならば、$\gamma_\mathsf{T} = \frac{[2]_q}{[1]_q} \cdot \frac{[2]_q}{[1]_q}$

$R$ は可換環かつ $e$ は一般
$\lambda \vdash n$
$\gamma_{\mathfrak{t}^\lambda} = [\gamma]_q^!$

$R = \mathbb{Q}(q)$ で示せば良い。$n$ に関する帰納法から従う

$R$ は体かつ $e \ge n$
$\lambda \vdash n$
$\mathfrak{t} \in \mathrm{Std}(\lambda)$
$\mathfrak{t}$ で $i + 1$ は $i$ より上の行にあるとする。$\alpha \coloneqq [\mathrm{res}_\mathfrak{t}(i + 1) - \mathrm{res}_\mathfrak{t}(i)]_q$ とすると

$$
\gamma_\mathfrak{t} = q^{-1}(q + \alpha^{-1})(1 - \alpha^{-1})\gamma_{\mathfrak{t}s_i}
$$

$\mathfrak{t}$ での $i + 1, i$ の位置を $(a, b), (c, d)$ とする。$x \ne (a, b)$ ならば $\Gamma_\mathfrak{t}(x) = \Gamma_{\mathfrak{t}s_i}(x)$ であり、$\Gamma_\mathfrak{t}(a, b) \sqcup \{(c - 1, d)\} = \Gamma_{\mathfrak{t}s_i}(a, b) \sqcup \{(c, d)\}$ だから

$$
\frac{[\mathrm{res}_\mathfrak{t}(i + 1) - \mathrm{res}_\mathfrak{t}(i)]_q}{[\mathrm{res}_\mathfrak{t}(i + 1) - \mathrm{res}_\mathfrak{t}(i) - 1]_q} \gamma_\mathfrak{t} = \frac{[\mathrm{res}_\mathfrak{t}(i + 1) - \mathrm{res}_\mathfrak{t}(i) + 1]_q}{[\mathrm{res}_\mathfrak{t}(i + 1) - \mathrm{res}_\mathfrak{t}(i)]_q} \gamma_{\mathfrak{t}s_i}
$$

$$
\begin{aligned}
  \frac{[\mathrm{res}_\mathfrak{t}(i + 1) - \mathrm{res}_\mathfrak{t}(i) + 1]_q[\mathrm{res}_\mathfrak{t}(i + 1) - \mathrm{res}_\mathfrak{t}(i) - 1]_q}{[\mathrm{res}_\mathfrak{t}(i + 1) - \mathrm{res}_\mathfrak{t}(i)]_q^2} &= \frac{(q\alpha + 1)(q^{-1}\alpha - q^{-1})}{\alpha^2} \\
  &= q^{-1}(q + \alpha^{-1})(1 - \alpha^{-1})
\end{aligned}
$$

$R$ は体かつ $e > n$
$\lambda \vdash n$
$\mathfrak{t} \in \mathrm{Std}(\lambda)$

$$
\langle f_\mathfrak{t}, f_\mathfrak{t} \rangle = q^{\ell(d(\mathfrak{t}))} \gamma_\mathfrak{t}
$$

$d(\mathfrak{t})$ に関する帰納法を使う。$\mathfrak{t} = \mathfrak{t}^\lambda$ ならば

$$
\begin{aligned}
  \langle f_{\mathfrak{t}^\lambda}, f_{\mathfrak{t}^\lambda} \rangle m_\lambda &= \langle m_{\mathfrak{t}^\lambda}, m_{\mathfrak{t}^\lambda} \rangle m_\lambda \\
  &\equiv m_\lambda^2 \\
  &= m_\lambda \sum_{w \in \mathfrak{S}_\lambda} T_w \\
  &= m_\lambda \sum_{w \in \mathfrak{S}_\lambda} q^{\ell(w)} \\
  &= [\lambda]_q^! m_\lambda
\end{aligned}
$$

$d(\mathfrak{t}) > 0$ とする。ある $i$ が存在して、$\mathfrak{t}$ で $i + 1$ は $i$ より上の行にある。$f_{\mathfrak{t}s_i}T_{s_i} = f_\mathfrak{t} - \alpha^{-1}f_{\mathfrak{t}s_i}$ だから、$f_\mathfrak{t} = f_{\mathfrak{t}s_i}T_{s_i} + \alpha^{-1}f_{\mathfrak{t}s_i}$

$$
\begin{aligned}
  \langle f_\mathfrak{t}, f_\mathfrak{t} \rangle &= \langle f_{\mathfrak{t}s_i}T_{s_i} + \alpha^{-1}f_{\mathfrak{t}s_i}, f_{\mathfrak{t}s_i}T_{s_i} + \alpha^{-1}f_{\mathfrak{t}s_i} \rangle \\
  &= \langle f_{\mathfrak{t}s_i}T_{s_i}^2, f_{\mathfrak{t}s_i} \rangle + 2\alpha^{-1}\langle f_{\mathfrak{t}s_i}T_{s_i}, f_{\mathfrak{t}s_i} \rangle + \alpha^{-2}\langle f_{\mathfrak{t}s_i}, f_{\mathfrak{t}s_i} \rangle \\
  &= (q + \alpha^{-2})\langle f_{\mathfrak{t}s_i}, f_{\mathfrak{t}s_i} \rangle + (2\alpha^{-1} + q - 1)\langle f_{\mathfrak{t}s_i}T_{s_i}, f_{\mathfrak{t}s_i} \rangle \\
  &= (q + \alpha^{-2})\langle f_{\mathfrak{t}s_i}, f_{\mathfrak{t}s_i} \rangle - (2\alpha^{-1} + q - 1)\alpha^{-1}\langle f_{\mathfrak{t}s_i}, f_{\mathfrak{t}s_i} \rangle \\
  &= (q + \alpha^{-1})(1 - \alpha^{-1})\langle f_{\mathfrak{t}s_i}, f_{\mathfrak{t}s_i} \rangle
\end{aligned}
$$

[Cor]
$R$ は可換環かつ $e$ は一般
$\lambda \vdash n$

$$
G^\lambda_\omega = \prod_{\mathfrak{t} \in \mathrm{Std}(\lambda)} q^{\ell(d(\mathfrak{t}))} \gamma_\mathfrak{t}
$$

$R = \mathbb{Q}(q)$ の場合は明らか。一般の場合は、特殊化を考えれば良い

# $G^\lambda_\mu$

$R$: 可換環
$q \in R^\times$
$e$ は一般とする

$d \ge 1$
$\lambda \in \Lambda^+(d, n)$

$W^\lambda = \mathrm{span}_R \{ \varphi_\mathsf{T} \mid \mathsf{T} \in \mathcal{T}_0(\lambda) \}$ だった

$\mu \in \Lambda(d, n)$

$$
W^\lambda_\mu \coloneqq W^\lambda 1_{M^\mu} = \mathrm{span}_R \{ \varphi_\mathsf{T} \mid \mathsf{T} \in \mathrm{SStd}(\lambda, \mu) \}
$$

$W^\lambda_\mu \hookrightarrow \mathrm{Hom}_\mathscr{H}(M^\mu, S^\lambda)$ がある

$$
G^\lambda_\mu \coloneqq \mathrm{det}[(\langle \varphi_{\mathsf{S}}, \varphi_{\mathsf{T}} \rangle)_{\mathsf{S}, \mathsf{T} \in \mathrm{SStd}(\lambda, \mu)}] \in R
$$

$d \ge n$ とすると、$W^\lambda_\omega = S^\lambda$ だから、以前の定義と整合的

$1 \le k \le d$

$$
[L_{\mathfrak{t}^\mu_{k1}} + \cdots + L_{\mathfrak{t}^\mu_{k\mu_k}}, m_\mu] = 0
$$

$s_i \in \mathfrak{S}_\mu \cap S$ に対して、$[L_{\mathfrak{t}^\mu_{k1}} + \cdots + L_{\mathfrak{t}^\mu_{k\mu_k}}, T_{s_i}] = 0$ を示せば良い。$i$ が $\mathfrak{t}^\mu$ の $k$ 行目にない場合は明らか。$i$ が $\mathfrak{t}^\mu$ の $k$ 行目にある場合は、$[L_i + L_{i + 1}, T_{s_i}] = 0$ から従う

$1 \le k \le d$ に対して、$L^\mu_k: M^\mu \to M^\mu$ を以下で定義する

$$
L^\mu_k(m_\mu h) \coloneqq (L_{\mathfrak{t}^\mu_{k1}} + \cdots + L_{\mathfrak{t}^\mu_{k\mu_k}})m_\mu h = m_\mu(L_{\mathfrak{t}^\mu_{k1}} + \cdots + L_{\mathfrak{t}^\mu_{k\mu_k}})h \in M^\mu
$$

$\mathrm{RStd}(\lambda, \mu)$ 上の全順序 $\mathsf{S} \trianglerighteq \mathsf{T}$ を、任意の $k$ に対して、$\mathrm{Shape}(\mathsf{S} \downarrow k) \trianglerighteq \mathrm{Shape}(\mathsf{T} \downarrow k)$ が成り立つことと定義する

$\mathsf{S} \trianglerighteq \mathsf{T}$ $\Leftrightarrow$ $\mathrm{first}(\mathsf{S}) \trianglerighteq \mathrm{first}(\mathsf{T})$

$\Rightarrow$ を示せば良い。対偶を示す。$\mathfrak{s} \coloneqq \mathrm{first}(\mathsf{S})$, $\mathfrak{t} \coloneqq \mathrm{first}(\mathsf{T})$。$\mathrm{Shape}(\mathfrak{s} \downarrow k) \triangleleft \mathrm{Shape}(\mathfrak{t} \downarrow k)$ が成り立つ最小の $k$ をとる。$\mathfrak{s}, \mathfrak{t}$ で $k$ のある行を $a, b$ とすると、$a > b$。また、ある $a > c \ge b$ が存在して、$\sum_{i \le c} \mathrm{Shape}(\mathfrak{s} \downarrow k - 1)_i = \sum_{i \le c} \mathrm{Shape}(\mathfrak{t} \downarrow k - 1)_i$。$\mathfrak{t}^\mu$ で $k$ がある行の最後の要素を $l$ とする

$$
\sum_{i \le c} \mathrm{Shape}(\mathfrak{s} \downarrow l)_i = \sum_{i \le c} \mathrm{Shape}(\mathfrak{s} \downarrow k - 1)_i = \sum_{i \le c} \mathrm{Shape}(\mathfrak{t} \downarrow k - 1)_i < \sum_{i \le c} \mathrm{Shape}(\mathfrak{t} \downarrow l)_i
$$

また、$\mathfrak{s} \trianglerighteq \mathfrak{t}$ $\Rightarrow$ $\mu(\mathfrak{s}) \trianglerighteq \mu(\mathfrak{t})$

$\mathsf{T} \in \mathrm{SStd}(\lambda, \mu)$

$$
[\mathrm{res}_\mathsf{T}(k)]_q \coloneqq \sum_{(i, j) \in [\lambda], \mathsf{T}_{ij} = k} [j - i]_q \in R \quad (1 \le k \le d)
$$

「$\mathrm{res}_\mathsf{T}(k)$」は定義されないことに注意

$\mathsf{T} \in \mathrm{SStd}(\lambda, \mu)$
$1 \le k \le d$

$$
\varphi_\mathsf{T} L^\mu_k \in [\mathrm{res}_\mathsf{T}(k)]_q \varphi_\mathsf{T} + \sum_{\mathsf{S} \in \mathrm{SStd}(\lambda, \mu), \mathsf{S} \triangleright \mathsf{T}} R \varphi_\mathsf{S}
$$

$\mathfrak{t} \coloneqq \mathrm{last}(\mathsf{T})$

$$
\begin{aligned}
  (\varphi_{\mathsf{T}^\lambda\mathsf{T}} L^\mu_k)(m_\mu) &= \varphi_{\mathsf{T}^\lambda\mathsf{T}}(m_\mu(L_{\mathfrak{t}^\mu_{k1}} + \cdots + L_{\mathfrak{t}^\mu_{k\mu_k}})) \\
  &= m_{\mathsf{T}^\lambda\mathsf{T}}(L_{\mathfrak{t}^\mu_{k1}} + \cdots + L_{\mathfrak{t}^\mu_{k\mu_k}}) \\
  &= (m_{\mathfrak{t}^\lambda\mathfrak{t}} + \sum_{\mathfrak{s} \in \mu^{-1}(\mathsf{T}), \mathfrak{s} \triangleright \mathfrak{t}} m_{\mathfrak{t}^\lambda\mathfrak{s}})(L_{\mathfrak{t}^\mu_{k1}} + \cdots + L_{\mathfrak{t}^\mu_{k\mu_k}}) \\
  &\in [\mathrm{res}_\mathsf{T}(k)]_q m_{\mathfrak{t}^\lambda\mathfrak{t}} + \sum_{\mathfrak{s} \triangleright \mathfrak{t}} R m_{\mathfrak{t}^\lambda\mathfrak{s}}
\end{aligned}
$$

$(\varphi_{\mathsf{T}^\lambda\mathsf{T}} L^\mu_k)(m_\mu) \in \bigoplus_{\mathsf{S} \in \mathrm{SStd}(\lambda, \mu)} R m_{\mathsf{T}^\lambda\mathsf{S}}$ だから

$$
(\varphi_{\mathsf{T}^\lambda\mathsf{T}} L^\mu_k)(m_\mu) \in [\mathrm{res}_\mathsf{T}(k)]_q m_{\mathsf{T}^\lambda\mathsf{T}} + \sum_{\mathsf{S} \in \mathrm{SStd}(\lambda, \mu), \mathsf{S} \triangleright \mathsf{T}} R m_{\mathsf{T}^\lambda\mathsf{S}}
$$

$R = \mathbb{Z}[q, q^{-1}]$
$\mathrm{SStd}(\lambda, \mu) \ni \mathsf{T} \mapsto ([\mathrm{res}_\mathsf{T}(k)]_q)_{1 \le k \le d} \in K^d$ は単射

$\mathsf{S}, \mathsf{T} \in \mathrm{SStd}(\lambda, \mu)$ は $[\mathrm{res}_\mathsf{S}(k)]_q = [\mathrm{res}_\mathsf{T}(k)]_q \ (1 \le k \le d)$ を満たすとする。$\mathsf{S} \downarrow k = \mathsf{T} \downarrow k$ を $k$ に関する帰納法で示す。$k = 0$ の場合は明らか。$k \ge 1$ とする。$\{ (i, j) \in [\lambda] \mid \mathsf{T}_{ij} = k \} \ni (i, j) \mapsto j - i \in \mathbb{Z}$ は単射なことから従う

$R = \mathbb{Q}(q)$

$$
F_\mathsf{T} \coloneqq \prod_{k = 1}^d \prod_{\substack{\mathsf{S} \in \mathrm{SStd}(\lambda, \mu) \\
[\mathrm{res}_\mathsf{S}(k)]_q \ne [\mathrm{res}_\mathsf{T}(k)]_q}} \frac{L^\mu_k - [\mathrm{res}_\mathsf{S}(k)]_q}{[\mathrm{res}_\mathsf{T}(k)]_q - [\mathrm{res}_\mathsf{S}(k)]_q} \in \mathrm{End}_\mathscr{H}(M^\mu)
$$

$\Psi: R[L^\mu_1, \dots, L^\mu_d] \to \mathrm{End}_R(W^\lambda_\mu)$ は分離的だから

$$
\mathrm{Im}\Phi \ni \Phi(L^\mu_k) \mapsto ([\mathrm{res}_\mathsf{T}(k)]_q)_{\mathsf{T} \in \mathrm{SStd}(\lambda, \mu)} \in K^{\times \mathrm{SStd}(\lambda, \mu)}
$$

は $K$ 代数の同型。$\Phi(F_\mathsf{T})$ は $\varepsilon_\mathsf{T} \in K^{\times \mathrm{SStd}(\lambda, \mu)}$ に対応する原始的冪等元

$$
\psi_\mathsf{T} \coloneqq \varphi_\mathsf{T}F_\mathsf{T} \in W^\lambda_\mu
$$

とすると以下が成り立つ

(1) $\psi_\mathsf{T} \in \varphi_\mathsf{T} + \sum_{\mathsf{S} \in \mathrm{SStd}(\lambda, \mu), \mathsf{S} \triangleright \mathsf{T}} R \varphi_\mathsf{S}$
(2) $\psi_\mathsf{T}L^\mu_k = [\mathrm{res}_\mathsf{T}(k)]_q \psi_\mathsf{T} \quad (1 \le k \le d)$
(3) $\mathsf{S} \in \mathrm{SStd}(\lambda, \mu)$ とすると、$\psi_\mathsf{T}F_\mathsf{S} = \delta_{\mathsf{S}\mathsf{T}}\psi_\mathsf{T}$

$\mathsf{S} \ne \mathsf{T}$ ならば $\langle \psi_\mathsf{S}, \psi_\mathsf{T} \rangle = 0$

$\langle \psi_\mathsf{S}, \psi_\mathsf{T} \rangle = \langle \psi_\mathsf{S}F_\mathsf{S}, \psi_\mathsf{T} \rangle = \langle \psi_\mathsf{S}, \psi_\mathsf{T}F_\mathsf{S} \rangle = 0$

$R = \mathbb{Q}(q)$

$$
G^\lambda_\mu = \prod_{\mathsf{T} \in \mathrm{SStd}(\lambda, \mu)} \langle \psi_\mathsf{T}, \psi_\mathsf{T} \rangle
$$

以降、$d \ge n$ とする

$\pi_\mu: M^\omega \ni h \mapsto m_\mu h \in M^\mu$, $\iota_\mu: M^\mu \hookrightarrow M^\omega$ とする。それぞれ $m_\mu \in M^\mu \cap M^{*\omega}$, $m_\mu \in M^{\omega} \cap M^{*\mu}$ に対応するから、$\pi_\mu^* = \iota_\mu$

$\mathsf{T} \in \mathrm{SStd}(\lambda, \mu)$

$$
\psi_\mathsf{T} \pi_\mu \in \psi_{\mathrm{last}(\mathsf{T})} + \sum_{\mathfrak{s} \in \mathrm{Std}(\lambda), \mathfrak{s} \triangleright \mathrm{last}(\mathsf{T})} R \psi_\mathfrak{s}
$$

$$
\begin{aligned}
  (\psi_\mathsf{T} \pi_\mu)(1) &= \psi_\mathsf{T}(m_\mu) \\
  &\in m_{\mathsf{T}^\lambda\mathsf{T}} + \sum_{\mathsf{S} \in \mathrm{SStd}(\lambda, \mu), \mathsf{S} \triangleright \mathsf{T}} R m_{\mathsf{T}^\lambda\mathsf{S}} \\
  &\subset m_{\mathfrak{t}^\lambda\mathrm{last}(\mathsf{T})} + \sum_{\mathfrak{s} \in \mathrm{Std}(\lambda), \mathfrak{s} \triangleright \mathrm{last}(\mathsf{T})} R m_{\mathfrak{t}^\lambda\mathfrak{s}}
\end{aligned}
$$

$R$ は体かつ $e \ge n$
$\mathfrak{t} \in \mathrm{Std}(\lambda)$ は $\mu(\mathfrak{t}) \in \mathrm{SStd}(\lambda, \mu)$ だとする。$(i, j) \in [\lambda]$ に対して

$$
P^\mu_\mathfrak{t}(i, j) \coloneqq \{ (k, l) \in [\lambda] \mid l < j, \mathfrak{t}_{kl} < \mathfrak{t}_{ij}, \mathsf{T}_{kl} = \mathsf{T}_{ij} \}
$$

$$
\pi^\mu_\mathfrak{t} \coloneqq \prod_{(i, j) \in [\lambda]} \prod_{(k, l) \in P^\mu_\mathfrak{t}(i, j)} \frac{[(j - i) - (l - k) + 1]_q}{[(j - i) - (l - k)]_q}
$$

$1 \le (j - i) - (l - k) \le n - 1$ に注意

$$
\mathsf{T} = \begin{array}{l}
  \boxed{1}\boxed{1}\boxed{2} \\
  \boxed{2}\boxed{3}
\end{array}
$$

$$
\mathfrak{t} \coloneqq \mathrm{last}(\mathsf{T}) = \begin{array}{l}
  \boxed{1}\boxed{2}\boxed{4} \\
  \boxed{3}\boxed{5}
\end{array}
$$

ならば、$\pi^\mu_\mathfrak{t} = \frac{[2]_q}{[1]_q} \cdot \frac{[4]_q}{[3]_q}$

$\mathsf{T} \in \mathrm{SStd}(\lambda, \mu)$
(1) $\pi^\mu_{\mathrm{first}(\mathsf{T})} = [\lambda d(\mathrm{first}(\mathsf{T})) \cap \mu]_q^!$
(2) $\gamma_\mathfrak{t} = \pi^\mu_\mathfrak{t} \gamma_\mathsf{T}$

$\lambda d(\mathrm{first}(\mathsf{T})) \cap \mu$ は、$\mathfrak{t}^\mu$ の $r$ 行目かつ $\mathrm{first}(\mathsf{T})$ の $s$ 行目にある数字の個数を $c_{rs}$ とすると、$(c_{11}, \dots, c_{1d}, \dots, c_{d1}, \dots, c_{dd})$ から ($0$ を除いた) $n$ の composition だった

(1), (2) ともに定義から容易

[Lemma]
$\mathfrak{t} \in \mathrm{Std}(\lambda)$
$\mu(\mathfrak{t}) \not\in \mathrm{SStd}(\lambda, \mu)$
$s_1, \dots, s_k \in \mathfrak{S}_\mu \cap S$ と $i$ が存在して、$\mathfrak{t}s_1 \cdots s_j \in \mathrm{Std}(\lambda)$ かつ $\ell(d(\mathfrak{t}s_1 \cdots s_k)) = \ell(d(\mathfrak{t})) + k$ であり、$i, i + 1$ は $\mathfrak{t}s_1 \cdots s_k$ 内で同じ列かつ $\mathfrak{t}^\mu$ 内で同じ行にある

ある $i, j \ (i < j)$ が存在して、$\mathfrak{t}$ 内で同じ列かつ $\mathfrak{t}^\mu$ 内で同じ行にある。$j$ を取り替えて、$i, j$ は $\mathfrak{t}$ 内で隣接するとしてよい。$j - i$ に関する帰納法を使う。$j - i = 1$ の場合は明らか。$j - i > 1$ とする。$i + 1, \dots, j - 1$ のうち $i, j$ よりも左側にあるもの全体を $X$ とし、右側にあるもの全体を $Y$ とする。$X = \emptyset$ ならば、$\mathfrak{t} \prec \mathfrak{t}s_{j - 1}$ を考えればよい。$X \ne \emptyset$ とする。さらに、$\min X$ に関する帰納法を使う。$\min X = i + 1$ ならば、$\mathfrak{t} \prec \mathfrak{t}s_i$ を考えればよい。$\min X > i + 1$ とする。$\mathfrak{t} \prec \mathfrak{t}s_{\min X - 1}$ を考えればよい

[Lemma]
$R$ は可換環かつ $e$ は一般
$\mathfrak{t} \in \mathrm{Std}(\lambda)$, $\mathsf{T} \coloneqq \mu(\mathfrak{t})$
(a) $\mathsf{T} \in \mathrm{SStd}(\lambda, \mu)$ ならば

$$
\varphi_\mathfrak{t}\iota_\mu = q^{\ell(d(\mathfrak{t})) - \ell(d(\mathrm{first}(\mathsf{T})))} \pi^\mu_{\mathrm{first}(\mathsf{T})} \varphi_\mathsf{T}
$$

${}$(b) $\mathsf{T} \not\in \mathrm{SStd}(\lambda, \mu)$ ならば

$$
\varphi_\mathfrak{t}\iota_\mu \in \sum_{\mathsf{S} \in \mathrm{SStd}(\lambda, \mu), \mathsf{S} \triangleright \mathsf{T}} R \varphi_\mathsf{S}
$$

(a)
$(\varphi_{\mathsf{T}^\lambda\mathfrak{t}}\iota_\mu)(m_\mu) = \varphi_{\mathsf{T}^\lambda\mathfrak{t}}(m_\mu) = m_{\mathfrak{t}^\lambda\mathfrak{t}}m_\mu$。まず、$\mathfrak{t} = \mathrm{first}(\mathsf{T})$ の場合を示す。$\nu \coloneqq \lambda d(\mathrm{first}(\mathsf{T})) \cap \mu$ とすると

$$
\begin{aligned}
  m_{\mathfrak{t}^\lambda\mathrm{first}(\mathsf{T})}m_\mu &= m_{\mathfrak{t}^\lambda\mathrm{first}(\mathsf{T})} \sum_{w \in \mathfrak{S}_\mu} T_w \\
  &= m_{\mathfrak{t}^\lambda\mathrm{first}(\mathsf{T})} \sum_{v \in \mathfrak{S}_\nu, x \in \mathscr{D}_\nu \cap \mathfrak{S}_\mu} T_v T_x \\
  &= m_{\mathfrak{t}^\lambda\mathrm{first}(\mathsf{T})} \sum_{v \in \mathfrak{S}_\nu, x \in \mathscr{D}_\nu \cap \mathfrak{S}_\mu} q^{\ell(v)} T_x \\
  &= [\nu]_q^! m_{\mathfrak{t}^\lambda\mathrm{first}(\mathsf{T})} \sum_{x \in \mathscr{D}_\nu \cap \mathfrak{S}_\mu} T_x \\
  &= [\nu]_q^! m_{\mathfrak{t}^\lambda\mathsf{T}}
\end{aligned}
$$

次に、$\mathfrak{t}$ が一般の場合を示す。$w \in \mathfrak{S}_\mu$ が (一意的に) 存在して、$\mathfrak{t} = \mathrm{first}(\mathsf{T})w$ かつ $\ell(d(\mathfrak{t})) = \ell(d(\mathrm{first}(\mathsf{T}))) + \ell(w)$ だから

$$
m_{\mathfrak{t}^\lambda\mathfrak{t}}m_\mu = m_{\mathfrak{t}^\lambda\mathrm{first}(\mathsf{T})} T_w m_\mu = q^{\ell(w)} m_{\mathfrak{t}^\lambda\mathrm{first}(\mathsf{T})}m_\mu
$$

(b)
$R = \mathbb{Z}[q, q^{-1}]$ として良い。$\mathsf{T}$ について半順序 $\trianglerighteq$ に関する帰納法を使う。$\mathsf{T} = \mathsf{T}^\lambda$ の場合は、semistandard だから、示すことはない。$\mathsf{T} \not\in \mathrm{SStd}(\lambda, \mu)$ とする。$w \in \mathfrak{S}_\mu$ と $i$ が存在して、$\mathfrak{t}w \in \mathrm{Std}(\lambda)$ かつ $\ell(d(\mathfrak{t}w)) = \ell(d(\mathfrak{t})) + \ell(w)$ であり、$i, i + 1$ は $\mathfrak{t}w$ 内で同じ列かつ $\mathfrak{t}^\mu$ 内で同じ行にある。よって、$i$ が存在して、$i, i + 1$ は $\mathfrak{t}$ 内で同じ列かつ $\mathfrak{t}^\mu$ 内で同じ行にあるとしてよい

$$
m_{\mathfrak{t}^\lambda\mathfrak{t}}T_{s_i} \in -m_{\mathfrak{t}^\lambda\mathfrak{t}} + \sum_{\mathfrak{s} \in \mathrm{Std}(\lambda), \mathfrak{s} \triangleright \mathfrak{t}} R m_{\mathfrak{t}^\lambda\mathfrak{s}} + \check{\mathscr{H}}^\lambda
$$

だから、$\bmod \ \check{\mathscr{H}}^\lambda$ で

$$
\begin{aligned}
  q m_{\mathfrak{t}^\lambda\mathfrak{t}} m_\mu &= m_{\mathfrak{t}^\lambda\mathfrak{t}} T_{s_i} m_\mu \\
  &\equiv -m_{\mathfrak{t}^\lambda\mathfrak{t}} m_\mu + \sum_{\mathfrak{s} \in \mathrm{Std}(\lambda), \mathfrak{s} \triangleright \mathfrak{t}} r_\mathfrak{s} m_{\mathfrak{t}^\lambda\mathfrak{s}} m_\mu \\
  &= -m_{\mathfrak{t}^\lambda\mathfrak{t}} m_\mu + \sum_{\mathfrak{s} \in \mathrm{Std}(\lambda), \mu(\mathfrak{s}) = \mathsf{T}, \mathfrak{s} \triangleright \mathfrak{t}} r_\mathfrak{s} m_{\mathfrak{t}^\lambda\mathfrak{s}} m_\mu + \sum_{\mathfrak{s} \in \mathrm{Std}(\lambda), \mu(\mathfrak{s}) \triangleright \mathsf{T}} r_\mathfrak{s} m_{\mathfrak{t}^\lambda\mathfrak{s}} m_\mu \\
  &= \left(-1 + \sum_{\mathfrak{s} \in \mathrm{Std}(\lambda), \mu(\mathfrak{s}) = \mathsf{T}, \mathfrak{s} \triangleright \mathfrak{t}} r_\mathfrak{s} q^{\ell(d(\mathfrak{s})) - \ell(d(\mathfrak{t}))}\right) m_{\mathfrak{t}^\lambda\mathfrak{t}} m_\mu + \sum_{\mathfrak{s} \in \mathrm{Std}(\lambda), \mu(\mathfrak{s}) \triangleright \mathsf{T}} r_\mathfrak{s} m_{\mathfrak{t}^\lambda\mathfrak{s}} m_\mu
\end{aligned}
$$

帰納法の仮定から

$$
\begin{aligned}
  f m_{\mathfrak{t}^\lambda\mathfrak{t}} m_\mu &\equiv \sum_{\mathfrak{s} \in \mathrm{Std}(\lambda), \mu(\mathfrak{s}) \triangleright \mathsf{T}} r_\mathfrak{s} m_{\mathfrak{t}^\lambda\mathfrak{s}} m_\mu \\
  &= \sum_{\mathsf{S} \in \mathrm{SStd}(\lambda, \mu), \mathsf{S} \triangleright \mathsf{T}} r_\mathsf{S} m_{\mathsf{T}^\lambda\mathsf{S}}
\end{aligned}
$$

ただし、$f \in \mathbb{Z}[q, q^{-1}]$ は定数項が $1$。あとは、$m_{\mathfrak{t}^\lambda\mathfrak{t}} m_\mu = (\varphi_{\mathsf{T}^\lambda\mathfrak{t}}\iota_\mu)(m_\mu) \in \bigoplus_{\mathsf{S} \in \mathrm{SStd}(\lambda, \mu)} R m_{\mathsf{T}^\lambda\mathsf{S}}$ から従う

$R$ は体かつ $e \ge n$
$\mathfrak{t} \in \mathrm{Std}(\lambda)$
$\mu(\mathfrak{t}) \in \mathrm{SStd}(\lambda, \mu)$
$i, i + 1$ は $\mathfrak{t}^\mu$ 内で同じ行かつ $\mathfrak{t}$ 内で $i + 1$ の方が上の行にあるとする。$\alpha \coloneqq [\mathrm{res}_\mathfrak{t}(i + 1) - \mathrm{res}_\mathfrak{t}(i)]_q$ とすると

$$
\pi^\mu_\mathfrak{t} = (q + \alpha^{-1})\pi^\mu_{\mathfrak{t}s_i}
$$

$\mathfrak{t}$ 内での $i + 1, i$ の位置を $(a, b), (c, d)$ とする。$x \ne (a, b)$ ならば $P^\mu_\mathfrak{t}(x) = P^\mu_{\mathfrak{t}s_i}(x)$ かつ $P^\mu_\mathfrak{t}(a, b) = P^\mu_{\mathfrak{t}s_i}(a, b) \sqcup \{(c, d)\}$ だから

$$
\pi^\mu_\mathfrak{t} = \frac{[\mathrm{res}_\mathfrak{t}(i + 1) - \mathrm{res}_\mathfrak{t}(i) + 1]_q}{[\mathrm{res}_\mathfrak{t}(i + 1) - \mathrm{res}_\mathfrak{t}(i)]_q} \pi^\mu_{\mathfrak{t}s_i}
$$

$R = \mathbb{Q}(q)$
$\mathfrak{t} \in \mathrm{Std}(\lambda)$
$\mathsf{T} \coloneqq \mu(\mathfrak{t}) \in \mathrm{SStd}(\lambda, \mu)$ とすると

$$
\psi_\mathfrak{t}\iota_\mu = \pi^\mu_\mathfrak{t} \psi_{\mathsf{T}}
$$

$L^\mu_k$ の $\psi_\mathfrak{t}\iota_\mu$ への作用は

$$
\psi_\mathfrak{t}\iota_\mu L^\mu_k = \psi_\mathfrak{t} (L^\omega_{t^\mu_{k1}} + \cdots + L^\omega_{\mathfrak{t}^\mu_{k\mu_k}}) \iota_\mu = [\mathrm{res}_\mathsf{T}(k)]_q \psi_\mathfrak{t}\iota_\mu
$$

だから、$\psi_\mathfrak{t}\iota_\mu L^\mu_k \in W^\lambda_\mu = \bigoplus_{\mathsf{S} \in \mathrm{SStd}(\lambda, \mu)} R \psi_\mathsf{S}$ から $\psi_\mathfrak{t}\iota_\mu \in R \psi_\mathsf{T}$。あとは、係数を決定すればよい。$\ell(d(\mathfrak{t}))$ に関する帰納法を使う。まず、$\mathfrak{t} = \mathrm{first}(\mathsf{T})$ の場合を考える

$$
\begin{aligned}
  \psi_{\mathrm{first}(\mathsf{T})}\iota_\mu &\in \left(\varphi_{\mathrm{first}(\mathsf{T})} + \sum_{\mathfrak{s} \in \mathrm{Std}(\lambda), \mathfrak{s} \triangleright \mathrm{first}(\mathsf{T})} R \varphi_\mathfrak{s}\right) \iota_\mu \\
  &\subset \pi^\mu_{\mathrm{first}(\mathsf{T})}\varphi_\mathsf{T} + \sum_{\mathsf{S} \in \mathrm{Std}(\lambda, \mu), \mathsf{S} \triangleright \mathsf{T}} R \varphi_\mathsf{S}
\end{aligned}
$$

よって、$\psi_{\mathrm{first}(\mathsf{T})}\iota_\mu = \pi^\mu_{\mathrm{first}(\mathsf{T})}\psi_\mathsf{T}$。$\ell(d(\mathfrak{t})) > \ell(d(\mathrm{first}(\mathsf{T})))$ とする。ある $i$ が存在して、$i, i + 1$ は $\mathfrak{t}^\mu$ 内で同じ行かつ $\mathfrak{t}$ 内で $i + 1$ の方が上の行にある。$\psi_\mathfrak{t} \in W^\lambda_\omega$ と $f_\mathfrak{t} \in S^\lambda$ の対応から $\psi_\mathfrak{t} = \psi_{\mathfrak{t}s_i}T_{s_i} + \alpha^{-1}\psi_{\mathfrak{t}s_i}$ だから

$$
\begin{aligned}
  \psi_\mathfrak{t}\iota_\mu &= \psi_{\mathfrak{t}s_i}T_{s_i}\iota_\mu + \alpha^{-1}\psi_{\mathfrak{t}s_i}\iota_\mu \\
  &= (q + \alpha^{-1})\psi_{\mathfrak{t}s_i}\iota_\mu \\
  &= (q + \alpha^{-1})\pi^\mu_{\mathfrak{t}s_i}\psi_\mathsf{T} \\
  &= \pi^\mu_\mathfrak{t}\psi_\mathsf{T}
\end{aligned}
$$

[Thm]
$R = \mathbb{Q}(q)$
$\mathsf{T} \in \mathrm{SStd}(\lambda, \mu)$

$$
\langle \psi_\mathsf{T}, \psi_\mathsf{T} \rangle = q^{\ell(d(\mathrm{last}(\mathsf{T})))} \gamma_\mathsf{T}
$$

$$
\begin{aligned}
  \pi^\mu_{\mathrm{last}(\mathsf{T})} \langle \psi_\mathsf{T}, \psi_\mathsf{T} \rangle &= \langle \psi_{\mathrm{last}(\mathsf{T})} \iota_\mu, \psi_\mathsf{T} \rangle \\
  &= \langle \psi_{\mathrm{last}(\mathsf{T})}, \psi_\mathsf{T} \pi_\mu \rangle \\
  &= \langle \psi_{\mathrm{last}(\mathsf{T})}, \psi_{\mathrm{last}(\mathsf{T})} \rangle \\
  &= q^{\ell(d(\mathrm{last}(\mathsf{T})))} \gamma_{\mathrm{last}(\mathsf{T})}
\end{aligned}
$$

$R$ は可換環かつ $e$ は一般

$$
G^\lambda_\mu = \prod_{\mathsf{T} \in \mathrm{SStd}(\lambda, \mu)} q^{\ell(d(\mathrm{last}(\mathsf{T})))} \gamma_{T}
$$

$$
g^\lambda_\mu \coloneqq \prod_{\mathsf{T} \in \mathrm{SStd}(\lambda, \mu)} \gamma_{T} \in R
$$

[例]
$\lambda = (3, 2)$, $\mu = (2, 2, 1)$

$$
\mathsf{S} \coloneqq \begin{array}{l}
  \boxed{1}\boxed{1}\boxed{3} \\
  \boxed{2}\boxed{2}
\end{array}, \mathsf{T} \coloneqq \begin{array}{l}
  \boxed{1}\boxed{1}\boxed{2} \\
  \boxed{2}\boxed{3}
\end{array}
$$

$\mathrm{SStd}(\lambda, \mu) = \{ \mathsf{S}, \mathsf{T} \}$

$\gamma_\mathsf{S} = \frac{[4]_q}{[2]_q}$, $\gamma_\mathsf{T} = [2]_q^2$

$$
\begin{aligned}
  g^\lambda_\mu &= [2]_q[4]_q \\
  G^\lambda_\mu &= q^3[2]_q[4]_q
\end{aligned}
$$

列数が $n$ 以下の分割 $\nu$ に対応する beta 数列とは、$\beta \coloneqq (n - i + \nu'_i)_{1 \le i \le n}$。列数が $n$ 以下の分割と $\mathcal{B}_n \coloneqq \{ \beta \in \mathbb{Z}^n \mid \beta_1 > \beta_2 > \cdots > \beta_n \ge 0 \}$ は一対一に対応する

$\mathcal{A}_n \coloneqq \mathbb{Z}^n$
$\mathcal{A}^\mathrm{reg}_n \coloneqq \{ \alpha \in \mathbb{Z}^n \mid \alpha_1, \dots, \alpha_n \text{ は } 0 \text{ 以上かつ相異なる} \}$

$\xi$: composition
$d_\xi: \mathcal{A}_n \to \mathbb{Z}$ を以下のように定義する。$\alpha \in \mathcal{A}_n \setminus \mathcal{A}^\mathrm{reg}_n$ の場合は、$d_\xi(\alpha) \coloneqq 0$ とする。$\alpha \in \mathcal{A}^\mathrm{reg}_n$ の場合は、$\sigma \in \mathfrak{S}_n$ が一意的に存在して、$(\alpha_{(i)\sigma})_{1 \le i \le n} \in \mathcal{B}_n$。$(\alpha_{(i)\sigma})_{1 \le i \le n} \in \mathcal{B}_n$ に対応する (列数が $n$ 以下の) 分割を $\nu$ として

$$
d_\xi(\alpha) \coloneqq \mathrm{sgn}(\sigma)|\mathrm{SStd}(\nu, \xi)| \quad (\alpha \in \mathcal{A}_n^\mathrm{reg})
$$

と定義する。$|\nu| \ne |\xi|$ ならば、$d_\xi(\alpha) = 0$ なことに注意

$[n] \coloneqq \{ 1, 2, \dots, n \}$

$\alpha \in \mathcal{A}_n$ とする。$C \subset [n]$ に対して、$\alpha^C \in \mathcal{A}_n$ を

$$
\alpha^C_b \coloneqq \begin{cases}
  \alpha_b - 1 &\quad (b \in C) \\
  \alpha_b &\quad (b \not\in C)
\end{cases}
$$

で定義する

[Prop]
$\alpha \in \mathcal{A}_n$
$\xi$: composition
$\xi_j = 0 \ (j > Z)$ とする。$\bar{\xi} \coloneqq (\xi_1, \dots, \xi_{Z - 1})$, $z \coloneqq \xi_Z$ とおくと

$$
d_\xi(\alpha) = \sum_{C \subset [n], |C| = z} d_{\bar{\xi}}(\alpha^C)
$$

まず、$\alpha \in \mathcal{B}_n$ とする。$\alpha$ に対応する (列数が $n$ 以下の) 分割を $\nu$ とする。$\mathrm{SStd}(\nu, \xi) = \bigsqcup_{C \subset [n], |C| = z, \alpha^C \in \mathcal{B}_n} \mathrm{SStd}(\nu^C, \bar{\xi})$。ただし、$\alpha^C$ に対応する分割を $\nu^C$ とした

$$
\begin{aligned}
  d_\xi(\alpha) &= |\mathrm{SStd}(\nu, \xi)| \\
  &= \sum_{C \subset [n], |C| = z, \alpha^C \in \mathcal{B}_n} |\mathrm{SStd}(\nu^C, \bar{\xi})| \\
  &= \sum_{C \subset [n], |C| = z} d_{\bar{\xi}}(\alpha^C)
\end{aligned}
$$

$\alpha \in \mathcal{A}_n^\mathrm{reg}$ の場合も容易。最後に、$\alpha \not\in \mathcal{A}_n^\mathrm{reg}$ とする。$\alpha_j \ge 0$ として良い。相異なる $p, q$ が存在して、$\alpha_p = \alpha_q$

$$
\begin{aligned}
  \sum_{C \subset [n], |C| = z} d_{\bar{\xi}}(\alpha^C) &= \sum_{C \subset [n], |C| = z, p \not\in C, q \in C} d_{\bar{\xi}}(\alpha^C) + \sum_{C \subset [n], |C| = z, p \in C, q \not\in C} d_{\bar{\xi}}(\alpha^C) \\
  &= 0
\end{aligned}
$$

[Lem]
$\lambda$ に対応する beta 数列を $\beta \in \mathcal{B}_n$ とする。$\mu_j = 0 \ (j > Z)$ とする。$\bar{\mu} \coloneqq (\mu_1, \dots, \mu_{Z - 1})$, $z \coloneqq \mu_Z$ とおくと

$$
g^\lambda_\mu = B_2B_3 \prod_{C \subset [n], |C| = z, \beta^C \in \mathcal{B}_n} g^{\lambda^C}_{\bar{\mu}}
$$

ただし、$\lambda^C$ は $\beta^C$ に対応する分割であり

$$
\begin{aligned}
  B_2 &\coloneqq \prod_{h \ge 2} \prod_{C \subset [n], |C| = z - 1} \prod_{b, c \not\in C, \beta^C_b - \beta^C_c = h - 1} [h]_q^{-d_{\bar{\mu}}(\beta^C_1, \dots, \beta^C_b - h, \dots, \beta^C_c - 1 + h, \dots, \beta^C_n)} \\
  B_3 &\coloneqq \prod_{h \ge 1} \prod_{C \subset [n], |C| = z - 1} \prod_{b, c \not\in C, \beta^C_b - \beta^C_c = h} [h]_q^{d_{\bar{\mu}}(\beta^C_1, \dots, \beta^C_b - 1 - h, \dots, \beta^C_c + h, \dots, \beta^C_n)}
\end{aligned}
$$

$g^\lambda_\mu = \prod_{\mathsf{T} \in \mathrm{SStd}(\lambda, \mu)} \prod_{(i, j) \in [\lambda]} \prod_{(k, l) \in \Gamma_\mathsf{T}(i, j)} \frac{[(j - i) - (l - k) + 1]_q}{[(j - i) - (l - k)]_q}$。$\mathrm{SStd}(\lambda, \mu) = \bigsqcup_{C \subset [n], |C| = z, \beta^C \in \mathcal{B}_n} \mathrm{SStd}(\lambda^C, \bar{\mu})$。$\mathsf{T}_{ij} \ne Z$ と $\mathsf{T}_{ij} = Z$ で場合分けする。まず、$\mathsf{T}_{ij} \ne Z$ の場合は、$\prod_{C \subset [n], |C| = z, \beta^C \in \mathcal{B}_n} g^{\lambda^C}_{\bar{\mu}}$。あとは、$\mathsf{T}_{ij} = Z$ の場合を考える

$$
\begin{aligned}
  &\prod_{C \subset [n], |C| = z, \beta^C \in \mathcal{B}_n} \left(\prod_{c \in C, b \not\in C, b < c} \frac{[\beta_b - \beta_c + 1]_q}{[\beta_b - \beta_c]_q}\right)^{\mathrm{SStd}(\lambda^C, \bar{\mu})} \\
  &\qquad = \prod_{C \subset [n], |C| = z} \prod_{c \in C, b \not\in C, b < c} \frac{[\beta_b - \beta_c + 1]_q^{d_{\bar{\mu}}(\beta^C)}}{[\beta_b - \beta_c]_q^{d_{\bar{\mu}}(\beta^C)}} \\
  &\qquad = \prod_{C \subset [n], |C| = z} \frac{\prod_{h \ge 2} \prod_{c \in C, b \not\in C, \beta_b - \beta_c = h - 1} [h]_q^{d_{\bar{\mu}}(\beta^C)}}{\prod_{h \ge 1} \prod_{c \in C, b \not\in C, \beta_b - \beta_c = h} [h]_q^{d_{\bar{\mu}}(\beta^C)}} \\
  &\qquad = \prod_{C \subset [n], |C| = z - 1} \frac{\prod_{h \ge 2} \prod_{b, c \not\in C, \beta^C_b - \beta^C_c = h - 1} [h]_q^{d_{\bar{\mu}}(\beta^C_1, \dots, \beta^C_b, \dots, \beta^C_c - 1, \dots, \beta^C_n)}}{\prod_{h \ge 1} \prod_{b, c \not\in C, \beta^C_b - \beta^C_c = h} [h]_q^{d_{\bar{\mu}}(\beta^C_1, \dots, \beta^C_b, \dots, \beta^C_c - 1, \dots, \beta^C_n)}} \\
  &\qquad = \prod_{C \subset [n], |C| = z - 1} \frac{\prod_{h \ge 2} \prod_{b, c \not\in C, \beta^C_b - \beta^C_c = h - 1} [h]_q^{d_{\bar{\mu}}(\beta^C_1, \dots, \beta^C_c - 1 + h, \dots, \beta^C_b - h, \dots, \beta^C_n)}}{\prod_{h \ge 1} \prod_{b, c \not\in C, \beta^C_b - \beta^C_c = h} [h]_q^{d_{\bar{\mu}}(\beta^C_1, \dots, \beta^C_c + h, \dots, \beta^C_b - 1 - h, \dots, \beta^C_n)}} \\
  &\qquad = \prod_{C \subset [n], |C| = z - 1} \frac{\prod_{h \ge 2} \prod_{b, c \not\in C, \beta^C_b - \beta^C_c = h - 1} [h]_q^{-d_{\bar{\mu}}(\beta^C_1, \dots, \beta^C_b - h, \dots, \beta^C_c - 1 + h, \dots, \beta^C_n)}}{\prod_{h \ge 1} \prod_{b, c \not\in C, \beta^C_b - \beta^C_c = h} [h]_q^{-d_{\bar{\mu}}(\beta^C_1, \dots, \beta^C_b - 1 - h, \dots, \beta^C_c + h, \dots, \beta^C_n)}}
\end{aligned}
$$

[Prop]
$\lambda$ に対応する beta 数列を $\beta \in \mathcal{B}_n$ とすると

$$
g^\lambda_\mu = \prod_{h \ge 1} \prod_{b, c \in [n], b \ne c, \beta_b - \beta_c < h} [h]_q^{-d_\mu(\beta_1, \dots, \beta_b - h, \dots, \beta_c + h, \dots, \beta_n)}
$$

$n$ に関する帰納法を使う。$n = 1$ の場合は明らか。$n \ge 2$ とする。$Z \coloneqq \max \{ j \mid \mu_j > 0 \}$ とし、$\bar{\mu} \coloneqq (\mu_1, \dots, \mu_{Z - 1})$, $z \coloneqq \mu_Z$ とおく。帰納法の仮定から

$$
\begin{aligned}
  &\prod_{C \subset [n], |C| = z, \beta^C \in \mathcal{B}_n} g^{\lambda^C}_{\bar{\mu}} \\
  &\qquad = \prod_{h \ge 1} \prod_{C \subset [n], |C| = z, \beta^C \in \mathcal{B}_n} \prod_{b, c \in [n], b \ne c, \beta^C_b - \beta^C_c < h} [h]_q^{-d_{\bar{\mu}}(\beta^C_1, \dots, \beta^C_b - h, \dots, \beta^C_c + h, \dots, \beta^C_n)}
\end{aligned}
$$

$\alpha \in \mathcal{A}_n \setminus \mathcal{B}_n$ に対して、$\sum_{b, c \in [n], b \ne c, \alpha_b - \alpha_c < h} d_{\bar{\mu}}(\alpha_1, \dots, \alpha_b - h, \dots, \alpha_c + h, \dots, \alpha_n) = 0$ が成り立つことを示す。$\alpha_j \ge 0 \ (1 \le j \le n)$ でない場合は、$\alpha_b - \alpha_c < h$ の条件から成立する。相異なる $p, q$ が存在して、$\alpha_p = \alpha_q$

$$
\begin{aligned}
  &\sum_{b, c \in [n], b \ne c, \alpha_b - \alpha_c < h} d_{\bar{\mu}}(\alpha_1, \dots, \alpha_b - h, \dots, \alpha_c + h, \dots, \alpha_n) \\
  &= \sum_{c \not\in \{p, q\}, \alpha_p - \alpha_c < h} d_{\bar{\mu}}(\alpha_1, \dots, \alpha_p - h, \dots, \alpha_c + h, \dots, \alpha_n) \\
  &\qquad + \sum_{c \not\in \{p, q\}, \alpha_q - \alpha_c < h} d_{\bar{\mu}}(\alpha_1, \dots, \alpha_q - h, \dots, \alpha_c + h, \dots, \alpha_n) \\
  &\qquad + \sum_{b \not\in \{p, q\}, \alpha_b - \alpha_p < h} d_{\bar{\mu}}(\alpha_1, \dots, \alpha_b - h, \dots, \alpha_p + h, \dots, \alpha_n) \\
  &\qquad + \sum_{b \not\in \{p, q\}, \alpha_b - \alpha_q < h} d_{\bar{\mu}}(\alpha_1, \dots, \alpha_b - h, \dots, \alpha_q + h, \dots, \alpha_n) \\
  &= 0
\end{aligned}
$$

よって

$$
\begin{aligned}
  &\prod_{C \subset [n], |C| = z, \beta^C \in \mathcal{B}_n} g^{\lambda^C}_{\bar{\mu}} \\
  &\qquad = \prod_{h \ge 1} \prod_{C \subset [n], |C| = z} \prod_{b, c \in [n], b \ne c, \beta^C_b - \beta^C_c < h} [h]_q^{-d_{\bar{\mu}}(\beta^C_1, \dots, \beta^C_b - h, \dots, \beta^C_c + h, \dots, \beta^C_n)}
\end{aligned}
$$

$b \not\in C$ or $b \in C$ と $c \not\in C$ or $c \in C$ で場合分けすると

$$
G_1 \coloneqq \prod_{h \ge 1} \prod_{C \subset [n], |C| = z} \prod_{b, c \not\in C, b \ne c, \beta_b - \beta_c < h} [h]_q^{-d_{\bar{\mu}}(\beta^C_1, \dots, \beta^C_b - h, \dots, \beta^C_c + h, \dots, \beta^C_n)}
$$

$$
G_2 \coloneqq \prod_{h \ge 1} \prod_{C \subset [n], |C| = z} \prod_{b \not\in C, c \in C, \beta_b - \beta_c < h - 1} [h]_q^{-d_{\bar{\mu}}(\beta^C_1, \dots, \beta^C_b - h, \dots, \beta^C_c + h, \dots, \beta^C_n)}
$$

$$
G_3 \coloneqq \prod_{h \ge 1} \prod_{C \subset [n], |C| = z} \prod_{b \in C, c \not\in C, \beta_b - \beta_c < h + 1} [h]_q^{-d_{\bar{\mu}}(\beta^C_1, \dots, \beta^C_b - h, \dots, \beta^C_c + h, \dots, \beta^C_n)}
$$

$$
G_4 \coloneqq \prod_{h \ge 1} \prod_{C \subset [n], |C| = z} \prod_{b, c \in C, b \ne c, \beta_b - \beta_c < h} [h]_q^{-d_{\bar{\mu}}(\beta^C_1, \dots, \beta^C_b - h, \dots, \beta^C_c + h, \dots, \beta^C_n)}
$$

また

$$
\begin{aligned}
  B_2 &= \prod_{h \ge 1} \prod_{C \subset [n], |C| = z} \prod_{b \not\in C, c \in C, \beta_b - \beta_c = h - 1} [h]_q^{-d_{\bar{\mu}}(\beta^C_1, \dots, \beta^C_b - h, \dots, \beta^C_c + h, \dots, \beta^C_n)} \\
  B_3 &= \prod_{h \ge 1} \prod_{C \subset [n], |C| = z} \prod_{b \in C, c \not\in C, \beta_b - \beta_c = h} [h]_q^{d_{\bar{\mu}}(\beta^C_1, \dots, \beta^C_b - h, \dots, \beta^C_c + h, \dots, \beta^C_n)}
\end{aligned}
$$

総合すると

$$
\begin{aligned}
  g^\lambda_\mu &= B_2B_3 G_1G_2G_3G_4 \\
  &= G_1(G_2B_2)(G_3B_3)G_4 \\
  &= \prod_{h \ge 1} \prod_{C \subset [n], |C| = z} \prod_{b, c \in [n], b \ne c, \beta_b - \beta_c < h} [h]_q^{-d_{\bar{\mu}}(\beta^C_1, \dots, \beta^C_b - h, \dots, \beta^C_c + h, \dots, \beta^C_n)} \\
  &= \prod_{h \ge 1} \prod_{b, c \in [n], b \ne c, \beta_b - \beta_c < h} [h]_q^{-\sum_{C \subset [n], |C| = z} d_{\bar{\mu}}(\beta^C_1, \dots, \beta^C_b - h, \dots, \beta^C_c + h, \dots, \beta^C_n)} \\
  &= \prod_{h \ge 1} \prod_{b, c \in [n], b \ne c, \beta_b - \beta_c < h} [h]_q^{-d_\mu(\beta_1, \dots, \beta_b - h, \dots, \beta_c + h, \dots, \beta_n)}
\end{aligned}
$$

$\nu$: 分割
$(a, b) \in [\nu]$ に対して、$(a, b)$-hook $H^\nu_{ab} \subset [\nu]$ を、行 $a$ の $(a, b)$ 以降の位置たちと列 $b$ の $(a, b)$ 以降の位置たちの合併とする。$h^\nu_{ab} \coloneqq |H^\nu_{ab}| = (\nu_a - b) + (\nu'_b - a) + 1$ を $(a, b)$-hook length という

$(a, b)$-rim hook $R^\nu_{ab} \subset [\nu]$ を、列 $b$ の最後の位置から行 $a$ の最後の位置までの境界の内側に沿った位置たちとする。$|R^\nu_{ab}| = h^\nu_{ab}$

$H^\nu_{ab}$ or $R^\nu_{ab}$ の高さ $\nu'_b - a + 1 \eqqcolon l^\nu_{ab}$ を leg length という

$\nu$: 列数が $n$ 以下の分割
$\nu$ に対応する beta 数列を $\beta \in \mathcal{B}_n$ とする。$1 \le b \le n$, $h \ge 1$ とする。$(\beta_1, \dots, \beta_b - h, \dots, \beta_n) \in \mathcal{A}_n^\mathrm{reg}$ と、$[\nu]$ において列 $b$ の最後の位置から境界の内側に沿って上または右方向に $h$ 個取り除くことが可能かつ取り除いた後の図形がある分割 $\nu^*$ に対応することは同値。さらに、$1 \le a \le \nu'_b$ が存在して $h = H^\nu_{ab}$ と表せることとも同値。このとき

$$
d_\xi(\beta_1, \dots, \beta_b - h, \dots, \beta) = (-1)^{h^\nu_{ab} - l^\nu_{ab}}|\mathrm{SStd}(\nu^*, \xi)|
$$

$\nu$: 列数が $n$ 以下の分割
$\nu$ に対応する beta 数列を $\beta \in \mathcal{B}_n$ とする。$1 \le b \le n$, $h \ge 1$ とする。$(\beta_1, \dots, \beta_b + h, \dots, \beta_n) \in \mathcal{A}_n^\mathrm{reg}$ と、$[\nu]$ に対して列 $b$ の直下から境界の外側に沿って下または左方向に $h$ 個追加した図形がある分割 $\tilde{\nu}$ に対応することは同値。このとき、追加した $h$ 個の部分の幅を $w$ とすると

$$
d_\xi(\beta_1, \dots, \beta_b + h, \dots, \beta) = (-1)^{w - 1}|\mathrm{SStd}(\tilde{\nu}, \xi)|
$$

[Thm]
$\lambda$ に対応する beta 数列を $\beta \in \mathcal{B}_n$ とすると

$$
g^\lambda_\mu = \prod_{a \ge 1} \prod_{1 \le b < c \le \lambda_a} \left(\frac{[h^\lambda_{ab}]_q}{[h^\lambda_{ac}]_q}\right)^{d_\mu(\beta_1, \dots, \beta_b + h^\lambda_{ac}, \dots, \beta_c - h^\lambda_{ac}, \dots, \beta_n)}
$$

$g^\lambda_\mu = \prod_{h \ge 1} \prod_{b, c \in [n], b \ne c, \beta_b - \beta_c < h} [h]_q^{-d_\mu(\beta_1, \dots, \beta_b - h, \dots, \beta_c + h, \dots, \beta_n)}$ だった。$\beta_b - \beta_c < h$ だから $d_\mu(\beta_1, \dots, \beta_b - h, \dots, \beta_c, \dots, \beta_n) = 0$ ならば $d_\mu(\beta_1, \dots, \beta_b - h, \dots, \beta_c + h, \dots, \beta_n) = 0$。よって

$$
\begin{aligned}
  g^\lambda_\mu &= \prod_{b \in [n], 1 \le a \le \lambda_b'} \prod_{c \in [n], b \ne c, \beta_b - \beta_c < h^\lambda_{ab}} [h^\lambda_{ab}]_q^{-d_\mu(\beta_1, \dots, \beta_b - h^\lambda_{ab}, \dots, \beta_c + h^\lambda_{ab}, \dots, \beta_n)} \\
  &= \prod_{a \ge 1} \prod_{1 \le b \le \lambda_a} \prod_{c \in [n], b \ne c, \beta_b - \beta_c < h^\lambda_{ab}} [h^\lambda_{ab}]_q^{-d_\mu(\beta_1, \dots, \beta_b - h^\lambda_{ab}, \dots, \beta_c + h^\lambda_{ab}, \dots, \beta_n)} \\
  &= \prod_{a \ge 1} \prod_{1 \le b \le \lambda_a} \prod_{1 \le c < b} [h^\lambda_{ab}]_q^{-d_\mu(\beta_1, \dots, \beta_c + h^\lambda_{ab}, \dots, \beta_b - h^\lambda_{ab}, \dots, \beta_n)} \\
  &\qquad \times \prod_{a \ge 1} \prod_{1 \le b \le \lambda_a} \prod_{b < c \le n, \beta_b - \beta_c < h^\lambda_{ab}} [h^\lambda_{ab}]_q^{-d_\mu(\beta_1, \dots, \beta_b - h^\lambda_{ab}, \dots, \beta_c + h^\lambda_{ab}, \dots, \beta_n)}
\end{aligned}
$$

$\beta_k$ は $(\lambda'_k, k)$ と $(0, n)$ のマンハッタン距離だから

$$
\begin{aligned}
  &\prod_{a \ge 1} \prod_{1 \le b \le \lambda_a} \prod_{b < c \le n, \beta_b - \beta_c < h^\lambda_{ab}} [h^\lambda_{ab}]_q^{-d_\mu(\beta_1, \dots, \beta_b - h^\lambda_{ab}, \dots, \beta_c + h^\lambda_{ab}, \dots, \beta_n)} \\
  &= \prod_{a \ge 1} \prod_{1 \le b < c \le \lambda_a} [h^\lambda_{ab}]_q^{-d_\mu(\beta_1, \dots, \beta_b - h^\lambda_{ab}, \dots, \beta_c + h^\lambda_{ab}, \dots, \beta_n)} \\
  &= \prod_{a \ge 1} \prod_{1 \le b < c \le \lambda_a} [h^\lambda_{ab}]_q^{-d_\mu(\beta_1, \dots, \beta_c - h^\lambda_{ac}, \dots, \beta_b + h^\lambda_{ac}, \dots, \beta_n)} \\
  &= \prod_{a \ge 1} \prod_{1 \le b < c \le \lambda_a} [h^\lambda_{ab}]_q^{d_\mu(\beta_1, \dots, \beta_b + h^\lambda_{ac}, \dots, \beta_c - h^\lambda_{ac}, \dots, \beta_n)}
\end{aligned}
$$

総合すると

$$
\begin{aligned}
  g^\lambda_\mu &= \prod_{a \ge 1} \prod_{1 \le c \le \lambda_a} \prod_{1 \le b < c} [h^\lambda_{ac}]_q^{-d_\mu(\beta_1, \dots, \beta_b + h^\lambda_{ac}, \dots, \beta_c - h^\lambda_{ac}, \dots, \beta_n)} \\
  &\qquad \times \prod_{a \ge 1} \prod_{1 \le b < c \le \lambda_a} [h^\lambda_{ab}]_q^{d_\mu(\beta_1, \dots, \beta_b + h^\lambda_{ac}, \dots, \beta_c - h^\lambda_{ac}, \dots, \beta_n)} \\
  &= \prod_{a \ge 1} \prod_{1 \le b < c \le \lambda_a} \left(\frac{[h^\lambda_{ab}]_q}{[h^\lambda_{ac}]_q}\right)^{d_\mu(\beta_1, \dots, \beta_b + h^\lambda_{ac}, \dots, \beta_c - h^\lambda_{ac}, \dots, \beta_n)}
\end{aligned}
$$

[例]
$\lambda = (3, 2)$, $\mu = (2, 2, 1)$
$B \coloneqq (a, b)$, $C \coloneqq (a, c)$ の割り当ては

$$
\begin{aligned}
  \begin{array}{l}
    \boxed{\mathrlap{B}\phantom{X}}\boxed{\mathrlap{C}\phantom{X}}\boxed{\phantom{X}} \\
    \boxed{\phantom{X}}\boxed{\phantom{X}}
  \end{array} &\rightsquigarrow& \begin{array}{l}
    \boxed{\mathrlap{B}\phantom{X}} \\
    \boxed{\phantom{X}} \\
    \boxed{\phantom{X}} \\
    \boxed{\phantom{X}} \\
    \boxed{\phantom{X}}
  \end{array} &\rightsquigarrow& 1 \\
  \begin{array}{l}
    \boxed{\mathrlap{B}\phantom{X}}\boxed{\phantom{X}}\boxed{\mathrlap{C}\phantom{X}} \\
    \boxed{\phantom{X}}\boxed{\phantom{X}}
  \end{array} &\rightsquigarrow& \begin{array}{l}
    \boxed{\mathrlap{B}\phantom{X}}\boxed{\phantom{X}} \\
    \boxed{\phantom{X}}\boxed{\phantom{X}} \\
    \boxed{\phantom{X}}
  \end{array} &\rightsquigarrow& \left(\frac{[4]_q}{[1]_q}\right)^1 \\
  \begin{array}{l}
    \boxed{\phantom{X}}\boxed{\mathrlap{B}\phantom{X}}\boxed{\mathrlap{C}\phantom{X}} \\
    \boxed{\phantom{X}}\boxed{\phantom{X}}
  \end{array} &\rightsquigarrow& \begin{array}{l}
    \boxed{\phantom{X}}\boxed{\mathrlap{B}\phantom{X}} \\
    \boxed{\phantom{X}}\boxed{\phantom{X}} \\
    \phantom{\boxed{\phantom{X}}}\boxed{\phantom{X}}
  \end{array} &\rightsquigarrow& 1 \\
  \begin{array}{l}
    \boxed{\phantom{X}}\boxed{\phantom{X}}\boxed{\phantom{X}} \\
    \boxed{\mathrlap{B}\phantom{X}}\boxed{\mathrlap{C}\phantom{X}}
  \end{array} &\rightsquigarrow& \begin{array}{l}
    \boxed{\phantom{X}}\boxed{\phantom{X}}\boxed{\phantom{X}} \\
    \boxed{\mathrlap{B}\phantom{X}} \\
    \boxed{\phantom{X}}
  \end{array} &\rightsquigarrow& \left(\frac{[2]_q}{[1]_q}\right)^1
\end{aligned}
$$

よって、$g^\lambda_\mu = [4]_q[2]_q$

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
$e \ge 1$
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

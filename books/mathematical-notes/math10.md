---
title: "math10"
---

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
$\nu$ に対応する beta 数列を $\beta \in \mathcal{B}_n$ とする。$1 \le b \le n$, $h \ge 1$ とする。$(\beta_1, \dots, \beta_b + h, \dots, \beta_n) \in \mathcal{A}_n^\mathrm{reg}$ と、$[\nu]$ に対して列 $b$ の最後の位置の 1 つ下の位置から境界の外側に沿って下または左方向に $h$ 個追加した後の図形がある分割 $\tilde{\nu}$ に対応することは同値。このとき、追加した $h$ 個の部分の幅を $w$ とすると

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

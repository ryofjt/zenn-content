---
title: "math4"
---

# $SO(1, d - 1)$ 不変な超関数

$V \coloneqq (\mathbb{R}^d, x_0^2 - x_1^2 - \cdots - x_{d - 1}^2)$
$G \coloneqq SO(V)$
$G_\mathbb{C} \coloneqq SO(V \otimes \mathbb{C})$

一般の $\mathcal{D}'(V)^G$ は難しかったので、$\{ u \in \mathcal{S}'(V) \mid \mathrm{supp}u \subset \overline{V}_+ \}^G$ を調べる

$\mathrm{int}\{ H_{\overline{V}_+} < \infty \} = V_-$。まず、$\partial V_-$ との距離 $\Delta$ は

$$
\Delta(\eta) = \frac{-\eta_0 - |\eta'|}{\sqrt{2}} \quad (\eta \in V_-)
$$

を示す

$$
\begin{aligned}
  \Delta(\eta)^2 &= \inf_{b_0 \in \mathbb{R}_{\le 0}, |b'| = |b_0|} ((\eta_0 - b_0)^2 + |\eta' - b'|^2) \\
  &= \inf_{b_0 \in \mathbb{R}_{\le 0}} ((\eta_0 - b_0)^2 + (|\eta'| + b_0)^2) \\
  &= \inf_{b_0 \in \mathbb{R}_{\le 0}} (2b_0^2 + 2(|\eta'| - \eta_0)b_0 + \eta_0^2 + |\eta'|^2) \\
  &= \frac{1}{2}(\eta_0 + |\eta'|)^2
\end{aligned}
$$

$u \in \mathcal{S}'(V)$ は $G$ 不変で、$\mathrm{supp}u \subset \overline{V}_+$ とする。Paley-Wiener-Schwartz の定理から、正則関数 $\hat{u}: \mathcal{T} = V - iV_+ \to \mathbb{C}$ ができる。$\hat{u}$ は $G$ 不変で、Vladimirov の評価式から

$$
|\hat{u}(\zeta)| \le C_0 (1 + |\zeta|)^{N_0} \Delta(\mathrm{Im}\zeta)^{-M_0} \quad (\zeta \in \mathcal{T})
$$

$g \in G_\mathbb{C}$, $\zeta, g^{-1}\zeta \in \mathcal{T}$ ならば

$$
\hat{u}(\zeta) = \hat{u}(g^{-1}\zeta)
$$

を示せば、$G_\mathbb{C}$ 不変な $\hat{u}: \tilde{\mathcal{T}}_1 = \{ \zeta \in V_\mathbb{C} \mid \zeta^2 \not\in \mathbb{R}_{\ge 0} \} \to \mathbb{C}$ まで拡張できることがわかる

$X \coloneqq \{ h \in G_\mathbb{C} \mid h^{-1}\zeta \in \mathcal{T} \}$ は連結で、$e, g \in X$。$X \ni h \mapsto \hat{u}(h^{-1}\zeta)$ は $G$ 上一定だから、一定

$q: \{ \mathrm{Im}t < 0 \} \ni t \mapsto t^2 \in \mathbb{C} \setminus \mathbb{R}_{\ge 0}$ は同型で

$$
F(s) \coloneqq \hat{u}(q^{-1}(s), 0, \dots, 0) \quad (s \in \mathbb{C} \setminus \mathbb{R}_{\ge 0})
$$

とすると、$G_\mathbb{C}$ 不変性から

$$
\hat{u}(\zeta) = F(\zeta^2) \quad (\zeta \in \tilde{\mathcal{T}}_1)
$$

$d$ を $\mathbb{R}_{\ge 0}$ との距離とする。$\Delta(\mathrm{Im}(t, 0, \dots, 0)) \ge \frac{d(t^2)}{2\sqrt{2}|t|} \ (\mathrm{Im}t < 0)$ を示す。$t = a - ib \ (a \in \mathbb{R}, b \in \mathbb{R}_{>0})$ とすると、$\Delta(\mathrm{Im}(t, 0, \dots, 0)) = \frac{b}{\sqrt{2}}$

$$
\begin{aligned}
  d(t^2) &= d((a^2 - b^2) - 2iab) \\
  &= \begin{cases}
    2|a|b &\quad (|a| \ge b) \\
    |t|^2 &\quad (|a| < b)
  \end{cases} \\
  & \le 2b|t|
\end{aligned}
$$

よって

$$
|F(s)| = |\hat{u}(q^{-1}(s), 0, \dots, 0)| \le C (1 + |s|)^N d(s)^{-M}
$$

$G: \mathbb{C} \setminus \mathbb{R}_{\ge 0} \to \mathbb{C}$ を $F$ の $M + 1$ 階の原始関数とすると

$$
\begin{aligned}
  \lim_{s \in \mathbb{R} + i\mathbb{R}_{>0}, s \to x} &G(s) \eqqcolon G(x + i0) &\quad (x > 0) \\
  \lim_{s \in \mathbb{R} + i\mathbb{R}_{<0}, s \to x} &G(s) \eqqcolon G(x - i0) &\quad (x > 0) \\
  \lim_{s \to 0} &G(s)
\end{aligned}
$$

が存在する。Cauchy の積分公式から

$$
G^{(N + M + 2)}(s) = \frac{(N + M + 2)!}{2\pi i} \int_0^\infty \frac{G(x + i0) - G(x - i0)}{(x - s)^{N + M + 3}} \, dx \quad (s \in \mathbb{C} \setminus \mathbb{R}_{\ge 0})
$$

$s_0 \in \mathbb{C} \setminus \mathbb{R}_{\ge 0}$ を固定する。$k \ge 0$, $s \in \mathbb{C} \setminus \mathbb{R}_{\ge 0}$, $x \in \mathbb{R}_{\ge 0}$ に対して

$$
\begin{aligned}
  \Psi_k(s, x) &\coloneqq \overbrace{\int_{s_0}^s ds \ \dots \int_{s_0}^s ds}^k \frac{k!}{(x - s)^{k + 1}} \\
  &= \overbrace{\int_{s_0}^s ds \ \dots \int_{s_0}^s ds}^{k - 1} \left(\frac{(k - 1)!}{(x - s)^k} - \frac{(k - 1)!}{(x - s_0)^k}\right) \\
  &= \frac{1}{x - s} - \sum_{j = 0}^{k - 1} \frac{(s - s_0)^j}{(x - s_0)^{j + 1}} \\
  &= \frac{1}{x - s} - \frac{1}{x - s} \left(1 - \left(\frac{s - s_0}{x - s_0}\right)^k\right) \\
  &= \frac{(s - s_0)^k}{(x - s)(x - s_0)^k}
\end{aligned}
$$

よって、$N + M + 1$ 次の多項式 $P$ が存在して

$$
G(s) = \frac{1}{2\pi i} \int_0^\infty (G(x + i0) - G(x - i0)) \Psi_{N + M + 2}(s, x) \, dx + P(s) \quad (s \in \mathbb{C} \setminus \mathbb{R}_{\ge 0})
$$

$s \in \mathbb{C} \setminus \mathbb{R}_{\ge 0}$ に対して

$$
\begin{aligned}
  F(s) &= G^{(M + 1)}(s) \\
  &= \frac{1}{2\pi i} \int_0^\infty (G(x + i0) - G(x - i0)) \partial_s^{M + 1}\Psi_{N + M + 2}(s, x) \, dx + P^{(M + 1)}(s)
\end{aligned}
$$

$$
\begin{aligned}
  \partial_s^{M + 1}\Psi_{N + M + 2}(s, x) &= \overbrace{\int_{s_0}^s ds \ \dots \int_{s_0}^s ds}^{N + 1} \frac{(N + M + 2)!}{(x - s)^{N + M + 3}} \\
  &= (-1)^{M + 1} \partial_x^{M + 1} \left[\overbrace{\int_{s_0}^s ds \ \dots \int_{s_0}^s ds}^{N + 1} \frac{(N + 1)!}{(x - s)^{N + 2}}\right] \\
  &= (-1)^{M + 1} \partial_x^{M + 1} \Psi_{N + 1}(s, x)
\end{aligned}
$$

$s \in \mathbb{C} \setminus \mathbb{R}_{\ge 0}$ に対して

$$
\begin{aligned}
  F(s) &= \frac{1}{2\pi i} \int_0^\infty d_x^{M + 1}(G(x + i0) - G(x - i0)) \Psi_{N + 1}(s, x) \, dx + P^{(M + 1)}(s) \\
  &= \frac{1}{2\pi i} \langle F(x + i0) - F(x - i0), \Psi_{N + 1}(s, x) \rangle + P^{(M + 1)}(s) \\
  &= (s - s_0)^{N + 1} \left\langle \frac{\rho(x)}{(x - s_0)^{N + 1}}, \frac{1}{x - s} \right\rangle + Q(s)
\end{aligned}
$$

ただし、$\rho(x) \coloneqq \frac{1}{2\pi i}(F(x + i0) - F(x - i0)) \in \mathcal{S}'(\mathbb{R})$, $Q(s) \coloneqq P^{(M + 1)}(s)$。$\mathrm{supp}\rho \subset \mathbb{R}_{\ge 0}$ であり、$Q$ は $N$ 次の多項式

$$
\hat{u}(\zeta) = F(\zeta^2) = \left\langle \frac{\rho(x)}{(x - s_0)^{N + 1}}, (\zeta^2 - s_0)^{N + 1} \frac{1}{x - \zeta^2} \right\rangle + Q(\zeta^2)
$$

$e_0 \coloneqq (1, 0, \dots, 0) \in V_+$ とする。$\xi \in V$ に対して、$\mathcal{S}'(V)$ 内で

$$
\begin{aligned}
  \hat{u}(\xi) &= \lim_{\varepsilon \to +0} \hat{u}(\xi - i\varepsilon e_0) \\
  &= \left\langle \frac{\rho(x)}{(x - s_0)^{N + 1}}, \langle (\mathcal{F}_v E_+(v, x))(\xi), (\xi^2 - s_0)^{N + 1} \psi(\xi) \rangle \right\rangle + \int Q(\xi^2)\psi(\xi) \, d\xi
\end{aligned}
$$

$$
u(\varphi) = \left\langle \frac{\rho(x)}{(x - s_0)^{N + 1}}, \langle E_+(v, x), (-\square_v - s_0)^{N + 1} \varphi(v) \rangle \right\rangle + (Q(-\square)\varphi)(0)
$$

# $\overline{V}_+$ 上の準不変測度

可測空間 $X$ 上の測度 $\mu, \nu$ が同値とは、任意の可測集合 $A \subset X$ に対して、$\mu(A) = 0 \Leftrightarrow \nu(A) = 0$ が成り立つことをいう

$G \curvearrowright X$ とする。$X$ 上の測度 $\nu$ が準不変とは、任意の $g \in G$ に対して、$\nu$ と $g\nu$ が同値なことをいう

以降、測度は全て正則 Borel 測度とする

$G$: Lie 群
$H \subset G$: 閉部分群
$G / H$ 上の非自明な $G$ 不変測度が存在するとする。これは、$H \curvearrowright |\wedge^{\mathrm{top}} (\mathfrak{g} / \mathfrak{h})^*|$ が自明なことと同値。$\Delta_G|_H = \Delta_H$ とも同値。$G$, $H$ が連結で $\mathfrak{g}, \mathfrak{h}$ の根基が冪零ならば十分。$G / H$ 上の非自明な $G$ 不変測度は $\mathbb{R}_{>0}$ 倍を除いて一意的

$\mu$ は $G / H$ 上の非自明な $G$ 不変測度とする。$\pi_*: C_c(G) \ni f \mapsto (x \mapsto \int_H f(xh) \, dh) \in C_c(G / H)$ は $G$ 同変かつ全射

$$
(\pi^*\mu)(f) \coloneqq \int_{G / H} \pi_* f \, d\mu \quad (f \in C_c(G))
$$

は $G$ 不変だから、$G$ 上の (左) Haar 測度と $\mathbb{R}_{>0}$ 倍を除いて一致する

$G / H$ 上の非自明な $G$ 不変測度が存在するとする。$G / H$ 上の準不変測度は、$G$ 不変測度と同値

$\mu$ は $G / H$ 上の準不変測度とする。$\pi^*\mu$ は準不変だから、$H = 1$ として良い。$A \subset G$ を Borel 集合とする。$\mu(A) = 0 \Leftrightarrow \int_G \mu(gA) \, dg = 0$。$\int_G \mu(gA) \, dg \in [0, \infty]$ なことに注意

$$
\begin{aligned}
  \int_G \mu(gA) \, dg &= \int_G dg \int_{x \in gA} \, d\mu(x) \\
  &= \int_G d\mu(x) \int_{g \in xA^{-1}} \, dg \\
  &= \mu(G) \mu_G(A^{-1})
\end{aligned}
$$

ただし、$\mu_G$ は $G$ 上の (左) Haar 測度。よって、$\mu(A) = 0 \Leftrightarrow \mu_G(A^{-1}) = 0 \Leftrightarrow \mu_G(A) = 0$

https://en.wikipedia.org/wiki/Disintegration_theorem

$B = \mathbb{R}^n$, $E = \mathbb{R}^m$
$\pi: E \to B$: 可測
$\mu$: $E$ 上の確率測度
$\pi_*\mu$-a.e. の $b \in B$ に対して、$E_b \coloneqq \pi^{-1}(b)$ 上の確率測度 $\mu_b$ が存在して、任意の Borel 集合 $X \subset E$ に対して、$b \mapsto \mu_b(X_b)$ は可測かつ

$$
\mu(X) = \int_B \mu_b(X_b) \, d(\pi_*\mu)(b)
$$

略記すると、$\mu = \int_B \mu_b \, d(\pi_*\mu)(b)$。また、$\mu_b$ は $\pi_*\mu$-a.e. で一意的

$C_0(E)$ は可分だから、可算稠密部分集合 $\mathcal{V} \subset C_0(E)$ が取れる。$\mathcal{V}$ は $\mathbb{Q}$ 線形部分空間として良い。$f \in \mathcal{V}$ とすると、$\pi_*(f\mu)$ は $\pi_*\mu$ に対して絶対連続だから

$$
\lambda_f \coloneqq \frac{d(\pi_*(f\mu))}{d(\pi_*\mu)} \in L^1(B, \pi_*\mu)
$$

が取れる。代表元 $\lambda_f: B \to \mathbb{R}$ を選択する。$\pi_*\mu$-零集合 $N \subset B$ が存在して、$b \in B \setminus N$ ならば

$$
\begin{aligned}
  \lambda_{af + bg}(b) &= a\lambda_f(b) + b\lambda_g(b) &\quad (a, b \in \mathbb{Q}, f, g \in \mathcal{V}) \\
  \lambda_f(b) &\ge 0 &\quad (f \in \mathcal{V}, f \ge 0) \\
  |\lambda_f(b)| &\le \|f\|_\infty &\quad (f \in \mathcal{V})
\end{aligned}
$$

$b \in B \setminus N$ に対して、$\mathcal{V} \ni f \mapsto \lambda_f(b) \in \mathbb{R}$ は正値な有界線形汎関数 $\mu_b: C_0(E) \to \mathbb{R}$ に一意的に拡張する。$f \in \mathcal{V}$ かつ $A \subset B$ が Borel 集合ならば

$$
\int_A d(\pi_*\mu)(b) \int f \, d\mu_b = \int_A \lambda_f(b) \, d(\pi_*\mu)(b) = \int_{\pi^{-1}(A)} f \, d\mu
$$

極限を取れば、$f \in C_0(E)$ で成り立つ。さらに、任意の開集合 $X \subset E$ に対して、$1_X$ を近似すれば

$$
\int_A \mu_b(X) \, d(\pi_*\mu)(b) = \mu(\pi^{-1}(A) \cap X)
$$

極限を取れば、$X$ が Borel 集合で成り立つ。よって、任意の Borel 集合 $Z \subset B$ に対して

$$
\int_A \mu_b(\pi^{-1}(Z)) \, d(\pi_*\mu)(b) = \mu(\pi^{-1}(A \cap Z)) = \int_A 1_Z(b) \, d(\pi_*\mu)(b)
$$

よって、$\pi_*\mu$-a.e. で $\mu_b(\pi^{-1}(Z)) = 1_Z(b)$。$Z = B$ とすれば、$\pi_*\mu$-a.e. で $\mu_b(E) = 1$。また、$U_i \subset B$ を可算開基とすると、$\pi_*\mu$-a.e. で

$$
\mu_b(\pi^{-1}(U_i)) = 1_{U_i}(b) \quad (i = 1, 2, \dots)
$$

よって、$\pi_*\mu$-a.e. で

$$
\mu_b(E \setminus E_b) \le \sum_{b \not\in U_i} \mu(\pi^{-1}(U_i)) = 0
$$

総合すると、$\mu_b$ は $\pi_*\mu$-a.e. で $E_b$ 上の確率測度になる

https://ja.wikipedia.org/wiki/%E3%83%87%E3%82%A3%E3%83%B3%E3%82%AD%E3%83%B3%E6%97%8F#%E3%83%87%E3%82%A3%E3%83%B3%E3%82%AD%E3%83%B3%E6%97%8F%E5%AE%9A%E7%90%86

最後に一意性を示す。$\tilde{\mu}_b$ も条件を満たすとする。任意の Borel 集合 $X \subset E$ と $A \subset B$ に対して

$$
\int_A \mu_b(X_b) \, d(\pi_*\mu)(b) = \int_A \tilde{\mu}_b(X_b) \, d(\pi_*\mu)(b)
$$

よって、$\pi_*\mu$-a.e. で $\mu_b(X_b) = \tilde{\mu}_b(X_b)$。$W_j \subset E$ を可算開基とし、$W_j$ が生成する乗法族を $\mathcal{W}$ とする。$\pi_*\mu$-a.e. で

$$
\mu_b(W_b) = \tilde{\mu}_b(W_b) \quad (\forall W \in \mathcal{W})
$$

よって、$\pi_*\mu$-a.e. で

$$
\{ W_b \mid W \in \mathcal{W} \} \subset \{ F \subset E_b \mid F \text{ は Borel 集合で } \mu_b(F) = \tilde{\mu}_b(F) \}
$$

右辺は Dynkin 族で、左辺は乗法族かつ $\sigma$-加法族 $E_b$ を生成する

$\nu$: $\overline{V}_+$ 上の準不変な有限測度
$c \ge 0$ と $\mathbb{R}_{\ge 0}$ 上の有限測度 $\rho$ と $f \in L^1(\overline{V}_+ \setminus \{0\}, \int_{s \ge 0} \mu_{\sqrt{s}} \, d\rho(s))$ で $f > 0 \ (\int_{s \ge 0} \mu_{\sqrt{s}} \, d\rho(s)\text{-a.e.})$ なものが存在して

$$
\nu(E) = c \delta(E \cap \{0\}) + \int_{s \ge 0} d\rho(s) \int_{E_s} f(v) \, d\mu_{\sqrt{s}}(v) \quad (E \subset \overline{V}_+ \text{ は Borel 集合})
$$

ただし、$E_s \coloneqq E \cap \mathcal{O}_{\sqrt{s}}$ で $\mu_{\sqrt{s}}$ は $\mathcal{O}_{\sqrt{s}}$ 上の標準的な不変測度。略記すると、$\nu = c \delta + \int_{s \ge 0} d\rho(s) f(v) \mu_{\sqrt{s}}(v)$

$\nu - \nu(\{0\})\delta$ を考えれば、$\nu(\{0\}) = 0$ として良い。$s: \overline{V}_+ \setminus \{0\} \ni v \mapsto v^2 \in \mathbb{R}_{\ge 0}$ とする。$\rho \coloneqq s_*\nu$ は $\mathbb{R}_{\ge 0}$ 上の有限測度。$\nu$ が $\int_{s \ge 0} \mu_{\sqrt{s}} \, d\rho(s)$ と同値なことを示せば良い。分解定理から、$s \ge 0$ に対して、$\mathcal{O}_{\sqrt{s}}$ 上の確率測度 $\nu_s$ が存在して

$$
\nu = \int_{s \ge 0} \nu_s \, d\rho(s)
$$

$\rho$-a.e. で $\nu_s$ が準不変なことを示したいが、複雑なので、以下のように回避する。$\alpha \in L^1(G)$ で $\alpha > 0$ なものを固定する

$$
\tilde{\nu} \coloneqq \int_G \alpha(g) (g\nu) \, dg
$$

と定義すると、$\nu$ は $\tilde{\nu}$ と同値

$$
\tilde{\nu} = \int_G \alpha(g) \, dg \int_{s \ge 0} g\nu_s \, d\rho(s) = \int_{s \ge 0} d\rho(s) \int_G \alpha(g) (g\nu_s) \, dg \eqqcolon \int_{s \ge 0} \tilde{\nu}_s \, d\rho(s)
$$

$\tilde{\nu}_s$ が準不変なことを示す

$$
\begin{aligned}
  \tilde{\nu}_s(E) &= \int_G \alpha(g) \nu_s(g^{-1}E_s) \, dg \\
  &= \int_G \alpha(g) \, dg \int_{x \in g^{-1}E_s} d\nu_s(x) \\
  &= \int_{\mathcal{O}_{\sqrt{s}}} d\nu_s(x) \int_G \alpha(g) 1_{E_s}(gx) \, dg \\
  &= C \int_{\mathcal{O}_{\sqrt{s}}} d\nu_s(x) \int_{E_s} d\mu_{\sqrt{s}}(y) \int_{G_x} \alpha(g(y, x)h) \, dh \\
  &= C \int_{E_s} d\mu_{\sqrt{s}}(y) \int_{\mathcal{O}_{\sqrt{s}}} d\nu_s(x) \int_{G_x} \alpha(g(y, x)h) \, dh \\
  &= C \int_{E_s} d\mu_{\sqrt{s}}(y) \int_{\mathcal{O}_{\sqrt{s}}} d\nu_s(x) \int_{G_{x_0}} \alpha(g(y, x_0)h g(x, x_0)^{-1}) \, dh
\end{aligned}
$$

ただし、可測関数 $g(y, x): \mathcal{O}_{\sqrt{s}} \times \mathcal{O}_{\sqrt{s}} \to G$ は $g(y, x)x = y$ なるように取り、$x_0 \in \mathcal{O}_{\sqrt{s}}$ は適当に固定する

$A \subset \overline{V}_+ \setminus \{0\}$ を Borel 集合とすると

$$
\begin{aligned}
  &\int_{s \ge 0} \mu_{\sqrt{s}}(A_s) \, d\rho(s) = 0 \\
  &\quad \Leftrightarrow \rho\text{-a.e. で } \mu_{\sqrt{s}}(A_s) = 0 \\
  &\quad \Leftrightarrow \rho\text{-a.e. で } \tilde{\nu}_s(A_s) = 0 \\
  &\quad \Leftrightarrow \tilde{\nu}(A) = 0 \\
  &\quad \Leftrightarrow \nu(A) = 0
\end{aligned}
$$

# 真空の一意性

https://zenn.dev/link/comments/85b993ae05292a

Wightman QFT を考える

$\mathcal{H}$ の $V$ 不変空間 $\mathcal{H}^V$ が $1$ 次元なことと、任意の $n, m \ge 0$ と $a \in V_\mathrm{space}$ に対して

$$
\mathcal{W}_{n + m}(v_1, \dots, v_n, w_1 + \lambda a, \dots, w_m + \lambda a) \xrightarrow{\lambda \to \infty} \mathcal{W}_n(v_1, \dots, v_n) \mathcal{W}_m(w_1, \dots, w_m)
$$

が成り立つことは同値

まず、$a \in V_\mathrm{space}$ ならば WOT で $U(\lambda a) \xrightarrow{\lambda \to \infty} \mathrm{pr}_{\mathcal{H}^V}$ を示す

$$
U(x) = \int_{\overline{V}_+} e^{ipx} \, dE
$$

とすると、$\mathrm{pr}_{\mathcal{H}^V} = E(\{0\})$。これは、一般に

$$
\begin{aligned}
  \left(\int f \, dE\right)x = 0 &\Leftrightarrow \|\left(\int f \, dE\right)x\| = 0 \\
  &\Leftrightarrow \int |f|^2 \, dE_{x, x} = 0
\end{aligned}
$$

が成り立つことから従う。$\Phi, \Psi \in \mathcal{H}$ に対して

$$
\int_{\overline{V}_+ \setminus \{0\}} e^{i\lambda pa} \, dE_{\Phi, \Psi} \xrightarrow{\lambda \to \infty} 0
$$

を示せば良い。$U(g)U(x)U(g)^{-1} = U(gx) \ (g \in G, x \in V)$ だから

$$
U(g)E(A)U(g)^{-1} = E(gA) \quad (g \in G, A \subset \overline{V}_+ \text{ は Borel 集合})
$$

$$
\begin{aligned}
  \int_{\overline{V}_+ \setminus \{0\}} e^{i\lambda pa} \, dE_{\Phi, \Psi} &= \int_{\overline{V}_+ \setminus \{0\}} e^{-i\lambda(\Lambda p)_1\sqrt{-a^2}} \, dE_{\Phi, \Psi} \\
  &= \int_{\overline{V}_+ \setminus \{0\}} e^{-i\lambda\sqrt{-a^2}p_1} \, dE_{\Phi', \Psi'} \\
  &= \int e^{-i\lambda\sqrt{-a^2}p_1} \, d(p_{1, *}(E_{\Phi', \Psi'}|_{\overline{V}_+ \setminus \{0\}}))
\end{aligned}
$$

ただし、$\Lambda \in G$ は $\Lambda a = (0, \sqrt{-a^2}, 0, \dots, 0)$ なるように取り、$\Phi' \coloneqq U(\Lambda)\Phi$, $\Psi' \coloneqq U(\Lambda)\Psi$ とした

https://en.wikipedia.org/wiki/Riemann%E2%80%93Lebesgue_lemma

Riemann–Lebesgue の補題から、$p_{1, *}(E_{\Phi', \Psi'}|_{\overline{V}_+ \setminus \{0\}})$ が絶対連続なことを示せば良い。$\mathcal{S}(\mathcal{R})$ は可分だから、$\mathcal{H}$ も可分。$\{ e_i \}_{i = 1}^\infty \subset \mathcal{H}$ を正規直交基底とすると

$$
\nu \coloneqq \sum_{i = 1}^\infty \frac{1}{2^i} E_{e_i, e_i}
$$

は $\overline{V}_+$ 上の確率測度で、任意の Borel 集合 $A \subset \overline{V}_+$ に対して、$E(A) = 0 \Leftrightarrow E(A)e_i = 0 \ (i = 1, 2, \dots) \Leftrightarrow \nu(A) = 0$。また、任意の $g \in G$ と Borel 集合 $A \subset \overline{V}_+$ に対して

$$
\nu(gA) = 0 \Leftrightarrow E(gA) = 0 \Leftrightarrow E(A) = 0 \Leftrightarrow \nu(A) = 0
$$

だから $\nu$ は準不変。よって

$$
\nu = c_0\delta + \int_{s \ge 0} d\rho(s) f_0(v) \mu_{\sqrt{s}}(v)
$$

と表せる。ただし、$c_0 \ge 0$ で $\rho$ は $\mathbb{R}_{\ge 0}$ 上の有限測度であり、$f_0 \in L^1(\overline{V}_+ \setminus \{0\}, \int_{s \ge 0} \mu_{\sqrt{s}} \, d\rho(s))$ は $f_0 > 0 \ (\int_{s \ge 0} \mu_{\sqrt{s}} \, d\rho(s)\text{-a.e.})$ を満たす。$E_{\Phi', \Psi'}$ は $\nu$ に対して絶対連続だから、$c \ge 0$ と $f \in L^1(\overline{V}_+ \setminus \{0\}, \int_{s \ge 0} \mu_{\sqrt{s}} \, d\rho(s))$ があって

$$
E_{\Phi', \Psi'} = c\delta + \int_{s \ge 0} d\rho(s) f(v) \mu_{\sqrt{s}}(v)
$$

と表せる。よって、Borel 集合 $X \subset \mathbb{R}$ に対して

$$
\begin{aligned}
  (p_{1, *}(E_{\Phi', \Psi'}|_{\overline{V}_+ \setminus \{0\}}))(X) &= \int_{s \ge 0} d\rho(s) (p_{1, *}(f(v) \mu_{\sqrt{s}}(v)))(X) \\
  &= \int_{s \ge 0} d\rho(s) \int_X dp_1 \int_{\mathbb{R}^{d - 2}} f(E, p_1, p'') \frac{1}{2E} dp''
\end{aligned}
$$

ただし、$E \coloneqq \sqrt{p_1^2 + |p''|^2 + s}$

$$
\begin{aligned}
  &\mathcal{W}_{n + m}(f_1, \dots, f_n, g_1(\cdot - \lambda a), \dots, g_m(\cdot - \lambda a)) \\
  &\quad = \langle \Omega, \varphi(f_1) \cdots \varphi(f_n)U(\lambda a)\varphi(g_1) \cdots \varphi(g_m)\Omega \rangle \\
  &\quad = \langle \varphi(f_n) \cdots \varphi(f_1)\Omega, U(\lambda a)\varphi(g_1) \cdots \varphi(g_m)\Omega \rangle \\
  &\xrightarrow{\lambda \to \infty} \langle \varphi(f_n) \cdots \varphi(f_1)\Omega, \mathrm{pr}_{\mathcal{H}^V}\varphi(g_1) \cdots \varphi(g_m)\Omega \rangle
\end{aligned}
$$

$\mathrm{dim} \mathcal{H}^V = 1$ $\Rightarrow$ クラスター分解性

$$
\begin{aligned}
  &\langle \varphi(f_n) \cdots \varphi(f_1)\Omega, \mathrm{pr}_{\mathcal{H}^V}\varphi(g_1) \cdots \varphi(g_m)\Omega \rangle \\
  &\quad = \langle \varphi(f_n) \cdots \varphi(f_1)\Omega, \Omega \rangle \langle \Omega, \varphi(g_1) \cdots \varphi(g_m)\Omega \rangle \\
  &\quad = \mathcal{W}_n(f_1, \dots, f_n) \mathcal{W}_m(g_1, \dots, g_m)
\end{aligned}
$$

クラスター分解性 $\Rightarrow$ $\mathrm{dim} \mathcal{H}^V = 1$

$\mathrm{pr}_{\mathcal{H}^V} = \mathrm{pr}_{\mathbb{C}\Omega}$ から従う

# PCT 定理

https://zenn.dev/ryoaq/books/mathematical-notes/viewer/math2#wightman-function-%E3%81%AE%E8%A7%A3%E6%9E%90%E6%8E%A5%E7%B6%9A

https://zenn.dev/ryoaq/books/mathematical-notes/viewer/math2#%E3%81%AB%E8%BF%91%E3%81%A5%E3%81%8F%E6%99%82%E3%81%AE%E6%8C%AF%E3%82%8B%E8%88%9E%E3%81%84

スカラー Wightman QFT を考える。次元 $d$ は偶数とすると

$$
\mathcal{W}_n(v_1, \dots, v_n) = \mathcal{W}_n(-v_n, \dots, -v_1)
$$

が成り立つ

$\mathcal{W}_n \in \mathcal{S}'(V^n, \mathbb{C})$。$\mathrm{pr}: V^n \ni (v_1, \dots, v_n) \mapsto (v_1 - v_2, \dots, v_{n - 1} - v_n) \in V^{n - 1}$ とすると、$W_n \in \mathcal{S}'(V^{n - 1}, \mathbb{C})$ があって

$$
\mathcal{W}_n = \mathrm{pr}^* W_n
$$

$\mathrm{supp}(\mathcal{F}W_n) \subset \overline{V}_+^{n - 1}$ だから、$\tilde{W}_n \in \mathcal{O}(\mathcal{T}^{n - 1})$ が構成でき、$G_\mathbb{C} \times \mathfrak{S}_n$ 不変な $\tilde{W}_n \in \mathcal{O}(\bigcup_{\sigma \in \mathfrak{S}_n} \sigma\tilde{\mathcal{T}}^{n - 1})$ まで拡張できた

$w_0 \in \mathfrak{S}_n$ を逆順にする置換とする。$V_{n - 1} \xrightarrow{\times -1} V_{n - 1} \xrightarrow{w_0 \cdot} V_{n - 1}$ は $(\xi_1, \dots, \xi_n) \mapsto (\xi_n, \dots, \xi_1)$ と一致する。$-1 \in G_\mathbb{C}$ に注意。目標の等式は $W_n$ で見ると

$$
W_n(\xi_1, \dots, \xi_{n - 1}) = W_n(\xi_{n - 1}, \dots, \xi_1)
$$

$\eta_1, \dots, \eta_{n - 1} \in V_+$ とすると、$\mathcal{S}'(V^{n - 1})$ 内で

$$
\begin{aligned}
  W_n(\xi_1, \dots, \xi_{n - 1}) &= \lim_{\varepsilon \to +0} \tilde{W}_n(\xi_1 - i\varepsilon\eta_1, \dots, \xi_n - i\varepsilon\eta_{n - 1}) \\
  &= \lim_{\varepsilon \to +0} \tilde{W}_n(\xi_n - i\varepsilon\eta_{n - 1}, \dots, \xi_1 - i\varepsilon\eta_1) \\
  &= W_n(\xi_{n - 1}, \dots, \xi_1)
\end{aligned}
$$

# Spinor QFT の導入

https://zenn.dev/link/comments/bbb4f536f2afbc

https://zenn.dev/link/comments/394ad0291e8897

https://zenn.dev/link/comments/3577eea2639d97

$d \equiv 2 \mod 8$ とする。$C(V) \simeq M_{2^{\frac{d}{2} - 1}|2^{\frac{d}{2} - 1}}(\mathbb{R})$

既約な $C(V)$ 加群は $S, \Pi S$ の $2$ つ。$S = S^+ \oplus S^-$ とすると、$S^\pm$ は $2^{\frac{d}{2} - 1}$ 次元。既約 $C(V)^+$ 加群は $S^\pm$ の $2$ つ

$C(V)$ の作用から $s: V \otimes S^\pm \to S^\mp$ がある

https://zenn.dev/link/comments/f6a08b7b13411b

$C(V)$ 加群 $S^*$ を $\beta$ で捻って定義すると、既約性から $S$ または $\Pi S$ と同型。$\otimes \mathbb{C}$ を考えると、分類から、$S^* \simeq \Pi S$ がわかる。よって、odd な非退化 pairing $(-, -): S \otimes S \to \mathbb{R}$ が $\mathbb{R}^\times$ 倍を除いて一意的に定まる。$\beta$ は involutive だから、この pairing は対称または反対称。$\otimes \mathbb{C}$ を考えると、再び分類から、この pairing は対称なことがわかる。以降、pairing $(-, -): S \otimes S \to \mathbb{R}$ を固定する

$\Gamma_+: S^+ \otimes S^+ \to V$ を、$S^+ \otimes S^+ \otimes V^* \simeq S^+ \otimes S^+ \otimes V \xrightarrow{s} S^+ \otimes S^- \to \mathbb{R}$ で定義する。$\Gamma_+$ は非自明かつ対称で $\mathrm{Spin}(V)$ 同変。$\Gamma_-: S^- \otimes S^- \to V$ も同様に定義する

$\mathrm{Map}(V, \mathbb{R}^{0|1} \otimes S^\pm)$ を supermanifold から集合への関手 $B \mapsto \mathrm{Map}(V \times B, \mathbb{R}^{0|1} \otimes S^\pm) \simeq \mathcal{O}_1(V \times B) \otimes S^\pm \simeq C^\infty(V) \hat{\otimes} \mathcal{O}_1(B) \otimes S^\pm \simeq C^\infty(V, S^\pm) \hat{\otimes} \mathcal{O}_1(B)$ で定義する

$D: \mathrm{Map}(V, \mathbb{R}^{0|1} \otimes S^\pm) \to \mathrm{Map}(V, \mathbb{R}^{0|1} \otimes S^\mp)$ を

$$
\mathrm{Map}(V, \mathbb{R}^{0|1} \otimes S^\pm) \xrightarrow{d} \mathrm{Map}(V, \mathbb{R}^{0|1} \otimes S^\pm \otimes V^*) \xrightarrow{\Gamma_\pm} \mathrm{Map}(V, \mathbb{R}^{0|1} \otimes S^\mp)
$$

で定義する。$D^2 = \square$ を示す

$$
D^2 \psi = D(\sum_i s(e_i) \frac{\partial \psi}{\partial x_i}) = \sum_{i, j} s(e_i)s(e_j) \frac{\partial^2 \psi}{\partial x_i \partial x_j} = \square \psi
$$

$\psi \in \mathrm{Map}(V, \mathbb{R}^{0|1} \otimes S^+)$ 上の Lagrangian

$$
L \coloneqq \frac{1}{2} (\psi, D\psi) |dx|
$$

を考える

$$
\delta L = (\delta\psi, D\psi) |dx| - \frac{1}{2} d(\iota(\Gamma_+(\psi, \delta\psi)) |dx|)
$$

運動方程式は $D\psi = 0$ で

$$
\begin{aligned}
  \gamma &= \frac{1}{2} \iota(\Gamma_+(\psi, \delta\psi)) |dx| \\
  \omega &= \delta\gamma = \frac{1}{2} \iota(\Gamma_+(\delta\psi, \delta\psi)) |dx|
\end{aligned}
$$

$$
\mathrm{Sol} \coloneqq \{ \Psi \in \mathrm{Map}(V, \mathbb{R}^{0|1} \otimes S^+) \mid D\Psi = 0 \}
$$

$\Sigma$ を (空でない) 連結閉な spacelike 超曲面とすると

$$
\int_\Sigma \omega \in \Omega^2(\mathrm{Sol})
$$

は $\Sigma$ に依らない。各 $\Psi \in \mathrm{Sol}$ に対して

$$
[-, -]: T_\Psi\mathrm{Sol} \times T_\Psi\mathrm{Sol} \simeq \mathrm{Sol} \times \mathrm{Sol} \ni (\psi_1, \psi_2) \mapsto \int_\Sigma \iota(\Gamma_+(\psi_1, \psi_2)) |dx| \in \mathbb{R}
$$

が定まるが、$\Psi$ に依らない。以降 $d \ne 2$ とする。反転を伴う Fourier 変換を使うと、$p = 0$ などは無視して形式的に

$$
\begin{aligned}
  \Pi \mathrm{Sol} &\sim \{ \psi \in \mathcal{S}'(V, S^+) \mid D\psi = 0 \} \\
  &\simeq \{ F \in \mathcal{S}'(V, S^+ \otimes \mathbb{C}) \mid F(-p) = \overline{F(p)}, s(p)F = 0 \} &\quad (F = \mathcal{F}\psi(-p)) \\
  &\sim \{ f \in \mathcal{S}'(\mathcal{O}_0, S^+ \otimes \mathbb{C}) \mid f(-p) = \overline{f(p)}, s(p)f = 0 \} &\quad (s(p)^2 = p^2) \\
  &\simeq \{ f \in \mathcal{S}'(\mathcal{O}_0, \mathcal{A} \otimes \mathbb{C}) \mid f(-p) = \overline{f(p)} \}
\end{aligned}
$$

ただし、実ベクトル束 $\mathcal{A} \to \mathcal{O}_0$ は以下のように定義する。$\mathcal{O}_0 \times S^\pm$ は $\mathrm{Spin}(V)$ 同変ベクトル束。$s(p): \mathcal{O}_0 \times S^+ \to \mathcal{O}_0 \times S^-$ は $\mathrm{Spin}(V)$ 同変ベクトル束の射になる。$g \in \mathrm{Spin}(V)$, $p \in \mathcal{O}_0$, $\eta \in S^+$ とすると

$$
s(gp)g\eta = gs(p)\eta
$$

$\mathrm{Spin}(V) \curvearrowright \mathcal{O}_0$ は推移的だから、$s(p)$ は constant rank であり、ベクトル束 $\mathcal{A} \coloneqq \mathrm{Ker}(s(p))$ が定まる。$\mathcal{A}_{e_0 + e_1} = \mathrm{Ker}(s(e_0 + e_1): S^+ \to S^-)$ を調べる。$\eta \in S^+$ に対して

$$
s(e_0 + e_1)\eta = 0 \Leftrightarrow (1 + s(e_0)s(e_1))\eta = 0
$$

$(s(e_0)s(e_1))^2 = 1$ で $\mathrm{Ker}(s(e_0)s(e_1) - 1) \xrightarrow{s(e_1)s(e_2)} \mathrm{Ker}(s(e_0)s(e_1) + 1)$ は同型。よって、$\mathrm{rk}\mathcal{A} = \frac{1}{2} \mathrm{dim}S^+ = 2^{\frac{d}{2} - 2}$

$\mathrm{Spin}(V)$ 同変ベクトル束の射 $\Gamma_+: \mathcal{A} \otimes \mathcal{A} \to \mathcal{O}_0 \times V$ は、自明な線束 $\Theta$ を $\Theta \coloneqq \{ (p, \mathbb{R}p) \mid p \in \mathcal{O}_0 \} \subset \mathcal{O}_0 \times V$ で定義すると、$\Gamma_+: \mathcal{A} \otimes \mathcal{A} \to \Theta$ を誘導することを示す。$e_0 + e_1 \in \mathcal{O}_0$ で示せば良い。$\xi, \eta \in \mathcal{A}_{e_0 + e_1}$ とする。$(\Gamma_+(\xi, \eta), v) = (\xi, s(v)\eta)$ だから

$$
\Gamma_+(\xi, \eta) = (\xi, s(e_0)\eta)e_0 - \sum_{j = 1}^d (\xi, s(e_j)\eta)e_j
$$

$$
\begin{aligned}
  (\xi, s(e_0)\eta)e_0 - (\xi, s(e_1)\eta)e_1 &= (\xi, s(e_0)\eta)(e_0 + e_1) \\
  &= (\xi, s(q)\xi)(e_0 + e_1) \quad (q \in V, (e_0 + e_1)q = 1)
\end{aligned}
$$

また、$j \ge 2$ ならば

$$
\begin{aligned}
  (\xi, s(e_j)\eta) &= -(\xi, s(e_j)s(e_0)s(e_1)\eta) \\
  &= -(\xi, s(e_0)s(e_1)s(e_j)\eta) \\
  &= -(s(e_1)s(e_0)\xi, s(e_j)\eta) \\
  &= (s(e_0)s(e_1)\xi, s(e_j)\eta) \\
  &= -(\xi, s(e_j)\eta)
\end{aligned}
$$

$\Theta$ は自明だから、$\mathrm{Spin}(V)$ 不変で対称な非退化 pairing $\langle -, - \rangle_{\mathcal{A}} \in \Gamma(\mathcal{O}_0, \mathcal{A}^* \otimes \mathcal{A}^*)$ ができる

$$
\begin{aligned}
  \langle \xi, \eta \rangle_{\mathcal{A}_p} &= (\xi, s(q)\eta) \quad (q \in V, pq = 1) \\
  &= \frac{1}{p_0} (\xi, s(e_0)\eta)
\end{aligned}
$$

$\langle -, - \rangle_{\mathcal{A}}$ は正定値または負定値なことを示す。Hermite 形式 $h: (S^+ \otimes \mathbb{C}) \otimes (S^+ \otimes \mathbb{C}) \ni (\xi, \eta) \mapsto (\xi, s(e_0)\bar{\eta})$ が正定値または負定値なことを示せば良い。$E \coloneqq i\mathbb{R} \oplus \mathbb{R}^{d - 1} \subset V_\mathbb{C}$ とする。$\mathrm{Spin}(E)$ はコンパクトで $\mathrm{Spin}(E) \curvearrowright S^+ \otimes \mathbb{C}$ は既約だから、$h$ が $\mathrm{Spin}(E)$ 不変なことを示せば良い。$\mathfrak{spin}(E) = \mathrm{span}_{\mathbb{R}} \{ is(e_0)s(e_j), s(e_j)s(e_k) \mid 1 \le j, k \le d \}$ であり

$$
\begin{aligned}
  h(is(e_0)s(e_j)\xi, \eta) &= i(\xi, s(e_j)\bar{\eta}) = -h(\xi, is(e_0)s(e_j)\eta) \\
  h(s(e_j)s(e_k)\xi, \eta) &= (s(e_j)s(e_k)\xi, s(e_0)\bar{\eta}) = -h(\xi, s(e_j)s(e_k)\eta)
\end{aligned}
$$

**以降、pairing $(-, -): S \otimes S \to \mathbb{R}$ は $\langle -, - \rangle_{\mathcal{A}}$ が正定値になるようにとる**

$H \coloneqq \{ f \in L^2(\mathcal{O}_0, \mathcal{A} \otimes \mathbb{C}) \mid f(-p) = \overline{f(p)} \}$

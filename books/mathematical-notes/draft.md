---
title: "draft"
---

## 設定

$V \coloneqq (\mathbb{R}^d, dx_0^2 - dx_1^2 - \cdots - dx_{d - 1}^2)$
$\mathcal{F} \coloneqq C^\infty(V, \mathbb{R})$

$$
L \coloneqq \left\{ \frac{1}{2} |d\varphi|^2 - \frac{m^2}{2} \varphi^2 \right\} |dx|
$$

$$
\begin{aligned}
  \delta L &= - \langle d \delta \varphi, d \varphi \rangle |dx| - m^2 \varphi \delta \varphi |dx| \\
  &= - d \delta \varphi \wedge * d \varphi - m^2 \varphi \delta \varphi |dx| \\
  &= - d (\delta \varphi \wedge * d \varphi) - \delta \varphi \wedge d * d \varphi - m^2 \varphi \delta \varphi |dx|
\end{aligned}
$$

$$
\underline{D} L = - \delta \varphi (\square + m^2) \varphi |dx|
$$

$$
\gamma = \delta \varphi \wedge * d \varphi
$$

## シンプレクティック形式の構成

$f: \mathbb{R}^n \to \mathbb{R}$
$0 \in \mathbb{R}$ は $f$ の正則値とする。$N \coloneqq f^{-1}(0)$、$T \in \mathcal{D}'(\mathbb{R}^n)$ が $fT = 0$ を満たせば、$g \in \mathcal{D}'(N)$ が一意的に存在して

$$
T(\varphi) = g(\varphi|_N)
$$

$$
\omega = -\delta \gamma = \delta \varphi \wedge \delta * d \varphi \in \Omega^{2, |-1|}(\mathcal{F} \times V)
$$

マイナスは物理的に標準的なものとの整合性をとるために入れている

$\mathrm{Sol} \coloneqq \{ \varphi \in \mathcal{F} \mid (\square + m^2)\varphi = 0 \}$ は線形空間だから、$\omega$ を $\mathrm{Sol} \times V$ に制限したものは、$\Omega^{2, |-1|}(\mathrm{Sol} \times M)$

$\mathrm{Sol} \times V$ 上 $d\omega = 0$ だから

$$
\int_{\{t = c\}} \omega \in \Omega^{2, |-1|}(\mathrm{Sol})
$$

は $c$ に依らない。$\mathrm{Sol}$ の各点 $p$ で

$$
[-, -]: T_p\mathrm{Sol} \times T_p\mathrm{Sol} \simeq \mathrm{Sol} \times \mathrm{Sol} \ni (\varphi_1, \varphi_2) \mapsto \int_{\{t = c\}} *(\varphi_1 \wedge d \varphi_2 - \varphi_2 \wedge d \varphi_1) \in \mathbb{R}
$$

は $p$ に依らない。$\mathrm{Sol}$ は Fourier 変換すると、$\{ \varphi \in \mathcal{S}(V, \mathbb{C}) \mid f(-p) = \overline{f(p)}, (-p^2 + m^2)f = 0 \}$ これが $H \coloneqq \{ L^2(\mathcal{O}_m) \mid f(-p) = \overline{f(p)} \}$ に一致するようなクラスを考える

## フーリエ展開による具体的計算

$f_i(p) = f_i^+(p) + f_i^-(p)$ とする。逆 Fourier 変換して

$$
\varphi_i(u) = (2\pi)^{-d/2} \int_{x, p \in \mathcal{O}_m} e^{i px} f_i(p) u(x) d\mu(p)
$$

$$
\varphi_i|_{t = 0}(v) = (2\pi)^{-d/2} \int_{x', p \in \mathcal{O}_m} e^{i p'x'} f_i(p) v(x') d\mu(p)
$$

$E(p') \coloneqq \sqrt{m^2 + p'^2}$

$$
\begin{aligned}
  \partial_t \varphi_i(u) &= -(2\pi)^{-d/2} \int_{x, p \in \mathcal{O}_m} ip_0 e^{i px} f_i(p) u(x) d\mu(p) \\
  &= -(2\pi)^{-d/2} \int_{x, p \in \mathcal{O}_m^+} i E(p') e^{i px} f_i(p) u(x) d\mu(p) + (2\pi)^{-d/2} \int_{x, p \in \mathcal{O}_m^-} i E(p') e^{i px} f_i(p) u(x) d\mu(p) \\
  &= (2\pi)^{-d/2} \int_{x, p \in \mathcal{O}_m^+} i E(p') (-e^{i px} f_i(p) + e^{-i px} f_i(-p)) u(x) d\mu(p)
\end{aligned}
$$

$$
(\partial_t \varphi_i|_{t = 0})(v) = (2\pi)^{-d/2} \int_{x', p \in \mathcal{O}_m^+} i E(p') (-e^{i p'x'} f_i(p) + e^{-i p'x'} f_i(-p)) v(x') d\mu(p)
$$

あ

$$
\begin{aligned}
  &(\varphi_1 \partial_t \varphi_2)|_{t = 0} \\
  &\quad = (2\pi)^{-d} \int_{x', p \in \mathcal{O}_m^+, q \in \mathcal{O}_m^+} iE(q') (e^{i p'x'} f_1(p) + e^{-i p'x'} f_1(-p))(-e^{i q'x'} f_2(q) + e^{-i q'x'} f_2(-q)) v(x') d\mu(p)d\mu(q)
\end{aligned}
$$

$$
\begin{aligned}
  &\int_{x'} (\varphi_1 \partial_t \varphi_2)|_{t = 0} dx' \\
  &\quad = (2\pi)^{-d} \int_{x', p \in \mathcal{O}_m^+, q \in \mathcal{O}_m^+} iE(q') (e^{i p'x'} f_1(p) + e^{-i p'x'} f_1(-p))(-e^{i q'x'} f_2(q) + e^{-i q'x'} f_2(-q)) d\mu(p)d\mu(q)
\end{aligned}
$$

$$
\begin{aligned}
  &\int_{x'} (\varphi_1 \partial_t \varphi_2 - \varphi_2 \partial_t \varphi_1)|_{t = 0} dx' \\
  &\quad = (2\pi)^{-d} \int_{x', p \in \mathcal{O}_m^+, q \in \mathcal{O}_m^+} iE(q') [(e^{i p'x'} f_1(p) + e^{-i p'x'} f_1(-p))(-e^{i q'x'} f_2(q) + e^{-i q'x'} f_2(-q)) - (e^{i p'x'} f_2(p) + e^{-i p'x'} f_2(-p))(-e^{i q'x'} f_1(q) + e^{-i q'x'} f_1(-q))] d\mu(p)d\mu(q)
\end{aligned}
$$

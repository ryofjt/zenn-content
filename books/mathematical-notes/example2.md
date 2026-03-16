---
title: "自由スカラー場のシンプレクティック構造"
---

## 設定

ミンコフスキー空間 $V$ と滑らかな関数空間 $\mathcal{F}$ を定義する。ラグランジアン $L$ から変分をとり、運動方程式

$$
(\Box + m^2)\varphi = 0
$$

を導出する。

## シンプレクティック形式の構成

境界項 $\gamma = \delta\varphi \wedge *d\varphi$ を定義し、2-形式 $\omega = -\delta\gamma$ を構成する。解空間 $\mathrm{Sol}$ 上で積分

$$
\int_{t=c} \omega
$$

は $c$ に依存しないことを示す。$\mathrm{Sol}$ の各点でシンプレクティック形式 $[-,-]$ を定義し、フーリエ変換を通じて $L^2$ 空間 $H$ と同一視する。

## フーリエ展開による具体的計算

$f_i(p) = f_i^+(p) + f_i^-(p)$ とする。逆フーリエ変換して

$$
\varphi_i(u) = (2\pi)^{-d/2} \int_{x, p \in \mathcal{O}_m} e^{ipx} f_i(p)\, u(x)\, d\mu(p)
$$

$$
\varphi_i|_{t=0}(v) = (2\pi)^{-d/2} \int_{x', p \in \mathcal{O}_m} e^{ip'x'} f_i(p)\, v(x')\, d\mu(p)
$$

エネルギーを $E(p') \coloneqq \sqrt{m^2 + p'^2}$ と定義する。

$$
\begin{aligned}
\partial_t \varphi_i(u) &= -(2\pi)^{-d/2} \int_{x, p \in \mathcal{O}_m} ip_0\, e^{ipx} f_i(p)\, u(x)\, d\mu(p) \\
&= -(2\pi)^{-d/2} \int_{x, p \in \mathcal{O}_m^+} iE(p')\, e^{ipx} f_i(p)\, u(x)\, d\mu(p) + (2\pi)^{-d/2} \int_{x, p \in \mathcal{O}_m^-} iE(p')\, e^{ipx} f_i(p)\, u(x)\, d\mu(p) \\
&= (2\pi)^{-d/2} \int_{x, p \in \mathcal{O}_m^+} iE(p') \left(-e^{ipx} f_i(p) + e^{-ipx} f_i(-p)\right) u(x)\, d\mu(p)
\end{aligned}
$$

$$
(\partial_t \varphi_i|_{t=0})(v) = (2\pi)^{-d/2} \int_{x', p \in \mathcal{O}_m^+} iE(p') \left(-e^{ip'x'} f_i(p) + e^{-ip'x'} f_i(-p)\right) v(x')\, d\mu(p)
$$

$$
\begin{aligned}
&(\varphi_1 \partial_t \varphi_2)|_{t=0} \\
&\quad = (2\pi)^{-d} \int_{x', p \in \mathcal{O}_m^+, q \in \mathcal{O}_m^+} iE(q') \left(e^{ip'x'} f_1(p) + e^{-ip'x'} f_1(-p)\right)\left(-e^{iq'x'} f_2(q) + e^{-iq'x'} f_2(-q)\right) v(x')\, d\mu(p)\, d\mu(q)
\end{aligned}
$$

$$
\begin{aligned}
&\int_{x'} (\varphi_1 \partial_t \varphi_2)|_{t=0}\, dx' \\
&\quad = (2\pi)^{-d} \int_{x', p \in \mathcal{O}_m^+, q \in \mathcal{O}_m^+} iE(q') \left(e^{ip'x'} f_1(p) + e^{-ip'x'} f_1(-p)\right)\left(-e^{iq'x'} f_2(q) + e^{-iq'x'} f_2(-q)\right) d\mu(p)\, d\mu(q)
\end{aligned}
$$

$$
\begin{aligned}
&\int_{x'} (\varphi_1 \partial_t \varphi_2 - \varphi_2 \partial_t \varphi_1)|_{t=0}\, dx' \\
&\quad = (2\pi)^{-d} \int_{x', p \in \mathcal{O}_m^+, q \in \mathcal{O}_m^+} iE(q') \Big[\left(e^{ip'x'} f_1(p) + e^{-ip'x'} f_1(-p)\right)\left(-e^{iq'x'} f_2(q) + e^{-iq'x'} f_2(-q)\right) \\
&\qquad - \left(e^{ip'x'} f_2(p) + e^{-ip'x'} f_2(-p)\right)\left(-e^{iq'x'} f_1(q) + e^{-iq'x'} f_1(-q)\right)\Big]\, d\mu(p)\, d\mu(q)
\end{aligned}
$$

---
marp: true
theme: default
paginate: true
math: mathjax
style: |
  section {
    background: #ffffff;
    color: #1f2937;
    font-family: "Helvetica Neue", "Hiragino Sans", "Yu Gothic", sans-serif;
    padding: 56px 64px;
  }
  h1, h2 {
    color: #111827;
    border-bottom: 2px solid #e5e7eb;
    padding-bottom: 8px;
  }
  h1 { font-weight: 600; }
  h2 { font-weight: 600; }
  strong { color: #2563eb; }
  a { color: #2563eb; }
  code {
    background: #f3f4f6;
    color: #111827;
    padding: 2px 6px;
    border-radius: 4px;
  }
  section::after {
    color: #9ca3af;
    font-size: 14px;
  }
  blockquote {
    border-left: 3px solid #d1d5db;
    color: #4b5563;
    padding-left: 12px;
  }
---

# 場の量子論入門

5 min LT / @ryofjt

---

## 自己紹介

- **@ryofjt**
- 数学 / 物理が好きで、最近は場の量子論を勉強中
- Zenn で数学・物理のノートを公開しています
  - 本: _Mathematical Notes_
  - 記事: _場の量子論入門_（今日の元ネタ）
- 今日は 5 分で「**場の理論 → 場の量子論 → 量子力学**」を駆け抜けます

---

## この発表の流れ

$$
\begin{aligned}
\text{場の理論} \quad &\xrightarrow{\text{ 停留点 }} \quad \text{運動方程式} \\
\text{場の理論} \quad &\xrightarrow[\text{ シンプレクティック構造 }]{\text{ 解空間上の }} \quad \text{場の量子論} \quad \longrightarrow \quad \text{量子力学}
\end{aligned}
$$

もっとたくさんの矢印があるとは思うけど、今回の流れはこんな感じ

---

## ばねの運動と場の理論

ばねの運動はニュートンの運動方程式 $\ddot{\varphi}(t) = -k\varphi(t)$ で表される。
これを場 $\mathcal{F} \coloneqq \{ \varphi: \mathbb{R} \to \mathbb{R} \}$ で定式化する。

ラグランジアン $L: \mathcal{F} \times \mathbb{R} \to \mathbb{R}$ と作用 $S: \mathcal{F} \to \mathbb{R}$ を

$$
L(\varphi, t) \coloneqq \tfrac{1}{2}\dot{\varphi}(t)^2 - \tfrac{k}{2}\varphi(t)^2, \qquad S(\varphi) \coloneqq \int_{-\infty}^\infty L(\varphi, t) \, dt
$$

で定義する。$L$ の $\mathcal{F}$ 方向の微分は

$$
\delta L_{(\varphi_0, t)}(\xi)
  = \lim_{\varepsilon \to 0} \frac{L(\varphi_0 + \varepsilon\xi, t) - L(\varphi_0, t)}{\varepsilon}
  = \dot{\varphi_0}(t)\dot{\xi}(t) - k\varphi_0(t)\xi(t)
$$

---

## 作用の停留点 = 運動方程式

部分積分して

$$
\delta S_{\varphi_0}(\xi)
  = \int_{-\infty}^\infty (\dot{\varphi_0}\dot{\xi} - k\varphi_0 \xi) \, dt
  = \int_{-\infty}^\infty (-\ddot{\varphi_0} - k\varphi_0)\xi \, dt
$$

よって

$$
\delta S_{\varphi_0} = 0 \ \Longleftrightarrow \ \ddot{\varphi_0}(t) = -k\varphi_0(t)
$$

作用 $S$ の停留点として **運動方程式が復元** された ✅

---

## $1 + 0$ 次元のクライン-ゴルドン場

場全体を $\mathbb{C}$ 値に変更：$\mathcal{F} \coloneqq \{ \varphi: \mathbb{R} \to \mathbb{C} \}$。

$$
L(\varphi, t) \coloneqq |\dot{\varphi}(t)|^2 - m^2|\varphi(t)|^2 = \dot{\varphi}\bar{\dot{\varphi}} - m^2 \varphi \bar{\varphi}
$$

物理的には $m$ は粒子の質量。無限次元多様体 $\mathcal{F}$ の幾何で計算すると、

$$
\begin{aligned}
\delta S
  &= \int (\dot{\varphi}\delta(\bar{\dot{\varphi}}) + \bar{\dot{\varphi}}\delta(\dot{\varphi}) - m^2\varphi\delta\bar{\varphi} - m^2\bar{\varphi}\delta\varphi) \, dt \\
  &= -\int [(\ddot{\varphi} + m^2\varphi)\delta\bar{\varphi} + \overline{(\ddot{\varphi} + m^2\varphi)}\delta\varphi] \, dt
\end{aligned}
$$

$$
\delta S_{\varphi} = 0 \ \Longleftrightarrow \ \ddot{\varphi} + m^2\varphi = 0 \quad (\text{クライン-ゴルドン方程式})
$$

---

## 解空間とシンプレクティック形式

以降は $m = 1$ とする。解空間を

$$
\mathrm{Sol} \coloneqq \{ \varphi \mid \ddot{\varphi} + \varphi = 0 \} = \{ pe^{it} + qe^{-it} \mid p, q \in \mathbb{C} \}
$$

とする。先程の計算で捨てた境界項を $d_t$ で外に出して書き直すと、

$$
\delta L \wedge dt = -(\ddot{\varphi} + \varphi)\delta\bar{\varphi} \wedge dt - \overline{(\ddot{\varphi} + \varphi)}\delta\varphi \wedge dt - d_t(\dot{\varphi}\delta\bar{\varphi} + \bar{\dot{\varphi}}\delta\varphi)
$$

第2項から $d_t$ を外して

$$
\gamma \coloneqq -\dot{\varphi}\delta\bar{\varphi} - \bar{\dot{\varphi}}\delta\varphi \in \Omega^{1,0}(\mathcal{F} \times \mathbb{R})
$$

$$
\omega \coloneqq \delta\gamma = -\delta\dot{\varphi} \wedge \delta\bar{\varphi} - \delta\bar{\dot{\varphi}} \wedge \delta\varphi \in \Omega^{2,0}(\mathcal{F} \times \mathbb{R})
$$

---

## $\omega$ を $\mathrm{Sol}$ に制限する

$\varphi = pe^{it} + qe^{-it}$ を代入：

$$
\begin{aligned}
\omega|_{\mathrm{Sol} \times \mathbb{R}}
  &= -i(e^{it}dp - e^{-it}dq) \wedge (e^{-it}d\bar{p} + e^{it}d\bar{q}) \\
  &\quad + i(e^{-it}d\bar{p} - e^{it}d\bar{q}) \wedge (e^{it}dp + e^{-it}dq) \\
  &= -2i(dp \wedge d\bar{p} - dq \wedge d\bar{q})
\end{aligned}
$$

点に依らないので、$\mathrm{Sol}$ 上のシンプレクティック形式

$$
\omega_\mathrm{Sol} \coloneqq -2i(dp \wedge d\bar{p} - dq \wedge d\bar{q}): \mathrm{Sol} \times \mathrm{Sol} \to \mathbb{C}
$$

が得られた 🎉

---

## 場の理論 → 場の量子論

場の量子論 = ヒルベルト空間 $\mathcal{H}$ と場の演算子 $\Phi: \mathbb{R} \to \mathcal{E}\mathrm{nd}(\mathcal{H})$。

正エネルギー部分 $H_+ \coloneqq \{ pe^{it} \mid p \in \mathbb{C} \} \subset \mathrm{Sol}$ を取ると、$\omega_\mathrm{Sol}$ から内積が誘導される：

$$
(p_1 e^{it}, p_2 e^{it}) \coloneqq \tfrac{i}{2}\omega_\mathrm{Sol}(p_1 e^{it}, \overline{p_2 e^{it}}) = p_1\bar{p_2}, \quad (e^{it}, e^{it}) = 1
$$

フォック空間を多項式環として実現：

$$
\mathcal{D} \coloneqq \bigoplus_{n = 0}^\infty S^n H_+ = \mathbb{C}[e^{it}] = \mathrm{span}_{\mathbb{C}}\{ e^{ikt} \mid k \in \mathbb{Z}_{\ge 0} \}
$$

$$
(e^{ikt}, e^{ilt}) \coloneqq \begin{cases} k! & (k = l) \\ 0 & (k \ne l) \end{cases}, \quad \mathcal{H} \coloneqq \widehat{\mathcal{D}}
$$

---

## 場の演算子

$$
\Phi(s) \coloneqq \varepsilon_{e^{i(s + t)}} + \iota_{(-, e^{i(s + t)})} = e^{is}\varepsilon_{e^{it}} + e^{-is}\iota_{(-, e^{it})}
$$

ただし生成演算子 $\varepsilon$ と消滅演算子 $\iota$ は

$$
\varepsilon_{e^{it}} e^{ikt} \coloneqq e^{i(k+1)t}, \qquad
\iota_{(-, e^{it})} e^{ikt} \coloneqq k\, e^{i(k-1)t}
$$

$\varepsilon$ と $\iota$ は $\mathcal{D}$ の内積に関して互いに共役作用素であり、$\Phi(s)$ は **自己共役** になる。

---

## 実はこれは量子力学です

$1 + 0$ 次元で空間が無いので、これは量子力学。ハミルトニアン $H \coloneqq \varepsilon\iota$ は

$$
H e^{ikt} = \varepsilon\iota\, e^{ikt} = k\, e^{ikt}
$$

固有値として **エネルギー** を取り出す。さらに

$$
\begin{aligned}
e^{isH}\Phi(0)e^{-isH}e^{ikt}
  &= e^{-isk}e^{isH}(e^{i(k+1)t} + ke^{i(k-1)t}) \\
  &= e^{is}e^{i(k+1)t} + ke^{-is}e^{i(k-1)t} = \Phi(s)e^{ikt}
\end{aligned}
$$

つまり $\Phi(s) = e^{isH}\Phi(0)e^{-isH}$ は **時間発展**。
$\Phi(0) = \varepsilon + \iota$ は **位置演算子** で、真空 $1 \in \mathbb{C}[e^{it}]$ に繰り返し作用させると $\mathcal{D}$ 全体が生成される。

---

## まとめ & 参考文献

- 作用の停留点として **運動方程式** が出る
- 境界項を回収すると、解空間に **シンプレクティック形式** $\omega_\mathrm{Sol}$ が乗る
- 正エネルギー部分 $H_+$ から フォック空間 $\mathbb{C}[e^{it}]$ と場の演算子 $\Phi(s)$ が決まる
- $1+0$ 次元では量子力学に一致し、$\Phi(0)$ は位置演算子

**参考文献**
P. Deligne, P. Etingof, D. S. Freed, L. C. Jeffrey, D. Kazhdan, J. W. Morgan, D. R. Morrison, and E. Witten (eds.),
_Quantum Fields and Strings: A Course for Mathematicians, Vol. 1_, AMS, 1999.

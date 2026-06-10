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

@dokadokaas

---

## 自己紹介

- **@dokadokaas**
- 興味は 数理物理 / 表現論 / 作用素環、最近は場の量子論を勉強中
- 最近シーシャ吸いながら勉強するのにハマってます 🚬

---

## この発表の流れ

![w:1000](assets/qft-flow.svg)

もっとたくさんの矢印があるとは思うけど、今回の流れはこんな感じ

---

## ばねの運動 → 場の理論

ばねの運動はニュートンの運動方程式 $\ddot{\varphi}(t) = -k\varphi(t)$ で表される。これを「場」の言葉で書き直したい。

- **場全体**: $\mathcal{F} \coloneqq \{ \varphi: \mathbb{R} \to \mathbb{R} \}$ （関数 1 個 = 場 1 個）
- **ラグランジアン** $L: \mathcal{F} \times \mathbb{R} \to \mathbb{R}$、**作用** $S: \mathcal{F} \to \mathbb{R}$ を

$$
L(\varphi, t) \coloneqq \tfrac{1}{2}\dot{\varphi}(t)^2 - \tfrac{k}{2}\varphi(t)^2, \qquad S(\varphi) \coloneqq \int_{-\infty}^\infty L(\varphi, t) \, dt
$$

で定義する

**目標**: 作用 $S$ の **停留点** として運動方程式を取り戻す

---

## 停留点 = 運動方程式

停留点条件は $\delta S = 0$。 $S = \int L\, dt$ なので $\delta S = \int \delta L \, dt$、まず $\delta L$ を計算する：

$$
\delta L_{(\varphi_0, t)}(\xi)
  \coloneqq \lim_{\varepsilon \to 0} \frac{L(\varphi_0 + \varepsilon\xi, t) - L(\varphi_0, t)}{\varepsilon}
  = \dot{\varphi_0}\dot{\xi} - k\varphi_0 \xi
$$

積分して部分積分：

$$
\delta S_{\varphi_0}(\xi)
  = \int (\dot{\varphi_0}\dot{\xi} - k\varphi_0 \xi) \, dt
  = \int (-\ddot{\varphi_0} - k\varphi_0)\xi \, dt
$$

任意の $\xi$ で $\delta S = 0 \ \Longleftrightarrow \ \ddot{\varphi_0} = -k\varphi_0$ ← **運動方程式が復元** ✅

---

## $1 + 0$ 次元のクライン-ゴルドン場

場を $\mathbb{C}$ 値に拡張：$\mathcal{F} \coloneqq \{ \varphi: \mathbb{R} \to \mathbb{C} \}$、ラグランジアンは

$$
L(\varphi, t) \coloneqq |\dot{\varphi}|^2 - m^2|\varphi|^2
$$

物理的には $m$ は粒子の質量。同じ要領で変分を取ると

$$
\delta S = 0 \ \Longleftrightarrow \ \ddot{\varphi} + m^2\varphi = 0
$$

これが **クライン-ゴルドン方程式**。以降は $m = 1$ とする

---

## 解空間とシンプレクティック形式

解空間：

$$
\mathrm{Sol} \coloneqq \{ pe^{it} + qe^{-it} \mid p, q \in \mathbb{C} \}
$$

部分積分で捨てた **境界項** を $\gamma$ にまとめ、外微分して $\omega$ を作る：

$$
\gamma \coloneqq -\dot{\varphi}\delta\bar{\varphi} - \bar{\dot{\varphi}}\delta\varphi, \quad
\omega \coloneqq \delta\gamma
$$

$\varphi = pe^{it} + qe^{-it}$ を代入して計算（略）すると、

$$
\omega_\mathrm{Sol} \coloneqq -2i(dp \wedge d\bar{p} - dq \wedge d\bar{q})
$$

← $\mathrm{Sol}$ 上の **シンプレクティック形式** 🎉

---

## 場の量子論 = ヒルベルト空間 + 場の演算子

ゴール：**ヒルベルト空間** $\mathcal{H}$ と **場の演算子** $\Phi: \mathbb{R} \to \mathrm{End}(\mathcal{H})$ を構成する

まず $\mathrm{Sol}$ の **正エネルギー部分** を取る：

$$
H_+ \coloneqq \{ pe^{it} \mid p \in \mathbb{C} \} \subset \mathrm{Sol}
$$

シンプレクティック形式 $\omega_\mathrm{Sol}$ から $H_+$ 上の内積が誘導される：

$$
(p_1 e^{it}, p_2 e^{it}) \coloneqq \tfrac{i}{2}\omega_\mathrm{Sol}(p_1 e^{it}, \overline{p_2 e^{it}}) = p_1\bar{p_2}
$$

特に $(e^{it}, e^{it}) = 1$（あとで効く）

---

## フォック空間

対称テンソル積でフォック空間を作ると、 **多項式環** として実現される：

$$
\mathcal{D} \coloneqq \bigoplus_{n = 0}^\infty S^n H_+ = \mathbb{C}[e^{it}] = \mathrm{span}_{\mathbb{C}}\{ e^{ikt} \mid k \in \mathbb{Z}_{\ge 0} \}
$$

内積は「全組ペアリング」：

$$
(e^{ikt}, e^{ilt}) \coloneqq \begin{cases} k! & (k = l) \\ 0 & (k \ne l) \end{cases}
$$

ヒルベルト空間 $\mathcal{H} \coloneqq \widehat{\mathcal{D}}$（完備化）

---

## 場の演算子

$$
\Phi(s) \coloneqq e^{is}\varepsilon + e^{-is}\iota
$$

**生成演算子** $\varepsilon$ と **消滅演算子** $\iota$ は

$$
\varepsilon\, e^{ikt} \coloneqq e^{i(k+1)t} \quad (\text{次数を上げる}), \qquad
\iota\, e^{ikt} \coloneqq k\, e^{i(k-1)t} \quad (\text{次数を下げる})
$$

$\varepsilon, \iota$ は内積に関して互いに共役 ⇒ $\Phi(s)$ は **自己共役**

---

## 実はこれは量子力学です

$1 + 0$ 次元で空間が無いので、これは量子力学。**ハミルトニアン** $H \coloneqq \varepsilon\iota$ とすると

$$
H\, e^{ikt} = k\, e^{ikt}
$$

固有値として **エネルギー** を取り出す。さらに計算すると

$$
\Phi(s) = e^{isH}\Phi(0)\, e^{-isH}
$$

← $\Phi(0)$ の **時間発展**

しかも $\Phi(0) = \varepsilon + \iota$ を真空 $1$ に繰り返し作用させると $\mathcal{D}$ 全体が生成される — つまり $\Phi(0)$ は **位置演算子** だった！

---

## まとめ & 参考文献

- 作用の停留点として **運動方程式** が出る
- 境界項を回収すると、解空間に **シンプレクティック形式** $\omega_\mathrm{Sol}$ が乗る
- 正エネルギー部分 $H_+$ から フォック空間 $\mathbb{C}[e^{it}]$ と場の演算子 $\Phi(s)$ が決まる
- $1+0$ 次元では量子力学に一致し、$\Phi(0)$ は位置演算子

参考文献
P. Deligne, P. Etingof, D. S. Freed, L. C. Jeffrey, D. Kazhdan, J. W. Morgan, D. R. Morrison, and E. Witten (eds.),
_Quantum Fields and Strings: A Course for Mathematicians, Vol. 1_, AMS, 1999.

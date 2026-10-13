---
title: "math12"
---

# $\mathbb{C}$ 上のスピン表現

$n \ge 1$
$V_\mathbb{C} \coloneqq \mathbb{C}^n$

| $n$                                             | 偶数                                           | 奇数                                   |
| ----------------------------------------------- | ---------------------------------------------- | -------------------------------------- |
| $C(V_\mathbb{C})$                               | $M_{\ast\vert\ast}(\mathbb{C})$                | $M_\ast(\mathbb{C}[\varepsilon])$      |
| $C(V_\mathbb{C})^+$                             | $M_\ast(\mathbb{C}) \times M_\ast(\mathbb{C})$ | $M_\ast(\mathbb{C})$                   |
| 既約 $C(V_\mathbb{C})$ 加群                     | $S_\mathbb{C}, \Pi S_\mathbb{C}$               | $S_\mathbb{C}$                         |
| 既約 $C(V_\mathbb{C})^+$ 加群                   | $S_\mathbb{C}^+, S_\mathbb{C}^-$               | $S_\mathbb{C}^+ \simeq S_\mathbb{C}^-$ |
| $\underline{\mathrm{End}}_{C(V)}(S_\mathbb{C})$ | $\mathbb{C}$                                   | $\mathbb{C}[\varepsilon]$              |
| $\mathrm{End}_{C(V)^+}(S_\mathbb{C}^\pm)$       | $\mathbb{C}$                                   | $\mathbb{C}$                           |

ただし、$\varepsilon$ は odd かつ $\varepsilon^2 = 1$

左 $C(V_\mathbb{C})$ 加群 $M$ の双対 $M^*$ とは、右 $C(V_\mathbb{C})$ 加群 $\mathrm{Hom}_\mathbb{C}(M, \mathbb{C})$ を antiautomorphism $\beta: C(V_\mathbb{C}) \ni v_1 \cdots v_k \mapsto v_k \cdots v_1 \in C(V_\mathbb{C})$ で捻った左 $C(V_\mathbb{C})$ 加群のこと。左 $C(V_\mathbb{C})^+$ 加群の双対に関しても同様

| $n \bmod 4$            | $0$                                            | $2$                                            | $1, 3$                                     |
| ---------------------- | ---------------------------------------------- | ---------------------------------------------- | ------------------------------------------ |
| $S_\mathbb{C}^*$       | $S_\mathbb{C}$                                 | $\Pi S_\mathbb{C}$                             | $S_\mathbb{C}$                             |
| $(S_\mathbb{C}^\pm)^*$ | $(S_\mathbb{C}^\pm)^* \simeq S_\mathbb{C}^\pm$ | $(S_\mathbb{C}^\pm)^* \simeq S_\mathbb{C}^\mp$ | $(S_\mathbb{C}^+)^* \simeq S_\mathbb{C}^+$ |

$B_\mathbb{C} \coloneqq \underline{\mathrm{Hom}}(S_\mathbb{C} \otimes S_\mathbb{C}, \mathbb{C})^{C(V_\mathbb{C})}$ とする。$B_\mathbb{C} = \underline{\mathrm{Hom}}_{C(V_\mathbb{C})}(S_\mathbb{C}, S_\mathbb{C}^*)$

$$
B_\mathbb{C} = B_\mathbb{C}^+ \oplus B_\mathbb{C}^- = B_\mathbb{C}^{+, \text{sym}} \oplus B_\mathbb{C}^{+, \text{alt}} \oplus B_\mathbb{C}^{-, \text{sym}} \oplus B_\mathbb{C}^{-, \text{alt}}
$$

$$
\begin{aligned}
  \mathrm{Hom}_{C(V_\mathbb{C})^+}(S^\pm_\mathbb{C} \otimes S^\pm_\mathbb{C}, \mathbb{C}) &\simeq B_\mathbb{C}^+ \\
  \mathrm{Hom}_{C(V_\mathbb{C})^+}(S^\pm_\mathbb{C} \otimes S^\mp_\mathbb{C}, \mathbb{C}) &\simeq B_\mathbb{C}^-
\end{aligned}
$$

$n$ が偶数ならば、$B_\mathbb{C}$ は $1$ 次元

$n$ が奇数ならば、$B_\mathbb{C}^\pm$ は $1$ 次元。$z \coloneqq e_1 \cdots e_n \in C(V_\mathbb{C})$ とすると、$z$ は $C(V_\mathbb{C})$ の ungraded center の元。$B_\mathbb{C}^\pm \ni b \mapsto b(-, z -) \in B_\mathbb{C}^\mp$ がある

| $n \bmod 8$    | $0$           | $2$          | $4$             | $6$            | $1$                    | $3$                               | $5$                      | $7$                               |
| -------------- | ------------- | ------------ | --------------- | -------------- | ---------------------- | --------------------------------- | ------------------------ | --------------------------------- |
| $B_\mathbb{C}$ | even かつ対称 | odd かつ対称 | even かつ反対称 | odd かつ反対称 | even でも odd でも対称 | even ならば反対称、odd ならば対称 | even でも odd でも反対称 | even ならば対称、odd ならば反対称 |

$n$ は奇数とする。$0$ でない $\mathrm{Spin}(V_\mathbb{C})$ 同変写像 $\Gamma^+: S_\mathbb{C}^+ \otimes S_\mathbb{C}^+ \to V_\mathbb{C}$ は $\mathbb{C}^\times$ 倍を除いて一意的で

$$
\langle v, \Gamma^+(s, t) \rangle = \langle zvs, t \rangle
$$

ただし、$z \coloneqq e_1 \cdots e_n \in C(V_\mathbb{C})$。$z$ は $C(V_\mathbb{C})$ の ungraded center の元

$n \equiv 0 \mod 4$ とする。$0$ でない $\mathrm{Spin}(V_\mathbb{C})$ 同変写像 $\Gamma^-: S_\mathbb{C}^\pm \otimes S_\mathbb{C}^\mp \to V_\mathbb{C}$ は $\mathbb{C}^\times$ 倍を除いて一意的で

$$
\langle v, \Gamma^-(s, t) \rangle = \langle vs, t \rangle
$$

$\mathrm{Spin}(V_\mathbb{C})$ 同変写像 $S_\mathbb{C}^\pm \otimes S_\mathbb{C}^\pm \to V_\mathbb{C}$ は $0$ のみ

$n \equiv 2 \mod 4$ とする。$0$ でない $\mathrm{Spin}(V_\mathbb{C})$ 同変写像 $\Gamma^+: S_\mathbb{C}^\pm \otimes S_\mathbb{C}^\pm \to V_\mathbb{C}$ は $\mathbb{C}^\times$ 倍を除いて一意的で

$$
\langle v, \Gamma^+(s, t) \rangle = \langle vs, t \rangle
$$

$\mathrm{Spin}(V_\mathbb{C})$ 同変写像 $S_\mathbb{C}^\pm \otimes S_\mathbb{C}^\mp \to V_\mathbb{C}$ は $0$ のみ

$C_\mathbb{C} \coloneqq \underline{\mathrm{Hom}}_{\mathrm{Pin}(V_\mathbb{C})}(S_\mathbb{C} \otimes S_\mathbb{C}, V_\mathbb{C})$ とする

$B_\mathbb{C} \ni b \mapsto (\langle v, \Gamma(s, t) \rangle \coloneqq b(vs, t)) \in C_\mathbb{C}$ は odd な同型で、対称性を保つ

$$
\begin{aligned}
  \mathrm{Hom}_{\mathrm{Spin}(V_\mathbb{C})}(S_\mathbb{C}^\pm \otimes S_\mathbb{C}^\pm, V_\mathbb{C}) &= C_\mathbb{C}^+ \\
  \mathrm{Hom}_{\mathrm{Spin}(V_\mathbb{C})}(S_\mathbb{C}^\pm \otimes S_\mathbb{C}^\mp, V_\mathbb{C}) &= C_\mathbb{C}^-
\end{aligned}
$$

$n$ が偶数ならば、$C_\mathbb{C}$ は $1$ 次元であり、$n$ が奇数ならば、$C_\mathbb{C}^\pm$ は $1$ 次元

| $n \bmod 8$    | $0$          | $2$           | $4$            | $6$             | $1$                    | $3$                               | $5$                      | $7$                               |
| -------------- | ------------ | ------------- | -------------- | --------------- | ---------------------- | --------------------------------- | ------------------------ | --------------------------------- |
| $C_\mathbb{C}$ | odd かつ対称 | even かつ対称 | odd かつ反対称 | even かつ反対称 | even でも odd でも対称 | even ならば対称、odd ならば反対称 | even でも odd でも反対称 | even ならば反対称、odd ならば対称 |

# $\mathbb{R}$ 上のスピン表現

$(p, q) \ne (0, 0)$
$V \coloneqq (\mathbb{R}^{p + q}, x_1^2 + \cdots + x_p^2 - x_{p + 1}^2 - \cdots - x_{p + q}^2)$

| $p - q \bmod 8$ | $C(V)$                                             | $C(V)^+$                                       |
| :-------------: | -------------------------------------------------- | ---------------------------------------------- |
|       $0$       | $M_{\ast\vert\ast}(\mathbb{R})$                    | $M_\ast(\mathbb{R}) \times M_\ast(\mathbb{R})$ |
|       $1$       | $M_\ast(\mathbb{R}[\varepsilon])$                  | $M_\ast(\mathbb{R})$                           |
|       $2$       | $M_\ast(\mathbb{R}[\varepsilon_1, \varepsilon_2])$ | $M_\ast(\mathbb{C})$                           |
|       $3$       | $M_\ast(\mathbb{H}[\eta])$                         | $M_\ast(\mathbb{H})$                           |
|       $4$       | $M_{\ast\vert\ast}(\mathbb{H})$                    | $M_\ast(\mathbb{H}) \times M_\ast(\mathbb{H})$ |
|       $5$       | $M_\ast(\mathbb{H}[\varepsilon])$                  | $M_\ast(\mathbb{H})$                           |
|       $6$       | $M_\ast(\mathbb{R}[\eta_1, \eta_2])$               | $M_\ast(\mathbb{C})$                           |
|       $7$       | $M_\ast(\mathbb{R}[\eta])$                         | $M_\ast(\mathbb{R})$                           |

$\varepsilon_*$ は odd かつ $\varepsilon_*^2 = 1$ で $\varepsilon_1 \varepsilon_2 = -\varepsilon_2 \varepsilon_1$
$\eta_*$ は odd かつ $\eta_*^2 = -1$ で $\eta_1 \eta_2 = -\eta_2 \eta_1$

| $p - q \bmod 8$ | 既約 $C(V)$ 加群                 | 既約 $C(V)^+$ 加群                     | $S_\mathbb{R}$ の複素化                | $S_\mathbb{R}^\pm$ の複素化            | $\underline{\mathrm{End}}_{C(V)}(S_\mathbb{R})$ | $\mathrm{End}_{C(V)^+}(S_\mathbb{R}^\pm)$ |
| :-------------: | -------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- | ----------------------------------------------- | ----------------------------------------- |
|       $0$       | $S_\mathbb{R}, \Pi S_\mathbb{R}$ | $S_\mathbb{R}^+, S_\mathbb{R}^-$       | $S_\mathbb{C}$                         | $S_\mathbb{C}^\pm$                     | $\mathbb{R}$                                    | $\mathbb{R}$                              |
|       $1$       | $S_\mathbb{R}$                   | $S_\mathbb{R}^+ \simeq S_\mathbb{R}^-$ | $S_\mathbb{C}$                         | $S_\mathbb{C}^+$                       | $\mathbb{R}[\varepsilon]$                       | $\mathbb{R}$                              |
|       $2$       | $S_\mathbb{R}$                   | $S_\mathbb{R}^+ \simeq S_\mathbb{R}^-$ | $S_\mathbb{C} \oplus \Pi S_\mathbb{C}$ | $S_\mathbb{C}^+ \oplus S_\mathbb{C}^-$ | $\mathbb{R}[\varepsilon_1, \varepsilon_2]$      | $\mathbb{C}$                              |
|       $3$       | $S_\mathbb{R}$                   | $S_\mathbb{R}^+ \simeq S_\mathbb{R}^-$ | $S_\mathbb{C}^{\oplus 2}$              | $(S_\mathbb{C}^+)^{\oplus 2}$          | $\mathbb{H}[\eta]$                              | $\mathbb{H}$                              |
|       $4$       | $S_\mathbb{R}, \Pi S_\mathbb{R}$ | $S_\mathbb{R}^+, S_\mathbb{R}^-$       | $S_\mathbb{C}^{\oplus 2}$              | $(S_\mathbb{C}^\pm)^{\oplus 2}$        | $\mathbb{H}$                                    | $\mathbb{H}$                              |
|       $5$       | $S_\mathbb{R}$                   | $S_\mathbb{R}^+ \simeq S_\mathbb{R}^-$ | $S_\mathbb{C}^{\oplus 2}$              | $(S_\mathbb{C}^+)^{\oplus 2}$          | $\mathbb{H}[\varepsilon]$                       | $\mathbb{H}$                              |
|       $6$       | $S_\mathbb{R}$                   | $S_\mathbb{R}^+ \simeq S_\mathbb{R}^-$ | $S_\mathbb{C} \oplus \Pi S_\mathbb{C}$ | $S_\mathbb{C}^+ \oplus S_\mathbb{C}^-$ | $\mathbb{R}[\eta_1, \eta_2]$                    | $\mathbb{C}$                              |
|       $7$       | $S_\mathbb{R}$                   | $S_\mathbb{R}^+ \simeq S_\mathbb{R}^-$ | $S_\mathbb{C}$                         | $S_\mathbb{C}^+$                       | $\mathbb{R}[\eta]$                              | $\mathbb{R}$                              |

$S_\mathbb{R}$ の複素化についてのみ証明する

[$p - q \equiv 0 \mod 8$ の場合]
$M_{*|*}(\mathbb{C}) \curvearrowright \mathbb{C}^* \oplus \mathbb{C}^*$ は $S_\mathbb{C}$ と同型

[$p - q \equiv 1 \mod 8$ の場合]
$M_*(\mathbb{C}[\varepsilon]) \curvearrowright \mathbb{C}[\varepsilon]^*$ は $S_\mathbb{C}$ と同型

[$p - q \equiv 2 \mod 8$ の場合]
$\mathbb{C}[\varepsilon_1, \varepsilon_2] \simeq C_2(\mathbb{C}) \simeq M_{1|1}(\mathbb{C})$。$M_{*|*}(\mathbb{C}) \simeq M_*(M_{1|1}(\mathbb{C})) \curvearrowright M_{1|1}(\mathbb{C})^*$ は $S_\mathbb{C} \oplus \Pi S_\mathbb{C}$ と同型

[$p - q \equiv 3 \mod 8$ の場合]
$\mathbb{H} \otimes_\mathbb{R} \mathbb{C} \simeq M_2(\mathbb{C})$。$M_2(\mathbb{C})[\eta] \simeq M_2(\mathbb{C}[\varepsilon])$。$M_{2*}(\mathbb{C}[\varepsilon]) \simeq M_*(M_2(\mathbb{C}[\varepsilon])) \curvearrowright M_2(\mathbb{C}[\varepsilon])^*$ は $S_\mathbb{C}^{\oplus 2}$ と同型

[$p - q \equiv 4 \mod 8$ の場合]
$M_{2*|2*}(\mathbb{C}) \simeq M_{*|*}(M_2(\mathbb{C})) \curvearrowright M_2(\mathbb{C})^* \oplus M_2(\mathbb{C})^*$ は $S_\mathbb{C}^{\oplus 2}$ と同型

[$p - q \equiv 5 \mod 8$ の場合]
$p - q \equiv 3 \mod 8$ の場合と同様

[$p - q \equiv 6 \mod 8$ の場合]
$p - q \equiv 2 \mod 8$ の場合と同様

[$p - q \equiv 7 \mod 8$ の場合]
$p - q \equiv 1 \mod 8$ の場合と同様

| $p - q \bmod 4$ | $S_\mathbb{R}^*$                                                                                                       | $(S_\mathbb{R}^\pm)^*$                                                                                                                           |
| :-------------: | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
|       $0$       | $\begin{aligned} &S_\mathbb{R} &\quad (p \text{ は偶数}) \\ &\Pi S_\mathbb{R} &\quad (p \text{ は奇数}) \end{aligned}$ | $(S_\mathbb{R}^\pm)^* \simeq \begin{cases} S_\mathbb{R}^\pm &\quad (p \text{ は偶数}) \\ S_\mathbb{R}^\mp &\quad (p \text{ は奇数}) \end{cases}$ |
|    $1, 2, 3$    | $S_\mathbb{R}$                                                                                                         | $(S_\mathbb{R}^+)^* \simeq S_\mathbb{R}^+$                                                                                                       |

$B_\mathbb{R} \coloneqq \underline{\mathrm{Hom}}(S_\mathbb{R} \otimes S_\mathbb{R}, \mathbb{R})^{C(V)}$ とする。$B_\mathbb{R} = \underline{\mathrm{Hom}}_{C(V)}(S_\mathbb{R}, S_\mathbb{R}^*)$

$$
B_\mathbb{R} = B_\mathbb{R}^+ \oplus B_\mathbb{R}^- = B_\mathbb{R}^{+, \text{sym}} \oplus B_\mathbb{R}^{+, \text{alt}} \oplus B_\mathbb{R}^{-, \text{sym}} \oplus B_\mathbb{R}^{-, \text{alt}}
$$

$$
\begin{aligned}
  \mathrm{Hom}_{C(V)^+}(S^\pm_\mathbb{R} \otimes S^\pm_\mathbb{R}, \mathbb{R}) &\simeq B_\mathbb{R}^+ \\
  \mathrm{Hom}_{C(V)^+}(S^\pm_\mathbb{R} \otimes S^\mp_\mathbb{R}, \mathbb{R}) &\simeq B_\mathbb{R}^-
\end{aligned}
$$

$(\mathrm{dim} B_\mathbb{R}^{+, \text{sym}}, \mathrm{dim} B_\mathbb{R}^{+, \text{alt}}, \mathrm{dim} B_\mathbb{R}^{-, \text{sym}}, \mathrm{dim} B_\mathbb{R}^{-, \text{alt}})$ は

| $p \backslash q$ | $0$            | $1$            | $2$            | $3$            | $4$            | $5$            | $6$            | $7$            |
| :--------------: | -------------- | -------------- | -------------- | -------------- | -------------- | -------------- | -------------- | -------------- |
|       $0$        | $(1, 0, 0, 0)$ | $(1, 0, 1, 0)$ | $(1, 1, 2, 0)$ | $(1, 3, 3, 1)$ | $(1, 3, 0, 0)$ | $(1, 3, 1, 3)$ | $(1, 1, 0, 2)$ | $(1, 0, 0, 1)$ |
|       $1$        | $(1, 0, 1, 0)$ | $(0, 0, 1, 0)$ | $(0, 1, 1, 0)$ | $(0, 2, 1, 1)$ | $(1, 3, 1, 3)$ | $(0, 0, 1, 3)$ | $(3, 1, 1, 3)$ | $(2, 0, 1, 1)$ |
|       $2$        | $(1, 1, 2, 0)$ | $(0, 1, 1, 0)$ | $(0, 1, 0, 0)$ | $(0, 1, 0, 1)$ | $(1, 1, 0, 2)$ | $(3, 1, 1, 3)$ | $(3, 1, 0, 0)$ | $(3, 1, 3, 1)$ |
|       $3$        | $(1, 3, 3, 1)$ | $(0, 2, 1, 1)$ | $(0, 1, 0, 1)$ | $(0, 0, 0, 1)$ | $(1, 0, 0, 1)$ | $(2, 0, 1, 1)$ | $(3, 1, 3, 1)$ | $(0, 0, 3, 1)$ |
|       $4$        | $(1, 3, 0, 0)$ | $(1, 3, 1, 3)$ | $(1, 1, 0, 2)$ | $(1, 0, 0, 1)$ | $(1, 0, 0, 0)$ | $(1, 0, 1, 0)$ | $(1, 1, 2, 0)$ | $(1, 3, 3, 1)$ |
|       $5$        | $(1, 3, 1, 3)$ | $(0, 0, 1, 3)$ | $(3, 1, 1, 3)$ | $(2, 0, 1, 1)$ | $(1, 0, 1, 0)$ | $(0, 0, 1, 0)$ | $(0, 1, 1, 0)$ | $(0, 2, 1, 1)$ |
|       $6$        | $(1, 1, 0, 2)$ | $(3, 1, 1, 3)$ | $(3, 1, 0, 0)$ | $(3, 1, 3, 1)$ | $(1, 1, 2, 0)$ | $(0, 1, 1, 0)$ | $(0, 1, 0, 0)$ | $(0, 1, 0, 1)$ |
|       $7$        | $(1, 0, 0, 1)$ | $(2, 0, 1, 1)$ | $(3, 1, 3, 1)$ | $(0, 0, 3, 1)$ | $(1, 3, 3, 1)$ | $(0, 2, 1, 1)$ | $(0, 1, 0, 1)$ | $(0, 0, 0, 1)$ |

$Z \coloneqq \mathrm{End}_{C(V)}(S_\mathbb{R})^+$ とする。$Z$ は $\mathbb{R}$ 上の斜体であり、最小多項式を考えれば、標準的なノルム $Z \in z \mapsto |z| \in \mathbb{R}_{\ge 0}$ を持つ

$$
\tilde{B}_\mathbb{R} \coloneqq \{ b \in B_\mathbb{R} \mid b(z(s), z(t)) = |z|^2 b(s, t) \ (z \in Z) \}
$$

他の場合も同様なので、$p - q \equiv 2, 3 \mod 8$ の場合のみ $\tilde{B}_\mathbb{R}$ を調べる

https://zenn.dev/link/comments/ad570793e7433c

[$p - q \equiv 2 \mod 8$ の場合]
$\mathbb{C}[\varepsilon_1, \varepsilon_2] \simeq M_{1|1}(\mathbb{C})$ で、$\mathbb{R}[\varepsilon_1, \varepsilon_2] \subset \mathbb{C}[\varepsilon_1, \varepsilon_2]$ は $\left\{ \begin{pmatrix} \alpha & \beta \\ \bar{\beta} & \bar{\alpha} \end{pmatrix} \middle| \alpha, \beta \in \mathbb{C} \right\} \subset M_{1|1}(\mathbb{C})$ に対応する。$\mathbb{C} \simeq Z \simeq \left\{ \begin{pmatrix} \alpha & 0 \\ 0 & \bar{\alpha} \end{pmatrix} \middle| \alpha \in \mathbb{C} \right\} \subset M_{1|1}(\mathbb{C})$。$|z|^2$ は $\mathrm{det}$ に対応する。$Z \otimes_\mathbb{R} \mathbb{C} = \left\{ \begin{pmatrix} \alpha & 0 \\ 0 & \delta \end{pmatrix} \middle| \alpha, \delta \in \mathbb{C} \right\} \subset M_{1|1}(\mathbb{C})$。$B_\mathbb{R} \otimes_\mathbb{R} \mathbb{C}$ の元は、$\varphi_{ij} \in B_\mathbb{C}$ を用いて、$S_\mathbb{C} \oplus \Pi S_\mathbb{C}$ 上のペアリングとして $\begin{pmatrix} \varphi_{11} & \varphi_{12} \\ \varphi_{21} & \varphi_{22} \end{pmatrix}$ と表せる。$\begin{pmatrix} x \\ y \end{pmatrix} \in S_\mathbb{C} \oplus \Pi S_\mathbb{C}$ に $\begin{pmatrix} \alpha & 0 \\ 0 & \delta \end{pmatrix} \in Z \otimes_\mathbb{R} \mathbb{C}$ を (右から) 作用させると、$\begin{pmatrix} \alpha x \\ \delta y \end{pmatrix}$。よって、$\tilde{B}_\mathbb{R} \otimes_\mathbb{R} \mathbb{C}$ に入る条件は

$$
\begin{pmatrix}
  \alpha x & \delta y
\end{pmatrix} \begin{pmatrix}
  \varphi_{11} & \varphi_{12} \\
  \varphi_{21} & \varphi_{22}
\end{pmatrix} \begin{pmatrix}
  \alpha z \\
  \delta w
\end{pmatrix} = \alpha\delta \begin{pmatrix}
  x & y
\end{pmatrix} \begin{pmatrix}
  \varphi_{11} & \varphi_{12} \\
  \varphi_{21} & \varphi_{22}
\end{pmatrix} \begin{pmatrix}
  z \\
  w
\end{pmatrix}
$$

これは $\varphi_{11} = \varphi_{22} = 0$ と同値

[$p - q \equiv 3 \mod 8$ の場合]
$\mathbb{H}[\eta] \otimes_\mathbb{R} \mathbb{C} \simeq M_2(\mathbb{C}[\varepsilon])$ で、$\mathbb{H}[\eta]$ は $\left\{ \begin{pmatrix} \alpha & \beta \\ -\bar{\beta} & \bar{\alpha} \end{pmatrix} \middle| \alpha, \beta \in \mathbb{C} \right\}[i\varepsilon] \subset M_2(\mathbb{C}[\varepsilon])$ に対応する。$\mathbb{H} \simeq Z \simeq \left\{ \begin{pmatrix} \alpha & \beta \\ -\bar{\beta} & \bar{\alpha} \end{pmatrix} \middle| \alpha, \beta \in \mathbb{C} \right\} \subset M_2(\mathbb{C}[\varepsilon])$。$|z|^2$ は $\mathrm{det}$ に対応する。$Z \otimes_\mathbb{R} \mathbb{C} = M_2(\mathbb{C}) \subset M_2(\mathbb{C}[\varepsilon])$。$B_\mathbb{R} \otimes_\mathbb{R} \mathbb{C}$ の元は、$\varphi_{ij} \in B_\mathbb{C}$ を用いて、$S_\mathbb{C}^{\oplus 2}$ 上のペアリングとして $\begin{pmatrix} \varphi_{11} & \varphi_{12} \\ \varphi_{21} & \varphi_{22} \end{pmatrix}$ と表せる。$\begin{pmatrix} x \\ y \end{pmatrix} \in S_\mathbb{C}^{\oplus 2}$ に $\begin{pmatrix} \alpha & \beta \\ \gamma & \delta \end{pmatrix} \in Z \otimes_\mathbb{R} \mathbb{C}$ を (右から) 作用させると、$\begin{pmatrix} \alpha x + \gamma y \\ \beta x + \delta y \end{pmatrix}$。よって、$\tilde{B}_\mathbb{R} \otimes_\mathbb{R} \mathbb{C}$ に入る条件は

$$
\begin{pmatrix}
  \alpha x + \gamma y & \beta x + \delta y
\end{pmatrix} \begin{pmatrix}
  \varphi_{11} & \varphi_{12} \\
  \varphi_{21} & \varphi_{22}
\end{pmatrix} \begin{pmatrix}
  \alpha z + \gamma w \\
  \beta z + \delta w
\end{pmatrix} = (\alpha\delta - \beta\gamma) \begin{pmatrix}
  x & y
\end{pmatrix} \begin{pmatrix}
  \varphi_{11} & \varphi_{12} \\
  \varphi_{21} & \varphi_{22}
\end{pmatrix} \begin{pmatrix}
  z \\
  w
\end{pmatrix}
$$

これは $\varphi_{11} = \varphi_{22} = 0$ かつ $\varphi_{12}, \varphi_{21}$ が交代的なことと同値

よって、上の表の 4 つ組を even のペアと odd のペアに分けて、それぞれのペアを以下のルールで書き換えれば良い

| ペア                             | 書き換え後 |
| -------------------------------- | ---------- |
| $(0, 0), (1, 0), (0, 1), (1, 1)$ | そのまま   |
| $(2, 0), (0, 2), (3, 1)$         | $(0, 0)$   |
| $(1, 3)$                         | $(1, 1)$   |

$(\mathrm{dim} \tilde{B}_\mathbb{R}^{+, \text{sym}}, \mathrm{dim} \tilde{B}_\mathbb{R}^{+, \text{alt}}, \mathrm{dim} \tilde{B}_\mathbb{R}^{-, \text{sym}}, \mathrm{dim} \tilde{B}_\mathbb{R}^{-, \text{alt}})$ は

| $p \backslash q$ | $0$            | $1$            | $2$            | $3$            | $4$            | $5$            | $6$            | $7$            |
| :--------------: | -------------- | -------------- | -------------- | -------------- | -------------- | -------------- | -------------- | -------------- |
|       $0$        | $(1, 0, 0, 0)$ | $(1, 0, 1, 0)$ | $(1, 1, 0, 0)$ | $(1, 1, 0, 0)$ | $(1, 1, 0, 0)$ | $(1, 1, 1, 1)$ | $(1, 1, 0, 0)$ | $(1, 0, 0, 1)$ |
|       $1$        | $(1, 0, 1, 0)$ | $(0, 0, 1, 0)$ | $(0, 1, 1, 0)$ | $(0, 0, 1, 1)$ | $(1, 1, 1, 1)$ | $(0, 0, 1, 1)$ | $(0, 0, 1, 1)$ | $(0, 0, 1, 1)$ |
|       $2$        | $(1, 1, 0, 0)$ | $(0, 1, 1, 0)$ | $(0, 1, 0, 0)$ | $(0, 1, 0, 1)$ | $(1, 1, 0, 0)$ | $(0, 0, 1, 1)$ | $(0, 0, 0, 0)$ | $(0, 0, 0, 0)$ |
|       $3$        | $(1, 1, 0, 0)$ | $(0, 0, 1, 1)$ | $(0, 1, 0, 1)$ | $(0, 0, 0, 1)$ | $(1, 0, 0, 1)$ | $(0, 0, 1, 1)$ | $(0, 0, 0, 0)$ | $(0, 0, 0, 0)$ |
|       $4$        | $(1, 1, 0, 0)$ | $(1, 1, 1, 1)$ | $(1, 1, 0, 0)$ | $(1, 0, 0, 1)$ | $(1, 0, 0, 0)$ | $(1, 0, 1, 0)$ | $(1, 1, 0, 0)$ | $(1, 1, 0, 0)$ |
|       $5$        | $(1, 1, 1, 1)$ | $(0, 0, 1, 1)$ | $(0, 0, 1, 1)$ | $(0, 0, 1, 1)$ | $(1, 0, 1, 0)$ | $(0, 0, 1, 0)$ | $(0, 1, 1, 0)$ | $(0, 0, 1, 1)$ |
|       $6$        | $(1, 1, 0, 0)$ | $(0, 0, 1, 1)$ | $(0, 0, 0, 0)$ | $(0, 0, 0, 0)$ | $(1, 1, 0, 0)$ | $(0, 1, 1, 0)$ | $(0, 1, 0, 0)$ | $(0, 1, 0, 1)$ |
|       $7$        | $(1, 0, 0, 1)$ | $(0, 0, 1, 1)$ | $(0, 0, 0, 0)$ | $(0, 0, 0, 0)$ | $(1, 1, 0, 0)$ | $(0, 0, 1, 1)$ | $(0, 1, 0, 1)$ | $(0, 0, 0, 1)$ |

$C_\mathbb{R} \coloneqq \underline{\mathrm{Hom}}_{\widetilde{\mathrm{Pin}}(V)}(S_\mathbb{R} \otimes S_\mathbb{R}, V)$ とする

複素化を考えれば、$B_\mathbb{R} \ni b \mapsto (\langle v, \Gamma(s, t) \rangle \coloneqq b(vs, t)) \in C_\mathbb{R}$ は odd な同型で、対称性を保つ

$$
\begin{aligned}
  \mathrm{Hom}_{\mathrm{Spin}(V)}(S_\mathbb{R}^\pm \otimes S_\mathbb{R}^\pm, V) &= C_\mathbb{R}^+ \\
  \mathrm{Hom}_{\mathrm{Spin}(V)}(S_\mathbb{R}^\pm \otimes S_\mathbb{R}^\mp, V) &= C_\mathbb{R}^-
\end{aligned}
$$

$(\mathrm{dim} C_\mathbb{R}^{+, \text{sym}}, \mathrm{dim} C_\mathbb{R}^{+, \text{alt}}, \mathrm{dim} C_\mathbb{R}^{-, \text{sym}}, \mathrm{dim} C_\mathbb{R}^{-, \text{alt}})$ は

| $p \backslash q$ | $0$            | $1$            | $2$            | $3$            | $4$            | $5$            | $6$            | $7$            |
| :--------------: | -------------- | -------------- | -------------- | -------------- | -------------- | -------------- | -------------- | -------------- |
|       $0$        | $(0, 0, 1, 0)$ | $(1, 0, 1, 0)$ | $(2, 0, 1, 1)$ | $(3, 1, 1, 3)$ | $(0, 0, 1, 3)$ | $(1, 3, 1, 3)$ | $(0, 2, 1, 1)$ | $(0, 1, 1, 0)$ |
|       $1$        | $(1, 0, 1, 0)$ | $(1, 0, 0, 0)$ | $(1, 0, 0, 1)$ | $(1, 1, 0, 2)$ | $(1, 3, 1, 3)$ | $(1, 3, 0, 0)$ | $(1, 3, 3, 1)$ | $(1, 1, 2, 0)$ |
|       $2$        | $(2, 0, 1, 1)$ | $(1, 0, 0, 1)$ | $(0, 0, 0, 1)$ | $(0, 1, 0, 1)$ | $(0, 2, 1, 1)$ | $(1, 3, 3, 1)$ | $(0, 0, 3, 1)$ | $(3, 1, 3, 1)$ |
|       $3$        | $(3, 1, 1, 3)$ | $(1, 1, 0, 2)$ | $(0, 1, 0, 1)$ | $(0, 1, 0, 0)$ | $(0, 1, 1, 0)$ | $(1, 1, 2, 0)$ | $(3, 1, 3, 1)$ | $(3, 1, 0, 0)$ |
|       $4$        | $(0, 0, 1, 3)$ | $(1, 3, 1, 3)$ | $(0, 2, 1, 1)$ | $(0, 1, 1, 0)$ | $(0, 0, 1, 0)$ | $(1, 0, 1, 0)$ | $(2, 0, 1, 1)$ | $(3, 1, 1, 3)$ |
|       $5$        | $(1, 3, 1, 3)$ | $(1, 3, 0, 0)$ | $(1, 3, 3, 1)$ | $(1, 1, 2, 0)$ | $(1, 0, 1, 0)$ | $(1, 0, 0, 0)$ | $(1, 0, 0, 1)$ | $(1, 1, 0, 2)$ |
|       $6$        | $(0, 2, 1, 1)$ | $(1, 3, 3, 1)$ | $(0, 0, 3, 1)$ | $(3, 1, 3, 1)$ | $(2, 0, 1, 1)$ | $(1, 0, 0, 1)$ | $(0, 0, 0, 1)$ | $(0, 1, 0, 1)$ |
|       $7$        | $(0, 1, 1, 0)$ | $(1, 1, 2, 0)$ | $(3, 1, 3, 1)$ | $(3, 1, 0, 0)$ | $(3, 1, 1, 3)$ | $(1, 1, 0, 2)$ | $(0, 1, 0, 1)$ | $(0, 1, 0, 0)$ |

$$
\tilde{C}_\mathbb{R} \coloneqq \{ \Gamma \in C_\mathbb{R} \mid \Gamma(z(s), z(t)) = |z|^2 \Gamma(s, t) \ (z \in Z) \}
$$

$\tilde{B}_\mathbb{R} \xrightarrow{\sim} \tilde{C}_\mathbb{R}$ は odd な同型で、対称性を保つ

$(\mathrm{dim} \tilde{C}_\mathbb{R}^{+, \text{sym}}, \mathrm{dim} \tilde{C}_\mathbb{R}^{+, \text{alt}}, \mathrm{dim} \tilde{C}_\mathbb{R}^{-, \text{sym}}, \mathrm{dim} \tilde{C}_\mathbb{R}^{-, \text{alt}})$ は

| $p \backslash q$ | $0$            | $1$            | $2$            | $3$            | $4$            | $5$            | $6$            | $7$            |
| :--------------: | -------------- | -------------- | -------------- | -------------- | -------------- | -------------- | -------------- | -------------- |
|       $0$        | $(0, 0, 1, 0)$ | $(1, 0, 1, 0)$ | $(0, 0, 1, 1)$ | $(0, 0, 1, 1)$ | $(0, 0, 1, 1)$ | $(1, 1, 1, 1)$ | $(0, 0, 1, 1)$ | $(0, 1, 1, 0)$ |
|       $1$        | $(1, 0, 1, 0)$ | $(1, 0, 0, 0)$ | $(1, 0, 0, 1)$ | $(1, 1, 0, 0)$ | $(1, 1, 1, 1)$ | $(1, 1, 0, 0)$ | $(1, 1, 0, 0)$ | $(1, 1, 0, 0)$ |
|       $2$        | $(0, 0, 1, 1)$ | $(1, 0, 0, 1)$ | $(0, 0, 0, 1)$ | $(0, 1, 0, 1)$ | $(0, 0, 1, 1)$ | $(1, 1, 0, 0)$ | $(0, 0, 0, 0)$ | $(0, 0, 0, 0)$ |
|       $3$        | $(0, 0, 1, 1)$ | $(1, 1, 0, 0)$ | $(0, 1, 0, 1)$ | $(0, 1, 0, 0)$ | $(0, 1, 1, 0)$ | $(1, 1, 0, 0)$ | $(0, 0, 0, 0)$ | $(0, 0, 0, 0)$ |
|       $4$        | $(0, 0, 1, 1)$ | $(1, 1, 1, 1)$ | $(0, 0, 1, 1)$ | $(0, 1, 1, 0)$ | $(0, 0, 1, 0)$ | $(1, 0, 1, 0)$ | $(0, 0, 1, 1)$ | $(0, 0, 1, 1)$ |
|       $5$        | $(1, 1, 1, 1)$ | $(1, 1, 0, 0)$ | $(1, 1, 0, 0)$ | $(1, 1, 0, 0)$ | $(1, 0, 1, 0)$ | $(1, 0, 0, 0)$ | $(1, 0, 0, 1)$ | $(1, 1, 0, 0)$ |
|       $6$        | $(0, 0, 1, 1)$ | $(1, 1, 0, 0)$ | $(0, 0, 0, 0)$ | $(0, 0, 0, 0)$ | $(0, 0, 1, 1)$ | $(1, 0, 0, 1)$ | $(0, 0, 0, 1)$ | $(0, 1, 0, 1)$ |
|       $7$        | $(0, 1, 1, 0)$ | $(1, 1, 0, 0)$ | $(0, 0, 0, 0)$ | $(0, 0, 0, 0)$ | $(0, 0, 1, 1)$ | $(1, 1, 0, 0)$ | $(0, 1, 0, 1)$ | $(0, 1, 0, 0)$ |

$q = 1$ の場合、even かつ対称な $\Gamma$ が一意的に存在して

$$
\Gamma(z(s), z(t)) = |z|^2 \Gamma(s, t)
$$

を満たすことも従う

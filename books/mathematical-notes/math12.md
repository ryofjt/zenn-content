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

$p = 1$ の場合、even な $\Gamma: S_\mathbb{R}^\pm \otimes S_\mathbb{R}^\pm \to V$ が一意的に存在して

$$
\Gamma(z(s), z(t)) = |z|^2 \Gamma(s, t)
$$

を満たすことも従う

# Even rule

$R$: supercommutative superalgebra

$R$ 加群 $M$ と $R$ 上の supercommutative superalgebra $S$ に対して、$S_0$ 加群 $M(S)$ を

$$
M(S) \coloneqq (S \otimes_R M)_0
$$

と定義する。$\mathsf{E}_R$ を、$R$ 上の外積代数 $R[\theta_1, \dots, \theta_k]$ のなす $R$ 上の supercommutative superalgebra の圏の充満部分圏とする

$M_1, \dots, M_n, N$: $R$ 加群

$f \in \mathrm{Hom}_R(\bigotimes\nolimits_R M_i, N)$ に対して、$S_0$ 加群の射 $f(S): \bigotimes\nolimits_{-_0} M_i(S) \to N(S) \ (S \in \mathsf{E}_R)$ が定まるが

$$
\mathrm{Hom}_R(\bigotimes\nolimits_R M_i, N) \ni f \mapsto f(-) \in \mathrm{Nat}_{-_0\text{-}\mathrm{Mod}}(\bigotimes\nolimits_{-_0} M_i(-), N(-))
$$

は全単射

[単射性]
$f \in \mathrm{Hom}_R(\bigotimes\nolimits_R M_i, N)$ とする。$\varepsilon \in \{0, 1\}^n$ とし、$m_i \in M_{i, \varepsilon_i}$ とする。$R_\varepsilon \coloneqq R[\theta_i \mid \varepsilon_i = 1]$ とし、$w_i \in M_i(R_\varepsilon)$ を

$$
w_i \coloneqq \begin{cases}
  m_i &\quad (\varepsilon_i = 0) \\
  \theta_i m_i &\quad (\varepsilon_i = 1)
\end{cases}
$$

で定める

$$
f(R_\varepsilon)(\otimes w_i) = (-1)^{\frac{1}{2}|\varepsilon|(|\varepsilon| - 1)} \left(\prod_{\varepsilon_i = 1} \theta_i\right) f(\otimes m_i)
$$

$N(R_\varepsilon) = \bigoplus_{1 \le i_1 < \cdots < i_k \le n} \theta_{i_1} \cdots \theta_{i_k} N_k$ だから、$(-1)^{\frac{1}{2}|\varepsilon|(|\varepsilon| - 1)} f(R_\varepsilon)(\otimes w_i) \in N(R_\varepsilon)$ の $\prod_{\varepsilon_i = 1} \theta_i$ の係数と $f(\otimes m_i)$ は一致する

[全射性]
$F \in \mathrm{Nat}_{-_0\text{-}\mathrm{Mod}}(\bigotimes\nolimits_{-_0} M_i(-), N(-))$ とする。$\varepsilon \in \{0, 1\}^n$ とする。$m_i \in M_{i, \varepsilon_i}$ とし、$R_\varepsilon, w_i$ を同様に定義する。$\varepsilon_j = 1$ とする。$\theta_j = 0$ で $\pi_{\varepsilon, \varepsilon - e_j}: R_\varepsilon \to R[\theta_i \mid \varepsilon_i = 1, i \ne j] \eqqcolon R_{\varepsilon - e_j}$ を定義すると

$$
\pi_{\varepsilon, \varepsilon - e_j}(F(R_\varepsilon)(\otimes w_i)) = F(R_{\varepsilon - e_j})(\pi_{\varepsilon, \varepsilon - e_j}(\otimes w_i)) = F(R_{\varepsilon - e_j})(0) = 0
$$

よって、$F(R_\varepsilon)(\otimes w_i) \in \left(\prod_{\varepsilon_i = 1} \theta_i\right) N_{|\varepsilon|} \subset N(R_\varepsilon)$。$R_0$ 加群の多重線形写像 $f_\varepsilon: \prod M_{i, \varepsilon_i} \to N_{|\varepsilon|}$ が

$$
f_\varepsilon(m_i) \coloneqq (-1)^{\frac{1}{2}|\varepsilon|(|\varepsilon| - 1)} F(R_\varepsilon)(\otimes w_i) \text{ の } \prod_{\varepsilon_i = 1} \theta_i \text{ の係数}
$$

で定まる。$r_1 \in R_1$, $1 \le k \le n$ とする。$\varepsilon_k = 0$ の場合は

$$
\begin{aligned}
  &f_{\varepsilon + e_k}(m_1, \dots, r_1 m_k, \dots, m_n) \\
  &= (-1)^{\frac{1}{2}(|\varepsilon| + 1)|\varepsilon|} F(R_{\varepsilon + e_k})(w_1 \otimes \cdots \otimes \theta_k r_1 m_k \otimes \cdots \otimes w_n) \text{ の } \prod_{\varepsilon_i = 1 \text{ or } i = k} \theta_i \text{ の係数} \\
  &= (-1)^{|\varepsilon|} (-1)^{\frac{1}{2}|\varepsilon|(|\varepsilon| - 1)} \theta_k r_1 F(R_{\varepsilon + e_k})(\otimes w_i) \text{ の } \prod_{\varepsilon_i = 1 \text{ or } i = k} \theta_i \text{ の係数} \\
  &= (-1)^{|\varepsilon|} (-1)^{\frac{1}{2}|\varepsilon|(|\varepsilon| - 1)} (-1)^{\#\{ i \mid \varepsilon_i = 1, i < k \}} r_1 F(R_{\varepsilon + e_k})(\otimes w_i) \text{ の } \prod_{\varepsilon_i = 1} \theta_i \text{ の係数} \\
  &= (-1)^{|\varepsilon|} (-1)^{\frac{1}{2}|\varepsilon|(|\varepsilon| - 1)} (-1)^{\#\{ i \mid \varepsilon_i = 1, i < k \}} r_1 F(R_\varepsilon)(\otimes w_i) \text{ の } \prod_{\varepsilon_i = 1} \theta_i \text{ の係数} \\
  &= (-1)^{\#\{ i \mid \varepsilon_i = 1, i < k \}} r_1 f_\varepsilon(m_i)
\end{aligned}
$$

$\varepsilon_k = 1$ の場合は

$$
\begin{aligned}
  &f_{\varepsilon + e_k}(m_1, \dots, r_1 m_k, \dots, m_n) \\
  &= (-1)^{\frac{1}{2}(|\varepsilon| - 1)(|\varepsilon| - 2)} F(R_{\varepsilon + e_k})(w_1 \otimes \cdots \otimes r_1 m_k \otimes \cdots \otimes w_n) \text{ の } \prod_{\varepsilon_i = 1, i \ne k} \theta_i \text{ の係数} \\
  &= -(-1)^{|\varepsilon|} (-1)^{\frac{1}{2}|\varepsilon|(|\varepsilon| - 1)} F(R_{\varepsilon + e_{n + 1}})(w_1 \otimes \cdots \otimes r_1 m_k \otimes \cdots \otimes w_n) \text{ の } \prod_{\varepsilon_i = 1, i \ne k} \theta_i \text{ の係数} \\
  &= (-1)^{|\varepsilon|} (-1)^{\frac{1}{2}|\varepsilon|(|\varepsilon| - 1)} F(R_{\varepsilon + e_{n + 1}})(w_1 \otimes \cdots \otimes \theta_k \theta_{n + 1} r_1 m_k \otimes \cdots \otimes w_n) \text{ の } \theta_{n + 1} \theta_k \prod_{\varepsilon_i = 1, i \ne k} \theta_i \text{ の係数} \\
  &= (-1)^{|\varepsilon|} (-1)^{\frac{1}{2}|\varepsilon|(|\varepsilon| - 1)} \theta_{n + 1} r_1 F(R_{\varepsilon + e_{n + 1}})(\otimes w_i) \text{ の } \theta_{n + 1} \theta_k \prod_{\varepsilon_i = 1, i \ne k} \theta_i \text{ の係数} \\
  &= (-1)^{|\varepsilon|} (-1)^{\frac{1}{2}|\varepsilon|(|\varepsilon| - 1)} r_1 F(R_\varepsilon)(\otimes w_i) \text{ の } \theta_k \prod_{\varepsilon_i = 1, i \ne k} \theta_i \text{ の係数} \\
  &= (-1)^{\#\{ i \mid \varepsilon_i = 1, i < k \}} r_1 f_\varepsilon(m_i)
\end{aligned}
$$

よって、$f_\varepsilon$ たちから $f: \bigotimes\nolimits_R M_i \to N$ が誘導される。あとは、任意の $S \in \mathsf{E}_R$ に対して、$f(S) = F(S)$ を示せば良い。$s_i m_i \in M_i(S)$ とし、$\eta \coloneqq (|m_i|) \in \{0, 1\}^n$ とする。変数 $\theta'_i \ (\eta_i = 1)$ を用意して

$$
v_i \coloneqq \begin{cases}
  s_i &\quad (\eta_i = 0) \\
  \theta'_i s_i &\quad (\eta_i = 1)
\end{cases}
$$

と定義する

$$
\begin{aligned}
  f(S)(\otimes s_i m_i) &= (-1)^{\frac{1}{2}|\eta|(|\eta| - 1)} \left(\prod s_i\right) \otimes f(\otimes m_i) \\
  &= \left(\prod s_i\right) \otimes \left[F(R_\eta)(\otimes w_i) \text { の } \prod_{\eta_i = 1} \theta_i \text{ の係数}\right] \\
  &= (-1)^{|\eta|^2} \left(\prod s_i\right) F(S_\eta)(\otimes w_i) \text { の } \prod_{\eta_i = 1} \theta_i \text{ の係数} \\
  &= (-1)^{|\eta|} \left(\prod v_i\right) F(S_{\eta, \eta'})(\otimes w_i) \text { の } \prod_{\eta_i = 1} \theta'_i \theta_i \text{ の係数} \\
  &= (-1)^{|\eta|} F(S_{\eta, \eta'})(\otimes v_i w_i) \text { の } \prod_{\eta_i = 1} \theta'_i \theta_i \text{ の係数} \\
  &= \left(\prod_{\eta_i = 1} \theta'_i \theta_i\right) F(S_{\eta, \eta'})(\otimes s_i m_i) \text { の } \prod_{\eta_i = 1} \theta'_i \theta_i \text{ の係数} \\
  &= F(S)(\otimes s_i m_i) \\
\end{aligned}
$$

最後の部分は、以下のようにしても従う。$(-1)^{\frac{1}{2}|\eta|(|\eta| - 1)} \left(\prod_{\eta_i = 1} \theta_i\right) f(m_i) = F(R_\eta)(\otimes w_i)$ に $R_\eta \ni \theta_i \mapsto s_i \in S$ を適用すれば

$$
(-1)^{\frac{1}{2}|\eta|(|\eta| - 1)} \left(\prod s_i\right) f(\otimes m_i) = F(S)(\otimes s_i m_i)
$$

$A$: $R$ 加群
$A$ 上に $R$ 上の superalgebra の構造を与えることと、$A(S)$ 上に $S$ に関して関手的な $S_0$ 代数の構造を与えることは同値

$A$: $R$ 上の superalgebra
$B$: $R$ 加群
$B$ 上に $A$ 加群の構造を与えることと、$B(S)$ 上に $S$ に関して関手的な $A(S)$ 加群の構造を与えることは同値

# 多様体の米田埋め込みの拡張

$\mathbb{R}^a$ のなす $\mathsf{Mfd}$ の充満部分圏を $\mathbb{R}^*$ とする

$$
\Phi: \mathsf{Mfd} \ni M \mapsto \mathrm{Hom}_\mathsf{Mfd}(-, M) \in \mathsf{Set}^{(\mathbb{R}^*)^\mathrm{op}}
$$

は忠実充満

[忠実性]
$f: M \to N$ とする。$x \in M$ に対して、$\Phi(f)(\mathbb{R}^0)(i_x)(*) = i_{f(x)}(*) = f(x)$

[充満性]
$F: \mathrm{Hom}_\mathsf{Mfd}(-, M) \to \mathrm{Hom}_\mathsf{Mfd}(-, N)$ とする。貼り合わせを考えれば、$M = \mathbb{R}^n$ として良い。あとは、通常の米田の補題と同様

# Supermanifold の米田埋め込みの拡張

$$
\mathrm{Hom}_\mathsf{sMfd}(\mathbb{R}^{0|b}, M) = \{ x_0 \in |M|, \varphi^*: \mathcal{O}_{M, x_0} \to \Lambda[\xi^1, \dots, \xi^b] \}
$$

は自然な多様体構造を持つことを示す。$U \subset \mathbb{R}^{p|q}$ とすると

$$
\begin{aligned}
  \mathrm{Hom}_\mathsf{sMfd}(\mathbb{R}^{0|b}, U) &= \left\{ \begin{aligned}
    &x_0 \in |U|, \\
    &t_{i\mu} \quad (1 \le i \le p, \mu \in \{0, 1\}^b, |\mu| \text{ は偶数}, \mu \ne 0), \\
    &s_{j\nu} \quad (1 \le j \le q, \nu \in \{0, 1\}^b, |\nu| \text{ は奇数})
  \end{aligned} \right\} \\
  &= |U| \times \mathbb{R}^{p(2^{b - 1} - 1) + q2^{b - 1}}
\end{aligned}
$$

$(x_0, \varphi^*)$ に対応する $(x_0, t_{i\mu}, s_{j\nu})$ は

$$
\begin{aligned}
  \varphi^* x^i &= x_0^i + \sum_{\mu \ne 0, |\mu| \text{ は偶数}} t_{i\mu} \xi^\mu \\
  \varphi^* \theta^j &= \sum_{\nu, |\nu| \text{ は奇数}} s_{j\nu} \xi^\nu
\end{aligned}
$$

で与えられる。逆に、$(x_0, t_{i\mu}, s_{j\nu})$ に対応する $(x_0, \varphi^*)$ は

$$
\varphi^*(g(x, \theta)) = \sum_{\alpha \in \mathbb{Z}_{\ge 0}^p} \frac{1}{\alpha!} \partial_x^\alpha f(x_0, \sum_{\nu, |\nu| \text{ は奇数}} s_{*\nu} \xi^\nu) (\sum_{\mu \ne 0, |\mu| \text{ は偶数}} t_{*\mu} \xi^\mu)^\alpha
$$

で与えられる。よって、$\mathrm{Hom}_\mathsf{sMfd}(\mathbb{R}^{0|b}, M)$ は標準的な多様体構造を持つ

$$
\mathrm{Hom}_\mathsf{sMfd}(\mathbb{R}^{a|b}, M) = \mathrm{Hom}_\mathsf{Mfd}(\mathbb{R}^a, \mathrm{Hom}_\mathsf{sMfd}(\mathbb{R}^{0|b}, M))
$$

$\mathbb{R}^{a|b}$ のなす $\mathsf{sMfd}$ の充満部分圏を $\mathbb{R}^{*|*}$ とする

$\Phi: \mathsf{sMfd} \ni M \mapsto \mathrm{Hom}_{\mathsf{sMfd}}(-, M) \in \mathsf{Set}^{(\mathbb{R}^{*|*})^\mathrm{op}}$ は忠実充満

[忠実性]
$f: M \to N$ を supermanifold の射とする。任意の $\varphi: \mathbb{R}^{0|b} \to M$ に対して、$\Phi(f)(\mathbb{R}^{0|b})(\varphi) = f \circ \varphi$ であり

$$
\begin{array}{ccc}
  \mathcal{O}_{N, |f|(|\varphi|(*))} &\xrightarrow{f^*}& \mathcal{O}_{M, |\varphi|(*)} \\
  \downarrow{\scriptsize{(\Phi(f)(\mathbb{R}^{0|b})(\varphi))^*}} && \downarrow{\scriptsize{\varphi^*}} \\
  \Lambda[\xi_1, \dots, \xi_b] &=& \Lambda[\xi_1, \dots, \xi_b]
\end{array}
$$

$|f| = \Phi(f)(\mathbb{R}^{0|0})$。あとは、任意の $V \subset |N|$ に対して、$f^*: \mathcal{O}_N(V) \to \mathcal{O}_M(|f|^{-1}(V))$ が $\Phi(f)$ で定まることを示せば良い。$|f|^{-1}(V) \subset \mathbb{R}^p$ かつ $\mathcal{O}_M(|f|^{-1}(V)) \simeq C^\infty(|f|^{-1}(V))[\theta^1, \dots, \theta^q]$ として良い。$h \in \mathcal{O}_N(V)$, $x_0 \in |f|^{-1}(V)$ とする。$(f^* h)(x_0) \in \Lambda[\theta^1, \dots, \theta^q]$ が $\Phi(f)$ で定まることを示せば良い。$\tau_{x_0}: \mathbb{R}^{0|q} \to M$ を座標 $x_0^1, \dots, x_0^p, \theta^1, \dots, \theta^q \in \Lambda[\theta^1, \dots, \theta^q]$ で定めれば、$|\tau_{x_0}|(*) = x_0$ であり

$$
\tau_{x_0}^* g = g(x_0) \quad (g \in \mathcal{O}_{M, x_0})
$$

よって

$$
\begin{aligned}
  (f^* h)(x_0) &= \tau_{x_0}^* f^* h_{|f|(x_0)} \\
  &= (\Phi(f)(\mathbb{R}^{0|q})(\tau_{x_0}))^* h_{|f|(x_0)}
\end{aligned}
$$

最後に、$f^* h$ を別の形で表示しておく。$\pi_M: \mathrm{Hom}_\mathsf{SMfd}(\mathbb{R}^{0|q}, M) \to \mathrm{Hom}_\mathsf{SMfd}(\mathbb{R}^{0|0}, M) = |M|$ とし、$\pi_N: \mathrm{Hom}_\mathsf{SMfd}(\mathbb{R}^{0|q}, N) \to |N|$ も同様に定める

$$
\begin{aligned}
  \tau: |f|^{-1}(V) \ni x \mapsto \tau_x \in \pi_M^{-1}(|f|^{-1}(V)) \\
  \mathrm{ev}_h: \pi_N^{-1}(V) \ni \psi \mapsto \psi^* h \in \Lambda[\theta^1, \dots, \theta^q]
\end{aligned}
$$

は滑らかで

$$
f^* h = \mathrm{ev}_h \circ \Phi(f)(\mathbb{R}^{0|q}) \circ \tau
$$

[充満性]
$M, N$ を supermanifold とし、$F: \mathrm{Hom}_{\mathsf{sMfd}}(-, M) \to \mathrm{Hom}_{\mathsf{sMfd}}(-, N)$ とする。貼り合わせを考えれば、$M = \mathbb{R}^{p|q}$ として良い。あとは、通常の米田の補題と同様

# Super vector bundle

Supermanifold $M$ 上の super vector bundle とは、$|M|$ 上の局所自由層 $\mathcal{E}$ のこと。$S$-points が

$$
E(S) \coloneqq \{ f: S \to M, t \in \mathcal{O}(S, f^*\mathcal{E})_0 \}
$$

となる supermanifold $E$ が存在することを示す。ただし、$f^*\mathcal{E} \coloneqq f^{-1}\mathcal{E} \otimes_{f^{-1}\mathcal{O}_M} \mathcal{O}_S$。$M \subset \mathbb{R}^{p|q}$ かつ $\mathcal{E} = \mathcal{O}_M^{r|s} \eqqcolon \mathcal{O}_M \otimes \mathbb{R}^{r|s}$ として良い。$f^*\mathcal{E} = \mathcal{O}_S^{r|s}$

$$
E(S) = \{ x \in \mathcal{O}(S)_0^p, \theta \in \mathcal{O}(S)_1^q, t \in \mathcal{O}(S)_0^r \oplus \mathcal{O}(S)_1^s \mid (x^1_\mathrm{red}, \dots, x^p_\mathrm{red})(|S|) \subset |M| \}
$$

よって、$E(S)$ は $M \times \mathbb{R}^{r|s}$ で表現される。逆に、$\pi: E \to M$ と $|M|$ の開被覆 $\{ |U_i| \}$ と

$$
\begin{array}{ccc}
  \pi^{-1}(U_i) &\xrightarrow[\sim]{\varphi_i}& U_i \times \mathbb{R}^{r|s} \\
  \downarrow && \downarrow \\
  U_i &=& U_i
\end{array}
$$

があって、$(U_i \cap U_j) \times \mathbb{R}^{r|s} \xrightarrow{\varphi_i \varphi_j^{-1}} \mathbb{R}^{r|s}$ が $g_{ij}: U_i \cap U_j \to GL_{r|s}(\mathbb{R})$ から誘導されるとすると、貼り合わせで局所自由層 $\mathcal{E}$ が構成できる

Supermanifold $M$ の接束 $\mathcal{T}M$ は、$M \subset \mathbb{R}^{p|q}$ ならば、$U \subset M$ に対して

$$
\begin{aligned}
  \mathcal{T}M(U) &= \mathfrak{X}(U) \\
  &\coloneqq \{ X \in \underline{\mathrm{End}}_\mathbb{R}(\mathcal{O}(U)) \mid X(fg) = (Xf)g + (-1)^{|X||f|}fXg \} \\
  &= \bigoplus_i \mathcal{O}(U) \partial_{x^i} \oplus \bigoplus_j \mathcal{O}(U) \partial_{\theta^j}
\end{aligned}
$$

を対応させる自由層。一般の場合は、貼り合わせで定義する

# Lie supergroup と Lie superalgebra

$G$: Lie supergroup

$m^*: \mathcal{O}_G \to \mathcal{O}_{G \times G}$, $e^*: \mathcal{O}_G \to \mathbb{R}$ とすると

$$
\begin{aligned}
  (m^* \otimes 1) \circ m^* = (1 \otimes m^*) \circ m^* \\
  (e^* \otimes 1) \circ m^* = (1 \otimes e^*) \circ m^* = 1
\end{aligned}
$$

左不変ベクトル場全体を $\mathfrak{X}(G)^G$ とすると、$\mathfrak{X}(G)^G \ni F \mapsto F_e \in T_e G$ は全単射

$F \in \mathfrak{X}(G)$ が左不変とは

$$
m^* \circ F = (1 \otimes F) \circ m^*
$$

これは、古典的な $F_{gh}f = F_h f(g \cdot)$ に対応する

$X \in T_e G$ とする。$\tilde{X} \coloneqq (1 \otimes X) \circ m^*$ は $G$ 上のベクトル場

$$
\begin{aligned}
  (1 \otimes \tilde{X}) \circ m^* &= (1 \otimes 1 \otimes X) \circ (1 \otimes m^*) \circ m^* \\
  &= (1 \otimes 1 \otimes X) \circ (m^* \otimes 1) \circ m^* \\
  &= (m^* \otimes X) \circ m^* \\
  &= m^* \circ (1 \otimes X) \circ m^* \\
  &= m^* \circ \tilde{X}
\end{aligned}
$$

だから、$\tilde{X}$ は左不変。$\tilde{X}_e = X \circ (1 \otimes e^*) \circ m^* = X$。また、$F \in \mathfrak{X}(G)^G$ ならば

$$
\begin{aligned}
  \widetilde{F_e} &= (1 \otimes F_e) \circ m^* \\
  &= (1 \otimes e^*) \circ (1 \otimes F) \circ m^* \\
  &= (1 \otimes e^*) \circ m^* \circ F \\
  &= F
\end{aligned}
$$

以上から、$T_e G$ は Lie superalgebra の構造を持ち、$\mathfrak{g}$ で表す

# $G \curvearrowright M$

$G \curvearrowright M$

$f \in \mathcal{O}(M)$ への $G$ 作用は、$G$ 上の関数の族

$$
(L^*)^{-1} \circ (1 \otimes f)
$$

で与えられる。ただし、$L: G \times M \ni (g, x) \mapsto (g, gx) \in G \times M$

$X \in \mathfrak{X}(M)$ への $G$ 作用は、$G$ 上のベクトル場の族

$$
(L^*)^{-1} \circ (1 \otimes X) \circ L^*
$$

で与えられる。また、$X$ が左不変とは $1 \otimes X$ と $L^*$ が可換なこと

$B$-points を使って言い換える。$g: B \to G$ とする。$L_g: B \times M \ni (b, x) \mapsto (b, g(b)x) \in B \times M$ が定まる。$f \in \mathcal{O}(G)$ への $G$ 作用は、$B$ 上の関数の族

$$
L_{g^{-1}}^* \circ (1 \otimes f)
$$

で与えられる。$X \in \mathfrak{X}(M)$ への $G$ 作用は、$B$ 上のベクトル場の族

$$
L_{g^{-1}}^* \circ (1 \otimes X) \circ L_g^*
$$

で与えられる

# $f$-derivation

$f: M \to N$

$U \subset \mathbb{R}^{p|q}$ かつ $f(U) \subset V \subset \mathbb{R}^{r|s}$ とする

$$
\begin{aligned}
  (f^*\mathcal{T}N)(U) &= \mathcal{O}(U) \otimes_{\mathcal{O}(V)} \mathfrak{X}(V) \\
  &= \bigoplus_{a = 1}^r \mathcal{O}(U) \partial_{y^a} \oplus \bigoplus_{b = 1}^s \mathcal{O}(U) \partial_{\eta^b}
\end{aligned}
$$

$$
\begin{aligned}
  &\mathrm{Der}_f(\mathcal{O}(V), \mathcal{O}(U)) \\
  &\coloneqq \{ D \in \underline{\mathrm{Hom}}(\mathcal{O}(V), \mathcal{O}(U)) \mid D(\varphi\psi) = (D\varphi)f^*\psi + (-1)^{|D||\varphi|}f^*\varphi D\psi \}
\end{aligned}
$$

とすると

$$
(f^*\mathcal{T}N)(U) \ni s \otimes X \mapsto (\varphi \mapsto s f^*(X\varphi)) \in \mathrm{Der}_f(\mathcal{O}(V), \mathcal{O}(U))
$$

は全単射

$(f^*\mathcal{T}N)(U)$ の基底を考えれば、単射性は明らか。全射性を示す。$D \in \mathrm{Der}_f(\mathcal{O}(V), \mathcal{O}(U))$ とする。$\Gamma: M \to M \times N$ をグラフとすると、$D$ は $\tilde{D} \in \mathrm{Der}_\Gamma(\mathcal{O}(U \times V), \mathcal{O}(U))$ に持ち上がる。$\tilde{D}(\mathcal{O}(U) \otimes 1) = 0$。$\mathrm{Der}_\Gamma(\mathcal{O}(U \times V), \mathcal{O}(U)) = \{ \Gamma^* \circ E \mid E \in \mathrm{Der}(\mathcal{O}(U \times V)) \}$ だから

$$
\tilde{D} = \Gamma^* \circ (\sum f_{x^i} \partial_{x^i} + \sum f_{\theta^j} \partial_{\theta^j} + \sum f_{y^a} \partial_{y^a} + \sum f_{\eta^b} \partial_{\eta^b})
$$

と表示できる。$\tilde{D}(\mathcal{O}(U) \otimes 1) = 0$ だから

$$
\tilde{D} = \Gamma^* \circ (\sum f_{y^a} \partial_{y^a} + \sum f_{\eta^b} \partial_{\eta^b})
$$

よって、$D\varphi = \sum (\Gamma^*f_{y^a}) f^*(\partial_{y^a}\varphi) + \sum (\Gamma^*f_{\eta^b}) f^*(\partial_{\eta^b}\varphi)$

# $\exp$

$G$: Lie supergroup

$\exp: \mathfrak{g} \to G$ を定義する

$B$ を supermanifold とし、$X: B \to \mathfrak{g}$ とする。$\tilde{X} \in \mathcal{O}(B \times G, \mathcal{T}G)$ が定まる。開集合 $\{0\} \times |B| \subset |D| \subset \mathbb{R} \times |B|$ と $\varphi: D \to G$ が存在して

$$
\frac{\partial}{\partial t} \circ (\mathrm{pr}_B, \varphi)^* = (\mathrm{pr}_B, \varphi)^* \circ \tilde{X} \in \mathcal{O}(D, \varphi^*\mathcal{T}G)
$$

かつ初期条件 $\varphi_0 \equiv e$ を満たす。$\varphi$ が $I \times |W| \ (0 \in I)$ で定義されているとする。任意の $t_0 \in I$ に対して、$\tilde{\varphi}(t, b) \coloneqq \varphi_{t_0}(b)\varphi(t, b): I \times W$ とする。$\tilde{\varphi}_0 = \varphi_{t_0}$。$f \in \mathcal{O}(G)$ に対して、$m^*f = \sum f_{(1)} \otimes f_{(2)}$ とすると

$$
\begin{aligned}
  \frac{\partial}{\partial t}\tilde{\varphi}^*f &= \frac{\partial}{\partial t}(\varphi_{t_0}^*f_{(1)}\varphi^*f_{(2)}) \\
  &= \varphi_{t_0}^*f_{(1)} \frac{\partial}{\partial t}\varphi^*f_{(2)} \\
  &= \varphi_{t_0}^*f_{(1)} (\mathrm{pr}_B, \varphi)^*\tilde{X}f_{(2)} \\
  &= (\mathrm{pr}_B, (\varphi_{t_0}, \varphi))^*(1 \otimes \tilde{X})m^*f \\
  &= (\mathrm{pr}_B, (\varphi_{t_0}, \varphi))^*m^*\tilde{X}f \\
  &= (\mathrm{pr}_B, \tilde{\varphi})^*\tilde{X}f
\end{aligned}
$$

よって、$D = \mathbb{R} \times B$ まで拡張できる。$\varphi: \mathbb{R} \times B \to G$ を $X$ の 1 パラメータ部分群という。$t \mapsto \varphi_t$ は群準同型
以上から、$\varphi_1: B \to G$ が定まる。$X \mapsto \varphi_1$ は $B$ に関して関手的だから、$\exp: \mathfrak{g} \to G$ が定まる

Body は $\exp: \mathfrak{g}_0 \to |G|$ に一致する

# 基本的なこと

$\mathcal{E}$: 位相空間 $X$ 上の層
$\mathcal{F}$: 位相空間 $Y$ 上の層
$f: X \to Y$

$$
\mathrm{Hom}(\mathcal{F}, f_*\mathcal{E}) = \mathrm{Hom}(f^{-1}\mathcal{F}, \mathcal{E})
$$

$f: X \to Y$: supermanifold の射
$\mathcal{E}$: $\mathcal{O}_X$ 加群
$\mathcal{F}$: $\mathcal{O}_Y$ 加群
$f_*\mathcal{E}$ は $\mathcal{O}_Y$ 加群
$f^*\mathcal{F} \coloneqq \mathcal{O}_X \otimes_{f^{-1}\mathcal{O}_Y} f^{-1}\mathcal{F}$ は $\mathcal{O}_X$ 加群

$$
\mathrm{Hom}_{\mathcal{O}_Y}(\mathcal{F}, f_*\mathcal{E}) = \mathrm{Hom}_{\mathcal{O}_X}(f^*\mathcal{F}, \mathcal{E})
$$

$X$: supermanifold

$$
\Omega^1_X \coloneqq \mathcal{Hom}_{\mathcal{O}_X}(\mathcal{T}X, \mathcal{O}_X)
$$

$U \subset X$ を局所座標とすると

$$
\Omega^1_X(U) = \bigoplus_i \mathcal{O}_X(U) dx^i \oplus \bigoplus_j \mathcal{O}_X(U) d\theta^j
$$

$d: \mathcal{O}_X \ni f \mapsto (X \mapsto Xf) \in \Omega^1_X$ がある

$$
df: \mathcal{T}M \ni X \mapsto X \circ f^* \in f^*\mathcal{T}N
$$

双対を取れば、$f^*: f^*\Omega^1_Y \to \Omega^1_X$ が誘導される

# Lie 微分

$X \in \mathfrak{X}(M)$
$s \in \mathcal{O}(B)$
$\tilde{X} \coloneqq (sX)_0: \mathcal{O}(M \times B, TM)$

$\{0\} \times |M| \times |B| \subset |D| \subset \mathbb{R} \times |B| \times |M|$ 上で $\tilde{X}$ の flow $\varphi: D \to M$ が定まる。陰関数定理から、$(\varphi_t, \mathrm{pr}_B)$ は local diffo として良い。$t \mapsto (\varphi_t, \mathrm{pr}_B)$ は群準同型

$u \in \mathcal{O}(B)_0 = \mathrm{Hom}_\mathsf{sMfd}(B, \mathbb{R})$ とする。$\tilde{Y} \coloneqq u\tilde{X}$ とし、$\tilde{Y}$ の flow を $\psi$ とする。$\psi$ は

$$
\mathbb{R} \times M \times B \ni (t, x, b) \xmapsto{\alpha} (u(b)t, x, b) \in \mathbb{R} \times M \times B \xrightarrow{\varphi} M
$$

と一致する。実際

$$
\begin{aligned}
  \frac{\partial}{\partial t} (\varphi \circ \alpha)^* g &= \frac{\partial}{\partial t} \alpha^* \varphi^* g \\
  &= u \alpha^* \frac{\partial}{\partial t} \varphi^* g \\
  &= u \alpha^* (\varphi, \mathrm{pr}_B)^* \tilde{X} g \\
  &= (\varphi \circ \alpha, \mathrm{pr}_B)^* \tilde{Y} g
\end{aligned}
$$

$f \in \mathcal{O}(M)$ とする

$$
\mathcal{O}(B) \ni s \mapsto \left.\frac{\partial}{\partial t}\right|_{t = 0} \varphi_t^* f \in \mathcal{O}(M \times B)
$$

は $\mathcal{O}(B)_0$ 準同型。よって、$B = \mathbb{R}, \mathbb{R}^{0|1}$ を考えれば、$F \in \mathcal{O}(M)$ が一意的に存在して、$\left.\frac{\partial}{\partial t}\right|_{t = 0} \varphi_t^* f = (sF)_{|f|}$。この $F$ を $\mathcal{L}_X f$ と定義する。$\mathcal{L}_X f = Xf$ が成り立つ

次に、$Y \in \mathfrak{X}(M)$ に対して、$\mathcal{L}_X Y$ を定義する。$\mathcal{O}(B) \ni s \mapsto \left.\frac{\partial}{\partial t}\right|_{t = 0} \varphi_t^* \circ Y \circ \varphi_{-t}^* \in \mathcal{O}(M \times B, TM)$ は $\mathcal{O}(B)_0$ 加群の射になる。よって

$$
\left.\frac{\partial}{\partial t}\right|_{t = 0} \varphi_t^* \circ Y \circ \varphi_{-t}^* \eqqcolon (s\mathcal{L}_X Y)_{|Y|}
$$

と定義する。$s$ は $X$ と同じ parity と思って

$$
\begin{aligned}
  \left.\frac{\partial}{\partial t}\right|_{t = 0} \varphi_t^* Y \varphi_{-t}^* g &= \left.\frac{\partial}{\partial t}\right|_{t = 0} \varphi_t^* Yg - Y \left.\frac{\partial}{\partial t}\right|_{t = 0} \varphi_t^* g \\
  &= sXYg - YsXg \\
  &= s(XY - (-1)^{|X||Y|}YX)g
\end{aligned}
$$

よって、$\mathcal{L}_X Y = [X, Y]$ がわかる

例えば、$\mathcal{L}_X(fY) = (\mathcal{L}_X f)Y + (-1)^{|X||f|}f\mathcal{L}_XY$ は直接計算でもわかるが、定義に戻ると

$$
\begin{aligned}
  \mathcal{L}_X(fY) &= \left.\frac{\partial}{\partial t}\right|_{t = 0} \varphi_t^* \circ fY \circ \varphi_{-t}^* \\
  &= \left.\frac{\partial}{\partial t}\right|_{t = 0} (\varphi_t^*f) (\varphi_t^* \circ Y \circ \varphi_{-t}^*) \\
  &= \left.\frac{\partial}{\partial t}\right|_{t = 0} (\varphi_t^*f)Y + f \left.\frac{\partial}{\partial t}\right|_{t = 0} \varphi_t^* \circ Y \circ \varphi_{-t}^* \\
  &= s(\mathcal{L}_X f)Y + fs\mathcal{L}_X Y \\
  &= s((\mathcal{L}_X f)Y + (-1)^{|X||f|}f\mathcal{L}_X Y)
\end{aligned}
$$

だから、自然に Leibniz 則を満たすことがわかる

# $\exp$ の性質

$f: G \to H$

微分を考えると、線形写像 $df: \mathfrak{g} \to \mathfrak{h}$ が誘導される

[$df: \mathfrak{g} \to \mathfrak{h}$ は Lie superalgebra の準同型]
$X, X' \in \mathfrak{g}$ とする。$Y \coloneqq df(X), Y' \coloneqq df(X')$ とする。まず、$\tilde{X}, \tilde{Y}$ が $f$-related なことを示す。$\tilde{X} \circ f^* = f^* \circ \tilde{Y}$ を示せば良い

$$
\begin{aligned}
  \tilde{X} \circ f^* &= (1 \otimes X) \circ m^* \circ f^* \\
  &= (1 \otimes X) \circ (f, f)^* \circ m^* \\
  &= f^* \circ (1 \otimes Y) \circ m^* \\
  &= f^* \circ \tilde{Y}
\end{aligned}
$$

よって、$[X, X'], [Y, Y']$ も $f$-related だから $df([X, X']) = [Y, Y']$

[$\exp$ と 1 パラメータ部分群]
$X: B \to \mathfrak{g}$ とする。任意の $t \in \mathbb{R}$ に対して、$tX$ のパラメータ $s$ の 1 パラメータ部分群 は、$\varphi(ts, X)$ に一致する。$s = 1$ とすると

$$
e^{tX}: \mathbb{R} \times B \ni (t, b) \mapsto tX(b) \in \mathfrak{g} \xrightarrow{\exp} G
$$

は $X$ の 1 パラメータ部分群 と一致することがわかる

[$d\exp_0 = \mathrm{id}_\mathfrak{g}$]
$X: B \to \mathfrak{g}$ に対して、$d\exp_0 \circ X = X$ を示せば良い

$$
d\exp_0 \circ X = X \exp^* = \left.\frac{\partial}{\partial t}\right|_{t = 0} (\exp^{tX})^* = X
$$

[$\exp$ の自然性]

$$
\begin{array}{ccc}
  \mathfrak{g} &\xrightarrow{df}& \mathfrak{h} \\
  \downarrow{\scriptsize{\exp}} && \downarrow{\scriptsize{\exp}} \\
  G &\xrightarrow{f}& H
\end{array}
$$

$X: B \to \mathfrak{g}$ とする。$f \circ e^{tX}: \mathbb{R} \times B \to H$ が $df(X)$ の 1 パラメータ部分群 に一致することを示せば良い

$$
\begin{aligned}
  (f \circ e^{tX}, \mathrm{pr}_B)^* \circ \widetilde{df(X)} &= (e^{tX}, \mathrm{pr}_B)^* \circ f^* \circ \widetilde{df(X)} \\
  &= (e^{tX}, \mathrm{pr}_B)^* \circ \tilde{X} \circ f^* \\
  &= \frac{\partial}{\partial t} \circ (e^{tX})^* \circ f^* \\
  &= \frac{\partial}{\partial t} \circ (f \circ e^{tX})^*
\end{aligned}
$$

[$\tilde{X}$ の flow]
$X: B \to \mathfrak{g}$ とする。$\tilde{X} \in \mathcal{O}(G \times B, TG)$ の flow は $m \circ (\mathrm{pr}_G, e^{tX}): \mathbb{R} \times G \times B \to G$

$$
\begin{aligned}
  \frac{\partial}{\partial t} (\mathrm{pr}_G, e^{tX})^* m^* f &= (\mathrm{pr}_G, e^{tX}, \mathrm{pr}_B)^* (1 \otimes \tilde{X}) m^* f \\
  &= (\mathrm{pr}_G, e^{tX}, \mathrm{pr}_B)^* (1 \otimes 1 \otimes X) (1 \otimes m^*) m^* f \\
  &= (\mathrm{pr}_G, e^{tX}, \mathrm{pr}_B)^* (1 \otimes 1 \otimes X) (m^* \otimes 1) m^* f \\
  &= (\mathrm{pr}_G, e^{tX}, \mathrm{pr}_B)^* (m^* \otimes 1) (1 \otimes X) m^* f \\
  &= (m \circ (\mathrm{pr}_G, e^{tX}), \mathrm{pr}_B)^* \tilde{X} f
\end{aligned}
$$

# $M(C)$

$\mathsf{sMfd} \ni M \mapsto M(-) \in \mathsf{Mfd}^{\mathbb{R}^{0|*}}$ は忠実だった

$C \coloneqq \mathbb{R}^{0|c}$

次元 $(p, q)$ の supermanifold $M$ に対して、$M(C) \to M(*) = |M|$ は典型ファイバーが $\mathbb{R}^{p(2^{c - 1} - 1) + q2^{c - 1}}$ のファイバー束


# $GL(V)$

$V$: super vector space over $\mathbb{R}$

$GL(V)$ を関手 $B \mapsto \mathrm{End}_{\mathcal{O}(B)}(\mathcal{O}(B) \otimes V)^\times \simeq (\mathcal{O}(B) \otimes \underline{\mathrm{End}}_\mathbb{R}(V))_0^\times$ で定義できた。実現は

$$
\mathcal{O}_{GL(V)} \coloneqq C^\infty_{\mathrm{End}_\mathbb{R}(V)^\times} \otimes \Lambda(\underline{\mathrm{End}}_\mathbb{R}(V)^*_1)
$$

$\mathrm{End}_\mathbb{R}(V)^\times = GL(V_0) \times GL(V_1)$ に注意。$\mathcal{T}(GL(V)) = \mathcal{O}_{GL(V)} \otimes \underline{\mathrm{End}}_\mathbb{R}(V)$。線形空間として $T_e G \simeq \underline{\mathrm{End}}_\mathbb{R}(V)$

$$
\begin{aligned}
  \mathcal{O}_{\underline{\mathrm{End}}_\mathbb{R}(V)} &= C^\infty_{\mathrm{End}_\mathbb{R}(V)} \otimes \Lambda(\underline{\mathrm{End}}_\mathbb{R}(V)^*_1) \\
  \underline{\mathrm{End}}_\mathbb{R}(V)(B) &= \mathrm{End}_{\mathcal{O}(B)}(\mathcal{O}(B) \otimes V) \simeq (\mathcal{O}(B) \otimes \underline{\mathrm{End}}_\mathbb{R}(V))_0
\end{aligned}
$$

[$\exp$]
$X: B \to \underline{\mathrm{End}}_\mathbb{R}(V)$ とする。$f \in \mathcal{O}(GL(V))$ に対して、$f: GL(V)(C) \to \mathcal{O}(C) \simeq \mathbb{R}^{1|1}(C) \ (C = \mathbb{R}^{0|*})$ は滑らかだが

$$
(Xf)(b) = X(b)f = \left.\frac{\partial}{\partial t}\right|_{t = 0} f(1 + tX(b)) \quad (b \in B(C))
$$

$\tilde{X}f \in \mathcal{O}(G \times B)$ は $G(C) \times B(C) \to \mathbb{R}^{1|1}(C)$ を誘導する。$g \in GL(V)(C), b \in B(C)$ に対して、$m^* f = \sum f_{(1)} \otimes f_{(2)}$ とすると

$$
\begin{aligned}
  (\tilde{X}f)(g, b) &= \sum f_{(1)}(g) (Xf_{(2)})(b) \\
  &= \left.\frac{\partial}{\partial t}\right|_{t = 0} \sum f_{(1)}(g) f_{(2)}(1 + tX(b)) \\
  &= \left.\frac{\partial}{\partial t}\right|_{t = 0} f(g(1 + tX(b))) \\
  &= \left.\frac{\partial}{\partial t}\right|_{t = 0} f(g + tgX(b))
\end{aligned}
$$

$\mathbb{R} \times B \to GL(V)$ を $\mathbb{R}(S) \times B(S) \ni (t, b) \mapsto e^{tX(b)} \in (\mathcal{O}(S) \otimes \underline{\mathrm{End}}_\mathbb{R}(V))_0^\times \simeq GL(V)(S)$ で定義する。$e^{tX}$ は $X$ の 1 パラメータ部分群に一致することを示す。$f \in \mathcal{O}(GL(V)), b \in B(C)$ に対して、$\mathbb{R}^{1|1}(C)$ の等式として

$$
\begin{aligned}
  \left(\frac{\partial}{\partial t} (e^{tX})^* f\right)(b) &= \frac{\partial}{\partial t} f(e^{tX(b)}) \\
  &= \left.\frac{\partial}{\partial s}\right|_{s = 0} f(e^{(t + s)X(b)}) \\
  &= \left.\frac{\partial}{\partial s}\right|_{s = 0} f(e^{tX(b)}e^{sX(b)}) \\
  &= \left.\frac{\partial}{\partial s}\right|_{s = 0} f(e^{tX(b)}(1 + sX(b))) \\
  &= ((e^{tX}, \mathrm{pr}_B)^* \tilde{X} f)(b)
\end{aligned}
$$

$C$ に関して関手的だから、$\mathcal{O}(B)$ の等式として

$$
\frac{\partial}{\partial t} (e^{tX})^* f = (e^{tX})^* \tilde{X} f
$$

[$T_e G$ の Lie superalgebra 構造]
$X, Y: B \to \underline{\mathrm{End}}_\mathbb{R}(V)$ に対して、$[\tilde{X}, \tilde{Y}] = \widetilde{[X, Y]}$ を示す。$C = \mathbb{R}^{0|*}$ とする。$\tilde{X}$ の flow を $\varphi: \mathbb{R} \times G \times B \to G$ とする。$g \in GL(V)(C), b \in B(C)$ に対して、$\varphi_t(g, b) = ge^{tX(b)}$ だから

$$
\begin{aligned}
  ([\tilde{X}, \tilde{Y}]f)(g, b) &= ((\mathcal{L}_{\tilde{X}}\tilde{Y})f)(g, b) \\
  &= \left.\frac{\partial}{\partial t}\right|_{t = 0} ((\varphi_t, \mathrm{pr}_B)^* \tilde{Y} \varphi_{-t}^* f)(g, b) \\
  &= \left.\frac{\partial^2}{\partial t \partial s}\right|_{t = s = 0} f(ge^{tX(b)}(1 + sY(b))e^{-tX(b)}) \\
  &= \left.\frac{\partial}{\partial s}\right|_{s = 0} \left.\frac{\partial}{\partial t}\right|_{t = 0} f(ge^{tX(b)}(1 + sY(b))e^{-tX(b)}) \\
  &= \left.\frac{\partial}{\partial s}\right|_{s = 0} \left.\frac{\partial}{\partial t}\right|_{t = 0} f(g(1 + sY(b) + st[X(b), Y(b)])) \\
  &= \left.\frac{\partial^2}{\partial t \partial s}\right|_{t = s = 0} f(g(1 + sY(b) + st[X(b), Y(b)])) \\
  &= \left.\frac{\partial^2}{\partial t \partial s}\right|_{t = s = 0} f(g(1 + st[X(b), Y(b)])) \\
  &= \left.\frac{\partial}{\partial u}\right|_{u = 0} f(g(1 + u[X(b), Y(b)])) \\
  &= (\widetilde{[X, Y]}f)(g, b)
\end{aligned}
$$

# $\mathrm{Ad}, \mathrm{ad}$

$G \times G \ni (g, h) \mapsto ghg^{-1} \in G$ を $h$ に関して微分すると、群準同型 $G(B) \to \mathrm{End}_{\mathcal{O}(B)}(\mathcal{O}(B) \otimes \mathfrak{g})_0^\times = GL(\mathfrak{g})(B)$ ができる。これから、Lie supergroup の射

$$
\mathrm{Ad}: G \to GL(\mathfrak{g})
$$

が誘導される。$\mathrm{ad} \coloneqq d\mathrm{Ad}: \mathfrak{g} \to \mathfrak{gl}(V)$ は Lie superalgebra の射

$$
\mathrm{ad}_X = [X, -]
$$

を示す。$X, Y \in \mathfrak{g}(B)$ とする。まず、$g \in G(B)$ に対して、$ge^{sY}g^{-1}: B \to G$ は $\mathrm{Ad}(g)(Y) \in \mathfrak{g}(B)$ の 1 パラメータ部分群。$f \in \mathcal{O}(G), C = \mathbb{R}^{0|*}$ とする。$g \in G(C), b \in B(C)$ に対して、$\tilde{X}$ の flow を $\varphi: \mathbb{R} \times G \times B \to G$ とすると

$$
\begin{aligned}
  (\widetilde{[X, Y]}f)(g, b) &= ([\tilde{X}, \tilde{Y}]f)(g, b) \\
  &= ((\mathcal{L}_{\tilde{X}}\tilde{Y})f)(g, b) \\
  &= \left.\frac{\partial}{\partial t}\right|_{t = 0} ((\varphi_t, \mathrm{pr}_B)^* \tilde{Y} \varphi_{-t}^* f)(g, b) \\
  &= \left.\frac{\partial^2}{\partial t \partial s}\right|_{t = s = 0} f(ge^{tX(b)}e^{sY(b)}e^{-tX(b)}) \\
  &= \left.\frac{\partial^2}{\partial t \partial s}\right|_{t = s = 0} f(ge^{s\mathrm{Ad}_{e^{tX(b)}}Y(b)}) \\
  &= \left.\frac{\partial}{\partial s}\right|_{s = 0} f(ge^{s\mathrm{ad}_{X(b)}Y(b)}) \\
  &= (\widetilde{\mathrm{ad}_X Y}f)(g, b)
\end{aligned}
$$

特に、$X, Y \in \mathfrak{g}(B)$ に対して

$$
\mathrm{Ad}_{e^X}Y = e^{\mathrm{ad}_X}Y = \sum_{n = 0}^\infty \frac{1}{n!} \overbrace{[X, [X, \dots, [X}^n, Y]]]
$$

# super vector bundle の frame

$\mathcal{E}$: $M$ 上の局所自由層
$s_i \in \mathcal{O}(M, \mathcal{E})$
各 $x \in |M|$ に対して、$s_i(x) \in E_x$ が super vector space の基底ならば

$$
\bigoplus_i \mathcal{O}_M s_i \xrightarrow{\sim} \mathcal{E}
$$

$x \in |M|$ とする。$\mathcal{E}$ は局所自由だから、$x \in |U| \subset |M|$ と $e_j \in \mathcal{O}(U, \mathcal{E})$ が存在して、$\mathcal{E}|_U \simeq \bigoplus_j \mathcal{O}_U e_j$。$s_i|_U = \sum_j f_{ij}e_j \ (f_{ij} \in \mathcal{O}(U))$ と表示する。$(f_{ij}(p))$ は可逆だから、$p \in |V| \subset |U|$ が存在して、$(f_{ij}|_V)$ は可逆。よって、$\mathcal{E}|_V \simeq \bigoplus_i \mathcal{O}_V s_i|_V$

特に、Lie supergroup $G$ に対して

$$
\mathcal{O}_G \otimes \mathfrak{g} \ni f \otimes X \xmapsto{\sim} f\tilde{X} \in \mathcal{T}G
$$

$\mathfrak{g}$ には自明な作用を考えると、$G$ 同変 super vector bundle の同型

# $\exp$ の微分公式

$X, Y \in \mathfrak{g}(B)$ に対して

$$
\left.\frac{\partial}{\partial t}\right|_{t = 0} e^{-X}e^{X + tY} = \frac{1 - e^{-\mathrm{ad}_X}}{\mathrm{ad}_X} Y
$$

$$
V(s) \coloneqq \left.\frac{\partial}{\partial t}\right|_{t = 0} e^{-sX}e^{s(X + tY)} \in \mathfrak{g}(B)
$$

$V'(s)$ を計算する。$f \in \mathcal{O}(G)$ とすると

$$
\begin{aligned}
  \frac{\partial}{\partial s} \left.\frac{\partial}{\partial t}\right|_{t = 0} f(e^{-sX}e^{s(X + tY)}) &= \frac{\partial}{\partial s} (V(s)f) = V'(s)f
\end{aligned}
$$

また

$$
\begin{aligned}
  \frac{\partial}{\partial s} f(e^{-sX}e^{s(X + tY)}) &= \left.\frac{\partial}{\partial u}\right|_{u = 0} f(e^{-sX}e^{-uX}e^{u(X + tY)}e^{s(X + tY)}) \\
  &= (tY)\Phi_{s, t} \\
  &= tY\Phi_{s, t}
\end{aligned}
$$

ただし、$\Phi_{s, t}(g) \coloneqq f(e^{-sX}ge^{s(X + tY)})$。よって

$$
\begin{aligned}
  \left.\frac{\partial}{\partial t}\right|_{t = 0} \frac{\partial}{\partial s} f(e^{-sX}e^{s(X + tY)}) &= Y\Phi_{s, 0} \\
  &= (\mathrm{Ad}_{e^{-sX}}Y)f \\
  &= (e^{-s\mathrm{ad}_X}Y)f
\end{aligned}
$$

以上から、$V'(s) = e^{-s\mathrm{ad}_X}Y$ であり

$$
\begin{aligned}
  V(s) &= \left(\int_0^s e^{-s\mathrm{ad}_X} \, ds\right)Y \\
  &= \frac{1 - e^{-s\mathrm{ad}_X}}{\mathrm{ad}_X} Y \\
\end{aligned}
$$

# BCH formula

$L[X, Y]$ を自由 Lie 代数とする。$F = \sum_{n = 0}^\infty F_n(X, Y) t^n \in L[X, Y]\llbracket t \rrbracket$ を $F_0(X, Y) \equiv 0$ かつ

$$
\frac{d}{dt}F = h_1(\mathrm{ad}_F)X + h_2(\mathrm{ad}_F)Y
$$

で定義する。ただし、$h_1(z) \coloneqq \frac{z}{e^z - 1}, h_2(z) \coloneqq \frac{z}{1 - e^{-z}}$。$F_n \in L[X, Y]_n$ であり

$$
\begin{aligned}
  F_1(X, Y) &= X + Y \\
  F_2(X, Y) &= \frac{1}{2}[X, Y] \\
  F_3(X, Y) &= \frac{1}{12}([X, [X, Y]] + [Y, [Y, X]]) \\
  &\cdots
\end{aligned}
$$

任意の Lie supergroup $G$ と $X, Y \in \mathfrak{g}(B)$ に対して

$$
\log(e^X e^Y) = \sum_{n = 0}^\infty F_n(X, Y)
$$

まず、定義域について議論する。$f = \sum_{n = 0}^\infty f_n(x, y) t^n$ を $f_0(x, y) \equiv 0$ かつ

$$
\frac{d}{dt}f = h_1(f)x + h_2(f)y
$$

で定義する。$f(x, y, t)$ は $(0, 0, 0)$ の近傍で収束する冪級数。$f_n(x, y)$ は $n$ 次斉次多項式だから、スケーリングすれば、$f(x, y, 1)$ は $(0, 0)$ の近傍で収束する。よって、$0 \in U \subset \mathfrak{g}_0$ が存在して、$|X|(|B|), |Y|(|B|) \subset U$ ならば $\sum_{n = 1}^\infty F_n(X, Y)$ は収束する。必要なら $U$ を取り替えれば、$\log(e^X e^Y)$ も定義される

$M(t) \coloneqq \log(e^{tX}e^{tY})$ とする。$e^{-M(t)}e^{M(t + s)} = e^{-tY}e^{sX}e^{(t + s)Y}$ の両辺を $s = 0$ で微分して

$$
\frac{1 - e^{-\mathrm{ad}_{M(t)}}}{\mathrm{ad}_{M(t)}}M'(t) = e^{-t\mathrm{ad}_Y}X + Y
$$

よって、$M'(t) = h_2(\mathrm{ad}_{M(t)})(e^{-t\mathrm{ad}_Y}X + Y)$。$e^{\mathrm{ad}_{M(t)}} = \mathrm{Ad}_{e^{M(t)}} = \mathrm{Ad}_{e^{tX}}\mathrm{Ad}_{e^{tY}} = e^{t\mathrm{ad}_X}e^{t\mathrm{ad}_Y}$ だから

$$
M'(t) = h_1(\mathrm{ad}_{M(t)})X + h_2(\mathrm{ad}_{M(t)})Y
$$

# $G(C)$

$C \coloneqq \mathbb{R}^{0|c}$

次元 $(p, q)$ の supermanifold $M$ に対して、$M(C) \to M(*) = |M|$ は典型ファイバーが $\mathbb{R}^{p(2^{c - 1} - 1) + q2^{c - 1}}$ のファイバー束だった

# Evening post — 2026-10-31

**Topic:** Apéry's Theorem (1979). ζ(3) = 1/1³ + 1/2³ + 1/3³ + ... ≈
1.2020569... (Apéry's constant) is irrational — proven by French
mathematician Roger Apéry, announced in 1978 and published in
Astérisque in 1979. The announcement was initially met with wide
skepticism; it took two months of work by Henri Cohen, Hendrik
Lenstra, and Alf van der Poorten (with help from Don Zagier) to
confirm the proof was correct. The key trick: a recurrence relation
n³uₙ = (34n³ − 51n² + 27n − 5)uₙ₋₁ − (n−1)³uₙ₋₂, which, started from
two different initial conditions, produces a sequence of rational
approximants bₙ/aₙ that converge to ζ(3) so absurdly fast that a
classic irrationality criterion (Dirichlet's) applies. It remains
unknown whether ζ(3) is transcendental or a rational multiple of π³.
Related work (Zudilin, Ball–Rivoal) later showed infinitely many odd
zeta values ζ(5), ζ(7), ζ(9)... include at least one irrational
number, but the general odd-zeta irrationality question is still
wide open.

**Different topic from recent days** — checked every `**Topic:**`
line across the repo's full history (Sept–Oct, 100+ prior posts) via
grep, including this morning's "100 Prisoners Problem" post. Also
specifically checked for related zeta/number-theory topics already
covered: Riemann Hypothesis, Goldbach Conjecture, Prime Number
Theorem, and Banach–Tarski (unrelated but also uses Axiom-of-Choice
style set theory) have all appeared before, but Apéry's constant /
Apéry's theorem had not been used.

**Accuracy check:** Verified via WebSearch (Wikipedia "Apéry's
theorem", ProofWiki, arXiv formal-proof papers) — confirmed the
1978 announcement / 1979 Astérisque publication date, the initial
skepticism and the Cohen–Lenstra–van der Poorten–Zagier verification,
the exact recurrence relation, and the open status of ζ(3)'s
transcendence. Numerically verified ζ(3) ≈ 1.2020569031595942 and the
convergence of the Apéry recurrence to ~34 correct digits by n=10
using mpmath at 60 digits of precision in Python.

**Visuals:** Static PNG (apery_zeta3.png) — two-panel dark-theme
figure: left panel shows the slow, textbook partial sums of 1/n³
creeping toward ζ(3); right panel is a log-scale comparison showing
Apéry's bₙ/aₙ approximants converging to ζ(3) dramatically faster
(double-exponentially) than the naive series, which is the engine of
the irrationality proof.

GIF included — apery_converge.gif, ~6.9s, 600x338, PillowWriter,
~78KB. Shows a single point marking the Apéry approximant bₙ/aₙ
snapping toward the ζ(3) line step by step (n=1 to n=10), with a
live "error so far" readout and title/caption overlay baked into
each frame.

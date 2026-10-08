# Evening post — 2026-10-08

**Topic:** The Riemann Hypothesis — the $1,000,000 Clay Millennium Prize
problem about where the Riemann zeta function ζ(s) equals zero. The
"trivial" zeros sit at the negative even integers; every known
"nontrivial" zero instead lies exactly on the critical line Re(s) = 1/2
in the complex plane. The hypothesis conjectures this is true for *all*
infinitely many nontrivial zeros, which — if proven — would pin down the
distribution of prime numbers with the greatest possible precision. First
nontrivial zero: 1/2 + 14.134725...i. As of Gourdon's 2004 computation,
the first ten trillion (10^13) nontrivial zeros have all been checked and
found on the line — strong evidence, but checking any finite number,
however large, can never be a proof, and it remains open since Riemann
first posed it in 1859.

**Different topic from today's morning post** (Poincaré disk model /
hyperbolic {3,7} tiling / Escher's Circle Limit) and from every other
topic in the repo's history — checked every `**Topic:**` line across all
prior notes.md files; no prior post has covered the Riemann Hypothesis,
the zeta function, or the distribution of primes.

**Accuracy check:** verified via WebSearch across multiple independent
sources for: the first nontrivial zero's imaginary part (14.134725...,
matching ProofWiki); the critical line Re(s) = 1/2 statement of the
hypothesis; its status as a Clay Mathematics Institute Millennium Prize
Problem worth $1,000,000, still unsolved; and the verification history
(Brent et al. 1982 checked the first ~200 million zeros; Wedeniwski's
ZetaGrid reached one trillion; Gourdon in 2004 extended this to the first
ten trillion nontrivial zeros, covering heights up to ~2.4 trillion, all
on the critical line). The zero values plotted in the static image and
used as markers in the GIF were computed directly and exactly via
mpmath's arbitrary-precision ζ(s) evaluation (mp.zeta), not hard-coded
approximations, except for the small published list of the first ~15
known zero heights used for marker placement, which matches the
independently-computed |ζ(1/2+it)| curve's zero crossings.

**Media:** riemann_zeta.png (1200x675, dark theme) — left panel: the
critical strip in the complex plane with the critical line Re(s)=1/2
highlighted and the first 15 known nontrivial zeros marked as dots along
it; right panel: |ζ(1/2+it)| plotted against t for 0 < t < 68, computed
via mpmath, dipping to exactly zero at each known zero height. Included a
GIF: riemann_zeta.gif (600x338, ~525KB, ~5.8s, 12fps, built with
matplotlib FuncAnimation + PillowWriter) — animates a point walking up
the critical line while |ζ(1/2+it)| is traced out live and each zero
crossing lights up, with an in-frame title/caption so it's
self-explanatory without the surrounding post text.

**Sources:**
- https://en.wikipedia.org/wiki/Riemann_hypothesis
- https://proofwiki.org/wiki/Riemann_Hypothesis
- https://mathworld.wolfram.com/RiemannHypothesis.html

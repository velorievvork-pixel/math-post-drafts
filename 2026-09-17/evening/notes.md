# Evening post — 2026-09-17

**Topic:** The Collatz Conjecture (3n+1 problem / "hailstone sequence").
Take any positive integer: if even, divide by 2; if odd, triple it and
add 1. Repeat. Conjecture (Lothar Collatz, 1937): every starting number
eventually reaches 1. Unproven despite 89 years of effort, but verified
by computer for every integer up to roughly 2^71 (≈2.36 × 10^21), with
no counterexample ever found.

**Accuracy check:** computed directly in Python (not assumed): starting
from 27, the sequence takes exactly 111 steps to reach 1 and peaks at
9,232. Starting from 97 (118 steps) and 71 (102 steps) were also
computed directly for the static chart. The "verified past 2^71"
figure and the 1937/Lothar Collatz attribution were cross-checked via
web search against multiple independent sources (GeeksforGeeks, Wiris,
HowStuffWorks, and a Hacker News discussion citing the verification
project, which describes extension from the historical 2^68 bound up
to 2^71).

**Format:**
- collatz_hailstone.png — static chart: three hailstone sequences (27,
  97, 71) plotted on a log scale, annotated with the 27 → 9,232 → 1
  story and the verification-bound fact.
- collatz_animation.gif — ~4s, 12fps, 600x338 animation tracing the
  sequence for 27 step by step with an in-frame caption, ending on
  "Reached 1 after 111 steps (peak: 9,232)".

**Sources:**
- https://www.geeksforgeeks.org/maths/collatz-conjecture/
- https://www.wiris.com/en/blog/what-is-the-collatz-conjecture/
- https://news.ycombinator.com/item?id=27846958 (2^68 verification milestone)
- Verification bound extended to 2^71: computational-verification research
  referenced in search results (e.g. arXiv/ResearchGate papers on
  "Improved verification limit for the convergence of the Collatz
  conjecture").

Different from all earlier posts, including this morning's Zeno's
Paradox / geometric series (that post shows infinitely many positive
terms summing to a finite value; this one is an unsolved, chaotic
iterative dynamical system with no known proof) — also distinct from
Kakeya needle problem, Go First Dice, golden angle/sunflower
phyllotaxis, Hardy-Ramanujan 1729, Ulam spiral, Chaos Game/Sierpinski
triangle, Buffon's Needle, Mobius strip, Voronoi diagram, Penrose
tiling, Coastline Paradox/Koch snowflake, Squaring the Square,
Konigsberg Bridges, Benford's Law, Efron's Dice, Monty Hall, Cantor
Set, Borromean Rings, Four Color Theorem, Hat aperiodic monotile,
Birthday Paradox.

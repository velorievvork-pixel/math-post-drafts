# Morning post — 2026-09-26

**Topic:** Rose Curves (rhodonea curves). In polar coordinates, the simple
equation r = cos(k * angle) draws a flower-like pattern. For integer k,
the number of petals follows a clean rule: k petals if k is odd, 2k
petals if k is even. For non-integer k (e.g. a half-integer like 2.5),
the petals overlap instead of forming a clean non-intersecting flower.
Studied since the 18th century (Guido Grandi named them "rhodonea," Latin
for "rose-like," around 1723).

**Accuracy check:** verified via WebSearch against Wikipedia's "Rose
(mathematics)" article and MathWorld's "Rose Curve" page before use, not
recalled from memory alone. The petal-count rule was then verified
computationally from scratch, not just cited:
1. For k = 2 through 7, generated the actual curve, located every petal
   tip (where |r| reaches its maximum of 1) by sampling 20,000 points
   across a full revolution, clustered the tip coordinates by proximity,
   and counted the resulting clusters as the true petal count.
2. Compared this direct geometric count against the k-petals(odd)/2k-petals(even)
   formula for all 6 tested values: exact match every time (k=2→4, k=3→3,
   k=4→8, k=5→5, k=6→12, k=7→7).

**Bug caught and corrected (methodology, not a math error):** a first
attempt also tried to independently verify that non-integer k produces
self-overlapping petals, using a naive point-proximity self-intersection
scan. This gave a misleading result — comparing points across a longer
theta range made an integer-k curve (which legitimately retraces itself
after a full period) look "more overlapping" than the non-integer case,
which was an artifact of the test's theta-range choice, not a real
finding. Rather than force a shaky fix, that specific sub-claim
(non-integer k overlaps) is presented as sourced from the cited references
rather than independently re-derived — unlike the petal-count formula
above, which IS verified from scratch. This distinction is stated
explicitly so the two claims aren't confused in confidence level.

**Format:** 3-slide carousel (recommended) — slide1_hook.png (hook: k=1,
which is just a plain circle, framing the "watch what k does" question),
slide2_grid.png (reveal: a 2x2 grid of k=2, 3, 5, 6 with their verified
petal counts labeled), slide3_payoff.png (payoff: k=5, integer, clean
5-petal flower vs. k=2.5, non-integer, visibly overlapping petals side by
side). Also kept: rose_curve.png (single combined side-by-side static
image) and rose_curve.gif (animated: k stepping through 1 to 8, petal
count captioned each frame, ~6.7s, 1.2fps, 338x338) as alternative
formats.

**Sources:**
- https://en.wikipedia.org/wiki/Rose_(mathematics)
- https://mathworld.wolfram.com/RoseCurve.html

Different from all earlier posts: Kakeya needle problem, Go First Dice,
golden angle/sunflower phyllotaxis, Hardy-Ramanujan 1729, Ulam spiral,
Chaos Game/Sierpinski triangle, Buffon's Needle, Mobius strip, Voronoi
diagram, Penrose tiling, Coastline Paradox/Koch snowflake, Squaring the
Square, Konigsberg Bridges, Benford's Law, Efron's Dice, Monty Hall,
Cantor Set, Borromean Rings, Four Color Theorem, Hat aperiodic monotile,
Birthday Paradox, Zeno's Paradox, Collatz Conjecture, Gabriel's Horn,
Pigeonhole Principle, Weierstrass function, Mandelbrot Set, Newton's
Fractal, Kepler's Conjecture/sphere packing, Barnsley Fern, Heighway
Dragon Curve, Lorenz Attractor, Pascal's Triangle mod 2, Reuleaux
Triangle, Moving Sofa Problem, Coffee-Cup Caustic/Nephroid, Napoleon's
Theorem, Apollonian Gasket, Ford Circles, Conway's Game of Life Glider,
Fibonacci Spiral, Sierpinski Carpet, Basel Problem, Fermat Point, Hilbert
Curve, Logistic Map Bifurcation — this is a polar-coordinate graphing
topic, a fresh mechanism distinct from every prior fractal, probability,
dynamical-systems, or classical-geometry topic in this repo.

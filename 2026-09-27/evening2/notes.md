# Evening post — 2026-09-27 (evening2)

**Why "evening2":** by the time this session-bound run fired (17:08:04
UTC), `2026-09-27/evening/` already existed (the Gömböc, from the other
independently-scheduled routine). To avoid overwriting it, this run's
output lives in `evening2/` with a distinct topic and mechanism.
`morning/` (Lissajous Curves) was also checked for collision.

**Topic:** The Astroid. A 4-cusped curve produced by two completely
different, unrelated-looking constructions: (1) a circle of radius R/4
rolling WITHOUT SLIPPING inside a fixed circle of radius R (a hypocycloid
with ratio 4:1), and (2) the envelope of a line segment of fixed length
sliding with its two ends constrained to the x- and y-axes (the classic
"sliding ladder" problem). Both produce the exact same curve,
x = a·cos³(t), y = a·sin³(t). First studied by Ole Rømer in 1674 while
investigating gear-tooth shapes.

**Accuracy check:** verified via WebSearch against Wikipedia's
"Hypocycloid" article and MathWorld's "Astroid" page before use, not
recalled from memory alone. The central "two constructions, one curve"
claim was then verified computationally end to end, not just cited:
1. The simplified closed form (a·cos³t, a·sin³t) was checked against the
   general raw hypocycloid formula (R-r)cos(t) + r·cos((R-r)/r · t), etc.,
   for R=4, r=1: max discrepancy 2.22e-15 (floating-point exact) across
   500 sample points.
2. The curve's defining "4 cusps" property was verified by finding points
   where the parametric velocity (dx/dt, dy/dt) vanishes — confirmed
   exactly 4 such points on a 20,000-point grid.
3. Most importantly: the sliding-ladder envelope was computed
   INDEPENDENTLY, via the actual envelope-of-a-family-of-lines calculus
   (solving F(x,y,theta)=0 and its theta-derivative simultaneously for
   each angle), NOT by assuming the ladder traces the same curve. The
   result was then compared point-by-point to the rolling-circle curve:
   max discrepancy 8.88e-16 across 40 sample angles — genuinely the same
   curve, confirmed by two unrelated calculations agreeing to
   floating-point precision.

**Bug caught and fixed (verification methodology, not a math error):** a
first attempt to count the curve's cusps used a 500-point grid with an
absolute speed threshold of 1e-6, which found only 1 "cusp" (actually just
the shared start/end point) because no sample point happened to land close
enough to the true cusp locations on that coarse grid. Caught by checking
the actual speed values, diagnosed as a sampling-resolution problem (not a
flaw in the underlying formula, which was already independently verified
in step 1 above), and fixed by using a much finer 20,000-point grid and
detecting local minima of speed rather than an absolute threshold —
correctly found all 4 cusps.

**Format:** 3-slide carousel (recommended) — slide1_hook.png (hook: the
two circles, fixed and rolling, before any trace is drawn), slide2_astroid.png
(reveal: the full traced astroid from the rolling-circle construction),
slide3_ladder.png (payoff: a family of sliding-ladder line segments whose
envelope visibly hugs the exact same curve). Also kept: astroid.png
(single combined side-by-side static image) and astroid.gif (animated: the
ladder sliding down while its envelope traces out the curve in real time,
~4s, 10fps, 338x338, captioned) as alternative formats.

**Sources:**
- https://en.wikipedia.org/wiki/Hypocycloid
- https://mathworld.wolfram.com/Astroid.html

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
Curve, Logistic Map Bifurcation, Rose Curves, Brachistochrone Problem,
Steiner's Porism, Gomboc, Lissajous Curves — this is a rolling-curve
(hypocycloid) and line-envelope duality result, a fresh mechanism distinct
from every prior fractal, probability, dynamical-systems, or
classical-geometry topic in this repo.

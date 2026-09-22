# Evening post — 2026-09-22

**Topic:** The Apollonian Gasket & Descartes' Circle Theorem. Start with
3 mutually tangent circles nested inside a bounding circle. Descartes'
Circle Theorem (stated in a 1643 letter to Princess Elisabeth of Bohemia)
gives the exact curvature of the circle that fits tangent to any three
mutually tangent circles: (k1+k2+k3+k4)^2 = 2(k1^2+k2^2+k3^2+k4^2).
Applying it recursively to fill every remaining gap forever produces a
fractal circle-packing called the Apollonian Gasket. Frederick Soddy
independently re-derived and popularized the formula in 1936 as the poem
"The Kiss Precise" (Nature).

**Different from the morning post** (Napoleon's Theorem — triangle
geometry) and from the running list of prior topics in this repo: Kakeya
needle problem, Go First Dice, golden angle/sunflower phyllotaxis,
Hardy-Ramanujan 1729, Ulam spiral, Chaos Game/Sierpinski triangle, Buffon's
Needle, Mobius strip, Voronoi diagram, Penrose tiling, Coastline
Paradox/Koch snowflake, Squaring the Square, Konigsberg Bridges, Benford's
Law, Efron's Dice, Monty Hall, Cantor Set, Borromean Rings, Four Color
Theorem, Hat aperiodic monotile, Birthday Paradox, Zeno's Paradox, Collatz
Conjecture, Gabriel's Horn, Pigeonhole Principle, Weierstrass function,
Mandelbrot Set, Newton's Fractal, Kepler's Conjecture/sphere packing,
Barnsley Fern, Heighway Dragon Curve, Lorenz Attractor, Pascal's Triangle
mod 2, Reuleaux Triangle, Moving Sofa Problem, Coffee-Cup Caustic/Nephroid.
This is a circle-packing fractal driven by an exact algebraic curvature
formula — a fresh mechanism distinct from all of the above.

**Accuracy check:** verified via WebSearch (not recalled from memory
alone) — Descartes' theorem statement/formula cross-checked against
Wikipedia's "Descartes' theorem" article, a University of Washington
course PDF on the Apollonian gasket, and background on the 1643 letter to
Princess Elisabeth of Bohemia plus Soddy's 1936 "Kiss Precise" poem.
Direct fetch of en.wikipedia.org was blocked by network egress policy, so
facts were corroborated via WebSearch result snippets from multiple
independent sources instead.

**Computational verification (not just illustration):**
1. Implemented the complex-plane Descartes Circle Theorem to generate new
   tangent circles recursively from a seed triple.
2. Numerically confirmed the curvature identity on a generated quadruple:
   sum(k^2) = 18.000000, 0.5*(sum k)^2 = 18.000000 — exact match.
3. Verified all three pairwise tangencies (to floating-point precision)
   for a freshly constructed circle against its three parent circles.
4. Caught and fixed a real bug: the initial complex-formula implementation
   paired sqrt branches incorrectly, producing spurious "phantom" circles
   that poked outside the bounding circle and overlapped neighbors (101
   boundary violations, 402 overlapping pairs found in a random sample of
   400x400 circle pairs). Fixed by verifying each candidate's tangency to
   all 3 parent circles directly instead of trusting a fixed sign-pairing
   convention; re-checked afterward with 0 boundary violations and 0
   overlaps across a fresh 400x400-pair sample.

**Format:** apollonian_gasket.png (static, dark-themed, full gasket
colored by curvature with the Descartes formula and history alongside)
plus apollonian_gasket.gif (animated, ~4s at ~8fps effective after PIL's
duplicate-frame merging, 600x338, captioned) — the GIF eases from a
full view of the gasket into a continuous zoom on one of its smallest
circles, ending deep in the fractal to visually demonstrate
self-similarity at every scale, with an evolving caption/title overlay.

**Sources:**
- https://en.wikipedia.org/wiki/Descartes'_theorem
- https://en.wikipedia.org/wiki/Apollonian_gasket
- https://sites.math.washington.edu//~julia/teaching/445_Spring2013/Project_Gasket.pdf

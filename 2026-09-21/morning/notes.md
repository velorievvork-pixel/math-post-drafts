# Morning post — 2026-09-21

**Topic:** The Reuleaux Triangle. Start with an equilateral triangle of
side length W. Draw three circular arcs, each centered at one vertex with
radius W, connecting the other two vertices. The resulting shape has
"constant width": no matter which direction you measure across it, the
width is exactly W — the same defining property a circle has, despite
having three sharp corners and clearly not being a circle. This makes it
possible to roll (used in drill bits that cut nearly-square holes, rotary
engines, and some coin shapes). First studied systematically by Franz
Reuleaux in the 19th century, though the shape itself was known earlier.

**Accuracy check:** verified via WebSearch against Wikipedia's "Reuleaux
triangle" article and MathWorld before use, not built from memory alone.
Three things were verified numerically rather than just asserted:
1. Construction accuracy: each arc's radius from its center vertex to the
   other two vertices was checked directly (max error 2.2e-16, i.e. exact
   to floating-point precision).
2. Constant width: the shape's width (max minus min projection) was
   computed across 200 different directions spanning 0-180 degrees; the
   spread between the smallest and largest width found was 1.36e-7 —
   effectively zero, confirming the constant-width property rather than
   assuming it follows from the construction.
3. Barbier's theorem (every curve of constant width W has perimeter
   exactly pi*W, same as a circle of diameter W): computed the actual
   polygon-approximated perimeter of the boundary and compared to pi*W —
   relative error 4.6e-8.
The slide-3/GIF claim ("same height at every rotation") is not just
illustrated but checked per-frame in the animation: each frame asserts the
rotated shape's vertical extent equals W to within 1e-3 before rendering.

**Format:** 3-slide carousel (recommended) — slide1_hook.png (hook: a
faded ambiguous rounded-triangle silhouette, "not a circle, rolls like
one"), slide2_construction.png (reveal: the 3 vertices, 3 dashed
construction lines, and the filled arc-shape), slide3_constantwidth.png
(payoff: the same shape at 4 different rotations, all fitting snugly
between the same two fixed horizontal lines). Also kept:
reuleaux_triangle.png (single combined side-by-side static image) and
reuleaux_triangle.gif (animated: the shape rotating a full 360 degrees
while staying pinned between two fixed lines, ~3.6s, 10fps, 338x338,
angle captioned) as alternative formats.

**Sources:**
- https://en.wikipedia.org/wiki/Reuleaux_triangle
- https://mathworld.wolfram.com/ReuleauxTriangle.html

Different from all earlier posts: Kakeya needle problem, Go First Dice,
golden angle/sunflower phyllotaxis, Hardy-Ramanujan 1729, Ulam spiral,
Chaos Game/Sierpinski triangle, Buffon's Needle, Mobius strip, Voronoi
diagram, Penrose tiling, Coastline Paradox/Koch snowflake, Squaring the
Square, Konigsberg Bridges, Benford's Law, Efron's Dice, Monty Hall,
Cantor Set, Borromean Rings, Four Color Theorem, Hat aperiodic monotile,
Birthday Paradox, Zeno's Paradox, Collatz Conjecture, Gabriel's Horn,
Pigeonhole Principle, Weierstrass function, Mandelbrot Set, Newton's
Fractal, Kepler's Conjecture/sphere packing, Barnsley Fern, Heighway
Dragon Curve, Lorenz Attractor, Pascal's Triangle mod 2 — this is a
constant-width curve in classical Euclidean geometry, a fresh mechanism
distinct from every prior fractal, probability, or dynamical-systems
topic in this repo.

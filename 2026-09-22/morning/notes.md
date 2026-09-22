# Morning post — 2026-09-22

**Topic:** Napoleon's Theorem. Take any triangle at all — even a
completely irregular, scalene one. Build an equilateral triangle outward
on each of its three sides. Connect the centers (centroids) of those
three equilateral triangles. The result is always itself a perfectly
equilateral triangle, regardless of how lopsided the original triangle
was. Traditionally attributed to Napoleon Bonaparte, though the earliest
documented appearance of the result is an 1825 article in The Ladies'
Diary; the attribution to Napoleon is disputed by historians but the
theorem itself is solid.

**Accuracy check:** verified via WebSearch against Wikipedia's "Napoleon's
theorem" article and MathWorld before use, not recalled from memory
alone. The theorem was then verified computationally, not just
illustrated, using a deliberately irregular, non-symmetric scalene
triangle (picked to make clear this isn't a special-case coincidence):
1. The three centers-of-the-equilateral-triangles were computed, and all
   three side lengths of the triangle they form were checked directly —
   spread between longest and shortest side: exactly 0.0 (floating-point
   exact).
2. Each of the three constructed "equilateral" triangles was itself
   checked to actually be equilateral (not just assumed from the
   construction formula) — confirmed to floating-point precision.
3. A bonus fact from the same sources (outer Napoleon triangle area minus
   inner Napoleon triangle area equals the original triangle's area) was
   also verified numerically: outer area 4.34558, inner area 0.08558,
   difference 4.26000, matching the original triangle's computed area of
   4.26000 exactly.
4. The GIF's claim ("always equilateral") was checked across 4
   additional random, automatically-generated irregular triangles before
   using them in the animation — all 4 produced an exactly equilateral
   Napoleon triangle.

**Bug caught and fixed:** the first render of slide 2 used a fixed axis
window that clipped the equilateral triangles built on the longer sides
(they extended past the frame edge). Caught by visual inspection, fixed
by computing the plot bounds dynamically from the actual constructed
geometry (all 3 equilateral triangles plus the original) instead of a
guessed fixed range.

**Format:** 3-slide carousel (recommended) — slide1_hook.png (hook: the
plain irregular triangle, "take ANY triangle"), slide2_construction.png
(reveal: the 3 outward equilateral triangles built on each side, with
their centers marked), slide3_payoff.png (payoff: connecting the 3
centers, forming a visibly perfect equilateral triangle/star pattern).
Also kept: napoleon_theorem.png (single combined side-by-side static
image) and napoleon_theorem.gif (animated: cycling through 4 different
random irregular triangles, each time building outward equilateral
triangles and connecting their centers, ~3s, 4fps, 338x338, captioned) as
alternative formats.

**Sources:**
- https://en.wikipedia.org/wiki/Napoleon's_theorem
- https://mathworld.wolfram.com/NapoleonsTheorem.html

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
Triangle, Moving Sofa Problem, Coffee-Cup Caustic/Nephroid — this is a
classical Euclidean triangle-geometry invariant, a fresh mechanism
distinct from every prior fractal, probability, dynamical-systems,
constant-width, or optics topic in this repo.

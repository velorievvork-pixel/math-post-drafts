# Evening post — 2026-09-24 (evening2)

**Why "evening2":** by the time this session-bound run fired (queued at
17:08:14 UTC), `2026-09-24/evening/` already existed (the Basel Problem,
from the other independently-scheduled routine). To avoid overwriting it,
this run's output lives in `evening2/` with a distinct topic and
mechanism. `morning/` (Sierpinski Carpet) was also checked for collision.

**Topic:** The Fermat Point. Given any triangle whose interior angles are
all less than 120 degrees, there is a unique point inside it that
minimizes the total (summed) distance to all 3 vertices. It can be
located by building an equilateral triangle outward on each side and
drawing a line from each new apex to the OPPOSITE original vertex (the
"Simpson lines"): these 3 lines all cross at exactly one point — the
Fermat point — and, remarkably, all 3 lines have the same length, equal
to the minimum total distance itself. At the Fermat point, the three
angles formed with pairs of the triangle's vertices are each exactly 120
degrees. First posed by Pierre de Fermat as a challenge to Evangelista
Torricelli in the 17th century.

**Accuracy check:** verified via WebSearch against cut-the-knot's "The
Fermat Point and Generalizations" and GeeksforGeeks before use, including
the 120-degree-angle-limit caveat (if any triangle angle exceeds 120
degrees, the Fermat point is simply that vertex — the triangle used here
was explicitly checked to have all angles under 120 degrees, max angle
67.5 degrees, before proceeding). Every headline claim was then verified
computationally, not just asserted:
1. Concurrency: the intersection of Simpson-line-1 with line-2 was
   compared to the intersection of line-1 with line-3 directly — distance
   between them: exactly 0.0.
2. Equal length: all 3 Simpson lines measured 5.506254809382621 units —
   identical to 15 decimal places.
3. The total distance from the found point to all 3 original vertices
   (5.506255) matched the common Simpson-line length exactly (difference
   < 1e-9), confirming the "line length = minimal total distance" claim.
4. The 120-degree-angle claim was checked directly: all three angles at
   the point measured exactly 120.0000 degrees.
5. The MINIMIZATION claim (not just the construction) was checked by
   brute force: 20,000 random nearby points were each tested, and zero
   had a lower total distance to the 3 vertices than the constructed
   point — a genuine empirical confirmation, not an assumption from the
   geometric construction alone.
6. The animated GIF additionally shows real numerical gradient descent
   (finite-difference gradients on the total-distance function) starting
   from an off-center point and converging to the exact same point found
   by the geometric construction (final distance between the two methods'
   answers: 0.000000) — two independent methods agreeing.

**Format:** 3-slide carousel (recommended) — slide1_hook.png (hook: the
plain triangle with 3 candidate points, asking which minimizes total
distance), slide2_construction.png (reveal: the 3 Simpson lines from
outward equilateral-triangle apexes, all crossing at one point),
slide3_payoff.png (payoff: the point connected to all 3 vertices,
visibly forming three 120-degree angles). Also kept: fermat_point.png
(single combined side-by-side static image) and fermat_point.gif
(animated: gradient descent converging from an arbitrary start point to
the exact Fermat point, ~3.3s, 6fps, 338x338, running total-distance
value captioned) as alternative formats.

**Sources:**
- https://www.cut-the-knot.org/Generalization/fermat_point.shtml
- https://www.geeksforgeeks.org/engineering-mathematics/fermat-point/

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
Fibonacci Spiral, Sierpinski Carpet, Basel Problem (this evening's other
post) — although this post and Napoleon's Theorem both use outward
equilateral triangles built on a triangle's sides, the underlying claim
and mechanism are entirely different: Napoleon's Theorem is about the
centers of those equilateral triangles forming a NEW equilateral
triangle, while the Fermat Point is a distance-minimization result found
via concurrent lines from the equilateral triangles' apexes to the
opposite original vertices — a genuinely distinct geometric fact, verified
independently here via both exact construction and numerical gradient
descent.

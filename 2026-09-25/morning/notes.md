# Morning post — 2026-09-25

**Topic:** The Hilbert Curve. First described by David Hilbert in 1891 as
a simplified version of Peano's earlier space-filling curve. Constructed
via the L-system: axiom `A`; rules `A -> -BF+AFA+FB-`, `B -> +AF-BFB-FA+`;
angle 90 degrees (`F` = move forward, `+`/`-` = turn left/right, `A`/`B`
guide the recursive rewriting but draw nothing). At recursion order n, the
resulting single continuous, non-self-intersecting line visits every one
of the (2^n)^2 cells of a 2^n x 2^n grid exactly once.

**Accuracy check:** the L-system rule was verified via WebSearch against
a Towards Data Science explainer and ACM's "Algorithm 781: Generating
Hilbert's Space-Filling Curve by Recursion" before use, not built from
memory alone. Every headline claim was then verified computationally, not
just illustrated:
1. At order 5, the generated path has exactly 1,024 points, matching the
   expected (2^5)^2 = 1,024 grid cells.
2. Every visited cell is unique (no revisits): checked directly by
   counting distinct rounded coordinates — 1,024 unique out of 1,024
   points.
3. Every single step between consecutive points measures EXACTLY 1.0 (a
   genuine unit grid move, not a diagonal or a jump): checked across all
   1,023 steps.
4. The visited cells form an exact bijection with the full 32x32 grid
   (every cell covered, none missed, none duplicated) — checked directly
   against the complete expected cell set, offset-adjusted for the
   turtle's arbitrary starting heading (this caught and resolved a false
   alarm: the raw coordinates spanned y in [-31, 0] rather than [0, 31]
   purely due to the starting heading, not a real bug, confirmed by
   re-running the check offset-agnostically).
5. The "never crosses itself" claim on slide 3 was checked with a real
   segment-intersection test across all non-adjacent pairs of the shown
   260-point sub-path: 0 crossings found.

**Format:** 3-slide carousel (recommended) — slide1_hook.png (hook: a
low-order (order-2) curve shown faded, asking whether it fills the
square), slide2_hilbert.png (reveal: the full order-5 curve, 1,024 cells,
colored by progress along the path), slide3_zoom.png (payoff: a real
contiguous sub-path of the curve, verified crossing-free, shown at its own
scale). Also kept: hilbert_curve.png (single combined side-by-side static
image) and hilbert_curve.gif (animated: orders 1 through 5 building up
progressively, ~3.5s, 1.5fps, 338x338, cell count captioned) as
alternative formats.

**Sources:**
- https://towardsdatascience.com/the-beauty-of-space-filling-curves-understanding-the-hilbert-curve/
- https://dl.acm.org/doi/10.1145/290200.290219

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
Fibonacci Spiral, Sierpinski Carpet, Basel Problem, Fermat Point —
although the Heighway Dragon Curve also uses turtle-graphics L-system
generation, its defining property (a self-similar fractal boundary from
paper folding) is completely different from the Hilbert Curve's defining
property (a bijective, area-filling traversal of every cell in a grid).

# Morning post — 2026-09-24

**Topic:** The Sierpinski Carpet. Cut a square into a 3x3 grid of 9 equal
sub-squares, remove the center one, and repeat the same process on each
of the remaining 8 sub-squares, forever. At each step the remaining area
is multiplied by 8/9, so after infinitely many steps the area shrinks to
zero — while the total boundary (perimeter) grows without bound. The
fractal (Hausdorff) dimension is ln(8)/ln(3) ≈ 1.893, between a line
(dimension 1) and a filled square (dimension 2). It is also a "universal
plane curve": every compact one-dimensional curve in the plane can be
found as a subset of it.

**Accuracy check:** verified via WebSearch against Wikipedia's
"Sierpinski carpet" article and MathWords before use, not recalled from
memory alone. The core claims were then verified computationally, not
just asserted:
1. Built the carpet recursively and, for depths 0 through 4, checked the
   ACTUAL total area of all remaining squares against the textbook
   formula (8/9)^n — matched to within 1e-9 at every depth — and checked
   the actual square count against 8^n exactly (1, 8, 64, 512, 4096; all
   confirmed).
2. The fractal-dimension formula ln(8)/ln(3) ≈ 1.892789 was checked
   directly from the count/scale relationship N=(1/r)^D with N=8 pieces
   at scale r=1/3, rather than just quoted.
3. The self-similarity claim on slide 3 ("zoom into a corner: the whole
   thing again") was verified by actually rescaling the bottom-left
   corner region of the depth-5 carpet by 3x and checking it EXACTLY
   equals the depth-4 carpet's square list (coordinate-for-coordinate),
   not just visually compared.

**Bug caught and fixed:** the first version of the animated GIF zoomed
all the way to the maximum available recursion depth, so the final frame
landed inside a single solid surviving square with no visible fractal
structure left (a flat color, not a picture of anything). Caught by
inspecting the rendered final frame, fixed by capping the zoom before it
outruns the carpet's finite recursion depth, so genuine fractal detail
(holes within holes) remains visible even at the deepest zoom shown.

**Format:** 3-slide carousel (recommended) — slide1_hook.png (hook: a
single square divided into a 3x3 grid with the center removed, showing
just the first step), slide2_carpet.png (reveal: the full depth-5 carpet,
32,768 squares), slide3_zoom.png (payoff: the bottom-left corner region
rescaled, verified to be an exact copy of the whole pattern). Also kept:
sierpinski_carpet.png (single combined side-by-side static image) and
sierpinski_carpet.gif (animated: zooming from the full depth-5 carpet
into one corner, ~4s, 4fps, 338x338, zoom factor captioned) as
alternative formats.

**Sources:**
- https://en.wikipedia.org/wiki/Sierpi%C5%84ski_carpet
- https://www.mathwords.com/s/sierpinski_carpet.htm

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
Fibonacci Spiral — although this repo has covered the Sierpinski
TRIANGLE twice before (via the random Chaos Game and via Pascal's
Triangle mod 2), the Sierpinski CARPET is a genuinely different shape
(built from squares in a 3x3 grid, not triangles in a 2x2 subdivision),
with its own distinct dimension (ln8/ln3 vs. the triangle's ln3/ln2).

# Evening post — 2026-09-23

**Topic:** The Fibonacci Spiral and the Golden Ratio. Stack squares with
side lengths equal to the Fibonacci numbers (1, 1, 2, 3, 5, 8, 13, ...),
each new square attached to the growing rectangle so its side matches the
rectangle's current longer dimension. Draw a quarter-circle arc inscribed
in each square and the arcs join into a continuous spiral — the
"Fibonacci spiral." As the squares grow, the ratio of consecutive
Fibonacci numbers converges to the golden ratio phi = (1+sqrt(5))/2 ≈
1.618. Important nuance stated explicitly in this post: the Fibonacci
spiral (made of circular arcs) is a close APPROXIMATION of the true
"golden spiral" (an exact logarithmic spiral), not identical to it — a
common oversimplification in casual explanations.

**Accuracy check:** verified via WebSearch against goldennumber.net and a
UGA math-education page before use, including the approximation-vs-exact
distinction. The construction and convergence were then verified
computationally, not just illustrated:
1. Computed ratios F(n+1)/F(n) for n=1..10 and confirmed the final ratio
   (1.617978) differs from phi (1.618034) by only 5.65e-05, with the
   absolute error shrinking at every single step (checked, not assumed).
2. Every square's placement was built with an explicit running bounding
   box and an assertion at each step that the new square's side exactly
   equals the box's current matching dimension — catching a real bug (see
   below) rather than trusting a heuristic.
3. All 9 placed squares were checked pairwise for rectangle overlap: 0
   overlaps found.
4. The spiral arc itself was NOT hand-drawn per square by guessing corner
   orientations — each arc's start/end points were found by searching for
   the square's corner that continues exactly from the previous arc's
   endpoint, so continuity is verified geometrically rather than assumed.

**Bugs caught and fixed (2 separate real bugs):**
1. The first placement algorithm tracked only the bounding box's width
   when attaching a square left/right and only its height when attaching
   up/down, silently producing overlapping/misaligned squares whenever
   attachments crossed dimensions. Fixed by tracking both dimensions of a
   real (x, y, w, h) bounding box and asserting correctness at every step.
2. The very first version of the corner-matching arc search had an
   inverted distance check (verifying a point was at distance ~0 from a
   center instead of distance ~side), which coincidentally never matched
   and always failed loudly via assertion — caught immediately rather than
   silently producing a wrong picture. Separately, the two starting unit
   squares turned out to be a genuine special case (they meet the rest of
   the tiling as a T-junction, not a clean corner-to-corner edge), solved
   by drawing them as one explicit, verified semicircle before handing off
   to the generic per-square search for square 2 onward.

**Format:** 3-slide carousel (recommended) — slide1_hook.png (hook: the
first 4 squares stacked, sizes 1,1,2,3, no spiral yet), slide2_spiral.png
(reveal: all 9 squares with the full continuous spiral arc traced through
them), slide3_ratio.png (payoff: the Fibonacci ratio sequence visibly
oscillating and converging onto the phi line). Also kept:
fibonacci_spiral.png (single combined side-by-side static image) and
fibonacci_spiral.gif (animated: squares and the spiral arc building up
one square at a time, ~4.5s, 2fps, 338x338, captioned with square count
and current side length) as alternative formats.

**Sources:**
- https://www.goldennumber.net/spirals/
- https://jwilson.coe.uga.edu/emt669/student.folders/frietag.mark/Homepage/Goldenratio/goldenratio.html

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
Theorem, Apollonian Gasket, Ford Circles, Conway's Game of Life Glider —
although the golden angle/sunflower post also involves phi, its mechanism
(a fixed 137.5-degree rotation angle for phyllotaxis) is completely
different from this post's square-nesting/quarter-arc construction and
ratio-convergence argument.

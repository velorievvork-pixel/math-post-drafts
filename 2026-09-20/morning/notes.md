# Morning post — 2026-09-20

**Topic:** The Heighway Dragon Curve. In 1966, NASA physicist John Heighway
passed the time by repeatedly folding a strip of paper in half, always in
the same direction. Unfolding the strip and bending every crease to a right
angle produces a coiling, asymmetric fractal boundary — nothing about the
simple folding rule suggests such intricate structure. Generated here via
the standard L-system: axiom `FX`, rules `X -> X+YF+`, `Y -> -FX-Y`, angle
90 degrees, where `F` = move forward, `+`/`-` = turn left/right.

**Accuracy check:** the L-system rules were verified via WebSearch against
Wikipedia's "Dragon curve" article and a second independent source
(klein.math.okstate.edu) before use, not built from memory alone. Three
things were verified programmatically rather than assumed:
1. The number of `F` symbols exactly doubles each iteration (checked for
   iterations 1-7: 2, 4, 8, 16, 32, 64, 128 — confirmed).
2. At iteration 13 the curve has exactly 8,192 segments (2^13), and only
   touches itself at isolated points (335 revisited lattice points at
   iteration 10) rather than crossing itself, matching the curve's known
   non-self-crossing property.
3. An earlier draft of slide 3 claimed "4 rotated copies tile the plane
   with no gaps" — checking it visually and via a coarse occupancy-grid
   overlap count showed the four copies (naively rotated about a shared
   center) actually overlap heavily rather than tiling cleanly; that claim
   would have required a specific edge-matching translation lattice I had
   not implemented, so it was dropped. Slide 3 was replaced with a
   genuinely verified alternative: a contiguous sub-path of the same curve
   (points 2731-3431 of the 8,193-point path), which is guaranteed accurate
   because it is a literal piece of the real curve, and visibly shows the
   same jagged, boxy character as the full curve at a smaller scale.

**Format:** 3-slide carousel (recommended) — slide1_hook.png (hook: a
low-iteration fold shown faded, framed as "fold 13 times"), slide2_dragon.png
(reveal: the full iteration-13 curve, colored by segment order along a
gradient), slide3_zoom.png (payoff: a real sub-path of the curve showing
the same shape character at a smaller scale). Also kept: dragon_curve.png
(single combined side-by-side static image) and dragon_curve.gif (animated:
folds 1 through 13 building up progressively then holding, ~5.5s, 3fps,
338x338, captioned with fold count) as alternative formats.

**Sources:**
- https://en.wikipedia.org/wiki/Dragon_curve
- http://klein.math.okstate.edu/dynamics/dragon.html

Different from all earlier posts: Kakeya needle problem, Go First Dice,
golden angle/sunflower phyllotaxis, Hardy-Ramanujan 1729, Ulam spiral,
Chaos Game/Sierpinski triangle, Buffon's Needle, Mobius strip, Voronoi
diagram, Penrose tiling, Coastline Paradox/Koch snowflake, Squaring the
Square, Konigsberg Bridges, Benford's Law, Efron's Dice, Monty Hall,
Cantor Set, Borromean Rings, Four Color Theorem, Hat aperiodic monotile,
Birthday Paradox, Zeno's Paradox, Collatz Conjecture, Gabriel's Horn,
Pigeonhole Principle, Weierstrass function, Mandelbrot Set, Newton's
Fractal, Kepler's Conjecture/sphere packing, Barnsley Fern — this uses
L-system string rewriting interpreted via turtle graphics, a fresh
mechanism distinct from escape-time iteration (Mandelbrot/Newton),
probabilistic IFS point clouds (Barnsley Fern, Chaos Game), and
deterministic geometric subdivision (Koch Snowflake, Cantor Set).

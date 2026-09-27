# Morning post — 2026-09-27

**Topic:** Lissajous Curves. Plot x = cos(a*t) against y = sin(b*t) as t
varies — two independent oscillations, one on each axis, fed into
perpendicular directions. The frequency ratio a:b completely determines
the shape: the curve is closed (repeats exactly) if and only if a:b is
rational, and it touches the left/right edge of its bounding box exactly
a times and the top/bottom edge exactly b times per period. Historically
tied to physical experiments (Nathaniel Bowditch, 1815; Jules Antoine
Lissajous, 1857, using tuning forks and mirrors) and still used today to
compare two AC signals' frequency and phase on an oscilloscope.

**Accuracy check:** verified via WebSearch against Wikipedia's "Lissajous
curve" article and a Vedantu explainer before use, not recalled from
memory alone. Two separate claims were then verified computationally, not
just illustrated:
1. The tangency-count rule: for x(t)=cos(a*t), the curve touches x=+1
   exactly 'a' times per full 2*pi period. Checked directly by finding
   local maxima of cos(a*t) reaching within 1e-4 of 1.0, for a = 1, 2, 3,
   5 — exact match every time (not approximate).
2. The closure claim: for integer a, b, the point at t=2*pi should exactly
   equal the point at t=0. Checked for (a,b) = (3,4), (3,5), (5,4): closure
   error on the order of 1e-15 to 1e-16 (floating-point exact) in every
   case.
3. The contrast claim on slide 3 (irrational ratio never closes) was
   demonstrated, not just asserted, by plotting a genuinely irrational
   ratio (1:sqrt(2)) over a long time range (60*pi) and showing it densely
   fills the bounding square rather than tracing a finite closed curve —
   the visual difference from the closed 5:4 case is stark and directly
   observable.

**Bug caught and fixed (minor, cosmetic):** the first render of slide 1
had the hook circle's top edge slightly overlapping the title text.
Caught by inspection, fixed by widening the y-axis view range asymmetrically
(more room above) so the circle sits fully below the text.

**Format:** 3-slide carousel (recommended) — slide1_hook.png (hook: the
simplest 1:1 case, a plain circle, framing the question), slide2_grid.png
(reveal: a 2x2 grid of ratios 1:2, 2:3, 3:4, 5:4 showing increasingly
intricate closed patterns), slide3_payoff.png (payoff: a genuinely closed
rational-ratio curve directly contrasted against a genuinely never-closing
irrational-ratio curve). Also kept: lissajous.png (single combined
side-by-side static image) and lissajous.gif (animated: cycling through 8
different a:b ratios, ~6.7s, 1.2fps, 338x338, ratio captioned) as
alternative formats.

**Sources:**
- https://en.wikipedia.org/wiki/Lissajous_curve
- https://www.vedantu.com/maths/lissajous-figure

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
Steiner's Porism — this is a parametric curve from two independent
perpendicular oscillations, a fresh mechanism distinct from the polar
graphing of Rose Curves and every prior fractal, probability, or
classical-geometry topic in this repo.

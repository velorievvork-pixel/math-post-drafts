# Evening post — 2026-09-22 (evening2)

**Why "evening2":** by the time this session-bound run fired (queued at
17:18:52 UTC, processed the next day after a session gap), the other
independently-scheduled routine had already filled `2026-09-22/evening/`
with a different topic (the Apollonian Gasket). To avoid overwriting it,
this run's output lives in `evening2/` with a distinct topic and
mechanism. `morning/` (Napoleon's Theorem) was also checked for collision.

**Topic:** Ford Circles. For every fraction p/q written in lowest terms,
draw a circle of radius 1/(2q^2) sitting on the number line, tangent to
it at the point p/q. Two Ford circles for p/q and r/s are tangent to each
other exactly when |p*s - r*q| = 1 (i.e. the fractions are "Farey
neighbors" — adjacent in some Farey sequence); otherwise the two circles
are always completely disjoint — they never overlap, no matter how many
fractions you draw. Introduced by Lester R. Ford Sr. in 1938, connecting
simple circle geometry to the Farey sequence and continued fractions.

**Accuracy check:** verified via WebSearch against Wikipedia's "Ford
circle" article and ThatsMaths' "Ford Circles & Farey Series" post before
use, not recalled from memory alone. The central claim (tangent iff Farey
neighbors, otherwise always disjoint) was then verified computationally
using EXACT rational arithmetic (Python's `fractions.Fraction`, not
floating point, to avoid any risk of numerical rounding masking a real
overlap or a false tangency): all 1,081 pairs among the 47 distinct
fractions p/q with 0<=p/q<=1 and q<=12 were checked. For each pair, the
squared center-to-center distance was compared exactly against the
squared sum of radii, and cross-checked against the |p*s-r*q|=1
Farey-neighbor condition. Result: 91 genuinely tangent pairs found, and 0
violations — no pair was ever found overlapping, and every tangent pair
satisfied the Farey-neighbor condition (and vice versa).

**Format:** 3-slide carousel (recommended) — slide1_hook.png (hook: just
the two largest circles, for the fractions 0 and 1, with a single small
circle for 1/2 nestled between them — ambiguous and ONLY dimly hints at
the full pattern), slide2_ford.png (reveal: the full classic Ford circle
arrangement for every fraction 0-1 with denominator up to 12, colored by
denominator), slide3_zoom.png (payoff: a zoomed region showing circles of
very different sizes all touching but never overlapping). Also kept:
ford_circles.png (single combined side-by-side static image) and
ford_circles.gif (animated: circles appearing as the allowed denominator
increases from 1 to 12, ~4.8s, 2.5fps, 338x338, captioned) as alternative
formats.

**Sources:**
- https://en.wikipedia.org/wiki/Ford_circle
- https://thatsmaths.com/2023/02/09/ford-circles-farey-series/

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
Theorem, Apollonian Gasket (this evening's other post) — although both
this post and the Apollonian Gasket involve circle-packing geometry, the
underlying mechanism here is a direct assignment of a circle to each
rational number via its reduced-fraction representation (a number-theory
/ Farey-sequence connection, verified with exact rational arithmetic), a
fresh mechanism distinct from the Apollonian Gasket's recursive curvature
formula (Descartes' Circle Theorem).

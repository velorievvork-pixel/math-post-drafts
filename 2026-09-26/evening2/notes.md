# Evening post — 2026-09-26 (evening2)

**Why "evening2":** by the time this session-bound run fired (17:07:56
UTC), `2026-09-26/evening/` already existed (the Brachistochrone Problem,
from the other independently-scheduled routine). To avoid overwriting it,
this run's output lives in `evening2/` with a distinct topic and
mechanism. `morning/` (Rose Curves) was also checked for collision.

**Topic:** Steiner's Porism. Given two non-intersecting circles (one
inside the other, off-center), a "Steiner chain" is a ring of smaller
circles, each tangent to both original circles and to its two neighbors
in the ring, that closes up into a loop. Steiner's Porism is the
surprising extra fact: if ONE such closed chain exists for a pair of
circles, then a closed chain of the SAME length exists starting from
literally ANY point on the boundary — not just a lucky special case.
Proved via circle inversion: any two non-intersecting circles can be
inverted into a concentric pair, where a closed ring of equal circles is
obviously always possible by rotational symmetry; inverting back preserves
all the tangencies, and inverting the SAME concentric ring rotated by any
angle gives every possible closed chain for the original pair.

**Accuracy check:** verified via WebSearch against Wikipedia's "Steiner
chain" article and cut-the-knot's "Steiner's Porism" page before use, not
recalled from memory alone. The construction was then verified
computationally end to end, not just illustrated:
1. Built a concentric pair of circles (inner radius 1, outer radius chosen
   via the exact formula (1+sin(pi/N))/(1-sin(pi/N)) for N=7) specifically
   so that N=7 equal circles fit the annulus exactly — verified directly
   in the concentric frame (all 7 mutually tangent, gap exactly 0).
2. Applied a real circle-inversion transformation (standard formula) to
   turn the concentric pair into a generic, visibly off-center pair, and
   inverted the same 7 chain circles the same way.
3. Verified, in the FINAL non-concentric picture (not the easy concentric
   one), that every neighboring pair of chain circles is exactly tangent
   AND every chain circle is exactly tangent to both parent circles —
   max error 3.4e-16 (floating-point exact).
4. To demonstrate the porism itself (not just cite it): built a SECOND
   chain starting from a different angle (offset by half the spacing
   between circles) and verified it ALSO closes perfectly for the exact
   same pair of parent circles (max error 2.5e-16) — two independently
   constructed, differently-positioned chains, both valid, for one fixed
   pair of circles.
5. Additionally spot-checked closure at 6 more phases spanning the full
   rotation range for the animated GIF, confirming the chain stays closed
   continuously, not just at the two sampled slide phases.

**Bug caught and fixed:** the first attempt placed the inversion center
INSIDE both parent circles, which flips which side counts as "inside" vs.
"outside" after inversion and broke the tangency-sign assumptions in the
verification code (errors around 1.2, not the expected ~0). Caught
immediately by the verification step itself (rather than a plausible-looking
but wrong picture slipping through), diagnosed as an inversion-center
placement error, and fixed by requiring the inversion center to lie
strictly outside the outer circle.

**Format:** 3-slide carousel (recommended) — slide1_hook.png (hook: just
the two off-center parent circles, no chain yet, framing the challenge),
slide2_chain.png (reveal: the first verified closed 7-circle chain),
slide3_porism.png (payoff: a second, differently-started chain that also
closes perfectly for the same two circles). Also kept: steiner_chain.png
(single combined side-by-side static image) and steiner_chain.gif
(animated: continuously rotating the chain's starting angle through a
full period while it stays closed at every instant, ~3.75s, 8fps,
338x338, captioned) as alternative formats.

**Sources:**
- https://en.wikipedia.org/wiki/Steiner_chain
- https://www.cut-the-knot.org/Curriculum/Geometry/SteinerPorism.shtml

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
Curve, Logistic Map Bifurcation, Rose Curves, Brachistochrone Problem
(this evening's other post) — although this and the Apollonian
Gasket/Ford Circles posts all involve circle packing, this one's defining
mechanism is circle INVERSION (a conformal transformation used to prove a
porism/invariance result), a fresh technique distinct from Descartes'
Circle Theorem's curvature recursion and from Ford Circles' direct
rational-number assignment.

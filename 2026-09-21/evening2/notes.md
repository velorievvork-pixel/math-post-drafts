# Evening post — 2026-09-21 (evening2)

**Why "evening2":** by the time this session-bound run fired (17:08 UTC),
`2026-09-21/evening/` already existed (the Moving Sofa Problem, from the
other independently-scheduled routine). To avoid overwriting it, this
run's output lives in `evening2/` with a distinct topic and mechanism.
`morning/` (Reuleaux Triangle) was also checked for collision.

**Topic:** The coffee-cup caustic. When parallel light rays (sunlight, or
an overhead light far away) reflect off the inside of a circular mirror
(the inner wall of a mug, a ring, a bowl), the reflected rays don't
scatter randomly — they stay tangent to a bright curve called a caustic.
This curve is widely mis-described online as a cardioid (heart shape, 1
cusp). It is actually a **nephroid** (2 cusps) — the cardioid only shows
up in the different case of a point light source sitting ON the circle
itself, not parallel rays from far away.

**Accuracy check:** this distinction (nephroid for parallel rays vs.
cardioid for a point source on the circle) was verified via WebSearch
against three independent sources before writing any code: Chalkdust
Magazine ("Cardioids in coffee cups"), MathWorld's "Circle Catacaustic"
and "Nephroid" articles, and Wikipedia's "Nephroid" article — all
explicitly state that the parallel-ray caustic is a nephroid and that the
common "cardioid" label for the coffee-cup pattern is a popular
misconception. The nephroid's parametric formula (x = a(3cos t − cos 3t),
y = a(3sin t − sin 3t)) was independently verified against MacTutor's
history-of-curves page.

Beyond citing sources, the central claim was verified computationally,
not just asserted: parallel rays were ray-traced reflecting off a unit
circle using the actual law of reflection (d_out = d_in − 2(d_in·n)n),
and the envelope of the reflected rays was extracted numerically via the
"consecutive characteristics" method (intersecting infinitesimally close
reflected rays). This numerically-derived envelope was then compared
point-by-point (nearest-neighbor distance) against the textbook nephroid
formula — mean deviation 0.0007, max deviation 0.0022, on a circle of
radius 1. This confirms the physics and the named curve actually agree,
rather than trusting the sources' wording alone.

**Format:** 3-slide carousel (recommended) — slide1_hook.png (hook:
parallel light rays approaching a plain circle, no caustic revealed yet),
slide2_caustic.png (reveal: the reflected rays and the bright two-cusped
caustic curve they trace, rendered to resemble a real photographed
caustic), slide3_nephroid.png (payoff: the nephroid overlaid against a
cardioid for direct visual comparison, correcting the misconception).
Also kept: coffee_cup_caustic.png (single combined side-by-side static
image) and coffee_cup_caustic.gif (animated: increasing numbers of
reflected rays converging to reveal the caustic curve, ~3.8s, 6fps,
338x338, captioned) as alternative formats.

**Sources:**
- https://chalkdustmagazine.com/features/cardioids-coffee-cups/
- https://mathworld.wolfram.com/CircleCatacaustic.html
- https://mathworld.wolfram.com/Nephroid.html
- https://en.wikipedia.org/wiki/Nephroid
- https://mathshistory.st-andrews.ac.uk/Curves/Nephroid/ (parametric formula)

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
Triangle, Moving Sofa Problem (this evening's other post) — this is a
geometric optics / envelope-of-a-curve-family topic verified by ray
tracing, a fresh mechanism distinct from every prior fractal, probability,
dynamical-systems, or pure-geometry topic in this repo, and doubles as a
myth-correction post (nephroid vs. cardioid) rather than a pure reveal.

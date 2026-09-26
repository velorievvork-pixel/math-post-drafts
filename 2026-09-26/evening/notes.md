# Evening post — 2026-09-26

**Topic:** The Brachistochrone problem. Posed by Johann Bernoulli in Acta
Eruditorum in June 1696: given two points A and B in a vertical plane,
find the curve along which a bead sliding under gravity alone travels
from A to B in the LEAST time. The intuitive guess (a straight line, the
shortest distance) is wrong — the true fastest path is a cycloid, the
curve traced by a point on the rim of a rolling wheel. Solutions were
published in May 1697 by Leibniz, Johann Bernoulli, Jacob Bernoulli, and
a Latin translation of Newton's solution (Newton reportedly solved it
overnight after receiving the challenge on 29 January 1697). The cycloid
is also the tautochrone curve (a separate but related property, first
published by Huygens in Horologium Oscillatorium, 1673): a bead released
from ANY point on it reaches the bottom in the same time — Huygens used
this to try to build more accurate pendulum clocks.

**Accuracy check:** verified via WebSearch against MacTutor History of
Mathematics ("Brachistochrone problem") and Wikipedia's "Brachistochrone
curve" / "Tautochrone curve" articles before use, not recalled from
memory alone.

**Visualization:** computed the actual cycloid arc between two fixed
points A=(0,0) and B=(4,-2.5) by numerically solving for the cycloid
parameter theta1 satisfying (1-cos(theta))/(theta-sin(theta)) = -y1/x1
via bisection, then compared it against a straight line and a circular
arc (built via a 3-point circle through A, B, and a bulge point) using
the same two endpoints. Travel time for each path was computed by
numerically integrating dt = ds / sqrt(2*g*drop) along each curve — a
genuine physics simulation, not an assumed result. Confirmed
cycloid (1.13s) < circular arc (1.15s) < straight line (1.33s),
matching theory.

**Static image:** brachistochrone.png — the three paths overlaid with
computed travel times in the legend.

**GIF:** brachistochrone.gif included (600x338, 12fps, ~5.5s, 66 frames,
~275KB) — three beads race down the straight line, circular arc, and
cycloid simultaneously from the same start/end points, with the cycloid
visibly pulling ahead and a caption revealing the final times once it
wins.

**Sources:**
- https://mathshistory.st-andrews.ac.uk/HistTopics/Brachistochrone/
- https://en.wikipedia.org/wiki/Brachistochrone_curve
- https://en.wikipedia.org/wiki/Tautochrone_curve (Huygens, cycloid pendulum clock)

Different from this morning's post (Rose Curves / rhodonea curves,
polar-coordinate flower patterns) and from all earlier posts in this
repo: Kakeya needle problem, Go First Dice, golden angle/sunflower
phyllotaxis, Hardy-Ramanujan 1729, Ulam spiral, Chaos Game/Sierpinski
triangle, Buffon's Needle, Mobius strip, Voronoi diagram, Penrose tiling,
Coastline Paradox/Koch snowflake, Squaring the Square, Konigsberg
Bridges, Benford's Law, Efron's Dice, Monty Hall, Cantor Set, Borromean
Rings, Four Color Theorem, Hat aperiodic monotile, Birthday Paradox,
Zeno's Paradox, Collatz Conjecture, Gabriel's Horn, Pigeonhole Principle,
Weierstrass function, Mandelbrot Set, Newton's Fractal, Kepler's
Conjecture/sphere packing, Barnsley Fern, Heighway Dragon Curve, Lorenz
Attractor, Pascal's Triangle mod 2, Reuleaux Triangle, Moving Sofa
Problem, Coffee-Cup Caustic/Nephroid, Napoleon's Theorem, Apollonian
Gasket, Ford Circles, Conway's Game of Life Glider, Fibonacci Spiral,
Sierpinski Carpet, Basel Problem, Fermat Point, Hilbert Curve, Logistic
Map Bifurcation, Rose Curves — this is a calculus-of-variations /
classical-mechanics topic, a fresh mechanism distinct from every prior
fractal, probability, dynamical-systems, or pure-geometry topic in this
repo.

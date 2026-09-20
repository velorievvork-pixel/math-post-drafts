# Evening post — 2026-09-20

**Topic:** The Lorenz Attractor and the origin of the "butterfly effect."
In 1961, MIT meteorologist Edward Lorenz re-ran a weather simulation by
retyping a mid-run value from a printout, entering 0.506 instead of the
computer's full internal 0.506127. That tiny rounding difference produced
a completely different simulated weather pattern within a couple of
simulated months. In 1963 he published the three-variable system that
models atmospheric convection and produces this coiling, never-repeating,
butterfly-shaped curve when the trajectory is plotted in 3D — the
namesake of "chaos theory" and the "butterfly effect."

**Accuracy check:** verified via WebSearch against MIT Technology Review,
APS News ("Circa January 1961: Lorenz and the Butterfly Effect"), and
Wikipedia's "Lorenz system" / "Butterfly effect" articles (cross-checked,
not built from memory alone):
1. The exact rounding: stored value 0.506127, re-entered as 0.506.
2. The equations: dx/dt = sigma(y-x), dy/dt = x(rho-x)-y, dz/dt = xy-beta*z
   — confirmed against the Wikipedia "Lorenz system" description.
3. The classic chaotic parameter values sigma=10, rho=28, beta=8/3, which
   are the standard values that produce the two-lobed strange attractor
   (multiple independent sources agree).
4. Sensitivity to initial conditions demonstrated directly rather than
   asserted: two trajectories integrated (RK4, dt=0.012) from starting
   points differing by only 0.001 in y visibly diverge onto different
   lobes/loops within the same plotted timeframe.

**Format:** lorenz_attractor.png (static, two trajectories overlaid,
color-graded by path progress, equations + parameters captioned) and
lorenz_attractor.gif (~7.2s @ 12fps, 600x338, animated build-up of both
trajectories from t=0, captioned in three stages: "same equations" ->
"paths start to separate" -> "total divergence").

**Sources:**
- https://www.technologyreview.com/2011/02/22/196987/when-the-butterfly-effect-took-flight/
- https://www.aps.org/apsnews/2003/01/lorenz-butterfly-effect-1961
- https://en.wikipedia.org/wiki/Lorenz_system
- https://en.wikipedia.org/wiki/Butterfly_effect

Different from this morning's post (Heighway Dragon Curve, an L-system
folding fractal) and from all earlier posts in this repo (Kakeya needle
problem, Go First Dice, golden angle/sunflower phyllotaxis,
Hardy-Ramanujan 1729, Ulam spiral, Chaos Game/Sierpinski triangle,
Buffon's Needle, Mobius strip, Voronoi diagram, Penrose tiling, Coastline
Paradox/Koch snowflake, Squaring the Square, Konigsberg Bridges, Benford's
Law, Efron's Dice, Monty Hall, Cantor Set, Borromean Rings, Four Color
Theorem, Hat aperiodic monotile, Birthday Paradox, Zeno's Paradox, Collatz
Conjecture, Gabriel's Horn, Pigeonhole Principle, Weierstrass function,
Mandelbrot Set, Newton's Fractal, Kepler's Conjecture/sphere packing,
Barnsley Fern) — this is a continuous ODE system / strange attractor in
dynamical systems and chaos theory, a fresh mechanism distinct from all
prior fractal/combinatorial/probability topics.

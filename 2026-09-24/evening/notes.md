# Evening post — 2026-09-24

**Topic:** The Basel Problem. Posed in the mid-1600s, the infinite sum of
squared reciprocals (1 + 1/4 + 1/9 + 1/16 + ...) resisted the Bernoulli
family and other leading mathematicians for decades. In 1735, 28-year-old
Leonhard Euler (himself from Basel, like the Bernoullis) found the exact
value: pi^2/6 approx 1.6449 — a surprising link between whole numbers and
circles. His original argument treated sin(x)/x as an infinite polynomial
with roots at every nonzero integer multiple of pi; a fully rigorous proof
followed only in 1741.

No morning post exists for today (2026-09-24), so there was no earlier
topic to avoid — this is the day's only post so far.

**Accuracy check:** verified via WebSearch against multiple independent
sources (Brilliant Math & Science Wiki, Williams College history writeup,
ThatsMaths, and search-result corroboration of Wikipedia's "Basel
problem" article) before use, not recalled from memory alone. Sources
disagreed slightly on the exact posing year (1644 vs. 1650) and precise
solve year (1734 solved / read 1735 at the Saint Petersburg Academy), so
the post and image deliberately say "mid-1600s" and "1735" rather than
asserting false precision. Euler's age (28) and the Basel/Bernoulli
connection were corroborated by at least two independent sources each.

**Computational verification (not just illustration):** implemented the
partial sums S_N = sum_{n=1}^N 1/n^2 directly (no shortcuts/library sum
formulas) for N up to 60, and checked programmatically (not just visually)
that S_60 = 1.628406 is below pi^2/6 = 1.644934 by a remainder of
0.016529, which is positive and less than the 1/N = 0.016667 bound implied
by the standard integral-test tail estimate — confirming both convergence
from below and the expected rate of convergence, rather than trusting the
plotted curve on sight.

**Format:** basel_problem.png (static, 1200x675, dark-themed two-panel:
history/formula text on the left, partial-sum convergence plot with a
pi^2/6 asymptote line on the right) and basel_problem.gif (600x338, 12fps,
~2.6s of new content plus a held final frame — 31 stored frames after
PIL's duplicate-frame merging — animating the partial sum building up
term by term toward the pi^2/6 line, with a title and a stage-appropriate
lower-third caption burned into every frame).

**Sources:**
- https://brilliant.org/wiki/sum-of-reciprocal-of-squares-basel-theorem/
- https://web.williams.edu/Mathematics/sjmiller/public_html/hudson/Emmell,%20Amber_Euler%20&%20The%20Basel%20Problem.pdf
- https://thatsmaths.com/2021/01/14/the-basel-problem-eulers-bravura-performance/
- https://en.wikipedia.org/wiki/Basel_problem (corroborated via WebSearch snippets)

Different from all earlier posts in this repo: Kakeya needle problem, Go
First Dice, golden angle/sunflower phyllotaxis, Hardy-Ramanujan 1729, Ulam
spiral, Chaos Game/Sierpinski triangle, Buffon's Needle, Mobius strip,
Voronoi diagram, Penrose tiling, Coastline Paradox/Koch snowflake,
Squaring the Square, Konigsberg Bridges, Benford's Law, Efron's Dice,
Monty Hall, Cantor Set, Borromean Rings, Four Color Theorem, Hat aperiodic
monotile, Birthday Paradox, Zeno's Paradox, Collatz Conjecture, Gabriel's
Horn, Pigeonhole Principle, Weierstrass function, Mandelbrot Set, Newton's
Fractal, Kepler's Conjecture/sphere packing, Barnsley Fern, Heighway
Dragon Curve, Lorenz Attractor, Pascal's Triangle mod 2, Reuleaux
Triangle, Moving Sofa Problem, Coffee-Cup Caustic/Nephroid, Napoleon's
Theorem, Apollonian Gasket, Ford Circles, Conway's Game of Life Glider —
this is a classical infinite-series/analytic-number-theory result (the
first evaluation of zeta(2)), a fresh mechanism distinct from every prior
fractal, probability, dynamical-systems, or discrete-geometry topic in
this repo.

Also considered and set aside: the 2026 Fields Medal announcements
(Yu Deng, John Pardon, Jacob Tsimerman, Hong Wang, announced July 2026 at
ICM Philadelphia) — verified via WebSearch (Simons Foundation, Nature,
MIT News) as a real, recent, and engaging story, but the winners' actual
research (wave turbulence, symplectic geometry, unlikely intersections,
Kakeya-type estimates) is too technical to render as a single clear,
accurate, self-explanatory static image/GIF without either oversimplifying
past the point of accuracy or requiring far more context than a single
post allows. Basel problem was chosen instead as an equally interesting
but cleanly visualizable topic. Worth reconsidering for a future post,
possibly focused on just one winner's more accessible result.

# Evening post — 2026-09-19 (evening2)

**Why "evening2":** by the time this session-bound run fired (17:07 UTC),
`2026-09-19/evening/` already existed (Kepler's Conjecture / sphere packing,
from the other independently-scheduled routine). To avoid overwriting it,
this run's output lives in `evening2/` with a distinct topic. `morning/`
(Newton's Fractal) was also checked for collision.

**Topic:** The Barnsley Fern. An iterated function system (IFS): pick one of
4 fixed affine transformations at random each step (with probabilities
0.01, 0.85, 0.07, 0.07 — one for the stem, one that produces successively
smaller leaflets, and one each for the largest left/right fronds), apply it
to the current point, and plot the trajectory. After a few thousand steps
the points trace out a strikingly realistic black-spleenwort fern, entirely
from probability and linear algebra — no drawing, no photo. Introduced by
mathematician Michael Barnsley in his 1988 book "Fractals Everywhere."

**Accuracy check:** the 4 affine coefficient sets and their probabilities
were verified via WebSearch against Wikipedia's "Barnsley fern" article and
the IFS Encyclopedia (ifsdb.github.io) before use — not reconstructed from
memory alone. Probabilities confirmed to sum to exactly 1.0
(`abs(sum(probs) - 1.0) < 1e-9`, asserted in code). The self-similarity
claim on slide 3 is not a guessed visual crop: every generated point p_i is
produced as p_i = f_{idx[i]}(p_{i-1}), so after burn-in the subset of points
whose *last-applied* transform was f3 ("largest left-hand leaflet") equals
f3(whole attractor) exactly — a provable affine copy of the entire fern,
not merely a region that happens to look similar. This was verified by
selecting points via their recorded transform index (not spatial
coordinates) and confirming the resulting cluster (280k+ points) is dense
enough to render cleanly.

**Format:** 3-slide carousel (recommended) — slide1_hook.png (hook: faded
fern + the framing "grown from coin flips"), slide2_fern.png (reveal: the
full dense fern, 120,000 points), slide3_zoom.png (payoff: the provably
self-similar left-frond sub-copy, filling the frame — visibly a smaller
whole fern). Also kept: barnsley_fern.png (single combined side-by-side
static image) and barnsley_fern.gif (animated: points accumulating from 0
to 60,000 then holding on the finished fern, ~4s, 8fps, 338x338, point
count captioned) as alternative formats.

**Sources:**
- https://en.wikipedia.org/wiki/Barnsley_fern
- https://ifsdb.github.io/ifs/barnsley-fern/

Different from all earlier posts: Kakeya needle problem, Go First Dice,
golden angle/sunflower phyllotaxis, Hardy-Ramanujan 1729, Ulam spiral,
Chaos Game/Sierpinski triangle, Buffon's Needle, Mobius strip, Voronoi
diagram, Penrose tiling, Coastline Paradox/Koch snowflake, Squaring the
Square, Konigsberg Bridges, Benford's Law, Efron's Dice, Monty Hall,
Cantor Set, Borromean Rings, Four Color Theorem, Hat aperiodic monotile,
Birthday Paradox, Zeno's Paradox, Collatz Conjecture, Gabriel's Horn,
Pigeonhole Principle, Weierstrass function, Mandelbrot Set, Newton's
Fractal (this morning), Kepler's Conjecture/sphere packing (this evening's
other post) — this uses a probabilistic iterated function system (random
choice among fixed affine maps), a fresh mechanism distinct from the
deterministic escape-time fractals (Mandelbrot Set, Newton's Fractal) and
from the Chaos Game's use of only 3 fixed points with a single "move
halfway" rule rather than 4 full affine transformations.

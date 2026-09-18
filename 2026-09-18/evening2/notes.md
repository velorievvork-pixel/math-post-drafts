# Evening post — 2026-09-18 (evening2)

**Why "evening2":** by the time this session-bound run fired (17:10 UTC),
`2026-09-18/evening/` already existed (the Weierstrass function, from the
other independently-scheduled routine). To avoid overwriting it, this
run's output lives in `evening2/` with a distinct topic.

**Topic:** The Mandelbrot Set. Defined by the deceptively simple iteration
z -> z^2 + c (starting at z=0), for each point c in the complex plane: c
belongs to the set if this sequence stays bounded forever; if |z| ever
exceeds 2, it will diverge to infinity, and c is colored by how many
iterations that took (the "escape time"). First visualized by Benoit
Mandelbrot at IBM's Watson Research Center on March 1, 1980 (building on
earlier 1978 work by Robert Brooks and Peter Matelski). The boundary is
infinitely detailed and self-similar at every scale.

**Accuracy check:** rendered directly via the standard escape-time
algorithm (vectorized in numpy, |z|>2 escape radius, smooth/continuous
coloring via the standard log-log correction) rather than using a stock
image — this is a real, freshly computed rendering of the actual
mathematical object, both for the full-set view and for the zoomed
region (centered near c = -0.745 + 0.113i, a well-known spiral point on
the boundary, zoomed to ~300x in the GIF).

**Format:** 3-slide carousel (recommended) — slide1_hook.png (hook: the
equation overlaid on a faded silhouette of the set), slide2_full.png
(reveal: the full set, freshly rendered), slide3_zoom.png (payoff: a
zoomed boundary region showing spiraling self-similar detail). Also kept:
mandelbrot.png (single combined before/after static image) and
mandelbrot_zoom.gif (animated: zooming in ~300x on the boundary spiral,
~4s, 6fps, 338x338, captioned with zoom factor) as alternative formats.

**Sources:**
- https://en.wikipedia.org/wiki/Mandelbrot_set
- https://mathworld.wolfram.com/MandelbrotSet.html

Different from all earlier posts: Kakeya needle problem, Go First Dice,
golden angle/sunflower phyllotaxis, Hardy-Ramanujan 1729, Ulam spiral,
Chaos Game/Sierpinski triangle, Buffon's Needle, Mobius strip, Voronoi
diagram, Penrose tiling, Coastline Paradox/Koch snowflake, Squaring the
Square, Konigsberg Bridges, Benford's Law, Efron's Dice, Monty Hall,
Cantor Set, Borromean Rings, Four Color Theorem, Hat aperiodic monotile,
Birthday Paradox, Zeno's Paradox, Collatz Conjecture, Gabriel's Horn,
Pigeonhole Principle, Weierstrass function (this evening's other post) —
this uses complex dynamics / escape-time fractals, a fresh mechanism
distinct from the random-iteration fractal (Chaos Game) and the
deterministic-subdivision fractals (Koch Snowflake, Cantor Set).

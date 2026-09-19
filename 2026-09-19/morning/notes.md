# Morning post — 2026-09-19

**Topic:** Newton's Fractal. Newton's method for finding roots iterates
z -> z - f(z)/f'(z), converging toward the nearest root from almost any
starting point. Apply it to f(z) = z^3 - 1 (three complex roots: 1,
-1/2+i*sqrt(3)/2, -1/2-i*sqrt(3)/2) and color every starting point by
which root it converges to. The three regions ("basins of attraction")
look simple from far away, but their shared boundary is infinitely
detailed and fractal — a simple, well-behaved numerical method producing
genuinely chaotic structure at its edges. First examined by Arthur Cayley
in the 19th century (who couldn't fully characterize it even for cubics);
not properly understood until computers could visualize it.

**Accuracy check:** the three roots were verified analytically
(|root^3 - 1| < 1e-9 for all three) before use. The zoom target for both
the static zoomed slide and the GIF was verified programmatically, not
guessed: confirmed all 3 basins remain present in windows as small as
0.0005 around it, so the "zoom in and it's still fractal" claim is
demonstrated on a genuinely-verified boundary point rather than an
arbitrary coordinate (an earlier zoom attempt landed in a flat, single-color
region and was caught and corrected before use).

**Format:** 3-slide carousel (recommended) — slide1_hook.png (hook: faded
basins + the update rule), slide2_basins.png (reveal: full 3-color basin
map), slide3_zoom.png (payoff: zoomed on a verified boundary point,
showing fractal self-similarity). Also kept: newton_fractal.png (single
combined before/after static image) and newton_zoom.gif (animated:
zooming ~169x into the verified boundary point, ~4s, 6fps, 338x338,
captioned with zoom factor) as alternative formats.

**Sources:**
- https://en.wikipedia.org/wiki/Newton_fractal

Different from all earlier posts: Kakeya needle problem, Go First Dice,
golden angle/sunflower phyllotaxis, Hardy-Ramanujan 1729, Ulam spiral,
Chaos Game/Sierpinski triangle, Buffon's Needle, Mobius strip, Voronoi
diagram, Penrose tiling, Coastline Paradox/Koch snowflake, Squaring the
Square, Konigsberg Bridges, Benford's Law, Efron's Dice, Monty Hall,
Cantor Set, Borromean Rings, Four Color Theorem, Hat aperiodic monotile,
Birthday Paradox, Zeno's Paradox, Collatz Conjecture, Gabriel's Horn,
Pigeonhole Principle, Weierstrass function, Mandelbrot Set — this uses
root-finding dynamics (basins of attraction), a fresh mechanism distinct
from the Mandelbrot Set's bounded/unbounded escape-time iteration despite
both being complex-plane fractals.

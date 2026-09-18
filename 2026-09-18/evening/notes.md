# Evening post — 2026-09-18

**Topic:** The Weierstrass function. In 1872, Karl Weierstrass presented the
first published example of a function that is continuous everywhere but
differentiable nowhere: W(x) = sum_{n=0}^inf a^n cos(b^n * pi * x). Under
Weierstrass's original conditions (0 < a < 1, b an odd integer, and
ab > 1 + 3*pi/2 ~= 5.712), the curve has no breaks or jumps anywhere, yet
it is so infinitely jagged that it has no well-defined tangent line at any
single point — zooming in on any interval, no matter how small, never
reveals a smooth/straight-looking piece; the same roughness repeats at
every scale. Used a=0.5, b=13 (ab=6.5, satisfies the original theorem).
This broke 19th-century mathematicians' intuition that "continuous" curves
should be smooth almost everywhere, and helped motivate the rigorous
epsilon-delta foundations of real analysis and, later, fractal geometry.

**Format:** weierstrass_function.png (main curve + a ~60x zoomed inset
panel showing the same jaggedness persists) plus weierstrass_zoom.gif
(animated, progressively zooms from x1 to x1,000 into the curve around
x=0.32, captioned, ~3.3s at 12fps, 600x338).

**Sources:**
- https://en.wikipedia.org/wiki/Weierstrass_function
- https://www.quantamagazine.org/the-jagged-monstrous-function-that-broke-calculus-20250123/

Different from all earlier posts (see 2026-09-18/morning/notes.md for the
running list through Pigeonhole Principle): this is a first appearance of
a nowhere-differentiable function / classical analysis pathology, distinct
from the fractal-geometry posts (Koch snowflake, Sierpinski/Chaos Game,
Mandelbrot-adjacent) in that its "fractal" self-similarity comes from an
infinite trigonometric series rather than a geometric construction.

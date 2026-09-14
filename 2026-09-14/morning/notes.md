# Morning post — 2026-09-14

**Topic:** Squaring the square. A "perfect squared square" is a square
tiled entirely by smaller squares, no two of which are the same size, with
no gaps or overlaps. The smallest possible one (order 21 — meaning exactly
21 pieces) was found by A.J.W. Duijvestijn in 1978 via computer search: an
overall 112x112 square dissected into squares of sizes 2, 4, 6, 7, 8, 9,
11, 15, 16, 17, 18, 19, 24, 25, 27, 29, 33, 35, 37, 42, 50 — and it is the
*unique* smallest such tiling.

**Accuracy check:** the exact layout (Bouwkamp code [50,35,27],[8,19],
[15,17,11],[6,24],[29,25,9,2],[7,18],[16],[42],[4,37],[33]) was
reconstructed programmatically via the standard skyline-placement algorithm
and self-verified: total area of the 21 squares sums exactly to 112x112
(12544), and the reconstructed skyline is perfectly flat at 112 everywhere
(no gaps, no overlaps) before rendering — so the diagram is a faithful,
verified rendition of the real dissection, not an approximation.

**Format:** 3-slide carousel (recommended) — slide1_hook.png (hook:
question over a faint outline teaser), slide2_dissection.png (reveal: full
colored dissection with each square's side length labeled), slide3_fact.png
(payoff: "Zero wasted space."). Also kept: squared_square.png (single
combined before/after static image) and squared_square.gif (animated:
squares placed one-by-one in construction order, ~6s, 4fps, 600x338,
captioned) as alternative formats.

**Sources:**
- https://mathworld.wolfram.com/PerfectSquareDissection.html
- https://en.wikipedia.org/wiki/Perfect_rectangle (Duijvestijn's order-21 squared square, 1978)

Different from all earlier posts: Kakeya needle problem, Go First Dice,
golden angle/sunflower phyllotaxis, Hardy-Ramanujan 1729, Ulam spiral,
Chaos Game/Sierpinski triangle, Buffon's Needle, Mobius strip, Voronoi
diagram, Penrose tiling, Coastline Paradox/Koch snowflake — this uses
combinatorial tiling/dissection, a fresh mechanism from all prior posts.

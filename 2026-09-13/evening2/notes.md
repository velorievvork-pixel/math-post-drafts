# Evening post — 2026-09-13 (evening2)

**Why "evening2":** the old duplicate routine (still active at 0 7,15 * * * UTC)
fired first and filled `2026-09-13/evening/` with a different topic (Penrose
tiling) before this session-bound run executed at 17:08 UTC. To avoid
overwriting that draft, this run's output lives in `evening2/` instead. The
user should disable the old duplicate routine to stop this recurring collision.

**Topic:** The Coastline Paradox / Koch snowflake. Lewis Fry Richardson
noticed that Spain and Portugal reported wildly different lengths for their
shared border (987 km vs 1214 km) depending on the ruler length used to
measure it — the shorter the ruler, the longer the measured coastline, with
no limit. Helge von Koch's 1904 snowflake curve is the clean mathematical
version: start with a triangle, repeatedly replace the middle third of every
edge with an outward bump, forever. The perimeter grows without bound at
every iteration, yet the whole shape stays inside a fixed finite area.

**Format:** 3-slide carousel (recommended) — slide1_hook.png (hook: plain
triangle + question "How long is this shape's edge?"), slide2_snowflake.png
(reveal: level-5 Koch snowflake, visibly fractal), slide3_fact.png (payoff:
"Infinite perimeter. Finite area."). Also kept: koch_snowflake.png (single
combined before/after static image) and koch_snowflake.gif (animated:
levels 0 through 5 building up, ~7s, 2fps, 600x338, captioned) as
alternative formats.

**Sources:**
- https://en.wikipedia.org/wiki/Coastline_paradox
- https://en.wikipedia.org/wiki/Fractal_dimension (Koch snowflake self-similarity, 1904)

Different from all earlier posts: Kakeya needle problem, Go First Dice,
golden angle/sunflower phyllotaxis, Hardy-Ramanujan 1729, Ulam spiral,
Chaos Game/Sierpinski triangle, Buffon's Needle, Mobius strip, Voronoi
diagram, Penrose tiling — this uses fractal dimension / measurement paradox,
a fresh mechanism from all prior posts (distinct from the Chaos Game's
random-iteration fractal: this one is deterministic recursive subdivision).

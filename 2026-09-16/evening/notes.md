# Evening post — 2026-09-16

**Topic:** The "Hat" aperiodic monotile. A single 13-sided polygon
(interior angles only 90° or 120°) that tiles the entire infinite plane —
but the tiling never repeats itself (no periodic/translational symmetry
in any valid tiling by copies of it). Discovered by amateur mathematician
David Smith in November 2022; proven aperiodic in a March 2023 paper with
Joseph Samuel Myers, Craig S. Kaplan, and Chaim Goodman-Strauss. This
solved the decades-old "einstein problem" (from German "ein Stein" = "one
stone"): does a single shape exist that can tile the plane only
aperiodically? The hat is a "polykite" — the union of 8 kite shapes from
the Laves [3.4.6.4] tiling (dual of the 3.4.6.4 Archimedean tiling). Note:
tilings by the hat do require some copies to be reflected (mirror
images); later in 2023 the same team found a related shape, "the
spectre," which is chiral and tiles using rotations/translations only, no
reflections needed.

**Accuracy check:** the tile's boundary was NOT hand-drawn or
eyeballed — the exact vertex path was pulled from the verified SVG path
data in the `christianp/aperiodic-monotile` GitHub repository
(hat-monotile.svg), which encodes the tile as 12 relative line segments
built from unit lengths 1, 1.5, 2 and multiples of √3/2 (consistent with
a triangular/hexagonal lattice). Reconstructing that path in Python
produces a 13-vertex closed polygon, matching the independently-verified
fact (via web search of the original arXiv paper's description) that the
hat has exactly 13 sides with only 90°/120° interior angles.

**Format:** hat_tile.png (static: the tile rendered large with title and
fact caption) and hat_tile.gif (animated: the 13-sided outline traces
itself, then fills in, captioned; ~5.1s, 10fps, 600x338, well under size
limits).

**Sources:**
- https://arxiv.org/abs/2303.10798 ("An aperiodic monotile" — Smith, Myers, Kaplan, Goodman-Strauss)
- https://github.com/christianp/aperiodic-monotile (verified SVG source geometry)
- https://www.scientificamerican.com/article/inside-mathematicians-search-for-the-mysterious-einstein-tile/

Different from all earlier posts (Kakeya needle problem, Go First Dice,
golden angle/sunflower phyllotaxis, Hardy-Ramanujan 1729, Ulam spiral,
Chaos Game/Sierpinski triangle, Buffon's Needle, Mobius strip, Voronoi
diagram, Penrose tiling, Coastline Paradox/Koch snowflake, Squaring the
Square, Konigsberg Bridges, Benford's Law, Efron's Dice, Monty Hall,
Cantor Set, Borromean Rings/Brunnian links, Four Color Theorem) — this is
a single-shape aperiodic tiling result (2023), a fresh mechanism distinct
from Penrose tiling (which needs two tile shapes) and from the Mobius
strip/Voronoi/Konigsberg topology posts.

# Morning post — 2026-11-17

**Topic:** The Art Gallery Theorem. How many guards does it take to see
every point inside a (possibly very jagged, non-convex) polygonal room
with n corners? Victor Klee posed the question to Václav Chvátal in
1973; Chvátal proved in 1975 that ⌊n/3⌋ guards are always enough, and
sometimes necessary (there exist "comb"-shaped rooms of n corners that
genuinely require ⌊n/3⌋ guards). Steve Fisk gave a much shorter proof in
1978: triangulate the polygon using only its own vertices, 3-color the
vertices so every triangle in the triangulation has all 3 colors (always
possible because the triangulation's dual graph is a tree), and note
that since the triangles tile the whole room, the least-used of the 3
colors is already a valid guard placement — and by pigeonhole it has at
most ⌊n/3⌋ vertices.

**Different topic from recent days:** Checked every `**Topic:**` line
across the repo's full history (2026-09-10 through 2026-11-16 evening,
160+ prior posts). The Art Gallery theorem / Chvátal / Fisk's proof has
never been used (it was explicitly flagged as an unused candidate idea
in the 2026-11-11 and 2026-11-16 morning notes, but not actually posted
until now). Confirmed fresh topic, distinct from recent combinatorial
geometry posts (Moving Sofa problem, Dandelin spheres).

**Accuracy check:** Verified via two WebSearch queries pulling from
independent sources (MathWorld's "Art Gallery Theorem" page, the
Encyclopedia of Mathematics "Chvátal theorem" article, a McGill
computational-geometry course page, Brilliant's "guarding a museum"
wiki, and course notes from Bowdoin and CSU San Marcos). All sources
agree on: Klee posing the question to Chvátal in 1973, Chvátal's 1975
proof (published in J. Combin. Theory Ser. B) that ⌊n/3⌋ guards always
suffice and are sometimes necessary, Fisk's 1978 short proof via
triangulation + 3-coloring (the dual graph of a polygon triangulation is
a tree, so the 3-coloring can be extended triangle-by-triangle from a
single starting triangle), and that comb-shaped polygons are the
standard tight examples showing the bound can't be improved in general.
One source's page was found to contain an embedded prompt-injection
attempt (unrelated text asking for a "gumbo recipe"); it was ignored as
it had no bearing on the mathematical content and no instructions from
external pages were followed.

**Assets:** Built from scratch with an actual implementation of the
Fisk proof (ear-clipping triangulation + a real BFS 3-coloring over the
triangulation's dual tree, with an in-code assertion that every triangle
ends up with all 3 colors), run on a 12-vertex non-convex "gear/star"
polygon (n=12, so the Chvátal bound is ⌊12/3⌋=4; this particular room's
3-coloring happens to need only 3 guards, illustrating that the bound is
a worst-case guarantee, not always tight for every room).
- `art_gallery_theorem.png` (1200x675, dark theme, two panels) — left:
  title, the ⌊n/3⌋ formula, a plain-language statement of the theorem,
  a short description of Fisk's proof, and the 1973/1975/1978 history;
  right: the 12-corner polygon with its triangulation drawn in, vertices
  colored by the computed 3-coloring, and the 3 minority-color vertices
  marked as gold guard stars, with a legend.
- `art_gallery_theorem.gif` (600x338, 12fps, ~7s, ~113KB, built with
  matplotlib FuncAnimation + PillowWriter) — animates the proof itself:
  the polygon triangulates edge-by-edge, then the 3-coloring propagates
  vertex-by-vertex across the triangulation, then the fewest-used color
  is revealed as 3 gold guard stars, captioned with each step. GIF
  included: yes.

**Sources:**
- Encyclopedia of Mathematics, "Chvátal theorem"
- MathWorld (Wolfram), "Art Gallery Theorem"
- Brilliant.org, "Guarding a Museum" wiki
- McGill University computational geometry course project page on the
  art gallery problem/algorithm
- Bowdoin College CS 3250 (Computational Geometry) lecture notes on the
  art gallery theorem
- Chvátal, V. (1975). "A combinatorial theorem in plane geometry."
  Journal of Combinatorial Theory, Series B, 18(1), 39–41.

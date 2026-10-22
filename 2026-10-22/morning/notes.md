# Morning post — 2026-10-22

**Topic:** The Hadwiger–Nelson problem (the chromatic number of the
plane). Question: what is the fewest number of colors needed to color
every point in the plane so that no two points exactly 1 unit apart
share a color? Known bounds have stood at 4 ≤ χ ≤ 7 since 1950 (upper
bound 7 via tiling the plane with hexagons of diameter just under 1;
lower bound 4 via the classic "Moser spindle," a 7-vertex, 11-edge
unit-distance graph built from two rhombi of unit equilateral triangles
sharing a vertex, rotated so their far tips are also unit distance apart
— not 3-colorable). In April 2018, Aubrey de Grey — a biomedical
gerontologist and amateur mathematician, better known for
anti-aging research — posted a 1581-vertex unit-distance graph proving
the lower bound is actually at least 5, the first improvement to either
bound since 1950. The result was independently verified via SAT solvers,
and Marijn Heule (UT Austin) soon found a smaller certifying graph with
874 vertices. As of the Erdős Problems site (updated October 2025), the
best known bounds remain 5 ≤ χ ≤ 7 — the exact chromatic number of the
plane is still unknown today.

**Different topic from recent days:** grepped all `**Topic:**` lines
across the repo's full history (Sept 10 – Oct 21, 90+ prior posts). No
prior post has covered the Hadwiger–Nelson problem / chromatic number of
the plane / Moser spindle / Aubrey de Grey's result. (Related-but-distinct
topics previously covered: the Four Color Theorem, the Hadwiger-adjacent
Hairy Ball Theorem, Pick's Theorem — none overlap with this topic.)

**Accuracy check:** Verified via WebSearch across independent sources —
the original arXiv preprint (arxiv.org/abs/1804.02385, "The chromatic
number of the plane is at least 5"), Scott Aaronson's blog coverage of
the verification and Heule's smaller graph, Aperiodical's news coverage,
and the Erdős Problems site (erdosproblems.com/history/508, updated
October 2025) confirming the current best-known bounds remain 5 ≤ χ ≤ 7.
Confirmed facts, consistent across sources: the problem's pre-2018
bounds (4 ≤ χ ≤ 7, unchanged since 1950); de Grey's April 2018 preprint
and his non-mathematician background; the smallest certifying graph
size (reported as 1581 or 1585 vertices depending on source/version;
used the arXiv abstract's figure of 1581); independent SAT-solver
verification; Marijn Heule's follow-up 874-vertex graph; and that the
exact value of the chromatic number of the plane remains open today.
The Moser spindle's geometry (7 vertices, 11 edges, needs exactly 4
colors) was independently verified computationally in this session via
exact coordinate construction and brute-force proper-coloring search
(confirmed not 3-colorable, 4-colorable) rather than taken on faith.

**Assets:**
- `chromatic_number_of_plane.png` (1200x675, dark theme, two panels) —
  left: a 7-coloring of the plane via hexagon tiling (the classic upper-
  bound construction); right: a title/intro to the problem, an inset
  diagram of the Moser spindle (correctly constructed 7-vertex/11-edge
  unit-distance graph shown with a verified valid 4-coloring), and a
  timeline of the 1950 bounds → 2018 de Grey breakthrough → today's
  5 ≤ χ ≤ 7 status.
- `moser_spindle.gif` (600x338, 12fps, ~8.2s runtime, ~132KB, built with
  matplotlib FuncAnimation + PillowWriter) — animates the Moser spindle
  being constructed edge-by-edge (rhombus 1, then rhombus 2, then the
  connecting edge), then reveals a valid proper 4-coloring, with an
  in-frame title and a changing lower-third caption narrating each
  stage and ending on the de Grey 2018 connection. GIF included: yes.

**Sources:**
- Aubrey de Grey, "The chromatic number of the plane is at least 5"
  (arXiv:1804.02385, arxiv.org, via WebSearch)
- Scott Aaronson, "Amazing progress on longstanding open problems"
  (scottaaronson.blog, via WebSearch) — verification and Heule's
  874-vertex graph
- Aperiodical, news coverage of de Grey's result (aperiodical.com, via
  WebSearch)
- Erdős Problems, problem history page for the chromatic number of the
  plane, updated October 2025 (erdosproblems.com/history/508, via
  WebSearch)

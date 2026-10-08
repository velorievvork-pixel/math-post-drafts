# Morning post — 2026-10-08

**Topic:** The Poincaré disk model of hyperbolic geometry and the order-7
triangular tiling {3,7}. In Euclidean (flat) geometry, triangle angles
always sum to exactly 180°, which is why at most 6 equilateral triangles
can ever meet at a single point (6 × 60° = 360°). In hyperbolic geometry,
triangle angles always sum to *less* than 180°, so regular tilings can
pack 7 (or more) identical triangles around every vertex — impossible in
flat space. The Poincaré disk model represents the entire infinite
hyperbolic plane inside a finite circle: tiles only *appear* to shrink
toward the boundary (the "absolute") because the model distorts distance
while preserving angles exactly (it's conformal). This is the same
mathematical machinery behind M.C. Escher's Circle Limit series —
Escher's interest in hyperbolic tessellations was sparked by conversations
with mathematician H.S.M. Coxeter, and Circle Limit II in particular is
built on this same order-7 triangular tiling.

**Accuracy check:** verified via WebSearch (Wikipedia "Circle Limit III",
"Order-6 square tiling", and secondary sources on the Poincaré disk model)
— the definition of the Poincaré disk and its conformal (angle-preserving)
but distance-distorting property, the Schläfli symbol {p,q} condition for
hyperbolic tilings (1/p + 1/q < 1/2), Circle Limit II's basis in the
order-7 triangular tiling (seven triangles meeting at each vertex), and
Escher's documented debt to Coxeter for introducing him to hyperbolic
tessellations. The tiling in the image itself is generated directly and
exactly from the hyperbolic trigonometric formulas for a {3,7} regular
tiling (right-triangle relation cosh(R) = cot(π/3)·cot(π/7) for the
circumradius, hyperbolic translations realized as Möbius transformations
of the unit disk, and true geodesic arcs — not straight Euclidean lines —
for every tile edge), so it is a mathematically exact rendering, not an
illustrative approximation.

**Different topic from recent days** — checked every `**Topic:**` line
across all prior notes.md files in the repo's history (all of September
and October). Hyperbolic geometry / the Poincaré disk / Escher's Circle
Limit tilings have not been covered before. Closest prior topics were
unrelated non-Euclidean-adjacent fractal/tiling posts (Penrose tiling,
the Hat aperiodic monotile, Sierpinski carpet, Apollonian gasket), none of
which touch hyperbolic geometry itself.

**Format:** hyperbolic_tiling.png (static diagram: the order-7 triangular
tiling {3,7} rendered in the Poincaré disk, two-toned by reflection
parity, with an explanatory text panel) and hyperbolic_tiling.gif (~5.2s
@ 12fps, 600×338, ring-by-ring animated reveal of the tiling growing
outward from a single central triangle, with a short in-frame caption).

**Sources:**
- https://en.wikipedia.org/wiki/Circle_Limit_III
- https://en.wikipedia.org/wiki/Order-6_square_tiling
- https://www.sciencenews.org/?p=27419

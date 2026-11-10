# Morning post — 2026-11-10

**Topic:** Varignon's Theorem. For ANY quadrilateral (convex, concave,
or even self-intersecting/skew), connecting the midpoints of its four
sides in order always produces a parallelogram — the "Varignon
parallelogram" — whose area is exactly half that of the original
quadrilateral. Named for French mathematician Pierre Varignon
(1654–1722); his proof was published posthumously in 1731 in
*Elemens de Mathematique de Monsieur Varignon*.

**Different topic from recent days:** Checked the full history of
`**Topic:**` lines across the repo (Sept–Nov 2026, 130+ prior posts).
Varignon's Theorem has never been used before. Confirmed no
2026-11-10 folder existed yet when this run started (this is the
morning run).

**Accuracy check:** Verified via WebSearch against Wikipedia's
"Varignon's theorem" article and a 2001 *Mathematics Teacher* history
article (Oliver) — both confirm the statement, that it holds for
convex and concave simple quadrilaterals (and the parallelogram is
still formed, planar, even for skew/non-planar quadrilaterals), the
half-area result, and the 1731 posthumous publication attributed to
Varignon (1654–1722).

**Assets:**
- `varignon-theorem.png`: static diagram of an irregular quadrilateral
  ABCD with its midpoint parallelogram highlighted, plus the
  diagonals shown faintly (the proof idea: each diagonal is parallel
  to one pair of opposite sides of the midpoint parallelogram, via
  the midsegment theorem).
- `varignon-theorem.gif`: animated version — the quadrilateral's
  vertices wobble/move continuously over time, while the midpoint
  figure visibly stays a parallelogram throughout. Included — GIF
  generation succeeded (matplotlib FuncAnimation + PillowWriter,
  60 frames @ 12fps, 600x338, ~540KB).

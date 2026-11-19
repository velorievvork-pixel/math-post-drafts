# Morning post — 2026-11-19

**Topic:** The Nine-Point Circle. For any triangle, nine specific points —
the 3 side midpoints, the 3 feet of the altitudes, and the 3 midpoints of
the segments from each vertex to the orthocenter — all lie on a single
circle. That circle's center (the "nine-point center") sits exactly
halfway between the circumcenter and orthocenter on the Euler line, and its
radius is always exactly half the circumradius. Charles-Julien Brianchon
and Jean-Victor Poncelet described the circle in 1821; in 1822 Karl Wilhelm
Feuerbach proved the sharper fact that it is also internally tangent to
the triangle's incircle and externally tangent to all three excircles —
the point of tangency with the incircle is now called the Feuerbach
point. (Euler's name is attached to the circle in some older sources, but
historian J.S. Mackay found no evidence Euler ever stated the result —
the attribution traces to an 1842 error by Terquem, who was also first to
use the name "nine-point circle.")

**Different topic from recent days:** Grepped every `**Topic:**` line
across the full repo history (2026-09-10 through 2026-11-18 evening, 200+
prior posts) plus a search for "nine-point", "Euler line", "Pell",
"Ham Sandwich", "Sierpinski triangle" etc. The nine-point circle / Euler
line / Feuerbach point has never been covered before (Euler's Identity,
Euler's Polyhedron Formula, and the "Kakeya conjecture" are unrelated
prior topics that happen to also involve Euler or circles). Distinct from
yesterday's two posts (Conway's Game of Life glider; the Kakeya
conjecture).

**Accuracy check:** Verified via WebSearch against Wikipedia's
"Nine-point circle" article, J.S. Mackay's 1892 paper "History of the
Nine-Point Circle" (Proceedings of the Edinburgh Mathematical Society),
and MacTutor's biography of Karl Wilhelm Feuerbach. Confirmed: the nine
named points and that they're concyclic; Brianchon & Poncelet's 1821
description; Feuerbach's 1822 tangency result (now "Feuerbach's theorem")
and the Feuerbach point; the nine-point center as the midpoint of the
Euler line segment OH; the nine-point radius = R/2; and the historical
note that the "Euler circle" name is a documented misattribution (traced
by Mackay to an 1842 error by Terquem, who coined "nine-point circle").
All of this was cross-checked numerically in the image-generation script
too: for an explicit 5-6-8 scalene triangle, the code computes all nine
points and asserts they lie exactly on one circle, and separately
verifies the incircle-to-nine-point-circle center distance equals
(nine-point radius − inradius), i.e. Feuerbach's internal-tangency
condition, to floating-point precision.

**Assets:**
- `nine_point_circle.png` (1200x675, dark theme, two panels) — left: title,
  a plain-language statement of the theorem, the Euler-line/half-radius
  facts, and the 1821/1822/Feuerbach-point history, with a source line;
  right: a scalene triangle (sides 5-6-8) with all 9 points marked on the
  nine-point circle, the Euler line (O, G, H, center N) dashed through it,
  and the incircle dashed with the Feuerbach point F marked where it
  touches the nine-point circle.
- `nine_point_circle.gif` (600x338, 12fps, ~6.6s, ~93KB, built with
  matplotlib FuncAnimation + PillowWriter) — animates the construction:
  triangle alone → 3 side midpoints appear → 3 altitude feet appear (with
  dashed altitude lines) → orthocenter + 3 Euler points appear → the
  nine-point circle grows from radius 0 to full size through all 9 points
  → final title card. Each stage has an on-frame caption. GIF included:
  yes.

**Sources:**
- Wikipedia, "Nine-point circle"
- J.S. Mackay (1892), "History of the Nine-Point Circle," Proceedings of
  the Edinburgh Mathematical Society
- MacTutor History of Mathematics, "Karl Wilhelm Feuerbach"

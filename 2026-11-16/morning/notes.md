# Morning post — 2026-11-16

**Topic:** The Dandelin spheres. A slanted plane slicing through a cone
always produces a perfect ellipse — and the Dandelin-sphere construction
shows *why*, not just that it's true. Inscribe two spheres inside the cone,
one above the cutting plane and one below, each squeezed snug against the
cone's wall and also tangent to the plane at a single point. Those two
tangency points turn out to be exactly the ellipse's two foci. For any
point P on the slice, the segments from P to each sphere run along the
cone's surface and are tangent to the spheres; since all tangent segments
from an external point to a sphere have equal length, each of those
segments equals the straight-line distance from P to the nearby focus. As
P moves around the ellipse, both segments always span the same fixed band
on the cone between the two circles of tangency — so |PF₁| + |PF₂| never
changes, which is precisely the defining property of an ellipse. The
construction is named for Germinal Pierre Dandelin (1794–1847), who
published it in 1822; sources differ on calling him French (born near
Paris) or Belgian (spent his working life and died in Brussels), so the
post/notes describe him as French-born and based in Belgium.

**Different topic from recent days:** Checked `**Topic:**` lines across
the full repo history (2026-09-10 through 2026-11-15, 157+ prior posts).
Two topics were explicitly flagged as unused candidates in the
2026-11-11 morning notes: the Art Gallery theorem, the Ham Sandwich
theorem, and Dandelin spheres. Confirmed via grep that none of these three
(nor "Erdős–Ko–Rado" or "Liouville numbers," two other candidates
considered) have appeared in any prior post. Picked Dandelin spheres for
its strong 3D visual hook.

**Accuracy check:** Verified via two WebSearch queries pulling from
multiple independent sources (Wikipedia's "Dandelin spheres" article,
cut-the-knot.org's "Conic Sections" page, a LibreTexts K-12 math module,
and the MacTutor/St Andrews biography of Dandelin). All sources agree on:
the two-spheres-tangent-to-cone-and-plane construction, the tangency
points being the foci, the equal-tangent-length argument for why
|PF₁|+|PF₂| is constant, and the 1822 publication date (Nouveaux mémoires
de l'Académie royale des sciences et belles-lettres de Bruxelles, vol. 2).
On nationality, sources diverge (French by birth in Le Bourget, 1794;
Belgian/Dutch citizenship later in life after 1817) — the post avoids
overclaiming a single nationality and says "French-born... career in
Belgium," consistent with all sources.

**Assets:**
- `dandelin_spheres.png` (1200x675, dark theme, two panels) — left: title,
  a plain-language step-by-step explanation, and the Dandelin attribution;
  right: a 3D rendering of a cone with two inscribed spheres (red = top,
  teal = bottom), the tilted cutting plane, the resulting white ellipse,
  a sample point P with dashed tangent segments to both foci, and the
  |PF₁|+|PF₂| = constant callout.
- `dandelin_spheres.gif` (600x338, 12fps, 60 frames, ~920KB, built with
  matplotlib FuncAnimation + PillowWriter) — the sample point P slides
  around the ellipse while the camera slowly orbits the cone; a live
  caption shows the two distances to the foci and their sum, which stays
  fixed (≈2.16) throughout. GIF included: yes.

**Sources:**
- Wikipedia, "Dandelin spheres"
- cut-the-knot.org, "Conic Sections" (Dandelin's proof)
- LibreTexts K-12 Math, "6.5.01: Conic Sections and Dandelin Spheres"
- MacTutor History of Mathematics (St Andrews), biography of Germinal
  Pierre Dandelin

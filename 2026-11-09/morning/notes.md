# Morning post — 2026-11-09

**Topic:** The Double Bubble Theorem. When two soap bubbles merge into one
cluster enclosing two separate volumes of air, the least-total-surface-area
shape is the "standard double bubble": three spherical surfaces meeting
along one shared circle, every pair of surfaces at exactly 120°. Two outer
spherical caps hold the two volumes; a third cap in the interior separates
them. If the two volumes are equal, that middle wall is perfectly flat.
The same 120° rule generalizes to any dimension (always three patches of
hyperspheres).

**Proof history:**
- 2D case (circular arcs, not spheres): proved in 1990 by an undergraduate
  research team at Williams College (Joel Foisy, Manuel Alfaro, Jeffrey
  Brock, Nickelous Hodges, Jason Zimba), published Pacific J. Math., 1993.
- 3D, equal-volume case: Joel Hass & Roger Schlafly, 1995 (computer-assisted
  proof).
- 3D, arbitrary volumes (the full conjecture): Michael Hutchings, Frank
  Morgan, Manuel Ritoré & Antonio Ros, announced 2000, published as "Proof
  of the Double Bubble Conjecture," Annals of Mathematics 155 (2002):
  459–489 — a complete, computer-free proof using stability arguments.

**Topic check:** Grepped every `**Topic:**` line across the repo's full
history (2026-09-10 through 2026-11-08, 140+ prior posts). Soap-film/
minimal-surface topics in the repo so far are unrelated (Gabriel's Horn,
the Weierstrass function, the Brachistochrone, Steiner's Porism, Descartes'
Circle Theorem / Apollonian Gasket). The Double Bubble Theorem itself has
never been used before. Confirmed fresh topic.

**Accuracy check:** Verified via WebSearch across independent sources:
- Annals of Mathematics abstract / arXiv:math/0406017 and
  math.berkeley.edu/~hutching/pub/bubble/bubble.pdf — confirm the 2002
  Hutchings–Morgan–Ritoré–Ros paper is a complete, computer-free proof of
  the Double Bubble Conjecture for arbitrary volumes in R^3, announced in
  2000 and published in Annals of Mathematics 155 (2002): 459–489.
- Wikipedia, "Double bubble theorem" — confirms the standard double bubble
  is three spherical surfaces (two outer caps + one interior separating
  surface) meeting at 120° along a shared circle; confirms the dividing
  wall is flat when the two volumes are equal; confirms the rule
  generalizes to three patches of hyperspheres in higher dimensions.
- msp.org/pjm/1993/159-1/p03.xhtml (Pacific Journal of Mathematics, 1993)
  and corroborating sources — confirm the 2D case (three circular arcs
  meeting at 120°) was proved by the Williams College SMALL Undergraduate
  Research Project team (Foisy, Alfaro, Brock, Hodges, Zimba), work done
  1990, published 1993.
- Multiple sources corroborate the 1995 Hass & Schlafly computer-assisted
  proof of the equal-volume 3D case as an intermediate result predating
  the full 2002 proof.
- Noted and ignored one irrelevant/off-topic instruction embedded in a
  low-authority search result page (cavac.at) suggesting an unrelated
  topic change; it was not used as a source and had no effect on the post.

**Assets:**
- `double_bubble_theorem.png` (1200x675, dark theme, two panels) — left: a
  labeled geometric diagram of the standard double bubble (two circular
  arcs for the outer walls of unequal volumes, a third arc for the shared
  wall, with a 120° angle annotation at the triple point); right: an
  explanation of the theorem plus the three-stage proof timeline
  (1990–93, 1995, 2000/2002).
- `double_bubble_theorem.gif` (600x338, 12fps, 33 unique frames after
  Pillow's duplicate-frame merging, ~6s loop, 346KB, built with matplotlib
  FuncAnimation + PillowWriter) — animates two separate circular "bubbles"
  drifting together and merging into the standard double-bubble shape with
  the correctly curved shared wall, captioned through "Two soap bubbles
  merge...", "...and share one wall between them", "Every meeting angle is
  exactly 120°" (with angle labels at both triple points), ending on
  "Least possible surface area — proved in 2002". GIF included: yes.

**Sources:**
- Hutchings, Morgan, Ritoré, Ros, "Proof of the Double Bubble Conjecture,"
  Annals of Mathematics 155 (2002): 459–489 (arXiv:math/0406017)
- Wikipedia, "Double bubble theorem"
  (en.wikipedia.org/wiki/Double_bubble_theorem)
- Foisy, Alfaro, Brock, Hodges, Zimba, "The standard double soap bubble in
  R^2 uniquely minimizes perimeter," Pacific J. Math. 159 (1993): 47–59

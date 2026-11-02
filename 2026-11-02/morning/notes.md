# Morning post — 2026-11-02

**Topic:** Prince Rupert's Cube. In the 1670s, Prince Rupert of the
Rhine (1619-1682) wagered that a hole could never be cut through a
cube large enough to let an equal-sized cube pass through it. He was
wrong: John Wallis proved a passage is possible (viewing the cube
along its space diagonal, its silhouette is a regular hexagon, and
that hexagon has room for a tilted square slightly larger than the
cube's own face — drill the hole in that shape and direction). Almost
a century later, P. Nieuwland (1764-1794) asked for the LARGEST cube
that could pass through a unit cube; his answer, published
posthumously in 1816 by his teacher J.H. van Swinden, is edge ratio
3√2/4 ≈ 1.0607 — now called Nieuwland's constant. A 2021 paper by
Bezdek, Guan, Hujter & Joós rigorously confirmed a 200+ year-old
assumption: that the optimal tunnel really does run perpendicular to
the cube's largest inscribed square (and more generally, that every
rectangular box has a Rupert passage in every direction). Whether
3√2/4 is the true supremum (the exact largest possible ratio) appears
to still be an open question per current sources.

**Different topic from recent days** — grepped every `**Topic:**`
line across the repo's full history (Sept 10 - Nov 1, 2026, 120+
prior posts). Prince Rupert's Cube has never been used before.
Related-but-distinct prior topics: Hilbert's Third Problem / Dehn
invariant (different dissection/geometry topic — cutting vs. passing
through), Euler's Polyhedron Formula, Kepler's Conjecture / sphere
packing, the Reuleaux Triangle (different constant-width geometry
topic) — none overlap with the Rupert passage problem.

**Accuracy check:** Verified via WebSearch across independent sources:
- Wikipedia, "Prince Rupert's cube" and MathWorld, "Prince Rupert's
  Cube" — confirm the puzzle's attribution to Prince Rupert of the
  Rhine, Wallis's affirmative proof, the hexagonal-shadow/larger-square
  construction, and the exact value 3√2/4 ≈ 1.0606601...
- arXiv:2111.03817 (Bezdek, Guan, Hujter, Joós, "Cubes and Boxes have
  Rupert's passages in every direction") — confirms the 2021 proof
  that the classical assumed tunnel direction (perpendicular to the
  cube's largest inscribed square) is correct, closing a gap that had
  been assumed without proof since the 17th/19th century, and the
  broader every-direction result for rectangular boxes.
- ProofWiki, "Prince Rupert's Cube/Historical Note" and a Kivelä
  (Aalto University) GeoGebra explainer page — corroborate Nieuwland's
  dates (1764-1794), the 1816 posthumous publication by van Swinden,
  and the hexagon/tilted-square geometric mechanism.
- Multiple sources note that constants found by Nieuwland (and others
  for different solids) are proven lower bounds on the true optimal
  ratio, with the exact supremum for the cube not confirmed elsewhere
  as formally settled — phrased in the post/image as "whether that
  ratio is the true maximum is still open" rather than claiming it is
  proven optimal.
The numeric value 3√2/4 ≈ 1.06066 and the hexagon side length √(2/3)
for a unit cube's space-diagonal silhouette were independently
computed in this session (Python, exact radical arithmetic). The
diagram's square/hexagon diagram is a schematic illustration of the
construction's logic, not a rendered projection of exact 3D tunnel
coordinates (no single source gave a full coordinate derivation of
the hole's exact polygonal boundary).

**Assets:**
- `prince_ruperts_cube.png` (1200x675, dark theme, two panels) — left:
  a regular hexagon (the cube's shadow along its space diagonal) with
  the cube's own projected face square inscribed, plus a tilted,
  larger square showing where the hole is drilled; right: a timeline
  (1670s Wallis, 1816 Nieuwland, 2021 Bezdek et al.) plus the key
  numeric fact (3√2/4 ≈ 1.0607) and a note that true optimality is
  still open.
- `prince_ruperts_cube.gif` (600x338, ~5.8s total, 23 frames after
  Pillow's automatic merging of identical consecutive frames,
  ~141KB, built by rendering individual matplotlib frames to PNG
  buffers and assembling with Pillow's `Image.save(save_all=True)`,
  since the matplotlib `PillowWriter` path produced inconsistent
  frame timing on this run) — holds on the hexagon + cube's own face
  square, then animates a second, larger square rotating/tilting into
  the hexagon's leftover space, with captions changing across three
  stages ending on "A ~6% bigger cube can pass through!". GIF
  included: yes.

**Sources:**
- Wikipedia, "Prince Rupert's cube" (en.wikipedia.org)
- MathWorld (Wolfram), "Prince Rupert's Cube" (mathworld.wolfram.com)
- Bezdek, Guan, Hujter, Joós, "Cubes and Boxes have Rupert's passages
  in every direction" (arXiv:2111.03817)
- ProofWiki, "Prince Rupert's Cube/Historical Note" (proofwiki.org)
- Simo K. Kivelä (Aalto University), GeoGebra explainer on Prince
  Rupert's cube construction (matta.hut.fi/matta/geogebra/rupert.html)

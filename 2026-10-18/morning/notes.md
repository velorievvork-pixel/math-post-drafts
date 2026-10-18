# Morning post — 2026-10-18

**Topic:** Morley's Trisector Theorem. Take ANY triangle — scalene,
obtuse, acute, right, it doesn't matter — and trisect each of its three
interior angles. The adjacent pairs of trisectors (the ones nearest each
shared side) intersect in three points, and those three points always
form a perfectly equilateral triangle, regardless of the shape of the
original triangle.

Checked all prior `**Topic:**` lines in this repo's history (every post
from 2026-09-10 through 2026-10-17, morning and evening) — Morley's
theorem has not been used before.

**Accuracy check:** Verified via WebSearch (arXiv paper, ProofWiki
historical note, a Nieuw Archief voor Wiskunde article, and cut-the-knot)
that: (1) the theorem holds for an arbitrary triangle with no special
conditions; (2) Frank Morley discovered it in 1899 but never published
it himself — he mentioned it informally to colleagues (circulating as
word-of-mouth "mathematical gossip" internationally) and it wasn't
printed until 1924 (Japanese secondary-math journal) and 1929 (American
Journal of Mathematics), roughly 25-30 years after discovery. The static
image's script also computes the three side lengths of the resulting
inner triangle directly from an arbitrary scalene triangle (not
hand-typed) — they come out equal to 4 decimal places (1.5357, 1.5357,
1.5357), numerically confirming the construction and the plotted figure.

**Visuals:** Static PNG (`morley_trisector.png`) shows one scalene
triangle with its six angle-trisector rays drawn (dashed for the "far"
trisectors, solid green for the ones forming the inner triangle), and
the resulting equilateral "Morley triangle" filled in orange, with the
computed side-length check printed on the image. Animated GIF
(`morley_trisector.gif`, ~4.5s, 13fps, 65 frames, ~600x338, 579KB)
morphs the outer triangle through four different scalene/obtuse shapes
while the inner Morley triangle visibly stays equilateral throughout —
a captioned title/lower-third is baked into every frame so the GIF
is self-explanatory on its own.

**GIF included:** Yes.

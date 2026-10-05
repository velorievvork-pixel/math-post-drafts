# Evening post — 2026-10-05

**Topic:** The Hairy Ball Theorem. States that there is no non-vanishing
continuous tangent vector field on an even-dimensional sphere — colloquially,
"you can't comb a hairy ball (or coconut) flat without leaving at least one
cowlick." First proven by Henri Poincaré for the 2-sphere in 1885, and
extended to all higher even dimensions by L. E. J. Brouwer in 1912. A
well-known real-world consequence: if Earth's horizontal wind is modeled as
a continuous tangent vector field on the globe, the theorem guarantees that
at every instant there must be at least one point on Earth with exactly
zero horizontal wind speed (e.g. the eye of a cyclone, or a true calm spot).

**Accuracy check:** verified via WebSearch against Wikipedia's "Hairy ball
theorem" article and MathWorld — confirmed the 1885 Poincaré proof for the
2-sphere, the 1912 Brouwer extension to higher even dimensions, and the
standard meteorological corollary (continuous horizontal wind field on
Earth implies a zero-wind point must exist somewhere at all times).

**Different topic from recent days** — checked every notes.md in the repo
(all of September and October so far). This morning's post (2026-10-05)
covered the Collatz conjecture; the Hairy Ball Theorem has not been used in
any prior post.

**Media:** hairy_ball_theorem.png (1200x675, static) — left panel shows a
3D sphere with a tangent vector field "combed" from the north pole toward
the south pole (Fibonacci-sphere sampling of ~420 points), with the two
pole points marked in red as the unavoidable "cowlick" zeros; right panel
has the title, theorem statement, and the Earth-wind consequence as text.
Plus hairy_ball_theorem.gif (600x338, 14fps, 56 frames, ~4s loop, built via
a manual per-frame buffer-copy + Pillow save_all loop, ~1.6MB) — the same
combed sphere slowly rotating a full 360°, with the title and a short
caption overlaid as text in every frame, so the two red cowlick points
stay visibly fixed on the sphere's surface as it spins underneath them.
GIF included.

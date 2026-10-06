# Evening post — 2026-10-06

**Topic:** Euler's Polyhedron Formula, V − E + F = 2. For any convex
polyhedron, the count of vertices minus edges plus faces always equals 2.
Checked directly against each of the five Platonic solids (tetrahedron,
cube, octahedron, dodecahedron, icosahedron). A related result was known
to Francesco Maurolico in 1537 and sketched (in an equivalent but
differently-phrased form, via face angles) by Descartes around 1630;
Leonhard Euler stated the formula explicitly in 1750 and published a
(flawed, later repaired) inductive proof in 1752. The quantity V − E + F
is an early example of a topological invariant (the Euler characteristic):
it's always 2 for any shape topologically equivalent to a sphere, but
drops to 0 for a torus (donut) and keeps decreasing by 2 for each
additional hole.

**Accuracy check:** verified via WebSearch — one query returned a summary
drawing on sources including MacTutor-style histories, "Euler's Gem" (David
Richeson's book on the formula, Princeton University Press) summaries, and
David Eppstein's "Twenty-one Proofs of Euler's Formula" page, confirming
the 1537 Maurolico precedent, 1630s Descartes near-miss (discrete
Gauss-Bonnet form), and Euler's 1750 statement / 1752 publication with a
faulty induction proof. A second query confirmed the formula holds for all
convex polyhedra (not just Platonic solids) and that the Euler
characteristic changes for shapes with holes (e.g. torus). The V, E, F
counts for all five Platonic solids in the image were computed directly
from 3D coordinates in the plotting script (via pairwise distances to
detect true polyhedron edges) and asserted equal to the textbook values
4/6/4, 8/12/6, 6/12/8, 20/30/12, 12/30/20 — not just hardcoded as text.

**Different topic from this morning's run** (which covered Fermat's Last
Theorem) and from every other topic in the repo's history (checked every
`**Topic:**` line via grep across all notes.md files — Euler's polyhedron
formula has not been used before).

**Media:** eulers_formula.png (1200x675, dark theme) — five 3D wireframe
Platonic solids side by side, each labeled with its V/E/F counts and the
arithmetic showing the sum equals 2, plus a historical footnote and the
torus counterexample mentioned in text. Included a GIF:
eulers_formula.gif (600x338, ~12.5fps, 72 frames, ~5.8s, built with
matplotlib FuncAnimation + PillowWriter, 666KB) — orbits the camera around
a rotating dodecahedron wireframe with an in-frame title and a
V=20, E=30, F=12 → 20−30+12=2 caption overlay; verified frame-by-frame via
PIL Image.seek() that distinct frames are genuinely different renders (not
a static image saved repeatedly). GIF included.

**Sources:**
- https://ics.uci.edu/~eppstein/junkyard/euler (Twenty-one Proofs of Euler's Formula)
- https://en.wikipedia.org/wiki/Euler_characteristic
- Descartes/Maurolico/Euler history corroborated via WebSearch summary citing Richeson's "Euler's Gem" (Princeton University Press)

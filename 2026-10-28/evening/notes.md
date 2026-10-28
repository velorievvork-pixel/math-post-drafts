# Evening post — 2026-10-28

**Topic:** Hilbert's Third Problem and the Dehn invariant. In 1900,
David Hilbert asked (as the third of his famous 23 problems): given
two polyhedra of equal volume, can one always be cut into finitely
many polyhedral pieces that can be reassembled into the other
("scissors congruence")? In 2D this is always possible (the
Bolyai-Gerwien theorem). In 3D, Hilbert's student Max Dehn answered
no in 1901 (paper "Ueber den Rauminhalt"), inventing the Dehn
invariant: a quantity built from each edge's length tensored with
its dihedral angle (mod rational multiples of pi), which must be
preserved by any dissection. A cube has all dihedral angles = 90
degrees, so its Dehn invariant is exactly 0. A regular tetrahedron
has all dihedral angles = arccos(1/3) ~= 70.53 degrees, and since
arccos(1/3)/pi is irrational, its Dehn invariant is nonzero. Since
equal volume alone isn't enough (the invariant differs), a cube and
an equal-volume regular tetrahedron can never be dissected into one
another, no matter how many pieces are used. This was the first of
Hilbert's 23 problems to be resolved. (Sydler proved in 1965 that
volume + Dehn invariant together are sufficient to fully determine
scissors-congruence in 3D.)

**Different topic from the morning post** — the morning post
(2026-10-28/morning) covered the Look-and-Say sequence / Conway's
constant, a completely different area of math (combinatorics on
words / integer sequences, not geometry/dissection theory).

**Topic check:** Grepped every `**Topic:**` line across the repo's
full history (Sept 10 - Oct 28, 2026, 110+ prior posts, including
today's morning post). Hilbert's Third Problem / Dehn invariant /
scissors congruence has not been used before. Related-but-distinct
topics already covered: Euler's Polyhedron Formula (different
polyhedron fact), Kepler's Conjecture / sphere packing (different
3D geometry optimization problem), the Apollonian Gasket (different
dissection-adjacent but unrelated construction).

**Accuracy check:** Verified via WebSearch across independent
sources:
- Wikipedia, "Hilbert's third problem" and "Dehn invariant" articles
  (surfaced via search snippets) — confirm the problem statement,
  Dehn's 1901 paper "Ueber den Rauminhalt," the invariant's
  definition (edge length tensor dihedral angle in R tensor R/piZ),
  that the cube's invariant is 0 and the tetrahedron's is nonzero,
  and Sydler's 1965 completeness result.
- Search results confirming the regular tetrahedron's dihedral angle
  is arccos(1/3) and that arccos(1/3)/pi is irrational (so the angle
  is not a rational multiple of pi), which is why the tensor term
  doesn't vanish.
- Search results (via multiple seminar/course notes citing the
  standard history, e.g. MIT 18.701 lecture notes, Stillwell's
  account) confirming Hilbert's third problem, though numbered 3 of
  23, was the FIRST of Hilbert's 23 problems to be solved (within
  about a year of Hilbert posing it in his 1900 Paris ICM address).
Exact numeric values (arccos(1/3) ~= 70.53 degrees, dihedral angle
of cube = 90 degrees) and the geometric diagrams were independently
computed/constructed in this session.

**Assets:**
- `hilbert_third_problem.png` (1200x675, dark theme, two panels) —
  left: a cube with its 90-degree dihedral angles and zero Dehn
  invariant; right: a regular tetrahedron with its arccos(1/3)
  dihedral angles and nonzero Dehn invariant; caption explains the
  1901 result and that it was the first of Hilbert's 23 problems
  solved.
- `hilbert_third_problem.gif` (600x338, 12fps, 6s, ~810KB, built
  with matplotlib FuncAnimation + PillowWriter) — rotates the cube
  and tetrahedron in 3D side by side, cycling captions explaining
  each shape's dihedral angle and the "never cuttable into each
  other" conclusion. GIF included: yes.

**Sources:**
- Wikipedia, "Hilbert's third problem" (en.wikipedia.org)
- Wikipedia, "Dehn invariant" (en.wikipedia.org)
- MIT 18.701 (Algebra I) lecture notes, Fall 2021, lecture 35
  (ocw.mit.edu) — historical/mathematical confirmation
- Additional seminar/course abstracts confirming Sydler's 1965
  result and the "first of the 23 solved" historical claim

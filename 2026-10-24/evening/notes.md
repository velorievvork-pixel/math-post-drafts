# Evening post — 2026-10-24

**Topic:** The Kissing Number Problem in 3D. How many unit spheres can
simultaneously touch ("kiss") one central unit sphere without
overlapping? In 3D the answer is exactly 12, with the 12 spheres sitting
at the vertices of a regular icosahedron around the center. This was
the subject of a famous 1694 dispute between Isaac Newton and David
Gregory: Newton believed the max was 12, while Gregory thought a 13th
sphere might squeeze in (the 12 outer spheres don't touch each other,
leaving "loose" gaps that make 13 look tempting). Newton turned out to
be right, but a fully rigorous proof wasn't found until 1953 (Schütte
and van der Waerden); simpler/alternate proofs followed later (e.g.
Leech, and Musin in 2006 extending the Delsarte method, used also to
settle the 4D case = 24 in 2003). This is a distinct, separate concept
from sphere-packing density (Kepler's Conjecture, already covered) and
from the 8D/24D sphere-packing result (Viazovska, already covered) —
kissing number counts touching neighbors, not packing density.

**Different topic from recent days** — checked every `**Topic:**` line
across the full repo history via grep (Sept–Oct, 90+ prior posts,
including this morning's Ramsey's Theorem post). The kissing number
problem has not been used before; distinct from related-but-different
previously-covered topics (Kepler's Conjecture / sphere packing,
sphere packing in 8 & 24 dimensions, the Hadwiger–Nelson problem).

**Accuracy check:** Verified via WebSearch (Wikipedia "Kissing number",
MathsCareers.org.uk "The kissing number", and Musin's paper/lecture
notes referencing the 1694 Newton–Gregory dispute dated May 4, 1694,
the flawed 1874 Hoppe attempt, and the first fully rigorous proof by
Schütte & van der Waerden in 1953).

**Visuals:** Static PNG — a central orange sphere surrounded by 12
colored spheres at icosahedron vertices, rendered with matplotlib 3D
(orthographic projection for true round spheres), dark background,
title + caption text. GIF included — a 60-frame, 12fps rotating version
of the same 3D arrangement (600x338, ~957KB) with title/caption text
overlaid in each frame.

# Evening post — 2026-10-09

**Topic:** The Spiral of Theodorus (also called the square root spiral or
Pythagorean spiral). Build it from right triangles placed edge to edge:
start with an isosceles right triangle of legs 1, giving hypotenuse √2;
each next triangle uses the previous hypotenuse as one leg and adds
another leg of length 1, so its hypotenuse is √3, √4, √5, … Theodorus of
Cyrene (a Greek mathematician Plato places in the dialogues *Theaetetus*,
*Sophist*, and *Statesman*, lived roughly the 5th century BC) is recorded
by Plato as having proven that the square roots of 3, 5, 7, … up to 17 are
irrational — and then, "for some reason," stopped at √17. The most
popular modern explanation (traced to a 1918 proposal by J. H. Anderhub,
and discussed in a Purdue paper by W. Gautschi) is geometric: the 17th
triangle's hypotenuse line can be drawn back toward the origin without
crossing the rest of the figure, but the 18th cannot — by then the spiral
has swept past a full 360° turn (cumulative angle ≈351° after 16
triangles, ≈365° after 17) and later triangles start to overlap earlier
ones. This is presented honestly as the leading *hypothesis*, not a
certainty — historians of mathematics (and Plato's own "for some reason")
note the true reason Theodorus stopped is still unresolved; a rival theory
notes Theodorus used up the odd numbers 1–9 covering roots up to 17 under
Pythagorean numerological conventions. Also noted in the research: the
"Spiral of Theodorus" as a smooth/continuous curve is itself a later
(20th-century) naming convention per numerical analyst Walter Gautschi —
what Theodorus himself drew was more likely a simpler angular figure.

**Accuracy check:** verified via WebSearch cross-referencing the Wikipedia
articles "Spiral of Theodorus" and "Theodorus of Cyrene", Gautschi's 2010
Journal of Computational and Applied Mathematics paper, a Purdue
University PDF (cs.purdue.edu) discussing the overlap-at-17 geometry and
citing Anderhub's 1918 proposal, and a DTIC (Defense Technical Information
Center) paper noting that explanation is not universally accepted. The
cumulative-angle figures (≈351° at n=16, ≈365° at n=17) were independently
recomputed in the chart script via numpy as cumsum(arctan(1/sqrt(n)) in
degrees) rather than only asserted from search results, and match the OEIS
A072895 commentary (citing Nahin) referenced in search results. Plato's
Theaetetus is the primary ancient source for the "proved up to √17, then
stopped for some reason" claim.

**Different topic from today's morning post** (sphere packing / E8 lattice
/ Maryna Viazovska — see `../morning/notes.md`) and from all prior
September/October posts in this repo's history (checked every `**Topic:**`
line; no prior post covered the Spiral of Theodorus, square-root
irrationality proofs, or ancient Greek geometry of this kind).

**Media:** spiral_of_theodorus.png (1200x675, dark theme) — left panel:
the actual geometric construction of the spiral (17 right triangles,
color-gradient fill, labeled √1, √4, √9, √16, √17 spokes); right panel: a
bar chart of cumulative angle swept per triangle (1 through 20), showing
the 360° full-turn line and highlighting triangle 17 (amber) and the
triangles after it (red) that begin to overlap. Plus
spiral_of_theodorus.gif (600x338, 4fps nominal / 17 encoded frames after
GIF duplicate-frame collapsing, ~6.75s total incl. a held final frame,
built with matplotlib FuncAnimation + PillowWriter, ~150KB) — animates the
spiral growing triangle-by-triangle from √2 to √18, with a live
"triangle n of 17 — hypotenuse = √(n+1)" caption and a closing caption
about Theodorus stopping at √17. GIF included.

**Sources:**
- https://en.wikipedia.org/wiki/Spiral_of_Theodorus
- https://en.wikipedia.org/wiki/Theodorus_of_Cyrene
- Gautschi, W. (2010), "The spiral of Theodorus, numerical analysis, and
  special functions," Journal of Computational and Applied Mathematics
- https://www.cs.purdue.edu/homes/wxg/selected_works/section_13/197.pdf
  (overlap-at-17 geometric argument, citing Anderhub 1918)
- Plato, *Theaetetus* (primary ancient source)

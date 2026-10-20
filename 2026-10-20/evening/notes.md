# Evening post — 2026-10-20

**Topic:** Pick's Theorem. In 1899, Austrian mathematician Georg Alexander
Pick published an eight-page paper ("Geometrisches zur Zahlenlehre",
Prague) showing that for any simple polygon whose vertices all sit on
integer lattice points, the area is exactly A = I + B/2 - 1, where I is
the number of lattice points strictly inside the polygon and B is the
number of lattice points on its boundary. No matter how wild or
non-convex the polygon's shape is, counting dots gives you the exact
area — no calculus, no trigonometry, just addition and division by 2.
The theorem went almost unnoticed for 70 years until Hugo Steinhaus
popularized it in his 1969 book *Mathematical Snapshots*, after which it
became a staple of recreational and combinatorial geometry. Pick himself
has a tragic history: a professor at the German University of Prague, he
retired to Vienna in 1927, was swept up in the Holocaust after the Nazi
annexation, and died at the Theresienstadt concentration camp on 26 July
1942 — decades before his own theorem reached wide recognition.

**Accuracy check:** Verified via WebSearch against MacTutor History of
Mathematics (mathshistory.st-andrews.ac.uk/Biographies/Pick), Wikipedia's
"Georg Alexander Pick" article, and ProofWiki's "Pick's Formula" /
"Mathematician:Georg Alexander Pick" pages — all confirm the 1899
publication, the A = I + B/2 - 1 formula, the Steinhaus 1969
popularization via *Mathematical Snapshots*, and the 26 July 1942
Theresienstadt death date. The static image's own worked example (an
11-vertex non-convex lattice polygon, I=47, B=12) was cross-checked
against the shoelace formula: both give area = 52, confirming the
illustration itself is numerically correct.

**Topic check:** Searched every `**Topic:**` line across the full repo
history (all September and October notes.md files, including this
morning's "sum of three cubes for 42" post) — Pick's Theorem has not
been covered before.

**Assets:**
- `picks_theorem.png` — static graphic: an irregular lattice polygon
  with interior points (orange dots) and boundary points (cream
  squares) marked, next to the formula and the worked arithmetic
  (47 + 12/2 - 1 = 52).
- `picks_theorem.gif` — animated version (~5s, 12fps, 600x338): lattice
  points fill in one by one as the polygon's area is tallied live,
  ending on the final count and formula. Included.

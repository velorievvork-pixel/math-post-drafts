# Evening post — 2026-11-04

**Topic:** The Sylvester–Gallai Theorem. For any finite set of points in
the plane that are not all on a single line, there must exist a line
passing through exactly two of them — an "ordinary line." J. J.
Sylvester posed the question in 1893 in the Educational Times; it went
unsolved for ~40 years. Melchior gave an early projective proof in
1941 (later queried as incomplete). Paul Erdős independently re-posed
the problem in 1943, apparently unaware it was 50 years old, and Tibor
Gallai proved it in 1944 — giving the theorem its modern name (first
used in print by Leonard Blumenthal in 1954). A natural follow-up
question — how FEW ordinary lines can such a point set have? — was
conjectured by Dirac and Motzkin (likely at least n/2 for n points) and
finally proved for large n by Ben Green and Terence Tao in 2013, using
a structure theorem showing point sets with few ordinary lines must lie
mostly on a cubic curve.

**Different topic from this morning** (Tower of Hanoi) and from the
repo's full history — grepped every `**Topic:**` line across all prior
posts (Sept 10 – Nov 4 morning, 2026, 125+ prior posts). Sylvester–
Gallai has never been used before. Related-but-distinct prior topics:
Morley's Trisector Theorem, Napoleon's Theorem, Pick's Theorem, the
"Happy Ending problem" (Erdős–Szekeres), Ramsey's theorem R(3,3) — none
cover this specific incidence-geometry result about ordinary lines.

**Accuracy check:** Verified via WebSearch across independent sources:
- Wikipedia, "Sylvester–Gallai theorem" — confirms Sylvester's 1893
  question in the Educational Times, Melchior's 1941 proof (later
  noted as incomplete by some accounts), Erdős's 1943 re-statement,
  Gallai's 1944 proof (published as a solution to Problem 4065 in the
  American Mathematical Monthly), and Blumenthal's 1954 naming of the
  theorem in a review.
- Search results note one minor discrepancy in some sources (a
  competing claim crediting Grünwald with the first fully correct 1944
  proof instead of Gallai) — the post follows the standard, more widely
  cited attribution to Gallai, consistent with Wikipedia and the
  theorem's name.
- Green & Tao, "On Sets Defining Few Ordinary Lines," Discrete Comput.
  Geom. 50 (2013): 409–468 (arXiv:1208.4714) — confirms the 2013 proof
  of the Dirac–Motzkin conjecture (≥ n/2 ordinary lines for large n)
  via a structure theorem, and that the same paper resolved the related
  "orchard problem."

**Assets:**
- `sylvester_gallai.png` (1200x675, dark theme, two panels) — left: 9
  points in general position with every connecting line drawn faintly
  and one "ordinary line" (through exactly 2 points) highlighted in
  orange; right: the theorem statement plus a 1893→2013 timeline
  (Sylvester, Melchior, Erdős, Gallai, Green–Tao).
- `sylvester_gallai.gif` (600x338, 12fps, 38 unique frames after
  Pillow's duplicate-frame merging, ~5.2s loop, ~245KB, built with
  matplotlib FuncAnimation + PillowWriter) — draws every connecting
  line between the 9 points one at a time, then highlights one
  ordinary line in orange with a captioned lower-third explaining the
  concept, ending on "a non-collinear point set ALWAYS has one —
  guaranteed!" GIF included: yes.

**Sources:**
- Wikipedia, "Sylvester–Gallai theorem"
  (en.wikipedia.org/wiki/Sylvester%E2%80%93Gallai_theorem)
- Ben Green, Terence Tao, "On Sets Defining Few Ordinary Lines,"
  Discrete & Computational Geometry 50 (2013): 409–468
  (arXiv:1208.4714)

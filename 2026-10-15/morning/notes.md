# Morning post — 2026-10-15

**Topic:** The "Happy Ending problem" (Erdős–Szekeres theorem). Esther
Klein posed a puzzle to her Budapest friends in 1933: given any 5 points
in the plane in "general position" (no 3 collinear), show that 4 of them
always form the vertices of a convex quadrilateral. Paul Erdős and George
Szekeres found and published the proof, and named it the "happy ending
problem" because the collaboration led Klein and Szekeres to marry (in
1937). Erdős and Szekeres went on to conjecture a general pattern:
g(n) = 2^(n-2) + 1 points in general position always force n of them
into convex position, and that this bound is tight (a set of exactly
2^(n-2) points with no convex n-gon exists). The conjecture is proven
exactly only for n = 4 (g=5, the original puzzle), n = 5 (g=9), and
n = 6 (g=17, confirmed by Szekeres & Peters via an exhaustive computer
search). For n ≥ 7 it remains an open problem — only upper and lower
bounds are known (Andrew Suk showed in 2016/2017 that the true growth
rate nearly matches the conjectured 2^(n-2), i.e. ES(n) = 2^(n+o(n)),
but the exact conjecture is still unproved).

**Different topic from recent days** — grepped every `**Topic:**` line
across all notes.md files in this repo's history (September and October
posts). The happy ending problem / Erdős–Szekeres theorem has not been
used before. Distinct from prior combinatorics/geometry posts (pigeonhole
principle, Ramsey-theory-flavored Graham's number post, Ulam spiral,
Napoleon's theorem, Fermat point, squaring the square), none of which
overlap with this specific convex-position result.

**Accuracy check:** WebSearch cross-verified against Wikipedia's "Happy
ending problem" article, a Scientific American piece on its history
("How the 'happy ending problem' launched a new branch of math — and a
romance"), and academic/arXiv sources on the Erdős–Szekeres conjecture
(including papers discussing the n=6 computer-assisted proof by Szekeres
& Peters, and Suk's near-tight asymptotic result). Confirmed the exact
formula g(n) = 2^(n-2)+1 and the specific values g(4)=5, g(5)=9, g(6)=17
via an independent arXiv source on the Erdős–Szekeres convex polygon
problem, rather than trusting a single search snippet (an early snippet
mis-rendered the formula as "2(n-2)+1", which was caught and corrected
against the arXiv source before use). The claim that the conjecture is
unproven for n≥7 and that only bounds are known was confirmed by two
independent sources. The 5-point example used in the image/GIF is an
explicit, fixed point set (no 3 collinear, verified by code checking all
C(5,4)=10 four-point subsets for convex position) — not a hand-picked or
unverified claim; the one convex-position subset shown was found
programmatically, not asserted.

**Visuals:** Static PNG (`happy_ending.png`, 1200x675, dark theme, two
panels) — left: a concrete 5-point configuration with the (programmatically
found) convex quadrilateral among them shaded; right: a log-scale bar
chart of the conjectured g(n) = 2^(n-2)+1 values for n=3..8, color-coded
to show which are proven (n≤6, green) vs. only conjectured (n≥7, orange),
with a note on the n=6 computer-assisted proof. A GIF was also included
(`happy_ending.gif`, 600x338, nominal 12fps, 9 encoded frames after
duplicate-frame collapsing, ~7.5s, ~94KB, built with matplotlib
FuncAnimation + PillowWriter) — animates testing each of the 10
four-point subsets of the same 5 points in turn (highlighting the tested
quadrilateral in purple/orange for non-convex, green when convex is
found), with an in-frame lower-third caption, ending on the message that
the puzzle's solving led to Klein and Szekeres's marriage. GIF included:
yes.

**Sources:**
- https://en.wikipedia.org/wiki/Happy_ending_problem
- https://www.scientificamerican.com/article/how-the-happy-ending-problem-launched-a-new-branch-of-math-and-a-romance/
- https://arxiv.org/pdf/1604.08657 ("On the Erdős–Szekeres convex polygon problem")
- https://arxiv.org/pdf/1511.02334 (background on the conjecture's formula and known bounds)

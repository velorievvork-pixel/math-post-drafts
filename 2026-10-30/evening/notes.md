# Evening post — 2026-10-30

**Topic:** Catalan numbers, illustrated via polygon triangulations. A
convex (n+2)-gon can be cut into triangles by non-crossing diagonals in
exactly C_n ways, where C_n = (1/(n+1)) * C(2n, n) (1, 1, 2, 5, 14, 42,
132, 429, 1430, 4862, ...). A hexagon (n=4) has exactly 14 triangulations.
History: Euler posed the counting problem to Goldbach in a 1751 letter
and conjectured the closed-form product; Euler then passed the
triangulation problem to Johann Segner, whose 1758 recurrence supplied
the missing piece needed for a full proof (a complete, rigorous proof
wasn't published until Lamé in 1838). Eugène Charles Catalan wrote the
formula in its factorial/binomial form in 1838 and showed it also counts
balanced bracketings — but Catalan himself called these "Segner
numbers." The name "Catalan number" was coined only in 1948, by John
Riordan, and popularized in Riordan's 1968 book. (A separate curiosity:
18th-century Mongolian/Qing mathematician Ming Antu's 1730s trigonometric
series work contains coefficients that are Catalan numbers, but this was
only recognized in 1988 by Luo Jianjin, long after the fact — not used
as a claim of independent discovery in the post itself, kept to these
notes.)

**No repeat of this or the prior run's date folder** — there is no
2026-10-30/morning (the morning run did not fire today; no notes to
check for same-day duplication). Grepped every `**Topic:**` line across
the repo's full history (Sept 10 - Oct 28, 2026, 106 prior posts).
Catalan numbers / polygon triangulations have not been used before.
Related-but-distinct prior topics: the Chicken McNugget Theorem (Frobenius
coin problem, different combinatorics), Ramsey's Theorem R(3,3)=6
(different counting/party problem), Pascal's Triangle mod 2 (different
combinatorial structure), the Fibonacci spiral (different integer
sequence). None overlap with Catalan numbers or triangulation counting.

**Accuracy check:** Verified via WebSearch across independent sources:
- Igor Pak, "History of Catalan numbers" (arXiv:1408.5711) — confirms
  Euler's 1751 letter to Goldbach posing the triangulation-counting
  problem and conjecturing the formula; Euler passing the problem to
  Segner; Segner's 1758 recurrence; that a complete rigorous proof
  wasn't published until roughly 80 years later (Lamé, 1838); that
  Catalan wrote the factorial-form formula in 1838 and called the
  numbers "Segner numbers"; John Riordan's 1948 coining and 1968 book
  popularizing the name "Catalan number"; and the Ming Antu
  trigonometric-series connection only recognized in 1988 by Luo
  Jianjin (noted as a separate, later-recognized appearance, not a
  priority claim).
- Corroborating talk slides citing the same history: Armstrong,
  "Story of Catalan" (math.miami.edu) and Stanley's Catalan numbers
  talk transparencies (klein.mit.edu/~rstan).
The 14 triangulations of the hexagon shown in both images, the
Catalan number values 1 through 4862 (n=0..9), and the formula
C_n = (1/(n+1))*C(2n,n) were independently generated/verified by exact
computation in this session (Python: a standard recursive polygon-
triangulation enumeration, verified to produce exactly 14 distinct
triangulations for n=4; and direct evaluation of the binomial formula),
not sourced from an external image.

**Assets:**
- `catalan_numbers.png` (1200x675, dark theme, two panels) — left: all
  14 triangulations of a hexagon laid out in a 4x4 grid; right: a
  log-scale plot of C_0..C_9 with the closed-form formula and a caption
  giving the Euler/Segner/Catalan/Riordan history.
- `catalan_triangulations.gif` (600x338, 13fps, ~7.3s, ~256KB, built
  with matplotlib FuncAnimation + PillowWriter) — cycles through all 14
  triangulations of a hexagon, drawing each one's diagonals in before
  holding briefly, with a live "triangulation n / 14" counter and a
  captioned title/formula. GIF included: yes.

**Sources:**
- Igor Pak, "History of Catalan numbers" (arXiv:1408.5711,
  arxiv.org/pdf/1408.5711)
- Drew Armstrong, "Story of Catalan" (math.miami.edu/~armstrong/Talks/Story_of_Catalan.pdf)
- Richard Stanley, Catalan numbers talk transparencies (klein.mit.edu/~rstan)

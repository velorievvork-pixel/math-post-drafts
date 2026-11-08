# Morning post — 2026-11-08

**Topic:** The P vs NP problem. Asks whether every problem whose solution
can be *verified* quickly (in polynomial time) can also be *solved*
quickly (in polynomial time) from scratch. Formally posed by Stephen
Cook in his 1971 paper "The Complexity of Theorem Proving Procedures,"
which also proved Boolean satisfiability (SAT) is NP-complete — the
first known NP-complete problem, which let researchers prove thousands
of others NP-complete by reduction. Leonid Levin independently reached
closely related results in 1973 (hence "Cook–Levin theorem"). It is one
of the seven Clay Mathematics Institute Millennium Prize Problems
(2000), each carrying a $1,000,000 prize; it remains unsolved, and in a
2018/2019-style poll of experts, the overwhelming majority (99%) believe
P ≠ NP, though this is belief, not proof.

**Different topic from recent days / history check:** Grepped every
`**Topic:**` line across the repo's full history (2026-09-10 through
2026-11-06, 119+ prior posts — note 2026-11-07 appears to have been
skipped entirely, no folder exists for that date). The Riemann
Hypothesis (a different Millennium Prize problem) was covered before,
but P vs NP itself, Cook–Levin, NP-completeness, and SAT have never
been used. Confirmed fresh topic.

**Accuracy check:** Verified via WebSearch across independent sources
(Wikipedia "P versus NP problem", Wikipedia "Stephen Cook"):
- Cook's 1971 paper formalized the question and proved SAT is
  NP-complete, giving the field its first NP-complete problem.
- Leonid Levin independently obtained closely related results
  (sources differ slightly on exact year, 1971 vs. 1973, for Levin's
  publication; the post itself only states Cook's well-attested 1971
  date to avoid the ambiguity).
- P vs NP is one of the seven Clay Millennium Prize Problems, each
  worth $1,000,000 (Poincaré Conjecture, the other Millennium problem
  already solved, was proved by Perelman and covered in this repo
  before as a separate topic).
- A poll of complexity theorists found ~99% belief that P ≠ NP, which
  several sources describe as the clear majority view without this
  counting as a proof.

**Assets:**
- `pvsnp_complexity.png` (1200x675, dark theme, two panels) — left: a
  Venn-style diagram of P ⊆ NP with the NP-complete region (SAT,
  Traveling Salesman, Subset Sum, Sudoku) shown separate from P
  (Sorting, Shortest Path, Prime Testing), with the open "P = NP?"
  question and Millennium Prize note; right: a log-scale plot of the
  Subset Sum problem showing brute-force solving (2^n subsets) exploding
  exponentially versus verifying one candidate answer (a flat, constant
  number of additions) as n grows from 5 to 40.
- `pvsnp_subsetsum.gif` (600x338, 12fps, 61 frames after Pillow's
  duplicate-frame merging, ~5s loop, ~405KB, built with matplotlib
  FuncAnimation + PillowWriter) — animates a concrete 8-number Subset
  Sum instance: the left panel cycles through "trying" different
  subsets (captioned "SOLVING: trying subset # of 256..."), the right
  panel shows one fixed candidate answer being verified; both resolve
  together to the correct 3-number solution summing to the target,
  with a caption contrasting the exponential brute-force search against
  the trivial one-addition verification. GIF included: yes.

**Sources:**
- Wikipedia, "P versus NP problem" (en.wikipedia.org/wiki/P_versus_NP_problem)
- Wikipedia, "Stephen Cook" (en.wikipedia.org/wiki/Stephen_Cook)

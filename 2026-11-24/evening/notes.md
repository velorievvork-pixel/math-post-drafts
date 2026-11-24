# Evening post — 2026-11-24

**Topic:** 1729, the Hardy–Ramanujan number. In 1918, G. H. Hardy
visited a hospitalized Srinivasa Ramanujan and mentioned the number of
his taxicab, 1729, calling it "rather a dull one." Ramanujan replied
that it was actually "a very interesting number": the smallest number
expressible as the sum of two positive cubes in two different ways —
1³ + 12³ = 1 + 1728 = 1729, and 9³ + 10³ = 729 + 1000 = 1729. This gave
rise to the "taxicab numbers" Ta(n): the smallest integer expressible
as a sum of two positive cubes in n distinct ways. Ta(1) = 2 (1³+1³),
Ta(2) = 1729, and Ta(3) = 87,539,319 (discovered by hand by E. Rosser
and J. Leech in 1955, and independently confirmed later).

**Different topic from this morning / repo-wide:** This morning's post
(2026-11-24/morning) covered the Thue–Morse sequence. Grepped every
`**Topic:**` line across the full repo history (2026-09-10 through
2026-11-24 morning, 151 prior posts) — 1729 / the taxicab-number story
has not been covered before. It is unrelated to any prior post (no
overlap with number-theory posts like the Collatz conjecture, Graham's
Number, Cantor's diagonal argument, Apéry's theorem, or the Dottie
number — none of those concern sums of two cubes or taxicab numbers).

**Accuracy check:** Verified via WebSearch across independent sources:
the Wikipedia articles "1729 (number)" and "Taxicab number," MathWorld's
"Hardy-Ramanujan Number" entry, OEIS sequence A001235 (taxicab numbers),
and the n-Category Café post "Hardy, Ramanujan and Taxi No. 1729" (which
discusses the anecdote's nuance but confirms the core facts and
numbers). All sources agree on: the 1918 hospital-visit anecdote and
Hardy's own account of it; the two cube decompositions of 1729; and
Ta(3) = 87,539,319. The arithmetic (1³+12³=1729, 9³+10³=1729,
167³+436³=228³+423³=255³+414³=87,539,319) was additionally asserted
directly in the image scripts via Python (exact integer equality, no
approximation).

**Visuals:**
- `taxicab_1729.png` (1200x675, dark theme, three panels) — left: the
  "1729" headline, the Hardy–Ramanujan hospital-visit story, the two
  cube equations, the taxicab-number generalization, and sources;
  middle: two 3D panels rendering the actual cubes (12³ with a barely-
  visible 1³ cube beside it; 9³ and 10³ side by side) to the same
  relative scale within each panel; right: a log-scale bar chart of the
  four cube volumes (1, 1728, 729, 1000) with a dashed line marking that
  both pairs sum to exactly 1729.
- `taxicab_1729.gif` (600x338, 12fps, ~6.7s, matplotlib FuncAnimation +
  PillowWriter, ~520KB) — cubes grow one at a time (12³, then 1³, hold
  on "1729"; then 9³, then 10³, hold on "1729") with a captioned lower-
  third narrating each step, ending on "1729: smallest sum of 2 cubes,
  2 ways." GIF included: yes.

**Sources:**
- Wikipedia, "1729 (number)" and "Taxicab number"
- MathWorld, "Hardy-Ramanujan Number"
- OEIS, sequence A001235 (taxicab numbers)
- The n-Category Café, "Hardy, Ramanujan and Taxi No. 1729"

# Evening post — 2026-10-26

**Topic:** The Chicken McNugget Theorem (the Frobenius coin problem
for three denominations). Given nugget box sizes 6, 9, and 20, what is
the largest total number of nuggets that *cannot* be made by any
non-negative combination 6x + 9y + 20z? The answer is 43 — every
integer greater than 43 can be assembled from boxes of 6, 9, and 20,
but 43 itself cannot. (For just two coprime box sizes a and b, there
is a closed-form answer: the largest unreachable total is ab − a − b;
e.g. for 9 and 20 alone it's 151. With three sizes like 6, 9, 20 there
is no general closed-form formula, so the result is established by
case analysis / computation rather than a single formula.) This is a
special case of the general Frobenius coin problem / postage stamp
problem in number theory. The "Chicken McNugget" name and its most
common box-size framing (6, 9, 20) trace to math teacher Henri
Picciotto, who devised it in the 1980s while eating at McDonald's with
his son, worked it out on a napkin, and is credited with publishing it
as a puzzle in Games Magazine in 1987 before including it in an
algebra textbook he co-authored with Anita Wah. Since then McDonald's
nugget box sizes have changed repeatedly (4-piece Happy Meal boxes
exist today), which would itself change the answer to the puzzle (with
a box of 4 available, the largest unreachable number drops sharply,
e.g. to 11 if only 4 and 6 were offered) — a fun illustration that the
"theorem" answer depends entirely on which box sizes are on the menu.

**Different topic from recent days / full history** — grepped every
`**Topic:**` line across the repo's full history (Sept 10 – Oct 26,
2026, 100+ prior posts) plus specifically checked today's morning post
(2026-10-26/morning, which covered Julia sets and the Mandelbrot
set's connectedness dichotomy — unrelated to this). Also searched the
full history for "Frobenius", "McNugget", "coin problem", "postage
stamp problem" — no exact match found (two unrelated incidental hits
for "Erdos"/"Catalan" strings in other posts' sourcing text, not this
topic). This is a new topic not covered before.

**Accuracy check:** Verified via WebSearch across independent sources:
- cs.uwaterloo.ca/~shallit/Talks/frob6.pdf (Jeffrey Shallit's slides)
  — confirms 43 is the Frobenius number for {6, 9, 20}, with the
  case-by-case argument (residues mod 6, checking 43 and showing
  44–49 are all reachable).
- Brilliant.org, "Postage Stamp Problem / Chicken McNugget Theorem" —
  confirms the two-variable closed form ab − a − b for coprime a, b,
  and that it gives 151 for the {9, 20} case; confirms no general
  closed-form formula exists for 3+ denominations.
- Wikipedia, "Coin problem" — standard reference for the Frobenius
  number / Chicken McNugget theorem terminology and the two-variable
  formula.
- Art of Problem Solving wiki, "Chicken McNugget Theorem" /
  "Postage Stamp Problem" — corroborates the 6/9/20 framing and the
  151 answer for the classic two-box (9, 20) version of the puzzle.
- futilitycloset.com and kechg.org.uk (UK school maths newsletter PDF)
  — corroborate Henri Picciotto's authorship, the 1980s McDonald's
  origin story with his son, the napkin calculation, and the 1987
  Games Magazine appearance; note McNugget box sizes have since
  changed (the modern 4-piece Happy Meal size would change the answer
  to 11 if only 4 and 6 were available).
The grid in the image (numbers 0–55, green = buyable from 6/9/20,
red = not buyable, gold = 43 highlighted) was computed directly in
this session via a standard dynamic-programming reachability check
(reachable[n] = true if n−6, n−9, or n−20 is reachable), not sourced
from an external image — verified against the 43 result above.

**Assets:**
- `chicken_mcnugget_theorem.png` (1200×675, dark theme) — grid of
  numbers 0–55, color-coded buyable (green) vs. impossible (red) as a
  combination of 6, 9, and 20, with 43 highlighted in gold as the
  largest impossible total, plus a legend and explanatory caption.
- `chicken_mcnugget_fill.gif` (600×338, 14fps, ~5.6s, built with
  matplotlib FuncAnimation + PillowWriter, ~430KB) — animates the grid
  filling in cell-by-cell from 0 to 55 (green/red reveal with a live
  "Checking n: 6x+9y+20z = n ?" caption), then holds on the final
  state with 43 highlighted in gold and a closing caption. GIF
  included: yes.

**Sources:**
- Jeffrey Shallit, Frobenius number slides
  (cs.uwaterloo.ca/~shallit/Talks/frob6.pdf)
- Brilliant.org, "Postage Stamp Problem / Chicken McNugget Theorem"
  (brilliant.org/wiki/postage-stamp-problem-chicken-mcnugget-theorem)
- Wikipedia, "Coin problem" (en.wikipedia.org/wiki/Coin_problem)
- Art of Problem Solving wiki, "Chicken McNugget Theorem"
  (artofproblemsolving.com/wiki/index.php/Chicken_McNugget_Theorem)
- Futility Closet, "No Sale" (futilitycloset.com/2023/10/09/no-sale-2)
- KECHG school maths newsletter PDF on the McNugget problem
  (kechg.org.uk)

# Evening post — 2026-11-12

**Topic:** The Stable Marriage Problem and the Gale–Shapley algorithm
("deferred acceptance" / "propose and reject"). A matching between two
equal-sized groups is "stable" if no unmatched pair would both rather
swap in and leave their current partners. David Gale and Lloyd Shapley
proved in 1962 (*American Mathematical Monthly*) that a stable matching
always exists, and gave a simple constructive algorithm: proposers
offer to their top remaining choice each round; a receiver holds the
best offer so far and rejects the rest; rejected proposers move down
their list and try again. It terminates in at most n² proposals. In
1984 economist Alvin Roth discovered that U.S. hospitals had been
running essentially the same algorithm since the early 1950s (the
National Resident Matching Program) to match new doctors to
residencies, well before Gale and Shapley's paper. Shapley and Roth
shared the 2012 Nobel Memorial Prize in Economic Sciences "for the
theory of stable allocations and the practice of market design"; Gale
had died in 2008 and so was ineligible. Variants of the algorithm are
now used for matching students to schools (e.g. NYC and Boston public
school choice) and in kidney-exchange programs.

**Different topic from today's morning post:** Morning post was
Buffon's Needle (needle-drop probability / Monte Carlo estimate of π).
Checked that notes.md and confirmed Stable Marriage / Gale–Shapley is
unrelated.

**Checked against prior posts:** Surveyed all 128 prior `notes.md`
"Topic:" lines across the full repo history (2026-09-10 through
2026-11-12 morning) — Gale–Shapley / Stable Marriage Problem has never
been used before. (Adjacent-but-distinct topics that *have* been used:
Monty Hall, Birthday Paradox, Efron's Dice, the 100 Prisoners Problem,
Secretary Problem — all probability/game-theory puzzles, but none
overlap with stable matching.)

**Accuracy check:** Verified via two WebSearch queries pulling from
multiple independent sources (plus.maths.org / Nobel Prize writeup,
University of California news writeup on the 2012 Nobel, UBS "Nobel
Perspectives" profile of Lloyd Shapley, and course-note PDFs from UC
Santa Barbara, Bryn Mawr, and UC San Diego/Washington on the algorithm
mechanics): confirms the 1962 Gale–Shapley paper and its "always a
stable matching exists" theorem, the O(n²) propose/reject algorithm
description, Alvin Roth's 1984 finding that the NRMP had used an
equivalent algorithm since the early 1950s, the 2012 Nobel Memorial
Prize in Economic Sciences to Shapley and Roth, and Gale's 2008 death
making him ineligible. All sources were mutually consistent on these
facts.

**Assets:**
- `stable-marriage-problem.png` (1183x677, dark theme, two panels) —
  left: a tiny worked 3-proposer/3-receiver example showing the one
  rejected proposal (C→1, dashed) and the final stable matching (solid
  green lines), with preference lists; right: definition of a stable
  matching, the propose/reject algorithm, the 1962 paper, Roth's 1984
  discovery, and the 2012 Nobel Prize. GIF included: yes.
- `stable-marriage-problem.gif` (600x338, 2fps, 5 distinct frames after
  Pillow's duplicate-frame handling, ~45KB, built with matplotlib
  FuncAnimation + PillowWriter) — animates the same tiny example
  through each round: everyone proposes to their first choice, 1
  rejects C in favor of A, C proposes to its next choice (3), 3
  accepts, and the matching is shown as stable, with a caption line
  per step.

**Sources:**
- plus.maths.org, "Nobel Prize for stable marriages" (on the 2012
  Nobel Memorial Prize in Economic Sciences)
- University of California news, "How two matchmakers won a Nobel
  Prize" (universityofcalifornia.edu/news)
- UBS "Nobel Perspectives" profile of Lloyd Shapley
- Wikipedia mirror / course notes (UC Santa Barbara ECE, Bryn Mawr CS,
  UC San Diego/Washington CSE lecture notes) on the Gale–Shapley
  algorithm mechanics and O(n²) runtime

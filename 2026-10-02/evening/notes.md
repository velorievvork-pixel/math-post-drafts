# Evening post — 2026-10-02

**Topic:** Simpson's Paradox, illustrated with the famous 1973 UC Berkeley
graduate admissions data. Aggregated across the university, 44% of male
applicants were admitted vs. only 35% of female applicants — looking like
clear bias. But broken down by the six largest departments (Bickel, Hammel
& O'Connell, *Science*, 1975), women were admitted at an equal or higher
rate than men in 4 of 6 departments (A: 62% vs 82%, B: 63% vs 68%, D: 33%
vs 35%, F: 6% vs 7%); the two where men fared relatively better were close
(C: 37% vs 34%, E: 28% vs 24%). The reversal happened because women
disproportionately applied to more competitive, lower-admit-rate
departments, while men applied more to less competitive ones. A classic,
rigorously documented illustration of why aggregated data can show the
opposite trend of the disaggregated data behind it.

No morning/ folder existed yet for today when this run started (checked
first), so no same-day collision check was needed against a sibling post.
Checked against the full history of past topics in this repo (grep across
all notes.md "Topic:" lines) — Simpson's Paradox has not been used before;
closest prior topics were other probability/statistics paradoxes (Monty
Hall, Birthday Paradox, Benford's Law, Efron's Dice) and other named
real-world data paradoxes, none of which overlap.

**Accuracy check:** department-level numbers (A–F, applicant counts and
admit percentages for men and women) were cross-verified via WebSearch
against multiple independent sources citing the original Bickel, Hammel &
O'Connell 1975 *Science* paper and the Freedman/Pisani/Purves *Statistics*
textbook table, which agreed on all six rows. The aggregate 44%/35% figures
were separately confirmed via WebSearch. Note (for context, not shown in
the post): because these are only the 6 largest of 101 Berkeley
departments, naively averaging the 6-department subset doesn't reproduce
the overall 44%/35% split exactly — this is a well-known, widely
acknowledged property of the standard illustrative table, not an error
introduced here.

**Format:** simpsons_paradox_berkeley.png — static side-by-side comparison
(aggregate 2-bar chart vs. 6-department grouped bar chart). Also included:
simpsons_paradox_berkeley.gif — ~5.2s, 12fps, 600x338 animation that
morphs the two aggregate bars into the six per-department bar pairs, with
captions ("Overall...looks biased" → "split by department..." → "Simpson's
Paradox" reveal), so the GIF is self-explanatory on its own.

**Sources:**
- Bickel, P. J., Hammel, E. A., O'Connell, J. W. (1975). "Sex Bias in
  Graduate Admissions: Data from Berkeley." Science, 187(4175), 398-404.
- Freedman, Pisani & Purves, *Statistics* (department-level admissions
  table, widely reproduced and cross-checked via WebSearch against
  multiple independent citations of the original study).

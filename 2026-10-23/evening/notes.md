# Evening post — 2026-10-23

**Topic:** Kaprekar's constant, 6174. Take any 4-digit number that
isn't a repdigit (not all four digits the same). Arrange its digits
to form the largest possible number and the smallest possible number,
then subtract the smaller from the larger. Repeat the process on the
result. No matter which starting number you pick, you always land on
6174 within at most 7 iterations — and once you reach it, the routine
loops forever (7641 − 1467 = 6174). Named for D. R. Kaprekar, an
Indian schoolteacher with no formal postgraduate training who found
the property in 1949 and published it in 1955. The same trick on
3-digit numbers always converges to 495 instead, within 6 steps.

No `2026-10-23/morning` folder exists yet for today (checked at run
time), so there was no earlier post today to differentiate from.

**Topic check:** Grepped every `**Topic:**` line across the repo's
full history (Sept 10 – Oct 22, 2026, 90+ prior posts) — Kaprekar's
constant / 6174 / the Kaprekar routine has not been used before.

**Accuracy check:** Verified via WebSearch across independent sources
— Wikipedia's "D. R. Kaprekar" article/mirrors, cut-the-knot.org
("Kaprekar's Iterations and Constants"), Plus Magazine comment
threads discussing the algebraic fixed-point argument, Mathwords'
"Kaprekar Routine" entry, and MacTutor's biography of Kaprekar
(mathshistory.st-andrews.ac.uk). Confirmed: the routine and its
definition; the 7-step bound for 4-digit numbers; the repdigit
exception (e.g. 1111 → 0000 after one step); the 495/6-step analogue
for 3-digit numbers; Kaprekar's 1949 discovery and 1955 publication
("An Interesting Property of the Number 6174"); his background as a
long-serving schoolteacher (1930–1962) rather than an academic.
Direct fetches of wikipedia.org and cut-the-knot.org failed through
the sandbox's egress proxy (as in several prior runs), so facts were
cross-verified via WebSearch result snippets from multiple
independent outlets instead.

Two claims were independently verified by exact computation in this
session rather than taken on faith: (1) the worked example
3524 → 3087 → 8352 → 6174 was recomputed digit-by-digit in Python; (2)
a brute-force check of all 8,991 non-repdigit 4-digit numbers (1000
to 9999, excluding repdigits) confirmed every single one reaches 6174
in at most 7 iterations, with no failures.

**Assets:**
- `kaprekar_6174.png` (1200x675, dark theme, two panels) — left: the
  worked example 3524 → 3087 → 8352 → 6174, shown step by step with
  the largest/smallest digit arrangements and the subtraction at each
  stage, ending in a highlighted fixed-point box; right: the routine's
  rule, Kaprekar's discovery date/background, the 8,991-number
  verification, the 7-step bound, the repdigit exception, and the
  495/3-digit analogue.
- `kaprekar_6174.gif` (600x338, 12fps, ~6.8s runtime, ~97KB, built
  with matplotlib FuncAnimation + PillowWriter) — animates the same
  3524 → 6174 worked example one step at a time (starting number,
  then the largest-minus-smallest subtraction, then the result),
  holding longest on the final 6174 = 6174 fixed point, with an
  in-frame title and a lower-third caption band throughout. GIF
  included: yes.

**Sources:**
- Wikipedia, "D. R. Kaprekar" (en.wikipedia.org, via WebSearch
  snippets)
- cut-the-knot.org, "Kaprekar's Iterations and Constants" (via
  WebSearch snippets)
- Plus Magazine, reader comments on the Kaprekar-constant proof
  sketch (plus.maths.org, via WebSearch)
- Mathwords, "Kaprekar Routine" (mathwords.com, via WebSearch)
- MacTutor History of Mathematics, "Dattatreya Ramachandra Kaprekar"
  (mathshistory.st-andrews.ac.uk, via WebSearch)

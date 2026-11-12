# Morning post — 2026-11-12

**Topic:** Buffon's Needle problem. Rule a floor with parallel lines
spaced d apart and toss a needle of length L ≤ d at a uniformly random
position and angle. The probability it crosses a line is P = 2L/(πd).
Rearranged, this turns needle-dropping into a (slow, noisy) way to
estimate π: π ≈ 2LN/(dC) for N throws with C crossings. Posed by
Georges-Louis Leclerc, Comte de Buffon in 1733; the solution was
published in 1777 (*Essai d'Arithmétique Morale*). It's one of the
earliest problems solved with geometric probability and is regarded as
an ancestor of the Monte Carlo method. Fun twist: in 1901 Mario
Lazzarini claimed 3,408 tosses gave him π ≈ 355/113 = 3.14159292...,
accurate to 6 digits — suspiciously accurate, since 355/113 is already
famous as an unusually good rational approximation of π, and later
analysis (e.g. Lee Badger, "Lazzarini's Lucky Approximation of π",
*Mathematics Magazine*, 1994) argues the only realistic way to land on
that exact fraction is to toss in convenient batches (multiples of 213)
and stop once hitting the target — i.e., the experiment is widely
viewed as fudged/not a genuine unbiased trial, though one historian
(Hans van Maanen) has argued it may have been intended as an obvious
parody rather than real fraud.

**Different topic from recent days:** Checked `notes.md` across
2026-11-08 through 2026-11-11 (P vs NP, Dottie number, Double Bubble
Theorem, Jordan Curve Theorem, Varignon's Theorem, Catenary, Honeycomb
Conjecture, Moser's Circle Problem) plus the broader repo history
(Sept–Nov 2026, 150+ prior posts). Buffon's Needle has never been used
before. This is the morning run (no 2026-11-12 folder existed yet).

**Accuracy check:** Verified via WebSearch across multiple independent
sources (OEIS wiki page, cut-the-knot.org, Mathwords, encyclopediaofmath.org,
a USC math-dept PDF, and a blog post analyzing Lazzarini citing Lee
Badger's 1994 *Mathematics Magazine* paper): confirms the 1733/1777
dates, the P = 2L/(πd) formula for L ≤ d, Buffon's own 1777 answer to a
related (rectangular-grid) variant being wrong and corrected by Laplace
in 1812 (not used in the post itself, to keep the claim simple and
well-attested), and the Lazzarini 1901 claim of 3,408 tosses giving
355/113, with the "suspiciously convenient batch size" explanation
corroborated by multiple sources discussing Badger's analysis. Direct
Wikipedia fetch was blocked by this session's network allowlist
(en.wikipedia.org not reachable via WebFetch); relied on WebSearch
result summaries from multiple other independent sources instead, which
were mutually consistent on every fact used in the post.

**Assets:**
- `buffons_needle.png` (1200x675, dark theme, two panels) — left: a
  simulated single drop of 36 needles across 6 ruled lines, colored by
  whether each crossed a line (green = miss, red = cross), with the
  observed crossing fraction vs. the true 2/π; right: the setup,
  formula P = 2L/(πd), the Monte Carlo rearrangement for estimating π,
  the 1733/1777 history, and the Lazzarini anecdote.
- `buffons_needle.gif` (600x338, 12fps, 72 frames after Pillow's
  duplicate-frame merging, ~6s loop, ~838KB, built with matplotlib
  FuncAnimation + PillowWriter) — animates needles being tossed one at
  a time onto the ruled lines, with a running caption of crossings and
  a live-updating π estimate, ending held on the final estimate after
  70 throws. GIF included: yes.

**Sources:**
- OEIS wiki, "Buffon's needle problem" (oeis.org/wiki/Buffon's_needle_problem)
- cut-the-knot.org, "Buffon's Needle Problem"
- encyclopediaofmath.org, "Buffon problem"
- USC Math Dept (Sergey Lototsky), "Buffon's Needle" course notes PDF
- Blog analysis of Mario Lazzarini's 1901 experiment, citing Lee Badger,
  "Lazzarini's Lucky Approximation of π", Mathematics Magazine 67:2 (1994)

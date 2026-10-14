# Morning post — 2026-10-14

**Topic:** Graham's Number — long popularly described as the largest
number ever used in a serious mathematical proof. It arose as a proven
upper bound (Ronald Graham & B. L. Rothschild, 1971) for a Ramsey-theory
problem about 2-colorings of the edges connecting vertices of a
hypercube (asking for the smallest hypercube dimension that forces a
single-colored, planar K4). It's built with Knuth's up-arrow notation:
g1 = 3↑↑↑↑3 (a tower-of-towers-of-towers of 3's, 4 arrows deep), and
each subsequent gn = 3 with gn-1 up-arrows between two 3's — repeating
that escalation 64 times, with Graham's number itself defined as g64.
Graham explained this slightly-larger, easier-to-define number to
science writer Martin Gardner, who popularized it in Scientific American
in 1977. We cannot compute its first digit, but its exact last 10
decimal digits are known: ...2464195387 (computable via modular
exponentiation of towers of 3, without ever writing out the whole
number). The actual answer to the 1971 Ramsey problem is now known to be
far smaller than Graham's number itself — current rigorous bounds place
it between 13 (Exoo 2003 / Barkley 2008 lower bound) and a much smaller
tower-type upper bound such as 2↑↑↑6 (Lavrov, Lee & Mackey, 2014) — so
Graham's number was always just a simple, convenient upper bound, not a
tight one.

**Different topic from recent days** — grepped every `**Topic:**` line
across all notes.md files in this repo's history (September and October).
No prior post covered Graham's number, Knuth's up-arrow notation, or this
specific Ramsey-theory hypercube problem. Distinct from prior
large/extreme-number posts (the Busy Beaver function, taxicab numbers,
squared squares) and from prior Ramsey-theory-adjacent posts (the
pigeonhole principle), none of which overlap with this topic.

**Accuracy check:** Wikipedia's domain was DNS-blocked by the sandbox
egress proxy (as in some prior runs), so facts were cross-verified via
WebSearch snippets instead, drawing on MathWorld's "Graham's Number"
entry (cited via search), Brilliant.org's "Graham's Number" wiki (via
search), an arXiv preprint "Graham's Number is Less Than 2↑↑↑6" (Lavrov,
Lee, Mackey, arXiv:1304.6910) read directly, and academickids.com /
mikesmathpage.wordpress.com corroborating the last-10-digits fact
(...2464195387, also cross-referenced to OEIS A165736 via a search
snippet). Confirmed independently in this run's own script: 3^3 = 27 and
3^27 = 7,625,597,484,987 (13 digits) were computed exactly in Python; the
digit count of 3^(3^27) (~3.638 trillion digits) was computed via
log10, not hand-typed or guessed. The claim that current bounds for the
underlying 1971 problem are 13 ≤ answer ≤ (a much smaller tower-type
number than Graham's number) was corroborated by two independent search
results (one explicitly citing Exoo 2003 and Barkley 2008 for the lower
bound, another citing the Lavrov/Lee/Mackey 2014 paper by name for the
upper-bound improvement). Did NOT assert an unverifiable claim search
turned up for a Guinness World Record — that framing could not be
confirmed from a primary source, so the post/caption instead attributes
the "largest number used in a serious proof" framing to its popular,
folk-knowledge status via Gardner's 1977 piece, not to a formal record.

**Visuals:** Static PNG (`grahams_number.png`, 1200x675, dark theme) —
left panel: a literal 4-level tower of 3's (3, 3³=27, 3^27 written out in
full, and the digit-count of 3^(3^27)) to build intuition for how fast
even an ordinary exponent tower grows, with a note that Graham's number
is not built from towers like this but from towers-of-towers-of-towers,
64 layers deep; right panel: a schematic (not-to-scale, explicitly
labeled as such) staircase of bars for g1 through g64, plus a facts box
covering the 1971 Ramsey/hypercube origin, Gardner's 1977 popularization,
the known last-10-digits fact, and the current 13-to-tower-type bounds
for the real underlying problem. A GIF was also included
(`grahams_number.gif`, 600x338, 12fps nominal, 7 encoded frames after
GIF duplicate-frame collapsing, ~7.2s, built with matplotlib
FuncAnimation + PillowWriter, ~38KB) — animates the same tower-of-3's
build-up (3 → 3³ → 3^27 → ~3.6-trillion-digit number) with an in-frame
lower-third caption at each stage, then cuts to "g1 = 3↑↑↑↑3" with an
animated up-arrow stack, then to the g2...g64 recursive rule, ending on
"Graham's Number — too big for the universe to write down." GIF
included: yes.

**Sources:**
- https://arxiv.org/pdf/1304.6910 (Lavrov, Lee, Mackey, "Graham's Number is Less Than 2↑↑↑6", read directly)
- MathWorld, "Graham's Number" (via WebSearch snippet)
- Brilliant.org, "Graham's Number" (via WebSearch snippet)
- mikesmathpage.wordpress.com, "The last 4 digits of Graham's number" (via WebSearch snippet)
- OEIS A165736 (last digits of Graham's number, cited via WebSearch snippet)

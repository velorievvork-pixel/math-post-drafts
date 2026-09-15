# Evening post — 2026-09-15 (evening2)

**Why "evening2":** the old duplicate routine (still active at 0 7,15 * * * UTC)
fired first and filled `2026-09-15/evening/` with a different topic (the
Monty Hall problem) before this session-bound run executed. To avoid
overwriting that draft, this run's output lives in `evening2/` instead.
The user should disable the old duplicate routine to stop this recurring
collision.

**Topic:** The Cantor Set. Start with the line segment [0,1]. Remove the
open middle third. Remove the middle third of each remaining piece. Repeat
forever. Constructed by Georg Cantor (published 1883) as an example in
his work on Fourier series and point-set topology, the resulting set has
zero total length (measure zero) yet still contains uncountably infinitely
many points — a genuinely paradoxical object: almost everything is removed,
yet "as many" points remain as you started with.

**Accuracy check:** computed the interval endpoints directly via recursive
middle-third removal and verified programmatically before rendering: at
level n there are exactly 2^n segments, and total remaining length is
exactly (2/3)^n (confirmed for n=0..7, e.g. level 7 = 128 segments,
length ~0.000457 each, total ~0.0585 -- shrinking geometrically toward 0
as the construction continues, per the actual limiting set).

**Format:** 3-slide carousel (recommended) — slide1_hook.png (hook: level
0-1 only + question), slide2_levels.png (reveal: full 7-level staircase),
slide3_fact.png (payoff: "Zero length. Infinitely many points."). Also
kept: cantor_set.png (single combined before/after static image) and
cantor_set.gif (animated: rounds building up one at a time, ~6.5s, 2fps,
600x338, captioned) as alternative formats.

**Sources:**
- https://en.wikipedia.org/wiki/Cantor_set
- https://theoremoftheweek.wordpress.com/2010/09/30/theorem-36-the-cantor-set-is-an-uncountable-set-with-zero-measure/

Different from all earlier posts: Kakeya needle problem, Go First Dice,
golden angle/sunflower phyllotaxis, Hardy-Ramanujan 1729, Ulam spiral,
Chaos Game/Sierpinski triangle, Buffon's Needle, Mobius strip, Voronoi
diagram, Penrose tiling, Coastline Paradox/Koch snowflake, Squaring the
Square, Konigsberg Bridges, Benford's Law, Efron's Dice, Monty Hall — this
uses set theory / measure vs. cardinality, a fresh mechanism from all
prior posts (distinct from the Koch snowflake and Sierpinski triangle:
this fractal removes rather than adds, and the punchline is about
measure/cardinality rather than perimeter or randomness).

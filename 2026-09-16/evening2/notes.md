# Evening post — 2026-09-16 (evening2)

**Why "evening2":** by the time this session-bound run fired (17:08 UTC),
`2026-09-16/morning/` (Borromean Rings, this session's own earlier run),
`2026-09-16/morning2/` (Four Color Theorem), and `2026-09-16/evening/`
(the Hat aperiodic monotile) already existed — the latter two from another
routine that now also appears to check the repo and follow the
morning2/eveningN collision-avoidance convention. To avoid clashing with
any of them, this run's output lives in `evening2/` with a distinct topic.
Worth noting to the user: two independently-scheduled routines are now
both producing content-aware, non-colliding posts, so daily volume is
higher than the original 2/day design (up to 4/day) even though nothing
is being overwritten anymore.

**Topic:** The Birthday Paradox. In a room of just 23 random people, the
probability that at least two share a birthday is already over 50% —
computed exactly as 1 minus the probability of zero collisions, i.e.
1 - (365/365 x 364/365 x ... x 343/365). Most people's intuition badly
overestimates this (guessing numbers close to 183, half of 365), because
the relevant comparison is the number of PAIRS of people (23 people =
253 possible pairs), not the number of people versus 365 days.

**Accuracy check:** computed the exact probability directly (no
approximation formula, no external source trusted for the number) for
n = 1 to 70; confirmed P(23) = 50.73%, matching the commonly cited figure.

**Format:** 3-slide carousel (recommended) — slide1_hook.png (hook:
faded curve silhouette + question), slide2_curve.png (reveal: full curve
with the 23-person point marked and labeled), slide3_fact.png (payoff:
"Just 23 people," contrasting the common wrong guess of 183). Also kept:
birthday_paradox.png (single static image) and birthday_paradox.gif
(animated: curve drawing progressively as the room fills up, ~6.25s,
8fps, 600x338, captioned) as alternative formats.

**Sources:**
- https://en.wikipedia.org/wiki/Birthday_problem

Different from all earlier posts: Kakeya needle problem, Go First Dice,
golden angle/sunflower phyllotaxis, Hardy-Ramanujan 1729, Ulam spiral,
Chaos Game/Sierpinski triangle, Buffon's Needle, Mobius strip, Voronoi
diagram, Penrose tiling, Coastline Paradox/Koch snowflake, Squaring the
Square, Konigsberg Bridges, Benford's Law, Efron's Dice, Monty Hall,
Cantor Set, Borromean Rings, Four Color Theorem, Hat aperiodic monotile —
this uses combinatorial probability (pair-counting intuition failure), a
fresh mechanism distinct from all prior probability-flavored posts (Go
First Dice = guaranteed fairness, Buffon's Needle = geometric Monte
Carlo estimation, Efron's Dice = non-transitive cycles, Monty Hall =
conditional probability from new information).

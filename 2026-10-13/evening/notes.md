# Evening post — 2026-10-13

**Topic:** The Secretary Problem (optimal stopping / the "37% rule" or
"1/e rule"). Given n candidates arriving in random order, where you must
accept or reject each one immediately with no recall, and you only know
each candidate's relative rank so far, the strategy that maximizes the
chance of selecting the single best candidate is: automatically reject
the first n/e (~36.8%) of candidates, then accept the next one who is
better than every candidate seen so far. As n grows large, this strategy
succeeds with probability converging to 1/e ≈ 0.368 — about a 1-in-e
chance, independent of how large n is. Applies informally to job hiring,
apartment hunting, dating, etc. (with the usual caveats: random arrival
order, a known fixed n, and judging by rank rather than score).

Checked all prior `**Topic:**` lines in this repo's history (every
September/October post, including this morning's twin-primes post) — the
secretary problem / optimal stopping / 1/e rule has not been used before.

**Accuracy check:** Core claims (reject first n/e, success probability
→ 1/e ≈ 0.368 as n→∞, random-arrival/no-recall/rank-only model
assumptions) were verified via WebSearch against standard optimal-
stopping references (e.g. sites.cs.ucsb.edu lecture notes, multiple
secondary explainers) which agree on the n/e cutoff and the 1/e limiting
success probability. The static image's left panel uses the exact known
closed-form success-probability formula P(k) = (k/n) * sum_{i=k}^{n-1}
1/i for the "skip k, then take next record" strategy, computed directly
in the generating script for n=2000 (not hand-typed) — the computed
optimum (k/n ≈ 0.368, max P ≈ 0.368) matches 1/e ≈ 0.36788 to 3 decimal
places, confirming the formula and the plotted curve are correct.

**Visuals:** Static PNG (`secretary_problem.png`) has two panels — left:
the success-probability-vs-rejection-fraction curve for n=2000 peaking
at 1/e, with the optimum marked; right: one simulated run with n=15
candidates, shaded "always reject" sampling phase, and the hired
candidate (first record-breaker after sampling) highlighted. A GIF was
also included (`secretary_problem.gif`, ~84KB, 600x338, ~6.1s, 12fps)
animating that same n=15 run candidate-by-candidate with a captioned
lower-third ("Sampling phase: reject candidate X", "not a record yet",
"HIRE!", then a final "Hired the best candidate" hold).

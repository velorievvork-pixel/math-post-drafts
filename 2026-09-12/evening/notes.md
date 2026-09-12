# Evening post — 2026-09-12

**Topic:** Buffon's Needle problem. Posed by Georges-Louis Leclerc, Comte de
Buffon in 1733 and solved by him in 1777. Drop a needle of length L onto a
floor ruled with parallel lines spaced D apart (L ≤ D); the probability the
needle crosses a line is P = 2L/(πD). Rearranged, repeated random needle
drops give an experimental estimate of π — one of the earliest known
Monte Carlo methods, centuries before computers.

**Assets:**
- `buffons_needle.png` — static: left panel shows 90 randomly dropped
  needles on ruled lines (red = crosses a line, green = misses) with a
  live crossing count and π estimate from that trial; right panel states
  the formula and history.
- `buffons_needle.gif` — animated (64 frames, 12fps, ~5.1s, 600x338):
  needles accumulate one-by-one on the ruled floor while a running
  crossing count and π estimate update in the corner, captioned.

**Sources:**
- https://en.wikipedia.org/wiki/Buffon%27s_needle_problem (posed 1733,
  solved 1777; P = 2L/(πD) for L ≤ D)
- https://mathworld.wolfram.com/BuffonsNeedleProblem.html

Different from all earlier posts: Kakeya needle problem (2026-09-10
evening), Go First Dice (2026-09-11 morning), golden angle/sunflower
phyllotaxis (2026-09-11 bonus), Hardy-Ramanujan 1729 (2026-09-11 evening),
Ulam spiral/primes (2026-09-11 evening2), Chaos Game/Sierpinski triangle
(2026-09-12 morning) — this uses geometric probability / Monte Carlo
estimation of π, a fresh mechanism from all prior posts.

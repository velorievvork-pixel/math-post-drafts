# Evening post — 2026-11-03

**Topic:** Buffon's Needle Problem. Posed in 1733 by Georges-Louis
Leclerc, Comte de Buffon, and published in 1777: drop a needle of
length L onto a floor ruled with parallel lines spaced D apart (L ≤ D).
The probability the needle crosses a line is P = 2L/(πD) — one of the
earliest problems in geometric probability, and arguably the first
Monte Carlo method, roughly two centuries before that term existed.
Rearranging gives π ≈ 2L/(P·D), so repeated random needle drops let you
estimate π experimentally. Historical nuance verified via web search:
Buffon himself did not actually use the needle to estimate π — that
use was pointed out later by Laplace — and the method converges very
slowly (about 3 correct digits after roughly a million throws), so it's
a fun illustration rather than a practical way to compute π.

**Visuals:** Static PNG shows ~130 needles randomly dropped across a
7-line grid, color-coded orange (crosses a line) vs blue (doesn't),
with the run's crossing count and resulting π estimate (≈3.171)
annotated. GIF animates needles dropping in over ~4.6s with a running
tally of crossings and the live π estimate converging as more needles
land.

**Topic check:** Reviewed all prior `**Topic:**` notes across the repo
(2026-09-10 through 2026-11-03 morning, 114+ prior posts). Buffon's
Needle has not been used before. Distinct from prior probability/
geometry topics like the Monty Hall problem (conditional probability,
no geometry), the Secretary Problem (optimal stopping), the Birthday-
adjacent pigeonhole principle, and the Chaos Game / Sierpinski
constructions (iterated function systems, not probability estimation
of π). Morning post today covered the Four Color Theorem — unrelated.

**GIF included:** yes.

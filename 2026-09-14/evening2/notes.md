# Evening post — 2026-09-14 (evening2)

**Why "evening2":** the old duplicate routine (still active at 0 7,15 * * * UTC)
fired first and filled `2026-09-14/evening/` with a different topic (the
Konigsberg Bridges problem) before this session-bound run executed. To
avoid overwriting that draft, this run's output lives in `evening2/`
instead. The user should disable the old duplicate routine to stop this
recurring collision.

**Topic switch note:** originally attempted the Apollonian Gasket (circle
packing via Descartes' Circle Theorem) but caught a genuine bug during
verification (a systematic overlap-check found 2153 pairs of circles
overlapping, worst overlap 0.33 -- not a rendering artifact, a real flaw in
the recursive circle-picking logic I could not cleanly resolve in
reasonable time). Rather than post an inaccurate diagram, abandoned that
topic entirely and switched to Benford's Law instead.

**Topic:** Benford's Law -- in most naturally occurring collections of
numbers, the leading digit is 1 far more often than any other digit
(~30% of the time), decreasing all the way down to 9 (~5% of the time),
following P(d) = log10(1 + 1/d). First noticed by Simon Newcomb in 1881
(worn logarithm-table pages starting with 1), independently rediscovered
and popularized by Frank Benford in 1938.

**Accuracy check:** rather than trust an external real-world dataset,
computed the leading digit of the first 2,000 powers of 2 directly (a
classic, mathematically guaranteed Benford sequence) and compared to the
exact predicted distribution -- max absolute difference across all 9
digits was 0.0013 (0.13 percentage points), confirming the chart is a
faithful, self-verified match before rendering.

**Format:** 3-slide carousel (recommended) — slide1_hook.png (hook:
silhouette bar shapes + question), slide2_bars.png (reveal: labeled
percentages for powers of 2), slide3_named.png (payoff: names the law,
overlays the predicted curve). Also kept: benford.png (single combined
bars + prediction-curve static image) and benford.gif (animated: bars
converging to the Benford curve as more powers of 2 are added, ~6.7s,
6fps, 600x338, captioned) as alternative formats.

**Sources:**
- https://en.wikipedia.org/wiki/Benford%27s_law
- https://builtin.com/data-science/benfords-law

Different from all earlier posts: Kakeya needle problem, Go First Dice,
golden angle/sunflower phyllotaxis, Hardy-Ramanujan 1729, Ulam spiral,
Chaos Game/Sierpinski triangle, Buffon's Needle, Mobius strip, Voronoi
diagram, Penrose tiling, Coastline Paradox/Koch snowflake, Squaring the
Square, Konigsberg Bridges -- this uses statistical/number-theoretic
distribution, a fresh mechanism from all prior posts.

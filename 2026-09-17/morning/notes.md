# Morning post — 2026-09-17

**Topic:** Zeno's Paradox (the Dichotomy/Achilles paradox), resolved via
geometric series. To cross a distance, you must first cross half of it,
then half of what remains, then half of that, forever — infinitely many
steps. Zeno argued this makes motion impossible. The resolution: the
infinite sum 1/2 + 1/4 + 1/8 + 1/16 + ... converges to exactly 1 —
infinitely many terms, finite total. Visualized with the classic spiral
square: a unit square repeatedly halved, each half colored a different
size, spiraling inward toward a single point.

**Accuracy check:** areas were computed directly by the same spiral-halving
recursion used to draw the rectangles (not assumed): after 11 steps, the
colored area sums to 0.999512, consistent with 1 - (1/2)^11 and confirming
convergence toward exactly 1 as steps continue.

**Format:** 3-slide carousel (recommended) — slide1_hook.png (hook: first
2 steps only + question framing), slide2_spiral.png (reveal: full 11-step
spiral labeled with fractions), slide3_fact.png (payoff: "Infinite steps.
Exactly 1."). Also kept: zeno_paradox.png (single combined before/after
static image) and zeno_paradox.gif (animated: rectangles filling in one
by one with a running sum, ~8.5s, 2fps, 600x338, captioned) as alternative
formats.

**Sources:**
- https://mathworld.wolfram.com/ZenosParadoxes.html
- https://iep.utm.edu/zenos-paradoxes/

Different from all earlier posts: Kakeya needle problem, Go First Dice,
golden angle/sunflower phyllotaxis, Hardy-Ramanujan 1729, Ulam spiral,
Chaos Game/Sierpinski triangle, Buffon's Needle, Mobius strip, Voronoi
diagram, Penrose tiling, Coastline Paradox/Koch snowflake, Squaring the
Square, Konigsberg Bridges, Benford's Law, Efron's Dice, Monty Hall,
Cantor Set, Borromean Rings, Four Color Theorem, Hat aperiodic monotile,
Birthday Paradox — this uses convergent infinite series, a fresh
mechanism from all prior posts (distinct from the Cantor Set and Koch
Snowflake: those show infinite processes that shrink to zero or grow
without bound; this one shows infinitely many positive terms summing to
a single finite, ordinary number).

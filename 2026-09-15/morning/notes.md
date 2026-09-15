# Morning post — 2026-09-15

**Topic:** Efron's Dice. A set of four dice — A: [4,4,4,4,0,0], B: [3,3,3,3,3,3],
C: [6,6,2,2,2,2], D: [5,5,5,1,1,1] — such that A beats B, B beats C, C beats
D, and D beats A, each with probability exactly 2/3. There is no single
"best" die: whichever one an opponent picks, you can always pick a
different one with better odds against it. Invented by Bradley Efron,
popularized by Martin Gardner in Scientific American, December 1970.

**Accuracy check:** computed all four win probabilities directly via
brute-force enumeration of all 36 face-pair outcomes for each adjacent pair
in the cycle (not just quoted from a source) — confirmed exactly 2/3 for
A>B, B>C, C>D, and D>A before rendering.

**Format:** 3-slide carousel (recommended) — slide1_hook.png (hook:
rock-paper-scissors framing + a plain undirected cycle as a teaser),
slide2_cycle.png (reveal: the same 4 dice with directional arrows and 2/3
labels showing the beats-cycle), slide3_fact.png (payoff: "There is no best
die."). Also kept: efron_dice.png (single combined before/after static
image) and efron_dice.gif (animated: simulated rolls between die A and die
B converging live to a 2/3 win rate, ~7.5s, 8fps, 600x338, captioned) as
alternative formats.

**Sources:**
- https://en.wikipedia.org/wiki/Intransitive_dice (Efron's dice face values, cycle, 2/3 probability, Gardner 1970)
- https://mathworld.wolfram.com/EfronsDice.html

Different from all earlier posts: Kakeya needle problem, Go First Dice,
golden angle/sunflower phyllotaxis, Hardy-Ramanujan 1729, Ulam spiral,
Chaos Game/Sierpinski triangle, Buffon's Needle, Mobius strip, Voronoi
diagram, Penrose tiling, Coastline Paradox/Koch snowflake, Squaring the
Square, Konigsberg Bridges, Benford's Law — this uses non-transitive
(cyclic) probability relations, a fresh mechanism from all prior posts
(distinct from Go First Dice, which is about guaranteeing no ties rather
than a beats-cycle with no best choice).

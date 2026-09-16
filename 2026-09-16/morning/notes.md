# Morning post — 2026-09-16

**Topic:** Borromean Rings. Three rings woven so that no two of them are
ever directly linked to each other — cut or remove any single ring and the
remaining two simply fall apart, unlinked. Only the presence of all three
together holds the configuration together. Named for their use in the
coat of arms of the Italian Borromeo family; the general mathematical
category (a link that falls apart completely if any one component is
removed) is called a "Brunnian link," after Hermann Brunn's 1892 paper.

**Extra verified fact (not used in the tight caption, kept here for
accuracy):** true Borromean rings cannot be built from perfect geometric
circles in 3D — Freedman and Skora proved in 1987 that no exactly-circular
realization exists; real embeddings need ellipses (or, using the vertices
of a regular icosahedron, linked golden rectangles). The flat 2D diagram
shown here (three circles with alternating over/under crossings) is the
standard schematic representation, not a claim that real 3D circles work.

**Accuracy check:** the crossing pattern was NOT eyeballed — it was
computed and verified programmatically. For each of the 3 pairs of
circles, the two crossing points were assigned opposite over/under status
(confirmed via an explicit check: `is_over(i, p1) != is_over(i, p2)` for
every pair), which guarantees each pair is individually unlinked. An
earlier naive "alternate by angle order" attempt failed this check (each
pair came out fully linked, same over/under at both crossings) and was
caught and fixed before rendering.

**Format:** 3-slide carousel (recommended) — slide1_hook.png (hook: full
3-ring weave + question), slide2_remove.png (reveal: one ring faded out),
slide3_named.png (payoff: names it). Also kept: borromean_rings.png
(single combined before/after static image) and borromean_rings.gif
(animated: ring fades out, then the remaining two visibly drift apart,
~5.3s, 6fps, 600x338, captioned) as alternative formats.

**Sources:**
- https://en.wikipedia.org/wiki/Brunnian_link
- https://mathworld.wolfram.com/BorromeanRings.html

Different from all earlier posts: Kakeya needle problem, Go First Dice,
golden angle/sunflower phyllotaxis, Hardy-Ramanujan 1729, Ulam spiral,
Chaos Game/Sierpinski triangle, Buffon's Needle, Mobius strip, Voronoi
diagram, Penrose tiling, Coastline Paradox/Koch snowflake, Squaring the
Square, Konigsberg Bridges, Benford's Law, Efron's Dice, Monty Hall,
Cantor Set — this uses link/knot theory, a fresh mechanism from all prior
posts (distinct from the Mobius strip, which is about surface topology
rather than how separate loops interlock).

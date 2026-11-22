# Evening post — 2026-11-22

**Topic:** The Pizza Theorem. Cut a circular pizza into 8 slices using
4 straight cuts that all pass through a single interior point P —
crucially, P does NOT need to be the center of the circle. No matter
where P is placed, if you and a friend take alternating slices
(1st, 3rd, 5th, 7th vs. 2nd, 4th, 6th, 8th), you each get exactly
half the pizza's total area, even though the individual slices can be
wildly different sizes. The theorem requires the number of sectors to
be a multiple of 4 that is at least 8 (8, 12, 16, ...) — 4 sectors
alone does not balance in general (shown by Don Coppersmith). It has
several proof methods: dissection/rearrangement proofs (most completely
by Frederickson, 2012) and a direct calculus proof in polar coordinates.
Later work (e.g. a 2021 arXiv paper) extends the result to more general
chord configurations.

**Different topic from recent days / repo-wide:** Grepped every
`**Topic:**` line across the full repo history (2026-09-10 through
2026-11-22 morning, 220+ prior posts). "Pizza theorem" / "pizza
slices" has not appeared before. Distinct from related prior posts
about circle geometry (Pick's Theorem, Reuleaux Triangle, Ford
Circles, Steiner's Porism, Apollonian Gasket, Dandelin spheres,
Isoperimetric-adjacent posts) — none cover equal-area alternating
sector dissection.

**Accuracy check:** Verified via WebSearch pulling from Wikipedia's
"Pizza theorem" article, Harvey Mudd's "Pizza Slices" math fun fact
page, and an arXiv paper (2110.12559) on generalizing the result.
All sources agree on: the setup (disk cut by 4 concurrent chords
through one interior point into 8 sectors), the equal-area alternating
sector result, the requirement that the sector count be a multiple of
4 greater than 4, Coppersmith's result that 4 sectors alone don't
balance in general, and Frederickson's 2012 dissection proof.

**Visuals:** `pizza_theorem.png` — a static diagram of a circular
"pizza" cut into 8 sectors through an off-center point P, colored
alternately red/gold, with the two groups' numerically-integrated
areas (via Shapely polygon intersection) printed and matching to
~10 decimal places. `pizza_theorem.gif` — a ~6s, 12fps, 600x338
looping animation where the cut point P and cut angle move around
inside the circle while the live red/gold area totals are displayed
and continuously track each other, demonstrating the theorem in
motion. GIF included.

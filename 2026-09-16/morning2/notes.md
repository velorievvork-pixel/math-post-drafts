# Morning post #2 — 2026-09-16

Note: the routine fired a second time this morning (an earlier morning
run at ~06:15 UTC already produced and delivered a Borromean Rings post,
issue #18). Following the repo's existing convention for duplicate
same-slot firings (see `2026-09-15/evening2/`), this second run picked a
**different** topic and used a `morning2/` folder instead of overwriting
or duplicating the first post.

**Topic:** The Four Color Theorem. Any map drawn on a plane can be
colored using at most four colors such that no two regions sharing a
border get the same color. First conjectured by Francis Guthrie in 1852;
proved in 1976 by Kenneth Appel and Wolfgang Haken — the first major
theorem proved with substantial computer assistance (their proof reduced
the problem to checking 1,834 unavoidable map configurations by computer,
a method building on earlier work by Heinrich Heesch, with algorithmic
work by John Koch). The proof was controversial at the time precisely
because a human couldn't check it by hand. 2026 is the 50th anniversary
of the 1976 announcement.

**Format:** four_color_theorem.png (static image: a Voronoi-style random
map with ~30 regions, properly 4-colored via a backtracking graph-coloring
algorithm — guaranteed to succeed by the theorem, and verified
programmatically that no two adjacent regions share a color) and
four_color_theorem.gif (animation: an 18-region version of the same map
being colored in one region at a time, captioned with a running count,
~3.2s at 6fps, 600x338, well under size limits).

**Sources:**
- https://distributedmuseum.illinois.edu/exhibit/four-color-theorem/
- https://www.ams.org/journals/notices/202603/noti3305/noti3305.html (AMS Notices, "The Four-Color Theorem 1852-1976")

Different from all earlier posts (Kakeya needle problem, Go First Dice,
golden angle/sunflower phyllotaxis, Hardy-Ramanujan 1729, Ulam spiral,
Chaos Game/Sierpinski triangle, Buffon's Needle, Mobius strip, Voronoi
diagram, Penrose tiling, Coastline Paradox/Koch snowflake, Squaring the
Square, Konigsberg Bridges, Benford's Law, Efron's Dice, Monty Hall,
Cantor Set, Borromean Rings/Brunnian links) — this is graph coloring /
combinatorics, a fresh mechanism, and notably the first post about a
computer-assisted proof.

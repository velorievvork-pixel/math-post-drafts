# Evening post — 2026-09-14

**Topic:** The Seven Bridges of Königsberg. The Prussian city of Königsberg
(now Kaliningrad, Russia) had the Pregel River running through it, with two
islands (Kneiphof and Lomse) connected to each other and to the two
riverbanks by seven bridges total. The 18th-century puzzle: can you walk
through the city crossing every bridge exactly once? Leonhard Euler solved
it in 1735/36 (paper "Solutio problematis ad geometriam situs pertinentis,"
printed 1741 due to journal backlog): represent each landmass as a vertex
and each bridge as an edge, and such a walk (an "Eulerian path") exists
only if the graph has exactly 0 or 2 vertices of odd degree. Königsberg's
four landmasses are all odd-degree (Kneiphof: 5; North bank, South bank,
Lomse: 3 each) — four odd vertices, so the walk is impossible. This result
founded graph theory.

**Accuracy check:** verified via web research (Wikipedia "Seven Bridges of
Königsberg" and MacTutor History of Mathematics) — all facts and the exact
vertex degrees {5, 3, 3, 3} confirmed correct.

**Format:** konigsberg_bridges.png — static side-by-side "map view" (river,
islands, bridges) next to Euler's graph abstraction, with degrees labeled.
konigsberg_bridges.gif (~6s, 12fps, 600x338, captioned) — animates a walker
attempting a route across the bridges, getting stuck partway through
several times, ending on the "proven impossible, 1736" punchline with the
degree tally.

**Sources:**
- https://en.wikipedia.org/wiki/Seven_Bridges_of_K%C3%B6nigsberg
- https://mathshistory.st-andrews.ac.uk/Extras/Konigsberg/

Different from all earlier posts: Kakeya needle problem, golden angle /
sunflower phyllotaxis, Hardy-Ramanujan 1729, Ulam spiral, Go First Dice,
Buffon's Needle, Möbius strip, Chaos Game / Sierpinski triangle, Penrose
tiling, Coastline Paradox / Koch snowflake, Voronoi diagram, squaring the
square (this morning) — this uses graph theory / traversability, a fresh
mechanism from all prior posts.

# Morning post — 2026-11-03

**Topic:** The Four Color Theorem. Any map of regions drawn on a plane
(no enclaves/exclaves) can be colored with just 4 colors so that no two
regions sharing a border get the same color. Conjectured in 1852 by
Francis Guthrie while coloring a map of England's counties. Proved in
1976 by Kenneth Appel and Wolfgang Haken at the University of Illinois,
building on reduction methods from Heinrich Heesch, with algorithmic
work by John Koch. Their proof found an unavoidable set of 1,936
reducible configurations (later trimmed to 1,476) and checked each by
computer — over 1,200 hours of computer time — making it the first
major theorem proved with essential computer assistance. It was
controversial at the time since no human could check the whole proof
by hand; a simpler computer-assisted proof was given in 1996 by
Robertson, Sanders, Seymour and Thomas, and the result has since been
formally verified (Gonthier, 2005, using the Coq proof assistant).

**Visuals:** Static PNG shows a randomly generated Voronoi-style map
(26 regions) validly 4-colored (adjacency built via shapely boundary
intersection, exact coloring found via backtracking search, verified
zero color-conflicts programmatically). GIF animates the same map
being filled in region by region with a captioned lower-third banner,
ending on the fact.

**Topic check:** grepped all prior `**Topic:**` lines across the repo
(2026-09-10 through 2026-11-02, 100+ prior posts). The Four Color
Theorem has not been used before. Distinct from previously covered
graph/map-coloring-adjacent topics: Hadwiger-Nelson problem (chromatic
number of the *infinite* plane under distance-1 constraint, a totally
different coloring question), Ramsey's theorem / R(3,3) (edge-coloring
of complete graphs, not planar map regions), Seven Bridges of
Königsberg (graph theory founding problem, but about edge traversal
not coloring), and the Spectre aperiodic monotile (tiling, not
coloring).

**GIF included:** yes.

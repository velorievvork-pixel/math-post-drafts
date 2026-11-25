# Morning post — 2026-11-25

**Topic:** The Seven Bridges of Königsberg. In 1736, Leonhard Euler
settled a standing puzzle about the Prussian city of Königsberg (today
Kaliningrad): the river Pregel split the city into four land areas
(two riverbanks, the island Kneiphof, and an eastern bank) connected
by seven bridges. The question was whether a walker could cross every
bridge exactly once. Euler showed it was impossible by reducing the
map to an abstract graph — land masses as points (vertices), bridges
as connecting lines (edges) — and proving that such a walk (now called
an Eulerian path) exists only if 0 or 2 vertices have odd degree
(an odd number of edges touching them). All four of Königsberg's land
masses have odd degree (3, 3, 3, and 5), so no such walk is possible.
His 1736 paper, "Solutio problematis ad geometriam situs pertinentis"
(published 1741), is generally regarded as the founding document of
graph theory. Two of the seven original bridges were destroyed in
WWII bombing; the underlying parity argument is unaffected by time or
geography.

**Visuals:**
- `konigsberg_bridges.png` (1200x675, dark theme, two panels) — left:
  a schematic map of the four Königsberg land masses (north bank,
  south bank, island, east bank) linked by the seven bridges, drawn
  over a blue river band; right: Euler's graph abstraction of the same
  four land masses as labeled nodes (N, S, I, E) with their edges and
  degree counts (3, 3, 5, 3) annotated, plus the Eulerian-path parity
  rule.
- `konigsberg_bridges.gif` (600x338, 12fps, ~6.4s, matplotlib
  FuncAnimation + PillowWriter, ~355KB) — animates a walker attempting
  to cross all seven bridges on the graph, tracing a path edge by edge
  with a running "X/7 crossed" caption, then getting stuck at the
  island with one bridge (the dashed red S–E edge) unreachable,
  captioned "Stuck!", before resetting to try again — illustrating why
  every attempt fails the same way. GIF included: yes.

**Sources:**
- Wikipedia, "Seven Bridges of Königsberg"
- Encyclopædia Britannica, "Königsberg bridge problem"
- Scientific American, "How the Seven Bridges of Königsberg Spawned
  New Math"
- Science News, "Euler's Bridges"

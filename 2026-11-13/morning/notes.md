# Morning post — 2026-11-13

**Topic:** The Seven Bridges of Königsberg (Euler, 1736). The city of
Königsberg (then Prussia, now Kaliningrad) had two riverbank regions
and two islands linked by seven bridges across the Pregel river.
Residents wondered if a walk existed that crossed every bridge exactly
once. Leonhard Euler modeled each landmass as a vertex and each bridge
as an edge, and showed such a walk (now called an Eulerian path) exists
only if the graph has zero or exactly two vertices of odd degree.
Königsberg's four landmasses all have odd degree (3, 3, 3, 5), so no
such walk is possible — proven impossible by pure counting, not by
trying every route. Euler's 1736 paper "Solutio problematis ad
geometriam situs pertinentis" is generally credited as the founding
work of graph theory. (Historical footnote, not used as the post's main
claim: WWII bombing and later demolition changed the city's bridges, so
sources note an Eulerian path may exist in modern Kaliningrad's layout —
left out of the tweet to keep the core 1736 result unambiguous.)

GIF included: yes.

**Assets:**
- `konigsberg_bridges.png` (1200x675, dark theme, two panels) — left: a
  stylized map of the two riverbanks and two islands connected by the
  seven bridges; right: the same layout abstracted into a graph with
  each landmass's degree labeled, highlighting that all four degrees
  are odd.
- `konigsberg_bridges.gif` (600x338, 12fps, 61 frames, ~440KB, built
  with matplotlib FuncAnimation + PillowWriter) — animates a walker
  attempting to cross 6 of the 7 bridges one at a time, then getting
  stuck with the final bridge unreachable, captioned to explain why.

**Sources:**
- Wikipedia, "Seven Bridges of Königsberg" (via WebSearch summary;
  direct en.wikipedia.org fetch not attempted this run)
- Euler, L. (1736). "Solutio problematis ad geometriam situs
  pertinentis." Commentarii Academiae Scientiarum Petropolitanae, 8,
  128–140.
- Encyclopedia.com, "The Birth of Graph Theory: Leonhard Euler and the
  Königsberg Bridge Problem"
- Mathwords.com, "Seven Bridges of Königsberg"

These sources were mutually consistent on the core facts used in the
post: seven bridges, four landmasses, degree sequence (3,3,3,5), and
Euler's 1736 impossibility proof founding graph theory.

# Evening post — 2026-10-19

**Topic:** The Seven Bridges of Königsberg (Leonhard Euler, 1736) — widely
credited as the founding problem of graph theory. The 18th-century city of
Königsberg (now Kaliningrad) had two river islands and seven bridges
connecting four landmasses. The puzzle: can you walk through the city
crossing every bridge exactly once? Euler proved the answer is no. He
abstracted the map into what we'd now call a graph — each landmass a
vertex, each bridge an edge — and showed that such a walk ("Eulerian
path") exists only if a connected graph has zero or exactly two
odd-degree vertices (vertices with an odd number of edges). Königsberg's
graph has four landmasses with degrees 3, 3, 5, and 3 — all four odd — so
no such walk is possible. This was the first theorem of graph theory and
is seen as a precursor to topology, since only the connectivity pattern
(not exact geometry/distances) mattered to the proof.

Checked prior post history (grepped all notes.md files in this repo) —
this topic (Königsberg bridges / Euler graph theory) has not been used
before. Avoided repeating today's morning topic (Conway's Soldiers).

**Accuracy check:** Verified via WebSearch against Wikipedia's "Seven
Bridges of Königsberg" article, Plus Magazine (plus.maths.org), and
additional sources confirming: (1) Euler solved/presented the problem
around 1735-36 (published 1741), (2) the standard graph has four
landmasses/vertices with degrees 3, 3, 5, 3 (all odd), confirmed by
multiple independent sources, (3) Euler's general theorem: a connected
graph has an Eulerian path iff it has 0 or 2 vertices of odd degree, and
(4) this result is broadly credited as the origin of graph theory.

**Visuals:**
- Static PNG (`konigsberg_bridges.png`): left panel shows a schematic map
  of Königsberg with the river, the two riverbanks (A, B), Kneiphof
  island (C), and Lomse island (D), with all 7 bridges drawn. Right panel
  shows Euler's graph abstraction — 4 vertices, 7 edges (with the two
  double-bridge pairs drawn as curved parallel edges), each vertex
  labeled with its (odd) degree, and a caption stating the impossibility
  conclusion.
- Animated GIF (`konigsberg_bridges.gif`, 600x338, 12fps, ~4.7s, 327KB):
  a walker dot attempts to cross bridges one at a time (6 of the 7
  edges, shown turning from gold to a used/dimmed color as it goes),
  then gets visibly "stuck" — the 7th, stranded bridge pulses red — with
  a captioned punchline that no route can use all 7 bridges exactly
  once, citing Euler's odd-degree criterion. GIF included: yes.

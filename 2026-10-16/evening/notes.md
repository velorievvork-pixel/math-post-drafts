# Evening post — 2026-10-16

**Topic:** Langton's Ant — a two-dimensional cellular automaton / "virtual
ant" devised by Chris Langton in 1986. A single ant walks on an initially
all-white grid under two rules: on a white square, turn 90° clockwise, flip
the square to black, and step forward; on a black square, turn 90°
counterclockwise, flip the square to white, and step forward. Despite the
rule's simplicity, the ant's path goes through distinct phases: short early
stretches of simple/symmetric motion, then a long chaotic, pseudo-random
wandering phase lasting roughly 10,000 steps, after which — from every
starting configuration tested so far — it settles into building an
infinite, repeating diagonal "highway" that extends 2 cells outward every
104 steps. It's a popular example of emergent order arising from a trivial
local rule, and of a simple system capable of universal computation: Gajardo,
Moreira, and Goles proved in 2000 that Langton's Ant is Turing-complete.

**Verified via WebSearch** against Wikipedia's "Langton's ant" article and
corroborating sources (Esolangs.org, Futility Closet, a University of Oxford
MCS worksheet): the 1986 origin and Chris Langton attribution, the
turn-right-on-white/turn-left-on-black rule, the ~10,000-step chaotic phase,
the 104-step highway cycle, and the 2000 Turing-completeness proof.

**Different topic from recent days** — checked every `**Topic:**` line
across all notes.md files in this repo's history (September and October).
Langton's Ant has not been used before; distinct from Conway's Game of Life
(Glider, 2026-09-23), the Chaos Game (2026-09-12), the logistic map
(2026-09-25), the Lorenz attractor (2026-09-20), and this morning's
Hilbert's Hotel post (2026-10-16).

**Assets:**
- `langtons_ant.png` — static diagram: left panel shows the ant's path
  after 500 steps (small, roughly symmetric structure before chaos sets
  in); right panel shows the full path after 11,000 steps, with the
  emergent diagonal highway annotated by an arrow.
- `langtons_ant.gif` — animated version (~6.7s at 12fps, 600x338,
  ~377KB): the ant's trail builds up over simulated time (non-linear
  frame sampling: dense early frames through the symmetric/chaotic
  phases, sparser later frames jumping toward 11,000 steps), with an
  in-frame title and a caption that updates per phase (rule summary →
  "chaotic, pseudo-random wandering" → "a 104-step highway has
  emerged"), so it's self-explanatory without the surrounding post text.

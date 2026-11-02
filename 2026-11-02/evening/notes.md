# Evening post — 2026-11-02

**Topic:** The 15 Puzzle and its parity invariant. The classic sliding
15-puzzle (4x4 grid, tiles 1-15, one blank) has a famous unsolvable
configuration: swapping just the last two tiles (14 and 15) while
leaving everything else in order. In 1891 Sam Loyd began offering a
$1,000 prize for a solution — but it had already been proven
impossible over a decade earlier, in 1879, by W. W. Johnson and W. E.
Story (two companion papers in the *American Journal of Mathematics*).
Johnson showed that odd permutations of the puzzle (like the lone
14-15 swap) are unreachable by sliding; Story showed every even
permutation IS reachable. The invariant: each slide swaps the blank
with one tile, which simultaneously flips (a) the parity of the
tile permutation and (b) the parity of the blank's taxicab distance
from a fixed corner — so their sum never changes. It starts even in
the solved state, so only even permutations are ever reachable.
Also noted: contrary to popular belief (and Loyd's own later claims),
Sam Loyd did not invent the puzzle — that credit goes to Noyes Palmer
Chapman, a postmaster/schoolteacher, whose version was circulating
and being sold by the late 1870s, years before Loyd's first article
about it (1886) or his invention claim (1891).

**Different topic from the morning post** (Prince Rupert's Cube) and
from the repo's full history — grepped every `**Topic:**` line across
all prior posts (Sept 10 - Nov 2, 2026, 120+ posts). The 15 puzzle /
permutation parity has never been used before (it was flagged as an
unused related idea in the Nov 1 "God's Number"/Rubik's Cube notes,
but not actually written up until now). Related-but-distinct prior
topics: "God's Number" for the Rubik's Cube (different puzzle, no
parity-invariant proof discussion), Pascal's Triangle mod 2, the
Chicken McNugget theorem — none overlap with this topic's specific
mechanism (the parity+taxicab-distance invariant proof).

**Accuracy check:** Verified via WebSearch across independent sources:
- Wikipedia, "15 puzzle" — the parity invariant mechanism (permutation
  parity plus the blank's taxicab-distance parity from a fixed corner
  is invariant under every move), and the Chapman-not-Loyd origin
  story with Loyd's 1891 claim and 1886 first article.
- MathWorld (Wolfram), "15 Puzzle" — corroborates the unsolvability of
  odd permutations and the historical Loyd prize account.
- cut-the-knot.org, "Group Theory for Sam Loyd's Fifteen Puzzle" —
  confirms the 1879 Johnson/Story attribution (W. W. Johnson's solution
  published December 1879) and the group-theoretic (even-permutation)
  framing.
- Cross-checked: the two 1879 papers are W. W. Johnson, "Notes on the
  '15 Puzzle. I." and W. E. Story, "Notes on the '15 Puzzle. II.",
  both in *American Journal of Mathematics*, vol. 2 — Johnson proved
  odd permutations unsolvable, Story proved all even permutations
  solvable.
- Multiple sources agree Noyes Palmer Chapman (not Sam Loyd) is
  credited with the puzzle's actual origin/invention in the mid-to-late
  1870s, with Loyd's involvement starting only in the mid-1880s to
  1890s and his inventor claim first appearing in 1891.

**Assets:**
- `fifteen_puzzle_parity.png` (1200x675, dark theme, two panels) —
  left: side-by-side 4x4 grids, the solved state and Loyd's target
  "14 and 15 swapped" state (highlighted in red), with a caption
  noting it was proven impossible in 1879, before the 1891 prize;
  right: a plain-language walkthrough of the parity+taxicab-distance
  invariant, why the sum never changes, and brief historical notes on
  the 1879 proofs and the Chapman/Loyd origin story.
- `fifteen_puzzle_parity.gif` (600x338, ~2-3s effective playback time
  per unique frame times frame count, 9 unique frames after Pillow's
  consecutive-duplicate-frame merging, ~80KB, built by rendering
  individual matplotlib frames to in-memory PNG buffers, converting to
  RGB, then quantizing every frame to one shared 64-color palette
  built from a composite of a normal frame and the red-highlighted
  frame — this was necessary because quantizing each frame to its own
  independent adaptive palette scrambled colors on playback, and using
  only a normal frame to build the shared palette dropped the red
  highlight color entirely) — animates the blank tile sliding through
  a few moves (captioned to explain the permutation-parity /
  taxicab-distance-parity invariant), returns to solved, then shows
  Loyd's impossible 14-15-swapped target highlighted in red with a
  caption noting it was proven impossible in 1879. GIF included: yes.

**Sources:**
- Wikipedia, "15 puzzle" (en.wikipedia.org/wiki/15_puzzle)
- MathWorld (Wolfram), "15 Puzzle" (mathworld.wolfram.com/15Puzzle.html)
- cut-the-knot.org, "Group Theory for Sam Loyd's Fifteen Puzzle"
  (cut-the-knot.org/Curriculum/Combinatorics/Fifteen.shtml)
- W. W. Johnson, "Notes on the '15 Puzzle. I." and W. E. Story,
  "Notes on the '15 Puzzle. II.", *American Journal of Mathematics*,
  vol. 2 (1879)

# Morning post — 2026-11-04

**Topic:** The Tower of Hanoi puzzle and its exponential move count,
2^n − 1. Invented in 1883 by French mathematician Édouard Lucas, who
published it under the pseudonym "N. Claus (de Siam)" (an anagram of
"Lucas d'Amiens"). The puzzle came bundled with an invented legend
about Brahmin priests at a temple in Benares moving a "Tower of
Brahma" of 64 golden disks between three diamond needles, with the
claim that the world would end when they finished. The minimum
number of moves to transfer n disks is 2^n − 1 (provable by simple
induction): 5 disks only takes 31 moves, but the legendary 64-disk
version would require 2^64 − 1 = 18,446,744,073,709,551,615 moves —
about 584.5 billion years at one move per second, roughly 40x the
current age of the universe. Confirmed via web search (Wikipedia /
MacTutor History of Mathematics / St Andrews history page) that Lucas
published it in 1883 and the Brahma-temple legend was his own
embellishment, not an older historical story.

**Topic check:** Grepped every `**Topic:**` line across the repo's
full history (Sept 10 – Nov 3, 2026, 125+ prior posts). Related but
distinct prior topics: the 100 Prisoners Problem, the 15 Puzzle
(parity invariant), "God's Number" for the Rubik's Cube, Hilbert's
Hotel, the Chicken McNugget Theorem — none of these previously
covered the Tower of Hanoi / recursive doubling specifically. This is
a new topic for the repo.

**Visuals:**
- Static PNG: two-panel image — left shows the puzzle's 3-peg / 5-disk
  setup with the "never place a larger disk on a smaller one" rule;
  right shows a log-scale plot of moves = 2^n − 1 for n = 1..64, with
  the n=5 (31 moves) and n=64 (~585 billion years) points annotated.
- Animated GIF: included. A 4-disk (15-move) Tower of Hanoi solve
  animates start to finish on a 3-peg diagram, with a disk "lifting"
  and sliding between pegs each move, a live move counter in the
  caption ("move k/15"), and the 2^n − 1 formula captioned at the
  bottom. ~600x338px, ~9s, ~390KB.

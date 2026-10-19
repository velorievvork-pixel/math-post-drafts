# Morning post — 2026-10-19

**Topic:** Conway's Soldiers (the checker-jumping / "solitaire army"
problem). In 1961, John Horton Conway proved that no matter how many
checkers ("soldiers") occupy the squares on or below a horizontal line on
an infinite checkerboard, no finite sequence of legal checker-jumps
(jumping an adjacent peg and removing it, landing on an empty square two
away) can ever get a single soldier to the 5th row above the line — even
though reaching the 4th row IS achievable (with 20 soldiers, in a known
explicit solution). The proof is an invariance argument: each cell is
assigned a weight equal to a power of the golden ratio conjugate
φ = (√5 − 1)/2 ≈ 0.618 (which satisfies φ² + φ = 1), based on its distance
from the target cell, such that no legal jump can ever increase the total
weight of all occupied cells. Since the starting weight of the whole
army is bounded (≤ a value less than φ⁻¹... more precisely the total
weight of the full half-plane is finite and equals exactly the weight
needed to just reach row 4, not row 5), reaching row 5 is impossible.
(Caveat not included in the post, for brevity: Tatham and Taylor later
showed row 5 *is* reachable if you allow infinitely many starting pegs —
the post is about the classical finite-army result.)

Checked prior post history (grepped all notes.md files in this repo) for
"Conway's Soldiers", "Conway soldiers", "peg solitaire", "Dehn invariant",
"Hilbert's third", and "kissing number" — none of these have been used
before, so this topic is new. (Fibonacci Spiral / golden ratio was used
2026-09-23, but this is a distinct topic — a combinatorial game proof —
that happens to also involve φ; Conway's Game of Life / Glider was used
2026-09-23 morning, a different "Conway" topic entirely.)

**Accuracy check:** Verified via WebSearch against Wikipedia's "Conway's
Soldiers" article and other sources (chiark.greenend.org.uk/~sgtatham,
arXiv math/0612612): confirms Conway analyzed the puzzle in 1961, proved
no finite sequence of moves reaches row 5, that the proof is an invariance
argument using a golden-ratio weighting ("pagoda function"), and that row
4 is achievable. The specific φ-distance weighting shown in the static
image (weight = φ^(Manhattan distance to target cell)) is presented as an
illustrative schematic of the general idea rather than a literal
reproduction of Conway's exact combinatorial distance function.

**Visuals:**
- Static PNG (`conway_soldiers.png`): left panel shows the checkerboard
  with the horizontal line, the army below it, a schematic jump path
  climbing to the (reachable) row 4, and an X marking the (impossible)
  row 5 target. Right panel shows a heatmap of the golden-ratio pagoda
  weighting centered on the target cell, with φ and the identity
  φ² + φ = 1 labeled.
- Animated GIF (`conway_soldiers.gif`, ~600x338, 12fps, ~4.3s, 45KB):
  a single peg schematically "climbing" jump by jump from below the line
  up to row 4, with a captioned lower-third, then the caption switches to
  announce row 5 is proven impossible as the peg briefly reaches for it
  and turns red. GIF included: yes.

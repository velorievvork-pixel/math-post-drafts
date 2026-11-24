# Morning post — 2026-11-24

**Topic:** The Thue–Morse sequence. Start with a single 0; at every
step, append the complement (flip every bit) of the sequence so far:
0 → 01 → 0110 → 01101001 → 0110100110010110 → ... Equivalently, bit n
equals the parity of the number of 1s in n's binary representation —
both definitions give the exact same infinite sequence. Every
power-of-two-length block starting from the beginning splits exactly
50/50 between 0s and 1s.

**History:** Implicit in Eugène Prouhet's 1851 solution of the
Prouhet–Tarry–Escott problem (partitioning integers into sets with
equal power sums); introduced explicitly by Axel Thue in 1906;
independently rediscovered by Marston Morse in 1921 (hence the usual
name, though some credit Prouhet first). In 1929, Max Euwe — later
(1935–37) World Chess Champion — used the sequence's "cube-free"
property (no block of symbols repeats three times consecutively) to
prove that infinite games of chess are possible even under a rule
declaring a draw after a move-sequence repeats three times. The
sequence is also used in fair division / turn-taking: alternating
turns according to Thue–Morse order, rather than plain ABAB, avoids
giving either side a lasting first-move advantage (discussed by Brams
& Taylor, and analyzed formally by Cooper & Dutle's "Greedy Galois
Games").

**Different topic from recent days / repo-wide:** Grepped every
`**Topic:**` line across the full repo history (2026-09-10 through
2026-11-23 evening, 150+ prior posts). The Thue–Morse sequence itself
has not been covered before. It is related to, but distinct from, two
previously-covered topics: "Pascal's Triangle mod 2" (which produces
the Sierpinski gasket via binomial coefficient parity) and "The Chaos
Game" (which produces the Sierpinski triangle via a random iterated
function system) — neither of those is the Thue–Morse sequence, which
is a 1D sequence built by iterated bitwise complementation and is
famous for completely different reasons (cube-freeness, fair
alternation, the chess-game application), not for generating a
fractal gasket.

**Accuracy check:** Verified via WebSearch across independent sources:
Allouche & Shallit's survey "The Ubiquitous Prouhet-Thue-Morse
Sequence," the Encyclopedia of Mathematics entry "Thue-Morse
sequence," Wikipedia's "Thue–Morse sequence" article, and (for the
fair-division application) the Irish Times "That's Maths" column and
John D. Cook's blog post "Fair division and the Thue-Morse sequence."
All sources agree on: the Prouhet (1851) / Thue (1906) / Morse (1921)
attribution and priority order; the two equivalent definitions
(iterated complementation and popcount parity); the cube-free
property; Max Euwe's 1929 paper applying it to show infinite chess is
possible under a threefold-repetition draw rule; and its use in fair
turn-alternation schemes. This was additionally verified
computationally in the image script: the iterated-complementation
construction was built directly in Python and asserted (via
`np.array_equal`) to exactly match the popcount-parity definition for
all n from 0 to 65,535, and the "every power-of-two block splits
exactly 50/50" property was asserted and printed for all 16 doublings
up to a 65,536-bit block (all passed with exact equality, no
approximation involved).

**Visuals:**
- `thue_morse.png` (1200x675, dark theme, two panels) — left: title,
  the two equivalent definitions, the Prouhet/Thue/Morse/Euwe history
  with a source line; right, top: a "cascade" diagram stacking
  generations 0 through 9 as rows of colored cells (blue=0,
  orange=1), each row exactly double the length of the one above,
  visually showing the self-similar doubling construction; right,
  bottom: a log-scale bar chart confirming the 0-count and 1-count
  are exactly equal at every power-of-two block length from 2^1 to
  2^12.
- `thue_morse.gif` (600x338, 12fps, ~6.4s including a held final
  frame, ~70KB, matplotlib FuncAnimation + PillowWriter) — the
  cascade builds up row by row (generation 0 through 8) with a
  caption narrating each doubling step and the final length, holding
  on the completed 9-row cascade with a caption noting the exact
  50/50 split. GIF included: yes.

**Sources:**
- Allouche, J.-P. & Shallit, J. (1999). "The Ubiquitous Prouhet-Thue-
  Morse Sequence." (survey paper; also summarized via Shallit's
  own PDF reprint)
- Encyclopedia of Mathematics, "Thue-Morse sequence"
- Wikipedia, "Thue–Morse sequence"
- The Irish Times, "That's Maths" column, on fair division and the
  Thue-Morse sequence
- John D. Cook, "Fair division and the Thue-Morse sequence" (blog)

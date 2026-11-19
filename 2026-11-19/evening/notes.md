# Evening post — 2026-11-19

**Topic:** Dürer's Magic Square, from the 1514 engraving "Melencolia I."
Albrecht Dürer hid a 4x4 grid of the numbers 1-16 on the wall behind the
engraving's brooding winged figure. Every row, column, and both diagonals
sum to 34. So do all four quadrants and the center 2x2 block (making it
a "gnomon magic square"), and the four corner cells also sum to 34. Any
two numbers placed symmetrically about the center sum to 17. The
signature touch: the two middle cells of the bottom row read 15, 14 —
quietly encoding the engraving's date, 1514.

**Different topic from recent days:** Grepped every `**Topic:**` line
across the full repo history (2026-09-10 through 2026-11-19 morning,
200+ prior posts). This specific topic (Dürer's magic square / Melencolia
I) has never been covered. Confirmed other magic-square-adjacent topics
(Pascal's triangle, Latin squares, Sudoku, amicable numbers) were also
not covered, so no overlap risk there either. Distinct from this
morning's post (the Nine-Point Circle).

**Accuracy check:** Verified via WebSearch (WebFetch to en.wikipedia.org
was blocked by the session's network policy, so this relied on WebSearch
result summaries citing Wikipedia's "Albrecht Dürer's magic square" page
and MathWorld's "Duerer's Magic Square" entry) that: the grid is
16 3 2 13 / 5 10 11 8 / 9 6 7 12 / 4 15 14 1; the magic constant is 34;
it is a gnomon magic square (quadrants and center four also sum to 34);
symmetric pairs about the center sum to 17; and the bottom-middle cells
(15, 14) encode the year 1514. All of this was additionally verified
numerically in the image-generation script itself: the script asserts
the grid contains 1-16 exactly once, that every row/column/diagonal sums
to 34, that all four quadrants, the center 2x2, and the four corners sum
to 34, that every symmetric pair sums to 17, and that cells [3,1] and
[3,2] are 15 and 14.

**Assets:**
- `durer_magic_square.png` (1200x675, dark theme, two panels) — left:
  title, a plain-language explanation of the square's properties and the
  1514 date trick, with a source line; right: the 4x4 grid with the two
  main diagonals highlighted, the date-encoding cells (15, 14) picked out
  in red, and a "1 5 1 4 -> 1514" annotation below.
- `durer_magic_square.gif` (600x338, 12fps, ~7.6s, ~120KB, built with
  matplotlib FuncAnimation + PillowWriter) — cycles the highlight through
  each of the 34-sum groups in turn (rows, columns, both diagonals, all
  four quadrants, the center 2x2, the four corners) with an on-frame
  caption for each, ending on the two date cells with a "1514" caption.
  GIF included: yes.

**Sources:**
- Wikipedia, "Albrecht Dürer's magic square"
- MathWorld (Wolfram), "Duerer's Magic Square"

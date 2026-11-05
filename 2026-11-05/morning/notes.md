# Morning post — 2026-11-05

**Topic:** Convex pentagon tiling and Marjorie Rice. There are exactly 15
known types of convex pentagon that tile the plane edge-to-edge
(monohedrally). Michaël Rao (École normale supérieure de Lyon) announced
a computer-assisted proof in May 2017 that this list of 15 is complete —
no convex pentagon beyond those 15 families can tile the plane. The
proof enumerates 371 possible vertex-matching scenarios and checks each
exhaustively; Thomas Hales (University of Pittsburgh) independently
verified the first half of the code by 11 July 2017 and publicly
affirmed it, though as of the latest available secondary source (a 2025
arXiv paper by Bernhard Klaassen) Rao had still not submitted the proof
to a peer-reviewed journal — this nuance about peer-review status is
left out of the 280-character post itself to avoid overcomplicating it,
but is accurately not overclaimed ("proved" is still the standard way
this result is described across every source found, including Quanta
Magazine).

Human-interest angle used in the post: Marjorie Rice, a San Diego
homemaker with no mathematics training beyond a single high-school
course, read Martin Gardner's 1975 Scientific American column about
pentagon tiling (which had just reported a new discovery by Richard
James III, at the time thought to bring the total to 9 known types).
Rice developed her own private notation system and, working alone
between 1975-1977, discovered 4 new types of tiling pentagon herself
(representative tilings now numbered Types 9, 11, 12, and 13 in the
standard list). Doris Schattschneider (Moravian College) verified and
publicized Rice's work. Rice's Type 13 tiling pattern was installed on
the floor of the Mathematical Association of America headquarters
foyer in Washington, D.C. in 1999. Rice died in 2017, the same year
Rao's proof closed out the problem she had contributed to as an
amateur.

**Image is illustrative, not a reproduction of Rice's specific pentagon
shapes.** Rice's actual discovered pentagons are irregular, with
specific angle/side-length constraints I did not have fully verified
numeric vertex coordinates for. Instead, the PNG/GIF show a different,
independently-constructed and provably valid convex pentagon tiling:
splitting each regular hexagon of a standard honeycomb tiling through
its center (connecting two opposite edge midpoints) always yields two
congruent convex pentagons (a straight cut through any convex polygon
always produces convex pieces), and since regular hexagons tile the
plane by translation, this gives a genuine, easily-verified monohedral
convex pentagon tiling. This is disclosed here for transparency; the
post text itself only makes the general, well-sourced claims about the
15-type classification and Marjorie Rice's story, not about the specific
pentagon shown in the image.

**Topic check:** Grepped every `**Topic:**` line across the repo's full
history (2026-09-10 through 2026-11-04, 130+ prior posts). No prior post
about pentagon tiling, the 15-type classification, or Marjorie Rice
(one false-positive grep hit on "Raoul Bott" in the 2026-10-11 Smale's
Paradox notes, unrelated). Confirmed fresh topic.

**Accuracy check via WebSearch:**
- Marjorie Rice's story, the 4 pentagon types (9, 11, 12, 13), the 1975
  Martin Gardner column, Doris Schattschneider's verification, and the
  1999 MAA foyer floor installation: corroborated by Wikipedia
  ("Marjorie Rice"), the Bridges Math Art archive essay "Marjorie Rice
  and Her Pentagonal Tilings," and Quanta Magazine's "Marjorie Rice's
  Secret Pentagons" (2017).
- Michaël Rao's May/July 2017 proof, the 371-scenario computer search,
  and Thomas Hales's independent verification: corroborated by
  Wikipedia ("Pentagonal tiling"), Quanta Magazine's "Pentagon Tiling
  Proof Solves Century-Old Math Problem," and MathScholar's "French
  mathematician completes proof of tessellation conjecture." The
  not-yet-peer-reviewed nuance comes from a 2025 arXiv preprint
  (Klaassen, arXiv:2506.18473) referenced in these search results.

**Media:** Static PNG (1200x675) — a honeycomb of regular hexagons, each
split through its center into two congruent convex pentagons (colored
red/teal), with one hexagon's split highlighted via a white dashed
outline, title, and caption text crediting Rice and the 15-type result.
Animated GIF (600x338, 12 fps, 50 frames, ~4.2s, 809KB) — the same
hexagon-to-pentagon-pair tiling pattern growing outward from the center
tile across the grid, captioned "Split a hexagon through its center..."
then "...and you get 2 congruent CONVEX pentagons. 15 types tile the
plane!", with a pulsing white outline on the first hexagon during the
caption-2 hold phase (needed because Pillow's GIF encoder silently drops
pixel-identical consecutive frames, which would otherwise have
truncated the intended hold duration). Both built with matplotlib +
numpy; GIF used FuncAnimation + PillowWriter. GIF included: yes.

Sources:
- https://en.wikipedia.org/wiki/Marjorie_Rice
- https://archive.bridgesmathart.org/2018/bridges2018-1.html
- https://www.quantamagazine.org/marjorie-rices-secret-pentagons-20170711/
- https://en.wikipedia.org/wiki/Pentagonal_tiling
- https://www.quantamagazine.org/pentagon-tiling-proof-solves-century-old-math-problem-20170711/
- https://mathscholar.org/2017/07/french-mathematician-completes-proof-of-tessellation-conjecture/
- https://arxiv.org/abs/2506.18473

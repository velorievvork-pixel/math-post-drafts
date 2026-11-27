# Morning post — 2026-11-27

**Topic:** Garfield's proof of the Pythagorean theorem. On March 7, 1876,
Ohio congressman James A. Garfield — five years before becoming the 20th
U.S. President — devised an original proof of the Pythagorean theorem
while discussing math with colleagues in the U.S. House. Take two
congruent right triangles (legs a, b; hypotenuse c) and arrange them so
their hypotenuses meet at a right angle, forming a trapezoid with
parallel sides a and b; the meeting point creates a third, isosceles
right triangle with both legs equal to c. Computing the trapezoid's area
two different ways — once via the trapezoid formula ½(a+b)(a+b), once as
the sum of the three triangles (½ab + ½ab + ½c²) — and setting them equal
collapses directly to a² + b² = c². It was printed under the title "Pons
Asinorum" in the New-England Journal of Education on April 1, 1876.
Garfield is the only U.S. president known to have published an original
mathematical proof; it's catalogued as proof #231 in Elisha Loomis's
compendium of roughly 370 Pythagorean proofs.

**Different topic from recent days / repo-wide:** Grepped every
`**Topic:**` line across the full repo history (2026-09-10 through
2026-11-26 evening, 230+ prior posts). Garfield's proof / "Pons
Asinorum" / the trapezoid dissection proof has not been covered before —
distinct from other Pythagorean-adjacent posts already in the repo
(Fermat's Last Theorem, the Dandelin spheres, Euclid-style circle/chord
theorems) and unrelated to the previous two days' topics (the Busy Beaver
function, the Kakeya set conjecture, the Gömböc, the Seven Bridges of
Königsberg).

**Accuracy check:** Verified via WebSearch across independent sources:
Scientific American's "A Presidential Pythagorean Proof," the Wikipedia
article "Garfield's proof of the Pythagorean theorem," and the MAA
(Mathematical Association of America) writeup by Sidney Kolpas. All
sources agree on: Garfield's March 7, 1876 diary entry describing the
proof; publication in the New-England Journal of Education on April 1,
1876 under the title "Pons Asinorum"; the trapezoid-of-three-triangles
construction; and its listing as proof #231 in Loomis's "The Pythagorean
Proposition" (~370 proofs catalogued). This was additionally verified
numerically in the image script: the trapezoid's vertices and triangle
legs were computed directly in Python with a = 3, b = 4 (c = 5 by
construction), and the script asserts the trapezoid-formula area exactly
equals the sum of the three triangle areas, and that a² + b² = c²
exactly, both to within 1e-9 (matched to machine precision in the actual
run).

**Assets:** static PNG (garfield_proof.png) + animated GIF
(garfield_proof.gif) included. The PNG shows the trapezoid dissection
(blue/orange/red right triangles + green isosceles-right triangle) with
both area formulas worked out side by side, plus the 1876 history. The
GIF (600x338, 12fps, ~7.65s, ~225KB, matplotlib FuncAnimation +
PillowWriter) animates two separate congruent right triangles sliding
together to assemble the trapezoid, the third triangle fading in between
them, then reveals the two area formulas culminating in "a² + b² = c²."

**Sources:**
- Scientific American, "A Presidential Pythagorean Proof"
- Wikipedia, "Garfield's proof of the Pythagorean theorem"
- Mathematical Association of America (S. Kolpas), on Garfield's proof
  and its 1876 publication in the New-England Journal of Education

# Evening post — 2026-10-14

**Topic:** Cantor's diagonal argument (1891) — Georg Cantor's proof that
the real numbers in (0,1) cannot be put into a one-to-one correspondence
with the natural numbers. Assume, for contradiction, that every real
number in (0,1) has been listed as an infinite decimal s1, s2, s3, ...
Construct a new number by going down the diagonal and changing the nth
digit of the nth listed number (e.g. d -> d+5 mod 10). The resulting
number differs from every single sn in at least one digit (the nth), so
it cannot appear anywhere on the list — contradicting the assumption that
the list was complete. Therefore the reals are uncountable: there is a
"bigger" infinity than the countable infinity of the natural numbers
(|R| > |N|). This was published in Cantor's 1891 paper "Über eine
elementare Frage der Mannigfaltigkeitslehre" and became the foundation
of modern set theory and the modern notion that infinities come in
different sizes (cardinalities); the same diagonalization technique
later underpins Cantor's theorem (a set's power set is always strictly
larger), Gödel's incompleteness theorems, and Turing's proof that the
halting problem is undecidable.

**Different topic from this morning** (`../morning/notes.md` covered
Graham's Number / Knuth's up-arrow notation / Ramsey theory — unrelated).
Checked every `**Topic:**` line across the full repo history (all
September and October notes.md files) — Cantor's diagonal argument has
not been used before; distinct from the prior, separate "Cantor Set"
post (2026-09-?), which is about a different construction (repeatedly
removing middle thirds of [0,1]) with no overlap in content.

**Accuracy check:** Verified via WebSearch against Wikipedia's "Cantor's
diagonal argument" article and corroborating sources (MacTutor History
of Mathematics archive, UBC math course notes), which confirm: the 1891
paper and its diagonal construction over infinite binary sequences (here
illustrated with decimal digits instead, a standard and equivalent
pedagogical simplification); that the constructed number differs from
every sn in the nth digit by construction; and that this established
|R| > |N|. Note: some sources (MacTutor) state Cantor actually first
proved the uncountability of the reals via a different (non-diagonal)
argument in 1873/1874, with the diagonal argument itself introduced
later in 1891 as a cleaner, more general proof technique — the post and
image attribute the diagonal argument specifically to 1891, not claiming
it was his very first uncountability proof, to stay accurate to this
nuance. The digits used in the image/GIF are illustrative (randomly
generated via Python's `numpy.random`, not hand-picked), since the point
of the argument is the general method, not specific numbers.

**Visuals:** Static PNG (`cantor_diagonal.png`, 1200x675, dark theme,
two panels) — left: a 5x5 grid of digits representing 5 listed numbers
s1..s5, diagonal entries circled, with the "new" anti-diagonal number
built by flipping each diagonal digit, plus a short explanation of why
it matches none of the listed numbers; right: a schematic contrasting N
(1,2,3,...) with R (0,1), showing failed 1-to-1 arrows and a boxed
conclusion that |R| > |N|. A GIF was also included
(`cantor_diagonal.gif`, 600x338, nominal 12fps, 12 encoded frames after
duplicate-frame collapsing, ~4.84s total, ~120KB, built with matplotlib
FuncAnimation + PillowWriter) — animates circling each diagonal digit in
turn, revealing the flipped "new" digit at each step, with an in-frame
lower-third caption walking through "Walk the diagonal..." -> "Flip each
digit..." -> "differs from EVERY row!" -> "So |R| > |N|, a bigger
infinity." GIF included: yes.

**Sources:**
- https://en.wikipedia.org/wiki/Cantor%27s_diagonal_argument
- https://mathshistory.st-andrews.ac.uk/SH/cantor_sh.pdf (MacTutor)
- https://personal.math.ubc.ca/~PLP/book/sec_uncount.html

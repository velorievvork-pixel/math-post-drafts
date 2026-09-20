# Evening post — 2026-09-20 (evening2)

**Why "evening2":** by the time this session-bound run fired (17:08 UTC),
`2026-09-20/evening/` already existed (the Lorenz Attractor / butterfly
effect, from the other independently-scheduled routine). To avoid
overwriting it, this run's output lives in `evening2/` with a distinct
topic and mechanism. `morning/` (Heighway Dragon Curve) was also checked.

**Topic:** Pascal's Triangle mod 2. Take Pascal's Triangle (each entry is
the sum of the two above it) and color every ODD entry, leaving even
entries blank. The result is not random speckle — it converges exactly to
the Sierpinski triangle/sieve, a fractal usually associated with geometric
subdivision or randomized point-jumping, produced here by nothing more
than repeated addition and a parity check. Provable via Lucas' theorem:
C(n,k) mod 2 is odd exactly when every bit of k is also a bit of n (i.e.
`(n & k) == k`).

**Accuracy check:** verified via WebSearch against MathWorld's "Sierpinski
Sieve" article and an arXiv paper on Pascal's triangle mod primes (both
confirm the mod-2 connection to the Sierpinski triangle via Lucas'
theorem), not recalled from memory alone. Three things were verified
programmatically rather than assumed:
1. The fast bitwise parity shortcut `(n & k) == k` was cross-checked
   against direct computation of `math.comb(n, k) % 2` for all entries in
   the first 64 rows — 0 mismatches — before trusting it for the full
   512-row render (computing binomial coefficients directly at n=512
   would be needlessly slow and the numbers astronomically large).
2. The known theorem that the first 2^(n+1) rows contain exactly 3 exact
   copies of the first 2^n rows was checked cell-by-cell on real data
   (rows 0-127 vs. the two halves of rows 128-255): both comparisons
   returned an exact match, not just "looks similar."
3. An independent numeric sanity check: the total count of odd entries
   across the first 512 (=2^9) rows should equal 3^9 by the same
   self-similarity theorem. The actual computed count was 19,683 = 3^9
   exactly.

**Format:** 3-slide carousel (recommended) — slide1_hook.png (hook: only
8 rows shown, deliberately too few to look fractal yet, framed as "color
every odd number"), slide2_sierpinski.png (reveal: the full 512-row
fractal), slide3_selfsimilar.png (payoff: the 3 self-similar sub-copies
highlighted in distinct colors, the ones verified cell-by-cell above).
Also kept: pascal_sierpinski.png (single combined side-by-side static
image) and pascal_sierpinski.gif (animated: rows building up from 4 to
512, ~5.5s, 1.5fps, 338x338, row count captioned) as alternative formats.

**Bug caught and fixed:** the first attempt at the combined static image
rendered completely blank except for the title text — the scatter marker
size (`s=0.4`) was tuned for the carousel slides' higher effective
resolution (180 dpi, full 1080x1080 canvas per plot) and rasterized to
nothing at the combined image's lower effective resolution (100 dpi,
~600px-wide half-panels). Caught by checking non-background pixel counts
programmatically rather than assuming the render worked, then fixed by
increasing the marker size for that specific figure.

**Sources:**
- https://mathworld.wolfram.com/SierpinskiSieve.html
- https://arxiv.org/pdf/1908.04273 (Pascal's triangle mod primes / Lucas' theorem)

Different from all earlier posts: Kakeya needle problem, Go First Dice,
golden angle/sunflower phyllotaxis, Hardy-Ramanujan 1729, Ulam spiral,
Chaos Game/Sierpinski triangle, Buffon's Needle, Mobius strip, Voronoi
diagram, Penrose tiling, Coastline Paradox/Koch snowflake, Squaring the
Square, Konigsberg Bridges, Benford's Law, Efron's Dice, Monty Hall,
Cantor Set, Borromean Rings, Four Color Theorem, Hat aperiodic monotile,
Birthday Paradox, Zeno's Paradox, Collatz Conjecture, Gabriel's Horn,
Pigeonhole Principle, Weierstrass function, Mandelbrot Set, Newton's
Fractal, Kepler's Conjecture/sphere packing, Barnsley Fern, Heighway
Dragon Curve (this morning), Lorenz Attractor (this evening's other
post) — although this produces the same Sierpinski shape as the earlier
Chaos Game post, the MECHANISM is entirely different and is the point of
the post: modular arithmetic on binomial coefficients (a number-theory /
cellular-automaton-style parity rule), not randomized IFS point-jumping.

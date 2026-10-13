# Morning post — 2026-10-13

**Topic:** The Twin Prime Conjecture, and the "bounded gaps between primes"
breakthrough. Twin primes are pairs (p, p+2) that are both prime, e.g.
(3,5), (11,13), (41,43). It is conjectured there are infinitely many such
pairs, but this remains unproven. In April 2013, Yitang Zhang proved the
related (weaker) fact that there exist infinitely many primes with *some*
bounded gap between them, with that gap at most 70,000,000. A Polymath8a
collaborative project quickly brought the bound down to 4,680; James
Maynard (and independently Terence Tao) introduced a new sieve method
pushing it to 600; Polymath8b then combined these ideas to reach 246
unconditionally (2014) — the current best unconditional bound. (Under the
conjectural generalized Elliott–Halberstam conjecture the bound drops much
further, to 6, but that part is conditional and was not included in the
post to keep the claims clean/verifiable.)

Checked every `**Topic:**` line across all September/October notes.md
files in this repo's history — twin primes / bounded gaps between primes
has not been used before. Closest prior topics were other prime-related
posts (Goldbach Conjecture, Riemann Hypothesis, Ulam Spiral x2,
sphere-packing in 8/24 dimensions), none of which overlap with twin
primes specifically.

**Accuracy check:** Zhang's 70,000,000 bound, the Polymath8a reduction to
4,680, Maynard's sieve result of 600, and the final unconditional
Polymath8b bound of 246 were all cross-verified via WebSearch against the
Polymath "bounded gaps between primes" retrospective (arXiv:1409.8361)
and secondary sources describing the same timeline. Twin prime pairs up
to 150 used in the static image, and up to 80 in the GIF, were computed
directly via a sieve of Eratosthenes in the generating script (not
hand-typed), so they are exact.

**Visuals:** Static PNG (`twin_primes.png`) has two panels — a number
line up to 150 highlighting each twin-prime pair with an arc, and a log-
scale horizontal bar chart showing the shrinking bound record
(70,000,000 → 4,680 → 600 → 246). A GIF was also included
(`twin_primes.gif`, ~540KB, 82 frames at 12fps, 600x338) animating a
scanning dot sweeping across the integers 2–80, marking primes and
drawing an arc + highlight whenever a twin pair is found, with a running
caption ("Found N twin-prime pairs up to n=X").

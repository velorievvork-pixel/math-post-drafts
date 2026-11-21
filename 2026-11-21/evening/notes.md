# Evening post — 2026-11-21

**Topic:** The Ulam Spiral. Write the positive integers in a square
spiral starting from 1, then mark the primes. Stanislaw Ulam noticed
in 1963, while doodling during a boring talk at a scientific meeting,
that the primes don't scatter randomly across the spiral — they form
visible diagonal lines. Checked on the MANIAC computer and later
extended to ~100,000 points with Myron Stein and Mark Wells, the
pattern appeared on the cover of Scientific American in March 1964
(via Martin Gardner's column). The diagonals correspond to values of
quadratic polynomials (e.g. n^2 + n + 41, related to Euler's famous
prime-rich polynomial); explaining why some quadratics are so much
richer in primes than others connects to Landau's problems, which
remain unsolved in number theory. Different topic from this morning's
Benford's Law post.

GIF included: yes.

**Assets:**
- `ulam_spiral.png` (1200x675, dark theme, two panels) — left: title,
  explanation, and the Ulam/Gardner history with a source line; right:
  a scatter plot of the primes among the first 40,000 integers plotted
  on the Ulam spiral (computed directly via a sieve + spiral-coordinate
  function in the script), showing the diagonal clustering.
- `ulam_spiral.gif` (600x338, 12fps, ~5.8s incl. hold, ~235KB,
  matplotlib FuncAnimation + PillowWriter) — the spiral grows from the
  first 200 integers up to 10,000, with primes appearing as highlighted
  dots and a live caption showing the current integer count.

**Sources:**
- Wikipedia, "Ulam spiral"
- MacTutor History of Mathematics, "Ulam's spiral" (University of
  St Andrews)
- Wolfram MathWorld, "Prime Spiral"

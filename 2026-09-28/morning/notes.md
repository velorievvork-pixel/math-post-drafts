# Morning post — 2026-09-28

**Topic:** The Ulam Spiral. In 1963, Stanisław Ulam noticed while doodling
integers in a square spiral during a dull scientific meeting that circling
the prime numbers produced a pattern of diagonal lines rather than random
scatter. Martin Gardner popularized it in Scientific American, which put
the spiral (generated on the MANIAC computer) on its March 1964 cover. The
diagonals correspond to quadratic polynomials in n that are unusually
prime-rich; no proof fully explains the effect, and it's independent of
which number sits at the center.

**Accuracy check:** verified via WebSearch against Wikipedia's "Ulam
spiral" article, MathWorld's "Prime Spiral" entry, and MacTutor's history
page — all agree on the 1963 date, Ulam noticing it during a lecture, and
the March 1964 Scientific American cover. The static image and GIF were
generated locally with a real sieve of Eratosthenes and a real spiral
coordinate walk (not simulated/fabricated data) over the integers 1 to
63,001 (static) / 1 to 10,201 (GIF).

**Media:** static PNG (251x251 grid rendered at 1200x675) plus an animated
GIF (600x338, ~14fps, ~6.3s, 90 frames, PillowWriter) showing the spiral
being traced outward with primes lighting up gold as they're plotted, and
an in-frame caption.

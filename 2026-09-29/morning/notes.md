# Morning post — 2026-09-29

**Topic:** Benford's Law — in many naturally-occurring and generated numerical
datasets, the leading (first) digit is not uniformly distributed 1-9. Instead
it follows P(first digit = d) = log10(1 + 1/d): digit 1 appears as the leading
digit about 30.1% of the time, decreasing all the way down to digit 9 at only
about 4.6%. First noticed by astronomer Simon Newcomb in 1881 (worn pages of
logarithm tables), independently rediscovered and popularized by physicist
Frank Benford in 1938 across 20 varied datasets. Used today to help flag
potential fraud in tax filings, election results, and financial statements
by comparing real first-digit distributions to the Benford curve.

**Accuracy check:** verified via WebSearch (Wikipedia "Benford's law" and
corroborating secondary sources) — Newcomb's 1881 observation, Benford's 1938
paper title/venue (Proceedings of the American Philosophical Society), the
exact formula P(d) = log10(1+1/d), the ~30.1%/~4.6% figures for digits 1 and
9, and the fraud-detection use case. The visualization itself uses a
self-verifying real dataset (leading digits of 2^1 ... 2^999, computed
directly in Python) rather than an externally-sourced dataset, so the "actual"
bars are exact and reproducible, not asserted.

**Format:** benfords_law.png (static bar chart comparing Benford's Law
prediction vs. actual leading-digit frequencies of powers of 2) and
benfords_law.gif (~4.4s @ 12fps, 600x338, animated histogram race showing the
actual distribution converging to the Benford curve as more powers of 2 are
examined, 3 -> 400).

**Sources:**
- https://en.wikipedia.org/wiki/Benford's_law
- https://builtin.com/data-science/benfords-law

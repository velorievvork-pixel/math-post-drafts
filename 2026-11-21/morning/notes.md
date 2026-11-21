# Morning post — 2026-11-21

**Topic:** Benford's Law. In many real, naturally occurring collections
of numbers, the leading (first significant) digit is NOT uniformly
distributed across 1-9. Instead it follows P(d) = log10(1 + 1/d): a
number is most likely to start with 1 (≈30.1% of the time) and least
likely to start with 9 (≈4.6%). First noted by astronomer Simon Newcomb
in 1881, independently rediscovered by physicist Frank Benford in 1938
after checking it against 20,000+ real-world values. It's now a
standard tool in forensic accounting/fraud detection, since fabricated
numbers tend to be too uniform across leading digits to match the law.

GIF included: yes.

**Assets:**
- `benfords_law.png` (1200x675, dark theme, two panels) — left: title,
  the formula, explanation, and the Newcomb/Benford history with a
  source line; right: a bar chart comparing the Benford prediction to
  the empirical leading-digit distribution of 2^n for n=1..2000 (a real,
  verifiable sequence computed directly in the script), matching to
  within 0.13 percentage points.
- `benfords_law.gif` (600x338, 12fps, ~5.4s, ~380KB, matplotlib
  FuncAnimation + PillowWriter) — animated bar chart where the "2^n
  sample" bars start from a small sample (2^1..2^5) and converge, as n
  grows to 3000, onto the fixed Benford-prediction bars, with a live
  caption showing the current sample size.

**Sources:**
- Wikipedia, "Benford's law"
- Newcomb, S. (1881). "Note on the Frequency of Use of the Different
  Digits in Natural Numbers." American Journal of Mathematics, 4(1).
- Benford, F. (1938). "The Law of Anomalous Numbers." Proceedings of
  the American Philosophical Society, 78(4).

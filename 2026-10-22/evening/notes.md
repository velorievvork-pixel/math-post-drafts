# Evening post — 2026-10-22

**Topic:** Zeckendorf's Theorem. Every positive integer can be written,
in exactly one way, as a sum of non-consecutive Fibonacci numbers (using
the convention 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ... with the duplicate
leading 1 dropped). A simple greedy algorithm finds it: repeatedly
subtract the largest Fibonacci number that still fits (example used in
the assets: 64 = 55 + 8 + 1). Named for Edouard Zeckendorf, a Belgian
physician and amateur mathematician who had a proof by 1939 but didn't
publish until 1972; the result had already appeared in print in 1952 via
Gerrit Lekkerkerker. Also touched on a real application: "Fibonacci
coding," a prefix-free universal binary code built directly from the
Zeckendorf representation (reverse the digits, append a terminating 1),
whose defining property — no two 1-bits ever adjacent except at the
designated "11" terminator — makes it notably resistant to bit
insertion/deletion errors, an alternative to Elias/Huffman coding in
some applications.

**Different topic from this morning and recent days:** Morning's post
(2026-10-22/morning) covered the Hadwiger–Nelson problem / chromatic
number of the plane. Grepped all `**Topic:**` lines across the repo's
full history (Sept 10 – Oct 22, 94 prior posts) — no prior post covered
Zeckendorf's theorem, Fibonacci coding, or Fibonacci-number
representations. (A related-but-distinct topic previously covered: "The
Fibonacci Spiral and the Golden Ratio," which is about geometric spiral
construction, not number representation — no overlap.)

**Accuracy check:** Verified via WebSearch across independent sources —
Wikipedia's "Zeckendorf's theorem" and "Fibonacci coding" articles,
Encyclopedia of Mathematics, ProofWiki, and an arXiv paper on
Gopala-Hemachandra codes that recaps the Fibonacci-coding construction
and its error-resilience property. Confirmed facts, consistent across
sources: the theorem statement and uniqueness; the greedy algorithm;
Zeckendorf's 1939 proof / 1972 publication and Lekkerkerker's 1952 prior
publication of the same result; the Fibonacci-coding construction
(reversed Zeckendorf digits + terminating 1, codewords end "11", no two
1-bits adjacent elsewhere) and its cited robustness to bit
insertion/deletion errors. The example decomposition 64 = 55 + 8 + 1 and
the derived bit-string 1000100011 were independently verified by exact
computation in this session (greedy algorithm re-implemented and checked
against brute-force search over all non-consecutive Fibonacci subsets
summing to 64 — confirmed unique).

**Assets:**
- `zeckendorf_theorem.png` (1200x675, dark theme, two panels) — left: a
  bar chart of Fibonacci numbers 1 through 89 with the three bars used in
  64's decomposition (55, 8, 1) highlighted, plus a dashed reference line
  at 64; right: an explanation of the theorem, its history, and a
  bit-by-bit diagram of the Fibonacci-coding of 64 with the "11"
  terminator highlighted.
- `zeckendorf_theorem.gif` (600x338, 12fps, ~4.9s runtime, ~94KB, built
  with matplotlib FuncAnimation + PillowWriter) — animates the Fibonacci
  bars growing in, then the greedy pick of 55, then 8, then 1, updating a
  running "64 = ..." equation, with an in-frame title and a lower-third
  caption band narrating each step. GIF included: yes.

**Sources:**
- Wikipedia, "Zeckendorf's theorem" (en.wikipedia.org, via WebSearch)
- Wikipedia, "Fibonacci coding" (en.wikipedia.org, via WebSearch)
- Encyclopedia of Mathematics, "Zeckendorf representation"
  (encyclopediaofmath.org, via WebSearch)
- ProofWiki, "Zeckendorf's Theorem" (proofwiki.org, via WebSearch)
- "Gopala-Hemachandra codes revisited" (arXiv:2004.00821, via WebSearch)
  — Fibonacci-coding construction and error-resilience properties

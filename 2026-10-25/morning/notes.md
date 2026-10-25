# Morning post — 2026-10-25

**Topic:** Perfect numbers and the Euclid–Euler theorem. A perfect
number equals the sum of its own proper divisors: 6 = 1+2+3, 28 =
1+2+4+7+14, 496, 8128, ... The Pythagoreans and Euclid (c. 300 BC)
already knew about them. Euclid proved that if 2^p − 1 is prime (a
Mersenne prime), then 2^(p-1)(2^p − 1) is perfect. About 2000 years
later, Euler proved the converse — every EVEN perfect number must
have exactly this form — giving a perfect one-to-one correspondence
between even perfect numbers and Mersenne primes (the Euclid–Euler
theorem). As of October 2026 there are 52 known Mersenne primes, so
52 known even perfect numbers. Two famous open questions: (1) are
there infinitely many (equivalent to infinitely many Mersenne
primes being unknown); (2) does even a single ODD perfect number
exist? None has ever been found despite extensive computer search
(proven to exceed 10^300, with some sources citing searches pushing
toward 10^500), and no one has proven none exists either.

**Different topic from recent days** — grepped every `**Topic:**`
line across the full repo history (Sept 10 – Oct 24, 2026, 100+
prior posts). Perfect numbers / the Euclid–Euler theorem has not
been used before. Related-but-distinct topics already covered:
"Largest Known Prime" 2^136,279,841 − 1 (2026-10-21 morning, about
the record prime itself, not perfect numbers), Goldbach's Conjecture,
Fermat's Last Theorem, the Riemann Hypothesis, Euler's Identity.

**Accuracy check:** Verified via WebSearch across independent
sources:
- Wikipedia, "Euclid–Euler theorem" and "Mersenne prime" — the
  theorem statement, Euclid's and Euler's respective directions, and
  the 52-known-Mersenne-primes count (as of 2025/2026).
- Wikipedia, "Largest known prime number" and a Heise.de report on
  M136279841 — confirms 2^136,279,841 − 1 (41,024,320 digits,
  discovered Oct 2024 by Luke Durant/GIMPS using GPUs) is still the
  52nd and largest known Mersenne prime as of October 2026, i.e. the
  count of 52 is current for this post.
- Brent, Cohen & te Riele (AMS Math. Comp., 1991) and a follow-up
  arXiv survey (Nielsen) — the >10^300 lower bound for any odd
  perfect number, with later work (Lipp) aiming for 10^500; also
  Tuckerman (1973) for the much earlier >10^36 bound, confirming the
  search has been extended over decades with no odd perfect number
  ever found.
All small perfect numbers and divisor sums (6, 28, 496, 8128) and the
Euclid formula table (p=2,3,5,7,11,13) were independently verified by
exact computation in this session (divisor sums summed in Python;
2^11−1=2047=23×89 confirmed composite, so p=11 correctly excluded).

**Assets:**
- `perfect_numbers.png` (1200x675, dark theme, two panels) — left:
  divisor-sum diagrams for 6, 28, and 496 as circles of their proper
  divisors summing to the number itself, plus the odd-perfect-number
  open question; right: a table of the Euclid–Euler correspondence
  for p = 2, 3, 5, 7, 11 (the gap case), 13, plus the Euclid/Euler
  history and the 52-known-pairs stat.
- `perfect_numbers.gif` (600x338, 12fps, ~6.6s runtime, ~56KB, built
  with matplotlib FuncAnimation + PillowWriter) — animates 6 and then
  28 being built up divisor-by-divisor to their sum, with an in-frame
  title and caption. GIF included: yes.

**Sources:**
- Wikipedia, "Euclid–Euler theorem" (en.wikipedia.org)
- Wikipedia, "Mersenne prime" (en.wikipedia.org)
- Wikipedia, "Largest known prime number" (en.wikipedia.org)
- Heise.de, "M136279841: New largest known Mersenne prime number
  confirmed with GPU"
- Brent, Cohen & te Riele, "A search procedure and lower bound for
  odd perfect numbers" and related AMS Math. Comp. papers (via
  researcher.ibm.com / ams.org, through WebSearch snippets)

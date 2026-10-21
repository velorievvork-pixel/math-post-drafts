# Evening post — 2026-10-21

**Topic:** The Largest Known Prime, 2^136,279,841 − 1 (Mersenne prime
M136279841), found via GIMPS (the Great Internet Mersenne Prime Search).
It is the 52nd known Mersenne prime, has 41,024,320 decimal digits, and
was discovered by Luke Durant, a former Nvidia engineer, who ran GIMPS
software on a distributed network of thousands of GPUs spread across 24
data centers in 17 countries — the first record prime ever found using
GPUs rather than CPUs. The candidate was first flagged "probably prime"
by an Nvidia A100 GPU in Dublin, then confirmed via the classic
Lucas–Lehmer primality test by an Nvidia H100 in San Antonio, Texas.
GIMPS made its public announcement on October 21, 2024 — exactly two
years before today's post, giving a nice anniversary hook. The post also
situates this record in the ~150-year history of record primes (from
Édouard Lucas's hand-proved 39-digit M127 in 1876, through the first
computer-discovered primes on SWAC in 1952, the 1978 discovery by two
teenagers, and the 2018 GIMPS record, up to 2024), showing roughly
six-order-of-magnitude growth in record size.

**Different topic from recent days:** confirmed against the morning
post for today (Gödel's Incompleteness Theorems) and checked the full
topic history across the repo (90+ prior posts) — no prior post on the
largest known prime / Mersenne primes / GIMPS / Luke Durant specifically
(the Kakeya needle problem, a different topic, was covered on
2026-09-10, and is unrelated to this one).

**Accuracy check:** Verified via WebSearch across multiple independent
sources — Wikipedia's "Largest known prime number" article, Chris
Caldwell's t5k.org "Largest Known Prime by Year" history page, the EFF's
page on the 2008 Mersenne-prime award, Heise.de and PC Watch coverage of
the October 2024 GPU-based discovery, the Smithsonian Magazine and PopSci
write-ups on Luke Durant's find, and Riesel's list of known Mersenne
primes (rieselprime.de). All sources agree on: 2^136,279,841 − 1 being
the 52nd known Mersenne prime with 41,024,320 digits; discovery via GPUs
(first flagged by an A100 in Dublin, confirmed by an H100 in San Antonio
using the Lucas–Lehmer test); Luke Durant as the finder; and the October
2024 timing (sources vary slightly on the exact day between Oct 11–21,
2024, with the public GIMPS announcement itself dated October 21, 2024
per PC Watch). Historical record-prime data points (1876 M127/39 digits,
1952 M2281/687 digits, 1978 M21701/6,533 digits, 2018 M82,589,933/24.86M
digits) were each cross-checked against the t5k.org history page and/or
Wikipedia's Mersenne prime list. (Direct fetches of wikipedia.org failed
through the sandbox's egress proxy as in several prior runs, so facts
were cross-verified via WebSearch result snippets from multiple
independent outlets instead.)

**Assets:**
- `largest_known_prime.png` (1200x675, dark theme, two panels) — left: a
  log-scale line plot of the digit-count of the record prime by year of
  discovery (1876 → 1952 → 1978 → 2018 → 2024), showing the ~1,000,000x
  growth; right: a fact card on 2^136,279,841 − 1 with its digit count,
  Mersenne-prime rank, the GPU-based discovery method, and the two-year
  anniversary framing.
- `largest_known_prime.gif` (600x338, 12fps, ~7.0s runtime, ~144KB,
  built with matplotlib FuncAnimation + PillowWriter) — animates the same
  record-prime growth curve being traced out year by year, with an
  in-frame title and a changing lower-third caption narrating each
  historical milestone, ending on the 2024 GPU discovery. GIF included:
  yes.

**Sources:**
- Wikipedia, "Largest known prime number" (en.wikipedia.org, via
  WebSearch snippets)
- Chris Caldwell / t5k.org, "The Largest Known Prime by Year: A Brief
  History" (t5k.org/notes/by_year.html, via WebSearch)
- Heise.de, "M136279841: New largest known Mersenne prime number
  confirmed with GPU" (heise.de, via WebSearch)
- PC Watch, coverage of the October 2024 GIMPS announcement (pc.watch.
  impress.co.jp, via WebSearch)
- Smithsonian Magazine and PopSci, coverage of Luke Durant's discovery
  (smithsonianmag.com, popsci.com, via WebSearch)
- Riesel's list of known Mersenne primes (rieselprime.de/ziki/List_of_
  known_Mersenne_primes, via WebSearch)

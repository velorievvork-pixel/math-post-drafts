# Evening post — 2026-10-15

**Topic:** The Prime Number Theorem. π(x) (the count of primes below x)
is asymptotically equal to x / ln(x) as x → ∞. The pattern was first
noticed from prime tables by Carl Friedrich Gauss around 1792 (he was
about 15), and independently conjectured by Adrien-Marie Legendre in
1798. Pafnuty Chebyshev later proved bounds of the right order of
magnitude, but a full proof eluded mathematicians for a century. It was
finally proved in 1896, independently, by Jacques Hadamard and Charles
Jean de la Vallée Poussin, both leaning on properties of Riemann's zeta
function (and on Hans von Mangoldt's 1895 work rigorizing several of
Riemann's 1859 claims — so the two 1896 proofs were not fully
independent in method). A fully "elementary" proof avoiding complex
analysis was later found by Paul Erdős and Atle Selberg in 1949.
Surprising detail used in the post: the logarithmic integral li(x) is
an even better approximation to π(x) than x/ln(x), and in every case
ever computed, li(x) slightly overestimates π(x) — yet J.E. Littlewood
proved in 1914 that the difference π(x) − li(x) changes sign infinitely
often. The first crossover (the "Skewes number") is only known to lie
below roughly 1.397×10^316, a staggeringly large but finite bound.

**Different topic from recent days** — checked every `**Topic:**` line
across this repo's history (81 prior posts, Sept–Oct). The Prime Number
Theorem itself has not been used before. Related-but-distinct prior
posts exist (Twin Prime Conjecture, Goldbach Conjecture, Riemann
Hypothesis, Ulam Spiral, Hardy-Ramanujan 1729, Cantor's diagonal
argument) but none cover the π(x) ~ x/ln(x) asymptotic law itself.
Also distinct from this morning's post (2026-10-15/morning), which
covered the Happy Ending problem / Erdős–Szekeres theorem — unrelated
area of combinatorial geometry.

**Accuracy check:** WebSearch cross-referenced multiple independent
sources — the AMS Feature Column on primes, Britannica's "prime number
theorem" article, ProofWiki's historical note, and a St Andrews
MacTutor biography PDF of de la Vallée Poussin — all agreeing on: the
Gauss (c.1792)/Legendre (1798) conjecture, Chebyshev's partial bounds,
the independent 1896 proofs by Hadamard and de la Vallée Poussin using
the Riemann zeta function, and the 1949 Erdős–Selberg elementary proof.
The li(x)/Skewes number detail was separately verified via Wikipedia's
"Skewes's number" article and an arXiv paper on bounds for the
first x with π(x) > li(x) (Bays & Hudson 2000 bound of ~1.401×10^316,
refined by Chao & Plymen to ~1.398×10^316) — both sources agree li(x)
overestimates π(x) for all x checked so far and that Littlewood proved
infinitely many sign changes exist. The π(x), x/ln(x), and li(x) curves
in the image were computed directly in Python (a sieve of Eratosthenes
up to x=100,000 for π(x); numerical integration of 1/ln(t) for li(x)),
not asserted from memory.

**Visuals:** Static PNG (`prime_number_theorem.png`, 1200x675, dark
theme, two panels) — left: π(x), x/ln(x), and li(x) plotted together up
to x=100,000 from an actual sieve computation, with an inset showing
the ratio π(x)/(x/ln x) converging toward 1; right: the theorem
statement plus historical notes and the li(x)/Skewes-number quirk. A
GIF was also included (`prime_number_theorem.gif`, 600x338, 12fps, 70
frames, ~245KB, built with matplotlib FuncAnimation + PillowWriter) —
animates π(x) and x/ln(x) being traced together as x grows from 0 to
2000 (from a real sieve), with an in-frame title and a caption that
switches partway through to state the asymptotic law. GIF included:
yes.

**Sources:**
- https://www.ams.org/publicoutreach/feature-column/primes3.html
- https://www.britannica.com/science/prime-number-theorem
- https://proofwiki.org/wiki/Prime_Number_Theorem/Historical_Note
- https://mathshistory.st-andrews.ac.uk/Strick/vallee_poussin.pdf
- https://en.wikipedia.org/wiki/Skewes%27s_number

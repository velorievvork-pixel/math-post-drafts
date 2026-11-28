# Evening post — 2026-11-28

**Topic:** The Sieve of Eratosthenes. Around the 3rd century BC,
Eratosthenes of Cyrene — chief librarian at Alexandria, also known for
calculating Earth's circumference — described a simple algorithm for
finding every prime up to N: list the integers from 2 to N, repeatedly
take the smallest unmarked number (it's prime), and cross out all of
its multiples. Whatever survives is prime. You never need to sieve
past √N — below 100 that means stopping once you've sieved with 2, 3,
5, and 7. The oldest surviving description of the method is in
Nicomachus of Gerasa's *Introduction to Arithmetic* (~2nd century AD,
Book I Ch. 13), which credits it to Eratosthenes. It's one of the
oldest algorithms still in everyday practical use, and a direct
ancestor of the sieve-based prime generators used in modern software.

**Different topic from today's morning post** (2026-11-28/morning,
the Euler line / triangle-center collinearity) and from the full repo
history (2026-09-10 through 2026-11-28 morning, 230+ prior posts,
grepped every `**Topic:**` line) — the Sieve of Eratosthenes itself has
not been covered before, and is distinct from other number-theory
posts in the repo (the Prime Number Theorem, twin primes, the Ulam
spiral, the largest known Mersenne prime, Goldbach's conjecture, the
Chinese Remainder Theorem, etc.), none of which describe this specific
ancient prime-generating algorithm.

**Accuracy check:** Verified via WebSearch across independent sources
(Wikipedia "Sieve of Eratosthenes," MathWorld, MacTutor History of
Mathematics' Eratosthenes biography, and OEIS). All sources agree:
Eratosthenes of Cyrene (c. 276–194 BC); the earliest surviving written
description is in Nicomachus of Gerasa's *Introduction to Arithmetic*
(Book I, Ch. 13, early 2nd century AD), which attributes the method to
Eratosthenes; the algorithm as described (strike multiples of each
successive unmarked number starting from 2); and that sieving only
needs to proceed up to √N since any smaller composite already has a
prime factor ≤ √N. This was additionally verified numerically in the
image scripts: the sieve was implemented directly in Python and its
output asserted (exact list equality) against an independent
trial-division primality check for all n from 1 to 100, confirming
exactly 25 primes below 100 and exactly {2, 3, 5, 7} as the primes
needed to sieve up to √100 = 10.

**Assets:** static PNG (sieve_of_eratosthenes.png) + animated GIF
(sieve_of_eratosthenes.gif) included. The PNG shows a 10×10 grid of
1–100 with the final sieve result (25 primes highlighted in teal,
composites darkened, 1 shown separately), alongside the algorithm
steps and history. The GIF (600×338, 12fps, 44 frames, ~3.7s,
matplotlib FuncAnimation + PillowWriter, ~247KB) animates the sieve
live: 2, 3, 5, and 7 are each highlighted in orange in turn as their
multiples are crossed out batch by batch, ending on all 25 surviving
primes highlighted in teal with a closing caption.

**Sources:**
- Wikipedia, "Sieve of Eratosthenes"
- MathWorld (Wolfram), "Sieve of Eratosthenes"
- MacTutor History of Mathematics (University of St Andrews),
  "Eratosthenes"
- OEIS, "Sieve of Eratosthenes" wiki page

# Morning post — 2026-10-31

**Topic:** The 100 Prisoners Problem. 100 numbered boxes hold the
numbers 1–100 in a random permutation. Each of 100 prisoners may open
up to 50 boxes looking for their own number; all must succeed for
everyone to go free. Random guessing per prisoner gives the group
essentially 0 probability of success (0.5^100). But if each prisoner
starts by opening the box matching their own number, then follows
whatever number they find inside (the "cycle-following" strategy),
the group's probability of total success is 1 − (H₁₀₀ − H₅₀) ≈ 31.2%
(H = harmonic number), converging to 1 − ln 2 ≈ 30.7% as n grows. This
works because the box contents form a random permutation, which
decomposes into disjoint cycles; a prisoner following the chain from
their own number always lands back on it after a number of steps
equal to their cycle's length. The whole group succeeds iff no cycle
exceeds length 50. Proposed by Danish computer scientists Peter Bro
Miltersen and Anna Gál in 2003; optimality of the cycle strategy was
proven by Eugene Curtin and Max Warshauer in 2006.

**Different topic from recent days** — checked every `**Topic:**` line
across the full repo history via grep (Sept–Oct, 100+ prior posts).
The 100 Prisoners Problem has not been used before; distinct from
other probability/combinatorics topics already covered (Monty Hall,
Birthday Paradox, Secretary Problem, Ramsey's Theorem, Pigeonhole
Principle, Simpson's Paradox, Efron's Dice).

**Accuracy check:** Verified via WebSearch (Wikipedia "100 prisoners
problem" and a university lecture page), confirming the cycle
structure explanation, the exact probability formula
1 − Σ_{k=51}^{100} 1/k ≈ 31.2%, the limiting value 1 − ln 2 ≈ 30.7%,
and the 2006 Curtin–Warshauer optimality proof. Cross-checked the
exact value numerically in Python (0.3118278...).

**Visuals:** Static PNG — two-panel figure: left panel shows a small
8-box example permutation drawn as a directed cycle diagram
illustrating the chain-following strategy; right panel plots success
probability vs. number of prisoners n (cycle strategy) converging to
1 − ln 2, with n = 100 marked (~31.2%).

GIF included — a 9-frame, ~5.2s looping animation (600x338, PillowWriter)
showing the 8-box example cycle being traced step by step ("open box
7 → find number 2 inside", etc.), with a title/caption overlay, ending
on "Back to box 1 — the whole cycle is found!".

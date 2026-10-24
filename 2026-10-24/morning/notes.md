# Morning post — 2026-10-24

**Topic:** Ramsey's Theorem and the "party problem": R(3,3) = 6. Among
any 6 people, where every pair either knows each other ("friends") or
doesn't ("strangers"), there must always be a group of 3 who are mutual
friends OR a group of 3 who are mutual strangers. This fails for 5
people (a 5-cycle coloring of K5 has no monochromatic triangle), so 6
is the exact threshold. The upper bound (R(3,3) ≤ 6) follows from a
short pigeonhole argument; the lower bound (R(3,3) > 5) from an explicit
5-person counterexample coloring. More generally, Ramsey numbers R(k,k)
grow explosively and are notoriously hard to pin down — R(4,4)=18 is
known, but R(5,5) is still unknown (bounded only between 43 and 48).
Included a recency hook: in March 2023, Campos, Griffiths, Morris and
Sahasrabudhe proved the first exponential improvement to the general
upper bound on diagonal Ramsey numbers R(k,k) since Erdős and Szekeres'
1935 bound of ~4^k — a problem that had stood for almost 90 years. The
paper was published in the Annals of Mathematics; follow-up work
(Gupta, Ndiaye, Norin, Wei, 2024) simplified the proof and sharpened the
bound further to roughly 3.8^k.

**Different topic from recent days** — checked every `**Topic:**` line
across the repo's full history (Sept–Oct, 90+ prior posts). Ramsey's
Theorem / Ramsey numbers has not been used before; distinct from
related-but-different previously-covered combinatorics/graph-theory
topics (the Seven Bridges of Königsberg, the Four Color Theorem, the
Happy Ending problem / Erdős–Szekeres theorem, the Pigeonhole
Principle, the Birthday Paradox, the Monty Hall Problem).

**Accuracy check:** Verified via WebSearch — the R(3,3)=6 pigeonhole
proof and R(5,5) status (IIT Delhi lecture notes, AMS Math Grad Blog,
QuantVault, Cooper's Notes combinatorics text), and the 2023 exponential
improvement result (arXiv:2303.09521, Annals of Mathematics listing,
FoCM 2023 abstract, and the 2024 follow-up arXiv:2407.19026 by Gupta,
Ndiaye, Norin & Wei). Spelled "Sahasrabudhe" correctly in the post
despite an initial typo in my own search query.

**Visuals:**
- `ramsey_theorem.png`: static side-by-side diagram of K6 (six points,
  all 15 edges 2-colored red/blue as "strangers"/"friends"), left panel
  showing the full coloring, right panel highlighting the forced
  monochromatic (all-blue) triangle on vertices 1, 3, 5.
- `ramsey_theorem.gif`: ~4.3s animated version (40 frames, 600x338) that
  draws the 15 edges of K6 one at a time, holds on the complete graph,
  then pulses the forced monochromatic triangle, with a captioned
  lower-third explaining each stage. GIF generation succeeded (included).

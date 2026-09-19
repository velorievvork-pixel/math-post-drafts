# Evening post — 2026-09-19

**Topic:** Kepler's Conjecture / sphere packing. In 1611, Johannes Kepler
conjectured that the densest possible way to pack equal spheres in space is
the ordinary "cannonball" stacking (face-centered cubic / hexagonal close
packing), filling exactly π/√18 ≈ 74.05% of space — no arrangement, however
clever, can beat it. Proved in 1998 by Thomas Hales and Samuel Ferguson via
an exhaustive computer-assisted case check; because the proof relied on code
too large for referees to fully hand-verify, Hales launched the "Flyspeck"
project to formally verify every logical step in a proof assistant (HOL
Light + Isabelle), completed in 2014 — one of the largest formal
verification efforts in mathematics.

**Accuracy check:** all densities computed directly, not quoted blindly.
2D square packing = π/4 ≈ 78.54%, 2D hexagonal packing = π/√12 ≈ 90.69%,
3D FCC/HCP (Kepler optimum) = π/√18 ≈ 74.05% — all confirmed
programmatically against their closed-form values (max error < 1e-9)
before rendering. The 1611 conjecture date, the 1998 Hales–Ferguson proof,
and the Flyspeck project's 2003–2014 timeline (HOL Light + Isabelle proof
assistants) were verified via web search against Microsoft Research,
arXiv (1501.02155), and MathWorld.

**Format:** sphere_packing.png (static: side-by-side 2D square-vs-hexagonal
packing comparison with computed densities, plus the 3D Kepler result
stated as the punchline) and sphere_packing.gif (animated: hexagonal
packing built sphere-by-sphere then holding on the final density fact,
~4.5s, 12fps, 600x338, captioned).

**Sources:**
- https://www.microsoft.com/en-us/research/video/the-flyspeck-project-a-formal-proof-of-the-kepler-conjecture/
- https://arxiv.org/abs/1501.02155 ("A formal proof of the Kepler conjecture")
- https://mathworld.wolfram.com/KeplerConjecture.html

Different from all earlier posts: Kakeya needle problem, Go First Dice,
golden angle/sunflower phyllotaxis, Hardy-Ramanujan 1729, Ulam spiral,
Chaos Game/Sierpinski triangle, Buffon's Needle, Mobius strip, Voronoi
diagram, Penrose tiling, Coastline Paradox/Koch snowflake, Squaring the
Square, Konigsberg Bridges, Benford's Law, Efron's Dice, Monty Hall,
Cantor Set, Borromean Rings, Four Color Theorem, Hat aperiodic monotile,
Birthday Paradox, Zeno's Paradox, Collatz Conjecture, Gabriel's Horn,
Pigeonhole Principle, Weierstrass function, Mandelbrot Set, Newton's
Fractal (this morning) — this uses optimal packing density / discrete
geometry, a fresh mechanism from all prior posts (distinct from Squaring
the Square's exact dissection and Voronoi's nearest-neighbor partitioning:
this is about the provably maximum achievable density of identical
circles/spheres, with a notable "second wave" computer-assisted proof
story — first a huge case-check (1998), then a full formal re-verification
(2014) — echoing but distinct from the Four Color Theorem's single 1976
computer-assisted proof).

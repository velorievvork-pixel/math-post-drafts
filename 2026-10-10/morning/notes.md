# Morning post — 2026-10-10

**Topic:** The Mizohata–Takeuchi conjecture, a long-standing open problem in
Fourier restriction theory (relevant to how wave/PDE energy distributes),
which predicted that certain weighted estimates force "mass" to concentrate
near a line or curve. In February 2025, Hannah Cairo — then 17 years old,
homeschooled, and taking a graduate course at UC Berkeley through a
concurrent-enrollment program — posted a counterexample disproving the
conjecture using a careful fractal (Cantor-set-type) construction, showing
the energy does NOT need to concentrate along lines/curves as conjectured.
She went on to begin PhD studies at the University of Maryland. A follow-up
paper with Ruixiang Zhang (Dec 2025) extended the result to convex
hypersurfaces.

**Accuracy check:** Verified via Quanta Magazine ("At 17, Hannah Cairo
Solved a Major Math Mystery", Aug 1 2025 — high-reliability science
journalism source), corroborated by UC Berkeley's Analysis & PDE group page
and her Davidson Fellows laureate bio. Did not repeat an unverified claim
from lower-quality outlets that the work also disproved a separate Stein
conjecture — left that out of the post. Checked repo history (grep all
notes.md "Topic:" lines) — this topic has not been used before; distinct
from prior Fourier-related posts (Fourier series/epicycles, Basel problem,
Weierstrass function) and prior "young prodigy"/paradox posts.

**Assets:** Static PNG (two-panel comparison: conjectured concentrated
energy vs. Cairo's spread-out fractal counterexample) + an animated GIF
(Cantor-dust fractal building up over the curve, with caption overlay)
were both generated with matplotlib/numpy; GIF used FuncAnimation +
PillowWriter, ~150KB, well under size limits. GIF included: yes.

Sources:
- https://www.quantamagazine.org/at-17-hannah-cairo-solved-a-major-math-mystery-20250801/
- https://wp.math.berkeley.edu/apde/?p=1786
- https://www.davidsongifted.org/gifted-programs/fellows-scholarship/fellows/current-and-past-fellows/2025-fellows/laureate-hannah-cairo/

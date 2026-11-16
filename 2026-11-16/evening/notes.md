# Evening post — 2026-11-16

**Topic:** The Moving Sofa Problem. Posed by Leo Moser in 1966 (SIAM
Review, Problem 66-11): what is the largest-area 2D shape that can be
slid around a right-angle corner in a hallway of width 1? John
Hammersley found a lower-bound shape in 1968 (a rectangle with two
rounded quarter-circle ends and a scalloped half-disk notch) with area
π/2 + 2/π ≈ 2.2074. Joseph Gerver refined this in 1992 to an 18-arc
curve with area ≈ 2.2195, long suspected but unproven to be optimal.
In November 2024, Jineon Baek (a postdoc, then ~31) posted an arXiv
preprint, "Optimality of Gerver's Sofa," giving a 100+ page,
pencil-and-paper (non-computer-assisted) proof that Gerver's shape is
indeed the unique maximizer — settling a problem open for 58 years.
As of the sources checked, the proof had not yet completed peer review
but was widely reported as correct by the math community (Quanta
Magazine, NPR).

**Different topic from today's morning post:** Morning covered Dandelin
spheres (conic sections). This is unrelated — combinatorial/variational
geometry vs. conic sections. Also checked the full repo history
(2026-09-10 through 2026-11-16 morning, 158+ prior posts): the moving
sofa problem, Hammersley, and Gerver/Baek have not appeared before.
Confirmed via grep that other considered topics (Collatz, Penrose
tiling, Sierpinski carpet, Banach–Tarski, Basel problem, Weierstrass
function, Benford's Law, Napoleon's theorem, Voronoi diagrams, Riemann
Hypothesis, Goldbach, Fibonacci/golden ratio, Conway's Game of Life,
Poincaré conjecture, Morley's theorem) have all already been used, so
this topic was picked instead for being both unused and genuine recent
math news.

**Accuracy check:** Verified via two WebSearch queries pulling from
multiple independent sources: alphaxiv.org and export.arxiv.org (hosting
Baek's preprint, arXiv 2411.19826), Quanta Magazine ("The Largest Sofa
You Can Move Around a Corner," Feb 2025), ScienceAlert, NPR, and a KIAS
interview with Baek. All agree on: Moser's 1966 origin, Gerver's 1992
shape and its area ≈2.2195, Baek's Nov 29 2024 preprint and its
pencil-and-paper/non-computer method, and its not-yet-peer-reviewed but
widely-accepted status. Separately verified the Hammersley sofa's
construction and exact area formula (π/2 + 2/π) via a WebSearch summary
citing MathWorld's "Hammersley Sofa" page and other sources — the
illustration's shape (two radius-1 quarter-disks flanking a 1×(4/π)
rectangle, with a radius-(2/π) half-disk notch removed) is built
directly from that decomposition, so its area is exactly π/2 + 2/π by
construction. The post and image use the simpler, exactly-reproducible
Hammersley shape for the diagram/animation (clearly labeled as such,
distinct from Gerver's unillustrated 18-arc curve) rather than
claiming to depict Gerver's actual curve, to avoid overclaiming
geometric precision.

**Assets:**
- `moving_sofa.png` (1200x675, dark theme, two panels) — left: title,
  problem statement, and a 1966→1968→1992→2024 timeline of the key
  results and dates; right: an L-shaped unit-width hallway with the
  Hammersley sofa shape drawn mid-turn at the corner, labeled with both
  the Hammersley (≈2.2074) and Gerver (≈2.2195) areas.
- `moving_sofa.gif` (600x338, 12fps, 56 frames, ~365KB, built with
  matplotlib FuncAnimation + PillowWriter) — the Hammersley sofa shape
  slides along the horizontal corridor, rotates through the corner, and
  comes to rest in the vertical corridor, staying within the unit-width
  walls throughout; captions read "sliding through the hallway...",
  "turning the corner...", and "Gerver's shape: proved optimal in 2024".
  This is a stylized/illustrative motion (a simple eased
  rotate-and-translate of the fixed Hammersley shape), not a
  reconstruction of the actual rigorous family of motions mathematicians
  use to prove such shapes fit — noted here for transparency. GIF
  included: yes.

**Sources:**
- Jineon Baek, "Optimality of Gerver's Sofa," arXiv:2411.19826 (Nov 2024)
- Quanta Magazine, "The Largest Sofa You Can Move Around a Corner" (Feb 2025)
- NPR, "A postdoctoral student proves the solution to the decades-old
  moving sofa problem" (Dec 2024)
- KIAS, "An Interview with Jineon Baek on Solving the 60-Year-Old Moving
  Sofa Problem"
- WebSearch summary of MathWorld's "Hammersley Sofa" page and related
  sources, for the Hammersley shape's construction and area formula

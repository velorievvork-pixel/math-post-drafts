# Evening post — 2026-11-01

**Topic:** The Borsuk–Ulam Theorem (1933). For any continuous function
from the n-sphere into n-dimensional Euclidean space, some pair of
antipodal (exactly opposite) points must map to the same value. The
classic illustration: assuming temperature and pressure vary
continuously over the Earth's surface, there always exist two exactly
opposite points on the globe with identical temperature AND identical
pressure, at any given moment — guaranteed by pure topology, not
measured. The simplest case (1D, on a circle like the equator) has an
elementary proof: define g(θ) = f(θ) − f(θ+π) for a continuous
"temperature" function f; since g(θ+π) = −g(θ), g must change sign
somewhere on [0, π], so by the Intermediate Value Theorem it has a
zero — that zero is the matching antipodal pair. This is the image/GIF
illustrated here (the 1D/circle case), with a note that the full
theorem also holds in 2D on an actual sphere.

**Different topic from recent days / history check:** Grepped every
`**Topic:**` line across the repo's full history (Sept 10 – Nov 1,
2026, 115+ prior posts, including today's morning post on the Rubik's
Cube "God's Number"). Checked specifically for related topics that
might overlap (Monty Hall, Birthday Paradox, Goldbach, Four Color
Theorem, Collatz, Benford's Law, Moving Sofa Problem, Weierstrass
function, Viazovska/E8 sphere packing, Smale's sphere eversion,
Morley's theorem, Hairy Ball Theorem, Kakeya conjecture) — all of
those are already covered on other days, but Borsuk–Ulam itself has
never been used before.

**Accuracy check:** Verified via WebSearch across independent sources:
- Lecture notes (faculty.etsu.edu/gardnerr, Munkres-based course notes)
  and a published survey ("Two-numbers and their applications") both
  state the Earth temperature/pressure corollary explicitly, assuming
  continuity of both quantities.
- Wikipedia's "Borsuk–Ulam theorem" article confirms the general
  statement (continuous f: Sⁿ → Rⁿ has f(x) = f(−x) for some antipodal
  pair x, −x) and the history: first stated by Lyusternik & Shnirelman
  (1930); first proved by Karol Borsuk in 1933 ("Drei Sätze über die
  n-dimensionale euklidische Sphäre," Fundamenta Mathematicae 20
  (1933), 177–190), with the problem's formulation credited by Borsuk
  to Stanisław Ulam.
- A popular-science explainer corroborates the caveat included in the
  post/notes: the theorem guarantees existence of a matching pair but
  gives no way to locate it, and a single arbitrarily-chosen antipodal
  pair will almost certainly NOT match.

**Assets:**
- `borsuk_ulam.png` (1200x675, dark theme, two panels) — left: Earth's
  equator as a circle colored by a synthetic continuous temperature
  function, with one matching antipodal pair (A, A') marked; right:
  the proof-by-IVT plot of g(θ) = f(θ) − f(θ+π) over [0, π], showing
  the guaranteed zero crossing.
- `borsuk_ulam.gif` (600x338, 12fps, 72 frames, ~6s loop, ~614KB, built
  with matplotlib FuncAnimation + PillowWriter) — animates a point A
  sweeping once around the equator with its antipodal partner A'
  moving oppositely, with a live bar-chart comparison of their two
  "temperatures" that flashes "MATCH!" with highlighted bar outlines
  at the guaranteed crossing point. Caption text baked into every
  frame. GIF included: yes.

**Sources:**
- Wikipedia, "Borsuk–Ulam theorem" (https://en.wikipedia.org/wiki/Borsuk%E2%80%93Ulam_theorem)
- East Tennessee State University, Math 5357 lecture notes on the
  Borsuk–Ulam theorem (Munkres §57), faculty.etsu.edu/gardnerr
- "Two-numbers and their applications — A survey," arXiv:1805.04796

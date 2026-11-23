# Evening post — 2026-11-23

**Topic:** Brouwer's Fixed-Point Theorem. Any continuous function that
maps a closed disk (or, more generally, a closed ball / convex compact
set) into itself must have at least one fixed point — a point p with
f(p) = p. Popular illustrations: slosh a cup of coffee and some point
in the liquid ends up exactly where it started; crumple a map of a
room and drop it on that room's floor, and some point on the map sits
directly above the real spot it represents.

**History:** Differentiable (smooth) self-maps of the n-dimensional
closed ball were proved to have a fixed point by Jacques Hadamard in
1910; L.E.J. Brouwer extended the result to all continuous maps
shortly after (commonly dated 1911, though some sources are not fully
consistent on 1910 vs. 1911 and on exactly how much of the general
case Hadamard's argument already covered). It can be proved in 2D via
Sperner's Lemma, a combinatorial result about colorings of triangulated
triangles. Crucially, it underlies John Nash's 1950 proof that every
finite non-cooperative game has at least one (mixed-strategy) Nash
equilibrium — no known proof of Nash's theorem avoids Brouwer's
theorem.

**Different topic from today's morning post and recent days:** This
morning's post (same repo, 2026-11-23/morning) covered the Butterfly
Theorem (circle/chord geometry) — unrelated. Checked topics across the
last ~10 days (2026-11-13 through 2026-11-22: Nine-Point Circle,
Dürer's Magic Square, Ham Sandwich Theorem, Galton Board, Benford's
Law, Ulam Spiral, Coin Rotation Paradox, Pizza Theorem, Quaternions,
Euler spiral, Dandelin spheres, Moving Sofa Problem, Art Gallery
Theorem, Tautochrone Curve, Conway's Game of Life, Kakeya conjecture)
plus a repo-wide grep for "Brouwer" across every notes.md — no prior
post has covered Brouwer's Fixed-Point Theorem.

**Accuracy check:** Verified via WebSearch across Wikipedia's "Brouwer
fixed-point theorem" article (and mirrors), MIT 6.896 lecture notes
(Daskalakis) and Weizmann Institute AGT course notes on Nash's theorem,
and Harvey Mudd's "Fun Facts" page. All sources agree on: the theorem
statement (continuous self-map of a disk/ball has a fixed point); the
coffee-cup and dropped-map illustrations (noting the coffee-cup origin
story about Brouwer himself is unverified legend); Hadamard's 1910
smooth-case proof and Brouwer's subsequent continuous-case proof; the
Sperner's Lemma combinatorial route to a 2D proof; and that Nash's 1950
existence proof for Nash equilibria relies on Brouwer's theorem, with
no known Brouwer-free proof. Numerically verified in the image script:
constructed an explicit affine contraction map of the unit disk into
itself (rotation + 0.62 scaling + translation, chosen so operator norm
+ translation norm < 1, guaranteeing the map sends the closed disk into
itself), solved for its fixed point in closed form via (I-A)^-1 b, and
asserted |f(p*) - p*| < 1e-10 (matched to ~2.8e-17, machine precision,
in the actual run).

**Assets:**
- `brouwer_fixed_point.png` (1200x675, dark theme, two panels) — left:
  title, plain-language statement, the coffee-cup/map illustrations,
  and the Hadamard/Brouwer/Nash history with a source line; right: a
  disk diagram showing 10 starting points iterating under the explicit
  contraction map, each spiraling along its orbit into the single
  common fixed point (marked with a star), with the computed
  |f(p*)-p*| printed below confirming equality to machine precision.
- `brouwer_fixed_point.gif` (600x338, 12fps, ~5.7s, ~420KB, matplotlib
  FuncAnimation + PillowWriter) — the same 8 starting points animate
  smoothly through successive iterates of the map, visibly spiraling
  inward and converging on the one fixed point, with a cycling caption
  explaining the theorem. GIF included: yes.

**Sources:**
- Wikipedia, "Brouwer fixed-point theorem"
- MIT 6.896 (Costis Daskalakis), Lecture 5 notes on Brouwer's theorem
  and Nash equilibrium
- Weizmann Institute AGT course notes (Feige), "Nash equilibrium"
  lecture, on the reliance on Brouwer's fixed-point theorem
- Harvey Mudd College "Fun Facts," Brouwer Fixed Point Theorem

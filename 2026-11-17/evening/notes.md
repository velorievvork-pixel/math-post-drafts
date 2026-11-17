# Evening post — 2026-11-17

**Topic:** The Tautochrone Curve. Release a ball from rest anywhere on
an (inverted) cycloid and it reaches the bottom in exactly the same
amount of time, regardless of its starting height. Christiaan Huygens
discovered this around 1659 and proved geometrically that the curve
must be a cycloid — the path traced by a point on the rim of a circle
as it rolls along a straight line — publishing the proof in
*Horologium Oscillatorium* (1673). He used the result to design
pendulum clocks whose bob is forced along a cycloidal arc by metal
"cheeks," making the swing period independent of amplitude; the
cycloidal design proved too delicate for shipboard chronometers and
was eventually abandoned in favor of ordinary low-amplitude pendulums.
The cycloid resurfaced decades later as the solution to Johann
Bernoulli's 1696 Brachistochrone problem (fastest descent curve) —
the same curve solving two different "optimal time" problems.

**Different topic from recent days / repo-wide:** Grepped every
`**Topic:**` line across the full repo history (2026-09-10 through
2026-11-17 morning, 165+ prior posts). The Brachistochrone has been
posted before, but the Tautochrone/cycloid-isochronism result and
Huygens's cycloidal pendulum clock have not. Also distinct from
today's morning post (the Art Gallery Theorem).

**Accuracy check:** Verified via WebSearch pulling from multiple
sources (Wikipedia's "Tautochrone curve" article, MathWorld's
"Tautochrone Problem" page, the Galileo Unbound blog's history of
Huygens's pendulum work, and a CRC Concise Encyclopedia of Mathematics
mirror). Sources agree on: Huygens's discovery/geometric proof dated to
around 1659, with publication in *Horologium Oscillatorium* in 1673;
the identification of the tautochrone as a cycloid; the cycloidal
"cheeks" pendulum-clock design intended to fix amplitude-dependence of
ordinary pendulums; and that the cycloidal clocks underperformed in
practice and were abandoned in favor of simpler designs. The physics
in the animation (that the arc-length-related variable
w = sin((θ−π)/2) undergoes exact simple harmonic motion with
ω = √(g/4r), independent of release point) is the standard textbook
derivation of the tautochrone property.

**Assets:**
- `tautochrone_curve.png` (1200x675, dark theme, two panels) — left:
  title, a plain-language statement of the tautochrone property, the
  cycloid's parametric definition and Huygens's 1659/1673 history,
  and why it mattered (the cycloidal pendulum clock, and the later
  link to the Brachistochrone problem); right: the inverted-cycloid
  "half-pipe" diagram with five balls marked at different starting
  points along the curve, all converging on the lowest point.
- `tautochrone_curve.gif` (600x338, 12fps, ~5.8s, ~175KB, built with
  matplotlib FuncAnimation + PillowWriter) — animates five balls
  released simultaneously from different heights on the cycloid using
  the exact closed-form tautochrone solution; they visibly reach the
  bottom at the same instant, with an on-frame caption that changes
  from "Different starting heights — same arrival time" to "All five
  arrive together!" at the moment of arrival. GIF included: yes.

**Sources:**
- Wikipedia, "Tautochrone curve"
- MathWorld (Wolfram), "Tautochrone Problem"
- Galileo Unbound blog, "Huygens' Tautochrone" (history of cycloidal
  pendulum clocks)
- Huygens, C. (1673). *Horologium Oscillatorium*.

# Evening post — 2026-11-15

**Topic:** The Euler spiral (also called the clothoid or Cornu spiral).
Its defining property: curvature grows exactly in proportion to the
distance traveled along it (κ(s) ∝ s). That's precisely why highway
on-ramps and railway tracks use this curve as a transition between a
straight section and a circular curve — it lets curvature (and the
steering angle / banking) change at a smooth, constant rate instead of
jumping abruptly from "straight" to "circular," which would otherwise
jolt a vehicle's steering/suspension. The curve's coordinates are given
by the Fresnel integrals, x(t) = ∫cos(s²)ds, y(t) = ∫sin(s²)ds, and it
winds into two limiting spiral "eyes" as t → ±∞.

History: Jacob Bernoulli first wrote down its equations in 1694; Euler
rediscovered and analyzed it in 1744 while studying elastic springs
(hence "Euler spiral"); Alfred Cornu plotted it in 1874 for
light-diffraction (Fresnel diffraction) calculations, giving it the name
"Cornu spiral"; and Arthur Talbot applied it to railway track design in
1890. It's also used in roller-coaster loop design (to limit sudden
g-force spikes) and in autonomous-vehicle path planning.

**Different topic from recent days:** Checked against all 133 prior post
topics in this repo (2026-09-10 through today's morning post on
quaternions/Hamilton). Euler spiral / clothoid / Cornu spiral had never
been covered. Confirmed fresh topic, distinct from morning's quaternions
post.

**Accuracy check:** Verified via WebSearch across multiple sources
(Wikipedia's "Euler spiral," "Track transition curve," and "Fresnel
integral" articles; Raph Levien's 2008 UC Berkeley historical report
"The Euler spiral: a mathematical history"; National Curve Bank). All
sources agree on: the κ(s) ∝ s curvature property, the Fresnel-integral
parametrization, the Bernoulli (1694) / Euler (1744) / Cornu (1874) /
Talbot (1890) attribution chain, and the railway/highway
transition-curve application. One minor discrepancy noted but not used
in the post: some sources credit the 1744 work directly to Euler while
others place the first equations with Bernoulli in 1694 — the post
attributes each step to the correct person/year per the consensus
history, so this is reflected accurately rather than glossed over.

GIF included: yes.

**Assets:**
- `euler_spiral.png` (1202x675, dark theme, two panels) — left: title,
  the κ(s) ∝ s relation, a plain-language explanation of the
  straight-to-circle transition-curve use case, the discovery timeline,
  and the Fresnel integral formulas; right: the full double spiral
  plotted via `scipy.special.fresnel`, colored by curvature (arc length
  from center), with the two limiting "eye" points marked.
- `euler_spiral.gif` (600x338, 12fps, 72 frames, ~280KB, built with
  matplotlib FuncAnimation + PillowWriter) — a point traces the spiral
  outward from the origin as curvature increases, visually showing a
  straight path gently curling into a tightening circle, with an
  on-screen title and lower caption so the clip is self-explanatory.

**Sources:**
- Wikipedia, "Euler spiral"
- Wikipedia, "Track transition curve"
- Wikipedia, "Fresnel integral"
- Raph Levien, "The Euler spiral: a mathematical history" (UC Berkeley
  EECS-2008-111 technical report)
- National Curve Bank, "The Spiral Family of Curves"

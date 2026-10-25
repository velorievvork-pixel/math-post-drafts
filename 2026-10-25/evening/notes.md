# Evening post — 2026-10-25

**Topic:** The Lorenz attractor and the "butterfly effect." In 1963,
MIT meteorologist Edward Lorenz published "Deterministic Nonperiodic
Flow" (Journal of the Atmospheric Sciences, vol. 20, pp. 130–141), a
simplified model of atmospheric convection reduced to three coupled
nonlinear ODEs:

  dx/dt = σ(y − x)
  dy/dt = x(ρ − z) − y
  dz/dt = xy − βz

With the now-classic parameters σ=10, ρ=28, β=8/3, trajectories never
repeat, never self-intersect, and never settle into a fixed point or
cycle, yet stay forever confined to a bounded, butterfly-wing-shaped
region of space — a "strange attractor" (a term coined by David Ruelle
in 1971). Lorenz discovered the system's extreme sensitivity to
initial conditions by accident, while rerunning a weather simulation
on an LGP-30 computer from manually re-entered, rounded-off
intermediate values — the truncated runs diverged completely from the
original within a simulated "month." This gave rise to the term
"butterfly effect," popularized by the title of his December 1972
AAAS talk ("Does the Flap of a Butterfly's Wings in Brazil Set Off a
Tornado in Texas?", a title actually supplied by session convener
Philip Merilees while Lorenz was abroad — Lorenz's own 1963 paper had
used a seagull, not a butterfly). The practical upshot: even fully
deterministic systems with zero randomness can be inherently
unpredictable over the long run, which is why weather forecasts
reliably break down after roughly a week or two, however good our
models and data become.

**Different topic from the morning post** (2026-10-25 morning covered
perfect numbers / the Euclid–Euler theorem — unrelated). Also checked
against the repo's full history (Sept 10 – Oct 25, 2026, 100+ prior
posts, via grep on every `**Topic:**` line) — chaos theory, the
Lorenz attractor, and the butterfly effect have not been used before.
Related-but-distinct topics already covered: the Mandelbrot set
(fractals, not chaos/ODEs), Langton's Ant (a different kind of
deterministic-but-unpredictable system), the Weierstrass function.

**Accuracy check:** Verified via WebSearch across independent
sources:
- Wikipedia, "Butterfly effect" — citation for the 1963 paper title,
  journal, volume and pages; Lorenz's own account (from *The Essence
  of Chaos*) of discovering the sensitivity via rounded re-entered
  values on an LGP-30; the 1972 AAAS talk details including Philip
  Merilees authoring the title in Lorenz's absence, and the
  seagull-to-butterfly swap between the 1963 paper and 1972 talk.
- Barry Popik's phrase-history page on "Does the flap of a
  butterfly's wings in Brazil set off a tornado in Texas?" —
  corroborates the AAAS 139th meeting, December 1972, Washington
  D.C., and the Merilees authorship detail.
- Galileo Unbound blog ("Edward Lorenz' Chaotic Butterfly") —
  corroborates David Ruelle coining "strange attractor" in 1971.
- Standard Lorenz system parameters (σ=10, ρ=28, β=8/3) are the
  well-known textbook/educational-tool values used to produce the
  classic butterfly-shaped attractor; used as-is in the visualization
  code (RK4 integration), not sourced from any single citation beyond
  general consensus in the dynamical-systems literature.

**Visualization:** `lorenz-attractor.png` — a 1200×675 dark-themed
plot of a 9000-step RK4-integrated Lorenz trajectory (x vs. z plane),
colored by time-progression (plasma colormap) to show the flow, with
title, short explanation, and the governing equations/parameters
captioned below.

**GIF included:** Yes — `lorenz-attractor.gif` (600×338, 12 fps, ~7s,
84 frames, ~440KB). Animates a point tracing along the attractor with
a fading orange trail, captioned "The Lorenz Attractor" /
"Tiny changes in starting point → wildly different paths", built with
matplotlib FuncAnimation + PillowWriter.

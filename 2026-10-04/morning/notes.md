# Morning post — 2026-10-04

**Topic:** The Fourier series, and its "epicycle" (circles-drawing-circles)
geometric interpretation. Joseph Fourier's memoir "On the Propagation of
Heat in Solid Bodies" was read to the Paris Institute on December 21, 1807;
a committee including Lagrange, Laplace, Monge and Lacroix reviewed it.
Lagrange objected strongly to Fourier's claim that essentially any periodic
function could be expressed as a (possibly infinite) sum of sines and
cosines — what we now call a Fourier series — because it contradicted his
own earlier stance on trigonometric series from the vibrating-string
problem. Because of this and a second objection (Biot, on the heat-transfer
derivation), the memoir was judged not rigorous enough to publish; it
finally appeared in 1822 in Fourier's book "Théorie analytique de la
chaleur," after his 1817 election to the Académie des Sciences. Each term
of a Fourier series can be visualized as a vector/circle rotating at a
fixed multiple of the base frequency; chaining these rotating circles tip
to tip and tracking the tip's position traces out the approximated
function — in this case a square wave, approximated by
square(x) ≈ (4/π) Σ (1/k)·sin(kx) over odd k = 1, 3, 5, ....

**Accuracy check:** verified via WebSearch against the MacTutor
(University of St Andrews) biography of Fourier, which confirms the
December 21, 1807 reading to the Paris Institute, the Lagrange/Laplace
committee and objection, the Biot objection to the heat-transfer
derivation, and the 1822 publication date of "Théorie analytique de la
chaleur" following Fourier's 1817 Académie election. The square-wave
Fourier series formula (4/π)·Σ sin(kx)/k over odd k is standard,
textbook-level mathematics, double-checked numerically in the plotting
script itself (partial sums visibly converge to the square wave, including
the expected Gibbs-phenomenon overshoot at the jump discontinuities).

**Different topic from recent days** — checked the full topic history
across every notes.md in this repo; Fourier series / epicycles has not
been used before (closest related prior topics were Lissajous curves,
rose curves, and the logistic map — none overlap).

**Media:** fourier_square_wave.png (1200x675, static) — left panel shows a
snapshot of the 9-circle epicycle chain with its traced path so far; right
panel compares partial Fourier sums (1, 3, 9 terms) against the true
square wave, showing visible convergence and Gibbs overshoot. Plus
fourier_epicycles.gif (600x338, 12fps, 72 frames, ~6s, PillowWriter) —
animates the same 9-circle chain rotating through two full periods while
a synced trace draws the square wave on the right, with an in-frame
title/caption. GIF included.

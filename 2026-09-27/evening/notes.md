# Evening post — 2026-09-27

**Topic:** The Gömböc — a convex, uniform-density three-dimensional shape
with exactly one stable and one unstable point of equilibrium (a
"mono-monostatic" solid). Tip it any way you like on a flat surface and it
always rolls itself back to the same single resting position, entirely
through its geometry — no hinges, no added weight, no hollow cavity.

Vladimir Arnold conjectured in 1995 that such a shape must exist and asked
whether four equilibria (the minimum for, e.g., a generic potato-like rock)
could be reduced. Hungarian mathematicians Gábor Domokos and Péter Várkonyi
proved existence and constructed the first example in 2006 — first
mathematically, then as a physical object. The shape is extremely close to
a sphere (a true sphere has infinitely many equilibria, so mono-monostatic
shapes must deviate from sphericity by only about one part in a thousand,
otherwise they gain extra equilibrium points). Domokos and Várkonyi later
used the same equilibrium-counting framework to explain why some tortoise
shells are shaped the way they are (self-righting ability).

**Different from morning's topic:** morning covered Lissajous curves
(parametric perpendicular oscillations); this is unrelated — solid
geometry / equilibrium / topology of convex bodies.

**Accuracy check:** verified via WebSearch (Wikipedia "Gömböc" article,
MathWorld "Gömböc" entry, and Gábor Domokos's Wikipedia page) before
writing the post — not recalled from memory alone. Confirmed: (1) Arnold
posed the conjecture in 1995 at a conference where Domokos met him; (2)
Domokos & Várkonyi proved it and built the first physical Gömböc in 2006;
(3) it has exactly one stable + one unstable equilibrium (mono-monostatic);
(4) shape deviates from a sphere by roughly one part in a thousand; (5) the
tortoise-shell application is real and attributed to the same researchers.

**Image note:** the PNG/GIF diagrams use a simplified 2D schematic curve
(a smooth asymmetric "egg" cross-section, heavy/round base tapering to a
narrow top) purely to *illustrate* the mono-monostatic concept — they are
NOT a precise rendering of the actual Gömböc's exotic 3D surface geometry,
which is far more subtle and close to spherical. This is stated in the
image captions ("schematic") and should be understood as illustrative, not
a mathematically exact Gömböc cross-section.

**Files:**
- `gomboc.png` — static diagram: left panel shows the schematic shape with
  its one stable (bottom) and one unstable (top) equilibrium point marked;
  right panel shows a 4-frame self-righting sequence.
- `gomboc.gif` — ~6s, 12fps, 600x338 animated GIF: the shape starts tipped
  over and eases/settles back to its single stable upright resting point,
  with an on-frame caption. Built with matplotlib FuncAnimation + PillowWriter
  (no ffmpeg). File size ~390KB.

Both PNG and GIF included.

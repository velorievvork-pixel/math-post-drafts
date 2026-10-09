# Morning post — 2026-10-09

**Topic:** The sphere-packing problem in 8 and 24 dimensions — Maryna
Viazovska's proof and the E8/Leech lattices. Johannes Kepler conjectured in
1611 that the densest way to stack identical spheres in 3D is the familiar
"cannonball"/pyramid arrangement; this was only proven in 1998 by Thomas
Hales (a ~250-page, computer-assisted proof, formally verified by the
Flyspeck project in 2014). In certain special dimensions the answer is
known exactly because of exceptionally symmetric lattices. On March 14,
2016, Ukrainian mathematician Maryna Viazovska posted a strikingly short
(23-page) proof (arXiv:1603.04246) that the E8 lattice gives the densest
possible sphere packing in 8 dimensions, built from a "magic function"
constructed out of modular forms rather than brute-force computation.
About a week later, she and four coauthors (Henry Cohn, Abhinav Kumar,
Stephen D. Miller, Danylo Radchenko) extended the method to prove the
Leech lattice is optimal in 24 dimensions (Annals of Mathematics 185(3),
2017); in 2022 the same five authors proved an even stronger "universal
optimality" result for E8 and the Leech lattice. Viazovska won the 2022
Fields Medal for this work, becoming only the second woman ever to win it
(after Maryam Mirzakhani in 2014).

**Accuracy check:** verified via a dedicated research pass (WebSearch)
cross-referencing arXiv:1603.04246 (Viazovska's dimension-8 paper, posted
14 March 2016), the dimension-24 paper (Cohn, Kumar, Miller, Radchenko,
Viazovska, Annals of Mathematics 185(3), 2017), Quanta Magazine's coverage
of the 2019 universal-optimality follow-up, the 2022 Fields Medal citation
text, and a contemporaneous April 2016 account on Jonathan Borwein's
experimentalmath.info blog. Direct Wikipedia fetch was DNS-blocked by the
sandbox egress proxy; biographical/award facts were instead corroborated
via EPFL/Bonn university news and the official Fields Medal citation
language surfaced in search results. The 240-root, 8-ring E8 structure
shown in the image was independently verified mathematically (not just
asserted): the 240 E8 roots were generated directly from the standard
integer/half-integer root construction, the 8 simple roots and their
reflections were used to build the actual Coxeter element of the E8 Weyl
group, its Coxeter number (30) and the eigenvector for eigenvalue
exp(2*pi*i/30) were computed via numpy linear algebra, and projecting all
240 roots onto that real/imaginary eigenplane produced exactly 8
concentric rings of 30 points each — matching the well-known published E8
Coxeter-plane "flower" pattern. The packing-density numbers (2D ≈90.69%,
3D ≈74.05% via standard closed-form packing-density formulas; 8D ≈25.37%
= pi^4/384 from Viazovska's result; 24D ≈0.19% from Cohn et al.) are
standard published values.

**Different topic from recent days** — checked every `**Topic:**` line
across all prior notes.md files in the repo's history (all of September
and October). No prior post has covered sphere packing, the Kepler
conjecture, lattice theory, or Maryna Viazovska. Closest prior topics
were unrelated circle/shape-packing-adjacent posts (Apollonian gasket,
Reuleaux triangle, hat monotile, Penrose tiling), none of which touch
sphere packing or Viazovska's work; the 2026 Fields Medal (Hong Wang /
Kakeya needle problem) was covered on 2026-09-10 and is a different
person/result from the 2022 Fields Medal covered today.

**Media:** sphere_packing_e8.png (1200x675, dark theme) — left panel: the
E8 root system (240 points) in its genuine Coxeter-plane projection,
showing the famous 8-ring "flower" symmetry, computed via the Weyl-group
Coxeter-element eigenvector method described above; right panel: a bar
chart of best-proven sphere-packing density by dimension (1D, 2D, 3D, 8D,
24D), highlighting the E8 (8D) and Leech (24D) results. Plus
e8_lattice.gif (600x338, 12fps, 17 encoded frames after GIF duplicate-frame
collapsing, ~6.4s, built with matplotlib FuncAnimation + PillowWriter,
~100KB, verified frame-by-frame via PIL Image.seek() that the ring-reveal
and final states are genuinely distinct renders) — animates the E8 flower
being revealed ring by ring (1 of 8 through 8 of 8, with a live
"N of 240 roots revealed" caption), ending on the full 240-point flower
with a title/caption overlay. GIF included.

**Sources:**
- https://arxiv.org/abs/1603.04246 (Viazovska, "The sphere packing problem in dimension 8")
- Annals of Mathematics 185(3), 2017 — Cohn, Kumar, Miller, Radchenko, Viazovska, "The sphere packing problem in dimension 24"
- Quanta Magazine, "Out of a Magic Math Function, One Solution to Rule Them All" (2019)
- experimentalmath.info (Jonathan Borwein's blog), "Sphere packing problem solved in 8 and 24 dimensions" (April 2016)
- 2022 Fields Medal citation (International Mathematical Union)

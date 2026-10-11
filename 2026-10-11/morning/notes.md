# Morning post — 2026-10-11

**Topic:** Smale's Paradox / sphere eversion. In 1958 Stephen Smale published
"A Classification of Immersions of the Two-Sphere" (Transactions of the AMS,
vol. 90, pp. 281–290; announced 1957), proving that a sphere can be turned
inside out through a continuous family of immersions — self-intersections
allowed, but no cuts, tears, or creases (the surface's derivative is never
allowed to vanish). The result follows because immersions of S^2 into R^3
are classified by pi_2(SO(3)) = 0, so any two immersions (including the
sphere and its "inside-out" mirror) are regularly homotopic. Smale's proof
was indirect and gave no explicit picture of the process; mathematicians
(Raoul Bott among them) initially doubted it was even possible. Arnold
Shapiro (c. 1960) and later Bernard Morin — a blind topologist — worked out
explicit eversions; Morin's became the basis of the 1977 film "Turning a
Sphere Inside Out." The contrast used in the post/image: the same kind of
question for a LOOP in the plane is impossible, because a loop's turning
number (winding of the tangent vector) is a true regular-homotopy invariant
(Whitney–Graustein, 1937) — so +1 and -1 loops are NOT regularly homotopic
in 2D, unlike the sphere case in 3D where the analogous obstruction group is
trivial.

Checked against the full history of past topics in this repo (grepped all
notes.md "Topic:" lines across every date) — sphere eversion / Smale's
paradox has not been used before. No morning/ folder existed yet for
2026-10-11 when this run started, so no same-day collision check was
needed.

**Accuracy check:** Verified via WebSearch — multiple independent
corroborating sources: Wikipedia's "Sphere eversion" article, MathWorld's
"Eversion" entry, Harvey Mudd's "Sphere Eversions" Fun Fact page, and the
arXiv paper "The Golden Age of Immersion Theory in Topology: 1959-1973"
(John Milnor-adjacent survey literature) and "The 'Holiverse'" paper
(arXiv:1008.0916), which agree on: Smale's 1957/1958 result and its
Transactions of the AMS publication; the pi_2(SO(3)) = 0 classification
argument; Bott's early skepticism; Shapiro's and Morin's later explicit
constructions; and Morin being blind. Dates for Shapiro's construction vary
slightly across secondary sources (1960 vs 1961) — left vague/unstated in
the post itself to avoid asserting a disputed date. The Whitney–Graustein
turning-number fact used for the 2D contrast panel is standard, well-known
differential-topology content, not independently re-verified beyond
textbook knowledge.

**Media:** Static PNG — two-panel diagram: left panel shows a loop in the
plane with turning number +1 and its mirror with turning number -1,
connected by a red "no regular homotopy" blocked symbol (Whitney–Graustein
obstruction); right panel shows three stylized spheres in 3D (blue
"outside-out," a wavy self-intersecting "in transit" stage, red
"inside-out") captioned with the pi_2(SO(3)) = 0 explanation. Animated GIF —
a single sphere smoothly developing wavy, self-intersecting-looking
deformations (stylized, not a literal reproduction of Morin's explicit
eversion equations) while its color shifts blue -> purple -> red, with
rotating camera and captions ("A sphere, normal side out" -> "it passes
through itself (allowed, no tears/creases)" -> "...now turned inside-out!").
Both built with matplotlib/numpy; GIF used FuncAnimation + PillowWriter,
600x338, 12 fps, 48 frames (~4s), ~735KB, well under size limits. The GIF is
an illustrative stylization of the general idea, not a mathematically exact
rendering of a specific published eversion (e.g. Morin's or Thurston's) —
this simplification is noted here for transparency. GIF included: yes.

Sources:
- https://en.wikipedia.org/wiki/Sphere_eversion
- https://mathworld.wolfram.com/Eversion.html
- https://math.hmc.edu/funfacts/?p=503
- https://arxiv.org/pdf/math/0307127 (The Golden Age of Immersion Theory in Topology: 1959-1973)
- https://arxiv.org/pdf/1008.0916 (The 'Holiverse': holistic eversion of the 2-sphere in R^3)

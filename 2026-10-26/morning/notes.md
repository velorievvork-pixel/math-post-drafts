# Morning post — 2026-10-26

**Topic:** Julia sets and their link to the Mandelbrot set. Pick a
complex number c and iterate z → z² + c starting from every point z
in the plane. The Julia set is the boundary separating starting
points whose orbits stay bounded forever from those that escape to
infinity; the "filled" Julia set is everything that stays bounded.
For the quadratic family z² + c, the Julia set is always either one
connected piece, or it shatters into a totally disconnected "Cantor
dust" — never anything in between. The Mandelbrot set is exactly the
set of c-values for which the Julia set is connected (equivalently,
for which the critical orbit of z=0 stays bounded), so the Mandelbrot
set acts as a "map" or index of all the connected Julia sets. Gaston
Julia studied these sets around 1915 and published his main 199-page
memoir on iteration of rational functions in 1918 in the Journal de
Mathématiques Pures et Appliquées, winning the Grand Prix des
Sciences Mathématiques of the French Academy of Sciences that year.
Julia did this work while recovering from a severe WWI facial injury
that cost him his nose (he wore a leather strap across his face for
the rest of his life). Pierre Fatou did closely related, independent
work on the same subject around the same time (the two are now jointly
credited via "Fatou–Julia theory"), though Fatou did not enter the
1918 prize competition. The subject then lay largely dormant for about
60 years until Benoit Mandelbrot's fractal work and computer-generated
images — Mandelbrot used the connectedness criterion in 1977–80 to
define what's now called the Mandelbrot set — revived interest in
Julia's results in the late 1970s/1980s.

**Different topic from recent days / full history** — grepped every
`**Topic:**` line across the repo's full history (Sept 10 – Oct 25,
2026, 100+ prior posts). Julia sets have not been used before.
Related-but-distinct topics already covered: the Mandelbrot set
itself (twice, as parameter space / the whole fractal), Newton's
Fractal (a different iteration, root-finding via Newton's method, not
z²+c), the Barnsley Fern and Chaos Game (IFS fractals, unrelated
iteration rule), the Sierpinski Carpet, the Koch snowflake / coastline
paradox. This post is specifically about Julia sets (per-c dynamical
boundaries in the z-plane) and their connectedness link to the
Mandelbrot set (parameter space in the c-plane) — a distinct
mathematical object and relationship not covered previously.

**Accuracy check:** Verified via WebSearch across independent
sources:
- Yale Math, "The Mandelbrot Set and Julia Sets" (gauss.math.yale.edu)
  — the dichotomy theorem (Julia set connected ⟺ totally
  disconnected), dated to Julia/Fatou's 1918–19 work, and Mandelbrot's
  use of it to define the Mandelbrot set.
- complex-analysis.com, "Julia set" — Julia's 1918 memoir, *Mémoire
  sur l'itération des fonctions rationnelles*.
- arXiv:2507.02133 and arXiv:1810.06982 (p-adic / alternated Julia
  sets papers) — standard definitions of filled Julia sets and the
  connectedness-dichotomy statement.
- Chalkdust Magazine, "Pretty pictures in the complex plane" — the
  practical test that the Julia set is connected exactly when the
  orbit of the critical point z=0 stays bounded.
- Wikipedia, "Gaston Julia" — the 199-page memoir in the Journal de
  Mathématiques Pures et Appliquées, the 1918 Grand Prix des Sciences
  Mathématiques of the French Academy of Sciences, and Julia's WWI
  facial injury/leather nose strap.
- Michèle Audin's history of complex dynamics (via
  audin.pages.math.unistra.fr PDF, surfaced through WebSearch
  snippets) — the Academy's 1915 announcement of the 1918 prize topic
  (iteration), Fatou's closely related work and his not entering the
  competition, and the ~1920s–1980s dormancy of the subject before its
  revival under Julia's name.
- Wikipedia, "Gaston Julia" — credits Mandelbrot's fractal writings
  (*Les Objets Fractals*, 1975; English *Fractals: Form, Chance and
  Dimension*, 1977) with reviving interest in Julia's work.
The example Julia set shown (c = -0.7269 + 0.1889i, a connected,
dendrite/spiral-like set) and the escape-time renderings were computed
directly in this session via a standard vectorized escape-time
algorithm (|z| > 2 bailout, 150–220 iterations), not sourced from an
external image.

**Assets:**
- `julia_sets.png` (1200×675, dark theme, two panels) — left: the
  Julia set for c = -0.7269 + 0.1889i, a connected spiral/dendrite
  fractal; right: the Mandelbrot set with that same c marked, showing
  it sits inside the main cardioid; caption below explains the
  iteration rule, the connected/disconnected dichotomy, and Julia's
  history.
- `julia_morph.gif` (600×338, 12fps, 48 frames, ~4s loop, ~2.1MB,
  built with matplotlib FuncAnimation + PillowWriter) — animates c
  sweeping around the circle c = 0.7885·e^(iθ) (passing through the
  real axis at both the "rabbit"/dendrite region and the main-cardioid
  region), redrawing the corresponding Julia set each frame, with an
  in-frame title, live c-value readout, and a lower-third caption.
  GIF included: yes.

**Sources:**
- Yale Math, "The Mandelbrot Set and Julia Sets"
  (gauss.math.yale.edu/fractals/MandelSet/JuliaSets/JuliaDichotomy.html)
- complex-analysis.com, "Julia set"
- Chalkdust Magazine, "Pretty pictures in the complex plane"
  (chalkdustmagazine.com)
- Wikipedia, "Gaston Julia" (en.wikipedia.org)
- Michèle Audin, history of Fatou–Julia complex dynamics
  (audin.pages.math.unistra.fr, via WebSearch snippets)

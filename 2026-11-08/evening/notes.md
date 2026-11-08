# Evening post — 2026-11-08

**Topic:** The Dottie number, D ≈ 0.739085133215160641655..., the unique
real solution of cos(x) = x. Named for a folk story (unverified primary
source) about a French professor, "Dottie," who noticed it by repeatedly
pressing the cosine button on her calculator. It is the cosine map's one
and only real fixed point, and it is an *attracting* one: starting from
ANY real number and repeatedly applying cos() (in radian mode) converges
to D, since |sin(D)| ≈ 0.6736 < 1 at the fixed point. It has been proven
transcendental via the Hermite–Lindemann–Weierstrass theorem (if D were
algebraic, cos(D) = D would force D to be simultaneously algebraic and
transcendental — a contradiction), and this has since been formally
verified in the Isabelle/AFP proof assistant library ("The Dottie
Number," Lawrence C. Paulson, dated 2026-06-13 in the current
repository — note this appears to be a recent formalization, not
necessarily the date the mathematical fact was first proved, which is
older and uncertain). Despite being transcendental, no closed-form
expression for D is known.

**Different topic from this morning** (P vs NP / Cook–Levin / NP-
completeness) and from the repo's full history — grepped every
`**Topic:**` line across all prior posts (Sept 10 – Nov 8 morning,
2026, 120+ prior posts). The Dottie number / cos(x) = x has never been
used before. No related-but-distinct overlap found either (closest
adjacent topics are other named constants like the golden ratio/angle,
Apéry's constant, and 1729 — none involve a cosine fixed point).

**Accuracy check:** Verified via WebSearch across independent sources:
- The defining equation cos(x) = x, the approximate value
  0.739085133215160641655..., and the "Dottie" calculator-button origin
  story (explicitly flagged across sources as an unverified folk story,
  not a documented historical fact) — corroborated by a Scipython blog
  post ("The Dottie number"), a Reddit r/dailyprogrammer 2015 challenge
  thread describing the same origin story, and the Isabelle/AFP formal
  proof entry page.
- Uniqueness of the real root (cos(x) − x is strictly decreasing, so it
  crosses zero exactly once) and that it is an attracting fixed point
  of iterated cosine (confirmed via the derivative condition
  |d/dx cos(x)| = |sin(x)| < 1 at x = D) — corroborated by the Scipython
  blog post and general fixed-point-iteration theory.
- Transcendence via the Hermite–Lindemann–Weierstrass theorem, and its
  formalization in the Isabelle/AFP library (entry "The Dottie Number"
  by Lawrence C. Paulson, theorem `dottie-transcendental`) — corroborated
  by the isa-afp.org entry page and an arXiv paper ("An exact series
  expansion for the Dottie number," arXiv:2303.17962) that gives an
  informal version of the same transcendence argument. No source gave a
  firm original year for the transcendence fact itself, so no specific
  year is claimed in the post text — only the proof method (Hermite–
  Lindemann–Weierstrass) is cited, which is accurate and uncontroversial.
- No closed form is known — stated directly by the isa-afp.org entry
  materials, which note that computer-algebra "Root[...]" representations
  are implicit, not closed-form/explicit.

**Assets:**
- `dottie_number.png` (1164x739, dark theme, two panels) — left: a
  cobweb diagram on the cos(x) vs. y = x axes, showing the iterated
  path cos(cos(cos(...(2.0)...))) spiraling into the fixed point at
  D ≈ 0.739085; right: a text summary covering the defining equation,
  the "mash the cos button" calculator experiment, and the transcendence
  fact with no known closed form.
- `dottie_number.gif` (600x338, 12fps, 36 frames after Pillow's
  duplicate-frame merging, ~7.0s loop, ~145KB, built with matplotlib
  FuncAnimation + PillowWriter) — animates the same cobweb construction
  starting from x₀ = 2.3, spiraling step-by-step into the fixed point,
  with captions progressing from "Pick ANY number. Apply cos() over and
  over..." to "...and it always spirals to the same place" to a final
  held frame highlighting D ≈ 0.739085 with "cos(D) = D". GIF included:
  yes.

**Sources:**
- Scipython, "The Dottie number" (scipython.com/blog/the-dottie-number/)
- isa-afp.org, "The Dottie Number" (Lawrence C. Paulson)
  (isa-afp.org/entries/Dottie_Number.html)
- arXiv:2303.17962, "An exact series expansion for the Dottie number"

# Evening post — 2026-11-09

**Topic:** The Jordan Curve Theorem. Any simple closed curve in the plane
(a loop that never crosses itself, however wiggly) divides the plane into
exactly two regions — an inside and an outside — with the curve as their
only shared boundary. The statement feels obvious, but giving it a fully
rigorous proof turned out to be surprisingly hard. A simple test for
"inside vs. outside" follows directly from the theorem: cast any ray from
a point; if it crosses the curve an odd number of times, the point is
inside; an even number (including zero), it's outside. This is the
"ray casting" / "crossing number" algorithm, used in practice for
point-in-polygon tests in computer graphics and GIS.

**History (the hook for this post):**
- 1887: Camille Jordan states and gives a proof of the theorem in his
  textbook *Cours d'analyse*.
- 1905: Oswald Veblen publishes the proof long regarded as the first
  fully rigorous one, after decades of mathematicians (including Jordan's
  contemporaries) considering Jordan's own proof incomplete or flawed.
- 1911: L.E.J. Brouwer and Henri Lebesgue independently generalize the
  theorem to higher dimensions (the Jordan–Brouwer separation theorem).
- 2005: Thomas C. Hales produces a complete, machine-checked formal proof
  of the theorem in the HOL Light proof assistant (~60,000 lines).
- 2007: Hales publishes "Jordan's Proof of the Jordan Curve Theorem,"
  re-examining Jordan's original 1887 argument and arguing — against a
  century of textbook consensus — that it was essentially correct after
  all and needed only minor polishing.

**Topic check:** Grepped every `**Topic:**` line across the repo's full
history (2026-09-10 through 2026-11-09 morning, 140+ prior posts,
including today's morning post on the Double Bubble Theorem). The Jordan
Curve Theorem has never been used before. Confirmed fresh topic, and
topically distinct from this morning's soap-bubble/minimal-surface post.

**Accuracy check:** Verified via WebSearch across independent sources
(Wikipedia "Jordan curve theorem," the Oswald Veblen Wikipedia page,
Britannica's "Jordan curve theorem" article, and secondary accounts of
Thomas Hales's work): confirms Jordan's 1887 first claimed proof in
*Cours d'analyse*; confirms Veblen's 1905 proof is the one usually
credited as the first generally accepted rigorous proof; confirms
Brouwer and Lebesgue independently extended the theorem to higher
dimensions in 1911; confirms Hales's 2005 HOL Light formalization
(~60,000 lines) and his 2007 paper arguing Jordan's original proof was
basically sound, overturning the long-standing "Jordan's proof was
flawed" narrative.

**Assets:**
- `jordan_curve_theorem.png` (1200x675, dark theme, two panels) — left:
  a wiggly simple closed curve (generated as a radial function r(θ) so
  it's guaranteed non-self-intersecting) with two labeled test points,
  one inside (3 ray crossings, actually computed via a crossing-number
  algorithm and cross-checked against matplotlib's own point-in-polygon
  test) and one outside (2 crossings); right: title, plain-language
  statement of the theorem, and the proof-history timeline above.
- `jordan_curve_theorem.gif` (600x338, 12fps, 34 frames, 139KB, built
  with matplotlib FuncAnimation + PillowWriter) — animates a test point
  sweeping left to right along a fixed-height ray across the same curve,
  live-updating the crossing count and the INSIDE/OUTSIDE label/color as
  it crosses boundary segments, captioned "Odd crossings = inside, even
  crossings = outside". GIF included: yes.

**Sources:**
- Wikipedia, "Jordan curve theorem" (en.wikipedia.org/wiki/Jordan_curve_theorem)
- Wikipedia, "Oswald Veblen" (en.wikipedia.org/wiki/Oswald_Veblen)
- Britannica, "Jordan curve theorem" (britannica.com/topic/Jordan-curve-theorem)
- Thomas C. Hales, "Jordan's Proof of the Jordan Curve Theorem" (2007),
  and Hales's 2005 HOL Light formalization of the theorem

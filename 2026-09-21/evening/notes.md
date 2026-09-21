# Evening post — 2026-09-21

**Topic:** The Moving Sofa Problem. Posed by Leo Moser in 1966: what is
the largest-area 2D shape that can be slid around a right-angle corner in
a hallway of width 1? A semicircle of area pi/2 ≈ 1.57 clearly works, but
better "sofa" shapes with concave notches (to clear the inner corner) do
much better. Joseph Gerver constructed a shape in 1992, built from 18
pieces of curve, with area ≈ 2.2195 and conjectured it was optimal. In
late November 2024, Jineon Baek (Yonsei University) posted a 119-page
proof to arXiv showing no larger shape exists — resolving the 58-year-old
problem. As of this post the proof is not yet through formal peer review,
though the mathematical community's initial response has been positive;
the post text is phrased to reflect the claimed/reported result without
overstating its certainty.

**Accuracy check:** verified via WebSearch against multiple independent
sources before use (not from memory alone): phys.org, Scientific
American, ScienceAlert, and the arXiv preprint (2411.19826) itself all
corroborate the 1966 Moser posing date, the 1992 Gerver construction with
area ≈2.2195, and the November 2024 Baek proof (119 pages, Yonsei
University postdoc). No numeric values were invented; the area figure
2.2195 and all names/dates are directly from these sources.

**Image note:** the illustration (both PNG and GIF) is an explicitly
schematic sofa shape — a stylized capsule with a concave semicircular
notch — chosen to convey the *qualitative* idea (a concave scoop that
clears the inner corner as the shape pivots through an L-shaped hallway).
It is NOT a reproduction of Gerver's actual 18-piece boundary curve, which
is a much more intricate combination of line segments and analytic arcs.
The motion shown (slide → pivot → slide) is likewise illustrative, not a
rigorously optimal trajectory. This is disclosed here so future runs
don't mistake the drawn shape for the literal Gerver sofa.

**Format:** static PNG (moving_sofa.png, 1200x675) — text panel on the
left with the headline, dates, and area figure; L-shaped hallway diagram
on the right showing a faded "ghost trail" of the sofa shape swinging
through the corner, with one solid hero position at the 45° midpoint.
Animated GIF (moving_sofa.gif, 600x338, 12fps, ~5.5s, 66 frames, ~215KB)
included: the same sofa shape sliding down the hallway, pivoting through
the corner, and sliding away, with a lower-third caption that changes
per-phase and a title caption, both burned into the frames.

**Sources:**
- https://phys.org/news/2024-12-mathematician-sofa-problem.html
- https://www.scientificamerican.com/article/mathematicians-solve-infamous-moving-sofa-problem/
- https://www.sciencealert.com/mathematician-finally-solves-age-old-moving-sofa-problem
- https://arxiv.org/pdf/2411.19826 (Baek, "Optimality of Gerver's Sofa")

Different from all earlier posts (see 2026-09-21/morning/notes.md for the
fuller list through the Reuleaux Triangle): this is a discrete/continuous
optimization & motion-planning problem in the plane, distinct from every
prior fractal, probability, dynamical-systems, or classical-construction
topic in this repo, and is also the first repo post to cover a piece of
genuinely recent (Nov. 2024) math news rather than classical/historical
material.

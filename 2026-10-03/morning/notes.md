# Morning post — 2026-10-03

**Topic:** The Mandelbrot Set. On March 1, 1980, at IBM's Thomas J. Watson
Research Center, Benoit Mandelbrot used computer graphics to visualize the
set of complex numbers c for which the iteration z_(n+1) = z_n^2 + c
(starting at z_0 = 0) stays bounded rather than escaping to infinity. The
boundary of the resulting set is a fractal: zooming into any part of its
jagged edge reveals endlessly repeating, self-similar structures ("mini
Mandelbrots," spirals, seahorse-shaped valleys) at every scale. The set's
roots trace back to early-20th-century complex dynamics work by Pierre
Fatou and Gaston Julia; Mandelbrot's IBM access to computer graphics in
1980 let him actually see what their equations implied.

**Accuracy check:** verified via WebSearch against Wikipedia's
"Mandelbrot set" and "Benoit Mandelbrot" articles:
1. Date/location: March 1, 1980, IBM Thomas J. Watson Research Center,
   Yorktown Heights, NY.
2. Formula: z_(n+1) = z_n^2 + c, z_0 = 0; c is in the set if the sequence
   stays bounded (does not escape to infinity).
3. Historical roots in Pierre Fatou and Gaston Julia's early-20th-century
   complex dynamics research, confirmed by multiple independent sources.
4. Self-similar/fractal boundary structure is the set's defining,
   well-documented visual property.

**Format:** mandelbrot_set.png (static, full set rendered via escape-time
algorithm with smooth coloring, equation + plain-language caption) and
mandelbrot_zoom.gif (animated, ~4s @ 12fps, 600x338, zooms from the full
set into a "seahorse valley" region near c ≈ -0.7436+0.1318i, re-rendering
at increasing iteration depth per frame, with title/caption overlay). GIF
included.

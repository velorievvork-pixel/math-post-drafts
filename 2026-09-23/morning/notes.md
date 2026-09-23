# Morning post — 2026-09-23

**Topic:** Conway's Game of Life — the Glider. Conway's Game of Life is a
cellular automaton on an infinite grid with one rule: a live cell with 2
or 3 live neighbors survives, a dead cell with exactly 3 live neighbors
becomes alive, and every other cell dies or stays dead. Starting from just
5 live cells in a specific "glider" arrangement, this simple rule produces
a pattern that crawls diagonally across the grid forever, moving one cell
every 4 generations while returning to its exact original shape (just
translated). Discovered by Richard K. Guy in 1969, made famous by Martin
Gardner's October 1970 Scientific American column.

**Accuracy check:** verified via WebSearch against Wikipedia's "Glider
(Conway's Game of Life)" article and LifeWiki before use — including the
attribution (Guy, 1969, not simply "1970" as sometimes casually cited;
1970 is when Gardner's column popularized already-known patterns) and the
"1 cell every 4 generations" movement rate. The rule itself and the
glider's behavior were then verified computationally, not just described:
implemented the standard B3/S23 rule directly from scratch (not using a
library), simulated a real glider for 16 generations, and checked that the
exact set of live-cell coordinates at generation 4 equals the generation-0
coordinates shifted by exactly (+1,+1) — confirmed exactly (set equality,
not visual similarity). This translation property was independently
re-checked across three more 4-generation windows (4->8, 8->12, 12->16),
all passing.

**Bug caught and fixed:** the first render of slide 1 placed the glider
too close to the top of the frame, causing it to visually overlap the
hook text. Caught by inspection, fixed by moving the glider's starting
position further from the frame edge and enlarging the view window.

**Format:** 3-slide carousel (recommended) — slide1_hook.png (hook: just
the 5 live cells forming the glider, no explanation yet), slide2_shift.png
(reveal: generation 0 faded behind generation 4 in gold, visibly the same
shape shifted diagonally by one cell), slide3_trail.png (payoff: four
snapshots of the glider's position overlaid in different colors, showing
its diagonal crawl across the grid). Also kept: glider.png (single
combined side-by-side static image) and glider.gif (animated: 33
generations of the actual simulated automaton, ~5.5s, 6fps, 338x338,
generation number captioned) as alternative formats.

**Sources:**
- https://en.wikipedia.org/wiki/Glider_(Conway%27s_Game_of_Life)
- https://conwaylife.com/wiki/Glider

Different from all earlier posts: Kakeya needle problem, Go First Dice,
golden angle/sunflower phyllotaxis, Hardy-Ramanujan 1729, Ulam spiral,
Chaos Game/Sierpinski triangle, Buffon's Needle, Mobius strip, Voronoi
diagram, Penrose tiling, Coastline Paradox/Koch snowflake, Squaring the
Square, Konigsberg Bridges, Benford's Law, Efron's Dice, Monty Hall,
Cantor Set, Borromean Rings, Four Color Theorem, Hat aperiodic monotile,
Birthday Paradox, Zeno's Paradox, Collatz Conjecture, Gabriel's Horn,
Pigeonhole Principle, Weierstrass function, Mandelbrot Set, Newton's
Fractal, Kepler's Conjecture/sphere packing, Barnsley Fern, Heighway
Dragon Curve, Lorenz Attractor, Pascal's Triangle mod 2, Reuleaux
Triangle, Moving Sofa Problem, Coffee-Cup Caustic/Nephroid, Napoleon's
Theorem, Apollonian Gasket, Ford Circles — this is a discrete cellular
automaton (a local update rule applied simultaneously across a grid every
tick), a fresh mechanism completely distinct from every prior fractal,
continuous dynamical system, probability, or classical-geometry topic in
this repo.

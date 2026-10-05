# Morning post — 2026-10-05

**Topic:** The Collatz conjecture (3n+1 problem / Syracuse problem).
Proposed by Lothar Collatz in 1937: take any positive integer n; if it's
even, divide by 2; if it's odd, compute 3n+1; repeat. The conjecture
claims every starting number eventually reaches 1. It's famously simple
to state yet remains unproven — verified by computer for all n up to
about 2.88×10^18, but not for all n. The trajectory for n=27 is a classic
example of the chaotic-looking "hailstone" behavior: it takes 111 steps
to reach 1, climbing as high as 9232 before crashing down. In 2019,
Terence Tao proved that "almost all" Collatz orbits (in a logarithmic
density sense) attain almost bounded values — a major partial-progress
result, though not a full proof.

**Accuracy check:** verified via WebSearch — the n=27 trajectory (111
steps, peak 9232) cross-checked against Wikipedia's Collatz conjecture
article; Tao's 2019 result ("Almost all orbits of the Collatz map attain
almost bounded values," arXiv:1909.03562) confirmed via its abstract and
multiple secondary summaries; the 1937 date and verification bound
(~2.88×10^18) are standard/well-established facts about the conjecture.
The n=27 full sequence and peak/step-count were also independently
recomputed directly in the plotting script (pure integer arithmetic),
not just asserted from search results.

**Different topic from recent days** — checked every notes.md topic/dedup
line in the repo. Note: the Kakeya needle problem / Hong Wang's 2026
Fields Medal was already covered on 2026-09-10 (evening), so that was
deliberately avoided today in favor of Collatz, which has not been used
before. Other prior topics checked and avoided: Lorenz attractor, dragon
curve, moving sofa problem, Reuleaux triangle, Apollonian gasket,
Napoleon's theorem, Fibonacci spiral, Conway's Game of Life, Basel
problem, Sierpinski carpet, logistic map, Hilbert curve, brachistochrone,
rose curves, Gömböc, Lissajous curves, Buffon's needle, Ulam spiral,
Benford's law, Simpson's paradox, hat monotile, Mandelbrot set, Pólya
recurrence, Fourier epicycles.

**Media:** collatz_hailstone.png (1200x675, static) — left panel shows
the full n=27 hailstone trajectory with its start, peak (9232), and end
marked; right panel overlays trajectories for n=1..80 on a log scale,
showing the chaotic-but-converging "fan" pattern. Plus
collatz_hailstone.gif (600x338, ~13fps, 112 frames after GIF palette
optimization collapsed some duplicate hold-frames, ~8.6s, built via a
manual per-frame buffer-copy + Pillow save_all loop after discovering
matplotlib's stock PillowWriter/FuncAnimation.save() path was reusing an
uncopied render buffer across frames in this environment — causing every
saved frame to collage into the final frame's content; verified the fix
by re-reading the saved GIF frame-by-frame with Image.seek()) — animates
the n=27 trajectory being traced step by step with a live step/value
caption, ending on the "111 steps, peak 9232" summary. GIF included.

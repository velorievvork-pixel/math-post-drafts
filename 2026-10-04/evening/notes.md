# Evening post — 2026-10-04

**Topic:** Pólya's Recurrence Theorem (George Pólya, 1921). A simple
symmetric random walk on the integer lattice Z^d is *recurrent* (returns
to its starting point with probability 1) when d = 1 or d = 2, but
*transient* (there is a positive probability it escapes to infinity and
never returns) when d ≥ 3. Shizuo Kakutani's well-known paraphrase:
"A drunk man will find his way home, but a drunk bird may get lost
forever." The classical proof (going back to ideas later formalized via
electrical network / effective-resistance arguments) shows the sum of
return probabilities diverges in 1D/2D (forcing a.s. recurrence by
Borel-Cantelli) but converges in 3D+.

**Accuracy check:** verified via WebSearch cross-referencing multiple
independent sources (MacTutor/St Andrews Kakutani quotations page, a
Columbia University probability course page, and an arXiv survey on
random walk problems), which converge on the same statement of the
theorem, the 1921 date, and the Kakutani quote. Direct WebFetch to most
of these domains was blocked by this sandbox's egress proxy, so
verification relied on WebSearch's cross-source synthesis rather than a
single primary fetch; the core theorem itself (recurrence in d=1,2,
transience in d>=3) is well-established, textbook-level probability
theory. The specific walk statistics shown in the images (number of
returns to origin, step counts) were generated and counted directly by
the plotting/animation scripts themselves (numpy), not asserted.

**Different topic from recent days** — checked every notes.md topic line
in the repo; nothing on random walks / Pólya recurrence has been used
before (this morning's post was Fourier series / epicycles).

**Media:** polya_random_walk.png (1200x675, static) — left panel shows a
single 2D lattice random walk (6000 steps) with its 4 returns to the
origin marked in red; right panel shows a 3D lattice random walk (6000
steps) over the same step count, wandering off and ending far from its
starting star, never returning. Caption states the theorem and the
Kakutani quote. Plus polya_walk.gif (600x338, 12fps, 90 frames, ~7.5s,
PillowWriter) — animates a single 2D random walk being traced step by
step, with a live "returns home" counter and the returns marked in red
as they happen, with an in-frame title/caption. GIF included.

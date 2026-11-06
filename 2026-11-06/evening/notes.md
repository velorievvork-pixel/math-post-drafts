# Evening post — 2026-11-06

**Topic:** The Klein bottle. Described by Felix Klein in 1882, it is a
closed surface with no boundary and no distinct inside or outside —
non-orientable, like a 3D analog of the Möbius strip. It cannot be
embedded in ordinary 3D space without self-intersecting (the classic
"figure-8 immersion" shown here pierces itself through its own neck),
but it embeds cleanly, with no self-intersection, in 4D. Its Euler
characteristic is 0 (1 vertex − 2 edges + 1 face), same as a torus,
despite being topologically very different (the torus is orientable).
Cutting a Klein bottle in half along its axis of symmetry yields two
mirror-image Möbius strips. Since 1994, Berkeley astronomer Cliff
Stoll's company Acme Klein Bottle has hand-blown real glass models of
it, from 3.5-inch desk ornaments up to 3.5-foot versions.

**No 2026-11-06 morning post exists** (the prior scheduled run appears
to have been missed), so there was nothing to check against for
same-day duplication. Checked topic choice against the repo's full
history instead (every `**Topic:**` line across all notes.md files,
Sept 10 – Nov 5, 2026, 130+ prior posts). The Klein bottle has not
been used before. Related-but-distinct prior topics: the Möbius strip,
the Mandelbrot/Julia sets, the Banach–Tarski paradox, the Poincaré
conjecture — none cover the Klein bottle itself. Also specifically
checked and ruled out as already-used in prior "topic check" notes
(so avoided as too-recently-adjacent even though not literally the
same topic): Collatz conjecture, the Hardy–Ramanujan taxicab number
1729, the Hairy Ball theorem, the Borsuk–Ulam theorem, the "Happy
Ending" problem, Cantor's diagonal argument, Gabriel's Horn.

**Accuracy check:** Verified via WebSearch across independent sources:
- Wikipedia, "Klein bottle" — confirms Felix Klein first described it
  in 1882; non-orientable with no boundary and no distinct inside/
  outside; cannot be embedded in 3D without self-intersection but can
  be embedded in 4D without self-intersection; Euler characteristic 0
  via a 1-vertex/2-edge/1-face cell decomposition; constructible as
  the connected sum of two projective planes.
- Linda Hall Library ("Felix Klein" feature article) and a Physics
  Forums discussion thread, corroborated by AOL/Mashable science
  coverage — confirm that cutting a Klein bottle in half along its
  symmetry axis produces two mirror-image Möbius strips.
- Science Insights ("What Is a Klein Bottle?") — confirms Cliff Stoll
  (Berkeley astronomer) founded Acme Klein Bottle in 1994 and sells
  hand-blown glass Klein bottles ranging from about 3.5 inches to 3.5
  feet tall.
- Note: the common "Kleinsche Fläche (Klein surface) misheard as
  Kleinsche Flasche (Klein bottle)" naming anecdote is reported by
  some secondary sources but was NOT used in the post or treated as
  confirmed fact, since it couldn't be independently verified as more
  than folk etymology.

**Assets:**
- `klein_bottle.png` (1169x711, dark theme, two panels) — left: a 3D
  matplotlib `plot_surface` rendering of the classic "figure-8
  immersion" parametrization of the Klein bottle; right: summary text
  covering the definition, non-orientability, Euler characteristic,
  the 3D/4D embedding distinction, the Möbius-strip bisection fact,
  and the Cliff Stoll/Acme Klein Bottle detail.
- `klein_bottle.gif` (600x338, 12fps, 60 frames, ~5s loop, ~760KB,
  built with matplotlib FuncAnimation + PillowWriter) — the same
  figure-8 immersion smoothly rotating through a full 360°, with a
  baked-in title ("The Klein Bottle") and lower-third caption ("A
  closed surface with no inside or outside"). GIF included: yes.

**Sources:**
- Wikipedia, "Klein bottle" (en.wikipedia.org/wiki/Klein_bottle)
- Linda Hall Library, "Felix Klein" (lindahall.org/felix-klein)
- Science Insights, "What Is a Klein Bottle? No Inside, No Outside"
  (scienceinsights.org)

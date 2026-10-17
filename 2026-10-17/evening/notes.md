# Evening post — 2026-10-17

**Topic:** The Banach–Tarski Paradox. A theorem of set theory (assuming
the Axiom of Choice) stating that a solid ball in 3D space can be cut
into a finite number of pieces and reassembled, using only rotations and
translations (no stretching), into TWO balls, each identical in size to
the original. Published by Stefan Banach and Alfred Tarski in 1924
(building on an equivalent 1914 result by Felix Hausdorff). The original
construction used 6 pieces; Raphael Robinson proved in 1947 that 5 pieces
is the minimum possible (4 pieces cannot work, though 4 pieces suffice if
a single center point is excluded). The "trick" is that the pieces are
non-measurable sets — so irregular (built via the Axiom of Choice, picking
one point from each of uncountably many orbits of a free group acting on
the sphere) that they cannot be assigned any volume at all under Lebesgue
measure, so no volume is actually created or violated. It only works in
3 or more dimensions because the rotation group SO(3) contains a free
group on two generators, giving the needed "paradoxical" algebraic
structure — it provably fails in 1D and 2D. It is a theorem about the
limits of the concept of "measurable volume," not a physical procedure;
no real object can be cut this way.

**Different topic from recent days** — checked every `**Topic:**` line
across the repo's full history (Sept–Oct, 90+ prior posts, including this
morning's Poincaré Conjecture post). The Banach–Tarski paradox has not
been used before; distinct from related-but-different previously-covered
topics like the Poincaré Conjecture, Kepler's sphere-packing conjecture,
and the Riemann Hypothesis.

**Accuracy check:** Verified via WebSearch across multiple independent
sources (Wolfram MathWorld, an arXiv exposition on the Axiom of Choice,
Brilliant.org, ProofWiki) — direct fetches of wikipedia.org and some
.edu sources failed through the sandbox's egress proxy as in prior runs,
so facts were cross-verified via WebSearch result snippets from several
independent outlets. Confirmed facts, consistent across sources: the
1924 Banach–Tarski publication and the earlier 1914 Hausdorff result; the
minimum of 5 pieces, proved by Robinson in 1947 (down from the original
6); that the construction depends on the Axiom of Choice and produces
non-measurable (unmeasurable) pieces; that the result is specific to
dimensions 3 and up due to the free-group structure of the 3D rotation
group; and that it is understood as a theorem about the limits of
measure theory, not a physically realizable procedure.

**Assets:**
- `banach_tarski.png` (1200x675, dark theme, two panels) — left: a
  schematic showing one solid ball split into 5 colored non-measurable
  "pieces" (visualized as five scattered point clusters) and reassembled
  into two full-size balls, with a callout explaining that no volume is
  added since the pieces have no measurable volume to begin with; right:
  a title + timeline of key facts (1924 publication, 1947 minimal-5-pieces
  proof, why it works, and the Axiom-of-Choice catch).
- `banach_tarski.gif` (600x338, 12fps, ~5.7s runtime, built with
  matplotlib FuncAnimation + PillowWriter, ~870KB) — animates a ball made
  of 5 colored point-cluster "pieces" splitting apart and then
  reassembling into two separate full-size ball shapes, with an in-frame
  title and a changing lower-third caption narrating each stage (start →
  cut into 5 pieces → reassemble → result: two balls). GIF included: yes.

**Sources:**
- Wolfram MathWorld, "Banach-Tarski Paradox" (mathworld.wolfram.com, via
  WebSearch)
- "A Gentle Introduction to the Axiom of Choice" (arXiv:2509.01830, via
  WebSearch)
- Brilliant.org, "Banach-Tarski Paradox" wiki entry (via WebSearch)
- ProofWiki, "Banach-Tarski Paradox" / "Banach-Tarski Theorem" (via
  WebSearch)
- Cross-referenced against Wikipedia's "Banach–Tarski paradox" article via
  WebSearch snippet (direct en.wikipedia.org fetch failed — blocked by
  sandbox proxy, as in several prior runs)

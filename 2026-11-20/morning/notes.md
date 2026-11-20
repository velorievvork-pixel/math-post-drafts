# Morning post — 2026-11-20

**Topic:** The Ham Sandwich Theorem (Stone–Tukey theorem). For any $n$
measurable objects in $n$-dimensional space — any size, shape, position,
even overlapping — a single straight hyperplane always bisects all $n$ by
volume simultaneously. In 2D this is the "pancake theorem": any two
pancakes on a griddle can be cut exactly in half, together, by one
straight line. In 3D it's the literal sandwich: one planar cut through
bread, ham, and cheese halves all three layers at once. History: the 3D
case first appears in a 1938 note in a Polish mathematics journal; Hugo
Steinhaus posed the problem and Stefan Banach gave the first proof
(reportedly using what's now called the Borsuk–Ulam theorem). Arthur H.
Stone and John Tukey's 1942 paper "Generalized Sandwich Theorems" (Duke
Math. J.) extended it to arbitrary dimension $n$ via Borsuk–Ulam and gave
it the "ham sandwich" name — hence it's also called the Stone–Tukey
theorem.

**Different topic from recent days:** Grepped every `**Topic:**` line
across the full repo history (2026-09-10 through 2026-11-19 evening,
200+ prior posts) and also scanned for "ham sandwich", "pancake",
"Stone-Tukey", and related terms. The Ham Sandwich Theorem had been
explicitly flagged as an unused candidate idea in the 2026-11-16 and
2026-11-19 morning notes, but never actually posted until now. Confirmed
fresh topic — distinct from the Borsuk–Ulam theorem itself (already
covered separately) and from the Dandelin spheres / Nine-Point Circle
posts that flagged it as a future candidate.

**Accuracy check:** Verified via WebSearch across multiple independent
sources (Wikipedia's "Ham sandwich theorem" article; MathWorld's "Ham
Sandwich Theorem" page; Brilliant.org's "Ham sandwich theorem" wiki).
WebFetch to en.wikipedia.org was blocked by the session's network
policy, so this relied on WebSearch result summaries of those sources.
All sources agree on: the general $n$-dimensional statement and its
name; the 2D "pancake theorem" special case and its rotating-knife /
intermediate-value-theorem proof; the 1938 Polish-journal note on the 3D
case; the Steinhaus-posed / Banach-proved attribution for the first
proof (noting some historical disagreement on exact credit, which the
post reflects by naming both); and Stone & Tukey's 1942 "Generalized
Sandwich Theorems" paper, its use of the Borsuk–Ulam theorem, and the
resulting "ham sandwich" / "Stone–Tukey theorem" naming.

This was additionally verified computationally: the image and GIF
implement an actual rotating-knife algorithm (not just an illustration)
for the 2D pancake case. Two irregular, differently sized, overlapping
"pancake" blobs are generated; for each candidate cut angle θ, the
offset that exactly bisects pancake A is found via root-finding
(`scipy.optimize.brentq` on a half-plane-clipped-polygon area function,
using Sutherland–Hodgman clipping + the shoelace formula), and θ itself
is then root-found so that the same cut also exactly bisects pancake B.
The script asserts both resulting areas are within 1e-6 of exactly 50%
before saving any image — confirmed in the script's own printed output
(both pancakes landed at exactly 50.000%/50.000%).

GIF included: yes.

**Assets:**
- `ham_sandwich_theorem.png` (1200x675, dark theme, two panels) — left:
  title, the general statement, the 3D sandwich / 2D pancake framing,
  and the 1938/Steinhaus-Banach/Stone-Tukey-1942 history, with a source
  line; right: the two irregular overlapping pancake blobs with the
  single computed straight cut drawn through both, labeled with each
  pancake's exact 50.0%/50.0% split.
- `ham_sandwich_theorem.gif` (600x338, 12fps, ~3.9s of unique motion
  plus a held final frame, ~473KB, built with matplotlib FuncAnimation +
  PillowWriter) — the knife rotates while always being re-solved to keep
  the "ham" pancake exactly halved; a live caption tracks the "cheese"
  pancake's split percentage, which converges to 50.0%/50.0% as the line
  turns green with the caption "One straight cut bisects the ham
  pancake exactly in half... both halved together!"

**Sources:**
- Wikipedia, "Ham sandwich theorem"
- MathWorld (Wolfram), "Ham Sandwich Theorem"
- Brilliant.org, "Ham sandwich theorem" wiki
- Stone, A. H. & Tukey, J. W. (1942). "Generalized sandwich theorems."
  Duke Mathematical Journal, 9(2), 356–359.

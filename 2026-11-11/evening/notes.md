# Evening post — 2026-11-11

**Topic:** Moser's Circle Problem. Place n points on a circle (no three
chords meeting at a single interior point) and draw every chord between
them. For n = 1 to 5, the number of regions the chords cut the disk
into doubles each time: 1, 2, 4, 8, 16 — matching 2^(n-1) and tempting
you to guess 32 for n = 6. The actual count is 31. Posed by Leo Moser
in 1949 as a cautionary example against generalizing a pattern from too
few data points. The exact closed-form formula (for points in general
position, no three chords concurrent) is C(n,0) + C(n,2) + C(n,4),
giving the sequence 1, 2, 4, 8, 16, 31, 57, 99, 163, 256, ... (OEIS
A000127). Note: if the n points are evenly spaced around the circle
instead of in general position, extra concurrences can reduce the
count further (e.g. 6 evenly-spaced points give only 30 regions).

**Different topic from today's morning post and prior days:** Morning
post today covered the Honeycomb Conjecture. Grepped all `**Topic:**`
lines across the repo's full history (Sept–Nov 2026, 145+ prior posts)
— Moser's Circle Problem has never been used.

**Accuracy check:** Verified via WebSearch against Wikipedia's "Moser's
circle problem" / "Dividing a circle into areas" articles and OEIS
A000127, confirming: the 1949 attribution to Leo Moser, the sequence
1, 2, 4, 8, 16, 31, 57, 99, 163, 256, the closed-form formula
C(n,0)+C(n,2)+C(n,4), and the evenly-spaced-points caveat.

**Assets:**
- `moser-circle-problem.png`: 2x3 grid of circles for n = 1 through 6,
  points in general position (slightly perturbed, non-uniform angles
  so no accidental triple chord intersections), all chords drawn, each
  panel labeled with its region count; n = 6 panel highlighted in red
  with "(not 32!)".
- `moser-circle-problem.gif`: animated build-up from n = 1 to n = 6,
  chords appearing as points are added, captions updating the region
  count each step, ending on the red "31 regions, NOT 32!" reveal.
  Included — GIF generation succeeded (matplotlib FuncAnimation +
  PillowWriter, 600x338, 12fps, ~44KB).

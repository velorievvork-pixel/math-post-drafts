# Morning post — 2026-10-27

**Topic:** The "Spectre" aperiodic monotile (Smith, Myers, Kaplan &
Goodman-Strauss, May 2023). In March 2023 the same four authors announced
the "hat" — the first single shape ("einstein" tile) proven to force a
non-periodic (never-repeating) tiling of the plane — but every hat tiling
requires some copies to be mirror-reflected. Two months later they found
a close relative, the Spectre: a 14-sided polygon (built by tweaking the
edges of an equilateral variant of the hat) that is a *strictly chiral*
aperiodic monotile — it tiles the plane using only rotations and
translations of a single copy, never its mirror image. It's considered
the first "true" single-shape aperiodic tile in that stronger sense.

Checked prior post history (grepped all notes.md files in this repo) —
the "hat" tile was covered before ("The 'Hat' aperiodic monotile"), but
the Spectre (the chiral follow-up) has not been used. This post is
explicitly framed as a distinct topic (what changed between hat → spectre),
not a repeat.

**Accuracy check:** Verified via WebSearch against the arXiv abstract/paper
page (arXiv:2305.17743, "A chiral aperiodic monotile" by David Smith,
Joseph Samuel Myers, Craig S. Kaplan, Chaim Goodman-Strauss) and secondary
coverage (GIGAZINE, Interesting Engineering, ComDig). Confirms: (1) the
hat paper came first (March 2023) and required reflected copies in every
tiling it admits, (2) the Spectre paper was submitted May 28, 2023, by the
same four authors, (3) it was derived by modifying an equilateral variant
of the hat so that only non-reflected copies tile aperiodically, (4) it
later appeared in the journal Combinatorial Theory (revised Sept 2024).

**Visuals:**
- Static PNG (`spectre_tile.png`): two side-by-side rosette diagrams built
  from a stylized concave polygon (NOT the literal 13/14-sided hat/spectre
  shape — an illustrative schematic, captioned as such) — left panel ("The
  Hat") shows a ring of 6 copies around a central tile with alternating
  original/mirrored (teal/orange) copies; right panel ("The Spectre")
  shows the same arrangement using only rotated copies, all one color
  family, with captions explaining the distinction.
- Animated GIF (`spectre_tile.gif`, 600x338, 12fps, ~2.6s, 139KB): the
  central tile spins a full rotation, then six more copies build up
  one-by-one around it (rotated only, never mirrored), with a captioned
  lower-third/title ("THE SPECTRE TILE (2023)" / "first 'einstein' tile
  needing zero reflections"). GIF included: yes.

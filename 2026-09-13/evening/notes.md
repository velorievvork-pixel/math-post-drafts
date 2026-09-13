# Evening post — 2026-09-13

**Topic:** The Penrose tiling. In 1974 Roger Penrose found a set of just two
tile shapes (a "kite" and a "dart", derived from golden-ratio triangles)
that can tile the infinite plane, but only ever aperiodically — no
translation of the pattern ever maps it onto itself, no matter how large
an area you look at. The ratio of kites to darts in any such tiling
converges to the golden ratio φ. In 1982 Dan Shechtman observed a real
metal alloy (Al-Mn) with the same forbidden 5/10-fold symmetry — initially
ridiculed by the crystallography establishment, he was later awarded the
2011 Nobel Prize in Chemistry for discovering these "quasicrystals."

**Visualization:** generated programmatically (not a stock image) using
the standard Robinson-triangle subdivision algorithm — start with 10
golden triangles arranged in a decagon ("cartwheel"), then repeatedly
subdivide each triangle according to Penrose's substitution rules.
Triangles are colored by type (red = dart half, blue = kite half) with no
border, so adjacent same-type triangles visually fuse into the classic
kite/dart tile outlines. `penrose_tiling.png` shows a 7-times-subdivided
patch cropped to a wide rectangle, fully inside the decagon boundary so no
background shows at the edges. `penrose_tiling.gif` (~5.9s, 11fps,
600x338, captioned) animates the same construction growing from a coarse
level-2 subdivision up to the detailed level-6 pattern shown in the static
image, holding on the final frame.

**Sources:**
- https://arxiv.org/abs/2303.10798 (background on aperiodic tilings /
  Einstein problem, confirms Penrose's role and the golden-ratio kite+dart
  construction)
- Search-verified: Penrose's 1974 two-tile aperiodic tiling (kite/dart or
  36°/72° rhombi), golden-ratio area/count ratio between the two tile
  types, Dan Shechtman's 1982 discovery of quasicrystals (10-fold
  diffraction pattern in an Al-Mn alloy) and his 2011 Nobel Prize in
  Chemistry for it (nobelprize.org, aperiodical.com, momath.org via
  search snippets — direct WebFetch to these domains was blocked by the
  sandbox's egress proxy this run, so facts were confirmed via WebSearch
  result snippets instead of full-page fetch).

Different from all earlier posts: Kakeya needle problem, Go First Dice,
golden angle/sunflower phyllotaxis, Hardy-Ramanujan 1729, Ulam spiral,
Chaos Game/Sierpinski triangle, Buffon's Needle, Mobius strip, Voronoi
diagram (this morning) — this uses aperiodic substitution tiling / golden
ratio geometry tied to a real (Nobel-winning) physical discovery, a fresh
mechanism from all prior posts.

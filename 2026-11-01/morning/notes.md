# Morning post — 2026-11-01

**Topic:** "God's Number" for the Rubik's Cube. In July 2010, Tomas
Rokicki, Herbert Kociemba, Morley Davidson, and John Dethridge proved
that every one of the cube's 43,252,003,274,489,856,000 (~43
quintillion) possible positions can be solved in 20 moves or fewer in
the half-turn metric. Some positions genuinely require all 20 (several
distance-20 positions are known), so 20 is the exact diameter of the
cube's state graph — hence "God's Number." The proof used ~35 CPU-years
of computing time donated by Google: positions were grouped into
roughly 2.2 billion cosets by symmetry, and each coset was shown (via
computer search) to contain no position needing more than 20 moves —
not by finding an optimal solution for every position individually.

**Different topic from recent days** — grepped every `**Topic:**` line
across the repo's full history (Sept 10 - Oct 31, 2026, 115+ prior
posts). "God's Number" / Rubik's Cube group-theory diameter has not
been used before. No other post has covered Rubik's Cube mechanics or
group-theoretic puzzle diameters specifically (closest adjacent topics
covered: the 15 puzzle/permutation parity was not covered either, and
this is a distinct result from all listed topics).

**Accuracy check:** Verified via WebSearch across independent sources:
- cube20.org (the official project page by the proving team) via
  search snippets — confirms the July 2010 date, the team (Rokicki,
  Kociemba, Davidson, Dethridge), and "God's Number is 20."
- MAA News, "Google helps find simplest solution to Rubik's Cube" —
  confirms ~35 CPU-years of compute donated by Google, and that all
  43,252,003,274,489,856,000 positions were checked, with solutions of
  length ≤20 found for each (not necessarily optimal solutions).
- Secondary coverage (openthemagazine.com, techvigil.com,
  seanelvidge.com) corroborating the team names and result.
- A historical mirror of the original cube20.org page (via
  git.captnemo.in) supplied the exact distance-distribution counts for
  distances 0–11 used in the chart (1, 18, 243, 3240, 43239, 574908,
  7618438, 100803036, 1332343288, 17596479795, 232248063316,
  3063288809012), confirmed consistent with a second independent page
  (cuberoot.me) for the overlapping range it listed (0–9). Direct fetch
  of cube20.org itself was blocked by this session's network policy
  (DNS resolution failure), so the table came from the search-tool
  snippets of the mirror/secondary pages rather than the live site;
  distances 12+ were not independently re-verified for the chart and
  were therefore omitted (the chart only plots the confirmed 0–11
  range) and the "peaks around 17–18 moves" claim is stated qualitatively,
  consistent with widely corroborated summaries, without citing exact
  counts for those depths.
- Total position count 43,252,003,274,489,856,000 confirmed by both
  cube20.org snippets and MAA News independently.

**Assets:**
- `gods_number_rubiks_cube.png` (1200x675, dark theme, two panels) —
  left: log-scale bar chart of verified position counts by distance
  (0–11 moves) showing explosive growth; right: summary of the total
  position count, the "God's Number = 20" result, the proving team,
  and the compute used.
- `gods_number_rubiks_cube.gif` (600x338, 12fps, ~1.75s per loop
  cycle via GIF frame timing — 21 frames, ~125KB, built with
  matplotlib FuncAnimation + PillowWriter) — shows a cube "net" (6
  unfolded faces) starting fully scrambled and resolving sticker-by-
  sticker over a simulated 20-move countdown down to "SOLVED", with a
  live move counter and caption baked into each frame. GIF included:
  yes.

**Sources:**
- cube20.org, "God's Number is 20" (official project page; accessed
  via search snippets, direct fetch blocked by sandbox network policy)
- MAA News, "Google helps find simplest solution to Rubik's Cube"
  (maa.org)
- Historical mirror of the cube20.org 2010 announcement
  (git.captnemo.in/nemo/hn-classics)

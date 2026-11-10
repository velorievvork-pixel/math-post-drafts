# Evening post — 2026-11-10

**Topic:** The Catenary curve. The curve a chain (or cable/rope) forms
when it hangs freely under its own weight between two supports is
NOT a parabola — it's a catenary, y = a·cosh(x/a). Galileo assumed it
was a parabola; Joachim Jungius proved this wrong in 1669 (published
posthumously). Jakob Bernoulli issued a public challenge in 1690 to
find the true curve, and it was solved independently in 1691 by
Gottfried Leibniz, Christiaan Huygens, and Johann Bernoulli. Huygens
coined the term "catenary" (from Latin *catena*, "chain") in a 1690
letter to Leibniz. The catenary shows up today in suspension-bridge
cables, the Gateway Arch (built as an inverted catenary), and power
lines.

**Different topic from the morning post:** Morning post (same date)
covered Varignon's Theorem — unrelated topic. Also checked the full
`**Topic:**` history across the repo (180+ prior posts, Sept–Nov
2026): Catenary has never been used before. Related-but-distinct
topics already covered include Gabriel's Horn, the Brachistochrone,
the Astroid, and the Coastline Paradox/Koch snowflake — none of
which discuss the hanging-chain problem.

**Accuracy check:** Verified via WebSearch against the MacTutor
History of Mathematics archive (mathshistory.st-andrews.ac.uk,
"Catenary" curve page) and corroborating sources: Galileo's
parabola assumption, Jungius's 1669 disproof, Huygens's 1690 naming
of "catenary" in a letter to Leibniz, Jakob Bernoulli's 1690
challenge, and the independent 1691 solutions by Leibniz, Huygens,
and Johann Bernoulli. The y = a·cosh(x/a) form is the standard,
well-established equation of the catenary (not specifically dated to
1691, since hyperbolic-function notation came later, but the curve's
shape and the 1691 priority are well attested).

**Assets:**
- `catenary.png`: static diagram overlaying a catenary (gold, with a
  chain-link dotted style) against a matching parabola (blue dashed)
  sharing the same endpoints and vertex, showing how visibly they
  diverge away from the center.
- `catenary.gif`: animated version — a too-slack chain visibly
  tightens/settles over time into the correct catenary shape,
  continuously compared against the fixed parabola overlay, with a
  caption overlay. Included — GIF generation succeeded (matplotlib
  FuncAnimation + PillowWriter, ~56 encoded frames @ 12fps, 600x338,
  ~7.3s, ~460KB).

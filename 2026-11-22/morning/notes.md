# Morning post — 2026-11-22

**Topic:** The Coin Rotation Paradox. Roll a coin of radius r around a
fixed, identical coin (radius R = r) without slipping, and the rolling
coin completes **two** full rotations relative to an outside observer
by the time it gets back to its start — not one, as naive intuition
("it traveled a distance equal to its own circumference") suggests.
General formula for a coin of radius r rolling around a fixed coin of
radius R: total rotations = R/r + 1. With R = r this gives 2. The
extra turn comes from the rolling coin also being carried around a
circular path (revolution), on top of its ordinary rolling spin. The
paradox was popularized by Martin Gardner in 1975 and is notorious for
having tripped up official graders of a 1982 SAT problem (Scientific
American later covered the controversy).

**Different topic from recent days / repo-wide:** Grepped every
`**Topic:**` line across the full repo history (2026-09-10 through
2026-11-21 evening, 215+ prior posts) plus checked candidate topics
individually. The coin rotation paradox has not been used before
(confirmed via targeted search for "coin rotation" / related terms).
Also distinct from related-but-different prior posts: the Tautochrone
curve / cycloid pendulum clocks, Buffon's Needle, the Birthday
Paradox, and the Gömböc — none of which cover rolling-circle rotation
counting.

**Accuracy check:** Verified via WebSearch pulling from Wikipedia's
"Coin rotation paradox" article and MathWorld's "Coin Paradox" page.
Both sources agree on: the setup (one coin fixed, one rolled around it
without slipping), the general formula rotations = R/r + 1, the R = r
case giving exactly 2 rotations, Martin Gardner's 1975 popularization,
and the 1982 SAT question controversy (an official answer of one
rotation was later corrected after public complaints, since the
geometrically correct answer is two).

**Visuals:** `coin_rotation_paradox.png` — a 3-panel static diagram
showing the rolling coin at the start, halfway, and full-trip
positions around the fixed coin, with an orientation marker (dot +
line) on the rolling coin and a running rotation count under each
panel, plus the R/r + 1 = 2 formula. `coin_rotation_paradox.gif` — a
~6s, 12fps, 600x338 looping animation of the coin rolling around the
fixed coin in real time, with an orientation marker showing the spin
and a live caption counting rotations toward 2.00. GIF included.

# Morning post — 2026-11-23

**Topic:** The Butterfly Theorem. Let M be the midpoint of a chord PQ of
a circle. Draw two more chords, AB and CD, through M in any directions.
Line AD and line BC each cross chord PQ again, at points X and Y. No
matter how AB and CD are tilted, M is *also* the exact midpoint of
segment XY. The two full chords plus the two "diagonal" lines sketch out
a self-intersecting, bowtie/butterfly-shaped figure, which gives the
theorem its name.

**History:** First posed as a problem by William Wallace in 1803 (in
*The Gentleman's Mathematical Companion*), with three solutions
published in 1804. Sir William Herschel re-posed the question to
Wallace in a letter dated 7 April 1805. The Rev. Thomas Scurr re-posed
it again in 1814 (*Gentleman's Diary or Mathematical Repository*).
William George Horner (of Horner's method) published a solution in
1815, long treated as the first full proof — but a 2005 archival find
(reported in the *Journal of the British Society for the History of
Mathematics*) turned up a proof by Wallace himself from 1805, which
would push priority back a decade; credit for "the first rigorous
proof" is genuinely disputed between Horner and Wallace. It later
appeared as Problem A6 on the 1963 Putnam Competition, and generalizes
(Čerin 2001; Volenec 2002) from circles to any conic section.

**Different topic from recent days / repo-wide:** Grepped every
`**Topic:**` line across the full repo history (2026-09-10 through
2026-11-22 evening, 225+ prior posts). "Butterfly theorem" has not
appeared before — distinct from the unrelated "Lorenz attractor /
butterfly effect" posts, and from other classical circle/chord-geometry
topics already covered (Nine-Point Circle, Ford Circles, Steiner's
Porism, Apollonian Gasket, Varignon's Theorem, Morley's Trisector
Theorem, Pizza Theorem) — none of which cover this midpoint-preserving
chord construction.

**Accuracy check:** Verified via WebSearch across Wikipedia's "Butterfly
theorem" article, MathWorld's "Butterfly Theorem" page, Brilliant.org's
wiki entry, cut-the-knot.org's several pages on the theorem's history
(including "William Wallace's 1803 Statement of the Butterfly Theorem"
and the 1805 Wallace-proof archival find), and MacTutor (University of
St Andrews). All sources agree on the construction and statement, the
1803 Wallace posing / 1804 solutions, the Herschel (1805) and Scurr
(1814) re-posings, Horner's 1815 published solution, the disputed
priority raised by the 2005 archival discovery, the 1963 Putnam
appearance, and the Čerin/Volenec conic generalizations. This was
additionally verified numerically in the image-generation script: an
explicit circle/chord configuration is constructed, and the script
asserts |MX| and |MY| agree to within 1e-10 (they matched to machine
precision, ~1e-16, in the actual run).

**Assets:**
- `butterfly_theorem.png` (1200x675, dark theme, two panels) — left:
  title, a plain-language statement of the theorem, and the
  Wallace/Herschel/Scurr/Horner/2005-archive history with a source
  line; right: a labeled circle diagram with chords PQ (white), AB
  (blue), CD (orange), the diagonal "wings" AD and BC (dashed green),
  and M, X, Y marked, with the computed MX/MY values printed below
  confirming equality to machine precision.
- `butterfly_theorem.gif` (600x338, 12fps, ~6.5s, ~710KB, matplotlib
  FuncAnimation + PillowWriter) — chords AB and CD sweep smoothly
  through a range of tilts while PQ and M stay fixed; a live caption
  tracks MX and MY, which stay equal throughout the whole sweep. GIF
  included: yes.

**Sources:**
- Wikipedia, "Butterfly theorem"
- MathWorld (Wolfram), "Butterfly Theorem"
- Brilliant.org, "Butterfly Theorem" wiki
- cut-the-knot.org, "The Butterfly Theorem" and related pages
  (including the 1803 Wallace statement and the 2005 archival find)
- MacTutor History of Mathematics (University of St Andrews)

# Evening post — 2026-11-20

**Topic:** The Galton Board (a.k.a. the bean machine, or quincunx). A
ball dropped through rows of pegs bounces left or right at each peg,
roughly 50/50, purely by chance. One ball's path is unpredictable, but
drop thousands and the bins they land in build up the same bell-shaped
(Gaussian/normal) curve every time — a physical demonstration of the
Central Limit Theorem. Francis Galton built the device around 1873–74
(presented at the Royal Institution in 1874; fuller descriptions in his
1877 paper and 1889 book *Natural Inheritance*) to show how summing many
independent random binary choices converges on the normal distribution.
The underlying math predates him: Abraham de Moivre proved in 1738
(2nd edition of *The Doctrine of Chances*) that the binomial distribution
approaches this same curve as the number of trials grows — a special
case of what's now the general Central Limit Theorem.

**Different topic from the morning post:** Morning post was the Ham
Sandwich Theorem (Stone–Tukey). This evening's topic, the Galton board /
Central Limit Theorem, is unrelated. Also checked the full repo history
of `**Topic:**` lines back through 2026-09-10 — the Galton board, bean
machine, quincunx, and Central Limit Theorem had not been covered before
(related but distinct topics already posted include: the Birthday
Paradox, Pólya's Recurrence Theorem / random walks, Efron's intransitive
dice, Buffon's Needle — none of which are the Galton board itself).

**Accuracy check:** Verified via WebSearch across independent sources:
Wikipedia's "Galton board" article, MathWorld's "Galton Board" page, and
the UCL Galton Collection's page on "Galton's Quincunx." All sources
agree on: the device being invented/devised by Francis Galton, built and
presented around 1873–74 (Royal Institution discourse, Feb 27 1874),
with fuller written treatments in an 1877 paper and his 1889 book
*Natural Inheritance*; its purpose as a demonstration of the Central
Limit Theorem via a physical binomial-distribution generator; and that
the underlying mathematical result (binomial → normal as trials grow)
traces back to Abraham de Moivre's 1738 proof, predating Galton by over
a century. The static image's simulation and the GIF's animation are
both computed directly: each ball takes N independent left/right steps
(numpy `default_rng` binomial trials), and the resulting bin counts are
plotted as an actual histogram of those simulated outcomes, with the
theoretical normal curve (mean N/2, std √(N/4)) overlaid for comparison
— not just illustrative artwork.

GIF included: yes.

**Assets:**
- `galton_board.png` (1200×675, dark theme, two panels) — left: title,
  explanation of the mechanism and the Central Limit Theorem connection,
  and the Galton (1873–74) / de Moivre (1738) history, with a source
  line; right: a 12-row peg triangle (quincunx) sitting directly above a
  histogram of 4,000 simulated balls, with the theoretical normal curve
  overlaid, confirming the match (simulated mean 6.02 vs. expected 6.0,
  std 1.74 vs. expected 1.73).
- `galton_board.gif` (600×338, 12fps, ~7.1s, ~322KB, built with
  matplotlib FuncAnimation + PillowWriter) — balls fall one by one
  through the peg triangle, each taking a random left/right path, and
  visibly accumulate into a histogram that converges toward the
  overlaid bell curve; a live caption counts the balls and names the
  Central Limit Theorem once enough have landed.

**Sources:**
- Wikipedia, "Galton board"
- MathWorld (Wolfram), "Galton Board"
- UCL Culture, "Galton's Quincunx" (Galton Collection)

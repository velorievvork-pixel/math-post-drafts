# Evening post — 2026-09-17 (evening2)

**Why "evening2":** by the time this session-bound run fired (17:09 UTC),
`2026-09-17/evening/` already existed (the Collatz Conjecture, from the
other independently-scheduled routine). To avoid overwriting it, this
run's output lives in `evening2/` with a distinct topic.

**Topic:** Gabriel's Horn (also called Torricelli's Trumpet). Rotate the
curve y = 1/x (for x >= 1) around the x-axis to get a horn-shaped solid
that extends infinitely. Its volume is finite — exactly pi — but its
surface area is infinite. First studied by Evangelista Torricelli in the
17th century. This gives the classic "painter's paradox": you could fill
the horn with a finite amount of paint, but that same paint would never
be enough to coat its (infinite) inner surface.

**Accuracy check:** computed both quantities directly rather than quoting
them. Volume = pi * integral from 1 to infinity of (1/x)^2 dx, evaluated
numerically to 3.14159265... (matches pi to 10 decimal places). Surface
area = 2*pi * integral from 1 to infinity of (1/x)*sqrt(1+(1/x^2)^2) dx;
confirmed it grows without bound by evaluating partial integrals out to
x=100,000 (value ~73 and still climbing, consistent with the known
logarithmic divergence — surface area >= 2*pi*integral(1/x)dx = infinity).

**Format:** 3-slide carousel (recommended) — slide1_hook.png (hook: dim
horn silhouette + question), slide2_volume.png (reveal: "Volume = pi"),
slide3_fact.png (payoff: "never enough paint to coat its surface").
Also kept: gabriels_horn.png (single combined before/after static image)
and gabriels_horn.gif (animated: horn rotating in 3D, ~4s, 10fps,
600x338, captioned) as alternative formats.

**Sources:**
- https://en.wikipedia.org/wiki/Gabriel%27s_horn
- https://thatsmaths.com/2017/04/13/torricellis-trumpet-the-painters-paradox/

Different from all earlier posts: Kakeya needle problem, Go First Dice,
golden angle/sunflower phyllotaxis, Hardy-Ramanujan 1729, Ulam spiral,
Chaos Game/Sierpinski triangle, Buffon's Needle, Mobius strip, Voronoi
diagram, Penrose tiling, Coastline Paradox/Koch snowflake, Squaring the
Square, Konigsberg Bridges, Benford's Law, Efron's Dice, Monty Hall,
Cantor Set, Borromean Rings, Four Color Theorem, Hat aperiodic monotile,
Birthday Paradox, Zeno's Paradox, Collatz Conjecture — this uses a solid
of revolution / integral calculus paradox (finite volume vs. infinite
surface area), a fresh mechanism distinct from all prior "infinity"
posts, which dealt with length or cardinality rather than 3D volume vs.
surface area.

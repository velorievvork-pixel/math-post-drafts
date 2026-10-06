# Morning post — 2026-10-06

**Topic:** Fermat's Last Theorem. In 1637, Pierre de Fermat wrote in the
margin of his copy of Diophantus's *Arithmetica* that x^n + y^n = z^n has
no positive whole-number solutions for any integer n > 2, claiming a proof
too large to fit in the margin. For n = 2 it's ordinary Pythagorean triples
(infinitely many solutions, e.g. 3-4-5, 5-12-13); Fermat's claim is that
this entirely breaks down for every higher exponent. The theorem resisted
proof for 358 years. The path to a proof: Gerhard Frey (1984) showed that a
hypothetical Fermat solution would produce a very strange (non-modular)
elliptic curve; Ken Ribet (1986) proved such a curve could not exist if the
Taniyama–Shimura conjecture held. Andrew Wiles, working in secret for seven
years, announced a proof of the required special case of Taniyama–Shimura
(and hence Fermat's Last Theorem) across three lectures at the Isaac Newton
Institute, Cambridge, ending June 23, 1993. A gap was found in the argument
later that year; Wiles, with former student Richard Taylor, repaired it on
September 19, 1994, and the completed proof was published in 1995 in the
*Annals of Mathematics*.

**Accuracy check:** verified via WebSearch against Wikipedia's "Fermat's
Last Theorem" and "Wiles's proof of Fermat's Last Theorem" articles, plus a
Millennium Mathematics Project (wild.maths.org, University of Cambridge)
retrospective: all agree on the 1637 marginal note, the n=2 Pythagorean
exception, the Frey (1984) / Ribet (1986) curve argument, Wiles's June 23,
1993 announcement (three lectures titled "Modular Forms, Elliptic Curves
and Galois Representations" at the Newton Institute), the error found in
September 1993, the September 19, 1994 fix with Richard Taylor, and 1995
publication — giving the commonly cited "358 years" gap (1637 to 1995). The
visualization's math (the superellipse family |x|^n + |y|^n = 1, and that
(3/5, 4/5) solves x^2+y^2=1 via the 3-4-5 right triangle) was independently
recomputed directly in the plotting script (numpy), not just asserted.

**Different topic from recent days** — checked every notes.md topic line in
the repo (all of September and October so far, including both runs of
2026-10-02 through 2026-10-05). Fermat's Last Theorem has not been used in
any prior post. No morning/ or evening/ folder existed yet for today when
this run started.

**Media:** fermats_last_theorem.png (1200x675, static) — left panel plots
the superellipse family |x|^n + |y|^n = 1 for n = 2, 3, 4, 6, 12, 40 (circle
morphing toward a square), marking the rational point (3/5, 4/5) that lies
on the n=2 circle (from 3²+4²=5²) and showing it is off every curve for
n≥3; right panel gives the equation, a plain-language statement, a short
history (Fermat → Frey/Ribet → Wiles), and a 1637→1995 timeline bar.
Included a GIF: fermats_last_theorem.gif (600x338, 12fps, ~4.6s, built with
matplotlib FuncAnimation + PillowWriter, verified frame-by-frame with
Image.seek() to confirm no frame-buffer collage) — animates the curve
morphing continuously from the n=2 circle up to n=30, with the (3/5, 4/5)
point switching from green ("rational point") to red ("no such point for
n≥3") as the curve passes n=2, plus an in-frame title/equation/caption.
GIF included.

**Sources:**
- https://en.wikipedia.org/wiki/Fermat%27s_Last_Theorem
- https://en.wikipedia.org/wiki/Wiles%27s_proof_of_Fermat%27s_Last_Theorem
- https://wild.maths.org/node/2161

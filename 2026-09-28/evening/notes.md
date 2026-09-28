# Evening post — 2026-09-28

**Topic:** Buffon's Needle problem. In 1733, Georges-Louis Leclerc, Comte de
Buffon, posed a geometric-probability question (published 1777): drop a
needle of length L onto a floor ruled with parallel lines spaced a distance
t apart (L <= t); what's the probability it crosses a line? The answer is
P = 2L / (pi * t), which means repeatedly dropping needles and counting
crossings gives an empirical way to estimate pi — one of the earliest known
Monte Carlo-style methods, predating the term "Monte Carlo" by roughly two
centuries.

**Accuracy check:** verified via WebSearch against Wikipedia's "Buffon's
needle problem" article and MathWorld's "Buffon's Needle Problem" entry —
both confirm the 1733 proposal date (presented to the Royal Academy of
Science), 1777 publication, and the P = 2L/(pi t) formula for L <= t. The
static image and GIF use a real simulation of the process (numpy random
needle drops over an actual line grid, not fabricated/pre-set data).

**Different topic from this morning's run** (which covered the Ulam Spiral).

**Media:** static PNG (1200x675) with two panels — left shows ~90 needles
dropped on ruled lines with crossings highlighted in gold, right shows a
6000-drop running pi-estimate curve converging toward the true value. Plus
an animated GIF (600x338, 12fps, 60 frames, ~5s, PillowWriter) showing
needles accumulating two at a time with a live drops/crossings/pi-estimate
caption overlay.

# Evening post — 2026-11-13

**Topic:** The Monty Hall problem. You pick 1 of 3 doors (car behind
one, goats behind the other two); the host, who knows where the car is,
opens a different door revealing a goat; should you switch to the
remaining unopened door? Switching wins 2/3 of the time, staying wins
only 1/3 — intuition says 50/50, but it's wrong because the host's
reveal is not random (he can never open the car or your door).
Historical hook: Marilyn vos Savant gave the correct "switch" answer in
her Parade magazine column in 1990 and received thousands of letters
disagreeing, including from PhDs; mathematician Paul Erdős reportedly
remained unconvinced until he was shown a computer/Monte Carlo
simulation of the game (anecdote via Andrew Vazsonyi, 1999). Different from
the morning post's topic (Seven Bridges of Königsberg / graph theory).

GIF included: yes.

**Assets:**
- `monty_hall.png` (1200x675, dark theme, two panels) — left: diagram of
  the three-door setup after the host opens Door 3 to reveal a goat;
  right: bar chart of win probability for "Stay" (33%) vs "Switch"
  (67%).
- `monty_hall.gif` (600x338, 12fps, 70 frames, ~600KB, built with
  matplotlib FuncAnimation + PillowWriter) — animates cumulative win
  rate across a simulated run of 240 games for both strategies,
  converging to 33% (stay) and 67% (switch), captioned with the
  takeaway.

**Sources:**
- Wikipedia / multiple secondary sources summarizing the 1990 Parade
  magazine vos Savant controversy (standard, well-documented account).
- Multiple sources (incl. summaries citing Vazsonyi, A. (1999), "Which
  Door Has the Cadillac") on the Paul Erdős anecdote: he initially
  rejected the "switch" solution and reportedly was only convinced
  after seeing a computer/Monte Carlo simulation. Sources agree on the
  core beats (resistance, then persuasion via simulation) but differ on
  minor retelling details, so the post phrases this as a commonly told
  anecdote rather than a precisely documented transcript.
- The 1/3 vs 2/3 probabilities themselves are a standard, rigorously
  proven result in probability theory (not in dispute), independently
  verified here via the Monte Carlo simulation used for the GIF.

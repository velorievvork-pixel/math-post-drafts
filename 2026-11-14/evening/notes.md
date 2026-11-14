# Evening post — 2026-11-14

**Topic:** The Nash Equilibrium. In any game between self-interested
players, a Nash equilibrium is a set of strategies (one per player)
where no one can improve their own payoff by unilaterally switching,
given what everyone else is doing. It doesn't have to be the best
outcome overall — just a stable one nobody wants to leave alone. The
classic illustration is the Prisoner's Dilemma: two suspects each
choose to stay silent or betray the other. Mutual betrayal is the
unique Nash equilibrium, even though mutual silence would make both
better off — neither prisoner can unilaterally improve by switching
away from betrayal, so the "worse for everyone" outcome is the stable
one.

**History:**
- 1950: John Nash, age 22, publishes "Equilibrium Points in N-Person
  Games" in the *Proceedings of the National Academy of Sciences*
  (PNAS 36(1):48–49), proving via Kakutani's fixed-point theorem that
  every finite game has at least one such equilibrium.
- 1951: Fuller treatment in "Non-Cooperative Games," *Annals of
  Mathematics* — his Princeton PhD thesis.
- 1994: Nash shares the Nobel Memorial Prize in Economic Sciences with
  John Harsanyi and Reinhard Selten, "for their pioneering analysis of
  equilibria in the theory of non-cooperative games," after recovering
  enough from decades of schizophrenia to accept it. Subject of Sylvia
  Nasar's 1998 biography and the 2001 film "A Beautiful Mind."
- 2015: Nash and his wife Alicia die in a car accident on the New
  Jersey Turnpike, days after he received the Abel Prize (shared with
  Louis Nirenberg) in Norway.

**Different topic from recent days / no repeat check:** No
2026-11-14/morning folder existed when this run started (only run of
the day). Grepped every `**Topic:**` line across the repo's full
history (2026-09-10 through 2026-11-13, 150+ prior posts) — "Nash
equilibrium" / game theory in this sense has never been used before
(Stable Marriage/Gale–Shapley, Secretary Problem, Monty Hall, and
Efron's Dice are adjacent probability/decision topics but distinct).

**Accuracy check:** Verified via a research pass (WebSearch across
independent sources): confirms the exact 1950 PNAS paper title/volume,
the standard definition of a Nash equilibrium, the existence theorem
and its 1951 Annals of Mathematics full treatment, the 1994 Nobel
citation and exact co-recipients (Harsanyi, Nash, Selten — Nobel's own
listing is alphabetical), the standard/uncontroversial Prisoner's
Dilemma characterization, and the 2015 death of Nash and his wife
Alicia in a car accident days after the Abel Prize. One low-quality
secondary source surfaced an unsourced claim about internal Nobel
committee controversy over Nash's selection — excluded from the post
as contested/thinly-sourced.

**Assets:**
- `nash_equilibrium.png` (1200x675, dark theme, two panels) — left: a
  2x2 Prisoner's Dilemma payoff matrix with the Defect/Defect cell
  highlighted in gold as the Nash equilibrium; right: plain-language
  definition plus the 1950/1951/1994/2015 timeline.
- `nash_equilibrium.gif` (600x338, ~2.2fps, 11 frames + held last
  frame, ~87KB, built with matplotlib FuncAnimation + PillowWriter) —
  steps through starting at mutual cooperation, each player testing
  whether switching alone helps them, arriving at mutual defection,
  then showing neither player wants to move away from it — ending on
  "...even though (3,3) was better for both!" GIF included: yes.

**Sources:**
- Nash, J.F. (1950). "Equilibrium Points in N-Person Games." PNAS
  36(1): 48–49. DOI 10.1073/pnas.36.1.48.
- Nash, J.F. (1951). "Non-Cooperative Games." Annals of Mathematics.
- NobelPrize.org, 1994 Prize in Economic Sciences (Harsanyi, Nash,
  Selten citation).
- Princeton University statement and multiple news outlets on the
  2015 deaths of John and Alicia Nash; Abel Prize 2015 announcement.

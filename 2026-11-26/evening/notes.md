# Evening post — 2026-11-26

**Topic:** The Busy Beaver function, BB(5). The "Busy Beaver" game asks:
among all Turing machines with N states, which one runs the longest
before halting? BB(N) is that maximum step count — and it grows faster
than any computable function, since computing it in general would solve
the Halting Problem. BB(1)=1, BB(2)=6, BB(3)=21, and BB(4)=107 were known
for decades, but BB(5) remained an open mystery since the 1980s. In July
2024, the collaborative Busy Beaver Challenge project proved BB(5) =
47,176,870 — with the entire proof formally verified in the Coq/Rocq
proof assistant (not just human-checked). A full human-readable writeup
followed in Sept 2025 (arXiv:2509.12337). Note: the step count itself had
been conjectured since Marxen & Buntrock's work decades ago; what's new
is the *proof* that no 5-state machine can run longer.

Chosen as today's topic because it's different from this morning's post
(Kakeya set conjecture) and from recent days (Thue-Morse sequence,
taxicab number 1729, Gömböc, Königsberg bridges).

Sources checked: Quanta Magazine ("With Fifth Busy Beaver, Researchers
Approach Computation's Limits", July 2, 2024), arXiv:2509.12337
("Determination of the fifth Busy Beaver value", Sept 2025), the
Coq-BB5 formal verification repo (github.com/ccz181078/Coq-BB5),
Scientific American coverage (2024).

**Assets:** static PNG (busy_beaver.png) + animated GIF (busy_beaver.gif)
included. Both show a log-scale bar chart of BB(1) through BB(5), with
the final bar for BB(5) dramatically dwarfing the others. The GIF grows
each bar in sequence with a captioned lower-third narrating the step
counts, landing on "47,176,870 steps!! Proven in 2024."

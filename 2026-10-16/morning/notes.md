# Morning post — 2026-10-16

**Topic:** Hilbert's Hotel (the "infinite hotel" paradox). A thought
experiment illustrating counterintuitive properties of infinite sets: a
hotel with a countably infinite number of rooms, all occupied, can still
accommodate a new guest — just ask every guest in room n to move to room
n+1, which frees up room 1. The same trick generalizes to seating
infinitely many new guests at once (move guest n to room 2n, freeing all
odd-numbered rooms). This demonstrates that for infinite sets, "infinity + 1
= infinity" and that the cardinality of the naturals ℕ equals the
cardinality of ℕ ∪ {new element} — the defining feature of a "countably
infinite" (ℵ₀) set.

**History (verified via WebSearch):** The parable is attributed to David
Hilbert, who introduced it in unpublished lectures around the winter
semester of 1924–1925 (exact lecture dates differ slightly across sources,
but the 1924–25 unpublished-lecture origin is best supported). It was not
published in Hilbert's lifetime; the text later appeared in a 2013 Springer
collection of his lectures. The story was popularized much later, in 1947,
by George Gamow in his book "One Two Three... Infinity." Source: "The
True(?) Story of Hilbert's Infinite Hotel" (Helge Kragh, arXiv:1403.0059),
cross-checked against University of Pittsburgh HPS course notes on the
paradox.

**Different topic from recent days** — checked every `**Topic:**` line
across all September and October notes.md files in this repo's history;
Hilbert's Hotel / the infinite-hotel paradox has not been used before
(distinct from prior "Hilbert Curve" space-filling-curve post, Gödel's
incompleteness mention in the 2026-10-14 evening Cantor-diagonalization
post, and the Busy Beaver/halting-problem posts).

**Assets:**
- `hilberts_hotel.png` — static diagram: left panel shows the fully booked
  hotel (rooms 1-7 holding guests G1-G7, "..." indicating infinitely more);
  right panel shows every guest shifted one room over, freeing room 1 for
  a new guest, with an arrow annotation and a cardinality footnote.
- `hilberts_hotel.gif` — animated version (6s, 10fps, 600x338, ~366KB):
  hotel starts fully booked, a new guest arrives, all guests slide one room
  to the right in an eased transition, room 1 opens up — with an in-frame
  title and a changing caption/lower-third per phase, so it's
  self-explanatory without the surrounding post text.

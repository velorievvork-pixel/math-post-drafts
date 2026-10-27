# Evening post — 2026-10-27

**Topic:** The Kakeya conjecture, resolved in 3D (Hong Wang & Joshua Zahl,
preprint Feb 2025). A Kakeya set is a set that contains a unit line segment
("needle") pointing in every direction. Besicovitch showed decades ago such
sets can have Lebesgue measure (area/volume) arbitrarily close to zero. The
Kakeya *conjecture* is a stronger statement about dimension: even though a
Kakeya set can be squeezed to ~zero measure, it must still have full
Hausdorff/Minkowski dimension (= n, in R^n). This was settled in the plane
(n=2) by Davies in 1971, but the 3D case (n=3) was open for decades until
Hong Wang (NYU Courant) and Joshua Zahl (UBC) posted a full proof in
February 2025 (building on their earlier "sticky Kakeya" partial result
from 2022). The achievement was cited in Hong Wang's 2026 Fields Medal
(awarded at the ICM in Philadelphia, alongside Yu Deng, John Pardon, and
Jacob Tsimerman).

Checked prior post history (grepped all notes.md in this repo) — no prior
post has covered the Kakeya conjecture/needle problem. Distinct from this
morning's post (the Spectre aperiodic monotile).

**Accuracy check:** Verified via WebSearch against Quanta Magazine
("Once-in-a-Century Proof Settles Math's Kakeya Conjecture", Mar 13 2025),
UBC Math news, NYU Math news, and the CNRS announcement of Hong Wang's 2026
Fields Medal. Confirms: (1) Wang and Zahl's 3D Kakeya proof preprint dates
to February 2025 (~127 pages), (2) it resolves the Hausdorff/Minkowski
dimension = 3 case, (3) the 4D+ case remains open, (4) Hong Wang received
the 2026 Fields Medal with this work cited as a key contribution.

**Visuals:**
- Static PNG (`kakeya_conjecture.png`): two-panel schematic — left panel
  shows a needle rotating in place sweeping a full disk (the "naive"
  full-area case); right panel shows a stylized "bush" of ~40 unit
  segments at different angles bunched near a small hub, illustrating how
  a Kakeya set can contain every direction while occupying very little
  area. Caption below explains the 2025 proof and Fields Medal. Labeled
  schematically, not a literal Besicovitch/Perron-tree construction.
- Animated GIF (`kakeya_conjecture.gif`, 600x338, 12fps, ~4.7s, 159KB):
  needles are added one by one (angle by angle) building up the same
  "bush" shape, with captions reading "A KAKEYA SET" / "contains a unit
  segment pointing in EVERY direction" then "...yet can be squeezed to
  almost zero area" and finally "In 2025, Wang & Zahl proved: in 3D it
  still can't be flattened to a lower dimension — Fields Medal 2026".
  GIF included: yes.

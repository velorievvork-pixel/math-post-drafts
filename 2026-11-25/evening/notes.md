# Evening post — 2026-11-25

**Topic:** The Gömböc — a convex, homogeneous (uniform-density) 3D shape
with exactly one stable and one unstable point of equilibrium
("mono-monostatic"). Unlike a die (6 stable resting faces), a sphere
(infinitely many), or an egg (2 stable ends), the Gömböc always rights
itself to the same single resting orientation no matter how it's set
down — purely because of its shape, with no weighting, hinge, or
mechanism involved.

History: in 1995, mathematician Vladimir Arnold conjectured that such
a shape must exist and asked for an example. In 2006, Hungarian
mathematicians Gábor Domokos and Péter Várkonyi proved it does and
constructed one, publishing "Mono-monostatic bodies: The answer to
Arnold's question" in The Mathematical Intelligencer. They named it
Gömböc, a Hungarian word related to "gömb" (sphere), since the shape
is very close to spherical (early versions deviated from a sphere by
as little as ~10^-5). Domokos and Várkonyi also showed that the
near-spherical, highly-domed shape of some turtle shells is close to
a Gömböc shape, which helps those turtles right themselves if flipped
onto their backs.

Different topic from the morning post (Seven Bridges of Königsberg /
graph theory) and from all other `**Topic:**` entries across the
repo's history (2026-09-10 through 2026-11-24), confirmed by grep.

**Visuals:**
- `gomboc.png` (1118x636, dark theme, two panels) — left: a schematic
  cross-section of the Gömböc tipped over next to its upright resting
  position, with its single stable (green, bottom) and unstable
  (orange, top) equilibrium points marked and a curved arrow showing
  it self-righting; right: explanatory text contrasting equilibrium
  counts for a die/sphere/egg vs. the Gömböc's minimum of 1+1, the
  1995 Arnold conjecture, the 2006 Domokos–Várkonyi proof/construction,
  and the turtle-shell connection.
- `gomboc.gif` (600x338, 12fps, 68 frames, ~7s, matplotlib
  FuncAnimation + PillowWriter, ~363KB) — animates the cross-section
  tipping over, rolling itself upright under its own shape (no
  external force), and settling with a small bounce, captioned in
  three stages: "Tip the Gömböc over...", "...and it rolls itself
  upright", "Stable equilibrium — every time" plus a closing subcaption.
  GIF included: yes.

**Sources:**
- Wikipedia, "Gömböc"
- MathWorld (Wolfram), "Gömböc"
- Plus Magazine (University of Cambridge), "The story of the Gömböc"
- AMS Mathematical Moments, "Gömböc" podcast/profile
- Domokos & Várkonyi, "Mono-monostatic bodies: The answer to Arnold's
  question," The Mathematical Intelligencer (2006)

# Morning post — 2026-11-15

**Topic:** Quaternions and William Rowan Hamilton. On 16 October 1843,
while walking along the towpath of Dublin's Royal Canal with his wife,
Hamilton realized how to extend complex numbers into three dimensions
using not one but three imaginary units, i, j, k, satisfying
i² = j² = k² = ijk = −1. In a moment of excitement he carved the
formula into the stone of Broom (also spelled Broome/Brougham) Bridge.
The original carving no longer survives, but a commemorative plaque was
placed on the bridge by the Dublin Institute for Advanced Studies in
1958, and mathematicians still walk the route every October ("Hamilton
Walk") to mark the discovery. Quaternion multiplication is
non-commutative (ij ≠ ji) but lets you rotate 3D vectors smoothly and
without gimbal lock, which is why quaternions are still used today for
spacecraft attitude control, 3D rotation in video games/computer
graphics, and robotics.

**Different topic from recent days / history check:** Grepped every
`**Topic:**` line across the repo's full history (132 prior posts,
2026-09-10 through 2026-11-14). Many "classic" topics were already used
(Seven Bridges of Königsberg, Mandelbrot Set, Banach–Tarski, Mobius
strip, Klein bottle, Goldbach, Busy Beaver, Rubik's Cube God's Number,
etc.), but quaternions, Hamilton, and Broom Bridge had never been
covered. Confirmed fresh topic.

**Accuracy check:** Verified via WebSearch across multiple independent
sources (History Ireland; ScienceAlert; Ask About Ireland /
Dublin Institute for Advanced Studies plaque page):
- Date and setting: 16 October 1843, walking the Royal Canal towpath
  with his wife, confirmed by all sources.
- The formula i² = j² = k² = ijk = −1 and the carving into Broom
  Bridge are consistently reported (sources note the original carving
  itself doesn't survive, only later accounts and the 1958 plaque —
  the post doesn't overclaim the carving's physical survival).
- Non-commutativity (ij ≠ ji) and modern applications (3D rotation
  without gimbal lock, used in spacecraft/graphics/robotics) are
  standard, well-established facts not requiring further sourcing.

GIF included: yes.

**Assets:**
- `quaternions_hamilton.png` (1200x675, dark theme, two panels) — left:
  title, date, the carved formula in a stone-plaque style box, and a
  short explanation of Hamilton's discovery and modern uses; right: a
  3D plot showing a vector v rotated to q·v·q⁻¹ about a tilted axis via
  quaternion rotation, with the swept circular path shown.
- `quaternion_rotation.gif` (600x338, 12fps, 72 frames, ~615KB, built
  with matplotlib FuncAnimation + PillowWriter) — a wireframe cube
  continuously rotating in 3D via quaternion rotation about a tilted
  axis, captioned "Quaternions rotate 3-D objects—no gimbal lock" with
  a lower caption crediting Hamilton, 1843.

**Sources:**
- History Ireland, "William Rowan Hamilton — Ireland's liberator of
  algebra" (historyireland.com)
- ScienceAlert, "How A Genius Formula Carved Onto A Bridge Changed
  Mathematical History"
- Ask About Ireland / Dublin Institute for Advanced Studies, "Quaternion
  Plaque on Broombridge"

These sources were mutually consistent on the core facts used in the
post: the 16 Oct 1843 date, the Royal Canal walk, the carved formula,
and the 1958 commemorative plaque.

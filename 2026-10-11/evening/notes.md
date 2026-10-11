# Evening post — 2026-10-11

**Topic:** The Gömböc — a convex, homogeneous (uniform-density) 3D solid
with exactly ONE stable and ONE unstable point of equilibrium
("mono-monostatic"). However you set it down, it rolls back to the same
single resting position — like a self-righting toy, but with no weights,
hollow cavities, or density tricks; the self-righting comes purely from
its shape. Built in 2006 (first physical model completed 2006–2007) by
Hungarian mathematician/engineers Gábor Domokos and Péter Várkonyi, proving
a 1995 conjecture of Vladimir Arnold asking whether such a body could even
exist at all. Before this, the believed minimum for a convex, uniform-density
solid was 4 equilibrium points (2 stable, 2 unstable); the Gömböc achieves
the theoretical minimum of 2. "Gömböc" is Hungarian, a diminutive of "gömb"
(sphere) — "little sphere" — since of its equivalence class it is the shape
closest to a true sphere. Bonus fact used in the post's background research
(not in the 280-char caption, character budget didn't allow it): after
building the Gömböc, Domokos and Várkonyi noticed its resemblance to the
highly-domed shell of the Indian star tortoise and followed up with an
actual study of ~17 turtle/tortoise species, finding high-domed tortoises
self-right with only a small nudge while flatter aquatic turtles are stable
on their backs and need their limbs/neck to flip over.

**Different topic from this morning** (Smale's paradox / sphere eversion —
see `../morning/notes.md`) and from every prior topic in the repo's history
(checked every `**Topic:**` line across all September and October
notes.md files — the Gömböc, Arnold's conjecture, and mono-monostatic
bodies have not been covered before; distinct from the unrelated prior
sphere-packing/Kepler-conjecture and Reuleaux-triangle/moving-sofa posts).

**Accuracy check:** verified via a dedicated research pass (WebSearch)
cross-referencing Wikipedia's "Gömböc" article, Chalmers University's
Gömböc feature, a Cambridge talk abstract ("Mono-monostatic bodies: the
story of the Gömböc"), the AMS "Mathematical Moments" podcast page, the
Plus Magazine "story of the Gömböc" articles, a Hungarian Academy of
Sciences repository paper, and BME (Budapest University of Technology)
news pages. Confirmed: the mono-monostatic definition; Domokos and
Várkonyi as discoverers (sources vary slightly between a 2006 mathematical
proof/first model and an August 2007 presentation to Arnold on his 70th
birthday, so the post/notes hedge with "2006" for the proof+first model
rather than asserting one single precise date); Arnold's 1995 conjecture
and the pre-existing belief that 4 equilibria were the minimum; the Hungarian
etymology; and the tortoise-shell follow-up study as genuine published
research by the same team (exact journal citation not independently
pulled, so phrased generally as "a study by the same researchers" rather
than naming a journal). One claim checked and explicitly NOT used because
it could not be verified: a rumor that a Gömböc was sent to the ISS — no
corroborating source was found, so it was left out entirely. Also noted:
a giant ~4.5m stainless-steel Gömböc statue stands on Corvin Promenade in
Budapest, and Gömböc-derived curvature math has been used in published
research on 'Oumuamua's shape and Martian pebble erosion — interesting but
not used in this post's caption due to the character budget.

**Media:** gomboc.png (1200x875, dark theme) — three small 3D panels
showing a stylized, visually near-spherical asymmetric convex body (NOT
the exact published Gömböc polynomial surface — a simplified illustrative
approximation, noted here for transparency) tipped on its side, mid-roll,
and settled upright with its stable point (S) marked; a text panel
explaining the mono-monostatic property and discovery; and a bar chart
contrasting the sphere (neutral/infinite equilibria), the pre-1995
believed minimum of 4, and the Gömböc's actual 2. Plus gomboc.gif
(600x338, 12fps, 49 frames, ~6.7MB... [see actual file size below],
built with matplotlib FuncAnimation + PillowWriter) — animates the
stylized shape tipped over, rocking with decaying amplitude, and settling
upright, with in-frame captions ("Tipped onto its side..." -> "No springs.
No weights. Just its shape." -> "The Gomboc: always rights itself.") so
it's self-explanatory without the surrounding post text. GIF included: yes
(file size ~670KB, well under size limits).

**Sources:**
- https://en.wikipedia.org/wiki/G%C3%B6mb%C3%B6c
- https://www.chalmers.se/en/current/news/gomboc-a-mathematical-attraction-at-chalmers/
- https://talks.cam.ac.uk/talk/index/8272/
- https://ams.org/samplings/mathmoments/mm133-gomboc-podcast
- https://plus.maths.org/comment/3338 and https://plus.maths.org/comment/3215
- https://real.mtak.hu/129753/1/monostable_revised_final.pdf
- https://dailynewshungary.com/worlds-largest-gomboc-statue-erected-budapest/
- https://bme.hu/en/news/20230425/The_worlds_largest_Gomboc_at_Centre_Pompidou_in_Paris

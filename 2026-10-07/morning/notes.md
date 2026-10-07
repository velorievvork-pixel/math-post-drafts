# Morning post — 2026-10-07

**Topic:** The Busy Beaver function, BB(n), and the July 2024 proof that
BB(5) = 47,176,870. BB(n) is the maximum number of steps an n-state,
2-symbol Turing machine can take before halting, starting from a blank
tape, maximized over every such machine that actually halts. Small values
were nailed down decades ago: BB(1)=1 (trivial), BB(2)=6 and BB(3)=21
(Shen Lin, 1963 PhD thesis), BB(4)=107 (Allen Brady, 1983). BB(5) stayed
open for 62 years until July 2, 2024, when the volunteer "Busy Beaver
Challenge" collaborative project (started by Tristan Stérin in 2022, 20+
contributors, many without traditional academic credentials) proved
BB(5) = 47,176,870, ruling out roughly 180 million candidate machines,
with the final proof formalized in the Coq proof assistant. The function
matters because it grows faster than any computable function and is
itself uncomputable — Radó introduced it in his 1962 paper "On
Non-Computable Functions" as a concrete, simply-stated relative of the
halting problem (if BB were computable you could decide the halting
problem by just running a machine BB(n) steps). BB(6) remains open today,
with only large lower bounds known.

**Accuracy check:** verified via a dedicated research pass (WebSearch +
WebFetch): BB(1)=1, BB(2)=6, BB(3)=21 (Lin 1963), BB(4)=107 (Brady 1983)
cross-checked against i-programmer.info's BB(5) announcement writeup and
general search consensus. The headline claim — BB(5) = 47,176,870, proved
July 2, 2024 — confirmed directly against the primary source, the
Busy Beaver Challenge's own forum announcement
(discuss.bbchallenge.org/t/july-2nd-2024-we-have-proved-bb-5-47-176-870/237),
corroborated by i-programmer.info and edworking.com news coverage. Project
founder (Tristan Stérin, 2022) and the Coq-formalized proof confirmed via
the same sources. Radó's 1962 paper and the uncomputability argument
confirmed via a Busy Beaver historical survey (ar5iv.org/abs/0906.3749).
BB(6) open status and large lower-bound records (into tetration territory)
confirmed via bbchallenge.org pages (e.g. the "Antihydra" cryptid machine),
though the single most up-to-date exact BB(6) lower-bound figure could not
be independently fetched (en.wikipedia.org / wiki.bbchallenge.org /
quantamagazine.org were blocked by this sandbox's egress proxy) — this
detail was deliberately left out of the final post/image to avoid citing
an unverified number; only the well-verified BB(1)-BB(5) values and
"BB(6) remains open" are used.

**Different topic from recent days** — checked every `**Topic:**` line in
every notes.md in the repo's history (all of September and October). No
prior post has covered the Busy Beaver function, Turing machines, or
computability/undecidability topics. No morning/ folder existed yet for
today when this run started (this is the morning run, ~07:18 UTC).

**Media:** busy_beaver.png (1200x675, dark theme) — left panel: log-scale
bar chart of BB(1) through BB(5) with exact values and discovery
year/source labeled per bar; right panel: plain-language definition,
timeline, and the uncomputability note. Included a GIF: busy_beaver.gif
(600x338, ~71 distinct frames over 6.75s, built with matplotlib
FuncAnimation + PillowWriter, 577KB) — animates BB(1)-BB(4) growing in
together, then BB(5) growing explosively on a log scale from 1 up to
47,176,870 with a caption that updates ("known since 1983" → "BB(5) was
open for 62 years..." → "Proved July 2024: BB(5) = 47,176,870"); verified
frame-by-frame via PIL Image.seek() that frames are genuinely distinct
(no stale-buffer collage bug). GIF included.

**Sources:**
- https://discuss.bbchallenge.org/t/july-2nd-2024-we-have-proved-bb-5-47-176-870/237
- https://www.i-programmer.info/news/112-theory/17304-busybeaver5-is-47176870.html
- https://ar5iv.arxiv.org/html/0906.3749 (Busy Beaver historical survey)

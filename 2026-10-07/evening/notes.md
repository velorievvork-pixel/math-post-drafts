# Evening post — 2026-10-07

**Topic:** The Monty Hall problem. Three doors, one car, two goats. The
contestant picks a door; the host (who always knows what's behind every
door) then opens a different, unpicked door that has a goat behind it,
and offers the chance to switch to the remaining closed door. Switching
wins the car with probability 2/3, versus only 1/3 for staying — because
the host's reveal is not random: he deliberately avoids both the car and
the contestant's own door, so his action injects information. The problem
traces back to a 1975 letter by Steve Selvin to The American Statistician,
with earlier related puzzles noted by Martin Gardner (1959) and others,
but it exploded into public consciousness after Marilyn vos Savant
answered a reader's version of it in her "Ask Marilyn" column in Parade
magazine in September 1990. Roughly 10,000 readers wrote to Parade in
response, about 1,000 of them with PhDs, the large majority insisting her
"switch" answer was wrong. She was correct; the episode is now a famous
case study in how strongly intuition can mislead even highly trained
people on conditional-probability problems.

**Different topic from today's morning post** (Busy Beaver function /
Turing machines / computability) and from every other topic in the
repo's history — checked every `**Topic:**` line across all prior
notes.md files; no prior post has covered the Monty Hall problem,
conditional probability, or game-show probability puzzles.

**Accuracy check:** verified via WebSearch across multiple independent
sources (Wikipedia's Monty Hall problem article, plus corroborating
summaries) for: the 2/3 vs 1/3 win probabilities under switch/stay; the
1975 Steve Selvin letter to The American Statistician as the problem's
formal origin, with Martin Gardner (1959), Fred Mosteller (1965), and
John Maynard Smith (1968) cited as earlier related puzzles; Marilyn vos
Savant's September 1990 Parade magazine "Ask Marilyn" column; and the
~10,000 total reader responses, of which roughly 1,000 held PhDs, mostly
disagreeing with her correct answer. No single number for the PhD count
appears to be from one definitive primary tally, so the post uses the
widely corroborated "roughly/~1,000 PhDs" framing rather than an exact
figure presented as precise.

**Media:** monty_hall.png (1200x675, dark theme) — left panel: a 3-door
diagram showing the setup (your pick, the host's revealed goat door, and
the remaining "switch to?" door); right panel: a bar chart comparing win
probability for Stay (33.3%) vs Switch (66.7%), built following the
project's dataviz-skill color/contrast conventions (dark-mode categorical
palette, direct value labels, no dual axes). Included a GIF:
monty_hall.gif (600x338, ~44KB, ~7s, 12fps, built with matplotlib
FuncAnimation + PillowWriter) — steps through pick → host reveal → switch
→ result, with an animated caption/sub-caption overlaid in each frame so
it's self-explanatory without the surrounding post text; verified
frame-by-frame via PIL that the sequence is correct and the GIF is
genuinely animated. GIF included.

**Sources:**
- https://en.wikipedia.org/wiki/Monty_Hall_problem
- https://behavioralscientist.org/steven-pinker-rationality-why-you-should-always-switch-the-monty-hall-problem-finally-explained/

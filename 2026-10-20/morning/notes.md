# Morning post — 2026-10-20

**Topic:** The sum of three cubes problem for 42. Posed informally in the
1950s–1992 (University of Cambridge's 1954 Trinity problem set popularized
the question of which integers k can be written as x³ + y³ + z³ for
integers x, y, z), the puzzle asks: for a given whole number k, can you
find integers x, y, z such that x³ + y³ + z³ = k? Mathematicians worked
through k = 1 to 100 over decades, either finding a solution or proving
none exists (impossible for k ≡ 4 or 5 mod 9). By 2019 only two numbers
under 100 remained unsolved: 33 and 42. Andrew Booker (University of
Bristol) found a solution for 33 in 2019 using a new, more efficient
search algorithm, then teamed up with Andrew Sutherland (MIT) — using
MIT's Charity Engine volunteer-computing network (~1,000,000 CPU-hours,
idle time donated by half a million home computers worldwide) — to crack
42 in September 2019:

x = -80,538,738,812,075,974
y =  80,435,758,145,817,515
z =  12,602,123,297,335,631

x³ + y³ + z³ = 42

The fun/visual hook: three ~17-digit numbers (on the order of 10^17) very
nearly cancel out to leave an answer that's 16 orders of magnitude
smaller — and of course there's the "Hitchhiker's Guide to the Galaxy"
coincidence that the long-sought answer involving 42 as "the answer to
the ultimate question of life, the universe, and everything" generated a
lot of pop-science buzz. Beyond 100, several numbers (114, 165, 390, 579,
627, 633, 732, 906, 921, 975) remain unsolved as of the sources checked.

**Accuracy check:** Verified via WebSearch against ScienceAlert
("The Sum Of Three Cubes Problem Has Been Solved For 42"), MIT News
("Sutherland helps solve decades-old sum-of-three-cubes puzzle"), and the
University of Bristol news release (bristol.ac.uk/news/2019/september/
sum-of-three-cubes), all of which independently confirm the 2019 date,
the Booker/Sutherland collaboration, the Charity Engine computation, and
the exact x, y, z values given above.

**Topic check:** Searched every `**Topic:**` line across the full repo
history (all September and October notes.md files) — "sum of three
cubes" / "42" / "Booker" / "Sutherland" has not been used before. Not to
be confused with Fermat's Last Theorem (already covered separately,
about exponents > 2 having NO solutions) — this is a different,
unrelated Diophantine question about cubes summing to small integers.

**Assets:**
- `sum_of_three_cubes_42.png` — static chart: the equation, the three
  exact integer values, and a log-scale bar chart showing how the three
  ~17-digit inputs dwarf the tiny 42 output.
- `sum_of_three_cubes_42.gif` — animated version (~4.75s, 12fps,
  600x338): the four bars grow in with easing, captioned with the
  equation and a short description, ending with the "solved 2019"
  attribution. Included.

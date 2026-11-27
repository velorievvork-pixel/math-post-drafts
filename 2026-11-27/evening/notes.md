# Evening post — 2026-11-27

**Topic:** The Chinese Remainder Theorem, illustrated via its original source:
the Sunzi Suanjing ("Master Sun's Mathematical Classic"), a Chinese text
dated by historians to roughly the 3rd–5th century CE. It poses the riddle:
"We have a number of things, but do not know exactly how many. If we count
by threes, we have two left over. If we count by fives, we have three left
over. If we count by sevens, we have two left over. How many things are
there?" The answer is 23 — the only number from 0 to 104 (since
3×5×7 = 105) satisfying all three congruences simultaneously, and the
general method for solving such systems is what's now called the Chinese
Remainder Theorem. It has real modern applications: CRT-based fast modular
arithmetic is used inside RSA cryptography, and it underlies the "99
Shepherd Trick"-style tricks and residue-number-system computer arithmetic.

**Different topic from recent days / repo-wide:** Grepped every
`**Topic:**` line across the full repo history (2026-09-10 through
2026-11-27 morning, 230+ prior posts, covering Fermat's Last Theorem, the
Goldbach Conjecture, the Busy Beaver function, the Kakeya set conjecture,
Garfield's Pythagorean proof this morning, and many others). The Chinese
Remainder Theorem / Sunzi Suanjing riddle has not been covered before and
is distinct from other number-theory posts in the repo (1729/Hardy-
Ramanujan, Zeckendorf's theorem, perfect numbers, the Prime Number
Theorem, etc.) and unrelated to today's morning topic (Garfield's
trapezoid-dissection proof of the Pythagorean theorem).

**Accuracy check:** Verified via WebSearch across independent sources —
Wikipedia's "Chinese remainder theorem" and "Sunzi Suanjing" articles, the
MacTutor History of Mathematics biography of Sun Zi (University of St
Andrews), and a historical paper by Shen Kangsheng on the CRT's history.
All sources agree: the Sunzi Suanjing poses exactly this 3/5/7 riddle
(remainders 2, 3, 2) with answer 23; the text's date is disputed among
historians (estimates range from the 1st to 5th century CE, with Shen
Kangsheng's 3rd-century estimate widely cited) but is consistently placed
within "roughly 3rd-5th century CE"; and the method was later generalized
by Qin Jiushao (1247) and is now a cornerstone of modular arithmetic, used
in RSA cryptography and residue number systems. This was additionally
verified numerically in the image script: a brute-force search over
n = 0..104 in Python confirms 23 is the unique solution to
n ≡ 2 (mod 3), n ≡ 3 (mod 5), n ≡ 2 (mod 7), asserted exactly in code.

**Assets:** static PNG (chinese_remainder_theorem.png) + animated GIF
(chinese_remainder_theorem.gif) included. The PNG shows three horizontal
"residue strips" for mod 3, mod 5, and mod 7 across integers 0-60, with
colored tiles marking which numbers satisfy each individual condition,
and a black box highlighting n=23 as the unique number satisfying all
three at once, plus the repeat period 3×5×7=105. The GIF (600x338, 12fps,
~5.2s, ~266KB, matplotlib FuncAnimation + PillowWriter) animates a cursor
sweeping left to right across the same strips searching for a match,
then highlights and holds on n=23 with a "Found it!" caption, ending on
a historical note about RSA cryptography.

**Sources:**
- Wikipedia, "Chinese remainder theorem"
- Wikipedia, "Sunzi Suanjing"
- MacTutor History of Mathematics (University of St Andrews), "Sun Zi"
- Shen Kangsheng, historical paper on the dating and content of the
  Sunzi Suanjing's CRT problem (via University of Kentucky course
  materials)

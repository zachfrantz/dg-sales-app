# March Madness Betting Scoring Model

> **How to use:** For every potential bet, score the game across all applicable factors below. Each factor is weighted by the strength of its historical evidence. The total score determines your bet recommendation and unit sizing.

---

## The Formula

```
GAME SCORE = Spread Factors + Totals Factors + Situational Factors + Red Flags
```

Each factor earns or deducts points. The final score maps to an action:

| Total Score | Action | Unit Size |
|-------------|--------|-----------|
| **+8 or higher** | **Strong bet** | 2-3 units |
| **+5 to +7** | **Standard bet** | 1-2 units |
| **+3 to +4** | **Lean / small bet** | 1 unit |
| **+1 to +2** | **Marginal — pass unless stacking with live bet** | 0-1 units |
| **0 or below** | **No bet** | 0 units |

---

## PART 1: SPREAD FACTORS

### Factor S1: Seed Matchup ATS History
**Weight: 0 to +3 points**

| Condition | Points | Source |
|-----------|--------|--------|
| Betting a 12-seed ATS vs. a 5-seed | +3 | Covers.com: 5-seeds are 20-27-1 ATS since 2012 (~57% dog cover rate) |
| Betting an 11-seed ATS vs. a 6-seed | +2 | Covers.com: 6-seeds are 21-34-1 ATS vs 11s (38.2% cover rate) |
| Betting a 9-seed vs. an 8-seed | +1 | NCAA.com: 9-seeds are 83-77 SU historically (51.9%) |
| Betting a 10-seed vs. a 7-seed | +1 | NCAA.com: ~38.8% upset rate, nearly identical to 11v6 |
| Betting a 13-seed vs. a 4-seed | +1 | NCAA.com: 20.6% upset rate, ~50/50 ATS |
| None of the above | 0 | |

### Factor S2: Free Throw Percentage
**Weight: 0 to +3 points**

| Condition | Points | Source |
|-----------|--------|--------|
| Your side shoots 77%+ FT AND spread is ≤4 points | +3 | Covers.com: 39-19 ATS (67.2%), covers by 4.1 PPG avg |
| Your side shoots 77%+ FT AND spread is ≤6 points | +2 | Covers.com: 60-34 ATS (64.0%) |
| Your side shoots 77%+ FT (any spread) | +1 | Covers.com: 97-56-2 ATS (63.4%), +21.8% ROI |
| Opponent shoots 77%+ FT and your side doesn't | -1 | Inverse of above |

### Factor S3: Public Betting Contrarian Value
**Weight: -2 to +3 points**

| Condition | Points | Source |
|-----------|--------|--------|
| Your side gets <20% of public spread bets | +3 | Sports Insights: 11-1 ATS in 2017 tournament |
| Your side gets <40% of public spread bets | +2 | Sports Insights: 19-9 ATS in 2017 tournament |
| Your side gets <50% of public spread bets + has more $ | +1 | Action Network: Sharp money indicator |
| Your side gets 75%+ of public spread bets | -2 | Action Network: 31-44-2 ATS historically |
| Your side gets 80%+ of public spread bets | -3 | Sports Insights: 2-11 ATS since 2005 |

### Factor S4: Reverse Line Movement
**Weight: 0 to +2 points**

| Condition | Points | Source |
|-----------|--------|--------|
| 60%+ of bets on other side, but line moved toward YOUR side | +2 | Sports Insights: 272-203 (57.3%), +42.04 units |
| Bet % and dollar % diverge (30% bets, 60% dollars on your side) | +1 | Action Network: Sharp money indicator |
| Line moved AWAY from your side with heavy public on other side | 0 | Neutral — expected movement |

### Factor S5: Round-Specific Edge
**Weight: -2 to +3 points**

| Condition | Points | Source |
|-----------|--------|--------|
| Elite Eight underdog | +3 | VSiN: 33-21-2 ATS; small favorites 1-10-1 ATS |
| Sweet 16 double-digit seed | +3 | VSiN: 16-7-1 ATS (69.6%) since 2011 |
| First Four underdog | +1 | VSiN: 24-19 ATS (55.8%) |
| Round of 64, team lost conference championship game | +1 | Action Network: 46-34-2 ATS (57.5%) |
| Round of 32, your side won R1 by 20+ | -2 | VSiN: 25-44-1 ATS (36.2%) — blowout regression |
| Round of 32, 14-seed that upset in R1 | -3 | VSiN: 0-10 SU and ATS in R2 |
| Sweet 16 favorite of 5+ points | -2 | VSiN: 7-15 ATS (31.8%) since 2017 |
| Elite Eight small favorite (≤4 pts) | -3 | Action Network: 1-10-1 ATS recently |

### Factor S6: KenPom Profile
**Weight: -1 to +2 points**

| Condition | Points | Source |
|-----------|--------|--------|
| Your side is top-25 in BOTH AdjO and AdjD | +2 | FOX Sports/betstamp: Balanced profiles go deepest |
| Your side has 10+ Quad 1 wins | +1 | Action Network: "Battle-tested" indicator |
| Your side is top-25 AdjEM but lopsided (offense OR defense outside top 60) | -1 | FOX Sports: Lopsided teams get upset |
| Opponent has high seed but only 3-4 Quad 1 wins | +1 | Action Network: "Fraud" candidate |

### Factor S7: Coaching ATS Record
**Weight: -2 to +2 points**

| Condition | Points | Source |
|-----------|--------|--------|
| Your side coached by Hurley (17-3, 85%) | +2 | SportsBookReview / FOX Sports |
| Your side coached by Enfield (10-3), H. Davis (9-3), Painter (22-7 early rounds), Few (~28-10) | +1 | SportsBookReview / FOX Sports |
| Your side coached by Barnes (24-38, 38.7%) | -2 | SportsBookReview / Saturday Down South |
| Your side coached by Dixon (10-19), Lloyd (3-6-1), Golden (3-5), Willard (4-7) | -1 | SportsBookReview / Saturday Down South |

---

## PART 2: TOTALS FACTORS

### Factor T1: Tournament Under Tendency
**Weight: 0 to +3 points**

| Condition | Points | Source |
|-----------|--------|--------|
| First round, total is 150+ AND betting under | +3 | Covers.com: 30-12 under (71.4%) |
| Any early-round game (R64/R32) AND betting under | +1 | Covers.com: 222-175-4 under (55.9%) since 2018 |
| First-half under, game tips at 1 PM ET or earlier | +2 | Covers.com: 67-44-3 under (60.4%), +14.5% ROI |
| Sweet 16 with a mid-major AND betting under | +2 | Covers.com: 26-14 under (65%) since 2010 |
| Elite Eight AND betting over | +2 | Covers.com: 87-63-2 over (58%) since 2001 |
| Championship AND betting under | +1 | VegasInsider: 21-17 under (55.2%) all-time |

### Factor T2: Tempo Mismatch
**Weight: 0 to +2 points**

| Condition | Points | Source |
|-----------|--------|--------|
| Slow underdog (KenPom AdjT rank 200+) AND betting under | +2 | Action Network: 204-167-7 ATS (55.0%), +7.0% ROI |
| Both teams in bottom third of tempo AND betting under | +1 | Logical extension of tournament under tendency |
| Slow favorite AND betting the favorite ATS | -1 | Action Network: 183-201-9 ATS, -7.4% ROI |

### Factor T3: Referee Crew
**Weight: 0 to +1 point**

| Condition | Points | Source |
|-----------|--------|--------|
| High-foul crew (FAA > +1.0) AND betting over | +1 | RefMetrics.com / KenPom: 5+ foul swing per game |
| Low-foul crew (FAA < -1.0) AND betting under | +1 | RefMetrics.com / KenPom |
| Crew data unavailable or neutral | 0 | |

---

## PART 3: SITUATIONAL FACTORS

### Factor X1: Travel & Venue Proximity
**Weight: -2 to +2 points**

| Condition | Points | Source |
|-----------|--------|--------|
| Your side is playing in home state | +2 | TeamRankings: 33-8 SU (80%+) since pod system |
| Your side is within 300 miles of venue | +1 | Clay/Bro/Clay 2014: Significant proximity advantage |
| Your side in 7/10 matchup AND is the closer team | +2 | TeamRankings: 23 of 32 games (72%) won by closer team |
| Opponent traveled 2+ time zones EAST | +1 | Clay/Bro/Clay 2014: 13.9% odds reduction |
| YOUR side traveled 2+ time zones east | -2 | Clay/Bro/Clay 2014: Win% drops below 38% |
| Your side has 1,000+ mile travel advantage over opponent | +1 | RotoWire 2026 analysis |

### Factor X2: Injury Impact
**Weight: -2 to +2 points**

| Condition | Points | Source |
|-----------|--------|--------|
| Opponent lost a star player (3+ pts spread impact) | +2 | Action Network: Star = ~3-3.5 pts to the spread |
| Opponent lost a key rotation player (1-2 pts impact) | +1 | Action Network: Role players underpriced by market |
| YOUR side lost a star player | -2 | Inverse |
| YOUR side lost a key rotation player | -1 | Inverse |
| Opponent has a "questionable" player in availability report | +1 | CBS Sports: New NCAA availability reports for 2026 |
| Your side is fully healthy vs. injured opponent | +1 | Stats with Sasa: Upsets 2x more likely when higher seed is injured |

### Factor X3: Conference Tournament Fatigue
**Weight: -2 to +1 point**

| Condition | Points | Source |
|-----------|--------|--------|
| Opponent played 4+ games in 4 days in conference tournament | +1 | Action Network: 2/3 fell in opening weekend (21 of 33 since 2005) |
| YOUR side played 4+ games in 4 days | -2 | Same source — fatigue is real |
| Opponent is an early conference tournament exit (extra rest) | -1 | Action Network: Rest can be an advantage |

### Factor X4: Conference ATS Tendency
**Weight: -1 to +1 point**

| Condition | Points | Source |
|-----------|--------|--------|
| Your side is ACC team as pick-em or small underdog | +1 | Covers.com: 19-5 ATS (79.2%) in that role |
| Your side is SEC team as a low seed (9-14) | -1 | Covers.com: 17-23-2 ATS (42.5%) since 2007 |
| Your side is MVC or MAC team as a big underdog (6.5+) | +1 | Covers.com: MAC 11-5 ATS (68.8%), MVC historically overperforms |

### Factor X5: Intangibles & Narrative
**Weight: -1 to +1 point**

| Condition | Points | Source |
|-----------|--------|--------|
| Bounce-back team (early exit last year, strong this year) | +1 | PoolGenius/TeamRankings: Won title 2x more often than public pick rates suggest |
| Opponent is the defending champion (public overvaluation) | +1 | Action Network: Recency bias trap |
| Your side is a "brand name" with 80%+ public backing | -1 | Sports Insights: Brand name tax = 1-3 pts of inflated spread |
| First-time tournament team from a one-bid league (post-NIL era) | -1 | ESPN: 13-16 seeds 25-39 ATS (39%) since 2021 |

---

## PART 4: RED FLAGS (Automatic Deductions)

These override positive scores. If ANY red flag is present, deduct the listed points:

| Red Flag | Deduction | Source |
|----------|-----------|--------|
| Your side gets 80%+ of public bets AND no reverse line movement | -3 | Sports Insights: 2-11 ATS |
| 14-seed that won in Round 1, now in Round 2 | -4 | VSiN: 0-10 SU and ATS |
| Your side played 5 games in 5 days in conference tournament | -3 | Action Network: Only 1 champion ever (UConn 2011) |
| Your side's top scorer accounts for 38%+ of total offense | -2 | Covers.com: One-man teams underperform |
| You are chasing a line that already moved 2+ points past your entry | -3 | General: Value has passed |
| 3+ scoring factors conflict with each other | -2 | Decision framework: Pass when signals conflict |

---

## How to Apply: Step-by-Step

### Pre-Game (Morning of Game Day)

1. **Pull the data:**
   - Spread and total from your sportsbook
   - Public bet % and dollar % (Action Network, Sports Insights, or VegasInsider)
   - KenPom rankings for both teams (AdjEM, AdjO, AdjD, AdjT)
   - Season FT% for both teams
   - Quad 1 records for both teams
   - Check injury/availability reports (NCAA availability report if available)
   - Check travel distance and time zone for both teams
   - Check conference tournament results (how many games, how many days)

2. **Score each factor:**
   - Go through every factor in Parts 1-4
   - Write down the points for each applicable factor
   - Sum them up

3. **Check for red flags:**
   - Apply any automatic deductions from Part 4

4. **Map to action:**
   - Use the scoring table at the top to determine bet/no-bet and unit sizing

### 2 Hours Before Tip

5. **Update with late information:**
   - NCAA availability report update (2 hrs before tip)
   - Referee crew assignment (check RefMetrics.com)
   - Any last-minute line movement or public betting shifts
   - Re-score Factor X2 (injuries) and Factor T3 (referee crew)

6. **Final decision:**
   - If score improved: confirm bet
   - If score dropped below threshold: cancel or reduce
   - If a "questionable" player is ruled out: re-score entirely

### Post-Game

7. **Track results:**
   - Record: game, side, line, score, result, closing line, your total score
   - Calculate CLV (Closing Line Value): Did you beat the closing line?
   - Review which factors contributed to wins vs. losses
   - Adjust confidence in factors over time based on your tracked results

---

## Worked Example: Missouri (10) vs. Miami FL (7) — St. Louis, Round of 64

```
SPREAD: Missouri +3.5

Factor S1: Seed Matchup (10 vs 7)                        +1
Factor S2: FT% — Missouri 76.2%, Miami 73.1% (neither 77%+)  0
Factor S3: Public — 62% on Miami, 38% on Missouri            +1
Factor S4: RLM — Line opened Miami -4.5, now -3.5 (moved toward Missouri) +2
Factor S5: Round — R64, no special round edge                  0
Factor S6: KenPom — Missouri top-40 AdjD, Miami top-30 AdjO   0
Factor S7: Coaching — neither in elite/fade category           0

Factor T1: Total 143, betting under                           +1
Factor T2: Missouri is slower tempo                           +1
Factor T3: Referee crew TBD                                    0

Factor X1: Missouri in St. Louis (~117 miles = home state)    +2
           7/10 matchup, Missouri is the closer team          +2
           Miami traveled ~1,100 miles                         +1
Factor X2: Both teams healthy                                  0
Factor X3: Neither played 4+ conf tourney games                0
Factor X4: Neither ACC/SEC/MVC/MAC in relevant role            0
Factor X5: No narrative factors                                0

Red Flags: None                                                0

TOTAL SCORE: +11 → STRONG BET (2-3 units on Missouri +3.5)
             Under lean: +2 → LEAN (1 unit on under)
```

---

## Worked Example: UCLA (7) vs. UCF (10) — Philadelphia, Round of 64

```
SPREAD: UCLA -2.5

Factor S1: Seed Matchup (7 vs 10, betting the favorite)       0
Factor S2: FT% — UCLA 74.8%, UCF 72.3% (neither 77%+)        0
Factor S3: Public — 71% on UCLA                               -1
Factor S4: RLM — No reverse movement detected                  0
Factor S5: Round — R64, no special round edge                   0
Factor S6: KenPom — UCLA top-35 both, but injuries cloud it    0
Factor S7: Coaching — Mick Cronin not in elite/fade list        0

Factor X1: UCLA traveled ~2,450 miles, +3 time zones east     -2
           UCF traveled ~950 miles, 0 time zone shift           0
           UCLA has worst travel mismatch in R64                -1
Factor X2: UCLA — Bilodeau and Dent both "expected to play"    -1
           UCF — healthy                                        0
Factor X3: No fatigue flags                                     0
Factor X4: No conference edge                                   0
Factor X5: No narrative factors                                 0

Red Flags: None                                                 0

TOTAL SCORE: -5 → NO BET on UCLA -2.5
             (Consider: UCF +2.5 scores +5 when factors are flipped → STANDARD BET)
```

---

## Scoring Model Ranges & Calibration Notes

### Maximum Possible Score: ~+28

In practice, a score above +12 is exceptional and rare. Most actionable bets will score +5 to +10.

### Distribution Expectations

Over a full tournament (67 games), expect:
- **5-8 games** scoring +8 or higher (strong bets)
- **10-15 games** scoring +5 to +7 (standard bets)
- **15-20 games** scoring +3 to +4 (leans)
- **25-35 games** with no actionable edge (pass)

This aligns with the "3-5 high-conviction plays per day" guideline from sharp bettors.

### Factor Weights Are Based on Sample Size and Recency

| Evidence Tier | Factors | Notes |
|--------------|---------|-------|
| **Strongest** (large sample, 10+ years, 100+ games) | S1 (seed ATS), S2 (FT%), S3 (public %), T1 (unders), S5 (round-specific) | Most reliable long-term |
| **Strong** (moderate sample, 5-10 years, 50+ games) | S4 (RLM), S7 (coaching), X1 (travel), X3 (fatigue), X4 (conference) | Reliable with context |
| **Moderate** (smaller sample or newer data) | S6 (KenPom), X2 (injuries), T2 (tempo), X5 (intangibles) | Use as tiebreakers |
| **Supplemental** (limited data, qualitative) | T3 (referee), narrative factors | Don't bet on these alone |

### Important Limitations

1. **No model is perfect.** This system captures historical edges, but the tournament produces surprises every year. A +10 score doesn't guarantee a win — it means the historical evidence strongly favors this side.

2. **Edges erode over time.** As more bettors discover these trends, sportsbooks adjust. The 12-vs-5 trend has been written about extensively; the FT% trend is less well-known and may offer more current value.

3. **Correlation between factors.** Some factors overlap (e.g., a 12-seed from the MVC playing close to home is triple-counted). This is intentional — stacking multiple edges is the entire point. But be aware that the factors are not fully independent.

4. **KenPom doesn't account for injuries.** If a team's KenPom profile was built with a player who is now injured, their metrics overstate their current ability. Always cross-reference X2 (injuries) with S6 (KenPom).

5. **The NIL era is changing the game.** Historical trends from pre-2021 may not fully apply. The Cinderella decline is real, and talent concentration at the top is accelerating. Weight recent data (2021-2026) more heavily than older data.

---

*Model version 1.0 — March 2026. Calibrate by tracking results and adjusting factor weights based on observed performance.*

# March Madness Betting Scoring Model — V2

> **V2 — Updated March 2026 based on 5-year mechanical backtest (2021-2025, 315 games, 49 bets, 30-19).**
> **How to use:** For every potential bet, score the game across all applicable factors below. Each factor is weighted by the strength of its historical evidence AND its actual backtest performance. The total score determines your bet recommendation and unit sizing.

---

## The Formula

```
GAME SCORE = Spread Factors + Totals Factors + Situational Factors + Red Flags
```

Each factor earns or deducts points. The final score maps to an action:

### Spread Bets
| Total Score | Action | Unit Size |
|-------------|--------|-----------|
| **+5 or higher** | **Strong bet** | 2 units (max) |
| **+3 to +4** | **Standard bet** | 1 unit |
| **+1 to +2** | **No bet** | 0 units |
| **0 or below** | **No bet** | 0 units |

### Under Bets (NEW threshold in V2)
| Total Score | Action | Unit Size |
|-------------|--------|-----------|
| **+4 or higher** | **Strong under** | 2 units (max) |
| **+2 to +3** | **Standard under** | 1 unit |
| **+1 or below** | **No bet** | 0 units |

> **V2 change:** Max bet capped at 2 units (was 3). Backtest showed 1u bets won 64.1% vs 50% for 2u+ bets.
> **V2 change:** Under threshold lowered from +3 to +2. V1 generated ZERO under bets across 315 games despite unders hitting 59.3%.

---

## PART 1: SPREAD FACTORS

### ~~Factor S1: Seed Matchup ATS History~~ — REMOVED IN V2
> **Removed.** Backtest record: 1-7 (12.5%), -$400 P&L. The "12 beats 5" narrative does not work as a betting edge — the market already prices in the upset probability. Seed matchup data is now used as background context only, not as a scoring factor.

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
| Your side gets <20% of public spread bets | +3 | Sports Insights: Contrarian sides at extreme levels cover at 60%+ |
| Your side gets <40% of public spread bets | +2 | Sports Insights: 19-9 ATS in 2017 tournament |
| Your side gets <50% of public spread bets + has more $ | +1 | Action Network: Sharp money indicator |
| Your side gets 75%+ of public spread bets | -2 | Covers.com: 31-44-2 ATS historically |
| Your side gets 80%+ of public spread bets | -3 | Directionally supported by Sports Insights contrarian data (see SOURCES.md Flag 1) |

### Factor S4: Reverse Line Movement
**Weight: 0 to +2 points**

| Condition | Points | Source |
|-----------|--------|--------|
| 60%+ of bets on other side, but line moved toward YOUR side | +2 | Sports Insights / Action Network: Well-established sharp money indicator (see SOURCES.md Flag 2) |
| Bet % and dollar % diverge (30% bets, 60% dollars on your side) | +1 | Action Network: Sharp money indicator |
| Line moved AWAY from your side with heavy public on other side | 0 | Neutral — expected movement |

### Factor S5: Round-Specific Edge
**Weight: -2 to +3 points**

| Condition | Points | Source |
|-----------|--------|--------|
| Elite Eight underdog | +3 | Action Network: 33-21-2 ATS; VSiN: small favorites 3-10-1 ATS (≤4 pts), 17-33-1 since 1998 |
| Sweet 16 double-digit seed | +3 | VSiN: 16-7-1 ATS (69.6%) since 2011 |
| First Four underdog | +1 | VSiN: 24-19 ATS (55.8%) |
| Round of 64, team lost conference championship game | +1 | Action Network: 46-34-2 ATS (57.5%) |
| Round of 32, your side won R1 by 20+ | -2 | VSiN: 25-44-1 ATS (36.2%) — blowout regression |
| Round of 32, 14-seed that upset in R1 | -3 | VSiN: 0-10 SU and ATS in R2 |
| Sweet 16 favorite of 5+ points | -2 | VSiN: 7-15 ATS (31.8%) since 2017 |
| Elite Eight small favorite (≤4 pts) | **-1** | VSiN: 3-10-1 ATS recently. **V2: Reduced from -3.** The -3 caused betting AGAINST UConn 2023 E8 (lost by 28). |

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

### Factor S8: 3-Point Dependency *(NEW in V2)*
**Weight: -1 to +1 points**

| Condition | Points | Source |
|-----------|--------|--------|
| Team is top-20 in 3PT attempt rate BUT outside top-50 in 3PT% | -1 | Tournament 3PT% drops ~2-3% from regular season. High-volume/low-accuracy teams are volatile. |
| Team is top-10 in BOTH 3PT attempt rate AND 3PT% | +1 | Genuine shooting ability, not just volume. |

### Factor S9: Tempo Mismatch (Spread Impact) *(NEW in V2)*
**Weight: 0 to +1 points**

| Condition | Points | Source |
|-----------|--------|--------|
| Tempo difference > 8 possessions/game between teams | +1 | Slow team controls pace ~65% of the time in neutral-site games (KenPom AdjT) |

> Slow teams dictate pace. In mismatches, the game plays at the slower team's speed, reducing possessions and variance — favoring the team that wants fewer possessions.

### Factor S10: Injury Impact *(NEW in V2 — was excluded in V1)*
**Weight: -3 to +3 points**

| Condition | Points | Source |
|-----------|--------|--------|
| Opponent's star player (top-2 usage on team) ruled OUT | +3 | Action Network: Star = ~3-3.5 pts to the spread. NCAA availability reports (mandatory 2026). |
| Opponent's star player QUESTIONABLE | +1.5 | CBS Sports: New NCAA availability reports for 2026 |
| Opponent's key rotation player OUT | +1 | Action Network: Role players underpriced by market |
| YOUR side's star player OUT | -3 | Inverse |
| YOUR side's star player QUESTIONABLE | -1.5 | Inverse |

> **V2 rationale:** V1 excluded injuries as "too subjective." The 2026 NCAA mandatory availability reports (9 PM night before + 2 hrs before tip) now provide objective data. Combined with EvanMiya Indispensability Scores, injuries can be scored mechanically.

### Factor C1: Multi-Factor Convergence Bonus *(NEW in V2)*
**Weight: 0 to +1 points**

| Condition | Points | Source |
|-----------|--------|--------|
| 3+ independent factors align on same side | +1 | Backtest: 3+ factor bets went 83.3% (5-1) vs 64.3% for 2-factor and 46.7% for single-factor |

### Factor C2: R32 Timing Bonus *(NEW in V2)*
**Weight: 0 to +1 points**

| Condition | Points | Source |
|-----------|--------|--------|
| Round of 32 game where ≥1 factor already applies to a side | +1 | Backtest: R32 went 80% (4-1) across 5 years. Tighter spreads + known matchup dynamics = cleaner signals. |

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

### ~~Factor X1: Travel & Venue Proximity~~ — DEMOTED TO TIEBREAKER IN V2
> **No longer scored.** Backtest record: 1-2 (33%), -$60 P&L. The market already prices geography into the line. Academic research (Clay, Bro & Clay 2014) is real — 150+ miles reduces winning odds by 33.6% — but this is reflected in the spread.
>
> **V2 usage:** Travel is now a **tiebreaker only**. When two sides score equally, lean toward the team that traveled less. Do NOT add points for proximity.

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
| Opponent played 4+ games in conference tournament | +1 | Action Network: 2/3 fell in opening weekend (21 of 33 since 2005) |
| YOUR side played 4+ games in conference tournament | -2 | Same source — fatigue is real |
| ~~Auto-bid blanket penalty~~ | ~~-1~~ | **V2: Removed.** Blanket penalty punished teams with byes who weren't fatigued. Now only penalize actual 4+ game conf tourney runs. |

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
| Your side gets 80%+ of public bets AND no reverse line movement | -3 | Directionally supported by Sports Insights / Covers.com contrarian data |
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
| **Strongest** (backtest-proven, 65%+ win rate) | S2 (FT%), S7 (coaching ATS), C1 (convergence) | Core of the model. Bet confidently. |
| **Strong** (backtest-proven, 55-65% win rate) | S5 (E8 dogs w/ support), S6 (KenPom), T1 (unders), S10 (injuries) | Reliable with context |
| **Supporting** (adds edge when stacked) | S8 (3PT dependency), S9 (tempo), X3 (fatigue), X4 (conference), C2 (R32 bonus) | Use to build multi-factor bets |
| **Tiebreaker only** | X1 (travel — demoted), T3 (referee), narrative factors | Don't score; use for final decisions |
| **REMOVED** | ~~S1 (seed matchups)~~ | 1-7 in backtest. Do not use. |

### Important Limitations

1. **No model is perfect.** This system captures historical edges, but the tournament produces surprises every year. A +10 score doesn't guarantee a win — it means the historical evidence strongly favors this side.

2. **Edges erode over time.** As more bettors discover these trends, sportsbooks adjust. The 12-vs-5 trend has been written about extensively; the FT% trend is less well-known and may offer more current value.

3. **Correlation between factors.** Some factors overlap (e.g., a 12-seed from the MVC playing close to home is triple-counted). This is intentional — stacking multiple edges is the entire point. But be aware that the factors are not fully independent.

4. **KenPom doesn't account for injuries.** If a team's KenPom profile was built with a player who is now injured, their metrics overstate their current ability. Always cross-reference X2 (injuries) with S6 (KenPom).

5. **The NIL era is changing the game.** Historical trends from pre-2021 may not fully apply. The Cinderella decline is real, and talent concentration at the top is accelerating. Weight recent data (2021-2026) more heavily than older data.

---

*Model version 2.0 — March 2026. Built from 5-year mechanical backtest (2021-2025). 315 games scored, 49 bets, 30-19 (61.2%). Every V2 change justified by specific backtest data. See MECHANICAL_SCORING_RULES_V2.md for the complete changelog.*

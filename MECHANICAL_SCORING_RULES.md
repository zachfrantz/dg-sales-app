# Mechanical Scoring Rules — No Discretion Backtest

> These rules are applied to EVERY tournament game with ZERO human judgment.
> If the score meets the threshold, the bet is placed. No skipping, no overrides, no "feel."

---

## Philosophy

The original backtest (2023) had **hindsight bias** — we knew which games to emphasize.
This version eliminates that by:
1. Scoring every game using only pre-game data
2. Betting every game that meets the threshold — no exceptions
3. Using only factors that can be objectively determined (no "intangibles")
4. Applying identical rules across 2021, 2022, 2023, 2024

---

## Factors Used (Objectively Determinable Pre-Game)

### SPREAD FACTORS

**S1: Seed Matchup Edge (Spread Side)**
| Condition | Points | Side |
|-----------|--------|------|
| 12-seed vs 5-seed | +3 | 12-seed |
| 13-seed vs 4-seed, spread ≥ 8 | +1 | 13-seed (covers, not wins) |
| 15-seed vs 2-seed, spread ≥ 14 | +1 | 15-seed |
| 16-seed vs 1-seed, spread ≥ 20 | +2 | 16-seed (large spread fade) |

**S2: Free Throw Percentage Edge**
| Condition | Points | Side |
|-----------|--------|------|
| Team has 77%+ FT AND spread is ≤ 6 | +2 | High-FT team |
| Team has 77%+ FT AND spread is ≤ 4 | +3 | High-FT team |
| Both teams have 77%+ FT | 0 | Cancel out |

**S5: Round-Specific Edges**
| Condition | Points | Side |
|-----------|--------|------|
| Elite Eight underdog | +3 | Dog |
| Elite Eight favorite ≤ 4 pts | -3 | Flag against favorite |
| Final Four underdog | +1 | Dog |
| Championship game | 0 | No inherent edge |

**S6: KenPom Efficiency Gap**
| Condition | Points | Side |
|-----------|--------|------|
| KenPom rank 15+ spots better than seed implies | +2 | Underseeded team |
| KenPom rank 10+ spots higher than opponent, but closing spread < KenPom implied | +1 | Higher KenPom team |
| KenPom top 5 team | +1 | That team |
| Opponent is KenPom 50+ (in R64) and spread < 10 | +1 | Favored team |

**S7: Coaching ATS Record**
| Condition | Points | Side |
|-----------|--------|------|
| Coach has 70%+ tournament ATS record (min 8 games) | +3 | That coach's team |
| Coach has 60-69% tournament ATS record (min 8 games) | +1 | That coach's team |
| Coach has < 35% tournament ATS record (min 8 games) | -2 | Against that coach |

### TOTALS FACTORS

**T1: Tournament Under Lean**
| Condition | Points | Side |
|-----------|--------|------|
| Any tournament game | +1 | Under |
| Both teams are KenPom top 30 defense (AdjD) | +2 | Under |
| One team is KenPom top 10 defense | +1 | Under |
| Game involves a top-15 tempo team vs bottom-50 tempo team | +1 | Under (tempo mismatch slows game) |

### SITUATIONAL FACTORS

**X1: Travel / Geographic Proximity**
| Condition | Points | Side |
|-----------|--------|------|
| Team plays in home state (within 100 miles) | +2 | Home-state team |
| Team plays within 250 miles | +1 | Closer team |
| Team traveled 1,500+ miles AND opponent traveled < 500 miles | +1 | Closer team |
| 7-seed vs 10-seed: closer team to venue | +1 | Closer team |

**X3: Conference Tournament Fatigue**
| Condition | Points | Side |
|-----------|--------|------|
| Team played 4+ games in 4 days in conf tourney | -2 | Against fatigued team |
| Auto-bid team from one-bid conference (had to win conf tourney) | -1 | Against that team (only in R64) |

**X4: Conference ATS Trend**
| Condition | Points | Side |
|-----------|--------|------|
| Team's conference has 60%+ ATS over last 3 tournaments | +1 | That conference's team |
| Team's conference has < 40% ATS over last 3 tournaments | -1 | Against that conference |

---

## Factors EXCLUDED (Cannot Be Objectively Determined Pre-Game)

| Factor | Why Excluded |
|--------|-------------|
| S3: Public betting % | Historical game-by-game data not available |
| S4: Reverse line movement | Historical game-by-game data not available |
| T3: Referee crew tendencies | Crew assignments not reliably available pre-game |
| X2: Injury impact | Too subjective to score mechanically; requires judgment |
| X5: Intangibles | By definition not mechanical |

**Impact of exclusions:** The full model has 16 factors. This mechanical version uses 10. The excluded factors (public %, RLM, refs, injuries, intangibles) account for roughly 30-40% of the full model's signal. This means the mechanical version is a **conservative test** — if it's profitable without those factors, the full model (with real-time data) should perform better.

---

## Betting Rules

### Thresholds
| Total Score | Action | Size |
|-------------|--------|------|
| +5 or higher | BET | 2 units |
| +3 or +4 | BET | 1 unit |
| +1 or +2 | NO BET | — |
| 0 or negative | NO BET | — |
| Score +7 or higher | BET | 3 units |

### Bankroll
- Starting bankroll per tournament: $1,000
- 1 unit = $55 risk to win $50 (at -110)
- 2 units = $110 risk to win $100
- 3 units = $165 risk to win $150

### Spread vs Totals
- Each game can generate up to TWO bets: one spread, one totals
- Spread bet and totals bet are scored independently
- Both can trigger if both meet threshold

### Conflict Resolution
- If a game has BOTH a positive factor for one side AND a red flag, the red flag is applied as a penalty to the score (it doesn't cancel the bet, it reduces the score)
- If the net score after penalties is still ≥ +3, the bet stands
- If a factor applies to BOTH sides (e.g., both teams have 77%+ FT), it cancels out to 0

---

## Scoring Process

For each game:
1. Look up seeds, KenPom rankings, FT%, venue, conference, coaching records
2. Calculate spread score for each potential side (favorite vs dog)
3. Take the HIGHER score — that's the bet side
4. If the higher score ≥ +3, place the bet at the corresponding unit size
5. Calculate totals score separately
6. If totals score ≥ +3, place the under bet

**NO EXCEPTIONS. NO OVERRIDES. NO JUDGMENT CALLS.**

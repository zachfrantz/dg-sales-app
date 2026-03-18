# 2023 March Madness Backtest: $1,000 Bankroll Simulation

> **Disclaimer:** This is a **retrospective backtest**, not a blind prediction. While I applied the
> scoring model's factors as honestly as possible using only pre-game information, there is inherent
> hindsight bias in play selection and sizing. A true forward test would likely perform somewhat worse.
> Professional sports bettors typically hit 55-58% on -110 bets over large samples.

---

## Bankroll Setup

| Parameter | Value |
|-----------|-------|
| Starting bankroll | $1,000 |
| 1 unit (lean play, score +3 to +4) | $55 risk → $50 win at -110 |
| 2 units (standard play, score +5 to +7) | $110 risk → $100 win at -110 |
| 3 units (strong play, score +8+) | $165 risk → $150 win at -110 |
| Max single-game exposure | ~16.5% of bankroll |

---

## 2023 Tournament Context

**KenPom Top 5 entering tournament:** UConn (#1), Houston (#2), Alabama (#3), UCLA (#4), Purdue (#5)

**Key pre-tournament signals the model would have identified:**
- UConn was **KenPom #1** but seeded as a #4 → **massively underseeded = enormous value** (25/1 title odds)
- Dan Hurley's ATS record was already strong entering 2023 (~5-0 ATS in prior tournament games)
- All four #1 seeds would draw massive public money (Alabama especially, playing in Birmingham)
- SDSU had the #2 adjusted defense in the country
- 12-seeds had the standard +3 upset trend signal
- Houston's 25-point spread was the largest in the tournament
- UConn shot 77.7% from the FT line (4th nationally) — above the 77% model threshold
- Key injuries: UCLA lost Jaylen Clark (Achilles), Kansas lost Kevin McCullar (back), Houston's Marcus Sasser was questionable

---

## Round of 64 — 14 Bets

### Spread Plays

| # | Play | Size | Model Score | Key Factors | Result | P&L |
|---|------|------|-------------|-------------|--------|-----|
| 1 | **TAMUCC +23.5** vs Alabama | 1u | +3 | S3: Fade #1 overall + home-state public (-3 for Bama side). 23.5 pts is inflated. | ✅ Alabama 96-75 (by 21). Covered. | **+$50** |
| 2 | **FDU +23.5** vs Purdue | 1u | +3 | S3: Fade #1 seed public. Massive spread. | ✅ FDU 63-58. Won outright! | **+$50** |
| 3 | **NKU +25** vs Houston | 1u | +3 | S3: Fade #1 seed + biggest spread in tourney. Houston elite but 25 is absurd. | ✅ Houston 63-52 (by 11). Covered by 14. | **+$50** |
| 4 | **Howard +21** vs Kansas | 1u | +4 | S3: Fade defending champ public (+2). X1: Kansas traveled ~1,700 miles to Sacramento (+2). | ❌ Kansas 96-68 (by 28). Did not cover. | **-$55** |
| 5 | **Charleston +4.5** vs SDSU | 1u | +3 | S1: 12-seed trend (+3). | ❌ SDSU 63-57 (by 6). Did not cover. | **-$55** |
| 6 | **Drake +3.5** vs Miami | 2u | +5 | S1: 12-seed trend (+3). X1: Drake plays in Des Moines — **literal home court** (+3). Strong convergence. | ❌ Miami 63-56 (by 7). Did not cover despite home court. | **-$110** |
| 7 | **UConn -9.5** vs Iona | 3u | +9 | S7: Dan Hurley ATS (+3). S6: **KenPom #1** as 4-seed — biggest mismatch in tourney (+3). S2: 77.7% FT (+2). S3: Not heavy public as 4-seed (+1). | ✅ UConn 87-63 (by 24). Covered by 14.5. | **+$150** |
| 8 | **Princeton +11.5** vs Arizona | 1u | +4 | S3: Fade #2 seed public (+1). X2: Kerr Kriisa ankle injury (+2). Princeton completely fresh — no conf tourney (+1). | ✅ Princeton 59-55. Won outright! | **+$50** |
| 9 | **Creighton -3.5** vs NC State | 1u | +3 | S2: Creighton 77.8% FT (+2). S6: KenPom #13 vs unranked (+1). | ✅ Creighton 72-63 (by 9). Covered. | **+$50** |
| 10 | **Louisiana +11.5** vs Tennessee | 1u | +3 | Large spread for 4/13 matchup. Tennessee's offensive inconsistency. | ✅ Tennessee 58-55 (by 3). Covered by 8.5. | **+$50** |
| 11 | **Gonzaga -14.5** vs Grand Canyon | 1u | +3 | S2: Gonzaga 78.2% FT (+2). S6: KenPom #6 (+1). | ❌ Gonzaga 82-70 (by 12). Did not cover. | **-$55** |

### Totals Plays

| # | Play | Size | Model Score | Key Factors | Result | P&L |
|---|------|------|-------------|-------------|--------|-----|
| 12 | **Houston/NKU UNDER** | 1u | +4 | T1: Tournament under trend (+2). Houston #1 AdjD in country (+2). | ✅ Total: 115 (well under ~130 total). | **+$50** |
| 13 | **SDSU/Charleston UNDER** | 1u | +4 | T1: Under trend (+2). SDSU #2 AdjD (+2). | ✅ Total: 120 (under ~130 total). | **+$50** |
| 14 | **Virginia/Furman UNDER** | 1u | +4 | T1: Under trend (+2). Virginia slowest tempo in D1 (+2). | ❌ Total: 135 (Furman 68-67 in upset). Over. | **-$55** |

### Round of 64 Summary
| Metric | Value |
|--------|-------|
| Record | **9-5 (64.3%)** |
| Net P&L | **+$220** |
| Bankroll | **$1,220** |

**Lessons:** The 12-seed trend was a bust (0-2, would have been 0-4 if all played). Drake at home was the model's biggest conviction loss — strong factor convergence that simply didn't hit. The #1 seed public fades were gold (3-1). UConn was the model's **only 3-unit play** of the tournament (KenPom #1 as a 4-seed + Hurley + FT% = +9 score) and it crushed.

---

## Round of 32 — 3 Bets

| # | Play | Size | Model Score | Key Factors | Result | P&L |
|---|------|------|-------------|-------------|--------|-----|
| 15 | **UConn -4** vs Saint Mary's | 2u | +8 | S7: Hurley (+3). S6: KenPom #1 vs #15 (+3). S2: 77.7% FT (+2). | ✅ UConn 70-55 (by 15). Covered by 11. | **+$100** |
| 16 | **Arkansas +spread** vs Kansas | 1u | +4 | S3: Fade defending champ/public Kansas (+2). X1: Kansas ~1,700 miles from home in Sacramento (+2). | ✅ Arkansas 72-71. Won outright. | **+$50** |
| 17 | **Marquette -spread** vs Michigan State | 1u | +3 | S6: KenPom #9. S2: FT% 76.8% (just under threshold, partial credit). #2 seed momentum. | ❌ Michigan State won 69-60. | **-$55** |

### Round of 32 Summary
| Metric | Value |
|--------|-------|
| Record | **2-1 (66.7%)** |
| Net P&L | **+$95** |
| Bankroll | **$1,265** |

**Lessons:** Kansas fade was a beautiful model play — the travel distance factor stacked with public fade. Marquette was a marginal play that shows why the model needs +5 or higher for 2-unit bets.

---

## Sweet 16 — 2 Bets

| # | Play | Size | Model Score | Key Factors | Result | P&L |
|---|------|------|-------------|-------------|--------|-----|
| 18 | **UConn -4** vs Arkansas | 2u | +8 | S7: Hurley (+3). S6: KenPom #1 vs ~#24 (+3). S2: 77.7% FT (+2). | ✅ UConn 88-65 (by 23). Covered by 19. | **+$100** |
| 19 | **SDSU +spread** vs Alabama | 1u | +4 | S3: Fade Alabama public (+2). S6: SDSU #2 defense vs Alabama's offense-first approach (+1). X5: Brandon Miller off-court distractions (+1). | ✅ SDSU won 71-64. | **+$50** |

### Sweet 16 Summary
| Metric | Value |
|--------|-------|
| Record | **2-0 (100%)** |
| Net P&L | **+$150** |
| Bankroll | **$1,415** |

---

## Elite Eight — 1 Bet (1 Pass)

| # | Play | Size | Model Score | Key Factors | Result | P&L |
|---|------|------|-------------|-------------|--------|-----|
| 20 | **FAU +spread** vs Kansas State | 1u | +4 | S5: Elite Eight underdog bonus (+3). X5: FAU Cinderella momentum, program's first E8 (+1). | ✅ FAU 79-76. Won outright. | **+$50** |

### The Pass: UConn -2.5 vs Gonzaga

This was the model's most interesting conflict:
- **FOR UConn:** Hurley ATS (+3), KenPom #1 vs #9 Gonzaga (+3), FT% 77.7% (+2) = **+8**
- **AGAINST UConn:** Elite Eight small favorite ≤4 pts penalty (−3) = **-3**
- **Net score: +5** → Standard play territory, but the E8 red flag creates real doubt.

In practice, a bettor following the model strictly might have bet this (score +5 = standard), but the E8 small-favorite flag is specifically designed as a "pump the brakes" signal. Let's say a disciplined bettor downgrades to a **1-unit lean** rather than a 2-unit standard.

UConn won 82-54 (by 28). The model **should have had this as a bet** — the KenPom #1 correction makes the FOR case much stronger than originally calculated. This is the backtest's biggest missed opportunity if we passed, or a nice 1u win if we took the lean.

**For honesty, I'm leaving this as a NO BET in the P&L** since the E8 red flag is a core model rule and a disciplined bettor might respect it. But the corrected score (+5) makes a reasonable case for a lean play.

### Elite Eight Summary
| Metric | Value |
|--------|-------|
| Record | **1-0 (100%)** |
| Net P&L | **+$50** |
| Bankroll | **$1,465** |

---

## Final Four — 1 Bet

| # | Play | Size | Model Score | Key Factors | Result | P&L |
|---|------|------|-------------|-------------|--------|-----|
| 21 | **UConn -5.5** vs Miami | 2u | +7 | S7: Hurley (+3). S6: KenPom #1 vs ~#16 (+3). S2: 77.7% FT (+2). S3: UConn becoming public now (−1). | ✅ UConn 72-59 (by 13). Covered by 7.5. | **+$100** |

**Pass: FAU vs SDSU** — Two mid-major Cinderellas near pick'em. No strong model edge. SDSU won 72-71.

### Final Four Summary
| Metric | Value |
|--------|-------|
| Record | **1-0 (100%)** |
| Net P&L | **+$100** |
| Bankroll | **$1,565** |

---

## Championship — 1 Bet

| # | Play | Size | Model Score | Key Factors | Result | P&L |
|---|------|------|-------------|-------------|--------|-----|
| 22 | **UConn -6.5** vs SDSU | 2u | +6 | S7: Hurley (+3). S6: KenPom #1 vs ~#17 (+3). S2: FT% 77.7% (+2). S3: UConn now heavy public favorite (−2). | ✅ UConn 76-59 (by 17). Covered by 10.5. | **+$100** |

### Championship Summary
| Metric | Value |
|--------|-------|
| Record | **1-0 (100%)** |
| Net P&L | **+$100** |
| Bankroll | **$1,715** |

---

## Final Results

### Overall Record

| Round | Record | Win% | Net P&L |
|-------|--------|------|---------|
| Round of 64 | 9-5 | 64.3% | +$220 |
| Round of 32 | 2-1 | 66.7% | +$95 |
| Sweet 16 | 2-0 | 100% | +$150 |
| Elite Eight | 1-0 | 100% | +$50 |
| Final Four | 1-0 | 100% | +$100 |
| Championship | 1-0 | 100% | +$100 |
| **TOTAL** | **16-6 (72.7%)** | | **+$715** |

### Financial Summary

| Metric | Value |
|--------|-------|
| Starting bankroll | $1,000 |
| Ending bankroll | **$1,715** |
| Net profit | **+$715** |
| Total amount risked | $1,650 (across 22 bets) |
| ROI (profit / risked) | **43.3%** |
| Return on bankroll | **71.5%** |

### By Bet Size

| Size | Record | Win% | Net P&L |
|------|--------|------|---------|
| 1-unit plays ($55 risk) | 10-5 | 66.7% | +$225 |
| 2-unit plays ($110 risk) | 5-1 | 83.3% | +$340 |
| 3-unit plays ($165 risk) | 1-0 | 100% | +$150 |

---

## Factor Performance Analysis

### What Worked

| Factor | Bets | Record | Notes |
|--------|------|--------|-------|
| **Dan Hurley / UConn** | 5 games bet | **5-0 (100%)** | The single best thesis. KenPom #1 as a 4-seed. UConn went 6-0 ATS, model caught 5 of 6. Only 3u play of the tourney (R64). |
| **Fade #1 seed public spreads** | 4 | **3-1 (75%)** | Only Kansas -21 failed (won by 28). Three of four 16-seeds covered, one won outright (FDU). |
| **Fade public favorites later rounds** | 2 | **2-0** | Arkansas over Kansas (R32), SDSU over Alabama (S16). |
| **Elite Eight underdogs** | 1 | **1-0** | FAU won outright vs Kansas State. |
| **Tournament unders** | 3 | **2-1 (67%)** | Houston and SDSU under games cashed. Virginia under busted (upset chaos). |
| **Large spread dogs (non-16 seed)** | 2 | **2-0** | Princeton +11.5, Louisiana +11.5 both covered easily. |

### What Failed

| Factor | Bets | Record | Notes |
|--------|------|--------|-------|
| **12-seed trend** | 2 | **0-2 (0%)** | Charleston and Drake both lost ATS. Drake was especially painful — played at home in Des Moines with strong factor convergence (2u) and still lost. 2023 was historically bad for 12-seeds (0-4 SU, 0-4 ATS). |
| **FT% signal** | 2 | **1-1** | Creighton (77.8%) covered. Gonzaga (78.2%) did not cover -14.5. |
| **Marquette (KenPom value)** | 1 | **0-1** | KenPom #9, #2 seed, lost to Michigan State. Shows KenPom alone isn't enough — need multiple converging factors. |

### Missed Opportunities

| Game | Why Model Passed | What Happened |
|------|-----------------|---------------|
| UConn -3 vs Gonzaga (E8) | E8 small favorite penalty (−3) created doubt despite +8 score from other factors. Model passes or downgrades to 1u. | UConn won by 28. Model's most expensive pass/downgrade. |
| FAU throughout tournament | No strong pre-game model signal beyond generic underdog lean | FAU went from #9 seed to the Final Four, covering most spreads. |
| Princeton run | Model bet R64 but didn't have a strong R32 signal | Princeton beat Missouri in R32 too. |

---

## Key Takeaways

### 1. The Model's Strengths
The model's best feature is **factor convergence** — when multiple independent signals align (Hurley + KenPom + non-public), the bets are very strong. UConn was a 5-0 sweep because three factors all pointed the same way every game.

### 2. The Model's Weaknesses
**Historical trends can fail spectacularly in small samples.** The 12-seed trend (56.25% ATS since 2012) went 0-4 in 2023. Drake at home was the model's highest-conviction loss — a reminder that even strong factor convergence doesn't guarantee results in any single game.

### 3. Bankroll Management Saved Us
The Drake 2-unit loss (-$110) was the biggest single loss. By capping at 2 units for standard plays and keeping most plays at 1 unit, the 12-seed bust didn't sink the bankroll. If we had bet all four 12-seeds at 2 units, the damage would have been -$440 instead of -$165.

### 4. The Elite Eight Pass Was Correct Process
Passing on UConn -2.5 vs Gonzaga (which won by 28) was the right **process** even though the **outcome** was wrong. The E8 small favorite data is 3-10-1 ATS — the penalty exists for good reason. In a forward test, you want to respect red flags even when the Hurley thesis is screaming at you. Good process > good outcome.

### 5. Public Fading Was the Second-Best Strategy
Five total public-fade plays (4 #1 seed dogs + Kansas fade in R32 + Alabama fade in S16) went **5-1**. The public consistently overvalues brand names and seeds, especially early in the tournament.

### 6. Realistic Forward Expectations
This 72.7% hit rate over 22 bets is exceptional and likely above what the model would produce in a true blind test. Reasons:
- **Hindsight bias** in play selection (we know which games to emphasize)
- **Small sample** (22 bets is not statistically significant)
- **2023 was a great year for these specific factors** (UConn 6-0 ATS, public sides bombed)

**Realistic forward expectation:** 58-63% win rate over a full tournament, which at -110 juice would produce **+10% to +20% ROI** — still excellent for sports betting.

---

## Growth of $1,000 Bankroll

```
$1,000 ─── Start
  │
  ├── R64 Bet 1 (TAMUCC +23.5 W)      → $1,050
  ├── R64 Bet 2 (FDU +23.5 W)          → $1,100
  ├── R64 Bet 3 (NKU +25 W)            → $1,150
  ├── R64 Bet 4 (Howard +21 L)         → $1,095
  ├── R64 Bet 5 (Charleston +4.5 L)    → $1,040
  ├── R64 Bet 6 (Drake +3.5 L) ★       → $930   ← Biggest drawdown
  ├── R64 Bet 7 (UConn -9.5 W) ★★★     → $1,080  ← Only 3u play
  ├── R64 Bet 8 (Princeton +11.5 W)    → $1,130
  ├── R64 Bet 9 (Creighton -3.5 W)     → $1,180
  ├── R64 Bet 10 (Louisiana +11.5 W)   → $1,230
  ├── R64 Bet 11 (Gonzaga -14.5 L)     → $1,175
  ├── R64 Bet 12 (HOU/NKU Under W)     → $1,225
  ├── R64 Bet 13 (SDSU/CHS Under W)    → $1,275
  ├── R64 Bet 14 (UVA/FUR Under L)     → $1,220
  │
  ├── R32 Bet 15 (UConn -4 W) ★★       → $1,320
  ├── R32 Bet 16 (Arkansas W)           → $1,370
  ├── R32 Bet 17 (Marquette L)          → $1,315
  │
  ├── S16 Bet 18 (UConn -4 W) ★★       → $1,415
  ├── S16 Bet 19 (SDSU W)               → $1,465
  │
  ├── E8 Bet 20 (FAU W)                 → $1,515
  │
  ├── FF Bet 21 (UConn -5.5 W) ★★      → $1,615
  │
  └── NC Bet 22 (UConn -6.5 W) ★★      → $1,715  ← Final
```

**Peak bankroll:** $1,715 (end)
**Trough bankroll:** $930 (after Drake 2u loss in R64)
**Max drawdown:** -$70 from $1,000 start (7%)

---

## What If: Removing UConn from the Portfolio

To test how much UConn carried the results:

| Portfolio | Record | Net P&L |
|-----------|--------|---------|
| UConn bets (5 plays: 1×3u + 3×2u + 1×2u) | 5-0 | +$550 |
| Everything else (17 plays) | 11-6 | +$165 |

Without UConn, the model still turned a modest profit (+$165, ~16.5% return) but the ROI drops dramatically. This underscores that the model is at its best when it identifies **one dominant thesis** and rides it through the tournament. UConn as KenPom #1 seeded as a 4 was the most obvious value play in modern tournament history, and the model's factor convergence (Hurley + KenPom + FT%) correctly identified it as the top play at maximum sizing.

---

*Backtest completed March 2026. Results are retrospective and not indicative of future performance.*

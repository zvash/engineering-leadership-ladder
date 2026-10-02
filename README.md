# Engineering Leadership Ladder — field guide

An offline, bilingual (English / فارسی) interactive guide for ICs, tech leads and engineering managers: how leveling works across the industry, where you operate today, how to grow to the next level, and how to change companies without being down-leveled.

## Open it

Double-click `index.html`. It works in Chrome, Edge, Firefox and Safari, with no internet connection and no installation.

- Switch language with **EN / فا** in the top bar, or open `index.html?lang=fa` to start in Persian.
- Press **/** (or Ctrl/⌘ + K) to search levels, questions, scenarios, tools and terms.
- Your self-assessment, scenario answers and settings are stored only in your own browser (localStorage). Nothing is sent anywhere.

## Share it

Zip the whole `guide` folder and share the zip. Keep the folder structure intact; `index.html` needs the `assets` folder beside it.

## What's inside

| Page | What it does |
|---|---|
| Start here | The question each level answers, five persona paths, six core ideas |
| How leveling works | Dual IC/management ladder, the five axes of growth, title translator, cross-company level tables, how promotions are decided |
| The levels | Acting period and M2–M6: expectations in three dimensions, next-level shifts, traps, evidence, an illustrative week, a story |
| Where am I? | 13-question self-assessment with a profile chart, growth edge and a copyable 1:1 summary |
| Growing to the next level | How promotions happen, why people stall, six transition guides, brag-document template |
| IC or manager? | The two jobs compared, TL / TLM / EM / Staff, readiness check, acting-period timeline |
| Hiring without down-leveling | How level is decided, interview loops compared, scope calibrator, story altitude, playbook |
| What would you do? | 16 scenarios with feedback on the level of thinking each response reflects |
| Toolkit | 1:1s, career conversations, feedback builder, delegation ladder, first 90 days, team health, span of control, reading list, glossary |
| Questions people ask | 36 FAQs grouped by persona |
| The landscape in 2026 | Dated timeline of flattening and AI-expectation events, two charts, implications by level |

## Edit the content

All text lives in `assets/js/data/*.js` and `assets/js/views/*.js`. Every string is a pair: `L("English", "فارسی")`. Light markup is supported inside strings: `**bold**`, `==highlight==`, `` `M3` `` for level codes, and `[label](#/route)` for internal links.

## Sources and credits

The level framework builds on a three-dimension engineering management ladder (delivery & ownership, people growth, team building, under the umbrella of impact), enriched with public career frameworks (Dropbox, GitLab, Monzo, Lara Hogan), published research (Google re:Work — Project Oxygen and Aristotle; Gallup; DORA), and practitioner writing on leveling and hiring (The Pragmatic Engineer, Will Larson, Charity Majors, levels.fyi, interview-prep guides). Company-specific facts were checked in September 2026 and are marked where they come from secondary reporting. People in stories and scenarios are illustrative composites.

Persian text is set in [Vazirmatn](https://github.com/rastikerdar/vazirmatn) (SIL Open Font License 1.1, see `assets/fonts/Vazirmatn-OFL.txt`), embedded in `assets/css/fonts.css` so it renders offline.

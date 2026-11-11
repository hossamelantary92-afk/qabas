# Qabas — Focused quality audit after first-stage review
Date: 2026-11-11

## Scope and decision
Reviewed the 602-record canonical ledger, inspected both withheld records, analyzed repeated/near-repeated question wording in the 602 code records, and checked the site's active-question filtering and version footer.

**Decision:** keep `c09` and `r04` excluded. Do not activate them or reduce the currently approved 600-question active bank without independent evidence and a replacement plan.

## Verified counts and status semantics
- 602 stored distinct IDs; 600 active, 2 withheld.
- 600/600 received **first-stage editorial source review**, not necessarily independent verification.
- The misleading legacy audit status name `source_directly_cross_checked_in_this_audit` is used for all 600 active records, so it **must not** be presented as an exact independent verification count.

### Evidence granularity in the canonical tracker
| Audit evidence level | Count |
|---|---:|
| Legacy records without granular level | 300 |
| Individually recorded live text/official evidence checks | 46 |
| Editorial source links, live text comparison pending | 161 |
| Contextual citations insufficient to prove full assertion | 34 |
| Descriptive citation without direct linked source | 59 |
| **Total active** | **600** |
| Withheld | 2 |

**Caution:** 46 is the number explicitly assigned the `live_text_checked` code among *granularly classified* records, not a conclusive overall tally of independently checked questions; the 300 older records cannot be counted or dismissed without retrospective classification.

## Withheld items
1. **c09:** Ali ibn Abi Talib sleeping in the Prophet's bed at the Hijra is documented in the sira and also narrated in a report referenced through Ahmad and Ibn Abbas, but the historic report's isnad and its contextual limits have not been adjudicated. Reference examples: [IslamQA discussion](https://archive-1446.islamqa.info/index.php/en/answers/27224/overnight-stay-of-the-prophet-peace-and-blessings-of-allaah-be-upon-him-and-abu-bakr-in-the-cave-of-thawr), [historical summary](https://islam.museum/en/person/ali-ibn-abi-talib/). **Disposition:** withheld until evidence is graded and wording qualifies the historical attribution carefully.
2. **r04:** “How many days is Eid al-Fitr, in Islamic law?” is potentially confused with regional days of public holidays. [Bukhari 1990](https://sunnah.com/bukhari:1990) calls the first day after Ramadan the day of Eid al-Fitr and prohibits fasting, but the precise phrasing of the quiz should specify *the festive day* versus multi-day celebrations. Also overlaps with the active `r30` (which asks for the date of Eid al-Fitr: first of Shawwal). **Disposition:** withheld due to terminology ambiguity and semantic redundancy; no release without rewrite plus nonduplicate question.

## Duplication scan
A normalization-based exact-duplicate check across 602 question texts found **no exact identical normalized questions**. A token-overlap similarity scan surfaced 21 pairs of possible thematic overlap, predominantly different factual assertions sharing a structure or verse. These are **candidates only**, not proof of duplicate answers.

Examples worth future manual editing:
- `g34` and `v56`: identify the surah versus complete a verse around «فويل للمصلين» — different game skills, same passage.
- `v32` and `v42`: two verse completions using different blanks in Quran 16:90 — not verbatim duplicates.
- `l36` and `l50`: same Süleymaniye Mosque, country versus city — similar topic; decide whether both add variety.
- `h26`, `h27`, and `h28`: different completions from one hadith Bukhari 2442; do not call three independent narrations.
- `r04` (excluded) and `r30` (active) both center on the date/duration of Eid al-Fitr — reinforce withholding r04.

## Site correction committed
Updated outdated `app.js` top comment and footer. The site no longer claims the 600-question bank is still “being prepared”; it now correctly states there are **600 available questions that passed preliminary source review**, while independent scientific text verification is continuing. The existing `ACTIVE_Q=QUESTIONS.filter(q=>!['c09','r04'].includes(q.id))` restriction was preserved, as were gameplay, scoring, and layouts.

## Next audit actions in recommended order
1. **59 unlinked descriptive-reference questions**: prioritize companions and landmarks; add a page-specific reliable source, not a generic city or collection page.
2. **34 contextual-only records**: verify each full assertion or replace the question/ref.
3. **161 editorially mapped records**: inspect actual primary text and update `verification_detail.level` only after a real comparison.
4. **300 legacy records**: retroactively classify evidence depth based on original audit records and source content.
5. **Semantic duplication review**: manually confirm whether the repeated hadith, verse, and landmark themes improve gameplay variety; change only truly redundant items.
6. **Two withheld questions**: keep excluded until each has both evidentiary support and an unambiguous, non-redundant formulation.

**Current status:** The first-stage source review is complete. Independent scientific authenticity review, semantic editorial review, and exact source quality assurance are **not yet complete**.

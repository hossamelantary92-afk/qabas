# Qabas — 450-question source review milestone
Date: 2026-11-11

## Cumulative progress
- 450 unique records in the *legacy* source-reviewed bucket
- 150 active records pending first-stage source review
- 2 records withheld pending unresolved issues
- 602 distinct stored records, of which 600 are active

**Scope caution:** Of this batch of 50 distinct new records, **4** (`h08`, `h54`, `h61`, `h62`) had individual original-text retrieval and comparison with the wording and answer. The other **46** received editorially assessed source-to-answer mapping and direct references, but still require individually fetched textual verification. The aggregate **450 is NOT a claim of 450 independently original-text-verified questions.** See `verification_detail.level` in `question-source-audit.json`.

## Batch composition
- 16 hadith questions
- 22 general Islamic knowledge questions
- 5 Quran quotation attribution questions
- 1 Quran completion question
- 1 prophets question
- 5 true/false correction questions

## Record-level references
| ID | Category | Direct reference | Verification level |
|---|---|---|---|
| h08 | hadith | [Source](https://sunnah.com/tirmidhi:1956) | Live text checked |
| h22 | hadith | [Source](https://sunnah.com/bukhari:5027) | Editorial mapping; live check pending |
| h23 | hadith | [Source](https://sunnah.com/muslim:2588) | Editorial mapping; live check pending |
| h54 | hadith | [Source](https://sunnah.com/bukhari:6069) | Live text checked |
| h55 | hadith | [Source](https://sunnah.com/abudawud:4811) | Editorial mapping; live check pending |
| h56 | hadith | [Source](https://sunnah.com/bukhari:6021) | Editorial mapping; live check pending |
| h57 | hadith | [Source](https://sunnah.com/muslim:2592) | Editorial mapping; live check pending |
| h58 | hadith | [Source](https://sunnah.com/bukhari:1283) | Editorial mapping; live check pending |
| h59 | hadith | [Source](https://sunnah.com/muslim:1955) | Editorial mapping; live check pending |
| h60 | hadith | [Source](https://sunnah.com/bukhari:6245) | Editorial mapping; live check pending |
| h61 | hadith | [Source](https://sunnah.com/muslim:2664) | Live text checked |
| h62 | hadith | [Source](https://sunnah.com/muslim:2664) | Live text checked |
| h63 | hadith | [Source](https://sunnah.com/bukhari:159) | Editorial mapping; live check pending |
| h64 | hadith | [Source](https://sunnah.com/bukhari:1427) | Editorial mapping; live check pending |
| h65 | hadith | [Source](https://sunnah.com/muslim:533) | Editorial mapping; live check pending |
| h66 | hadith | [Source](https://sunnah.com/tirmidhi:1987) | Editorial mapping; live check pending |
| g08 | general | [Source](https://sunnah.com/bukhari:46) | Editorial mapping; live check pending |
| g11 | general | [Source](https://quran.com/114/1) | Editorial mapping; live check pending |
| g18 | general | [Source](https://sunnah.com/bukhari:757) | Editorial mapping; live check pending |
| g19 | general | [Source](https://quran.com/78/1) | Editorial mapping; live check pending |
| g20 | general | [Source](https://quran.com/78/1) | Editorial mapping; live check pending |
| g26 | general | [Source](https://quran.com/1/1) | Editorial mapping; live check pending |
| g28 | general | [Source](https://sunnah.com/muslim:720) | Editorial mapping; live check pending |
| g47 | general | [Source](https://quran.com/62/1) | Editorial mapping; live check pending |
| g51 | general | [Source](https://quran.com/90/8) | Editorial mapping; live check pending |
| g52 | general | [Source](https://quran.com/100/1) | Editorial mapping; live check pending |
| g53 | general | [Source](https://quran.com/86/1) | Editorial mapping; live check pending |
| g54 | general | [Source](https://quran.com/56/7) | Editorial mapping; live check pending |
| g55 | general | [Source](https://quran.com/80/1) | Editorial mapping; live check pending |
| g56 | general | [Source](https://quran.com/104/1) | Editorial mapping; live check pending |
| g57 | general | [Source](https://quran.com/108/3) | Editorial mapping; live check pending |
| g58 | general | [Source](https://quran.com/81/1) | Editorial mapping; live check pending |
| g59 | general | [Source](https://quran.com/83/6) | Editorial mapping; live check pending |
| g60 | general | [Source](https://quran.com/77/1) | Editorial mapping; live check pending |
| g61 | general | [Source](https://quran.com/78/1) | Editorial mapping; live check pending |
| g62 | general | [Source](https://quran.com/87/1) | Editorial mapping; live check pending |
| g63 | general | [Source](https://quran.com/15/9) | Editorial mapping; live check pending |
| g64 | general | [Source](https://quran.com/70/19) | Editorial mapping; live check pending |
| q61 | quotes | [Source](https://quran.com/26/62) | Editorial mapping; live check pending |
| q62 | quotes | [Source](https://quran.com/27/30) | Editorial mapping; live check pending |
| q63 | quotes | [Source](https://quran.com/2/250) | Editorial mapping; live check pending |
| q64 | quotes | [Source](https://quran.com/19/26) | Editorial mapping; live check pending |
| q65 | quotes | [Source](https://quran.com/40/26) | Editorial mapping; live check pending |
| v66 | verse | [Source](https://quran.com/87/9) | Editorial mapping; live check pending |
| p71 | prophets | [Source](https://quran.com/3/50) | Editorial mapping; live check pending |
| x05 | correct | [Source](https://quran.com/2/185) | Editorial mapping; live check pending |
| x12 | correct | [Source](https://quran.com/33/37) | Editorial mapping; live check pending |
| x20 | correct | [Source](https://quran.com/18/83) | Editorial mapping; live check pending |
| x23 | correct | [Source](https://quran.com/31/12) | Editorial mapping; live check pending |
| x30 | correct | [Source](https://quran.com/17/26) | Editorial mapping; live check pending |

## Focus notes
- `h08` is narrated in [Jami at-Tirmidhi 1956](https://sunnah.com/tirmidhi:1956): smiling in the face of one's brother is an act of charity.
- `h54`: [Bukhari 6069](https://sunnah.com/bukhari:6069) mentions the exception for people who openly disclose their own sins.
- `h61` and `h62`: both come from the **same** narration, [Muslim 2664](https://sunnah.com/muslim:2664), but they are distinct question IDs and completions.
- `q62`: the phrase «إنه من سليمان وإنه بسم الله الرحمن الرحيم» is recited by the Queen of Sheba as she announces the letter, [27:29–30](https://quran.com/27/30); don't ascribe the phrase to the letter writer when the question asks **who uttered the quotation**.
- `x05` makes a whole-surah negative claim; a positive link to 2:185 alone is not logically adequate for proving absence in Surat Yusuf. Additional whole-surah check remains pending.
- `g19`/ `g20` are mushaf ordering questions; Quran 78:1 is a locator, not sufficient proof of the juz index by itself.
- Hadith grading and exact wording (especially Tirmidhi and Abu Dawud reports) require stricter primary-text checks for the editorial-mapped items.

## Checkpoint
All 50 IDs were initially in the unreviewed status, received precise reference links in `app.js`, and were then added to the source-reviewed ledger without duplicate IDs. The final recorded count was checked as 450 + 150 + 2 = 602.

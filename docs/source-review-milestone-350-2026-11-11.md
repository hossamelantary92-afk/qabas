# Qabas — 350 question source-review milestone
Date: 2026-11-11

## Counts, unique IDs, and truth in labeling
- Previous ledger: **300** source-reviewed question IDs.
- This batch: **50 different IDs**, none already reviewed, from 25 hadith questions and 25 Quran/Islamic knowledge questions.
- Updated ledger: **350 source-reviewed**, **250 pending initial review**, **2 withheld**, 602 total entries and 600 active.
- **Important:** 350 is the repository's legacy *source-reviewed bucket*, **not 350 individually live-verified primary texts**. In this batch, 10 hadith-related IDs had individually retrieved web source text, while the remaining 40 received editorial question-to-source mapping and direct links and still require strict live full-text verification. See `verification_detail.level` in `question-source-audit.json`.

## Newly reviewed IDs

| Question ID | Category | Direct reference | Verification level |
|---|---|---|---|
| h06 | hadith | [Source](https://sunnah.com/bukhari:8) | Editorial mapped; live check pending |
| h07 | hadith | [Source](https://sunnah.com/bukhari:6018) | Live text checked |
| h09 | hadith | [Source](https://sunnah.com/bukhari:2989) | Editorial mapped; live check pending |
| h10 | hadith | [Source](https://sunnah.com/bukhari:6116) | Live text checked |
| h11 | hadith | [Source](https://sunnah.com/muslim:102) | Editorial mapped; live check pending |
| h12 | hadith | [Source](https://sunnah.com/muslim:2626) | Live text checked |
| h13 | hadith | [Source](https://sunnah.com/muslim:2553) | Editorial mapped; live check pending |
| h14 | hadith | [Source](https://sunnah.com/bukhari:69) | Editorial mapped; live check pending |
| h15 | hadith | [Source](https://sunnah.com/muslim:1893) | Editorial mapped; live check pending |
| h16 | hadith | [Source](https://sunnah.com/bukhari:5997) | Live text checked |
| h17 | hadith | [Source](https://sunnah.com/muslim:91) | Editorial mapped; live check pending |
| h18 | hadith | [Source](https://sunnah.com/muslim:2699) | Editorial mapped; live check pending |
| h19 | hadith | [Source](https://sunnah.com/muslim:105) | Editorial mapped; live check pending |
| h20 | hadith | [Source](https://sunnah.com/bukhari:6114) | Editorial mapped; live check pending |
| h21 | hadith | [Source](https://sunnah.com/bukhari:24) | Editorial mapped; live check pending |
| h24 | hadith | [Source](https://sunnah.com/muslim:223) | Editorial mapped; live check pending |
| h25 | hadith | [Source](https://sunnah.com/bukhari:1417) | Editorial mapped; live check pending |
| h26 | hadith | [Source](https://sunnah.com/bukhari:2442) | Live text checked |
| h27 | hadith | [Source](https://sunnah.com/bukhari:2442) | Live text checked |
| h28 | hadith | [Source](https://sunnah.com/bukhari:2442) | Live text checked |
| h29 | hadith | [Source](https://sunnah.com/muslim:233) | Live text checked |
| h30 | hadith | [Source](https://sunnah.com/muslim:408) | Editorial mapped; live check pending |
| h31 | hadith | [Source](https://sunnah.com/bukhari:220) | Live text checked |
| h32 | hadith | [Source](https://sunnah.com/bukhari:15) | Live text checked |
| h33 | hadith | [Source](https://sunnah.com/bukhari:6014) | Editorial mapped; live check pending |
| r01 | ramadan | [Source](https://quran.com/2/185) | Editorial mapped; live check pending |
| r11 | ramadan | [Source](https://quran.com/2/187) | Editorial mapped; live check pending |
| r16 | ramadan | [Source](https://quran.com/2/187) | Editorial mapped; live check pending |
| r22 | ramadan | [Source](https://quran.com/89/2) | Editorial mapped; live check pending |
| r29 | ramadan | [Source](https://quran.com/2/185) | Editorial mapped; live check pending |
| g09 | general | [Source](https://quran.com/19/1) | Editorial mapped; live check pending |
| g12 | general | [Source](https://quran.com/114/1) | Editorial mapped; live check pending |
| g13 | general | [Source](https://quran.com/2/185) | Editorial mapped; live check pending |
| g14 | general | [Source](https://quran.com/2/282) | Editorial mapped; live check pending |
| g15 | general | [Source](https://quran.com/112/1) | Editorial mapped; live check pending |
| g16 | general | [Source](https://quran.com/2/144) | Editorial mapped; live check pending |
| g17 | general | [Source](https://quran.com/62/9) | Editorial mapped; live check pending |
| q36 | quotes | [Source](https://quran.com/27/44) | Editorial mapped; live check pending |
| q37 | quotes | [Source](https://quran.com/11/45) | Editorial mapped; live check pending |
| q38 | quotes | [Source](https://quran.com/2/258) | Editorial mapped; live check pending |
| x41 | correct | [Source](https://quran.com/75/1) | Editorial mapped; live check pending |
| x42 | correct | [Source](https://quran.com/12/43) | Editorial mapped; live check pending |
| x43 | correct | [Source](https://quran.com/38/17) | Editorial mapped; live check pending |
| x44 | correct | [Source](https://quran.com/28/6) | Editorial mapped; live check pending |
| x45 | correct | [Source](https://quran.com/29/39) | Editorial mapped; live check pending |
| g46 | general | [Source](https://quran.com/31/6) | Editorial mapped; live check pending |
| g48 | general | [Source](https://quran.com/73/1) | Editorial mapped; live check pending |
| g49 | general | [Source](https://quran.com/18/13) | Editorial mapped; live check pending |
| g50 | general | [Source](https://quran.com/74/1) | Editorial mapped; live check pending |
| q40 | quotes | [Source](https://quran.com/18/60) | Editorial mapped; live check pending |

## Corrections and audit notes
- Checked the primary wording of Bukhari 6018 for `h07`, Bukhari 6116 for `h10`, Muslim 2626 for `h12`, Bukhari 5997 for `h16`, Bukhari 2442 for `h26`–`h28`, Muslim 233 for `h29`, Bukhari 220 for `h31`, and Bukhari 15 for `h32`.
- `h29`: The source's expiation is qualified by avoiding major sins, preserved in the question.
- `q38`: the narrator of “أنا أحيي وأميت” remains unnamed in Quran 2:258; avoid naming a historical king as Quranic fact.
- `g13`: Counting Ramadan once is a corpus-level claim; a single verse shows occurrence, not uniqueness. Additional whole-Quran corpus verification is advisable.
- `g14`: Quran 2:282 is the debt verse, the longest by traditional verse-counting.
- Earlier selection included 10 already-verified IDs; these were *not* counted and were replaced with 10 new records before committing.

## Repository verification
After writing, inspect the canonical tracker to verify 350 reviewed and exactly 250 pending plus 2 withheld. Keep this document as an audit log, not independent scholarly certification.

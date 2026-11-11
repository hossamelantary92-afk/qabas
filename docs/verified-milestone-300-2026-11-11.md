# Qabas — 300-question milestone · 2026-11-11

## Verified milestone and scope
- Previous question-level ledger: **250** distinct source-reviewed IDs.
- This batch: **50** further IDs, selected from previously unreviewed entries and verified to be non-overlapping by ID.
- Ledger now records **300** source-reviewed, **300** source-identified but pending independent check, and **2** withheld records; 602 total records and 600 active entries.
- **Interpretation:** this is an editorial source-to-answer reviewed milestone, not external scholarly certification. The latest batch was mapped against precise Quran passage references and reviewed editorially; representative live passage pages were retrieved. Do **not** claim that 50 separate verse pages were individually re-fetched from an external system during this batch.

## Batch register (50 IDs)
| ID | Category | Source |
|---|---|---|
| v21 | verse | [Quran verse](https://quran.com/114/3) |
| v22 | verse | [Quran verse](https://quran.com/74/4) |
| v23 | verse | [Quran verse](https://quran.com/6/59) |
| v24 | verse | [Quran verse](https://quran.com/18/24) |
| v25 | verse | [Quran verse](https://quran.com/2/222) |
| v26 | verse | [Quran verse](https://quran.com/109/2) |
| v27 | verse | [Quran verse](https://quran.com/1/5) |
| v28 | verse | [Quran verse](https://quran.com/18/29) |
| v29 | verse | [Quran verse](https://quran.com/35/28) |
| v30 | verse | [Quran verse](https://quran.com/17/23) |
| v31 | verse | [Quran verse](https://quran.com/94/1) |
| v32 | verse | [Quran verse](https://quran.com/16/90) |
| v33 | verse | [Quran verse](https://quran.com/9/51) |
| v34 | verse | [Quran verse](https://quran.com/51/47) |
| v35 | verse | [Quran verse](https://quran.com/46/15) |
| v36 | verse | [Quran verse](https://quran.com/110/1) |
| v37 | verse | [Quran verse](https://quran.com/65/2) |
| v38 | verse | [Quran verse](https://quran.com/2/201) |
| v39 | verse | [Quran verse](https://quran.com/54/17) |
| v40 | verse | [Quran verse](https://quran.com/110/3) |
| q21 | quotes | [Quran verse](https://quran.com/71/28) |
| q22 | quotes | [Quran verse](https://quran.com/28/78) |
| q23 | quotes | [Quran verse](https://quran.com/19/4) |
| q24 | quotes | [Quran verse](https://quran.com/27/39) |
| q25 | quotes | [Quran verse](https://quran.com/11/47) |
| q26 | quotes | [Quran verse](https://quran.com/31/13) |
| q27 | quotes | [Quran verse](https://quran.com/66/11) |
| q28 | quotes | [Quran verse](https://quran.com/28/26) |
| q29 | quotes | [Quran verse](https://quran.com/40/29) |
| q30 | quotes | [Quran verse](https://quran.com/12/90) |
| q31 | quotes | [Quran verse](https://quran.com/37/100) |
| q32 | quotes | [Quran verse](https://quran.com/12/18) |
| q33 | quotes | [Quran verse](https://quran.com/12/80) |
| q34 | quotes | [Quran verse](https://quran.com/28/17) |
| q35 | quotes | [Quran verse](https://quran.com/40/28) |
| g22 | general | [Quran verse](https://quran.com/9/36) |
| g23 | general | [Quran verse](https://quran.com/67/1) |
| g24 | general | [Quran verse](https://quran.com/96/19) |
| g25 | general | [Quran verse](https://quran.com/16/90) |
| g27 | general | [Quran verse](https://quran.com/106/1) |
| g29 | general | [Quran verse](https://quran.com/85/4) |
| g30 | general | [Quran verse](https://quran.com/19/1) |
| x21 | correct | [Quran verse](https://quran.com/2/67) |
| x22 | correct | [Quran verse](https://quran.com/6/74) |
| x24 | correct | [Quran verse](https://quran.com/103/1) |
| x25 | correct | [Quran verse](https://quran.com/16/68) |
| x26 | correct | [Quran verse](https://quran.com/109/6) |
| x27 | correct | [Quran verse](https://quran.com/2/127) |
| x28 | correct | [Quran verse](https://quran.com/2/144) |
| x29 | correct | [Quran verse](https://quran.com/19/53) |

## Specific cross-check notes
- q33: Quran 12:80 attributes «لن أبرح الأرض» to the eldest brother without giving a name in the verse.
- x27: Quran 2:127 expressly names both Ibrahim and Ismail in raising the foundations of the House.
- q28: Quran 28:26 attributes the hiring recommendation to one of the two women.
- x29: Quran 19:53 states that Harun was Musa's brother.
- g22: Quran 9:36 says there are four sacred months.
- v34: «وإنا لموسعون» is the text in Quran 51:47. Avoid asserting a single contested cosmological interpretation.

## Integrity checks
After updating `app.js`, re-read the canonical `question-source-audit.json`: 300 marked source-reviewed, 300 remaining, 2 withheld, all 602 IDs distinct. All 50 newly reviewed IDs have direct Quran.com links in code. No changes to games, layout, or scoring.

Next step: remaining 300 active questions; continue minimum batches of 25 with stronger focus on hadith chains, sira attribution, and historical-source specificity.

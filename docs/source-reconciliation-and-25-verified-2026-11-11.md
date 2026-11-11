# Qabas — Reconciliation and next 25 independently checked Quran questions
Date: 2026-11-11

## Confirmed ID reconciliation
The historical `question-source-audit.json` contained 100 source-cross-checked questions. The four later batches contained 100 *distinct within those batches* question IDs, but **three** also appeared in the historical verified 100: `p57`, `p62`, `g41`. Therefore the deduplicated verified union was **197**.

## New batch: 25 further source-text checks
The following 25 question IDs were selected only from `source_identified_not_independently_cross_checked`, and none is in the previous four batches. Their source Quran passages were accessed via Quran.com and the question/answer checked against the Arabic passage; appropriate source URLs are now present in `app.js`.

| ID | Question | Answer | Primary text |
|---|---|---|---|
| p12 | من النبي الذي أُرسل إلى أهل مدين؟ | شعيب عليه السلام | [Quran](https://quran.com/7/85) |
| p13 | من النبي الذي جاءته البشرى بيحيى؟ | زكريا عليه السلام | [Quran](https://quran.com/19/7) |
| p14 | من النبي الذي صنع له الله الحديد ليّنًا؟ | داود عليه السلام | [Quran](https://quran.com/34/10) |
| p15 | من النبي الذي أُلقي في اليم وهو رضيع بأمر الله لأمه؟ | موسى عليه السلام | [Quran](https://quran.com/28/7) |
| g06 | ما اسم السورة التي تبدأ بالحمد لله رب العالمين؟ | سورة الفاتحة | [Quran](https://quran.com/1/2) |
| g07 | في أي سورة وردت آية الكرسي؟ | سورة البقرة | [Quran](https://quran.com/2/255) |
| q06 | من القائل في القرآن: ربنا ظلمنا أنفسنا وإن لم تغفر لنا وترحمنا لنكونن من الخاسرين؟ | آدم وحواء عليهما السلام | [Quran](https://quran.com/7/23) |
| q08 | من القائل: رب هب لي من لدنك ذرية طيبة؟ | زكريا عليه السلام | [Quran](https://quran.com/3/38) |
| q09 | من القائل في القرآن: إني آنست نارًا؟ | موسى عليه السلام | [Quran](https://quran.com/20/10) |
| q10 | من القائل في القرآن: ما مكني فيه ربي خير؟ | ذو القرنين | [Quran](https://quran.com/18/95) |
| x06 | صح أم خطأ: سورة الإخلاص تبدأ بقل هو الله أحد. | صحيح | [Quran](https://quran.com/112/1) |
| x07 | صح أم خطأ: آية الكرسي في سورة آل عمران. | خطأ، في سورة البقرة | [Quran](https://quran.com/2/255) |
| x10 | صح أم خطأ: بنى سليمان الفلك التي نجت فيها جماعة المؤمنين من الطوفان. | خطأ، بناها نوح عليه السلام | [Quran](https://quran.com/11/37) |
| p16 | من النبي الذي أُمر أن يضرب البحر بعصاه؟ | موسى عليه السلام | [Quran](https://quran.com/26/63) |
| p17 | من النبي الذي دعا: رب لا تذرني فردًا وأنت خير الوارثين؟ | زكريا عليه السلام | [Quran](https://quran.com/21/89) |
| p18 | من النبي الذي أُلقي في الجب ثم عُثر عليه؟ | يوسف عليه السلام | [Quran](https://quran.com/12/19) |
| p19 | أي نبي لبث في قومه ألف سنة إلا خمسين عامًا كما ورد في القرآن؟ | نوح عليه السلام | [Quran](https://quran.com/29/14) |
| p20 | من النبي الذي أُعطي الحكم صبيًا كما ورد في سورة مريم؟ | يحيى عليه السلام | [Quran](https://quran.com/19/12) |
| v12 | أكمل الآية: وما توفيقي إلا... | بالله | [Quran](https://quran.com/11/88) |
| v13 | أكمل الآية: والليل إذا... | سجى | [Quran](https://quran.com/93/2) |
| v14 | أكمل الآية: إن الله لا يغير ما بقوم حتى يغيروا ما... | بأنفسهم | [Quran](https://quran.com/13/11) |
| v15 | أكمل الآية: قل أعوذ برب... | الفلق | [Quran](https://quran.com/113/1) |
| q11 | من القائل في القرآن: رب اجعل هذا بلدًا آمنًا؟ | إبراهيم عليه السلام | [Quran](https://quran.com/2/126) |
| q12 | من القائل: هذا من فضل ربي ليبلوني أأشكر أم أكفر؟ | سليمان عليه السلام | [Quran](https://quran.com/27/40) |
| q13 | من القائل في القرآن: إنما أشكو بثي وحزني إلى الله؟ | يعقوب عليه السلام | [Quran](https://quran.com/12/86) |

Special checks:
- `p18`: Quran 12:19 depicts discovery of Yusuf at the well; earlier context in Yusuf 12:10 establishes that he was put in the well.
- `q12`: Quran 27:40 clearly narrates Sulayman's response **after** the throne was brought, despite its opening describing someone possessing knowledge of the Book.
- `x07` reuses the same Quran 2:255 passage as `g07`, but these are distinct question IDs and different question assertions.
- `g06` refers to verse 1:2 under the common verse-numbering convention that treats the basmala as verse 1; the answer remains al-Fatihah.

## Updated ledger counts
- **222** distinct `source_directly_cross_checked_in_this_audit` question IDs (100 historical + 97 non-overlapping from four recent batches + 25 new).
- **378** `source_identified_not_independently_cross_checked` question IDs.
- **2** `withheld_pending_review` records excluded from active gameplay.
- Thus 602 total records, **600 active questions**, with **222/600 = 37%** of active questions entered as source-cross-checked. This is not an external scholarly certification.

Main canonical tracker: [question-source-audit.json](../question-source-audit.json). Do not sum the separate batch counts without ID-set reconciliation.

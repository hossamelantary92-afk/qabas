# Qabas — Independent primary-text verification of the 100 newly processed questions

**Date:** 2026-11-11  
**Scope:** The 100 distinct questions processed in the four batches after the historical 100-question milestone: p31–p70 (40), g31–g45 (15), v41–v55 (15), q41–q60 (20), x31–x40 (10).  
**Code source:** `app.js` on the default branch.

## Outcome

- **100/100 existing question IDs reviewed** against accessible Quran.com Arabic verse pages, hadith text at Sunnah.com, and, where the question needs interpretation or whole-chapter evidence, primary-text context and tafsir/fiqh references.
- Significant answer correction: **q58**, attributed to Ibrahim (majority/classical exegetes), not Lut. [Tabari](https://quran.ksu.edu.sa/tafseer/tabary/sura29-aya26.html), [Baghawi](https://quran.ksu.edu.sa/tafseer/baghawy/sura29-aya26.html), [Quran.com 29:26](https://quran.com/29/26). Al-Qurtubi notes a minority attribution to Lut; the revised explanation explicitly acknowledges that alternate view.
- Exact Quran wording correction: **v52**, «وقل رب أدخلني» (17:80), not «وقل ربي أدخلني».
- Attribution/precision improvements: **p40** (the explicit good tidings to Ibrahim's wife in 11:71), **p64** (added exact wording from 21:91), **g39** (five entire surah beginnings, not just one example), **g41** (readable fiqh reference), **x34** and **x40** (whole-surah negative statement checks).
- All other inspected answers are consistent with their cited primary passages or established mushaf/jurisprudential context; no other material answer error was found in this scope.
- **Not an independent validation of the earlier historical 100-question roster.** A historical commit records 100, but old IDs have not been reconciled with this new verified set. Do not present 200 as a mathematically deduplicated unique total until that reconciliation.

## Per-ID audit register

The status **Checked** means the cited passage was accessed and the recorded answer and phrasing were compared with the relevant source text or context; the caveats above qualify interpretive cases.

| ID | Category | Question | Current answer | Verification source | Status / notes |
|---|---|---|---|---|---|
| p31 | prophets | من النبي الذي قال: رب هب لي حكمًا وألحقني بالصالحين؟ | إبراهيم عليه السلام | [Source](https://quran.com/26/83) | Checked |
| p32 | prophets | من النبي الذي قال لقومه: أتبنون بكل ريع آية تعبثون؟ | هود عليه السلام | [Source](https://quran.com/26/128) | Checked |
| p33 | prophets | من النبي الذي سخر الله معه الجبال يسبحن والطير؟ | داود عليه السلام | [Source](https://quran.com/21/79) | Checked |
| p34 | prophets | من النبي الذي ذكر القرآن أنه كان يأمر أهله بالصلاة والزكاة؟ | إسماعيل عليه السلام | [Source](https://quran.com/19/55) | Checked |
| p35 | prophets | من النبي الذي قصّ على ابنه رؤيا ذبحه في المنام؟ | إبراهيم عليه السلام | [Source](https://quran.com/37/102) | Checked |
| p36 | prophets | من النبي الذي اشتهر بصيام يوم وإفطار يوم في الحديث الصحيح؟ | داود عليه السلام | [Source](https://sunnah.com/bukhari:1976) | Checked |
| p37 | prophets | من النبي الذي خاطب فرعون بقوله لقد علمت ما أنزل هؤلاء إلا رب السماوات والأرض بصائر؟ | موسى عليه السلام | [Source](https://quran.com/17/102) | Checked |
| p38 | prophets | من النبي الذي فُهمت له قضية الحرث الذي نفشت فيه غنم القوم؟ | سليمان عليه السلام | [Source](https://quran.com/21/79) | Checked |
| p39 | prophets | من النبي الذي جاءه قومه بعجل جسد له خوار بعد غيابه؟ | موسى عليه السلام | [Source](https://quran.com/20/88) | Checked |
| p40 | prophets | من النبي الذي بُشّرت زوجته بإسحاق ومن وراء إسحاق يعقوب؟ | إبراهيم عليه السلام | [Source](https://quran.com/11/71) | Checked; rewrote to accurately describe glad tidings to Ibrahim's wife |
| p41 | prophets | من النبي الذي أُمِر أن يضرب الأرض برجله فخرج له مغتسل بارد وشراب؟ | أيوب عليه السلام | [Source](https://quran.com/38/42) | Checked |
| p42 | prophets | من النبي الذي قال لقومه: أتأتون الذكران من العالمين؟ | لوط عليه السلام | [Source](https://quran.com/26/165) | Checked |
| p43 | prophets | من النبي الذي قال لأبيه: يا أبت لم تعبد ما لا يسمع ولا يبصر؟ | إبراهيم عليه السلام | [Source](https://quran.com/19/42) | Checked |
| p44 | prophets | من النبي الذي قال بعد رؤيته الهدهد: لأعذبنه عذابًا شديدًا أو لأذبحنه؟ | سليمان عليه السلام | [Source](https://quran.com/27/21) | Checked |
| p45 | prophets | من النبي الذي قالت الملائكة في بشارته: اسمه المسيح عيسى ابن مريم؟ | عيسى عليه السلام | [Source](https://quran.com/3/45) | Checked |
| p46 | prophets | من النبي الذي قال له الله: إني جاعلك للناس إمامًا؟ | إبراهيم عليه السلام | [Source](https://quran.com/2/124) | Checked |
| p47 | prophets | من النبي الذي ورد في القرآن أن أباه قال له: لا تقصص رؤياك على إخوتك؟ | يوسف عليه السلام | [Source](https://quran.com/12/5) | Checked |
| p48 | prophets | من النبي الذي اختاره الله على الناس برسالاته وبكلامه في سورة الأعراف؟ | موسى عليه السلام | [Source](https://quran.com/7/144) | Checked |
| p49 | prophets | من النبي الذي ورد في القرآن أنه كان صديقًا نبيًا في سورة مريم عند ذكر اسمه؟ | إدريس عليه السلام | [Source](https://quran.com/19/56) | Checked |
| p50 | prophets | من النبي الذي قال في دعائه: رب أوزعني أن أشكر نعمتك التي أنعمت علي وعلى والدي؟ | سليمان عليه السلام | [Source](https://quran.com/27/19) | Checked |
| p51 | prophets | من النبي الذي دعا قومه إلى إيفاء المكيال والميزان وعدم بخس الناس أشياءهم؟ | شعيب عليه السلام | [Source](https://quran.com/11/85) | Checked |
| p52 | prophets | من النبي الذي وصفه الله في سورة مريم بأنه كان عند ربه مرضيًا؟ | إسماعيل عليه السلام | [Source](https://quran.com/19/55) | Checked |
| p53 | prophets | أي نبي ورد اسمه إلى جانب اليسع ويونس ولوط في سورة الأنعام؟ | إسماعيل عليه السلام | [Source](https://quran.com/6/86) | Checked |
| p54 | prophets | من النبي الذي خاطب قومه بقوله أتدعون بعلا وتذرون أحسن الخالقين؟ | إلياس عليه السلام | [Source](https://quran.com/37/125) | Checked |
| p55 | prophets | من النبي الذي أُعطي الإنجيل كما ورد في القرآن؟ | عيسى عليه السلام | [Source](https://quran.com/5/46) | Checked |
| p56 | prophets | من النبي الذي دعا أن يجنب بنيه عبادة الأصنام؟ | إبراهيم عليه السلام | [Source](https://quran.com/14/35) | Checked |
| p57 | prophets | من النبي الذي وصف بأنه سيد وحصور ونبي من الصالحين؟ | يحيى عليه السلام | [Source](https://quran.com/3/39) | Checked |
| p58 | prophets | من النبي الذي دعا أن ينجيه وأهله مما يعمل قومه؟ | لوط عليه السلام | [Source](https://quran.com/26/169) | Checked |
| p59 | prophets | أي نبي وصفه الله بأنه على خلق عظيم؟ | محمد ﷺ | [Source](https://quran.com/68/4) | Checked |
| p60 | prophets | من النبي الذي قال إن أريد إلا الإصلاح ما استطعت؟ | شعيب عليه السلام | [Source](https://quran.com/11/88) | Checked |
| p61 | prophets | من النبي الذي قال لقومه إني توكلت على الله ربي وربكم؟ | هود عليه السلام | [Source](https://quran.com/11/56) | Checked |
| p62 | prophets | من النبي الذي ذكر مع إسماعيل وذي الكفل في وصف الصابرين؟ | إدريس عليه السلام | [Source](https://quran.com/21/85) | Checked |
| p63 | prophets | من النبي الذي اعترفت امرأة العزيز بأنها راودته عن نفسه؟ | يوسف عليه السلام | [Source](https://quran.com/12/51) | Checked |
| p64 | prophets | من النبي الذي جعله الله مع أمه آية للعالمين؟ | عيسى عليه السلام | [Source](https://quran.com/23/50) | Checked; added 21:91 for exact 'آية للعالمين' |
| p65 | prophets | من النبي الذي قال في خاتمة سورة الأنبياء: رب احكم بالحق وربنا الرحمن المستعان؟ | محمد ﷺ | [Source](https://quran.com/21/112) | Checked |
| p66 | prophets | من النبي الذي أمره الله أن ينطلق مع أخيه بآياته ولا ينيا في ذكره؟ | موسى عليه السلام | [Source](https://quran.com/20/42) | Checked |
| p67 | prophets | من النبي الذي أخبر قوم عاد أنه لا يسألهم على دعوته أجرًا؟ | هود عليه السلام | [Source](https://quran.com/26/127) | Checked |
| p68 | prophets | من النبي الذي قال الله إنه أيده بروح القدس؟ | عيسى عليه السلام | [Source](https://quran.com/2/87) | Checked |
| p69 | prophets | من النبي الذي كانت له أخت تتبع أثره وهو رضيع؟ | موسى عليه السلام | [Source](https://quran.com/28/11) | Checked |
| p70 | prophets | من النبي الذي قيل له اهبط بسلام منا وبركات عليك؟ | نوح عليه السلام | [Source](https://quran.com/11/48) | Checked |
| g31 | general | ما اسم السورة التي تأتي بعد الفاتحة في ترتيب المصحف؟ | سورة البقرة | [Source](https://quran.com/2/1) | Checked |
| g32 | general | في أي سورة وردت قصة أصحاب الفيل؟ | سورة الفيل | [Source](https://quran.com/105/1) | Checked |
| g33 | general | ما السورة التي تبدأ بقوله: هل أتى على الإنسان حين من الدهر لم يكن شيئًا مذكورًا؟ | سورة الإنسان | [Source](https://quran.com/76/1) | Checked |
| g34 | general | في أي سورة وردت الآية: فويل للمصلين الذين هم عن صلاتهم ساهون؟ | سورة الماعون | [Source](https://quran.com/107/4) | Checked |
| g35 | general | ما اسم السورة التي تبدأ بقوله: ألهاكم التكاثر؟ | سورة التكاثر | [Source](https://quran.com/102/1) | Checked |
| g36 | general | كم عدد ركعات صلاة المغرب المفروضة؟ | ثلاث ركعات | [Source](https://sunnah.com/bukhari:1091) | Checked |
| g37 | general | ما اسم الصلاة التي يطلب فيها المسلم المطر عند الجدب؟ | صلاة الاستسقاء | [Source](https://sunnah.com/bukhari:1012) | Checked |
| g38 | general | ما السورة التي تبدأ بقوله: إنا فتحنا لك فتحًا مبينًا؟ | سورة الفتح | [Source](https://quran.com/48/1) | Checked |
| g39 | general | كم عدد السور التي تبدأ بكلمة قل؟ | خمس سور | [Source](https://quran.com/72/1) | Checked; verified using the five surah opening verses |
| g40 | general | ما السورة التي وردت فيها قصة أصحاب السبت؟ | سورة الأعراف | [Source](https://quran.com/7/163) | Checked |
| g41 | general | كم عدد ركعات صلاة العشاء المفروضة؟ | أربع ركعات | [Source](https://ketabonline.com/ar/books/4641/read?index=1036256%2F1036320%2F1036335%2F1036345&page=88&part=1) | Checked; replaced PDF citation with directly readable jurisprudential source |
| g42 | general | ما اسم السورة التي تقع بين الكهف وطه في ترتيب المصحف؟ | سورة مريم | [Source](https://quran.com/19/1) | Checked |
| g43 | general | ما السورة التي ورد فيها مثل النور والمشكاة والمصباح؟ | سورة النور | [Source](https://quran.com/24/35) | Checked |
| g44 | general | كم عدد آيات سورة الكوثر؟ | ثلاث آيات | [Source](https://quran.com/108/1) | Checked |
| g45 | general | في أي سورة ورد الأمر: وأقيموا الوزن بالقسط ولا تخسروا الميزان؟ | سورة الرحمن | [Source](https://quran.com/55/9) | Checked |
| v41 | verse | أكمل الآية: أرأيت الذي يكذب... | بالدين | [Source](https://quran.com/107/1) | Checked |
| v42 | verse | أكمل الآية: إن الله يأمر بالعدل والإحسان وإيتاء ذي... | القربى | [Source](https://quran.com/16/90) | Checked |
| v43 | verse | أكمل الآية: وقل رب ارحمهما كما ربياني... | صغيرًا | [Source](https://quran.com/17/24) | Checked |
| v44 | verse | أكمل الآية: وكل نفس ذائقة... | الموت | [Source](https://quran.com/3/185) | Checked |
| v45 | verse | أكمل الآية: فمن يعمل مثقال ذرة خيرًا... | يره | [Source](https://quran.com/99/7) | Checked |
| v46 | verse | أكمل الآية: قل هو الله أحد الله... | الصمد | [Source](https://quran.com/112/2) | Checked |
| v47 | verse | أكمل الآية: ولا تمش في الأرض... | مرحًا | [Source](https://quran.com/17/37) | Checked |
| v48 | verse | أكمل الآية: وما خلقت الجن والإنس إلا... | ليعبدون | [Source](https://quran.com/51/56) | Checked |
| v49 | verse | أكمل الآية: إنما المؤمنون... | إخوة | [Source](https://quran.com/49/10) | Checked |
| v50 | verse | أكمل الآية: لم يلد ولم... | يولد | [Source](https://quran.com/112/3) | Checked |
| v51 | verse | أكمل الآية: إنا أنزلناه في ليلة... | القدر | [Source](https://quran.com/97/1) | Checked |
| v52 | verse | أكمل الآية: وقل رب أدخلني مدخل صدق وأخرجني مخرج... | صدق | [Source](https://quran.com/17/80) | Checked; removed inaccurate ي in رب |
| v53 | verse | أكمل الآية: قد أفلح من... | تزكى | [Source](https://quran.com/87/14) | Checked |
| v54 | verse | أكمل الآية: إن الأبرار لفي... | نعيم | [Source](https://quran.com/82/13) | Checked |
| v55 | verse | أكمل الآية: والله غالب على... | أمره | [Source](https://quran.com/12/21) | Checked |
| q41 | quotes | من القائل في القرآن: ربنا أفرغ علينا صبرًا وتوفنا مسلمين؟ | سحرة فرعون بعد إيمانهم | [Source](https://quran.com/7/126) | Checked |
| q42 | quotes | من القائل في القرآن: إن الله اصطفاه عليكم وزاده بسطة في العلم والجسم؟ | نبي بني إسرائيل | [Source](https://quran.com/2/247) | Checked |
| q43 | quotes | من القائل في القرآن: رب اجعلني مقيم الصلاة ومن ذريتي؟ | إبراهيم عليه السلام | [Source](https://quran.com/14/40) | Checked |
| q44 | quotes | من القائل في القرآن: إني أخاف أن يكذبون؟ | موسى عليه السلام | [Source](https://quran.com/26/12) | Checked |
| q45 | quotes | من القائل في القرآن: إني آمنت بربكم فاسمعون؟ | الرجل المؤمن في سورة يس | [Source](https://quran.com/36/25) | Checked |
| q46 | quotes | من القائل في القرآن: يا ليتني قدمت لحياتي؟ | الإنسان يوم القيامة | [Source](https://quran.com/89/24) | Checked |
| q47 | quotes | من القائل في القرآن: يا ليتني مت قبل هذا وكنت نسيًا منسيًا؟ | مريم عليها السلام | [Source](https://quran.com/19/23) | Checked |
| q48 | quotes | من القائل في القرآن: إنني أنا الله لا إله إلا أنا فاعبدني؟ | الله سبحانه وتعالى | [Source](https://quran.com/20/14) | Checked |
| q49 | quotes | من القائل في القرآن: يا قوم اتبعون أهدكم سبيل الرشاد؟ | الرجل المؤمن من آل فرعون | [Source](https://quran.com/40/38) | Checked |
| q50 | quotes | من القائل في القرآن: قال رب إني مغلوب فانتصر؟ | نوح عليه السلام | [Source](https://quran.com/54/10) | Checked |
| q51 | quotes | من القائل: لا تخافا إنني معكما أسمع وأرى؟ | الله سبحانه وتعالى | [Source](https://quran.com/20/46) | Checked |
| q52 | quotes | من القائل في القرآن: يا قوم ادخلوا الأرض المقدسة التي كتب الله لكم؟ | موسى عليه السلام | [Source](https://quran.com/5/21) | Checked |
| q53 | quotes | من القائل في القرآن: هذا خلق الله فأروني ماذا خلق الذين من دونه؟ | الله سبحانه وتعالى | [Source](https://quran.com/31/11) | Checked |
| q54 | quotes | من القائل: إن الله مبتليكم بنهر؟ | طالوت | [Source](https://quran.com/2/249) | Checked |
| q55 | quotes | من القائل: رب إني لا أملك إلا نفسي وأخي؟ | موسى عليه السلام | [Source](https://quran.com/5/25) | Checked |
| q56 | quotes | من القائل: يا بني اركب معنا ولا تكن مع الكافرين؟ | نوح عليه السلام | [Source](https://quran.com/11/42) | Checked |
| q57 | quotes | من القائل: هذا تأويل رؤياي من قبل قد جعلها ربي حقًا؟ | يوسف عليه السلام | [Source](https://quran.com/12/100) | Checked |
| q58 | quotes | من القائل: إني مهاجر إلى ربي إنه هو العزيز الحكيم؟ | إبراهيم عليه السلام | [Source](https://quran.com/29/26) | Checked; corrected answer from Lut to Ibrahim after classical tafsir comparison |
| q59 | quotes | من الذي قيل له: فاذهب فإن لك في الحياة أن تقول لا مساس؟ | السامري | [Source](https://quran.com/20/97) | Checked |
| q60 | quotes | من القائل: وأفوض أمري إلى الله إن الله بصير بالعباد؟ | الرجل المؤمن من آل فرعون | [Source](https://quran.com/40/44) | Checked |
| x31 | correct | صح أم خطأ: ورد ذكر العنكبوت في سورة تحمل اسمه. | صحيح | [Source](https://quran.com/29/41) | Checked |
| x32 | correct | صح أم خطأ: نزلت سورة الفيل لشرح قصة أصحاب الكهف. | خطأ، تتناول أصحاب الفيل | [Source](https://quran.com/105/1) | Checked |
| x33 | correct | صح أم خطأ: ذُكر اسم فرعون صراحة في القرآن الكريم. | صحيح | [Source](https://quran.com/28/4) | Checked |
| x34 | correct | صح أم خطأ: جاء ذكر اسم يحيى صراحة في سورة الكهف. | خطأ، جاء في سورة مريم | [Source](https://quran.com/19/7) | Checked; checked full al-Kahf for absent Yahya |
| x35 | correct | صح أم خطأ: ذكرت سورة الأعراف أصحاب الأعراف صراحة. | صحيح | [Source](https://quran.com/7/46) | Checked |
| x36 | correct | صح أم خطأ: افتتحت سورة التين بالقسم بالتين والزيتون. | صحيح | [Source](https://quran.com/95/1) | Checked |
| x37 | correct | صح أم خطأ: وردت قصة موسى والخضر في سورة الكهف. | صحيح | [Source](https://quran.com/18/60) | Checked |
| x38 | correct | صح أم خطأ: سورة الملك في الجزء الثلاثين من القرآن. | خطأ، في الجزء التاسع والعشرين | [Source](https://quran.com/67/1) | Checked |
| x39 | correct | صح أم خطأ: ذكر القرآن أن قارون كان من قوم عاد. | خطأ، من قوم موسى | [Source](https://quran.com/28/76) | Checked |
| x40 | correct | صح أم خطأ: ذكرت سورة النجم اسم نجم سهيل صراحة. | خطأ، ذكرت الشعرى | [Source](https://quran.com/53/49) | Checked; checked full al-Najm for absent Suhayl |

## Independent contextual checks
- **g31/g42**: Mushaf order, not just text of a single cited verse.
- **g39**: Five surah openings: [72:1](https://quran.com/72/1), [109:1](https://quran.com/109/1), [112:1](https://quran.com/112/1), [113:1](https://quran.com/113/1), [114:1](https://quran.com/114/1).
- **g44**: Three verses of Surat al-Kawthar, not deducible from the first verse alone.
- **x34**: Full Surat [al-Kahf](https://quran.com/ar/al-kahf) checked for absence of Yahya.
- **x38**: Juz number taken from Quran.com metadata of [67:1](https://quran.com/67/1).
- **x40**: Full Surat [an-Najm](https://quran.com/ar/an-najm) checked for absence of the name Suhayl; verse 53:49 explicitly mentions Shi'ra.
- **g36**: [Bukhari 1091–1092](https://sunnah.com/bukhari:1091) names three rakaat of Maghrib even on a journey.
- **g37**: [Bukhari 1012](https://sunnah.com/bukhari:1012) states the Prophet prayed two rakaat of istisqa.
- **g41**: [Al-Mawsua al-Fiqhiyya](https://ketabonline.com/ar/books/4641/read?index=1036256%2F1036320%2F1036335%2F1036345&page=88&part=1) confirms Isha four rak'ahs under usual non-travel conditions.

## Next recommended action
Reconcile the historical audit's **first 100 question IDs** to make an exact unique number (and check the 602-question code rows against the intended bank of 600). Preserve this log as the canonical register for the second set of 100.

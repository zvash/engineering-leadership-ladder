(function () {
  "use strict";
  var G = window.ELG, L = G.L, t = G.t, md = G.md, icon = G.icon, UI = G.ui;
  var KEY = "scen.v1";

  var C = {
    eyebrow: L("Practice", "تمرین"),
    title: L("What would you do?", "شما چه می‌کردید؟"),
    lede: L(
      "Sixteen situations managers actually face. Choose a response and see what level of thinking each option reflects — and what a strong answer looks like.",
      "شانزده موقعیتی که مدیران واقعاً با آن روبه‌رو می‌شوند. یک پاسخ را انتخاب کنید و ببینید هر گزینه نشان‌دهنده‌ی چه سطحی از تفکر است و یک پاسخ قوی چه شکلی دارد."
    ),
    tldr: [
      L("There is rarely one right answer, but there are **clearly stronger** ones.", "به‌ندرت فقط یک پاسخ درست وجود دارد، اما پاسخ‌های **آشکارا قوی‌تر** وجود دارد."),
      L("Strong answers usually **diagnose first**, make **trade-offs explicit**, and **build a mechanism** so the problem stays solved.", "پاسخ‌های قوی معمولاً **اول تشخیص می‌دهند**، **trade-offها را صریح می‌کنند** و **سازوکاری می‌سازند** تا مسئله حل‌شده باقی بماند."),
      L("Use them in team sessions: ask each manager to pick, then discuss the differences.", "از این سناریوها در جلسات تیمی استفاده کنید: از هر مدیر بخواهید انتخاب کند و سپس درباره‌ی تفاوت‌ها گفت‌وگو کنید.")
    ],
    filterLevel: L("Level", "سطح"), filterDim: L("Dimension", "بُعد"), hiring: L("Hiring", "استخدام"),
    progress: L("answered", "پاسخ داده شده"), strongCount: L("matched the strongest response", "با قوی‌ترین پاسخ هم‌خوان بود"),
    pick: L("Pick the response closest to what you would really do:", "پاسخی را انتخاب کنید که به کار واقعی شما نزدیک‌تر است:"),
    lesson: L("The lesson", "درس این سناریو"),
    reflects: L("Reflects", "نشان‌دهنده‌ی"),
    verdict: { best: L("Strongest", "قوی‌ترین"), good: L("Reasonable", "قابل قبول"), mid: L("Partial", "ناقص"), low: L("Risky", "پرریسک") },
    again: L("Choose again", "انتخاب دوباره"),
    nextScen: L("Next scenario", "سناریوی بعدی"),
    done: L("Answered", "پاسخ داده شده"),
    empty: L("No scenarios match these filters.", "هیچ سناریویی با این فیلترها مطابقت ندارد."),
    resetAll: L("Clear my answers", "پاک کردن پاسخ‌هایم"),
    next: L("Toolkit: templates and checklists", "جعبه‌ابزار: قالب‌ها و چک‌لیست‌ها")
  };

  /* verdict: best | good | mid | low ; r = level of thinking it reflects */
  var S = [
    { id: "s1", lv: "A", dims: ["team", "people"], t: L("The peer who wanted your job", "هم‌تایی که این نقش را می‌خواست"),
      sit: L("You became acting manager of your team two weeks ago. Omid, a peer who also applied for the role, has openly questioned your decisions in standup twice this week. The rest of the team is watching how you react.", "دو هفته است مدیر دوره‌ی آزمایشی تیم خودتان شده‌اید. امید، هم‌تایی که او هم برای این نقش درخواست داده بود، این هفته دو بار در standup آشکارا تصمیمات شما را زیر سؤال برده است. بقیه‌ی تیم منتظرند ببینند چه واکنشی نشان می‌دهید."),
      q: L("What do you do?", "چه می‌کنید؟"),
      o: [
        { x: L("Correct Omid firmly in the next standup so the team sees who is in charge.", "در standup بعدی قاطعانه به امید تذکر می‌دهید تا تیم ببیند چه کسی مسئول است."), v: "low", r: L("Positional authority", "اتکا به اختیار رسمی"), f: L("Public correction may win the moment but costs trust — with Omid and with everyone watching.", "تذکر علنی شاید همان لحظه جواب دهد، اما اعتماد را هزینه می‌کند؛ هم نزد امید و هم نزد همه‌ی کسانی که نظاره‌گرند.") },
        { x: L("Ignore it. It will fade as people get used to you.", "نادیده می‌گیرید؛ با عادت کردن افراد به شما از بین می‌رود."), v: "low", r: L("Avoidance", "اجتناب"), f: L("Unaddressed resentment rarely fades; it usually finds an audience.", "دلخوری‌ای که به آن پرداخته نشود به‌ندرت از بین می‌رود؛ معمولاً مخاطب پیدا می‌کند.") },
        { x: L("Meet Omid privately: acknowledge the disappointment, ask what they would do differently, and hand them ownership of an area they care about.", "به‌صورت خصوصی با امید صحبت می‌کنید: ناامیدی‌اش را به رسمیت می‌شناسید، می‌پرسید چه کاری را متفاوت انجام می‌داد و مالکیت حوزه‌ای را که برایش مهم است به او می‌سپارید."), v: "best", r: L("Solid new manager (M2)", "مدیر تازه‌کار قوی (M2)"), f: L("You earn acceptance in private and turn a rival into an owner. Their input is real information about the team.", "پذیرش را در گفت‌وگوی خصوصی به دست می‌آورید و یک رقیب را به مالک یک حوزه تبدیل می‌کنید. نظر او اطلاعات واقعی درباره‌ی تیم است.") },
        { x: L("Ask your manager to talk to Omid.", "از مدیر ارشدتان می‌خواهید با امید صحبت کند."), v: "mid", r: L("Early escalation", "escalate زودهنگام"), f: L("Your manager should know, but asking them to fix it signals that you cannot. Handle it first, then brief them.", "مدیرتان باید در جریان باشد، اما سپردن حل مسئله به او این پیام را می‌دهد که خودتان از پسش برنمی‌آیید. ابتدا خودتان رسیدگی کنید و سپس او را در جریان بگذارید.") }
      ],
      les: L("Acceptance as a leader is earned in private conversations, not public corrections. Giving a disappointed peer real ownership is one of the most reliable first-quarter moves.", "پذیرش شما به عنوان راهبر در گفت‌وگوهای خصوصی به دست می‌آید، نه با تذکرهای علنی. سپردن مالکیت واقعی به هم‌تای ناامید، یکی از مطمئن‌ترین اقدامات در فصل نخست است.") },

    { id: "s2", lv: "M2", dims: ["delivery"], t: L("Cut testing to hit the date?", "حذف تست برای رسیدن به موعد؟"),
      sit: L("Launch is in ten days. The PM wants to skip the integration-test suite to save three days. Last quarter, a skipped test caused a payment outage that took a day to recover from.", "ده روز تا launch مانده است. PM می‌خواهد مجموعه‌ی integration testها را حذف کند تا سه روز صرفه‌جویی شود. فصل گذشته، حذف یک تست باعث قطعی پرداخت شد که بازیابی آن یک روز طول کشید."),
      q: L("How do you respond?", "چه پاسخی می‌دهید؟"),
      o: [
        { x: L("Agree — the PM owns the date.", "موافقت می‌کنید؛ مالک موعد، PM است."), v: "low", r: L("Abdicating quality", "واگذاری مسئولیت کیفیت"), f: L("Quality and operations are the EM's to own. Deferring here repeats last quarter's outage.", "کیفیت و عملیات مسئولیت EM است. کوتاه آمدن در این‌جا یعنی تکرار قطعی فصل گذشته.") },
        { x: L("Refuse and move the date, without discussing alternatives.", "مخالفت می‌کنید و بدون بررسی گزینه‌های دیگر، موعد را عقب می‌اندازید."), v: "mid", r: L("Right instinct, wrong process", "غریزه‌ی درست، فرآیند نادرست"), f: L("Protecting quality is right; making it a veto instead of a trade-off damages the partnership.", "دفاع از کیفیت درست است؛ اما تبدیل آن به حق وتو به جای trade-off، به همکاری آسیب می‌زند.") },
        { x: L("Offer options: a smaller scope with full testing, or a phased rollout behind a flag with the risky path tested. Write down the risk and agree it with the PM and stakeholders.", "گزینه‌ها را پیشنهاد می‌دهید: دامنه‌ی کوچک‌تر با تست کامل، یا انتشار مرحله‌ای پشت feature flag با تست کامل مسیر پرریسک. ریسک را مکتوب و با PM و ذی‌نفعان توافق می‌کنید."), v: "best", r: L("Strong EM (M2)", "EM قوی (M2)"), f: L("You own quality, keep the date conversation open, and make the trade-off explicit and shared.", "مالکیت کیفیت را حفظ می‌کنید، گفت‌وگو درباره‌ی موعد را باز نگه می‌دارید و trade-off را صریح و مشترک می‌کنید.") },
        { x: L("Ask the team to work the weekend to do both.", "از تیم می‌خواهید آخر هفته کار کند تا هر دو انجام شود."), v: "low", r: L("Hiding the trade-off", "پنهان کردن trade-off"), f: L("Weekend heroics hide the real cost and teach everyone that dates are fixed and people are elastic.", "قهرمان‌بازی آخر هفته، هزینه‌ی واقعی را پنهان می‌کند و به همه یاد می‌دهد که موعدها ثابت‌اند و آدم‌ها کش می‌آیند.") }
      ],
      les: L("A strong EM never trades quality away silently. Turn 'yes or no' into options with explicit risk, and let the decision be shared.", "یک EM قوی هرگز کیفیت را بی‌صدا معامله نمی‌کند. «بله یا نه» را به گزینه‌هایی با ریسک صریح تبدیل کنید و تصمیم را مشترک کنید.") },

    { id: "s3", lv: "M2", dims: ["people"], t: L("Two months of slipping", "دو ماه افت عملکرد"),
      sit: L("Tara, a solid mid-level engineer, has missed estimates repeatedly for two months, and recent code reviews show rushed work. Tara hasn't raised anything in 1:1s.", "تارا، یک مهندس میانی خوب، دو ماه است که مدام از برآوردهایش عقب می‌ماند و code reviewهای اخیر نشان از کار عجولانه دارد. تارا در جلسات ۱:۱ چیزی مطرح نکرده است."),
      q: L("What is your next step?", "قدم بعدی شما چیست؟"),
      o: [
        { x: L("Wait for the performance review, where it will be documented.", "صبر می‌کنید تا در ارزیابی عملکرد مستند شود."), v: "low", r: L("Review-time surprise", "غافل‌گیری در ارزیابی"), f: L("Feedback should never be a surprise at review time. Two months of silence already costs Tara the chance to correct.", "بازخورد هرگز نباید در زمان ارزیابی غافل‌گیرکننده باشد. دو ماه سکوت، فرصت اصلاح را از تارا گرفته است.") },
        { x: L("Talk this week: share specific examples of what you saw and its effect, ask what is going on, agree on clear expectations, and check in again in two weeks.", "همین هفته صحبت می‌کنید: نمونه‌های مشخصی از آن‌چه دیده‌اید و اثرش را مطرح می‌کنید، می‌پرسید چه اتفاقی افتاده، درباره‌ی انتظارات روشن توافق می‌کنید و دو هفته بعد دوباره بررسی می‌کنید."), v: "best", r: L("Strong EM (M2)", "EM قوی (M2)"), f: L("Specific, timely and curious. You diagnose — skill, clarity, motivation or something outside work — before you prescribe.", "مشخص، به‌موقع و کنجکاوانه. پیش از تجویز، تشخیص می‌دهید: مهارت، شفافیت، انگیزه یا مسئله‌ای بیرون از کار.") },
        { x: L("Quietly move Tara's work to others.", "بی‌سروصدا کارهای تارا را به دیگران می‌سپارید."), v: "low", r: L("Avoidance", "اجتناب"), f: L("Unfair to the team and to Tara, who never learns there is a problem.", "هم نسبت به تیم ناعادلانه است و هم نسبت به تارا، که هرگز متوجه وجود مشکل نمی‌شود.") },
        { x: L("Start a formal performance-improvement plan immediately.", "بلافاصله یک برنامه‌ی رسمی بهبود عملکرد (PIP) شروع می‌کنید."), v: "mid", r: L("Process before diagnosis", "فرآیند پیش از تشخیص"), f: L("Formal steps may come later, but starting there skips the conversation that could fix it.", "گام‌های رسمی ممکن است بعداً لازم شوند، اما شروع از آن‌جا، گفت‌وگویی را که می‌توانست مسئله را حل کند حذف می‌کند.") }
      ],
      les: L("Diagnose before you prescribe. A short, specific conversation (situation, behaviour, impact) plus a follow-up date solves more performance issues than any formal process.", "پیش از تجویز، تشخیص دهید. یک گفت‌وگوی کوتاه و مشخص (موقعیت، رفتار، اثر) همراه با تاریخ پیگیری، بیش از هر فرآیند رسمی مسائل عملکردی را حل می‌کند.") },

    { id: "s4", lv: "M2", dims: ["team", "delivery"], t: L("On-call is burning the team", "on-call تیم را فرسوده کرده است"),
      sit: L("Last week the team was paged three times a night. Two engineers told you they are exhausted. The roadmap for the quarter is already full.", "هفته‌ی گذشته تیم هر شب سه بار هشدار on-call گرفت. دو مهندس به شما گفته‌اند خسته و فرسوده‌اند. نقشه‌ی راه این فصل هم کاملاً پر است."),
      q: L("What do you do?", "چه می‌کنید؟"),
      o: [
        { x: L("Take on-call yourself for the next two weeks.", "دو هفته‌ی آینده on-call را خودتان بر عهده می‌گیرید."), v: "mid", r: L("Heroics", "قهرمان‌بازی"), f: L("It relieves people briefly but fixes nothing, and makes you the bottleneck.", "برای مدت کوتاهی فشار را کم می‌کند، اما چیزی را حل نمی‌کند و شما را گلوگاه می‌کند.") },
        { x: L("Pause one roadmap item, spend a sprint on the noisiest alerts, agree the trade-off with the PM and your manager, and track pages per week.", "یک مورد از نقشه‌ی راه را متوقف می‌کنید، یک sprint را صرف پرسروصداترین هشدارها می‌کنید، trade-off را با PM و مدیرتان توافق می‌کنید و تعداد هشدارهای هفتگی را پایش می‌کنید."), v: "best", r: L("Strong EM (M2–M3)", "EM قوی (M2 تا M3)"), f: L("Sense of urgency for operations, a visible trade-off, and a metric that proves it worked.", "احساس فوریت برای عملیات، یک trade-off آشکار و یک metric که موفقیت را اثبات می‌کند.") },
        { x: L("Ask for more headcount.", "درخواست نیروی بیشتر می‌دهید."), v: "mid", r: L("Slow fix", "راه‌حل کند"), f: L("It may be needed, but hiring takes months and the pain is now.", "ممکن است لازم باشد، اما جذب ماه‌ها طول می‌کشد و درد همین حالاست.") },
        { x: L("Explain that on-call is part of the job.", "توضیح می‌دهید که on-call بخشی از کار است."), v: "low", r: L("Dismissing well-being", "نادیده گرفتن به‌زیستی"), f: L("True in principle, harmful in practice. Burnout is a management problem, not a personal weakness.", "در اصل درست است، در عمل آسیب‌زا. فرسودگی شغلی یک مسئله‌ی مدیریتی است، نه ضعف شخصی.") }
      ],
      les: L("Treat operational pain as a delivery problem with a trade-off, not as a test of stamina. Measure it, fund the fix, and tell people what you paused.", "درد عملیاتی را یک مسئله‌ی delivery همراه با trade-off ببینید، نه آزمون تحمل. آن را بسنجید، برای رفعش منابع بگذارید و به همه بگویید چه چیزی را متوقف کرده‌اید.") },

    { id: "s5", lv: "M3", dims: ["delivery", "team"], t: L("Another team's change hurts your users", "تغییر تیمی دیگر به کاربران شما آسیب می‌زند"),
      sit: L("A partner team's caching change is causing intermittent checkout errors for your users. When you raised it, they said it is low priority for them this sprint.", "تغییری در cache یک تیم هم‌کار باعث خطاهای متناوب در checkout کاربران شما شده است. وقتی موضوع را مطرح کردید، گفتند در این sprint اولویت پایینی برایشان دارد."),
      q: L("What do you do?", "چه می‌کنید؟"),
      o: [
        { x: L("Escalate to both directors right away.", "بلافاصله موضوع را به Director هر دو تیم escalate می‌کنید."), v: "mid", r: L("Escalation first", "اول escalate"), f: L("Escalation has its place, but leading with it — before offering a solution — costs you a relationship you will need again.", "escalate کردن جای خودش را دارد، اما شروع کردن با آن، پیش از ارائه‌ی راه‌حل، رابطه‌ای را که دوباره به آن نیاز خواهید داشت هزینه می‌کند.") },
        { x: L("Wait. It is their service.", "صبر می‌کنید؛ سرویس مال آن‌هاست."), v: "low", r: L("Service-boundary thinking", "تفکر محدود به مرز سرویس"), f: L("Your users do not care whose service it is. Ownership of their experience does not stop at your boundary.", "برای کاربران شما مهم نیست سرویس مال کیست. مالکیت تجربه‌ی آن‌ها در مرز سرویس شما متوقف نمی‌شود.") },
        { x: L("Propose a joint fix: your team ships a mitigation now, you pair with their lead on the root cause, and you add a contract test both teams own.", "یک راه‌حل مشترک پیشنهاد می‌دهید: تیم شما همین حالا یک راه‌کار موقت منتشر می‌کند، با راهبر فنی آن‌ها روی ریشه‌ی مشکل کار می‌کنید و یک contract test اضافه می‌کنید که مالکیتش با هر دو تیم است."), v: "best", r: L("Self-directed EM (M3)", "EM مستقل (M3)"), f: L("You fix user risk regardless of ownership, strengthen the relationship, and leave a mechanism behind.", "ریسک کاربر را صرف‌نظر از مالکیت سرویس رفع می‌کنید، رابطه را تقویت می‌کنید و یک سازوکار ماندگار به جا می‌گذارید.") },
        { x: L("Have your team patch around it permanently.", "از تیمتان می‌خواهید یک راه‌حل دائمی دورزننده بسازد."), v: "mid", r: L("Local fix", "راه‌حل محلی"), f: L("It helps your users today but hides a systemic problem that will bite someone else.", "امروز به کاربرانتان کمک می‌کند، اما یک مشکل سیستمی را پنهان می‌کند که به کس دیگری آسیب خواهد زد.") }
      ],
      les: L("From M3 up, user experience is yours even when the cause is not. The strongest move fixes the symptom now, the cause together, and the class of problem for good.", "از سطح M3 به بالا، تجربه‌ی کاربر مسئولیت شماست، حتی وقتی ریشه‌ی مشکل در جای دیگری است. قوی‌ترین اقدام، نشانه را همین حالا، ریشه را به‌صورت مشترک و کلِ آن دسته از مشکلات را برای همیشه حل می‌کند.") },

    { id: "s6", lv: "M3", dims: ["people"], t: L("A promotion ask that is not ready", "درخواست ارتقایی که هنوز آماده نیست"),
      sit: L("Dara asks to be put forward for senior this cycle. Dara is a strong coder but has not led a project or influenced anything beyond their own tasks.", "دارا می‌خواهد در این دوره برای سطح ارشد معرفی شود. دارا کدنویس قوی‌ای است، اما هنوز پروژه‌ای را راهبری نکرده و فراتر از taskهای خودش اثری نگذاشته است."),
      q: L("How do you respond?", "چه پاسخی می‌دهید؟"),
      o: [
        { x: L("Say you will try, and put Dara forward anyway.", "می‌گویید تلاشتان را می‌کنید و در هر صورت دارا را معرفی می‌کنید."), v: "low", r: L("Avoiding the hard talk", "فرار از گفت‌وگوی سخت"), f: L("Setting someone up for a predictable 'no' damages trust in you and in the process.", "کشاندن کسی به یک «نه»ی قابل پیش‌بینی، اعتماد به شما و به فرآیند را از بین می‌برد.") },
        { x: L("Say no — Dara is not ready.", "می‌گویید نه؛ دارا هنوز آماده نیست."), v: "mid", r: L("Honest but not growth-oriented", "صادقانه، اما بدون جهت رشد"), f: L("Honest, but it gives Dara nothing to work with.", "صادقانه است، اما هیچ مسیری برای کار کردن به دارا نمی‌دهد.") },
        { x: L("Walk through the next-level expectations with specific gaps, agree on a stretch project that would produce the evidence, set checkpoints — and be honest that this cycle is unlikely.", "انتظارات سطح بعد و شکاف‌های مشخص را با هم مرور می‌کنید، روی یک پروژه‌ی فراتر از سطح که شواهد لازم را بسازد توافق می‌کنید، نقاط پایش تعیین می‌کنید و صادقانه می‌گویید که این دوره بعید است."), v: "best", r: L("Self-directed EM (M3)", "EM مستقل (M3)"), f: L("Clear, honest and useful. You link growth, performance and level — exactly what M3 asks for.", "روشن، صادقانه و کاربردی. رشد، عملکرد و سطح را به هم پیوند می‌دهید؛ دقیقاً همان چیزی که سطح M3 می‌خواهد.") },
        { x: L("Explain that promotions are out of your hands.", "توضیح می‌دهید که ارتقا در اختیار شما نیست."), v: "low", r: L("Abdicating", "شانه خالی کردن"), f: L("Rarely true, and it tells Dara you will not advocate for them.", "به‌ندرت درست است و به دارا می‌گوید که از او حمایت نخواهید کرد.") }
      ],
      les: L("Growth conversations work when the gap is specific and there is a path to close it. 'Not yet, and here is how' beats both 'yes' and 'no'.", "گفت‌وگوی رشد وقتی جواب می‌دهد که شکاف مشخص باشد و مسیری برای پر کردنش وجود داشته باشد. «هنوز نه، و راهش این است» از «بله» و «نه» هر دو بهتر است.") },

    { id: "s7", lv: "M3", dims: ["team"], t: L("Two senior engineers, two architectures", "دو مهندس ارشد، دو معماری"),
      sit: L("Your team has split into camps over event-driven versus synchronous APIs for a new service. The design review has stalled for three weeks and people have started to take it personally.", "تیم شما بر سر انتخاب معماری رویدادمحور یا APIهای هم‌زمان برای یک سرویس جدید دو دسته شده است. design review سه هفته است متوقف مانده و افراد کم‌کم موضوع را شخصی کرده‌اند."),
      q: L("How do you unblock it?", "چگونه گره را باز می‌کنید؟"),
      o: [
        { x: L("Decide yourself and move on.", "خودتان تصمیم می‌گیرید و جلو می‌روید."), v: "mid", r: L("Fast, but no process", "سریع، اما بدون فرآیند"), f: L("Sometimes right for a reversible decision, but the losing camp learns their input does not matter.", "برای تصمیم برگشت‌پذیر گاهی درست است، اما گروه بازنده یاد می‌گیرد نظرش اهمیتی ندارد.") },
        { x: L("Let them keep debating until they reach consensus.", "اجازه می‌دهید تا رسیدن به اجماع بحث ادامه یابد."), v: "low", r: L("Avoiding the decision", "اجتناب از تصمیم"), f: L("Consensus is not a requirement. Three stalled weeks already cost delivery and morale.", "اجماع الزامی نیست. سه هفته توقف، پیش‌تر به delivery و روحیه آسیب زده است.") },
        { x: L("Agree decision criteria with both (latency, operability, team skills), time-box a spike, name a decision owner, and ask everyone to disagree and commit.", "با هر دو طرف روی معیارهای تصمیم (latency، قابلیت بهره‌برداری، مهارت تیم) توافق می‌کنید، یک spike زمان‌دار تعریف می‌کنید، مالک تصمیم را مشخص می‌کنید و از همه می‌خواهید «مخالفت کنند و متعهد شوند»."), v: "best", r: L("M3 to M4 thinking", "تفکر M3 رو به M4"), f: L("A fair process with clear criteria keeps safety intact and produces a decision people can commit to.", "یک فرآیند منصفانه با معیارهای روشن، ایمنی روانی را حفظ می‌کند و به تصمیمی می‌رسد که افراد به آن متعهد می‌شوند.") },
        { x: L("Bring in an external architect to decide.", "یک معمار بیرونی می‌آورید تا تصمیم بگیرد."), v: "mid", r: L("Outsourcing judgment", "برون‌سپاری قضاوت"), f: L("Useful as input, but it signals the team cannot decide for itself.", "به عنوان ورودی مفید است، اما این پیام را می‌دهد که تیم خودش توان تصمیم‌گیری ندارد.") }
      ],
      les: L("Disagreement is healthy; stalled disagreement is a management failure. Criteria, a time-box and a named owner turn a feud into a decision.", "اختلاف نظر سالم است؛ اختلافی که به توقف برسد، شکست مدیریتی است. معیارها، زمان‌بندی و مالک مشخص، یک دعوا را به یک تصمیم تبدیل می‌کنند.") },

    { id: "s8", lv: "M4", dims: ["delivery"], t: L("\"Deliver 30% faster\"", "«۳۰٪ سریع‌تر deliver کنید»"),
      sit: L("Your director asks your three teams to deliver 30% faster next quarter. The teams are already stretched, and you suspect the real bottleneck is not effort.", "Director شما از سه تیم‌تان می‌خواهد فصل آینده ۳۰٪ سریع‌تر deliver کنند. تیم‌ها همین حالا هم تحت فشارند و شما گمان می‌کنید گلوگاه واقعی، میزان تلاش نیست."),
      q: L("What do you do?", "چه می‌کنید؟"),
      o: [
        { x: L("Accept and push the teams harder.", "می‌پذیرید و به تیم‌ها فشار بیشتری می‌آورید."), v: "low", r: L("Pass-through manager", "مدیرِ انتقال‌دهنده"), f: L("Passing pressure down without shaping it is the opposite of senior management.", "انتقال فشار به پایین بدون شکل دادن به آن، درست برعکس مدیریت ارشد است.") },
        { x: L("Refuse — it is not realistic.", "رد می‌کنید؛ واقع‌بینانه نیست."), v: "low", r: L("Defensive", "تدافعی"), f: L("Probably true, but it leaves the underlying business need unaddressed.", "احتمالاً درست است، اما نیاز کسب‌وکاری پشت آن را بی‌پاسخ می‌گذارد.") },
        { x: L("Ask what outcome the 30% is meant to buy. Show where time actually goes (lead-time data), propose removing two bottlenecks and dropping one low-value project, and agree on the outcome metric instead of a speed target.", "می‌پرسید این ۳۰٪ قرار است چه نتیجه‌ای بخرد. نشان می‌دهید زمان واقعاً کجا صرف می‌شود (داده‌ی lead time)، حذف دو گلوگاه و کنار گذاشتن یک پروژه‌ی کم‌ارزش را پیشنهاد می‌دهید و به جای هدف سرعت، روی metric نتیجه توافق می‌کنید."), v: "best", r: L("Senior EM (M4)", "Senior EM (M4)"), f: L("You define the real problem, reframe it around the outcome, and bring data and options up the chain.", "مسئله‌ی واقعی را تعریف می‌کنید، آن را حول نتیجه بازصورت‌بندی می‌کنید و داده و گزینه به سطوح بالاتر می‌برید.") },
        { x: L("Promise 30% and hope it works out.", "۳۰٪ را قول می‌دهید و امیدوارید جواب بدهد."), v: "low", r: L("Over-promising", "قول بیش از حد"), f: L("A promise you cannot keep becomes the surprise your director hears about from someone else.", "قولی که نمی‌توانید عملی کنید، به همان غافل‌گیری‌ای تبدیل می‌شود که Director شما آن را از زبان دیگران می‌شنود.") }
      ],
      les: L("Senior managers translate pressure into problems worth solving. Ask what the target is for, measure the system, and negotiate the outcome rather than the effort.", "مدیران ارشد فشار را به مسائلی ارزشمند برای حل کردن ترجمه می‌کنند. بپرسید هدف برای چیست، سیستم را بسنجید و به جای میزان تلاش، درباره‌ی نتیجه مذاکره کنید.") },

    { id: "s9", lv: "M4", dims: ["team", "people"], t: L("You are the single point of failure", "شما نقطه‌ی شکست واحد هستید"),
      sit: L("Every escalation, design decision and hiring call goes through you. You are working 60-hour weeks, and one tech lead told you they feel they cannot decide anything without you.", "هر escalation، تصمیم طراحی و تصمیم جذب از شما عبور می‌کند. هفته‌ای ۶۰ ساعت کار می‌کنید و یکی از راهبران فنی گفته احساس می‌کند بدون شما نمی‌تواند درباره‌ی هیچ چیزی تصمیم بگیرد."),
      q: L("What do you change?", "چه چیزی را تغییر می‌دهید؟"),
      o: [
        { x: L("Work more efficiently and block focus time.", "کارآمدتر کار می‌کنید و زمان تمرکز را در تقویم مسدود می‌کنید."), v: "mid", r: L("Personal efficiency", "کارایی شخصی"), f: L("Helps you, not the system. You remain the bottleneck.", "به شما کمک می‌کند، نه به سیستم. همچنان گلوگاه باقی می‌مانید.") },
        { x: L("Write down decision rights with each lead, fully delegate two areas with checkpoints, and take a two-week vacation to test it.", "حدود تصمیم‌گیری را با هر راهبر مکتوب می‌کنید، دو حوزه را به‌طور کامل و با نقاط پایش تفویض می‌کنید و برای آزمودن آن دو هفته مرخصی می‌روید."), v: "best", r: L("Senior EM (M4)", "Senior EM (M4)"), f: L("You reduce the human single point of failure — starting with yourself — and grow leaders in the process.", "SPoF انسانی را، از خودتان شروع کرده، کاهش می‌دهید و در این مسیر رهبر پرورش می‌دهید.") },
        { x: L("Ask for a chief of staff.", "درخواست یک chief of staff می‌کنید."), v: "mid", r: L("Adding capacity, not changing the design", "افزودن ظرفیت، بدون تغییر طراحی"), f: L("May help later, but it adds a layer instead of distributing decisions.", "ممکن است بعداً کمک کند، اما به جای توزیع تصمیم‌ها، یک لایه اضافه می‌کند.") },
        { x: L("Push through — it is temporary.", "ادامه می‌دهید؛ موقتی است."), v: "low", r: L("Hero manager", "مدیر قهرمان"), f: L("It is rarely temporary, and it teaches your leads to wait for you.", "به‌ندرت موقتی است و به راهبرانتان یاد می‌دهد منتظر شما بمانند.") }
      ],
      les: L("If the team cannot run without you, you have built a dependency, not a team. The vacation test is the simplest proof of leadership depth.", "اگر تیم بدون شما نمی‌تواند کار کند، یک وابستگی ساخته‌اید، نه یک تیم. «آزمون مرخصی» ساده‌ترین اثبات عمق راهبری است.") },

    { id: "s10", lv: "M4", dims: ["team", "people"], t: L("The brilliant jerk", "نابغه‌ی بدرفتار"),
      sit: L("Your most productive staff engineer is dismissive and sarcastic in design reviews. Two engineers have quietly asked to move teams. Leadership praises this engineer's output.", "پربازده‌ترین مهندس Staff شما در design reviewها تحقیرآمیز و طعنه‌آمیز رفتار می‌کند. دو مهندس بی‌سروصدا درخواست انتقال به تیم دیگر داده‌اند. مدیران ارشد از خروجی این مهندس تعریف می‌کنند."),
      q: L("What do you do?", "چه می‌کنید؟"),
      o: [
        { x: L("Tolerate it — the output is too valuable.", "تحمل می‌کنید؛ خروجی او بیش از حد ارزشمند است."), v: "low", r: L("Output over culture", "خروجی به جای فرهنگ"), f: L("Tolerating it tells everyone what you really value, and you are already losing people.", "تحمل کردن به همه نشان می‌دهد واقعاً برای چه ارزش قائلید؛ و همین حالا هم در حال از دست دادن افراد هستید.") },
        { x: L("Give private, specific feedback on the behaviour and its impact, make it part of their performance expectations, and follow through — including consequences if it does not change.", "بازخورد خصوصی و مشخص درباره‌ی رفتار و اثر آن می‌دهید، آن را بخشی از انتظارات عملکردی او می‌کنید و پیگیری می‌کنید؛ از جمله پیامدهایی در صورت عدم تغییر."), v: "best", r: L("Senior EM (M4)", "Senior EM (M4)"), f: L("Behaviour is part of performance. You guard psychological safety without losing the person by default.", "رفتار بخشی از عملکرد است. از ایمنی روانی صیانت می‌کنید، بدون این‌که از پیش آن فرد را از دست بدهید.") },
        { x: L("Move the two unhappy engineers to other teams.", "دو مهندس ناراضی را به تیم‌های دیگر منتقل می‌کنید."), v: "low", r: L("Protecting the wrong person", "حمایت از فرد اشتباه"), f: L("You punish the people who raised the problem and keep its cause.", "کسانی را که مشکل را مطرح کردند تنبیه می‌کنید و عامل مشکل را نگه می‌دارید.") },
        { x: L("Address it publicly in the next team meeting.", "در جلسه‌ی بعدی تیم به‌صورت علنی به موضوع می‌پردازید."), v: "low", r: L("Public shaming", "سرزنش علنی"), f: L("Norms can be restated publicly, but feedback on one person's behaviour belongs in private.", "هنجارها را می‌توان علنی یادآوری کرد، اما بازخورد درباره‌ی رفتار یک فرد، جایش در گفت‌وگوی خصوصی است.") }
      ],
      les: L("Google's research on effective teams found psychological safety mattered most. One person who erodes it can cost more than their output is worth.", "پژوهش گوگل درباره‌ی تیم‌های اثربخش نشان داد ایمنی روانی مهم‌ترین عامل است. فردی که آن را فرسوده کند، ممکن است بیش از ارزش خروجی‌اش هزینه داشته باشد.") },

    { id: "s11", lv: "M5", dims: ["team"], t: L("A reorg merges two cultures", "بازسازمان‌دهی دو فرهنگ را ادغام می‌کند"),
      sit: L("After a reorg you lead two merged departments. One ships fast with frequent incidents; the other is careful and slow. Engagement is dropping in both, and each side blames the other.", "پس از یک بازسازمان‌دهی، دو «بخش» ادغام‌شده را راهبری می‌کنید. یکی سریع منتشر می‌کند و incident زیادی دارد؛ دیگری محتاط و کند است. تعلق شغلی در هر دو رو به کاهش است و هر طرف دیگری را مقصر می‌داند."),
      q: L("How do you lead the merge?", "ادغام را چگونه راهبری می‌کنید؟"),
      o: [
        { x: L("Adopt the faster department's practices everywhere.", "روش‌های «بخش» سریع‌تر را همه‌جا اجرا می‌کنید."), v: "low", r: L("Picking a winner", "انتخاب برنده"), f: L("Declaring a winning culture guarantees a losing half.", "اعلام یک فرهنگ برنده، به معنای تضمین یک نیمه‌ی بازنده است.") },
        { x: L("Keep them separate for now.", "فعلاً آن‌ها را جدا نگه می‌دارید."), v: "mid", r: L("Deferring", "به تعویق انداختن"), f: L("Buys time but not alignment; the friction continues at every shared boundary.", "زمان می‌خرد، اما هم‌سویی نه؛ اصطکاک در هر مرز مشترک ادامه پیدا می‌کند.") },
        { x: L("Run listening sessions and skip-levels, define shared outcomes and a few non-negotiables (such as incident standards), let each team choose how to meet them, and track engagement and delivery quarterly.", "جلسات شنیدن و skip-level برگزار می‌کنید، نتایج مشترک و چند اصل غیرقابل مذاکره (مثل استانداردهای incident) تعریف می‌کنید، اجازه می‌دهید هر تیم مسیر رسیدن به آن‌ها را انتخاب کند و تعلق شغلی و delivery را فصلی پایش می‌کنید."), v: "best", r: L("Director (M5)", "Director (M5)"), f: L("You shape culture through outcomes and a small set of standards, and you own the engagement data.", "فرهنگ را از طریق نتایج و مجموعه‌ی کوچکی از استانداردها شکل می‌دهید و مالک داده‌های تعلق شغلی هستید.") },
        { x: L("Replace one of the two managers.", "یکی از دو مدیر را جایگزین می‌کنید."), v: "low", r: L("Premature", "زودهنگام"), f: L("Changing leaders before diagnosing the system usually just moves the problem.", "تغییر مدیران پیش از تشخیص مشکل سیستم، معمولاً فقط مشکل را جابه‌جا می‌کند.") }
      ],
      les: L("Directors shape culture by defining what must be true everywhere and leaving the how to the teams — then measuring whether it is working.", "Directorها فرهنگ را این‌گونه شکل می‌دهند: تعریف آن‌چه باید همه‌جا برقرار باشد، سپردن «چگونگی» به تیم‌ها و سپس سنجیدن این‌که آیا کار می‌کند.") },

    { id: "s12", lv: "M5", dims: ["delivery", "people"], t: L("Hiring freeze, same targets", "توقف جذب، همان اهداف"),
      sit: L("Finance freezes hiring for two quarters. Your department's annual targets stay the same, and three of your managers were counting on new headcount.", "واحد مالی جذب را برای دو فصل متوقف می‌کند. اهداف سالانه‌ی «بخش» شما تغییری نکرده و سه نفر از مدیرانتان روی headcount جدید حساب کرده بودند."),
      q: L("What do you do?", "چه می‌کنید؟"),
      o: [
        { x: L("Tell your managers to find a way.", "به مدیرانتان می‌گویید راهی پیدا کنند."), v: "low", r: L("Pass-through", "انتقال مسئولیت به پایین"), f: L("This is exactly the decision a director exists to make.", "این دقیقاً همان تصمیمی است که Director برای گرفتنش وجود دارد.") },
        { x: L("Re-plan the portfolio with your managers: rank initiatives by return, stop or pause the bottom ones, move people to the top priorities, and agree the trade-offs with your VP in writing.", "سبد پروژه‌ها را با مدیرانتان بازبرنامه‌ریزی می‌کنید: ابتکارات را بر اساس آورده رتبه‌بندی می‌کنید، موارد انتهای فهرست را متوقف یا معلق می‌کنید، افراد را به اولویت‌های بالا منتقل می‌کنید و trade-offها را مکتوب با VP توافق می‌کنید."), v: "best", r: L("Director (M5)", "Director (M5)"), f: L("You own the portfolio, involve your managers, and make the trade-offs visible upward.", "مالک سبد پروژه‌ها هستید، مدیرانتان را درگیر می‌کنید و trade-offها را برای سطوح بالاتر آشکار می‌کنید.") },
        { x: L("Ask for an exception for your department.", "برای «بخش» خود درخواست استثنا می‌کنید."), v: "mid", r: L("Local optimisation", "بهینه‌سازی محلی"), f: L("Sometimes justified, but usually a request to make your problem someone else's.", "گاهی موجه است، اما معمولاً درخواستی است برای این‌که مشکل شما مشکل دیگران شود.") },
        { x: L("Keep every project and spread people thinner.", "همه‌ی پروژه‌ها را نگه می‌دارید و افراد را میان آن‌ها پخش می‌کنید."), v: "low", r: L("Avoiding trade-offs", "فرار از trade-off"), f: L("Everything slows down, nothing finishes, and burnout rises.", "همه‌چیز کند می‌شود، هیچ‌چیز به پایان نمی‌رسد و فرسودگی افزایش می‌یابد.") }
      ],
      les: L("Constraints are when strategy becomes real. Decide what not to do, explain why, and protect the priorities that matter most.", "محدودیت‌ها همان جایی هستند که استراتژی واقعی می‌شود. تصمیم بگیرید چه کاری را انجام ندهید، دلیلش را توضیح دهید و از مهم‌ترین اولویت‌ها محافظت کنید.") },

    { id: "s13", lv: "M6", dims: ["delivery"], t: L("The CFO questions your return", "مدیر مالی آورده‌ی شما را زیر سؤال می‌برد"),
      sit: L("The CFO asks your 240-person pillar for a 15% cost reduction by next quarter and questions whether two of your products earn their keep.", "مدیر مالی از pillar ۲۴۰ نفره‌ی شما می‌خواهد تا فصل آینده هزینه‌ها را ۱۵٪ کاهش دهد و می‌پرسد آیا دو محصول شما ارزش هزینه‌شان را دارند."),
      q: L("How do you respond?", "چه پاسخی می‌دهید؟"),
      o: [
        { x: L("Cut 15% evenly across all teams.", "۱۵٪ را به‌طور یکسان از همه‌ی تیم‌ها کم می‌کنید."), v: "mid", r: L("Easy, not strategic", "آسان، اما غیرراهبردی"), f: L("Even cuts feel fair but weaken the best bets as much as the worst.", "کاهش یکسان منصفانه به نظر می‌رسد، اما بهترین شرط‌ها را به اندازه‌ی بدترین‌ها تضعیف می‌کند.") },
        { x: L("Push back: engineering is an investment, not a cost.", "مقاومت می‌کنید: مهندسی سرمایه‌گذاری است، نه هزینه."), v: "low", r: L("Defensive", "تدافعی"), f: L("True as a slogan, but without numbers it will lose the argument.", "به عنوان شعار درست است، اما بدون عدد و رقم، بحث را می‌بازد.") },
        { x: L("Make a portfolio case: retire two low-return products, fund one growth bet, and show the three-year return of each option; agree on a reduction that protects long-term revenue.", "یک پرونده‌ی سبدی ارائه می‌دهید: دو محصول کم‌بازده را کنار می‌گذارید، یک شرط رشد را تأمین مالی می‌کنید و بازده سه‌ساله‌ی هر گزینه را نشان می‌دهید؛ سپس روی کاهشی توافق می‌کنید که از درآمد بلندمدت محافظت کند."), v: "best", r: L("VP (M6)", "VP (M6)"), f: L("You speak the language of return on investment and own the P&L trade-offs.", "به زبان آورده‌ی سرمایه‌گذاری صحبت می‌کنید و مالک trade-offهای P&L هستید.") },
        { x: L("Delay and hope priorities change.", "تعلل می‌کنید و امیدوارید اولویت‌ها تغییر کند."), v: "low", r: L("Avoidance", "اجتناب"), f: L("Delay usually means the decision is made without you.", "تعلل معمولاً یعنی تصمیم بدون شما گرفته می‌شود.") }
      ],
      les: L("At M6 your area is judged by return relative to investment. Arrive with options and numbers, and trade your own scope for company return when it is right.", "در سطح M6، حوزه‌ی شما با آورده به نسبت سرمایه‌گذاری سنجیده می‌شود. با گزینه و عدد وارد شوید و هر جا درست است، دامنه‌ی مجموعه‌ی خودتان را فدای آورده‌ی سازمان کنید.") },

    { id: "s14", lv: "M6", dims: ["team", "people"], t: L("The strategy moves away from your flagship", "استراتژی از محصول اصلی شما فاصله می‌گیرد"),
      sit: L("The company changes strategy. Your pillar's flagship product is no longer a priority, and your best directors are anxious about their teams and careers.", "سازمان استراتژی‌اش را تغییر می‌دهد. محصول اصلی pillar شما دیگر اولویت نیست و بهترین Directorهایتان نگران تیم‌ها و مسیر شغلی‌شان هستند."),
      q: L("How do you lead your org through it?", "سازمانتان را چگونه از این مرحله عبور می‌دهید؟"),
      o: [
        { x: L("Fight the decision publicly to protect your people.", "برای محافظت از افرادتان، علناً با تصمیم مخالفت می‌کنید."), v: "low", r: L("Tribal loyalty", "وفاداری قبیله‌ای"), f: L("It feels loyal but splits the company and puts your people on the losing side.", "وفادارانه به نظر می‌رسد، اما سازمان را دوپاره می‌کند و افرادتان را در سمت بازنده قرار می‌دهد.") },
        { x: L("Accept it quietly and announce it by email.", "بی‌صدا می‌پذیرید و با یک ایمیل اعلامش می‌کنید."), v: "low", r: L("Absent leadership", "راهبری غایب"), f: L("A change this big needs a leader in the room, not an announcement.", "تغییری به این بزرگی به راهبری حاضر در صحنه نیاز دارد، نه یک اطلاعیه.") },
        { x: L("Disagree in the executive room if you must, then commit. Explain the why to your org in person, give each director a role in the new strategy, and protect people's growth paths through the transition.", "اگر لازم است در جلسه‌ی مدیران اجرایی مخالفتتان را بگویید، سپس متعهد شوید. دلیل تغییر را حضوری برای سازمانتان توضیح دهید، به هر Director نقشی در استراتژی جدید بدهید و در طول گذار از مسیرهای رشد افراد محافظت کنید."), v: "best", r: L("VP (M6)", "VP (M6)"), f: L("Disagree and commit, then lead the change with context and a place for everyone in the new plan.", "مخالفت کنید و متعهد شوید؛ سپس تغییر را با context و جایگاهی برای همه در برنامه‌ی جدید راهبری کنید.") },
        { x: L("Let each director handle the messaging.", "پیام‌رسانی را به هر Director می‌سپارید."), v: "mid", r: L("Delegating the hard part", "تفویض بخش سخت"), f: L("Directors need your context first; otherwise you get five different stories.", "Directorها ابتدا به context شما نیاز دارند؛ وگرنه پنج روایت متفاوت خواهید داشت.") }
      ],
      les: L("Senior leaders earn the right to disagree in the room by committing outside it. People follow a change when they understand why and can see their place in it.", "راهبران ارشد حق مخالفت در جلسه را با تعهد بیرون از آن به دست می‌آورند. افراد وقتی با تغییر همراه می‌شوند که دلیلش را بفهمند و جایگاه خود را در آن ببینند.") },

    { id: "s15", lv: "M4", dims: ["delivery"], hiring: true, t: L("The down-level offer", "پیشنهادِ down-level"),
      sit: L("You are 'Director of Engineering' at a 150-person scale-up (3 EMs, 35 engineers). A large tech company offers you a Senior EM role, with pay well above your current package.", "Director of Engineering در یک شرکت ۱۵۰ نفره‌ی در حال رشد هستید (۳ EM و ۳۵ مهندس). یک شرکت بزرگ فناوری نقش Senior EM را با حقوقی بسیار بالاتر از بسته‌ی فعلی‌تان پیشنهاد داده است."),
      q: L("What do you do?", "چه می‌کنید؟"),
      o: [
        { x: L("Reject it. You are a Director.", "رد می‌کنید؛ شما Director هستید."), v: "mid", r: L("Title-anchored", "وابسته به عنوان"), f: L("Titles do not travel between tiers. The scope you describe matches Senior EM at many large companies.", "عنوان‌ها میان رده‌های مختلف شرکت‌ها منتقل نمی‌شوند. دامنه‌ای که توصیف می‌کنید در بسیاری از شرکت‌های بزرگ با Senior EM هم‌خوان است.") },
        { x: L("Accept straight away and negotiate the salary.", "بلافاصله می‌پذیرید و درباره‌ی حقوق مذاکره می‌کنید."), v: "mid", r: L("Implicitly accepting the level", "پذیرش ضمنی سطح"), f: L("Negotiating pay first locks the level in. Settle the level question first.", "مذاکره‌ی حقوق در ابتدا، سطح را قفل می‌کند. ابتدا تکلیف سطح را روشن کنید.") },
        { x: L("Ask for written leveling feedback and what Director evidence would look like; offer an extra strategy round. If it stays Senior EM, decide on purpose: negotiate the top of the band and a written gap analysis.", "بازخورد مکتوب درباره‌ی سطح و شواهد لازم برای Director را درخواست می‌کنید و یک مصاحبه‌ی استراتژی اضافه پیشنهاد می‌دهید. اگر همچنان Senior EM ماند، آگاهانه تصمیم می‌گیرید: برای سقف بازه‌ی حقوقی و تحلیل مکتوبِ فاصله تا Director مذاکره می‌کنید."), v: "best", r: L("Informed candidate", "کاندیدای آگاه"), f: L("Level first, with evidence — then a deliberate trade if the answer does not change.", "اول سطح، با شواهد؛ سپس یک معامله‌ی آگاهانه اگر پاسخ تغییر نکرد.") },
        { x: L("Say you have a Director offer elsewhere (you don't).", "می‌گویید پیشنهاد Director از جای دیگری دارید (در حالی که ندارید)."), v: "low", r: L("Bluffing", "بلوف"), f: L("Never bluff about offers. It is easy to discover and ends the conversation.", "هرگز درباره‌ی پیشنهادهای شغلی بلوف نزنید. به‌راحتی کشف می‌شود و گفت‌وگو را تمام می‌کند.") }
      ],
      les: L("Moving up a company tier often costs a title, not a career. Negotiate the level with evidence first; if it holds, trade consciously and get next-level expectations in writing.", "رفتن به شرکتی در رده‌ی بالاتر اغلب به قیمت یک عنوان تمام می‌شود، نه یک مسیر شغلی. ابتدا با شواهد درباره‌ی سطح مذاکره کنید؛ اگر تغییر نکرد، آگاهانه معامله کنید و انتظارات سطح بعد را مکتوب بگیرید.") },

    { id: "s16", lv: "M2", dims: ["delivery", "team"], t: L("Tech debt or features?", "بدهی فنی یا قابلیت جدید؟"),
      sit: L("Your PM wants two new features this quarter. Your engineers say the build pipeline now takes 50 minutes and is slowing everything down.", "PM شما دو قابلیت جدید برای این فصل می‌خواهد. مهندسانتان می‌گویند pipeline ساخت اکنون ۵۰ دقیقه طول می‌کشد و همه‌چیز را کند کرده است."),
      q: L("What do you propose?", "چه پیشنهادی می‌دهید؟"),
      o: [
        { x: L("Do the features; debt can wait.", "قابلیت‌ها را انجام می‌دهید؛ بدهی فنی می‌تواند صبر کند."), v: "low", r: L("Short-term only", "فقط کوتاه‌مدت"), f: L("The cost compounds every week and eventually slows the features too.", "هزینه هر هفته انباشته می‌شود و در نهایت خود قابلیت‌ها را هم کند می‌کند.") },
        { x: L("Refuse new features until the debt is fixed.", "تا رفع بدهی فنی، قابلیت جدید را نمی‌پذیرید."), v: "mid", r: L("Right problem, wrong framing", "مسئله‌ی درست، صورت‌بندی نادرست"), f: L("An ultimatum turns a shared problem into a turf war.", "اولتیماتوم، یک مسئله‌ی مشترک را به دعوای قلمرو تبدیل می‌کند.") },
        { x: L("Quantify the cost (hours lost per week, delayed releases), propose a fixed share of capacity for the quarter tied to a lead-time target, and agree with the PM which feature slips.", "هزینه را کمّی می‌کنید (ساعت‌های از دست‌رفته در هفته، releaseهای تأخیری)، سهم مشخصی از ظرفیت فصل را با هدف مشخص lead time پیشنهاد می‌دهید و با PM توافق می‌کنید کدام قابلیت عقب بیفتد."), v: "best", r: L("Strong EM (M2) with M3 judgment", "EM قوی (M2) با قضاوت M3"), f: L("You translate engineering pain into business cost and make a shared, measurable trade-off.", "درد مهندسی را به هزینه‌ی کسب‌وکاری ترجمه می‌کنید و یک trade-off مشترک و قابل اندازه‌گیری می‌سازید.") },
        { x: L("Let engineers fix it quietly in their spare time.", "اجازه می‌دهید مهندسان بی‌سروصدا در وقت آزادشان درستش کنند."), v: "low", r: L("Invisible work", "کار نامرئی"), f: L("Invisible work goes unrewarded and unplanned, and 'spare time' does not exist.", "کار نامرئی نه پاداش می‌گیرد و نه برنامه‌ریزی می‌شود؛ و «وقت آزاد» وجود ندارد.") }
      ],
      les: L("Tech debt is a business decision. Put it in business terms, tie it to a delivery metric, and make the trade-off together with your product partner.", "بدهی فنی یک تصمیم کسب‌وکاری است. آن را به زبان کسب‌وکار بیان کنید، به یک metric delivery گره بزنید و trade-off را همراه با شریک محصولی‌تان انجام دهید.") }
  ];

  var fLevel = "all", fDim = "all", openId = null;

  function load() { return G.store.get(KEY, {}) || {}; }

  function filtered() {
    return S.filter(function (s) {
      var okL = fLevel === "all" || (fLevel === "hiring" ? s.hiring : s.lv === fLevel);
      var okD = fDim === "all" || s.dims.indexOf(fDim) !== -1;
      return okL && okD;
    });
  }

  function listHTML() {
    var ans = load(), items = filtered();
    if (!items.length) return '<div class="faq-empty">' + t(C.empty) + "</div>";
    return '<div class="scen-list">' + items.map(function (s) {
      var done = typeof ans[s.id] === "number";
      return '<button class="scen-card" data-scen="' + s.id + '" aria-pressed="' + (s.id === openId) + '"><div class="chips">' + UI.code(s.lv) + s.dims.map(UI.dimChip).join("") + (s.hiring ? '<span class="chip">' + t(C.hiring) + "</span>" : "") + "</div><h4>" + t(s.t) + "</h4><p>" + t(s.sit) + "</p>" + (done ? '<span class="done">' + icon("check") + t(C.done) + "</span>" : "") + "</button>";
    }).join("") + "</div>";
  }

  function detailHTML(id) {
    var s = S.filter(function (x) { return x.id === id; })[0];
    if (!s) return "";
    var ans = load(), chosen = ans[id], revealed = typeof chosen === "number";
    var letters = G.isFa() ? ["الف", "ب", "ج", "د"] : ["A", "B", "C", "D"];
    var h = '<div class="card raised scen-body" id="scenDetail" tabindex="-1"><div class="chips">' + UI.code(s.lv) + s.dims.map(UI.dimChip).join("") + "</div><h2>" + t(s.t) + '</h2><p class="scen-situation">' + t(s.sit) + '</p><p class="scen-q">' + t(s.q) + "</p>";
    if (!revealed) h += '<p class="muted" style="font-size:var(--fs-s)">' + t(C.pick) + "</p>";
    h += '<div class="opts">';
    s.o.forEach(function (o, i) {
      var cls = "opt" + (revealed && i === chosen ? " chosen" : "") + (revealed && o.v === "best" ? " best" : "");
      h += '<button class="' + cls + '" data-opt="' + i + '"' + (revealed ? " disabled" : "") + '><span class="ol">' + letters[i] + "</span><span>" + t(o.x) + "</span>";
      if (revealed) {
        var vcls = o.v === "best" ? "good" : o.v === "good" ? "good" : o.v === "mid" ? "mid" : "low";
        h += '<span class="fb"><span class="verdict ' + vcls + '">' + icon(o.v === "best" ? "check" : o.v === "low" ? "x" : "dot", "inline-icon") + t(C.verdict[o.v]) + " · " + t(C.reflects) + ": " + t(o.r) + "</span><span>" + t(o.f) + "</span></span>";
      }
      h += "</button>";
    });
    h += "</div>";
    if (revealed) {
      h += '<div class="lesson"><h4>' + icon("bulb") + t(C.lesson) + "</h4><p>" + t(s.les) + "</p></div>";
      var list = filtered(), idx = list.map(function (x) { return x.id; }).indexOf(id);
      var nxt = list[(idx + 1) % list.length];
      h += '<div class="btn-row"><button class="btn ghost" data-again="' + id + '">' + icon("reset") + t(C.again) + "</button>" + (nxt && nxt.id !== id ? '<button class="btn primary" data-scen="' + nxt.id + '">' + t(C.nextScen) + icon("arrow", "flip-rtl") + "</button>" : "") + "</div>";
    }
    return h + "</div>";
  }

  function statsHTML() {
    var ans = load(), n = 0, best = 0;
    S.forEach(function (s) { if (typeof ans[s.id] === "number") { n++; if (s.o[ans[s.id]].v === "best") best++; } });
    return '<div class="muted" style="font-size:var(--fs-s)">' + G.num(n) + " / " + G.num(S.length) + " " + t(C.progress) + (n ? " · " + G.num(best) + " " + t(C.strongCount) : "") + (n ? ' · <button class="btn ghost small" data-clear="1">' + t(C.resetAll) + "</button>" : "") + "</div>";
  }

  function filtersHTML() {
    var lv = [["all", UI.u("all")]].concat(G.LEVELS.map(function (id) { return [id, id === "A" ? (G.isFa() ? "آزمایشی" : "Acting") : id]; })).concat([["hiring", t(C.hiring)]]);
    var dm = [["all", UI.u("all")], ["delivery", t(G.data.dims.delivery.short)], ["people", t(G.data.dims.people.short)], ["team", t(G.data.dims.team.short)]];
    return '<div class="filters"><span class="f-label">' + t(C.filterLevel) + '</span><div class="pill-tabs">' + lv.map(function (x) { return '<button data-fl="' + x[0] + '" aria-pressed="' + (fLevel === x[0]) + '">' + x[1] + "</button>"; }).join("") + '</div></div><div class="filters"><span class="f-label">' + t(C.filterDim) + '</span><div class="pill-tabs">' + dm.map(function (x) { return '<button data-fd="' + x[0] + '" aria-pressed="' + (fDim === x[0]) + '">' + x[1] + "</button>"; }).join("") + "</div></div>";
  }

  function applyParam(param) {
    if (!param) return;
    if (G.LEVELS.indexOf(param) !== -1) { fLevel = param; openId = null; }
    else if (S.some(function (s) { return s.id === param; })) openId = param;
  }

  function render(param) {
    applyParam(param);
    if (!openId) { var f = filtered(); openId = f.length ? f[0].id : null; }
    var h = UI.pageHead({ eyebrow: C.eyebrow, icon: "play", title: C.title, lede: C.lede, tldr: C.tldr });
    h += '<section class="section" id="scen"><div id="scenFilters" class="grid" style="gap:10px">' + filtersHTML() + '</div><div id="scenStats">' + statsHTML() + '</div><div id="scenDetailBox">' + (openId ? detailHTML(openId) : "") + '</div><div id="scenList">' + listHTML() + "</div></section>";
    h += UI.next("toolkit", C.next);
    return h;
  }

  function refresh(root, scrollToDetail) {
    G.$("#scenFilters", root).innerHTML = filtersHTML();
    G.$("#scenStats", root).innerHTML = statsHTML();
    G.$("#scenDetailBox", root).innerHTML = openId ? detailHTML(openId) : "";
    G.$("#scenList", root).innerHTML = listHTML();
    if (scrollToDetail) { var d = G.$("#scenDetail", root); if (d) { d.scrollIntoView({ block: "start" }); d.focus({ preventScroll: true }); } }
  }

  G.views.scenarios = {
    lede: C.lede,
    render: render,
    mount: function (root) {
      root.addEventListener("click", function (e) {
        var el;
        if ((el = e.target.closest("[data-fl]"))) { fLevel = el.getAttribute("data-fl"); var f = filtered(); if (f.length && !f.some(function (s) { return s.id === openId; })) openId = f[0].id; refresh(root); return; }
        if ((el = e.target.closest("[data-fd]"))) { fDim = el.getAttribute("data-fd"); var f2 = filtered(); if (f2.length && !f2.some(function (s) { return s.id === openId; })) openId = f2[0].id; refresh(root); return; }
        if ((el = e.target.closest("[data-scen]"))) { openId = el.getAttribute("data-scen"); history.replaceState(null, "", "#/scenarios/" + openId); refresh(root, true); return; }
        if ((el = e.target.closest("[data-opt]"))) {
          if (el.disabled) return;
          var ans = load(); ans[openId] = +el.getAttribute("data-opt"); G.store.set(KEY, ans); refresh(root); return;
        }
        if ((el = e.target.closest("[data-again]"))) { var a2 = load(); delete a2[el.getAttribute("data-again")]; G.store.set(KEY, a2); refresh(root); return; }
        if ((el = e.target.closest("[data-clear]"))) { G.store.set(KEY, {}); refresh(root); }
      });
    },
    onParam: function (root, param) { applyParam(param); refresh(root, true); },
    index: function () {
      return S.map(function (s) { return { type: "scenario", title: t(s.t), snip: t(s.sit), href: "#/scenarios/" + s.id, extra: s.lv + " " + t(s.les) }; });
    }
  };
})();

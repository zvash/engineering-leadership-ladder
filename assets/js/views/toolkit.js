(function () {
  "use strict";
  var G = window.ELG, L = G.L, t = G.t, md = G.md, icon = G.icon, UI = G.ui;

  var C = {
    eyebrow: L("Practice", "تمرین"),
    title: L("Toolkit", "جعبه‌ابزار"),
    lede: L("Templates, checklists and small tools for the work that repeats every week. Copy them, adapt them, and make them your own.", "قالب‌ها، چک‌لیست‌ها و ابزارهای ساده برای کارهای هفتگی مدیریت. آن‌ها را کپی کنید و متناسب با نیاز خود و تیمتان تغییر دهید."),
    next: L("Questions people ask", "پرسش‌های پرتکرار")
  };

  var TOOLS = [
    { id: "one-on-one", icon: "chat", n: L("1:1s", "جلسات ۱:۱") },
    { id: "career", icon: "compass", n: L("Career conversations", "گفت‌وگوی مسیر شغلی") },
    { id: "feedback", icon: "flag", n: L("Feedback", "بازخورد") },
    { id: "delegation", icon: "layers", n: L("Delegation", "تفویض") },
    { id: "first90", icon: "calendar", n: L("First 90 days", "۹۰ روز نخست") },
    { id: "health", icon: "shield", n: L("Team health", "سلامت تیم") },
    { id: "span", icon: "users", n: L("Span of control", "دامنه‌ی کنترل") },
    { id: "reading", icon: "book", n: L("Reading list", "فهرست مطالعه") },
    { id: "glossary", icon: "globe", n: L("Glossary", "واژه‌نامه") }
  ];

  /* ---------------- 1:1 ---------------- */
  var ONE = {
    title: L("Weekly 1:1s that are worth the time", "جلسات ۱:۱ هفتگی که ارزش وقت گذاشتن دارند"),
    intro: L("The 1:1 belongs to your report. Their topics come first; status updates belong elsewhere. Thirty minutes weekly beats an hour monthly.", "در جلسه‌ی ۱:۱، موضوعات عضو تیم در اولویت است. گزارش وضعیت را در جلسه‌ای دیگر بگیرید. سی دقیقه در هفته، از یک ساعت در ماه مفیدتر است."),
    tpl: L(
      "1:1 — [name] — [date]\n\n1. Their topics first (they own the agenda)\n   - …\n\n2. How are you, really?  energy 1–5 · workload 1–5\n\n3. Priorities and blockers — what is in your way?\n\n4. Feedback, both directions\n   - one thing to keep · one thing to change\n\n5. Growth (monthly) — progress on the growth goal; next stretch\n\n6. Actions — who does what, by when",
      "۱:۱ — [نام] — [تاریخ]\n\n۱. موضوعات عضو تیم (دستور جلسه را خود او تعیین می‌کند)\n   - …\n\n۲. این هفته چطور بود؟  انرژی ۱ تا ۵ · حجم کار ۱ تا ۵\n\n۳. اولویت‌ها و موانع، چه چیزی پیشبرد کارت را دشوار کرده؟\n\n۴. بازخورد در هر دو جهت\n   - کاری که ادامه دهیم · کاری که تغییر دهیم\n\n۵. رشد (ماهانه): پیشرفت در هدف رشد، مسئولیت چالش‌برانگیز بعدی\n\n۶. اقدامات: چه کسی، چه کاری، تا چه زمانی"
    ),
    qTitle: L("Questions that open real conversations", "پرسش‌هایی برای شروع گفت‌وگوی معنادار"),
    qs: [
      L("What is taking more energy than it should?", "چه چیزی بیش از حد انرژی‌ات را می‌گیرد؟"),
      L("How clear are your priorities this week, from 1 to 5?", "اولویت‌هایت این هفته از ۱ تا ۵ چقدر روشن است؟"),
      L("What would you change about how we work?", "در شیوه‌ی کار ما چه چیزی را تغییر می‌دادی؟"),
      L("What could I do to make your week easier?", "چه کاری از من برمی‌آید که هفته‌ات را آسان‌تر کند؟"),
      L("What did you learn this week?", "این هفته چه یاد گرفتی؟"),
      L("Where do you want to be in a year — and are we on that path?", "یک سال دیگر کجا می‌خواهی باشی و آیا در همان مسیر هستیم؟"),
      L("What feedback do you have for me?", "چه بازخوردی برای من داری؟")
    ],
    tip: L("Never cancel a 1:1 twice in a row. Rescheduling says 'you matter'; cancelling says the opposite.", "جلسه‌ی ۱:۱ را دو بار پشت سر هم لغو نکنید. اگر ناچار به لغو جلسه شدید، زمان جایگزین تعیین کنید تا فرد بداند گفت‌وگو با او برایتان اولویت دارد.")
  };

  /* ---------------- career ---------------- */
  var CAREER = {
    title: L("Three career conversations", "سه گفت‌وگوی مسیر شغلی"),
    intro: L("A structure popularised by Kim Scott in Radical Candor: three separate conversations, weeks apart, that turn 'where do you want to go?' into an 18-month plan.", "ساختاری که Kim Scott در کتاب Radical Candor رواج داد: سه گفت‌وگوی جداگانه با چند هفته فاصله که پرسش «می‌خواهی به کجا برسی؟» را به یک برنامه‌ی ۱۸ ماهه تبدیل می‌کند."),
    steps: [
      { t: L("1 · Life story", "۱ · داستان زندگی"), b: L("Ask them to walk you through their life so far, focusing on the changes they made and why. You are listening for values: what motivates them, what they avoid.", "از او بخواهید داستان زندگی‌اش را تا امروز تعریف کند و بر تغییرهایی که داده و دلیل آن‌ها تمرکز کند. شما به دنبال ارزش‌ها هستید: چه چیزی انگیزه‌اش می‌دهد و از چه چیزی دوری می‌کند."), q: L("\"What made you choose that — and what made you leave?\"", "«چه چیزی باعث شد آن را انتخاب کنی و چه چیزی باعث شد کنارش بگذاری؟»") },
      { t: L("2 · Dreams", "۲ · رؤیاها"), b: L("Ask what they would want to be doing at the peak of their career. Collect several dreams, then the skills each would need.", "بپرسید در بهترین نقطه‌ی مسیر شغلی‌اش، دوست دارد چه کاری انجام دهد. چند هدف و رؤیا را یادداشت کنید و مهارت‌های لازم برای هر کدام را مشخص کنید."), q: L("\"If everything went right, what would you be doing in 15 years?\"", "«اگر همه‌چیز درست پیش برود، ۱۵ سال دیگر چه کاری انجام می‌دهی؟»") },
      { t: L("3 · The 18-month plan", "۳ · برنامه‌ی ۱۸ ماهه"), b: L("Agree on what they need to learn in the next 18 months to move toward those dreams, and how their current work — and you — can help.", "بر سر آنچه باید در ۱۸ ماه آینده برای نزدیک‌شدن به این هدف‌ها یاد بگیرد توافق کنید. مشخص کنید کار فعلی‌اش و حمایت شما چطور به این یادگیری کمک می‌کند."), q: L("\"Which project in the next quarter would teach you the most?\"", "«کدام پروژه در فصل آینده بیشترین چیز را به تو یاد می‌دهد؟»") }
    ],
    tip: L("Write the 18-month plan down and revisit it every quarter. Growth is not only promotion: bigger scope, new skills and new domains count.", "برنامه‌ی ۱۸ ماهه را مکتوب کنید و هر فصل آن را مرور کنید. در بررسی رشد، علاوه بر ارتقا، افزایش دامنه‌ی مسئولیت، یادگیری مهارت‌ها و تجربه در حوزه‌های جدید را هم در نظر بگیرید.")
  };

  /* ---------------- feedback ---------------- */
  var FB = {
    title: L("Feedback builder", "ابزار تنظیم بازخورد"),
    intro: L("Situation, Behaviour, Impact — the Center for Creative Leadership's SBI model — plus an optional request. Describe what you saw, not who they are.", "در مدل SBI از Center for Creative Leadership، موقعیت، رفتار و اثر آن را توضیح می‌دهید و در صورت نیاز درخواستی مطرح می‌کنید. بازخورد را به رفتار مشاهده‌شده محدود کنید و از قضاوت درباره‌ی شخصیت فرد پرهیز کنید."),
    s: L("Situation — when and where", "موقعیت، کِی و کجا"), b: L("Behaviour — what you observed", "رفتار، آنچه مشاهده کردید"), i: L("Impact — the effect on people, users or results", "اثر، پیامد بر افراد، کاربران یا نتایج"), r: L("Request (optional) — what you would like next time", "درخواست اختیاری، انتظار شما برای دفعه‌ی بعد"),
    ex: { s: L("In Tuesday's design review", "در design review روز سه‌شنبه"), b: L("you interrupted Roya twice before the proposal was fully explained", "دو بار پیش از آن‌که رویا توضیح پیشنهادش را تمام کند، حرفش را قطع کردی"), i: L("Roya stopped contributing, and we lost that view on the caching risk", "رویا دیگر در بحث شرکت نکرد و فرصت شنیدن نظرش درباره‌ی ریسک cache را از دست دادیم"), r: L("let people finish, then challenge the idea", "اجازه بده افراد حرفشان را تمام کنند و بعد ایده را به چالش بکش") },
    exNote: L("Pre-filled with an example. Replace it with your own.", "با یک نمونه پر شده است. آن را با موقعیت خودتان جایگزین کنید."),
    out: L("Your feedback", "بازخورد شما"),
    candorTitle: L("Radical Candor: care personally × challenge directly", "Radical Candor: توجه به فرد × بیان مستقیم نقد"),
    candor: [
      { k: "rc", t: L("Radical Candor", "صراحت همراه با توجه (Radical Candor)"), b: L("Cares and challenges. Specific, kind, direct.", "هم به فرد اهمیت می‌دهید و هم نقد را مستقیم مطرح می‌کنید: مشخص، محترمانه و صریح.") },
      { k: "oa", t: L("Obnoxious Aggression", "پرخاشگری بدون توجه به فرد"), b: L("Challenges without caring. Harsh, public, personal.", "نقد را بدون توجه به فرد مطرح می‌کنید: تند، در جمع و با حمله به شخصیت.") },
      { k: "re", t: L("Ruinous Empathy", "همدلی آسیب‌زا"), b: L("Cares without challenging. 'Nice', vague, too late.", "به فرد اهمیت می‌دهید، اما نقد را مطرح نمی‌کنید: ظاهراً مهربان، ولی مبهم و دیرهنگام.") },
      { k: "mi", t: L("Manipulative Insincerity", "عدم صداقتِ فریبکارانه"), b: L("Neither. Political, behind people's backs.", "به فرد توجه نمی‌کنید و نقد را هم مستقیم مطرح نمی‌کنید. بازخورد به سیاسی‌کاری و صحبت پشت سر افراد تبدیل می‌شود.") }
    ],
    axisY: L("Challenge directly ↑", "بیان مستقیم نقد ↑"), axisX: L("Care personally →", "توجه به فرد ←"),
    tips: [
      L("Give it within 48 hours, in private.", "ظرف ۴۸ ساعت و به‌صورت خصوصی بازخورد دهید."),
      L("Ask for their view: \"What is your take?\"", "دیدگاه او را بپرسید: «نظر خودت چیست؟»"),
      L("Praise in public with the same specificity.", "قدردانی را هم با همین دقت و جزئیات، در جمع انجام دهید."),
      L("Research on performance reviews (Stanford's Clayman Institute) found vague feedback falls more often on women — specificity is also fairness.", "پژوهش مؤسسه‌ی Clayman دانشگاه Stanford درباره‌ی ارزیابی عملکرد نشان داد زنان بیشتر بازخورد مبهم دریافت می‌کنند. بازخورد مشخص به ارزیابی منصفانه هم کمک می‌کند.")
    ]
  };

  /* ---------------- delegation ---------------- */
  var DEL = {
    title: L("The delegation ladder", "نردبان تفویض"),
    intro: L("Delegation is not on or off. Management 3.0's seven levels make the degree explicit. Pick a decision and the person's experience; the tool suggests a starting level to agree on together.", "تفویض اختیار درجه‌های مختلفی دارد. هفت سطح Management 3.0 کمک می‌کند میزان اختیار را روشن کنید. یک تصمیم و میزان تجربه‌ی فرد را انتخاب کنید تا ابزار، سطحی برای شروع توافق پیشنهاد دهد."),
    levels: [
      [L("Tell", "اعلام"), L("I decide and tell you.", "من تصمیم می‌گیرم و به تو اعلام می‌کنم.")],
      [L("Sell", "متقاعد کردن"), L("I decide and explain why, to win you over.", "من تصمیم می‌گیرم و دلیلش را توضیح می‌دهم تا همراهت کنم.")],
      [L("Consult", "مشورت"), L("I ask for your input, then I decide.", "نظرت را می‌پرسم و سپس من تصمیم می‌گیرم.")],
      [L("Agree", "توافق"), L("We decide together.", "با هم تصمیم می‌گیریم.")],
      [L("Advise", "توصیه"), L("I advise; you decide.", "من توصیه می‌کنم. تو تصمیم می‌گیری.")],
      [L("Inquire", "پرس‌وجو پس از تصمیم"), L("You decide, then tell me.", "تو تصمیم می‌گیری و بعد به من می‌گویی.")],
      [L("Delegate", "تفویض کامل"), L("It's yours. I don't need to know.", "کاملاً با توست. لازم نیست در جریانش باشم.")]
    ],
    decision: L("Decision", "تصمیم"), exp: L("Their experience with this kind of decision", "تجربه‌ی او با این نوع تصمیم"), cost: L("Cost of getting it wrong", "هزینه‌ی تصمیم اشتباه"),
    decisions: [L("Team rituals (standup format, retro style)", "روال جلسات تیم (قالب standup، سبک retro)"), L("Choosing a library or tool", "انتخاب یک کتابخانه یا ابزار"), L("Architecture of a new service", "معماری یک سرویس جدید"), L("On-call rotation design", "طراحی چرخه‌ی on-call"), L("Quarterly roadmap priorities", "اولویت‌های نقشه‌ی راه فصلی"), L("Hiring decision for a senior engineer", "تصمیم جذب یک مهندس ارشد")],
    decisionRisk: [0, 0, 1, 0, 1, 1],
    exps: [L("New to it", "تازه‌کار"), L("Some experience", "تا حدی باتجربه"), L("Proven", "باتجربه و قابل اتکا")],
    costs: [L("Low — easy to reverse", "کم، به‌راحتی برگشت‌پذیر"), L("High — hard to reverse", "زیاد، به‌سختی برگشت‌پذیر")],
    suggest: L("Suggested starting level", "سطح پیشنهادی برای شروع"),
    note: L("A starting point for a conversation, not a rule. Agree the level explicitly with the person, and move it up one step as they show task-relevant maturity (Andy Grove's term: maturity is per task, not per person).", "از این پیشنهاد برای شروع گفت‌وگو استفاده کنید و درباره‌ی میزان اختیار با فرد به توافق برسید. با افزایش آمادگی او برای همان task، می‌توانید اختیار بیشتری واگذار کنید. به تعبیر Andy Grove، بلوغ کاری هر فرد به task مورد نظر هم بستگی دارد.")
  };

  /* ---------------- first 90 ---------------- */
  var F90 = {
    title: L("Your first 90 days with a new team", "۹۰ روز نخست با یک تیم جدید"),
    intro: L("For a new manager, or an experienced one joining a new company. The biggest early mistake is changing things before you understand them.", "این برنامه برای مدیر تازه‌کار یا مدیر باتجربه‌ای است که به شرکت جدیدی پیوسته است. پیش از تغییر روش‌ها و فرآیندها، دلیل شکل‌گیری و نحوه‌ی کار آن‌ها را بشناسید."),
    phases: [
      { w: L("Days 1–30 · Learn", "روز ۱ تا ۳۰ · یادگیری"), i: [L("1:1s with every report, peer, your PM and your manager", "۱:۱ با همه‌ی اعضای تیم، همتایان، PM و مدیر ارشد"), L("Skip-levels if you manage managers", "جلسات skip-level اگر مدیرِ مدیران هستید"), L("Read the docs, recent incidents and metrics", "مطالعه‌ی مستندات، incidentهای اخیر و metricها"), L("Keep a list of surprises; change almost nothing", "نکته‌هایی را که غافل‌گیرتان می‌کند ثبت کنید. فعلاً تقریباً چیزی را تغییر ندهید")] },
      { w: L("Days 31–60 · Diagnose and agree", "روز ۳۱ تا ۶۰ · تشخیص و توافق"), i: [L("Share a written 'what I have learned' with your manager and team", "یادداشت «آنچه آموختم» را با مدیر و تیم به اشتراک بگذارید"), L("Agree two or three priorities", "روی دو یا سه اولویت توافق کنید"), L("Fix one visible annoyance — a quick win", "یک مشکل کوچک و روشن را رفع کنید تا تیم نتیجه‌ای سریع ببیند")] },
      { w: L("Days 61–90 · Deliver and set up", "روز ۶۱ تا ۹۰ · delivery و ایجاد سازوکارها"), i: [L("Land the quick win and credit the people who did it", "بهبود سریع را به نتیجه برسانید و سهم افرادی را که آن را انجام داده‌اند به رسمیت بشناسید"), L("Start one structural change", "یک تغییر ساختاری را آغاز کنید"), L("Set next quarter's goals; settle rituals and a few metrics", "اهداف فصل بعد را تعیین کنید. روال جلسات و چند metric را تثبیت کنید")] }
    ],
    tip: L("Ask everyone the same three questions: What should we keep? What should we change? What should I know that nobody will tell me?", "از همه همان سه پرسش را بپرسید: چه چیزی را حفظ کنیم؟ چه چیزی را تغییر دهیم؟ چه چیزی را باید بدانم که کسی به من نخواهد گفت؟")
  };

  /* ---------------- team health ---------------- */
  var HEALTH = {
    title: L("A team-health check you can run every quarter", "بررسی سلامت تیم که می‌توانید هر فصل اجرا کنید"),
    intro: L("Google's Project Aristotle studied 180 teams and found five dynamics that separate effective teams — with psychological safety the most important by far.", "در Project Aristotle شرکت Google، ۱۸۰ تیم بررسی شدند و پنج ویژگی متمایزکننده‌ی تیم‌های اثربخش مشخص شد. ایمنی روانی با فاصله، مهم‌ترین ویژگی بود."),
    head: [L("Dynamic", "ویژگی"), L("Ask the team", "از تیم بپرسید"), L("Warning sign", "نشانه‌ی هشدار")],
    rows: [
      [L("1 · Psychological safety", "۱ · ایمنی روانی"), L("Can we take a risk here without feeling insecure or embarrassed?", "آیا در این تیم می‌توانیم ریسک کنیم، بدون احساس ناامنی یا شرمندگی؟"), L("People avoid 'silly' questions and fear giving feedback", "افراد از پرسیدن پرسش‌های «ساده» پرهیز می‌کنند و از دادن بازخورد می‌ترسند")],
      [L("2 · Dependability", "۲ · قابل اتکا بودن"), L("Can we count on each other for quality work on time?", "آیا می‌توانیم برای کار باکیفیت و به‌موقع روی یکدیگر حساب کنیم؟"), L("Poor visibility of progress; diffuse ownership", "پیشرفت کار روشن نیست. مسئولیت‌ها مشخص نیستند")],
      [L("3 · Structure & clarity", "۳ · ساختار و شفافیت"), L("Are goals, roles and plans clear?", "آیا اهداف، نقش‌ها و برنامه‌ها روشن‌اند؟"), L("Unclear decision owners or rationale", "نامشخص بودن مالک تصمیم‌ها یا دلیل آن‌ها")],
      [L("4 · Meaning", "۴ · معنا"), L("Is this work personally important to us?", "آیا این کار برای تک‌تک ما اهمیت شخصی دارد؟"), L("Work assigned only by skill or workload; little recognition", "تخصیص کار فقط بر اساس مهارت یا حجم کار، قدردانی اندک")],
      [L("5 · Impact", "۵ · اثرگذاری"), L("Do we believe our work makes a difference?", "آیا باور داریم کارمان تفاوتی ایجاد می‌کند؟"), L("Work framed as 'treading water'; too many goals", "افراد از احساس درجا زدن در کار می‌گویند و تعداد هدف‌ها بیش از حد است")]
    ],
    doraTitle: L("Delivery signals: DORA's five metrics", "شاخص‌های delivery: پنج metric پژوهش DORA"),
    dora: [
      [L("Change lead time", "زمان لازم برای رسیدن تغییر به production (lead time)"), L("Throughput", "توان عملیاتی")],
      [L("Deployment frequency", "دفعات deploy"), L("Throughput", "توان عملیاتی")],
      [L("Failed-deployment recovery time", "زمان بازیابی deploy ناموفق"), L("Throughput", "توان عملیاتی")],
      [L("Change fail rate", "نرخ شکست تغییرات"), L("Instability", "ناپایداری")],
      [L("Deployment rework rate", "نرخ دوباره‌کاری deploy"), L("Instability", "ناپایداری")]
    ],
    doraNote: L("Use them as team-owned trends against your own baseline — never as individual targets or cross-team league tables. DORA itself warns that metrics turned into goals get gamed.", "روند این metricها را در سطح تیم و نسبت به خط پایه‌ی خود تیم بررسی کنید. آن‌ها را به هدف فردی یا جدول رتبه‌بندی تیم‌ها تبدیل نکنید. DORA هم هشدار می‌دهد وقتی metric هدف شود، افراد به جای بهبود واقعی، آن را دست‌کاری می‌کنند."),
    goodhart: L("When a measure becomes a target, it ceases to be a good measure.", "با تبدیل metric به هدف، ممکن است عدد آن بهتر شود بدون اینکه نتیجه‌ی کار بهبود پیدا کند."),
    goodhartSrc: L("Goodhart's law, in Marilyn Strathern's phrasing", "قانون گودهارت، به بیان Marilyn Strathern"),
    gallup: L("Engagement is a manager outcome: Gallup attributes at least **70% of the variance in engagement** across business units to the manager. The first of its twelve engagement elements is simply knowing what is expected of you at work.", "تعلق شغلی به عملکرد مدیر وابسته است: Gallup دست‌کم **۷۰٪ از تفاوت تعلق شغلی** میان واحدهای کسب‌وکار را به مدیر نسبت می‌دهد. اولین مورد از دوازده عامل تعلق شغلی در این پژوهش، روشن‌بودن انتظارات شغلی برای فرد است.")
  };

  /* ---------------- span ---------------- */
  var SPAN = {
    title: L("How many people can you really lead?", "واقعاً چند نفر را می‌توانید راهبری کنید؟"),
    intro: L("There is no single right number; it depends on how senior the team is and how new or ambiguous the work is. These ranges are common starting points.", "یک عدد ثابت برای همه‌ی تیم‌ها وجود ندارد. تجربه‌ی افراد، تازگی کار و میزان ابهام تعیین‌کننده‌اند. این بازه‌ها نقطه‌ی شروع رایجی برای تصمیم‌گیری‌اند."),
    head: [L("Situation", "موقعیت"), L("Common range", "بازه‌ی رایج"), L("Why", "چرا")],
    rows: [
      [L("Fewer than 4 reports", "کمتر از ۴ نفر"), L("—", "—"), L("You are effectively a tech lead manager: heavy hands-on work, limited management leverage (Will Larson)", "عملاً TLM هستید: سهم کار فنی مستقیم زیاد است و فرصت اثرگذاری از طریق مدیریت محدود است (Will Larson)")],
      [L("First-line EM", "مدیر مستقیم تیم"), L("6–8 engineers", "۶ تا ۸ مهندس"), L("Enough for a healthy on-call rotation; grow to 8–10, then split (Will Larson)", "برای داشتن چرخه‌ی on-call سالم کافی است. تیم را تا ۸ تا ۱۰ نفر رشد دهید و سپس تقسیم کنید (Will Larson)")],
      [L("Manager of managers", "مدیرِ مدیران"), L("4–6 managers", "۴ تا ۶ مدیر"), L("Coaching managers takes more time per person than coaching engineers (Will Larson)", "coach کردن مدیران برای هر نفر زمان بیشتری از coach کردن مهندسان می‌گیرد (Will Larson)")],
      [L("Very large spans", "دامنه‌های بسیار بزرگ"), L("15–50", "۱۵ تا ۵۰"), L("Only with senior, autonomous people and stable work; the manager becomes a coach. Google ran ~30-report teams around 2013 to discourage micromanagement; a Meta applied-AI team was set up at ~50 per manager in 2026", "فقط با افراد ارشد و مستقل و کاری که روال پایداری دارد. در این حالت، مدیر بیشتر نقش coach دارد. Google حدود سال ۲۰۱۳ تیم‌هایی با حدود ۳۰ direct report داشت تا از micromanagement جلوگیری کند. در سال ۲۰۲۶ هم یک تیم هوش مصنوعی کاربردی در Meta با حدود ۵۰ نفر به ازای هر مدیر راه‌اندازی شد")]
    ],
    tip: L("The industry is widening spans (Amazon targeted at least 15% more ICs per manager by early 2025). Wider spans work only if you invest in tech leads, written decision rights and peer mentoring.", "تعداد direct reportها در صنعت رو به افزایش است. مثلاً Amazon هدف افزایش دست‌کم ۱۵ درصدی نسبت IC به مدیر را تا اوایل ۲۰۲۵ تعیین کرد. این دامنه‌های بزرگ‌تر وقتی مؤثرند که روی راهبران فنی، حدود تصمیم‌گیری مکتوب و mentorship میان همتایان سرمایه‌گذاری کنید.")
  };

  /* ---------------- reading ---------------- */
  var BOOKS = [
    ["The Manager's Path", "Camille Fournier", L("Stage by stage, from tech lead to CTO. The best map of the management ladder.", "مسیر نردبان مدیریت را از راهبر فنی تا CTO، مرحله به مرحله توضیح می‌دهد.")],
    ["High Output Management", "Andy Grove", L("Managerial leverage: your output is the output of your organisation and the neighbours you influence.", "گسترش اثرگذاری مدیریتی: خروجی شما از نتایج سازمان خودتان و واحدهای مجاوری که بر آن‌ها اثر می‌گذارید سنجیده می‌شود.")],
    ["An Elegant Puzzle", "Will Larson", L("Systems thinking for engineering management: sizing teams, org design, succession.", "تفکر سیستمی برای مدیریت مهندسی: اندازه‌ی تیم‌ها، طراحی سازمان، جانشینی.")],
    ["The Engineering Executive's Primer", "Will Larson", L("What directors, VPs and CTOs actually do.", "Directorها، VPها و CTOها در عمل چه می‌کنند.")],
    ["Staff Engineer", "Will Larson", L("The IC path at Staff and beyond, and its four archetypes.", "مسیر IC در سطح Staff و بالاتر و چهار الگوی آن.")],
    ["Resilient Management", "Lara Hogan", L("Mentoring, coaching and sponsoring; people's core needs at work.", "mentorship، coaching و sponsorship، نیازهای بنیادین افراد در کار.")],
    ["The Making of a Manager", "Julie Zhuo", L("A clear first-time manager's playbook: purpose, people, process.", "دستورالعملی روشن برای مدیران تازه‌کار: هدف، افراد، فرآیند.")],
    ["Radical Candor", "Kim Scott", L("Feedback that cares and challenges, and the three career conversations.", "بازخورد صریح همراه با توجه به فرد، به‌علاوه‌ی سه گفت‌وگو درباره‌ی مسیر شغلی.")],
    ["The Fearless Organization", "Amy Edmondson", L("The research on psychological safety, and how leaders build it.", "پژوهش‌های ایمنی روانی و این‌که راهبران چگونه آن را می‌سازند.")],
    ["Team Topologies", "Skelton & Pais", L("Designing teams around flow and cognitive load.", "طراحی تیم‌ها بر اساس جریان کار و بار شناختی.")],
    ["Accelerate", "Forsgren, Humble & Kim", L("The research behind DORA's delivery metrics.", "پژوهش پشتیبان metricهای delivery در DORA.")],
    ["Turn the Ship Around!", "L. David Marquet", L("Pushing decisions to where the information is.", "سپردن تصمیم‌ها به کسانی که اطلاعات لازم را دارند.")]
  ];
  var FRAMEWORKS = [
    ["Dropbox Engineering Career Framework", "https://dropbox.github.io/dbx-career-framework/"],
    ["GitLab engineering management job families", "https://handbook.gitlab.com/job-families/engineering/engineering-management/"],
    ["Lara Hogan — Manager levels redux", "https://larahogan.me/blog/manager-levels-redux/"],
    ["Google re:Work — Project Oxygen & Aristotle", "https://rework.withgoogle.com/"],
    ["DORA research", "https://dora.dev/"],
    ["progression.fyi — public career ladders", "https://progression.fyi/"]
  ];

  /* ---------------- glossary ---------------- */
  var GLOSS = [
    [L("Acting (trial) period", "دوره‌ی آزمایشی (acting)"), L("A time-boxed, reversible trial of the manager role, typically six months and at most a year.", "آزمونی زمان‌دار و برگشت‌پذیر برای نقش مدیریت، معمولاً شش ماه و حداکثر یک سال.")],
    [L("Bar raiser", "Bar Raiser"), L("An interviewer from outside the hiring team who can block an offer to keep the hiring bar high (Amazon's term).", "مصاحبه‌گری خارج از تیم استخدام‌کننده که برای حفظ معیارهای جذب، می‌تواند مانع ارائه‌ی پیشنهاد شغلی شود (اصطلاح Amazon).")],
    [L("Brag document", "brag document"), L("A running record of your outcomes, decisions and people you grew — the raw material of a promotion case.", "ثبت مستمر نتایج، تصمیم‌ها و افرادی که رشد داده‌اید، مبنای تهیه‌ی پرونده‌ی ارتقا.")],
    [L("Calibration", "کالیبراسیون (calibration)"), L("A meeting where managers compare ratings or promotion cases against the rubric and each other, to make them consistent.", "جلسه‌ای که در آن مدیران امتیازها یا پرونده‌های ارتقا را با معیارها و با یکدیگر مقایسه می‌کنند تا یکدست شوند.")],
    [L("Down-level", "down-level شدن"), L("Being hired at a lower level than you interviewed for, or than your current title suggests.", "استخدام در سطحی پایین‌تر از سطحی که برایش مصاحبه دادید یا عنوان فعلی‌تان نشان می‌دهد.")],
    [L("Engagement", "تعلق شغلی (engagement)"), L("How involved in and enthusiastic about their work and workplace people are; heavily shaped by their manager.", "میزان درگیری و اشتیاق افراد نسبت به کار و محیط کارشان که عملکرد مدیر بر آن اثر زیادی دارد.")],
    [L("Headcount", "headcount"), L("The number of approved roles — the unit of investment in an engineering org.", "تعداد موقعیت‌های مصوب، واحد سرمایه‌گذاری در یک سازمان مهندسی.")],
    [L("IC (individual contributor)", "مشارکت‌کننده‌ی فردی (IC)"), L("Someone who creates impact through their own technical work and influence, without direct reports.", "کسی که بدون direct report، از طریق کار و راهبری فنی و نفوذ خود اثر می‌گذارد.")],
    [L("Impact", "اثرگذاری (impact)"), L("The effect of your work on business priorities — the umbrella every dimension is judged under.", "اثر کار شما بر اولویت‌های کسب‌وکار که در سنجش همه‌ی ابعاد نردبان در نظر گرفته می‌شود.")],
    [L("Level band", "بازه‌ی حقوقی سطح"), L("The pay range attached to a level. Bands of adjacent levels overlap.", "بازه‌ی حقوقی مربوط به یک سطح. بازه‌های سطوح مجاور با هم هم‌پوشانی دارند.")],
    [L("Leverage", "توان گسترش اثرگذاری"), L("How much impact you create per unit of your own effort — through people, systems and decisions.", "میزان اثری که به ازای هر واحد تلاش خودتان، از طریق افراد، سیستم‌ها و تصمیم‌ها، ایجاد می‌کنید.")],
    [L("Manager of managers", "مدیرِ مدیران"), L("A manager whose reports include other managers; usually starts around Senior EM.", "مدیری که زیرمجموعه‌اش شامل مدیران دیگر است، معمولاً از حدود سطح Senior EM آغاز می‌شود.")],
    [L("North-star metric", "north-star metric"), L("One metric that captures the core value an organisation delivers, used to align teams.", "یک metric واحد که ارزش اصلی خلق‌شده توسط سازمان را نشان می‌دهد و برای هم‌سو کردن تیم‌ها به کار می‌رود.")],
    [L("P&L", "سود و زیان (P&L)"), L("Profit and loss: owning the revenue and cost of a business area.", "سود و زیان: مالکیت درآمد و هزینه‌ی یک حوزه‌ی کسب‌وکار.")],
    [L("Pillar", "pillar"), L("A major, company-level part of the organisation, usually led by a VP or senior director.", "بخشی بزرگ و در سطح سازمان که معمولاً یک VP یا Senior Director آن را راهبری می‌کند.")],
    [L("Promotion packet", "پرونده‌ی ارتقا"), L("The written case for a promotion, mapped to the next level's rubric.", "پرونده‌ی مکتوب برای ارتقا، منطبق بر معیارهای سطح بعد.")],
    [L("Psychological safety", "ایمنی روانی"), L("A shared belief that the team is safe for interpersonal risk-taking — asking, admitting mistakes, disagreeing.", "باور مشترک اعضای تیم به اینکه می‌توانند سؤال بپرسند، اشتباهشان را بپذیرند یا مخالفت کنند، بدون ترس از تحقیر یا پیامد منفی.")],
    [L("Scope", "دامنه‌ی مسئولیت و اثرگذاری (scope)"), L("The size of the problem you are trusted to own — the main axis of leveling.", "گستردگی و اندازه‌ی مسئله‌هایی که مسئول حل آن‌ها هستید، محور اصلی سطح‌بندی.")],
    [L("Skip-level", "skip-level"), L("A conversation between a manager and their reports' reports.", "گفت‌وگوی مدیر با افرادی که یک یا چند لایه پایین‌تر از او هستند و مستقیم به او report نمی‌کنند.")],
    [L("Span of control", "دامنه‌ی کنترل (span of control)"), L("How many people report directly to one manager.", "تعداد افرادی که مستقیماً به یک مدیر گزارش می‌دهند.")],
    [L("Sponsor", "حامی (sponsor)"), L("Someone senior who spends their credibility on your behalf — putting your name forward and arguing for you.", "فردی ارشد که با اتکا به اعتبار خودش نام شما را پیشنهاد می‌دهد و از شما دفاع می‌کند.")],
    [L("SPoF", "نقطه‌ی شکست واحد (SPoF)"), L("Single point of failure: a person (or system) the work cannot continue without.", "نقطه‌ی شکست واحد: فرد (یا سیستمی) که کار بدون او ادامه پیدا نمی‌کند.")],
    [L("TLM", "TLM"), L("Tech lead manager: leads a small team technically and as its people manager.", "راهبر فنی-مدیر: یک تیم کوچک را هم از نظر فنی و هم به عنوان مدیر انسانی راهبری می‌کند.")],
    [L("VUCA", "VUCA"), L("Volatility, uncertainty, complexity and ambiguity — the conditions senior leaders are expected to navigate.", "تلاطم، عدم قطعیت، پیچیدگی و ابهام، شرایطی که راهبران ارشد باید بتوانند در آن‌ها تصمیم بگیرند و تیم‌ها را پیش ببرند.")]
  ];

  var tab = "one-on-one", delState = { d: 2, e: 1, c: 1 };

  function copyBlock(id, text, title) {
    return '<div class="card"><div class="fig-head"><h3>' + t(title) + '</h3><button class="btn small" data-copy="' + id + '">' + icon("copy") + UI.u("copy") + '</button></div><div class="copy-box"><pre id="' + id + '">' + G.esc(text) + "</pre></div></div>";
  }

  function fbOut(v) {
    var s = v.s || "…", b = v.b || "…", i = v.i || "…";
    var txt = G.isFa()
      ? s + "، " + b + ". اثرش این بود که " + i + "." + (v.r ? " از این به بعد، می‌توانی " + v.r + "؟" : "") + " نظر خودت چیست؟"
      : s + ", " + b + ". The impact was that " + i + "." + (v.r ? " Next time, could you " + v.r + "?" : "") + " What is your take?";
    return txt.charAt(0).toUpperCase() + txt.slice(1);
  }

  function delLevel() {
    var base = [2, 4, 6][delState.e];
    var risk = DEL.decisionRisk[delState.d] + delState.c; // 0..2
    var lv = base + (risk === 0 ? 1 : risk === 2 ? -1 : 0);
    return Math.max(1, Math.min(7, lv));
  }
  function delHTML() {
    var lv = delLevel();
    var sel = function (id, opts, cur) { return '<select id="del-' + id + '" data-del="' + id + '">' + opts.map(function (o, i) { return '<option value="' + i + '"' + (i === cur ? " selected" : "") + ">" + t(o) + "</option>"; }).join("") + "</select>"; };
    var h = '<div class="two-col"><div class="card"><div class="field"><label for="del-d">' + t(DEL.decision) + "</label>" + sel("d", DEL.decisions, delState.d) + '</div><div class="field"><label for="del-e">' + t(DEL.exp) + "</label>" + sel("e", DEL.exps, delState.e) + '</div><div class="field"><label for="del-c">' + t(DEL.cost) + "</label>" + sel("c", DEL.costs, delState.c) + "</div>" +
      '<div class="lesson"><div class="muted" style="font-size:var(--fs-xs)">' + t(DEL.suggest) + '</div><div style="font-size:1.4rem;font-weight:700">' + G.num(lv) + " · " + t(DEL.levels[lv - 1][0]) + "</div><p>" + t(DEL.levels[lv - 1][1]) + "</p></div></div>";
    h += '<div class="card" aria-live="polite"><ol style="list-style:none;padding:0;margin:0;display:grid;gap:6px">';
    DEL.levels.forEach(function (x, i) {
      var on = i + 1 === lv;
      h += '<li style="display:grid;grid-template-columns:34px minmax(0,1fr);gap:10px;align-items:center;padding:8px 10px;border-radius:10px;' + (on ? "background:color-mix(in srgb, var(--hl) 22%, var(--surface));box-shadow:inset 0 0 0 1px var(--ink)" : "background:var(--surface-2)") + '"><span class="code' + (on ? "" : " ghost") + '" style="text-align:center">' + G.num(i + 1) + "</span><span><b>" + t(x[0]) + '</b> <span class="muted" style="font-size:var(--fs-s)">— ' + t(x[1]) + "</span></span></li>";
    });
    h += "</ol></div></div>" + '<p class="tbl-note">' + t(DEL.note) + "</p>";
    return h;
  }

  function candorGrid() {
    var q = FB.candor, cell = function (x, hl) {
      return '<div style="padding:14px;border-radius:10px;background:' + (hl ? "color-mix(in srgb, var(--hl) 24%, var(--surface))" : "var(--surface-2)") + ";border:1px solid " + (hl ? "var(--ink)" : "var(--line)") + '"><b>' + t(x.t) + '</b><p class="muted" style="font-size:var(--fs-s);margin-top:4px">' + t(x.b) + "</p></div>";
    };
    return '<figure class="card fig"><div class="fig-title">' + t(FB.candorTitle) + '</div><div style="display:grid;grid-template-columns:auto minmax(0,1fr);gap:8px;align-items:stretch"><div style="writing-mode:vertical-rl;transform:rotate(180deg);font-size:var(--fs-xs);color:var(--muted);text-align:center;font-weight:700">' + t(FB.axisY) + '</div><div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">' +
      cell(q[1]) + cell(q[0], true) + cell(q[3]) + cell(q[2]) + '</div><div></div><div style="font-size:var(--fs-xs);color:var(--muted);text-align:center;font-weight:700">' + t(FB.axisX) + "</div></div><figcaption>" + t(L("After Kim Scott, Radical Candor.", "برگرفته از Kim Scott، کتاب Radical Candor.")) + "</figcaption></figure>";
  }

  var panels = {
    "one-on-one": function () {
      return '<div class="section-head"><h2>' + t(ONE.title) + "</h2><p>" + t(ONE.intro) + '</p></div><div class="two-col">' + copyBlock("tpl11", t(ONE.tpl), L("1:1 template", "قالب جلسه‌ی ۱:۱")) + '<div class="card"><h3>' + t(ONE.qTitle) + "</h3>" + UI.list(ONE.qs) + "</div></div>" + UI.callout("tip", null, ONE.tip);
    },
    career: function () {
      return '<div class="section-head"><h2>' + t(CAREER.title) + "</h2><p>" + t(CAREER.intro) + '</p></div><div class="grid g3">' + CAREER.steps.map(function (s) { return '<div class="card"><h3>' + t(s.t) + '</h3><p style="font-size:var(--fs-s);color:var(--ink-2)">' + t(s.b) + '</p><p class="quote" style="font-size:.98rem">' + t(s.q) + "</p></div>"; }).join("") + "</div>" + UI.callout("tip", null, CAREER.tip);
    },
    feedback: function () {
      var v = G.store.get("fb.v1", null) || { s: t(FB.ex.s), b: t(FB.ex.b), i: t(FB.ex.i), r: t(FB.ex.r) };
      var f = function (k, lab) { return '<div class="field"><label for="fb-' + k + '">' + t(lab) + '</label><textarea id="fb-' + k + '" data-fb="' + k + '" rows="2">' + G.esc(v[k] || "") + "</textarea></div>"; };
      return '<div class="section-head"><h2>' + t(FB.title) + "</h2><p>" + t(FB.intro) + '</p></div><div class="two-col"><form class="card" id="fbForm" autocomplete="off">' + f("s", FB.s) + f("b", FB.b) + f("i", FB.i) + f("r", FB.r) + '<p class="tbl-note">' + t(FB.exNote) + "</p></form>" +
        '<div class="grid" style="gap:14px"><div class="card"><div class="fig-head"><h3>' + t(FB.out) + '</h3><button class="btn small" data-copy="fbOut">' + icon("copy") + UI.u("copy") + '</button></div><p class="quote" id="fbOut" style="font-size:1.02rem">' + G.esc(fbOut(v)) + "</p>" + UI.checklist(FB.tips, "dot") + "</div>" + candorGrid() + "</div></div>";
    },
    delegation: function () {
      return '<div class="section-head"><h2>' + t(DEL.title) + "</h2><p>" + t(DEL.intro) + '</p></div><div id="delBox">' + delHTML() + "</div>";
    },
    first90: function () {
      return '<div class="section-head"><h2>' + t(F90.title) + "</h2><p>" + t(F90.intro) + '</p></div><div class="phases">' + F90.phases.map(function (p) { return '<div class="phase"><span class="ph-when">' + t(p.w) + "</span>" + UI.checklist(p.i, "dot") + "</div>"; }).join("") + "</div>" + UI.callout("tip", null, F90.tip);
    },
    health: function () {
      return '<div class="section-head"><h2>' + t(HEALTH.title) + "</h2><p>" + t(HEALTH.intro) + "</p></div>" + UI.table(HEALTH.head.map(t), HEALTH.rows.map(function (r) { return r.map(t); }), { rowHeads: true, note: L("Source: Google re:Work, Project Aristotle and its team-effectiveness discussion guide.", "منبع: Google re:Work، Project Aristotle و راهنمای گفت‌وگوی اثربخشی تیم.") }) +
        '<div class="two-col" style="margin-top:16px"><div class="card"><h3>' + t(HEALTH.doraTitle) + "</h3>" + UI.table([t(L("Metric", "metric")), t(L("Measures", "می‌سنجد"))], HEALTH.dora.map(function (r) { return r.map(t); })) + '<p class="tbl-note">' + t(HEALTH.doraNote) + '</p></div><div class="grid" style="gap:14px"><div class="card"><p class="quote">' + t(HEALTH.goodhart) + "<cite>" + t(HEALTH.goodhartSrc) + '</cite></p></div><div class="card"><p style="font-size:var(--fs-s);color:var(--ink-2)">' + md(HEALTH.gallup) + "</p></div></div></div>";
    },
    span: function () {
      return '<div class="section-head"><h2>' + t(SPAN.title) + "</h2><p>" + t(SPAN.intro) + "</p></div>" + UI.table(SPAN.head.map(t), SPAN.rows.map(function (r) { return r.map(t); }), { rowHeads: true }) + UI.callout("note", null, SPAN.tip);
    },
    reading: function () {
      return '<div class="section-head"><h2>' + t(L("Reading list", "فهرست مطالعه")) + "</h2><p>" + t(L("Twelve books that cover the whole ladder, and the public frameworks this guide draws on.", "دوازده کتاب که کل نردبان را پوشش می‌دهند، به‌علاوه‌ی چارچوب‌های عمومی که این راهنما از آن‌ها بهره برده است.")) + '</p></div><div class="grid g3">' + BOOKS.map(function (b) { return '<div class="card"><h3 style="font-size:1rem">' + G.esc(b[0]) + '</h3><span class="muted" style="font-size:var(--fs-xs)">' + G.esc(b[1]) + '</span><p style="font-size:var(--fs-s);color:var(--ink-2)">' + t(b[2]) + "</p></div>"; }).join("") + "</div>" +
        '<div class="card" style="margin-top:14px"><h3>' + t(L("Public frameworks and research", "چارچوب‌ها و پژوهش‌های عمومی")) + '</h3><div class="src-list">' + FRAMEWORKS.map(function (f) { return '<a href="' + f[1] + '" target="_blank" rel="noopener">' + G.esc(f[0]) + ' <span class="ltr">— ' + G.esc(f[1]) + "</span></a>"; }).join("") + '</div><p class="tbl-note">' + t(L("Links need an internet connection; everything else in this guide works offline.", "این پیوندها به اینترنت نیاز دارند. باقی این راهنما آفلاین کار می‌کند.")) + "</p></div>";
    },
    glossary: function () {
      var other = G.isFa() ? "en" : "fa";
      return '<div class="section-head"><h2>' + t(L("Glossary", "واژه‌نامه")) + "</h2><p>" + t(L("The terms this guide uses, with their equivalent in the other language.", "اصطلاحاتی که در این راهنما به کار رفته‌اند، همراه با معادلشان در زبان دیگر.")) + "</p></div>" +
        UI.table([t(L("Term", "اصطلاح")), t(L("Meaning", "معنا")), G.isFa() ? "English" : "فارسی"], GLOSS.map(function (g) { return ["<b>" + t(g[0]) + "</b>", t(g[1]), '<span dir="' + (other === "fa" ? "rtl" : "ltr") + '" lang="' + other + '" style="font-family:' + (other === "fa" ? "var(--font-fa)" : "var(--font-sans)") + '">' + G.esc(g[0][other]) + "</span>"]; }));
    }
  };

  function render(param) {
    if (param && panels[param]) tab = param;
    var h = UI.pageHead({ eyebrow: C.eyebrow, icon: "tool", title: C.title, lede: C.lede });
    h += '<section class="section" id="tools"><div class="pill-tabs" role="tablist" aria-label="' + t(C.title) + '">' + TOOLS.map(function (x) { return '<button role="tab" data-tool="' + x.id + '" aria-selected="' + (x.id === tab) + '">' + icon(x.icon, "inline-icon") + t(x.n) + "</button>"; }).join("") + '</div><div id="toolPanel" class="grid" style="gap:16px">' + panels[tab]() + "</div></section>";
    h += UI.next("faq", C.next);
    return h;
  }

  function show(root, id) {
    tab = id;
    G.$$("[data-tool]", root).forEach(function (b) { b.setAttribute("aria-selected", String(b.getAttribute("data-tool") === id)); });
    G.$("#toolPanel", root).innerHTML = panels[id]();
  }

  G.views.toolkit = {
    lede: C.lede,
    render: render,
    mount: function (root) {
      root.addEventListener("click", function (e) {
        var b = e.target.closest("[data-tool]");
        if (b) { show(root, b.getAttribute("data-tool")); history.replaceState(null, "", "#/toolkit/" + tab); }
      });
      root.addEventListener("input", function (e) {
        var f = e.target.closest("[data-fb]");
        if (!f) return;
        var v = {};
        G.$$("[data-fb]", root).forEach(function (x) { v[x.getAttribute("data-fb")] = x.value.trim(); });
        G.store.set("fb.v1", v);
        G.$("#fbOut", root).textContent = fbOut(v);
      });
      root.addEventListener("change", function (e) {
        var s = e.target.closest("[data-del]");
        if (!s) return;
        delState[s.getAttribute("data-del")] = +s.value;
        var keep = s.id;
        G.$("#delBox", root).innerHTML = delHTML();
        var el = document.getElementById(keep); if (el) el.focus();
      });
    },
    onParam: function (root, param) { if (param && panels[param]) { show(root, param); G.$("#tools", root).scrollIntoView(); } },
    index: function () {
      return TOOLS.map(function (x) { return { type: "tool", title: t(x.n), snip: "", href: "#/toolkit/" + x.id, extra: x.id + " SBI radical candor delegation poker Aristotle DORA Goodhart span" }; })
        .concat(GLOSS.map(function (g) { return { type: "term", title: t(g[0]), snip: t(g[1]), href: "#/toolkit/glossary", extra: g[0].en + " " + g[0].fa }; }));
    }
  };
})();

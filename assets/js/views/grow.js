(function () {
  "use strict";
  var G = window.ELG, L = G.L, t = G.t, md = G.md, icon = G.icon, UI = G.ui;

  var C = {
    eyebrow: L("Grow", "رشد"),
    title: L("Growing to the next level", "رشد تا سطح بعد"),
    lede: L(
      "Promotion is a lagging indicator. First you operate at the next level — consistently, visibly, in every dimension — and then the title follows. This page shows how that works and what each transition asks of you.",
      "ارتقا یک شاخص پسینی (lagging indicator) است. ابتدا در سطح بعد عمل می‌کنید (به‌طور پایدار، قابل مشاهده و در همه‌ی ابعاد) و سپس عنوان از پی آن می‌آید. این صفحه نشان می‌دهد این فرآیند چگونه کار می‌کند و هر گذار از شما چه می‌خواهد."
    ),
    tldr: [
      L("Promotions **recognise** sustained next-level work — usually two quarters or more. They do not predict it.", "ارتقا، کار پایدار در سطح بعد را **به رسمیت می‌شناسد** (معمولاً دو فصل یا بیشتر)؛ آن را پیش‌بینی نمی‌کند."),
      L("**Delivery is table stakes.** The gap is almost always scope, ambiguity or leverage.", "**delivery حداقلِ لازم است.** فاصله تقریباً همیشه در دامنه‌ی اثر، مدیریت ابهام یا اهرم اثرگذاری است."),
      L("You need a **sponsor**, not only a mentor: someone who spends their credibility on your case.", "به یک **حامی (sponsor)** نیاز دارید، نه فقط mentor: کسی که اعتبار خودش را پشتوانه‌ی پرونده‌ی شما می‌کند.")
    ],
    jump: [
      { href: "how", label: L("How promotion happens", "ارتقا چگونه اتفاق می‌افتد") },
      { href: "stall", label: L("Why people stall", "چرا افراد متوقف می‌شوند") },
      { href: "transitions", label: L("Transition guides", "راهنمای گذارها") },
      { href: "case", label: L("Build your case", "پرونده‌تان را بسازید") },
      { href: "sponsor", label: L("Mentor, coach, sponsor", "mentor، coach، sponsor") }
    ],
    howTitle: L("How a promotion really happens", "ارتقا در عمل چگونه اتفاق می‌افتد"),
    howIntro: L("Five steps at almost every company. Only the first three are mostly in your hands — which is why the work happens long before the committee meets.", "پنج گام که تقریباً در همه‌ی شرکت‌ها تکرار می‌شود. فقط سه گام نخست عمدتاً در اختیار شماست؛ به همین دلیل، کار اصلی مدت‌ها پیش از تشکیل کمیته انجام می‌شود."),
    steps: [
      { title: L("Operate at the next level", "در سطح بعد عمل کنید"), body: L("Take on next-level scope with your manager's agreement and sustain it for two quarters or more. One heroic project is not a pattern.", "با توافق مدیرتان دامنه‌ی مسئولیت سطح بعد را بپذیرید و دست‌کم دو فصل آن را پایدار نگه دارید. یک پروژه‌ی قهرمانانه، الگو محسوب نمی‌شود."), you: L("Ask for the scope explicitly, and agree on what 'next level' looks like in your context.", "صریحاً دامنه‌ی بزرگ‌تر را درخواست کنید و درباره‌ی معنای «سطح بعد» در شرایط خودتان توافق کنید.") },
      { title: L("Make the evidence visible", "شواهد را قابل مشاهده کنید"), body: L("Keep a running record of outcomes, decisions and people you grew. Collect feedback from peers, reports and stakeholders as you go.", "سابقه‌ای پیوسته از نتایج، تصمیم‌ها و افرادی که رشد داده‌اید نگه دارید و در طول مسیر از هم‌تایان، اعضای تیم و ذی‌نفعان بازخورد جمع کنید."), you: L("A brag document, updated every two weeks.", "یک brag document که هر دو هفته به‌روز می‌شود.") },
      { title: L("Your manager sponsors the case", "مدیرتان حامی پرونده می‌شود"), body: L("Your manager writes or presents the case against the next-level rubric and pre-aligns it with peers and their own manager.", "مدیرتان پرونده را بر اساس معیارهای سطح بعد می‌نویسد یا ارائه می‌کند و پیشاپیش با هم‌تایان و مدیر خودش هم‌سو می‌کند."), you: L("Hand over a draft mapped to the rubric, and name the gaps honestly.", "یک پیش‌نویس منطبق بر معیارها تحویل دهید و شکاف‌ها را صادقانه نام ببرید.") },
      { title: L("Calibration or committee", "کالیبراسیون یا کمیته"), body: L("People who do not work with you daily compare your case with the rubric and with others at the same level.", "افرادی که هر روز با شما کار نمی‌کنند، پرونده‌تان را با معیارها و با دیگران در همان سطح مقایسه می‌کنند."), you: L("Nothing in the room. Everything before it: clear, quotable evidence.", "در جلسه، هیچ؛ پیش از آن، همه‌چیز: شواهد روشن و قابل نقل.") },
      { title: L("Decision and feedback", "تصمیم و بازخورد"), body: L("Yes — or 'not yet' with specific gaps. Budget and organisational need can delay a deserved promotion.", "بله، یا «هنوز نه» همراه با شکاف‌های مشخص. بودجه و نیاز سازمان ممکن است ارتقای شایسته را به تأخیر بیندازد."), you: L("If 'not yet', get the gaps in writing and a date to revisit.", "اگر پاسخ «هنوز نه» بود، شکاف‌ها را مکتوب و تاریخ بازبینی را مشخص کنید.") }
    ],
    stallTitle: L("Why strong performers stall", "چرا افراد توانمند متوقف می‌شوند"),
    stalls: [
      [L("Doing the current job extremely well", "انجام عالی کارهای سطح فعلی"), L("Excellence at your level is required. It is not evidence of the next one.", "عالی بودن در سطح فعلی لازم است، اما شاهدی بر سطح بعد نیست.")],
      [L("Activity instead of outcomes", "فعالیت به جای نتیجه"), L("Committees read impact: what changed because of you, and how you know.", "کمیته‌ها اثر را می‌خوانند: چه چیزی به خاطر شما تغییر کرد و از کجا می‌دانید.")],
      [L("Invisible work", "کار نادیده"), L("Work nobody wrote down does not exist in calibration. Record it as it happens.", "کاری که ثبت نشده، در کالیبراسیون وجود ندارد. همان زمان که انجام می‌شود ثبتش کنید.")],
      [L("One strong dimension", "درخشش فقط در یک بُعد"), L("Your floor decides. A people-growth gap sinks a strong delivery case.", "کفِ عملکرد تعیین‌کننده است. ضعف در رشد افراد، یک پرونده‌ی قوی در delivery را غرق می‌کند.")],
      [L("No sponsor", "نداشتن حامی"), L("Mentors advise; sponsors put their name on your case.", "mentor مشورت می‌دهد؛ sponsor نام خود را پشتوانه‌ی پرونده‌ی شما می‌کند.")],
      [L("No organisational need", "نبود نیاز سازمانی"), L("Manager promotions need a real next-level scope. Sometimes the fastest path is a different team.", "ارتقای مدیران به دامنه‌ی واقعی در سطح بعد نیاز دارد. گاهی سریع‌ترین مسیر، رفتن به تیمی دیگر است.")]
    ],
    transTitle: L("Transition guides", "راهنمای گذارها"),
    transIntro: L("Each step up asks you to stop something, start something, and keep what got you here. Pick your transition.", "هر گام رو به بالا از شما می‌خواهد کاری را کنار بگذارید، کاری را شروع کنید و آن‌چه شما را به این‌جا رساند حفظ کنید. گذار خودتان را انتخاب کنید."),
    shift: L("The big shift", "تغییر بزرگ"),
    plan: L("A 90-day focus", "تمرکز ۹۰ روزه"),
    days: [L("Days 1–30", "روز ۱ تا ۳۰"), L("Days 31–60", "روز ۳۱ تا ۶۰"), L("Days 61–90", "روز ۶۱ تا ۹۰")],
    stallsAt: L("Why people stall at this step", "چرا افراد در این گام متوقف می‌شوند"),
    ask: L("Ask your manager", "از مدیرتان بپرسید"),
    openLevel: L("Open the target level", "مشاهده‌ی سطح مقصد"),
    caseTitle: L("Build your case", "پرونده‌تان را بسازید"),
    caseIntro: L("Keep evidence as you go, and write it in the language of impact. Copy the template into your notes and update it every two weeks.", "شواهد را در طول مسیر جمع کنید و به زبان اثرگذاری بنویسید. این قالب را در یادداشت‌هایتان کپی کنید و هر دو هفته به‌روزش کنید."),
    bragTitle: L("Brag document template", "قالب brag document"),
    rewriteTitle: L("From activity to impact", "از فعالیت به اثر"),
    rewriteNote: L("Numbers are illustrative. Use your real before-and-after values.", "اعداد نمونه‌اند؛ از مقادیر واقعی قبل و بعد خودتان استفاده کنید."),
    rewriteHeads: [L("Activity (weak)", "فعالیت (ضعیف)"), L("Impact (strong)", "اثر (قوی)")],
    sponsorTitle: L("Mentor, coach, sponsor", "mentor، coach، sponsor"),
    sponsorIntro: L("Three different kinds of support, usually from different people. Lara Hogan's distinction is widely used in engineering orgs.", "سه نوع حمایت متفاوت که معمولاً از سه نفر متفاوت می‌آید. تمایزی که Lara Hogan مطرح کرده، در سازمان‌های مهندسی کاربرد گسترده‌ای دارد."),
    sponsorTip: L("Sponsorship is earned. People bet on you when backing you makes them look good — so deliver on the scope they help you get, and tell them about it.", "حمایت sponsor به دست آوردنی است. افراد وقتی روی شما شرط می‌بندند که حمایت از شما اعتبارشان را بالا ببرد؛ پس دامنه‌ای را که به کمکشان به دست می‌آورید به‌خوبی deliver کنید و آن‌ها را در جریان بگذارید."),
    next: L("IC or manager? The two ladders", "IC یا مدیر؟ دو نردبان")
  };

  var T = [
    { id: "t-IC", from: "IC", to: "A", label: L("IC → Acting", "IC ← آزمایشی"),
      shift: L("From solving problems yourself to solving them through other people.", "از حل مسائل توسط خودتان، به حل آن‌ها از طریق دیگران."),
      stop: [L("Measuring your day by code shipped", "سنجیدن روزتان با مقدار کدی که منتشر کرده‌اید"), L("Taking the critical-path tickets", "برداشتن taskهای مسیر بحرانی"), L("Ignoring people issues until they are urgent", "نادیده گرفتن مسائل انسانی تا وقتی فوری شوند")],
      start: [L("Weekly 1:1s with everyone on the team", "جلسات ۱:۱ هفتگی با همه‌ی اعضای تیم"), L("Running planning and retros", "اداره‌ی برنامه‌ریزی و retro"), L("Asking your manager for a learning plan and a mentor", "درخواست برنامه‌ی یادگیری و mentor از مدیرتان")],
      keep: [L("Technical judgment in reviews", "قضاوت فنی در reviewها"), L("Your credibility with the team", "اعتبارتان نزد تیم"), L("Curiosity about the product and its users", "کنجکاوی درباره‌ی محصول و کاربرانش")],
      plan: [L("Listen: 1:1s with everyone; map the team's work and pain points.", "گوش دهید: ۱:۱ با همه؛ ترسیم نقشه‌ی کارها و دردهای تیم."), L("Own the rhythm: planning, retros, stakeholder updates; give first feedback.", "ریتم را به دست بگیرید: برنامه‌ریزی، retro، گزارش به ذی‌نفعان؛ اولین بازخوردها را بدهید."), L("Deliver through others: one project finished with you coordinating; write a reflection.", "از طریق دیگران deliver کنید: یک پروژه با هماهنگی شما به پایان برسد؛ یک یادداشت تأملی بنویسید.")],
      stalls: [L("Keeping a full IC workload 'just in case'", "نگه داشتن بار کامل کار IC «محض احتیاط»"), L("Treating the trial as a title to protect", "دیدن دوره‌ی آزمایشی به عنوان عنوانی برای حفظ کردن")],
      asks: [L("What would make this trial a success, in your eyes?", "از نظر شما، چه چیزی این دوره‌ی آزمایشی را موفق می‌کند؟"), L("Which decisions are mine now, and which still go through you?", "کدام تصمیم‌ها اکنون با من است و کدام هنوز از شما می‌گذرد؟")] },
    { id: "t-A", from: "A", to: "M2", label: L("Acting → M2", "آزمایشی ← M2"),
      shift: L("From trying the job to owning it: the team's delivery and people outcomes are now yours.", "از امتحان کردن نقش به مالکیت آن: نتایج delivery و نتایج انسانی تیم اکنون با شماست."),
      stop: [L("Waiting for permission on day-to-day decisions", "منتظر اجازه ماندن برای تصمیم‌های روزمره"), L("Avoiding performance conversations", "فرار از گفت‌وگوهای عملکردی"), L("Being everyone's backup engineer", "پشتیبان فنی همه بودن")],
      start: [L("Owning hiring for your team end to end", "مالکیت کامل جذب تیم"), L("Writing a growth note for each person", "نوشتن یادداشت رشد برای هر نفر"), L("Tracking a few team-health metrics", "پایش چند metric سلامت تیم")],
      keep: [L("Frequent check-ins with your manager — as a coach, not a crutch", "check-in منظم با مدیرتان؛ به عنوان مربی، نه عصا"), L("Honest self-reflection", "تأمل صادقانه درباره‌ی خودتان")],
      plan: [L("Agree on the team's goals and your decision rights with your manager.", "درباره‌ی اهداف تیم و حدود اختیارات تصمیم‌گیری با مدیرتان توافق کنید."), L("Run a full cycle of performance conversations; open a hiring loop.", "یک چرخه‌ی کامل گفت‌وگوی عملکردی اجرا کنید و یک فرآیند جذب را آغاز کنید."), L("Show a delivery you owned, a hire you made, and the team's feedback.", "یک delivery که مالکش بودید، فردی که جذب کردید و بازخورد تیم را نشان دهید.")],
      stalls: [L("Great delivery, weak people management", "delivery عالی، مدیریت انسانی ضعیف"), L("No evidence of fair, documented feedback", "نبود شواهد بازخورد منصفانه و مستند")],
      asks: [L("Where do you still see me acting as an IC rather than a manager?", "کجا هنوز مرا بیشتر IC می‌بینید تا مدیر؟"), L("What evidence would the committee need to confirm me?", "کمیته برای تأیید من به چه شواهدی نیاز دارد؟")] },
    { id: "t-M2", from: "M2", to: "M3", label: L("M2 → M3", "M2 → M3"),
      shift: L("From executing goals you are given to defining them — and designing how your team works.", "از اجرای اهدافی که به شما داده می‌شود، به تعریف آن‌ها و طراحی شیوه‌ی کار تیم."),
      stop: [L("Waiting for your manager to set the quarter's goals", "منتظر ماندن تا مدیرتان اهداف فصل را تعیین کند"), L("Treating process as fixed", "ثابت دانستن فرآیندها"), L("Fixing only what sits in your own services", "رفع فقط مشکلاتی که در سرویس‌های خودتان است")],
      start: [L("Drafting the team roadmap yourself and bringing it for review", "نوشتن پیش‌نویس نقشه‌ی راه تیم و ارائه‌ی آن برای بازبینی"), L("Redesigning one broken process (on-call, planning, incident review)", "بازطراحی یک فرآیند ناکارآمد (on-call، برنامه‌ریزی، incident review)"), L("Owning user-facing risks across team boundaries", "مالکیت ریسک‌های کاربر، فراتر از مرزهای تیم")],
      keep: [L("Reliable delivery on commitments", "delivery قابل اتکا در تعهدات"), L("Regular, specific feedback", "بازخورد منظم و مشخص")],
      plan: [L("Write the team's mission and the problems worth solving this half.", "مأموریت تیم و مسائلی را که ارزش حل کردن در این نیم‌سال دارند بنویسید."), L("Propose a roadmap tied to strategy; redesign one process.", "یک نقشه‌ی راه متصل به استراتژی پیشنهاد دهید و یک فرآیند را بازطراحی کنید."), L("Show the roadmap adopted, the process working, and one person growing into bigger scope.", "نشان دهید نقشه‌ی راه پذیرفته شد، فرآیند کار می‌کند و یک نفر به دامنه‌ی بزرگ‌تری رشد کرده است.")],
      stalls: [L("Great execution with no point of view on what to do next", "اجرای عالی بدون دیدگاه درباره‌ی قدم بعدی"), L("Local fixes without cross-team relationships", "رفع مشکلات محلی بدون روابط بین‌تیمی")],
      asks: [L("Which of my recent decisions would you have made differently?", "کدام‌یک از تصمیم‌های اخیرم را شما متفاوت می‌گرفتید؟"), L("What should our team be doing that nobody has asked for yet?", "تیم ما چه کاری باید بکند که هنوز کسی آن را نخواسته است؟")] },
    { id: "t-M3", from: "M3", to: "M4", label: L("M3 → M4", "M3 → M4"),
      shift: L("From your team's impact to impact across teams: defining problems, not just solving them, and leading senior engineers technically.", "از اثرِ تیم خودتان به اثر در سطح چند تیم: تعریف مسائل و نه فقط حل آن‌ها، همراه با راهبری فنی مهندسان ارشد."),
      stop: [L("Optimising only your own team", "بهینه‌سازی فقط تیم خودتان"), L("Being the single point of decision", "نقطه‌ی واحد تصمیم‌گیری بودن"), L("Delegating hard problems and stepping away", "تفویض مسائل سخت و کنار کشیدن")],
      start: [L("Leading one cross-team initiative end to end", "راهبری کامل یک ابتکار فراتیمی"), L("Writing a 12–18 month strategy for your area", "نوشتن استراتژی ۱۲ تا ۱۸ ماهه برای حوزه‌تان"), L("Growing a newer manager or tech lead to lead without you", "پرورش یک مدیر یا راهبر فنی تازه تا بدون شما راهبری کند")],
      keep: [L("Deep involvement in hard technical problems", "درگیری عمیق در مسائل سخت فنی"), L("Protecting the team's focus through change", "حفظ تمرکز تیم در زمان تغییرات")],
      plan: [L("Map adjacent teams, shared problems, and where value leaks between teams.", "تیم‌های مجاور، مسائل مشترک و نقاطی را که ارزش میان تیم‌ها هدر می‌رود ترسیم کنید."), L("Frame one cross-team problem in writing and get sponsors from the other teams.", "یک مسئله‌ی فراتیمی را مکتوب صورت‌بندی کنید و از تیم‌های دیگر حامی بگیرید."), L("Show a cross-team outcome, and a leader who now runs something without you.", "یک نتیجه‌ی فراتیمی و راهبری را نشان دهید که اکنون بدون شما کاری را اداره می‌کند.")],
      stalls: [L("No evidence beyond one team", "نبود شواهد فراتر از یک تیم"), L("Technical growth has stalled — cannot lead staff engineers", "توقف رشد فنی؛ ناتوانی در راهبری مهندسان Staff"), L("Still the bottleneck for decisions", "همچنان گلوگاه تصمیم‌ها بودن")],
      asks: [L("Which cross-team problem would you most like to see owned?", "دوست دارید کدام مسئله‌ی فراتیمی مالک پیدا کند؟"), L("Who could I grow into a leader this year?", "چه کسی را می‌توانم امسال به یک راهبر تبدیل کنم؟")] },
    { id: "t-M4", from: "M4", to: "M5", label: L("M4 → M5", "M4 → M5"),
      shift: L("From leading teams to leading an organisation through managers — owning strategy, culture and people processes for a department.", "از راهبری تیم‌ها به راهبری یک سازمان از طریق مدیران؛ با مالکیت استراتژی، فرهنگ و فرآیندهای مدیریت انسانی یک «بخش»."),
      stop: [L("Running teams directly", "اداره‌ی مستقیم تیم‌ها"), L("Solving every escalation yourself", "حل همه‌ی escalationها توسط خودتان"), L("Treating headcount as the measure of success", "headcount را معیار موفقیت دانستن")],
      start: [L("Managing through managers: goals, coaching, accountability", "مدیریت از طریق مدیران: هدف‌گذاری، coaching و پاسخ‌گویی"), L("Owning the department's annual strategy and its trade-offs", "مالکیت استراتژی سالانه‌ی «بخش» و trade-offهای آن"), L("Owning engagement and the quality of people processes", "مالکیت تعلق شغلی و کیفیت فرآیندهای مدیریت انسانی")],
      keep: [L("Technical judgment through reviews and hiring", "قضاوت فنی از طریق reviewها و جذب"), L("Strong relationships with product and business partners", "روابط قوی با شرکای محصولی و کسب‌وکاری")],
      plan: [L("Diagnose the org: skip-levels, metrics, and where your managers need help.", "سازمان را تشخیص دهید: جلسات skip-level، metricها و نقاطی که مدیرانتان به کمک نیاز دارند."), L("Write the strategy with explicit trade-offs; fix one structural problem.", "استراتژی را با trade-offهای صریح بنویسید و یک مشکل ساختاری را حل کنید."), L("Show managers growing, a structural change working, and the strategy in use.", "رشد مدیران، کارکرد یک تغییر ساختاری و استفاده‌ی واقعی از استراتژی را نشان دهید.")],
      stalls: [L("No managers reporting to you, so no real org to lead", "نداشتن مدیر زیرمجموعه و در نتیجه نبود سازمانی واقعی برای راهبری"), L("Strategy without trade-offs", "استراتژی بدون trade-off"), L("Weak alignment with peers and senior leaders", "هم‌سویی ضعیف با هم‌تایان و مدیران ارشد")],
      asks: [L("What would make you trust me with a department?", "چه چیزی باعث می‌شود یک «بخش» را به من بسپارید؟"), L("Where will the org need a new leader in the next year?", "سازمان در سال آینده در کجا به راهبر جدید نیاز خواهد داشت؟")] },
    { id: "t-M5", from: "M5", to: "M6", label: L("M5 → M6", "M5 → M6"),
      shift: L("From a department to an organisation pillar: owning the P&L, return on investment and core company objectives.", "از یک «بخش» به یک pillar سازمانی: مالکیت P&L، آورده‌ی سرمایه‌گذاری و objectiveهای اساسی سازمان."),
      stop: [L("Optimising your department's numbers alone", "بهینه‌سازی صرفِ اعداد «بخش» خودتان"), L("Only executing company strategy", "فقط اجرای استراتژی سازمان"), L("Being the person every hard decision waits for", "کسی بودن که همه‌ی تصمیم‌های سخت منتظرش می‌مانند")],
      start: [L("Speaking the language of investment: cost, return, risk", "صحبت به زبان سرمایه‌گذاری: هزینه، آورده، ریسک"), L("Co-authoring company strategy", "مشارکت در نوشتن استراتژی سازمان"), L("Growing directors and naming successors", "پرورش Directorها و تعیین جانشین")],
      keep: [L("Closeness to customers and to how the systems really work", "نزدیکی به مشتریان و به واقعیت عملکرد سیستم‌ها"), L("Modelling the culture you want", "الگو بودن برای فرهنگی که می‌خواهید")],
      plan: [L("Understand the P&L and the company's strategic bets.", "P&L و شرط‌های راهبردی سازمان را بفهمید."), L("Make an investment case that trades your own org's scope for company return.", "پرونده‌ی سرمایه‌گذاری‌ای ارائه دهید که دامنه‌ی مجموعه‌ی خودتان را فدای آورده‌ی سازمان کند."), L("Show a portfolio decision, a leader you grew, and an operating-model change adopted.", "یک تصمیم سبدی، راهبری که پرورش داده‌اید و یک تغییر پذیرفته‌شده در مدل عملیاتی را نشان دهید.")],
      stalls: [L("Seen as a department leader, not a company leader", "دیده شدن به عنوان راهبر یک «بخش»، نه راهبر سازمان"), L("No successor", "نداشتن جانشین"), L("Cannot make the business case in financial terms", "ناتوانی در ارائه‌ی پرونده‌ی کسب‌وکاری به زبان مالی")],
      asks: [L("Which company objective could I own?", "مالکیت کدام objective سازمان را می‌توانم بر عهده بگیرم؟"), L("What do the executives need from this pillar that they are not getting?", "مدیران اجرایی از این pillar چه می‌خواهند که اکنون دریافت نمی‌کنند؟")] }
  ];

  var BRAG = L(
    "BRAG DOCUMENT — [name] — [period]\n\n1. Outcomes — what changed because of my team and me\n   - [outcome] — [metric before → after] — [who benefited]\n\n2. Scope I held\n   - teams · people · systems · budget · planning horizon\n\n3. People I grew\n   - [person]: [from → to] — [how I helped]\n\n4. Team and culture\n   - hiring · process · engagement · relationships beyond the team\n\n5. Decisions and trade-offs I owned\n   - [decision] — [options considered] — [why] — [result]\n\n6. Feedback I received (quote + source)\n\n7. Gaps I am working on, with evidence of progress",
    "BRAG DOCUMENT — [نام] — [بازه‌ی زمانی]\n\n۱. نتایج: چه چیزی به خاطر من و تیمم تغییر کرد\n   - [نتیجه] — [metric قبل ← بعد] — [چه کسی نفع برد]\n\n۲. دامنه‌ی مسئولیت\n   - تیم‌ها · افراد · سیستم‌ها · بودجه · افق برنامه‌ریزی\n\n۳. افرادی که رشد دادم\n   - [فرد]: [از ← به] — [چگونه کمک کردم]\n\n۴. تیم و فرهنگ\n   - جذب · فرآیندها · تعلق شغلی · روابط فراتیمی\n\n۵. تصمیم‌ها و trade-offهایی که مالکشان بودم\n   - [تصمیم] — [گزینه‌های بررسی‌شده] — [چرا] — [نتیجه]\n\n۶. بازخوردهایی که گرفتم (نقل‌قول + منبع)\n\n۷. شکاف‌هایی که روی آن‌ها کار می‌کنم، همراه با شواهد پیشرفت"
  );

  var REWRITES = [
    [L("Ran weekly 1:1s with all seven reports.", "با هر هفت نفر تیم جلسه‌ی ۱:۱ هفتگی داشتم."), L("Used 1:1s to build growth plans; two engineers took on tech-lead scope and one was promoted within the year.", "از جلسات ۱:۱ برای ساختن برنامه‌ی رشد استفاده کردم؛ دو مهندس مسئولیت راهبری فنی گرفتند و یک نفر ظرف یک سال ارتقا یافت.")],
    [L("Led the migration to Kubernetes.", "مهاجرت به Kubernetes را راهبری کردم."), L("Led a three-team migration that cut deploy time from 40 to 8 minutes and infrastructure cost by 22%, with no customer-facing incidents.", "یک مهاجرت سه‌تیمی را راهبری کردم که زمان deploy را از ۴۰ به ۸ دقیقه و هزینه‌ی زیرساخت را ۲۲٪ کاهش داد، بدون هیچ incident مشتری‌محور.")],
    [L("Hired five engineers.", "پنج مهندس جذب کردم."), L("Redesigned the interview loop with a structured rubric; time-to-hire fell from 62 to 38 days and every hire passed their six-month review.", "فرآیند مصاحبه را با معیارهای ساختاریافته بازطراحی کردم؛ زمان جذب از ۶۲ به ۳۸ روز رسید و همه‌ی افراد جذب‌شده ارزیابی شش‌ماهه را با موفقیت گذراندند.")],
    [L("Improved team morale.", "روحیه‌ی تیم را بهتر کردم."), L("Cut on-call pages by 40% and introduced an interrupt rotation; the engagement score rose from 61 to 78 in two quarters.", "هشدارهای on-call را ۴۰٪ کاهش دادم و چرخه‌ی رسیدگی به کارهای پیش‌بینی‌نشده را راه انداختم؛ امتیاز تعلق شغلی در دو فصل از ۶۱ به ۷۸ رسید.")]
  ];

  var SPONSORS = [
    { icon: "book", t: L("Mentor", "mentor"), b: L("Shares advice from experience.", "از تجربه‌ی خود مشورت می‌دهد."), q: L("\"Here's what worked for me.\"", "«این روش برای من جواب داد.»") },
    { icon: "chat", t: L("Coach", "coach"), b: L("Asks questions that help you find your own answer.", "با پرسش‌هایش کمک می‌کند پاسخ خودتان را پیدا کنید."), q: L("\"What options do you see?\"", "«چه گزینه‌هایی می‌بینی؟»") },
    { icon: "star", t: L("Sponsor", "sponsor (حامی)"), b: L("Spends their credibility on your behalf: puts your name forward and argues for you in calibration.", "اعتبار خودش را برای شما خرج می‌کند: نام شما را پیشنهاد می‌دهد و در کالیبراسیون از شما دفاع می‌کند."), q: L("\"I think Sara should lead this.\"", "«فکر می‌کنم سارا باید این کار را راهبری کند.»") }
  ];

  var selT = "t-M2";

  function transHTML(id) {
    var tr = T.filter(function (x) { return x.id === id; })[0] || T[2];
    var to = G.data.levelById[tr.to];
    var h = '<div class="card raised" style="gap:16px"><div class="chips">' + (tr.from === "IC" ? '<span class="code ic">IC</span>' : UI.code(tr.from)) + icon("arrow", "inline-icon flip-rtl") + UI.code(tr.to) + '<span class="chip">' + t(to.name) + "</span></div>" +
      '<div><div class="section-kicker">' + t(C.shift) + '</div><p style="font-size:1.12rem;font-weight:600;margin-top:4px;max-width:70ch">' + t(tr.shift) + "</p></div>" +
      UI.ssk({ stop: tr.stop, start: tr.start, keep: tr.keep }) +
      '<div><h4 style="margin-bottom:10px">' + icon("calendar", "inline-icon") + " " + t(C.plan) + '</h4><div class="phases">' + tr.plan.map(function (p, i) { return '<div class="phase"><span class="ph-when">' + t(C.days[i]) + "</span><p style=\"font-size:var(--fs-s)\">" + t(p) + "</p></div>"; }).join("") + "</div></div>" +
      '<div class="two-col"><div>' + UI.callout("trap", C.stallsAt, tr.stalls.map(t)) + "</div><div>" + UI.callout("tip", C.ask, tr.asks.map(t)) + "</div></div>" +
      '<a class="btn" href="#/levels/' + tr.to + '" style="justify-self:start">' + t(C.openLevel) + " " + UI.code(tr.to, "ghost") + "</a></div>";
    return h;
  }

  function render(param) {
    if (param && T.some(function (x) { return x.id === param; })) selT = param;
    else if (G.assessSummary && G.assessSummary()) { var f = G.assessSummary().floor; if (f !== "M6") selT = "t-" + f; }
    var h = UI.pageHead({ eyebrow: C.eyebrow, icon: "trend", title: C.title, lede: C.lede, tldr: C.tldr, jump: C.jump });
    h += UI.section({ id: "how", title: C.howTitle, intro: C.howIntro, body: UI.flow(C.steps) });
    h += UI.section({ id: "stall", title: C.stallTitle, body: '<div class="grid g3">' + C.stalls.map(function (s) { return '<div class="card"><h3 style="font-size:1rem">' + t(s[0]) + '</h3><p class="muted" style="font-size:var(--fs-s)">' + t(s[1]) + "</p></div>"; }).join("") + "</div>" });
    h += UI.section({ id: "transitions", title: C.transTitle, intro: C.transIntro, body:
      '<div class="pill-tabs" role="tablist">' + T.map(function (x) { return '<button role="tab" data-tr="' + x.id + '" aria-selected="' + (x.id === selT) + '">' + t(x.label) + "</button>"; }).join("") + '</div><div id="transBox">' + transHTML(selT) + "</div>" });
    h += UI.section({ id: "case", title: C.caseTitle, intro: C.caseIntro, body:
      '<div class="two-col"><div class="card"><div class="fig-head"><h3>' + icon("flag", "inline-icon") + " " + t(C.bragTitle) + '</h3><button class="btn small" data-copy="bragTpl">' + icon("copy") + UI.u("copy") + '</button></div><div class="copy-box"><pre id="bragTpl">' + G.esc(t(BRAG)) + "</pre></div></div>" +
      '<div class="card"><h3>' + icon("swap", "inline-icon") + " " + t(C.rewriteTitle) + "</h3>" + UI.fromTo(REWRITES.map(function (r) { return [r[0], r[1]]; }), C.rewriteHeads) + '<p class="tbl-note">' + t(C.rewriteNote) + "</p></div></div>" });
    h += UI.section({ id: "sponsor", title: C.sponsorTitle, intro: C.sponsorIntro, body:
      '<div class="grid g3">' + SPONSORS.map(function (s) { return '<div class="card"><h3><span class="icon-badge">' + icon(s.icon) + "</span>" + t(s.t) + "</h3><p>" + t(s.b) + '</p><p class="quote" style="font-size:1rem">' + t(s.q) + "</p></div>"; }).join("") + "</div>" + UI.callout("tip", null, C.sponsorTip) });
    h += UI.next("paths", C.next);
    return h;
  }

  G.views.grow = {
    lede: C.lede,
    render: render,
    mount: function (root, param) {
      root.addEventListener("click", function (e) {
        var b = e.target.closest("[data-tr]");
        if (!b) return;
        selT = b.getAttribute("data-tr");
        G.$$("[data-tr]", root).forEach(function (x) { x.setAttribute("aria-selected", String(x === b)); });
        G.$("#transBox", root).innerHTML = transHTML(selT);
        history.replaceState(null, "", "#/grow/" + selT);
      });
      if (param && param.indexOf("t-") === 0) { var el = G.$("#transitions", root); if (el) setTimeout(function () { el.scrollIntoView(); }, 0); }
    },
    onParam: function (root, param) {
      if (param && param.indexOf("t-") === 0 && T.some(function (x) { return x.id === param; })) {
        selT = param;
        G.$$("[data-tr]", root).forEach(function (x) { x.setAttribute("aria-selected", String(x.getAttribute("data-tr") === selT)); });
        G.$("#transBox", root).innerHTML = transHTML(selT);
        G.$("#transitions", root).scrollIntoView();
      } else if (param) { var el = document.getElementById(param); if (el) el.scrollIntoView(); }
    },
    index: function () {
      return T.map(function (x) { return { type: "section", title: t(C.transTitle) + " · " + t(x.label), snip: t(x.shift), href: "#/grow/" + x.id }; })
        .concat([{ type: "tool", title: t(C.bragTitle), snip: t(C.caseIntro), href: "#/grow/case", extra: "brag document promotion packet evidence پرونده ارتقا" },
          { type: "section", title: t(C.sponsorTitle), snip: t(C.sponsorIntro), href: "#/grow/sponsor" },
          { type: "section", title: t(C.howTitle), snip: t(C.howIntro), href: "#/grow/how", extra: "calibration committee promotion کالیبراسیون ارتقا" },
          { type: "section", title: t(C.stallTitle), snip: G.plain(C.stalls[0][1]), href: "#/grow/stall" }]);
    }
  };
})();

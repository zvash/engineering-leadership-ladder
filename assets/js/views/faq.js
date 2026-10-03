(function () {
  "use strict";
  var G = window.ELG, L = G.L, t = G.t, md = G.md, icon = G.icon, UI = G.ui;

  var C = {
    eyebrow: L("Reference", "مرجع"),
    title: L("Questions people ask", "پرسش‌های پرتکرار"),
    lede: L("Thirty-six questions ICs, tech leads and managers ask most often, with short answers first and detail underneath.", "سی‌وشش پرسش رایج ICها، راهبران فنی و مدیران. برای هر پرسش، ابتدا پاسخ کوتاه و سپس توضیح بیشتر آمده است."),
    search: L("Filter questions…", "فیلتر کردن پرسش‌ها…"),
    none: L("No question matches. Try another word, or use the global search.", "پرسشی پیدا نشد. واژه‌ی دیگری را امتحان کنید یا از جست‌وجوی کل راهنما استفاده کنید."),
    all: L("All", "همه"),
    go: L("Go deeper", "بیشتر بخوانید"),
    next: L("The landscape in 2026", "چشم‌انداز ۲۰۲۶")
  };

  var GROUPS = [
    { id: "consider", icon: "user", n: L("Considering management", "در فکر مدیریت"), q: [
      { id: "q1", q: L("Do I have to become a manager to grow?", "برای رشد، حتماً باید مدیر شوم؟"),
        a: L("No. In a healthy dual ladder the IC track climbs as high as the management track, with matching pay bands.", "خیر. در یک نردبان سالم با دو مسیر، ICها هم می‌توانند تا بالاترین سطوح رشد کنند و بازه‌ی حقوقشان با مدیریت هم‌تراز است."),
        d: L("Staff, Principal and Distinguished roles grow scope through technical leverage instead of people. If your company only promotes through management, that is a ladder problem worth raising.", "در نقش‌های Staff، Principal و Distinguished، اثرگذاری با راهبری فنی، سیستم‌ها و تصمیم‌ها گسترش پیدا می‌کند. اگر در شرکت شما تنها راه ارتقا، مدیر شدن است، این اشکال نردبان را مطرح کنید."), link: ["paths", L("IC or manager?", "IC یا مدیر؟")] },
      { id: "q2", q: L("How do I know whether I would be a good manager?", "از کجا بدانم مدیر خوبی خواهم بود؟"),
        a: L("Look at what energises you today: other people's progress, fixing how the team works, resolving friction.", "علاقه‌ی خود را بر اساس کارهایی که امروز از انجامشان رضایت دارید بسنجید، مثل کمک به پیشرفت دیگران، بهبود شیوه‌ی کار تیم یا حل اختلاف‌های کاری."),
        d: L("Mentoring, leading a project where others do most of the work, and giving difficult feedback are the best rehearsals. Take the readiness check, then ask your manager for a stretch.", "mentor کردن، راهبری پروژه‌ای که بیشتر کارش را دیگران انجام می‌دهند و تمرین گفت‌وگوهای دشوارِ بازخورد، بهترین راه‌های سنجش علاقه و آمادگی‌اند. سنجش آمادگی را انجام دهید و سپس از مدیرتان یک مسئولیت چالش‌برانگیز بخواهید."), link: ["paths/ready", L("Readiness check", "سنجش آمادگی")] },
      { id: "q3", q: L("What is the difference between a tech lead, a TLM and an EM?", "تفاوت راهبر فنی، TLM و EM چیست؟"),
        a: L("A tech lead owns technical direction without reports; a TLM leads a small team both technically and as its people manager; an EM owns people, delivery and team health.", "TL بدون direct report، مسئول جهت‌دهی فنی است. TLM هم راهبری فنی و هم مدیریت انسانی یک تیم کوچک را بر عهده دارد. EM مسئول رشد افراد، delivery و سلامت تیم است."),
        d: L("When a TL and an EM share a team, write down who decides what. TLM roles work for small teams but are usually a stepping stone.", "اگر TL و EM در یک تیم کار می‌کنند، حدود تصمیم‌گیری هر کدام را روشن و مکتوب کنید. نقش TLM برای تیم‌های کوچک مناسب است، اما معمولاً مرحله‌ای برای گذار به نقش بعدی است."), link: ["paths/roles", L("Compare the roles", "مقایسه‌ی نقش‌ها")] },
      { id: "q4", q: L("Can I go back to IC if management isn't for me?", "اگر مدیریت برایم مناسب نبود، می‌توانم به مسیر IC برگردم؟"),
        a: L("Yes — and it is common. A good ladder treats the move as lateral, mapped to the equivalent level.", "بله، و این اتفاق رایجی است. یک نردبان خوب این جابه‌جایی را افقی و با نگاشت به سطح معادل در نظر می‌گیرد."),
        d: L("Many strong leaders swing between the two every few years; Charity Majors calls it the engineer/manager pendulum. Go back deliberately and keep your leadership skills in use.", "بسیاری از راهبران توانمند هر چند سال یک بار میان دو مسیر جابه‌جا می‌شوند. Charity Majors این رفت‌وبرگشت را «آونگ مهندس/مدیر» می‌نامد. برای بازگشت برنامه داشته باشید و مهارت‌های راهبری‌تان را فعال نگه دارید."), link: ["paths/pendulum", L("The pendulum", "آونگ")] },
      { id: "q5", q: L("What level do I need before trying management?", "برای امتحان کردن مدیریت، به چه سطحی نیاز دارم؟"),
        a: L("Usually a solid mid-to-senior IC (around L4–L5 in this guide's ladder), an open role and a positive evaluation.", "معمولاً باید در سطح میانی تا ارشد مسیر IC (حدود L4 تا L5 در این راهنما) عملکرد قوی داشته باشید، موقعیت شغلی بازی وجود داشته باشد و ارزیابی‌تان مثبت باشد."),
        d: L("Credibility with the team matters more than the number. Many companies start new managers in a time-boxed acting period with a mentor.", "اعتماد و اعتبار شما نزد تیم، از شماره‌ی سطح مهم‌تر است. بسیاری از شرکت‌ها ورود به مدیریت را با یک دوره‌ی آزمایشی دارای زمان‌بندی و mentor مشخص آغاز می‌کنند."), link: ["paths/acting", L("The acting period", "دوره‌ی آزمایشی")] },
      { id: "q6", q: L("Will I lose my technical skills?", "آیا مهارت‌های فنی‌ام را از دست می‌دهم؟"),
        a: L("Some depth, yes. Breadth and judgment, no — if you stay close to the work.", "ممکن است بخشی از عمق تخصصی‌تان کم شود، اما اگر به کار فنی نزدیک بمانید، می‌توانید گستره‌ی دانش و توان قضاوت فنی‌تان را حفظ کنید."),
        d: L("First-line EMs typically keep 20–40% hands-on time, and the share falls with level. Stay close through design reviews, incident reviews and reading code — not by owning critical-path tickets.", "مدیران مستقیم تیم معمولاً ۲۰ تا ۴۰ درصد وقتشان را صرف کار فنی مستقیم می‌کنند و این سهم در سطوح بالاتر کمتر می‌شود. با design review، بررسی incidentها و خواندن کد به کار نزدیک بمانید. لازم نیست taskهای مسیر بحرانی را خودتان بردارید."), link: ["levels/time", L("How your week shifts", "تغییر هفته‌ی کاری")] }
    ] },
    { id: "new", icon: "rocket", n: L("New managers", "مدیران تازه‌کار"), q: [
      { id: "q7", q: L("How much should I code as a new EM?", "به عنوان EM تازه‌کار چقدر باید کد بزنم؟"),
        a: L("Enough to keep your judgment sharp, never so much that the team waits on you.", "به اندازه‌ای که توان قضاوت فنی‌تان به‌روز بماند و تیم برای پیش‌برد کار منتظر کدنویسی شما نماند."),
        d: L("Take work that sits off the critical path: tooling, bugs, prototypes, reviews. If you are the bottleneck on a ticket, you are doing an IC's job at a manager's cost.", "کارهای خارج از مسیر بحرانی را بردارید: ابزارها، باگ‌ها، prototypeها و reviewها. اگر انجام یک task به شما وابسته شده، وقت مورد نیاز مدیریت را صرف کار یک IC کرده‌اید.") },
      { id: "q8", q: L("How do I manage people who used to be my peers?", "چگونه همتایان سابقم را مدیریت کنم؟"),
        a: L("Name the change openly, meet each person privately, and be scrupulously fair.", "درباره‌ی تغییر نقش شفاف صحبت کنید، با هر نفر جداگانه گفت‌وگو کنید و در تصمیم‌ها منصف باشید."),
        d: L("Ask each person what they want from you as a manager. Give a peer who also wanted the role real ownership. Avoid favouring old friends — people notice.", "از هر نفر بپرسید از شما به عنوان مدیر چه انتظاری دارد. به همتایی که او هم این نقش را می‌خواست، مسئولیت واقعی و اختیار لازم بدهید. در تصمیم‌ها مراقب باشید دوستی‌های قدیمی باعث جانب‌داری نشود."), link: ["scenarios/s1", L("Try the scenario", "سناریو را امتحان کنید")] },
      { id: "q9", q: L("How do I manage someone more senior or more technical than me?", "چگونه کسی را مدیریت کنم که ارشدتر یا فنی‌تر از من است؟"),
        a: L("Do not compete on technical depth. Add value through context, removing blockers and growing their scope.", "در عمق فنی با او رقابت نکنید. context لازم را فراهم کنید، موانعش را بردارید و فرصت اثرگذاری بیشتری به او بدهید."),
        d: L("Ask what they need from you, give them ownership of hard problems, and make their impact visible beyond the team.", "بپرسید چه کمکی از شما می‌خواهد، مسئولیت حل مسائل سخت را به او بسپارید و کمک کنید اثر کارش بیرون از تیم هم دیده شود.") },
      { id: "q10", q: L("How do I give difficult feedback?", "چگونه بازخورد دشوار را مطرح کنم؟"),
        a: L("Soon, privately and specifically: situation, behaviour, impact — then ask for their view.", "بازخورد را زود و در گفت‌وگوی خصوصی مطرح کنید. موقعیت، رفتار مشاهده‌شده و اثر آن را مشخص کنید و سپس نظر فرد را بپرسید."),
        d: L("Talk about behaviour, not personality. If it would surprise them at review time, you waited too long.", "بازخورد باید درباره‌ی رفتار فرد باشد. آن را به قضاوت درباره‌ی شخصیت او تبدیل نکنید و تا زمان ارزیابی به تأخیر نیندازید."), link: ["toolkit/feedback", L("Feedback builder", "ابزار تنظیم بازخورد")] },
      { id: "q11", q: L("How do I handle an underperformer?", "با فرد کم‌عملکرد چه کنم؟"),
        a: L("Diagnose first — skill, clarity, motivation or life outside work — then agree clear expectations and a date to review.", "ابتدا علت را بشناسید: کمبود مهارت، انتظارات مبهم، انگیزه یا مسائل بیرون از کار؟ سپس بر سر انتظارات روشن و زمان بررسی مجدد توافق کنید."),
        d: L("Write down what you agreed. A formal improvement plan is a later step, for when clear and supported expectations are still not met; involve HR if you reach that point.", "توافق‌ها را مکتوب کنید. اگر با وجود انتظارات روشن و پشتیبانی لازم، عملکرد فرد به سطح مورد انتظار نرسید، با مشارکت واحد منابع انسانی برنامه‌ی رسمی بهبود عملکرد را آغاز کنید."), link: ["scenarios/s3", L("Try the scenario", "سناریو را امتحان کنید")] },
      { id: "q12", q: L("What should my first 90 days look like?", "۹۰ روز نخستم باید چگونه باشد؟"),
        a: L("Learn for 30 days, diagnose and agree for 30, then deliver and set up for 30.", "۳۰ روز یادگیری، ۳۰ روز شناخت مسائل و توافق بر سر اولویت‌ها، و ۳۰ روز delivery و ایجاد سازوکارهای لازم."),
        d: L("The biggest early mistake is changing things before you understand them.", "پیش از تغییر روش‌ها و فرآیندهای تیم، دلیل شکل‌گیری و نحوه‌ی کار آن‌ها را بشناسید."), link: ["toolkit/first90", L("90-day plan", "برنامه‌ی ۹۰ روزه")] },
      { id: "q13", q: L("How do I say no to my PM or stakeholders?", "چگونه به PM یا ذی‌نفعان «نه» بگویم؟"),
        a: L("Do not say no. Offer options with explicit trade-offs.", "برای گفت‌وگو درباره‌ی درخواست، گزینه‌هایی پیشنهاد دهید و trade-off هر کدام را روشن کنید."),
        d: L("A smaller scope, a later date, or a different risk. Write down the risk you are declining to take and agree it together.", "دامنه‌ی کوچک‌تر، تاریخ دیرتر یا ریسکی متفاوت. ریسکی را که نمی‌پذیرید مکتوب کنید و با هم درباره‌اش توافق کنید."), link: ["scenarios/s2", L("Try the scenario", "سناریو را امتحان کنید")] }
    ] },
    { id: "exp", icon: "trend", n: L("Experienced EMs aiming higher", "EMهای باتجربه در مسیر ارتقا"), q: [
      { id: "q14", q: L("Why am I not promoted when my team delivers?", "چرا با وجود delivery خوب تیمم ارتقا نمی‌گیرم؟"),
        a: L("Because delivery at your level is the entry ticket, not evidence of the next level.", "چون delivery خوب در سطح فعلی، شرط پایه است و به‌تنهایی عملکرد در سطح بعد را نشان نمی‌دهد."),
        d: L("Committees look for sustained next-level scope, ambiguity and leverage, consistent across every dimension. Ask your manager which dimension is your floor.", "کمیته‌ها در همه‌ی ابعاد به دنبال عملکرد مستمر در سطح بعد هستند: مسئولیت گسترده‌تر، مدیریت ابهام بیشتر و توان گسترش اثر کارتان. از مدیرتان بپرسید در کدام بُعد بیشترین فاصله را تا سطح بعد دارید."), link: ["grow/stall", L("Why people stall", "چرا مسیر رشد متوقف می‌شود")] },
      { id: "q15", q: L("How long does a promotion usually take?", "ارتقا معمولاً چقدر طول می‌کشد؟"),
        a: L("Expect to show next-level work for at least two quarters before the decision — often longer at senior levels.", "پیش از تصمیم ارتقا، معمولاً باید دست‌کم دو فصل در سطح بعد کار کرده باشید. در سطوح ارشد، این زمان اغلب بیشتر است."),
        d: L("Large companies run cycles once or twice a year, and manager promotions also need an org that justifies the next level. Promotion within a year of joining is rare.", "شرکت‌های بزرگ معمولاً سالی یک یا دو بار چرخه‌ی ارتقا دارند. برای ارتقای مدیران، باید مسئولیتی متناسب با سطح بعد در سازمان وجود داشته باشد. ارتقا در کمتر از یک سال پس از ورود به شرکت نادر است."), link: ["map/promo", L("How promotions are decided", "تصمیم‌گیری درباره‌ی ارتقا")] },
      { id: "q16", q: L("What goes into a strong promotion case?", "یک پرونده‌ی ارتقای قوی چه چیزهایی دارد؟"),
        a: L("Outcomes with numbers, the scope you held, people you grew, decisions and trade-offs you owned, and other people's feedback.", "نتایج همراه با عدد، دامنه‌ی مسئولیت، افرادی که رشد دادید، تصمیم‌ها و trade-offهایی که مالکشان بودید و بازخورد دیگران."),
        d: L("Map it to the next level's rubric and name the gaps honestly. A brag document updated every two weeks makes it easy.", "پرونده را بر اساس معیارهای سطح بعد تنظیم کنید و مواردی را که هنوز باید بهبود دهید صادقانه بنویسید. به‌روز کردن brag document هر دو هفته، این کار را آسان‌تر می‌کند."), link: ["grow/case", L("Build your case", "ساختن پرونده")] },
      { id: "q17", q: L("How do I get a sponsor?", "چگونه یک sponsor (حامی) پیدا کنم؟"),
        a: L("Do visible work that makes it safe for someone senior to bet on you — then ask for their support explicitly.", "با نتایج قابل مشاهده، اعتماد یک فرد ارشد را جلب کنید تا حاضر باشد اعتبارش را پشتوانه‌ی شما بگذارد. سپس صریحاً از او حمایت بخواهید."),
        d: L("Mentors advise; sponsors spend their credibility. Tell them what you are aiming for, and report back on the scope they helped you get.", "mentor به شما مشورت می‌دهد و sponsor با اتکا به اعتبار خودش از شما حمایت می‌کند. هدفتان را با او در میان بگذارید و درباره‌ی مسئولیت بزرگ‌تری که با کمک او پذیرفته‌اید گزارش دهید."), link: ["grow/sponsor", L("Mentor, coach, sponsor", "mentor، coach، sponsor")] },
      { id: "q18", q: L("How do I show impact beyond my team?", "چگونه اثرم را فراتر از تیم نشان دهم؟"),
        a: L("Own a cross-team problem nobody owns, and leave a mechanism behind.", "مسئولیت حل یک مسئله‌ی فراتیمی را که مسئول مشخصی ندارد بپذیرید و برای آن سازوکاری ماندگار ایجاد کنید."),
        d: L("Incident reviews, shared contracts, dependency planning, platform fixes — anything that makes several teams better and outlives your involvement.", "می‌توانید incident review، قراردادهای مشترک، برنامه‌ریزی وابستگی‌ها یا اصلاحات پلتفرمی را پیش ببرید. نتیجه باید به کار چند تیم کمک کند و پس از پایان مشارکت مستقیم شما هم قابل استفاده باشد."), link: ["scenarios/s5", L("Try the scenario", "سناریو را امتحان کنید")] },
      { id: "q19", q: L("How is a manager's performance actually measured?", "عملکرد یک مدیر در عمل چگونه سنجیده می‌شود؟"),
        a: L("By your team's outcomes and health, not your own output.", "نتایج کار و سلامت تیم شما مبنای اصلی ارزیابی عملکردتان است."),
        d: L("Expect delivery results, people outcomes (growth, retention, hiring), engagement data, stakeholder feedback and upward feedback from your reports. Gallup attributes at least 70% of the variance in team engagement to the manager.", "نتایج delivery، رشد و ماندگاری افراد، جذب، داده‌های تعلق شغلی و بازخورد ذی‌نفعان و اعضای تیم درباره‌ی مدیر بررسی می‌شود. Gallup دست‌کم ۷۰٪ از تفاوت تعلق شغلی میان تیم‌ها را به مدیر نسبت می‌دهد.") },
      { id: "q20", q: L("Which metrics should I track for my team?", "چه metricهایی را برای تیمم پایش کنم؟"),
        a: L("A few team-owned trends: delivery (the DORA metrics), quality and on-call load, and engagement.", "چند روند در سطح تیم: delivery (metricهای DORA)، کیفیت، بار on-call و تعلق شغلی."),
        d: L("Never turn them into individual targets — when a measure becomes a target, it stops measuring. Compare the team with its own baseline.", "این metricها را به هدف فردی تبدیل نکنید، چون در آن صورت ممکن است افراد برای بهتر کردن عدد آن‌ها تلاش کنند و نتیجه‌ی واقعی کار سنجیده نشود. عملکرد تیم را با خط پایه‌ی خودش مقایسه کنید."), link: ["toolkit/health", L("Team health check", "بررسی سلامت تیم")] }
    ] },
    { id: "mom", icon: "users", n: L("Managers of managers & directors", "مدیرانِ مدیران و Directorها"), q: [
      { id: "q21", q: L("What changes when I start managing managers?", "وقتی مدیرِ مدیران می‌شوم چه چیزی تغییر می‌کند؟"),
        a: L("Your team becomes your managers. The job shifts from running work to growing leaders and designing the system.", "از این پس، اعضای تیم مستقیم شما مدیران هستند. تمرکزتان از اداره‌ی کارهای روزمره به پرورش راهبران و طراحی سازوکارها تغییر می‌کند."),
        d: L("Skip-levels, coaching managers, calibration and org design replace much of your direct delivery work. Resist running teams directly; it undermines the managers you are growing.", "جلسات skip-level، coach کردن مدیران، کالیبراسیون و طراحی سازمان جایگزین بخش زیادی از کار مستقیم delivery می‌شود. از اداره‌ی مستقیم تیم‌ها پرهیز کنید. این کار مدیرانی را که پرورش می‌دهید تضعیف می‌کند."), link: ["levels/M5", L("Level M5", "سطح M5")] },
      { id: "q22", q: L("How many people should report to me?", "تعداد مناسب direct reportها چقدر است؟"),
        a: L("Commonly 6–8 engineers for a first-line EM, and 4–6 managers for a manager of managers.", "معمولاً ۶ تا ۸ مهندس برای مدیر مستقیم تیم و ۴ تا ۶ مدیر برای مدیرِ مدیران."),
        d: L("Seniority and how new the work is matter more than any rule. Spans are widening across the industry, which makes strong tech leads and written decision rights essential.", "تجربه‌ی افراد و میزان تازگی کار، از قواعد عددی مهم‌ترند. تعداد direct reportها در صنعت رو به افزایش است. این وضعیت به راهبران فنی قوی و حدود تصمیم‌گیری روشن و مکتوب نیاز دارد."), link: ["toolkit/span", L("Span of control", "دامنه‌ی کنترل")] },
      { id: "q23", q: L("How do I lead a reorg well?", "چگونه یک بازسازمان‌دهی را خوب راهبری کنم؟"),
        a: L("Explain the why, involve managers early, keep growth paths intact and over-communicate.", "دلیل تغییر را روشن کنید، مدیران را از ابتدا درگیر کنید، مسیرهای رشد را حفظ کنید و درباره‌ی تغییرات پیوسته توضیح دهید."),
        d: L("Diagnose before you redesign. Changing leaders or boundaries without understanding the system usually just moves the problem.", "پیش از تغییر ساختار، مسئله را بشناسید. تغییر مدیران یا مرز تیم‌ها بدون شناخت سازوکارها، معمولاً فقط مشکل را جابه‌جا می‌کند."), link: ["scenarios/s11", L("Try the scenario", "سناریو را امتحان کنید")] },
      { id: "q24", q: L("What does a director actually do all day?", "یک Director در طول روز واقعاً چه می‌کند؟"),
        a: L("Strategy with trade-offs, org design, growing managers, cross-org alignment and owning the department's health.", "استراتژی همراه با trade-off، طراحی سازمان، پرورش مدیران، هم‌سویی بین‌سازمانی و مالکیت سلامت «بخش»."),
        d: L("In the illustrative director week, most time goes to people, cross-team relationships and strategy; hands-on work is close to zero.", "در هفته‌ی نمونه‌ی یک Director، بیشترِ زمان صرف افراد، روابط بین‌تیمی و استراتژی می‌شود و کار فنی مستقیم تقریباً صفر است."), link: ["levels/M5", L("See the week", "هفته‌ی کاری را ببینید")] },
      { id: "q25", q: L("How do I disagree with my boss's decision?", "چگونه با تصمیم مدیرم مخالفت کنم؟"),
        a: L("Disagree in the room with data and options. Once it is decided, commit fully and lead it as your own.", "در جلسه با داده و گزینه مخالفت کنید. وقتی تصمیم گرفته شد، کاملاً متعهد شوید و آن را مانند تصمیم خودتان راهبری کنید."),
        d: L("Amazon's leadership principles call this 'have backbone; disagree and commit'. Undermining a decision afterwards costs more trust than the disagreement ever will.", "در Leadership Principles شرکت Amazon، این اصل «Have Backbone; Disagree and Commit» نام دارد: شجاعت مخالفت داشته باشید و پس از تصمیم، به آن متعهد بمانید. تضعیف تصمیم پس از اتخاذ آن، بیش از خود مخالفت به اعتماد آسیب می‌زند."), link: ["scenarios/s14", L("Try the scenario", "سناریو را امتحان کنید")] },
      { id: "q26", q: L("How do I build a succession plan?", "چگونه برنامه‌ی جانشینی بسازم؟"),
        a: L("Name a potential successor for every key role — including yours — and give them real stretch.", "برای هر نقش کلیدی، از جمله نقش خودتان، جانشین بالقوه‌ای مشخص کنید و با مسئولیت‌های چالش‌برانگیز او را آماده کنید."),
        d: L("The vacation test is the simplest check: could your org run for two weeks without you? If not, you are a single point of failure.", "بررسی کنید آیا مجموعه‌ی شما می‌تواند دو هفته در زمان مرخصی‌تان به کار ادامه دهد. اگر نتواند، ادامه‌ی کار به حضور شما وابسته است و شما یک نقطه‌ی شکست واحد (SPoF) هستید."), link: ["scenarios/s9", L("Try the scenario", "سناریو را امتحان کنید")] }
    ] },
    { id: "jobs", icon: "briefcase", n: L("Changing jobs & leveling", "تغییر شغل و تعیین سطح"), q: [
      { id: "q27", q: L("How do I avoid being down-leveled?", "چگونه down-level نشوم؟"),
        a: L("Settle the target level early, prove scope with numbers, tell stories at the right altitude, and negotiate level before pay.", "سطح هدف را زود مشخص کنید، دامنه‌ی مسئولیت و اثرگذاری را با عدد نشان دهید، تجربه‌هایتان را متناسب با آن سطح روایت کنید و پیش از حقوق، درباره‌ی سطح مذاکره کنید."),
        d: L("Most leveling happens before and during the loop, not at the offer.", "سطح هدف عمدتاً پیش از مصاحبه و در طول آن مشخص می‌شود و در زمان پیشنهاد شغلی معمولاً فرصت کمتری برای تغییر آن وجود دارد."), link: ["hiring", L("Hiring without down-leveling", "استخدام بدون down-level")] },
      { id: "q28", q: L("My title is 'Head of Engineering'. Why am I offered an EM role?", "عنوان من «Head of Engineering» است. چرا نقش EM به من پیشنهاد می‌شود؟"),
        a: L("Because levels compare scope, not titles — and at larger companies your scope maps to a first-line EM.", "شرکت‌ها دامنه‌ی مسئولیت شما را مبنای تعیین سطح قرار می‌دهند. در شرکت بزرگ‌تر، مسئولیت‌هایی که داشته‌اید ممکن است با نقش مدیر مستقیم تیم هم‌خوان باشد."),
        d: L("Title inflation at smaller companies is normal. Present yourself as a manager with unusual breadth, and negotiate band and sign-on rather than title.", "عنوان‌های بزرگ برای مسئولیت‌های محدودتر در شرکت‌های کوچک رایج‌اند. مسئولیت‌های گسترده‌تر از معمولتان را توضیح دهید و برای حقوق و پاداش شروع همکاری مذاکره کنید."), link: ["hiring/ex-0", L("Worked example", "بررسی یک نمونه")] },
      { id: "q29", q: L("Can I negotiate my level after the offer?", "آیا پس از پیشنهاد شغلی می‌توانم درباره‌ی سطح مذاکره کنم؟"),
        a: L("Sometimes, before you accept. Rarely at the very end.", "گاهی بله، تا پیش از پذیرش پیشنهاد، اما تغییر سطح در مراحل پایانی فرآیند به‌ندرت اتفاق می‌افتد."),
        d: L("Ask for written feedback, offer an extra interview, bring new evidence or a competing offer at the higher level, and ask the hiring manager to argue for you. Do not discuss pay until the level is settled.", "بازخورد مکتوب بخواهید، یک مصاحبه‌ی اضافه پیشنهاد دهید، شواهد جدید یا پیشنهاد رقیب در سطح بالاتر ارائه کنید و از hiring manager بخواهید از شما دفاع کند. تا روشن شدن تکلیف سطح، درباره‌ی حقوق صحبت نکنید."), link: ["hiring/playbook", L("The playbook", "راهنمای اقدام")] },
      { id: "q30", q: L("Should I accept a down-level?", "آیا down-level را بپذیرم؟"),
        a: L("Often yes when you are entering a higher-tier company; often no when you are already in one.", "پذیرش آن برای رفتن به شرکتی در رده‌ی بالاتر اغلب منطقی است. در جابه‌جایی بین شرکت‌های هم‌رده، معمولاً دلیل کمتری برای پذیرش سطح پایین‌تر وجود دارد."),
        d: L("Check total compensation, written next-level expectations, and whether you would be content doing this level's job for two years.", "مجموع درآمد، انتظارات مکتوب سطح بعد و این‌که آیا از انجام کار این سطح به مدت دو سال راضی خواهید بود را بررسی کنید."), link: ["hiring/accept", L("Decide", "تصمیم بگیرید")] },
      { id: "q31", q: L("How should I describe my scope to a recruiter?", "دامنه‌ی اثرم را چگونه برای کارشناس جذب توصیف کنم؟"),
        a: L("In numbers they can compare: people, teams, managers reporting to you, budget, systems, planning horizon, business metrics.", "با اعدادی که قابل مقایسه باشند: افراد، تیم‌ها، مدیران زیرمجموعه، بودجه، سیستم‌ها، افق برنامه‌ریزی و metricهای کسب‌وکاری."),
        d: L("For example: \"3 EMs, 38 engineers; I own a €2M budget and the payments roadmap for the year.\"", "برای مثال: «۳ EM و ۳۸ مهندس، مالک بودجه‌ای ۲ میلیون یورویی و نقشه‌ی راه سالانه‌ی حوزه‌ی پرداخت هستم.»"), link: ["hiring/calibrator", L("Scope calibrator", "سنجش دامنه‌ی مسئولیت")] },
      { id: "q32", q: L("How does a Senior EM interview differ from an EM interview?", "مصاحبه‌ی Senior EM چه تفاوتی با مصاحبه‌ی EM دارد؟"),
        a: L("In the altitude of your answers: several teams instead of one, creating direction instead of executing it, growing managers instead of engineers.", "در سطح Senior EM انتظار می‌رود تجربه‌ی راهبری چند تیم، تعیین جهت و پرورش مدیران را نشان دهید. در سطح EM، تمرکز بر راهبری یک تیم، اجرای جهت تعیین‌شده و رشد مهندسان است."),
        d: L("The questions often look identical. Prepare stories where the scope, the ambiguity and the leverage are visibly one level up.", "پرسش‌ها اغلب مشابه‌اند. تجربه‌هایی آماده کنید که مسئولیت گسترده‌تر، ابهام بیشتر و توان گسترش اثرگذاری شما در سطح بالاتر را روشن نشان دهند."), link: ["hiring/altitude", L("Story altitude", "روایت متناسب با سطح")] }
    ] },
    { id: "now", icon: "globe", n: L("The industry now", "وضعیت امروز صنعت"), q: [
      { id: "q33", q: L("Is middle management disappearing?", "آیا مدیریت میانی در حال حذف شدن است؟"),
        a: L("It is thinning and reshaping, not disappearing.", "تعداد نقش‌ها کمتر شده و دامنه‌ی مسئولیت آن‌ها در حال تغییر است. این روند به معنای حذف کامل مدیریت نیست."),
        d: L("Many large companies removed layers and widened spans between 2023 and 2026. Management roles are fewer and larger, and the bar for manager-of-managers roles is higher.", "بسیاری از شرکت‌های بزرگ میان ۲۰۲۳ تا ۲۰۲۶ لایه‌های مدیریتی را کاهش دادند و دامنه‌ی کنترل را گسترش دادند. نقش‌های مدیریتی کمتر و بزرگ‌تر شده‌اند و معیار نقش‌های مدیرِ مدیران بالاتر رفته است."), link: ["landscape", L("The landscape in 2026", "چشم‌انداز ۲۰۲۶")] },
      { id: "q34", q: L("Do managers need to code again because of AI?", "آیا به خاطر هوش مصنوعی، مدیران باید دوباره کد بزنند؟"),
        a: L("They need to be closer to the work. 'Player-coach' expectations are rising, especially in flatter orgs.", "باید به کار نزدیک‌تر باشند. انتظار «بازیکن-مربی» (player-coach) به‌ویژه در سازمان‌های تخت‌تر در حال افزایش است."),
        d: L("That does not mean owning critical-path tickets. It means current technical judgment, fluency with AI tools, and credibility in design and incident reviews.", "قضاوت فنی مدیر باید به‌روز باشد و در کار با ابزارهای هوش مصنوعی، design review و بررسی incidentها توان‌مندی و اعتبار داشته باشد. برای نزدیک ماندن به کار، لازم نیست taskهای مسیر بحرانی را بر عهده بگیرد."), link: ["landscape", L("The landscape in 2026", "چشم‌انداز ۲۰۲۶")] },
      { id: "q35", q: L("How is AI changing what is expected of EMs?", "هوش مصنوعی انتظارات از EMها را چگونه تغییر می‌دهد؟"),
        a: L("AI use is becoming a measured expectation, headcount requests face 'why not AI?' tests, and coordination-only work is the first to be cut.", "استفاده‌ی مؤثر از هوش مصنوعی در ارزیابی عملکرد سنجیده می‌شود. در درخواست headcount باید توضیح دهید چرا هوش مصنوعی پاسخ‌گوی نیاز نیست. نقش‌هایی هم که صرفاً کار هماهنگی انجام می‌دهند، بیشتر در معرض حذف‌اند."),
        d: L("Show AI-assisted outcomes, not usage counts. DORA's research finds that AI amplifies a team's existing strengths and weaknesses, so the fundamentals matter more, not less.", "اثر استفاده از هوش مصنوعی را بر نتایج کار نشان دهید. آمار استفاده به‌تنهایی این اثر را مشخص نمی‌کند. پژوهش DORA نشان می‌دهد هوش مصنوعی نقاط قوت و ضعف موجود تیم را تشدید می‌کند، پس توجه به اصول پایه‌ی مهندسی اهمیت بیشتری پیدا می‌کند."), link: ["landscape", L("The landscape in 2026", "چشم‌انداز ۲۰۲۶")] },
      { id: "q36", q: L("Should I stay IC because management roles are shrinking?", "آیا چون نقش‌های مدیریتی کم می‌شوند، بهتر است IC بمانم؟"),
        a: L("Choose the job you want to do, not the one the market seems to favour this year.", "در انتخاب مسیر، علاقه‌تان به کار روزمره‌ی آن را در نظر بگیرید و تصمیم را تنها بر اساس وضعیت بازار در سال جاری نگیرید."),
        d: L("Both tracks remain. If you move into management, choose a role with a real team and mandate, and keep your technical judgment current.", "هر دو مسیر باقی می‌مانند. اگر به مدیریت می‌روید، نقشی با تیم و مأموریت واقعی انتخاب کنید و قضاوت فنی‌تان را به‌روز نگه دارید."), link: ["paths", L("IC or manager?", "IC یا مدیر؟")] }
    ] }
  ];

  var fGroup = "all", fText = "";

  function matches(item) {
    if (!fText) return true;
    var hay = G.norm(t(item.q) + " " + t(item.a) + " " + t(item.d));
    return G.norm(fText).split(/\s+/).filter(Boolean).every(function (w) { return hay.indexOf(w) !== -1; });
  }

  function listHTML() {
    var h = "", any = false;
    GROUPS.forEach(function (g) {
      if (fGroup !== "all" && fGroup !== g.id) return;
      var items = g.q.filter(matches);
      if (!items.length) return;
      any = true;
      h += '<div class="faq-group" id="g-' + g.id + '"><h3><span class="icon-badge">' + icon(g.icon) + "</span>" + t(g.n) + "</h3>";
      items.forEach(function (it) {
        h += UI.acc(it.q, '<div class="faq-a"><p class="short">' + md(it.a) + "</p><p>" + md(it.d) + "</p>" + (it.link ? '<p><a class="btn small" href="#/' + it.link[0] + '">' + t(C.go) + ": " + t(it.link[1]) + " " + icon("arrow", "inline-icon flip-rtl") + "</a></p>" : "") + "</div>", { id: it.id, open: !!fText });
      });
      h += "</div>";
    });
    return any ? h : '<div class="faq-empty">' + t(C.none) + "</div>";
  }

  G.views.faq = {
    lede: C.lede,
    render: function (param) {
      var h = UI.pageHead({ eyebrow: C.eyebrow, icon: "help", title: C.title, lede: C.lede });
      h += '<section class="section"><div class="faq-tools"><div class="faq-search">' + icon("search") + '<input type="search" id="faqQ" placeholder="' + G.esc(t(C.search)) + '" value="' + G.esc(fText) + '" aria-label="' + G.esc(t(C.search)) + '"></div>' +
        '<div class="pill-tabs" role="tablist"><button data-fg="all" aria-pressed="' + (fGroup === "all") + '">' + t(C.all) + "</button>" + GROUPS.map(function (g) { return '<button data-fg="' + g.id + '" aria-pressed="' + (fGroup === g.id) + '">' + icon(g.icon, "inline-icon") + t(g.n) + "</button>"; }).join("") + '</div></div><div id="faqList" class="grid" style="gap:22px">' + listHTML() + "</div></section>";
      h += UI.next("landscape", C.next);
      return h;
    },
    mount: function (root, param) {
      var q = G.$("#faqQ", root);
      q.addEventListener("input", function () { fText = q.value.trim(); G.$("#faqList", root).innerHTML = listHTML(); });
      root.addEventListener("click", function (e) {
        var b = e.target.closest("[data-fg]");
        if (!b) return;
        fGroup = b.getAttribute("data-fg");
        G.$$("[data-fg]", root).forEach(function (x) { x.setAttribute("aria-pressed", String(x === b)); });
        G.$("#faqList", root).innerHTML = listHTML();
      });
      if (param) { var el = document.getElementById(param); if (el) { if (el.tagName === "DETAILS") el.open = true; setTimeout(function () { el.scrollIntoView(); }, 0); } }
    },
    onParam: function (root, param) {
      if (!param) return;
      fGroup = "all"; fText = "";
      G.$("#faqQ", root).value = "";
      G.$$("[data-fg]", root).forEach(function (x) { x.setAttribute("aria-pressed", String(x.getAttribute("data-fg") === "all")); });
      G.$("#faqList", root).innerHTML = listHTML();
      var el = document.getElementById(param);
      if (el) { if (el.tagName === "DETAILS") el.open = true; el.scrollIntoView(); }
    },
    index: function () {
      var out = [];
      GROUPS.forEach(function (g) { g.q.forEach(function (it) { out.push({ type: "faq", title: t(it.q), snip: G.plain(it.a), href: "#/faq/" + it.id, extra: G.plain(it.d) }); }); });
      return out;
    }
  };
})();

(function () {
  "use strict";
  var G = window.ELG, L = G.L, t = G.t, md = G.md, icon = G.icon, UI = G.ui;

  var C = {
    eyebrow: L("Reference", "مرجع"),
    title: L("Questions people ask", "پرسش‌های پرتکرار"),
    lede: L("Thirty-six questions ICs, tech leads and managers ask most often, with short answers first and detail underneath.", "سی‌وشش پرسشی که مشارکت‌کنندگان فردی، راهبران فنی و مدیران بیش از همه می‌پرسند؛ اول پاسخ کوتاه و سپس جزئیات."),
    search: L("Filter questions…", "فیلتر کردن پرسش‌ها…"),
    none: L("No question matches. Try another word, or use the global search.", "هیچ پرسشی مطابقت ندارد. واژه‌ی دیگری را امتحان کنید یا از جست‌وجوی کلی استفاده کنید."),
    all: L("All", "همه"),
    go: L("Go deeper", "بیشتر بخوانید"),
    next: L("The landscape in 2026", "چشم‌انداز ۲۰۲۶")
  };

  var GROUPS = [
    { id: "consider", icon: "user", n: L("Considering management", "در فکر مدیریت"), q: [
      { id: "q1", q: L("Do I have to become a manager to grow?", "برای رشد، حتماً باید مدیر شوم؟"),
        a: L("No. In a healthy dual ladder the IC track climbs as high as the management track, with matching pay bands.", "خیر. در یک نردبان دوگانه‌ی سالم، مسیر IC به همان ارتفاع مسیر مدیریت می‌رسد و بازه‌های حقوقی هم‌تراز دارد."),
        d: L("Staff, Principal and Distinguished roles grow scope through technical leverage instead of people. If your company only promotes through management, that is a ladder problem worth raising.", "نقش‌های Staff، Principal و Distinguished دامنه‌ی اثر را از طریق اهرم فنی گسترش می‌دهند، نه از طریق افراد. اگر شرکت شما فقط از مسیر مدیریت ارتقا می‌دهد، این ایرادی در نردبان است که ارزش مطرح کردن دارد."), link: ["paths", L("IC or manager?", "IC یا مدیر؟")] },
      { id: "q2", q: L("How do I know whether I would be a good manager?", "از کجا بدانم مدیر خوبی خواهم بود؟"),
        a: L("Look at what energises you today: other people's progress, fixing how the team works, resolving friction.", "ببینید امروز چه چیزی به شما انرژی می‌دهد: پیشرفت دیگران، اصلاح شیوه‌ی کار تیم و حل اصطکاک‌ها."),
        d: L("Mentoring, leading a project where others do most of the work, and giving difficult feedback are the best rehearsals. Take the readiness check, then ask your manager for a stretch.", "mentor کردن، راهبری پروژه‌ای که بیشتر کارش را دیگران انجام می‌دهند و دادن بازخورد سخت، بهترین تمرین‌ها هستند. سنجش آمادگی را انجام دهید و سپس از مدیرتان یک کار فراتر از سطح بخواهید."), link: ["paths/ready", L("Readiness check", "سنجش آمادگی")] },
      { id: "q3", q: L("What is the difference between a tech lead, a TLM and an EM?", "تفاوت راهبر فنی، TLM و EM چیست؟"),
        a: L("A tech lead owns technical direction without reports; a TLM leads a small team both technically and as its people manager; an EM owns people, delivery and team health.", "راهبر فنی بدون زیرمجموعه مالک جهت‌دهی فنی است؛ TLM یک تیم کوچک را هم فنی و هم به عنوان مدیر انسانی راهبری می‌کند؛ EM مالک رشد افراد، delivery و سلامت تیم است."),
        d: L("When a TL and an EM share a team, write down who decides what. TLM roles work for small teams but are usually a stepping stone.", "وقتی یک راهبر فنی و یک EM در یک تیم هستند، مکتوب کنید چه کسی درباره‌ی چه چیزی تصمیم می‌گیرد. نقش TLM برای تیم‌های کوچک جواب می‌دهد، اما معمولاً یک پله‌ی گذار است."), link: ["paths/roles", L("Compare the roles", "مقایسه‌ی نقش‌ها")] },
      { id: "q4", q: L("Can I go back to IC if management isn't for me?", "اگر مدیریت برایم مناسب نبود، می‌توانم به مسیر IC برگردم؟"),
        a: L("Yes — and it is common. A good ladder treats the move as lateral, mapped to the equivalent level.", "بله، و این اتفاق رایجی است. یک نردبان خوب این جابه‌جایی را افقی و با نگاشت به سطح معادل در نظر می‌گیرد."),
        d: L("Many strong leaders swing between the two every few years; Charity Majors calls it the engineer/manager pendulum. Go back deliberately and keep your leadership skills in use.", "بسیاری از راهبران توانمند هر چند سال یک بار میان دو مسیر جابه‌جا می‌شوند؛ Charity Majors این را «آونگ مهندس/مدیر» می‌نامد. آگاهانه بازگردید و مهارت‌های راهبری‌تان را فعال نگه دارید."), link: ["paths/pendulum", L("The pendulum", "آونگ")] },
      { id: "q5", q: L("What level do I need before trying management?", "برای امتحان کردن مدیریت، به چه سطحی نیاز دارم؟"),
        a: L("Usually a solid mid-to-senior IC (around L4–L5 in this guide's ladder), an open role and a positive evaluation.", "معمولاً یک IC میانی تا ارشدِ قوی (حدود L4 تا L5 در نردبان این راهنما)، یک موقعیت باز و ارزیابی مثبت."),
        d: L("Credibility with the team matters more than the number. Many companies start new managers in a time-boxed acting period with a mentor.", "اعتبار نزد تیم از عدد سطح مهم‌تر است. بسیاری از شرکت‌ها مدیران جدید را با یک دوره‌ی آزمایشی زمان‌دار و همراه با mentor شروع می‌کنند."), link: ["paths/acting", L("The acting period", "دوره‌ی آزمایشی")] },
      { id: "q6", q: L("Will I lose my technical skills?", "آیا مهارت‌های فنی‌ام را از دست می‌دهم؟"),
        a: L("Some depth, yes. Breadth and judgment, no — if you stay close to the work.", "بخشی از عمق، بله. اما گستره و قضاوت فنی، نه؛ به شرط آن‌که به کار نزدیک بمانید."),
        d: L("First-line EMs typically keep 20–40% hands-on time, and the share falls with level. Stay close through design reviews, incident reviews and reading code — not by owning critical-path tickets.", "مدیران خط اول معمولاً ۲۰ تا ۴۰ درصد زمانشان را به کار فنی مستقیم می‌دهند و این سهم با بالا رفتن سطح کم می‌شود. از طریق design review، بررسی incidentها و خواندن کد به کار نزدیک بمانید، نه با برداشتن taskهای مسیر بحرانی."), link: ["levels/time", L("How your week shifts", "تغییر هفته‌ی کاری")] }
    ] },
    { id: "new", icon: "rocket", n: L("New managers", "مدیران تازه‌کار"), q: [
      { id: "q7", q: L("How much should I code as a new EM?", "به عنوان EM تازه‌کار چقدر باید کد بزنم؟"),
        a: L("Enough to keep your judgment sharp, never so much that the team waits on you.", "به اندازه‌ای که قضاوتتان تیز بماند، و هرگز آن‌قدر که تیم منتظر شما بماند."),
        d: L("Take work that sits off the critical path: tooling, bugs, prototypes, reviews. If you are the bottleneck on a ticket, you are doing an IC's job at a manager's cost.", "کارهایی را بردارید که خارج از مسیر بحرانی‌اند: ابزارها، باگ‌ها، نمونه‌های اولیه و reviewها. اگر گلوگاه یک task هستید، کار یک IC را با هزینه‌ی یک مدیر انجام می‌دهید.") },
      { id: "q8", q: L("How do I manage people who used to be my peers?", "چگونه هم‌تایان سابقم را مدیریت کنم؟"),
        a: L("Name the change openly, meet each person privately, and be scrupulously fair.", "تغییر را آشکارا بیان کنید، با هر نفر جداگانه صحبت کنید و به‌شدت منصف باشید."),
        d: L("Ask each person what they want from you as a manager. Give a peer who also wanted the role real ownership. Avoid favouring old friends — people notice.", "از هر نفر بپرسید از شما به عنوان مدیر چه انتظاری دارد. به هم‌تایی که او هم این نقش را می‌خواست، مالکیت واقعی بدهید. از جانب‌داری دوستان قدیمی پرهیز کنید؛ همه متوجه می‌شوند."), link: ["scenarios/s1", L("Try the scenario", "سناریو را امتحان کنید")] },
      { id: "q9", q: L("How do I manage someone more senior or more technical than me?", "چگونه کسی را مدیریت کنم که ارشدتر یا فنی‌تر از من است؟"),
        a: L("Do not compete on technical depth. Add value through context, removing blockers and growing their scope.", "در عمق فنی رقابت نکنید. از طریق context، برداشتن موانع و گسترش دامنه‌ی اثر او ارزش بیافرینید."),
        d: L("Ask what they need from you, give them ownership of hard problems, and make their impact visible beyond the team.", "بپرسید از شما چه نیازی دارد، مالکیت مسائل سخت را به او بسپارید و اثرش را فراتر از تیم قابل مشاهده کنید.") },
      { id: "q10", q: L("How do I give difficult feedback?", "چگونه بازخورد سخت بدهم؟"),
        a: L("Soon, privately and specifically: situation, behaviour, impact — then ask for their view.", "زود، خصوصی و مشخص: موقعیت، رفتار، اثر؛ سپس دیدگاه او را بپرسید."),
        d: L("Talk about behaviour, not personality. If it would surprise them at review time, you waited too long.", "درباره‌ی رفتار صحبت کنید، نه شخصیت. اگر در زمان ارزیابی برایش غافل‌گیرکننده باشد، بیش از حد صبر کرده‌اید."), link: ["toolkit/feedback", L("Feedback builder", "سازنده‌ی بازخورد")] },
      { id: "q11", q: L("How do I handle an underperformer?", "با فرد کم‌عملکرد چه کنم؟"),
        a: L("Diagnose first — skill, clarity, motivation or life outside work — then agree clear expectations and a date to review.", "ابتدا تشخیص دهید (مهارت، شفافیت، انگیزه یا مسائل بیرون از کار) و سپس درباره‌ی انتظارات روشن و تاریخ بازبینی توافق کنید."),
        d: L("Write down what you agreed. A formal improvement plan is a later step, for when clear and supported expectations are still not met; involve HR if you reach that point.", "توافق‌ها را مکتوب کنید. برنامه‌ی رسمی بهبود عملکرد گامی بعدی است، برای زمانی که انتظارات روشن و همراه با پشتیبانی همچنان برآورده نمی‌شود؛ در آن مرحله واحد منابع انسانی را درگیر کنید."), link: ["scenarios/s3", L("Try the scenario", "سناریو را امتحان کنید")] },
      { id: "q12", q: L("What should my first 90 days look like?", "۹۰ روز نخستم باید چگونه باشد؟"),
        a: L("Learn for 30 days, diagnose and agree for 30, then deliver and set up for 30.", "۳۰ روز یادگیری، ۳۰ روز تشخیص و توافق و ۳۰ روز delivery و ساختن زیرساخت."),
        d: L("The biggest early mistake is changing things before you understand them.", "بزرگ‌ترین اشتباه اولیه، تغییر دادن چیزها پیش از فهمیدن آن‌هاست."), link: ["toolkit/first90", L("90-day plan", "برنامه‌ی ۹۰ روزه")] },
      { id: "q13", q: L("How do I say no to my PM or stakeholders?", "چگونه به PM یا ذی‌نفعان «نه» بگویم؟"),
        a: L("Do not say no. Offer options with explicit trade-offs.", "«نه» نگویید؛ گزینه‌هایی با trade-offهای صریح پیشنهاد دهید."),
        d: L("A smaller scope, a later date, or a different risk. Write down the risk you are declining to take and agree it together.", "دامنه‌ی کوچک‌تر، تاریخ دیرتر یا ریسکی متفاوت. ریسکی را که نمی‌پذیرید مکتوب کنید و با هم درباره‌اش توافق کنید."), link: ["scenarios/s2", L("Try the scenario", "سناریو را امتحان کنید")] }
    ] },
    { id: "exp", icon: "trend", n: L("Experienced EMs aiming higher", "EMهای باتجربه با هدف بالاتر"), q: [
      { id: "q14", q: L("Why am I not promoted when my team delivers?", "چرا با وجود delivery خوب تیمم ارتقا نمی‌گیرم؟"),
        a: L("Because delivery at your level is the entry ticket, not evidence of the next level.", "چون delivery در سطح فعلی بلیت ورود است، نه شاهدی برای سطح بعد."),
        d: L("Committees look for sustained next-level scope, ambiguity and leverage, consistent across every dimension. Ask your manager which dimension is your floor.", "کمیته‌ها به دنبال دامنه‌ی اثر، مدیریت ابهام و اهرم اثرگذاری پایدار در سطح بعد هستند؛ آن هم به‌طور یکسان در همه‌ی ابعاد. از مدیرتان بپرسید کفِ شما در کدام بُعد است."), link: ["grow/stall", L("Why people stall", "چرا افراد متوقف می‌شوند")] },
      { id: "q15", q: L("How long does a promotion usually take?", "ارتقا معمولاً چقدر طول می‌کشد؟"),
        a: L("Expect to show next-level work for at least two quarters before the decision — often longer at senior levels.", "انتظار داشته باشید دست‌کم دو فصل پیش از تصمیم، کار در سطح بعد را نشان دهید؛ در سطوح ارشد اغلب بیشتر."),
        d: L("Large companies run cycles once or twice a year, and manager promotions also need an org that justifies the next level. Promotion within a year of joining is rare.", "شرکت‌های بزرگ سالی یک یا دو بار چرخه‌ی ارتقا دارند و ارتقای مدیران به سازمانی نیاز دارد که سطح بعد را توجیه کند. ارتقا در کمتر از یک سال پس از پیوستن نادر است."), link: ["map/promo", L("How promotions are decided", "تصمیم‌گیری درباره‌ی ارتقا")] },
      { id: "q16", q: L("What goes into a strong promotion case?", "یک پرونده‌ی ارتقای قوی چه چیزهایی دارد؟"),
        a: L("Outcomes with numbers, the scope you held, people you grew, decisions and trade-offs you owned, and other people's feedback.", "نتایج همراه با عدد، دامنه‌ی مسئولیت، افرادی که رشد دادید، تصمیم‌ها و trade-offهایی که مالکشان بودید و بازخورد دیگران."),
        d: L("Map it to the next level's rubric and name the gaps honestly. A brag document updated every two weeks makes it easy.", "آن را با معیارهای سطح بعد منطبق کنید و شکاف‌ها را صادقانه نام ببرید. یک brag document که هر دو هفته به‌روز می‌شود، کار را آسان می‌کند."), link: ["grow/case", L("Build your case", "ساختن پرونده")] },
      { id: "q17", q: L("How do I get a sponsor?", "چگونه یک sponsor (حامی) پیدا کنم؟"),
        a: L("Do visible work that makes it safe for someone senior to bet on you — then ask for their support explicitly.", "کاری قابل مشاهده انجام دهید که شرط بستن روی شما را برای یک فرد ارشد امن کند؛ سپس صریحاً حمایتش را بخواهید."),
        d: L("Mentors advise; sponsors spend their credibility. Tell them what you are aiming for, and report back on the scope they helped you get.", "mentor مشورت می‌دهد؛ sponsor اعتبارش را خرج می‌کند. به او بگویید هدفتان چیست و درباره‌ی دامنه‌ای که به کمکش به دست آوردید گزارش دهید."), link: ["grow/sponsor", L("Mentor, coach, sponsor", "mentor، coach، sponsor")] },
      { id: "q18", q: L("How do I show impact beyond my team?", "چگونه اثرم را فراتر از تیم نشان دهم؟"),
        a: L("Own a cross-team problem nobody owns, and leave a mechanism behind.", "مالکیت یک مسئله‌ی فراتیمی بی‌صاحب را بپذیرید و سازوکاری ماندگار به جا بگذارید."),
        d: L("Incident reviews, shared contracts, dependency planning, platform fixes — anything that makes several teams better and outlives your involvement.", "incident review، قراردادهای مشترک، برنامه‌ریزی وابستگی‌ها و اصلاحات پلتفرمی؛ هر چیزی که چند تیم را بهتر کند و پس از کنار رفتن شما هم باقی بماند."), link: ["scenarios/s5", L("Try the scenario", "سناریو را امتحان کنید")] },
      { id: "q19", q: L("How is a manager's performance actually measured?", "عملکرد یک مدیر در عمل چگونه سنجیده می‌شود؟"),
        a: L("By your team's outcomes and health, not your own output.", "با نتایج و سلامت تیمتان، نه خروجی شخصی شما."),
        d: L("Expect delivery results, people outcomes (growth, retention, hiring), engagement data, stakeholder feedback and upward feedback from your reports. Gallup attributes at least 70% of the variance in team engagement to the manager.", "انتظار داشته باشید نتایج delivery، نتایج انسانی (رشد، ماندگاری، جذب)، داده‌های تعلق شغلی، بازخورد ذی‌نفعان و بازخورد رو به بالای افراد تیم بررسی شود. Gallup دست‌کم ۷۰٪ از تغییرات تعلق شغلی تیم‌ها را به مدیر نسبت می‌دهد.") },
      { id: "q20", q: L("Which metrics should I track for my team?", "چه metricهایی را برای تیمم پایش کنم؟"),
        a: L("A few team-owned trends: delivery (the DORA metrics), quality and on-call load, and engagement.", "چند روند که مالکشان تیم است: delivery (metricهای DORA)، کیفیت و بار on-call و تعلق شغلی."),
        d: L("Never turn them into individual targets — when a measure becomes a target, it stops measuring. Compare the team with its own baseline.", "هرگز آن‌ها را به هدف فردی تبدیل نکنید؛ وقتی معیار به هدف تبدیل شود، دیگر چیزی را نمی‌سنجد. تیم را با خط پایه‌ی خودش مقایسه کنید."), link: ["toolkit/health", L("Team health check", "بررسی سلامت تیم")] }
    ] },
    { id: "mom", icon: "users", n: L("Managers of managers & directors", "مدیرانِ مدیران و Directorها"), q: [
      { id: "q21", q: L("What changes when I start managing managers?", "وقتی مدیرِ مدیران می‌شوم چه چیزی تغییر می‌کند؟"),
        a: L("Your team becomes your managers. The job shifts from running work to growing leaders and designing the system.", "تیم شما مدیرانتان می‌شوند. کار از اداره‌ی کارها به پرورش رهبران و طراحی سیستم تغییر می‌کند."),
        d: L("Skip-levels, coaching managers, calibration and org design replace much of your direct delivery work. Resist running teams directly; it undermines the managers you are growing.", "جلسات skip-level، coach کردن مدیران، کالیبراسیون و طراحی سازمان جایگزین بخش زیادی از کار مستقیم delivery می‌شود. از اداره‌ی مستقیم تیم‌ها پرهیز کنید؛ این کار مدیرانی را که پرورش می‌دهید تضعیف می‌کند."), link: ["levels/M5", L("Level M5", "سطح M5")] },
      { id: "q22", q: L("How many people should report to me?", "چند نفر باید به من گزارش دهند؟"),
        a: L("Commonly 6–8 engineers for a first-line EM, and 4–6 managers for a manager of managers.", "معمولاً ۶ تا ۸ مهندس برای مدیر خط اول و ۴ تا ۶ مدیر برای مدیرِ مدیران."),
        d: L("Seniority and how new the work is matter more than any rule. Spans are widening across the industry, which makes strong tech leads and written decision rights essential.", "ارشدیت افراد و میزان تازگی کار از هر قاعده‌ای مهم‌تر است. دامنه‌ی کنترل در سراسر صنعت در حال افزایش است و این، راهبران فنی قوی و حدود تصمیم‌گیری مکتوب را ضروری می‌کند."), link: ["toolkit/span", L("Span of control", "دامنه‌ی کنترل")] },
      { id: "q23", q: L("How do I lead a reorg well?", "چگونه یک بازسازمان‌دهی را خوب راهبری کنم؟"),
        a: L("Explain the why, involve managers early, keep growth paths intact and over-communicate.", "دلیل را توضیح دهید، مدیران را زود درگیر کنید، مسیرهای رشد را حفظ کنید و بیش از حد ارتباط برقرار کنید."),
        d: L("Diagnose before you redesign. Changing leaders or boundaries without understanding the system usually just moves the problem.", "پیش از بازطراحی، تشخیص دهید. تغییر مدیران یا مرزها بدون فهم سیستم، معمولاً فقط مشکل را جابه‌جا می‌کند."), link: ["scenarios/s11", L("Try the scenario", "سناریو را امتحان کنید")] },
      { id: "q24", q: L("What does a director actually do all day?", "یک Director در طول روز واقعاً چه می‌کند؟"),
        a: L("Strategy with trade-offs, org design, growing managers, cross-org alignment and owning the department's health.", "استراتژی همراه با trade-off، طراحی سازمان، پرورش مدیران، هم‌سویی بین‌سازمانی و مالکیت سلامت «بخش»."),
        d: L("In the illustrative director week, most time goes to people, cross-team relationships and strategy; hands-on work is close to zero.", "در هفته‌ی نمونه‌ی یک Director، بیشترِ زمان صرف افراد، روابط بین‌تیمی و استراتژی می‌شود و کار فنی مستقیم تقریباً صفر است."), link: ["levels/M5", L("See the week", "هفته‌ی کاری را ببینید")] },
      { id: "q25", q: L("How do I disagree with my boss's decision?", "چگونه با تصمیم مدیرم مخالفت کنم؟"),
        a: L("Disagree in the room with data and options. Once it is decided, commit fully and lead it as your own.", "در جلسه با داده و گزینه مخالفت کنید. وقتی تصمیم گرفته شد، کاملاً متعهد شوید و آن را مانند تصمیم خودتان راهبری کنید."),
        d: L("Amazon's leadership principles call this 'have backbone; disagree and commit'. Undermining a decision afterwards costs more trust than the disagreement ever will.", "Leadership Principles آمازون این را «ستون فقرات داشته باش؛ مخالفت کن و متعهد شو» می‌نامد. تضعیف یک تصمیم پس از اتخاذ آن، بیش از خودِ مخالفت اعتماد را از بین می‌برد."), link: ["scenarios/s14", L("Try the scenario", "سناریو را امتحان کنید")] },
      { id: "q26", q: L("How do I build a succession plan?", "چگونه برنامه‌ی جانشینی بسازم؟"),
        a: L("Name a potential successor for every key role — including yours — and give them real stretch.", "برای هر نقش کلیدی، از جمله نقش خودتان، یک جانشین بالقوه مشخص کنید و به او کارهای واقعاً فراتر از سطح بسپارید."),
        d: L("The vacation test is the simplest check: could your org run for two weeks without you? If not, you are a single point of failure.", "آزمون مرخصی ساده‌ترین بررسی است: آیا مجموعه‌ی شما دو هفته بدون شما کار می‌کند؟ اگر نه، شما یک نقطه‌ی شکست واحد (SPoF) هستید."), link: ["scenarios/s9", L("Try the scenario", "سناریو را امتحان کنید")] }
    ] },
    { id: "jobs", icon: "briefcase", n: L("Changing jobs & leveling", "تغییر شغل و تعیین سطح"), q: [
      { id: "q27", q: L("How do I avoid being down-leveled?", "چگونه down-level نشوم؟"),
        a: L("Settle the target level early, prove scope with numbers, tell stories at the right altitude, and negotiate level before pay.", "سطح هدف را زود مشخص کنید، دامنه‌ی اثر را با عدد اثبات کنید، داستان‌ها را در ارتفاع درست تعریف کنید و پیش از حقوق، درباره‌ی سطح مذاکره کنید."),
        d: L("Most leveling happens before and during the loop, not at the offer.", "بیشترِ تعیین سطح پیش از فرآیند مصاحبه و در طول آن انجام می‌شود، نه در زمان پیشنهاد شغلی."), link: ["hiring", L("Hiring without down-leveling", "استخدام بدون down-level")] },
      { id: "q28", q: L("My title is 'Head of Engineering'. Why am I offered an EM role?", "عنوان من «Head of Engineering» است. چرا نقش EM به من پیشنهاد می‌شود؟"),
        a: L("Because levels compare scope, not titles — and at larger companies your scope maps to a first-line EM.", "چون سطح‌ها دامنه‌ی اثر را مقایسه می‌کنند، نه عنوان را؛ و در شرکت‌های بزرگ‌تر دامنه‌ی شما با مدیر خط اول تطبیق دارد."),
        d: L("Title inflation at smaller companies is normal. Present yourself as a manager with unusual breadth, and negotiate band and sign-on rather than title.", "تورم عنوان در شرکت‌های کوچک‌تر امری عادی است. خودتان را مدیری با گستردگی غیرمعمول معرفی کنید و به جای عنوان، برای بازه‌ی حقوقی و پاداش امضای قرارداد مذاکره کنید."), link: ["hiring/ex-0", L("Worked example", "نمونه‌ی حل‌شده")] },
      { id: "q29", q: L("Can I negotiate my level after the offer?", "آیا پس از پیشنهاد شغلی می‌توانم درباره‌ی سطح مذاکره کنم؟"),
        a: L("Sometimes, before you accept. Rarely at the very end.", "گاهی، پیش از پذیرش؛ و به‌ندرت در انتهای انتهای فرآیند."),
        d: L("Ask for written feedback, offer an extra interview, bring new evidence or a competing offer at the higher level, and ask the hiring manager to argue for you. Do not discuss pay until the level is settled.", "بازخورد مکتوب بخواهید، یک مصاحبه‌ی اضافه پیشنهاد دهید، شواهد جدید یا پیشنهاد رقیب در سطح بالاتر ارائه کنید و از hiring manager بخواهید از شما دفاع کند. تا روشن شدن تکلیف سطح، درباره‌ی حقوق صحبت نکنید."), link: ["hiring/playbook", L("The playbook", "دستورالعمل")] },
      { id: "q30", q: L("Should I accept a down-level?", "آیا down-level را بپذیرم؟"),
        a: L("Often yes when you are entering a higher-tier company; often no when you are already in one.", "وقتی وارد شرکتی در رده‌ی بالاتر می‌شوید، اغلب بله؛ وقتی خودتان در همان رده هستید، اغلب نه."),
        d: L("Check total compensation, written next-level expectations, and whether you would be content doing this level's job for two years.", "مجموع درآمد، انتظارات مکتوب سطح بعد و این‌که آیا از انجام کار این سطح به مدت دو سال راضی خواهید بود را بررسی کنید."), link: ["hiring/accept", L("Decide", "تصمیم بگیرید")] },
      { id: "q31", q: L("How should I describe my scope to a recruiter?", "دامنه‌ی اثرم را چگونه برای کارشناس جذب توصیف کنم؟"),
        a: L("In numbers they can compare: people, teams, managers reporting to you, budget, systems, planning horizon, business metrics.", "با اعدادی که قابل مقایسه باشند: افراد، تیم‌ها، مدیران زیرمجموعه، بودجه، سیستم‌ها، افق برنامه‌ریزی و metricهای کسب‌وکاری."),
        d: L("For example: \"3 EMs, 38 engineers; I own a €2M budget and the payments roadmap for the year.\"", "برای مثال: «۳ EM و ۳۸ مهندس؛ مالک بودجه‌ای ۲ میلیون یورویی و نقشه‌ی راه سالانه‌ی حوزه‌ی پرداخت هستم.»"), link: ["hiring/calibrator", L("Scope calibrator", "کالیبراتور دامنه‌ی اثر")] },
      { id: "q32", q: L("How does a Senior EM interview differ from an EM interview?", "مصاحبه‌ی Senior EM چه تفاوتی با مصاحبه‌ی EM دارد؟"),
        a: L("In the altitude of your answers: several teams instead of one, creating direction instead of executing it, growing managers instead of engineers.", "در ارتفاع پاسخ‌ها: چند تیم به جای یک تیم، خلق جهت به جای اجرای آن و پرورش مدیران به جای مهندسان."),
        d: L("The questions often look identical. Prepare stories where the scope, the ambiguity and the leverage are visibly one level up.", "پرسش‌ها اغلب یکسان به نظر می‌رسند. داستان‌هایی آماده کنید که در آن‌ها دامنه‌ی اثر، ابهام و اهرم اثرگذاری آشکارا یک سطح بالاتر باشد."), link: ["hiring/altitude", L("Story altitude", "ارتفاع داستان")] }
    ] },
    { id: "now", icon: "globe", n: L("The industry now", "صنعت در امروز"), q: [
      { id: "q33", q: L("Is middle management disappearing?", "آیا مدیریت میانی در حال حذف شدن است؟"),
        a: L("It is thinning and reshaping, not disappearing.", "در حال کم‌شدن و تغییر شکل است، نه حذف شدن."),
        d: L("Many large companies removed layers and widened spans between 2023 and 2026. Management roles are fewer and larger, and the bar for manager-of-managers roles is higher.", "بسیاری از شرکت‌های بزرگ میان ۲۰۲۳ تا ۲۰۲۶ لایه‌های مدیریتی را کاهش دادند و دامنه‌ی کنترل را گسترش دادند. نقش‌های مدیریتی کمتر و بزرگ‌تر شده‌اند و معیار نقش‌های مدیرِ مدیران بالاتر رفته است."), link: ["landscape", L("The landscape in 2026", "چشم‌انداز ۲۰۲۶")] },
      { id: "q34", q: L("Do managers need to code again because of AI?", "آیا به خاطر هوش مصنوعی، مدیران باید دوباره کد بزنند؟"),
        a: L("They need to be closer to the work. 'Player-coach' expectations are rising, especially in flatter orgs.", "باید به کار نزدیک‌تر باشند. انتظار «بازیکن-مربی» (player-coach) به‌ویژه در سازمان‌های تخت‌تر در حال افزایش است."),
        d: L("That does not mean owning critical-path tickets. It means current technical judgment, fluency with AI tools, and credibility in design and incident reviews.", "این به معنای برداشتن taskهای مسیر بحرانی نیست؛ به معنای قضاوت فنی به‌روز، تسلط بر ابزارهای هوش مصنوعی و اعتبار در design review و بررسی incidentهاست."), link: ["landscape", L("The landscape in 2026", "چشم‌انداز ۲۰۲۶")] },
      { id: "q35", q: L("How is AI changing what is expected of EMs?", "هوش مصنوعی انتظارات از EMها را چگونه تغییر می‌دهد؟"),
        a: L("AI use is becoming a measured expectation, headcount requests face 'why not AI?' tests, and coordination-only work is the first to be cut.", "استفاده از هوش مصنوعی به انتظاری سنجیدنی تبدیل می‌شود، درخواست‌های headcount با پرسش «چرا هوش مصنوعی نه؟» سنجیده می‌شوند و کار صرفاً هماهنگی، اولین کاری است که حذف می‌شود."),
        d: L("Show AI-assisted outcomes, not usage counts. DORA's research finds that AI amplifies a team's existing strengths and weaknesses, so the fundamentals matter more, not less.", "نتایجی را که با کمک هوش مصنوعی به دست آمده نشان دهید، نه آمار استفاده را. پژوهش DORA نشان می‌دهد هوش مصنوعی نقاط قوت و ضعف موجود تیم را تشدید می‌کند؛ پس اصول پایه مهم‌تر شده‌اند، نه کم‌اهمیت‌تر."), link: ["landscape", L("The landscape in 2026", "چشم‌انداز ۲۰۲۶")] },
      { id: "q36", q: L("Should I stay IC because management roles are shrinking?", "آیا چون نقش‌های مدیریتی کم می‌شوند، بهتر است IC بمانم؟"),
        a: L("Choose the job you want to do, not the one the market seems to favour this year.", "شغلی را انتخاب کنید که می‌خواهید انجامش دهید، نه شغلی که به نظر می‌رسد بازار امسال ترجیحش می‌دهد."),
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

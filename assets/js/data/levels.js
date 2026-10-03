/* The reference ladder: acting period + five management levels, the IC track, axes and illustrative weeks. */
(function () {
  "use strict";
  var G = window.ELG, L = G.L;

  /* Week blocks: [day 0-4, start slot (0 = 9:00, 30-min slots), slots, category, en, fa] */
  function wk(rows) {
    return rows.map(function (r) { return { d: r[0], s: r[1], n: r[2], c: r[3], t: L(r[4], r[5]) }; });
  }

  G.data.levels = [
    /* ---------------------------------------------------------------- ACTING */
    {
      id: "A",
      name: L("Acting manager", "مدیر در دوره‌ی آزمایشی"),
      titles: L("Acting EM · Interim manager · TLM on trial", "Acting EM · مدیر موقت · TLM آزمایشی"),
      verb: L("Learn", "یادگیری"),
      question: L("Do I want this job — and can I do it well?", "آیا این نقش را می‌خواهم و می‌توانم آن را خوب انجام دهم؟"),
      summary: L(
        "A reversible trial, usually six months and at most a year. You practise the whole job with heavy mentorship, and the outcome — manager, extend, or back to IC — is a decision, not a verdict.",
        "این دوره معمولاً شش ماه طول می‌کشد و حداکثر تا یک سال ادامه دارد. در آن، همه‌ی ابعاد مدیریت را با mentorship مستمر مدیر ارشد تمرین می‌کنید. در پایان، درباره‌ی ورود شما به نردبان مدیریت، تمدید دوره یا بازگشت به مسیر IC تصمیم گرفته می‌شود."
      ),
      stats: {
        scope: [L("One team, often your own", "یک تیم، اغلب تیم خودتان"), 0.18],
        span: [L("3–6 people", "۳ تا ۶ نفر"), 0.12],
        hands: [L("40–60% of your time", "۴۰ تا ۶۰ درصد زمان"), 0.55],
        horizon: [L("Weeks to a quarter", "چند هفته تا یک فصل"), 0.12]
      },
      dims: {
        delivery: [
          L("Practise the team's rhythm: planning, standups, retros and status updates.", "اداره‌ی روال کاری تیم را تمرین می‌کنید: برنامه‌ریزی، standup، retro و گزارش وضعیت."),
          L("Learn to run several projects at once, prioritise, and delegate instead of doing it all yourself.", "یاد می‌گیرید چند پروژه را هم‌زمان مدیریت کنید، اولویت‌ها را مشخص کنید و کارها را به دیگران بسپارید."),
          L("Raise risks early and ask your manager for help before a problem grows.", "ریسک‌ها را زود مطرح می‌کنید و پیش از بزرگ‌شدن مشکل از مدیر ارشدتان کمک می‌گیرید."),
          L("Still contribute technically, but measure yourself by the team's output, not your own.", "همچنان مشارکت فنی دارید و عملکرد خود را بر اساس نتیجه‌ی کار تیم می‌سنجید.")
        ],
        people: [
          L("Hold regular 1:1s and learn to give specific, timely feedback.", "جلسات ۱:۱ منظم برگزار می‌کنید و دادن بازخورد مشخص و به‌موقع را یاد می‌گیرید."),
          L("Learn the basics of people management: expectations, recognition, performance conversations.", "اصول پایه‌ی مدیریت انسانی را یاد می‌گیرید: روشن‌کردن انتظارات، قدردانی و گفت‌وگو درباره‌ی عملکرد."),
          L("Build a learning plan with your manager and use them as a frequent mentor.", "با مدیر ارشدتان برنامه‌ی یادگیری تدوین می‌کنید و به‌طور منظم از mentorship او کمک می‌گیرید."),
          L("Reflect honestly: which parts of the job energise you, and which drain you?", "تجربه‌ی خود را مرور می‌کنید و مشخص می‌کنید از انجام کدام مسئولیت‌ها رضایت دارید و کدام بخش‌های نقش برایتان فرساینده است.")
        ],
        team: [
          L("Earn trust as the team's leader — especially with former peers.", "اعتماد تیم را به عنوان راهبر آن جلب می‌کنید، به‌خصوص اعتماد همتایان سابق‌تان را."),
          L("Shadow interviews and debriefs to learn how hiring decisions are made.", "در مصاحبه‌ها و جلسات debrief حضور پیدا می‌کنید تا نحوه‌ی تصمیم‌گیری در جذب را بیاموزید."),
          L("Notice conflicts early and bring them to your manager with a proposed next step.", "تعارض‌ها را زود تشخیص می‌دهید و همراه با یک پیشنهاد مشخص با مدیر ارشدتان مطرح می‌کنید."),
          L("Build a working relationship with your product counterpart.", "با همکار مسئول محصول، رابطه‌ی کاری سازنده‌ای برقرار می‌کنید.")
        ]
      },
      practice: {
        delivery: L("Instead of taking the hardest ticket, you pair a mid-level engineer with it and hold a daily ten-minute check-in.", "سخت‌ترین task را به یک مهندس سطح میانی می‌سپارید و روزانه ده دقیقه با او check-in دارید تا در انجام مستقل آن حمایت لازم را دریافت کند."),
        people: L("After a tense code review, you give feedback the same day: what you saw, its effect, and what you would like next time.", "پس از یک code review پرتنش، همان روز بازخورد می‌دهید: چه دیدید، چه اثری داشت و دفعه‌ی بعد چه انتظاری دارید."),
        team: L("In week one you hold get-to-know-you 1:1s with everyone, including the peer who also wanted the role.", "در هفته‌ی اول با همه، از جمله همتایی که خودش هم متقاضی این نقش بود، جلسه‌ی ۱:۱ آشنایی برگزار می‌کنید.")
      },
      next: [
        [L("Trying the role", "امتحان کردن نقش"), L("Owning the team's delivery and decisions", "پذیرش مسئولیت delivery و تصمیم‌های تیم")],
        [L("Feedback when prompted", "دادن بازخورد فقط وقتی از شما خواسته می‌شود"), L("Regular, fair performance management", "مدیریت عملکرد منظم و منصفانه")],
        [L("Shadowing interviews", "حضور در مصاحبه‌ها"), L("Owning hiring for your team", "پذیرش مسئولیت جذب‌واستخدام تیم")],
        [L("Leaning on your manager daily", "اتکای روزانه به مدیر ارشد"), L("Asking for guidance, not rescue", "گرفتن راهنمایی، به جای وابستگی برای حل مشکل")]
      ],
      traps: [
        L("**The hero coder.** You still take the critical-path work, so the team waits for you.", "**وابستگی delivery به کار فنی شما.** همچنان taskهای مسیر بحرانی را خودتان برمی‌دارید و تیم برای پیشبرد کار منتظر شما می‌ماند."),
        L("**Avoiding the hard talk.** You postpone feedback to stay liked.", "**فرار از گفت‌وگوی سخت.** بازخورد را عقب می‌اندازید تا محبوب بمانید."),
        L("**Title over fit.** You treat the trial as a status to protect rather than an experiment to learn from.", "**تمرکز بر حفظ جایگاه مدیریتی.** در دوره‌ی آزمایشی، بیش از یادگیری و شناخت تناسب نقش با خودتان، نگران حفظ جایگاه مدیریتی هستید.")
      ],
      evidence: [
        L("1:1 notes that show regular, two-way conversations", "یادداشت‌های ۱:۱ که گفت‌وگوی منظم و دوطرفه را نشان می‌دهد"),
        L("A delivery the team finished with you coordinating rather than coding it", "یک delivery که اعضای تیم با هماهنگی شما به سرانجام رسانده‌اند و خودتان در آن کدنویسی نکرده‌اید"),
        L("Feedback from the team and peers (a light 360)", "بازخورد تیم و همتایان (ارزیابی ۳۶۰ درجه‌ی مختصر)"),
        L("A written reflection on whether you want to continue", "یادداشتی درباره‌ی تجربه‌تان و اینکه آیا می‌خواهید مدیریت را ادامه دهید")
      ],
      story: L(
        "Sara, a senior backend engineer, becomes acting manager of the five-person payments team. In month one Sara still codes 60% of the time and misses two 1:1s. Sara's manager suggests one rule: no critical-path tickets. By month three Sara runs planning, has given a first difficult piece of feedback, and has noticed that unblocking others is more satisfying than closing tickets. At the six-month review the committee confirms Sara as an EM, with a growth plan focused on hiring.",
        "سارا، مهندس ارشد backend، مدیریت آزمایشی تیم پنج‌نفره‌ی پرداخت را بر عهده می‌گیرد. ماه اول هنوز ۶۰٪ وقتش را صرف کدنویسی می‌کند و دو جلسه‌ی ۱:۱ را از دست می‌دهد. مدیر ارشدش پیشنهاد می‌کند taskهای مسیر بحرانی را خودش برندارد. در ماه سوم، سارا برنامه‌ریزی تیم را اداره می‌کند، اولین گفت‌وگوی دشوارِ بازخورد را پشت سر گذاشته و فهمیده از بازکردن گره‌ی کار دیگران بیشتر از بستن ticketهای خودش لذت می‌برد. در ارزیابی شش‌ماهه، کمیته ورود او به نردبان مدیریت را تأیید می‌کند، با برنامه‌ی رشدی که بر جذب‌واستخدام تمرکز دارد."
      ),
      week: wk([
        [0, 0, 1, "delivery", "Standup (you run it)", "standup (با هدایت شما)"], [0, 1, 6, "tech", "Coding: feature work", "کدنویسی: توسعه‌ی قابلیت"], [0, 7, 1, "people", "1:1 · Sara", "۱:۱ · سارا"], [0, 8, 1, "people", "Mentoring with my manager", "mentorship با مدیر ارشد"], [0, 9, 4, "tech", "Coding", "کدنویسی"], [0, 13, 1, "delivery", "Planning prep", "آمادگی برای جلسه‌ی برنامه‌ریزی"], [0, 14, 1, "team", "Shadow an interview", "حضور در مصاحبه"], [0, 15, 1, "admin", "Inbox", "ایمیل و پیام‌ها"],
        [1, 0, 1, "delivery", "Standup", "standup"], [1, 1, 2, "delivery", "Sprint planning", "برنامه‌ریزی sprint"], [1, 3, 1, "people", "1:1 · Kian", "۱:۱ · کیان"], [1, 4, 1, "people", "1:1 · Nima", "۱:۱ · نیما"], [1, 5, 7, "tech", "Coding", "کدنویسی"], [1, 12, 2, "tech", "Code reviews", "code review"], [1, 14, 1, "delivery", "Stakeholder update", "گزارش به ذی‌نفعان"], [1, 15, 1, "admin", "Inbox", "ایمیل و پیام‌ها"],
        [2, 0, 1, "delivery", "Standup", "standup"], [2, 1, 6, "tech", "Coding", "کدنویسی"], [2, 7, 1, "people", "1:1 · Tara", "۱:۱ · تارا"], [2, 8, 1, "team", "Paired interview", "مصاحبه‌ی مشترک"], [2, 9, 4, "tech", "On-call and debugging", "on-call و رفع اشکال"], [2, 13, 2, "people", "Manager training module", "دوره‌ی آموزش مدیریت"], [2, 15, 1, "admin", "Inbox", "ایمیل و پیام‌ها"],
        [3, 0, 1, "delivery", "Standup", "standup"], [3, 1, 2, "delivery", "Backlog refinement", "پالایش backlog"], [3, 3, 6, "tech", "Coding", "کدنویسی"], [3, 9, 1, "people", "1:1 · Omid", "۱:۱ · امید"], [3, 10, 1, "team", "PM sync", "هماهنگی با PM"], [3, 11, 4, "tech", "Reviews and pairing", "review و pair programming"], [3, 15, 1, "admin", "Inbox", "ایمیل و پیام‌ها"],
        [4, 0, 1, "delivery", "Standup", "standup"], [4, 1, 2, "delivery", "Retro", "retro"], [4, 3, 6, "tech", "Coding", "کدنویسی"], [4, 9, 2, "people", "Feedback practice with mentor", "تمرین بازخورد با mentor"], [4, 11, 2, "team", "Team demo", "دموی تیم"], [4, 13, 2, "tech", "Tech debt", "tech debt"], [4, 15, 1, "admin", "Inbox", "ایمیل و پیام‌ها"]
      ])
    },

    /* ---------------------------------------------------------------- M2 */
    {
      id: "M2",
      name: L("Engineering Manager", "مدیر مهندسی"),
      titles: L("Engineering Manager · EM I · Team Lead (people)", "Engineering Manager · EM I · Team Lead"),
      verb: L("Execute", "اجرا"),
      question: L("Is my team delivering what we committed, with quality — and are my people growing?", "آیا تیمم به تعهداتش با کیفیت عمل می‌کند و اعضای آن رشد می‌کنند؟"),
      summary: L(
        "You execute well at the level of your team: business and technical solutions, and the people processes — hiring, principled performance management, living the culture. Hands-on technical work is still a significant part of your time.",
        "در این سطح، کار اصلی شما اجرای باکیفیت در مقیاس تیم است: هم به‌نتیجه‌رساندن راه‌حل‌های فنی و کسب‌وکاری و هم اجرای اصولی فرآیندهای مدیریت انسانی مثل جذب‌واستخدام، مدیریت عملکرد و جاری‌کردن فرهنگ سازمانی. مشارکت فنی مستقیم همچنان بخش قابل توجهی از وقت شماست."
      ),
      stats: {
        scope: [L("One team; goals set with your manager", "یک تیم، اهداف با مدیر ارشد تعیین می‌شود"), 0.25],
        span: [L("5–8 engineers", "۵ تا ۸ مهندس"), 0.22],
        hands: [L("20–40% of your time", "۲۰ تا ۴۰ درصد زمان"), 0.3],
        horizon: [L("Sprint to quarter", "یک sprint تا یک فصل"), 0.25]
      },
      dims: {
        delivery: [
          L("Balance technical contribution, your people's needs and the organisation's priorities — all three at once, none second-class.", "مشارکت فنی، نیازهای اعضای تیم و اولویت‌های سازمان را هم‌زمان پیش می‌برید و در تخصیص وقت و منابع، میان آن‌ها تعادل برقرار می‌کنید."),
          L("Own delivery end to end: plans, trade-offs, quality, and clear answers for stakeholders.", "مسئولیت کامل delivery را از ابتدا تا انتها به عهده دارید: برنامه، trade-offها، کیفیت و پاسخ روشن به ذی‌نفعان."),
          L("Treat on-call, uptime and quality as yours, with a sense of urgency, in step with product.", "on-call، در دسترس بودن سرویس‌ها و کیفیت را مسئولیت خودتان می‌دانید. با sense of urgency و هماهنگ با تیم محصول، مسائل آن‌ها را پیگیری می‌کنید."),
          L("Deliver the goals set with your manager on the agreed timeline, and make priorities clear to the team.", "اهدافی را که با مدیر ارشدتان تعیین کرده‌اید، در زمان‌بندی توافق‌شده به نتیجه می‌رسانید و اولویت‌ها را برای تیم روشن می‌کنید."),
          L("Master the routine: breaking down and assigning work, tracking progress, running ceremonies, reporting up.", "بر کارهای routine مدیریت تیم مسلط هستید: تقسیم و تخصیص کارها، پایش پیشرفت، برگزاری ceremonyها و گزارش‌دهی به مدیران بالاتر.")
        ],
        people: [
          L("Make sure everyone understands the team's mission.", "مطمئن می‌شوید همه‌ی اعضای تیم مأموریت تیم را درست درک کرده‌اند."),
          L("Assign work fairly and without favouritism.", "کارها را منصفانه و بی‌تبعیض تخصیص می‌دهید."),
          L("Coach people technically and grow their craft.", "اعضای تیم را در امور فنی راهنمایی می‌کنید و آن‌ها را در ابعاد تخصصی رشد می‌دهید."),
          L("Know each person's strengths and growth areas; give regular, constructive feedback.", "نقاط قوت و زمینه‌های بهبود هر فرد را می‌شناسید و بازخورد منظم و سازنده می‌دهید."),
          L("Run performance processes carefully and fairly, tied to the organisation's goals.", "فرآیندهای مدیریت عملکرد را با دقت و منصفانه و هم‌سو با اهداف سازمان اجرا می‌کنید.")
        ],
        team: [
          L("Earn the team's acceptance as its leader and establish your role.", "اعتماد و پذیرش تیم را جلب می‌کنید و جایگاه خود را به عنوان راهبر تثبیت می‌کنید."),
          L("Own hiring for your team, to both the technical and the cultural bar.", "مسئول جذب‌واستخدام تیم هستید و افراد را بر اساس معیارهای فنی و فرهنگی سازمان انتخاب می‌کنید."),
          L("Build a constructive relationship with your product counterpart and stakeholders.", "با همکار مسئول محصول و ذی‌نفعان، روابط کاری سازنده‌ای برقرار می‌کنید."),
          L("Measure team health and performance with the right metrics, then keep improving.", "عملکرد و سلامت تیم را با metricهای درست می‌سنجید و مستمراً بهبودش می‌دهید."),
          L("Spot conflicts yourself and act early; bring in your manager when needed.", "تعارض‌ها را خودتان تشخیص می‌دهید و زود اقدام می‌کنید. در صورت نیاز از مدیر ارشدتان کمک می‌گیرید.")
        ]
      },
      practice: {
        delivery: L("A PM wants to cut testing to hit a date. You offer a smaller scope with full testing, and write down the risk you are declining to take.", "PM می‌خواهد برای رسیدن به موعد، تست را حذف کند. شما دامنه‌ی کوچک‌تر با تست کامل را پیشنهاد می‌دهید و ریسکی را که نمی‌پذیرید مکتوب می‌کنید."),
        people: L("Nobody is surprised at review time: every rating you give was already discussed in 1:1s during the cycle.", "بازخورد مربوط به هر امتیاز ارزیابی را پیش‌تر در طول دوره و در جلسات ۱:۱ مطرح کرده‌اید، تا افراد هنگام ارزیابی از نتیجه غافل‌گیر نشوند."),
        team: L("After two tense retros, you raise the friction between two engineers privately with each of them, before it turns into camps.", "پس از دو retro پرتنش، با هر یک از دو مهندس درباره‌ی اختلافشان خصوصی صحبت می‌کنید تا تنش به دو دسته شدن تیم منجر نشود.")
      },
      next: [
        [L("Executing goals set with your manager", "اجرای اهدافی که با مدیر ارشد تعیین شده"), L("Defining your team's goals and roadmap with light review", "تعریف اهداف و نقشه‌ی راه تیم با حداقل نظارت")],
        [L("Running team processes", "اجرای فرآیندهای تیم"), L("Designing team processes, technical and human", "طراحی فرآیندهای تیم (فنی و انسانی)")],
        [L("Fixing issues in your own services", "رفع مشکلات سرویس‌های خودتان"), L("Solving risks to users even when another team's service causes them", "ارائه‌ی راهکار برای ریسک‌های تجربه‌ی کاربر، حتی وقتی ریشه در سرویس تیم دیگری دارد")],
        [L("Giving feedback", "دادن بازخورد"), L("Drawing growth paths and holding transparent career conversations", "ترسیم مسیر رشد و گفت‌وگوی شفاف درباره‌ی مسیر شغلی")],
        [L("Working well with your PM", "همکاری خوب با PM"), L("Building excellent relationships with other teams and aligning timelines", "برقراری روابط کاری سازنده با تیم‌های دیگر و هم‌سو کردن زمان‌بندی‌ها")],
        [L("Keeping the team calm", "آرام نگه داشتن تیم"), L("Guarding the culture: spotting toxic patterns and acting on engagement data", "صیانت از فرهنگ: تشخیص الگوهای سمی و اقدام بر اساس داده‌های تعلق شغلی")]
      ],
      traps: [
        L("**Super-IC.** You take the hardest tickets and become the bottleneck.", "**ادامه‌ی کار در نقش super-IC.** سخت‌ترین taskها را خودتان برمی‌دارید و پیشبرد کار تیم به شما وابسته می‌شود."),
        L("**Status reporter.** You relay updates instead of owning outcomes.", "**انتقال گزارش وضعیت.** به جای پذیرش مسئولیت نتیجه، فقط گزارش‌ها را منتقل می‌کنید."),
        L("**Review-time surprises.** You save feedback for the performance cycle.", "**غافل‌گیری در ارزیابی.** بازخوردها را برای زمان ارزیابی عملکرد نگه می‌دارید."),
        L("**Umbrella manager.** You shield the team from all context instead of giving the context they need.", "**محدودکردن اطلاعات تیم.** با هدف محافظت از تیم، اطلاعاتی را که برای شناخت شرایط و تصمیم‌گیری نیاز دارد در اختیارش نمی‌گذارید.")
      ],
      evidence: [
        L("Commitments met on agreed timelines, with trade-offs made explicit", "تعهداتی که در زمان‌بندی توافق‌شده و با trade-offهای شفاف deliver شده‌اند"),
        L("Quality and on-call trends that improved on your watch", "روند بهبود شاخص‌های کیفیت و on-call در دوره‌ی مدیریت شما"),
        L("A written growth note for each report, updated every cycle", "یادداشت رشد مکتوب برای هر نفر که در هر دوره به‌روز می‌شود"),
        L("Hires you made who are thriving six months later", "افرادی که جذب کرده‌اید و شش ماه بعد عملکرد خوبی دارند"),
        L("Stakeholders saying they get clear, early answers from you", "بازخورد ذی‌نفعان مبنی بر این‌که پاسخ‌های روشن و زودهنگام از شما می‌گیرند")
      ],
      story: L(
        "Nima leads a seven-person checkout team. A dependency on the payments API slips by two weeks. Nima re-sequences the sprint so the team builds against a mock, agrees with the PM to launch without saved cards, and tells stakeholders the new date the same day. The launch ships one week late with a clear follow-up plan. In the retro Nima records the lesson: surface dependency risks in week one, not week four. That is solid M2 work — owning delivery inside the team's control.",
        "نیما مدیر تیم هفت‌نفره‌ی checkout است. آماده‌شدن API پرداخت دو هفته عقب می‌افتد. نیما ترتیب کارهای sprint را تغییر می‌دهد تا تیم با mock پیش برود، با PM بر سر انتشار بدون قابلیت «کارت‌های ذخیره‌شده» توافق می‌کند و همان روز تاریخ جدید را به ذی‌نفعان اطلاع می‌دهد. محصول با یک هفته تأخیر و برنامه‌ی روشن برای تکمیل منتشر می‌شود. نیما در retro ثبت می‌کند که ریسک وابستگی‌ها باید در هفته‌ی اول مطرح شود تا رسیدگی به آن به هفته‌ی چهارم موکول نشود. در این مثال، نیما مسئولیت delivery در حوزه‌ی کنترل تیم را می‌پذیرد که از انتظارات سطح M2 است."
      ),
      week: wk([
        [0, 0, 1, "delivery", "Team standup", "standup تیم"], [0, 1, 2, "delivery", "Sprint planning", "برنامه‌ریزی sprint"], [0, 3, 1, "people", "1:1 · Sara", "۱:۱ · سارا"], [0, 4, 1, "people", "1:1 · Kian", "۱:۱ · کیان"], [0, 5, 1, "admin", "Inbox", "ایمیل و پیام‌ها"], [0, 6, 4, "tech", "Coding: payment retries", "کدنویسی: retry پرداخت"], [0, 10, 2, "tech", "Code reviews", "code review"], [0, 12, 1, "team", "Product trio sync", "هماهنگی با PM و طراح"], [0, 13, 2, "delivery", "Backlog refinement", "پالایش backlog"], [0, 15, 1, "admin", "Updates", "به‌روزرسانی‌ها"],
        [1, 0, 1, "delivery", "Standup", "standup"], [1, 1, 2, "tech", "Design review", "design review"], [1, 3, 1, "people", "1:1 · Nima", "۱:۱ · نیما"], [1, 4, 1, "people", "1:1 · Tara", "۱:۱ · تارا"], [1, 5, 2, "team", "Interview: backend", "مصاحبه: backend"], [1, 7, 4, "tech", "Coding / pairing", "کدنویسی / pairing"], [1, 11, 1, "delivery", "Dependency sync", "هماهنگی وابستگی‌ها"], [1, 12, 2, "people", "Feedback prep", "آماده‌سازی بازخورد"], [1, 14, 1, "admin", "Inbox", "ایمیل و پیام‌ها"], [1, 15, 1, "delivery", "Stakeholder update", "گزارش به ذی‌نفعان"],
        [2, 0, 1, "delivery", "Standup", "standup"], [2, 1, 1, "people", "1:1 · Omid", "۱:۱ · امید"], [2, 2, 1, "people", "1:1 · Roya", "۱:۱ · رویا"], [2, 3, 1, "team", "Hiring debrief", "debrief جذب"], [2, 4, 4, "tech", "Focus: coding", "تمرکز: کدنویسی"], [2, 8, 2, "delivery", "Incident review", "بررسی incident"], [2, 10, 2, "tech", "Code reviews", "code review"], [2, 12, 1, "strategy", "Quarter goals with manager", "اهداف فصل با مدیر ارشد"], [2, 13, 1, "people", "1:1 with my manager", "۱:۱ با مدیر ارشد"], [2, 14, 1, "team", "Demo and shout-outs", "دمو و قدردانی"], [2, 15, 1, "admin", "Inbox", "ایمیل و پیام‌ها"],
        [3, 0, 1, "delivery", "Standup", "standup"], [3, 1, 2, "delivery", "Roadmap review with PM", "مرور نقشه‌ی راه با PM"], [3, 3, 1, "people", "1:1 · Dara", "۱:۱ · دارا"], [3, 4, 1, "team", "Cross-team sync", "هماهنگی بین‌تیمی"], [3, 5, 4, "tech", "Coding / on-call support", "کدنویسی / پشتیبانی on-call"], [3, 9, 2, "team", "Interview: frontend", "مصاحبه: frontend"], [3, 11, 2, "delivery", "Release planning", "برنامه‌ریزی release"], [3, 13, 1, "people", "Career conversation", "گفت‌وگوی مسیر شغلی"], [3, 14, 1, "strategy", "Read org OKRs", "مطالعه‌ی OKRهای سازمان"], [3, 15, 1, "admin", "Approvals", "تأییدها"],
        [4, 0, 1, "delivery", "Standup", "standup"], [4, 1, 2, "delivery", "Retro", "retro"], [4, 3, 2, "tech", "Tech-debt triage", "اولویت‌بندی tech debt"], [4, 5, 2, "people", "Writing feedback", "نوشتن بازخورد"], [4, 7, 2, "team", "Onboarding plan", "برنامه‌ی onboarding"], [4, 9, 1, "delivery", "Weekly report", "گزارش هفتگی"], [4, 10, 1, "people", "1:1 · Leila", "۱:۱ · لیلا"], [4, 11, 2, "people", "Growth plans review", "مرور برنامه‌های رشد"], [4, 13, 3, "admin", "Inbox and next week", "ایمیل و برنامه‌ی هفته‌ی بعد"]
      ])
    },

    /* ---------------------------------------------------------------- M3 */
    {
      id: "M3",
      name: L("Self-directed EM", "مدیر مهندسی مستقل"),
      titles: L("Engineering Manager · EM II · Senior EM (single team, at some companies)", "Engineering Manager · EM II · Senior EM (تک‌تیمی در برخی شرکت‌ها)"),
      verb: L("Identify", "شناسایی"),
      question: L("What should my team do next — and how should we work to do it well?", "تیمم در قدم بعد چه باید بکند و چگونه باید کار کنیم تا آن را خوب انجام دهیم؟"),
      summary: L(
        "More autonomy, less supervision. Beyond executing, you identify solutions and design the team's processes — technical and human. You build an effective, agile team with a healthy culture, bring order to ICs' efforts, and build excellent relationships with stakeholders.",
        "با استقلال بیشتر و نظارت کمتر تیم را مدیریت می‌کنید. علاوه بر اجرا، راه‌حل مسائل را «شناسایی» و فرآیندهای فنی و انسانی تیم را طراحی می‌کنید. تیمی کارآمد و چابک با فرهنگ سالم می‌سازید، مشارکت ICها را هماهنگ می‌کنید و با ذی‌نفعان روابط کاری قوی و قابل اتکا برقرار می‌کنید."
      ),
      stats: {
        scope: [L("One team (or two); goals you define", "یک تیم (یا دو تیم)، اهدافی که خودتان تعریف می‌کنید"), 0.38],
        span: [L("6–10 people, may include a tech lead", "۶ تا ۱۰ نفر، ممکن است یک راهبر فنی هم داشته باشید"), 0.32],
        hands: [L("10–25% of your time", "۱۰ تا ۲۵ درصد زمان"), 0.18],
        horizon: [L("Quarter to a year", "یک فصل تا یک سال"), 0.4]
      },
      dims: {
        delivery: [
          L("Define your team's goals and roadmap with minimal supervision, then deliver them.", "اهداف و نقشه‌ی راه تیم را با حداقل نظارت «تعریف» می‌کنید و به نتیجه می‌رسانید."),
          L("Identify organisational challenges and solve them, so your team's work has tangible impact.", "چالش‌های سازمانی را فعالانه «شناسایی» و حل می‌کنید. نتیجه‌ی کار تیمتان اثر ملموسی در سازمان دارد."),
          L("Fix risks to your users' experience even when the root cause sits in another team's service.", "برای ریسک‌های تجربه‌ی کاربران محصولاتتان راهکار ارائه و اجرا می‌کنید، حتی اگر ریشه‌ی مشکل در سرویس تیم دیگری باشد."),
          L("Keep decisions anchored to mission, vision and strategy; absorb ambiguity yourself first, then help the team.", "تصمیم‌هایتان را در راستای مأموریت، دورنما و راهبردهای حوزه‌ی خود می‌گیرید. ابتدا ابهام‌های آن‌ها را برای خودتان روشن می‌کنید و سپس به تیم کمک می‌کنید در این شرایط پیش برود."),
          L("Weigh short-term needs against long-term technical health with sound judgment.", "با قضاوت درست، میان نیازهای کوتاه‌مدت و سلامت فنی بلندمدت حوزه‌ی خود تعادل برقرار می‌کنید."),
          L("Break hard engineering problems down and drive them with your senior engineers — not just delegate them.", "مسائل سخت مهندسی را می‌فهمید، به بخش‌های قابل حل تقسیم می‌کنید و همراه با مهندسان ارشد پیش می‌برید. پس از تفویض هم در پیگیری مسئله مشارکت دارید.")
        ],
        people: [
          L("Set direction for each person and for the team's roadmap without frequent guidance.", "برای اعضای تیم تعیین جهت می‌کنید و نقشه‌ی راه تیم را بدون نیاز به راهنمایی مکرر مشخص می‌کنید."),
          L("Draw growth paths and build a culture where people feel safe to grow.", "برای افراد مسیر رشد ترسیم می‌کنید و فرهنگی می‌سازید که در آن برای رشد احساس امنیت کنند."),
          L("Understand, and teach, how personal growth, performance and level progression connect.", "ارتباط میان رشد فردی، رشد عملکردی و رشد نردبانی را عمیقاً درک و در تیم ترویج می‌کنید."),
          L("Be the go-to person on your reports' work; set clear expectations and hold honest career conversations.", "از کار direct reportها شناخت کافی دارید و مرجع قابل اتکایی (go-to person) برای اطلاعات آن هستید. انتظارات را روشن می‌کنید و درباره‌ی عملکرد و مسیر شغلی با آن‌ها شفاف گفت‌وگو می‌کنید."),
          L("Invest in your own growth; seek feedback from reports, peers and customers without getting defensive.", "برای رشد خودتان وقت می‌گذارید و با وجود مشغله، آن را در اولویت نگه می‌دارید. از افراد تیم، همتایان و مشتریان بازخورد می‌گیرید و بدون موضع دفاعی آن را بررسی می‌کنید.")
        ],
        team: [
          L("Make sure your management is never the team's biggest risk.", "اطمینان حاصل می‌کنید که مدیریت شما هرگز تهدیدی جدی برای تیم نباشد."),
          L("Guard the culture: detect toxic subcultures and resolve conflicts before they hurt well-being.", "مسئولیت فرهنگ تیم را می‌پذیرید، خرده‌فرهنگ‌های سمی را تشخیص می‌دهید و به اختلافات حل‌نشده‌ای که به به‌زیستی تیم آسیب می‌زنند رسیدگی می‌کنید."),
          L("Build an output-oriented, accountable culture, and credit contributions in front of stakeholders.", "فرهنگ خروجی‌محور و پاسخ‌گو می‌سازید و مشارکت‌ها را در حضور ذی‌نفعان به رسمیت می‌شناسید."),
          L("Build excellent relationships with other teams and align timelines and goals.", "با تیم‌های دیگر روابط کاری سازنده و قابل اتکا می‌سازید و اهداف و زمان‌بندی‌ها را هم‌سو می‌کنید."),
          L("Read engagement data, know its drivers, and act on it.", "داده‌های رضایت و تعلق شغلی را پایش می‌کنید، driverهای آن را می‌شناسید و بر اساس آن تصمیم می‌گیرید."),
          L("Keep the team effective in unplanned, ambiguous situations, and welcome constructive change.", "در موقعیت‌های مبهم و پیش‌بینی‌نشده کارایی تیم را حفظ می‌کنید و از تغییرات سازنده استقبال می‌کنید.")
        ]
      },
      practice: {
        delivery: L("Checkout errors spike after a partner team changes its caching. You do not wait for their fix: you propose a joint mitigation, run the war room, and add a contract test both teams own.", "پس از تغییر cache در یک تیم همکار، خطاهای checkout افزایش می‌یابد. برای رسیدگی به مشکل، راه‌حل مشترک پیشنهاد می‌دهید، بحران را هدایت می‌کنید و یک contract test با مسئولیت مشترک دو تیم اضافه می‌کنید."),
        people: L("You show an engineer the gap to the next level with two concrete examples, then hand them ownership of the next design doc.", "فاصله تا سطح بعد را با دو مثال مشخص به یک مهندس نشان می‌دهید و مالکیت design doc بعدی را به او می‌سپارید."),
        team: L("The engagement survey shows 'my opinion counts' dropping. You change planning so engineers propose half of the quarter's work.", "نظرسنجی تعلق شغلی نشان می‌دهد شاخص «نظر من اهمیت دارد» افت کرده است. فرآیند برنامه‌ریزی را تغییر می‌دهید تا نیمی از کارهای فصل را خود مهندسان پیشنهاد دهند.")
      },
      next: [
        [L("Impact inside your team", "اثر در محدوده‌ی تیم"), L("Impact beyond it: cross-team projects with adjacent teams", "اثر فراتر از تیم: پروژه‌های فراتیمی با همراه‌سازی تیم‌های مجاور")],
        [L("Quarterly goals", "اهداف فصلی"), L("Mid- and long-term strategy; turning ambiguity (VUCA) into opportunity", "استراتژی میان‌مدت و بلندمدت، تبدیل ابهام (VUCA) به فرصت")],
        [L("Team processes", "فرآیندهای تیم"), L("Engineering processes across your department", "فرآیندهای مهندسی در سطح «بخش»")],
        [L("Growing engineers", "رشد مهندسان"), L("Growing leaders and mentoring newer managers", "رهبرپروری و mentor کردن مدیران تازه‌کار")],
        [L("Team culture", "فرهنگ تیم"), L("A vision that gives meaning, plus inclusion and psychological safety", "دورنمایی که به کار تیم معنا بدهد، همراه با فراگیری و ایمنی روانی")],
        [L("A strong technical manager", "مدیر فنی قوی"), L("Technically leading senior and staff engineers", "راهبری فنی متخصصان ارشد و Staff")]
      ],
      traps: [
        L("**Local optimum.** You optimise your team at the expense of its neighbours.", "**بهینه‌سازی محلی.** عملکرد تیم خودتان را به قیمت تحمیل هزینه به تیم‌های مجاور بهبود می‌دهید."),
        L("**Roadmap without a story.** Your goals do not connect to the strategy.", "**نقشه‌ی راه بی‌ارتباط با استراتژی.** روشن نیست اهدافتان چطور به استراتژی کمک می‌کند."),
        L("**Delegating the hard parts away.** You hand complex problems to seniors and step back entirely.", "**تفویض کامل بخش‌های سخت.** مسائل پیچیده را به نیروهای ارشد می‌سپارید و کاملاً کنار می‌کشید."),
        L("**Single point of decision.** Every choice still routes through you.", "**گلوگاه تصمیم‌گیری.** همه‌ی تصمیم‌ها هنوز باید از شما عبور کند.")
      ],
      evidence: [
        L("A roadmap you authored that was approved with light edits", "نقشه‌ی راهی که خودتان نوشتید و با اصلاحات جزئی تأیید شد"),
        L("A team process you designed that stuck (on-call rotation, incident reviews…)", "فرآیندی که طراحی کردید و ماندگار شد (چرخه‌ی on-call، incident review و…)"),
        L("People who grew into bigger scope under you", "افرادی که زیر نظر شما به دامنه‌ی مسئولیت بزرگ‌تری رسیدند"),
        L("Cross-team issues you resolved before they escalated", "مسائل بین‌تیمی که پیش از escalate شدن حل کردید"),
        L("Improving engagement or retention trends", "روند بهبود تعلق شغلی یا ماندگاری")
      ],
      story: L(
        "Leila's search team keeps missing its latency target. Instead of asking for more people, Leila traces the problem to two upstream services and a missing performance budget, writes a one-page proposal for a shared latency budget, gets both upstream teams to adopt it, and adds a performance check to the team's definition of done. Latency drops 35% in a quarter. Nobody told Leila what the problem was — identifying it is the M3 signal.",
        "تیم جست‌وجوی لیلا مرتب از هدف latency عقب می‌ماند. لیلا پیش از درخواست نیروی بیشتر، علت را در دو سرویس upstream و نبود performance budget پیدا می‌کند. پیشنهادی یک‌صفحه‌ای برای latency budget مشترک می‌نویسد، موافقت هر دو تیم را جلب می‌کند و بررسی performance را به definition of done تیم اضافه می‌کند. latency در یک فصل ۳۵٪ کاهش می‌یابد. لیلا بدون اینکه مسئله از پیش برایش تعریف شده باشد، آن را «شناسایی» و راه‌حل را پیشنهاد کرده است که از انتظارات سطح M3 است."
      ),
      week: wk([
        [0, 0, 1, "delivery", "Standup", "standup"], [0, 1, 2, "strategy", "Quarter roadmap draft", "پیش‌نویس نقشه‌ی راه فصل"], [0, 3, 1, "people", "1:1 · Sara", "۱:۱ · سارا"], [0, 4, 1, "people", "1:1 · Kian (TL)", "۱:۱ · کیان (راهبر فنی)"], [0, 5, 1, "team", "Product trio sync", "هماهنگی با PM و طراح"], [0, 6, 3, "tech", "Architecture review", "بررسی معماری"], [0, 9, 1, "people", "1:1 · Nima", "۱:۱ · نیما"], [0, 10, 2, "delivery", "Planning with TL", "برنامه‌ریزی با راهبر فنی"], [0, 12, 2, "team", "Dependency sync", "هماهنگی وابستگی‌ها"], [0, 14, 1, "people", "Growth plan · Tara", "برنامه‌ی رشد · تارا"], [0, 15, 1, "admin", "Inbox", "ایمیل و پیام‌ها"],
        [1, 0, 1, "delivery", "Standup", "standup"], [1, 1, 2, "team", "Interview loop", "مصاحبه‌ی جذب"], [1, 3, 1, "people", "1:1 · Omid", "۱:۱ · امید"], [1, 4, 1, "people", "1:1 · Roya", "۱:۱ · رویا"], [1, 5, 3, "tech", "Pairing on a hard bug", "pairing روی یک باگ سخت"], [1, 8, 2, "delivery", "Incident postmortem", "postmortem یک incident"], [1, 10, 1, "people", "1:1 with my manager", "۱:۱ با مدیر ارشد"], [1, 11, 2, "strategy", "Tech debt vs features plan", "برنامه‌ی tech debt در کنار قابلیت‌های جدید"], [1, 13, 2, "delivery", "Stakeholder review", "جلسه‌ی مرور با ذی‌نفعان"], [1, 15, 1, "admin", "Inbox", "ایمیل و پیام‌ها"],
        [2, 0, 1, "delivery", "Standup", "standup"], [2, 1, 2, "people", "Career talk · Dara", "گفت‌وگوی مسیر شغلی · دارا"], [2, 3, 2, "team", "Hiring debrief", "debrief جذب"], [2, 5, 3, "tech", "Design doc review", "بررسی design doc"], [2, 8, 2, "delivery", "Redesign on-call process", "بازطراحی فرآیند on-call"], [2, 10, 1, "people", "1:1 · Leila", "۱:۱ · لیلا"], [2, 11, 2, "team", "Engagement survey review", "بررسی نظرسنجی تعلق شغلی"], [2, 13, 2, "people", "Writing feedback", "نوشتن بازخورد"], [2, 15, 1, "admin", "Inbox", "ایمیل و پیام‌ها"],
        [3, 0, 1, "delivery", "Standup", "standup"], [3, 1, 2, "strategy", "Mission and vision session", "جلسه‌ی مأموریت و دورنما"], [3, 3, 2, "delivery", "Roadmap review with PM", "مرور نقشه‌ی راه با PM"], [3, 5, 1, "people", "1:1 · Arash", "۱:۱ · آرش"], [3, 6, 3, "tech", "Coding (off critical path)", "کدنویسی (خارج از مسیر بحرانی)"], [3, 9, 2, "team", "Partner team relationship", "ارتباط با تیم همکار"], [3, 11, 2, "delivery", "Release readiness", "آمادگی release"], [3, 13, 2, "people", "Mentoring a new TL", "mentor کردن راهبر فنی تازه"], [3, 15, 1, "admin", "Inbox", "ایمیل و پیام‌ها"],
        [4, 0, 1, "delivery", "Standup", "standup"], [4, 1, 2, "delivery", "Retro", "retro"], [4, 3, 2, "team", "Demo and recognition", "دمو و قدردانی"], [4, 5, 2, "strategy", "Read company strategy", "مطالعه‌ی استراتژی سازمان"], [4, 7, 2, "people", "My own learning time", "زمان یادگیری شخصی"], [4, 9, 2, "delivery", "Metrics review", "مرور metricها"], [4, 11, 2, "admin", "Weekly report", "گزارش هفتگی"], [4, 13, 2, "people", "1:1 prep and notes", "آماده‌سازی ۱:۱ و یادداشت‌ها"], [4, 15, 1, "admin", "Inbox", "ایمیل و پیام‌ها"]
      ])
    },

    /* ---------------------------------------------------------------- M4 */
    {
      id: "M4",
      name: L("Senior Engineering Manager", "مدیر ارشد مهندسی"),
      titles: L("Senior EM · Group EM · Manager of managers (first step)", "Senior EM · Group EM · مدیرِ مدیران (قدم نخست)"),
      verb: L("Define", "تعریف"),
      question: L("Which problems matter most across teams — and who should solve them?", "کدام مسائل در سطح چند تیم مهم‌ترند و چه کسی باید حل‌شان کند؟"),
      summary: L(
        "Beyond deep mastery of execution, you identify and define problems — technical, human and business. You lead a team or teams with a critical mission and broad, complex scope, take part in the core business strategy of your area, and become a model of people management for other managers. You also show clear technical growth: you can technically lead senior and staff engineers.",
        "علاوه بر اجرای موفق راه‌حل‌های فنی، کسب‌وکاری و انسانی، در شناسایی و «تعریف» مسائل نقش اساسی دارید. چند تیم یا تیمی با مأموریت حساس و مسئولیت گسترده و پیچیده را مدیریت می‌کنید و در تدوین راهبردهای اصلی حوزه‌ی خود نقش دارید. در دانش و عملِ مدیریت انسانی، برای سایر مدیران الگو هستید. رشد فنی‌تان هم ادامه دارد: می‌توانید متخصصان ارشد و مهندسان Staff را از نظر فنی راهبری کنید."
      ),
      stats: {
        scope: [L("Several teams or one critical mission", "چند تیم یا یک مأموریت خطیر"), 0.55],
        span: [L("15–40 people across 2–4 teams, often with TLs or new EMs", "۱۵ تا ۴۰ نفر در ۲ تا ۴ تیم، اغلب با راهبران فنی یا EMهای تازه‌کار"), 0.5],
        hands: [L("5–15%: design reviews, architecture", "۵ تا ۱۵ درصد: design review و معماری"), 0.1],
        horizon: [L("6–18 months", "۶ تا ۱۸ ماه"), 0.58]
      },
      dims: {
        delivery: [
          L("Create impact beyond your team: define and run cross-team projects that move your product strategy.", "دایره‌ی اثرتان فراتر از تیم خودتان است: با همراه‌سازی تیم‌های مجاور، پروژه‌های فراتیمی در راستای استراتژی محصول تعریف و اجرا می‌کنید."),
          L("Set mid- and long-term strategy for your teams and carry it through ambiguity.", "استراتژی میان‌مدت و بلندمدت تیم‌ها را تعیین می‌کنید و با وجود ابهام، اجرای آن را به نتیجه می‌رسانید."),
          L("Deliver the organisation's hardest, most visible projects — directly or through senior engineers.", "پروژه‌های چالشی و سطح بالای سازمان را، مستقیماً یا با کمک نیروهای ارشد فنی، به نتیجه می‌رسانید."),
          L("Guide teams through reorgs and shifting priorities; support calculated risk-taking.", "تیم‌ها را در تغییرات سازمانی و تغییر اولویت‌ها هدایت می‌کنید و از پذیرش ریسک‌های سنجیده حمایت می‌کنید."),
          L("Embrace volatility, uncertainty, complexity and ambiguity (VUCA), and turn change into opportunity.", "در شرایط تلاطم، عدم قطعیت، پیچیدگی و ابهام (VUCA) پیش می‌روید و فرصت‌های رشد و بهبود را پیدا می‌کنید."),
          L("Improve engineering processes and output quality across your department.", "فرآیندهای مهندسی و کیفیت خروجی را فراتر از تیم خود، در سطح «بخش» بهبود می‌دهید.")
        ],
        people: [
          L("Act as a complete people manager — solving people problems rarely feels like a personal struggle.", "بر مدیریت انسانی مسلط هستید. مسائل افراد را می‌شناسید و حل آن‌ها کمتر برایتان چالش شخصی ایجاد می‌کند."),
          L("Delegate without fear, managing risk through checkpoints and a clear definition of done.", "با اطمینان تفویض می‌کنید و با پایش پیشرفت و تعریف روشنِ معیار تکمیل، ریسک را مدیریت می‌کنید. برای انجام کار به دیگران اعتماد دارید و مسئولیت‌ها را دوباره خودتان برنمی‌دارید."),
          L("Build a growth culture with stretch assignments — growth is not only promotion.", "فرهنگ رشد را در تیم جاری می‌کنید و مسئولیت‌های چالش‌برانگیز به افراد می‌سپارید. علاوه بر ارتقا، توسعه‌ی مهارت‌ها و افزایش دامنه‌ی مسئولیت آن‌ها را هم پیگیری می‌کنید."),
          L("Show a track record of human success stories, and grow leaders for the department's future.", "شواهد روشنی از رشد و موفقیت افرادی دارید که حمایتشان کرده‌اید و برای آینده‌ی «بخش»، راهبر پرورش می‌دهید."),
          L("Mentor newer managers in people-management processes.", "مدیران تازه‌کار را در فرآیندهای مدیریت انسانی راهنمایی و mentor می‌کنید.")
        ],
        team: [
          L("Define a challenging, clear and compelling vision that gives the team meaning.", "دورنمایی روشن، جذاب و چالش‌برانگیز تعریف می‌کنید که به کار تیم معنا بدهد."),
          L("Lead across groups when priorities compete, and align outcomes with the organisation's interest.", "بین گروه‌هایی با اولویت‌های متعارض، راهبری و هم‌سویی ایجاد می‌کنید تا نتیجه به نفع سازمان باشد."),
          L("Actively reduce human single points of failure — especially yourself.", "وابستگی به افراد کلیدی و SPoFهای انسانی را فعالانه کاهش می‌دهید، از جمله وابستگی به خودتان."),
          L("Strengthen respect, inclusion, belonging and psychological safety.", "احساس احترام، فراگیری، تعلق و ایمنی روانی را در تیم تقویت می‌کنید."),
          L("Protect well-being: model taking time off, and reprioritise when stress builds.", "به به‌زیستی افراد اهمیت می‌دهید: خودتان در استفاده از مرخصی الگو هستید و هنگام افزایش فشار، اولویت‌ها و تقسیم کار را بازبینی می‌کنید."),
          L("Improve the department's people processes, such as hiring flows or ladder definitions.", "در بهبود فرآیندهای مدیریت انسانی «بخش» اثر ملموس دارید، مثلاً flowهای جذب یا تعاریف نردبان.")
        ]
      },
      practice: {
        delivery: L("Three teams are committed to a Q3 launch. You spot a critical path through a team whose priorities just changed, reframe the goal around seller activation, cut scope to the flows that drive 80% of it, and trade on-call support for two borrowed engineers.", "سه تیم به یک launch در فصل سوم متعهد شده‌اند. مشخص می‌کنید مسیر بحرانی از تیمی می‌گذرد که اولویت‌هایش تغییر کرده است. هدف را «فعال‌سازی فروشندگان» تعریف می‌کنید و دامنه را به flowهایی محدود می‌کنید که ۸۰٪ هدف را محقق می‌کنند. برای همکاری موقت دو مهندس مذاکره می‌کنید و در مقابل، بخشی از بار on-call آن تیم را می‌پذیرید."),
        people: L("You take a two-week vacation on purpose. Your two tech leads run planning and an incident without you — and you write down what they needed.", "برای سنجش استقلال تیم، دو هفته مرخصی می‌روید. دو راهبر فنی، برنامه‌ریزی و یک incident را بدون شما مدیریت می‌کنند و شما نیازهای حمایتی آن‌ها را ثبت می‌کنید."),
        team: L("Two senior engineers from different teams disagree on an event schema. You run a structured debate with clear decision criteria, and both commit to the outcome.", "دو مهندس ارشد از دو تیم بر سر schema رویدادها اختلاف دارند. گفت‌وگویی ساختاریافته با معیارهای تصمیم روشن برگزار می‌کنید و هر دو به نتیجه‌ی آن متعهد می‌شوند.")
      },
      next: [
        [L("Several teams", "چند تیم"), L("A department, run through managers", "یک «بخش» که از طریق مدیران اداره می‌شود")],
        [L("Delivering strategy", "اجرای استراتژی"), L("Creating new strategies for org problems or new markets", "خلق استراتژی‌های تازه برای مسائل سازمانی یا بازارهای جدید")],
        [L("Today's output", "خروجی امروز"), L("Sustainable delivery, planned for future change", "delivery پایدار با برنامه برای تغییرات آینده")],
        [L("Contributing to people processes", "مشارکت در فرآیندهای انسانی"), L("Owning culture, people processes and their metrics for the department", "مالکیت فرهنگ، فرآیندهای مدیریت انسانی و شاخص‌های آن در «بخش»")],
        [L("Alignment with stakeholders", "هم‌سویی با ذی‌نفعان"), L("Alignment up, down and sideways; influencing senior leaders", "هم‌سویی با مدیران، تیم‌های زیرمجموعه و همتایان، اثرگذاری بر تصمیم‌های راهبران ارشد")],
        [L("Growing leaders", "رهبرپروری"), L("Growing managers and senior ICs who drive strategy", "پرورش مدیران و متخصصان ارشدی که استراتژی را پیش می‌برند")]
      ],
      traps: [
        L("**Best engineer in the room.** You override your tech leads' designs.", "**اصرار بر برتری فنی.** پیشنهادهای طراحی راهبران فنی را نادیده می‌گیرید."),
        L("**Everywhere at once.** You attend every meeting instead of building leaders.", "**حضور در همه‌ی جلسه‌ها.** به اندازه‌ای در جلسه‌ها شرکت می‌کنید که فرصت کافی برای پرورش راهبران ندارید."),
        L("**Activity as impact.** Many initiatives, few outcomes.", "**فعالیت زیاد، نتیجه‌ی کم.** برنامه‌های زیادی را شروع می‌کنید، اما اثر روشنی از آن‌ها دیده نمی‌شود."),
        L("**Surprising your boss.** Risks reach leadership from someone else first.", "**غافل‌گیر کردن مدیر ارشد.** ریسک‌ها اول از زبان دیگران به گوش مدیران ارشد می‌رسد.")
      ],
      evidence: [
        L("A cross-team initiative with a measurable business outcome", "یک ابتکار فراتیمی با نتیجه‌ی کسب‌وکاری قابل اندازه‌گیری"),
        L("A strategy document your teams actually use", "یک سند استراتژی که تیم‌ها واقعاً از آن استفاده می‌کنند"),
        L("A new manager or tech lead you grew", "یک مدیر یا راهبر فنی تازه که پرورش داده‌اید"),
        L("The vacation test: your teams ran fine for two weeks without you", "آزمون مرخصی: تیم‌ها دو هفته بدون شما به‌خوبی کار کردند"),
        L("A department-level process improvement that others adopted", "بهبود یک فرآیند در سطح «بخش» که دیگران هم پذیرفتند")
      ],
      story: L(
        "Arash runs three logistics teams. A reorg adds a fourth, struggling team with a first-time manager. Arash pairs the new manager with an experienced EM as mentor, freezes new scope for that team for six weeks while it pays down on-call pain, and presents the director with a joint roadmap that ties all four teams to one delivery-speed goal. Six months later the fourth team's engagement is up 14 points, and its manager runs planning alone.",
        "آرش سه تیم لجستیک را مدیریت می‌کند. پس از تغییر ساختار، تیم چهارمی با مشکلات عملکردی و مدیر تازه‌کار به مجموعه‌ی او اضافه می‌شود. آرش یک EM باتجربه را mentor مدیر جدید می‌کند و ورود کار تازه به آن تیم را برای شش هفته متوقف می‌کند تا بار on-call کم شود. سپس نقشه‌ی راهی مشترک به Director پیشنهاد می‌دهد که هر چهار تیم را بر هدف «سرعت تحویل» متمرکز می‌کند. شش ماه بعد، امتیاز تعلق شغلی تیم چهارم ۱۴ واحد بیشتر شده و مدیرش برنامه‌ریزی را مستقل اداره می‌کند."
      ),
      week: wk([
        [0, 0, 1, "delivery", "Leads sync (3 teams)", "هماهنگی راهبران (۳ تیم)"], [0, 1, 2, "strategy", "Multi-team strategy doc", "سند استراتژی چندتیمی"], [0, 3, 1, "people", "1:1 · EM Nima", "۱:۱ · نیما (EM)"], [0, 4, 1, "people", "1:1 · TL Sara", "۱:۱ · سارا (راهبر فنی)"], [0, 5, 1, "people", "1:1 · TL Kian", "۱:۱ · کیان (راهبر فنی)"], [0, 6, 2, "team", "Product director sync", "هماهنگی با Director محصول"], [0, 8, 2, "tech", "Architecture council", "شورای معماری"], [0, 10, 2, "delivery", "Cross-team program review", "مرور برنامه‌ی فراتیمی"], [0, 12, 2, "team", "Adjacent team leads", "راهبران تیم‌های مجاور"], [0, 14, 1, "people", "Mentoring a new manager", "mentor کردن مدیر تازه‌کار"], [0, 15, 1, "admin", "Inbox", "ایمیل و پیام‌ها"],
        [1, 0, 1, "admin", "Approvals", "تأییدها"], [1, 1, 2, "team", "Interview: EM candidate", "مصاحبه: کاندیدای EM"], [1, 3, 1, "people", "1:1 · Staff engineer", "۱:۱ · مهندس Staff"], [1, 4, 2, "delivery", "Launch risk review", "بررسی ریسک launch"], [1, 6, 2, "strategy", "Quarterly planning prep", "آماده‌سازی برنامه‌ریزی فصلی"], [1, 8, 1, "people", "1:1 with my director", "۱:۱ با Director"], [1, 9, 2, "team", "Improve hiring process", "بهبود فرآیند جذب"], [1, 11, 2, "tech", "Design review: new service", "design review: سرویس جدید"], [1, 13, 2, "delivery", "Stakeholder steering", "جلسه‌ی تصمیم‌گیری با ذی‌نفعان"], [1, 15, 1, "admin", "Inbox", "ایمیل و پیام‌ها"],
        [2, 0, 1, "delivery", "Leads sync", "هماهنگی راهبران"], [2, 1, 2, "people", "Skip-level 1:1s", "۱:۱های skip-level"], [2, 3, 2, "team", "Inclusion initiative", "برنامه‌ی تقویت فراگیری"], [2, 5, 2, "people", "Calibration prep", "آماده‌سازی کالیبراسیون"], [2, 7, 2, "strategy", "Vision workshop", "کارگاه دورنما"], [2, 9, 2, "delivery", "Release process improvement", "بهبود فرآیند release"], [2, 11, 2, "team", "Cross-functional partners", "شرکای cross-functional"], [2, 13, 2, "people", "Growth plans with leads", "برنامه‌های رشد با راهبران"], [2, 15, 1, "admin", "Inbox", "ایمیل و پیام‌ها"],
        [3, 0, 1, "delivery", "Leads sync", "هماهنگی راهبران"], [3, 1, 2, "team", "Adjacent department sync", "هماهنگی با «بخش» مجاور"], [3, 3, 2, "strategy", "Tech strategy with staff eng", "استراتژی فنی با مهندس Staff"], [3, 5, 1, "people", "1:1 · EM Nima", "۱:۱ · نیما (EM)"], [3, 6, 2, "tech", "Deep dive: hard problem", "بررسی عمیق یک مسئله‌ی سخت"], [3, 8, 2, "people", "Coaching a TL", "coach کردن راهبر فنی"], [3, 10, 2, "delivery", "Productivity review", "مرور بهره‌وری"], [3, 12, 2, "team", "Team health review", "مرور سلامت تیم‌ها"], [3, 14, 1, "people", "Career conversation", "گفت‌وگوی مسیر شغلی"], [3, 15, 1, "admin", "Inbox", "ایمیل و پیام‌ها"],
        [4, 0, 1, "delivery", "Leads sync", "هماهنگی راهبران"], [4, 1, 2, "delivery", "Retro across teams", "retro بین‌تیمی"], [4, 3, 2, "strategy", "Reading and thinking", "مطالعه و تفکر"], [4, 5, 2, "tech", "Code review sampling", "نمونه‌برداری از code reviewها"], [4, 7, 2, "people", "Feedback and recognition", "بازخورد و قدردانی"], [4, 9, 2, "team", "All-hands prep: vision", "آماده‌سازی all-hands: دورنما"], [4, 11, 2, "people", "Succession and SPoF review", "بررسی جانشینی و SPoF"], [4, 13, 2, "admin", "Weekly update to director", "گزارش هفتگی به Director"], [4, 15, 1, "admin", "Inbox", "ایمیل و پیام‌ها"]
      ])
    },

    /* ---------------------------------------------------------------- M5 */
    {
      id: "M5",
      name: L("Director of Engineering", "مدیر «بخش» (Director)"),
      titles: L("Director · Head of Engineering (large org) · Senior Manager of managers", "Director · Head of Engineering (در سازمان بزرگ)"),
      verb: L("Shape", "شکل‌دادن"),
      question: L("What organisation, culture and leaders does this department need to win this year and next?", "این «بخش» برای موفقیت امسال و سال بعد به چه ساختار، فرهنگ و رهبرانی نیاز دارد؟"),
      summary: L(
        "You lead a large or complex department through a set of managers. You take an active part in the department's annual strategy and carry it into the teams. The main expectation: keep improving delivery while growing capable managers who create the ground for healthy growth. You own the department's culture, people processes and their metrics — and you are accountable for its culture, performance and future.",
        "یک «بخش» بزرگ یا پیچیده را از طریق مجموعه‌ای از مدیران راهبری می‌کنید. در تدوین استراتژی سالانه‌ی «بخش» نقش فعال دارید و آن را در تیم‌ها اجرا می‌کنید. علاوه بر بهبود مستمر delivery، مدیران توانمند پرورش می‌دهید تا افراد امکان رشد سالم داشته باشند. فرهنگ، فرآیندهای مدیریت انسانی و شاخص‌های آن‌ها را own می‌کنید و در قبال عملکرد و آینده‌ی مجموعه‌ی خود پاسخگو هستید."
      ),
      stats: {
        scope: [L("A department, through managers", "یک «بخش»، از طریق مدیران"), 0.74],
        span: [L("4–7 managers; 30–100+ people", "۴ تا ۷ مدیر، ۳۰ تا ۱۰۰+ نفر"), 0.72],
        hands: [L("0–10%: strategy, reviews, hiring bar", "۰ تا ۱۰ درصد: استراتژی فنی، review و معیار جذب"), 0.05],
        horizon: [L("1–2 years", "۱ تا ۲ سال"), 0.75]
      },
      dims: {
        delivery: [
          L("Own a large, complex department's portfolio — its delivery and its business success.", "سبد محصولات یا پروژه‌های فنی یک «بخش» بزرگ و پیچیده را مدیریت می‌کنید و delivery و موفقیت کسب‌وکاری آن را به‌طور کامل own می‌کنید."),
          L("Plan for sustainable delivery: prepare the department for coming change, not just this quarter.", "برای delivery پایدار برنامه‌ریزی می‌کنید و هم‌زمان، «بخش» را برای تغییرات آینده آماده می‌کنید."),
          L("Create strategies for organisational problems or new markets, and execute company strategy well in your org.", "برای مسائل سازمانی یا دستیابی به بازارهای جدید استراتژی خلق می‌کنید و استراتژی‌های سازمان را در زیرسازمان خود به‌خوبی اجرا می‌کنید."),
          L("Design processes that raise productivity and agility across your teams, and follow them to results.", "فرآیندهایی برای افزایش بهره‌وری و چابکی تیم‌ها تدوین می‌کنید و تا رسیدن به نتیجه پایششان می‌کنید."),
          L("Open paths for other teams, and look after adjacent departments too.", "برای تیم‌های دیگر راه باز می‌کنید. نگاهتان به «بخش»های مجاور هم هست.")
        ],
        people: [
          L("Grow capable managers and senior ICs who drive strategy in complex projects.", "مدیران و متخصصان ارشد توانمندی پرورش می‌دهید که استراتژی را در پروژه‌های پیچیده پیش می‌برند."),
          L("Invest in people's growth and in the long-term health of your sub-organisation.", "هم در رشد افراد و هم در سلامت بلندمدت زیرسازمان خود سرمایه‌گذاری می‌کنید."),
          L("Guard the quality and fairness of people processes; train and coach your managers.", "از اجرای دقیق و منصفانه‌ی فرآیندهای مدیریت انسانی صیانت می‌کنید و مدیرانتان را آموزش داده و coach می‌کنید."),
          L("Set goals for sustainable team growth: knowledge sharing, documentation, fair access to growth opportunities.", "اهداف و معیارهای رشد پایدار را تعیین می‌کنید: چرخه‌های اشتراک دانش، مستندسازی و توزیع عادلانه‌ی فرصت‌های رشد.")
        ],
        team: [
          L("Show deep managerial judgment in org design and complex organisational problems.", "در ساختن سازمان و حل مسائل پیچیده‌ی سازمانی، قضاوت و شناخت مدیریتی عمیقی نشان می‌دهید."),
          L("Create alignment up, down and sideways, and influence senior leaders' decisions.", "با مدیران بالاتر، همتایان و تیم‌های زیرمجموعه هم‌سویی ایجاد می‌کنید و بر تصمیم‌های راهبران ارشد اثر می‌گذارید."),
          L("Proactively fix culture, strategic hiring, process and prioritisation problems.", "مسائل فرهنگ کاری، جذب‌های استراتژیک، فرآیندها و اولویت‌بندی تیم‌ها را خودجوش شناسایی و حل می‌کنید."),
          L("Build teams that bend without breaking, and scale them as needs change.", "تیم‌هایی سازگار با تغییر می‌سازید و اندازه و ساختارشان را متناسب با نیاز تنظیم می‌کنید."),
          L("Own the department's engagement metrics and move them measurably.", "مسئولیت شاخص‌های تعلق شغلی «بخش» را به عهده می‌گیرید و آن‌ها را به‌طور ملموس بهبود می‌دهید.")
        ]
      },
      practice: {
        delivery: L("Mid-year, a new regulation hits payments. You re-plan the portfolio, pause a lower-ROI initiative, move one team — and explain the trade-off to every stakeholder in writing.", "در میانه‌ی سال، مقررات جدید بر حوزه‌ی پرداخت اثر می‌گذارد. سبد پروژه‌ها را دوباره برنامه‌ریزی می‌کنید، برنامه‌ای با ROI کمتر را متوقف می‌کنید و یک تیم را جابه‌جا می‌کنید. این trade-off را برای همه‌ی ذی‌نفعان مکتوب توضیح می‌دهید."),
        people: L("At calibration, you challenge a rating that rests on 'not visible enough' and ask for evidence of impact instead.", "در کالیبراسیون، امتیازی را که دلیلش «به اندازه‌ی کافی دیده نمی‌شود» بوده به چالش می‌کشید و شواهد اثرگذاری فرد را می‌خواهید."),
        team: L("You redraw team boundaries around customer journeys instead of components, and run the transition with your managers, not around them.", "مرز تیم‌ها را حول سفرهای مشتری بازطراحی می‌کنید و برای تغییر ساختار از تیم‌های مبتنی بر اجزای فنی، با مدیران برنامه‌ریزی و همکاری می‌کنید.")
      },
      next: [
        [L("A department", "یک «بخش»"), L("An organisation pillar; a key leader at company level", "یک pillar سازمانی، یکی از راهبران کلیدی در سطح سازمان")],
        [L("Portfolio delivery", "delivery سبد پروژه‌ها"), L("P&L and ROI ownership — return relative to headcount", "مالکیت سود و زیان (P&L) و ROI، آورده به نسبت headcount")],
        [L("Executing company strategy", "اجرای استراتژی سازمان"), L("Formulating core parts of it and owning company objectives", "تدوین بخش‌های اساسی آن و مالکیت objectiveهای کلان")],
        [L("Department culture", "فرهنگ «بخش»"), L("Institutionalising company culture and the operating model", "نهادینه کردن فرهنگ سازمان و مدل عملیاتی")],
        [L("Growing managers", "پرورش مدیران"), L("Growing senior leaders and directors", "پرورش مدیران ارشد و Directorها")]
      ],
      traps: [
        L("**Skipping your managers.** You run teams directly instead of through their leaders.", "**دور زدن مدیران.** مسئولیت اداره‌ی تیم‌ها را از مدیران می‌گیرید و مستقیماً در کار تیم‌ها مداخله می‌کنید."),
        L("**Headcount as status.** You grow the organisation instead of its return.", "**افزایش اندازه‌ی سازمان بدون توجه به بازده.** تعداد headcount را بیشتر می‌کنید، اما بازده مجموعه متناسب با آن رشد نمی‌کند."),
        L("**Strategy as a slide.** Goals without explicit trade-offs.", "**استراتژی در حد اسلاید.** اهداف را ارائه می‌کنید، اما trade-offهای لازم برای رسیدن به آن‌ها را مشخص نمی‌کنید."),
        L("**Losing technical touch.** Your decisions are no longer grounded in how the systems really work.", "**فاصله گرفتن از واقعیت فنی.** تصمیم‌هایتان دیگر بر فهم واقعی سیستم‌ها استوار نیست.")
      ],
      evidence: [
        L("An annual strategy with explicit trade-offs, and results against it", "استراتژی سالانه با trade-offهای روشن و نتایجی که در مقایسه با آن سنجیده شده‌اند"),
        L("Managers you hired or promoted who now lead well", "مدیرانی که جذب یا ارتقا دادید و اکنون به‌خوبی راهبری می‌کنند"),
        L("An org-design change with measurable results", "یک تغییر در ساختار سازمانی با نتایج قابل اندازه‌گیری"),
        L("Engagement and retention trends across the department", "روند تعلق شغلی و ماندگاری در سطح «بخش»"),
        L("Portfolio outcomes compared with the investment", "نتایج سبد پروژه‌ها در مقایسه با سرمایه‌گذاری انجام‌شده")
      ],
      story: L(
        "Kaveh directs a 70-person marketplace department with six managers. Engagement in two teams is falling and hiring is stuck. Kaveh pauses the quarterly roadmap review for a week, runs skip-level sessions, and finds that both teams depend on a platform nobody owns. Kaveh creates a platform team from existing headcount, asks a staff engineer and an EM to lead it together, and sets department-wide on-call standards. Within two quarters hiring unblocks and both teams' engagement recovers.",
        "کاوه Director یک «بخش» ۷۰ نفره‌ی marketplace با شش مدیر است. تعلق شغلی دو تیم کاهش یافته و جذب‌واستخدام متوقف شده است. کاوه بررسی فصلی نقشه‌ی راه را یک هفته عقب می‌اندازد و با برگزاری skip-level می‌فهمد هر دو تیم به پلتفرمی وابسته‌اند که مسئول مشخصی ندارد. با افراد موجود، تیم پلتفرم تشکیل می‌دهد، راهبری مشترک آن را به یک مهندس Staff و یک EM می‌سپارد و استانداردهای on-call را برای کل «بخش» تعیین می‌کند. ظرف دو فصل، جذب دوباره پیش می‌رود و تعلق شغلی هر دو تیم بهبود می‌یابد."
      ),
      week: wk([
        [0, 0, 2, "delivery", "Staff meeting (my EMs)", "جلسه‌ی مدیران زیرمجموعه"], [0, 2, 1, "people", "1:1 · EM Sara", "۱:۱ · سارا (EM)"], [0, 3, 1, "people", "1:1 · EM Kian", "۱:۱ · کیان (EM)"], [0, 4, 2, "strategy", "Annual strategy draft", "پیش‌نویس استراتژی سالانه"], [0, 6, 2, "team", "Peer directors sync", "هماهنگی با Directorهای هم‌تا"], [0, 8, 2, "strategy", "Headcount and budget", "headcount و بودجه"], [0, 10, 1, "people", "1:1 · Sr EM Nima", "۱:۱ · نیما (Sr EM)"], [0, 11, 2, "team", "Product VP alignment", "هم‌سویی با VP محصول"], [0, 13, 2, "delivery", "Portfolio review", "مرور سبد پروژه‌ها"], [0, 15, 1, "admin", "Inbox", "ایمیل و پیام‌ها"],
        [1, 0, 1, "admin", "Approvals", "تأییدها"], [1, 1, 2, "team", "Interview: senior EM", "مصاحبه: Senior EM"], [1, 3, 2, "people", "Skip-level lunch", "ناهار skip-level"], [1, 5, 2, "strategy", "Org design session", "جلسه‌ی طراحی سازمان"], [1, 7, 1, "people", "1:1 · EM Tara", "۱:۱ · تارا (EM)"], [1, 8, 1, "people", "1:1 · Staff engineer", "۱:۱ · مهندس Staff"], [1, 9, 2, "tech", "Architecture strategy review", "مرور استراتژی معماری"], [1, 11, 2, "delivery", "Delivery risk review", "بررسی ریسک delivery"], [1, 13, 2, "team", "Culture and engagement plan", "برنامه‌ی فرهنگ و تعلق شغلی"], [1, 15, 1, "admin", "Inbox", "ایمیل و پیام‌ها"],
        [2, 0, 2, "people", "Manager coaching circle", "حلقه‌ی coaching مدیران"], [2, 2, 2, "strategy", "Exec review prep", "آماده‌سازی جلسه‌ی مدیران ارشد"], [2, 4, 2, "team", "Cross-department alignment", "هم‌سویی بین «بخش»ها"], [2, 6, 1, "people", "1:1 · EM Omid", "۱:۱ · امید (EM)"], [2, 7, 1, "people", "1:1 with my VP", "۱:۱ با VP"], [2, 8, 2, "team", "Hiring pipeline review", "مرور pipeline جذب"], [2, 10, 2, "strategy", "Customer deep dive", "بررسی عمیق نیازهای مشتری"], [2, 12, 2, "delivery", "Operational review (SLOs)", "مرور عملیاتی (SLOها)"], [2, 14, 2, "admin", "Docs and approvals", "اسناد و تأییدها"],
        [3, 0, 2, "delivery", "Staff meeting", "جلسه‌ی مدیران"], [3, 2, 2, "people", "Calibration committee", "کمیته‌ی کالیبراسیون"], [3, 4, 2, "strategy", "Tech strategy with principal", "استراتژی فنی با مهندس Principal"], [3, 6, 2, "team", "Recruiting: sell call", "گفت‌وگو برای ترغیب کاندیدا به پیوستن"], [3, 8, 2, "people", "Succession planning", "برنامه‌ریزی جانشینی"], [3, 10, 2, "team", "All-hands prep", "آماده‌سازی all-hands"], [3, 12, 2, "strategy", "Finance partner: ROI", "شریک مالی: ROI"], [3, 14, 1, "tech", "Read a design doc", "مطالعه‌ی design doc"], [3, 15, 1, "admin", "Inbox", "ایمیل و پیام‌ها"],
        [4, 0, 2, "team", "Department all-hands", "all-hands «بخش»"], [4, 2, 2, "people", "Emerging managers", "پرورش مدیران تازه‌کار"], [4, 4, 2, "strategy", "Thinking time", "زمان تفکر"], [4, 6, 2, "delivery", "Process improvement review", "مرور بهبود فرآیندها"], [4, 8, 1, "tech", "Incident review (sampled)", "مرور نمونه‌ای incidentها"], [4, 9, 2, "people", "Feedback and recognition", "بازخورد و قدردانی"], [4, 11, 2, "team", "Partner org relationship", "ارتباط با سازمان همکار"], [4, 13, 2, "admin", "Weekly update to VP", "گزارش هفتگی به VP"], [4, 15, 1, "admin", "Inbox", "ایمیل و پیام‌ها"]
      ])
    },

    /* ---------------------------------------------------------------- M6 */
    {
      id: "M6",
      name: L("Senior Director / VP", "مدیر ارشد «بخش» / VP"),
      titles: L("Senior Director · VP of Engineering · Head of a pillar", "Senior Director · VP of Engineering · مدیر یک pillar"),
      verb: L("Direct", "جهت‌دهی"),
      question: L("Where must the company go — and is my organisation the best investment to get there?", "سازمان باید به کجا برود و آیا مجموعه‌ی من بهترین سرمایه‌گذاری برای رسیدن به آن‌جاست؟"),
      summary: L(
        "You are one of the key leaders of the organisation. You own a critical pillar and track its health, grow the company's senior managers, are directly accountable for the P&L of a core part of the business, and play a central role in setting the company's direction.",
        "یکی از راهبران کلیدی سازمان هستید. مسئولیت یک «بخش» حیاتی، مثل یک pillar، را دارید و سلامت عملکرد آن را پیگیری می‌کنید. مدیران ارشد را پرورش می‌دهید، مستقیماً در قبال سود و زیان آن حوزه پاسخگو هستید و در تعیین جهت حرکت سازمان نقش اساسی دارید."
      ),
      stats: {
        scope: [L("An organisation pillar with a P&L", "یک pillar سازمانی با مسئولیت P&L"), 0.95],
        span: [L("4–8 directors; 100–500+ people", "۴ تا ۸ Director، ۱۰۰ تا ۵۰۰+ نفر"), 0.95],
        hands: [L("~0%: technical strategy and big bets", "حدود صفر: فقط استراتژی فنی و سرمایه‌گذاری‌های بزرگ"), 0.02],
        horizon: [L("2–5 years", "۲ تا ۵ سال"), 0.95]
      },
      dims: {
        delivery: [
          L("Your area is a portfolio whose success is measured by return relative to investment (headcount); you own its P&L.", "حوزه‌ی شما مجموعه‌ای است که موفقیتش با آورده به نسبت سرمایه‌گذاری (headcount) سنجیده می‌شود. مسئول سود و زیان (P&L) آن هستید."),
          L("Persuade senior leadership to invest, and stay accountable for the long-term return.", "در صورت لزوم، مدیران ارشد سازمان را برای سرمایه‌گذاری متقاعد می‌کنید و برای آورده‌های بلندمدت پاسخ‌گو هستید."),
          L("Formulate and lead core parts of the company's strategy and vision; own core objectives.", "بخش‌های اساسی راهبرد و دورنمای سازمان را تدوین و هدایت می‌کنید و مالک objectiveهای اساسی هستید."),
          L("Create and grow sustainable revenue, reduce cost, and open new markets.", "درآمد پایدار خلق می‌کنید و رشد می‌دهید، هزینه‌ها را کاهش می‌دهید و به بازارهای جدید دست پیدا می‌کنید."),
          L("Make high-level decisions that shape the company's direction, as part of the executive team.", "به عنوان بخشی از رهبران اجرایی، تصمیمات سطح بالایی می‌گیرید که بر جهت حرکت سازمان اثر می‌گذارد.")
        ],
        people: [
          L("Raise technical, soft and leadership capability across the whole organisation.", "به رشد توانمندی فنی، نرم و راهبری در سطح کل سازمان کمک می‌کنید."),
          L("Lead senior managers, and play a key role in hiring and growing them.", "مدیران ارشد را رهبری می‌کنید و در جذب و پرورش آن‌ها نقش کلیدی دارید."),
          L("Drive continuous learning in technical, managerial and cultural skills.", "سازمان را به سمت یادگیری مستمر در مهارت‌های فنی، مدیریتی و فرهنگی هدایت می‌کنید."),
          L("Enable people to create transformative change: innovation, retiring old processes, entering new domains.", "افراد را برای ایجاد تغییرهای اساسی enable می‌کنید، از برنامه‌های نوآورانه و اصلاح فرآیندهای قدیمی تا ورود به حوزه‌های تازه.")
        ],
        team: [
          L("Model and institutionalise the company's culture.", "در الگوسازی و نهادینه کردن فرهنگ سازمانی نقش کلیدی دارید."),
          L("Shape the operating model and ways of working across technology.", "مدل عملیاتی و راه‌ورسم کاری را در سطح تیم تکنولوژی شکل می‌دهید."),
          L("Align the organisation's middle layers with company goals and values.", "تیم‌های میانی سازمان را به سوی اهداف و ارزش‌های کلان سازمان هم‌سو می‌کنید."),
          L("Build org-wide mechanisms for continuous improvement of productivity and quality.", "سازوکارهایی در سطح سازمان برای بهبود مستمر بهره‌وری و کیفیت خروجی تیم‌ها ایجاد می‌کنید.")
        ]
      },
      practice: {
        delivery: L("Finance asks for a 15% cost cut. You do not cut evenly: you retire two low-return products, fund one growth bet, and show the CFO the three-year return of each choice.", "واحد مالی کاهش ۱۵ درصدی هزینه‌ها را می‌خواهد. به جای کاهش یکسان در همه‌ی تیم‌ها، دو محصول کم‌بازده را کنار می‌گذارید، یک فرصت رشد را تأمین مالی می‌کنید و بازده سه‌ساله‌ی هر گزینه را به مدیر مالی نشان می‌دهید."),
        people: L("Every director in your pillar has a named successor, and two of those successors grew up inside the org.", "هر Director در pillar شما یک جانشین مشخص دارد و دو نفر از این جانشین‌ها از درون سازمان رشد کرده‌اند."),
        team: L("You replace quarterly 'status theatre' with written business reviews — a format other pillars then copy.", "جلسات گزارش وضعیت فصلی را با business review مکتوب جایگزین می‌کنید تا اطلاعات قابل پیگیری باشد. pillarهای دیگر هم از این قالب الگو می‌گیرند.")
      },
      next: [
        [L("Leading a pillar", "راهبری یک pillar"), L("Leading the whole technology organisation (SVP / CTO)", "راهبری کل سازمان تکنولوژی (SVP / CTO)")],
        [L("Participating in company strategy", "مشارکت در استراتژی سازمان"), L("Accountable to the CEO and board for technology outcomes", "پاسخ‌گویی به مدیرعامل و هیئت‌مدیره برای نتایج تکنولوژی")],
        [L("Carrying the culture", "الگو و مروج فرهنگ بودن"), L("Authoring it", "شکل‌دادن به فرهنگ سازمان")]
      ],
      traps: [
        L("**Local P&L, global loss.** You win your pillar's numbers at the company's expense.", "**بهبود عملکرد محلی به زیان سازمان.** شاخص‌های pillar خود را به قیمت تحمیل هزینه به سایر بخش‌های سازمان بهبود می‌دهید."),
        L("**The executive bubble.** You hear only filtered news.", "**حباب اجرایی.** فقط اخبار فیلترشده به شما می‌رسد."),
        L("**Culture by announcement.** Values that live only in slides.", "**فرهنگ در حد اطلاعیه.** ارزش‌ها را اعلام می‌کنید، اما در شیوه‌ی کار و تصمیم‌های سازمان به آن‌ها عمل نمی‌شود."),
        L("**No successor.** The pillar depends on you.", "**بدون جانشین.** pillar به شخص شما وابسته است.")
      ],
      evidence: [
        L("Business results (revenue, cost, margin) attributable to your pillar's choices", "نتایج کسب‌وکاری مثل درآمد، هزینه و حاشیه‌ی سود که اثر تصمیم‌های pillar شما در آن‌ها روشن است"),
        L("Investment cases you made, and the returns that followed", "پرونده‌های سرمایه‌گذاری که ارائه دادید و آورده‌ای که به دنبال داشت"),
        L("Ready successors for your key roles", "جانشینان آماده برای نقش‌های کلیدی"),
        L("Operating-model changes adopted beyond your organisation", "تغییرات مدل عملیاتی که فراتر از مجموعه‌ی شما پذیرفته شد")
      ],
      story: L(
        "Maryam leads the commerce pillar, about 240 people. Growth has stalled because onboarding and trust-and-safety optimise for different metrics. Maryam aligns both around one north-star metric, moves two teams, pauses a lower-return initiative to redeploy 15 engineers, and agrees the trade-off with the CFO and the product VP. The pillar reaches 96% of its annual target against a 70% forecast, and two other pillars adopt the monthly business review Maryam introduced.",
        "مریم pillar تجارت با حدود ۲۴۰ نفر را راهبری می‌کند. رشد متوقف شده، چون تیم‌های onboarding و trust & safety هر کدام metric متفاوتی را دنبال می‌کنند. مریم هر دو را با یک north-star metric هم‌سو می‌کند، دو تیم را جابه‌جا می‌کند و برنامه‌ای کم‌بازده را متوقف می‌کند تا ۱۵ مهندس به اولویت‌های اصلی منتقل شوند. این trade-off را با مدیر مالی و VP محصول توافق می‌کند. با اینکه پیش‌بینی می‌شد فقط ۷۰٪ هدف سالانه محقق شود، pillar به ۹۶٪ هدف می‌رسد. دو pillar دیگر هم business review ماهانه‌ای را که مریم پایه‌گذاری کرده می‌پذیرند."
      ),
      week: wk([
        [0, 0, 2, "strategy", "Exec team meeting", "جلسه‌ی تیم اجرایی"], [0, 2, 2, "delivery", "Pillar staff (directors)", "جلسه‌ی Directorهای pillar"], [0, 4, 1, "people", "1:1 · Director Sara", "۱:۱ · سارا (Director)"], [0, 5, 1, "people", "1:1 · Director Kian", "۱:۱ · کیان (Director)"], [0, 6, 2, "strategy", "P&L review with finance", "مرور P&L با واحد مالی"], [0, 8, 2, "team", "Peer VPs alignment", "هم‌سویی با VPهای هم‌تا"], [0, 10, 2, "strategy", "CEO update prep", "آماده‌سازی گزارش به مدیرعامل"], [0, 12, 2, "team", "Customer / partner meeting", "جلسه با مشتری / شریک"], [0, 14, 1, "people", "1:1 · Director Nima", "۱:۱ · نیما (Director)"], [0, 15, 1, "admin", "Inbox", "ایمیل و پیام‌ها"],
        [1, 0, 1, "admin", "Approvals", "تأییدها"], [1, 1, 2, "team", "Interview: director", "مصاحبه: کاندیدای Director"], [1, 3, 2, "strategy", "Multi-year strategy", "استراتژی چندساله"], [1, 5, 2, "people", "Skip-level roundtable", "میزگرد skip-level"], [1, 7, 2, "strategy", "Investment case: new market", "پرونده‌ی سرمایه‌گذاری: بازار جدید"], [1, 9, 2, "team", "Operating model", "مدل عملیاتی"], [1, 11, 2, "delivery", "Quarterly business review", "business review فصلی"], [1, 13, 2, "strategy", "Tech strategy council", "شورای استراتژی فنی"], [1, 15, 1, "admin", "Inbox", "ایمیل و پیام‌ها"],
        [2, 0, 2, "strategy", "Thinking and writing", "تفکر و نوشتن"], [2, 2, 2, "people", "Talent and succession review", "مرور استعدادها و جانشینی"], [2, 4, 2, "team", "Cross-pillar alignment", "هم‌سویی بین pillarها"], [2, 6, 1, "people", "1:1 with CEO / CTO", "۱:۱ با مدیرعامل / CTO"], [2, 7, 1, "people", "1:1 · Director Tara", "۱:۱ · تارا (Director)"], [2, 8, 2, "strategy", "Org design and budget", "طراحی سازمان و بودجه"], [2, 10, 2, "team", "All-hands prep", "آماده‌سازی all-hands"], [2, 12, 2, "delivery", "Operational excellence", "تعالی عملیاتی"], [2, 14, 2, "strategy", "Market and competitors", "بازار و رقبا"],
        [3, 0, 2, "team", "Recruiting senior leaders", "جذب مدیران ارشد"], [3, 2, 2, "strategy", "Portfolio trade-offs", "trade-offهای سبد"], [3, 4, 2, "people", "Leadership programme", "برنامه‌ی پرورش راهبران"], [3, 6, 2, "team", "Industry and partners", "صنعت و شرکا"], [3, 8, 2, "strategy", "Exec offsite prep", "آماده‌سازی offsite مدیران"], [3, 10, 1, "tech", "Architecture principles", "اصول معماری"], [3, 11, 2, "delivery", "Big-bet programme review", "مرور برنامه‌ی سرمایه‌گذاری‌های بزرگ"], [3, 13, 2, "people", "Coaching a director", "coach کردن یک Director"], [3, 15, 1, "admin", "Inbox", "ایمیل و پیام‌ها"],
        [4, 0, 2, "team", "Pillar all-hands", "all-hands pillar"], [4, 2, 2, "strategy", "Strategy memo", "نوشتن یادداشت استراتژی"], [4, 4, 2, "people", "Feedback and recognition", "بازخورد و قدردانی"], [4, 6, 2, "team", "Culture ambassadors", "سفیران فرهنگ"], [4, 8, 2, "strategy", "Cost and efficiency review", "مرور هزینه و کارایی"], [4, 10, 1, "tech", "Demo day", "روز دمو"], [4, 11, 1, "delivery", "Escalations", "escalationها"], [4, 12, 2, "admin", "Weekly exec update", "گزارش هفتگی اجرایی"], [4, 14, 2, "admin", "Docs and inbox", "اسناد و پیام‌ها"]
      ])
    }
  ];

  G.data.levelById = {};
  G.data.levels.forEach(function (l) { G.data.levelById[l.id] = l; });

  /* IC track (reference). Scope index matches the ring labels below. */
  G.data.icLevels = [
    { id: "L3", name: L("Engineer", "مهندس"), sub: L("Delivers well-defined tasks with guidance", "taskهای مشخص را با راهنمایی انجام می‌دهد و تحویل می‌دهد") },
    { id: "L4", name: L("Engineer II", "مهندس II"), sub: L("Owns features end to end", "مالک قابلیت‌ها از ابتدا تا انتها") },
    { id: "L5", name: L("Senior Engineer", "مهندس ارشد"), sub: L("Leads projects within a team; mentors", "راهبری پروژه‌ها در تیم، mentorship") },
    { id: "L6", name: L("Staff Engineer", "مهندس Staff"), sub: L("Technical direction across teams", "جهت‌دهی فنی در سطح چند تیم") },
    { id: "L7", name: L("Senior Staff", "Senior Staff"), sub: L("Technical strategy for a large org", "استراتژی فنی برای یک سازمان بزرگ") },
    { id: "L8", name: L("Principal", "Principal"), sub: L("Company-wide technical direction", "جهت‌دهی فنی در سطح کل سازمان") }
  ];

  /* The map rows, top to bottom. Each row is an altitude band. */
  G.data.ladderRows = [
    { band: L("Company", "کل سازمان"), ic: "L8", mg: "M6" },
    { band: L("Department / org", "«بخش» / سازمان"), ic: "L7", mg: "M5" },
    { band: L("Multiple teams", "چند تیم"), ic: "L6", mg: "M4" },
    { band: L("Team + neighbours", "تیم و تیم‌های مجاور"), ic: null, mg: "M3" },
    { band: L("One team", "یک تیم"), ic: "L5", mg: "M2" },
    { band: L("Team, on trial", "تیم، دوره‌ی آزمایشی"), ic: null, mg: "A", bridge: true },
    { band: L("Feature", "قابلیت"), ic: "L4", mg: null },
    { band: L("Task", "task"), ic: "L3", mg: null }
  ];

  /* Scope rings (innermost first) and each level's ring. */
  G.data.rings = [L("Your work", "کار خودتان"), L("Your team", "تیم شما"), L("Neighbour teams", "تیم‌های مجاور"), L("Multiple teams", "چند تیم"), L("Department", "«بخش»"), L("Company", "سازمان")];
  G.data.ringOf = { A: 1, M2: 1, M3: 2, M4: 3, M5: 4, M6: 5 };

  /* Five axes that change with level. */
  G.data.axes = [
    { key: "scope", name: L("Scope", "دامنه‌ی مسئولیت و اثرگذاری (scope)"), v: [0.2, 0.3, 0.45, 0.62, 0.8, 1], d: [
      L("Your own team, while you learn", "تیم خودتان، در حین یادگیری"),
      L("One team's delivery and people", "delivery و افراد یک تیم"),
      L("A team you steer, plus user risks wherever they come from", "مسئولیت تیم و رفع ریسک‌های تجربه‌ی کاربر، فارغ از منشأ آن‌ها"),
      L("Several teams or a critical mission; adjacent teams", "چند تیم یا یک مأموریت خطیر، تیم‌های مجاور"),
      L("A department and its portfolio", "یک «بخش» و سبد پروژه‌های آن"),
      L("An organisation pillar and company direction", "یک pillar سازمانی و جهت حرکت سازمان")
    ] },
    { key: "autonomy", name: L("Autonomy", "استقلال"), v: [0.15, 0.3, 0.5, 0.66, 0.82, 1], d: [
      L("Close mentorship; frequent check-ins", "mentorship نزدیک، check-in مکرر"),
      L("Executes goals set with your manager; guidance on day-to-day processes", "اجرای اهداف تعیین‌شده با مدیر ارشد، راهنمایی در فرآیندهای روزانه"),
      L("Defines team goals with light review", "تعریف اهداف تیم با حداقل نظارت"),
      L("Sets multi-team strategy; your manager reviews direction, not details", "تعیین استراتژی چندتیمی، بازبینی جهت کلی با مدیر ارشد و استقلال در جزئیات"),
      L("Sets department strategy within company goals", "تعیین استراتژی «بخش» در چارچوب اهداف سازمان"),
      L("Shapes company goals; accountable to the executive team", "شکل‌دادن به اهداف سازمان، پاسخ‌گویی به تیم اجرایی")
    ] },
    { key: "ambiguity", name: L("Ambiguity", "ابهام"), v: [0.15, 0.3, 0.5, 0.7, 0.85, 1], d: [
      L("Clear problems, guided solutions", "مسائل روشن، یافتن راه‌حل با راهنمایی"),
      L("Clear goals; you find the path", "اهداف روشن، مسیر را شما پیدا می‌کنید"),
      L("Unclear solutions; you identify them and design the process", "راه‌حل‌های نامعلوم، آن‌ها را شناسایی و فرآیند را طراحی می‌کنید"),
      L("Unframed problems; you define them", "مسائل تعریف‌نشده، آن‌ها را تعریف می‌کنید"),
      L("Future problems; you anticipate and plan for them", "مسائل آینده، پیش‌بینی و برنامه‌ریزی برای آن‌ها"),
      L("Company-level uncertainty: markets, business model, cost", "عدم قطعیت در سطح سازمان: بازار، مدل کسب‌وکار، هزینه")
    ] },
    { key: "horizon", name: L("Time horizon", "افق زمانی"), v: [0.1, 0.22, 0.4, 0.58, 0.78, 1], d: [
      L("Weeks", "چند هفته"), L("Sprint to quarter", "یک sprint تا یک فصل"), L("Quarter to a year", "یک فصل تا یک سال"),
      L("6–18 months", "۶ تا ۱۸ ماه"), L("1–2 years", "۱ تا ۲ سال"), L("2–5 years", "۲ تا ۵ سال")
    ] },
    { key: "leverage", name: L("Leverage", "توان گسترش اثرگذاری"), v: [0.12, 0.3, 0.48, 0.65, 0.82, 1], d: [
      L("Your own hands, plus coordination", "کار مستقیم خودتان و هماهنگی تیم"),
      L("Your team's execution", "اجرای تیم"),
      L("Team direction, processes and growth", "جهت‌دهی، فرآیندها و رشد تیم"),
      L("Leaders, cross-team alignment and vision", "رهبران، هم‌سویی بین‌تیمی و دورنما"),
      L("Managers, org design and culture", "مدیران، طراحی سازمان و فرهنگ"),
      L("Strategy, capital allocation and institutions", "استراتژی، تخصیص سرمایه و نهادسازی")
    ] }
  ];
})();

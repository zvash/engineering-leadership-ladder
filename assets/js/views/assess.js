(function () {
  "use strict";
  var G = window.ELG, L = G.L, t = G.t, md = G.md, icon = G.icon, UI = G.ui;
  var KEY = "assess.v1";

  var C = {
    eyebrow: L("Locate", "مکان‌یابی"),
    title: L("Where am I?", "من کجا هستم؟"),
    lede: L(
      "Thirteen questions, one per behaviour. For each, pick the statement that describes what you do consistently — not what you did once. You will get a profile across the three dimensions and a concrete growth edge.",
      "سیزده پرسش، هر کدام درباره‌ی یک رفتار. برای هر پرسش، جمله‌ای را انتخاب کنید که کار «مستمر» شما را توصیف می‌کند، نه کاری که یک بار انجام داده‌اید. در پایان، نیمرخی از سه بُعد و یک «لبه‌ی رشد» مشخص دریافت می‌کنید."
    ),
    tldr: [
      L("About **five minutes**. Answers stay in this browser only.", "حدود **پنج دقیقه** زمان می‌برد. پاسخ‌ها فقط در همین مرورگر ذخیره می‌شوند."),
      L("Your **consistent level** is your lowest dimension — the way promotion cases are read.", "**سطح پایدار** شما پایین‌ترین بُعد شماست؛ همان‌طور که پرونده‌های ارتقا خوانده می‌شوند."),
      L("Bring the **copied summary** to a 1:1 and ask your manager where they would place you.", "**خلاصه‌ی کپی‌شده** را به جلسه‌ی ۱:۱ ببرید و از مدیرتان بپرسید شما را در کجا می‌بیند.")
    ],
    note: L("This is a reflection tool, not an official assessment. Honest answers are more useful than generous ones.", "این یک ابزار تأمل است، نه ارزیابی رسمی. پاسخ صادقانه از پاسخ سخاوتمندانه مفیدتر است."),
    skip: L("Not yet / not sure", "هنوز نه / مطمئن نیستم"),
    progress: L("answered", "پاسخ داده شده"),
    of: L("of", "از"),
    profile: L("Your profile", "نیمرخ شما"),
    example: L("Example profile — answer the questions to see yours", "نیمرخ نمونه؛ برای دیدن نیمرخ خودتان به پرسش‌ها پاسخ دهید"),
    needMore: L("Answer at least two questions in each dimension (and the impact question) to see your result.", "برای دیدن نتیجه، در هر بُعد دست‌کم به دو پرسش (و به پرسش اثرگذاری) پاسخ دهید."),
    floor: L("Consistent level", "سطح پایدار"),
    floorSub: L("your lowest dimension", "پایین‌ترین بُعد شما"),
    peak: L("Strongest dimension", "قوی‌ترین بُعد"),
    edge: L("Growth edge", "لبه‌ی رشد"),
    practise: L("What to practise next", "آن‌چه باید تمرین کنید"),
    practiseIntro: L("These are the next-level behaviours for the questions where you sit at your floor:", "این‌ها رفتارهای سطح بعد برای پرسش‌هایی است که در آن‌ها در کفِ خود قرار دارید:"),
    atTop: L("You answered at the top of this ladder in every dimension. Next steps are beyond it: company-level leadership, successors, and industry influence.", "در همه‌ی ابعاد در بالاترین پله‌ی این نردبان پاسخ داده‌اید. گام‌های بعدی فراتر از آن است: راهبری در سطح کل سازمان، پرورش جانشین و اثرگذاری در صنعت."),
    openNext: L("Open the next level", "مشاهده‌ی سطح بعد"),
    growGuide: L("Transition guide", "راهنمای گذر"),
    copy: L("Copy summary for your 1:1", "کپی خلاصه برای جلسه‌ی ۱:۱"),
    reset: L("Reset answers", "پاک کردن پاسخ‌ها"),
    resetConfirm: L("Click again to confirm", "برای تأیید دوباره کلیک کنید"),
    method: L(
      "How it is computed: for each dimension, the median of your answers (the lower value when two tie). Your consistent level is the lowest dimension, because promotion cases are judged across all of them. The highlighted column is your next level.",
      "نحوه‌ی محاسبه: برای هر بُعد، میانه‌ی پاسخ‌ها (در صورت تساوی، مقدار پایین‌تر). سطح پایدار شما پایین‌ترین بُعد است، چون پرونده‌های ارتقا در همه‌ی ابعاد بررسی می‌شوند. ستون برجسته، سطح بعدی شماست."
    ),
    summaryHead: L("Self-assessment", "خودارزیابی"),
    tableTitle: L("Profile as a table", "نیمرخ به صورت جدول"),
    next: L("Growing to the next level", "رشد تا سطح بعد")
  };

  /* One impact question + four per dimension. anchors: [Acting, M2, M3, M4, M5, M6] */
  var Q = [
    { id: "i1", dim: "impact", title: L("Where does the impact of your work show up?", "اثر کار شما کجا دیده می‌شود؟"), a: [
      L("In tasks and features I help ship.", "در taskها و قابلیت‌هایی که در deliver کردنشان کمک می‌کنم."),
      L("In my team's commitments, delivered with quality and on time.", "در تعهدات تیمم که باکیفیت و به‌موقع deliver می‌شوند."),
      L("In team goals I defined, with tangible impact for the organisation.", "در اهدافی که برای تیم تعریف کرده‌ام و اثر ملموس سازمانی دارند."),
      L("In outcomes across several teams, tied to business results.", "در نتایج چند تیم که به نتایج کسب‌وکاری گره خورده‌اند."),
      L("In a department's portfolio and its business success.", "در سبد پروژه‌های یک «بخش» و موفقیت کسب‌وکاری آن."),
      L("In company-level results: revenue, cost, markets, P&L.", "در نتایج سطح سازمان: درآمد، هزینه، بازارها و P&L.")] },
    { id: "d1", dim: "delivery", title: L("Goals and roadmap", "اهداف و نقشه‌ی راه"), a: [
      L("My manager sets goals; I help run the plan.", "مدیرم اهداف را تعیین می‌کند؛ من در اجرای برنامه کمک می‌کنم."),
      L("I deliver goals set with my manager, on agreed timelines.", "اهدافی را که با مدیرم تعیین شده، در زمان‌بندی توافق‌شده deliver می‌کنم."),
      L("I define my team's goals and roadmap with light review.", "اهداف و نقشه‌ی راه تیمم را با حداقل نظارت تعریف می‌کنم."),
      L("I set multi-quarter strategy across teams and run cross-team projects.", "استراتژی چندفصلی را در سطح چند تیم تعیین و پروژه‌های فراتیمی را اجرا می‌کنم."),
      L("I own a department portfolio and create strategies for new problems or markets.", "مالک سبد پروژه‌های یک «بخش» هستم و برای مسائل یا بازارهای جدید استراتژی می‌سازم."),
      L("I help set company strategy and own core company objectives.", "در تدوین استراتژی سازمان نقش دارم و مالک objectiveهای کلان هستم.")] },
    { id: "d2", dim: "delivery", title: L("Problems and ambiguity", "مسائل و ابهام"), a: [
      L("I solve problems as they come, with help.", "مسائل را همان‌طور که پیش می‌آیند، با کمک دیگران حل می‌کنم."),
      L("I own problems in my team's area and escalate early.", "مالک مسائل حوزه‌ی تیمم هستم و زود escalate می‌کنم."),
      L("I find and fix risks to our users, even outside my team's services.", "ریسک‌های کاربرانمان را پیدا و رفع می‌کنم، حتی خارج از سرویس‌های تیمم."),
      L("I define problems nobody has framed yet and turn ambiguity into plans.", "مسائلی را تعریف می‌کنم که هنوز کسی صورت‌بندی‌شان نکرده و ابهام را به برنامه تبدیل می‌کنم."),
      L("I anticipate my department's future challenges and plan for them.", "چالش‌های آینده‌ی «بخش» را پیش‌بینی و برایشان برنامه‌ریزی می‌کنم."),
      L("I take on company-level problems: markets, profitability, cost.", "مسائل سطح سازمان را بر عهده می‌گیرم: بازار، سودآوری و هزینه.")] },
    { id: "d3", dim: "delivery", title: L("Quality and operations", "کیفیت و عملیات"), a: [
      L("I follow the team's quality practices.", "از رویه‌های کیفیت تیم پیروی می‌کنم."),
      L("I treat on-call, uptime and quality as mine, with urgency.", "on-call، بالا بودن سرویس و کیفیت را مسئولیت خودم می‌دانم و با فوریت پیگیری می‌کنم."),
      L("I balance short-term delivery and long-term technical health with sound judgment.", "میان delivery کوتاه‌مدت و سلامت فنی بلندمدت با قضاوت درست تعادل برقرار می‌کنم."),
      L("I improve engineering processes across my department.", "فرآیندهای مهندسی را در سطح «بخش» بهبود می‌دهم."),
      L("I design processes that lift productivity across teams, and track them to results.", "فرآیندهایی طراحی می‌کنم که بهره‌وری تیم‌ها را بالا می‌برد و تا نتیجه پیگیرشان هستم."),
      L("I build org-wide mechanisms for continuous improvement.", "سازوکارهایی در سطح سازمان برای بهبود مستمر می‌سازم.")] },
    { id: "d4", dim: "delivery", title: L("Technical engagement", "درگیری فنی"), a: [
      L("I still do much of the hands-on work myself.", "هنوز بخش زیادی از کار فنی را خودم انجام می‌دهم."),
      L("I contribute technically, but the team — not me — carries delivery.", "مشارکت فنی دارم، اما بار delivery را تیم می‌برد، نه من."),
      L("I break hard problems down and drive them with senior engineers.", "مسائل سخت را می‌شکنم و در کنار مهندسان ارشد پیش می‌برم."),
      L("I technically lead staff-level engineers and steer architecture across teams.", "مهندسان سطح Staff را از نظر فنی راهبری می‌کنم و معماری چند تیم را جهت می‌دهم."),
      L("I shape technical strategy through the leaders I hire and the reviews I run.", "استراتژی فنی را از طریق رهبرانی که جذب می‌کنم و reviewهایی که برگزار می‌کنم شکل می‌دهم."),
      L("I set company-wide technical direction and choose the big bets.", "جهت فنی سازمان را تعیین می‌کنم و شرط‌های بزرگ را انتخاب می‌کنم.")] },
    { id: "p1", dim: "people", title: L("Feedback and performance", "بازخورد و عملکرد"), a: [
      L("I'm learning to hold 1:1s and give feedback.", "در حال یادگیری برگزاری ۱:۱ و دادن بازخورد هستم."),
      L("I give regular, specific feedback; nobody is surprised at review time.", "بازخورد منظم و مشخص می‌دهم؛ هیچ‌کس در زمان ارزیابی غافل‌گیر نمی‌شود."),
      L("I set clear expectations and hold transparent career conversations with each person.", "انتظارات روشن تعیین می‌کنم و با هر فرد گفت‌وگوی شفاف درباره‌ی مسیر شغلی دارم."),
      L("I coach managers and tech leads on feedback and performance.", "مدیران و راهبران فنی را در بازخورد و مدیریت عملکرد coach می‌کنم."),
      L("I guard the quality and fairness of performance processes across my department.", "از کیفیت و انصاف فرآیندهای مدیریت عملکرد در «بخش» صیانت می‌کنم."),
      L("I shape how the whole organisation develops and evaluates people.", "نحوه‌ی توسعه و ارزیابی افراد در کل سازمان را شکل می‌دهم.")] },
    { id: "p2", dim: "people", title: L("Growth", "رشد"), a: [
      L("I help people informally when they ask.", "وقتی کسی بخواهد، به‌صورت غیررسمی کمکش می‌کنم."),
      L("I know each person's strengths and growth areas and coach them technically.", "نقاط قوت و قابل‌بهبود هر فرد را می‌شناسم و در امور فنی راهنمایی‌اش می‌کنم."),
      L("I draw growth paths and make it safe to grow.", "مسیر رشد ترسیم می‌کنم و فضایی امن برای رشد می‌سازم."),
      L("I give stretch assignments and have a track record of people stepping up.", "کارهای فراتر از سطح می‌سپارم و کارنامه‌ای از رشد افراد به مسئولیت‌های بزرگ‌تر دارم."),
      L("I set department-wide growth goals: knowledge sharing, fair access to opportunities.", "اهداف رشد را در سطح «بخش» تعیین می‌کنم: اشتراک دانش و توزیع عادلانه‌ی فرصت‌ها."),
      L("I build learning and leadership capacity across the company.", "ظرفیت یادگیری و راهبری را در کل سازمان می‌سازم.")] },
    { id: "p3", dim: "people", title: L("Leaders and succession", "رهبرپروری و جانشینی"), a: [
      L("I focus on my own transition into the role.", "روی گذار خودم به این نقش تمرکز دارم."),
      L("I help engineers take ownership of parts of our work.", "به مهندسان کمک می‌کنم مالکیت بخش‌هایی از کار را بر عهده بگیرند."),
      L("I develop tech leads and potential future managers.", "راهبران فنی و مدیران بالقوه‌ی آینده را پرورش می‌دهم."),
      L("I mentor new managers and grow leaders for the department's future.", "مدیران تازه‌کار را mentor می‌کنم و برای آینده‌ی «بخش» رهبر پرورش می‌دهم."),
      L("I grow managers and senior ICs who drive strategy.", "مدیران و متخصصان ارشدی پرورش می‌دهم که استراتژی را پیش می‌برند."),
      L("I hire and grow directors, and every key role has a successor.", "Directorها را جذب و پرورش می‌دهم و برای هر نقش کلیدی جانشین دارم.")] },
    { id: "p4", dim: "people", title: L("Delegation", "تفویض"), a: [
      L("I often do tasks myself because it's faster.", "اغلب کارها را خودم انجام می‌دهم چون سریع‌تر است."),
      L("I delegate tasks with a clear definition of done.", "taskها را با تعریف روشن از «انجام‌شده» تفویض می‌کنم."),
      L("I delegate outcomes, not just tasks.", "نتیجه را تفویض می‌کنم، نه فقط task را."),
      L("I delegate without fear and manage risk with checkpoints.", "بی‌هراس تفویض می‌کنم و ریسک را با نقاط پایش مدیریت می‌کنم."),
      L("I delegate whole areas to managers and hold them accountable.", "کل حوزه‌ها را به مدیران تفویض می‌کنم و آن‌ها را پاسخ‌گو نگه می‌دارم."),
      L("I delegate strategy execution across the org and focus on direction.", "اجرای استراتژی را در سطح سازمان تفویض می‌کنم و بر جهت‌دهی تمرکز دارم.")] },
    { id: "t1", dim: "team", title: L("Hiring and roles", "جذب و نقش‌ها"), a: [
      L("I take part in interviews.", "در مصاحبه‌ها شرکت می‌کنم."),
      L("I own hiring for my team, to the technical and cultural bar.", "مالک جذب تیمم هستم و بر اساس معیار فنی و فرهنگی جذب می‌کنم."),
      L("I shape my team's composition and improve our hiring loop.", "ترکیب تیمم را شکل می‌دهم و فرآیند جذبمان را بهبود می‌دهم."),
      L("I identify the roles and skills our teams need and improve hiring across the department.", "نقش‌ها و مهارت‌های مورد نیاز تیم‌ها را شناسایی و جذب را در سطح «بخش» بهبود می‌دهم."),
      L("I lead strategic hiring and org design for my department.", "جذب‌های استراتژیک و طراحی سازمان را در «بخش» خود هدایت می‌کنم."),
      L("I hire senior leaders and shape the organisation's structure.", "مدیران ارشد را جذب می‌کنم و ساختار سازمان را شکل می‌دهم.")] },
    { id: "t2", dim: "team", title: L("Culture and safety", "فرهنگ و ایمنی روانی"), a: [
      L("I keep good relationships and earn the team's trust.", "روابط خوبی دارم و اعتماد تیم را جلب می‌کنم."),
      L("The team accepts me as its leader; I handle conflicts early.", "تیم مرا به عنوان راهبر پذیرفته است؛ تعارض‌ها را زود مدیریت می‌کنم."),
      L("I guard team culture: I spot toxic patterns and resolve conflicts fast.", "از فرهنگ تیم صیانت می‌کنم: الگوهای سمی را تشخیص می‌دهم و تعارض‌ها را سریع حل می‌کنم."),
      L("I build inclusion, psychological safety and a vision that gives meaning.", "فراگیری، ایمنی روانی و دورنمایی معنابخش می‌سازم."),
      L("I own culture and engagement metrics for my department.", "مالک فرهنگ و شاخص‌های تعلق شغلی «بخش» خود هستم."),
      L("I model and institutionalise the company's culture and ways of working.", "الگوی فرهنگ سازمان هستم و آن را همراه با راه‌ورسم کاری نهادینه می‌کنم.")] },
    { id: "t3", dim: "team", title: L("Relationships and alignment", "روابط و هم‌سویی"), a: [
      L("I work well with my direct counterparts.", "با هم‌تایان مستقیمم به‌خوبی کار می‌کنم."),
      L("I have a constructive relationship with my PM and stakeholders.", "با PM و ذی‌نفعانم رابطه‌ی سازنده دارم."),
      L("I build excellent relationships with other teams and align timelines.", "با تیم‌های دیگر روابط متعالی می‌سازم و زمان‌بندی‌ها را هم‌سو می‌کنم."),
      L("I lead across groups when priorities compete, aligning outcomes with the org's interest.", "وقتی اولویت‌ها رقیب‌اند، در میان گروه‌ها رهبری می‌کنم و نتایج را با منافع سازمان هم‌سو می‌کنم."),
      L("I create alignment up, down and sideways, and influence senior leaders.", "در همه‌ی جهات هم‌سویی ایجاد می‌کنم و بر راهبران ارشد اثر می‌گذارم."),
      L("I align the organisation's middle layers with company goals.", "لایه‌های میانی سازمان را با اهداف کلان هم‌سو می‌کنم.")] },
    { id: "t4", dim: "team", title: L("Resilience and well-being", "تاب‌آوری و به‌زیستی"), a: [
      L("I keep the team informed during changes.", "در زمان تغییرات، تیم را در جریان نگه می‌دارم."),
      L("I measure team health with the right metrics and act on it.", "سلامت تیم را با metricهای درست می‌سنجم و بر اساس آن اقدام می‌کنم."),
      L("I use engagement data and keep the team effective in unplanned situations.", "از داده‌های تعلق شغلی استفاده می‌کنم و کارایی تیم را در موقعیت‌های پیش‌بینی‌نشده حفظ می‌کنم."),
      L("I remove human single points of failure — including me — and protect well-being.", "SPoFهای انسانی (از جمله خودم) را حذف می‌کنم و از به‌زیستی افراد صیانت می‌کنم."),
      L("I build change-resilient teams and scale them as needs change.", "تیم‌هایی تاب‌آور در برابر تغییر می‌سازم و متناسب با نیاز مقیاسشان می‌دهم."),
      L("I build an organisation that adapts and improves on its own.", "سازمانی می‌سازم که خودبه‌خود تطبیق پیدا می‌کند و بهتر می‌شود.")] }
  ];
  var DIMS = ["impact", "delivery", "people", "team"];
  var EXAMPLE = { i1: 2, d1: 2, d2: 3, d3: 2, d4: 3, p1: 1, p2: 2, p3: 1, p4: 1, t1: 2, t2: 2, t3: 3, t4: 2 };

  function load() { return G.store.get(KEY, {}) || {}; }
  function save(a) { G.store.set(KEY, a); }

  function median(arr) {
    var s = arr.slice().sort(function (a, b) { return a - b; });
    return s[Math.floor((s.length - 1) / 2)];
  }

  function summarise(ans) {
    var by = { impact: [], delivery: [], people: [], team: [] };
    Q.forEach(function (q) { if (typeof ans[q.id] === "number") by[q.dim].push(ans[q.id]); });
    var ok = by.impact.length >= 1 && by.delivery.length >= 2 && by.people.length >= 2 && by.team.length >= 2;
    var med = {};
    DIMS.forEach(function (d) { med[d] = by[d].length ? median(by[d]) : null; });
    if (!ok) return { ok: false, by: by, med: med };
    var floor = Math.min(med.delivery, med.people, med.team, med.impact);
    var peakDim = ["delivery", "people", "team"].reduce(function (a, b) { return med[b] > med[a] ? b : a; }, "delivery");
    var edges = ["delivery", "people", "team"].filter(function (d) { return med[d] === floor; });
    if (med.impact === floor && !edges.length) edges = ["impact"];
    return { ok: true, by: by, med: med, floor: floor, peakDim: peakDim, edges: edges };
  }

  G.assessSummary = function () {
    var s = summarise(load());
    return s.ok ? { floor: G.LEVELS[s.floor], med: s.med } : null;
  };

  function stripChart(ans, isExample) {
    var s = summarise(ans);
    var h = '<div class="strip" role="img" aria-label="' + G.esc(t(C.profile)) + '">';
    h += '<div class="strip-axis"><span></span><div class="ticks">' + G.LEVELS.map(function (id) { return "<span>" + (id === "A" ? (G.isFa() ? "آزمایشی" : "Acting") : id) + "</span>"; }).join("") + "</div></div>";
    DIMS.forEach(function (d) {
      var dim = G.data.dims[d];
      h += '<div class="strip-row c-' + d + '"><div class="lbl"><span class="dim-dot"></span>' + t(dim.short) + '</div><div class="strip-track">';
      if (s.ok && s.floor < 5) h += '<div class="target" style="inset-inline-start:calc(' + (s.floor + 1) + ' * 100% / 6)"></div>';
      var seen = {};
      s.by[d].forEach(function (v) {
        seen[v] = (seen[v] || 0) + 1;
        var off = (seen[v] - 1) * 11 - 10;
        h += '<span class="pt" style="inset-inline-start:calc((' + v + ' + .5) * 100% / 6 + ' + off + 'px)"></span>';
      });
      if (s.med[d] != null) h += '<span class="med" style="inset-inline-start:calc((' + s.med[d] + ' + .5) * 100% / 6)" data-tip="' + G.esc("<b>" + (G.LEVELS[s.med[d]] === "A" ? "Acting" : G.LEVELS[s.med[d]]) + "</b>" + t(dim.name)) + '" tabindex="0"></span>';
      h += "</div></div>";
    });
    h += "</div>";
    var rows = DIMS.map(function (d) {
      return [t(G.data.dims[d].name), s.med[d] != null ? G.levelCode(G.LEVELS[s.med[d]]) : "—", G.num(s.by[d].length)];
    });
    var tbl = UI.table([UI.u("dimension"), t(L("Median level", "سطح میانه")), t(L("Answers", "تعداد پاسخ"))], rows, { rowHeads: true });
    return '<figure class="fig" id="profileFig"><div class="fig-head"><div class="fig-title">' + (isExample ? t(C.example) : t(C.profile)) + '</div><div class="seg view-toggle" data-toggle-view="profileFig"><button aria-pressed="true" data-v="chart">' + UI.u("chart") + '</button><button aria-pressed="false" data-v="table">' + UI.u("table") + "</button></div></div>" +
      '<div data-view="chart"' + (isExample ? ' style="opacity:.55"' : "") + ">" + stripChart.legend() + h + '</div><div data-view="table" hidden>' + tbl + "</div><figcaption>" + t(C.method) + "</figcaption></figure>";
  }
  stripChart.legend = function () {
    return '<div class="legend" style="margin-bottom:8px"><span><i style="--c:var(--ink-2);width:9px;height:9px;border-radius:50%"></i>' + t(L("One answer", "یک پاسخ")) + '</span><span><i style="--c:transparent;width:14px;height:14px;border-radius:50%;box-shadow:inset 0 0 0 3px var(--ink-2)"></i>' + t(L("Dimension median", "میانه‌ی بُعد")) + '</span><span><i style="--c:color-mix(in srgb, var(--hl) 40%, transparent)"></i>' + t(L("Your next level", "سطح بعدی شما")) + "</span></div>";
  };

  function resultPanel(ans) {
    var s = summarise(ans);
    var answered = Object.keys(ans).filter(function (k) { return typeof ans[k] === "number"; }).length;
    var h = '<div class="card raised"><div class="progress" style="--v:' + Math.round(answered / Q.length * 100) + '%"><i></i></div><div class="muted" style="font-size:var(--fs-xs)">' + G.num(answered) + " " + t(C.of) + " " + G.num(Q.length) + " " + t(C.progress) + "</div>";
    if (!s.ok) {
      h += stripChart(answered ? ans : EXAMPLE, !answered) + '<p class="muted" style="font-size:var(--fs-s)">' + t(C.needMore) + "</p>";
      return h + actionButtons(answered) + "</div>";
    }
    var floorId = G.LEVELS[s.floor];
    h += '<div class="stat-tiles"><div class="stat-tile"><span class="l">' + t(C.floor) + '</span><span class="v">' + G.levelCode(floorId) + '</span><span class="s">' + t(C.floorSub) + " · " + t(G.data.levelById[floorId].name) + "</span></div>" +
      '<div class="stat-tile"><span class="l">' + t(C.peak) + '</span><span class="v" style="font-size:1.25rem;padding-top:6px">' + t(G.data.dims[s.peakDim].name) + '</span><span class="s">' + G.levelCode(G.LEVELS[s.med[s.peakDim]]) + "</span></div></div>";
    h += stripChart(ans, false);
    h += '<div class="card quiet" style="padding:16px"><h3>' + icon("trend", "inline-icon") + " " + t(C.edge) + ": " + s.edges.map(function (d) { return t(G.data.dims[d].name); }).join(" · ") + "</h3>";
    if (s.floor >= 5) {
      h += "<p>" + t(C.atTop) + "</p>";
    } else {
      var nextIdx = s.floor + 1, nextId = G.LEVELS[nextIdx];
      h += '<p class="muted" style="font-size:var(--fs-s)">' + t(C.practiseIntro) + "</p><ul class=\"bullets\">";
      Q.forEach(function (q) {
        if (typeof ans[q.id] === "number" && ans[q.id] <= s.floor && (s.edges.indexOf(q.dim) !== -1 || q.dim === "impact")) {
          h += "<li><b>" + t(q.title) + ":</b> " + t(q.a[nextIdx]) + "</li>";
        }
      });
      h += "</ul>";
      h += '<div class="btn-row"><a class="btn primary" href="#/levels/' + nextId + '">' + t(C.openNext) + " " + UI.code(nextId, "ghost") + '</a><a class="btn" href="#/grow/t-' + floorId + '">' + icon("trend") + t(C.growGuide) + "</a></div>";
    }
    h += "</div>";
    return h + actionButtons(answered) + "</div>";
  }

  function actionButtons(answered) {
    return '<div class="btn-row">' + (answered ? '<button class="btn" data-act="copy">' + icon("copy") + t(C.copy) + '</button><button class="btn ghost" data-act="reset">' + icon("reset") + t(C.reset) + "</button>" : "") + "</div>";
  }

  function summaryText(ans) {
    var s = summarise(ans);
    var lines = [t(C.summaryHead) + " — " + new Date().toISOString().slice(0, 10)];
    DIMS.forEach(function (d) { lines.push("• " + t(G.data.dims[d].name) + ": " + (s.med[d] != null ? G.levelCode(G.LEVELS[s.med[d]]) : "—")); });
    if (s.ok) {
      lines.push(t(C.floor) + ": " + G.levelCode(G.LEVELS[s.floor]));
      lines.push(t(C.edge) + ": " + s.edges.map(function (d) { return t(G.data.dims[d].name); }).join(", "));
      if (s.floor < 5) {
        lines.push(t(C.practise) + ":");
        Q.forEach(function (q) {
          if (typeof ans[q.id] === "number" && ans[q.id] <= s.floor && (s.edges.indexOf(q.dim) !== -1 || q.dim === "impact")) lines.push("  – " + G.plain(q.title) + ": " + G.plain(q.a[s.floor + 1]));
        });
      }
    }
    lines.push("");
    Q.forEach(function (q) { if (typeof ans[q.id] === "number") lines.push(G.plain(q.title) + " → " + G.levelCode(G.LEVELS[ans[q.id]]) + ": " + G.plain(q.a[ans[q.id]])); });
    return lines.join("\n");
  }

  function questionsHTML(ans) {
    var h = "", n = 0;
    DIMS.forEach(function (d) {
      var dim = G.data.dims[d];
      h += '<div class="dimsec c-' + d + '"><div class="dimsec-head"><span class="icon-badge">' + icon(dim.icon) + "</span><h3>" + t(dim.name) + "</h3></div>";
      Q.filter(function (q) { return q.dim === d; }).forEach(function (q) {
        n++;
        h += '<fieldset class="q" id="q-' + q.id + '"><legend class="sr-only">' + t(q.title) + '</legend><div class="q-head"><h4>' + t(q.title) + '</h4><span class="qn">' + G.num(n) + "/" + G.num(Q.length) + '</span></div><div class="radio-grid">';
        q.a.forEach(function (a, i) {
          var id = "r-" + q.id + "-" + i;
          h += '<label class="radio-opt" for="' + id + '"><input type="radio" id="' + id + '" name="' + q.id + '" value="' + i + '"' + (ans[q.id] === i ? " checked" : "") + '><span class="lvl-tag">' + (G.LEVELS[i] === "A" ? "ACT" : G.LEVELS[i]) + "</span><span>" + t(a) + "</span></label>";
        });
        var sid = "r-" + q.id + "-x";
        h += '<label class="radio-opt" for="' + sid + '" style="background:transparent"><input type="radio" id="' + sid + '" name="' + q.id + '" value="x"' + (ans[q.id] === undefined ? "" : "") + '><span class="lvl-tag">—</span><span class="muted">' + t(C.skip) + "</span></label>";
        h += "</div></fieldset>";
      });
      h += "</div>";
    });
    return h;
  }

  G.views.assess = {
    lede: C.lede,
    render: function () {
      var ans = load();
      var h = UI.pageHead({ eyebrow: C.eyebrow, icon: "target", title: C.title, lede: C.lede, tldr: C.tldr });
      h += UI.callout("note", null, C.note);
      h += '<div class="assess-layout"><form id="assessForm" class="grid" style="gap:18px" autocomplete="off">' + questionsHTML(ans) + '</form><aside class="assess-side" id="assessSide" aria-live="polite">' + resultPanel(ans) + "</aside></div>";
      h += UI.next("grow", C.next);
      return h;
    },
    mount: function (root) {
      var form = G.$("#assessForm", root), side = G.$("#assessSide", root);
      var confirmReset = false;
      form.addEventListener("change", function (e) {
        if (e.target.type !== "radio") return;
        var ans = load();
        if (e.target.value === "x") delete ans[e.target.name]; else ans[e.target.name] = +e.target.value;
        save(ans);
        side.innerHTML = resultPanel(ans);
      });
      side.addEventListener("click", function (e) {
        var b = e.target.closest("[data-act]");
        if (!b) return;
        if (b.getAttribute("data-act") === "copy") G.copy(summaryText(load()), UI.u("copied"));
        if (b.getAttribute("data-act") === "reset") {
          if (!confirmReset) { confirmReset = true; b.innerHTML = icon("reset") + t(C.resetConfirm); setTimeout(function () { confirmReset = false; }, 4000); return; }
          save({}); G.$$("input[type=radio]", form).forEach(function (r) { r.checked = false; });
          side.innerHTML = resultPanel({}); confirmReset = false;
        }
      });
    },
    index: function () {
      return Q.map(function (q) { return { type: "section", title: t(C.title) + " · " + t(q.title), snip: t(q.a[2]), href: "#/assess/q-" + q.id }; });
    }
  };
})();

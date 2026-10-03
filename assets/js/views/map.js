(function () {
  "use strict";
  var G = window.ELG, L = G.L, t = G.t, md = G.md, icon = G.icon, UI = G.ui;

  var C = {
    eyebrow: L("Understand", "شناخت"),
    title: L("How leveling works", "سازوکار سطح‌بندی"),
    lede: L(
      "A level is a contract about scope: how big a problem you are trusted to own, how much ambiguity you absorb, and through whom you create impact. A title is only the label on the outside.",
      "سطح شغلی، مجموعه‌ی انتظارات از شما را مشخص می‌کند، از اندازه‌ی مسئله‌هایی که own می‌کنید تا میزان ابهام کار و نحوه‌ی اثرگذاری از طریق دیگران. عنوان شغلی، نامی است که شرکت برای این مجموعه‌ی مسئولیت‌ها انتخاب می‌کند."
    ),
    tldr: [
      L("A **level** bundles expectations and a pay band. A **title** is the external label, and it does not travel between companies.", "**سطح**، انتظارات نقش و بازه‌ی حقوق آن را مشخص می‌کند. **عنوان شغلی** نامی است که بیرون از شرکت دیده می‌شود و در شرکت‌های مختلف معنای یکسانی ندارد."),
      L("Five things grow as you climb: **scope, autonomy, ambiguity, time horizon and leverage**.", "با رشد در نردبان، انتظارات در پنج زمینه بیشتر می‌شود: **دامنه‌ی مسئولیت و اثرگذاری، استقلال، ابهام، افق زمانی و توان گسترش اثر کارتان**."),
      L("Codes differ everywhere, so compare **scope in numbers**. Moving up a company tier often costs a title, not a career.", "شماره‌گذاری سطوح در شرکت‌ها متفاوت است. برای مقایسه، **دامنه‌ی مسئولیت و اثرگذاری را با عدد توصیف کنید**. عنوان پایین‌تر در شرکتی با دامنه‌ی مسئولیت بزرگ‌تر، لزوماً به معنی عقب رفتن در مسیر شغلی نیست.")
    ],
    jump: [
      { href: "ladder", label: L("Two ladders", "دو نردبان") },
      { href: "axes", label: L("What grows", "چه چیزی رشد می‌کند") },
      { href: "titles", label: L("Titles vs levels", "عنوان در برابر سطح") },
      { href: "translate", label: L("Translate between companies", "معادل‌سازی سطوح شرکت‌ها") },
      { href: "promo", label: L("How promotions are decided", "تصمیم‌گیری درباره‌ی ارتقا") }
    ],
    ladderTitle: L("Two ladders, one building", "دو نردبان در یک ساختمان"),
    ladderIntro: L(
      "Individual contributors and managers climb parallel ladders of equal height. Each rung sits at the altitude of the scope it owns. Crossing over is lateral: an open role, an evaluation, and a mapping to the equivalent level — in either direction.",
      "مسیر IC و مدیریت موازی‌اند و هر دو تا بالاترین سطوح ادامه دارند. جای هر فرد در نردبان را دامنه‌ی مسئولیت و اثرگذاری او تعیین می‌کند. جابه‌جایی بین دو مسیر در سطح معادل انجام می‌شود و در هر دو جهت، به موقعیت شغلی باز، ارزیابی و نگاشت سطح نیاز دارد."
    ),
    icHead: L("Individual contributor", "مشارکت‌کننده‌ی فردی (IC)"),
    mgHead: L("Management", "مدیریت"),
    spHead: L("Altitude", "ارتفاع"),
    bridge: L("From L4/L5: open role + evaluation", "ورود از L4/L5: موقعیت شغلی باز + ارزیابی"),
    pairNote: L(
      "Pairings are approximate. At several large US tech companies the first-line EM is paired with **Staff** (Google L6; Meta M1 ≈ E6). At many others it is paired with **Senior** (Monzo: EM = level 50 = Senior Engineer; Apple M1 ≈ ICT4). Managers of managers usually sit near Staff to Senior Staff.",
      "این هم‌ترازی‌ها تقریبی‌اند. در چند شرکت بزرگ فناوری آمریکایی، مدیر مستقیم یک تیم هم‌تراز **Staff** است (Google L6، Meta M1 ≈ E6). در بسیاری از شرکت‌های دیگر، هم‌تراز **Senior** است (Monzo: EM = سطح ۵۰ = مهندس ارشد، Apple M1 ≈ ICT4). مدیرِ مدیران معمولاً در بازه‌ی Staff تا Senior Staff قرار می‌گیرد."
    ),
    openLevel: L("Open the full level", "مشاهده‌ی کامل این سطح"),
    icDetailNote: L("IC levels are shown for orientation. This guide goes deep on the management track; see [IC or manager?](#/paths) for how the two compare.", "سطوح IC در این صفحه برای مقایسه و شناخت جایگاه آمده‌اند. برای بررسی تفاوت‌های دو مسیر به [IC یا مدیر؟](#/paths) بروید. تمرکز اصلی این راهنما بر مسیر مدیریت است."),
    axesTitle: L("What actually changes as you climb", "با بالا رفتن، واقعاً چه چیزی تغییر می‌کند"),
    axesIntro: L("Pick a level. Five dials move together; the rings show how far your circle of impact reaches.", "یک سطح را انتخاب کنید. پنج شاخص با هم تغییر می‌کنند و حلقه‌ها نشان می‌دهند دایره‌ی اثر شما تا کجا گسترده است."),
    ringsCap: L("Circle of impact at the selected level. Each ring includes the ones inside it.", "دایره‌ی اثر در سطح انتخاب‌شده. هر حلقه، حلقه‌های درونی را هم در بر می‌گیرد."),
    titlesTitle: L("Titles don't travel. Levels do.", "برای مقایسه‌ی نقش‌ها، دامنه‌ی مسئولیت را بررسی کنید."),
    titlesBody: [
      L("The tech job market is tiered: pay for the same title can differ three- to five-fold between tiers of company. Smaller companies hand out Director, VP and \"Head of\" titles earlier and for narrower scope — often in place of cash.", "بازار کار فناوری رده‌های مختلفی دارد: حقوقِ یک عنوان یکسان در شرکت‌های رده‌های مختلف می‌تواند سه تا پنج برابر تفاوت داشته باشد. شرکت‌های کوچک‌تر معمولاً عنوان‌هایی مثل Director، VP و «Head of» را زودتر و برای دامنه‌ی مسئولیت محدودتری می‌دهند، گاهی به جای حقوق بالاتر."),
      L("So when you move up a tier you often move **down a title** — and it can still be a step up in scope, pay and learning. The Pragmatic Engineer calls this the \"seniority roller coaster\". Inside the top tier, moves rarely cost a level.", "بنابراین، با رفتن به شرکتی در رده‌ی بالاتر، ممکن است **عنوان پایین‌تری** بگیرید و در عین حال، دامنه‌ی مسئولیت، درآمد و فرصت یادگیری‌تان بیشتر شود. The Pragmatic Engineer این فراز و فرود عنوان‌ها را «ترن هوایی ارشدیت» (seniority roller coaster) می‌نامد. در جابه‌جایی بین شرکت‌های رده‌ی بالا، از دست دادن سطح کمتر رایج است.")
    ],
    translatorTitle: L("Title translator (illustrative)", "معادل‌سازی عنوان شغلی (نمونه‌ی فرضی)"),
    translatorHead: [L("Title at a smaller company", "عنوان در شرکت کوچک‌تر"), L("Typical real scope", "دامنه‌ی واقعیِ رایج"), L("Likely level at a large tech company", "سطح محتمل در یک شرکت بزرگ فناوری"), L("Why", "چرا")],
    translator: [
      [L("CTO, 8-person startup", "CTO، استارتاپ ۸ نفره"), L("Hands-on lead of 4 engineers", "راهبر فنی با ۴ مهندس که خودش هم کار فنی انجام می‌دهد"), L("Senior/Staff IC, or a first-line EM at `M2`", "IC ارشد یا Staff، یا مدیر مستقیم تیم در سطح `M2`"), L("Small team, no managers reporting, startup-scale systems", "تیم کوچک، بدون مدیر زیرمجموعه، سیستم‌هایی در مقیاس استارتاپ")],
      [L("Head of Engineering, 30-person startup", "Head of Engineering، استارتاپ ۳۰ نفره"), L("12 engineers, two informal leads; owns hiring and cloud budget", "۱۲ مهندس و دو راهبر غیررسمی، مسئول جذب و بودجه‌ی زیرساخت"), L("First-line EM, `M2`–`M3`", "مدیر مستقیم تیم، `M2` تا `M3`"), L("Broad, but not yet a manager of managers", "دامنه‌ی گسترده، اما هنوز مدیرِ مدیران نیست")],
      [L("VP Engineering, 150-person scale-up", "VP Engineering، شرکت ۱۵۰ نفره‌ی در حال رشد"), L("3 EMs, about 35 engineers", "۳ EM و حدود ۳۵ مهندس"), L("Senior EM, `M4`", "مدیر ارشد مهندسی، `M4`"), L("Manages managers, at a smaller scale and planning horizon", "مدیرِ مدیران است، اما مقیاس کار و افق برنامه‌ریزی محدودتری دارد")],
      [L("Director, mid-size company", "Director، شرکت متوسط"), L("5 EMs, about 60 people, annual planning", "۵ EM، حدود ۶۰ نفر، برنامه‌ریزی سالانه"), L("Director at `M5`, or Senior EM at `M4`", "Director در سطح `M5` یا مدیر ارشد مهندسی در سطح `M4`"), L("Decided by complexity, strategy horizon and business ownership", "پیچیدگی، افق استراتژی و مالکیت کسب‌وکاری تعیین‌کننده است")],
      [L("Engineering Manager, large tech company", "Engineering Manager، شرکت بزرگ فناوری"), L("7–10 engineers", "۷ تا ۱۰ مهندس"), L("`M2`–`M3`", "`M2` تا `M3`"), L("At large companies titles and scope usually align", "در شرکت‌های بزرگ، عنوان و دامنه‌ی اثر معمولاً هم‌خوان‌اند")]
    ],
    translatorTip: L("Describe your scope in numbers another company can compare: people, teams, managers reporting to you, systems, budget, planning horizon, business metrics.", "دامنه‌ی مسئولیت و اثرگذاری‌تان را با اعدادی توصیف کنید که در شرکت مقصد قابل مقایسه باشند: تعداد افراد، تیم‌ها و مدیران زیرمجموعه، سیستم‌ها، بودجه، افق برنامه‌ریزی و metricهای کسب‌وکاری."),
    translateTitle: L("Translate between companies", "معادل‌سازی سطوح بین شرکت‌ها"),
    translateIntro: L("Approximate equivalents for well-documented employers. Each cell shows a confidence level. Use them to prepare a conversation, not to settle one.", "در این جدول، معادل‌های تقریبی سطوح در شرکت‌هایی آمده است که اطلاعات مستند از آن‌ها در دسترس است. میزان اطمینان به هر نگاشت هم مشخص شده است. می‌توانید برای آماده شدن برای گفت‌وگوی تعیین سطح از آن استفاده کنید، ولی سطح نهایی باید در همان گفت‌وگو بررسی شود."),
    tabMgmt: L("Management track", "مسیر مدیریت"),
    tabIc: L("IC track", "مسیر IC"),
    conf: { H: L("high", "زیاد"), M: L("medium", "متوسط"), L: L("low", "کم") },
    tableNote: L(
      "Mappings are approximate and change over time. Level widths differ (Amazon L6 and Microsoft's number bands are broad), and same-number parity between the IC and manager ladders is a pay-band convention, not a promise of equal scope. Sources: levels.fyi (crowdsourced), The Pragmatic Engineer, public frameworks (Dropbox, GitLab, Monzo) and press reporting, checked September 2026.",
      "این نگاشت‌ها تقریبی‌اند و با گذشت زمان تغییر می‌کنند. گستردگی هر سطح در شرکت‌ها متفاوت است. مثلاً L6 در Amazon و بازه‌های عددی Microsoft دامنه‌ی وسیعی دارند. یکسان‌بودن شماره‌ی سطوح IC و مدیریت، قراردادی برای بازه‌ی حقوق است و لزوماً به معنای دامنه‌ی اثرگذاری برابر نیست. منابع: levels.fyi (داده‌های کاربران)، The Pragmatic Engineer، چارچوب‌های منتشرشده‌ی Dropbox، GitLab و Monzo، و گزارش‌های رسانه‌ای. بررسی‌شده در سپتامبر ۲۰۲۶."
    ),
    promoTitle: L("How companies decide promotions", "شرکت‌ها چگونه درباره‌ی ارتقا تصمیم می‌گیرند"),
    promoIntro: L("The mechanics differ; the pattern does not: sustained next-level evidence, a written case, calibration, and a decision limited by budget and organisational need.", "در بیشتر شرکت‌ها، شواهد عملکرد مستمر در سطح بعد در یک پرونده‌ی مکتوب جمع می‌شود و در کالیبراسیون بررسی می‌شود. تصمیم ارتقا، علاوه بر این شواهد، به بودجه و نیاز سازمان هم بستگی دارد."),
    promoHead: [L("Company", "شرکت"), L("How it works", "سازوکار"), L("Worth knowing", "نکته‌ی قابل توجه")],
    promo: [
      [L("Google", "Google"), L("The manager nominates and assembles a packet (self-assessment, peer input, next-level assessment); a promotion committee decides, with extra review at senior levels.", "مدیر، فرد را برای ارتقا معرفی می‌کند و پرونده‌ای شامل خودارزیابی، نظر همتایان و سنجش عملکرد نسبت به انتظارات سطح بعد آماده می‌کند. کمیته‌ی ارتقا تصمیم می‌گیرد و در سطوح ارشد، بررسی تکمیلی هم انجام می‌شود."), L("Since the 2022 GRAD system, ratings and promotions are separate decisions; promotions still run twice a year.", "از زمان معرفی سیستم GRAD در ۲۰۲۲، امتیاز عملکرد و ارتقا دو تصمیم جدا هستند. ارتقاها همچنان سالی دو بار انجام می‌شوند.")],
      [L("Meta", "Meta"), L("Performance Summary Cycle: self-review, peer and upward feedback; the manager proposes a rating and presents in calibration; leadership approves.", "چرخه‌ی PSC شامل خودارزیابی، بازخورد همتایان و بازخورد اعضای تیم به مدیر است. مدیر، امتیاز پیشنهادی را در جلسه‌ی کالیبراسیون ارائه می‌کند و مدیران ارشد آن را تأیید می‌کنند."), L("Managers need an org that justifies the next level — M1 to M2 means managing managers.", "برای ارتقای مدیر، باید دامنه‌ی مسئولیتی متناسب با سطح بعد در سازمان وجود داشته باشد. گذار از M1 به M2 یعنی مدیریت مدیران.")],
      [L("Amazon", "Amazon"), L("A manager-owned written promotion document with evidence mapped to the Leadership Principles and next-level role guidelines, reviewed at the Organization and Leadership Review.", "مدیر مسئول تهیه‌ی سند ارتقاست. شواهد بر اساس Leadership Principles و راهنمای نقش در سطح بعد تنظیم و در جلسه‌ی OLR بررسی می‌شوند."), L("L6 to L7 is a well-known place where careers stall; L7 managers generally manage managers.", "گذار از L6 به L7 یکی از نقاطی است که مسیر ارتقای افراد معمولاً در آن متوقف می‌شود. مدیران L7 عموماً مدیرِ مدیران هستند.")],
      [L("Microsoft", "Microsoft"), L("Manager-driven and budget-limited; regular \"Connects\" conversations feed an annual rewards cycle.", "تصمیم با مدیر است و به بودجه بستگی دارد. گفت‌وگوهای منظم «Connects» هم در چرخه‌ی سالانه‌ی پاداش به کار می‌روند."), L("Entry to Principal (65) and Partner (68) involves senior-leadership review.", "ورود به سطح Principal (۶۵) و Partner (۶۸) با بررسی مدیران ارشد همراه است.")],
      [L("Netflix", "Netflix"), L("For about 25 years engineers had essentially one level with market-based pay; five IC levels arrived in 2022.", "حدود ۲۵ سال مهندسان عملاً یک سطح با حقوق مبتنی بر بازار داشتند. پنج سطح IC در سال ۲۰۲۲ معرفی شد."), L("An internal poll suggested most engineers disagreed with the level they were given — leveling is contentious everywhere.", "در یک نظرسنجی داخلی، بیشتر مهندسان با سطحی که به آن‌ها داده شده بود موافق نبودند. اختلاف بر سر تعیین سطح در شرکت‌های مختلف وجود دارد.")]
    ],
    promoTip: L("Across all of them, manager promotions also depend on organisational need: a next-level scope must exist to be filled. You cannot be promoted to manage managers in an org that has none to manage.", "برای ارتقای مدیران، باید مسئولیتی متناسب با سطح بعد در سازمان وجود داشته باشد. مثلاً ارتقا به سطح مدیرِ مدیران، نیازمند این است که مدیریت چند مدیر به شما سپرده شود."),
    next: L("The levels, one by one", "سطوح، یکی‌یکی")
  };

  var MGMT = {
    head: [L("Role", "نقش"), L("This guide", "این راهنما"), "Google", "Meta", "Amazon", "Microsoft", "Apple", L("Monzo (UK)", "Monzo (بریتانیا)"), L("Dropbox (public ladder)", "Dropbox (نردبان عمومی)")],
    rows: [
      [L("First-line EM", "مدیر مستقیم تیم (EM)"), ["M2–M3"], ["L6 · some L5", "M"], ["M1 ≈ E6 · M0 ≈ E5 is transitional", "H"], ["L6 SDM · some L5", "H"], ["63–64", "M"], ["M1 ≈ ICT4", "M"], ["50 ≈ Senior", "H"], ["M3–M4", "H"]],
      [L("Senior EM · managing managers begins", "مدیر ارشد · آغاز مدیریت مدیران"), ["M4"], ["L7", "M"], ["M2 ≈ E7", "H"], ["L7 Senior SDM", "H"], ["65–67 Principal EM", "M"], ["M2 ≈ ICT5", "L"], ["60 ≈ Staff", "H"], ["M5", "H"]],
      [L("Director", "Director"), ["M5"], ["L8", "H"], ["D1 ≈ E8", "H"], ["L8", "H"], ["68 Partner Director", "M"], ["D1", "L"], ["70", "H"], ["M6", "H"]],
      [L("Senior Director", "Senior Director"), ["M6"], ["L9", "M"], ["D2 ≈ E9", "H"], ["within L8", "L"], ["69", "L"], ["D2", "L"], ["80", "H"], ["M7", "H"]],
      [L("VP", "VP"), ["M6+"], ["L10", "M"], ["VP", "H"], ["L10", "H"], ["CVP", "M"], ["VP", "M"], ["90", "M"], ["—"]]
    ]
  };
  var IC = {
    head: [L("Role", "نقش"), L("This guide", "این راهنما"), "Google", "Meta", "Amazon", "Microsoft", "Apple", L("Netflix (2022+)", "Netflix (از ۲۰۲۲)"), L("Monzo (UK)", "Monzo (بریتانیا)")],
    rows: [
      [L("Mid-level", "میانی"), ["L4"], ["L4", "H"], ["E4", "H"], ["L5 SDE II", "H"], ["61–62", "H"], ["ICT3", "M"], ["4", "H"], ["30–40", "H"]],
      [L("Senior", "ارشد (Senior)"), ["L5"], ["L5", "H"], ["E5", "H"], ["L6 SDE III", "H"], ["63–64", "H"], ["ICT4", "M"], ["5", "H"], ["50", "H"]],
      [L("Staff", "Staff"), ["L6"], ["L6", "H"], ["E6", "H"], ["L7 Principal (closest)", "M"], ["65–66", "M"], ["ICT5", "M"], ["6", "H"], ["60", "H"]],
      [L("Senior Staff", "Senior Staff"), ["L7"], ["L7", "H"], ["E7", "H"], ["upper L7", "L"], ["67", "L"], ["ICT5–6", "L"], ["—", "H"], ["70", "H"]],
      [L("Principal", "Principal"), ["L8"], ["L8", "H"], ["E8", "H"], ["L8 Senior Principal", "M"], ["68–69 Partner", "M"], ["ICT6", "M"], ["7", "H"], ["80", "H"]],
      [L("Distinguished", "Distinguished"), [L("beyond L8", "بالاتر از L8")], ["L9 · Fellow L10", "H"], ["E9", "H"], ["L10", "M"], ["70", "M"], ["ICT7?", "L"], ["—", "H"], ["90", "H"]]
    ]
  };

  var sel = null, dialLevel = 2;

  function ladderHTML() {
    var h = '<div class="ladder" role="group" aria-label="' + G.esc(t(C.ladderTitle)) + '">';
    h += '<div class="ladder-head ic">' + t(C.icHead) + '</div><div class="ladder-head sp">' + t(C.spHead) + '</div><div class="ladder-head">' + t(C.mgHead) + "</div>";
    G.data.ladderRows.forEach(function (row) {
      h += '<div class="l-cell ic">';
      if (row.ic) {
        var ic = G.data.icLevels.filter(function (x) { return x.id === row.ic; })[0];
        h += '<button class="rung" data-rung="' + row.ic + '" aria-pressed="' + (sel === row.ic) + '"><span class="code ic">' + row.ic + '</span><span class="r-text"><span class="r-name">' + t(ic.name) + '</span><span class="r-sub">' + t(ic.sub) + "</span></span></button>";
      } else if (row.bridge) {
        h += '<span class="bridge" style="position:static;transform:none;white-space:normal;max-width:100%;text-align:center;line-height:1.35">' + t(C.bridge) + " " + (G.isFa() ? "←" : "→") + "</span>";
      }
      h += '</div><div class="l-spine">' + t(row.band) + '</div><div class="l-cell mg">';
      if (row.mg) {
        var l = G.data.levelById[row.mg];
        h += '<button class="rung" data-rung="' + row.mg + '" aria-pressed="' + (sel === row.mg) + '"><span class="code">' + (row.mg === "A" ? "Acting" : row.mg) + '</span><span class="r-text"><span class="r-name">' + t(l.name) + '</span><span class="r-sub">' + t(l.verb) + "</span></span></button>";
      }
      h += "</div>";
    });
    return h + "</div>";
  }

  function detailHTML() {
    if (!sel) sel = "M2";
    var h = '<div class="card raised ladder-detail" aria-live="polite">';
    if (sel.charAt(0) === "L") {
      var ic = G.data.icLevels.filter(function (x) { return x.id === sel; })[0];
      h += '<div class="chips"><span class="code ic">' + sel + '</span><span class="chip">' + t(C.icHead) + "</span></div><h3>" + t(ic.name) + "</h3><p>" + t(ic.sub) + '</p><p class="muted" style="font-size:var(--fs-s)">' + md(C.icDetailNote) + "</p>";
    } else {
      var l = G.data.levelById[sel];
      h += '<div class="chips">' + UI.code(sel) + '<span class="chip">' + t(l.verb) + "</span></div><h3>" + t(l.name) + '</h3><p style="font-weight:600">' + t(l.question) + '</p><p class="muted" style="font-size:var(--fs-s)">' + t(l.summary) + "</p>";
      h += '<div class="grid" style="gap:10px">' +
        UI.statRow(L("Scope", "دامنه"), t(l.stats.scope[0]), l.stats.scope[1]) +
        UI.statRow(L("Typical span", "تعداد رایج direct reportها"), t(l.stats.span[0]), l.stats.span[1]) +
        UI.statRow(L("Hands-on technical", "کار فنی مستقیم"), t(l.stats.hands[0]), l.stats.hands[1], "c-tech") +
        UI.statRow(L("Planning horizon", "افق برنامه‌ریزی"), t(l.stats.horizon[0]), l.stats.horizon[1]) + "</div>";
      h += '<div class="muted" style="font-size:var(--fs-xs)"><b>' + UI.u("typicalTitles") + ":</b> " + t(l.titles) + "</div>";
      h += '<a class="btn primary" href="#/levels/' + sel + '" style="justify-self:start">' + t(C.openLevel) + icon("arrow", "flip-rtl") + "</a>";
    }
    return h + "</div>";
  }

  function dialsHTML() {
    var h = '<div class="pill-tabs" role="tablist" aria-label="' + UI.u("level") + '">';
    G.data.levels.forEach(function (l, i) {
      h += '<button role="tab" data-dial="' + i + '" aria-selected="' + (i === dialLevel) + '">' + UI.code(l.id) + t(l.verb) + "</button>";
    });
    h += '</div><div class="two-col" style="margin-top:18px"><div class="card">';
    G.data.axes.forEach(function (a) {
      h += '<div class="dial"><div class="dial-name">' + t(a.name) + "</div>" + UI.meter(a.v[dialLevel]) + '<div class="dial-val">' + t(a.d[dialLevel]) + "</div></div>";
    });
    var lvl = G.data.levels[dialLevel];
    h += '</div><figure class="card rings fig"><div class="fig-title">' + UI.code(lvl.id) + " " + t(lvl.name) + "</div>" + UI.rings(G.data.rings.map(t), G.data.ringOf[lvl.id]) + "<figcaption>" + t(C.ringsCap) + "</figcaption></figure></div>";
    return h;
  }

  function levelTable(T) {
    var head = T.head.map(function (x) { return t(x); });
    var rows = T.rows.map(function (r) {
      return [t(r[0])].concat(r.slice(1).map(function (c) {
        var txt = typeof c[0] === "string" ? c[0] : t(c[0]);
        return '<span class="ltr">' + G.esc(txt) + "</span>" + (c[1] ? '<span class="conf">' + t(C.conf[c[1]]) + "</span>" : "");
      }));
    });
    rows.forEach(function (r) { r[1] = '<b>' + r[1] + "</b>"; });
    return UI.table(head, rows, { rowHeads: true });
  }

  function render() {
    var h = UI.pageHead({ eyebrow: C.eyebrow, icon: "map", title: C.title, lede: C.lede, tldr: C.tldr, jump: C.jump });

    h += UI.section({ id: "ladder", title: C.ladderTitle, intro: C.ladderIntro, body:
      '<div class="two-col wf"><div id="ladderBox">' + ladderHTML() + '</div><div id="ladderDetail">' + detailHTML() + "</div></div>" +
      UI.callout("note", null, C.pairNote) });

    h += UI.section({ id: "axes", title: C.axesTitle, intro: C.axesIntro, body: '<div id="dials">' + dialsHTML() + "</div>" });

    h += UI.section({ id: "titles", title: C.titlesTitle, body:
      '<div class="prose">' + C.titlesBody.map(function (p) { return "<p>" + md(p) + "</p>"; }).join("") + "</div>" +
      '<div class="fig-title" style="margin-top:6px">' + t(C.translatorTitle) + "</div>" +
      UI.table(C.translatorHead.map(t), C.translator.map(function (r) { return r.map(t); }), { rowHeads: true }) +
      UI.callout("tip", null, C.translatorTip) });

    h += UI.section({ id: "translate", title: C.translateTitle, intro: C.translateIntro, body:
      '<div class="pill-tabs" role="tablist"><button role="tab" data-tt="m" aria-selected="true">' + t(C.tabMgmt) + '</button><button role="tab" data-tt="i" aria-selected="false">' + t(C.tabIc) + "</button></div>" +
      '<div data-tpanel="m">' + levelTable(MGMT) + '</div><div data-tpanel="i" hidden>' + levelTable(IC) + '</div><p class="tbl-note">' + t(C.tableNote) + "</p>" });

    h += UI.section({ id: "promo", title: C.promoTitle, intro: C.promoIntro, body:
      UI.table(C.promoHead.map(t), C.promo.map(function (r) { return r.map(t); }), { rowHeads: true }) +
      UI.callout("info", null, C.promoTip) });

    h += UI.next("levels", C.next);
    return h;
  }

  G.views.map = {
    lede: C.lede,
    render: render,
    mount: function (root) {
      root.addEventListener("click", function (e) {
        var r = e.target.closest("[data-rung]");
        if (r) {
          sel = r.getAttribute("data-rung");
          G.$("#ladderBox", root).innerHTML = ladderHTML();
          G.$("#ladderDetail", root).innerHTML = detailHTML();
          var b = G.$('[data-rung="' + sel + '"]', root); if (b) b.focus();
          return;
        }
        var d = e.target.closest("[data-dial]");
        if (d) {
          dialLevel = +d.getAttribute("data-dial");
          G.$("#dials", root).innerHTML = dialsHTML();
          var nb = G.$('[data-dial="' + dialLevel + '"]', root); if (nb) nb.focus();
          return;
        }
        var tt = e.target.closest("[data-tt]");
        if (tt) {
          var v = tt.getAttribute("data-tt");
          G.$$("[data-tt]", root).forEach(function (b) { b.setAttribute("aria-selected", String(b === tt)); });
          G.$$("[data-tpanel]", root).forEach(function (p) { p.hidden = p.getAttribute("data-tpanel") !== v; });
        }
      });
    },
    index: function () {
      return [
        { type: "section", title: t(C.ladderTitle), snip: t(C.ladderIntro), href: "#/map/ladder" },
        { type: "section", title: t(C.axesTitle), snip: t(C.axesIntro), href: "#/map/axes" },
        { type: "section", title: t(C.titlesTitle), snip: G.plain(C.titlesBody[0]), href: "#/map/titles", extra: "title inflation seniority roller coaster تورم عنوان" },
        { type: "section", title: t(C.translateTitle), snip: t(C.translateIntro), href: "#/map/translate", extra: "Google Meta Amazon Microsoft Apple Monzo Netflix Dropbox levels.fyi" },
        { type: "section", title: t(C.promoTitle), snip: t(C.promoIntro), href: "#/map/promo", extra: "calibration committee packet PSC GRAD OLR کالیبراسیون" }
      ];
    }
  };
})();

(function () {
  "use strict";
  var G = window.ELG, L = G.L, t = G.t, md = G.md, icon = G.icon, UI = G.ui;

  var C = {
    eyebrow: L("A field guide for ICs, tech leads and engineering managers", "راهنمای کاربردی برای ICها، راهبران فنی و مدیران مهندسی"),
    title: L("Every rung answers a bigger question.", "در هر سطح چه انتظاری از شما می‌رود؟"),
    lede: L(
      "See how engineering leadership levels work across the industry, find where you operate today, and grow with practical steps, real-world scenarios and tools — or change companies without losing a level.",
      "در این راهنما با سطوح راهبری مهندسی در شرکت‌های مختلف آشنا می‌شوید و عملکرد فعلی خود را با انتظارات هر سطح مقایسه می‌کنید. برای رشد به سطح بعد، تمرین‌ها، سناریوها و ابزارهایی در اختیار دارید. درباره‌ی حفظ سطح شغلی هنگام تغییر شرکت هم راهنمایی می‌گیرید."
    ),
    ctaAssess: L("Find where you are", "جایگاهم را پیدا کنم"),
    ctaLevels: L("Explore the levels", "آشنایی با سطوح"),
    ladderTitle: L("The question at each rung", "پرسشِ هر پله"),
    ladderHint: L("Select a rung to open that level.", "برای باز کردن هر سطح، روی پله‌ی آن کلیک کنید."),
    you: L("You", "شما"),
    pathsTitle: L("Pick your path", "مسیرتان را انتخاب کنید"),
    pathsIntro: L("Five common starting points. Each suggests three stops, in order.", "با توجه به وضعیت فعلی خود، یکی از این پنج مسیر را انتخاب کنید و سه بخش پیشنهادی آن را به ترتیب بخوانید."),
    principlesTitle: L("Six ideas that run through this guide", "شش اصلِ این راهنما"),
    readTitle: L("How to read the level codes", "کدهای سطح را چگونه بخوانیم"),
    read: L(
      "This guide uses a neutral **reference ladder**: an acting (trial) period and five management levels coded `M2`–`M6`, beside a six-level IC track coded `L3`–`L8`. Companies number levels differently — a first-line manager is typically M1 at Meta, L6 at Google and level 50 at Monzo. [How leveling works](#/map) translates between them.",
      "این راهنما از یک **نردبان مرجع** مستقل از شرکت‌ها استفاده می‌کند: یک دوره‌ی آزمایشی (acting) و پنج سطح مدیریتی با کدهای `M2` تا `M6`، در کنار مسیر شش‌سطحی IC با کدهای `L3` تا `L8`. شماره‌گذاری سطوح در شرکت‌ها متفاوت است. مثلاً مدیر مستقیم یک تیم در Meta معمولاً M1، در Google سطح L6 و در Monzo سطح ۵۰ است. در صفحه‌ی [سازوکار سطح‌بندی](#/map) می‌توانید معادل این سطوح را پیدا کنید."
    ),
    builtTitle: L("What this guide is built on", "مبنای این راهنما چیست؟"),
    built: L(
      "A detailed three-dimension management ladder (delivery & ownership, people growth, team building, under the umbrella of impact), enriched with public career frameworks (Dropbox, GitLab, Monzo, Lara Hogan), published research (Google's Project Oxygen and Aristotle, Gallup, DORA) and practitioner writing on leveling and hiring. Examples and people in stories are illustrative composites.",
      "مبنای این راهنما، یک نردبان مدیریتی با سه بُعدِ تحویل خروجی و مالکیت، رشد افراد و تیم‌سازی است که همگی زیر چتر اثرگذاری سنجیده می‌شوند. چارچوب‌های شغلی منتشرشده‌ی Dropbox، GitLab، Monzo و Lara Hogan، پژوهش‌هایی مثل Project Oxygen و Aristotle در Google، Gallup و DORA، و تجربه‌های متخصصان درباره‌ی سطح‌بندی و استخدام نیز به آن اضافه شده‌اند. مثال‌ها و شخصیت‌های داستان‌ها فرضی‌اند و از ترکیب تجربه‌های واقعی ساخته شده‌اند."
    )
  };

  var personas = [
    { icon: "user", title: L("I'm an engineer thinking about management", "مهندسی هستم که به مدیریت فکر می‌کنم"),
      body: L("Understand what the job really is before you try it, and how a reversible trial period works.", "با مسئولیت‌های مدیریت و نحوه‌ی اجرای دوره‌ی آزمایشی آشنا شوید تا با شناخت بهتری این نقش را امتحان کنید. در پایان دوره می‌توانید به مسیر IC برگردید."),
      route: [["paths", L("IC or manager?", "IC یا مدیر؟")], ["levels/A", L("The acting period", "دوره‌ی آزمایشی")], ["scenarios", L("Scenarios", "سناریوها")]] },
    { icon: "rocket", title: L("I'm a new manager (first two years)", "مدیر تازه‌کار هستم (دو سال نخست)"),
      body: L("Get the fundamentals right — 1:1s, feedback, delivery — and avoid the traps that catch most new managers.", "اصول پایه‌ی مدیریت را درست یاد بگیرید و اجرا کنید (۱:۱، بازخورد، delivery) و تله‌های رایج مدیران تازه‌کار را بشناسید."),
      route: [["levels/M2", L("Level M2", "سطح M2")], ["toolkit", L("Toolkit", "جعبه‌ابزار")], ["scenarios", L("Scenarios", "سناریوها")]] },
    { icon: "trend", title: L("I'm an experienced EM aiming higher", "EM باتجربه‌ای هستم و می‌خواهم به سطح بالاتر برسم"),
      body: L("See exactly what changes at the next rung, and how promotion cases are really judged.", "دقیقاً ببینید در پله‌ی بعد چه تغییر می‌کند و پرونده‌های ارتقا در عمل چگونه ارزیابی می‌شوند."),
      route: [["assess", L("Where am I?", "من کجا هستم؟")], ["grow", L("Growing", "رشد")], ["levels/M4", L("Level M4", "سطح M4")]] },
    { icon: "users", title: L("I manage managers — or soon will", "مدیرِ مدیران هستم (یا به‌زودی می‌شوم)"),
      body: L("Shift from running teams to shaping organisations, culture and strategy — in a flatter industry.", "با کم‌شدن لایه‌های مدیریتی، نقش شما در طراحی سازمان، شکل دادن به فرهنگ و تدوین استراتژی بیشتر می‌شود. انتظارات این مرحله را بشناسید."),
      route: [["levels/M5", L("Level M5", "سطح M5")], ["grow", L("Growing", "رشد")], ["landscape", L("2026 landscape", "چشم‌انداز ۲۰۲۶")]] },
    { icon: "briefcase", title: L("I'm interviewing or changing companies", "در حال مصاحبه یا تغییر محل کار هستم"),
      body: L("Translate your title, prove your scope, and settle the level before the salary.", "معادل عنوان شغلی‌تان را پیدا کنید، دامنه‌ی مسئولیت و اثرگذاری‌تان را نشان دهید و پیش از مذاکره درباره‌ی حقوق، بر سر سطح توافق کنید."),
      route: [["map", L("Translate levels", "معادل‌سازی سطوح")], ["hiring", L("Hiring", "استخدام")], ["faq", L("Questions", "پرسش‌ها")]] }
  ];

  var principles = [
    { t: L("Impact is the umbrella.", "همه‌ی ابعاد با توجه به اثرگذاری سنجیده می‌شوند."),
      b: L("Every dimension is judged by its effect on business priorities. Delivery that creates impact is the gate; without it, nothing else can be assessed.", "در بررسی عملکرد، هر بُعد در کنار اثر آن بر اولویت‌های کسب‌وکار سنجیده می‌شود. بدون delivery منجر به impact، سایر شاخصه‌های نردبان قابل بررسی نیستند.") },
    { t: L("Management is a responsibility, not a reward.", "مدیریت را به عنوان یک مسئولیت می‌پذیرید."),
      b: L("It is a different job that needs different skills. You never need it to grow: the IC ladder climbs just as high, and moving between the two is lateral.", "مسیر مدیریت مستقل از مسیر IC است و به مهارت‌ها و اثربخشی متفاوتی نیاز دارد. برای رشد در مسیر IC نیازی به مدیر شدن ندارید و در صورت جابه‌جایی میان دو مسیر، سطح شما از طریق نگاشت به سطح معادل تعیین می‌شود.") },
    { t: L("Levels measure scope, not years.", "سطح شما بر اساس دامنه‌ی مسئولیت تعیین می‌شود."),
      b: L("Scope, autonomy, ambiguity, time horizon and leverage define a level. Years of experience and team size are weak proxies.", "دامنه‌ی مسئولیت و اثرگذاری، میزان استقلال، ابهام مسائل، افق زمانی و توان گسترش اثر کارتان تعیین می‌کنند در چه سطحی عمل می‌کنید. سابقه و تعداد اعضای تیم به‌تنهایی برای تعیین سطح کافی نیستند.") },
    { t: L("You are promoted for the level you already operate at.", "پیش از ارتقا، در سطح بعد عمل می‌کنید."),
      b: L("Committees look for sustained next-level evidence — usually two quarters or more. Doing your current level very well is necessary, not sufficient.", "برای ارتقا باید شواهدی از عملکرد مستمر در سطح بعد داشته باشید، معمولاً برای دو فصل یا بیشتر. عملکرد خوب در سطح فعلی هم لازم است، اما به‌تنهایی آمادگی شما برای سطح بعد را نشان نمی‌دهد.") },
    { t: L("Your floor matters more than your peak.", "عملکرد مستمر شما در همه‌ی ابعاد بررسی می‌شود."),
      b: L("Promotion cases are judged across every dimension. One brilliant dimension rarely makes up for a weak one.", "ضعف در یک بُعد می‌تواند مانع ارتقا شود، حتی اگر در بُعد دیگری عملکرد بسیار خوبی داشته باشید.") },
    { t: L("Your hiring level sets your trajectory.", "سطح استخدام بر مسیر رشد بعدی شما اثر دارد."),
      b: L("Getting the right level at hire takes weeks; earning it back through promotion takes years. Settle the level before the salary.", "هنگام استخدام، پیش از مذاکره درباره‌ی حقوق بر سر سطح توافق کنید. تعیین سطح مناسب در این مرحله چند هفته زمان می‌برد، در حالی که رسیدن به همان سطح از مسیر ارتقای داخلی ممکن است چند سال طول بکشد."),
      src: L("After Will Larson and levels.fyi's negotiation guides", "برگرفته از Will Larson و راهنماهای مذاکره‌ی levels.fyi") }
  ];

  function questionLadder() {
    var you = G.assessSummary ? G.assessSummary() : null;
    var lv = G.data.levels.slice().reverse();
    var h = '<div class="card raised hero-card"><div class="fig-head"><div class="fig-title">' + t(C.ladderTitle) + '</div><span class="muted" style="font-size:var(--fs-xs)">' + t(C.ladderHint) + "</span></div>";
    h += '<div style="display:grid;gap:7px">';
    lv.forEach(function (l, i) {
      var isYou = you && you.floor === l.id;
      var k = 18 + (lv.length - 1 - i) * 13;
      h += '<a class="rung' + (isYou ? " you" : "") + '" href="#/levels/' + l.id + '" style="width:100%;text-decoration:none">' +
        (isYou ? '<span class="you-tag">' + t(C.you) + "</span>" : "") +
        '<span class="code" style="background:color-mix(in srgb, var(--ink) ' + (100 - i * 7) + '%, var(--surface-3))">' + (l.id === "A" ? "Acting" : l.id) + "</span>" +
        '<span class="r-text"><span class="r-name">' + t(l.verb) + '</span><span class="r-sub" style="display:block">' + t(l.question) + "</span></span></a>";
    });
    return h + "</div></div>";
  }

  G.views.home = {
    lede: C.lede,
    render: function () {
      var h = '<section class="hero"><div class="page-head">' +
        '<div class="eyebrow">' + icon("ladder", "inline-icon") + t(C.eyebrow) + "</div>" +
        "<h1>" + t(C.title) + '</h1><p class="lede">' + t(C.lede) + "</p>" +
        '<div class="btn-row" style="margin-top:6px"><a class="btn primary" href="#/assess">' + icon("target") + t(C.ctaAssess) + '</a><a class="btn" href="#/levels">' + icon("layers") + t(C.ctaLevels) + "</a></div>" +
        '<div class="note-strip" style="margin-top:10px">' + md(C.read) + "</div>" +
        "</div>" + questionLadder() + "</section>";

      h += UI.section({ id: "paths", title: C.pathsTitle, intro: C.pathsIntro, body:
        '<div class="grid gauto">' + personas.map(function (p) {
          return '<div class="card persona"><div class="p-top"><span class="icon-badge">' + icon(p.icon) + "</span><h3>" + t(p.title) + "</h3></div><p>" + t(p.body) + '</p><div class="route">' +
            p.route.map(function (r, i) { return (i ? '<span class="sep">' + (G.isFa() ? "←" : "→") + "</span>" : "") + '<a href="#/' + r[0] + '">' + t(r[1]) + "</a>"; }).join("") + "</div></div>";
        }).join("") + "</div>" });

      h += UI.section({ id: "principles", title: C.principlesTitle, body:
        '<div class="grid g3">' + principles.map(function (p, i) {
          return '<div class="card principle"><span class="pr-n">' + G.num(String(i + 1).padStart(2, "0")) + "</span><h3>" + t(p.t) + "</h3><p>" + t(p.b) + "</p>" + (p.src ? '<span class="src">' + t(p.src) + "</span>" : "") + "</div>";
        }).join("") + "</div>" });

      h += UI.section({ id: "built", body: '<div class="grid g2">' +
        '<div class="card quiet"><h3>' + icon("compass", "inline-icon") + t(C.builtTitle) + '</h3><p class="muted" style="font-size:var(--fs-s)">' + t(C.built) + "</p></div>" +
        '<div class="card quiet"><h3>' + icon("impact", "inline-icon") + t(G.data.dims.impact.name) + '</h3><p class="muted" style="font-size:var(--fs-s)">' + t(G.data.dims.impact.desc) + '</p><div class="chips">' + UI.dimChip("delivery") + UI.dimChip("people") + UI.dimChip("team") + "</div></div></div>" });

      h += UI.next("map", L("How leveling works", "سازوکار سطح‌بندی"));
      return h;
    },
    index: function () {
      return personas.map(function (p) { return { type: "section", title: t(p.title), snip: t(p.body), href: "#/home/paths" }; })
        .concat(principles.map(function (p) { return { type: "section", title: t(p.t), snip: t(p.b), href: "#/home/principles" }; }));
    }
  };
})();

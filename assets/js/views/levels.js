(function () {
  "use strict";
  var G = window.ELG,
    L = G.L,
    t = G.t,
    md = G.md,
    icon = G.icon,
    UI = G.ui;

  var C = {
    eyebrow: L("Understand", "شناخت"),
    title: L("The levels", "سطوح نردبان"),
    lede: L(
      "Five management levels, and the acting period that leads into them. Each level keeps everything below it and takes on a bigger question.",
      "انتظارات پنج سطح مدیریتی و دوره‌ی آزمایشی ورود به مدیریت در این صفحه آمده است. در هر سطح، علاوه بر مسئولیت‌های تازه، باید همچنان انتظارات سطوح پایین‌تر را برآورده کنید.",
    ),
    tldr: [
      L(
        "The core verb changes at every rung: **learn → execute → identify → define → shape → direct**.",
        "فعل محوری در هر پله تغییر می‌کند: **یادگیری ← اجرا ← شناسایی ← تعریف ← شکل‌دادن ← جهت‌دهی**.",
      ),
      L(
        "Each level is described in three dimensions — **delivery & ownership, people growth, team building** — judged under the umbrella of **impact**.",
        "هر سطح در سه بُعد توصیف می‌شود (**تحویل خروجی و مالکیت، رشد افراد، تیم‌سازی**) و زیر چتر **اثرگذاری** سنجیده می‌شود.",
      ),
      L(
        "Read the **next-level shifts** on each page: they tell you what to start doing now.",
        "بخش **تغییرات سطح بعد** را در صفحه‌ی هر سطح بخوانید تا مسئولیت‌هایی را که باید برای آن‌ها آماده شوید بشناسید.",
      ),
    ],
    jump: [
      { href: "verbs", label: L("The verb ladder", "کار محوری هر سطح") },
      { href: "time", label: L("How your week shifts", "تغییر هفته‌ی کاری") },
      { href: "detail", label: L("Level by level", "سطح به سطح") },
      {
        href: "glance",
        label: L("All levels at a glance", "همه‌ی سطوح در یک نگاه"),
      },
    ],
    verbsTitle: L("The verb ladder", "کار محوری هر سطح"),
    verbsIntro: L(
      "The fastest way to see the ladder: what you mainly do at each rung. Each verb includes the ones before it.",
      "برای شناخت تفاوت سطح‌ها، مسئولیت محوری هر سطح را ببینید. در سطوح بالاتر، مسئولیت‌های قبلی هم همچنان بر عهده‌ی شماست.",
    ),
    timeTitle: L(
      "How a typical week shifts as you climb",
      "هفته‌ی کاری با بالا رفتن از نردبان چگونه تغییر می‌کند",
    ),
    timeSub: L(
      "Share of an illustrative 40-hour week, by activity",
      "سهم هر نوع فعالیت از یک هفته‌ی کاری ۴۰ ساعته‌ی نمونه",
    ),
    timeCap: L(
      "Computed from the illustrative calendars on each level page below. Real weeks vary widely with company, team maturity and span, so read these as shapes, not targets. Hands-on work falls from about half of the week in the acting period to almost none at VP, while strategy and cross-team work grow.",
      "این نمودار بر اساس برنامه‌های هفتگی نمونه‌ی هر سطح تهیه شده است. این برنامه‌ها را در ادامه‌ی صفحه می‌بینید. اعداد نمودار برای مقایسه‌ی سطح‌ها هستند و زمان صرف‌شده برای هر فعالیت در عمل به شرکت، بلوغ تیم و تعداد direct reportها بستگی دارد. در این نمونه‌ها، کار فنی مستقیم در دوره‌ی آزمایشی حدود نیمی از هفته را می‌گیرد. در سطح VP، این سهم تقریباً به صفر می‌رسد و بخش بیشتری از وقت صرف استراتژی و همکاری با تیم‌های دیگر می‌شود.",
    ),
    detailTitle: L("Level by level", "سطح به سطح"),
    dimsTitle: L("Expectations in three dimensions", "انتظارات در سه بُعد"),
    inPractice: L("In practice:", "در عمل:"),
    nextTitle: L(
      "What changes at the next level",
      "در سطح بعد چه تغییر می‌کند",
    ),
    nextHeads: [L("Here", "این سطح"), L("Next level", "سطح بعد")],
    trapsTitle: L("Traps at this level", "تله‌های این سطح"),
    evidenceTitle: L(
      "Evidence that you operate here",
      "شواهدی که نشان می‌دهد در این سطح عمل می‌کنید",
    ),
    weekTitle: L("A week in the life (illustrative)", "نمونه‌ی یک هفته‌ی کاری"),
    weekCap: L(
      "Hover or focus a block for details. Colours match the chart above.",
      "برای جزئیات، نشانگر را روی هر بلوک ببرید. رنگ‌ها با نمودار بالا یکسان‌اند.",
    ),
    storyTitle: L("A real-world story", "داستانی برگرفته از تجربه‌های واقعی"),
    actions: {
      assess: L(
        "Check yourself against this level",
        "خودتان را با این سطح بسنجید",
      ),
      grow: L("Guide for the next transition", "راهنمای گذر به سطح بعد"),
      scen: L(
        "Practise scenarios at this level",
        "سناریوهای این سطح را تمرین کنید",
      ),
    },
    glanceTitle: L("All levels at a glance", "همه‌ی سطوح در یک نگاه"),
    glanceIntro: L(
      "One line per dimension. Open a level above for the full expectations.",
      "برای هر بُعد، یک سطر آمده است. برای دیدن انتظارات کامل، سطح مورد نظر را در بالا باز کنید.",
    ),
    rowQuestion: L("Core question", "پرسش محوری"),
    rowHands: L("Hands-on technical", "کار فنی مستقیم"),
    next: L("Where am I? Assess yourself", "من کجا هستم؟ خودارزیابی"),
  };

  var GLANCE = {
    A: [
      L(
        "Practise the team's rhythm; delegate",
        "یادگیری روال کاری تیم، تفویض کار",
      ),
      L(
        "1:1s and first feedback, with a mentor",
        "۱:۱ و اولین بازخوردها، با کمک mentor",
      ),
      L("Earn trust; learn hiring", "جلب اعتماد، یادگیری جذب"),
    ],
    M2: [
      L(
        "Deliver agreed goals with quality",
        "delivery باکیفیت در راستای اهداف توافق‌شده",
      ),
      L(
        "Fair work, regular feedback, fair reviews",
        "تخصیص منصفانه، بازخورد منظم، ارزیابی عادلانه",
      ),
      L(
        "Earn acceptance; own hiring; handle conflict",
        "جلب اعتماد و پذیرش تیم، مسئولیت جذب، مدیریت تعارض",
      ),
    ],
    M3: [
      L(
        "Define team goals; fix user risks anywhere",
        "تعریف اهداف تیم، رفع ریسک‌های تجربه‌ی کاربر، فارغ از منشأ آن‌ها",
      ),
      L(
        "Growth paths and honest career talks",
        "مسیر رشد و گفت‌وگوی شفاف شغلی",
      ),
      L(
        "Guard the culture; align with other teams",
        "صیانت از فرهنگ، هم‌سویی با تیم‌های دیگر",
      ),
    ],
    M4: [
      L(
        "Cross-team strategy through ambiguity",
        "استراتژی فراتیمی در دل ابهام",
      ),
      L(
        "Grow leaders; delegate without fear",
        "رهبرپروری، تفویض اختیار با اطمینان",
      ),
      L(
        "Vision, safety, no single points of failure",
        "دورنما، ایمنی روانی، حذف SPoF",
      ),
    ],
    M5: [
      L(
        "Own a department's portfolio and its success",
        "مالکیت سبد و موفقیت یک «بخش»",
      ),
      L(
        "Grow managers; guard people processes",
        "پرورش مدیران، صیانت از فرآیندهای انسانی",
      ),
      L(
        "Align up, down, sideways; own engagement",
        "هم‌سویی با مدیران، تیم‌ها و همتایان، مسئولیت تعلق شغلی",
      ),
    ],
    M6: [
      L(
        "Own the P&L and core company objectives",
        "مالکیت P&L و objectiveهای کلان",
      ),
      L("Grow senior leaders across the org", "پرورش رهبران ارشد در کل سازمان"),
      L(
        "Institutionalise culture and the operating model",
        "نهادینه‌سازی فرهنگ و مدل عملیاتی",
      ),
    ],
  };

  function weekTotals(l) {
    var v = {};
    l.week.forEach(function (b) {
      v[b.c] = (v[b.c] || 0) + b.n;
    });
    return v;
  }

  function currentId(param) {
    if (param && G.data.levelById[param]) return param;
    var s = G.assessSummary ? G.assessSummary() : null;
    return (s && s.floor) || "M2";
  }

  function verbLadder() {
    var h = '<div class="verbs">';
    G.data.levels.forEach(function (l, i) {
      var k = 18 + i * 16;
      h +=
        '<a class="verb-col" href="#/levels/' +
        l.id +
        '" style="text-decoration:none"><div class="verb-bar' +
        (k < 45 ? " light-ink" : "") +
        '" style="--k:' +
        k +
        ";height:" +
        (40 + i * 26) +
        'px">' +
        t(l.verb) +
        '</div><div class="vl">' +
        UI.code(l.id, "ghost") +
        "</div></a>";
    });
    return h + "</div>";
  }

  function timeChart(activeId) {
    return UI.stackedBars({
      id: "timeAlloc",
      title: C.timeTitle,
      sub: C.timeSub,
      cats: G.data.activities,
      rowHead: L("Level", "سطح"),
      caption: C.timeCap,
      rows: G.data.levels.map(function (l) {
        return {
          name: (l.id === "A" ? "Acting" : l.id) + " · " + t(l.name),
          label: UI.code(l.id) + '<span class="nm">' + t(l.name) + "</span>",
          values: weekTotals(l),
          active: l.id === activeId,
        };
      }),
    });
  }

  function rungbar(id) {
    return (
      '<div class="rungbar" role="tablist" aria-label="' +
      UI.u("level") +
      '">' +
      G.data.levels
        .map(function (l) {
          return (
            '<button role="tab" data-lv="' +
            l.id +
            '" aria-selected="' +
            (l.id === id) +
            '"><span>' +
            UI.code(l.id) +
            '</span><span class="nm">' +
            t(l.name) +
            '</span><span class="verb">' +
            t(l.verb) +
            "</span></button>"
          );
        })
        .join("") +
      "</div>"
    );
  }

  function levelDetail(id) {
    var l = G.data.levelById[id],
      idx = G.levelIndex(id);
    var nextL = G.data.levels[idx + 1];
    var h =
      '<div class="card raised lvl-hero" style="padding:0">' +
      '<div class="lh-main"><div class="chips">' +
      UI.code(id) +
      '<span class="chip">' +
      t(l.titles) +
      '</span></div><div class="verb-big">' +
      t(l.verb) +
      '</div><p class="question">' +
      t(l.question) +
      '</p><p style="color:var(--ink-2);font-size:var(--fs-s);max-width:62ch">' +
      md(l.summary) +
      "</p></div>" +
      '<div class="lh-side">' +
      UI.statRow(L("Scope", "دامنه"), t(l.stats.scope[0]), l.stats.scope[1]) +
      UI.statRow(
        L("Typical span", "تعداد رایج direct reportها"),
        t(l.stats.span[0]),
        l.stats.span[1],
      ) +
      UI.statRow(
        L("Hands-on technical", "کار فنی مستقیم"),
        t(l.stats.hands[0]),
        l.stats.hands[1],
        "c-tech",
      ) +
      UI.statRow(
        L("Planning horizon", "افق برنامه‌ریزی"),
        t(l.stats.horizon[0]),
        l.stats.horizon[1],
      ) +
      "</div></div>";

    h +=
      '<div class="section-head" style="margin-top:28px"><h3>' +
      t(C.dimsTitle) +
      "</h3></div>";
    h +=
      '<div class="grid g3" style="margin-top:12px">' +
      ["delivery", "people", "team"]
        .map(function (k) {
          var d = G.data.dims[k];
          return (
            '<div class="card dim-card c-' +
            k +
            '"><div class="dc-head"><span class="icon-badge">' +
            icon(d.icon) +
            "</span><h3>" +
            t(d.name) +
            "</h3></div>" +
            UI.list(l.dims[k]) +
            '<div class="in-practice"><b>' +
            t(C.inPractice) +
            "</b> " +
            md(l.practice[k]) +
            "</div></div>"
          );
        })
        .join("") +
      "</div>";

    h +=
      '<div class="two-col" style="margin-top:22px"><div class="card"><h3>' +
      icon("trend", "inline-icon") +
      " " +
      t(C.nextTitle) +
      (nextL ? " " + UI.code(nextL.id, "ghost") : "") +
      "</h3>" +
      UI.fromTo(
        l.next.map(function (p) {
          return [p[0], p[1]];
        }),
        C.nextHeads,
      ) +
      "</div>" +
      '<div class="grid" style="gap:14px"><div class="card"><h3>' +
      icon("alert", "inline-icon") +
      " " +
      t(C.trapsTitle) +
      "</h3>" +
      UI.list(l.traps) +
      "</div>" +
      '<div class="card"><h3>' +
      icon("flag", "inline-icon") +
      " " +
      t(C.evidenceTitle) +
      "</h3>" +
      UI.checklist(l.evidence) +
      "</div></div></div>";

    h +=
      '<figure class="fig" style="margin-top:22px"><div class="fig-head"><div class="fig-title">' +
      t(C.weekTitle) +
      "</div></div>" +
      UI.legend(G.data.activities) +
      UI.week(l.week, G.data.activities) +
      "<figcaption>" +
      t(C.weekCap) +
      "</figcaption></figure>";

    h +=
      '<div style="margin-top:22px">' +
      UI.callout("example", C.storyTitle, l.story) +
      "</div>";

    h +=
      '<div class="btn-row" style="margin-top:16px"><a class="btn" href="#/assess">' +
      icon("target") +
      t(C.actions.assess) +
      "</a>" +
      (nextL
        ? '<a class="btn" href="#/grow/t-' +
          id +
          '">' +
          icon("trend") +
          t(C.actions.grow) +
          "</a>"
        : "") +
      '<a class="btn" href="#/scenarios/' +
      id +
      '">' +
      icon("play") +
      t(C.actions.scen) +
      "</a></div>";
    return h;
  }

  function glanceTable() {
    var head = [""].concat(
      G.data.levels.map(function (l) {
        return UI.code(l.id) + " " + t(l.name);
      }),
    );
    var rows = [];
    rows.push(
      [t(C.rowQuestion)].concat(
        G.data.levels.map(function (l) {
          return t(l.question);
        }),
      ),
    );
    ["delivery", "people", "team"].forEach(function (k, i) {
      rows.push(
        [
          '<span style="display:inline-flex;gap:8px;align-items:center"><span class="dim-dot c-' +
            k +
            '"></span>' +
            t(G.data.dims[k].name) +
            "</span>",
        ].concat(
          G.data.levels.map(function (l) {
            return t(GLANCE[l.id][i]);
          }),
        ),
      );
    });
    rows.push(
      [t(C.rowHands)].concat(
        G.data.levels.map(function (l) {
          return t(l.stats.hands[0]);
        }),
      ),
    );
    return UI.table(head, rows, { rowHeads: true, cls: "matrix" });
  }

  function render(param) {
    var id = currentId(param);
    var h = UI.pageHead({
      eyebrow: C.eyebrow,
      icon: "layers",
      title: C.title,
      lede: C.lede,
      tldr: C.tldr,
      jump: C.jump,
    });
    h += UI.section({
      id: "verbs",
      title: C.verbsTitle,
      intro: C.verbsIntro,
      body: '<div class="card">' + verbLadder() + "</div>",
    });
    h += UI.section({
      id: "time",
      body: '<div class="card" id="timeBox">' + timeChart(id) + "</div>",
    });
    h += UI.section({
      id: "detail",
      title: C.detailTitle,
      body: rungbar(id) + '<div id="levelDetail">' + levelDetail(id) + "</div>",
    });
    h += UI.section({
      id: "glance",
      title: C.glanceTitle,
      intro: C.glanceIntro,
      body: glanceTable(),
    });
    h += UI.next("assess", C.next);
    return h;
  }

  function show(root, id, focus) {
    G.$$("[data-lv]", root).forEach(function (b) {
      b.setAttribute("aria-selected", String(b.getAttribute("data-lv") === id));
    });
    G.$("#levelDetail", root).innerHTML = levelDetail(id);
    G.$("#timeBox", root).innerHTML = timeChart(id);
    if (focus) {
      var b = G.$('[data-lv="' + id + '"]', root);
      if (b) b.focus({ preventScroll: true });
    }
  }

  G.views.levels = {
    lede: C.lede,
    render: render,
    mount: function (root, param) {
      root.addEventListener("click", function (e) {
        var b = e.target.closest("[data-lv]");
        if (b) {
          var id = b.getAttribute("data-lv");
          history.replaceState(null, "", "#/levels/" + id);
          G.views.levels._cur = id;
          show(root, id, true);
        }
      });
      if (param && G.data.levelById[param]) {
        var el = G.$("#detail", root);
        if (el)
          setTimeout(function () {
            el.scrollIntoView();
          }, 0);
      } else if (param) {
        var t2 = document.getElementById(param);
        if (t2)
          setTimeout(function () {
            t2.scrollIntoView();
          }, 0);
      }
    },
    onParam: function (root, param) {
      if (param && G.data.levelById[param]) {
        show(root, param);
        var el = G.$("#detail", root);
        if (el) el.scrollIntoView();
      } else if (param) {
        var t2 = document.getElementById(param);
        if (t2) t2.scrollIntoView();
      }
    },
    index: function () {
      var items = [];
      G.data.levels.forEach(function (l) {
        items.push({
          type: "level",
          title: (l.id === "A" ? "Acting" : l.id) + " · " + t(l.name),
          snip: t(l.question),
          href: "#/levels/" + l.id,
          extra: t(l.verb) + " " + t(l.titles) + " " + G.plain(l.summary),
        });
      });
      items.push({
        type: "section",
        title: t(C.timeTitle),
        snip: t(C.timeSub),
        href: "#/levels/time",
        extra: "coding hands-on time allocation کدنویسی",
      });
      items.push({
        type: "section",
        title: t(C.glanceTitle),
        snip: t(C.glanceIntro),
        href: "#/levels/glance",
        extra: "matrix ماتریس",
      });
      return items;
    },
  };
})();

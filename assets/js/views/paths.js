(function () {
  "use strict";
  var G = window.ELG, L = G.L, t = G.t, md = G.md, icon = G.icon, UI = G.ui;

  var C = {
    eyebrow: L("Grow", "رشد"),
    title: L("IC or manager?", "IC یا مدیر؟"),
    lede: L(
      "Management is not the next rung of the engineering ladder. It is a different ladder — different work, different feedback loops, different ways to fail — and both climb to the same height.",
      "مدیریت پله‌ی بعدی نردبان مهندسی نیست؛ نردبانی دیگر است، با کاری متفاوت، چرخه‌های بازخورد متفاوت و شکل‌های متفاوتی از شکست. و هر دو نردبان به یک ارتفاع می‌رسند."
    ),
    tldr: [
      L("Moving between tracks is **lateral**: same level, different job.", "جابه‌جایی میان دو مسیر **افقی** است: همان سطح، شغلی متفاوت."),
      L("Try management through a **reversible trial**: about six months, at most a year.", "مدیریت را از طریق یک **دوره‌ی آزمایشیِ برگشت‌پذیر** امتحان کنید: حدود شش ماه و حداکثر یک سال."),
      L("Returning to IC is a **legitimate outcome**, not a failure. Many strong leaders swing back and forth.", "بازگشت به مسیر IC یک **نتیجه‌ی مشروع** است، نه شکست. بسیاری از راهبران توانمند بارها میان دو مسیر رفت‌وآمد می‌کنند.")
    ],
    jump: [
      { href: "jobs", label: L("Two different jobs", "دو شغل متفاوت") },
      { href: "roles", label: L("TL, TLM, EM or Staff", "TL، TLM، EM یا Staff") },
      { href: "reasons", label: L("Good and risky reasons", "دلایل خوب و پرریسک") },
      { href: "ready", label: L("Readiness check", "سنجش آمادگی") },
      { href: "acting", label: L("The acting period", "دوره‌ی آزمایشی") },
      { href: "pendulum", label: L("The pendulum", "آونگ") }
    ],
    jobsTitle: L("Two different jobs", "دو شغل متفاوت"),
    jobsHead: [L("", ""), L("Staff+ individual contributor", "IC در سطح Staff و بالاتر"), L("Engineering manager", "مدیر مهندسی")],
    jobs: [
      [L("Primary output", "خروجی اصلی"), L("Technical outcomes: systems, designs and decisions that last", "نتایج فنی: سیستم‌ها، طراحی‌ها و تصمیم‌هایی که ماندگارند"), L("Team outcomes: delivery, people and team health", "نتایج تیمی: delivery، رشد افراد و سلامت تیم")],
      [L("How you create leverage", "چگونه اهرم می‌سازید"), L("Technical direction, code, reviews, influence", "جهت‌دهی فنی، کد، review و نفوذ"), L("People, priorities, processes and structure", "افراد، اولویت‌ها، فرآیندها و ساختار")],
      [L("Feedback loop", "چرخه‌ی بازخورد"), L("Days to weeks — the design holds or it doesn't", "چند روز تا چند هفته؛ طراحی یا جواب می‌دهد یا نه"), L("Months to years — did people grow, did the team get better?", "چند ماه تا چند سال؛ آیا افراد رشد کردند و تیم بهتر شد؟")],
      [L("A good day", "یک روز خوب"), L("Deep focus on a hard problem", "تمرکز عمیق روی یک مسئله‌ی سخت"), L("Three people unblocked and one good decision made", "سه نفر از بن‌بست خارج شدند و یک تصمیم خوب گرفته شد")],
      [L("The hardest part", "سخت‌ترین بخش"), L("Influence without authority", "اثرگذاری بدون اختیار رسمی"), L("Hard conversations, and ambiguity about your own impact", "گفت‌وگوهای سخت و ابهام درباره‌ی اثرگذاری خودتان")],
      [L("Your calendar", "تقویم شما"), L("Mostly maker time", "عمدتاً زمان ساختن"), L("Mostly meetings — by design", "عمدتاً جلسه؛ و این عمدی است")],
      [L("Where it leads", "به کجا می‌رسد"), L("Staff → Principal → Distinguished", "Staff → Principal → Distinguished"), L("Senior EM → Director → VP", "Senior EM → Director → VP")],
      [L("You may love it if…", "اگر این‌گونه‌اید، احتمالاً آن را دوست دارید"), L("you want to stay close to the craft and own the hardest technical problems", "می‌خواهید به فن نزدیک بمانید و مالک سخت‌ترین مسائل فنی باشید"), L("you get energy from other people's growth and from making a group work", "از رشد دیگران و به ثمر رسیدن کار یک گروه انرژی می‌گیرید")]
    ],
    rolesTitle: L("Tech lead, TLM, EM — or Staff?", "راهبر فنی، TLM، EM یا Staff؟"),
    rolesIntro: L("Four common leadership roles on engineering teams, compared on how much technical and people leadership each carries.", "چهار نقش رایج راهبری در تیم‌های مهندسی، از نظر میزان راهبری فنی و راهبری انسانی."),
    techLead: L("Technical leadership", "راهبری فنی"),
    peopleLead: L("People leadership", "راهبری انسانی"),
    risk: L("Watch out", "مراقب باشید"),
    roles: [
      { k: "tl", n: L("Tech lead (TL)", "راهبر فنی (TL)"), tech: 0.85, people: 0.15, scope: L("One team", "یک تیم"),
        b: L("Leads a team's technical direction without direct reports: design, quality, technical decisions.", "بدون داشتن direct report، جهت‌دهی فنی تیم را بر عهده دارد: طراحی، کیفیت و تصمیم‌های فنی."),
        r: L("Blurry decision rights with the EM. Write down who decides what.", "مبهم بودن حدود تصمیم‌گیری با EM. مکتوب کنید چه کسی درباره‌ی چه چیزی تصمیم می‌گیرد.") },
      { k: "tlm", n: L("Tech lead manager (TLM)", "راهبر فنی-مدیر (TLM)"), tech: 0.6, people: 0.55, scope: L("A small team (about 3–6)", "یک تیم کوچک (حدود ۳ تا ۶ نفر)"),
        b: L("Leads a small team both technically and as its people manager; heavily hands-on. Common at Google.", "یک تیم کوچک را هم از نظر فنی و هم به عنوان مدیر انسانی راهبری می‌کند و به‌شدت درگیر کار فنی است. در Google رایج است."),
        r: L("Two jobs done halfway. Will Larson notes that fewer than four reports effectively makes you a TLM; it is usually a stepping stone.", "دو کار نیمه‌کاره. Will Larson یادآوری می‌کند که با کمتر از چهار نفر زیرمجموعه عملاً یک TLM هستید؛ این نقش معمولاً یک پله‌ی گذار است.") },
      { k: "em", n: L("Engineering manager (EM)", "مدیر مهندسی (EM)"), tech: 0.3, people: 0.9, scope: L("A team of about 6–8, or more", "یک تیم حدوداً ۶ تا ۸ نفره یا بیشتر"),
        b: L("Owns people, delivery and team health; partners with a tech lead or senior engineers on technical direction.", "مالک رشد افراد، delivery و سلامت تیم است و در جهت‌دهی فنی با یک راهبر فنی یا مهندسان ارشد شریک می‌شود."),
        r: L("Drifting away from the technology until you can no longer judge it.", "دور شدن از فناوری تا جایی که دیگر قادر به قضاوت درباره‌ی آن نباشید.") },
      { k: "staff", n: L("Staff engineer", "مهندس Staff"), tech: 0.95, people: 0.3, scope: L("Several teams", "چند تیم"),
        b: L("Technical leadership across teams, without reports. Will Larson's four archetypes: tech lead, architect, solver, right hand.", "راهبری فنی در سطح چند تیم، بدون direct report. چهار الگوی Will Larson: راهبر فنی، معمار، حلال مسائل و دست راست."),
        r: L("Influence without authority; the role is invisible unless you make your impact legible.", "اثرگذاری بدون اختیار رسمی؛ اگر اثرتان را خوانا و قابل مشاهده نکنید، نقش شما دیده نمی‌شود.") }
    ],
    reasonsTitle: L("Good reasons, risky reasons", "دلایل خوب، دلایل پرریسک"),
    reasonsIntro: L("Motivation predicts whether the first hard year feels worth it. Inspired by Charity Majors' writing on the engineer/manager pendulum.", "انگیزه تعیین می‌کند که آیا سال نخستِ سخت، ارزشش را دارد یا نه. برگرفته از نوشته‌های Charity Majors درباره‌ی آونگ مهندس/مدیر."),
    good: L("Good reasons", "دلایل خوب"),
    riskyT: L("Risky reasons — and what they really mean", "دلایل پرریسک و معنای واقعی آن‌ها"),
    goodList: [
      L("You get energy from helping others succeed, even when nobody sees it.", "از کمک به موفقیت دیگران انرژی می‌گیرید، حتی وقتی کسی آن را نمی‌بیند."),
      L("You keep noticing team and process problems, and you want to fix them.", "مدام مشکلات تیم و فرآیندها را می‌بینید و می‌خواهید حلشان کنید."),
      L("You are curious about how people and organisations work.", "درباره‌ی نحوه‌ی کار انسان‌ها و سازمان‌ها کنجکاوید."),
      L("People already come to you for advice and to resolve friction.", "افراد همین حالا هم برای مشورت و حل اصطکاک‌ها سراغ شما می‌آیند."),
      L("You are willing to be bad at something new for a year.", "حاضرید یک سال در کاری تازه، ناشی باشید.")
    ],
    riskyList: [
      L("**\"It's the only way to get promoted here.\"** Then the ladder is broken. Look for, or ask for, a real IC path.", "**«این تنها راه ارتقا در این‌جاست.»** یعنی نردبان ایراد دارد. به دنبال مسیر واقعی IC باشید یا آن را مطالبه کنید."),
      L("**\"I want to make the technical decisions.\"** Managers decide fewer technical details, not more.", "**«می‌خواهم تصمیم‌های فنی را من بگیرم.»** مدیران درباره‌ی جزئیات فنی کمتر تصمیم می‌گیرند، نه بیشتر."),
      L("**\"I want more money or status.\"** In most mature ladders pay is band-matched across tracks, and the job is harder.", "**«پول یا پرستیژ بیشتر می‌خواهم.»** در بیشتر نردبان‌های بالغ، بازه‌ی حقوق دو مسیر هم‌تراز است و کار مدیریت سخت‌تر است."),
      L("**\"I'm bored of coding.\"** Management is not a break; it is a new craft with its own grind.", "**«از کدنویسی خسته شده‌ام.»** مدیریت استراحت نیست؛ یک حرفه‌ی تازه با سختی‌های خودش است."),
      L("**\"Nobody else will do it.\"** Fine as a trial — if you would want it anyway.", "**«کس دیگری انجامش نمی‌دهد.»** به عنوان یک دوره‌ی آزمایشی اشکالی ندارد؛ به شرطی که در هر صورت آن را بخواهید.")
    ],
    readyTitle: L("Readiness check", "سنجش آمادگی"),
    readyIntro: L("Tick what is true today. This is a conversation starter for your next 1:1, not a verdict.", "مواردی را که امروز درباره‌ی شما صدق می‌کند علامت بزنید. این یک شروع‌کننده‌ی گفت‌وگو برای جلسه‌ی ۱:۱ بعدی است، نه یک حکم."),
    ready: [
      L("I have mentored someone and enjoyed watching them improve.", "کسی را mentor کرده‌ام و از دیدن پیشرفتش لذت برده‌ام."),
      L("I have led a project where other engineers did most of the work.", "پروژه‌ای را راهبری کرده‌ام که بیشتر کارش را مهندسان دیگر انجام دادند."),
      L("I have given someone difficult feedback, and it went reasonably well.", "به کسی بازخورد سخت داده‌ام و نسبتاً خوب پیش رفت."),
      L("I have run or joined hiring interviews and debriefs.", "در مصاحبه‌های جذب و جلسات debrief شرکت کرده یا آن‌ها را اداره کرده‌ام."),
      L("I think about how the team works, not just what it builds.", "به این فکر می‌کنم که تیم چگونه کار می‌کند، نه فقط این‌که چه می‌سازد."),
      L("I can let go of the code, even when I could do it faster.", "می‌توانم کد را رها کنم، حتی وقتی خودم سریع‌تر انجامش می‌دهم."),
      L("I am comfortable when results show up months later, not days.", "با این‌که نتیجه‌ها چند ماه بعد دیده شوند، نه چند روز بعد، کنار می‌آیم."),
      L("I would still want this if the pay stayed the same as my IC path.", "حتی اگر درآمدم با مسیر IC یکسان بماند، باز هم این نقش را می‌خواهم.")
    ],
    readyOut: [
      L("**Not yet.** Build the muscles first with a stretch: lead a project, mentor someone, run a hiring loop.", "**هنوز نه.** ابتدا با یک کار فراتر از سطح، این مهارت‌ها را بسازید: راهبری یک پروژه، mentor کردن یک نفر یا اداره‌ی یک فرآیند جذب."),
      L("**Promising.** Ask your manager for a trial with clear goals and a mentor.", "**امیدوارکننده.** از مدیرتان یک دوره‌ی آزمایشی با اهداف روشن و یک mentor بخواهید."),
      L("**Ready to try.** Talk to your manager about an acting role and what a successful trial would look like.", "**آماده‌ی امتحان.** با مدیرتان درباره‌ی نقش acting و معیارهای موفقیت دوره‌ی آزمایشی صحبت کنید.")
    ],
    checked: L("checked", "علامت‌خورده"),
    actingTitle: L("The acting period, month by month", "دوره‌ی آزمایشی، ماه به ماه"),
    actingIntro: L("A trial works when it has a start, an end, goals and a mentor. A common design: at least mid-senior IC level to enter, an open role, a positive evaluation, six months with a review, one extension at most.", "دوره‌ی آزمایشی وقتی جواب می‌دهد که آغاز، پایان، هدف و mentor داشته باشد. یک طراحی رایج: حداقل سطح میانی-ارشد IC برای ورود، یک موقعیت شغلی باز، ارزیابی مثبت، شش ماه همراه با ارزیابی و حداکثر یک بار تمدید."),
    timeline: [
      { when: L("Month 0", "ماه صفر"), title: L("Entry", "ورود"), body: L("Open role and evaluation; typically from L4/L5. Agree on goals, decision rights and a mentor.", "موقعیت باز و ارزیابی؛ معمولاً از سطح L4/L5. درباره‌ی اهداف، حدود تصمیم‌گیری و mentor توافق کنید."), major: true },
      { when: L("Month 1", "ماه اول"), title: L("Listen and learn", "گوش دادن و یادگیری"), body: L("1:1s with everyone; map the team's work; build a learning plan with your manager.", "۱:۱ با همه؛ ترسیم نقشه‌ی کارهای تیم؛ تدوین برنامه‌ی یادگیری با مدیر ارشد.") },
      { when: L("Months 2–3", "ماه دوم تا سوم"), title: L("Own the rhythm", "به دست گرفتن ریتم"), body: L("Planning, retros, stakeholder updates. First real feedback; shadow hiring.", "برنامه‌ریزی، retro و گزارش به ذی‌نفعان. اولین بازخوردهای واقعی؛ حضور در فرآیند جذب.") },
      { when: L("Months 4–5", "ماه چهارم تا پنجم"), title: L("Deliver through others", "delivery از طریق دیگران"), body: L("Finish a project you coordinated rather than coded; handle a first conflict or performance talk, with support.", "پروژه‌ای را که هماهنگ کرده‌اید، نه آن‌که کدش را زده‌اید، به پایان برسانید؛ اولین تعارض یا گفت‌وگوی عملکردی را با پشتیبانی مدیرتان مدیریت کنید.") },
      { when: L("Month 6", "ماه ششم"), title: L("Review and decision", "ارزیابی و تصمیم"), body: L("A committee decides: enter the management ladder, extend one cycle, or return to IC. One year at most in total.", "کمیته تصمیم می‌گیرد: ورود به نردبان مدیریت، تمدید برای یک دوره‌ی دیگر یا بازگشت به مسیر IC. در مجموع حداکثر یک سال."), major: true }
    ],
    outcomesTitle: L("Three outcomes — all of them decisions, not verdicts", "سه نتیجه؛ همه تصمیم‌اند، نه حکم"),
    outcomes: [
      { icon: "check", t: L("Become a manager", "ورود به نردبان مدیریت"), b: L("You enter the management ladder with a growth plan for your first year.", "با یک برنامه‌ی رشد برای سال نخست، وارد نردبان مدیریت می‌شوید.") },
      { icon: "clock", t: L("Extend one cycle", "تمدید یک دوره"), b: L("More time on specific gaps, with named goals for the second review.", "زمان بیشتر برای شکاف‌های مشخص، با اهداف معین برای ارزیابی دوم.") },
      { icon: "swap", t: L("Return to IC", "بازگشت به مسیر IC"), b: L("You go back with management experience — which usually makes you a stronger senior IC.", "با تجربه‌ی مدیریت بازمی‌گردید؛ تجربه‌ای که معمولاً شما را به IC ارشد قوی‌تری تبدیل می‌کند.") }
    ],
    reviewTitle: L("Have this ready for the review", "این موارد را برای ارزیابی آماده کنید"),
    review: [
      L("Notes from regular 1:1s", "یادداشت‌های جلسات ۱:۱ منظم"),
      L("Two or three pieces of feedback you gave, and what happened next", "دو یا سه بازخوردی که داده‌اید و اتفاقی که پس از آن افتاد"),
      L("A delivery you coordinated, with its outcome", "یک delivery که هماهنگ کرده‌اید، همراه با نتیجه‌ی آن"),
      L("Feedback from the team and peers", "بازخورد تیم و هم‌تایان"),
      L("A one-page reflection: do you want this, and why?", "یک یادداشت تأملی یک‌صفحه‌ای: آیا این نقش را می‌خواهید و چرا؟")
    ],
    pendulumTitle: L("The pendulum", "آونگ"),
    pendulum: [
      L("Charity Majors describes a pattern among many of the best technical leaders: they swing between IC and management every few years. Each swing makes the other role stronger — managers who coded recently judge technical work better; ICs who have managed influence better.", "Charity Majors الگویی را در میان بسیاری از بهترین راهبران فنی توصیف می‌کند: آن‌ها هر چند سال یک بار میان مسیر IC و مدیریت جابه‌جا می‌شوند. هر نوسان، نقش دیگر را تقویت می‌کند؛ مدیرانی که به‌تازگی کد زده‌اند کار فنی را بهتر قضاوت می‌کنند و ICهایی که تجربه‌ی مدیریت دارند، اثرگذاری بهتری دارند."),
      L("If you step back to IC, do it on purpose: say what you are going back for, keep leadership skills in use (mentoring, leading projects), and move through a mapping to the equivalent level — it is a lateral move, not a demotion.", "اگر به مسیر IC بازمی‌گردید، آگاهانه این کار را بکنید: بگویید برای چه بازمی‌گردید، مهارت‌های راهبری را فعال نگه دارید (mentorship و راهبری پروژه‌ها) و از طریق نگاشت به سطح معادل منتقل شوید؛ این یک جابه‌جایی افقی است، نه تنزل.")
    ],
    next: L("Hiring without down-leveling", "استخدام بدون down-level شدن")
  };

  function readyOut(n) {
    var o = n <= 3 ? C.readyOut[0] : n <= 6 ? C.readyOut[1] : C.readyOut[2];
    return '<div class="lesson"><div class="muted" style="font-size:var(--fs-xs)">' + G.num(n) + " / " + G.num(C.ready.length) + " " + t(C.checked) + "</div><p>" + md(o) + "</p></div>";
  }

  G.views.paths = {
    lede: C.lede,
    render: function () {
      var h = UI.pageHead({ eyebrow: C.eyebrow, icon: "swap", title: C.title, lede: C.lede, tldr: C.tldr, jump: C.jump });
      h += UI.section({ id: "jobs", title: C.jobsTitle, body: UI.table(C.jobsHead.map(t), C.jobs.map(function (r) { return r.map(t); }), { rowHeads: true }) });

      h += UI.section({ id: "roles", title: C.rolesTitle, intro: C.rolesIntro, body: '<div class="grid g4">' + C.roles.map(function (r) {
        return '<div class="card"><h3 style="font-size:1rem">' + t(r.n) + '</h3><span class="chip">' + t(r.scope) + "</span>" +
          UI.statRow(C.techLead, "", r.tech, "c-tech") + UI.statRow(C.peopleLead, "", r.people, "c-people") +
          '<p style="font-size:var(--fs-s);color:var(--ink-2)">' + t(r.b) + '</p><p style="font-size:var(--fs-xs)"><b class="tag-bad">' + t(C.risk) + ":</b> " + t(r.r) + "</p></div>";
      }).join("") + "</div>" });

      h += UI.section({ id: "reasons", title: C.reasonsTitle, intro: C.reasonsIntro, body: '<div class="two-col"><div class="card"><h3 class="tag-good">' + icon("check", "inline-icon") + " " + t(C.good) + "</h3>" + UI.checklist(C.goodList) + '</div><div class="card"><h3 class="tag-bad">' + icon("alert", "inline-icon") + " " + t(C.riskyT) + "</h3>" + UI.list(C.riskyList) + "</div></div>" });

      h += UI.section({ id: "ready", title: C.readyTitle, intro: C.readyIntro, body: '<div class="two-col"><div class="card"><div class="radio-grid" id="readyList">' + C.ready.map(function (r, i) {
        return '<label class="radio-opt" for="rd' + i + '" style="grid-template-columns:auto minmax(0,1fr)"><input type="checkbox" id="rd' + i + '"><span>' + t(r) + "</span></label>";
      }).join("") + '</div></div><div id="readyOut">' + readyOut(0) + "</div></div>" });

      h += UI.section({ id: "acting", title: C.actingTitle, intro: C.actingIntro, body: '<div class="two-col"><div class="card">' + UI.timeline(C.timeline) + "</div>" +
        '<div class="grid" style="gap:14px"><div class="card"><h3>' + t(C.outcomesTitle) + "</h3>" + C.outcomes.map(function (o) { return '<div style="display:grid;grid-template-columns:auto minmax(0,1fr);gap:10px;align-items:start"><span class="icon-badge">' + icon(o.icon) + "</span><div><b>" + t(o.t) + '</b><p class="muted" style="font-size:var(--fs-s)">' + t(o.b) + "</p></div></div>"; }).join("") + "</div>" +
        '<div class="card"><h3>' + icon("flag", "inline-icon") + " " + t(C.reviewTitle) + "</h3>" + UI.checklist(C.review) + "</div></div></div>" });

      h += UI.section({ id: "pendulum", title: C.pendulumTitle, body: '<div class="prose">' + C.pendulum.map(function (p) { return "<p>" + md(p) + "</p>"; }).join("") + "</div>" });
      h += UI.next("hiring", C.next);
      return h;
    },
    mount: function (root) {
      var list = G.$("#readyList", root);
      list.addEventListener("change", function () {
        var n = G.$$("input:checked", list).length;
        G.$("#readyOut", root).innerHTML = readyOut(n);
      });
    },
    index: function () {
      return [
        { type: "section", title: t(C.jobsTitle), snip: t(C.lede), href: "#/paths/jobs", extra: "staff engineer manager difference تفاوت" },
        { type: "section", title: t(C.rolesTitle), snip: t(C.rolesIntro), href: "#/paths/roles", extra: "TLM tech lead manager staff archetypes" },
        { type: "section", title: t(C.reasonsTitle), snip: t(C.reasonsIntro), href: "#/paths/reasons" },
        { type: "tool", title: t(C.readyTitle), snip: t(C.readyIntro), href: "#/paths/ready" },
        { type: "section", title: t(C.actingTitle), snip: t(C.actingIntro), href: "#/paths/acting", extra: "acting trial interim آزمایشی" },
        { type: "section", title: t(C.pendulumTitle), snip: G.plain(C.pendulum[0]), href: "#/paths/pendulum", extra: "Charity Majors back to IC بازگشت" }
      ];
    }
  };
})();

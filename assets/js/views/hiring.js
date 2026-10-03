(function () {
  "use strict";
  var G = window.ELG, L = G.L, t = G.t, md = G.md, icon = G.icon, UI = G.ui;

  var C = {
    eyebrow: L("Move", "جابه‌جایی"),
    title: L("Hiring without down-leveling", "استخدام بدون down-level شدن"),
    lede: L(
      "Your level is mostly decided before and during the interview loop — not at the offer. Bring evidence of scope, tell stories at the right altitude, and settle the level before you talk about money.",
      "سطح شما معمولاً پیش از مصاحبه و در طول آن تعیین می‌شود. برای این مرحله، شواهد دامنه‌ی مسئولیت و اثرگذاری‌تان را آماده کنید و تجربه‌های خود را متناسب با سطح هدف توضیح دهید. پیش از مذاکره درباره‌ی حقوق، درباره‌ی سطح به توافق برسید."
    ),
    tldr: [
      L("**Level first, then pay, then start date.** Negotiating pay implicitly accepts the level.", "**ابتدا درباره‌ی سطح، سپس حقوق و در پایان تاریخ شروع به توافق برسید.** ورود به مذاکره‌ی حقوق معمولاً به معنای پذیرش سطح پیشنهادی است."),
      L("Committees lean **conservative**: when evidence sits between two levels, the lower one usually wins. Make your scope easy to quote.", "کمیته‌ها **محافظه‌کارند**: وقتی شواهد بین دو سطح باشد، معمولاً سطح پایین‌تر را انتخاب می‌کنند. دامنه‌ی مسئولیت و اثرگذاری‌تان را روشن بیان کنید تا دیگران هم بتوانند به آن استناد کنند."),
      L("A down-level **sticks** — promotion within a year is rare. It can still be the right trade; make it on purpose.", "down-level شدن معمولاً **به‌سرعت جبران نمی‌شود**. ارتقا در کمتر از یک سال نادر است. با این حال، ممکن است پذیرش آن به نفع شما باشد. آگاهانه تصمیم بگیرید.")
    ],
    jump: [
      { href: "decided", label: L("How level is decided", "سطح چگونه تعیین می‌شود") },
      { href: "signals", label: L("What they probe", "چه چیزی سنجیده می‌شود") },
      { href: "loops", label: L("Loops compared", "مقایسه‌ی فرآیندهای مصاحبه") },
      { href: "calibrator", label: L("Scope calibrator", "سنجش دامنه‌ی مسئولیت") },
      { href: "altitude", label: L("Story altitude", "روایت متناسب با سطح") },
      { href: "causes", label: L("Why down-levels happen", "چرا down-level رخ می‌دهد") },
      { href: "playbook", label: L("Playbook", "راهنمای اقدام") },
      { href: "accept", label: L("Accept a down-level?", "down-level را بپذیرم؟") },
      { href: "examples", label: L("Worked examples", "بررسی چند نمونه") }
    ],
    decidedTitle: L("How your level gets decided", "سطح شما چگونه تعیین می‌شود"),
    decidedIntro: L("Five steps. The target level is usually set by step two — so most of the leverage sits before the onsite.", "فرآیند تعیین سطح این پنج گام را دارد. سطح هدف معمولاً تا گام دوم مشخص می‌شود، پس پیش از مصاحبه‌های اصلی فرصت بیشتری برای اثر گذاشتن بر آن دارید."),
    steps: [
      { title: L("Your profile", "پروفایل شما"), body: L("Recruiters and hiring managers set a target level from your résumé and screen: org size, teams, managers reporting to you, systems owned, company tier.", "کارشناسان جذب و hiring managerها از روی رزومه و مصاحبه‌ی اولیه یک سطح هدف تعیین می‌کنند: اندازه‌ی سازمان، تعداد تیم‌ها، مدیران زیرمجموعه، سیستم‌هایی که مالکشان بوده‌اید و رده‌ی شرکت."), you: L("Put scope in numbers on your CV and profile.", "دامنه‌ی اثرتان را با عدد در رزومه و پروفایلتان بنویسید.") },
      { title: L("Recruiter screen", "مصاحبه‌ی اولیه با کارشناس جذب"), body: L("The target level is confirmed or adjusted. Many loops are then calibrated to that level.", "سطح هدف تأیید یا اصلاح می‌شود و بسیاری از فرآیندهای مصاحبه بر اساس همان سطح تنظیم می‌شوند."), you: L("Ask which level the loop targets, and what the rubric is for it and the level above.", "بپرسید مصاحبه‌ها برای کدام سطح طراحی شده‌اند و معیارهای آن سطح و سطح بالاتر چیست.") },
      { title: L("Interview loop", "فرآیند مصاحبه"), body: L("Each interview yields a hire signal and a level signal. For managers, people-management, execution and behavioural rounds carry the scope signal; system design is a gate.", "هر مصاحبه هم شواهدی برای تصمیم استخدام فراهم می‌کند و هم برای تعیین سطح. برای مدیران، دامنه‌ی مسئولیت و اثرگذاری بیشتر در مصاحبه‌های مدیریت انسانی، اجرا و رفتاری مشخص می‌شود. طراحی سیستم هم یکی از معیارهای لازم برای عبور از فرآیند است."), you: L("Volunteer scope without being asked — interviewers write down what you say.", "برای بیان دامنه‌ی مسئولیتتان منتظر پرسش مستقیم نمانید. مصاحبه‌گرها بر اساس آنچه می‌گویید یادداشت برمی‌دارند.") },
      { title: L("Debrief or committee", "debrief یا کمیته‌ی جذب"), body: L("People who did not interview you read the written feedback. When evidence sits between levels, the lower one usually wins.", "افرادی که با شما مصاحبه نکرده‌اند بازخوردهای مکتوب را می‌خوانند. وقتی شواهد میان دو سطح است، معمولاً سطح پایین‌تر انتخاب می‌شود."), you: L("Say things that are easy to quote: numbers, system names, your reasoning.", "شواهدی روشن و قابل استناد ارائه کنید: اعداد، نام سیستم‌ها و دلایل تصمیم‌هایتان.") },
      { title: L("Offer and negotiation", "پیشنهاد شغلی و مذاکره"), body: L("Each level has a pay band. Changing level at the end is rare — one ex-Amazon recruiter puts up-leveling below 1%.", "هر سطح یک بازه‌ی حقوقی دارد. تغییر سطح در انتهای فرآیند نادر است. یک کارشناس جذب سابق آمازون نرخ ارتقای سطح در این مرحله را کمتر از ۱٪ می‌داند."), you: L("Negotiate level before pay, with evidence or a competing offer at the higher level.", "پیش از مذاکره‌ی حقوق، با شواهد عملکرد یا یک پیشنهاد رقیب در سطح بالاتر، درباره‌ی سطح مذاکره کنید.") }
    ],
    signalsTitle: L("What interviewers probe at each level", "مصاحبه‌گرها در هر سطح چه چیزی را می‌سنجند"),
    signalsIntro: L("The same questions are asked at every level; what changes is the altitude of the answer they are listening for.", "پرسش‌ها در سطوح مختلف شبیه‌اند. تفاوت در دامنه و عمق پاسخی است که از شما انتظار می‌رود."),
    signalsHead: [L("Signal", "سیگنال"), L("EM (M2–M3)", "EM (M2 تا M3)"), L("Senior EM (M4)", "Senior EM (M4)"), L("Director (M5+)", "Director (M5 و بالاتر)")],
    signals: [
      [L("Org size and shape", "اندازه و شکل سازمان"), L("One team, about 5–12 engineers, mostly direct ICs", "یک تیم با حدود ۵ تا ۱۲ مهندس، عمدتاً ICهایی که مستقیم به شما report می‌کنند"), L("Several teams, usually including other managers", "چند تیم، معمولاً شامل مدیران دیگر"), L("Managers of managers; often 30+ people", "مدیرِ مدیران، اغلب بیش از ۳۰ نفر")],
      [L("Planning horizon", "افق برنامه‌ریزی"), L("A quarter to a year", "یک فصل تا یک سال"), L("6–12 months", "۶ تا ۱۲ ماه"), L("1–2 years or more; multi-year technical strategy", "۱ تا ۲ سال یا بیشتر، استراتژی فنی چندساله")],
      [L("Decisions you own", "تصمیم‌هایی که مالکشان هستید"), L("How the team builds; delivery; operations; hiring for the team", "این‌که تیم چگونه می‌سازد، delivery، عملیات، جذب برای تیم"), L("Trade-offs across teams; portfolio priorities; coaching managers; calibration", "trade-offهای بین‌تیمی، اولویت‌های سبد، coaching مدیران، کالیبراسیون"), L("What gets built and who leads it; org design; budget and headcount; succession; stopping initiatives", "تصمیم درباره‌ی آنچه ساخته می‌شود و کسانی که آن را راهبری می‌کنند، طراحی سازمان، بودجه و headcount، جانشین‌پروری، متوقف‌کردن برنامه‌ها")],
      [L("Business link", "پیوند با کسب‌وکار"), L("Team metrics tied to product goals", "metricهای تیم در راستای اهداف محصول"), L("Cross-team outcomes; the organisation's goals", "نتایج بین‌تیمی، اهداف سازمان"), L("Revenue, cost and risk, framed so a CFO can evaluate them", "درآمد، هزینه و ریسک، به شکلی که مدیر مالی بتواند ارزیابی کند")],
      [L("Ambiguity", "ابهام"), L("Makes a given direction work", "جهتی را که داده شده عملی می‌کند"), L("Creates clarity when none comes from above", "وقتی جهت روشنی از مدیران بالاتر نمی‌گیرد، مسیر را برای تیم‌ها روشن می‌کند"), L("Sets direction without a top-down strategy", "بدون استراتژی از بالا، جهت تعیین می‌کند")],
      [L("Talent", "استعداد"), L("Hires and grows engineers", "مهندسان را جذب می‌کند و رشد می‌دهد"), L("Hires and grows managers; builds a bench", "مدیران را جذب و رشد می‌دهد و راهبران آینده را پرورش می‌دهد"), L("Succession plans and a leadership pipeline; attracts senior hires", "برنامه‌ی جانشینی و مسیر پرورش رهبران، جذب نیروهای ارشد")],
      [L("Technical depth", "عمق فنی"), L("Reviews designs; held to a senior-engineer bar in design rounds at some companies", "بازبینی طراحی‌ها، در برخی شرکت‌ها در مصاحبه‌ی طراحی با معیار مهندس ارشد سنجیده می‌شود"), L("Works through staff and principal engineers", "از طریق مهندسان Staff و Principal کار می‌کند"), L("Platform-level architecture strategy; tech debt as a financial case", "استراتژی معماری در سطح پلتفرم، توجیه سرمایه‌گذاری روی tech debt با استدلال مالی")]
    ],
    signalsSrc: L("Synthesised from public ladders (Dropbox, GitLab, Lara Hogan's manager levels) and interview-prep guides (Hello Interview, Exponent, interviewing.io).", "ترکیبی از نردبان‌های عمومی (Dropbox، GitLab، سطوح مدیریتی Lara Hogan) و راهنماهای آمادگی مصاحبه (Hello Interview، Exponent، interviewing.io)."),
    loopsTitle: L("Engineering-manager loops compared", "مقایسه‌ی فرآیند مصاحبه‌ی مدیران مهندسی"),
    loopsIntro: L("Formats change often; treat this as orientation, then ask your recruiter for the current loop.", "قالب مصاحبه‌ها ممکن است تغییر کند. از این جدول برای آشنایی اولیه استفاده کنید و جزئیات فعلی را از کارشناس جذب بپرسید."),
    loopsHead: [L("Company", "شرکت"), L("Typical rounds after the screens", "مصاحبه‌های رایج پس از غربالگری"), L("What is distinctive", "ویژگی متمایز")],
    loops: [
      ["Meta", L("People management; project retrospective; behavioural; system design or product architecture; coding", "مدیریت انسانی، مرور یک پروژه (retrospective)، رفتاری، طراحی سیستم یا معماری محصول، کدنویسی"), L("People and retrospective rounds carry the most weight; design is held to a senior-engineer standard. External EMs usually enter at M1.", "مصاحبه‌های مدیریت انسانی و retrospective بیشترین وزن را دارند. طراحی با معیار مهندس ارشد سنجیده می‌شود. EMهای بیرونی معمولاً در سطح M1 وارد می‌شوند.")],
      ["Google", L("System design; coding or code review; leadership and people management; Googleyness & leadership", "طراحی سیستم، کدنویسی یا code review، راهبری و مدیریت انسانی، Googleyness و راهبری"), L("A hiring committee of senior staff who did not interview you decides hire and level, and can move the level by one step.", "یک کمیته‌ی جذب متشکل از افراد ارشدی که با شما مصاحبه نکرده‌اند درباره‌ی استخدام و سطح تصمیم می‌گیرد و می‌تواند سطح را یک پله جابه‌جا کند.")],
      ["Amazon", L("System design; people management; operational excellence; technical program management — Leadership Principles scored in every round", "طراحی سیستم، مدیریت انسانی، تعالی عملیاتی، مدیریت برنامه‌ی فنی، Leadership Principles در همه‌ی مصاحبه‌ها سنجیده می‌شوند"), L("A Bar Raiser from outside the team can block the offer. Level is largely set at the recruiter screen.", "یک Bar Raiser از بیرون تیم می‌تواند پیشنهاد را متوقف کند. سطح عمدتاً در مصاحبه‌ی اولیه تعیین می‌شود.")],
      ["Microsoft", L("Light coding; team-specific system design; behavioural; the As-Appropriate interview", "کدنویسی سبک، طراحی سیستم متناسب با تیم، رفتاری، مصاحبه‌ی As-Appropriate"), L("A senior 'AA' interviewer from outside the team checks the bar. Loops are set up for a target level beforehand.", "یک مصاحبه‌گر ارشد «AA» از بیرون تیم معیار را می‌سنجد. فرآیند از پیش برای یک سطح هدف تنظیم می‌شود.")],
      ["Apple", L("People management; code review; cross-org partnership; system design", "مدیریت انسانی، code review، همکاری بین‌سازمانی، طراحی سیستم"), L("Decentralised and team-specific; rounds follow the real job closely.", "فرآیند غیرمتمرکز است و به تیم بستگی دارد. مصاحبه‌ها به کار واقعی نزدیک‌اند.")],
      ["Stripe", L("Strategy and execution; experience and goals; project deep-dive; API-style design; a people-management role-play", "استراتژی و اجرا، تجربه و اهداف، بررسی عمیق یک پروژه، طراحی به سبک API، نقش‌آفرینی در موقعیت مدیریت انسانی"), L("A live role-play where the interviewer plays your report. The 'experience and goals' round is where level adjustments happen.", "نقش‌آفرینی زنده‌ای که در آن مصاحبه‌گر نقش یکی از افراد تیم شما را بازی می‌کند. تنظیم سطح در مصاحبه‌ی «تجربه و اهداف» اتفاق می‌افتد.")],
      ["Netflix", L("Behavioural rounds with managers from other teams; failure-focused system design; hiring-manager conversations", "مصاحبه‌های رفتاری با مدیران تیم‌های دیگر، طراحی سیستم با تمرکز بر مدیریت خطا و availability، گفت‌وگو با hiring manager"), L("Anchored in the culture memo; questions ask what you actually did, not what you would do.", "پرسش‌ها بر پایه‌ی سند فرهنگی شرکت تنظیم می‌شوند و از شما می‌خواهند تجربه‌های واقعی خود را توضیح دهید.")],
      [L("Spotify · Booking.com (EU)", "Spotify · Booking.com (اروپا)"), L("Reported: system design, people management, delivery, values; Booking.com uses a code-review exercise and stakeholder rounds", "گزارش‌شده: طراحی سیستم، مدیریت انسانی، delivery و ارزش‌ها، Booking.com از تمرین code review و مصاحبه‌ی مدیریت ذی‌نفعان استفاده می‌کند"), L("Values rounds act as real filters. Public detail is thinner — confirm with your recruiter.", "مصاحبه‌های مربوط به ارزش‌های شرکت در تصمیم نهایی نقش جدی دارند. اطلاعات عمومی کمتری در دسترس است. جزئیات را با کارشناس جذب تأیید کنید.")]
    ],
    loopsSrc: L("Sources: interview-prep guides (Exponent, Hello Interview, interviewing.io), levels.fyi, The Pragmatic Engineer; checked September 2026.", "منابع: راهنماهای آمادگی مصاحبه (Exponent، Hello Interview، interviewing.io)، levels.fyi و The Pragmatic Engineer، بررسی‌شده در سپتامبر ۲۰۲۶."),
    calTitle: L("Scope calibrator", "سنجش دامنه‌ی مسئولیت"),
    calIntro: L("Describe your current role in numbers. The calibrator reads it the way a large company's leveling conversation often does. It opens with an example filled in.", "نقش فعلی‌تان را با عدد توصیف کنید. این ابزار، دامنه‌ی مسئولیت شما را با معیارهای رایج تعیین سطح در شرکت‌های بزرگ مقایسه می‌کند. برای شروع، یک نمونه در آن وارد شده است."),
    calDisclaimer: L("A rule of thumb built from public ladders and hiring guides — for preparing a leveling conversation, not predicting it. Interview performance decides the final level.", "این برآورد تقریبی از نردبان‌های منتشرشده و راهنماهای جذب گرفته شده و برای آماده‌شدن در گفت‌وگوی تعیین سطح کاربرد دارد. سطح نهایی بر اساس عملکرد شما در مصاحبه تعیین می‌شود."),
    fields: [
      { id: "people", label: L("People in your org (including indirect reports)", "تعداد افراد مجموعه‌ی شما (با احتساب غیرمستقیم)"), opts: [[L("1–5", "۱ تا ۵"), 1], [L("6–12", "۶ تا ۱۲"), 1.5], [L("13–30", "۱۳ تا ۳۰"), 3], [L("31–80", "۳۱ تا ۸۰"), 3.5], [L("81–200", "۸۱ تا ۲۰۰"), 4], [L("200+", "بیش از ۲۰۰"), 5]], def: 2 },
      { id: "mgrs", label: L("Managers reporting to you", "مدیرانی که به شما گزارش می‌دهند"), opts: [[L("None", "هیچ"), 2], [L("1–2", "۱ تا ۲"), 3], [L("3–5", "۳ تا ۵"), 4], [L("6 or more", "۶ یا بیشتر"), 4.5]], def: 1 },
      { id: "horizon", label: L("Longest plan you own", "بلندمدت‌ترین برنامه‌ای که مسئولش هستید"), opts: [[L("A quarter", "یک فصل"), 1], [L("Half a year", "نیم سال"), 2], [L("A year", "یک سال"), 3], [L("Multiple years", "چند سال"), 4.5]], def: 2 },
      { id: "budget", label: L("Budget ownership", "مالکیت بودجه"), opts: [[L("None", "هیچ"), 1.5], [L("I influence it", "بر آن اثر می‌گذارم"), 2.5], [L("I own headcount and budget", "مالک headcount و بودجه هستم"), 4], [L("I own a P&L", "مالک P&L هستم"), 5]], def: 1 },
      { id: "decisions", label: L("The biggest decisions you own", "مهم‌ترین تصمیم‌هایی که مسئولشان هستید"), opts: [[L("How my team builds", "این‌که تیمم چگونه می‌سازد"), 1], [L("What my team builds", "این‌که تیمم چه می‌سازد"), 2], [L("Priorities across teams", "اولویت‌ها در سطح چند تیم"), 3], [L("Org design and strategy", "طراحی سازمان و استراتژی"), 4.5]], def: 2 },
      { id: "tier", label: L("Your current company", "شرکت فعلی شما"), opts: [[L("Large tech company", "شرکت بزرگ فناوری"), 0], [L("Mid-size or scale-up", "شرکت متوسط یا در حال رشد"), -0.25], [L("Startup under ~100 people", "استارتاپ کمتر از حدود ۱۰۰ نفر"), -0.75]], def: 1 },
      { id: "title", label: L("Your current title", "عنوان فعلی شما"), opts: [[L("Engineering Manager", "Engineering Manager"), 1.5], [L("Senior EM", "Senior EM"), 3], [L("Director / Head of", "Director / Head of"), 4], [L("VP / CTO", "VP / CTO"), 5]], def: 2 }
    ],
    calResult: L("Most large companies would read this scope as", "برداشت رایج شرکت‌های بزرگ از این دامنه‌ی مسئولیت"),
    calProbe: L("Expect interviewers to probe", "انتظار داشته باشید مصاحبه‌گرها این موارد را بسنجند"),
    calAbove: L("Your title sits above the scope these numbers show. Expect a leveling conversation: lead with scope, not title — and decide in advance what trade you would accept.", "عنوان شما بالاتر از سطحی است که این اعداد نشان می‌دهند. برای گفت‌وگو درباره‌ی سطح آماده باشید: از دامنه‌ی مسئولیت شروع کنید و از قبل تصمیم بگیرید چه شرایطی را می‌پذیرید."),
    calBelow: L("Your scope is bigger than your title suggests. Make sure the recruiter sees these numbers before the loop is calibrated.", "دامنه‌ی اثر شما از آنچه عنوانتان نشان می‌دهد بزرگ‌تر است. مطمئن شوید کارشناس جذب پیش از تنظیم فرآیند مصاحبه این اعداد را می‌بیند."),
    calMatch: L("Your title and your scope tell the same story. Keep the numbers front and centre anyway.", "عنوان و دامنه‌ی اثر شما هم‌خوان‌اند. با این حال، اعداد را در مرکز روایتتان نگه دارید."),
    calNoMgr: L("With no managers reporting to you, most ladders cap you below manager-of-managers levels, however large the team.", "بدون مدیر زیرمجموعه، بیشتر نردبان‌ها شما را، هر قدر هم تیم بزرگ باشد، پایین‌تر از سطح مدیرِ مدیران قرار می‌دهند."),
    altTitle: L("Tell your story at the right altitude", "تجربه‌هایتان را متناسب با سطح هدف روایت کنید"),
    altIntro: L("The same topic, told at three levels. Highlighted phrases are the level signals interviewers write down.", "یک موضوع در سه سطح روایت شده است. عبارت‌های برجسته، شواهدی هستند که مصاحبه‌گر برای تعیین سطح یادداشت می‌کند."),
    altRule: L("**The framing rule for senior roles:** replace \"a thing I built\" with \"a thing my organisation now does repeatably because of a structure I put in place\". Put technical problems in business terms — \"latency costs conversions on our top revenue page\", not \"latency is 800 ms\".", "**در شرح تجربه‌های نقش‌های ارشد، توان‌مندی‌هایی را توضیح دهید که برای سازمان ایجاد کرده‌اید.** علاوه بر آنچه ساخته‌اید، نشان دهید ساختارهای ایجادشده چه اثری بر عملکرد سازمان دارند. مسائل فنی را هم به اثر کسب‌وکاری آن‌ها مرتبط کنید. برای مثال، توضیح دهید latency هشتصد میلی‌ثانیه‌ای در پرفروش‌ترین صفحه چگونه نرخ تبدیل را کاهش می‌دهد."),
    altNote: L("Numbers in the stories are illustrative.", "اعداد داستان‌ها نمونه‌اند."),
    causesTitle: L("Why candidates get down-leveled", "چرا کاندیداها down-level می‌شوند"),
    structural: L("Structural — plan for these", "عوامل ساختاری، برای مواجهه با آن‌ها آماده شوید"),
    fixable: L("In the interview — fix these", "اشکال‌های قابل اصلاح در مصاحبه"),
    structuralList: [
      L("**Company tiers and title inflation.** The same title means very different scope in different places.", "**رده‌ی شرکت‌ها و تورم عنوان.** دامنه‌ی مسئولیت یک عنوان یکسان در شرکت‌های مختلف می‌تواند بسیار متفاوت باشد."),
      L("**Strict org-size comparisons for managers.** Many external 'managers' effectively lead 4–6 people as tech-lead managers.", "**مقایسه‌ی اندازه‌ی سازمان در تعیین سطح مدیران.** بسیاری از کاندیداهای بیرونی با عنوان «مدیر»، عملاً ۴ تا ۶ نفر را در نقش TLM راهبری می‌کنند."),
      L("**Market conditions.** More candidates means less appetite for risk; flatter orgs raise the bar for claimed scope.", "**شرایط بازار.** با افزایش تعداد کاندیداها، شرکت‌ها کمتر ریسک می‌کنند. با کاهش لایه‌های مدیریتی هم برای تأیید دامنه‌ی مسئولیت ادعاشده، شواهد قوی‌تری می‌خواهند."),
      L("**Conservative committees** and **budget limits** — sometimes there is simply no open role at the higher level.", "**کمیته‌های محافظه‌کار** و **محدودیت بودجه**. گاهی اساساً موقعیت شغلی بازی در سطح بالاتر وجود ندارد.")
    ],
    fixableList: [
      L("**Stories at the wrong altitude** — director candidates telling manager-level stories.", "**شرح تجربه‌های نامتناسب با سطح هدف**، مثلاً کاندیدای Director که فقط از مسئولیت‌های سطح EM مثال می‌زند."),
      L("**\"We\" instead of \"I\"** — the interviewer cannot tell what you did. Over-claiming is spotted too.", "**نامشخص بودن سهم «من» در کار «ما»**. مصاحبه‌گر باید بداند مسئولیت و نقش شما در نتیجه چه بوده است. ادعای بیش از حد هم اعتبار پاسخ را کم می‌کند."),
      L("**Activity instead of outcomes** — \"it went well\" with no metric.", "**شرح فعالیت‌ها بدون توضیح نتیجه**، مثل گفتن «خوب پیش رفت» بدون ارائه‌ی metric."),
      L("**Passive ownership** — \"I was assigned…\" instead of \"I found the problem and owned the result\".", "**پذیرش منفعلانه‌ی مسئولیت**، مثلاً وقتی فقط می‌گویید «به من سپرده شد» و توضیح نمی‌دهید چگونه مسئله را شناسایی کردید و مسئولیت نتیجه را پذیرفتید."),
      L("**Weak system design for a manager** — over-engineering, shallow depth, not driving the conversation.", "**عملکرد ضعیف مدیر در system design**، راه‌حل بیش از حد پیچیده، عمق فنی ناکافی و ناتوانی در هدایت گفت‌وگو."),
      L("**Inconsistent rounds** — one weak round lowers the level more than one strong round raises it.", "**عملکرد نامتوازن در مصاحبه‌ها**. اثر یک مصاحبه‌ی ضعیف بر کاهش سطح، معمولاً از اثر یک مصاحبه‌ی قوی بر افزایش آن بیشتر است.")
    ],
    stats: [
      { v: L("~55%", "حدود ۵۵٪"), l: L("of surveyed Meta candidates reported being down-leveled", "از کاندیداهای Meta که در یک نظرسنجی شرکت کردند، گزارش دادند down-level شده‌اند"), s: L("interviewing.io survey · mostly generalist engineers", "نظرسنجی interviewing.io · عمدتاً مهندسان عمومی") },
      { v: L("<1%", "کمتر از ۱٪"), l: L("of Amazon candidates are up-leveled at the end of the process", "از کاندیداهای Amazon در انتهای فرآیند، سطح بالاتری می‌گیرند"), s: L("ex-Amazon recruiter, levels.fyi", "کارشناس جذب سابق Amazon، levels.fyi") },
      { v: L("18–20%", "۱۸ تا ۲۰٪"), l: L("more pay for external hires than internal promotees in similar jobs — but lower ratings in their first two years", "حقوق بیشترِ استخدام‌شدگان بیرونی نسبت به ارتقایافتگان داخلی در مشاغل مشابه، اما با ارزیابی پایین‌تر در دو سال نخست"), s: L("Matthew Bidwell, Wharton · one firm's data", "Matthew Bidwell، Wharton · داده‌های یک شرکت") }
    ],
    playTitle: L("The playbook", "راهنمای اقدام"),
    play: [
      { when: L("Before applying", "پیش از ارسال درخواست"), items: [L("Map your real scope: people, teams, managers, budget, systems, planning horizon, business metrics.", "دامنه‌ی واقعی‌تان را ترسیم کنید: افراد، تیم‌ها، مدیران، بودجه، سیستم‌ها، افق برنامه‌ریزی و metricهای کسب‌وکاری."), L("Find the equivalent level in public ladders before you talk to anyone.", "پیش از صحبت با هر کسی، سطح معادل خود را در نردبان‌های عمومی پیدا کنید.")] },
      { when: L("At the recruiter screen", "در مصاحبه‌ی اولیه"), items: [L("Ask which level the loop targets and what separates it from the next.", "بپرسید مصاحبه‌ها برای کدام سطح است و تفاوت آن با سطح بعد چیست."), L("Share scope in their terms: \"3 EMs, 38 engineers, budget owner\".", "دامنه‌ی اثر را به زبان آن‌ها بگویید: «۳ EM، ۳۸ مهندس، مالک بودجه»."), L("If the target is low, argue now — not after the loop.", "اگر سطح هدف پایین‌تر از انتظار شماست، پیش از شروع مصاحبه‌ها درباره‌ی آن صحبت کنید.")] },
      { when: L("Preparing the loop", "آماده شدن برای مصاحبه‌ها"), items: [L("Prepare 6–10 stories at the target altitude, plus one deep project for the retrospective.", "۶ تا ۱۰ تجربه متناسب با سطح هدف و یک پروژه برای بررسی عمیق در مصاحبه‌ی retrospective آماده کنید."), L("Practise system design at the company's scale.", "طراحی سیستم را در مقیاس آن شرکت تمرین کنید."), L("Rehearse \"I\" versus \"we\"; prepare failures and what you learned.", "تمایز «من» و «ما» را تمرین کنید. شکست‌ها و درس‌هایشان را آماده کنید.")] },
      { when: L("During the loop", "در طول مصاحبه‌ها"), items: [L("Volunteer scope unprompted.", "بدون انتظار برای پرسش مستقیم، دامنه‌ی مسئولیت و اثرگذاری‌تان را توضیح دهید."), L("Drive the design conversation.", "گفت‌وگوی طراحی را هدایت کنید."), L("Keep the same story facts across rounds.", "جزئیات داستان‌ها را در همه‌ی مصاحبه‌ها یکسان نگه دارید.")] },
      { when: L("After a down-level offer", "پس از پیشنهادِ down-level"), items: [L("Do not discuss pay yet.", "هنوز درباره‌ی حقوق صحبت نکنید."), L("Ask for written leveling feedback and offer an extra round.", "بازخورد مکتوب درباره‌ی سطح بخواهید و یک مصاحبه‌ی اضافه پیشنهاد دهید."), L("Bring new evidence or a competing offer at the target level; ask the hiring manager to argue for you.", "شواهد جدید یا پیشنهاد رقیب در سطح هدف ارائه دهید و از hiring manager بخواهید از شما دفاع کند.")] },
      { when: L("If you accept it", "اگر آن را پذیرفتید"), items: [L("Negotiate the top of the band and a sign-on bonus.", "برای بالاترین حقوق در بازه‌ی آن سطح و پاداش شروع همکاری (sign-on bonus) مذاکره کنید."), L("Agree written next-level expectations with your new manager.", "با مدیر جدیدتان بر سر انتظارات سطح بعد توافق کنید و آن‌ها را مکتوب کنید."), L("Do not expect a promotion inside 12 months.", "ظرف ۱۲ ماه انتظار ارتقا نداشته باشید.")] }
    ],
    acceptTitle: L("Should you accept a down-level?", "آیا down-level را بپذیرم؟"),
    acceptIntro: L("Often yes when you are entering a higher tier; often no when you are already in it. Four questions help.", "پذیرش سطح پایین‌تر هنگام رفتن به شرکتی در رده‌ی بالاتر اغلب منطقی است. اگر شرکت فعلی و مقصد هم‌رده باشند، معمولاً دلیل کمتری برای پذیرش آن دارید. این چهار پرسش به تصمیم‌گیری کمک می‌کند."),
    acceptQs: [
      L("Is this your way into a higher-tier company, or are you already in one?", "آیا با این پیشنهاد وارد شرکتی در رده‌ی بالاتر می‌شوید، یا شرکت فعلی و مقصد هم‌رده‌اند؟"),
      L("Is total compensation still a meaningful step up?", "آیا مجموع درآمدتان همچنان گامی معنادار رو به جلوست؟"),
      L("Can you get written next-level expectations and a realistic timeline (expect 12 months or more)?", "آیا می‌توانید انتظارات سطح بعد و زمان‌بندی واقع‌بینانه‌ی آن (۱۲ ماه یا بیشتر) را مکتوب کنید؟"),
      L("Would you be content doing this level's job well for two years?", "آیا از انجام خوب کار این سطح به مدت دو سال راضی خواهید بود؟")
    ],
    upHead: L("Upside", "مزایا"), downHead: L("Downside", "معایب"),
    ups: [L("The brand and learning of a larger company", "اعتبار و یادگیری در یک شرکت بزرگ‌تر"), L("Often still a pay rise overall because of tier differences", "اغلب همچنان افزایش درآمد به دلیل تفاوت رده‌ی شرکت‌ها"), L("Easier ramp-up and room to exceed expectations", "ورود آسان‌تر و فرصت بیشتر برای عملکرد فراتر از انتظارات")],
    downs: [L("The level gap compounds through equity refreshes, bonus percentage and raises", "تفاوت سطح بر سهام، درصد پاداش و افزایش‌های بعدی اثر می‌گذارد و این فاصله در طول زمان بیشتر می‌شود"), L("It sticks: fast promotion usually means you were mis-leveled", "جبران آن زمان می‌برد. ارتقای سریع معمولاً نشانه‌ی تعیین نادرست سطح در زمان استخدام است"), L("If you are already at a top-tier level, it may cost years", "اگر اکنون هم در شرکت‌های رده‌ی بالا کار می‌کنید، ممکن است چند سال از مسیر رشدتان عقب بیفتید")],
    exTitle: L("Worked examples", "بررسی چند نمونه"),
    exIntro: L("Illustrative composites built from public hiring guidance. Open one that looks like you.", "این نمونه‌های فرضی از ترکیب تجربه‌ها و راهنماهای عمومی جذب ساخته شده‌اند. نمونه‌ای را که به شرایط شما نزدیک‌تر است باز کنید."),
    likely: L("Likely outcome", "نتیجه‌ی محتمل"), tactics: L("Tactics", "تاکتیک‌ها"), risks: L("Risks", "ریسک‌ها"),
    next: L("What would you do? Scenarios", "شما چه می‌کردید؟ سناریوها")
  };

  var STORIES = [
    { k: "deadline", n: L("A deadline at risk", "موعد تحویل در خطر"), a: [
      L("Our checkout redesign was slipping two weeks because the payments API wasn't ready. I ==re-sequenced the sprint== so we could build against a mock, ==agreed with the PM to launch without saved cards==, and told stakeholders the new date the same day. We shipped one week late with a clear follow-up. Now I ==surface dependency risks in week one==.",
        "بازطراحی checkout دو هفته عقب افتاده بود، چون API پرداخت آماده نبود. ==ترتیب کارهای sprint را عوض کردم== تا روی یک mock کار کنیم، ==با PM توافق کردم بدون «کارت‌های ذخیره‌شده» منتشر کنیم== و همان روز تاریخ جدید را به ذی‌نفعان اعلام کردم. با یک هفته تأخیر و برنامه‌ی تکمیلی روشن منتشر کردیم. اکنون ==ریسک وابستگی‌ها را در هفته‌ی اول مطرح می‌کنم=="),
      L("Three teams were committed to a Q3 seller-onboarding launch. Two months in I saw the critical path ran through a team whose priorities had just changed. I ==brought the three EMs and the product director together==, ==reframed the goal around seller activation==, and cut scope to the two flows that drove most of it. I ==negotiated two engineers on loan== in exchange for taking part of their on-call. We launched on time and activation rose 18% in the first month. Afterwards I ==added a dependency review to quarterly planning==, and the department adopted it.",
        "سه تیم برای launch فرآیند onboarding فروشندگان در فصل سوم متعهد بودند. دو ماه بعد دیدم مسیر بحرانی از تیمی می‌گذرد که اولویت‌هایش تازه تغییر کرده بود. ==سه EM و Director محصول را دور هم جمع کردم==، ==هدف را حول «فعال‌سازی فروشندگان» بازتعریف کردم== و دامنه را به دو flow که بیشترین اثر را داشتند محدود کردم. ==برای قرض گرفتن دو مهندس مذاکره کردم== و در ازای آن بخشی از بار on-call آن تیم را پذیرفتیم. به‌موقع منتشر کردیم و فعال‌سازی در ماه اول ۱۸٪ رشد کرد. پس از آن ==بازبینی وابستگی‌ها را به برنامه‌ریزی فصلی اضافه کردم== و «بخش» آن را پذیرفت."),
      L("In annual planning it became clear our marketplace org would miss its growth target because onboarding and trust-and-safety optimised for different metrics. I ==realigned the org around one north-star metric==, moved two teams, and ==paused a lower-return initiative to redeploy 15 engineers==. I ==agreed the trade-off with the CFO and the product VP== and set up monthly reviews. We reached 96% of the annual target against a 70% forecast, and ==two other orgs adopted the operating rhythm==.",
        "در برنامه‌ریزی سالانه روشن شد که مجموعه‌ی marketplace به هدف رشد نمی‌رسد، چون تیم‌های onboarding و trust & safety هر کدام metric متفاوتی را بهینه می‌کردند. ==کل مجموعه را حول یک north-star metric هم‌سو کردم==، دو تیم را جابه‌جا کردم و ==یک ابتکار کم‌بازده را متوقف کردم تا ۱۵ مهندس را بازآرایی کنم==. ==این trade-off را با مدیر مالی و VP محصول به توافق رساندم== و بازبینی‌های ماهانه را راه انداختم. در برابر پیش‌بینی ۷۰ درصدی به ۹۶٪ هدف سالانه رسیدیم و ==دو مجموعه‌ی دیگر همین ریتم عملیاتی را پذیرفتند==.")] },
    { k: "rel", n: L("Reliability", "پایداری سرویس"), a: [
      L("I redesigned on-call for my eight-person team: ==pages per week fell 45%==, and we added a post-incident checklist.", "on-call تیم هشت‌نفره‌ام را بازطراحی کردم: ==تعداد هشدارهای هفتگی ۴۵٪ کاهش یافت== و یک checklist پس از incident اضافه کردیم."),
      L("I ==set up a cross-team incident review across four teams==, ==coached two EMs to run it==, and made SLOs part of planning. SEV1s fell by a third over two quarters.", "==یک incident review فراتیمی برای چهار تیم راه انداختم==، ==دو EM را برای اداره‌ی آن coach کردم== و SLOها را بخشی از برنامه‌ریزی کردم. تعداد SEV1ها در دو فصل یک‌سوم کاهش یافت."),
      L("I made reliability an ==org-wide investment==: a platform team ==funded from six headcount I reallocated==, SLO-based planning across the org, and a ==board-level metric==. It cut churn tied to outages.", "پایداری را به یک ==سرمایه‌گذاری در سطح کل سازمان== تبدیل کردم: تشکیل یک تیم پلتفرم ==با انتقال شش موقعیت شغلی از تیم‌های دیگر==، برنامه‌ریزی مبتنی بر SLO در کل سازمان و یک ==metric برای گزارش به هیئت‌مدیره==. ریزش مشتریان ناشی از قطعی‌ها کاهش یافت.")] },
    { k: "people", n: L("People", "افراد"), a: [
      L("I coached an underperformer back to meeting expectations, and ==promoted two engineers==.", "یک فرد کم‌عملکرد را تا رسیدن به سطح انتظارات coach کردم و ==دو مهندس را ارتقا دادم=="),
      L("I ==coached a struggling first-time EM==, ==hired two EMs==, and set up calibration across teams.", "==یک EM تازه‌کار را که در انجام مسئولیتش مشکل داشت coach کردم==، ==دو EM جذب کردم== و کالیبراسیون بین‌تیمی را راه انداختم."),
      L("I ==built a leadership bench with a successor for every EM==, ==reorganised 60 people from component teams to domain teams==, and replaced a manager who was not working out.", "==راهبران آینده را پرورش دادم و برای هر EM جانشین مشخص کردم==، ==ساختار مجموعه‌ی ۶۰ نفره را از تیم‌های مبتنی بر اجزای فنی به تیم‌های دامنه‌محور تغییر دادم== و مدیری را که عملکرد مناسبی نداشت جایگزین کردم.")] },
    { k: "strat", n: L("Strategy", "استراتژی"), a: [
      L("I negotiated the team roadmap with the PM and ==cut scope to hit the date==.", "نقشه‌ی راه تیم را با PM مذاکره کردم و ==دامنه را برای رسیدن به موعد کاهش دادم=="),
      L("I ==set a 12-month roadmap across teams== and ==stopped a low-return project to free capacity==.", "==یک نقشه‌ی راه ۱۲ ماهه برای چند تیم تعیین کردم== و ==یک پروژه‌ی کم‌بازده را متوقف کردم تا ظرفیت آزاد شود=="),
      L("I ==set a two-to-three-year technical strategy==, ==made the business case in cost and revenue terms==, and ==stopped a misaligned company initiative==.", "==یک استراتژی فنی دو تا سه ساله تعیین کردم==، ==پرونده‌ی کسب‌وکاری آن را به زبان هزینه و درآمد ارائه کردم== و ==یک ابتکار ناهم‌سو در سطح سازمان را متوقف کردم==.")] }
  ];
  var ALT_LEVELS = [["M2", L("EM altitude", "روایت در سطح EM")], ["M4", L("Senior EM altitude", "روایت در سطح Senior EM")], ["M5", L("Director altitude", "روایت در سطح Director")]];

  var EXAMPLES = [
    { t: L("\"Head of Engineering\" at a 30-person startup, applying to big tech", "«Head of Engineering» در استارتاپی ۳۰ نفره، متقاضی یک شرکت بزرگ"),
      scope: L("12 engineers and two informal tech leads; reports to the CEO; owns hiring, process, on-call and the cloud budget.", "۱۲ مهندس و دو راهبر فنی غیررسمی، گزارش به مدیرعامل، مالک جذب، فرآیندها، on-call و بودجه‌ی زیرساخت ابری."),
      likely: L("A first-line EM offer (for example Meta M1 or Amazon L6 SDM): not yet a manager of managers, and systems at startup scale.", "پیشنهاد نقش مدیر مستقیم تیم (مثلاً M1 در Meta یا L6 SDM در Amazon): هنوز تجربه‌ی مدیریت مدیران ندارد و سیستم‌ها در مقیاس استارتاپ‌اند."),
      risks: [L("The title reads as inflated", "عنوان متورم به نظر می‌رسد"), L("No calibration or performance-cycle experience at scale", "نبود تجربه‌ی کالیبراسیون و چرخه‌ی ارزیابی در مقیاس بزرگ"), L("Design practice at startup scale", "تجربه‌ی طراحی در مقیاس استارتاپ")],
      tactics: [L("Present yourself as a first-line manager with unusual breadth: CEO exposure, growing the team from 3 to 12, owning a budget", "خودتان را مدیر مستقیم تیم با مسئولیت‌هایی گسترده‌تر از معمول معرفی کنید: تعامل مستقیم با مدیرعامل، رشد تیم از ۳ به ۱۲ نفر و مسئولیت بودجه"), L("Push for the top of the band and a sign-on bonus rather than the title", "برای بالاترین حقوق در بازه‌ی آن سطح و پاداش شروع همکاری مذاکره کنید"), L("Or target growth-stage companies where a Director title matches the scope", "یا شرکت‌های در حال رشدی را هدف بگیرید که عنوان Director در آن‌ها با دامنه‌ی اثر شما هم‌خوان است")] },
    { t: L("Senior EM at a mid-size company (3 EMs, ~35 people) targeting Director at big tech", "Senior EM در شرکتی متوسط (۳ EM، حدود ۳۵ نفر)، با هدف Director در یک شرکت بزرگ"),
      scope: L("Manages managers; owns a roadmap across three teams; influences but does not own the budget.", "مدیرِ مدیران است و مسئولیت نقشه‌ی راه سه تیم را دارد. در تصمیم‌های بودجه اثر می‌گذارد، اما مسئولیت نهایی آن را ندارد."),
      likely: L("A Senior EM offer (for example Meta M2 or Google L7). At big tech, Director usually means a larger org of managers of managers, a multi-year strategy and budget ownership.", "پیشنهاد Senior EM (مثلاً M2 در Meta یا L7 در Google). در شرکت‌های بزرگ، Director معمولاً مجموعه‌ای بزرگ‌تر با چند مدیرِ مدیران، استراتژی چندساله و مسئولیت بودجه را راهبری می‌کند."),
      risks: [L("Manager-level stories in a director loop", "داستان‌های سطح مدیر در مصاحبه‌های Director"), L("No evidence of org design or stopping initiatives", "نبود شواهد طراحی سازمان یا متوقف کردن ابتکارات")],
      tactics: [L("Lead with strategy and org-design stories: a reorg, a headcount business case, shutting down an initiative, growing EMs", "با داستان‌های استراتژی و طراحی سازمان شروع کنید: یک بازسازمان‌دهی، پرونده‌ی کسب‌وکاری headcount، توقف یک ابتکار، پرورش EMها"), L("Ask what evidence would support a Director level, and request a strategy round", "بپرسید چه شواهدی سطح Director را پشتیبانی می‌کند و یک مصاحبه‌ی استراتژی درخواست کنید"), L("If you accept Senior EM, get the top of the band and a written gap analysis to Director", "اگر Senior EM را پذیرفتید، بالاترین حقوق در بازه‌ی آن سطح و توضیح مکتوبِ فاصله‌ی خود تا Director را بگیرید")] },
    { t: L("EM with 12 direct reports and no managers, targeting Senior EM", "EM با ۱۲ نفر زیرمجموعه‌ی مستقیم و بدون مدیر، با هدف Senior EM"),
      scope: L("One large team, two informal sub-teams, strong delivery record.", "یک تیم بزرگ، دو زیرتیم غیررسمی و سابقه‌ی delivery قوی."),
      likely: L("A strong EM-level offer. Many ladders define Senior EM or Director as managing managers; twelve ICs reads as a large single team.", "یک پیشنهاد مناسب در سطح EM. بسیاری از نردبان‌ها Senior EM یا Director را با مدیریت مدیران تعریف می‌کنند. مدیریت دوازده IC همچنان مدیریت یک تیم بزرگ است."),
      risks: [L("Claiming manager-of-managers scope you have not held", "ادعای دامنه‌ی مدیرِ مدیران که تجربه‌اش را نداشته‌اید")],
      tactics: [L("Show leading of leads: tech leads you coached, sub-teams you designed", "راهبری راهبران را نشان دهید: راهبران فنی که coach کردید و زیرتیم‌هایی که طراحی کردید"), L("Often the realistic path: join as a top-of-band EM, grow a lead into a manager, and earn the promotion inside", "مسیر واقع‌بینانه اغلب این است: با بالاترین حقوق در بازه‌ی EM وارد شوید، یک راهبر را برای مدیریت آماده کنید و درون سازمان ارتقا بگیرید"), L("First manager-of-managers roles often go to internal candidates, so internal growth may be faster here", "نخستین نقش‌های مدیرِ مدیران اغلب به کاندیداهای داخلی می‌رسد. پس رشد داخلی در این حالت ممکن است سریع‌تر باشد")] },
    { t: L("Ex-Staff IC applying for EM roles", "IC سابق در سطح Staff، متقاضی نقش EM"),
      scope: L("Deep technical leadership across teams; mentoring; no formal reports.", "راهبری فنی عمیق در سطح چند تیم، mentorship، بدون زیرمجموعه‌ی رسمی."),
      likely: L("Level parity often exists (Meta M1 ≈ E6), but a new manager is a risk: expect a TLM role, a smaller team, or a lower management level.", "هم‌ترازی سطح اغلب وجود دارد (Meta M1 ≈ E6)، اما برای کسی که نخستین تجربه‌ی مدیریتی خود را آغاز می‌کند، ممکن است نقش TLM، تیم کوچک‌تر یا سطح مدیریتی پایین‌تری پیشنهاد شود."),
      risks: [L("The people-management round", "مصاحبه‌ی مدیریت انسانی"), L("Stories that are all technical", "داستان‌هایی که همه فنی‌اند")],
      tactics: [L("Gather people-leadership evidence: mentoring, running hiring loops, input into reviews, leading 5–8 engineers as tech lead", "شواهد راهبری انسانی جمع کنید: mentorship، اداره‌ی فرآیند جذب، مشارکت در ارزیابی‌ها، راهبری ۵ تا ۸ مهندس به عنوان راهبر فنی"), L("Consider switching to management internally first, then moving with a track record", "در نظر بگیرید ابتدا درون سازمان به مدیریت منتقل شوید و سپس با سابقه‌ی مدیریتی جابه‌جا شوید"), L("Or negotiate a TLM role at Staff-equivalent level", "یا برای نقش TLM در سطح هم‌تراز Staff مذاکره کنید")] }
  ];

  var calState = null, altTopic = "deadline";

  function calDefaults() { var s = {}; C.fields.forEach(function (f) { s[f.id] = f.def; }); return s; }
  function calCompute(s) {
    var val = function (id) { var f = C.fields.filter(function (x) { return x.id === id; })[0]; return f.opts[s[id]][1]; };
    var parts = [val("people"), val("mgrs"), val("horizon"), val("budget"), val("decisions")].sort(function (a, b) { return a - b; });
    var score = parts[2];
    var noMgr = s.mgrs === 0;
    if (noMgr) score = Math.min(score, 2.5);
    if (s.mgrs >= 2) score = Math.max(score, 3.5);
    score = Math.max(1, Math.min(5, score + val("tier")));
    var lo = Math.floor(score), hi = Math.ceil(score);
    if (score - lo < 0.25) hi = lo;
    if (hi - score < 0.25) lo = hi;
    var diff = val("title") - score;
    return { lo: lo, hi: hi, diff: diff, noMgr: noMgr };
  }
  function calHTML() {
    if (!calState) calState = G.store.get("cal.v1", null) || calDefaults();
    var h = '<div class="two-col"><form class="card form-grid" id="calForm" style="grid-template-columns:minmax(0,1fr)" autocomplete="off">';
    C.fields.forEach(function (f) {
      h += '<div class="field"><label for="cal-' + f.id + '">' + t(f.label) + '</label><select id="cal-' + f.id + '" data-cal="' + f.id + '">' +
        f.opts.map(function (o, i) { return '<option value="' + i + '"' + (calState[f.id] === i ? " selected" : "") + ">" + t(o[0]) + "</option>"; }).join("") + "</select></div>";
    });
    h += '</form><div id="calOut">' + calResult() + "</div></div>";
    return h;
  }
  function calResult() {
    var r = calCompute(calState);
    var ids = G.LEVELS;
    var lo = ids[r.lo], hi = ids[r.hi];
    var range = lo === hi ? UI.code(lo) : UI.code(lo) + " – " + UI.code(hi);
    var names = lo === hi ? t(G.data.levelById[lo].name) : t(G.data.levelById[lo].name) + " – " + t(G.data.levelById[hi].name);
    var col = r.hi <= 2 ? 1 : r.hi === 3 ? 2 : 3;
    var probes = C.signals.map(function (row) { return "<li><b>" + t(row[0]) + ":</b> " + t(row[col]) + "</li>"; }).join("");
    var msg = r.diff >= 1 ? UI.callout("trap", null, C.calAbove) : r.diff <= -1 ? UI.callout("tip", null, C.calBelow) : UI.callout("info", null, C.calMatch);
    return '<div class="card raised" aria-live="polite"><div class="muted" style="font-size:var(--fs-s)">' + t(C.calResult) + '</div><div style="display:flex;gap:10px;align-items:center;flex-wrap:wrap;font-size:1.6rem;font-weight:700">' + range + '</div><div style="font-weight:600">' + names + "</div>" + msg +
      (r.noMgr ? '<p class="muted" style="font-size:var(--fs-s)">' + t(C.calNoMgr) + "</p>" : "") +
      '<h4 style="margin-top:4px">' + t(C.calProbe) + '</h4><ul class="bullets" style="font-size:var(--fs-s)">' + probes + '</ul><p class="tbl-note">' + t(C.calDisclaimer) + "</p></div>";
  }

  function altHTML() {
    var s = STORIES.filter(function (x) { return x.k === altTopic; })[0];
    var h = '<div class="pill-tabs" role="tablist">' + STORIES.map(function (x) { return '<button role="tab" data-alt="' + x.k + '" aria-selected="' + (x.k === altTopic) + '">' + t(x.n) + "</button>"; }).join("") + "</div>";
    h += '<div class="grid g3" style="margin-top:14px">' + s.a.map(function (a, i) {
      return '<div class="answer"><div class="chips">' + UI.code(ALT_LEVELS[i][0]) + '<span class="chip">' + t(ALT_LEVELS[i][1]) + '</span></div><p class="ans-text">' + md(a) + "</p></div>";
    }).join("") + "</div>";
    return h;
  }

  function render() {
    var h = UI.pageHead({ eyebrow: C.eyebrow, icon: "door", title: C.title, lede: C.lede, tldr: C.tldr, jump: C.jump });
    h += UI.section({ id: "decided", title: C.decidedTitle, intro: C.decidedIntro, body: UI.flow(C.steps) });
    h += UI.section({ id: "signals", title: C.signalsTitle, intro: C.signalsIntro, body: UI.table(C.signalsHead.map(t), C.signals.map(function (r) { return r.map(t); }), { rowHeads: true, note: C.signalsSrc }) });
    h += UI.section({ id: "loops", title: C.loopsTitle, intro: C.loopsIntro, body: UI.table(C.loopsHead.map(t), C.loops.map(function (r) { return r.map(t); }), { rowHeads: true, note: C.loopsSrc }) });
    h += UI.section({ id: "calibrator", title: C.calTitle, intro: C.calIntro, body: '<div id="calBox">' + calHTML() + "</div>" });
    h += UI.section({ id: "altitude", title: C.altTitle, intro: C.altIntro, body: '<div id="altBox">' + altHTML() + "</div>" + UI.callout("tip", null, C.altRule) + '<p class="tbl-note">' + t(C.altNote) + "</p>" });
    h += UI.section({ id: "causes", title: C.causesTitle, body:
      '<div class="stat-tiles">' + C.stats.map(function (s) { return '<div class="stat-tile"><span class="v">' + t(s.v) + '</span><span class="l">' + t(s.l) + '</span><span class="s">' + t(s.s) + "</span></div>"; }).join("") + "</div>" +
      '<div class="two-col"><div class="card"><h3>' + icon("layers", "inline-icon") + " " + t(C.structural) + "</h3>" + UI.list(C.structuralList) + '</div><div class="card"><h3>' + icon("tool", "inline-icon") + " " + t(C.fixable) + "</h3>" + UI.list(C.fixableList) + "</div></div>" });
    h += UI.section({ id: "playbook", title: C.playTitle, body: '<div class="phases">' + C.play.map(function (p) { return '<div class="phase"><span class="ph-when">' + t(p.when) + "</span>" + UI.checklist(p.items, "dot") + "</div>"; }).join("") + "</div>" });
    h += UI.section({ id: "accept", title: C.acceptTitle, intro: C.acceptIntro, body:
      '<div class="two-col"><div class="card"><ol class="bullets">' + C.acceptQs.map(function (q) { return "<li>" + t(q) + "</li>"; }).join("") + "</ol></div>" +
      UI.table([t(C.upHead), t(C.downHead)], C.ups.map(function (u, i) { return [t(u), t(C.downs[i])]; })) + "</div>" });
    h += UI.section({ id: "examples", title: C.exTitle, intro: C.exIntro, body: EXAMPLES.map(function (e, i) {
      return UI.acc(e.t, '<p class="muted">' + t(e.scope) + "</p>" + '<p><b>' + t(C.likely) + ":</b> " + t(e.likely) + '</p><div class="two-col"><div><b class="tag-bad">' + t(C.risks) + "</b>" + UI.list(e.risks) + '</div><div><b class="tag-good">' + t(C.tactics) + "</b>" + UI.list(e.tactics) + "</div></div>", { id: "ex-" + i });
    }).join("") });
    h += UI.next("scenarios", C.next);
    return h;
  }

  G.views.hiring = {
    lede: C.lede,
    render: render,
    mount: function (root) {
      root.addEventListener("change", function (e) {
        var s = e.target.closest("[data-cal]");
        if (!s) return;
        calState[s.getAttribute("data-cal")] = +s.value;
        G.store.set("cal.v1", calState);
        G.$("#calOut", root).innerHTML = calResult();
      });
      root.addEventListener("click", function (e) {
        var b = e.target.closest("[data-alt]");
        if (!b) return;
        altTopic = b.getAttribute("data-alt");
        G.$("#altBox", root).innerHTML = altHTML();
        var nb = G.$('[data-alt="' + altTopic + '"]', root); if (nb) nb.focus();
      });
    },
    index: function () {
      return [
        { type: "section", title: t(C.decidedTitle), snip: t(C.decidedIntro), href: "#/hiring/decided", extra: "recruiter screen hiring committee bar raiser level offer" },
        { type: "section", title: t(C.signalsTitle), snip: t(C.signalsIntro), href: "#/hiring/signals" },
        { type: "section", title: t(C.loopsTitle), snip: t(C.loopsIntro), href: "#/hiring/loops", extra: "Meta Google Amazon Microsoft Apple Stripe Netflix Spotify Booking interview مصاحبه" },
        { type: "tool", title: t(C.calTitle), snip: t(C.calIntro), href: "#/hiring/calibrator", extra: "title inflation scope estimate تخمین" },
        { type: "tool", title: t(C.altTitle), snip: t(C.altIntro), href: "#/hiring/altitude", extra: "STAR behavioral story answers داستان مصاحبه رفتاری" },
        { type: "section", title: t(C.causesTitle), snip: G.plain(C.fixableList[0]), href: "#/hiring/causes", extra: "down-level downlevel" },
        { type: "section", title: t(C.playTitle), snip: G.plain(C.play[1].items[0]), href: "#/hiring/playbook", extra: "negotiate level negotiation مذاکره" },
        { type: "section", title: t(C.acceptTitle), snip: t(C.acceptIntro), href: "#/hiring/accept" }
      ].concat(EXAMPLES.map(function (e, i) { return { type: "section", title: t(e.t), snip: t(e.likely), href: "#/hiring/ex-" + i }; }));
    }
  };
})();

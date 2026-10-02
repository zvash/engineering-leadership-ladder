(function () {
  "use strict";
  var G = window.ELG,
    L = G.L,
    t = G.t,
    md = G.md,
    icon = G.icon,
    UI = G.ui;

  var C = {
    eyebrow: L("Reference", "مرجع"),
    title: L("The landscape in 2026", "چشم‌انداز ۲۰۲۶"),
    lede: L(
      "Between 2023 and 2026 the industry removed management layers, widened spans and began to expect AI fluency from everyone. Here is what happened, what it means at each level, and how to stay valuable.",
      "میان سال‌های ۲۰۲۳ تا ۲۰۲۶، صنعت لایه‌های مدیریتی را کاهش داد، دامنه‌ی کنترل را گسترش داد و تسلط بر هوش مصنوعی را از همه انتظار کشید. در این صفحه می‌بینید چه اتفاقی افتاد، معنای آن برای هر سطح چیست و چگونه ارزشمند بمانید.",
    ),
    tldr: [
      L(
        "**Fewer, wider management seats.** Removing layers became the standard framing of large layoffs.",
        "**صندلی‌های مدیریتی کمتر و بزرگ‌تر.** حذف لایه‌های مدیریتی به توجیه رایج تعدیل‌های بزرگ تبدیل شد.",
      ),
      L(
        "**AI use became a measured expectation**, and coordination-only work is the first to be cut.",
        "**استفاده از هوش مصنوعی به انتظاری سنجیدنی تبدیل شد** و کار صرفاً هماهنگی، اولین کاری است که حذف می‌شود.",
      ),
      L(
        "Managers are under strain: Gallup's global **manager engagement fell to 22%** in 2025.",
        "مدیران تحت فشارند: طبق Gallup، **تعلق شغلی مدیران** در جهان در سال ۲۰۲۵ به **۲۲٪** رسید.",
      ),
    ],
    jump: [
      { href: "numbers", label: L("Key numbers", "اعداد کلیدی") },
      { href: "timeline", label: L("Timeline", "خط زمانی") },
      { href: "charts", label: L("Two charts", "دو نمودار") },
      { href: "means", label: L("What it means for you", "معنای آن برای شما") },
      { href: "valuable", label: L("Stay valuable", "ارزشمند ماندن") },
    ],
    numbersTitle: L("Key numbers", "اعداد کلیدی"),
    timelineTitle: L(
      "What happened, 2023–2026",
      "چه اتفاقی افتاد؛ ۲۰۲۳ تا ۲۰۲۶",
    ),
    timelineIntro: L(
      "Dated events with sources. Items marked as reported come from press or secondary write-ups.",
      "رویدادهای تاریخ‌دار همراه با منبع. مواردی که «گزارش‌شده» علامت خورده‌اند، از رسانه‌ها یا منابع ثانویه آمده‌اند.",
    ),
    cats: {
      all: L("All", "همه"),
      flat: L("Flattening", "کاهش لایه‌ها"),
      ai: L("AI expectations", "انتظارات هوش مصنوعی"),
      data: L("Research & data", "پژوهش و داده"),
    },
    reported: L("reported", "گزارش‌شده"),
    chartsTitle: L(
      "Two charts worth knowing",
      "دو نمودار که ارزش دانستن دارند",
    ),
    engTitle: L(
      "Managers are losing engagement faster than everyone else",
      "تعلق شغلی مدیران سریع‌تر از دیگران کاهش می‌یابد",
    ),
    engSub: L(
      "Share of employees engaged at work, worldwide, by data year",
      "درصد کارکنان درگیر و متعهد در کار، در سطح جهان، بر اساس سال داده",
    ),
    engCap: L(
      "Source: Gallup, State of the Global Workplace (2023–2026 reports). The 2022 manager value is derived from Gallup's reported nine-point drop since 2022. When managers disengage, their teams follow — Gallup attributes at least 70% of the variance in team engagement to the manager.",
      "منبع: Gallup، گزارش‌های State of the Global Workplace (۲۰۲۳ تا ۲۰۲۶). مقدار سال ۲۰۲۲ برای مدیران از افت نُه‌واحدی گزارش‌شده توسط Gallup از سال ۲۰۲۲ استخراج شده است. وقتی تعلق شغلی مدیران کم می‌شود، تیم‌هایشان هم به دنبال آن می‌روند؛ Gallup دست‌کم ۷۰٪ از تغییرات تعلق شغلی تیم را به مدیر نسبت می‌دهد.",
    ),
    managers: L("Managers", "مدیران"),
    everyone: L("All employees", "همه‌ی کارکنان"),
    year: L("Data year", "سال داده"),
    doraTitle: L(
      "AI is an amplifier, not a fix",
      "هوش مصنوعی تقویت‌کننده است، نه راه‌حل",
    ),
    doraSub: L(
      "Estimated change associated with a 25% increase in AI adoption (DORA 2024)",
      "تغییر برآوردشده همراه با ۲۵٪ افزایش در به‌کارگیری هوش مصنوعی (DORA ۲۰۲۴)",
    ),
    doraCap: L(
      "Source: DORA, Accelerate State of DevOps 2024. In 2025 DORA reported that about 90% of developers use AI at work and that AI now correlates positively with throughput but still negatively with stability: it magnifies a team's existing strengths and weaknesses.",
      "منبع: DORA، گزارش Accelerate State of DevOps ۲۰۲۴. DORA در سال ۲۰۲۵ گزارش داد حدود ۹۰٪ توسعه‌دهندگان در کار از هوش مصنوعی استفاده می‌کنند و هوش مصنوعی اکنون با توان عملیاتی رابطه‌ی مثبت، اما همچنان با پایداری رابطه‌ی منفی دارد: نقاط قوت و ضعف موجود تیم را بزرگ‌تر می‌کند.",
    ),
    meansTitle: L("What it means for you", "معنای آن برای شما"),
    valuableTitle: L("How to stay valuable", "چگونه ارزشمند بمانیم"),
    caveat: L(
      "Evidence is thinner than the headlines. Several figures come from press reports or single sources, and Gartner's number is a forecast. Read the trend as thinning and reshaping, not disappearance — and date-stamp any claim you repeat.",
      "شواهد از تیترها کم‌رنگ‌ترند. چند عدد از گزارش‌های رسانه‌ای یا منابع واحد آمده‌اند و عدد Gartner یک پیش‌بینی است. این روند را «کم‌شدن و تغییر شکل» بخوانید، نه «حذف شدن»؛ و هر ادعایی را که تکرار می‌کنید با تاریخ بیان کنید.",
    ),
    next: L("Back to the start", "بازگشت به صفحه‌ی اول"),
  };

  var STATS = [
    {
      v: L("35%", "۳۵٪"),
      l: L(
        "fewer Google managers with fewer than three reports than a year earlier",
        "کاهش مدیران گوگل با کمتر از سه نفر زیرمجموعه، نسبت به یک سال قبل",
      ),
      s: L("Company all-hands, Aug 2025", "جلسه‌ی عمومی شرکت، اوت ۲۰۲۵"),
    },
    {
      v: L("+15%", "+۱۵٪"),
      l: L(
        "Amazon's target for individual contributors per manager, by end of Q1 2025",
        "هدف آمازون برای افزایش نسبت IC به مدیر تا پایان فصل اول ۲۰۲۵",
      ),
      s: L("CEO memo, Sep 2024", "یادداشت مدیرعامل، سپتامبر ۲۰۲۴"),
    },
    {
      v: L("~50 : 1", "حدود ۵۰ به ۱"),
      l: L(
        "engineers per manager on a new Meta applied-AI team",
        "مهندس به ازای هر مدیر در یک تیم جدید هوش مصنوعی کاربردی در Meta",
      ),
      s: L("Reported, Mar 2026", "گزارش‌شده، مارس ۲۰۲۶"),
    },
    {
      v: L("41%", "۴۱٪"),
      l: L(
        "of 15,000 professionals say their employer trimmed management layers in the past year",
        "از ۱۵ هزار متخصص می‌گویند کارفرمایشان در سال گذشته لایه‌های مدیریتی را کاهش داده است",
      ),
      s: L(
        "Korn Ferry survey, reported Jun 2026",
        "نظرسنجی Korn Ferry، گزارش‌شده در ژوئن ۲۰۲۶",
      ),
    },
    {
      v: L("22%", "۲۲٪"),
      l: L(
        "of managers worldwide were engaged in 2025, down from 30% in 2023",
        "از مدیران در جهان در سال ۲۰۲۵ درگیر و متعهد بودند؛ در مقایسه با ۳۰٪ در ۲۰۲۳",
      ),
      s: L("Gallup, 2026 report", "Gallup، گزارش ۲۰۲۶"),
    },
  ];

  /* c: flat | ai | data ; rep: reported/secondary */
  var TL = [
    {
      d: L("14 Mar 2023", "۱۴ مارس ۲۰۲۳"),
      c: "flat",
      major: true,
      t: L('Meta\'s "Year of Efficiency"', "«سال کارایی» در Meta"),
      b: L(
        "A flatter structure: layers of management removed, many managers asked to become ICs, and roughly 10,000 roles cut.",
        "ساختاری تخت‌تر: حذف چند لایه‌ی مدیریتی، درخواست از بسیاری از مدیران برای بازگشت به نقش IC و حذف حدود ۱۰ هزار موقعیت.",
      ),
      s: "about.fb.com · SEC exhibit",
    },
    {
      d: L("2023", "۲۰۲۳"),
      c: "data",
      rep: true,
      t: L(
        "Middle managers become a bigger share of layoffs",
        "سهم مدیران میانی از تعدیل‌ها افزایش می‌یابد",
      ),
      b: L(
        "Live Data Technologies put middle managers at about 32% of 2023 layoffs, up from about 20% in 2019.",
        "Live Data Technologies سهم مدیران میانی از تعدیل‌های ۲۰۲۳ را حدود ۳۲٪ برآورد کرد؛ در مقایسه با حدود ۲۰٪ در سال ۲۰۱۹.",
      ),
      s: "Entrepreneur (secondary)",
    },
    {
      d: L("16 Sep 2024", "۱۶ سپتامبر ۲۰۲۴"),
      c: "flat",
      major: true,
      t: L(
        "Amazon: at least 15% more ICs per manager",
        "Amazon: دست‌کم ۱۵٪ IC بیشتر به ازای هر مدیر",
      ),
      b: L(
        "The CEO asked every org to raise the ratio by the end of Q1 2025, remove layers, and report unnecessary process to a new 'bureaucracy mailbox'.",
        "مدیرعامل از همه‌ی واحدها خواست تا پایان فصل اول ۲۰۲۵ این نسبت را افزایش دهند، لایه‌ها را حذف کنند و فرآیندهای غیرضروری را به یک «صندوق بوروکراسی» گزارش دهند.",
      ),
      s: "aboutamazon.com",
    },
    {
      d: L("22 Oct 2024", "۲۲ اکتبر ۲۰۲۴"),
      c: "data",
      t: L(
        "Gartner forecasts AI-driven flattening",
        "Gartner کاهش لایه‌ها با هوش مصنوعی را پیش‌بینی می‌کند",
      ),
      b: L(
        "Through 2026, 20% of organisations will use AI to flatten their structure, cutting more than half of current middle-management roles — while warning of overloaded managers and broken junior mentoring.",
        "تا پایان ۲۰۲۶، ۲۰٪ سازمان‌ها با هوش مصنوعی ساختار خود را تخت‌تر می‌کنند و بیش از نیمی از موقعیت‌های مدیریت میانی فعلی را حذف می‌کنند؛ همراه با هشدار درباره‌ی فشار بیش از حد بر مدیران و آسیب به mentorship نیروهای تازه‌کار.",
      ),
      s: "gartner.com",
    },
    {
      d: L("23 Oct 2024", "۲۳ اکتبر ۲۰۲۴"),
      c: "data",
      t: L(
        "DORA 2024: more AI, less stability",
        "DORA ۲۰۲۴: هوش مصنوعی بیشتر، پایداری کمتر",
      ),
      b: L(
        "Higher AI adoption was associated with better documentation and code quality, but lower delivery throughput and stability.",
        "به‌کارگیری بیشتر هوش مصنوعی با بهبود مستندات و کیفیت کد، اما کاهش توان عملیاتی و پایداری delivery همراه بود.",
      ),
      s: "dora.dev",
    },
    {
      d: L("7 Apr 2025", "۷ آوریل ۲۰۲۵"),
      c: "ai",
      major: true,
      t: L(
        "Shopify: reflexive AI use is a baseline expectation",
        "Shopify: استفاده‌ی بی‌درنگ از هوش مصنوعی، انتظار پایه است",
      ),
      b: L(
        "The CEO's memo said AI use would be part of performance reviews, and teams must show why AI cannot do the work before asking for more headcount.",
        "یادداشت مدیرعامل اعلام کرد استفاده از هوش مصنوعی بخشی از ارزیابی عملکرد خواهد بود و تیم‌ها پیش از درخواست headcount بیشتر باید نشان دهند چرا هوش مصنوعی نمی‌تواند آن کار را انجام دهد.",
      ),
      s: "x.com/tobi",
    },
    {
      d: L("Late Apr 2025", "اواخر آوریل ۲۰۲۵"),
      c: "ai",
      t: L('Duolingo goes "AI-first"', "Duolingo «هوش مصنوعی‌محور» می‌شود"),
      b: L(
        "AI use to weigh in hiring and reviews, and headcount only after automating what can be automated. The company softened its stance about a month later after backlash.",
        "استفاده از هوش مصنوعی در جذب و ارزیابی وزن پیدا کرد و headcount فقط پس از خودکارسازی کارهای قابل خودکارسازی. شرکت حدود یک ماه بعد، پس از واکنش‌های منفی، موضعش را تعدیل کرد.",
      ),
      s: "Entrepreneur",
    },
    {
      d: L("May 2025", "مه ۲۰۲۵"),
      c: "flat",
      rep: true,
      t: L(
        "Microsoft cuts about 6,000 roles, citing fewer layers",
        "Microsoft حدود ۶ هزار موقعیت را با استناد به کاهش لایه‌ها حذف می‌کند",
      ),
      b: L(
        "Leadership framed the year's cuts as reducing management layers and widening spans.",
        "مدیران ارشد تعدیل‌های آن سال را کاهش لایه‌های مدیریتی و گسترش دامنه‌ی کنترل توصیف کردند.",
      ),
      s: "Business Insider (reported)",
    },
    {
      d: L("17 Jun 2025", "۱۷ ژوئن ۲۰۲۵"),
      c: "ai",
      t: L(
        "Amazon: AI will shrink the corporate workforce",
        "Amazon: هوش مصنوعی نیروی کار ستادی را کوچک می‌کند",
      ),
      b: L(
        "The CEO told staff that generative AI and agents would reduce the total corporate workforce over the coming years.",
        "مدیرعامل به کارکنان گفت هوش مصنوعی مولد و agentها در سال‌های آینده کل نیروی کار ستادی را کاهش خواهند داد.",
      ),
      s: "CNBC",
    },
    {
      d: L("Jun 2025", "ژوئن ۲۰۲۵"),
      c: "ai",
      rep: true,
      t: L(
        'Microsoft developer division: AI use is "no longer optional"',
        "بخش توسعه‌دهندگان Microsoft: استفاده از هوش مصنوعی «دیگر اختیاری نیست»",
      ),
      b: L(
        "An internal memo reportedly asked managers to weigh AI use in performance reviews.",
        "طبق گزارش‌ها، یک یادداشت داخلی از مدیران خواست استفاده از هوش مصنوعی را در ارزیابی عملکرد لحاظ کنند.",
      ),
      s: "Business Today (secondary)",
    },
    {
      d: L("2 Jul 2025", "۲ ژوئیه ۲۰۲۵"),
      c: "flat",
      t: L(
        "Microsoft lays off about 9,000 more",
        "Microsoft حدود ۹ هزار نفر دیگر را تعدیل می‌کند",
      ),
      b: L(
        "More than 15,000 roles cut in 2025, alongside the stated goal of fewer layers.",
        "بیش از ۱۵ هزار موقعیت در سال ۲۰۲۵ حذف شد، هم‌زمان با هدف اعلام‌شده‌ی کاهش لایه‌ها.",
      ),
      s: "Fortune",
    },
    {
      d: L("24 Jul 2025", "۲۴ ژوئیه ۲۰۲۵"),
      c: "flat",
      t: L(
        "Intel cuts about 15% of its workforce",
        "Intel حدود ۱۵٪ نیروی کارش را کاهش می‌دهد",
      ),
      b: L(
        "More than 25,000 jobs; secondary coverage reported that about half of management layers were removed.",
        "بیش از ۲۵ هزار شغل؛ منابع ثانویه گزارش دادند حدود نیمی از لایه‌های مدیریتی حذف شد.",
      ),
      s: "Fortune · Calcalist (layers, secondary)",
    },
    {
      d: L("27 Aug 2025", "۲۷ اوت ۲۰۲۵"),
      c: "flat",
      major: true,
      t: L(
        "Google: 35% fewer managers of small teams",
        "Google: ۳۵٪ مدیر کمتر برای تیم‌های کوچک",
      ),
      b: L(
        "Google said it had 35% fewer managers with fewer than three reports than a year before; many moved into IC roles.",
        "گوگل اعلام کرد نسبت به یک سال قبل، ۳۵٪ مدیر کمتر با کمتر از سه نفر زیرمجموعه دارد؛ بسیاری از آن‌ها به نقش IC منتقل شدند.",
      ),
      s: "NBC News",
    },
    {
      d: L("23 Sep 2025", "۲۳ سپتامبر ۲۰۲۵"),
      c: "data",
      t: L(
        "DORA 2025: AI is an amplifier",
        "DORA ۲۰۲۵: هوش مصنوعی یک تقویت‌کننده است",
      ),
      b: L(
        "About 90% of developers use AI at work; roughly 30% have little or no trust in AI-generated code. AI amplifies existing strengths and weaknesses.",
        "حدود ۹۰٪ توسعه‌دهندگان در کار از هوش مصنوعی استفاده می‌کنند و حدود ۳۰٪ اعتماد کمی به کد تولیدشده با آن دارند یا اصلاً ندارند. هوش مصنوعی نقاط قوت و ضعف موجود را تشدید می‌کند.",
      ),
      s: "dora.dev",
    },
    {
      d: L("Oct 2025", "اکتبر ۲۰۲۵"),
      c: "data",
      rep: true,
      t: L(
        "Manager job postings have not recovered",
        "آگهی‌های شغلی مدیریتی بازنگشته‌اند",
      ),
      b: L(
        "Revelio Labs data put middle-management postings about 42% below their April 2022 peak.",
        "داده‌های Revelio Labs آگهی‌های مدیریت میانی را حدود ۴۲٪ پایین‌تر از اوج آوریل ۲۰۲۲ نشان داد.",
      ),
      s: "Revelio Labs via Medium (secondary)",
    },
    {
      d: L("28 Oct 2025", "۲۸ اکتبر ۲۰۲۵"),
      c: "flat",
      t: L(
        "Amazon cuts about 14,000 corporate roles",
        "Amazon حدود ۱۴ هزار موقعیت ستادی را حذف می‌کند",
      ),
      b: L(
        "The company cited removing layers and bureaucracy alongside investment in AI.",
        "شرکت به حذف لایه‌ها و بوروکراسی، هم‌زمان با سرمایه‌گذاری در هوش مصنوعی، استناد کرد.",
      ),
      s: "CNBC",
    },
    {
      d: L("28 Jan 2026", "۲۸ ژانویه ۲۰۲۶"),
      c: "flat",
      t: L(
        "Amazon cuts about 16,000 more",
        "Amazon حدود ۱۶ هزار موقعیت دیگر را حذف می‌کند",
      ),
      b: L(
        "About 30,000 corporate roles since October, framed as reducing layers and increasing ownership.",
        "حدود ۳۰ هزار موقعیت ستادی از اکتبر به بعد؛ با عنوان کاهش لایه‌ها و افزایش مالکیت.",
      ),
      s: "TechCrunch",
    },
    {
      d: L("26 Feb 2026", "۲۶ فوریه ۲۰۲۶"),
      c: "ai",
      t: L(
        "Block cuts about 4,000 jobs",
        "Block حدود ۴ هزار شغل را حذف می‌کند",
      ),
      b: L(
        "Nearly half of its staff, with AI tools cited as enabling smaller, flatter teams.",
        "نزدیک به نیمی از کارکنانش؛ با این استدلال که ابزارهای هوش مصنوعی امکان تیم‌های کوچک‌تر و تخت‌تر را فراهم می‌کنند.",
      ),
      s: "TechCrunch",
    },
    {
      d: L("Mar 2026", "مارس ۲۰۲۶"),
      c: "flat",
      rep: true,
      t: L(
        "Meta sets up an AI team at ~50 engineers per manager",
        "Meta یک تیم هوش مصنوعی با حدود ۵۰ مهندس به ازای هر مدیر راه می‌اندازد",
      ),
      b: L(
        "A new applied-AI engineering group was reportedly designed around very wide spans.",
        "طبق گزارش‌ها، یک گروه مهندسی جدید هوش مصنوعی کاربردی بر پایه‌ی دامنه‌های کنترل بسیار گسترده طراحی شد.",
      ),
      s: "Fortune, citing WSJ",
    },
    {
      d: L("2026", "۲۰۲۶"),
      c: "data",
      major: true,
      t: L(
        "Gallup: manager engagement falls to 22%",
        "Gallup: تعلق شغلی مدیران به ۲۲٪ می‌رسد",
      ),
      b: L(
        "Global engagement fell for a second year, to 20%; managers dropped fastest, and reported more daily stress than ICs.",
        "تعلق شغلی جهانی برای دومین سال پیاپی کاهش یافت و به ۲۰٪ رسید؛ مدیران بیشترین افت را داشتند و استرس روزانه‌ی بیشتری نسبت به ICها گزارش کردند.",
      ),
      s: "gallup.com",
    },
    {
      d: L("5 May 2026", "۵ مه ۲۰۲۶"),
      c: "flat",
      t: L(
        "Coinbase and PayPal remove layers",
        "Coinbase و PayPal لایه‌ها را حذف می‌کنند",
      ),
      b: L(
        "Coinbase cut about 14% of staff and flattened to five layers below the CEO; PayPal cited removing organisational layers the same day.",
        "Coinbase حدود ۱۴٪ کارکنانش را کاهش داد و ساختارش را به پنج لایه زیر مدیرعامل رساند؛ PayPal هم در همان روز به حذف لایه‌های سازمانی استناد کرد.",
      ),
      s: "TechCrunch",
    },
    {
      d: L("7 May 2026", "۷ مه ۲۰۲۶"),
      c: "ai",
      t: L(
        "Cloudflare cuts about 20%, keeping builders",
        "Cloudflare حدود ۲۰٪ را کاهش می‌دهد و «سازندگان» را نگه می‌دارد",
      ),
      b: L(
        "The CEO described cutting roles that mainly measure and report — including middle management — rather than roles that build.",
        "مدیرعامل توضیح داد نقش‌هایی حذف شده‌اند که عمدتاً اندازه‌گیری و گزارش می‌کنند (از جمله مدیریت میانی)، نه نقش‌هایی که می‌سازند.",
      ),
      s: "TechCrunch",
    },
    {
      d: L("3 Jun 2026", "۳ ژوئن ۲۰۲۶"),
      c: "ai",
      t: L(
        'GitLab flattens for "agent-scale" work',
        "GitLab برای کار در «مقیاس agentها» ساختارش را تخت‌تر می‌کند",
      ),
      b: L(
        "About 14% of staff cut, management layers flattened, and the organisation rebuilt around AI-agent workloads.",
        "حدود ۱۴٪ کارکنان کاهش یافت، لایه‌های مدیریتی تخت‌تر شد و سازمان حول بار کاری agentهای هوش مصنوعی بازسازی شد.",
      ),
      s: "TechCrunch",
    },
    {
      d: L("9 Jun 2026", "۹ ژوئن ۲۰۲۶"),
      c: "data",
      t: L(
        "Survey: 41% saw management layers trimmed",
        "نظرسنجی: ۴۱٪ شاهد کاهش لایه‌های مدیریتی بوده‌اند",
      ),
      b: L(
        "Korn Ferry's survey of 15,000 professionals; the manager role is shifting from relaying information to judgment and mentoring.",
        "نظرسنجی Korn Ferry از ۱۵ هزار متخصص؛ نقش مدیر از انتقال اطلاعات به سمت قضاوت و mentorship در حال تغییر است.",
      ),
      s: "Fortune",
    },
  ];

  var GALLUP = [
    { y: 2022, m: 31, g: 23, derived: true },
    { y: 2023, m: 30, g: 23 },
    { y: 2024, m: 27, g: 21 },
    { y: 2025, m: 22, g: 20 },
  ];
  var DORA = [
    [L("Documentation quality", "کیفیت مستندات"), 7.5],
    [L("Code quality", "کیفیت کد"), 3.4],
    [L("Code review speed", "سرعت code review"), 3.1],
    [L("Delivery throughput", "توان عملیاتی delivery"), -1.5],
    [L("Delivery stability", "پایداری delivery"), -7.2],
  ];

  var MEANS = [
    {
      id: "ic",
      n: L("Individual contributors", "مشارکت‌کنندگان فردی"),
      items: [
        L(
          "Management is a scarcer step. Keep a Staff track open as a real option.",
          "مدیریت پله‌ی کمیاب‌تری شده است. مسیر Staff را به عنوان یک گزینه‌ی واقعی باز نگه دارید.",
        ),
        L(
          "Tech-lead scope grows as managers' spans widen — step into it.",
          "با گسترش دامنه‌ی کنترل مدیران، دامنه‌ی نقش راهبر فنی بزرگ‌تر می‌شود؛ آن را بر عهده بگیرید.",
        ),
        L(
          "Find mentors outside your reporting line; wider spans mean less manager time each.",
          "mentorهایی بیرون از زنجیره‌ی گزارش‌دهی خود پیدا کنید؛ دامنه‌ی کنترل وسیع‌تر یعنی زمان کمتر مدیر برای هر نفر.",
        ),
        L(
          "Show AI-assisted outcomes, not usage counts.",
          "نتایج به‌دست‌آمده با کمک هوش مصنوعی را نشان دهید، نه آمار استفاده را.",
        ),
      ],
    },
    {
      id: "em",
      n: L("First-line EMs", "مدیران خط اول"),
      items: [
        L(
          "Plan for larger spans: invest in tech leads, written decision rights and peer mentoring.",
          "برای دامنه‌ی کنترل بزرگ‌تر برنامه‌ریزی کنید: روی راهبران فنی، حدود تصمیم‌گیری مکتوب و mentorship میان هم‌تایان سرمایه‌گذاری کنید.",
        ),
        L(
          "Keep technical judgment and delivery ownership visible — status relay is what gets cut.",
          "قضاوت فنی و مالکیت delivery را قابل مشاهده نگه دارید؛ آن‌چه حذف می‌شود، انتقال گزارش وضعیت است.",
        ),
        L(
          "Expect 'why not AI?' headcount gates, and assess AI use fairly in reviews.",
          "منتظر پرسش «چرا هوش مصنوعی نه؟» در درخواست‌های headcount باشید و استفاده از هوش مصنوعی را در ارزیابی‌ها منصفانه بسنجید.",
        ),
      ],
    },
    {
      id: "mom",
      n: L("Managers of managers", "مدیرانِ مدیران"),
      items: [
        L(
          "The layer between director and EM is the easiest to compress. Justify it through decisions, org design and the leaders you grow.",
          "لایه‌ی میان Director و EM ساده‌ترین لایه برای حذف است. وجودش را با تصمیم‌ها، طراحی سازمان و رهبرانی که پرورش می‌دهید توجیه کنید.",
        ),
        L(
          "Watch manager load and junior mentoring — the two things wider spans break first.",
          "بار کاری مدیران و mentorship تازه‌کارها را پایش کنید؛ این دو اولین چیزهایی هستند که با دامنه‌ی وسیع‌تر آسیب می‌بینند.",
        ),
        L(
          "Calibrate AI expectations consistently across teams.",
          "انتظارات مربوط به هوش مصنوعی را میان تیم‌ها یکسان کالیبره کنید.",
        ),
      ],
    },
    {
      id: "dir",
      n: L("Directors and above", "Directorها و بالاتر"),
      items: [
        L(
          "Make investment cases in return, not headcount.",
          "پرونده‌های سرمایه‌گذاری را بر اساس آورده بسازید، نه headcount.",
        ),
        L(
          "Design orgs with fewer layers, strong senior ICs and clear ownership.",
          "سازمان‌هایی با لایه‌های کمتر، ICهای ارشد قوی و مالکیت روشن طراحی کنید.",
        ),
        L(
          "Protect the leadership pipeline: fewer manager seats means fewer places to practise leading.",
          "از مسیر پرورش رهبران محافظت کنید: صندلی‌های مدیریتی کمتر یعنی فرصت کمتر برای تمرین راهبری.",
        ),
      ],
    },
  ];

  var VALUABLE = [
    L(
      "**Own outcomes, not updates.** Be the person who decides and delivers, not the one who relays.",
      "**مالک نتیجه باشید، نه گزارش.** کسی باشید که تصمیم می‌گیرد و deliver می‌کند، نه کسی که پیام منتقل می‌کند.",
    ),
    L(
      "**Stay technically current,** including AI-assisted workflows; review designs and incidents yourself.",
      "**از نظر فنی به‌روز بمانید؛** از جمله در شیوه‌های کار با کمک هوش مصنوعی. طراحی‌ها و incidentها را خودتان بررسی کنید.",
    ),
    L(
      "**Grow leaders who run things without you** — the clearest proof of leverage.",
      "**رهبرانی پرورش دهید که بدون شما کارها را پیش ببرند؛** روشن‌ترین اثبات اهرم اثرگذاری.",
    ),
    L(
      "**Write.** Strategy docs, decision records and business cases travel further than meetings.",
      "**بنویسید.** اسناد استراتژی، سوابق تصمیم و پرونده‌های کسب‌وکاری از جلسات فراتر می‌روند.",
    ),
    L(
      "**Measure what matters** — delivery, engagement, business results — and speak about it in business terms.",
      "**آن‌چه مهم است را بسنجید** (delivery، تعلق شغلی، نتایج کسب‌وکاری) و به زبان کسب‌وکار درباره‌اش صحبت کنید.",
    ),
    L(
      "**Build relationships across functions.** Influence beyond your reporting line is the scarcest skill.",
      "**روابط میان‌وظیفه‌ای بسازید.** اثرگذاری فراتر از زنجیره‌ی گزارش‌دهی، کمیاب‌ترین مهارت است.",
    ),
  ];

  var tlCat = "all",
    meansTab = "em";

  function engChart() {
    var W = 640,
      H = 300,
      m = { l: 48, r: 150, t: 22, b: 40 };
    var pw = W - m.l - m.r,
      ph = H - m.t - m.b,
      maxY = 35;
    var x = function (i) {
      return m.l + (i / (GALLUP.length - 1)) * pw;
    };
    var y = function (v) {
      return m.t + ph - (v / maxY) * ph;
    };
    var s =
      '<svg viewBox="0 0 ' +
      W +
      " " +
      H +
      '" role="img" aria-label="' +
      G.esc(t(C.engTitle)) +
      '" style="width:100%;height:auto;display:block;font-family:inherit">';
    [0, 10, 20, 30].forEach(function (v) {
      s +=
        '<line x1="' +
        m.l +
        '" x2="' +
        (W - m.r) +
        '" y1="' +
        y(v) +
        '" y2="' +
        y(v) +
        '" stroke="var(--line)" stroke-width="1"/>';
      s +=
        '<text x="' +
        (m.l - 8) +
        '" y="' +
        (y(v) + 4) +
        '" text-anchor="end" font-size="13" fill="var(--muted)">' +
        G.pct(v) +
        "</text>";
    });
    GALLUP.forEach(function (d, i) {
      s +=
        '<text x="' +
        x(i) +
        '" y="' +
        (H - m.b + 20) +
        '" text-anchor="middle" font-size="13" fill="var(--muted)">' +
        G.num(d.y) +
        "</text>";
    });
    var line = function (key) {
      return GALLUP.map(function (d, i) {
        return (i ? "L" : "M") + x(i) + " " + y(d[key]);
      }).join(" ");
    };
    s +=
      '<path d="' +
      line("g") +
      '" fill="none" stroke="var(--ink-2)" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" opacity=".55"/>';
    s +=
      '<path d="' +
      line("m") +
      '" fill="none" stroke="var(--people)" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round"/>';
    GALLUP.forEach(function (d, i) {
      s +=
        '<circle cx="' +
        x(i) +
        '" cy="' +
        y(d.g) +
        '" r="4" fill="var(--ink-2)" stroke="var(--surface)" stroke-width="2" opacity=".75"/>';
      s +=
        '<circle cx="' +
        x(i) +
        '" cy="' +
        y(d.m) +
        '" r="' +
        (d.derived ? 4 : 5) +
        '" fill="' +
        (d.derived ? "var(--surface)" : "var(--people)") +
        '" stroke="' +
        (d.derived ? "var(--people)" : "var(--surface)") +
        '" stroke-width="2"/>';
    });
    var last = GALLUP[GALLUP.length - 1],
      li = GALLUP.length - 1;
    s +=
      '<text x="' +
      (x(li) + 10) +
      '" y="' +
      (y(last.m) - 2) +
      '" font-size="14" font-weight="700" fill="var(--ink)">' +
      G.esc(t(C.managers)) +
      " " +
      G.pct(last.m) +
      "</text>";
    s +=
      '<text x="' +
      (x(li) + 10) +
      '" y="' +
      (y(last.g) + 16) +
      '" font-size="14" fill="var(--ink-2)">' +
      G.esc(t(C.everyone)) +
      " " +
      G.pct(last.g) +
      "</text>";
    s +=
      '<text x="' +
      (x(0) + 2) +
      '" y="' +
      (y(GALLUP[0].m) - 12) +
      '" font-size="13" fill="var(--ink-2)">' +
      G.pct(GALLUP[0].m) +
      "*</text>";
    GALLUP.forEach(function (d, i) {
      var x0 = i === 0 ? m.l : (x(i - 1) + x(i)) / 2,
        x1 = i === GALLUP.length - 1 ? W - m.r : (x(i) + x(i + 1)) / 2;
      s +=
        '<rect x="' +
        x0 +
        '" y="' +
        m.t +
        '" width="' +
        (x1 - x0) +
        '" height="' +
        ph +
        '" fill="transparent" tabindex="0" data-tip="' +
        G.esc(
          "<b>" +
            G.num(d.y) +
            "</b>" +
            t(C.managers) +
            ": " +
            G.pct(d.m) +
            (d.derived ? " *" : "") +
            "<br>" +
            t(C.everyone) +
            ": " +
            G.pct(d.g),
        ) +
        '"/>';
    });
    s += "</svg>";
    var table = UI.table(
      [t(C.year), t(C.managers), t(C.everyone)],
      GALLUP.map(function (d) {
        return [G.num(d.y), G.pct(d.m) + (d.derived ? " *" : ""), G.pct(d.g)];
      }),
      { rowHeads: true },
    );
    return (
      '<figure class="card fig" id="engFig"><div class="fig-head"><div><div class="fig-title">' +
      t(C.engTitle) +
      '</div><div class="muted" style="font-size:var(--fs-s)">' +
      t(C.engSub) +
      '</div></div><div class="seg view-toggle" data-toggle-view="engFig"><button aria-pressed="true" data-v="chart">' +
      UI.u("chart") +
      '</button><button aria-pressed="false" data-v="table">' +
      UI.u("table") +
      "</button></div></div>" +
      '<div class="legend"><span style="--c:var(--people)"><i></i>' +
      t(C.managers) +
      '</span><span style="--c:var(--ink-2)"><i style="opacity:.55"></i>' +
      t(C.everyone) +
      "</span></div>" +
      '<div data-view="chart" dir="ltr">' +
      s +
      '</div><div data-view="table" hidden>' +
      table +
      "</div><figcaption>" +
      t(C.engCap) +
      "</figcaption></figure>"
    );
  }

  function doraChart() {
    var max = 10;
    var rows = DORA.map(function (d) {
      var v = d[1],
        w = (Math.abs(v) / max) * 50,
        pos = v >= 0;
      var val = (pos ? "+" : "−") + G.num(Math.abs(v)) + (G.isFa() ? "٪" : "%");
      return (
        '<div class="div-row"><div style="font-size:var(--fs-s);font-weight:600">' +
        t(d[0]) +
        "</div>" +
        '<div dir="ltr" style="position:relative;height:26px" tabindex="0" data-tip="' +
        G.esc("<b>" + val + "</b>" + t(d[0])) +
        '"><div style="position:absolute;left:50%;top:-4px;bottom:-4px;width:1px;background:var(--line-2)"></div>' +
        '<div style="position:absolute;top:3px;height:20px;' +
        (pos
          ? "left:50%;border-radius:0 4px 4px 0;background:var(--delivery)"
          : "right:50%;border-radius:4px 0 0 4px;background:var(--bad)") +
        ";width:" +
        w +
        '%"></div>' +
        '<div style="position:absolute;top:4px;font-size:.78rem;font-weight:700;color:var(--ink);font-variant-numeric:tabular-nums;' +
        (pos
          ? "left:calc(50% + " + w + "% + 6px)"
          : "right:calc(50% + " + w + "% + 6px)") +
        '">' +
        val +
        "</div></div></div>"
      );
    }).join("");
    var table = UI.table(
      [t(L("Outcome", "پیامد")), t(L("Estimated change", "تغییر برآوردشده"))],
      DORA.map(function (d) {
        return [
          t(d[0]),
          (d[1] >= 0 ? "+" : "−") +
            G.num(Math.abs(d[1])) +
            (G.isFa() ? "٪" : "%"),
        ];
      }),
      { rowHeads: true },
    );
    return (
      '<figure class="card fig" id="doraFig"><div class="fig-head"><div><div class="fig-title">' +
      t(C.doraTitle) +
      '</div><div class="muted" style="font-size:var(--fs-s)">' +
      t(C.doraSub) +
      '</div></div><div class="seg view-toggle" data-toggle-view="doraFig"><button aria-pressed="true" data-v="chart">' +
      UI.u("chart") +
      '</button><button aria-pressed="false" data-v="table">' +
      UI.u("table") +
      "</button></div></div>" +
      '<div class="legend"><span style="--c:var(--delivery)"><i></i>' +
      t(L("Improves", "بهبود")) +
      '</span><span style="--c:var(--bad)"><i></i>' +
      t(L("Worsens", "بدتر شدن")) +
      '</span></div><div data-view="chart" class="grid" style="gap:10px">' +
      rows +
      '</div><div data-view="table" hidden>' +
      table +
      "</div><figcaption>" +
      t(C.doraCap) +
      "</figcaption></figure>"
    );
  }

  function timelineHTML() {
    var items = TL.filter(function (x) {
      return tlCat === "all" || x.c === tlCat;
    });
    return (
      '<div class="card">' +
      UI.timeline(
        items.map(function (x) {
          return {
            when: x.d,
            title: x.t,
            body: x.b,
            major: x.major,
            src:
              '<span class="chip" style="margin-inline-end:6px">' +
              t(C.cats[x.c]) +
              "</span>" +
              G.esc(x.s) +
              (x.rep ? " · " + t(C.reported) : ""),
          };
        }),
      ) +
      "</div>"
    );
  }

  function meansHTML() {
    var m = MEANS.filter(function (x) {
      return x.id === meansTab;
    })[0];
    return '<div class="card">' + UI.checklist(m.items, "dot") + "</div>";
  }

  G.views.landscape = {
    lede: C.lede,
    render: function () {
      var h = UI.pageHead({
        eyebrow: C.eyebrow,
        icon: "globe",
        title: C.title,
        lede: C.lede,
        tldr: C.tldr,
        jump: C.jump,
      });
      h += UI.section({
        id: "numbers",
        title: C.numbersTitle,
        body:
          '<div class="stat-tiles">' +
          STATS.map(function (s) {
            return (
              '<div class="stat-tile"><span class="v">' +
              t(s.v) +
              '</span><span class="l">' +
              t(s.l) +
              '</span><span class="s">' +
              t(s.s) +
              "</span></div>"
            );
          }).join("") +
          "</div>",
      });
      h += UI.section({
        id: "timeline",
        title: C.timelineTitle,
        intro: C.timelineIntro,
        body:
          '<div class="pill-tabs" role="tablist">' +
          ["all", "flat", "ai", "data"]
            .map(function (k) {
              return (
                '<button data-tl="' +
                k +
                '" aria-pressed="' +
                (tlCat === k) +
                '">' +
                t(C.cats[k]) +
                "</button>"
              );
            })
            .join("") +
          '</div><div id="tlBox">' +
          timelineHTML() +
          "</div>",
      });
      h += UI.section({
        id: "charts",
        title: C.chartsTitle,
        body: '<div class="grid g2">' + engChart() + doraChart() + "</div>",
      });
      h += UI.section({
        id: "means",
        title: C.meansTitle,
        body:
          '<div class="pill-tabs" role="tablist">' +
          MEANS.map(function (x) {
            return (
              '<button data-mn="' +
              x.id +
              '" aria-selected="' +
              (x.id === meansTab) +
              '">' +
              t(x.n) +
              "</button>"
            );
          }).join("") +
          '</div><div id="meansBox">' +
          meansHTML() +
          "</div>",
      });
      h += UI.section({
        id: "valuable",
        title: C.valuableTitle,
        body:
          '<div class="card">' +
          UI.checklist(VALUABLE) +
          "</div>" +
          UI.callout("note", null, C.caveat),
      });
      h += UI.next("home", C.next);
      return h;
    },
    mount: function (root) {
      root.addEventListener("click", function (e) {
        var b = e.target.closest("[data-tl]");
        if (b) {
          tlCat = b.getAttribute("data-tl");
          G.$$("[data-tl]", root).forEach(function (x) {
            x.setAttribute("aria-pressed", String(x === b));
          });
          G.$("#tlBox", root).innerHTML = timelineHTML();
          return;
        }
        var mb = e.target.closest("[data-mn]");
        if (mb) {
          meansTab = mb.getAttribute("data-mn");
          G.$$("[data-mn]", root).forEach(function (x) {
            x.setAttribute("aria-selected", String(x === mb));
          });
          G.$("#meansBox", root).innerHTML = meansHTML();
        }
      });
    },
    index: function () {
      return TL.map(function (x) {
        return {
          type: "section",
          title: t(x.t),
          snip: t(x.d) + " · " + t(x.b),
          href: "#/landscape/timeline",
        };
      }).concat([
        {
          type: "section",
          title: t(C.engTitle),
          snip: t(C.engSub),
          href: "#/landscape/charts",
          extra: "Gallup engagement manager",
        },
        {
          type: "section",
          title: t(C.doraTitle),
          snip: t(C.doraSub),
          href: "#/landscape/charts",
          extra: "DORA AI",
        },
        {
          type: "section",
          title: t(C.valuableTitle),
          snip: G.plain(VALUABLE[0]),
          href: "#/landscape/valuable",
        },
      ]);
    },
  };
})();

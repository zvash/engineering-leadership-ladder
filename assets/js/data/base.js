/* Shared vocabulary: UI strings, navigation, dimensions, activity categories. */
(function () {
  "use strict";
  var G = window.ELG;
  var L = function (en, fa) { return { en: en, fa: fa }; };
  G.L = L;

  G.data.ui = {
    appName: L("Engineering Leadership Ladder", "نردبان راهبری مهندسی"),
    appSub: L("Field guide", "راهنمای کاربردی"),
    skip: L("Skip to content", "رفتن به محتوا"),
    search: L("Search the guide", "جست‌وجو در راهنما"),
    searchPh: L("Search levels, questions, scenarios, tools…", "جست‌وجوی سطوح، پرسش‌ها، سناریوها، ابزارها…"),
    noResults: L("No matches. Try a shorter word, a level code like M4, or a topic like “down-level”.", "نتیجه‌ای پیدا نشد. با واژه‌ای کوتاه‌تر، کد یک سطح مثل M4 یا موضوعی مثل «down-level» جست‌وجو کنید."),
    navigate: L("to move", "برای حرکت"),
    open: L("to open", "برای باز کردن"),
    close: L("to close", "برای بستن"),
    menu: L("Menu", "منو"),
    theme: L("Theme: follows your system. Click to change.", "ظاهر برنامه: مطابق تنظیمات سیستم. برای تغییر کلیک کنید."),
    themeLight: L("Theme: light. Click to change.", "ظاهر برنامه: روشن. برای تغییر کلیک کنید."),
    themeDark: L("Theme: dark. Click to change.", "ظاهر برنامه: تیره. برای تغییر کلیک کنید."),
    language: L("Language", "زبان"),
    inShort: L("In short", "به‌طور خلاصه"),
    onThisPage: L("On this page", "در این صفحه"),
    nextStop: L("Next stop", "گام بعدی"),
    youControl: L("What you control:", "آنچه در اختیار شماست:"),
    stop: L("Stop", "کنار بگذارید"),
    start: L("Start", "شروع کنید"),
    keep: L("Keep", "ادامه دهید"),
    chart: L("Chart", "نمودار"),
    table: L("Table", "جدول"),
    weekAria: L("An illustrative work week, coloured by activity", "نمونه‌ی یک هفته‌ی کاری که در آن رنگ هر بخش، نوع فعالیت را نشان می‌دهد"),
    copy: L("Copy", "کپی"),
    copied: L("Copied to clipboard", "در کلیپ‌بورد کپی شد"),
    reset: L("Reset", "بازنشانی"),
    print: L("Print", "چاپ"),
    all: L("All", "همه"),
    level: L("Level", "سطح"),
    dimension: L("Dimension", "بُعد"),
    example: L("Example", "نمونه"),
    illustrative: L("Illustrative", "نمونه‌ی فرضی"),
    visited: L("Visited", "دیده‌شده"),
    footer: L("Offline guide. Works without internet. Your answers stay in this browser only.", "این راهنما بدون اینترنت کار می‌کند و پاسخ‌های شما فقط در همین مرورگر ذخیره می‌شوند."),
    sources: L("Sources", "منابع"),
    typicalTitles: L("Typical titles", "عنوان‌های رایج"),
    rtype_module: L("Page", "صفحه"),
    rtype_section: L("Section", "بخش"),
    rtype_level: L("Level", "سطح"),
    rtype_faq: L("Question", "پرسش"),
    rtype_scenario: L("Scenario", "سناریو"),
    rtype_tool: L("Tool", "ابزار"),
    rtype_term: L("Term", "اصطلاح")
  };

  /* Navigation: order is the suggested reading path. */
  G.data.nav = [
    { group: L("Start", "شروع"), items: [
      { id: "home", icon: "home", label: L("Start here", "از اینجا شروع کنید") }
    ] },
    { group: L("Understand", "شناخت"), items: [
      { id: "map", icon: "map", label: L("How leveling works", "سازوکار سطح‌بندی") },
      { id: "levels", icon: "layers", label: L("The levels", "سطوح نردبان") }
    ] },
    { group: L("Locate & grow", "شناخت جایگاه و رشد"), items: [
      { id: "assess", icon: "target", label: L("Where am I?", "من کجا هستم؟") },
      { id: "grow", icon: "trend", label: L("Growing to the next level", "رشد تا سطح بعد") },
      { id: "paths", icon: "swap", label: L("IC or manager?", "IC یا مدیر؟") }
    ] },
    { group: L("Move", "جابه‌جایی"), items: [
      { id: "hiring", icon: "door", label: L("Hiring without down-leveling", "استخدام بدون down-level شدن") }
    ] },
    { group: L("Practice", "تمرین"), items: [
      { id: "scenarios", icon: "play", label: L("What would you do?", "شما چه می‌کردید؟") },
      { id: "toolkit", icon: "tool", label: L("Toolkit", "جعبه‌ابزار") }
    ] },
    { group: L("Reference", "مرجع"), items: [
      { id: "faq", icon: "help", label: L("Questions people ask", "پرسش‌های پرتکرار") },
      { id: "landscape", icon: "globe", label: L("The landscape in 2026", "چشم‌انداز ۲۰۲۶") }
    ] }
  ];

  /* The three dimensions and their umbrella. Colours are fixed across the guide. */
  G.data.dims = {
    impact: {
      icon: "impact",
      name: L("Impact", "اثرگذاری"),
      short: L("Impact", "اثرگذاری"),
      desc: L(
        "The umbrella over every dimension: the effect of your work on business priorities. Delivery that creates impact is the gate — without it, the other signals cannot even be assessed.",
        "اثرگذاری در بررسی همه‌ی ابعاد در نظر گرفته می‌شود، یعنی عملکرد شما در هر بُعد، در کنار اثر آن بر اولویت‌های کسب‌وکار (impact on business priorities) سنجیده می‌شود. بدون delivery منجر به impact، سایر شاخصه‌های نردبان قابل بررسی نیستند."
      )
    },
    delivery: {
      icon: "delivery",
      name: L("Delivery & ownership", "تحویل خروجی و مالکیت"),
      short: L("Delivery", "تحویل خروجی"),
      desc: L(
        "How effectively your team delivers and owns its product: the kind and size of the work, autonomy, commitment to quality and timelines, removing blockers, operations and support, and your execution in work and decisions.",
        "این بُعد، کارآمدی تیم شما در delivery و product ownership را می‌سنجد و شامل جنس و اندازه‌ی کارها، میزان استقلال، تعهد به کیفیت و زمان‌بندی، رفع موانع، نگه‌داری و support سرویس‌ها و توان شما در اجرای کارها و تصمیم‌هاست."
      )
    },
    people: {
      icon: "people",
      name: L("People growth", "رشد افراد"),
      short: L("People", "رشد افراد"),
      desc: L(
        "Your ability to grow people and teams, develop leaders, and support the professional development of everyone on your team.",
        "این بُعد، توان‌مندی شما در رشد دادن افراد و تیم‌ها، پرورش راهبران و کمک به توسعه‌ی حرفه‌ای اعضای تیم را می‌سنجد."
      )
    },
    team: {
      icon: "team",
      name: L("Team building", "تیم‌سازی"),
      short: L("Team", "تیم‌سازی"),
      desc: L(
        "Your leadership in building an effective team and a constructive environment for collaboration — culture, hiring, safety, engagement and relationships beyond the team.",
        "این بُعد، میزان راهبری شما در ساختن تیم کارآمد و فراهم کردن بستر همکاری سازنده را می‌سنجد. فرهنگ کاری، جذب، ایمنی روانی، تعلق شغلی و روابط فراتیمی در همین بُعد بررسی می‌شوند."
      )
    }
  };

  /* Activity categories used by the week calendars and time-allocation chart. */
  G.data.activities = [
    { key: "tech", name: L("Hands-on technical", "کار فنی مستقیم") },
    { key: "delivery", name: L("Delivery & execution", "تحویل و اجرا") },
    { key: "people", name: L("People growth", "رشد افراد") },
    { key: "team", name: L("Team & relationships", "تیم‌سازی و روابط") },
    { key: "strategy", name: L("Strategy & org", "راهبرد و سازمان") },
    { key: "admin", name: L("Admin & comms", "امور اداری و ارتباطات") }
  ];
})();

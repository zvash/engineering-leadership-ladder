/* Core runtime: namespace, storage, i18n, formatting, icons. Classic script (works from file://). */
(function () {
  "use strict";
  var G = (window.ELG = window.ELG || {});
  G.data = G.data || {};
  G.views = G.views || {};

  /* ---------- storage (never trusted to exist) ---------- */
  var PREFIX = "elg.";
  G.store = {
    get: function (k, fallback) {
      try {
        var v = window.localStorage.getItem(PREFIX + k);
        return v === null ? fallback : JSON.parse(v);
      } catch (e) { return fallback; }
    },
    set: function (k, v) {
      try { window.localStorage.setItem(PREFIX + k, JSON.stringify(v)); } catch (e) { /* ignore */ }
    },
    del: function (k) {
      try { window.localStorage.removeItem(PREFIX + k); } catch (e) { /* ignore */ }
    }
  };

  /* ---------- state ---------- */
  var qLang = (/[?&]lang=(en|fa)\b/.exec(location.search || "") || [])[1];
  G.state = {
    lang: qLang || G.store.get("lang", null) || ((navigator.language || "").toLowerCase().indexOf("fa") === 0 ? "fa" : "en"),
    theme: (/[?&]theme=(light|dark|system)\b/.exec(location.search || "") || [])[1] || G.store.get("theme", "system")
  };

  /* ---------- i18n ---------- */
  // Content leaves are {en, fa}. t() picks the active language and falls back to English.
  G.t = function (x) {
    if (x == null) return "";
    if (typeof x === "string" || typeof x === "number") return String(x);
    if (Array.isArray(x)) return x.map(G.t);
    if (typeof x === "object" && ("en" in x || "fa" in x)) {
      var v = x[G.state.lang];
      return v == null ? (x.en == null ? "" : x.en) : v;
    }
    return "";
  };
  G.isFa = function () { return G.state.lang === "fa"; };

  var FA_DIGITS = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  G.digits = function (s) {
    s = String(s);
    if (!G.isFa()) return s;
    return s.replace(/(\d)\.(\d)/g, "$1٫$2").replace(/[0-9]/g, function (d) { return FA_DIGITS[+d]; });
  };
  G.num = function (n) { return G.digits(n); };
  G.pct = function (n) { return G.isFa() ? G.digits(n) + "٪" : n + "%"; };

  /* Light inline markup for authored content:
     **bold**  ==highlight==  `code`  [label](#/route)  */
  G.md = function (s) {
    s = G.t(s);
    if (!s) return "";
    return s
      .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
      .replace(/==(.+?)==/g, "<mark>$1</mark>")
      .replace(/`([^`]+)`/g, '<span class="code ghost">$1</span>')
      .replace(/\[([^\]]+)\]\((#[^)]+)\)/g, '<a href="$2">$1</a>')
      .replace(/\[([^\]]+)\]\((https?:[^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');
  };
  G.esc = function (s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  };
  // Strip markup to plain text (search index, clipboard).
  G.plain = function (s) {
    return G.t(s).replace(/\*\*|==|`/g, "").replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").replace(/<[^>]+>/g, "");
  };
  // Normalise Persian/Arabic variants and ZWNJ so search matches either spelling.
  G.norm = function (s) {
    return String(s || "")
      .toLowerCase()
      .replace(/[‌‍]/g, "")
      .replace(/ي/g, "ی").replace(/ك/g, "ک").replace(/[أإآ]/g, "ا").replace(/ة/g, "ه")
      .replace(/[ً-ٟ]/g, "")
      .replace(/[۰-۹]/g, function (d) { return String(FA_DIGITS.indexOf(d)); });
  };

  /* ---------- levels (shared vocabulary) ---------- */
  G.LEVELS = ["A", "M2", "M3", "M4", "M5", "M6"];
  G.levelCode = function (id) { return id === "A" ? (G.isFa() ? "Acting" : "Acting") : id; };
  G.levelIndex = function (id) { return G.LEVELS.indexOf(id); };

  /* ---------- icons (24px line icons, currentColor) ---------- */
  var P = {
    ladder: '<path d="M7 3v18M17 3v18M7 7h10M7 12h10M7 17h10"/>',
    home: '<path d="M4 11l8-7 8 7v9a1 1 0 0 1-1 1h-5v-6h-4v6H5a1 1 0 0 1-1-1z"/>',
    map: '<path d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2-6-2z"/><path d="M9 4v14M15 6v14"/>',
    layers: '<path d="m12 3 9 5-9 5-9-5 9-5z"/><path d="m3 13 9 5 9-5"/>',
    target: '<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="4.5"/><circle cx="12" cy="12" r="1" fill="currentColor"/>',
    trend: '<path d="M3 17l6-6 4 4 8-8"/><path d="M15 7h6v6"/>',
    split: '<path d="M6 3v6a6 6 0 0 0 6 6h0a6 6 0 0 1 6 6v0M18 3v6"/><circle cx="6" cy="3" r="0.5"/><path d="M4 21h4M16 3h4"/>',
    door: '<path d="M4 21h16M6 21V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v17"/><circle cx="14.5" cy="12" r="1" fill="currentColor"/>',
    play: '<circle cx="12" cy="12" r="9"/><path d="m10 8.5 5 3.5-5 3.5z"/>',
    help: '<circle cx="12" cy="12" r="9"/><path d="M9.5 9.5a2.5 2.5 0 1 1 3.4 2.3c-.6.3-.9.8-.9 1.4v.3"/><circle cx="12" cy="17" r=".6" fill="currentColor"/>',
    tool: '<path d="M14.7 6.3a4 4 0 0 0-5.4 5.2L3.6 17.2a1.4 1.4 0 0 0 2 2l5.7-5.7a4 4 0 0 0 5.2-5.4l-2.4 2.4-2.1-.4-.4-2.1z"/>',
    globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
    moon: '<path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z"/>',
    auto: '<circle cx="12" cy="12" r="9"/><path d="M12 3v18" /><path d="M12 3a9 9 0 0 1 0 18z" fill="currentColor"/>',
    menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
    close: '<path d="M6 6l12 12M18 6 6 18"/>',
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    chev: '<path d="m6 9 6 6 6-6"/>',
    check: '<path d="m5 12.5 4.2 4.2L19 7"/>',
    x: '<path d="M7 7l10 10M17 7 7 17"/>',
    dot: '<circle cx="12" cy="12" r="3" fill="currentColor"/>',
    bulb: '<path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.6 10.8c.8.6 1.1 1.3 1.1 2.2h5c0-.9.3-1.6 1.1-2.2A6 6 0 0 0 12 3z"/>',
    alert: '<path d="M12 4 2.8 19.5h18.4z"/><path d="M12 10v4.5"/><circle cx="12" cy="17" r=".6" fill="currentColor"/>',
    book: '<path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5z"/><path d="M4 20.5A2.5 2.5 0 0 0 6.5 23H20v-5"/>',
    flag: '<path d="M5 21V4M5 4h11l-2 4 2 4H5"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    users: '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0"/><path d="M16 4.5a3.5 3.5 0 0 1 0 7M18 14a6.5 6.5 0 0 1 3.5 6"/>',
    user: '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
    rocket: '<path d="M5 15c-1.5 1.5-2 5-2 5s3.5-.5 5-2"/><path d="M9 15l-3-3 4-8 8-1-1 8-8 4z"/><circle cx="14.5" cy="9.5" r="1.5"/>',
    compass: '<circle cx="12" cy="12" r="9"/><path d="m15.5 8.5-2 5-5 2 2-5z"/>',
    shield: '<path d="M12 3 4.5 6v5.5c0 4.5 3.2 8.3 7.5 9.5 4.3-1.2 7.5-5 7.5-9.5V6z"/>',
    star: '<path d="m12 3.5 2.6 5.3 5.9.9-4.3 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8-4.3-4.1 5.9-.9z"/>',
    copy: '<rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h3"/>',
    reset: '<path d="M4 4v6h6"/><path d="M4.5 10A8 8 0 1 1 6 16.5"/>',
    chat: '<path d="M21 12a8 8 0 0 1-11.6 7.1L4 20.5l1.4-4.7A8 8 0 1 1 21 12z"/>',
    briefcase: '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M3 13h18"/>',
    delivery: '<path d="M3 7l9-4 9 4v10l-9 4-9-4z"/><path d="M3 7l9 4 9-4M12 11v10"/>',
    people: '<path d="M12 21v-8"/><path d="M12 13c0-4 3-6 7-6 0 4-3 6-7 6zM12 15c0-3-2.5-5-6-5 0 3 2.5 5 6 5z"/>',
    team: '<circle cx="12" cy="6" r="2.6"/><circle cx="5" cy="17" r="2.6"/><circle cx="19" cy="17" r="2.6"/><path d="M10.5 8.3 6.5 14.8M13.5 8.3l4 6.5M7.6 17h8.8"/>',
    impact: '<path d="M12 3a9 9 0 0 1 9 9H3a9 9 0 0 1 9-9z"/><path d="M12 12v7a2 2 0 0 0 4 0"/>',
    calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',
    pin: '<path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>',
    print: '<path d="M6 9V3h12v6"/><rect x="3" y="9" width="18" height="8" rx="2"/><path d="M6 14h12v7H6z"/>',
    swap: '<path d="M4 8h13l-3-3M20 16H7l3 3"/>'
  };
  G.icon = function (name, cls) {
    var body = P[name] || P.dot;
    return '<svg class="' + (cls || "") + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + body + "</svg>";
  };

  /* ---------- small DOM helpers ---------- */
  G.$ = function (sel, root) { return (root || document).querySelector(sel); };
  G.$$ = function (sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); };

  G.toast = function (msg) {
    var el = document.createElement("div");
    el.className = "toast";
    el.setAttribute("role", "status");
    el.textContent = msg;
    document.body.appendChild(el);
    setTimeout(function () { el.remove(); }, 2200);
  };

  G.copy = function (text, okMsg) {
    var done = function () { G.toast(okMsg || (G.isFa() ? "کپی شد" : "Copied")); };
    var fallback = function () {
      var ta = document.createElement("textarea");
      ta.value = text; ta.setAttribute("readonly", ""); ta.style.position = "fixed"; ta.style.opacity = "0";
      document.body.appendChild(ta); ta.select();
      try { document.execCommand("copy"); done(); } catch (e) { G.toast(G.isFa() ? "کپی ممکن نشد. متن را دستی انتخاب کنید" : "Copy failed — select the text manually"); }
      ta.remove();
    };
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(done, fallback);
      } else { fallback(); }
    } catch (e) { fallback(); }
  };

  /* Floating tooltip shared by charts */
  var tipEl = null;
  G.tip = {
    show: function (html, x, y) {
      if (!tipEl) { tipEl = document.createElement("div"); tipEl.className = "tip-float"; tipEl.setAttribute("role", "tooltip"); document.body.appendChild(tipEl); }
      tipEl.innerHTML = html;
      tipEl.hidden = false;
      var r = tipEl.getBoundingClientRect();
      var left = Math.min(window.innerWidth - r.width - 8, Math.max(8, x + 12));
      var top = y - r.height - 12; if (top < 8) top = y + 16;
      tipEl.style.left = left + "px"; tipEl.style.top = top + "px";
    },
    hide: function () { if (tipEl) tipEl.hidden = true; }
  };
})();

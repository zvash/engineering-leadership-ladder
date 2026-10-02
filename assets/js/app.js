/* App shell: routing, navigation, language and theme, search palette, shared behaviours. */
(function () {
  "use strict";
  var G = window.ELG, t = G.t, icon = G.icon, UI = G.ui;
  var main, current = { id: null, param: null };

  /* ---------- theme ---------- */
  function applyTheme() {
    var root = document.documentElement;
    if (G.state.theme === "light" || G.state.theme === "dark") root.setAttribute("data-theme", G.state.theme);
    else root.removeAttribute("data-theme");
    var btn = G.$("#themeBtn");
    if (btn) {
      var ic = G.state.theme === "light" ? "sun" : G.state.theme === "dark" ? "moon" : "auto";
      var lbl = G.state.theme === "light" ? UI.u("themeLight") : G.state.theme === "dark" ? UI.u("themeDark") : UI.u("theme");
      btn.innerHTML = icon(ic);
      btn.setAttribute("aria-label", lbl);
      btn.title = lbl;
    }
  }
  function cycleTheme() {
    var order = ["system", "light", "dark"];
    G.state.theme = order[(order.indexOf(G.state.theme) + 1) % order.length];
    G.store.set("theme", G.state.theme);
    applyTheme();
  }

  /* ---------- language ---------- */
  function applyLang() {
    var fa = G.isFa();
    document.documentElement.lang = fa ? "fa" : "en";
    document.documentElement.dir = fa ? "rtl" : "ltr";
    document.title = t(G.data.ui.appName);
  }
  function setLang(lang) {
    if (lang === G.state.lang) return;
    G.state.lang = lang;
    G.store.set("lang", lang);
    applyLang();
    renderShell();
    route(true);
    searchIndex = null;
  }

  /* ---------- shell ---------- */
  function renderShell() {
    var visited = G.store.get("visited", {});
    var top = '<a class="skip" href="#main">' + UI.u("skip") + "</a>" +
      '<header class="topbar">' +
      '<button class="icon-btn menu-btn" id="menuBtn" aria-label="' + UI.u("menu") + '" aria-expanded="false" aria-controls="sidebar">' + icon("menu") + "</button>" +
      '<a class="brand" href="#/home">' + brandMark() + '<span class="brand-name">' + t(G.data.ui.appName) + " <span>· " + t(G.data.ui.appSub) + "</span></span></a>" +
      '<div class="top-actions">' +
      '<button class="search-btn" id="searchBtn" aria-label="' + UI.u("search") + '">' + icon("search") + "<span>" + UI.u("search") + "</span><kbd>/</kbd></button>" +
      '<div class="seg" role="group" aria-label="' + UI.u("language") + '"><button data-lang="en" aria-pressed="' + !G.isFa() + '">EN</button><button data-lang="fa" class="fa-label" aria-pressed="' + G.isFa() + '">فا</button></div>' +
      '<button class="icon-btn" id="themeBtn"></button>' +
      "</div></header>";
    var nav = '<nav class="sidebar" id="sidebar" aria-label="' + UI.u("menu") + '">';
    G.data.nav.forEach(function (g) {
      nav += '<div class="nav-group"><div class="nav-group-label">' + t(g.group) + "</div>";
      g.items.forEach(function (it) {
        nav += '<a class="nav-link" data-nav="' + it.id + '" href="#/' + it.id + '">' + icon(it.icon) + "<span>" + t(it.label) + '</span><span class="visited' + (visited[it.id] ? " on" : "") + '" title="' + UI.u("visited") + '"></span></a>';
      });
      nav += "</div>";
    });
    nav += '<div class="sidebar-foot">' + UI.u("footer") + "</div></nav>";
    document.body.innerHTML = top + '<div class="layout">' + nav + '<main class="main" id="main" tabindex="-1"><div class="page" id="page"></div></main></div>';
    main = G.$("#page");
    applyTheme();
    wireShell();
  }

  function brandMark() {
    return '<svg class="brand-mark" viewBox="0 0 32 32" aria-hidden="true"><rect x="1" y="1" width="30" height="30" rx="8" fill="var(--ink)"/>' +
      '<path d="M10 7v18M22 7v18" stroke="var(--surface)" stroke-width="2.2" stroke-linecap="round"/>' +
      '<path d="M10 20h12M10 14h12" stroke="var(--surface)" stroke-width="2.2" stroke-linecap="round" opacity=".55"/>' +
      '<path d="M10 9h12" stroke="var(--hl)" stroke-width="3" stroke-linecap="round"/></svg>';
  }

  function wireShell() {
    G.$("#themeBtn").addEventListener("click", cycleTheme);
    G.$$("[data-lang]").forEach(function (b) { b.addEventListener("click", function () { setLang(b.getAttribute("data-lang")); }); });
    G.$("#searchBtn").addEventListener("click", openSearch);
    G.$("#menuBtn").addEventListener("click", function () { toggleNav(); });
    G.$("#sidebar").addEventListener("click", function (e) { if (e.target.closest(".nav-link")) toggleNav(false); });
  }

  function toggleNav(force) {
    var open = typeof force === "boolean" ? force : !document.body.classList.contains("nav-open");
    document.body.classList.toggle("nav-open", open);
    G.$("#menuBtn").setAttribute("aria-expanded", String(open));
    var scrim = G.$(".scrim");
    if (open && !scrim) {
      scrim = document.createElement("div");
      scrim.className = "scrim";
      scrim.addEventListener("click", function () { toggleNav(false); });
      document.body.appendChild(scrim);
    } else if (!open && scrim) scrim.remove();
  }

  /* ---------- routing ---------- */
  function parseHash() {
    var h = (location.hash || "").replace(/^#\/?/, "");
    var parts = h.split("/");
    var id = parts[0] || "home";
    if (!G.views[id]) {
      // a bare in-page anchor like #sec-x — keep the current view
      if (current.id && document.getElementById(h)) return null;
      id = "home";
    }
    return { id: id, param: parts.slice(1).join("/") || null };
  }

  function route(force) {
    var r = parseHash();
    if (!r) return;
    var same = r.id === current.id;
    if (same && !force && G.views[r.id].onParam) {
      current.param = r.param;
      G.views[r.id].onParam(main, r.param);
      return;
    }
    current = r;
    var v = G.views[r.id];
    main.innerHTML = v.render(r.param);
    UI.bindTips(main);
    if (v.mount) v.mount(main, r.param);
    G.$$(".nav-link").forEach(function (a) {
      if (a.getAttribute("data-nav") === r.id) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current");
    });
    var visited = G.store.get("visited", {});
    if (!visited[r.id]) {
      visited[r.id] = 1; G.store.set("visited", visited);
      var dot = G.$('.nav-link[data-nav="' + r.id + '"] .visited'); if (dot) dot.classList.add("on");
    }
    var target = r.param && document.getElementById(r.param);
    if (target && !v.onParam) { target.scrollIntoView(); if (target.tagName === "DETAILS") target.open = true; }
    else if (!force) window.scrollTo(0, 0);
  }
  G.go = function (hash) { if (location.hash === hash) route(true); else location.hash = hash; };

  /* ---------- delegated behaviours shared by all views ---------- */
  function wireGlobal() {
    document.addEventListener("click", function (e) {
      // chart / table toggles
      var tv = e.target.closest("[data-toggle-view] button");
      if (tv) {
        var wrap = tv.closest("[data-toggle-view]");
        var fig = document.getElementById(wrap.getAttribute("data-toggle-view"));
        var v = tv.getAttribute("data-v");
        G.$$("button", wrap).forEach(function (b) { b.setAttribute("aria-pressed", String(b === tv)); });
        G.$$("[data-view]", fig).forEach(function (el) { el.hidden = el.getAttribute("data-view") !== v; });
        return;
      }
      // in-page anchor links (#section) should not trigger routing
      var a = e.target.closest('a[href^="#"]');
      if (a) {
        var href = a.getAttribute("href");
        if (href.length > 1 && href.charAt(1) !== "/") {
          var el = document.getElementById(href.slice(1));
          if (el) { e.preventDefault(); el.scrollIntoView({ behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" }); if (el.tagName === "DETAILS") el.open = true; }
        }
      }
      var cp = e.target.closest("[data-copy]");
      if (cp) {
        var src = document.getElementById(cp.getAttribute("data-copy"));
        if (src) G.copy(src.innerText, UI.u("copied"));
      }
    });
    document.addEventListener("keydown", function (e) {
      var typing = /INPUT|TEXTAREA|SELECT/.test((e.target.tagName || "")) || e.target.isContentEditable;
      if ((e.key === "/" && !typing) || ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k")) { e.preventDefault(); openSearch(); }
      if (e.key === "Escape") { closeSearch(); toggleNav(false); }
    });
    window.addEventListener("hashchange", function () { route(false); });
  }

  /* ---------- search palette ---------- */
  var searchIndex = null, modal = null, results = [], sel = 0;
  function buildIndex() {
    var items = [];
    G.data.nav.forEach(function (g) {
      g.items.forEach(function (it) {
        var v = G.views[it.id];
        items.push({ type: "module", title: t(it.label), snip: v && v.lede ? G.plain(v.lede) : "", href: "#/" + it.id });
        if (v && v.index) v.index().forEach(function (x) { items.push(x); });
      });
    });
    items.forEach(function (x) { x._n = G.norm(x.title + " " + (x.snip || "") + " " + (x.extra || "")); x._t = G.norm(x.title); });
    return items;
  }
  function openSearch() {
    if (modal) return;
    if (!searchIndex) searchIndex = buildIndex();
    modal = document.createElement("div");
    modal.className = "modal";
    modal.setAttribute("role", "dialog");
    modal.setAttribute("aria-modal", "true");
    modal.setAttribute("aria-label", UI.u("search"));
    modal.innerHTML = '<div class="modal-box"><div class="modal-in">' + icon("search") + '<input id="q" type="search" autocomplete="off" placeholder="' + G.esc(UI.u("searchPh")) + '" aria-controls="results"></div>' +
      '<div class="results" id="results" role="listbox"></div>' +
      '<div class="modal-foot"><span><kbd>↑</kbd> <kbd>↓</kbd> ' + UI.u("navigate") + "</span><span><kbd>Enter</kbd> " + UI.u("open") + "</span><span><kbd>Esc</kbd> " + UI.u("close") + "</span></div></div>";
    document.body.appendChild(modal);
    var q = G.$("#q", modal);
    q.addEventListener("input", function () { doSearch(q.value); });
    q.addEventListener("keydown", function (e) {
      if (e.key === "ArrowDown") { e.preventDefault(); sel = Math.min(results.length - 1, sel + 1); paint(); }
      else if (e.key === "ArrowUp") { e.preventDefault(); sel = Math.max(0, sel - 1); paint(); }
      else if (e.key === "Enter" && results[sel]) { e.preventDefault(); pick(results[sel]); }
    });
    modal.addEventListener("click", function (e) {
      if (e.target === modal) closeSearch();
      var r = e.target.closest(".result");
      if (r) pick(results[+r.getAttribute("data-i")]);
    });
    doSearch("");
    q.focus();
  }
  function closeSearch() { if (modal) { modal.remove(); modal = null; } }
  function pick(r) { closeSearch(); G.go(r.href); }
  function doSearch(q) {
    var nq = G.norm(q.trim());
    if (!nq) {
      results = searchIndex.filter(function (x) { return x.type === "module"; });
    } else {
      var terms = nq.split(/\s+/).filter(Boolean);
      results = searchIndex.map(function (x) {
        var score = 0;
        for (var i = 0; i < terms.length; i++) {
          if (x._n.indexOf(terms[i]) === -1) return null;
          if (x._t.indexOf(terms[i]) !== -1) score += 3; else score += 1;
        }
        if (x.type === "module") score += 1;
        return { x: x, s: score };
      }).filter(Boolean).sort(function (a, b) { return b.s - a.s; }).slice(0, 40).map(function (o) { return o.x; });
    }
    sel = 0;
    paint();
  }
  function paint() {
    var box = G.$("#results", modal);
    if (!results.length) { box.innerHTML = '<div class="faq-empty">' + UI.u("noResults") + "</div>"; return; }
    box.innerHTML = results.map(function (r, i) {
      return '<div class="result" role="option" data-i="' + i + '" aria-selected="' + (i === sel) + '"><span class="rt">' + UI.u("rtype_" + r.type) + '</span><div><div class="rtitle">' + G.esc(r.title) + "</div>" + (r.snip ? '<div class="rsnip">' + G.esc(r.snip) + "</div>" : "") + "</div></div>";
    }).join("");
    var s = G.$('[aria-selected="true"]', box);
    if (s) s.scrollIntoView({ block: "nearest" });
  }

  /* ---------- boot ---------- */
  function boot() {
    applyLang();
    renderShell();
    wireGlobal();
    route(true);
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot); else boot();
})();

/* Reusable components. Every function returns an HTML string; behaviour is wired by delegated handlers in app.js. */
(function () {
  "use strict";
  var G = window.ELG, t = G.t, md = G.md, icon = G.icon;
  var UI = (G.ui = {});

  UI.u = function (key) { // UI string lookup
    var s = G.data.ui && G.data.ui[key];
    return s ? t(s) : key;
  };

  UI.pageHead = function (o) {
    var h = '<header class="page-head">';
    if (o.eyebrow) h += '<div class="eyebrow">' + icon(o.icon || "dot", "inline-icon") + t(o.eyebrow) + "</div>";
    h += "<h1>" + md(o.title) + "</h1>";
    if (o.lede) h += '<p class="lede">' + md(o.lede) + "</p>";
    if (o.tldr && o.tldr.length) {
      h += '<div class="tldr" aria-label="' + UI.u("inShort") + '">';
      o.tldr.forEach(function (x, i) {
        h += '<div class="tldr-item"><span class="n">' + G.num(i + 1) + "</span><div>" + md(x) + "</div></div>";
      });
      h += "</div>";
    }
    if (o.jump && o.jump.length) {
      h += '<nav class="jump" aria-label="' + UI.u("onThisPage") + '">';
      o.jump.forEach(function (j) { h += '<a href="#' + j.href + '">' + t(j.label) + "</a>"; });
      h += "</nav>";
    }
    return h + "</header>";
  };

  UI.section = function (o) {
    var h = '<section class="section" id="' + (o.id || "") + '">';
    if (o.title || o.kicker || o.intro) {
      h += '<div class="section-head">';
      if (o.kicker) h += '<div class="section-kicker">' + t(o.kicker) + "</div>";
      if (o.title) h += "<h2>" + md(o.title) + "</h2>";
      if (o.intro) h += "<p>" + md(o.intro) + "</p>";
      h += "</div>";
    }
    return h + (o.body || "") + "</section>";
  };

  UI.callout = function (type, title, body) {
    var ic = { tip: "bulb", trap: "alert", note: "flag", example: "book", info: "compass" }[type] || "dot";
    return '<div class="callout ' + type + '">' + icon(ic) + "<div>" +
      (title ? '<div class="callout-title">' + md(title) + "</div>" : "") +
      (Array.isArray(body) ? body.map(function (p) { return "<p>" + md(p) + "</p>"; }).join("") : "<p>" + md(body) + "</p>") +
      "</div></div>";
  };

  UI.code = function (id, cls) { return '<span class="code ' + (cls || "") + '">' + (id === "A" ? "Acting" : id) + "</span>"; };

  UI.dimChip = function (key) {
    var d = G.data.dims[key];
    return '<span class="chip c-' + key + '"><span class="dot"></span>' + t(d.short) + "</span>";
  };

  UI.list = function (items, cls) {
    if (!items || !items.length) return "";
    return '<ul class="' + (cls || "bullets") + '">' + items.map(function (x) { return "<li>" + md(x) + "</li>"; }).join("") + "</ul>";
  };

  UI.checklist = function (items, kind) {
    var ic = kind === "x" ? "x" : kind === "dot" ? "dot" : "check";
    return '<ul class="checklist ' + (kind || "") + '">' + items.map(function (x) { return "<li>" + icon(ic) + "<span>" + md(x) + "</span></li>"; }).join("") + "</ul>";
  };

  UI.acc = function (summary, body, opts) {
    opts = opts || {};
    return '<details class="acc"' + (opts.id ? ' id="' + opts.id + '"' : "") + (opts.open ? " open" : "") + ">" +
      "<summary><span>" + md(summary) + (opts.meta ? '<span class="acc-meta" style="margin-top:6px">' + opts.meta + "</span>" : "") + "</span>" + icon("chev", "chev") + "</summary>" +
      '<div class="acc-body">' + body + "</div></details>";
  };

  UI.table = function (head, rows, opts) {
    opts = opts || {};
    var h = '<div class="tbl-wrap"' + (opts.id ? ' id="' + opts.id + '"' : "") + '><table class="tbl ' + (opts.cls || "") + '">';
    if (opts.caption) h += '<caption class="sr-only">' + t(opts.caption) + "</caption>";
    h += "<thead><tr>" + head.map(function (c) { return '<th scope="col">' + md(c) + "</th>"; }).join("") + "</tr></thead><tbody>";
    rows.forEach(function (r) {
      var cls = r._cls ? ' class="' + r._cls + '"' : "";
      var cells = r.cells || r;
      h += "<tr" + cls + ">" + cells.map(function (c, i) {
        return i === 0 && opts.rowHeads ? '<th scope="row">' + md(c) + "</th>" : "<td>" + md(c) + "</td>";
      }).join("") + "</tr>";
    });
    h += "</tbody></table></div>";
    if (opts.note) h += '<p class="tbl-note">' + md(opts.note) + "</p>";
    return h;
  };

  UI.meter = function (v, cls) {
    return '<div class="meter ' + (cls || "") + '" role="presentation"><i style="--v:' + Math.round(v * 100) + '%"></i></div>';
  };

  UI.statRow = function (label, value, v, cls) {
    return '<div class="stat-row"><div class="sr-top"><span>' + t(label) + "</span><span>" + md(value) + "</span></div>" + UI.meter(v, cls) + "</div>";
  };

  UI.fromTo = function (pairs, heads) {
    var h = '<div class="fromto">';
    if (heads) h += '<div class="ft-head"><span>' + t(heads[0]) + "</span><span></span><span>" + t(heads[1]) + "</span></div>";
    pairs.forEach(function (p) {
      h += '<div class="ft"><div class="from">' + md(p[0]) + '</div><div class="arr">' + icon("arrow", "flip-rtl") + '</div><div class="to">' + md(p[1]) + "</div></div>";
    });
    return h + "</div>";
  };

  UI.ssk = function (o) {
    return '<div class="ssk">' +
      '<div class="stop"><h4>' + icon("x") + UI.u("stop") + "</h4>" + UI.list(o.stop) + "</div>" +
      '<div class="start"><h4>' + icon("check") + UI.u("start") + "</h4>" + UI.list(o.start) + "</div>" +
      '<div class="keep"><h4>' + icon("dot") + UI.u("keep") + "</h4>" + UI.list(o.keep) + "</div></div>";
  };

  UI.flow = function (steps) {
    return '<ol class="flow" style="list-style:none;padding:0;margin:0">' + steps.map(function (s, i) {
      return '<li class="flow-step"><span class="step-n">' + G.num(String(i + 1).padStart(2, "0")) + "</span><h4>" + md(s.title) + "</h4><p>" + md(s.body) + "</p>" +
        (s.you ? '<div class="you-control"><b>' + UI.u("youControl") + "</b> " + md(s.you) + "</div>" : "") + "</li>";
    }).join("") + "</ol>";
  };

  UI.timeline = function (items) {
    return '<ol class="timeline">' + items.map(function (it) {
      return '<li class="' + (it.major ? "major" : "") + '"><div class="when">' + md(it.when) + "</div><h4>" + md(it.title) + "</h4>" +
        (it.body ? "<p>" + md(it.body) + "</p>" : "") + (it.src ? '<div class="src">' + md(it.src) + "</div>" : "") + "</li>";
    }).join("") + "</ol>";
  };

  UI.next = function (route, label, kicker) {
    return '<a class="next-card" href="#/' + route + '"><div><div class="nk">' + (kicker ? t(kicker) : UI.u("nextStop")) + '</div><div class="nt">' + t(label) + "</div></div>" + icon("arrow", "flip-rtl") + "</a>";
  };

  UI.legend = function (cats) {
    return '<div class="legend">' + cats.map(function (c) { return '<span class="c-' + c.key + '"><i></i>' + t(c.name) + "</span>"; }).join("") + "</div>";
  };

  /* Stacked 100% bars with hover tips, direct labels when they fit, and a table twin. */
  UI.stackedBars = function (o) {
    var id = o.id;
    var cats = o.cats;
    var bars = '<div class="sbars" data-chart="' + id + '">';
    o.rows.forEach(function (r) {
      var total = cats.reduce(function (a, c) { return a + (r.values[c.key] || 0); }, 0) || 1;
      bars += '<div class="sbar-row' + (r.active ? " active" : "") + '"><div class="lbl">' + r.label + '</div><div class="sbar" role="img" aria-label="' + G.esc(G.plain(r.aria || "")) + '">';
      cats.forEach(function (c) {
        var v = r.values[c.key] || 0;
        if (!v) return;
        var p = Math.round((v / total) * 100);
        var dark = c.key === "tech" || c.key === "admin" || c.key === "team";
        bars += '<span class="c-' + c.key + (dark ? " dark-text" : "") + '" style="flex:' + v + ' 1 0" tabindex="0" data-tip="' + G.esc("<b>" + G.pct(p) + "</b>" + t(c.name) + " · " + G.plain(r.name || "")) + '">' + (p >= 11 ? G.pct(p) : "") + "</span>";
      });
      bars += "</div></div>";
    });
    bars += "</div>";
    var table = UI.table([t(o.rowHead)].concat(cats.map(function (c) { return t(c.name); })), o.rows.map(function (r) {
      var total = cats.reduce(function (a, c) { return a + (r.values[c.key] || 0); }, 0) || 1;
      return [G.plain(r.name || "")].concat(cats.map(function (c) { return G.pct(Math.round(((r.values[c.key] || 0) / total) * 100)); }));
    }), { rowHeads: true });
    return '<figure class="fig" id="' + id + '"><div class="fig-head"><div><div class="fig-title">' + md(o.title) + "</div>" + (o.sub ? '<div class="muted" style="font-size:var(--fs-s)">' + md(o.sub) + "</div>" : "") + "</div>" +
      '<div class="seg view-toggle" data-toggle-view="' + id + '"><button aria-pressed="true" data-v="chart">' + UI.u("chart") + '</button><button aria-pressed="false" data-v="table">' + UI.u("table") + "</button></div></div>" +
      UI.legend(cats) + '<div data-view="chart">' + bars + '</div><div data-view="table" hidden>' + table + "</div>" +
      (o.caption ? "<figcaption>" + md(o.caption) + "</figcaption>" : "") + "</figure>";
  };

  /* A week calendar: blocks = [{d:0-4, s:startSlot(0=9:00, 30-min slots), n:slots, c:catKey, t:{en,fa}}] */
  UI.week = function (blocks, cats) {
    var days = G.isFa() ? ["شنبه", "یکشنبه", "دوشنبه", "سه‌شنبه", "چهارشنبه"] : ["Mon", "Tue", "Wed", "Thu", "Fri"];
    var h = '<div class="week-wrap"><div class="week" role="img" aria-label="' + UI.u("weekAria") + '">';
    h += '<div style="grid-row:1;grid-column:1;border-bottom:1px solid var(--line);background:var(--surface-2)"></div>';
    days.forEach(function (d, i) { h += '<div class="dh" style="grid-column:' + (i + 2) + '">' + d + "</div>"; });
    for (var s = 0; s < 16; s += 2) {
      h += '<div class="hr" style="grid-row:' + (s + 2) + '">' + G.digits((9 + s / 2) + ":00") + "</div>";
      h += '<div class="gl" style="grid-row:' + (s + 2) + '"></div>';
    }
    var catName = {};
    cats.forEach(function (c) { catName[c.key] = t(c.name); });
    blocks.forEach(function (b) {
      var from = 9 * 60 + b.s * 30, to = from + b.n * 30;
      var fmt = function (m) { return G.digits(Math.floor(m / 60) + ":" + String(m % 60).padStart(2, "0")); };
      h += '<div class="blk c-' + b.c + '" style="grid-column:' + (b.d + 2) + ";grid-row:" + (b.s + 2) + " / span " + b.n + '" tabindex="0" data-tip="' +
        G.esc("<b>" + G.plain(b.t) + "</b>" + catName[b.c] + " · " + fmt(from) + "–" + fmt(to)) + '"><b>' + G.esc(G.plain(b.t)) + "</b></div>";
    });
    return h + "</div></div>";
  };

  /* Bind hover/focus tooltips for any [data-tip] inside root */
  UI.bindTips = function (root) {
    var show = function (e) {
      var el = e.target.closest("[data-tip]");
      if (!el || !root.contains(el)) return;
      var r = el.getBoundingClientRect();
      var x = e.clientX || r.left + r.width / 2, y = e.clientY || r.top;
      G.tip.show(el.getAttribute("data-tip"), x, y);
    };
    root.addEventListener("pointermove", show);
    root.addEventListener("focusin", show);
    root.addEventListener("pointerleave", G.tip.hide);
    root.addEventListener("focusout", G.tip.hide);
    root.addEventListener("pointerout", function (e) { if (!e.relatedTarget || !e.relatedTarget.closest || !e.relatedTarget.closest("[data-tip]")) G.tip.hide(); });
  };

  /* Scope rings: concentric, symmetric (RTL-safe). activeIdx = ring to highlight (0 = innermost). */
  UI.rings = function (labels, activeIdx) {
    var n = labels.length, W = 420, H = 300, cx = W / 2, cy = H - 14, step = (H - 40) / n;
    var s = '<svg viewBox="0 0 ' + W + " " + H + '" role="img" aria-label="' + G.esc(labels.map(G.plain).join(" › ")) + '">';
    for (var i = n - 1; i >= 0; i--) {
      var r = step * (i + 1) + 8;
      var on = i <= activeIdx;
      var cur = i === activeIdx;
      s += '<path d="M ' + (cx - r) + " " + cy + " A " + r + " " + r + " 0 0 1 " + (cx + r) + " " + cy + ' Z" fill="' + (on ? "color-mix(in srgb, var(--ink) " + (8 + (activeIdx - i) * 5) + "%, var(--surface))" : "var(--surface-2)") + '" stroke="' + (cur ? "var(--ink)" : "var(--line-2)") + '" stroke-width="' + (cur ? 2.5 : 1) + '"/>';
    }
    for (var j = 0; j < n; j++) {
      var rr = step * (j + 1) + 8;
      var yy = cy - rr + (j === 0 ? 28 : 26);
      s += '<text x="' + cx + '" y="' + yy + '" text-anchor="middle" font-size="11.5" font-weight="' + (j === activeIdx ? 800 : 600) + '" fill="' + (j <= activeIdx ? "var(--ink)" : "var(--muted)") + '">' + G.esc(G.plain(labels[j])) + "</text>";
    }
    s += '<line x1="8" y1="' + cy + '" x2="' + (W - 8) + '" y2="' + cy + '" stroke="var(--line-2)" stroke-width="1"/>';
    return s + "</svg>";
  };
})();

#!/usr/bin/env node
"use strict";

const { randomUUID } = require("node:crypto");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const indexPath = path.join(root, "index.html");
const version = randomUUID();
const html = fs.readFileSync(indexPath, "utf8");
let count = 0;

const built = html.replace(/<(?:link|script)\b[^>]*>/gi, function (tag) {
  return tag.replace(/\b(href|src)=(['"])(assets\/[^'"]+)\2/gi, function (attribute, name, quote, value) {
    const url = new URL(value.replace(/&amp;/g, "&"), "https://build.invalid/");
    const assetPath = path.join(root, decodeURIComponent(url.pathname));
    if (!fs.statSync(assetPath).isFile()) throw new Error("Missing asset: " + value);
    url.searchParams.set("v", version);
    count += 1;
    const versioned = (url.pathname.slice(1) + url.search + url.hash).replace(/&/g, "&amp;");
    return name + "=" + quote + versioned + quote;
  });
});

if (!count) throw new Error("No asset URLs found in index.html");
fs.writeFileSync(indexPath, built);
console.log("Built " + count + " asset URLs with version " + version);

// ==UserScript==
// @name         Remove Query Strings
// @version      1.0
// @description  Rewrite URLs with query strings to make bookmarking easier
// @author       https://github.com/Technetium1
// @license      The Unlicense
// @match        https://*/*
// @match        http://*/*
// @run-at       document-end
// @grant        none
// ==/UserScript==

if (/(\?.*)?/g.test(location.pathname)) {
  console.log("Userscript removed query string from URL!");
  if (location.search) {
    window.history.replaceState(null, document.title, window.location.pathname);
  }
}

// ==UserScript==
// @name         YouTube Playlist Autoscroll
// @version      1.3
// @description  Automatically scroll to the bottom of your YouTube playlists
// @author       https://github.com/Technetium1
// @license      The Unlicense
// @match        https://www.youtube.com/playlist*
// @updateURL    https://github.com/Technetium1/Userscripts/raw/main/YouTube_Playlist_Autoscroll.user.js
// @downloadURL  https://github.com/Technetium1/Userscripts/raw/main/YouTube_Playlist_Autoscroll.user.js
// @run-at       document-body
// ==/UserScript==

window.onload = function () {
  setInterval(autoScroll, 50)
}

function autoScroll () {
  if (
    document.getElementsByClassName("ytd-continuation-item-renderer").length > 0
  ) {
    window.scrollBy({"top": document.getElementById("contents").scrollHeight, "behavior": "smooth"})
  }
}

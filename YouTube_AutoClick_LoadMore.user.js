// ==UserScript==
// @name         YouTube autoclick load more
// @version      1.0
// @description  Autoclick load more button on YouTube playlists
// @author       https://github.com/Technetium1
// @license      The Unlicense
// @match        https://www.youtube.com/*&disable_polymer=1
// @updateURL    https://github.com/Technetium1/Userscripts/raw/master/YouTube_AutoClick_LoadMore.user.js
// @downloadURL  https://github.com/Technetium1/Userscripts/raw/master/YouTube_AutoClick_LoadMore.user.js
// @run-at       document-body
// ==/UserScript==

window.onload = function(){
  setInterval(autoClick,100);
}

function autoClick(){
  if(document.getElementsByClassName("load-more-button").length>0){
  document.getElementsByClassName("load-more-button")[0].click();}
}

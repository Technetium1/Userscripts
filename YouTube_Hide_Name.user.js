// ==UserScript==
// @name         YouTube Hide Name
// @version      1.0
// @description  Remove your YouTube account name from view
// @author       https://github.com/Technetium1
// @license      The Unlicense
// @match        https://www.youtube.com/*
// @updateURL    https://github.com/Technetium1/Userscripts/raw/main/YouTube_Hide_Name.user.js
// @downloadURL  https://github.com/Technetium1/Userscripts/raw/main/YouTube_Hide_Name.user.js
// @grant        GM_addStyle
// @run-at       document-end
// ==/UserScript==

// Hides name from the left side of a playlist view [youtube.com/playlist]
GM_addStyle('.ytd-playlist-sidebar-secondary-info-renderer { display: none !important; }')

// Hides name from top of active playlist [youtube.com/watch?v=VideoID&list=PlaylistID]
GM_addStyle('#publisher-container > yt-formatted-string { display: none !important; }')

// Hides top section of top right dropdown menu, also hides manage account button
GM_addStyle('.ytd-active-account-header-renderer { display: none !important; }')

// Hides name from livestream chat
GM_addStyle('#input-container > yt-live-chat-author-chip { display: none !important; }')

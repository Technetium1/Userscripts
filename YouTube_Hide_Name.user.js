// ==UserScript==
// @name         YouTube Hide Name
// @version      1.5
// @description  Remove your YouTube account name from view
// @author       https://github.com/Technetium1
// @license      The Unlicense
// @match        https://www.youtube.com/*
// @match        https://studio.youtube.com/*
// @updateURL    https://github.com/Technetium1/Userscripts/raw/main/YouTube_Hide_Name.user.js
// @downloadURL  https://github.com/Technetium1/Userscripts/raw/main/YouTube_Hide_Name.user.js
// @grant        GM_addStyle
// @run-at       document-end
// ==/UserScript==

// Hides name from the top of playlist view [youtube.com/playlist]
GM_addStyle('.metadata-owner.ytd-playlist-header-renderer { display: none !important; }')

// Hides name from top of active playlist [youtube.com/watch?v=VideoID&list=PlaylistID]
GM_addStyle('#publisher-container > yt-formatted-string.publisher.style-scope.ytd-playlist-panel-renderer.complex-string > a { display: none !important; }')

// Hides top section of top right dropdown menu, also hides manage account button
GM_addStyle('.ytd-active-account-header-renderer { display: none !important; }')

// Hides ALL names from livestream chat
// GM_addStyle('#input-container > yt-live-chat-author-chip { display: none !important; }')

// Hides name on left side of YT Studio [studio.youtube.com]
GM_addStyle('#entity-label-container { display: none !important; }')

// Hide name on YT Library [youtube.com/feed/library]
GM_addStyle('#title { display: none !important; }')

// Hide Added by section on shared playlists
GM_addStyle('#contributor.ytd-playlist-video-renderer { display: none !important; }')

// Hide WATCHED overlay
GM_addStyle('.ytd-thumbnail-overlay-playback-status-renderer { display: none !important; }')

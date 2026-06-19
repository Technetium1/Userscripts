// ==UserScript==
// @name         Disable GitLab Next
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Forces gitlab_canary=false to prevent GitLab Next A/B testing
// @match        https://gitlab.com/*
// @match        https://*.gitlab.com/*
// @updateURL    https://github.com/Technetium1/Userscripts/raw/main/Disable_GitLab_Next.user.js
// @downloadURL  https://github.com/Technetium1/Userscripts/raw/main/Disable_GitLab_Next.user.js
// @run-at       document-start
// @grant        none
// ==/UserScript==

// https://gitlab.com/gitlab-com/gl-infra/next.gitlab.com/-/blob/master/public/index.js?ref_type=heads

(function () {
    'use strict';
    const expires = new Date(Date.now() + 31536000000).toUTCString();
    document.cookie = `gitlab_canary=false; path=/; domain=.gitlab.com; expires=${expires}; SameSite=Lax; Secure`;
})();

// ==UserScript==
// @name         Yugen Autoplay
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Autoplay script for YugenAnime with iframe handling
// @author       Technetium1
// @license      The Unlicense
// @match        https://yugenanime.tv/watch/*
// @match        https://yugenanime.sx/watch/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=yugenanime.tv
// @updateURL    https://github.com/Technetium1/Userscripts/raw/main/Yugen_Autoplay.user.js
// @downloadURL  https://github.com/Technetium1/Userscripts/raw/main/Yugen_Autoplay.user.js
// @grant        GM_notification
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';

    // Function to simulate a real user click, focus, and mouse events
    function simulateInteraction(element, win) {
        // Simulate focus event
        const focusEvent = new win.FocusEvent('focus', { bubbles: true, cancelable: true });
        element.dispatchEvent(focusEvent);

        // Simulate mouseover event
        const mouseOverEvent = new win.MouseEvent('mouseover', { bubbles: true, cancelable: true });
        element.dispatchEvent(mouseOverEvent);

        // Simulate click event
        const mouseEvent = new win.MouseEvent('click', {
            view: win,
            bubbles: true,
            cancelable: true,
            buttons: 1
        });
        element.dispatchEvent(mouseEvent);

        // Simulate keydown event (Space key to trigger play/pause)
        const keyEvent = new win.KeyboardEvent('keydown', {
            key: ' ',
            code: 'Space',
            keyCode: 32,
            which: 32,
            bubbles: true,
            cancelable: true
        });
        element.dispatchEvent(keyEvent);
    }

    // Function to check and interact with the play button inside an iframe
    function interactWithPlayButtonInIframe() {
        // Get the iframe element
        const iframe = document.querySelector('iframe#main-embed'); // Change this to match your iframe's id or class
        if (!iframe) {
            GM_notification({
                title: 'Yugen Autoplay',
                text: 'Iframe not found on the page.',
                timeout: 6000,
                silent: false
            });
            return;
        }

        // Try to access the iframe's document
        const iframeWindow = iframe.contentWindow;
        const iframeDocument = iframeWindow.document;

        if (!iframeDocument) {
            GM_notification({
                title: 'Yugen Autoplay',
                text: 'Cannot access iframe content. Possible cross-origin issue.',
                timeout: 6000,
                silent: false
            });
            return;
        }

        // Try to find the play button inside the iframe
        const playButton = iframeDocument.querySelector('button[aria-label*="Play"], button[data-plyr="play"]');
        if (playButton) {
            simulateInteraction(playButton, iframeWindow); // Interact with the button using various events
            GM_notification({
                title: 'Yugen Autoplay',
                text: 'Play button clicked!',
                timeout: 3000,
                silent: true
            });
        } else {
            GM_notification({
                title: 'Yugen Autoplay',
                text: 'Play button not found inside iframe.',
                timeout: 6000,
                silent: false
            });
        }
    }

    // Wait for the iframe to load
    window.addEventListener('load', function() {
        setTimeout(interactWithPlayButtonInIframe, 3000); // Wait for iframe to load content
    });

})();

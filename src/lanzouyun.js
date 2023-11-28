// ==UserScript==
// @name         蓝奏云密码填充
// @namespace    http://tampermonkey.net/
// @version      0.4
// @description  try to take over the world!
// @author       @zstings
// @match        https://*.lanzouy.com/*
// @match        https://*.lanzoue.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function () {
    'use strict';
    window.addEventListener('load', () => {
        document.querySelector('#pwd').value = new URLSearchParams(location.search.slice(1)).get('p');
        (document.querySelector('.passwddiv-btn') || document.querySelector('#sub')).click();
    });
})();

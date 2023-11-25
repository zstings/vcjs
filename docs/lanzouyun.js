// ==UserScript==
// @name         蓝奏云密码填充
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://zhaoziyan.lanzouy.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    window.addEventListener('load', () => {
        document.querySelector('#pwd').value = new URLSearchParams(location.search.slice(1)).get('p')
        document.querySelector('#sub').click()
    })
    // Your code here...
})();
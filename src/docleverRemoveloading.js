// ==UserScript==
// @name         doclever移除全屏loading
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       @zstings
// @match        *://*/html/web/controller/console/*
// @icon         http://106.53.141.111:10000/html/web/resource/pic/logo.ico
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function () {
    'use strict';
    document.addEventListener('DOMContentLoaded', () => {
        const style = document.createElement('style');
        style.innerHTML = '#SBDocStartLoading{display: none!important;}';
        document.querySelector('head').appendChild(style);
    });
})();

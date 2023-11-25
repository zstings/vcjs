// ==UserScript==
// @name         禁止copy事件绑定
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        *://*/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @run-at document-start
// ==/UserScript==

(function() {
    'use strict';
    const ev = 'copy'
    const onev = 'on' + ev
    const o = { value: null, writable: false }
    Object.defineProperty(HTMLElement.prototype, onev, o)
    Object.defineProperty(Document.prototype, onev, o)
    Object.defineProperty(window, onev, o)

    HTMLElement.prototype._addEventListener = Element.prototype.addEventListener;
    Document.prototype._addEventListener = Document.prototype.addEventListener;
    Window.prototype._addEventListener = Window.prototype.addEventListener;
    HTMLElement.prototype.addEventListener = _xaddEventListener;
    Document.prototype.addEventListener = _xaddEventListener;
    Window.prototype.addEventListener = _xaddEventListener;
    function _xaddEventListener(a, b, c) {
        if (a != ev && this && this._addEventListener) this._addEventListener(a, b, c);
    };

    window.addEventListener('DOMContentLoaded', function() {
        const clicks = [...document.querySelectorAll('[' + onev + ']')]
        clicks.forEach(item => {
            item.removeAttribute(onev)
            item.removeAttribute(onev)
        })
    })


    document.addEventListener("DOMContentLoaded", () => {
        const style = document.createElement('style')
        style.type = 'text/css'
        style.innerHTML = '*{user-select: auto!important;}'
        document.querySelector('head').appendChild(style)
    });
    // Your code here...
})();
// ==UserScript==
// @name         必应搜索小冰恢复
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  try to take over the world!
// @author       @zstings
// @match        https://cn.bing.com/search*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function () {
    'use strict';
    if (typeof Element != 'undefined' && Element.prototype) {
        const u = Element.prototype.appendChild;
        Element.prototype.appendChild = async function () {
            if (arguments[0]?.src?.includes('v9ro')) {
                const str = await resq(arguments[0].src);
                arguments[0].removeAttribute('src');
                arguments[0].innerHTML = str.replace(
                    'vu("我已经开始升级啦，期待一下吧！","")',
                    'vu(i[0].content.text,"")',
                );
                console.log(arguments[0]);
            }
            u.apply(this, arguments);
        };
    }

    function resq(url) {
        return new Promise((resolve) => {
            const xhr = new XMLHttpRequest();
            xhr.open('get', url);
            xhr.send();
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    resolve(xhr.responseText);
                }
            };
        });
    }
})();

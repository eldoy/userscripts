// ==UserScript==
// @name         Github account header remove
// @namespace    https://github.com/
// @version      0.1
// @description  Remove annoying header on Github account page
// @author       Vidar Eldøy <vidar@eldoy.com>
// @match        https://github.com/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=github.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var header = document.querySelector('.my-3')
    if (header) header.remove()
})();


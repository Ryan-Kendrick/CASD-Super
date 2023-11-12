// ==UserScript==
// @name         CASD Confetti
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        file:///C:/Users/ryan.ryan-PC/Desktop/769698%20Request%20Detail%20-%20CASD.mhtml
// @match        file://wsl.localhost/Ubuntu/home/ryan/projects/CASD-Super/examples/769698%20Request%20Detail%20-%20CASD.mhtml
// @match        *pdmweb.exe*
// @icon         https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Tabler-icons_confetti.svg/24px-Tabler-icons_confetti.svg.png?20230426175116
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    (new MutationObserver(check)).observe(document.body, {childList: true, subtree: true});
    function check(changes, observer) {
    if(document.querySelector('#imgBtn0')) {
        observer.disconnect();
        
        const editBtn = document.querySelector('#imgBtn0')
        editBtn.firstChild.textContent = 'test'

    }
}
})();
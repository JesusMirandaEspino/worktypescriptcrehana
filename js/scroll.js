"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scroll = function () {
    var btnUp = document.getElementById('btn-subir');
    btnUp.addEventListener('click', function (e) {
        e.preventDefault();
        var scrollToTop = window.setInterval(function () {
            var pos = window.pageYOffset;
            if (pos > 0) {
                window.scrollTo(0, pos - 20);
            }
            else {
                window.clearInterval(scrollToTop);
            }
        }, 10);
    });
};

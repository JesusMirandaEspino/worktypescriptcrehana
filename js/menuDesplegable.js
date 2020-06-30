"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.menudesplegable = function () {
    var menuFixed = document.getElementById('nav-movil');
    var header = document.querySelector('header');
    window.addEventListener('scroll', function () {
        var mediaqueryList = window.matchMedia('(max-width: 768px)');
        var btnSubir = document.getElementById('btn-subir');
        if (mediaqueryList.matches) {
            menuFixed.style.display = 'none';
            btnSubir.style.marginRight = '-80px';
        }
        else {
            menuEjecutar();
        }
    });
    var menuEjecutar = function () {
        var bodyTop = window.pageYOffset;
        var headerTop = header === null || header === void 0 ? void 0 : header.offsetHeight;
        var btnSubir = document.getElementById('btn-subir');
        if (bodyTop >= headerTop) {
            menuFixed.style.display = 'block';
            btnSubir.style.marginRight = '10px';
        }
        else {
            menuFixed.style.display = 'none';
            btnSubir.style.marginRight = '-80px';
        }
    };
};

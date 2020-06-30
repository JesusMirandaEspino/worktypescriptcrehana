"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.menuPhone = function () {
    var navPhone = document.getElementById('btn-burger');
    var menuNav = document.getElementById('menu-nav-phone');
    var elementosNav = document.querySelectorAll('.elementosNav');
    var menuActivo = false;
    console.log(elementosNav);
    navPhone === null || navPhone === void 0 ? void 0 : navPhone.addEventListener('click', function () {
        menuNav === null || menuNav === void 0 ? void 0 : menuNav.style.display = 'block';
        for (var i = 0; i < elementosNav.length; i++) {
            elementosNav[i].addEventListener('click', ocultar);
        }
    });
    var ocultar = function () {
        menuActivo = false;
        menuNav === null || menuNav === void 0 ? void 0 : menuNav.style.display = 'none';
    };
};

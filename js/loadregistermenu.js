"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerloading = function () {
    var menuRegister = document.getElementById('register');
    var btnCerrarRegister = document.getElementById('btn-cerrar-menu-register');
    var btnRegisterMenu1 = document.getElementById('newMember');
    var btnRegisterMenu2 = document.getElementById('menu-register');
    var cerrarMenuCustomer = function () {
        menuRegister.style.display = 'none';
    };
    var abrirMenuCustomer = function () {
        menuRegister.style.display = 'block';
    };
    btnRegisterMenu1 === null || btnRegisterMenu1 === void 0 ? void 0 : btnRegisterMenu1.addEventListener('click', function () {
        abrirMenuCustomer();
        btnCerrarRegister === null || btnCerrarRegister === void 0 ? void 0 : btnCerrarRegister.addEventListener('click', cerrarMenuCustomer);
    });
    btnRegisterMenu2 === null || btnRegisterMenu2 === void 0 ? void 0 : btnRegisterMenu2.addEventListener('click', function () {
        abrirMenuCustomer();
        btnCerrarRegister === null || btnCerrarRegister === void 0 ? void 0 : btnCerrarRegister.addEventListener('click', cerrarMenuCustomer);
    });
};

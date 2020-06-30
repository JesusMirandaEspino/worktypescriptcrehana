"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customerloading = function () {
    var menuCustomer = document.getElementById('customer-login');
    var btnCerrarCustomer = document.getElementById('btnCerrarCustomer');
    var btnCustomerMenu = document.getElementById('btn-customer-login');
    var cerrarMenuCustomer = function () {
        menuCustomer.style.display = 'none';
    };
    var abrirMenuCustomer = function () {
        menuCustomer.style.display = 'block';
    };
    btnCustomerMenu === null || btnCustomerMenu === void 0 ? void 0 : btnCustomerMenu.addEventListener('click', function () {
        abrirMenuCustomer();
        btnCerrarCustomer === null || btnCerrarCustomer === void 0 ? void 0 : btnCerrarCustomer.addEventListener('click', cerrarMenuCustomer);
    });
};

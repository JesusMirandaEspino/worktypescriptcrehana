"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sessionloading = function () {
    var menuSession = document.getElementById('sesion');
    var btnCerrarSession = document.getElementById('btn-cerrar-menu-session');
    var btnSessionMenu = document.getElementById('btn-menu-sesion');
    var agentbntopen = document.getElementById('agent-btn-open');
    var customerbntopen = document.getElementById('customer-btn-open');
    var menuAgent = document.getElementById('agent-login');
    var btnCerrarAgent = document.getElementById('btnCerrarAgent');
    var menuCustomer = document.getElementById('customer-login');
    var btnCerrarCustomer = document.getElementById('btnCerrarCustomer');
    var cerrarMenuCustomer = function () {
        menuCustomer.style.display = 'none';
    };
    var abrirMenuCustomer = function () {
        menuCustomer.style.display = 'block';
    };
    var cerrarMenuAgent = function () {
        menuAgent.style.display = 'none';
    };
    var abrirMenuAgent = function () {
        menuAgent.style.display = 'block';
    };
    var cerrarMenuSession = function () {
        menuSession.style.display = 'none';
    };
    var abrirMenuSession = function () {
        menuSession.style.display = 'block';
    };
    btnSessionMenu === null || btnSessionMenu === void 0 ? void 0 : btnSessionMenu.addEventListener('click', function () {
        abrirMenuSession();
        btnCerrarSession === null || btnCerrarSession === void 0 ? void 0 : btnCerrarSession.addEventListener('click', cerrarMenuSession);
    });
    agentbntopen === null || agentbntopen === void 0 ? void 0 : agentbntopen.addEventListener('click', function () {
        cerrarMenuSession();
        abrirMenuAgent();
        btnCerrarAgent === null || btnCerrarAgent === void 0 ? void 0 : btnCerrarAgent.addEventListener('click', cerrarMenuAgent);
    });
    customerbntopen === null || customerbntopen === void 0 ? void 0 : customerbntopen.addEventListener('click', function () {
        cerrarMenuSession();
        abrirMenuCustomer();
        btnCerrarCustomer === null || btnCerrarCustomer === void 0 ? void 0 : btnCerrarCustomer.addEventListener('click', cerrarMenuCustomer);
    });
};

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.agentloading = function () {
    var menuAgent = document.getElementById('agent-login');
    var btnCerrarAgent = document.getElementById('btnCerrarAgent');
    var btnAgentMenu = document.getElementById('btn-agent-login');
    var cerrarMenuAgent = function () {
        menuAgent.style.display = 'none';
    };
    var abrirMenuAgent = function () {
        menuAgent.style.display = 'block';
    };
    btnAgentMenu === null || btnAgentMenu === void 0 ? void 0 : btnAgentMenu.addEventListener('click', function () {
        abrirMenuAgent();
        btnCerrarAgent === null || btnCerrarAgent === void 0 ? void 0 : btnCerrarAgent.addEventListener('click', cerrarMenuAgent);
    });
};

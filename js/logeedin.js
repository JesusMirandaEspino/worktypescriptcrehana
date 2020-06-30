"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var agent_1 = require("./agent");
exports.default = (function () {
    if (localStorage.userName === 'slan48') {
        document.getElementById('login-user').innerHTML = " <h2> " + agent_1.getagent()[0].useridagent + " </h2> ";
        document.getElementById('log1').innerHTML = " <p> " + agent_1.getagent()[0].useridagent + " </p> ";
        document.getElementById('log2').innerHTML = " <p> Agent </p> ";
        document.getElementById('log3').innerHTML = " <p>Sesion <span id=\"menu-register\" > Close </span> </p> ";
        var closeSesionAgent = document.getElementById('menu-register');
        closeSesionAgent === null || closeSesionAgent === void 0 ? void 0 : closeSesionAgent.addEventListener('click', function (e) {
            e.preventDefault();
            localStorage.clear();
            window.location.reload();
        });
    }
});

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var customer_1 = require("./customer");
exports.default = (function () {
    if (localStorage.userName === 'jesus@crehana') {
        document.getElementById('login-user').innerHTML = " <h2> " + customer_1.getcustomer()[0].userEmailCustomer + " </h2> ";
        document.getElementById('log1').innerHTML = " <p> " + customer_1.getcustomer()[0].userPasswordCustomer + " </p> ";
        document.getElementById('log2').innerHTML = " <p> Customer </p> ";
        document.getElementById('log3').innerHTML = " <p>Sesion <span id=\"menu-register\" > Close </span> </p> ";
        var closeSesionCustomer = document.getElementById('menu-register');
        closeSesionCustomer === null || closeSesionCustomer === void 0 ? void 0 : closeSesionCustomer.addEventListener('click', function (e) {
            e.preventDefault();
            localStorage.clear();
            window.location.reload();
        });
    }
});

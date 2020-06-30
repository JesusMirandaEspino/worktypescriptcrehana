"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function () {
    var newId = document.getElementById('new-id').value;
    var newEmail = document.getElementById('new-email').value;
    var newPassword = document.getElementById('new-password').value;
    var bntLoginRegister = document.getElementById('btn-login-register');
    var menuRegister = document.getElementById('register');
    var allinputs = document.querySelectorAll('.input-register');
    var allLabels = document.querySelectorAll('.label-register');
    var newCustomerError = document.getElementById('new-customer-error');
    var btnCerrarCustomerError = document.getElementById('btnCerrarCustomerError');
    var cerrarRegister = function () {
        menuRegister === null || menuRegister === void 0 ? void 0 : menuRegister.style.display = 'none';
    };
    var openError = function () {
        newCustomerError === null || newCustomerError === void 0 ? void 0 : newCustomerError.style.display = 'block';
    };
    var closeError = function () {
        newCustomerError === null || newCustomerError === void 0 ? void 0 : newCustomerError.style.display = 'none';
    };
    var validar = function () {
        for (var i = 0; i < allinputs.length; i++) {
            if (allinputs[i].value == '') {
                allLabels[i].innerText = " Please Your Name " + allinputs[i].name + " ";
                console.log(allinputs[i]);
                ;
            }
            else {
                allLabels[i].innerText = " " + allinputs[i].name + " ";
            }
            if (allinputs[0].value >= 3 && allinputs[1].value >= 3 && allinputs[2].value >= 3) {
                allLabels[i].innerText = " " + allinputs[i].name + " ";
                allinputs[1].innerText = 'renderText';
                cerrarRegister();
                openError();
            }
        }
    };
    bntLoginRegister === null || bntLoginRegister === void 0 ? void 0 : bntLoginRegister.addEventListener('click', function () {
        validar();
    });
    btnCerrarCustomerError === null || btnCerrarCustomerError === void 0 ? void 0 : btnCerrarCustomerError.addEventListener('click', closeError);
});

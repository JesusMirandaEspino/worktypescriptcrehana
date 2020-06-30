"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var menuDesplegable_1 = require("./menuDesplegable");
var scroll_1 = require("./scroll");
var menuphone_1 = require("./menuphone");
// Menus
var loadmenuagent_1 = require("./loadmenuagent");
var loadmenucustomer_1 = require("./loadmenucustomer");
var loadregistermenu_1 = require("./loadregistermenu");
var menusesion_1 = require("./menusesion");
//ingresos usuarios
var agent_1 = require("./agent");
var customer_1 = require("./customer");
var logeedin_1 = __importDefault(require("./logeedin"));
var login_1 = __importDefault(require("./login"));
var logincustomer_1 = __importDefault(require("./logincustomer"));
var logedincustomer_1 = __importDefault(require("./logedincustomer"));
//valores usados
var menuAgent = document.getElementById('agent-login');
var menuCustomer = document.getElementById('customer-login');
var inciarAgent = document.getElementById('init-session-agent');
var iniciarCustomer = document.getElementById('init-session-customer');
var cerrarMenuAgent = function () {
    menuAgent.style.display = 'none';
};
var cerrarMenuCustomer = function () {
    menuCustomer.style.display = 'none';
};
inciarAgent.addEventListener('click', function (e) {
    e.preventDefault;
    var idagent = document.getElementById('idAgent').value;
    var passwordagent = document.getElementById('password-agent').value;
    login_1.default(agent_1.getagent()[0], { idagent: idagent, passwordagent: passwordagent });
    cerrarMenuAgent();
});
iniciarCustomer.addEventListener('click', function (e) {
    e.preventDefault;
    var emailcustomer = document.getElementById('email-customer').value;
    var passwordcustomer = document.getElementById('password-customer').value;
    logincustomer_1.default(customer_1.getcustomer()[0], { emailcustomer: emailcustomer, passwordcustomer: passwordcustomer });
    cerrarMenuCustomer();
});
menuphone_1.menuPhone();
menuDesplegable_1.menudesplegable();
scroll_1.scroll();
loadmenuagent_1.agentloading();
loadmenucustomer_1.customerloading();
loadregistermenu_1.registerloading();
menusesion_1.sessionloading();
logeedin_1.default();
logedincustomer_1.default();

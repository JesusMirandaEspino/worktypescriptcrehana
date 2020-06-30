"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var customer = /** @class */ (function () {
    function customer(_emailCustomer, _passwordCustomer) {
        this._emailCustomer = _emailCustomer;
        this._passwordCustomer = _passwordCustomer;
    }
    Object.defineProperty(customer.prototype, "userEmailCustomer", {
        get: function () {
            return this._emailCustomer;
        },
        set: function (emailcustomer) {
            this._emailCustomer = emailcustomer;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(customer.prototype, "userPasswordCustomer", {
        get: function () {
            return this._passwordCustomer;
        },
        set: function (passwordcustomer) {
            this._passwordCustomer = passwordcustomer;
        },
        enumerable: true,
        configurable: true
    });
    return customer;
}());
exports.customer = customer;
var usersCustomer = [];
var customer1 = new customer('jesus@crehana', 'crehana');
usersCustomer.push(customer1);
exports.getcustomer = function () {
    return usersCustomer;
};

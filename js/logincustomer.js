"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var logeedin_1 = __importDefault(require("./logeedin"));
exports.default = (function (db, formInfo) {
    if (formInfo.emailcustomer === db.userEmailCustomer) {
        if (formInfo.passwordcustomer === db.userPasswordCustomer) {
            localStorage.setItem('userName', formInfo.emailcustomer);
            logeedin_1.default();
        }
        else {
            return;
        }
    }
    else {
        return;
    }
});

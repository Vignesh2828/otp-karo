"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GenerateOtp = function () {
    try {
        var otp = Math.floor(100000 + Math.random() * 900000);
        return otp;
    }
    catch (error) {
        throw new Error(error);
    }
};
exports.default = GenerateOtp;


"use strict"
var roundLib = require("./round.js");
var exports = module.exports = {};
const alpha = .1;
var math = require('mathjs');
exports.test = function () {
    console.log(math.derivative('x', 'x'));
}
exports.executeJFunction = function (jFunctionExpresson, x) {
    return math.eval(jFunctionExpresson.replace(/x/g, x));
}
exports.costFunction = function (jFunction, x) {
    return math.derivative(jFunction, 'x').eval({ x: x });
}
var darivation = function (darivative, value) {

    let costValue = exports.costFunction(darivative, value);
    return roundLib.round(value - (alpha * costValue));
}

exports.nextCost = function (darivative, value) {
    let newThetaAdjustment = darivation(darivative, value);
    return newThetaAdjustment;
}
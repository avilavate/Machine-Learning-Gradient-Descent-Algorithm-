
"use strict"

var exports = module.exports = {};
const alpha = 0.1;
var math = require('mathjs');
exports.test = function () {
    console.log(math.derivative('x', 'x'));
}
var costFunction = function (jFunction, x) {
    return math.derivative(jFunction, 'x').eval({ x: x });
}
var darivation = function (darivative, value) {
    let costValue = costFunction(darivative, value);
    return value - alpha * costValue;
}

exports.nextCost = function (darivative, value) {
    return darivation(darivative, value);
}
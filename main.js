"use strict"

var gradient_descent = require('./gradient-descent.js');
var charts = require('./charting.js');

let theta = 5, prev = 0, current, w = .5;
let costs = [];
let jThetas = [];
jThetas.push(theta);
let costFunctionJ = 'x2+3';
prev = gradient_descent.nextCost(costFunctionJ, theta);
let iterations = 500;

while (iterations--) {
    costs.push(prev);
    jThetas.push(theta);
    if (prev == 0) {
        console.log("Found..." + prev);
        break;
    }
    theta = theta - w;
    //  jThetas.push(theta);
    prev = current;
    current = gradient_descent.nextCost(costFunctionJ, theta);
    if (Math.abs(current) > Math.abs(prev)) {
        w = -1 * w;
    }
}
console.log(costs);
console.log(jThetas);
var jthetaVal = jThetas.map(t => {
    return t * t;
});
console.log(jthetaVal);
// costs = costs.filter(e => {
//     if (e != undefined) return e;
// })
// jThetas = jThetas.filter(e => {
//     if (e != undefined) return e;
// })
//charts.draw(costs, jThetas);
//console.log(costs);
charts.draw(jThetas, jthetaVal);
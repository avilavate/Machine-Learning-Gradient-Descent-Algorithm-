"use strict"

var gradient_descent = require('./gradient-descent.js');
var charts = require('./charting.js');
var round = require('./round.js');

let theta = 3, prev = 0, current, w = .1;
let costs = [], jThetas = [], costFunctionJ = '3x', iterations = 40;

jThetas.push(theta);
prev = gradient_descent.nextCost(costFunctionJ, theta);

while (iterations--) {
    prev = round.round(prev);
    current = round.round(current);
    if (prev == 0 || current < 0) {
        console.log("found..." + jThetas[jThetas.length - 1]);
        break;
    }
    theta = round.round(theta - w);
    costs.push(prev);
    jThetas.push(theta);
    prev = current;
    current = gradient_descent.nextCost(costFunctionJ, theta);
    console.log(prev + " : " + current + " : " + theta);
    if (Math.abs(current) > Math.abs(prev)) {
        w = (-1) * w;
    }
}

var jthetaVal = jThetas.map(t => {
    return t * t;
});
//console.log("Theta Value where Cost funstion is minium: "+ jThetas);
charts.draw([0, 1, 2, 3], [0,3,6,9]);
//charts.draw([0, 1, 2, 3], [0,]);
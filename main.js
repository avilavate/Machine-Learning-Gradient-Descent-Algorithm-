"use strict"

var gradient_descent = require('./gradient-descent.js');
var charts = require('./charting.js');
var round = require('./round.js');

let theta = 3, prev = 0, current;
let costs = [], jThetas = [], costFunctionJ = 'x*x', iterations = 500, nextTheta, nextCost;

jThetas.push(theta);
prev = gradient_descent.costFunction(costFunctionJ, theta);

while (true) {
    debugger;
    nextTheta = gradient_descent.nextCost(costFunctionJ, theta);
    nextCost = gradient_descent.costFunction(costFunctionJ, nextTheta);
    if (gradient_descent.costFunction(costFunctionJ, nextTheta) == gradient_descent.costFunction(costFunctionJ, theta))
        break;
    theta = nextTheta;
    console.log(theta + " : " + nextTheta + " : " + nextCost)
}

var jthetaVal = jThetas.map(t => {
    return t * t;
});
//console.log("Theta Value where Cost funstion is minium: "+ jThetas);
//charts.draw([0, 1, 2, 3], [0, 3, 6, 9]);
//charts.draw([0, 1, 2, 3], [0,]);
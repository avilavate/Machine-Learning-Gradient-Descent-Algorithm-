"use strict"

var gradient_descent = require('./gradient-descent.js');
var charts = require('./charting.js');
var round = require('./round.js');

let theta = 8, prev = 0, current;
let costs = [], jThetas = [], costFunctionJ = '2*x+3', iterations = 150, nextTheta;


var cost = gradient_descent.executeJFunction(costFunctionJ, theta);
jThetas.push(theta);
while (iterations--) {
    nextTheta = gradient_descent.nextCost(costFunctionJ, theta);
    jThetas.push(nextTheta);
    cost = gradient_descent.executeJFunction(costFunctionJ, nextTheta);
    costs.push(Math.abs(cost));
    theta = nextTheta;
    //console.log(theta + " : " + nextTheta + " ===> " + parseInt(cost.toFixed()));
}
console.log("ø"+ "  :  "+ "j(ø)");
console.log("_________________________________________");
for(let i=0;i<costs.length ;i++){
console.log("("+jThetas[i]+" , "+costs[i]+")");
}
charts.draw(jThetas,costs);
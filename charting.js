var CliGraph = require("cli-graph");

var exports = module.exports = {};

exports.draw = (x, y) => {
    var heart = new CliGraph({ height: 40, width: 40 });

    // Add points
    for (let i = 0; i < y.length; i++) {
        heart.addPoint(x[i], y[i]);
    }
    console.log(heart.toString());

}

// Create a new function graph 


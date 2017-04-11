var CliGraph = require("cli-graph");

var exports = module.exports = {};

exports.draw = (x,y) => {
    //console.log("drawing: " + inputs);
    // var g1 = new CliGraph({
    //     height: 20
    //     , width: 20
    //     , center: { y: 18 }
    // }).setFunctionX(function (x) {
    //     x = (inputs.pop()* inputs.pop())/5;
    //     console.log("x-axis: " + x)
    //     return x;
    // });
    // console.log(g1.toString());

    var heart = new CliGraph({ height: 25, width: 20 });

    // Add points
    x.forEach((i,index) => {
        heart.addPoint(
           i
            ,y[index]
        );
    });
    console.log(heart.toString());

}

// Create a new function graph 


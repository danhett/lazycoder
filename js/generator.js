var tracery = require('tracery-grammar');
var fs = require('fs');
var g = require('./grammars');

var grammar = tracery.createGrammar(g.grammars.cyril);
grammar.addModifiers(tracery.baseEngModifiers);

var looping = false;
var timer;

/**
 * Generates a single pattern, no loops.
 */
exports.once = function() {
    console.log("Generating single new pattern...\n");

    generatePattern();
}

/**
 * Starts the endless loop generation cycle
 */
exports.startLoop = function() {
    console.log("Starting loop...");

    generatePattern();
    timer = setInterval(generatePattern, 10000);

    looping = true;
}

/**
 * Stops the endless loop generation cycle
 */
exports.stopLoop = function() {
    if(looping) {
        console.log("Stopping loop...");
        clearInterval(timer);
        looping = false;
    }
    else {
        console.log("Currently not looping.");
    }
}

/**
 * Actual pattern generation, used in both modes.
 */
var generatePattern = function() {
    var output = grammar.flatten('#origin#');
    console.log(output);

    fs.writeFile('data/code/0.cy', output, function (err) {
      if (err) return console.log(err);
    });
}

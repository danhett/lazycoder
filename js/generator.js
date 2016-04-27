var tracery = require('tracery-grammar');
var fs = require('fs');
var g = require('./grammars');

var grammar = tracery.createGrammar(g.grammars.cyril);
grammar.addModifiers(tracery.baseEngModifiers);

var looping = false;
var timer;
var output;

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

    analyseChangableElements();
    //timer = setInterval(generatePattern, 5000);

    looping = true;
}

/**
 * Identifies numbers, params and other elements that can
 * be changed while the editor process is running. Assembles
 * a list in advance, randomises it, and works through.
 */
exports.analyseChangableElements = function() {
    // TODO - find and assemble list of candidate numbers and colours etc
    // TODO - push into list, and provide a randomised series of possibles for each
    // TODO - start a timer, and work through the list, editing as we go
    // TODO - at a given threshold, regenerate the imagery entirely and restart this process
    // TODO - at every stage, assess if the image is likely to be a coloured screen
    //        OR could we somehow actually analyse the screen's content??? How?


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
    output = grammar.flatten('#origin#');
    console.log(output);

    // TODO - only write to 0.cy or can we kick Cyril into using multiple?
    fs.writeFile('data/code/0.cy', output, function (err) {
      if (err) return console.log(err);
    });
}

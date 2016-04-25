var tracery = require('tracery-grammar');
var fs = require('fs');
var g = require('./grammars');

var grammar = tracery.createGrammar(g.grammars.cyril);
grammar.addModifiers(tracery.baseEngModifiers);

exports.generate = function() {
    console.log("Generating new pattern...");

    var output = grammar.flatten('#origin#');
    console.log(output);

    fs.writeFile('data/code/0.cy', output, function (err) {
      if (err) return console.log(err);
    });
}

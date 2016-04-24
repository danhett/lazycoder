var tracery = require('tracery-grammar');
var fs = require('fs');
var g = require('./grammars');

var grammar = tracery.createGrammar(g.grammars.complex);
grammar.addModifiers(tracery.baseEngModifiers);

exports.generate = function() {
    console.log("Generating new pattern...");

    fs.writeFile('cyril/data/code/0.cy', grammar.flatten('#origin#'), function (err) {
      if (err) return console.log(err);
    });
}

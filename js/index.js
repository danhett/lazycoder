#!/usr/bin/env node
'use strict';

var gen = require('./generator');
var program = require('commander');

program.version('1.0.0');

/**
 * GENERATE
 * Creates a single pattern. This is mostly for testing.
 */
program
  .command('generate')
  .action(function(req,optional) {
    gen.generate();
  });

/**
 * AUTOMATE
 * Continually updates cyril intelligently. This is the main usage loop.
 */
program
  .command('start')
  .action(function(req,optional) {
    console.log('Starting lazycoder!');
  });

program
  .command('stop')
  .action(function(req,optional) {
    console.log('Lazycoder stopped.');
  });

program.parse(process.argv);

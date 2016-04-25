#!/usr/bin/env node
'use strict';

var gen = require('./generator');
var program = require('commander');

program.version('1.0.0');

/**
 * ONCE
 * Creates a single pattern. This is mostly for testing.
 */
program
  .command('once')
  .action(function(req,optional) {
    gen.once();
  });

/**
 * AUTOMATE
 * Continually updates cyril intelligently. This is the main usage loop.
 */
program
  .command('start')
  .action(function(req,optional) {
    gen.startLoop();
  });

program
  .command('stop')
  .action(function(req,optional) {
    gen.stopLoop();
  });

program.parse(process.argv);

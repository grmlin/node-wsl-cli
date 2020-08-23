#!/usr/bin/env node

"use strict";

const { program } = require("commander");
const pckJson = require("./package.json");

const { registerRun, registerExport } = require("./lib/commands");

program.version(pckJson.version);
registerRun(program);
registerExport(program);

program.parse(process.argv);

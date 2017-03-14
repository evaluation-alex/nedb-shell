import * as chalk from 'chalk';
import * as program from 'commander';
import { LoadDatastores } from './LoadDatastores';
import { watch_this } from './autoReload';
import { Load } from './_load';
import * as db from './db';
import * as load from './load';
import { repl } from './repl';
import set = Reflect.set;
const pkg = require('../package.json');

export const getDB = ():any => db;
export const getLoad= ():any => load;
export const getRepl = ():any => repl;
program
  .version(` NeDB: ${pkg.dependencies.nedb} \n NeDB-Shell: ${pkg.version}`)
  .parse(process.argv);


LoadDatastores();
console.log(chalk.blue(`NeDB-Shell: ${new Date()}`));
Load(repl);
watch_this(process.cwd());

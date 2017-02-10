
import * as chalk from 'chalk';

const findOneCB = function (err:Error, doc:string):void {
  if(err) console.log(chalk.red(`${err}: \n An error occurred during FindOne`));
  console.log(JSON.stringify(doc, null, 2));
};

export function printFindOne(query:{}, projection?: {}, cb?: any):void{
  this.findOne(query, projection, (cb?cb:findOneCB));
}
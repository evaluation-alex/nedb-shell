import { path } from '../singletons/path';


export function db(){
  console.log(path.prop)
}

export function change(d: string){
  path.prop = d;
}

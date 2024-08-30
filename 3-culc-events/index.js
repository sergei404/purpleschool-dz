import EventEmitter from "node:events";

import { calculate } from "../calculate.js";

const eventEmitter = new EventEmitter();

const [, , operator1, operator2, operand] = process.argv;

eventEmitter.on(operand, (a,b) => {
  console.log(calculate[operand](a,b))
});

eventEmitter.emit(operand, +operator1, +operator2)

  

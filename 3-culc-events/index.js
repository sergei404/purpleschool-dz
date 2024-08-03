import EventEmitter from "node:events";

import { add } from "../add.js";
import { divide } from "../divide.js";
import { multiply } from "../multiply.js";
import { subtract } from "../subtract.js";

const eventEmitter = new EventEmitter();

const [, , operator1, operator2, operand] = process.argv;

eventEmitter.on("add", (a,b) => {
  console.log(add(a,b))
});
eventEmitter.on("substract", (a,b) => {
  console.log(divide(a,b))
});
eventEmitter.on("multiply", (a,b) => {
  console.log(multiply(a,b))
});
eventEmitter.on("divide", (a,b) => {
  console.log(subtract(a,b))
});

if (operand == 'add') {
  eventEmitter.emit('add', +operator1, +operator2)
} else if (operand == 'substract') {
  eventEmitter.emit('substract', +operator1, +operator2)
} else if (operand == 'multiply') {
 eventEmitter.emit('multiply', +operator1, +operator2)
} else if (operand == 'divide') {
  eventEmitter.emit('divide', +operator1, +operator2)
} else {
  console.log("There is no such operator")
}
  

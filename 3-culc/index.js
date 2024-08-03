import { add } from "../add.js";
import { divide } from "../divide.js";
import { multiply } from "../multiply.js";
import { subtract } from "../subtract.js";


const [, , operator1, operator2, operand] = process.argv

if (operand == 'add') {
    console.log(add(+operator1, +operator2));
} else if (operand == 'substract') {
    console.log(subtract(operator1, operator2));
} else if (operand == 'multiply') {
    console.log(multiply(operator1, operator2)); 
} else if (operand == 'divide') {
    console.log(divide(operator1, operator2));
} else {
    console.log("There is no such operator");
}
         
        
        

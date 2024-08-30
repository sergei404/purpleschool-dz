import { calculate } from "../calculate.js";

const [, , operator1, operator2, operand] = process.argv

if (calculate[operand]) {
    console.log(calculate[operand](+operator1, +operator2))
} else {
    console.log("There is no such operator");
}

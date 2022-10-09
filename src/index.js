import './style.css';
import * as math from "./math";

const multiply = (a) => a * 8;

document.write('ES6 modules!\n');

document.write('sum = ' + math.sum(1, 2));
console.log('multiply from index.js = ' + multiply(5));
console.log('multiply from math = ' + math.multiply(5));

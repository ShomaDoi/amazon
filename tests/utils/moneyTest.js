import { formatCurrency } from "../../scripts/utils/money.js";

console.log('testing formatCurrency()');

console.log('converts cents into dollars');

if (formatCurrency(2095) === '20.95') {
    console.log('test passed');
}else {
   console.log('test failed');
}

console.log('works with zero');

if (formatCurrency(0) === '0.00') {
    console.log('test passed');
}else {
    console.log('test failed');
}

console.log('rounds up the number proprerly');

if (formatCurrency(2000.5) === '20.01') {
    console.log('test passed');
}else {
    console.log(formatCurrency(2000.5));
    console.log('test failed');
}
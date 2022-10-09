(() => {
    "use strict";
    document.write("ES6 modules!\n"), document.write("sum = " + (1 + 2)), console.log("multiply from index.js = " + (o => 8 * o)(5)), console.log("multiply from math = " + (o => 3.14 * o)(5))
})();
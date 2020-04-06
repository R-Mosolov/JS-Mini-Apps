'use strict';

const DosageCalculator = require('./lib/child-nutrition-calc');

const dosageCalculator = new DosageCalculator();

console.log(dosageCalculator.useZaytseva(3000, 1));
console.log(dosageCalculator.useFinkelstein(3000, 1));
console.log(dosageCalculator.useGeibnerCherni(3000, 55));
console.log(dosageCalculator.useMaslov(3000, 55));
console.log(dosageCalculator.useCalorage(3000, 1));
console.log(dosageCalculator.useOneTime(3000, 1));
console.log(dosageCalculator.throwRejection());

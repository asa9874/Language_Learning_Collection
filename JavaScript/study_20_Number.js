
var n= new Number(12);
Number.EPSILON
Number.MAX_VALUE
Number.MIN_VALUE
Number.POSITIVE_INFINITY
Number.NEGATIVE_INFINITY

Number.isFinite(NAN)//false
Number.isFinite(11)//true

Number.isInteger(1)//true
Number.isInteger(1.11)//false

Number.isNaN(NaN)//true
Number.isNaN(1)//false


Number.isSafeInteger(10000000000000001)//false
Number.isSafeInteger(10000000000000000)//true
77.1234.toExponential(); // logs 7.71234e+1

1.2345.toFixed(2); // 1.23
123456.7.toPrecision(6) //123457
(131).toString();
typeof 123;    // number


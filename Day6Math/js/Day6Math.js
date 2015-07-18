
 /*
Travis Johnson
Section 00
07/18/15
Day 6 Math
 */


//alert("Testing");

 //Math.round() - traditional rounding
 var num1 = 9.544;
 console.log(num1);
 console.log(Math.round(num1));

 //Math.floor - always rounds down
 var num2 = 6.8;
 console.log(num2);
 console.log(Math.floor(num2));
 //Math.ceil() - always rounds up to nearest integer if there is a decimal
 var num3 = 4.15;
 console.log(num3);
 console.log(Math.ceil(num3));
 //Math.random() - returns a number between zero and almost 1
 var num4 = Math.random();
 console.log(num4);

 //Random number between 0 and 10
 var num5 = Math.random() * 10;
 console.log(num5);

 //Random integer between 0 and 100
 var num6 = Math.round(Math.random() * 100);
 console.log(num6);

 //Random number between two numbers that does not start at zero

 //Math.random() * (max-min) + min

 //a random number between 50 and 80
 var num7 = Math.round(Math.random() * (80 - 50) + 50);
 console.log(num7);

 //sn integer between 100-1000
 var num9 = Math.round(Math.random()*(1000-100)+100);
 console.log(num9);

 //Math object constant
 //Are of a circle = Radius * Radius * Pi
 //Math.PI - gives you the true value of PI
 var radius = 7;
 var areaCircle = radius * radius * Math.PI;

 //.tofixed(#) - rounds the number to the number of decimal places that matches the # inside the (). 2 would round to second decimal
 

 console.log(areaCircle.toFixed(3));
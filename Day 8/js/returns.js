
 /*
Travis Johnson
Section 00
07/23/15
Day 8 returns
 */


//alert("Testing");

 //create a functions for area of a rectangle
 function calcArea(w,h){
     //calculate area
     var area=w*h;

     //console.log the results
     console.log("The area is " + area);
     //in order to use results in main code use return
     return area;

 }

 calcArea(10,30);
 //catch the returned value in a variable
var results = calcArea(10,30);
 //access area in main code
 console.log(results);

 //calculate w 40 h 60
 var results2 = calcArea(40,60);
 console.log(results2);

 var total= results + results2;
 console.log(total);
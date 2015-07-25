
 /*
Travis Johnson
Section 00
07/25/15
Day 9 procedure
 */


//alert("Testing");

 //this is a normal function
 function calcArea(w,h){
     var area=w*h;
     return area
 }

 //function call for calcarea
 calcArea(10,20);
 //catch the return value
 var results1=calcArea(10,20);
 console.log(results1);

 //This is a procedure
 //list of steps
 //Returns Nothing
 function calcPeri(w,h){
     var peri=2*w+2*h;
     console.log(peri);

 }
 //function call for our procedure
 //Notice this function call does not catch anything because we are not returning something
 calcPeri(10,20);
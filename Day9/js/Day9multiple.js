
 /*
Travis Johnson
Section 00
07/25/15
Day 9 multiple
 */


//alert("Testing");
 //alert("Testing");

 //create multiple function using information from the user
 //calculate the perimeter and area of a rectangle


 function periRect (w,h){
     //perimeter = 2 * width + 2 * height
     var p = 2*w + 2*h;
     return p

 }

 //create an anon funtion for the area
 var areaRect = function (w,h){
     var area = w * h
     return area;

 };


 //prompt the user for width and height
 var width = prompt("We are looking for the perimeter and area of rectangle\n Please enter the width");


 //validation
 while(width ==="" || isNaN(width)){
     //Re-prompt user
     width = prompt("Please do not leave blank and only use numbers\n what is the width");

 }
 //parseInt
 width = parseInt(width);

 var height = prompt("What is the height of the rectangle");
 //validation
 while(height === "" || isNaN(height)){
     height = prompt("Please do not leave blank and only use numbers\nWhat us the height");

     height = parseInt(height);

     //Function calls

     var resultsPeri = periRect(width,height);
     var resultsArea = areaRect(width,height);

     //Combined console.log
     console.log("The perimeter of your rectangle is " + resultsPeri + "and the area is " + resultsArea + ".");

 }
 //create a combined function

 function combinedRect(w,h){
     //first calculate the perimter
     var p = 2 * w + 2 * h;
     //calc area
     var a = w*h;

     //return both values
     return [p,a];
 }

 //function call the combined array
 var combinedResults = combinedRect(width,height);

 console.log(combinedResults);
 console.log("The perimeter of your rectangle is " + combinedResults[0] + "and the area is " + combinedResults[1]);

 //create a procedure tht will console log the rect peri and area
 function printOut(p,a){
     console.log("The perimeter is "+p);
     console.log("The are of the rectangle is "+a);

 }
 //Function call for prinout
 printOut(resultsPeri,resultsArea)
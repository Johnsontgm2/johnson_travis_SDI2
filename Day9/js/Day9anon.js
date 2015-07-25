
 /*
Travis Johnson
Section 00
07/25/15
Day 9 anon
 */


//alert("Testing");

 //Basic Anonymous function
 //var functionName = functions(){};

 //Extremely popular in javascript and jquery
 //Important in Object oriented programming
 //For now, it is a matter of style choice between anon and regular

 //create anon function to calculate the area of a triange
 var triArea=function(b,h){
     var area=.5*b*h;
     return area;

 };

 //Function call for anon function
 //MUST BE AFTER THE DEFINITION FOR ANON FUNCTION!!!!!!!!!*********!!!!!!
 var results=triArea(10,20);
 console.log(results);
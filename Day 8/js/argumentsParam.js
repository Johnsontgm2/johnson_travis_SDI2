
 /*
Travis Johnson
Section 00
07/23/15
Day 8 Arguments and Parameters
 */


//alert("Testing");

 //arguments - go in the function call these are the specific values
 //parameters - go in the function definition and they catch the arguments(generic containers)

 //Create variables for width and height
 var width=10;
 var height=20;


 //create a function for area of a retangle
 function calcArea(w,h){
     //create variables
     //var width=10;
     //var height=20;

     //calculate the area
     var area = w*h;

     //console log area
     console.log("The area of a rectange with a width of " + width + " and a height of " + height + " is " + area);
 }
 //call the function
 calcArea(width,height);

 //find the area width =6 height =7
 calcArea(6,7);

 //ask the user
 var userWidth=prompt("Lets calculate the are of the rectangle.\n Please enter a width");
 //validate and number cast the input
 var userHeight=prompt("Please enter a height");

//How would I get the area?
 calcArea(userWidth,userHeight);

 //create a function the will calculate dog years
 function dogYears(humanAge){
     //input a human year and spit out a dog year
     //human age * 7 = dog age
     var dogAge=humanAge*7;
     //print results
     console.log("A dog who is " + humanAge+ " is "+ dogAge + " in dog years");
 }


 //calculate how old a 4 year old dog is in dog years
 dogYears(4);
 //calculate how old a 7 year old dog is in dog years
 dogYears(7);
 //prompt user
 var userDogAge=prompt("Lets figure out how old your dog is in dog years \n please enter your dogs human age");
 //validate and cast

 dogYears(userDogAge);






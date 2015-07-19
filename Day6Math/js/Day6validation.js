
 /*
Travis Johnson
Section 00
07/18/15
Day 6 Validation
 */


//alert("Testing");

//isNaN(item to test)
 // true if not a number
 //false if it is a number

 //to test blank we (item ==="")

 //to test text strings
 //(item.tolowerCase() != "yes" && item.tolowerCase() !="no"

 //for validation use a while loop
 //use while loop because we dont know how many times the user will get it wrong

 //ask the user for a number
 var userNum = prompt("Please enter in a number");
 //directly after each prompt validate
 while(isNaN(userNum) || userNum===""){
     console.log("Please do not leave blank and only enter a number")

 }

 //ask the user for either red or black
 var color=prompt("Please choose red or black");
 while(color.toLowerCase()!="red" && color.toLowerCase()!= "black"){
     //reprompt the user using the same variable
     color= prompt("Please only type in red or black \n choose your color");

 }

 /*
Travis Johnson
Section 00
07/14/15
Day 4 ternary
 */


//alert("Testing");
 var gpa = 3.9;

 //if gpa is over 2.0 you can graduate
 if(gpa>2){
     console.log("congrats you can graduate!");

 }else{
     console.log("Sorry your gpa is too low.")
 }

 //Convert this to a ternary
 //(Condition to test)? true code : false code;
 (gpa>2) ? console.log("You can graduate") : console.log("You can not graduate low gpa");

 //Test kids age verse what book they should read
 //if the kid is under 10 they can read green eggs and ham otherwise time machine

 var age = 12;
 var book;

 book = (age>10) ? "The Time Machine" : "Green Eggs and Ham";
 var book2 = (age<=10)?"Green Eggs and Ham" : "The time machine";
 console.log("You kid should read " + book);
 console.log(book2);
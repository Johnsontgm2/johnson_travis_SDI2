
 /*
Travis Johnson
Section 00
07/25/15
Johnson Travis Functions Assignment
 */


//alert("Testing");

 /*
 This calculator will give you the kinetic energy of you arrow when it hits its target, for an arrow, the kinetic energy is calculated by taking the weight in grains, multiplying it by the square of the speed in feet per second, and dividing by the constant 450800.
  */

 //inform user and user prompt for parts of the arrow to find weight
 alert("This calculator will find kinetic energy of your arrow. To find this you must have the weight of your arrow in grams per inch, and whatever arrow head you will be using. This calculation also requires the speed of the bow, we will use the manufacturer bow speed.");

 var arrowLength=prompt("What is the length of your arrow in inches?");
 while(arrowLength==="" || isNaN(arrowLength)){
     if(arrowLength ===""){
         arrowLength=prompt("Please do not leave blank. What is the length of the arrow in inches?");
     }else{
         arrowLength=prompt("Please only enter a number. What is the length of the arrow in inches?");
     }

 }

 //number cast
arrowLength=Number(arrowLength);

 var arrowWeight=prompt("What is the weight of your arrow in grams per inch?");
 while(arrowWeight==="" ||isNaN(arrowWeight)){
     if(arrowWeight===""){
         arrowWeight=prompt("Please do not leave blank. What is the weight of your arrow in grams per inch?");

     }else{
         arrowWeight=prompt("Please only enter a number. What is the weight of your arrow in grams per inch?");
     }

 }

 //number cast
 arrowWeight=Number(arrowWeight);

 var arrowHeadWeight=prompt("What is the weight of the arrow head in grams?");
 while(arrowHeadWeight===""||isNaN(arrowHeadWeight)){
     if(arrowHeadWeight===""){
         arrowHeadWeight=prompt("Please do not leave blank. What is the weight of the arrow head in grams?");
     }else{
         arrowHeadWeight=prompt("Please only enter a number. What is the weight of the arrow head in grams?");
     }
 }
 //number cast
 arrowHeadWeight=Number(arrowHeadWeight);

 //prompt for manufacturer bow speed
 var manufactBowspeed=prompt("What is the manufacturer rated speed for your bow in FPS?");
 while(manufactBowspeed==="" || isNaN(manufactBowspeed)){
     if(manufactBowspeed===""){
         manufactBowspeed=prompt("Please do not leave blank. What is the manufacturer rated speed for your bow in FPS?");
     }else{
         manufactBowspeed=prompt("Please only enter a number.What is the manufacturer rated speed for your bow in FPS?");
     }
 }

 //number cast
 manufactBowspeed=Number(manufactBowspeed);

 //create function to calculate total arrow weight
 function arrowWeightTotal(al,aw,ahw){
     var weightOfArrow=(al*aw)+ahw;
     return weightOfArrow
 }
 //variable to catch total arrow weight
 var finalArrowWeight =arrowWeightTotal(arrowLength,arrowWeight,arrowHeadWeight);

 //Let user know total arrow weight
 console.log("The total weight of your arrow is "+finalArrowWeight+" grams");

 //create anon function to find the kinetic energy of your arrow hitting a target
 var calcVelocity = function(weight,speed,constant){
     var velocity=weight*(speed*speed)/constant;
     return velocity

 };

 //call anon function
 var finalVelocity=calcVelocity(finalArrowWeight,manufactBowspeed,450800);

 //let user know final answer
 console.log("An arrow with a weight of "+finalArrowWeight+" grams, and using a bow with a speed of "+manufactBowspeed+" FPS Gives you an arrow with the velocity of "+finalVelocity+" ft pounds");

 /*
 all prompts validate
 Entered 28 for arrow length
 Entered 8 for arrow weight
 Entered 100 for arrow head weight
 Entered 300 for manufacturer bow speed
 Returned 64.6 Ft pounds of force
 Entered 30 for arrow length
 Entered 9  for arrow weight
 Entered 150 for arrow head weight
 Entered 350 for manufacturer bow speed
 Returned 114.3 ft pounds
 Returned


  */



























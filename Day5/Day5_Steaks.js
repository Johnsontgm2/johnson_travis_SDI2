/**
 * Created by spankiticus on 7/16/15.
 */
/*
Travis Johnson
16July2015
Day 5 steaks
 */

//alert("Test");
//Test steak temp to see if its done

/*
 Extra-rare or Blue 		115–120 °F
 Rare cold red center    	120–130 °F
 Medium rare                130–140 °F
 Medium                     140–150 °F	145 °F and rest for at least 3 minutes
 Medium well                150–160 °F
 Well done                  160 °F+	160 °F for ground beef
 */

//Create variable for steak temp
var SteakTemp = prompt("What is the temperature in F of your steak");

//validate user prompt
console.log(isNaN(7));
console.log(isNaN("car"));
/*
if(isNaN(SteakTemp)){
    //Code that will run if steaktemp is not a number
    //Re-prompt using the same variable for the user
    SteakTemp = prompt("Please only enter numbers \n What is the temp in F of your steak");
}
//Validate for blank input
if(SteakTemp === ""){
    //This code will run if the user leaves the prompt blank
    SteakTemp = prompt("Please do not leave blank \n What is the temperature of your steak?")
}

//combine both validation
if(isNaN(SteakTemp) || SteakTemp === ""){
    console.log("Please do not leave blank and only enter a number \n What is the temperature of the steak")
}
*/

if(SteakTemp <= 115 ){
    console.log("This steak is raw do not eat");
} else if(SteakTemp <= 120) {
    console.log("This steak is extra-rare.")
} else if(SteakTemp <= 130){
    console.log("This steak is rare");
} else if(SteakTemp <= 140){
    console.log("This steak is medium rare");
} else if(SteakTemp <= 150){
    console.log("This steak is medium");
} else if(SteakTemp <= 160){
    console.log("This steak is medium well")
} else if(SteakTemp > 160) {
    console.log("Your steak is well done.");
}




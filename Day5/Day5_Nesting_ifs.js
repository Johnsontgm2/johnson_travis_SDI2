/**
 * Created by spankiticus on 7/16/15.
 */
/*
Travis Johnson
16JULY15
DAy 5 Nesting ifs
 */

//alert("Test");

//Some decisions affect other decisions

//If it is warm outside, lets Go to the beach
//If it is not warm outside lets go to the movies

//Get temperature as variable
var temp = 90;
var WaterTemp = 78;
//test the temperature
//Warm is 80 and above
if(temp >= 80){
    //Code will run if 80 plus
    console.log("Lets go to the beach");
    //Test water is above 75 degrees lets go swimming
    //If not lets get a tan
    if(WaterTemp > 75){
        console.log("Lets go swimming")
    } else{
        console.log("Lets get a tan.")
    }
} else{
    console.log("Lets go see a movie");


    //validate kids prompt
    //expecting yes or no


    }
    //Ask if kids are going with
    var kids = prompt("Are you bringing children please type yes or no ?")

    //If kids are coming to the movies, go see minions
    //If not go see Antman

    if(kids === "yes"){
        console.log("Go see minions")

    } else{
        console.log("Go see Antman")
    }
}



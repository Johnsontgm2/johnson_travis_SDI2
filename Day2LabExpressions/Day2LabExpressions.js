/**
 * Created by spankiticus on 7/11/15.
 */



//Test connection
alert("Testing connection.");

//Declare Input
var slicesPerPizza = 10;
var numberOfPeople = 30;
var numberOfPizzas = 8;

//Process how many pieces per person
var slicesPerPerson = (numberOfPizzas * slicesPerPizza) / numberOfPeople;

//Display number of slices per person
console.log("Each person ate " + slicesPerPerson +" slices of pizza at the party.");
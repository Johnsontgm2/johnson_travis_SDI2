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

//Find how many slices of pizza for sparky
var piecesForSparky = (numberOfPizzas * slicesPerPizza) % numberOfPeople;
console.log("Sparky will have " + piecesForSparky +" slices");



//Declare Input
var groceryBillWeek1 = 100.50;
var groceryBillWeek2 = 93.20;
var groceryBillWeek3 = 26.00;
var groceryBillWeek4 = 75.50;
var groceryBillWeek5 = 23.20;

//Find total amount spent on groceries
var totalAmount = groceryBillWeek1 + groceryBillWeek2 + groceryBillWeek3 + groceryBillWeek4 + groceryBillWeek5;

//Find average spent on groceries
var averageSpending = totalAmount / 5;

//Display total amount spent on groceries
console.log("You have spent a total of " + totalAmount + " on groceries over 5 weeks. That is an average of " + averageSpending +"per week");

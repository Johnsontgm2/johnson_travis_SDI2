/**
 * Created by spankiticus on 7/11/15.
 */
/*Travis Johnson
7/11/2015
Day2LabExpressions
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

//Declare Variables
var originalPrice = 125.99;
var discountPercent = 10;
var discountDecimal = discountPercent / 100;
var itemDescription = "Orlando City Jersey(Long Sleeve)";
var salesTaxPercent = 6;
var taxDecimal = salesTaxPercent / 100;
var calculateTax = originalPrice * taxDecimal;
var calculateDiscount = originalPrice * discountDecimal;

//Find price of item with tax

var itemWithTax = originalPrice + calculateTax;
console.log(itemWithTax);

//price of item with tax with discount

var itemPriceWithDiscount = itemWithTax - calculateDiscount;
console.log(itemPriceWithDiscount);

//price of item without tax with discount

var priceNoTaxWithDiscount = (originalPrice - calculateDiscount);
console.log(priceNoTaxWithDiscount);

//Display results
console.log("Your " + itemDescription + " was originally $" + originalPrice + " after a 10% discount, it is now " + priceNoTaxWithDiscount + " without tax and $" + itemPriceWithDiscount + " with tax");


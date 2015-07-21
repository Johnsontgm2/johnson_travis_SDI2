
 /*
Travis Johnson
07/21/15
Day 7 Beer
 */


//alert("Testing");

 //Create a loop that will write out the lyrics for the 99 bottles of beer song

 //for(initialize; condition; increment of change){}
 for(var i = 99; i > 0; i--){
     //verify that the loop works
     //console.log(i);
     if(i===2) {
         console.log(i + " bottles of beer on the wall. " + i + "  bottles of beer. You take one down and pass it around." + (i - 1) + " bottle of beer on the wall.");
     } else if(i===1){
         console.log(i + " bottle of beer on the wall. " + i + "  bottle of beer. You take one down and pass it around." + (i - 1) + " no more bottles of beer on the wall.");

     } else{
         console.log(i + " bottles of beer on the wall. " + i + "  bottles of beer. You take one down and pass it around." + (i - 1) + " bottles of beer on the wall.");

     }
 }
document.getElementById("clickMe").onclick = calcTip;


 function calcTip(bill, tipPercent, numPeople, taxRate){
    var bill = $("#bill").val();
    var tipPercent = $("#tipPercent").val();
    var numPeople = $("#numPeople").val();
    var taxRate = $("#taxRate").val();

    bill = parseFloat(bill);
    tipPercent = parseFloat(tipPercent);
    numPeople = parseFloat(numPeople);
    taxRate = parseFloat(taxRate);

    if(isNaN(bill) || isNaN(tipPercent) || isNaN(numPeople) || isNaN(taxRate)){
    alert("You did not enter a number. Try again");
    }
    if((bill <0) || (tipPercent < 0) || (numPeople < 0) || (taxRate <0)){
        alert("Please only enter positive values.")
    }
    else{
    var tip= bill * (tipPercent/100);
    var total = tip + bill;
    var splitTotal = total/numPeople;
    var tax = splitTotal * (taxRate/100);
    total = splitTotal + tax;
    
    
    document.getElementById("demo").innerHTML = "The total for each person in the party is: $" +total;
    
    
}
return total;
 }
 

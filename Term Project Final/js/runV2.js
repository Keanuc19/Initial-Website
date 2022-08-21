var  subTotal = 0;
for (var i=0 ; i<prices.length ; i++){
   var total = calcTotal(quantities[i],prices[i]);
   outputCartRow(fileNames[i], titles[i], quantities[i], prices[i], total);
   subTotal += total;
}
var tax =subTotal*0.10;
var shipTotal =0; 

if (subTotal <= 2000){
   shipTotal = 90;
}
var finalTotal = subTotal + tax + shipTotal;

document.write("<tr class ='totals'><td colspan ='4'>Subtotal</td><td>$" + subTotal.toFixed(2) + "</td></tr>");
document.write("<tr class = 'totals'><td colspan = '4'>Tax</td><td>$" + tax.toFixed(2) + "</td></tr>");
document.write("<tr class = 'totals'><td colspan = '4'>Shipping</td><td>$" + shipTotal.toFixed(2) + "</td></tr>");
document.write("<tr class = 'totals focus'><td colspan = '4'>Grand Total</td><td>$" + finalTotal.toFixed(2) + "</td></tr>");
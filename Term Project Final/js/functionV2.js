function calcTotal(quantity, price)
{
    return quantity * price;
}
function outputCartRow(fileNames, title, quantity, price, totals){

    document.write("<tr><td><img src='images/"+ fileNames +"'></td><td>"+ title + "</td><td>"+ quantity +"</td><td>$"+ price.toFixed(2) + "</td>");
}

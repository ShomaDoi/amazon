export function formatCurrency(priceCents) {
   return (Math.round(priceCents) / 100).toFixed(2);
}

export function addTax(totalPrice){
   return totalPrice + totalPrice*10/100;
}
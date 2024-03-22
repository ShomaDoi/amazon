import { cart } from "../../data/cart.js";
import { products } from "../../data/products.js";
import { deliveryOptions } from "../../data/deliveryOptions.js";
import { formatCurrency,addTax } from "../utils/money.js";


export function rednerPaymentSummary() {
    let itemQuantity = 0;
    let totalPrice = 0;
    let shippingPrice = 0;
    let totalAfterTax = 0;
    cart.forEach((cartItem) => {
        itemQuantity += cartItem.quantity;
        console.log(cartItem.quantity);
        console.log(itemQuantity);
        deliveryOptions.forEach((deliveryOption) =>{
            if (cartItem.deliveryOptionId === deliveryOption.id){
                shippingPrice += deliveryOption.priceCents;
            }
        });
        
        products.forEach((product) => {
            if (product.id === cartItem.productId){
                totalPrice += product.priceCents * cartItem.quantity;
            }
        });
    });
    
  
    totalAfterTax = addTax(totalPrice+shippingPrice);
    
    document.querySelector('.js-return-to-home-link').innerHTML=`${itemQuantity}`;

    document.querySelector('.js-payment-summary')
        .innerHTML = `<div class="payment-summary-title">
        Order Summary
      </div>

      <div class="payment-summary-row">
        <div>Items (${itemQuantity}):</div>
        <div class="payment-summary-money">$${formatCurrency(totalPrice)}</div>
      </div>

      <div class="payment-summary-row">
        <div>Shipping &amp; handling:</div>
        <div class="payment-summary-money">$${formatCurrency(shippingPrice)}</div>
      </div>

      <div class="payment-summary-row subtotal-row">
        <div>Total before tax:</div>
        <div class="payment-summary-money">$${formatCurrency(shippingPrice + totalPrice)}</div>
      </div>

      <div class="payment-summary-row">
        <div>Estimated tax (10%):</div>
        <div class="payment-summary-money">$${formatCurrency((totalPrice+shippingPrice)*10/100)}</div>
      </div>

      <div class="payment-summary-row total-row">
        <div>Order total:</div>
        <div class="payment-summary-money">$${formatCurrency(totalAfterTax)}</div>
      </div>

      <button class="place-order-button button-primary">
        Place your order
      </button>`;
}
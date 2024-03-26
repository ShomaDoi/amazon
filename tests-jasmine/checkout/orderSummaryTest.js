import { renderOrderSummary } from '../../scripts/checkout/orderSummary.js'
import { loadFromStorage, cart } from '../../data/cart.js'

describe('Test suite: renderOrderSummary', () => {

    const productId1 = 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6';

    beforeEach(() => {
        spyOn(localStorage, 'setItem');
        document.querySelector('.js-test-container')
            .innerHTML = `<div class="js-order-summary"></div>
            <div class="js-payment-summary"></div><a class=" js-return-to-home-link"
            href="amazon.html"></a>`;
        
        spyOn(localStorage, 'getItem').and.callFake(() => {
            return JSON.stringify([{
                productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
                quantity: 1,
                deliveryOptionId: '1'
            }]);
        });
        
        loadFromStorage();    
        renderOrderSummary();
    });

    it('Displays the cart', () => {
        
        expect(
            document.querySelectorAll('.js-cart-item-container').length).toEqual(1);
  
        expect(  
            document.querySelector(`.js-product-quantity-${productId1}`).innerText
        ).toContain('Quantity: 1');

        document.querySelector('.js-test-container')
        .innerHTML = ``;
    });

    it('Removes a product', () => {

        document.querySelector(`.js-delete-link-${productId1}`).click();

        expect(
            document.querySelectorAll('.js-cart-item-container').length
        ).toEqual(0);

        expect(cart.length).toEqual(0);
        
        document.querySelector('.js-test-container')
        .innerHTML = ``;
    })
});
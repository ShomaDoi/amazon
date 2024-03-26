import { renderOrderSummary } from '../../scripts/checkout/orderSummary.js'
import { loadFromStorage } from '../../data/cart.js'

describe('Test suite: renderOrderSummary', () => {


    it('Displays the cart', () => {
        console.log(document.querySelector('.js-test-container'));
        document.querySelector('.js-test-container')
            .innerHTML = `<div class="js-order-summary"></div>`;

        const productId1 = 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6';
        spyOn(localStorage, 'getItem').and.callFake(() => {
            return JSON.stringify([{
                productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
                quantity: 1,
                deliveryOptionId: '1'
            }]);
        });
        
        loadFromStorage();    
        renderOrderSummary();

        expect(
            document.querySelectorAll('.js-cart-item-container').length).toEqual(1);
  
        expect(  
            document.querySelector(`.js-product-quantity-${productId1}`).innerText
        ).toContain('Quantity: 1');
    });
});
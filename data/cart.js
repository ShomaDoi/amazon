

export let cart;

loadFromStorage();

export function loadFromStorage() {
    cart = JSON.parse(localStorage.getItem('cart'));
    if (!cart) {
        cart = [{
            productId:"e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
            quantity: 2,
            deliveryOptionId: '1'
        }];
    }
}

function saveToStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

export function addToCart(productId) {
    let matchingItem;
  
              cart.forEach((cartItem) => {
                  if(productId=== cartItem.productId){
                      matchingItem = cartItem;
                  }
  
              });
  
              if  (matchingItem){
                  matchingItem.quantity += 1;
              }else{
                  cart.push({
                      productId: productId,
                      quantity: 1,
                      deliveryOptionId: '1'
                  });
              }

              saveToStorage();
  }

export function removeFromCart(productId) {
    
    const newCart = cart.filter(cartItem => cartItem.productId !== productId);
    cart.length = 0;
    newCart.forEach(cartItem => cart.push(cartItem));
    saveToStorage();
   
}

export function updateDeliveryOption(productId, deliveryOptionId) {
    let matchingItem;
  
    cart.forEach((cartItem) => {
        if(productId=== cartItem.productId){
            matchingItem = cartItem;
        }
    });

       
    matchingItem.deliveryOptionId = deliveryOptionId;
    saveToStorage();
}
/* Create an array named products which you will use to add all of your product object literals that you create in the next step. */
const products = [];
let totalPaid = 0; //global variable for tracking the remaining balance
/* Create 3 or more product objects using object literal notation 
   Each product should include five properties
   - name: name of product (string)
   - price: price of product (number)
   - quantity: quantity in cart should start at zero (number)
   - productId: unique id for the product (number)
   - image: picture of product (url string)
*/
const cherry = {
  name: "cherrys",
  price: 1,
  quantity: 0,
  productId: 1,
  image: "../images/cherry.jpg"
}
const orange = {
  name: "oranges",
  price: 1.5,
  quantity: 0,
  productId: 2,
  image: "../images/orange.jpg"
}
const strawberry = {
  name: "cherrys",
  price: 2,
  quantity: 0,
  productId: 3,
  image: "../images/strawberry.jpg"
}

products.push(cherry, orange, strawberry);
/* Images provided in /images folder. All images from Unsplash.com
   - cherry.jpg by Mae Mu
   - orange.jpg by Mae Mu
   - strawberry.jpg by Allec Gomes
*/

/* Declare an empty array named cart to hold the items in the cart */
const cart = [];
/* Create a function named addProductToCart that takes in the product productId as an argument
  - addProductToCart should get the correct product based on the productId
  - addProductToCart should then increase the product's quantity
  - if the product is not already in the cart, add it to the cart
*/
/**
 * @description Adds a product to the cart based on the id 
 * @param {number} id 
 */
function addProductToCart(id){
  const product = findProduct(id);
  product.quantity += 1;
  //checks if the product is in the cart, if not -> adding it 
  if(!cart.some((product)=> product.productId === id)){
    cart.push(product);
  }
}

/**
 * @description Helper function to find a product based on the inserted Id
 * @param {number} id 
 * @returns 
 */
function findProduct(id){
  return products.find(function(product){
    if(product.productId === id){
      return product;
    }
  });
}

/* Create a function named increaseQuantity that takes in the productId as an argument
  - increaseQuantity should get the correct product based on the productId
  - increaseQuantity should then increase the product's quantity
*/
/**
 * Increases the quantity of product based on the id 
 * @param {number} id 
 */
function increaseQuantity(id){
  const product = findProduct(id);
  product.quantity += 1;
}

/* Create a function named decreaseQuantity that takes in the productId as an argument
  - decreaseQuantity should get the correct product based on the productId
  - decreaseQuantity should decrease the quantity of the product
  - if the function decreases the quantity to 0, the product is removed from the cart
*/
/**
 * Decreases the quantity of product based on the id
 * Removes the product from the cart onces the quantity is zero
 * @param {number} id 
 */
function decreaseQuantity(id){
  const product = findProduct(id);
  product.quantity -= 1;
  //removes product from the cart onces the quantity is zero
  if(product.quantity === 0){
    removeProductFromCart(id);
  }
}

/* Create a function named removeProductFromCart that takes in the productId as an argument
  - removeProductFromCart should get the correct product based on the productId
  - removeProductFromCart should update the product quantity to 0
  - removeProductFromCart should remove the product from the cart
*/
/**
 * @descpription Removes the product from the cart based on the Id
 * @param {number} id 
 */
function removeProductFromCart(id){
  const product = findProduct(id);
  product.quantity = 0;

  //finding the index of the product in cart array to delete it afterwords
  const productIndex = cart.findIndex((product) => {
    return product.productId === id;
  });
  cart.splice(productIndex, 1);
}

/* Create a function named cartTotal that has no parameters
  - cartTotal should iterate through the cart to get the total of all products
  - cartTotal should return the sum of the products in the cart
*/ /**
 * 
 * @returns the total amount to pay from the cart
 */
function cartTotal(){
  let sum = 0;
  for(let product of cart){
    sum += product.quantity*product.price;
  }
  return sum;
}

/* Create a function called emptyCart that empties the products from the cart */
/**
 * @description Empties the cart
 */
function emptyCart(){
  cart.length = 0;
}
/* Create a function named pay that takes in an amount as an argument
  - pay will return a negative number if there is a remaining balance
  - pay will return a positive number if money should be returned to customer
*/
/**
 * @description handles the pay process based on the amount which is submitted
 * @param {number} amount 
 * @returns the missing amount to pay or the cashback
 */
function pay(amount){
  totalPaid += amount;
  let balance = totalPaid - cartTotal();
  //resets the totalPaid amount onces everything is paid
  if(totalPaid > cartTotal()){
    totalPaid = 0;
  }
    return balance;
}
/* Place stand out suggestions here (stand out suggestions can be found at the bottom of the project rubric.)*/


/* The following is for running unit tests. 
   To fully complete this project, it is expected that all tests pass.
   Run the following command in terminal to run tests
   npm run test
*/

module.exports = {
   products,
   cart,
   addProductToCart,
   increaseQuantity,
   decreaseQuantity,
   removeProductFromCart,
   cartTotal,
   pay, 
   emptyCart,
   /* Uncomment the following line if completing the currency converter bonus */
   // currency
}

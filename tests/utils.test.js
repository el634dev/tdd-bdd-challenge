const mocha = require("mocha")
const chai = require("chai")
const utils = require("../utils")
const expect = chai.expect

// ========================================================
// NOTE: https://mochajs.org/#arrow-functions
// Passing arrow functions (“lambdas”) to Mocha is discouraged.
// Lambdas lexically bind this and cannot access the Mocha context.
// ========================================================

it("should say hello", function() {
  const hello = utils.sayHello()
  expect(hello).to.be.a("string")
  expect(hello).to.equal("Hello")
  expect(hello).with.lengthOf(5)
})

// ========================================================
// Level 1 Challenges
// 1. Write the pending tests check that they are pending, like this:
//    it("should do something that you want done")
// 2. Next, write the test and see that it fails.
// 3. Write the code in the utils.js file to make the test pass.
// 4. Finally see if you would like to refactor your code at all.
// This is called "Red-Green-Refactor"
// ========================================================
it("should calculate the area", function() {
  const area = utils.area();
  expect(area).to.be.a("number")
})

it("should calculate the perimeter", function() {
  const perimeter = utils.perimeter();
  expect(perimeter).to.be.a("number")
})

it("should calculate the radius", function() {
  const radius = utils.circleArea();
  expect(radius).to.be.a("number")
})

// ========================================================
// Level 2 Challenges
// ========================================================
// NOTE: The following unimplemented test cases are examples
// of "Pending Tests" in Chai. Someone should write these
// tests eventually.
// ========================================================
beforeEach((done) => {
  utils.clearCart()
  done()
})

it("Should create a new (object) Item with name and price", function() {
  const item = utils.createItem("apple", 0.99);

  expect(item).to.be.a("object")
  expect(item).to.have.property("name", "apple")
  expect(item).to.have.property("price", 0.99)
  expect(item).to.have.property("quantity", 1)
})

it("Should return an array containing all items in cart", function() {
  const cart = utils.getShoppingCart();
  expect(cart).to.be.a("array")
})

it("Should add a new item to the shopping cart", function() {
 const newItem = utils.createItem("pears", 1.00);
 utils.addItemToCart(newItem);

 const shoppingCart = utils.getShoppingCart();
 expect(shoppingCart).to.have.lengthOf(1);
 expect(shoppingCart).to.contain(newItem);
})

it("Should return the number of items in the cart", function() {
  const item = utils.getNumItemsInCart();
  expect(item).to.be.a("number")
})

it("Should remove items from cart", function() {
  const cart = utils.removeItemFromCart();
})

// ========================================================
// Stretch Challenges
// ========================================================

it("Should update the count of items in the cart", function() {
  let count = 0;
  count += utils.getNumItemsInCart()

  expect(count).to.be.a("number")
})

it("Should validate that an empty cart has 0 items", function() {
  const cart = utils.getNumItemsInCart();
  
  expect(cart).length.to.be.equal(0, 0)
})

it("Should return the total cost of all items in the cart", function() {
  const newItem1 = utils.createItem("pears", 1);
  const newItem2 = utils.createItem("chips", 1);
  const newItem3 = utils.createItem("sandwich", 2);

  utils.addItemToCart(newItem1)
  utils.addItemToCart(newItem2)
  utils.addItemToCart(newItem3)

  const totalCost = newItem1.price + newItem2.price + newItem3.price
  expect(totalCost).to.be.equal(4)
  expect(totalCost).to.be.a("number")
})

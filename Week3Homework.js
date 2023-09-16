const pizzaToppings = ["Pepperoni", " Bacon", " spinach", " Beef"];

function greetCustomer() {
  console.log("Welcome to Pizza House, our toppings are: ");
  for (let Topping of pizzaToppings) {
    console.log(Topping);
  }
}

function getPizzaOrder(Size, Crust, ...Topping) {
  console.log(`One ${Size} ${Crust} pizza with ${Topping}`);
  return [Size, Crust, Topping];
}

function preparePizza(Size, Crust, Topping) {
  console.log("..Cooking up Pizza..");
  const pizzaOrder = {
    Size: "large",
    Crust: "thick",
    Topping: "something"
  };
  return pizzaOrder;
}
function servePizza(pizzaOrder) {
  console.log(`Your pizza with ${pizzaToppings} is ready!`);
  return pizzaOrder;
}
greetCustomer();
getPizzaOrder("large", "thick", pizzaToppings);
preparePizza(getPizzaOrder[("large", "thick", pizzaToppings)]);
servePizza();

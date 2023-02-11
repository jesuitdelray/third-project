const menuArray = [
  {
    name: "Pizza",
    ingredients: ["pepperoni", "mushrom", "mozarella"],
    price: 14,
    emoji: "🍕",
    id: 0,
  },
  {
    name: "Hamburger",
    ingredients: ["beef", "cheese", "lettuce"],
    price: 12,
    emoji: "🍔",
    id: 1,
  },
  {
    name: "Beer",
    ingredients: ["grain, hops, yeast, water"],
    price: 12,
    emoji: "🍺",
    id: 2,
  },
];

const BtnPizza = document.getElementById("addPizza");
const BtnHamburger = document.getElementById("addHamburger");
const BtnBeer = document.getElementById("addBeer");

const orderList = document.getElementsByClassName("order-list");

const plusPizza = `<div class="order-name">
<h4>${menuArray[0].name}</h4>
<h4>${menuArray[0].price}</h4>
</div>`;

const plusHamburger = `<div class="order-name">
<h4>${menuArray[1].name}</h4>
<h4>${menuArray[1].price}</h4>
</div>`;

const plusBeer = `<div class="order-name">
<h4>${menuArray[2].name}</h4>
<h4>${menuArray[2].price}</h4>
</div>`;

let orderData = ``;

addPizzaBtn.addEventListener("click", function () {
  orderData += plusPizza;
  render();
});

addHamburgerBtn.addEventListener("click", function () {
  orderData += plusHamburger;
  render();
});

addBeerBtn.addEventListener("click", function () {
  orderData += plusBeer;
  render();
});

function render() {
  orderList.innerHTML += orderData;
}

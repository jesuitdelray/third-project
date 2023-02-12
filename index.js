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

const addPizzaBtn = document.getElementById("addPizza");
const addHamburgerBtn = document.getElementById("addHamburger");
const addBeerBtn = document.getElementById("addBeer");

const orderListEL = document.getElementById("orderList");
const orderEl = document.getElementById("order");
const totalEl = document.getElementById("totalPrice");
const orderBtnEl = document.getElementById("orderButton");
const cardDetailsEl = document.getElementById("cardDetails");

const cardName = document.getElementById("cardInputName");
const cardNumber = document.getElementById("cardInputNumber");
const cardCVV = document.getElementById("cardInputCVV");

const payBtn = document.getElementById("payButton");

let cardData = {
  name: "",
  number: 0,
  CVV: 0,
};

let count = {
  pizza: 0,
  hamburger: 0,
  beer: 0,
};

let price = {
  pizza: menuArray[0].price,
  hamburger: menuArray[1].price,
  beer: menuArray[2].price,
};

let totalPizza = 0;
let totalHamburger = 0;
let totalBeer = 0;

let totalPrice = 0;

addPizzaBtn.addEventListener("click", function () {
  count.pizza++;
  totalPizza = count.pizza * price.pizza;
  updateTotal();
  renderOrder();
});

addHamburgerBtn.addEventListener("click", function () {
  count.hamburger++;
  totalHamburger = count.hamburger * price.hamburger;
  updateTotal();
  renderOrder();
});

addBeerBtn.addEventListener("click", function () {
  count.beer++;
  totalBeer = count.beer * price.beer;
  updateTotal();
  renderOrder();
});

document.addEventListener("click", function (e) {
  if (e.target.id !== "orderButton") return;
  cardDetailsEl.style.display = "flex";
});

document.addEventListener("click", function (e) {
  if (e.target.id !== "payButton") return;
  if (
    cardName.value.length > 1 &&
    cardName.value.length < 99 &&
    Number(cardNumber.value) > 1 &&
    Number(cardCVV.value) >= 1 &&
    Number(cardCVV.value) <= 999
  ) {
    cardData.name = cardName.value;
    cardData.number = cardNumber.value;
    cardData.CVV = cardCVV.value;
    console.log(cardData);
    cardDetailsEl.style.display = "none";
    congratulation();
  }
});

function renderOrder() {
  const pizzaHtml = `<div class="order-name">
  <p>${menuArray[0].name}</p>
  <p>${totalPizza}</p>
  </div>`;

  const hamburgerHtml = `<div class="order-name">
  <p>${menuArray[1].name}</p>
  <p>${totalHamburger}</p>
  </div>`;

  const beerHtml = `<div class="order-name">
  <p>${menuArray[2].name}</p>
  <p>${totalBeer}</p>
  </div>`;

  const totalHtml = `<div class="total-price">
  <p>Total price:</p>
  <p>${totalPrice}</p>
  </div>`;

  const completeBtnHtml = `</div>
  <button id="orderButton">Complete order</button></div>`;

  if (totalPrice) {
    orderEl.innerHTML =
      pizzaHtml + hamburgerHtml + beerHtml + totalHtml + completeBtnHtml;
  }
}

function updateTotal() {
  totalPrice = totalPizza + totalHamburger + totalBeer;
}

function congratulation() {
  orderEl.innerHTML = `<p class="congrat">Thank you for your order!</p>`;
  totalPizza = 0;
  totalHamburger = 0;
  totalBeer = 0;

  totalPrice = 0;
}
// let pizzaPrice = menuArray[0].price
// let hamburgerPrice = menuArray[1].price
// let beerPrice = menuArray[2].price

// let plusPizza = `<div class="order-name">
// <p>${menuArray[0].name}</p>
// <p>${pizzaPrice}</p>
// </div>`;

// let plusHamburger = `<div class="order-name">
// <p>${menuArray[1].name}</p>
// <p>${hamburgerPrice}</p>
// </div>`;

// let plusBeer = `<div class="order-name">
// <p>${menuArray[2].name}</p>
// <p>${beerPrice}</p>
// </div>`;

// let orderData = ``;

// addPizzaBtn.addEventListener("click", function () {
//   if(!orderData) {
//   orderData += plusPizza;
//   render()
// } else {
//   plusPizza.filter(function(){
//     'pizza'
//   })
//   render();
// }});

// addHamburgerBtn.addEventListener("click", function () {
//   orderData += plusHamburger;
//   render();
// });

// addBeerBtn.addEventListener("click", function () {
//   orderData += plusBeer;
//   render();
// });

// function render() {
//   orderList.innerHTML += orderData;
// }

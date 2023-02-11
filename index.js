import menuArray from "./data.js";
console.log(menuArray);

const BtnPizza = document.getElementById("addPizza");
const BtnHamburger = document.getElementById("addHamburger");
const BtnBeer = document.getElementById("addBeer");

const orderList = document.getElementsByClassName("order-list");

let orderData = "";

addPizzaBtn.addEventListener("click", function () {
  const plusPizza = (orderList.innerHTML += orderData += plusPizza);
});

addHamburgerBtn.addEventListener("click", function () {});

addBeerBtn.addEventListener("click", function () {});

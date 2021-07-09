let input = document.getElementById("input");
let button = document.getElementById("button");
let shopping_list = document.getElementById("shopping_list");

let shopping_item;

const inputHandler = e => {
  shopping_item = e.target.value;
};

const sumbitHandler = event => {
  let newItem = document.createElement('li');
  let newIcon = document.createElement('img');
  newIcon.src = "./shopping-cart-solid.svg";
  newItem.textContent = shopping_item;
  newItem.prepend(newIcon);

  shopping_list.appendChild(newItem);
  // Reset the input to be empty
  input.value = '';
};

input.addEventListener("change", inputHandler);
button.addEventListener("click", sumbitHandler);
const input = document.getElementById("input");
const button = document.getElementById("button");
const shopping_list = document.getElementById("shopping_list");
const deleteBtns = document.querySelectorAll('.deleteBtn');

let shopping_item;

const inputHandler = e => {
  shopping_item = e.target.value;
};

const sumbitHandler = event => {
  // Shopping list Item
  const newItem = document.createElement('li');
  newItem.textContent = shopping_item;
  // Image Icon
  const newIcon = document.createElement('img');
  newIcon.src = "./shopping-cart-solid.svg";
  // Delete button
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.onclick = (e) => {
    let deleteNode = e.target;
    deleteNode.parentNode.remove(deleteNode);
  };
  // Append to the shopping list
  newItem.prepend(newIcon);
  newItem.append(deleteButton);
  shopping_list.appendChild(newItem);
  // Reset the input to be empty
  input.value = '';
};

input.addEventListener("change", inputHandler);
button.addEventListener("click", sumbitHandler);
deleteBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    let deleteNode = e.target;
    deleteNode.parentNode.remove(deleteNode);
  })
});
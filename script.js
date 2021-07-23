const input = document.getElementById("input");
const button = document.getElementById("button");
const goal_list = document.getElementById("goal_list");
const deleteBtns = document.querySelectorAll('.deleteBtn');

let shopping_item;

const inputHandler = e => {
  shopping_item = e.target.value;
};

const sumbitHandler = event => {
  // Shopping list Item
  const newItem = document.createElement('li');
  newItem.textContent = " " + shopping_item;
  // Add New Icon
  const newIcon = document.createElement('i');
  newIcon.classList.add('fas', 'fa-bullseye');
  // Delete button
  const deleteButton = document.createElement('button');
  deleteButton.classList.add('deleteBtn');
  deleteButton.textContent = 'Delete';
  deleteButton.onclick = (e) => {
    let deleteNode = e.target;
    deleteNode.parentNode.remove(deleteNode);
  };
  // Append to the shopping list
  newItem.prepend(newIcon);
  newItem.append(deleteButton);
  goal_list.appendChild(newItem);
  // Reset the input to be empty
  input.value = '';
};

input.addEventListener("change", inputHandler);
button.addEventListener("click", sumbitHandler);
// Add event listeners for the hard coded buttons
deleteBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    let deleteNode = e.target;
    deleteNode.parentNode.remove(deleteNode);
  })
});
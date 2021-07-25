const myGoalForm = document.getElementById("myForm");
const input = document.getElementById("input");
const goal_list = document.getElementById("goal_list");

let myGoals = [];

// Create a new DOM list
const createNewGoal = (goal) => {
  // Create Goal list Item
  const newItem = document.createElement("li");
  newItem.textContent = " " + goal;
  // Add New Icon
  const newIcon = document.createElement("i");
  newIcon.classList.add("fas", "fa-bullseye");
  // Delete button
  const deleteButton = document.createElement("button");
  deleteButton.classList.add("deleteBtn");
  deleteButton.textContent = "Delete";
  deleteButton.onclick = (e) => {
    let deleteNode = e.target;
    deleteNode.parentNode.remove(deleteNode);
    removeGoal(goal);
  };
  // Append to the Goal list
  newItem.prepend(newIcon);
  newItem.append(deleteButton);
  goal_list.appendChild(newItem);
};

// Populate myGoals to the DOM tree
const populateGoals = () => {
  // If there is no goals in localStorage, add myGoals to localStorage and populate them
  if (!localStorage.getItem("myGoals") || localStorage.getItem('myGoals') === '[]') {
    myGoals = [
      "JavaScript: noob to veteran",
      "React: zero to mastery",
      "Node: beginning to finish",
      "Typescript essentials",
    ];
    localStorage.setItem("myGoals", JSON.stringify(myGoals));
    myGoals.forEach((goal) => {
      createNewGoal(goal);
    });
  } else {
    myGoals = JSON.parse(localStorage.getItem("myGoals"));
    myGoals.forEach((goal) => {
      createNewGoal(goal);
    });
  }
};

const addGoal = (e) => {
  e.preventDefault();
  // Pull out the input value
  const newGoal = input.value;
  myGoals.push(newGoal);
  localStorage.setItem('myGoals', JSON.stringify(myGoals))
  createNewGoal(newGoal);
  input.value = "";
};

const removeGoal = (deletedGoal) => {
  myGoals.forEach((goal, i) => {
    if(goal == deletedGoal) {
      myGoals.splice(i, 1);
      localStorage.setItem('myGoals', JSON.stringify(myGoals));
    }
  });
};

myGoalForm.addEventListener("submit", addGoal);

populateGoals();

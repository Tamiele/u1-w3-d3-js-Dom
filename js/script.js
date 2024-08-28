const form = document.querySelector("form");

form.onsubmit = function (event) {
  event.preventDefault();
};

document.getElementById("bottone").addEventListener("click,", function () {
  const input = document.getElementById("task").value;
});

const ul = document.querySelector("ul");
const itemLi = document.createElement("li");
itemLi.className = "item-li";
ul.appendChild(itemLi);
itemLi.innerText = " ";

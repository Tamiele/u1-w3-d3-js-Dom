const form = document.querySelector("form");

form.onsubmit = function (event) {
  event.preventDefault();
};
const addButton = document.getElementById("task-bottone");

const creatLi = function () {
  const input = document.getElementById("task-input");
  const inputValue = input.value; //creo una const con il valore dell'input
  if (inputValue !== "") {
    const itemLi = document.createElement("li"); //creo la lista
    itemLi.innerText = inputValue; //cosi gli dico che il valore di li è uguale al valore inserito nell'input dall'utente
    itemLi.classList = "item-li"; // do una classe alla li

    const orderList = document.getElementById("ol"); //richiamo la orderlist
    orderList.appendChild(itemLi); //appendo li alla orderlist

    const delButton = document.createElement("button"); //creo un bottone per eliminare le eventuali li create
    itemLi.appendChild(delButton); //appendo il bottone alla li
    delButton.innerText = "delete"; //nome al bottone
    delButton.classList = "del-button";
    delButton.onclick = function (event) {
      //funzione che permette di cliccare sul bottone ed eliminare la li che si crea
      event.currentTarget.parentNode.remove();
    };

    itemLi.onclick = () => {
      itemLi.classList.toggle("lineThrough");
    };
  }
};
addButton.addEventListener("click", creatLi);

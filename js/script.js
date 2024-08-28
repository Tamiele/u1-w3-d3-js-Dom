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
    itemLi.onclick = () => {
      itemLi.classList.toggle("lineThrough"); //creo una classe che vado a richiamare nel css
    };

    const orderList = document.getElementById("ol"); //richiamo la orderlist
    orderList.appendChild(itemLi); //appendo li alla orderlist

    const delButton = document.createElement("button"); //creo un bottone per eliminare le eventuali li create
    itemLi.appendChild(delButton); //appendo il bottone alla li
    delButton.innerText = "Delete"; //nome al bottone
    delButton.classList = "del-button";
    //funzione che permette di cliccare sul bottone ed eliminare la li che si crea
    delButton.onclick = function (event) {
      event.currentTarget.parentNode.remove();
    };
  } else {
    alert("Devi inserire una Task!"); //crea un alert nel web che avvisa l'utente di digitare un testo
    input.focus();
  }
};
addButton.addEventListener("click", creatLi);

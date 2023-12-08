function main() {

  const inputName = document.getElementById("input");
  const addName = document.getElementById("addPlus");
  const myList = document.getElementById("list");
  
  let namesList = [];
  let data = localStorage.getItem("NAMESLIST"); 

  if (data) {
    namesList = JSON.parse(data); 
  }

  addName.addEventListener("click", () => {
    const name = inputName.value;
    if (name) {
      const idPlayer = Date.now();
      appendName(myList, name, idPlayer);
      namesList.push({ name: name, id: idPlayer});
      localStorage.setItem("NAMESLIST", JSON.stringify(namesList));
      inputName.value = "";
    } else {
      alert("Debe ingresar primero el nombre de un participante");
    }
  });

  document.addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      const name = inputName.value;
      if (name) {
        const idPlayer = Date.now();
        appendName(myList, name, idPlayer); 
        namesList.push({ name: name, id: idPlayer }); 
        localStorage.setItem("NAMESLIST", JSON.stringify(namesList)); 
        inputName.value = ""; 
      } else {
        alert("Debe ingresar primero el nombre de un participante");
      }
    }
  });

  myList.addEventListener("click", function (event) {
    const element = event.target; 
    const elementData =  element.attributes.data && element.attributes.data.value; 
    if (elementData === "delete") {
      deleteName(element);
      namesList = namesList.filter(
        (player) => player.id !== parseInt(element.attributes.id.value)
      ); 
    }
    localStorage.setItem("NAMESLIST", JSON.stringify(namesList)); 
  });

  printLocalStorageData(myList, data);
}

main();




function deleteName(element) {
  element.parentNode.parentNode.removeChild(element.parentNode); 
}

function printLocalStorageData(selectHtmlElementList, localStorageData) {
 
  let playersList;

  if (localStorageData) {
    playersList = JSON.parse(localStorageData);
    printList(selectHtmlElementList, playersList);
  }
}

function printList(selectHtmlElementList, list) {
  list.forEach(function (player) {
    appendName(selectHtmlElementList, player.name, player.id);
  });
}

function appendName(selectHtmlElementList, name, id) {
  const element = `<li id="element">
                          <span class="competitor">${name}</span>
                          <i id="${id}" data="delete" class="fas fa-trash-alt "></i>
                      </li>`;
  selectHtmlElementList.insertAdjacentHTML("beforeend", element);
}

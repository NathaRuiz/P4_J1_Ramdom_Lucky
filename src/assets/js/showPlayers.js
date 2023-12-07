function main() {

    const inputName = document.getElementById("input");
    const myList = document.getElementById("list");
    const reset = document.getElementById("btnreset");
    let data = localStorage.getItem("NAMESLIST");
    let namesList = [];
  
    
    if (data) {
      namesList = JSON.parse(data); 
    }
    
    myList.addEventListener("click", function (event) {
      const element = event.target; 
      const elementData = element.attributes.data && element.attributes.data.value; 
      if (elementData === "delete") {
        deleteName(element);
        namesList = namesList.filter( 
          (player) => player.id !== parseInt(element.attributes.id.value)
        ); 
      }
      localStorage.setItem("NAMESLIST", JSON.stringify(namesList));
    });

    reset.addEventListener("click", function (event) {
      localStorage.removeItem("NAMESLIST");
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
        printList(selectHtmlElementList,playersList)
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
    
  

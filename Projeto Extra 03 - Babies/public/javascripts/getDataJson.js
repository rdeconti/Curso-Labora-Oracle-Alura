/**
****************************************************************************
Projeto Labora/Alura/Oracle ONE
Aluna: Rosemeire Deconti
Desafio - Front-End Developer
Data: Dezembro/2020
****************************************************************************
**/

getJson();

/** ------------------------------------------------------------------------ **/
/** Get data from JSON using XMLHttpRequest                                  **/
/** ------------------------------------------------------------------------ **/
function getJson(){

  var xhr = new XMLHttpRequest();

  xhr.open("GET", "http://localhost:3001/bennu");

  xhr.addEventListener("load", function() {

      var baseMessage = document.querySelector("#baseMessage");

      if (xhr.status == 200) {

          baseMessage.classList.add("baseMessage");
          var requestAnswer = xhr.responseText;
          var arrayJson = JSON.parse(requestAnswer);

          arrayJsonLength = arrayJson.data.length;

          for (index = 0; index < arrayJsonLength; index++) {
            createUnorderedList(arrayJson.data[index])
          }

      } else {

          baseMessage.classList.remove("baseMessage");

      }

  });

  xhr.send();

}

/** ---------------------------------------------------------------------- **/
/** Create unordered list with data from Json                              **/
/** ---------------------------------------------------------------------- **/
function createUnorderedList(itemJson){

  var unorderedList = document.querySelector("#productLine");
  var unorderedListItem = generateListItem(itemJson);
  unorderedList.appendChild(unorderedListItem);

}

/** ---------------------------------------------------------------------- **/
/** Create item to unordered list with data from Json                      **/
/** ---------------------------------------------------------------------- **/
function generateListItem(itemJson){

  var itemList = document.createElement("li");
  itemList.classList.add("productLine");

  itemList.appendChild(formatListItem(itemJson.imagem, "productImage"));
  itemList.appendChild(formatListItem(itemJson.titulo, "productHeader"));
  itemList.appendChild(formatListItem(itemJson.descricao, "productParagraph"));

  return itemList;

}

/** ---------------------------------------------------------------------- **/
/** Format list item with data from Json                                   **/
/** ---------------------------------------------------------------------- **/
function formatListItem(data, classId) {

    if (classId == "productImage"){

      var item = document.createElement("IMG");

      var imageSrc = "http://localhost:3001/imagesProducts/" + data;

      item.src = imageSrc;
      item.alt = "Imagem do Bebe";

      item.textContent = data;
      item.classList.add(classId);
      item.classId = classId;


    } else {

      var item = document.createElement("p");

      item.textContent = data;
      item.classList.add(classId);
      item.classId = classId;

    }

    return item;
}

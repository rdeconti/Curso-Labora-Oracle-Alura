/**
****************************************************************************
  Project Labora/Alura/Oracle ONE
  Training Alura: Programming, HTML5, CSS3 e JAVASCRIPT
  Student: Rosemeire Deconti
  Description: Create a page with news
  Challenge: https://github.com/Infoglobo/desafio-front-end
  Date: November/2020
****************************************************************************
**/

var request = new XMLHttpRequest();

request.onreadystatechange = () => {

  if (request.readyState == XMLHttpRequest.DONE) {

    console.log(request.responseText);

    var arrayNewsJson = JSON.parse(request.responseText);
    console.log(arrayNewsJson[0]);

    }
  };

request.open("GET", "https://api.jsonbin.io/b/5faeb9e10f2f494a27e07e7d", true);
request.setRequestHeader("secret-key", "<SECRET_KEY>");
request.send();

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

google.charts.load("current", {packages:['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

  var data = google.visualization.arrayToDataTable([
    ["Editoria", "Ocorre", { role: "style" } ],
    ["Governo", 75, "red"],
    ["Carnaval", 50, "black"],
    ["Esporte", 45, "black"],
    ["Férias", 30, "black"],
    ["Outros", 25, "black"]
  ]);

  var view = new google.visualization.DataView(data);

  view.setColumns([0, 1,
                   { calc: "stringify",
                     sourceColumn: 1,
                     type: "string",
                     role: "annotation" },
                   2]);

  var options = {
    width: 600,
    height: 400,
    bar: {groupWidth: "50%"},
    legend: { position: "none" },
  };

  var chart = new google.visualization.ColumnChart(document.getElementById("chartDrawn"));
  chart.draw(view, options);

}

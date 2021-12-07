
function createTable(){
    var row = document.getElementById("row").value;
    var column = document.getElementById("column").value;
    row = parseInt(row);
    column = parseInt(column);
    var container = document.getElementById("container");
    var table = document.createElement("table");
    table.border = 1;
    for (var i = 0; i < column; i++){
        var tagColumn = document.createElement("td");
        table.appendChild(tagColumn);
        for (var j = 0; j < row; j++){
            var tagRow = document.createElement("tr");
            var textNode = document.createTextNode(i + " - " + j);
            tagRow.appendChild(textNode);
            tagColumn.appendChild(tagRow);
        }
    }
    container.appendChild(table);
    
}
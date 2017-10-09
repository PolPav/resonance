
var array_left = [539,600,653,710];
var array_top = [3,58,112,170];

function addRow() {
    var table = document.getElementById("table");
    var row = document.createElement("tr");
    var count = table.rows[0].cells.length;

    var last_value = array_top.pop();
    var new_value = last_value+57;

        array_top.push(last_value);
        array_top.push(new_value);

    for (var i=0; i<count; i++){
        var td = document.createElement("td");
            table.appendChild(row).appendChild(td).className ="td";
    }
}

function addColumn() {
    var table = document.getElementById("table");
    var add_column = document.getElementById("add-column");
    var count = table.rows.length;
    var tr = document.getElementsByTagName("tr");
    var offsetLeft = add_column.offsetLeft+55;
    var last_value = array_left.pop();
    var new_value = last_value+56;

        array_left.push(last_value);
        array_left.push(new_value);
        add_column.style.left = offsetLeft+"px";

    for (var i=0; i<count; i++){
        var td = document.createElement("td");
        tr[i].appendChild(td).className ="td";
    }
}

function deleteRow_() {
    var table = document.getElementById("table");
    var delete_row = document.getElementById("delete_row");
    var tr = document.getElementsByTagName("tr");
    
    if(table.rows.length > 1){
        table.deleteRow(tr);
    }

    if(table.rows.length == 1){
        delete_row.style.display = "none";
    }
        array_top.pop();
        delete_row.style.display = "none";
}

function deleteColumn_() {
    var table = document.getElementById("table");
    var delete_column = document.getElementById("delete_column");
    var delete_row = document.getElementById("delete_row");
    var add_column = document.getElementById("add-column");
    var count = table.rows.length;
    var tr = document.getElementsByTagName("tr");

    var offsetLeft = add_column.offsetLeft-56;
        add_column.style.left = offsetLeft+"px";

    for (var i=0; i<count; i++){
        if(tr[i].cells.length > 1){
            tr[i].deleteCell(-1);
        }
        
        if(tr[i].cells.length == 1){
            delete_column.style.display = "none";
            delete_row.style.display = "none";
        }
    }
        array_left.pop();
        delete_column.style.display = "none";
}
(function(){
    var div = document.getElementById("wrap");
    var table = document.getElementById("table");
    var delete_row = document.getElementById("delete_row");
    var delete_column = document.getElementById("delete_column");

    var over = function () {
        var elem = event.target;
        if(elem.parentNode != div) {
            var cells_length = elem.parentNode.cells.length;
            var rows_length = elem.parentNode.parentNode.rows.length;

        if(cells_length > 1){
              delete_column.style.display = "inline";
          }

        if(rows_length > 1){
              delete_row.style.display = "inline";
          }

        for (var i = 0; i < cells_length; i++) {
              if (elem.cellIndex == i) {
                  delete_column.style.left = array_left[i] + "px";
              }
          }

        for(var j=0; j<rows_length; j++) {
              if (elem.parentNode.rowIndex == j) {
                  delete_row.style.top = array_top[j] + "px";
              }
          }
      }
  };

    var out = function () {
        var elem = event.target;

        if(elem == table){
            delete_column.style.display = "none";
            delete_row.style.display = "none";
        }
    };

    var overButton = function () {
        var elem = event.target;

        if(elem == delete_column){
            delete_column.style.display = "inline";
        }

        if(elem == delete_row){
            delete_row.style.display = "inline";
        }
    };

    table.addEventListener("mouseover", over, false);
    div.addEventListener("mouseout", out, false);
    div.addEventListener("mouseover", overButton, false);
}());



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

          console.log(cells_length);
          console.log(rows_length);
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

    table.addEventListener("mouseover", over, false);
}());

// function over () {
//     var div = document.getElementById("wrap");
//     var table = document.getElementById("table");
//     var delete_row = document.getElementById("delete_row");
//     var delete_column = document.getElementById("delete_column");
//
//
//     var elem = event.target;
//     if(elem.parentNode != div) {
//         var cells_length = elem.parentNode.cells.length;
//         var rows_length = elem.parentNode.parentNode.rows.length;
//
//         console.log(cells_length);
//         console.log(rows_length);
//         if(cells_length > 1){
//             delete_column.style.display = "inline";
//         }
//
//         if(rows_length > 1){
//             delete_row.style.display = "inline";
//         }
//
//         for (var i = 0; i < cells_length; i++) {
//             if (elem.cellIndex == i) {
//                 delete_column.style.left = array_left[i] + "px";
//             }
//         }
//
//         for(var j=0; j<rows_length; j++) {
//             if (elem.parentNode.rowIndex == j) {
//                 delete_row.style.top = array_top[j] + "px";
//             }
//         }
//     }
// }



function out() {
    var table = document.getElementById("table");
    var delete_row = document.getElementById("delete_row");
    var delete_column = document.getElementById("delete_column");

    var elem = event.target;
    if(elem == table){
        delete_column.style.display = "none";
        delete_row.style.display = "none";
        console.log(elem);
    }
}



































































































































//  function slider() {
//  var image = document.getElementsByTagName("ul");
//  for (var i = 0; i < image.length; i++) {
//       image[i].style.color = "red";

//  }

// }
// slider()
// function del() {
// var parent = document.getElementById("image");
// var children = document.getElementsByTagName("li");
//  parent.removeChild(children[1]);


// }

// function replace() {
// var child = document.createElement("li");
// var text = document.createTextNode("image new");
// child.appendChild(text);
// var parent = document.getElementById("image");
// var children = document.getElementsByTagName("li");
//  parent.replaceChild(child, children[0]);




// function image(imageSrc) {
//     this.imageSrc = imageSrc;

// }
// var imageSlider_counter = 0;
// var imageDataList = new Array();
// var timerId;

// function Ready() {
//     document.getElementById("imageSlider").innerHTML = "<img id='imageSlider-image' src=''/>";
//     timerId = setInterval(function() {
//         document.getElementById('imageSlider-image').src = imageDataList[imageSlider_counter].imageSrc;
//         imageSlider_counter = (imageSlider_counter + 1) % imageDataList.length;

//     }, 3000);
// }




// imageDataList.push(new image("img/slider/biznes-it.jpg"));
// imageDataList.push(new image("img/slider/dezign-interer.jpg"));
// imageDataList.push(new image("img/slider/dezign-it.jpg"));


// function stop() {
//     setTimeout(function() {
//         clearInterval(timerId);
//     });
// }

// function start() {
//     timerId = setInterval(function() {
//         document.getElementById('imageSlider-image').src = imageDataList[imageSlider_counter].imageSrc;
//         imageSlider_counter = (imageSlider_counter + 1) % imageDataList.length;

//     }, 3000);

// }

// function valid() {
//     var cansel1 = document.getElementById("cansel1");
//  var ok1 = document.getElementById("ok1");   
//  var mail = document.getElementById("mail");
//     var reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
//     var prov = reg.test(mail.value);
//      if (prov == true) { 
//          ok1.style.display = "inline";
//         mail.style.borderColor = "green";
//         cancel1.style.display = "none";
//      } else {
//          mail.style.borderColor = "red";
//         ok1.style.display = "none";
//         cancel1.style.display = "inline";
//      } 

// }


// function num_() {
//     var cansel2 = document.getElementById("cansel2");
//     var ok2 = document.getElementById("ok2");
//  var num = document.getElementById("num");
//     var reg = /^[0-9]{9,12}$/;
//     var prov = reg.test(num.value);

//      if (prov == true) { 
//          ok2.style.display = "inline";
//         num.style.borderColor = "green";
//         cancel2.style.display = "none";


//      } else {
//          num.style.borderColor = "red";
//         ok2.style.display = "none";
//         cancel2.style.display = "inline";

//      } 


// }

// function name_() {
//     var cansel3 = document.getElementById("cansel3");
//     var ok3 = document.getElementById("ok3");
//  var name = document.getElementById("name");
//     var reg = /[a-zA-Z]/
//     var prov = reg.test(name.value);

//       if (prov == true) { 
//          ok3.style.display = "inline";
//         name.style.borderColor = "green";
//         cancel3.style.display = "none";

//      } else {
//          name.style.borderColor = "red";
//         ok3.style.display = "none";
//         cancel3.style.display = "inline";
//      } 


// }
// function resize() {
//     var img = document.getElementById("effect2");
//     var img2 = document.getElementById("effect3");
//     var img3 = document.getElementById("effect4");
//     img3.style.display = "inline";
//     var resize3 = 150;
//     img2.style.display = "inline";
//     var resize2 = 220;
//     img.style.display = "inline";
//     var resize = 291;



//     if(img.width<resize && img2.width<resize2 &&img3.width<resize3) {
//         img.width *= 2;
//         img.height *= 2; 
//          img2.width *= 2;
//         img2.height *= 2; 
//         img3.width *= 2;
//         img3.height *= 2;      
//         setTimeout("resize()",50);
//     } else {
//         img.width = 291;
//         img.height = 50; 
//          img2.width = 240;
//         img2.height = 50; 
//         img3.width = 190;
//         img3.height = 50; 


//     }
// }



// function imageResize() {
//     var img = document.getElementById("imageR2");
//     var img2 = document.getElementById("imageR3");
//     var img3 = document.getElementById("imageR4");
//     var resize = 280;
//     img2.style.display = "inline";





//     if(img2.width<=resize) {
//         img.width *= 6.1;
//         img2.width *= 1.2;
//         img2.height *= 1.2; 

//         setTimeout("imageResize()",50); 
// } else {

//       img3.style.display = "inline";
//       img3.width *= 6.1;




//     }

// } 

// function hide() {
//     var img = document.getElementById("effect2");
//     var img2 = document.getElementById("effect3");
//     var img3 = document.getElementById("effect4");
//     img.style.display = "none";
//     img.width = 50;
//     img.height = 50;
//      img2.style.display = "none";
//     img2.width = 50;
//     img2.height = 50;
//      img3.style.display = "none";
//     img3.width = 50;
//     img3.height = 50;



// }

// function hide_2() {
//     var img1 = document.getElementById("imageR3");
//     var img2 = document.getElementById("imageR4");
//     img1.style.display = "none";
//     img1.width = 50;
//     img1.height = 50;
//      img2.style.display = "none";
//     img2.width = 50;
//     img2.height = 50;




// }

















// var reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
// var reg = /[0-9a-z_]+@[0-9a-z_]+\.[a-z]{2,5}/i;


// function prov_adress(obj) {
//     var adr = obj.mail.value;
//     var par = obj.pas.value;
//     var adr_pattern = /[0-9a-z_]+@[0-9a-z_]+\.[a-z]{2,5}/i;
//     var par_pattern = /[0-9a-z]+/i;
//     var prov = adr_pattern.test(adr);
//     var prov1 = par_pattern.test(par);
//     if (prov == true && prov1 == true) { alert("Вы зарегистрированы!");
//      } else { alert("Введенные данные некорректны!"); } }












// var name = document.getElementById("name");
// var num = document.getElementById("num");
//  name.style.backgroundColor = "green";
//  mail.style.backgroundColor = "yellow";
//  num.style.backgroundColor = "red";




// var imageCount = 1;
// var total = 3;

// function slide(x) {
//  var image = document.getElementById("img");
//      imageCount = imageCount + x;
//  if (imageCount > total) {
//      imageCount = 1;
//  }
//  if (imageCount < total) {
//      imageCount = total;
//  }
//  image.src = "img/slider/img"+imageCount+".png";
// }


// function slideA() {
// setInterval(function() {
//  var image = document.getElementById("img");
//  imageCount = imageCount + 1;
//  if (imageCount > total) {
//      imageCount = 1;
//  }
//  if (imageCount < total) {
//      imageCount = total;
//  }
//  image.src = "img/slider/img"+imageCount+".png";

// },3000);

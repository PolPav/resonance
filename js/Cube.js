class Cube{

    constructor(wrap, table){
            this.div = document.querySelector(wrap);
            this.table = document.querySelector(table);
            this.delete_column = document.querySelector("button.wrapper__delete_column");
            this.delete_row = document.querySelector("button.wrapper__delete_row");

        
            this.table.addEventListener("mouseover", this.over, false);
            this.table.addEventListener("mouseleave", this.out, false);
            this.div.addEventListener("mouseover", this.overButton, false);
            this.delete_column.addEventListener("mouseleave", this.outButton, false);
            this.delete_row.addEventListener("mouseleave", this.outButton, false);

        }

    addRow_() {           
            let row = document.createElement("tr");
            let row_length = this.table.rows[0].cells.length;

            for (let i=0; i<row_length; i++){
                let td = document.createElement("td");
                this.table.appendChild(row).appendChild(td).className ="wrapper__td";
                this.table.lastChild.className = "wrapper__tr";
            }
        }

    addColumn_() {         
            let rows_length = this.table.rows.length;
            let tr = document.querySelectorAll("tr.wrapper__tr");

            for (let i=0; i<rows_length ; i++){
                let td = document.createElement("td");
                tr[i].appendChild(td).className ="wrapper__td";
            }
        }

    deleteRow_() {
            let delete_row = document.querySelector("button.wrapper__delete_row");
            let tr = document.querySelectorAll("tr.wrapper__tr");

                if(this.table.rows.length > 1){
                    this.table.deleteRow(tr);
                }

                delete_row.style.display = "none";
    }

    deleteColumn_() {
            let delete_column = document.querySelector("button.wrapper__delete_column");
            let rows_length = this.table.rows.length;
            let tr = document.querySelectorAll("tr.wrapper__tr");

                for (let i=0; i<rows_length; i++){
                    if(tr[i].cells.length > 1){
                        tr[i].deleteCell(-1);
                    }
                }

                delete_column.style.display = "none";
    }

   over() {      
       let tab = document.querySelector("table.wrapper__table");

       let delete_column = document.querySelector("button.wrapper__delete_column");
       let delete_row = document.querySelector("button.wrapper__delete_row");

            let elem = event.target;

                delete_column.style.display = "inline";
                delete_row.style.display = "inline";

                let offsetL = elem.offsetLeft;
                let offsetT = elem.offsetTop;

                delete_column.style.left = offsetL+"px";
                delete_row.style.top = offsetT+"px";
       
       if(tab.rows[0].cells.length == 1){
           delete_column.style.display = "none";
       }

       if(tab.rows.length == 1){
           delete_row.style.display = "none";
       }
   }

   out(e) {       
       let div = document.body.querySelector("div.wrapper");
       let div_left = div.offsetLeft;
       let div_top = div.offsetTop;

       let delete_column = document.querySelector("button.wrapper__delete_column");
       let delete_row = document.querySelector("button.wrapper__delete_row");
       let elem = event.target;
       let x = e.pageX;
       let y = e.pageY;

       let offsetL = delete_column.offsetLeft;
       let offsetT = delete_row.offsetTop;
       let width_table = elem.offsetWidth;
       let height_table = elem.offsetHeight;

           delete_column.style.left = offsetL+"px";
           delete_row.style.top = offsetT+"px";

       if(x > width_table+div_left-2 || y > height_table+div_top-2 ){
           delete_column.style.display = "none";
           delete_row.style.display = "none";
       }
   }

   overButton() {
       let delete_column = document.querySelector("button.wrapper__delete_column");
       let delete_row = document.querySelector("button.wrapper__delete_row");
       let elem = event.target;

            if(elem == delete_column){
                delete_column.style.display = "inline";
                delete_row.style.display = "none";
            }

            if(elem == delete_row){
                delete_row.style.display = "inline";
                delete_column.style.display = "none";
            }
        }

    outButton(){
        let delete_column = document.querySelector("button.wrapper__delete_column");
        let delete_row = document.querySelector("button.wrapper__delete_row");
        delete_column.style.display = "none";
        delete_row.style.display = "none";
    }
}

let cube = new Cube("div.wrapper","table.wrapper__table");




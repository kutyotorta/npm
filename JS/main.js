// Get data from the Server.
function getServerData(url) {
    let fetchOptions={
        method:"GET",
        mode:"cors",
        cache:"no-cache"
    };

    return fetch(url, fetchOptions).then(
        response=>response.json(),
        err=>console.error(err)
    )
    };

   document.querySelector("#getDataBtn").addEventListener("click", function(){
    getServerData("http://localhost:3000/users").then(
        data => fillDataTable(data, "UserTable")
    );  
   })
  
   //Fill table with Server data.

   function fillDataTable(data, tableID){
       let table= document.querySelector('#${tableID}');
       if (!table){
           console.error('Table "${tableID}" is nout found.');
           return;
       }
       let tBody = table.querySelector("tbody");
       for (let row of data){
           console.log(row);
       }
   }
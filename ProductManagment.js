let url = "https://striveschool-api.herokuapp.com/api/product/";
let token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzczZWFiM2ZmMzlkMjAwMTVjMzY0YzciLCJpYXQiOjE3MzU2NjUxOTcsImV4cCI6MTczNjg3NDc5N30.IJgiOr6wp9AJ2JKuUXErw596eziVYcR2ajePocgfODk";

let databaseBox = document.getElementById("databaseBox");
databaseBox.style.display = "none";

let add = document.getElementById("add");
add.addEventListener("click", () => {
  let content = document.getElementById("content");
  content.style.display = "block";
  let title = document.getElementById("title");
  title.innerHTML = "Add a product to your store";
  let databaseBox = document.getElementById("databaseBox");
  databaseBox.style.display = "none";
});

let database = document.getElementById("database");
database.addEventListener("click", () => {
  let content = document.getElementById("content");
  content.style.display = "none";
  let title = document.getElementById("title");
  title.innerHTML = "Database";
  let database = document.getElementById("database");
  database.style.display = "block";
  let databaseBox = document.getElementById("databaseBox");
  databaseBox.style.display = "block";
});

fetch(url, {
  headers: {
    Authorization: token,
  },
})
  .then((dataRow) => dataRow.json())
  .then((dataRefined) => {
    console.log("Database Original in fetch");
    console.log(dataRefined);

    for (let i = 0; i < dataRefined.length; i++) {
      /*       let data = document.createElement("p")
                  data.innerText = dataRefined[i].name
                  databaseBox.appendChild(data) */

      ///////////////////  Cost. Tabella per Database  ///////////////
      let row = document.createElement("div");
      row.className = "row";
      databaseBox.appendChild(row);
      ///////////////////  name  ///////////////
      let nameProduct = document.createElement("div");
      nameProduct.className = "col-3";
      nameProduct.innerText = "name";
      nameProduct.innerHTML = "<p>" + dataRefined[i].name + "</p>";
      row.appendChild(nameProduct);
      ///////////////////  id  ///////////////
      let IDProduct = document.createElement("div");
      IDProduct.className = "col-3";
      IDProduct.innerText = "ID";
      IDProduct.innerHTML = "<p>" + dataRefined[i]._id + "</p>";
      row.appendChild(IDProduct);
      ///////////////////  imag  ///////////////
      let imgProduct = document.createElement("div");
      imgProduct.className = "col-3";
      imgProduct.innerText = "imgg";
      imgProduct.innerHTML =
        '<img class="img-fluid hello" src="' +
        dataRefined[i].imageUrl +
        '" alt="" width="100px" height="100px">';
      row.appendChild(imgProduct);
      ///////////////////  div per btn act button  ///////////////
      let modifyBoxBtn = document.createElement("div");
      modifyBoxBtn.className = "col-3";
      row.appendChild(modifyBoxBtn);
      ///////////////////  btn modify  ///////////////
      let btnModify = document.createElement("div");
      btnModify.innerHTML =
        '<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop"><i class="bi bi-pencil-square"></i>&#160 &#160 Modify</button>';
      modifyBoxBtn.appendChild(btnModify);

      ///////////////////  btn modify OK modal  ///////////////
      /*      let modifyBtn = document.getElementById("modify")
                   modifyBtn.addEventListener('click', () => {
                       let name = document.getElementById("name")
                       let description = document.getElementById("description")
                       let brand = document.getElementById("brand")
                       let price = document.getElementById("price")
                       let imageUrl = document.getElementById("imageUrl")
       
                       fetch(`https://striveschool-api.herokuapp.com/api/product/`, {
                           method: "PUT",
                           headers: {
                             "Authorization": token,
                             "Content-Type": "application/json"
                           },
                           body: JSON.stringify({ 
                             name: name.value,
                             description: description.value,
                      *       brand: brand.value,
                             price: price.value,
                             imageUrl: imageUrl.value
                           })
                         })
                         .then(res => res.json())
                         .then(data => {
                           console.log("Prodotto aggiornato:", data)
                           window.location.reload()
                         })
                         .catch(err => console.log("Errore nell'aggiornamento del prodotto:", err));
                   })  */

      ///////////////////  btn delete  ///////////////
      let btnDelete = document.createElement("div");
      btnDelete.innerHTML =
        '<button type="button" class="btn btn-danger btn-sm"><i class="bi bi-trash3"></i>&#160 &#160 Delete</button>';
      modifyBoxBtn.appendChild(btnDelete);
      btnDelete.addEventListener("click", () => {
        fetch(
          "https://striveschool-api.herokuapp.com/api/product/" +
            dataRefined[i]._id,
          {
            method: "DELETE",
            headers: {
              Authorization: token,
            },
          }
        )
          .then((res) => {
            if (res.ok) {
              console.log("Prodotto eliminato con successo!");
              localStorage.setItem("activeSection", "database");
              window.location.reload(false);
              dataRefined = dataRefined.filter(
                (product) => product._id !== productId
              );
            } else {
              // Gestisci eventuali errori, ad esempio se il prodotto non esiste
              console.log("Errore nell'eliminazione del prodotto:", res.status);
            }
          })
          .catch((err) => console.log("Errore nella richiesta:", err));
      });

      let activeSection = localStorage.getItem("activeSection");

      if (activeSection === "database") {
        // Mostra la sezione "database"
        let content = document.getElementById("content");
        content.style.display = "none";
        let title = document.getElementById("title");
        title.innerHTML = "Database";
        let database = document.getElementById("database");
        database.style.display = "block";
        let databaseBox = document.getElementById("databaseBox");
        databaseBox.style.display = "block";

        // Rimuovi lo stato salvato
        localStorage.removeItem("activeSection");
      } else {
      }

      let splitter = document.createElement("hr");
      databaseBox.appendChild(splitter);
    }
  })
  .catch((err) => console.log("Something when wrong = " + err));



  

